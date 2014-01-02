/****Script for MENU On Canvas****/
/*
 *
 *  FUNCTION NAME : CommitAction 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : send query to RM for Reservation
 *  PARAMETERS    : 
 *
 */

function CommitAction(){
	$(document).on('click', '.icon', function() {
		$(this).addClass('animated bounce');
		var iconId = $(this).attr("id");
		setTimeout(function(){
	        $("#"+iconId).removeClass('animated bounce');
	    },1500);

		clickIcon(this);
		globalFlag = false;		
		checkLCArray=[];
    });
	$(document).on('click', '.connector', function() {
		if(devicesArr.length > 1){
			$(this).addClass('animated bounce');
			var id = $(this).attr("id");
			setTimeout(function(){
				$("#"+id).removeClass('animated bounce');
			},1500);
			globalFlag = true;		
			lineType = $(this).attr('linktype');
			lineName = $(this).attr('model');
			lineSpeed = $(this).attr('speed');
			 
		}
    });


}
/*
 *
 *  FUNCTION NAME : applyAll 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : apply to all devices
 *  PARAMETERS    : 
 *
 */
function applyAll(){

}
/*
 *
 *  FUNCTION NAME : load Active Query
 *  AUTHOR        : James Turingan
 *  DATE          : December 16, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : load action reservation
 *  PARAMETERS    : 
 *
 */
function showActiveTopology(){
	loading('show');
	var url = "http://"+CURRENT_IP+"/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action=activereservation&query=ResourceId="+globalLArId+"&DateTIME="+globalLAdate;
	$.ajax({
        url: url,
        dataType: 'html',
        success: function(data) {
			loading('hide');
			data = $.trim(data);
			getDataFromXML(data);
		}
	});

}

/*
 *
 *  FUNCTION NAME : load Active Query
 *  AUTHOR        : James Turingan
 *  DATE          : December 16, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : load action reservation
 *  PARAMETERS    : 
 *
 */
function loadActiveTableQuery(){
	if(globalLAFlag == false){
		var url = "http://"+CURRENT_IP+"/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action=loadactive&query=userName="+globalUserName;
	}else{
		var url = "http://"+CURRENT_IP+"/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action=showallreservation&userName="+globalUserName;
	}
	loading('show');
	$.ajax({
        url: url,
        dataType: 'html',
		//method: 'POST',
		//proccessData: false,
		//async:false,
        success: function(data) {
			loading('hide');
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('MAINCONFIG'); 
            var row = xmlDoc.getElementsByTagName('DEVICE');
            var html ='',startRes='',endRes='';
			//$('#totalMatchesReserved').html(root[0].getAttribute('total'));
			var btns='';
//			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
//			for(z = 1; z < root[0].getAttribute('pages'); z++){
//				if(z ==1){
//					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
//				}else{
//					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
//				}
//			}
//			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
		//	$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trSelected' sdate='"+row[a].getAttribute('StartReservationTime')+"' edate='"+row[a].getAttribute('EndReservationTime')+"' rId='"+row[a].getAttribute('ResourceId')+"' >";
				html +="<td>"+row[a].getAttribute('ResourceId')+"</td>";
				html +="<td>"+row[a].getAttribute('Status')+"</td>";
				html +="<td>"+row[a].getAttribute('ConfigName')+"</td>";
				html +="<td>"+row[a].getAttribute('StartReservationTime')+"</td>";
				html +="<td>"+row[a].getAttribute('EndReservationTime')+"</td>";
				html +="<td>"+row[a].getAttribute('NumberofDevices')+"</td>";
				html +="<td>"+row[a].getAttribute('Exclusivity')+"</td>";
				html +="<td>"+row[a].getAttribute('UserName')+"</td>";

				html +="</tr>";
			}
			$("#ActiveTable > tbody").empty().append(html);
//			$("#ActiveTable").table("refresh");

			 $('#loadActivePop').trigger('create');
			 $(".trSelected").on("tap",function(){
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
				}else{
 	        		$(this).removeClass('highlight');
				}
			});

        }

	});

}

/*
 *
 *  FUNCTION NAME : loadActive 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : James Turingan 
 *  REVISION DATE : December 16, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : load action reservation
 *  PARAMETERS    : 
 *
 */
function loadActive(){
	setTimeout(function(){
       	$.mobile.changePage($('#loadActivePop'),{
           	transition: "pop"
        });
    },1500);

	loadActiveTableQuery();
}
/*
 *
 *  FUNCTION NAME : clearCanvas 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : clear canvas
 *  PARAMETERS    : 
 *
 */
