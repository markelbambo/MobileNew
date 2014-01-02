/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadReserve
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 5,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 1
 *  #  DESCRIPTION   : load reservation reserve table
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */
function loadReserve(){
	var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=ReservationReserve&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`start=`status=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
		
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesReserved').html(root[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trReserved' rIds='"+row[a].getAttribute('ResourceId')+"' uId='"+row[a].getAttribute('DeviceReservationUserId')+"' rId='"+row[a].getAttribute('ResourceId')+ row[a].getAttribute('DeviceReservationUserId')+"'>";
				html += "<td>"+row[a].getAttribute('HostName')+"</td>";
				var startRes = row[a].getAttribute('StartReservation').split(" ");
				html += "<td>"+startRes[0]+"</td>";
				html += "<td>"+startRes[1]+"</td>";
                html += "<td>"+row[a].getAttribute('DeviceReservationUserId')+"</td>";
				html += "<td>"+row[a].getAttribute('ReservedFrom')+"</td>";
				html += "<td>"+row[a].getAttribute('TimeInterval')+"</td>";
                html += "<td>"+row[a].getAttribute('Recurrence')+"</td>";
				html += "<td>"+row[a].getAttribute('IterNumber')+"</td>";
				var endRes = row[a].getAttribute('EndReservation').split(" ");
				html += "<td>"+endRes[0]+"</td>";
				html += "<td>"+endRes[1]+"</td>";
                html += "<td>"+row[a].getAttribute('Status')+"</td>";
				html +="</tr>";
				
			}
			$("#reservationRM-table > tbody").empty().append(html);
			$("#reservationRM-table").table("refresh");
			globalPageRM = "ReservationReserve";
			$('#resourceManagementPage').trigger('create');
			var ctr;
			ctr = 0;	
			$(".trReserved").on("tap",function(){
				globalResourceId = [];
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
				   	$('#ReserveButtons').show();
					var val = $(this).attr('rId');
					groupHighlight(val);	
					ctr++;
				}else{
 	        		$(this).removeClass('highlight');
					var val = $(this).attr('rId');
					groupRemoveHighlight(val);	
					ctr--;	
				}
				console.log(ctr);
				if(ctr == 0){
					$('#ReserveButtons').hide();
				}		
			});
		}
	});
	
}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadReserveRelease
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 17,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 1
 *  #  DESCRIPTION   : loads the table of selected reservation to be release
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */

function loadReserveRelease(){
		
	var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=getseldev&query=limit=10`page=1`resourceid='+globalResourceId;
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesReservedRelease').html(root[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trReservedRelease' rId='"+row[a].getAttribute('ResourceId')+ row[a].getAttribute('DeviceReservationUserId')+"'>";
				html += "<td>"+row[a].getAttribute('HostName')+"</td>";
				var startRes = row[a].getAttribute('StartReservation').split(" ");
				html += "<td>"+startRes[0]+"</td>";
				html += "<td>"+startRes[1]+"</td>";
                html += "<td>"+row[a].getAttribute('User')+"</td>";
				html += "<td>"+row[a].getAttribute('ReservedFrom')+"</td>";
				html += "<td>"+row[a].getAttribute('TimeInterval')+"</td>";
                html += "<td>"+row[a].getAttribute('Recurrence')+"</td>";
				html += "<td>"+row[a].getAttribute('IterNumber')+"</td>";
				var endRes = row[a].getAttribute('EndReservation').split(" ");
				html += "<td>"+endRes[0]+"</td>";
				html += "<td>"+endRes[1]+"</td>";
                html += "<td>"+row[a].getAttribute('Status')+"</td>";
				html +="</tr>";
				
			}
			$("#RMReleaseDevice-table > tbody").empty().append(html);
			$("#RMReleaseDevice-table").table("refresh");

			 $('#ReleaseDevice').trigger('create');
			 $(".trReservedRelease").on("tap",function(){
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
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadConnectivity
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 5,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 
 *  #  DESCRIPTION   : load reservation connevtivity table
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */
function loadConnectivity(){
		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=ReservationConnectivity&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`start=`status=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
		
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesConnectivity').html(root[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trConnectivity' pId='"+row[a].getAttribute('PortReservationId')+"' >";
				html += "<td>"+row[a].getAttribute('QueueTime')+"</td>";
		        html += "<td>"+row[a].getAttribute('Device1HostName')+"</td>";
				html += "<td>"+row[a].getAttribute('Device2Description')+"</td>";
				if(row[a].getAttribute('Slot1Number') == undefined || row[a].getAttribute('Slot1Number') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('Slot1Number')+"</td>";
			  	}	
				if(row[a].getAttribute('Module1Number') == undefined || row[a].getAttribute('Module1Number') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('Module1Number')+"</td>";
			  	}
				if(row[a].getAttribute('Port1Number') == undefined || row[a].getAttribute('Port1Number') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('Port1Number')+"</td>";
			  	}
				if(row[a].getAttribute('SwitchPort1Number') == undefined || row[a].getAttribute('SwitchPort1Number') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('SwitchPort1Number')+"</td>";
			  	}
				if(row[a].getAttribute('SwitchSlot1Name') == undefined || row[a].getAttribute('SwitchSlot1Name') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('SwitchSlot1Name')+"</td>";
			  	}
				html += "<td>"+row[a].getAttribute('SwitchHostName')+"</td>";
				html += "<td>"+row[a].getAttribute('SwitchDescription')+"</td>";
				if(row[a].getAttribute('SwitchSlot2Name') == undefined || row[a].getAttribute('SwitchSlot2Name') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('SwitchSlot2Name')+"</td>";
			  	}
				html += "<td>"+row[a].getAttribute('SwitchPort2Number')+"</td>";
				if(row[a].getAttribute('Port2Number') == undefined || row[a].getAttribute('Port2Number') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('Port2Number')+"</td>";
			  	}
				if(row[a].getAttribute('Module2Number') == undefined || row[a].getAttribute('Module2Number') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('Module2Number')+"</td>";
			  	}
				html += "<td>"+row[a].getAttribute('Slot2Number')+"</td>";
				html += "<td>"+row[a].getAttribute('Device2HostName')+"</td>";
				html += "<td>"+row[a].getAttribute('Device2Description')+"</td>";
				html += "<td>"+row[a].getAttribute('User')+"</td>";
				html += "<td>"+row[a].getAttribute('StartReservation')+"</td>";
				html += "<td>"+row[a].getAttribute('EndReservation')+"</td>";
                html += "<td>"+row[a].getAttribute('Status')+"</td>";
                html += "<td>"+row[a].getAttribute('ConnectivityStatus')+"</td>";
				html +="</tr>";
				
			}
			$("#RMConnectivity-table > tbody").append(html);
			$("#RMConnectivity-table").table("refresh");
			
			globalPageRM = "ReservationConnectivity";
				
			var ctr;
			ctr = 0;
			
			$('#RMConnectivity').trigger('create');
			 $(".trConnectivity").on("tap",function(){
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
				   	$('#ConnectivityButtons').show();
					ctr++;
				}else{
 	        		$(this).removeClass('highlight');
					$('#ConnectivityButtons').hide();
					ctr--;
				}
				selectedRow();
			});

		}
	});
}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadPort
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 5,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : December 10,2013
 *  #  REVISION #    : 3
 *  #  DESCRIPTION   : load reservation port table
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */

function loadPort(){
		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=ReservationPort&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`start=`status=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
		
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesPort').html(root[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trPort' rpId='"+row[a].getAttribute('ReservedPortId')+"'>";
				html += "<td>"+row[a].getAttribute('DeviceId')+"</td>";
		        html += "<td>"+row[a].getAttribute('ResvReqTime')+"</td>";
		        html += "<td>"+row[a].getAttribute('HostName')+"</td>";
				html += "<td>"+row[a].getAttribute('ManagementIp')+"</td>";
				html += "<td>"+row[a].getAttribute('Model')+"</td>";
                html += "<td>"+row[a].getAttribute('PortName')+"</td>";
				html += "<td>"+row[a].getAttribute('StartReservation')+"</td>";
				html += "<td>"+row[a].getAttribute('EndReservation')+"</td>";	
				html += "<td>"+row[a].getAttribute('User')+"</td>";
				html += "<td>"+row[a].getAttribute('ReservationState')+"</td>";
				html += "<td>"+row[a].getAttribute('Exclusivity')+"</td>";
				if(row[a].getAttribute('PhysicalPortType') == undefined || row[a].getAttribute('PhysicalPortType') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('PhysicalPortType')+"</td>";
			  	}
				if(row[a].getAttribute('PortSpeed') == undefined || row[a].getAttribute('PortSpeed') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('PortSpeed')+"</td>";
			  	}
				if(row[a].getAttribute('Bandwidth') == undefined || row[a].getAttribute('Bandwidth') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('Bandwidth')+"</td>";
			  	}
				if(row[a].getAttribute('LineType') == undefined || row[a].getAttribute('LineType') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('LineType')+"</td>";
			  	}
				html +="</tr>";
				
			}
			$("#RMPort-table > tbody").append(html);
			$("#RMPort-table").table("refresh");
			
			globalPageRM = "ReservationPort";
			$('#RMPort').trigger('create');
			var ctr;
			ctr = 0;
			 $(".trPort").on("tap",function(){
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
					$('#PortButtons').show();
					ctr++;
				}else{
 	        		$(this).removeClass('highlight');
					ctr--;
				}
				selectedRow();
				if(ctr == 0){
					$('#PortButtons').hide();
				}
			});


		}
	});
}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadHistory
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 5,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : December 10,2013
 *  #  REVISION #    : 3
 *  #  DESCRIPTION   : load reservation history table
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */

function loadHistory(){
		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=ReservationHistory&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`start=`status=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
		
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesHistory').html(root[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trHistory' dhId='"+row[a].getAttribute('DeviceHistoryId')+"'>";
				html += "<td>"+row[a].getAttribute('DeviceId')+"</td>";
		        html += "<td>"+row[a].getAttribute('Timestamp')+"</td>";
		        html += "<td>"+row[a].getAttribute('HostName')+"</td>";
		        html += "<td>"+row[a].getAttribute('ManagementIp')+"</td>";
				html += "<td>"+row[a].getAttribute('Manufacturer')+"</td>";
				html += "<td>"+row[a].getAttribute('Model')+"</td>";
                html += "<td>"+row[a].getAttribute('User')+"</td>";
				html += "<td>"+row[a].getAttribute('StartReservation')+"</td>";
				html += "<td>"+row[a].getAttribute('TimeInterval')+"</td>";	
				html += "<td>"+row[a].getAttribute('Recurrence')+"</td>";
				html += "<td>"+row[a].getAttribute('IterNumber')+"</td>";
				html += "<td>"+row[a].getAttribute('EndReservation')+"</td>";
				html += "<td>"+row[a].getAttribute('Events')+"</td>";
				html +="</tr>";
				
			}
			$("#RMHistory-table > tbody").append(html);
			$("#RMHistory-table").table("refresh");
			var ctr;
			ctr = 0;
			$('#RMHistory').trigger('create');
			 $(".trHistory").on("tap",function(){
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
					$('#RHistoryButtons').show();
					ctr++;
				}else{
 	        		$(this).removeClass('highlight');
					ctr--;
				}
				selectedRow();
				if(ctr == 0){
					$('#RHistoryButtons').hide();
				}
			});


		}
	});
}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadDevices
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 5,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : December 10,2013 
 *  #  REVISION #    : 3
 *  #  DESCRIPTION   : load reservation devices table
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */

function loadDevices(){
		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=ReservationDevice&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`start=`status=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
		
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesDevices').html(root[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trDevices'>";
				html += "<td>"+row[a].getAttribute('DeviceId')+"</td>";
		        html += "<td>"+row[a].getAttribute('HostName')+"</td>";
				if(row[a].getAttribute('ManagementIP') == undefined || row[a].getAttribute('ManagementIP') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('ManagementIP')+"</td>";
			  	}
				if(row[a].getAttribute('ConsoleIP') == undefined || row[a].getAttribute('ConsoleIP') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('ConsoleIP')+"</td>";
			  	}	
				html += "<td>"+row[a].getAttribute('Manufacturer')+"</td>";
				html += "<td>"+row[a].getAttribute('Model')+"</td>";
                html += "<td>"+row[a].getAttribute('AvailablePorts')+"</td>";
				html += "<td>"+row[a].getAttribute('DomainName')+"</td>";
				html += "<td>"+row[a].getAttribute('ZoneName')+"</td>";	
				html += "<td>"+row[a].getAttribute('GroupName')+"</td>";
				if(row[a].getAttribute('StartReservation') == undefined || row[a].getAttribute('StartReservation') ==""){
					html+="<td></td>";
				}else{
					html += "<td>"+row[a].getAttribute('StartReservation')+"</td>";
			  	}
				if(row[a].getAttribute('StartReservation') == undefined || row[a].getAttribute('StartReservation') ==""){
					html+="<td></td>";
				}else{
					html += "<td>"+row[a].getAttribute('StartReservation')+"</td>";
			  	}
				if(row[a].getAttribute('ReservationDeviceInterval') == undefined || row[a].getAttribute('ReservationDeviceInterval') ==""){
					html+="<td></td>";
				}else{
					html += "<td>"+row[a].getAttribute('ReservationDeviceInterval')+"</td>";
			  	}
				if(row[a].getAttribute('ReservationDeviceIteration') == undefined || row[a].getAttribute('ReservationDeviceIteration') ==""){
					html+="<td></td>";
				}else{
					html += "<td>"+row[a].getAttribute('ReservationDeviceIteration')+"</td>";
			  	}
				if(row[a].getAttribute('Type') == undefined || row[a].getAttribute('Type') ==""){
					html+="<td></td>";
				}else{
					html += "<td>"+row[a].getAttribute('Type')+"</td>";
			  	}
				if(row[a].getAttribute('EndReservation') == undefined || row[a].getAttribute('EndReservation') ==""){
					html+="<td></td>";
				}else{
					html += "<td>"+row[a].getAttribute('EndReservation')+"</td>";
			  	}
				if(row[a].getAttribute('EndReservation') == undefined || row[a].getAttribute('EndReservation') ==""){
					html+="<td></td>";
				}else{
					html += "<td>"+row[a].getAttribute('EndReservation')+"</td>";
			  	}
				html +="</tr>";
				
			}
			$("#RMDevices-table > tbody").append(html);
			$("#RMDevices-table").table("refresh");

			var ctr;
			ctr = 0;
			$('#RMDevices').trigger('create');
			 $(".trDevices").on("tap",function(){
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
					$('#DevicesButtons').show();
					ctr++;
				}else{
 	        		$(this).removeClass('highlight');
					$('#DevicesButtons').hide();
					ctr--;
				}
			});
		}
	});
}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadEventScheduler
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 5,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : December 10,2013 
 *  #  REVISION #    : 3
 *  #  DESCRIPTION   : load event scheuler table
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */

function loadEventSched(){
		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=EventScheduler&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
		
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesSchedEve').html(root[0].getAttribute('total'));
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
		//			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
		//			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			//btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
		//	$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trSchedEve' erId='"+row[a].getAttribute('EventId')+"'>";
				html += "<td>"+row[a].getAttribute('timeStamp')+"</td>";
		        html += "<td>"+row[a].getAttribute('EventId')+"</td>";
		        html += "<td><a sId='"+row[a].getAttribute('Status')+"' mId='"+row[a].getAttribute('MainId')+"' eId='"+row[a].getAttribute('EventId')+"' style='text-decoration:none; color:#000000;' class='sched' href='RMHistoryScheduler2.html'>"+row[a].getAttribute('Name')+"</a></td>";
		        html += "<td>"+row[a].getAttribute('UserId')+"</td>";
				html += "<td>"+row[a].getAttribute('User')+"</td>";
				html += "<td>"+row[a].getAttribute('StartTime')+"</td>";
                html += "<td>"+row[a].getAttribute('EndTime')+"</td>";
				html += "<td>"+row[a].getAttribute('NoofDevice')+"</td>";
				html += "<td>"+row[a].getAttribute('Event')+"</td>";	
				html += "<td>"+row[a].getAttribute('Status')+"</td>";
				html += "<td>"+row[a].getAttribute('RtmId')+"</td>";
				html +="</tr>";
				
			}
			$("#RMEventSched-table > tbody").append(html);
			$("#RMEventSched-table").table("refresh");
			var ctr;
			ctr = 0;
			 $(".trSchedEve").on("tap",function(){
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
					$('#EventButtons').show();
					ctr++;
				}else{
 	        		$(this).removeClass('highlight');
					ctr--;
				}
				selectedRow();
				if(ctr == 0){
					$('#EventButtons').hide();
				}
			});
		}
	});
}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadHistorySched
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 5,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 
 *  #  DESCRIPTION   : load scheduler history table
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */

function loadHistorySched(){
		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=HistoryScheduler&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`start=`status=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
		
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesSchedHist').html(root[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trSchedHist'>";
				html += "<td>"+row[a].getAttribute('timeStamp')+"</td>";
		        html += "<td>"+row[a].getAttribute('EventId')+"</td>";
		        html += "<td><a configname='"+row[a].getAttribute('ConfigName')+"' sId='"+row[a].getAttribute('Status')+"' mId='"+row[a].getAttribute('MainId')+"' eId='"+row[a].getAttribute('EventId')+"' style='text-decoration:none; color:#000000;' class='sched' href='RMHistoryScheduler2.html'>"+row[a].getAttribute('ConfigName')+"</a></td>";
		        html += "<td>"+row[a].getAttribute('EventDescription')+"</td>";
				html += "<td>"+row[a].getAttribute('User')+"</td>";
				html += "<td>"+row[a].getAttribute('StartTime')+"</td>";
                html += "<td>"+row[a].getAttribute('EndTime')+"</td>";
				html += "<td>"+row[a].getAttribute('Status')+"</td>";
				html += "<td>"+row[a].getAttribute('RtmId')+"</td>";
				html +="</tr>";
				
			}
			$("#RMHistorySched-table > tbody").append(html);
			$("#RMHistorySched-table").table("refresh");
			$('#RMHistorySched').trigger('create');

			 $(".trSchedHist").on("tap",function(){
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
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadManageDevice
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 5,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 
 *  #  DESCRIPTION   : load manage device table
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */

function loadManageDevice(){
		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=ManageDevice&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`start=`status=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
		
	$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var root = xmlDoc.getElementsByTagName('root'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesManageDevice').html(root[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < root[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
            for(var a =0; a< row.length; a++){
				html += "<tr class='trManDev' devId='"+row[a].getAttribute('DeviceId')+"'>";
				html += "<td>"+row[a].getAttribute('DeviceId')+"</td>";
		        html += "<td>"+row[a].getAttribute('DateAdded')+"</td>";
		        html += "<td>"+row[a].getAttribute('HostName')+"</td>";
		        html += "<td>"+row[a].getAttribute('ZoneName')+"</td>";
				html += "<td>"+row[a].getAttribute('DomainName')+"</td>";
				html += "<td>"+row[a].getAttribute('GroupName')+"</td>";
				if(row[a].getAttribute('ManagementIp') == undefined || row[a].getAttribute('ManagementIp') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('ManagementIp')+"</td>";
			  	}	
				html += "<td>"+row[a].getAttribute('ManagementInterface')+"</td>";
				html += "<td>"+row[a].getAttribute('ConsoleIp')+"</td>";	
				html += "<td>"+row[a].getAttribute('Manufacturer')+"</td>";
				html += "<td>"+row[a].getAttribute('Model')+"</td>";
				if(row[a].getAttribute('SerialNumber') == undefined || row[a].getAttribute('SerialNumber') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('SerialNumber')+"</td>";
			  	}
				html += "<td>"+row[a].getAttribute('Connectivity')+"</td>";
				if(row[a].getAttribute('TechnicalSupport') == undefined || row[a].getAttribute('TechnicalSupport') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('TechnicalSupport')+"</td>";
			  	}
				if(row[a].getAttribute('Discovery') == undefined || row[a].getAttribute('Discovery') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('Discovery')+"</td>";
			  	}
				if(row[a].getAttribute('CPUSpeed') == undefined || row[a].getAttribute('CPUSpeed') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('CPUSpeed')+"</td>";
			  	}
				html +="</tr>";
				
			}
			$("#RMManageDevice-table > tbody").append(html);
			$("#RMManageDevice-table").table("refresh");
			var ctr;
			ctr = 0;		
			globalPageRM = "ManageDevice";
				$(".trManDev").on("tap",function(){
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
					$('#ManageButtons').show();
					ctr++;	
				}else{
 	        		$(this).removeClass('highlight');
					ctr--;
				}
				selectedRow();
				if(ctr == 0){
					$('#ManageButtons').hide();
				}
			});

		}
	});
}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : loadHistoryScheduler2
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 10,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 
 *  #  DESCRIPTION   : load history scheduler table for connectivity and device logs
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */

function loadHistoryScheduler2(){
//		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=HistoryScheduler&query=limit=10`page=1`sort=`orderby=`user='+globalUserName+'`filter=`domain=`start=`status=`timezone='+timezone[0]+timezone[1]+timezone[2]+'^'+timezone[3];
//var cgiurl = 'https://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=geteventinfo&query=eventid='+eventid+"`status="+statsstats+"`mainid="+devdev1;
	
		var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=geteventdevices&query=limit=10`page=1`mainid='+devdev1+'`status='+statsstats+'`eventid='+eventid1;
		
		$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var data = xmlDoc.getElementsByTagName('data'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			$('#totalMatchesSchedHist2').html(data[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
			for(z = 1; z < data[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
	
			
            for(var a =0; a < row.length; a++){
				html += "<tr class='trSchedHist2'>";
				html += "<td>"+row[a].getAttribute('DeviceId')+"</td>";
				
		        html += "<td id='RMDeviceLogs'><a href='RMDeviceLogs.html' class='showLogs' deviceId='"+row[a].getAttribute('DeviceId')+"' hostname='"+row[a].getAttribute('HostName')+"' data-rel='dialog' style='text-decoration:none; color:#000000;'>"+row[a].getAttribute('HostName')+"</a></td>";
				if(row[a].getAttribute('ManagementIP') == undefined || row[a].getAttribute('ManagementIP') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('ManagementIP')+"</td>";
			  	}
				if(row[a].getAttribute('ConsoleIP') == undefined || row[a].getAttribute('ConsoleIP') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('ConsoleIP')+"</td>";
			  	}
				html += "<td>"+row[a].getAttribute('Manufacturer')+"</td>";
				html += "<td>"+row[a].getAttribute('Model')+"</td>";
				
				if(row[a].getAttribute('OSVersion') == undefined || row[a].getAttribute('OSVersion') ==""){
					html+="<td>N/A</td>";
				}else{
					html += "<td>"+row[a].getAttribute('OSVersion')+"</td>";
			  	}
				html +="</tr>";
				
			}
			$("#RMHistorySched2-table > tbody").append(html);
			$("#RMHistorySched2-table").table("refresh");
			loadHistoryScheduler3();
			$(".trSchedHist2").on("tap",function(){
				if($(this).hasClass('highlight') == false){
					$(this).addClass('highlight');
				}else{
 	        		$(this).removeClass('highlight');
				}
			});
	
		}
		
	});
}
function loadHistoryScheduler3(){
		
	var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=geteventinfo&query=eventid='+eventid1+"`status="+statsstats+"`mainid="+devdev1;
		$.ajax({
        url: url,
		dataType: 'html',
        success: function(data) {
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
			var data = xmlDoc.getElementsByTagName('data'); 
            var row = xmlDoc.getElementsByTagName('row');
            var html ='',startRes='',endRes='';
			//$('#totalMatchesSchedHist3').html(data[0].getAttribute('total'));
			var btns='';
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-left-corner"><< Prev.</a>';			
	/*		for(z = 1; z < data[0].getAttribute('pages'); z++){
				if(z ==1){
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="ui-btn-down-b btn0marg">'+root[0].getAttribute('page')+'</a>';
				}else{
					btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg">'+z+'</a>';
				}
			}*/
			btns += '<a href="#" data-corners="false" data-role="button" data-mini="true" data-inline="true" class="btn0marg ui-btn-right-corner">Next >></a>';	
			$('#paginations').html(btns).trigger('create');
	
			
            for(var a =0; a < row.length; a++){
				
				var id = row[a].getAttribute('ResourceId');
				var jobtype = row[a].getAttribute('JobType');
				var main = row[a].getAttribute('MainId');
				var name = row[a].getAttribute('Name');
				var user = row[a].getAttribute('User');
				
			}
			configname = name;
			$('#configMainConfigurationId').empty().append(main);
			$('#config_name').empty().append(name);
			$('#configMainConfigId').empty().append(user);
			$('#configJob').empty().append(jobtype);
			$('#configResourceId').empty().append(id);

			
		}
	});
}
/*
 #######################################################################
 #
 #  FUNCTION NAME : changeReservationView
 #  AUTHOR        : Angeline Bringas
 #  DATE          : December 10,2013
 #  MODIFIED BY   : 
 #  REVISION DATE : 
 #  REVISION #    : 1
 #  DESCRIPTION   : change reservation view into calendar view and vice versa
 #  PARAMETERS    :
 #
 #######################################################################
*/


function changeReservationView(view) {

	$('.timepicker').timepicker('hide');
	closeTimePicker();

	if (view == 'Calendar') {
		var verifySelected  = '<br/><br/>Loading Calendar...<br/><br/><img src="../styles/images/preloader.gif">';
		$("#ReserveReleasing").dialog({
			autoOpen: false,	
			width: 300,
			height: 150,
			modal: true,
			resizable: false,
			closeOnEscape: false,
			open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
	
		});
    	//$("#ReserveReleasing").empty().append(verifySelected);
	    //$("#ReserveReleasing").dialog("open");
		$('#resReserve').attr('disabled',true);
		//$('#resReserve').attr('checked',false);
		refreshAvailability = false;
		$('#ResTabDiv').hide();
		$('#ResCalDiv').load('../popUp/ReservationPopUp2.php',function() {
			initCalendar();
			$('#ResCalDiv').show();
	    	//$("#ReserveReleasing").dialog("close");
		});
		$("#ReservationReservePagination").css("display","none");
		$("#ReservationReserveDivMaExCl").css("display","none");
		
	} else {
		$('#resReserve').attr('disabled',false);
		refreshAvailability = true;
		$("#ReservationReservePagination").css("display","block");
		$("#ReservationReserveDivMaExCl").css("display","block");
		$('#ResCalDiv').hide();
		$('#ResTabDiv').show();
		autoUpdate(refreshFlagResource);
//		checkPageTable();

	  }
}
/*
 #######################################################################
 #
 #  FUNCTION NAME : groupHighlight
 #  AUTHOR        : Angeline Bringas
 #  DATE          : 
 #  MODIFIED BY   : 
 #  REVISION DATE : December 17, 2013 PST
 #  REVISION #    : 1
 #  DESCRIPTION   : highlights all common reservation
 #  PARAMETERS    :
 #
 #######################################################################
*/
function groupHighlight(val){
	$('.trReserved').each(function(){
		if (val == $(this).attr('rId')){
			$(this).addClass('highlight');
		}
		if($(this).hasClass('highlight')){
			globalResourceId.push($(this).attr('rIds'));
			
		}
	});
}
/*
 #######################################################################
 #
 #  FUNCTION NAME : groupRemoveHighlight
 #  AUTHOR        : Angeline Bringas
 #  DATE          : 
 #  MODIFIED BY   : 
 #  REVISION DATE : December 17, 2013 PST
 #  REVISION #    : 1
 #  DESCRIPTION   : 
 #  PARAMETERS    :
 #
 #######################################################################
*/
function groupRemoveHighlight(val){
	console.log(val);
	$('.trReserved').each(function(){
		if (val == $(this).attr('rId')){
			$(this).removeClass('highlight');
		}
		if($(this).hasClass('highlight')){
			globalResourceId.push($(this).attr('rIds'));
		}	
	});
}
/*
 #######################################################################
 #
 #  FUNCTION NAME : showDeviceConnections
 #  AUTHOR        : Angeline Bringas
 #  DATE          : December 13,2013
 #  MODIFIED BY   : 
 #  REVISION DATE : 
 #  REVISION #    : 1
 #  DESCRIPTION   : shows device sanity
 #  PARAMETERS    :
 #
 #######################################################################
*/
var prevDev = "";
function showDeviceConnections() {
/*	if (GetDeviceType(did) == 'TestTool' && GetDeviceModel(did) != 'Avalanche' || GetDeviceType(did) == 'Server'){
		//alerts("No logs available for "+hostname,'$(".ui-dialog-titlebar-close").show();');
		$('input[name="EventScheduler2Sel"]').each(function() {
	        if ($(this).is(':checked')) {
    	        $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
            }
			else {
				$("eveschedcheck").removeClass('checked');	
				$(this).parent().parent().removeClass('highlight');
			}
		//displayWarning("<b>No logs available for "+hostname+"</b>");

        });
						$(this).removeClass('checked');
						$(this).parent().parent().removeClass('highlight');
	}
*/
	prevDev = "";
	var h= "";
//	var dev = getSelectedArr('EventScheduler2');
	var dev = globalDeviceId ;
	var hostname = globalHostName;
	var name = configname;
	setTimeout(function() {
		if (dev == undefined) {
			return;
		} else if (prevDev == "" || dev != prevDev) {
			prevDev = dev;
			if (/^\d+$/i.test(dev)) {
				h = prevDev;
			} else {
				h = did;
			  }
			clearInterval(devLog);
			devLog = null;
			firstrun = 0;
		  }
		if ( statsstats == 'provisioning' || statsstats == 'configured' || statsstats == 'provisioned' ) {
			var name = $('#config_name').text();
			EventDeviceLogs(name,h+"_1_"+eventid1,false,0,hostname);
		} else if (statsstats != "scheduled" ) {
			var name = $('#config_name').text();
			EventDeviceLogs(name,h+"_0_"+eventid1,false,0,hostname);
	  	} else if (statsstats == "scheduled") {
			alert("Please wait for reservation to be active to view logs");
			return;
		 }
	},100);

}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : checkConnectivityLogs
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 13,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 1
 *  #  DESCRIPTION   : checks if the text file exists.
 *  #  PARAMETERS    : ConfigName, MappingId
 *  #
 *  #######################################################################
 *  */

function checkConnectivityLogs(ConfigName,MappingId) {
	var path = configname+"/Mapping_"+MappingId+".txt";
	var ret = "";
	$.ajax({
		url : 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=checkconlogs&query=path='+path,
		async: false,
		success : function (data) {
			ret = $.trim(data);
		}
	});

	return ret;

}

/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : getDeviceLogs
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 13,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 1
 *  #  DESCRIPTION   : opens the text file containing the device logs
 *  #  PARAMETERS    : ConfigName, DeviceId, HostName
 *  
 *  #######################################################################
 *  */

function getDeviceLogs(ConfigName,DeviceId,HostName) {
	currLogs = "Device";
	$('#eventNewDevicelogstext').empty().append("Config Name: "+configname+"\n");
	$('#eventNewDevicelogstext').append("Device Name: "+HostName+"\n\n");
	$('#eventNewDevicelogstext').append("==================START LOGS===============\n\n");
	$.ajax({
		
		url : 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=logs&query=path='+configname+'/device_'+DeviceId+'.txt',
		dataType:'html',
		success : function (data) {
			console.log(data);
			$("#loading-container").dialog("close");
			$(".ui-dialog-buttonpane button:contains('Refresh')").button().attr('disabled',false);
			var reg = /\</gi;
			var myDiv = $('#eventNewDevicelogstext');
			var newdata = data.replace( reg , "" );
			data = newdata;
			if (/End of Device Check/i.test(data)) {
				if (/Start of Enable Interface/i.test(data)) {
					firstrun++;
					if (/End of Enable Interface/i.test(data)) {
						$("#eventNewDevicelogstext").append(data);
						myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
				    	clearInterval(devLog);
					} else {
						$("#eventNewDevicelogstext").append(data);
					myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
					  }
				} else if (/Start of Terminal/i.test(data)) {
					firstrun++;
					if (/End of Terminal|End of Config/i.test(data)) {
						$("#eventNewDevicelogstext").append(data);
						myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
				    	clearInterval(devLog);
					} else {
						$("#eventNewDevicelogstext").append(data);
						myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
					  }
	  			  } else if (firstrun != 0) {
						$("#eventNewDevicelogstext").append(data);
						myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
			    		clearInterval(devLog);
				    } else {
						$("#eventNewDevicelogstext").append(data);
						myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
						firstrun++;
				      }
			} else if (/End of Disable Interface/i.test(data)) {
				$("#eventNewDevicelogstext").append(data);
				myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
			    clearInterval(devLog);
			} else if (/End of Terminal|End of Config/i.test(data)) {
				$("#eventNewDevicelogstext").append(data);
				myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
			    clearInterval(devLog);
			} else {
				$("#eventNewDevicelogstext").append(data);
				myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
		    }
			$("#eventNewDevicelogstext").css({'height':'500px'});
				
		}
	});
}
function EventDeviceLogs(ConfigName, DeviceId, Mapping, MappingId, HostName) {
	if ( Mapping == true || Mapping == "true") {
		var conexists = checkConnectivityLogs(ConfigName,MappingId);
		conexists = $.trim(conexists);
		if (conexists == "0" || conexists == 0) {
			alert("No connectivity log available");
			return;
		}
	}	
	$('#eventNewDevicelogstext').empty();

	if ( Mapping ) {
		
		getConnectivityLogs(ConfigName,MappingId);
	} else {
		var conexists = checkDeviceLogs(ConfigName,DeviceId);
		conexists = $.trim(conexists);
		if (conexists != "0" || conexists != 0) {
			getDeviceLogs(ConfigName,DeviceId,HostName);

			devLog = setInterval(function() {
				getDeviceLogs(ConfigName,DeviceId,HostName);
			},5000);
		} else {
			alert("No Device Log available.");
			return;
		}
	}

}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : GetDeviceType
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 13,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 
 *  #  DESCRIPTION   : checks the device type
 *  #  PARAMETERS    : devId
 *  #
 *  #######################################################################
 *  */

function GetDeviceType(devId){
	var devType = '';
	var URL = "http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=devtype&query=did="+devId;
	$.ajax({
		url: URL,
		async: false,
		dataType: 'text/xml',
		success: function(data) {
			devType = $.trim(data);
		}
	});
	return devType;
}

function GetDeviceModel(devId){
	var devType = '';
	var URL = "http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=getdevicemodel&query=did="+devId;
	$.ajax({
		url: URL,
		async: false,
		dataType: 'text/xml',
		success: function(data) {
			devType = $.trim(data);
		}
	});
	return devType;
}
function getConnectivityLogs(ConfigName,MappingId) {

	currLogs = "Connectivity";
	$('#eventNewDevicelogstext').empty().append("Config Name: "+ConfigName+"\n\n");
	$('#eventNewDevicelogstext').append("==================START LOGS===============\n\n");
	$.ajax({
		
		url : 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=logs&query=path='+configname+'/Mapping_'+MappingId+'.txt',
		success : function (data) {
			var reg = /\</gi;
			var newdata = data.replace( reg , "" );
			data = newdata;
			var myDiv = $('#eventNewDevicelogstext');
			$("#eventNewDevicelogstext").append(data);
		//	myDiv.scrollTop(myDiv.attr("scrollHeight") - myDiv.height());
		}
	});
}


function checkDeviceLogs(ConfigName,DeviceId) {

	var path = configname+"/device_"+DeviceId+".txt";
	var ret = "";
	
	$.ajax({
		
		url : 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=checkconlogs&query=path='+path,
//		url : "../php/functions_receiver.php?action=checkconlogs&path="+path,
		async: false,
		success : function (data) {
			ret = $.trim(data);
		}
	});

	return ret;

}
/*
#######################################################################
#
#  FUNCTION NAME : showAllConnections
#  AUTHOR        : Angeline Bringas
#  DATE          : December 13,2013
#  MODIFIED BY   :
#  REVISION DATE :
#  REVISION #    : 
#  DESCRIPTION   : shows all connectivity logs in event and scheduler history
#  PARAMETERS    :
#
#######################################################################
*/


function showAllConnections() {
   console.log(config_name,'hello world');
   //$('#DeviceLogsButton').attr('style','display:none');
   if ( statsstats == 'provisioning' || statsstats == 'configured' || statsstats == 'provisioned' || statsstats == "unprovisioning") {
	   var name = $('#config_name').text();
	   EventDeviceLogs(name,1,true,1);
   } else if (statsstats != "scheduled") {
	   var name = $('#config_name').text();
	   EventDeviceLogs(name,1,true,0);
	 } else if (statsstats == "scheduled") {
		   //alerts("Please wait for reservation to be active to view logs");
		   alert("Please wait for reservation to be active to view logs");
		   return;
	   }

}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : RMGenerateReport 
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 18,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 
 *  #  DESCRIPTION   : Generate Report
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */
function RMGenerateReport(){
	if(globalPageRM == "ReservationReserve"){
       var a =window.location.href = "http://"+CURRENT_IP+"/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=generatereportforreserve&query=resourceid="+globalResourceId;
	globalResourceId = [];
	}else if(globalPageRM == "ReservationPort"){
		
		var a =window.location.href = "http://"+CURRENT_IP+"/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=generatereportforport&query=ReservedPortId="+genIds;
		genIds = [];
	}else if(globalPageRM == "ReservationConnectivity"){
		
		var a =window.location.href = "http://"+CURRENT_IP+"/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=generatereportforconnectivity&query=PortReservationId="+genIds;
		
		genIds = [];
	}else if(globalPageRM == "ManageDevice"){
		
		var a =window.location.href = "http://"+CURRENT_IP+"/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=generatereportformanagedevices&query=deviceid="+genIds;
		
		genIds = [];
	}
}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : selectedRow 
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 18,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 
 *  #  DESCRIPTION   : selected row on the table 
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */
function selectedRow(){
	genIds = [];
	$('.trConnectivity').each(function(){
		if($(this).hasClass('highlight')){
			genIds.push($(this).attr('pId'));
		}
	});
	$('.trPort').each(function(){
		if($(this).hasClass('highlight')){
			genIds.push($(this).attr('rpId'));
		}
	});
	$('.trManDev').each(function(){
		if($(this).hasClass('highlight')){
			genIds.push($(this).attr('devId'));
		}
	});
	scheventid = [];
	$('.trSchedEve').each(function(){
		if($(this).hasClass('highlight')){
			scheventid.push($(this).attr('erId'));	
		}
	});
	
	$('.trReservedRelease').each(function(){
		if($(this).hasClass('highlight')){
			globalResourceId.push($(this).attr('rId'));	
		}
	});
	$('.trHistory').each(function(){
		if($(this).hasClass('highlight')){
			deviceHistoryId.push($(this).attr('dhId'));	
		}
	});

}
/*
 *  #######################################################################
 *  #
 *  #  FUNCTION NAME : SchedCancel 
 *  #  AUTHOR        : Angeline Bringas
 *  #  DATE          : December 19,2013
 *  #  MODIFIED BY   : 
 *  #  REVISION DATE : 
 *  #  REVISION #    : 
 *  #  DESCRIPTION   : Cancel events in scheduler event 
 *  #  PARAMETERS    :
 *  #
 *  #######################################################################
 *  */
function SchedCancel(){
	var cgiUrl = 'http://'+CURRENT_IP+'/cgi-bin/Final/RM/RM.py?action=cancelevents&query=resourceid='+scheventid;
	
	$.ajax({
	
		url: cgiUrl,
		dataType: 'text/xml',
		timeout: 60000,
		success:function(data) {
			data = $.trim(data);
			if(data != 1 && data != 0){
				alert(data);	
			}
		},
		error: function() {
		
			alert("Cancellation Failed.");
		
		}
		
	});
}
function clearRHistory(){

	var url = 'http://'+CURRENT_IP+'/cgi-bin/Final/NFast_RM/NFastRMCGI.py?action=dsrh&query=id='+deviceHistoryId;
	$.ajax({
		url: url,
		dataType: 'html',
		success:function(data){
			data = $.trim(data);
			console.log(data);
			if(data == 1){
				alert('Delete Success!');
				deviceHistoryId = [];
				logCheck(globalUserName,"Resource Management", "Cleared A Single Reservation History Entry");
			}
		}
	});
}
/*
 *
 *  FUNCTION NAME : logCheck
 *  AUTHOR        :
 *  DATE          :
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : tracks all action done by the user in each page
 *  PARAMETERS    : none
 *
 */

function logCheck(UserName,Page,Action) {

    var qstr = "action=Logs&UserName="+UserName+"&Page="+Page+"&Action="+Action+"&ipAdd="+CURRENT_IP;
    var cgiURL= "http://"+CURRENT_IP+"/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdminLogs.fcgi?";

/*    if (Page != "Resource Management") {
        $("#eventDevice").parent().hide();
        $('#deviceInformation').hide();
    }

    if (Page != "Config Editor") {
        $("#eventDeviceForFlash").parent().hide();
    }

    if (Page == "Resource Management" && EventLogs == 1) {
        $("#eventDevice").parent().show();
		globalLoad = 'rmResRes';
		refreshFlagResource = "ReservationReserve";
    }

    if (Page == "Config Editor" && EventLogs1 == 1) {
        $("#eventDeviceForFlash").parent().show();
//		$("#eventDeviceForFlash").parent().height('500');
//		$("#eventDeviceForFlash").parent().width('500');
    }

    globalPAGE = Page;
*/
    $.ajax({
        url: cgiURL+qstr,
        dataType: 'text/xml',
        success: function(data) {

		}
	});

}