function clearCanvas(){
	checkLCArray=[];
	devicesArr = [];
	testToolObj = [];
	deviceArr = [];
	rackArr = [];
	slotArr = [];
	moduleArr = [];
	picArr = [];
	portArr = [];
	lineConnected = [];
	devicesArrBC = [];
	deviceArrBC = [];
	rackArrBC = [];
	slotArrBC = [];
	moduleArrBC = [];
	picArrBC = [];
	portArrBC = [];
	lineConnected2 = [];
	globalFlagCommitted = false;
	deviceCtr = 1;
	idsArray = [];
	lineSpeed="";
	lineName="";
	lineType="";
	MainId = "";
	ResourceId = "";
	drawImage();
	createConfigName();
	$("#configDialog").dialog("close");
}
/*
 *
 *  FUNCTION NAME : commitTopology 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : James Turingan 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : commit topology
 *  PARAMETERS    : 
 *
 */
function commitTopology(){
	checkLCArray=[];
	if(ResourceId != "" && ResourceId != undefined && ResourceId != null){
		var myXml = getXmlData();
		sendQueryToRM("Check",rmurl,myXml);
	}else{
		setTimeout(function(){
            $("#committopology").removeClass('animated pulse');
            $.mobile.changePage($('#commitPop'),{
                transition: "pop"
            });
            populateCombo();
        },1500);
	}
}
/*
 *
 *  FUNCTION NAME : createQueryforResevartion 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : create query for reservation
 *  PARAMETERS    : 
 *
 */
function createQueryforResevartion(){
	var startDate = $('#confirm_test').val();
	var startTime = $('#confirm_test1').val();
	var endDate = $('#confirm_test2').val();
	var endTime = $('#confirm_test3').val();
	Interval = $('#interval').val();
	Iteration = $('#iteration').val();
	var timezone = new Date().getTimezoneOffset();
	var mydate = new Date();
	var myDateArr = mydate.toString().split(" ");
	var mytimezone = myDateArr[5];
	var action = "converttoservertime";
	var query = "StartDateTime=" + startDate + "*" + startTime + "$EndDateTime="+endDate+ "*" + endTime + "$TimeZone="+mytimezone; 
	var url = "http://"+CURRENT_IP+"/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdminPy.py";
	$.ajax({
        url: url,
		data: {
			"action":action,
			"query":query,
		},
        dataType: 'html',
		method: 'POST',
		proccessData: false,
		async:false,
        success: function(data) {
			if(data != ""){
				data = $.trim(data);
				var dataArr = data.split("*");
				createConfigName();
				DateTime = dataArr[0];
				ReservationType = dataArr[1];
				Offset = dataArr[2];
				UserName = globalUserName;
				MainConfigurationUserId = userInformation[0].userId; 
				var myXml = getXmlData();
				sendQueryToRM("Check",rmurl,myXml);
				/*$('#confirm_test').val('');
				$('#confirm_test1').val('');
				$('#interval').val(0);
				$('#iteration').val(1);
				$('#confirm_test2').val('');
				$('#confirm_test3').val('');*/
				initDate();
			}
        }
     });
	$("#commitPop").dialog("close");
}
/*
 *
 *  FUNCTION NAME : cancelOfferReservation 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : cancel offer reservation
 *  PARAMETERS    : 
 *
 */
function cancelOfferReservation(){
	if(ResourceOrig != "" && ResourceOrig != undefined && ResourceOrig != null){
		var action = "Cancel";
		var query = "ResourceId="+ResourceOrig;
		var url = "http://"+CURRENT_IP+rmurl;
		$.ajax({
    	    url: url,
			data: {
				"action":action,
				"query":query,
			},
			method: 'GET',
			proccessData: false,
			async:false,
        	dataType: 'html',
	        success: function(data) {
				if(data == "1" || data == 1){
				}
			}
		});
	}
}
/*
 *
 *  FUNCTION NAME : cancelReservation 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : cancel reservation
 *  PARAMETERS    : 
 *
 */
function cancelReservation(){
	checkLCArray=[];
	$("#commitPop").dialog("close");
	if(ResourceId != "" && ResourceId != undefined && ResourceId != null){
		var action = "Cancel";
		var query = "ResourceId="+ResourceId;
		var url = "http://"+CURRENT_IP+rmurl;
		$.ajax({
    	    url: url,
			data: {
				"action":action,
				"query":query,
			},
			method: 'GET',
			proccessData: false,
			async:false,
        	dataType: 'html',
	        success: function(data) {
				data = $.trim(data);
				if(data == "1" || data == 1){
					$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
					$("#OkPopUpInfo").html("Process Completed");
					okPopupFunc();	
					ResourceId = "";
					MainId = "";
					createConfigName();
					devicesArr = [];
					deviceArr = [];
					rackArr = [];
					slotArr = [];
					moduleArr = [];
					picArr = [];
					portArr = [];
					lineConnected = [];
					globalFlagCommitted = true;
					setValuesFromDragAndDrop();
					globalFlagCommitted = false;
					for(var t=0; t<lineConnected.length; t++){
						var source = lineConnected[t].SourceDevice;	
						var dest = lineConnected[t].DestinationDevice;	
						var sourceDevice=getDevices(source);
						var destDevice=getDevices(dest);
						lineConnected[t].SourceDevice = sourceDevice;
						lineConnected[t].DestinationDevice = destDevice;
					}
					drawImage();
				}else if(data == "" ){
					$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
					$("#OkPopUpInfo").html("Cancel Failed.");
					okPopupFunc();	
				}else if(data == "-1" || data == -1){
					$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
					$("#OkPopUpInfo").html("DPS is down.");
					okPopupFunc();	
				}else if(data == "databasetimeout"){
					$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
					$("#OkPopUpInfo").html("Cannot continue the process.\n Unable to connect to the database");
					okPopupFunc();	
				}
        	}
     	});
	}

}
/*
 *
 *  FUNCTION NAME : getDevices 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get device
 *  PARAMETERS    : device
 *
 */
function getDevices(device){
	var object = device;
	for(var t=0; t<devicesArr.length; t++){
		if(devicesArr[t].ObjectPath == object.ObjectPath){
			object = devicesArr[t];
			break;
		}
	}
	return object;
}
/*
 *
 *  FUNCTION NAME : sendQueryToRM 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : cancel reservation
 *  PARAMETERS    : 
 *
 */
function sendQueryToRM(action,url,query){
	var url = "http://"+CURRENT_IP+url;
	$.ajax({
        url: url,
		data: {
			"action":action,
			"query":query,
		},
        dataType: 'html',
		method: 'POST',
		proccessData: false,
		async:false,
        success: function(data) {
			if(data != ""){
				var parser = new DOMParser();
			    var xmlDoc = parser.parseFromString( data , "text/xml" );
			    var mConfig = xmlDoc.getElementsByTagName('MAINCONFIG');
				if(mConfig.length){
					var redflag = mConfig[0].getAttribute("RedFlag");
					var redflag2 = mConfig[0].getAttribute("RedFlag2");
					deviceArr = [];
					rackArr = [];
					slotArr = [];
					moduleArr = [];
					picArr = [];
					portArr = [];
					lineConnected = [];
					globalFlagCommitted = true;
					getDataFromXML(data);
					globalFlagCommitted = false;
					if(redflag != "" && redflag != undefined && redflag != null){
						/*ok*/
						$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
						$("#OkPopUpInfo").html(redflag);
						okPopupFunc();	
					}else if(redflag2 != "" && redflag2 != undefined && redflag2 != null){
					/*yes no*/	
						var msg2 = redflag2.split("`");
						var message = msg2[0].split("^").join("\n");
						$("#YesNoPopUpHeader").html("<center><h4>Notification</h4></center>");
                        $("#YesNoPopUpInfo").html(message);
                        yesNoPopupFunc();
					}else{
						$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
						$("#OkPopUpInfo").html("Process Completed");
						okPopupFunc();	
					}
				}else if(data == "databasetimeout"){
					$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
					$("#OkPopUpInfo").html("Cannot continue the process.\n Unable to connect to the database");
					okPopupFunc();	
				}else if(data == "fail"){
					$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
					$("#OkPopUpInfo").html("Reservation Failed");
					okPopupFunc();	
				}
        	}else{
				$("#OkPopUpHeader").html("<center><h4>Notification</h4></center>");
				$("#OkPopUpInfo").html("Reservation Failed");
				okPopupFunc();	
			}
		}
     });
}
/*
 *
 *  FUNCTION NAME : createConfigName 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : create config name
 *  PARAMETERS    : 
 *
 */
function createConfigName(){
	var date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getMilliseconds();
    Name = "config_" + year + "-" + month + "-"+ day + "-" + hour + "-" + min + "-" + sec + ".dyn";
}
