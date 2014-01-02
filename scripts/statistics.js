/*  This script file contains functions that are used in the statistics and report page.
 *  Each function should have their own headers for reference to the next developer. Please!
 *
 */


/*
 *
 *  FUNCTION NAME : 
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          : 
 *  MODIFIED BY   : Mark Anthony Elbambo 
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : prepares the DOM for the functions of the buttons
 *  PARAMETERS    : 
 *
 */
$(document).ready(function() {
	$('#StatisticReportButton').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("ReserveStat");
        if(arrayId == undefined){
            return;
        } else{
            var phpFile = "../popUp/CustomGenerateReportDevice.php?";
            GenerateReportDetailed("CustomGenerateReportDevice","DefaultDeviceChoices","ReserveStat",phpFile,"device","devicecsv","");
//          GenerateReportDetailed("CustomGenerateReportDevice","DefaultDeviceChoices","ReserveStat",phpFile,"device","RMStatisticTable","");
		}
    });

    $('#StatisticReport3Button').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("SlotStat");
        if(arrayId == undefined){
            return;
        } else {
            var phpFile = "../popUp/CustomGenerateReportSlot.php?";
            GenerateReportDetailed("CustomGenerateReportSlot","DefaultSlotChoices","SlotStat",phpFile,"slot","slotcsv","");
         }
    });

    $('#StatisticReport4Button').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("ModuleStat");
        if(arrayId == undefined){
            return;
        } else {
            var phpFile = "../popUp/CustomGenerateReportModule.php?";
            GenerateReportDetailed("CustomGenerateReportModule","DefaultModuleChoices","ModuleStat",phpFile,"module","modulecsv","");
          }
    });

    $('#StatisticReport5Button').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("PortStat");
        if(arrayId == undefined){
            return;
        }else{
            var phpFile = "../popUp/CustomGenerateReportPort.php?";
            GenerateReportDetailed("CustomGenerateReportPort","DefaultPortChoices","PortStat",phpFile,"port","portcsv","");
        }
    });
		
	$('#StatisticReport6Button').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("UserStat");
        if(arrayId == undefined){
            return;
        } else {
            var views1 = $("#viewStatSelect").val();
            var views2 = brviews;
            if(views1 == "Summary" && views2 == "User"){
                var phpFile = "../popUp/CustomGenerateReportUser.php?";
                var tablename = "DefaultUserChoices";
            }else{
                var phpFile = "../popUp/CustomGenerateReportUser2.php?";
                var tablename = "DefaultUserChoices2";
            }
            GenerateReportDetailed("CustomGenerateReportUser",tablename,"UserStat",phpFile,"user","userdetailedcsv","");
        }
    });

    $('#StatisticReport7Button').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("ModelStat");
        if(arrayId == undefined){
            return;
        } else {
            var phpFile = "../popUp/CustomGenerateReportSummaryDevice.php?";
            GenerateReportDetailed("CustomGenerateReportDevice","DefaultSummaryDeviceChoices","ModelStat",phpFile,"devicesummary","devicesummarycsv","rmResStat6Checkbox");
        }
    });
    $('#StatisticReport8Button').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("CardStat");
        if(arrayId == undefined){
            return;
        } else {
            var phpFile = "../popUp/CustomGenerateReportSummarySlot.php?";
            GenerateReportDetailed("CustomGenerateReportSlot","DefaultSummarySlotChoices","CardStat",phpFile,"slotsummary","slotsummarycsv","rmResStat7Checkbox");
        }
    });
    $('#StatisticReport9Button').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("ProdStat");
        if(arrayId == undefined){
            return;
        } else {
            var phpFile = "../popUp/CustomGenerateReportSummaryModule.php?";
            GenerateReportDetailed("CustomGenerateReportModule","DefaultSummaryModuleChoices","ProdStat",phpFile,"modulesummary","modulesummarycsv","rmResStat9Checkbox");
        }
    });
	
	$('#StatisticReport10Button').click(function() {
        $(this).removeClass('ui-state-focus');
        var arrayId = getSelectedArrStat("DescriptionStat");
        if(arrayId == undefined){
            return;
        } else {
            var phpFile = "../popUp/CustomGenerateReportSummaryPort.php?";
            GenerateReportDetailed("CustomGenerateReportPort","DefaultSummaryPortChoices","DescriptionStat",phpFile,"portsummary","portsummarycsv","rmResStat10Checkbox");
        }
    });
    $('#StatisticClearButton1').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No device to reset!");
            $('#ReservationStatisticCheckbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('ReserveStat');

        if (ids == undefined) {
            return;
        }
        if(ids.length>0) {

            alerts("Are you sure you want to reset statistics for the following device(s)?","clearStat();","prompt");

        }

    });
	$('#StatisticDetailedButton').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No device to show!");
            $('#ReservationStatisticCheckbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('ReserveStat');

        if (ids == undefined) {
            return;
        }

        if(ids.length == 1) {
			//alerts("Are you sure you want to reset statistics for the following device(s)?","clearStat();","prompt");*/
			var value = $('#statTime').val();
            var fview = $('#statsView').val();
            openSelectedDeviceStat(ids[0],fview,value);

        } else {

            alerts("Please select only 1 device to view detailed statistics.");
            return;
          }

    });
	
	$('#StatisticGraphButton13').click(function() {
	    $(this).removeClass('ui-state-focus');
	    var view = $('#viewStatSelect').val();
    	$('#StatisticGraphButton13').removeClass('ui-state-focus');
	    var tots = 0;

    	$('.selectableRes').each(function() {
        	if($(this).is(':checked')){
            	tots++; //counts for selected checkbox
	        }
    	});
	    if (tots == 0 && view =='Detailed' ) { //checks if there's no selected checkbox for detailed view
    	    alerts("Please select at least one record from the table");
        	$('#ReservationStatisticCheckbox').attr('checked',false);
	        return;
    	}
	    var ids = getReserveStat();
    	if (ids == undefined && view=='Detailed') {
        	return;
	    }
    	openGraphReserve("Line",ids,"reservationgraph",globalStatId);
	});
	$('#StatisticGraphButton').click(function() {
        $(this).removeClass('ui-state-focus');
        var tots = 0;
        $('.resstatcheckbox').each(function() {
            tots++;
        });
        if (tots == 0) {
            alerts("No device to show!");
            $('#ReservationStatisticCheckbox').attr('checked',false);
            return;
        }
        var ids = getSelectedArrStat('ReserveStat');
        if (ids == undefined) {
            return;
        }
        openGraphView("Line",ids,"devicedetailedgraphtest","ReserveStat");

    });

    $('#StatisticGraphButton2').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No device to show!");
            $('#ReservationStatisticCheckbox').attr('checked',false);
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('RackStat');

        if (ids == undefined) {
            return;
        }
        openGraphView("Line",ids,"getreservationcount");

    });

	$('#StatisticGraphButton3').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No slot to show!");
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('SlotStat');

        if (ids == undefined) {
            return;
        }
    //  openGraphView("Line",ids,"getslotreservationcount");
    	openGraphView("Line",ids,"slotdetailedgraphtest","SlotStat");
    });

    $('#StatisticGraphButton4').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No module to show!");
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('ModuleStat');

        if (ids == undefined) {
            return;
        }
		openGraphView("Line",ids,"moduledetailedgraphtest","ModuleStat");
    });

    $('#StatisticGraphButton5').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No port to show!");
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('PortStat');

        if (ids == undefined) {
            return;
        }
//      openGraphView("Line",ids,"getportreservationcount");
		openGraphView("Line",ids,"portdetailedgraphtest","PortStat");
    });

    $('#StatisticGraphButton6').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No user to show!");
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }
        var view = $('#viewStatSelect').val();
		var ids = getSelectedArrStat('UserStat');
		if (ids == undefined) {
            return;
        }

        openGraphView2("Line",ids,"getusercount","UserStat");

    });

    $('#StatisticGraphButton7').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No model to show!");
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('ModelStat');

        if (ids == undefined) {
            return;
        }
        var idsArr = new Array();
        for (var u= 0; u < ids.length; u++) {
            var model = $('#rmResStat6Checkbox'+ids[u]).parent().parent().find('td').eq(1).text();
            idsArr.push(model);
        }
        //openBarGraphView(idsArr,"getmodelcount");
        openGraphView("Line",ids,"modelstatsgraphtest","ModelStat");
    });

    $('#StatisticGraphButton8').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No cards to show!");
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('CardStat');

        if (ids == undefined) {
            return;
        }
        var idsArr = new Array();
        for (var u= 0; u < ids.length; u++) {
            var model = $('#rmResStat7Checkbox'+ids[u]).parent().parent().find('td').eq(1).text();
            idsArr.push(model);
        }
    //  openBarGraphView(idsArr,"getcardscount");
    	openGraphView("Line",ids,"slotstatsgraphtest","CardStat");
    });

    $('#StatisticGraphButton9').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No modules to show!");
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('ProdStat');

        if (ids == undefined) {
            return;
        }
        var idsArr = new Array();
        for (var u= 0; u < ids.length; u++) {
            var model = $('#rmResStat9Checkbox'+ids[u]).parent().parent().find('td').eq(1).text();
            idsArr.push(model);
        }
    //  openBarGraphView(idsArr,"getmodulescount");
    	openGraphView("Line",ids,"modulestatsgraphtest","ProdStat");
    });

    $('#StatisticGraphButton10').click(function() {

        $(this).removeClass('ui-state-focus');

        var tots = 0;

        $('.resstatcheckbox').each(function() {
            tots++;
        });

        if (tots == 0) {
            alerts("No port descriptions to show!");
            $('#'+globalLoad+'Checkbox').attr('checked',false);
            return;
        }

        var ids = getSelectedArrStat('DescriptionStat');

        if (ids == undefined) {
            return;
        }
        var idsArr = new Array();
        for (var u= 0; u < ids.length; u++) {
            var model = $('#rmResStat10Checkbox'+ids[u]).parent().parent().find('td').eq(1).text();
            idsArr.push(model);
        }
        //openBarGraphView(idsArr,"getportscount");
        openGraphView("Line",ids,"portstatsgraphtest","DescriptionStat");
    });      
});


/*
 *
 *  FUNCTION NAME : getSelectedArrStat()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          : 
 *  MODIFIED BY   : Mark Anthony Elbambo 
 *  REVISION DATE : October 31, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : 
 *  PARAMETERS    : tbl
 *
 */
function getSelectedArrStat(tbl) {
    var views1 = $("#viewStatSelect").val();
    var views2 = brviews;
    if(views1 == "Summary" && views2 == "User"){
        if(tbl !="UserStat2"){
            tbl = tbl+"2";
        }
    }
    var selName = tbl+'Sel';
    var chosen = new Array();
    checkboxes = document.getElementsByName(selName);

    var i=0;
    while(i<checkboxes.length){
        if(checkboxes[i].checked) {
            if(checkboxes[i].value != undefined) {
                if($.inArray(checkboxes[i].value,chosen) == -1){
                    chosen.push(checkboxes[i].value);
                }
            }
        }
        i++;
    }
    if ( !chosen.length) {
		alerts("No item selected");
    } else {
        return(chosen);
    }
}


/*
 *
 *  FUNCTION NAME : getUlDomains()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          : 
 *  MODIFIED BY   : Mark Anthony Elbambo 
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 3
 *  DESCRIPTION   : gets the domains for reservation statistics
 *  PARAMETERS    : none
 *
 */
function getUlDomains() {

    $.ajax({
        url: "../php/functions_receiver.php?action=getdomains",
        dataType: 'text/xml',
        async: false,
        success: function(data) {
            var statArr = new Array();
            var domains = $.trim(data).split("*")[0].split(",");
            var str = "<li style='cursor:pointer' did2='All' did='Any' id='DomainAny' onclick=\"TotalFinalStatsTable(this.id,'Domain');onSelectedStat(this.id);\"><a>All</a></li>";
            for (var f = 0; f < domains.length; f++) {
                var ids = domains[f].split("^")[0];
                var domname = domains[f].split("^")[1];
                str += "<li style='cursor:pointer' did2='"+domname+"' did='"+ids+"' id='Domain"+ids+"' onclick=\"TotalFinalStatsTable(this.id,'Domain');onSelectedStat(this.id);\"><a>"+domname+"</a></li>";
            }
            $('#ulDomain').empty().append(str);
            $("#ulDomain li").last().addClass('last');
            str = "<li style='cursor:pointer' did2='All'  did='Any' id='UserAny' onclick=\"TotalFinalStatsTable(this.id,'User');onSelectedStat(this.id);\"><a>All</a></li>";
            for (var f = 0; f < domains.length; f++) {
                var ids = domains[f].split("^")[0];
                var domname = domains[f].split("^")[1];
                str += "<li style='cursor:pointer' did='"+ids+"' did2 ='"+domname+"' id='User"+ids+"' onclick=\"TotalFinalStatsTable(this.id,'User');onSelectedStat(this.id);\"><a>"+domname+"</a></li>";
            }
            $('#ulUser').empty().append(str);
            $("#ulUser li").last().addClass('last');
            if (currbrowser == "safari") {
                var mouseoverEvt = function(){
                    $(this).css("color","red");
                };
                var mouseleaveEvt = function(){
                    $(this).css("color","#39599C");
                };
                $( "#srtree li a " ).each(function(){
                    $(this).bind("mouseover",mouseoverEvt);
                    $(this).click(function() {
                        $("#srtree li a").css("text-decoration","none").css("color","#39599C");
						//  $(this).unbind("mouseleave",mouseleaveEvt).bind("mouseleave",mouseleaveEvt2).css("text-decoration","underline").css("color","#33BBFF");
						});
                    $(this).bind("mouseleave",mouseleaveEvt);
                });
            }
            var str2 = "<li style='cursor:pointer' did2='All'  did='Any' id='ReservationAny' onclick=\"TotalFinalStatsTable(this.id,'Reservation');onSelectedStat(this.id);\"><a><img src='../styles/base/images/res.png' style='width:16px;' />Reservation</a></li>";
            $('#ulReservation').empty().append(str2);
        }
    });

}


/*
 *
 *  FUNCTION NAME : TotalFinalStatsTable()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads the main table
 *  PARAMETERS    : id,branchview
 *
 */
function TotalFinalStatsTable(id,branchview) {
    if (branchview == "Domain") {
        $('#statSelect').parent().removeAttr('style');
        $('#statSelect').parent().prev().removeAttr('style');
        $('#statSelect2').parent().attr('style','display:none');
        $('#statSelect2').parent().prev().attr('style','display:none');

        $('#stat-11').attr('style','display:none');
        $('#hideTD').show();
        $('#viewStatSelect').removeAttr('style');
        statDomainVal = $('#'+id).attr('did');
        var view = $('#statSelect').val();
        var view3 = $('#statsNewView').val();
        var view2 = $('#viewStatSelect').val();
        for ( var i = 0 ; i < 6; i++ ) {
            if ( view == i ) {
                switch (view2) {
                    case "Detailed": default:
                        $('#stat-'+i).removeAttr('style');
                    break;
                    case "Summary":
                        switch (view) {
                            case "0":
                                $('#stat-6').removeAttr('style');
                            break;
                            case "2":
                                $('#stat-7').removeAttr('style');
                            break;
                            case "3":
                                $('#stat-9').removeAttr('style');
                            break;
                            case "4":
                                $('#stat-10').removeAttr('style');
                            break;
                        }
                    break;
                }
            } else {
                $('#stat-'+i).attr('style','display:none');
              }
        }
        brviews = "Domain";
        FinalStatTable();
        $('#statLabel').empty().append("Domain");
        if(view2 == 'Detailed'){
            $('#resStatistic').removeAttr('disabled');
        }else if(view2 == 'Summary' && view3 == 'Utilization' ){
            $('#resStatistic').attr('disabled',true);
        }
        $('#statTimePickerdiv').css({'display':'none'});
        $('.buttonGroup-right').css({'display':'block'});
        $('#expandview').css({'visibility':'visible'});
    } else if(branchview == 'User') {
		$('#expandview').css({'visibility':'hidden'});
        $('#statSelect2').parent().attr('style','display:none');
        $('#statSelect2').parent().prev().attr('style','display:none');
        $('#statTimePickerdiv').css({'display':'none'});
		//$('.buttonGroup-right').css({'display':'none'});
		$('#statSelect').parent().attr('style','display:none');
        $('#statSelect').parent().prev().attr('style','display:none');
        brviews = "User";
        statDomainVal = $('#'+id).attr('did');
        changeStatView("5");
        $('#statLabel').empty().append("User");
        $('#resStatistic').attr('disabled',true);
        if(view2 == 'Detailed'){
            document.getElementById("rmResStat5Checkbox").checked = false;
        }else if(view2 == 'Summary'){
            document.getElementById("rmResStat5Checkbox2").checked = false;
        }
    }else{
        $('#statSelect2').parent().removeAttr('style');
        $('#statSelect2').parent().prev().removeAttr('style');

        $('#expandview').css({'visibility':'hidden'});

        $('#statSelect').parent().attr('style','display:none');
        $('#statSelect').parent().prev().attr('style','display:none');
        $('#statLabel').empty().append("Reservation");
        brviews = "Reservation";
        statDomainVal = $('#'+id).attr('did');
        changeStatView("11");
	}
}


/*
 *
 *  FUNCTION NAME : FinalStatsTable()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads the main table
 *  PARAMETERS    : limit
 *
 */
function FinalStatTable(limit) {
    if (globalPAGE != 'Statistics and Reports')
        return;

    refreshAvailability = true;
    if (brviews == "Domain") {
        var view = $('#statSelect').val();
        switch (view) {
            case "0":
                var view2 = $('#viewStatSelect').val();
                switch (view2) {
                    case "Detailed":
                        initStatTable(limit);
                    break;
                    default:
                        initStatTable7();
                        if ($('#statsViewNew').val() == "Utilization") {
                            $('#resStatistic').attr('disabled',true);
                        } else {
                            $('#resStatistic').attr('disabled',false);
                          }
                    break;
                }
            break;
            case "1": initStatTable2(); break;
            case "2":
                var view2 = $('#viewStatSelect').val();
                switch (view2) {
                    case "Detailed":
                        initStatTable3();
                    break;
                    default:
                        initStatTable8();
                        if ($('#statsViewNew').val() == "Utilization") {
                            $('#resStatistic').attr('disabled',true);
                        } else {
                            $('#resStatistic').attr('disabled',false);
                          }
                    break;
                }
            break;
            case "3":
                var view2 = $('#viewStatSelect').val();
                switch (view2) {
                    case "Detailed":
                        initStatTable4();
                    break;
                    default:
                        initStatTable9();
                        if ($('#statsViewNew').val() == "Utilization") {
                            $('#resStatistic').attr('disabled',true);
                        } else {
                            $('#resStatistic').attr('disabled',false);
                          }
                    break;
                }
            break;
			case "4":
                var view2 = $('#viewStatSelect').val();
                switch (view2) {
                    case "Detailed":
                        initStatTable5();
                    break;
                    default:
                        initStatTable10();
                        if ($('#statsViewNew').val() == "Utilization") {
                            $('#resStatistic').attr('disabled',true);
                        } else {
                            $('#resStatistic').attr('disabled',false);
                          }
                    break;
                }
            break;
		}
		flagstat = false;
    }else if(brviews == 'User'){
        initStatTable6();
		flagstat = false;
    } else {
		flagstat = true;
        initStatTable11();
    }

    var limitselect = $('#ReservationStatisticPageLimit').val();
    if(limitselect == 50 || limitselect == 100){
        $('#top_linkStatistic1').css({'display':'block'});
        $('#top_linkStatistic2').css({'display':'block'});
        $('#top_linkStatistic3').css({'display':'block'});
        $('#top_linkStatistic4').css({'display':'block'});
        $('#top_linkStatistic5').css({'display':'block'});
        $('#top_linkStatistic6').css({'display':'block'});
        $('#top_linkStatistic7').css({'display':'block'});
        $('#top_linkStatistic8').css({'display':'block'});
        $('#top_linkStatistic9').css({'display':'block'});
        $('#top_linkStatistic10').css({'display':'block'});
    }else{
        $('#top_linkStatistic1').css({'display':'none'});
        $('#top_linkStatistic2').css({'display':'none'});
        $('#top_linkStatistic3').css({'display':'none'});
        $('#top_linkStatistic4').css({'display':'none'});
        $('#top_linkStatistic5').css({'display':'none'});
        $('#top_linkStatistic6').css({'display':'none'});
        $('#top_linkStatistic7').css({'display':'none'});
        $('#top_linkStatistic8').css({'display':'none'});
        $('#top_linkStatistic9').css({'display':'none'});
        $('#top_linkStatistic10').css({'display':'none'});
    }
}

/*
 *
 *  FUNCTION NAME : enabledButtonsStat()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : enable the buttons
 *  PARAMETERS    : none
 *
 */
function enabledButtonsStat(){
    $("#StatisticGraphButton").removeClass("ui-button-disabled");
    $("#StatisticGraphButton").removeClass("ui-state-disabled");
    $("#StatisticGraphButton").attr('disabled',false);
    $("#StatisticReportButton").removeClass("ui-button-disabled");
    $("#StatisticReportButton").removeClass("ui-state-disabled");
    $("#StatisticReportButton").attr('disabled',false);

    $("#StatisticGraphButton3").removeClass("ui-button-disabled");
    $("#StatisticGraphButton3").removeClass("ui-state-disabled");
    $("#StatisticGraphButton3").attr('disabled',false);
    $("#StatisticReport3Button").removeClass("ui-button-disabled");
    $("#StatisticReport3Button").removeClass("ui-state-disabled");
    $("#StatisticReport3Button").attr('disabled',false);

    $("#StatisticGraphButton4").removeClass("ui-button-disabled");
    $("#StatisticGraphButton4").removeClass("ui-state-disabled");
    $("#StatisticGraphButton4").attr('disabled',false);
    $("#StatisticReport4Button").removeClass("ui-button-disabled");
    $("#StatisticReport4Button").removeClass("ui-state-disabled");
    $("#StatisticReport4Button").attr('disabled',false);

    $("#StatisticGraphButton5").removeClass("ui-button-disabled");
    $("#StatisticGraphButton5").removeClass("ui-state-disabled");
    $("#StatisticGraphButton5").attr('disabled',false);
    $("#StatisticReport5Button").removeClass("ui-button-disabled");
    $("#StatisticReport5Button").removeClass("ui-state-disabled");
    $("#StatisticReport5Button").attr('disabled',false);

    $("#StatisticGraphButton6").removeClass("ui-button-disabled");
    $("#StatisticGraphButton6").removeClass("ui-state-disabled");
    $("#StatisticGraphButton6").attr('disabled',false);
    $("#StatisticReport6Button").removeClass("ui-button-disabled");
    $("#StatisticReport6Button").removeClass("ui-state-disabled");
    $("#StatisticReport6Button").attr('disabled',false);
}

/*
 *
 *  FUNCTION NAME : onSelectedStat()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : adds underline to the selected domain
 *  PARAMETERS    : id
 *
 */
function onSelectedStat(id) {
    colorHeader();
    var did2=$('#'+id).attr('did2');
    document.getElementById("statLabel2").innerHTML = did2;
    $("#"+id+' a').css("color", '#33BBFF');
    $("#"+id+' a').css("text-decoration","underline");
    refreshAvailability = true;
	if (globalStatview == id) {

    }else {
        $("#"+globalStatview+' a').css("color","#39599C");
        $("#"+globalStatview+' a').css("text-decoration","none");
        globalStatview=id;
    }
}


/*
 *
 *  FUNCTION NAME : statExpandedView()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : hide/show some data from the main table
 *  PARAMETERS    : source
 *
 */
function statExpandedView(source) {
    var todo;
    var view = $('#statsViewNew').val();
    var view2 = $('#statSelect').val();
    switch (globalLoad) {
        case "rmResStat":
            todo = "xView("+source+",'ReservationStatisticTable','2,5,6,10,29,30');testStats();"
        break;
        case "rmResStat2":
            todo = "xView("+source+",'ReservationStatisticTable','2,7');testStats();"
        break;
        case "rmResStat3":
            todo = "xView("+source+",'ReservationStatisticTable','2,9');testStats();"
        break;
        case "rmResStat4":
            todo = "xView("+source+",'ReservationStatisticTable','2');testStats();"
        break;
        default:
            todo = "testStats();";
        break;
    }
    var toappend ="";
    switch(view2){
        case "Detailed":
            if(view2==0){
                view2 ="";
            }
            toappend ="Total";
        break;
        case "Summary":
            if(view2==0){
                view2 = 6;
            }else if(view2 == 2){
                view2 = 7;
            }else if(view2 == 3){
                view2 = 9;
            }else if(view2 == 4){
                view2 = 10;
            }else{
                view2 = 5;
            }
            toappend ="Average";
        break;

    }

    if (view == 'Utilization') {
	    $('#'+view2+'x').empty().append(toappend+' Utilization');
    	$('#'+view2+'x2').empty().append(toappend+' Utilization');
        $('#'+view2+'xx').empty().append(toappend+' Reservation');
        
    } else if(view == 'Convention') {
        $('#'+view2+'x').empty().append('Total Reservation');
        $('#'+view2+'xx').empty().append('Total Reservation');
    }
    toappend ='';
    eval(todo);
//	FinalStatTable();
}

/*
 *
 *  FUNCTION NAME : showStatOption()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : show the option to include Terminal/Switch to the main table
 *  PARAMETERS    : 
 *
 */
function showStatOption() {
    var statSelect = $('#statSelect').val();

    $('#StatisticOptionsDiv').dialog({
        autoOpen: false,
        resizable: false,
        modal: true,
        zIndex: 11010,
        height: 200,
        width: 300,
        draggable: false,
        closeOnEscape: false,
        open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide();  },
        buttons: {
            "OK": function() {
                $(this).dialog('close');
                if ($('#StatTerminal').is(':checked')) {
                    globalStatTerminal[globalLoad] = "yes";
                } else {
                    globalStatTerminal[globalLoad] = "no";
                  }

                if ($('#StatSwitch').is(':checked')) {
                    globalStatSwitch[globalLoad] = "yes";
                } else {
                    globalStatSwitch[globalLoad] = "no";
                  }

                FinalStatTable();
            },
            "Cancel": function() {
                $(this).dialog('close');
            }
        }
    });
    $('#StatisticOptionsDiv').dialog('open');
    $('.ui-dialog :button').blur();
    $('#StatisticOptionsDiv').load('../popUp/StatisticOptions.php', function() {
        if (globalStatTerminal[globalLoad] == "yes") {
            $('#StatTerminal').attr('checked',true);
        }
        if (globalStatSwitch[globalLoad] == "yes") {
            $('#StatSwitch').attr('checked',true);
        }

        if(statSelect == 2 || statSelect == 3){
            $('#IncludeTerminalServer').css({'display':'none'});
        }else{
            $('#IncludeTerminalServer').css({'display':'block'});
        }
    });
}

/*
 *
 *  FUNCTION NAME : showDetailedSummary()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads the main table when the View combobox is triggered
 *  PARAMETERS    : val-> either Detailed or Summary
 *
 */
function showDetailedSummary(val) {
    switch(val) {
        case "Detailed":
            if (brviews == "Domain") {
                var view = $('#statSelect').val();
                switch (view) {
                    case "0":
                        changeStatView("0");
                    break;
                    case "2":
                        changeStatView("2");
                    break;
                    case "3":
                        changeStatView("3");
                    break;
                    case "4":
                        changeStatView("4");
                    break;
                }
                $('#resStatistic').attr('disabled',false);
                $('.buttonGroup-right').css({'display':'block'});
            }else if(brviews == 'Reservation'){
                initStatTable11();
            }else{
                initStatTable6();
				//$('.buttonGroup-right').css({'display':'none'});
			}
		break;
		case "Summary":
            if (brviews == "Domain") {
                var view = $('#statSelect').val();
                switch (view) {
                    case "0":
                        changeStatView("6");
                    break;
                    case "2":
                        changeStatView("7");
                    break;
                    case "3":
                        changeStatView("9");
                    break;
                    case "4":
                        changeStatView("10");
                    break;
                }
                if ($('#statsViewNew').val() == "Utilization") {
                    $('#resStatistic').attr('disabled',true);
                } else {
                    $('#resStatistic').attr('disabled',false);
                }
                $('.buttonGroup-right').css({'display':'block'});
            }else if(brviews == 'User'){
                refreshAvailability = true;
                initStatTable6();
                var view2 = $('#viewStatSelect').val();
                if(view2 == 'Detailed'){
                    $('#statTimePickerdiv').css({'display':'none'});
					//  $('.buttonGroup-right').css({'display':'none'});
				}else if(view2 == 'Summary'){
                    $('#statTimePickerdiv').css({'display':'none'});
					//  $('.buttonGroup-right').css({'display':'none'});
				}
			}else{
                initStatTable11();
            }
        break;
    }

}

/*
 *
 *  FUNCTION NAME : changeStatView()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : shows what page for reservation statistics
 *  PARAMETERS    : y
 *
 */
function changeStatView(y) {
	//if (y != 5) {
		$('#viewStatSelect').show();
        $('#viewStatSelect').parent().prev().show();
        if ($('#viewStatSelect').val() == "Summary") {
            if (y == 0) {
                y = 6;
            } else if (y == 2) {
                y = 7;
              } else if (y == 3) {
                    y = 9;
                } else if (y == 4) {
                    y = 10;
                  }
        }
	//} else {
	//	$('#viewStatSelect').hide();
	//  $('#viewStatSelect').parent().prev().hide();
	//}
	for ( var i = 0 ; i < 12 ; i++ ) {
        if ( y == i ) {
            $('#stat-'+i).removeAttr('style');
        } else {
            $('#stat-'+i).attr('style','display:none');
        }
    }

    var m = $('#statsViewNew').val();
    if (m == "Convention") {
        $('.ConventionStatView').show();
        $(".UtilizationStatView").hide();
    }
    changeView2(m);
    if (brviews != "") {
        refreshAvailability = true;
        refreshRate = true;
//      	autoUpdate(refreshFlagResource);
		FinalStatTable();
    }
}

/*
 *
 *  FUNCTION NAME : GenerateReportDetailed()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : opens a pop-up dialog that shows checkbox options
 *  PARAMETERS    : id,queryVar,selname,filename,cbname,assignedfunction,checkname
 *
 */
function GenerateReportDetailed(id,queryVar,selname,filename,cbname,assignedfunction,checkname) {
    $('#'+id).dialog({
        modal: true,
        autoOpen: false,
        width: 450,
        resizable: false,
        closeOnEscape: true,
        draggable: false,
        open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); },
        buttons: {
            "OK" : function(){

                refreshAvailability = true;
                if(selname=='UserStat' && cbname =='user'){
                    var views1 = $("#viewStatSelect").val();
                    var views2 = brviews;
                    if(views1 == "Summary" && views2 == "User"){
                       assignedfunction  = "usersummarycsv";
                    }
                    var returns = UserValidation(queryVar,selname,cbname,assignedfunction,checkname,id);
/*                  if(returns == "true"){
 *                                          dischkRep(selname);
 *                                                              }*/
                }else if(selname=='ReserveStat' && cbname =='device'){
                    var returns = deviceValidation(queryVar,selname,cbname,assignedfunction,checkname,id);
                    if(returns == "true"){
                        dischkRep(selname);
                    }
                }else if(selname=='SlotStat' && cbname =='slot'){
                    var returns = slotValidation(queryVar,selname,cbname,assignedfunction,checkname,id);
                    if(returns == "true"){
                        dischkRep(selname);
                    }
                }else if(selname=='ModuleStat' && cbname =='module'){
                    var returns = moduleValidation(queryVar,selname,cbname,assignedfunction,checkname,id);
                    if(returns == "true"){
                        dischkRep(selname);
                    }
                }else if(selname=='PortStat' && cbname =='port'){
                    var returns = portValidation(queryVar,selname,cbname,assignedfunction,checkname,id);
                    if(returns == "true"){
                        dischkRep(selname);
                    }
                }else if((selname =='ModelStat' && cbname =='devicesummary') || (selname =='CardStat' && cbname =='slotsummary') || (selname =='ProdStat' && cbname=='modulesummary') || (selname=='DescriptionStat' && cbname=='portsummary')){
                    var returns = modelValidation(queryVar,selname,cbname,assignedfunction,checkname,id);
                    if(returns == "true"){
                        dischkRep(selname);
                    }
                }else{
					queryInformationToCGI(queryVar,selname,cbname,assignedfunction,checkname);
                    $(this).dialog("close");

                    if (globalLoad == "rmResStat") {
                        $('#'+refreshFlagResource+"Checkbox").attr("checked",false);
                    } else {
                        $('#'+globalLoad+"Checkbox").attr("checked",false);
                    }
                    globalPageLoad[globalLoad] = "";
                }
                globalPageSel =[];
                switch(globalLoad){
                    case "rmResStat":
                        ResStat =0;
                    break;
                    case "rmResStat2":
                        SlotStat =0;
                    break;
                    case "rmResStat3":
                        ModuleStat =0;
                    break;
                    case "rmResStat4":
                        PortStat =0;
                    break;
                    case "rmResStat5":
                        UserStat =0;
                    break;
                    case "rmResStat11":
                        UserStat2 =0;
                    break;
                    case "rmResStat6":
                        ModelStat =0;
                    break;
                    case "rmResStat7":
                        CardStat =0;
                    break;
                    case "rmResStat9":
                        ProdStat =0;
                    break;
                    case "rmResStat10":
                        DescStat =0;
                    break;
                }
                $('.ResStatCheckAll').attr('checked',false);
        },
            "Cancel": function() {
                $(this).dialog("close");
				if (globalLoad == "rmResStat") {
                    $('#'+refreshFlagResource+"Checkbox").attr("checked",false);
                } else {
                    $('#'+globalLoad+"Checkbox").attr("checked",false);
                }
                if(globalLoad =='rmResStat11'){
                    selname= selname+"2";
                }
                $('input[name="'+selname+'Sel"]').each(function() {
                    $(this).attr('checked',false);
                    $(this).parent().parent().removeClass('highlight');
                });
                $('.ResStatCheckAll').attr('checked',false);
                globalPageLoad[globalLoad] = "";
                refreshAvailability = true;
                autoUpdate(refreshFlagResource);
                globalPageSel =[];
                $('.ResStatCheckAll').attr('checked',false);
            }
       }
    });
    var load="<center><div style='padding-top:130px'><img src='../styles/images/preloader.gif' height='50px' width='50px'></div></center>";
    $("#"+id).dialog("open");
    $("#"+id).empty().append(load);
    $('.ui-dialog :button').blur();
    createTable(id,filename,"showDefaultView('"+queryVar+"');");
}


/*
 *
 *  FUNCTION NAME : modelValidation()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : validates checkboxes for generate report of device, slot, module, port summary
 *  PARAMETERS    : queryVar,selname,cbname,assignedfunction,checkname
 *
 */
function modelValidation(queryVar,selname,cbname,assignedfunction,checkname){
    if(assignedfunction =="devicesummarycsv"){
        var a = document.getElementById('SummaryDeviceDefaultModel');
        var b = document.getElementById('SummaryDeviceDefaultNumberOfDevices');
        var c = document.getElementById('SummaryDeviceDefaultManufacturer');

        var e = document.getElementById('SummaryDeviceDefaultAverageIdle');
        var e = document.getElementById('SummaryDeviceDefaultAverageReserved');
        var f = document.getElementById('SummaryDeviceDefaultAverageIdlePer');
        var g = document.getElementById('SummaryDeviceDefaultAverageReservedPer');

        var h = document.getElementById('SummaryDeviceDefaultScheduled');
        var i = document.getElementById('SummaryDeviceDefaultRescheduledPer');
        var j = document.getElementById('SummaryDeviceDefaultCancelledPer');
        var k = document.getElementById('SummaryDeviceDefaultGeneric');
        var l = document.getElementById('SummaryDeviceDefaultExplicit');
        var m = document.getElementById('SummaryDeviceDefaultGenericReScheduled');
        var n = document.getElementById('SummaryDeviceDefaultExplicitReScheduled');
        var o = document.getElementById('SummaryDeviceDefaultGenericScheduledPer');
        var p = document.getElementById('SummaryDeviceDefaultExplicitScheduledPer');
        var q = document.getElementById('SummaryDeviceDefaultGenericReScheduledPer');

        var x = document.getElementById('csvdevicesummary');
	    var y = document.getElementById('exceldevicesummary');
	}else if(assignedfunction =="slotsummarycsv"){
        var a = document.getElementById('SummarySlotDefaultCard');
        var b = document.getElementById('SummarySlotDefaultNumberOfCards');

        var c = document.getElementById('SummarySlotDefaultAverageIdle');
        var d = document.getElementById('SummarySlotDefaultAverageReserved');
        var e = document.getElementById('SummarySlotDefaultAverageIdlePer');
        var f = document.getElementById('SummarySlotDefaultAverageReservedPer');

        var g = document.getElementById('SummarySlotDefaultGeneric');
        var h = document.getElementById('SummarySlotDefaultRescheduledPer');
        var i = document.getElementById('SummarySlotDefaultExplicit');
        var j = document.getElementById('SummarySlotDefaultGenericScheduledPer');
        var k = document.getElementById('SummarySlotDefaultExplicitReScheduledPer');
        var l = document.getElementById('SummarySlotDefaultCancelledPer');
        var m = document.getElementById('SummarySlotDefaultGenericReScheduled');
        var n = document.getElementById('SummarySlotDefaultExplicitScheduledPer');
        var o = document.getElementById('SummarySlotDefaultNoScheduled');
        var p = document.getElementById('SummarySlotDefaultExplicitReScheduled');
        var q = document.getElementById('SummarySlotDefaultGenericReScheduledPer');

        var x = document.getElementById('csvslotsummary');
		var y = document.getElementById('excelslotsummary');
	}else if(assignedfunction =="modulesummarycsv"){
        var a = document.getElementById('SummaryModuleDefaultProductIdentifier');
        var b = document.getElementById('SummaryModuleDefaultNumberOfModules');

        var c = document.getElementById('SummaryModuleDefaultAverageIdle');
        var d = document.getElementById('SummaryModuleDefaultAverageReserved');
        var e = document.getElementById('SummaryModuleDefaultAverageIdlePer');
        var f = document.getElementById('SummaryModuleDefaultAverageReservedPer');

        var g = document.getElementById('SummaryModuleDefaultExplicit');
        var h = document.getElementById('SummaryModuleDefaultGenericScheduledPer');
        var i = document.getElementById('SummaryModuleDefaultExplicitReScheduledPer');
        var j = document.getElementById('SummaryModuleDefaultGenericReScheduled');
        var k = document.getElementById('SummaryModuleDefaultExplicitScheduledPer');
        var l = document.getElementById('SummaryModuleDefaultNoScheduled');
        var m = document.getElementById('SummaryModuleDefaultExplicitReScheduled');
        var n = document.getElementById('SummaryModuleDefaultGenericReScheduledPer');

        var x = document.getElementById('csvmodulesummary');
		var y = document.getElementById('excelmodulesummary');
	}else if(assignedfunction =="portsummarycsv"){
        var a = document.getElementById('SummaryPortDefaultDescription');
        var b = document.getElementById('SummaryPortDefaultNumberOfPorts');

        var c = document.getElementById('SummaryPortDefaultAverageIdle');
        var d = document.getElementById('SummaryPortDefaultAverageReserved');
        var e = document.getElementById('SummaryPortDefaultAverageIdlePer');
        var f = document.getElementById('SummaryPortDefaultAverageReservedPer');

        var g = document.getElementById('SummaryPortDefaultRescheduledPer');
        var h = document.getElementById('SummaryPortDefaultExplicit');
        var i = document.getElementById('SummaryPortDefaultGenericScheduledPer');
        var j = document.getElementById('SummaryPortDefaultExplicitReScheduledPer');
        var k = document.getElementById('SummaryPortDefaultCancelledPer');
        var l = document.getElementById('SummaryPortDefaultGenericReScheduled');
        var m = document.getElementById('SummaryPortDefaultExplicitScheduledPer');
        var n = document.getElementById('SummaryPortDefaultNoScheduled');
        var o = document.getElementById('SummaryPortDefaultGeneric');
        var p = document.getElementById('SummaryPortDefaultExplicitReScheduled');
        var q = document.getElementById('SummaryPortDefaultGenericReScheduledPer');

        var x = document.getElementById('csvportsummary');
		var y = document.getElementById('excelportsummary');
	}
	
	if(x.checked == true || y.checked == true){
        var statsview = $('#statsViewNew').val();
        if(assignedfunction =="devicesummarycsv"){
            if(statsview == 'Utilization'){
                if(a.checked == false && b.checked == false && c.checked == false && e.checked == false && f.checked==false && g.checked==false){
                    alerts('Please select at least one column header.');
                    return "false";
                }else{
					if(y.checked == true){
						assignedfunction ="devicesummarypdf";
					}
                    subQryCGI();
                    $('#CustomGenerateReportDevice').dialog("close");
                }
            }else{
                if(a.checked == false && b.checked == false && c.checked == false && h.checked == false && i.checked == false && j.checked==false && k.checked==false && l.checked==false && m.checked == false && n.checked == false && o.checked == false && p.checked==false && q.checked==false){
                    alerts('Please select at least one column header.');
                    return "false";
                }else{
					if(y.checked == true){
                        assignedfunction ="devicesummarypdf";
                    }
                    subQryCGI();
                    $('#CustomGenerateReportDevice').dialog("close");
                }
            }
        }else if(assignedfunction =="slotsummarycsv"){
            if(statsview == 'Utilization'){
                if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && f.checked==false){
                    alerts('Please select at least one column header.');
                    return "false";
                }else{
					if(y.checked == true){
                        assignedfunction ="slotsummarypdf";
                    }
                    subQryCGI();
                    $('#CustomGenerateReportSlot').dialog("close");
                }
            }else{
                if(a.checked == false && b.checked == false && g.checked==false && h.checked == false && i.checked == false && j.checked==false && k.checked==false && l.checked==false && m.checked == false && n.checked == false && o.checked == false && p.checked==false && q.checked==false){
                    alerts('Please select at least one column header.');
                    return "false";
                }else{
					if(y.checked == true){
                        assignedfunction ="slotsummarypdf";
                    }
                    subQryCGI();
                    $('#CustomGenerateReportSlot').dialog("close");
                }
            }
        }else if(assignedfunction =="modulesummarycsv"){
			if(statsview == 'Utilization'){
                if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && f.checked==false){
                    alerts('Please select at least one column header.');
                    return "false";
                }else{
					if(y.checked == true){
                        assignedfunction ="modulesummarypdf";
                    }
                    subQryCGI();
                    $('#CustomGenerateReportModule').dialog("close");
                }
            }else{
                if(a.checked == false && b.checked == false && g.checked==false && h.checked == false && i.checked == false && j.checked==false && k.checked==false && l.checked==false && m.checked == false && n.checked == false){
                    alerts('Please select at least one column header.');
                    return "false";
                }else{
					if(y.checked == true){
                        assignedfunction ="modulesummarypdf";
                    }
                    subQryCGI();
                    $('#CustomGenerateReportModule').dialog("close");
                }
            }
        }else if(assignedfunction =="portsummarycsv"){
            if(statsview == 'Utilization'){
                if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && f.checked==false){
                    alerts('Please select at least one column header.');
                    return "false";
                }else{
                    subQryCGI();
					if(y.checked == true){
                        assignedfunction ="portsummarypdf";
                    }
                    $('#CustomGenerateReportPort').dialog("close");
                }
            }else{
                if(a.checked == false && b.checked == false && g.checked==false && h.checked == false && i.checked == false && j.checked==false && k.checked==false && l.checked==false && m.checked == false && n.checked == false && o.checked==false && p.checked==false && q.checked == false){
                    alerts('Please select at least one column header.');
                    return "false";
                }else{
					if(y.checked == true){
                        assignedfunction ="portsummarypdf";
                    }
                    subQryCGI();
                    $('#CustomGenerateReportPort').dialog("close");
                }
            }
        }
    }else if(x.checked == false || y.checked == false){
        alerts('Please check csv or pdf file');
        return "false";
    }else{
        alerts('No selected column header');
        return "false";
    }
	function subQryCGI(){
        queryInformationToCGI(queryVar,selname,cbname,assignedfunction,checkname);
        if (globalLoad == "rmResStat") {
            $('#'+refreshFlagResource+"Checkbox").attr("checked",false);
        } else {
            $('#'+globalLoad+"Checkbox").attr("checked",false);
        }
        $('input[name="'+selname+'Sel"]').each(function() {
            $(this).attr('checked',false);
            $(this).parent().parent().removeClass('highlight');
        });
        globalPageLoad[globalLoad] = "";
        return "true";
    }
}

/*
 *
 *  FUNCTION NAME : UserValidation()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads the checkboxes for generate report of user detailed and summary
 *  PARAMETERS    : queryVar,selname,cbname,assignedfunction,checkname,id
 *
 */
function UserValidation(queryVar,selname,cbname,assignedfunction,checkname,id){
    if(assignedfunction == "userdetailedcsv"){
        var a = document.getElementById('UserDefaultUserName');
        var b = document.getElementById('UserDefaultUserType');
        var c = document.getElementById('UserDefaultUserType');
        var d = document.getElementById('UserDefaultFullName');
        var e = document.getElementById('UserDefaultStartReservation');
        var h = document.getElementById('UserDefaultEndReservation');
        var i = document.getElementById('UserDefaultStatus');
        var j = document.getElementById('UserDefaultUtilization');
        var k = document.getElementById('UserDefaultGroup');
        var l = document.getElementById('UserDefaultDomain');


    }else if(assignedfunction == "usersummarycsv"){
        var a = document.getElementById('UserDefaultUserName');
        var b = document.getElementById('UserDefaultLastName');
        var c = document.getElementById('UserDefaultFirstName');
        var d = document.getElementById('UserDefaultMiddleName');
        var e = document.getElementById('UserDefaultUserLevel');
        var h = document.getElementById('UserDefaultIdle');
        var i = document.getElementById('UserDefaultReservation');
        var j = document.getElementById('UserDefaultIdlePer');
        var k = document.getElementById('UserDefaultNoRescheduled');
        var l = document.getElementById('UserDefaultRescheduledPer');
        var m = document.getElementById('UserDefaultCancelled');
        var n = document.getElementById('UserDefaultCancelledPer');
        var o = document.getElementById('UserDefaultReservationPer');
        var p = document.getElementById('UserDefaultScheduled');
        var q = document.getElementById('UserDefaultNoScheduled');
        var r = document.getElementById('UserDefaultGroup');
        var s = document.getElementById('UserDefaultDomain');
        var t = document.getElementById('UserDefaultManagerName');
        var u = document.getElementById('UserDefaultMaxReservation');
    }

    var f = document.getElementById('csvuser');
    var g = document.getElementById('exceluser');
	/*$("#StatisticReport6Button").addClass("ui-button-disabled");
    $("#StatisticReport6Button").addClass("ui-state-disabled");
    $("#StatisticReport6Button").attr('disabled',true);
    $("#StatisticGraphButton6").addClass("ui-button-disabled");
    $("#StatisticGraphButton6").addClass("ui-state-disabled");
    $("#StatisticGraphButton6").attr('disabled',true);*/
	var views = $('#viewStatSelect').val();
    var chkbox;

	if(f.checked == true || g.checked == true){
        if(assignedfunction == "usersummarycsv"){
            if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && h.checked == false && i.checked == false && j.checked == false && k.checked == false && l.checked == false && m.checked == false && o.checked == false && p.checked == false && q.checked == false && r.checked == false && s.checked == false && t.checked == false && u.checked == false){
	            alerts('Please select at least one column header.');
    	        return "false";
            }else{
				if(g.checked == true){
					assignedfunction = "usersummarypdf";
				}
	            subQryCGI();
	            $('#msg').dialog("close");
    	        $('#CustomGenerateReportUser').dialog("close");
            }
        }else{
            if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && h.checked == false && i.checked == false && j.checked == false && k.checked == false && l.checked  == false){
            alerts('Please select at least one column header.');
                return "false";
            }else{
				if(g.checked == true){
                    assignedfunction = "userdetailedpdf";
                }
                subQryCGI();
                $('#msg').dialog("close");
                $('#CustomGenerateReportUser').dialog("close");
            }

        }
    }else if(f.checked == false && g.checked == false ){
        alerts('Please check csv or pdf file');
        return "false";
    }else{
        alerts('No selected column header');
        return "false";
    }
	function subQryCGI(){
        if(views =="Summary"){
            selname = selname+"2";
            chkbox = "Checkbox";
        }else{
            selname = selname;
            chkbox = "Checkbox2";
        }
        queryInformationToCGI(queryVar,selname,cbname,assignedfunction,checkname);
        if (globalLoad == "rmResStat") {
            $('#'+refreshFlagResource+"Checkbox").attr("checked",false);
        } else {
            $('#'+globalLoad+chkbox).attr("checked",false);
        }
        $('input[name="'+selname+'Sel"]').each(function() {
            $(this).attr('checked',false);
            $(this).parent().parent().removeClass('highlight');
        });
        globalPageLoad[globalLoad] = "";
        return "true";
    }
}


/*
 *
 *  FUNCTION NAME : deviceValidation()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads the checkboxes for generate report of device detailed
 *  PARAMETERS    : queryVar,selname,cbname,assignedfunction,checkname,id
 *
 */
function deviceValidation(queryVar,selname,cbname,assignedfunction,checkname,id){
    var a = document.getElementById('DeviceDefaultDateAdded');
    var b = document.getElementById('DeviceDefaultDeviceId');
    var c = document.getElementById('DeviceDefaultHostName');
    var d = document.getElementById('DeviceDefaultManufacturer');
    var e = document.getElementById('DeviceDefaultModel');
    var f = document.getElementById('DeviceDefaultIdle');
    var g = document.getElementById('DeviceDefaultReservation');
    var h = document.getElementById('DeviceDefaultIdlePer');
    var i = document.getElementById('DeviceDefaultReservationPer');
    var j = document.getElementById('ExpandedManagementIp');
    var k = document.getElementById('ExpandedConsoleIp');
    var l = document.getElementById('ExpandedDeviceType');
    var m = document.getElementById('ExpandedOSVersion');
    var n = document.getElementById('ExpandedSystemMem');

	var o = document.getElementById('csvdevice');
    var p = document.getElementById('exceldevice');
/*	$("#StatisticReportButton").addClass("ui-button-disabled");
    $("#StatisticReportButton").addClass("ui-state-disabled");
    $("#StatisticReportButton").attr('disabled',true);
    $("#StatisticGraphButton").addClass("ui-button-disabled");
    $("#StatisticGraphButton").addClass("ui-state-disabled");
    $("#StatisticGraphButton").attr('disabled',true);*/
	if(o.checked == true || p.checked == true){
        if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && f.checked == false && g.checked == false && h.checked == false && i.checked == false && j.checked == false && k.checked == false && l.checked == false && m.checked == false && n.checked == false){
            alerts('Please select at least one column header.');
            return "false";
        }else{
            var views = $('#viewStatSelect').val();
            var chkbox;
			if(p.checked == true){
				assignedfunction = 'devicepdf';
			}
            queryInformationToCGI(queryVar,selname,cbname,assignedfunction,checkname);
            $('#CustomGenerateReportDevice').dialog("close");
            if(views =="Summary"){
                chkbox = "Checkbox";
            }else{
                chkbox = "Checkbox2";
            }
            if (globalLoad == "rmResStat") {
                $('#'+refreshFlagResource+chkbox).attr("checked",false);
            } else {
                $('#'+globalLoad+chkbox).attr("checked",false);
            }
            $('input[name="'+selname+'Sel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            globalPageLoad[globalLoad] = "";
            return "true";
            $('#'+id).dialog("close");
        }
    }else if(o.checked == false && p.checked == false ){
        alerts('Please check csv or pdf file');
        return "false";
    }
    else{
        alerts('No selected column header');
        return "false";
    }
}


/*
 *
 *  FUNCTION NAME : slotValidation()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads the checkboxes for generate report of slot detailed
 *  PARAMETERS    : queryVar,selname,cbname,assignedfunction,checkname,id
 *
 */
function slotValidation(queryVar,selname,cbname,assignedfunction,checkname){
    var a = document.getElementById('SlotDefaultDateAdded');
    var b = document.getElementById('SlotDefaultDeviceId');
    var c = document.getElementById('SlotDefaultHostName');
    var d = document.getElementById('SlotDefaultNumber');
    var e = document.getElementById('SlotDefaultProductId');
    var f = document.getElementById('SlotDefaultDescription');
    var g = document.getElementById('SlotDefaultIdle');
    var h = document.getElementById('SlotDefaultReservation');
    var i = document.getElementById('SlotDefaultIdlePer');
    var j = document.getElementById('SlotDefaultReservationPer');

    var o = document.getElementById('csvslot');
	var p = document.getElementById('excelslot');
/*	$("#StatisticReport3Button").addClass("ui-button-disabled");
    $("#StatisticReport3Button").addClass("ui-state-disabled");
    $("#StatisticReport3Button").attr('disabled',true);
    $("#StatisticGraphButton3").addClass("ui-button-disabled");
    $("#StatisticGraphButton3").addClass("ui-state-disabled");
    $("#StatisticGraphButton3").attr('disabled',true);*/

	if(o.checked == true || p.checked == true){
        if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && f.checked == false && g.checked == false && h.checked == false && i.checked == false && j.checked == false){
            alerts('Please select at least one column header.');
            return "false";
        }else{
            var views = $('#viewStatSelect').val();
            var chkbox;
			if(p.checked == true){
                assignedfunction = 'slotpdf';
            }
            queryInformationToCGI(queryVar,selname,cbname,assignedfunction,checkname);
            $('#CustomGenerateReportSlot').dialog("close");
            if(views =="Summary"){
                chkbox = "Checkbox";
            }else{
                chkbox = "Checkbox2";
            }
            if (globalLoad == "rmResStat") {
                $('#'+refreshFlagResource+chkbox).attr("checked",false);
            } else {
                $('#'+globalLoad+chkbox).attr("checked",false);
            }
            $('input[name="'+selname+'Sel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            globalPageLoad[globalLoad] = "";
            return "true";
            $('#'+id).dialog("close");
        }
    }else if(o.checked == false && p.checked == false ){
        alerts('Please check csv or pdf file');
        return "false";
    }else{
        alerts('No selected column header');
        return "false";
    }
}


/*
 *
 *  FUNCTION NAME : moduleValidation()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads the checkboxes for generate report of module detailed
 *  PARAMETERS    : queryVar,selname,cbname,assignedfunction,checkname,id
 *
 */
function moduleValidation(queryVar,selname,cbname,assignedfunction,checkname){
    var a = document.getElementById('ModuleDefaultDateAdded');
    var b = document.getElementById('ModuleDefaultDeviceId');
    var c = document.getElementById('ModuleDefaultHostName');
    var d = document.getElementById('ModuleDefaultSlotNumber');
    var e = document.getElementById('ModuleDefaultSlotProductId');
    var g = document.getElementById('ModuleDefaultProductId');
    var h = document.getElementById('ModuleDefaultDescription');
    var i = document.getElementById('ModuleDefaultIdle');
    var j = document.getElementById('ModuleDefaultReservation');
    var k = document.getElementById('ModuleDefaultIdlePer');
    var l = document.getElementById('ModuleDefaultReservationPer');

    var o = document.getElementById('csvmodule');
	var p = document.getElementById('excelmodule');
 	/*$("#StatisticReport4Button").addClass("ui-button-disabled");
    $("#StatisticReport4Button").addClass("ui-state-disabled");
    $("#StatisticReport4Button").attr('disabled',true);
    $("#StatisticGraphButton4").addClass("ui-button-disabled");
    $("#StatisticGraphButton4").addClass("ui-state-disabled");
    $("#StatisticGraphButton4").attr('disabled',true);*/
	if(o.checked == true || p.checked == true){
        if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && g.checked == false && h.checked == false && i.checked == false && j.checked == false && k.checked == false && l.checked == false){
            alerts('Please select at least one column header.');
            return "false";
        }else{
            var views = $('#viewStatSelect').val();
            var chkbox;
			if(p.checked == true){
                assignedfunction = 'modulepdf';
            }
            queryInformationToCGI(queryVar,selname,cbname,assignedfunction,checkname);
            $('#CustomGenerateReportModule').dialog("close");
            if(views =="Summary"){
                chkbox = "Checkbox";
            }else{
                chkbox = "Checkbox2";
            }
            if (globalLoad == "rmResStat") {
                $('#'+refreshFlagResource+chkbox).attr("checked",false);
            } else {
                $('#'+globalLoad+chkbox).attr("checked",false);
            }
            $('input[name="'+selname+'Sel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            globalPageLoad[globalLoad] = "";
            return "true";
            $('#'+id).dialog("close");
        }
    }else if(o.checked == false && p.checked == false ){
        alerts('Please check csv or pdf file');
        return "false";
    }
    else{
        alerts('No selected column header');
        return "false";
 	}
}


/*
 *
 *  FUNCTION NAME : portValidation()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads the checkboxes for generate report of port detailed
 *  PARAMETERS    : queryVar,selname,cbname,assignedfunction,checkname,id
 *
 */
function portValidation(queryVar,selname,cbname,assignedfunction,checkname){
    var a = document.getElementById('PortDefaultDateAdded');
    var b = document.getElementById('PortDefaultDeviceId');
    var c = document.getElementById('PortDefaultHostName');
    var d = document.getElementById('PortDefaultSlotNumber');
    var e = document.getElementById('PortDefaultSlotProductId');
    var f = document.getElementById('PortDefaultModuleNumber');
    var g = document.getElementById('PortDefaultModuleProductId');
    var h = document.getElementById('PortDefaultPortName');
    var i = document.getElementById('PortDefaultNumber');
    var j = document.getElementById('PortDefaultMediaType');
    var k = document.getElementById('PortDefaultSpeed');
    var l = document.getElementById('PortDefaultIdle');
    var m = document.getElementById('PortDefaultReservation');
    var n = document.getElementById('PortDefaultIdlePer');
    var o = document.getElementById('PortDefaultReservationPer');

    var p = document.getElementById('csvport');
	var q = document.getElementById('excelport');
 	/*$("#StatisticReport5Button").addClass("ui-button-disabled");
    $("#StatisticReport5Button").addClass("ui-state-disabled");
    $("#StatisticReport5Button").attr('disabled',true);
    $("#StatisticGraphButton5").addClass("ui-button-disabled");
    $("#StatisticGraphButton5").addClass("ui-state-disabled");
    $("#StatisticGraphButton5").attr('disabled',true);*/

	if(p.checked == true || q.checked == true){
        if(a.checked == false && b.checked == false && c.checked == false && d.checked == false && e.checked == false && f.checked == false && g.checked == false && h.checked == false && i.checked == false && j.checked == false && k.checked == false && l.checked == false && m.checked == false && n.checked == false && o.checked == false){
            alerts('Please select at least one column header.');
            return "false";
        }else{
            var views = $('#viewStatSelect').val();
            var chkbox;
			if(q.checked == true){
	        	assignedfunction = 'portpdf';
            }
            queryInformationToCGI(queryVar,selname,cbname,assignedfunction,checkname);
            $('#CustomGenerateReportPort').dialog("close");
            if(views =="Summary"){
                chkbox = "Checkbox";
            }else{
                chkbox = "Checkbox2";
            }
            if (globalLoad == "rmResStat") {
                $('#'+refreshFlagResource+chkbox).attr("checked",false);
            } else {
                $('#'+globalLoad+chkbox).attr("checked",false);
            }
            $('input[name="'+selname+'Sel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            globalPageLoad[globalLoad] = "";
            return "true";
            $('#'+id).dialog("close");
        }
    }else if(q.checked == false && p.checked == false ){
        alerts('Please check csv or pdf file');
        return "false";
    }
    else{
        alerts('No selected column header');
        return "false";
    }
}


/*
 *
 *  FUNCTION NAME : openGraphView()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads a pop for graphs of Device,Slot, Module, Port
 *  PARAMETERS    : type,id,action,selname
 *  
 */
function openGraphView(type,id,action,selname) {
    $('#selectedDevStat').dialog({
        autoOpen: false,
		position: 'center',
        resizable: false,
        modal: true,
        minHeight: 600,
        zIndex: 12000,
        width: '98%',
        closeOnEscape: false,
        draggable: false,
        open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide();  },
        buttons: {
            'Line': function() {
                $('#manualAlert').dialog('close');
                //$('#graphDiv').empty();
                $('#selectedDevStat').empty().load('../pages/StatisticGraph2.php',function(){
                    var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
                    $("#graphDiv").empty().append(verifySelected);
                    initGraph("Line",id,action);
                });
				//initGraph("Line",id,action);
			},
            'Pie': function() {
                if (id.length == 1) {
					//$('#graphDiv').empty();
					$('#selectedDevStat').empty().load('../pages/StatisticGraph2.php',function(){
                        var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
                        $("#graphDiv").empty().append(verifySelected);
                        initGraph("Pie",id,action);
                    });
                    //initGraph("Pie",id,action);
                } else {
                    //$('#graphDiv').empty();
                    $('#manualAlert').dialog({
                        autoOpen: false,
                        resizable: false,
                        modal: true,
                        height: 250,
                        width: 350,
                        closeOnEscape: false,
                        open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide();  },
                        buttons: {
                            "Close": function() {
                                $(this).dialog('close');
                                //$('#graphDiv').empty();
                                //initGraph("Line",id,action);
                                $('#selectedDevStat').empty().load('../pages/StatisticGraph2.php',function(){
                                    var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
                                    $("#graphDiv").empty().append(verifySelected);
                                    initGraph("Line",id,action);
                                });
                            }
                        }
                    });
                    var dev;
                    var label = new Array();
                    for (var p = 0; p < id.length; p++) {
						dev = getDeviceHostName(id[p]);
                        label.push(dev);
                    }
                    var string = "";
                    if (brviews == "Domain") {
                        string = "<center><br/>Please select a device:<br/><br/><table class='noborder'>";
                    } else {
                        string = "<center><br/>Please select a user:<br/><br/><table class='noborder'>";
                      }
                    for (var f=0; f < id.length; f++) {
                        string += "<tr><td><input type='radio' id='Pie' onclick='initGraph(this.id,this.value,this.action)' value='"+id[f]+"*"+action+"'></td><td>"+label[f]+"</td></tr>";
                    }
                    string += "</table><br/></center>";
                    $('#manualAlert').empty().append(string);
                    $('#manualAlert').dialog('open');
                  }
            },
            'Bar': function() {
                var component = $('#statSelect').val();
                if(component ==0){
                    var comp = 'Devices';
                }else if(component == 2){
                    var comp = 'Slots';
                }else if(component == 3){
                    var comp = 'Modules';
                }else if(component == 4){
                    var comp = 'Ports';
                }
				//if(id.length > 10){
				//	alerts("Please select only a maximum of 10 "+comp+" to view in Bar Graph.");
				//}else{
				//	$('#manualAlert').dialog('close');
				//	$('#graphDiv').empty();
				//	initGraph("Bar",id,action);
					$('#selectedDevStat').empty().load('../pages/StatisticGraph2.php',function(){
                        var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
                        $("#graphDiv").empty().append(verifySelected);
                        initGraph("Bar",id,action);
                    });
				//  }
			},
			'Close': function() {
                $('#manualAlert').dialog('close');
				$(this).dialog("close");
                if (globalLoad == "rmResStat") {
                    $('#'+refreshFlagResource+"Checkbox").attr("checked",false);
                } else {
                    $('#'+globalLoad+"Checkbox").attr("checked",false);
                  }
                $('input[name="'+selname+'Sel"]').each(function() {
                    $(this).attr('checked',false);
                    $(this).parent().parent().removeClass('highlight');
                });
                $('.ResStatCheckAll').attr('checked',false);
                globalPageLoad[globalLoad] = "";
                refreshAvailability = true;
                autoUpdate(refreshFlagResource);
                globalPageSel =[];
                $('.ResStatCheckAll').attr('checked',false);
//              FinalStatTable();
			}
        }
    });
    refreshAvailability = false;
    $('#selectedDevStat').empty().dialog('open');
    $('.ui-dialog :button').blur();
    $('#selectedDevStat').load('../pages/StatisticGraph2.php',function(){
        var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
        $("#graphDiv").empty().append(verifySelected);
        initGraph(type,id,action);
    });
}              


/*
 *
 *  FUNCTION NAME : initGraph()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : sends action to cgi about the kind of graph needed
 *  PARAMETERS    : type,id,action
 *  
 */
function initGraph(type,id,action) {
    gtype = type;
    var statview2 = $('#viewStatSelect').val();
    var view = $('#statsView').val();
    var date = $('#statTime').val();
    startdate =date;
    enddate =date;

    var mos = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        switch (view) {
        case "Day":
            var dateArr = date.split("-");
            if ($.inArray(dateArr[0],mos) != -1) {
                date = convertDate2(date,view);
                startdate =date;
                enddate = date;
            }
        break;
        case "Week":
            var dateArr = date.split(" to ")[0].split("-");
            if ($.inArray(dateArr[0],mos) != -1) {
                date = convertDate2(date,view);
            }
        break;
        case "Custom":
            var y = $('#startDate').val();
            var yArr = y.split("-");
            if ($.inArray(yArr[0],mos) != -1) {
                y = convertDate2(y,view);
            }
            $('#startDate').val(y);
            y = $('#endDate').val();
            yArr = y.split("-");
            if ($.inArray(yArr[0],mos) != -1) {
                y = convertDate2(y,view);
            }
            $('#endDate').val(y);
            startdate = $('#startDate').val();
            enddate = $('#endDate').val();

            date = $('#startDate').val()+"*"+$('#endDate').val();
        break;
        }
    globalDateInfo = date;

    var sort = Sort['ReservationStatistic'];
    var orderby = Order['ReservationStatistic'];

    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }

    if (view == "Quarter") {
        var monNam = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        var dRange = $('#statTime3').val().split(" ");
        var pos = monNam.indexOf(dRange[0])+1;
        var syear = parseInt(dRange[1]);
        startdate =  dRange[1]+"-"+pos+"-01";
        dRange = $('#statTime4').val().split(" ");
        pos = monNam.indexOf(dRange[0])+1;
        var lastday = daysInMonth(pos,syear);
        //  newdate += ","+dRange[1]+"-"+parseInt(pos)+"-"+lastday+" 23:59:59";
        newdate += ","+dRange[1]+"-"+parseInt(pos)+"-"+lastday;
        enddate = dRange[1]+"-"+parseInt(pos)+"-"+lastday;
	}
//  clearDropDown(view);
	
	if (view == "Month") {
        globalDate2 = $('#statTime2').val();
        var dRange = $("#statTime").val().split("-");
        var lastday = daysInMonth(dRange[1],dRange[0]);
        enddate = $("#statTime").val();
        startdate = $("#statTime").val();
        startdate += '-'+1;
        enddate += '-'+lastday;
    }
    if(view=='Annual'){
        startdate +='-01-01';
        enddate +='-12-31';
    }

    var labels = "";
    var dev;
    if (type == "Pie" ){
        $('#manualAlert').dialog('close');
        if (/\*/i.test(id)) {
            var t = id.split("*");
            if (t.length == 2) {
                id = t[0];
                action = t[1];
            }
        }
    }
    if (id instanceof Array) {
        for (var p = 0; p < id.length; p++) {
            dev = getDeviceHostName(id[p]);
            if (p == id.length - 1) {
                labels += "{label:'"+dev+"'}";
            } else {
                labels += "{label:'"+dev+"'},";
              }
        }
    } else {
        dev = getDeviceHostName(id);
    }

    var xVar = "";
    var yVar = "";
    var terminal = "no";
    var switch1 = "no";

    if (globalStatTerminal[globalLoad] != undefined) {
        terminal = globalStatTerminal[globalLoad];
    }

    if (globalStatSwitch[globalLoad] != undefined) {
        switch1 = globalStatSwitch[globalLoad];
    }

    var cgiurl;
	if (brviews == "Domain") {
        if (globalLoad != 'rmResStat6' && globalLoad != 'rmResStat7' && globalLoad != 'rmResStat9' && globalLoad != 'rmResStat10') {
            cgiurl = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action='+action+'&id='+id+'&start='+startdate+'&end='+enddate+"&terminal="+terminal+"&switch="+switch1;
        } else {
            var temp = date;
            if (view == "Custom") {
                date = $('#startDate').val()+"*"+$('#endDate').val();
            }
            var newdate = getSummaryDate(date,view);
            date = temp;
            var domain = statDomainVal;
            var action2 = "modelstats";
            if (globalLoad == "rmResStat7") {
                action2 = "esprpstats";
            } else if (globalLoad == "rmResStat9") {
                action2 = "modulestats";
            } else if (globalLoad == "rmResStat10") {
                action2 = "portstats";
            }
            var newdate = getSummaryDate(date,view);
            for(var i=0; i < id.length; i++) {
                id[i] = id[i].replace('+', '%2b');
            }

            var url2 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action='+action+'&id='+id+'&query='+newdate+"&terminal="+terminal+"&switch="+switch1;

            $.ajax({
                url: url2,
                dataType: 'text/xml',
                success: function(data) {
                    $("#graphDiv").empty();
                    switch (type) {
                        case "Line":
                            createLineGraph(data,labels);
                        break;
                        case "Pie":
                            createPieGraph(data,labels,view,dev);
                        break;
                        case "Bar":
                            createBarGraph(data);
                        break;
                    }
                }
            });
          }
    } else {
		 var idArr = new Array();
        var view2 = $("#viewStatSelect").val();
        if(view2 =='Detailed' && globalLoad =='rmResStat5'){
            if (id instanceof Array) {
                for (var p = 0; p < id.length; p++) {
                    dev = getDeviceHostName(id[p]);
                    //idArr.push(dev);
                }
            } else {
                dev = getDeviceHostName(id);
                //idArr.push(dev);
            }
            idArr = id;
            action = 'userdetailedgraph';
            idToSend = '&userid=';
        }else{
            action = 'userdetailedgraph';
            idArr = id;
            idToSend = '&summaryid=';
        }
        var newdate = getSummaryDate(date,view);
        cgiurl = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action='+action+'&id='+id+'&start='+startdate+'&end='+enddate+"&terminal="+terminal+"&switch="+switch1;
    }
    var viewSum = $('#viewStatSelect').val();
    if (globalLoad != 'rmResStat6' && globalLoad != 'rmResStat7' && globalLoad != 'rmResStat9' && globalLoad != 'rmResStat10') {
        $.ajax({
            url: cgiurl,
            dataType: 'text/xml',
            success: function(data) {
                $("#graphDiv").empty();
                switch (type) {
                    case "Line":
                        if(globalLoad != 'rmResStat5'){
                            createLineGraph(data,labels);
                        }else{
                            createLineUserSummaryGraph(data,labels);
                        }
                    break;
                    case "Pie":
                        createPieGraph(data,labels,view,dev);
                    break;
                    case "Bar":
                        createBarGraph(data);
                    break;
                }
            }
        });
    }
}


/*
 *
 *  FUNCTION NAME : createLineGraph()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : process the data received from CGI and transfrom it to a Line Graph
 *  PARAMETERS    : data, labels
 *  
 */
function createLineGraph(data,labels) {
    var title2 = titleGraph();
    var view =$('#viewStatSelect').val();

    var parser = new DOMParser();
    var xmlDoc;
    xmlDoc = parser.parseFromString(data ,"text/xml");
    var data2 = xmlDoc.getElementsByTagName("row");
    var data3 = xmlDoc.getElementsByTagName('Utilization');
    var seriesDATA="";
    var utilNew = "";
    var util =0;
    var ctr =0;
    var split;
    var TF;
    var maxArr=[];
    var exportVal = 'true';
    // this loop is for the highest resrvation number
	for(var y = 0; y < data3.length; y++){
        var TotalMax = data3[y].getAttribute('TotalReservation');
        maxArr.push(TotalMax);

    }
    var MaxReservation = Math.max.apply(Math, maxArr);

    if(data2.length==0){
//        alerts('No reservation for this duration.');
        //this variable set to false to hide the context menu of the grpah
        exportVal = false;
    }
    //this loop is for the reservation of the per device.
    for(var x = 0; x < data2.length; x++){
        ctr++;
        var hostname = data2[x].getAttribute('Name');
        split = hostname.split(" ");
        var utilNew = parseFloat(data2[x].getAttribute('Util'))/60;
        var RN = parseFloat(data2[x].getAttribute('ReservationNumber'));
        var idle =  data2[x].getAttribute('Idle');
        if(hostname==""){
            hostname="Unknown";
        }
        util = utilNew+','+RN;

        seriesDATA +='{'+'"name"'+':'+'"'+hostname+'"'+','+'"data"'+':'+'"'+util+'"'+'},';
    }
    //this condition is for showing of scroll bar for Line Graph when the MaxReservation is greater than 50
    if(MaxReservation<50){
        TF = '';
        var maxVal = MaxReservation;
    }else if(MaxReservation < 1000){
        TF = 'true';
        var maxVal =  50;
    }else{
        TF = 'true';
        var maxVal =  100;
	}

    var val = seriesDATA.substring(0,seriesDATA.length-1);
    var dataCHART = '['+val+']';

    //options variable contains the style and data for rendering graph in highcharts
    var options = {
        chart: {
			backgroundColor: null,
            renderTo: 'graphDiv',
            alignTicks: false,
            backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
            borderWidth: 2,
            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            plotShadow: true,
            plotBorderWidth: 1
        },
		credits: {
	    	enabled: false,
            href : 'http://www.narrasystems.com',
            text: 'NarraSystems'
	    },
		colors: [
           '#2f7ed8',
           '#0d233a',
           '#8bbc21',
           '#910000',
           '#1aadce',
           '#492970',
           '#f28f43',
           '#77a1e5',
           '#c42525',
           '#a6c96a'
        ],
        exporting: {
            enabled: exportVal
        },
        title: {
            text: 'Reservation Duration',
            style: {
                color: '#000',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            text: '<b>'+title2+'</b>',
            style: {
                color: '#666666',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        xAxis: {
		//min:0,
            max: maxVal,
            gridLineWidth: 1,
            allowDecimals: false,
            lineColor: '#000',
            tickColor: '#000',
            labels: {
                style: {
                    color: '#000',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: 'Reservation Number',
                style: {
                    color: '#333',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'

                }
            }
        },
       yAxis: {
///			type: 'datetime',
            minorTickInterval: 'auto',
            allowDecimals: false,
//            min: 0,
            lineColor: '#000',
//          endOnTick: false,
    		lineWidth: 1,
            tickWidth: 1,
            tickColor: '#000',
            labels: {
                formatter: function(){
                         if(this.value < 2){
                            return this.value+' hr'
                        }else{

                            return this.value+' hrs'
                        }
                },
                style: {
                    color: '#000',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: 'Reservation(Hours)',
                style: {
                    color: '#333',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                }
           }

        },
        plotOptions: {
            series:{
                pointStart: 1,
            }
        },
        scrollbar: {
            enabled: TF
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'black'

            },
            itemHoverStyle: {
                color: '#039'
            },
            itemHiddenStyle: {
                color: 'gray'
            }
        },
        tooltip: {
            formatter: function () {
                return this.series.name + '<br />Reservation Number:  ' + this.x +'<br/>Reservation Time: <b>'+ this.y.toFixed(2)+'hr(s)</b>';

            },
			backgroundColor: {
                linearGradient: [0, 0, 0, 60],
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#E0E0E0']
                ]
            }
        },
        labels: {
			style: {
                    color: '#99b'
            }
        },
        series: []
    };
    //convert xml file to JSON
    data = JSON.parse(dataCHART);
    var names = [];
    //stores data from the query into series data of chart.
    $.each(data, function (i, ligne) {
        var ind = names.indexOf(ligne.name),
            splited = ligne.data.split(','),
            x = parseFloat(splited[0]);
            y = parseFloat(splited[1]);
        if (ind == -1) {
            ind = names.push(ligne.name) - 1;
            options.series.push({
                data: [],
                name: ligne.name
            });
        }
        if(!isNaN(x) && !isNaN(y)){
            options.series[ind].data.push([y,x]);
        }
    });
    //rendering the options to graph
    var chart = new Highcharts.Chart(options);
}

/*
 *
 *  FUNCTION NAME : titleGraph()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : title for all graphs in reservation table
 *  PARAMETERS    : 
 *  
 */
function titleGraph(){
    var title2 = "";
    var view =$('#viewStatSelect').val();
//	var dte = date.split(',');
    if ($('#statsView').val() != "Custom" && $('#statsView').val() != "Quarter" && $('#statsView').val() != "Month") {
		title2 = dte[0];

    } else if ($('#statsView').val() == "Month") {
		title2 = date ;
    } else if ($('#statsView').val() == "Quarter") {
		title2 = date;
	} else {
		title2 = date;
    }
    return title2

}
/*
 *
 *  FUNCTION NAME : titleGraphReservation()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : 
 *  REVISION DATE : October 06, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : title for all graphs in reservation table
 *  PARAMETERS    : 
 *  
 */
function titleGraphReservation(){
    var title2 = "";
    var view =$('#viewStatSelect').val();
//	var dte = date.split(',');
    if ($('#statsView2').val() == "Day" ) {
		title2 = dte[0];

    } else if ($('#statsView2').val() == "Month") {
		title2 = date ;
    } else if ($('#statsView2').val() == "Quarter2") {
		title2 = date;
	} else {
		title2 = date;
    }
    return title2

}




/*
 * Gradient color effects
 */
function gradientPie(){
	if(gradientCtr ==1){
	Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
		return {
    		radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
	        stops: [
    	    	[0, color],
        	    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
	        ]
		};
	});
	}
}

/*
 *
 *  FUNCTION NAME : createPieGraph()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : process the data received from CGI and transfrom it to a Pie Graph
 *  PARAMETERS    : data, labels, type, dev
 *  
 */
var gradientCtr=0;
function createPieGraph(data,labels,type,dev) {
	gradientCtr++;
	gradientPie();
    if (type == "Day") {
        type = "Daily";
    } else if (type != "Annual") {
        type += "ly";
    }

    var title2 = titleGraph();

    var parser = new DOMParser();
    var xmlDoc;
    xmlDoc = parser.parseFromString(data ,"text/xml");
    var data2 = xmlDoc.getElementsByTagName("row");
    var hostname="";
    var passed = "";
    var failed = "";
    var cancelled="";
    var tpass=0;
    var tcancel=0;
    var tfail=0;
    var ctr =0;
    var enabledVal = true;
    var exportVal = true;
    for(var x = 0; x < data2.length; x++){
        ctr++;
        hostname = data2[x].getAttribute('Name');
        passed = data2[x].getAttribute('Pass');
        cancelled = data2[x].getAttribute('NumberOfCancellation');
        failed = data2[x].getAttribute('Failed');
        tcancel = tcancel + parseFloat(cancelled);
        tpass = tpass + parseFloat(passed);
        tfail = tfail + parseFloat(failed);

    }
	if(data2.length==0){
		var pieLeg = false;
		var serData = [];
	}else{
		var pieLeg = true;
		var serData = [{ name:'Completely Utilized', y: tpass, sliced:true, selected:true},['Failed',tfail],['Cancellation',   tcancel]];
	}
    if(tcancel == 0 && tpass == 0 && tfail == 0 ){
        //this variable set to false to hide the context menu of the grpah and labels of pie chart
        exportVal = false;
        enabledVal= false;
    }
    var uberTranslate = Highcharts.seriesTypes.pie.prototype.translate;
    Highcharts.seriesTypes.pie.prototype.translate = function() {
        uberTranslate.apply(this, arguments);
        var points = this.points,
            i = points.length;
        while (i--) {
            points[i].percentage = Highcharts.numberFormat(points[i].percentage, 2);
        }
    };

	
    $('#graphDiv').highcharts({
        chart: {
			backgroundColor: null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
		credits: {
	    	enabled: false,
            href : 'http://www.narrasystems.com',
            text: 'NarraSystems'
	    },
        exporting: {
            enabled: exportVal
        },
        title: {
            text: type+' Reservation for '+dev
        },
        subtitle: {
            text: 'Reservation Count: '+ctr+'<br><b>'+title2+'</b>'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            percentageDecimals: 1,
			backgroundColor: {
                linearGradient: [0, 0, 0, 60],
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#E0E0E0']
                ]
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: enabledVal,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        if(this.y != 0){
                            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %' +' ('+this.y+')';
                        }
                    }
                },
                showInLegend: pieLeg
            }
        },
        series: [{
			type: 'pie',
            name: hostname,
//            colors: ['#4572A7','#89A54E','#92A8CD'],
            data: serData
        }]
    });
}


/*
 *
 *  FUNCTION NAME : createBarGraph()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : process the data received from CGI and transfrom it to a Bar Graph
 *  PARAMETERS    : data
 *  
 */
function createBarGraph(data){
    var title2 = titleGraph();
    var divContainer = 'tabularData';
    var xsltName = '../xslt/StatisticBarGraph.xsl';
    displayCGI(data,divContainer,xsltName);
    var title2 = "";
    var parser = new DOMParser();
    var xmlDoc;
    xmlDoc = parser.parseFromString(data ,"text/xml");
    var data2 = xmlDoc.getElementsByTagName("Utilization");
    var seriesDATA="";
    var utilNew = "";
    var util =0;
//  var exportVal = true;
	if(globalLoad =='rmResStat11'){
        var xLabel ='Username';

    }else{
        var xLabel ='Device';

    }
    for(var x = 0; x < data2.length; x++){

        if(x<3){
            var angleVal = -45;
            var widthBar = 600;
        }else{
            var angleVal = -60;
            var widthBar = 1305;
        }
    }
     $('#graphDiv').highcharts({
        data: {
            table: document.getElementById('datatable')
        },
        chart: {
            width: widthBar,
            type: 'column'
        },
		credits: {
	    	enabled: false,
            href : 'http://www.narrasystems.com',
            text: 'NarraSystems'
	    },
        title: {
            text: 'Reservation Duration',
            style: {
                color: '#000',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            text: '<b>'+title2+'</b>',
            style: {
                color: '#666666',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        yAxis:{
            min:0,
            max:100,
//          endOnTick: false,
          	title:{
                text: 'Utilization'
            },
            labels: {
                format: '{value}%'
            }

        },
        xAxis: {
            min:0,
    //      max:100,
          	allowDecimals: false,
            overflow: 'justify',
            title: {
                text: xLabel
            },
            labels: {
                rotation: angleVal,
                style: {
                    font: '12px "Trebuchet MS", Verdana, sans-serif'
                },
                align: 'right'
            }
        },
        legend: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+this.x + ': ' + this.y+'%';
            },
			backgroundColor: {
                linearGradient: [0, 0, 0, 60],
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#E0E0E0']
                ]
            }
        }
    });
}


/*
 *
 *  FUNCTION NAME : initGraphReserve()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize a graph in a dialog box for Reservation
 *  PARAMETERS    : type,id,action
 *  
 */
var globalIdInitGraphReserve;//,autoUpdateVarRG,autoUpdateVarTT;
function initGraphReserve(type,id,action){
	if(!id){
		id = globalIdInitGraphReserve;
	}
    action = "reservationgraph";
    var cgiurl = 'https://'+CURRENT_IP+'/cgi-bin/Final/NFast/NFast_STAT/NFastSTATCGI.py?action='+action+'&query='+id;


    $.ajax({
        url: cgiurl,
        dataType: 'text/xml',
        success: function(data) {
			var a = $.trim(data);
			//<--For stoping the graph loader
			topLoaderRunning = true;
        	animator = false;
            $topLoader.setProgress(100);
	        $topLoader.setValue('100%');
			//-->>
/*			
			var command = "initGraphReserve()";
			autoUpdateVarRG = setTimeout(command,35000);
			var command2 = "graphToolTip()";
			autoUpdateVarTT = setTimeout(command2,35000);
*/

			$('#graphDivMain').load('../pages/StatisticGraph.php',function(){
				$('#graphDiv2').css({'height':innerGraphDiv});
	        	var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
				$('#graphDiv2').css({'height':innerGraphDiv});
				createLineGraphReserve(data);
			});
			if($("#status").text() == "Full screen disabled"){
				setTimeout(function(){
					$('#tabularData').show();
				},400);
			}else if($("#status").text() == "Full screen enabled"){
				setTimeout(function(){
					$('#tabularData').hide();
				},400);
			}
			$('#checkDiv').css({'visibility':'visible'});
        }
    });
}


/*
 *
 *  FUNCTION NAME : createLineGraphReserve()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : process the data received from CGI and transfrom it to a Line Graph for Reservation
 *  PARAMETERS    : data
 *  
 */
var chartMargin=80;
var chartLegend=0;
function createLineGraphReserve(data) {
	data = "<data><row x-Axis='1' y-Axis='12' Name='Reservation'/><row x-Axis='2' y-Axis='10' Name='Reservation'/><row x-Axis='3' y-Axis='5' Name='Reservation'/><row x-Axis='4' y-Axis='5' Name='Reservation'/><row x-Axis='5' y-Axis='6' Name='Reservation'/><row x-Axis='6' y-Axis='6' Name='Reservation'/><row x-Axis='7' y-Axis='6' Name='Reservation'/><row x-Axis='8' y-Axis='5' Name='Reservation'/><row x-Axis='9' y-Axis='5' Name='Reservation'/><row x-Axis='10' y-Axis='5' Name='Reservation'/><row x-Axis='11' y-Axis='5' Name='Reservation'/><row x-Axis='12' y-Axis='5' Name='Reservation'/><row x-Axis='13' y-Axis='5' Name='Reservation'/><row x-Axis='14' y-Axis='5' Name='Reservation'/><row x-Axis='15' y-Axis='5' Name='Reservation'/><row x-Axis='16' y-Axis='5' Name='Reservation'/><row x-Axis='17' y-Axis='5' Name='Reservation'/><row x-Axis='18' y-Axis='5' Name='Reservation'/></data>";

    var seriesDATA="";
    var seriesPLOT=0;
    var ctr =0;
    var split;
    var TF;
	var week = ["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
	var hour = ["","1 am","2 am","3 am","4 am","5 am","6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm","10 pm","11 pm","12 am"]; 
	var months = ["","January","February","March","April","May","June","July","August","September","October","November","December"]; 
    var exportVal = 'true';
    var maxArr=[];
    var title2 = titleGraphReservation();
    var parser = new DOMParser();
    var xmlDoc;
	var min;
    var MaxReservation="";
    xmlDoc = parser.parseFromString(data ,"text/xml");
    var data2 = xmlDoc.getElementsByTagName("row");
    if(data2.length==0){
//        alerts('No reservation for this duration.');
        exportVal = false;
    }
    //this condition is for showing of scroll bar for Line Graph when the MaxReservation is greater than 50
    if(MaxReservation<50){
        TF = '';
        var maxVal = MaxReservation;
    }else if(MaxReservation < 1000){
        TF = 'true';
        var maxVal =  50;
    }else{
        TF = 'true';
        var maxVal =  100;
    }

    if(MaxReservation==''){
        maxVal= null;
    }
    //this loop is for the reservation of the per device.
    for(var x = 0; x < data2.length; x++){
        ctr++;
        var xAxis = data2[x].getAttribute('x-Axis');
        var yAxis = data2[x].getAttribute('y-Axis');
        var name = data2[x].getAttribute('Name');
		
        seriesPLOT = xAxis+','+yAxis;
        seriesDATA +='{'+'"name"'+':'+'"'+name+'"'+','+'"data"'+':'+'"'+seriesPLOT+'"'+'},';
    }
     if(fview == 'Day'){
		var xTitle = 'Hours';
    }
	if(fview == 'Month' || fview =='Week'){
		var xTitle = 'Day';
	}
	if(fview == 'Quarter' || fview == 'Annual'){
		var xTitle = 'Month';
	}

    var val = seriesDATA.substring(0,seriesDATA.length-1);
    var dataCHART = '['+val+']';
    var options = { //options variable contains the style and data for rendering graph in highcharts
        chart: {
			backgroundColor: null,
            renderTo: 'graphDiv2',
            alignTicks: false,
            backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
            borderWidth: 2,
            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            plotShadow: true,
            plotBorderWidth: 1,
			marginBottom: chartMargin,
			marginRight: 30,
			shadow: true,
			plotShadow: true
        },
		credits: {
	    	enabled: false,
            href : 'http://www.narrasystems.com',
            text: 'NarraSystems',
			position: {
				align: 'right',
				x: -20,
				verticalAlign: 'bottom',
				y: -20
			}
	    },
		colors: [
		   '#2f7ed8', 
		   '#0d233a', 
		   '#8bbc21', 
		   '#910000', 
		   '#1aadce', 
		   '#492970',
		   '#f28f43', 
		   '#77a1e5', 
		   '#c42525', 
		   '#a6c96a'
		],
        exporting: {
            enabled: exportVal
        },

        title: {
            text: 'Reservation',
            style: {
                color: '#396394',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            text: '<b>'+title2+'</b>',
            style: {
                color: '4a79bd',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
		
        yAxis: {
//            max: maxVal,
            gridLineWidth: 1,
            allowDecimals: false,
            lineColor: '#000',
            tickColor: '#000',
            labels: {
                style: {
                    color: '#4273a5',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: 'Number',
                style: {
                    color: '#4273a5',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'

                }
            }
        },
       xAxis: {
			type: 'datetime',
            minorTickInterval: 'auto',
            allowDecimals: false,
            lineColor: '#000',
           	lineWidth: 1,
            tickWidth: 1,
            tickColor: '#000',
            labels: {
                formatter: function(){
                    if(fview == 'Day'){
                        return hour[this.value]
                    }
					if(fview == 'Week'){
						return week[this.value]
					}             
					if(fview == 'Month'){
						return this.value
					}
					if(fview == 'Quarter'){
						return months[this.value]

					}
					if(fview == 'Annual'){
						return months[this.value]

					}

				},
                style: {
                    color: '#4273a5',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: 'Reservation('+xTitle+')',
                style: {
                    color: '#396394',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                }
           }
	    },
        plotOptions: {
        	series:{
            	pointStart: 1,
				point: {
                	events: {
                          click: function() {
							granularites(this.series.name, this.x, hour[this.x], this.y);
					//		popUpGraph(this.series.name);
                    	}
                    }
                },
				animation: {
                    duration: 3000
               	},
				cursor: 'pointer'
	       }
        },
/*        scrollbar: {
            enabled: TF
        },*/
        legend: {
			maxHeight: 40,
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'black'

            },
            itemHoverStyle: {
                color: '#039'
            },
            itemHiddenStyle: {
                color: 'gray'
            },
			floating: true,
            align: 'center',
            y: chartLegend,
			shadow: true,
			navigation: {
				animation: true
			}
        },
        tooltip: {
			formatter: function () {
				if(fview == 'Day'){
/*	                var s=''; //= '<br />Reservation Number:  ' + this.y +'<br/>Reservation Time: <b>'+ hour[this.x]+'</b><br />';					
					$.each(this.points, function(i, point) {
						if(i >0){
							var pName = '<br/><b>'+point.series.name+'</b>';
						}else{
							var pName = '<b>'+point.series.name+'</b>';
						}
						s += pName+'<br/>Reservation Number:  ' + point.y +'<br/>Reservation Time: <b>'+ hour[point.x]+'</b><br />' + toolTipVal(point.series.name);
					});
					return s;*/
					 return '<b>'+this.series.name + '</b><br />Reservation Number:  ' + this.y +'<br/>Reservation Time: <b>'+ hour[this.x]+'</b><br />' + toolTipVal(this.series.name, this.x, hour[this.x])+ '<br/><b>(Click to show graph)</b>';
				}

				if(fview == 'Week'){
	                return '<b>'+this.series.name + '</b><br />Reservation Number:  ' + this.y +'<br/>Reservation Day: <b>'+ week[this.x]+'</b><br />' + toolTipVal(this.series.name, this.x, hour[this.x])+ '<br/><b>(Click to show graph)</b>';
				}             
				if(fview == 'Month'){
	                return '<b>'+this.series.name + '</b><br />Reservation Number:  ' + this.y +'<br/>Reservation Day: <b>'+ this.x +'</b><br />' + toolTipVal(this.series.name, this.x, hour[this.x])+ '<br/><b>(Click to show graph)</b>';
				}
				if(fview == 'Quarter'){
	                return '<b>'+this.series.name + '</b><br />Reservation Number:  ' + this.y +'<br/>Reservation Month: <b>'+ months[this.x] +'</b>';//<br />' + toolTipVal(this.series.name, this.x);
				}
				if(fview == 'Annual'){
	                return '<b>'+this.series.name + '</b><br />Reservation Number:  ' + this.y +'<br/>Reservation Month: <b>'+ months[this.x]+ '</b>';//<br />' + toolTipVal(this.series.name, this.x);
				}

            },
//			shared: true,
			backgroundColor: {
                linearGradient: [0, 0, 0, 60],
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#E0E0E0']
                ]
            }
        },
        labels: {
                style: {
                    color: '#99b'
            }
        },
		navigation: {
            buttonOptions: {
				symbolStroke: '#395A9C',
                theme: {
					stroke: '#039',
                    states: {
                        hover: {
                            fill: '#7b96bd'
                        },
                        select: {
                            stroke: '#039',
                            fill: '#4A7BBD'
                        }
                    }
                }
            }
        },
        series: []
    };
    //convert xml file to JSON
    data = JSON.parse(dataCHART);
    var names = [];
    //stores data from the query into series data of chart.
    $.each(data, function (i, ligne) {
        var ind = names.indexOf(ligne.name),
            splited = ligne.data.split(','),
            x = parseFloat(splited[0]);
            y = parseFloat(splited[1]);
        if (ind == -1) {
            ind = names.push(ligne.name) - 1;
            options.series.push({
                data: [],
                name: ligne.name
            });
        }
        if(!isNaN(x) && !isNaN(y)){
            options.series[ind].data.push([x,y]);
        }
    });
    //rendering the options to graph
    var chart = new Highcharts.Chart(options);
}


/*
 *
 *  FUNCTION NAME : openGraphView2()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : loads a pop for graphs of User Summary
 *  PARAMETERS    : type,id,action
 *  
 */
function openGraphView2(type,id,action) {
    $('#selectedDevStat').dialog({
        autoOpen: false,
        resizable: false,
        modal: true,
        height: 'auto',
        width: '98%',
        closeOnEscape: false,
        draggable: false,
        open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide();  },
        buttons: {
            'Line': function() {
                $('#manualAlert').dialog('close'); 
                $('#selectedDevStat').load('../pages/StatisticGraph2.php',function(){
                    var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
                    $("#graphDiv").empty().append(verifySelected);
                    initGraph("Line",id,action);
                });
            },
            'Pie': function() {
                if (id.length == 1) {
					$('#selectedDevStat').load('../pages/StatisticGraph2.php',function(){
                        var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
                        $("#graphDiv").empty().append(verifySelected);
                        initGraph("Pie",id,action);
                    });
                } else {
                    $('#graphDiv').empty();
                    $('#manualAlert').dialog({
                        autoOpen: false,
                        resizable: false,
                        modal: true,
                        height: 250,
                        width: 350,
                        closeOnEscape: false,
                        open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide();  },
                        buttons: {
                            "Close": function() {
                                $(this).dialog('close');
								$('#selectedDevStat').load('../pages/StatisticGraph2.php',function(){
                                    var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
                                    $("#graphDiv").empty().append(verifySelected);
                                    initGraph("Line",id,action);
                                });
                            }
                        }
                    });
                    var dev;
                    var label = new Array();
                    for (var p = 0; p < id.length; p++) {
                        //dev = $('#ReservationStatisticsCheckbox'+id[p]).parent().next().next().next().find('span span').text();
                        dev = getDeviceHostName(id[p]);
                        label.push(dev);
                    }
                    var string = "";
                    if (brviews == "Domain") {
                        string = "<center><br/>Please select a device:<br/><br/><table class='noborder'>";
                    } else {
                        string = "<center><br/>Please select a user:<br/><br/><table class='noborder'>";
                    }
                    var view = $('#viewStatSelect').val();
					for (var f=0; f < id.length; f++) {
                        string += "<tr><td><input type='radio' id='Pie' onclick='initGraph(this.id,this.value,this.action)' value='"+id[f]+"*"+action+"'></td><td>"+label[f]+"</td></tr>";
                    }
                    string += "</table><br/></center>";
                    $('#manualAlert').empty().append(string);
                    $('#manualAlert').dialog('open');
                  }
            },
            'Bar': function() {
                    $('#manualAlert').dialog('close');
					$('#selectedDevStat').load('../pages/StatisticGraph2.php',function(){
                        var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
                        $("#graphDiv").empty().append(verifySelected);
                        initGraph("Bar",id,action);
                    });
			},
			'Close': function() {
                $('#manualAlert').dialog('close');
                $(this).dialog('close');
                refreshAvailability = true;
                $('.resstatcheckbox').each(function() {
                    $(this).attr('checked',false);
                    $(this).parent().parent().removeClass('highlight');
                });
                var j;
                if (globalLoad == "rmResStat") {
                    j = "ReservationStatistic";
                } else {
                    j = globalLoad;
                  }
                $('#'+j+'Checkbox2').attr('checked',false);
                $('#'+j+'Checkbox2').trigger('click');
                globalPageLoad[globalLoad] = "";
                autoUpdate(refreshFlagResource);
                globalPageSel =[];
                $('.ResStatCheckAll').attr('checked',false)
            }
        }
    });
    refreshAvailability = false;
    $('#selectedDevStat').empty().dialog('open');
    $('.ui-dialog :button').blur();
    $('#selectedDevStat').load('../pages/StatisticGraph2.php',function(){
        var verifySelected  = '<br/><br/>Rendering Graph...<br/><br/><img src="../styles/images/preloader.gif" height="100px" width="100px">';
        $("#graphDiv").empty().append(verifySelected);
        initGraph(type,id,action);
    });
}

/*
 *
 *  FUNCTION NAME : checkAllStat()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : Checks all the checkboxes of the main table
 *  PARAMETERS    : id
 *  
 */
function checkAllStat(id) {
    enabledButtonsStat();
	if(id == "ResStat") {
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#ReservationStatisticCheckbox2";
        var val2 = "#ReservationStatisticsCheckbox";
        if($(".ResStatCheckAll").attr('checked')) {
            var schCheckbox = 0;
            $('#ReservationStatisticTable input:checkbox[name="ReserveStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
            ResStat = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            $('#ReservationStatisticTable input:checkbox[name="ReserveStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            ResStat = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val2);
                }
            }
        }
    } else if(id == "ResStatRes") {
        refreshAvailability = true;
        globalFiltLoad = true;
		var val = "#ReservationCheckbox";
		if($(".ResStatResCheckAll").attr('checked')) {
            var schCheckbox = 0;
            $('#ReservationStatistic13Table input:checkbox[name="ReserveStatResSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
			ReservationStat = schCheckbox;
			getAllPageCheck();
			var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
		}else {
            $('#ReservationStatistic13Table input:checkbox[name="ReserveStatResSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
			ReservationStat = 0;
			getAllPageUnCheck();
			var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val);
                }
            }
		}
    }else if(id == 'SlotStat'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat2Checkbox2";
        var val2 = "#rmResStat2Checkbox";
        if($("#rmResStat2Checkbox2").attr('checked')) {
            globalSlotChckVar = true;
            var schCheckbox = 0;
            $('#ReservationStatistic2Table input:checkbox[name="SlotStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
            SlotStat = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalSlotChckVar = false;
            $('#ReservationStatistic2Table input:checkbox[name="SlotStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            SlotStat = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val2);
                }
            }
        }
    }else if(id == 'ModuleStat'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat3Checkbox2";
        var val2 = "#rmResStat3Checkbox";
        if($("#rmResStat3Checkbox2").attr('checked')) {
            globalModuleChckVar = true;
            var schCheckbox = 0;
            $('#ReservationStatistic3Table input:checkbox[name="ModuleStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
			ModuleStat = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalModuleChckVar = false;
            $('#ReservationStatistic3Table input:checkbox[name="ModuleStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            ModuleStat = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val2);
                }
            }
        }
    }else if(id == 'PortStat'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat4Checkbox2";
        var val2 = "#rmResStat4Checkbox";
        if($("#rmResStat4Checkbox2").attr('checked')) {
            globalPortChckVar = true;
            var schCheckbox = 0;
            $('#ReservationStatistic4Table input:checkbox[name="PortStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
            PortStat = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalPortChckVar = false;
            $('#ReservationStatistic4Table input:checkbox[name="PortStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            PortStat = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
			if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val2);
                }
            }
        }
    }else if(id == 'UserStat'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat5Checkbox2";
        var val2 = "#rmResStat5Checkbox";
        if($("#rmResStat5Checkbox2").attr('checked')) {
            globalUserChckVar = true;
            var schCheckbox = 0;
            $('#ReservationStatistic5Table input:checkbox[name="UserStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
            UserStat = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalUserChckVar = false;
            $('#ReservationStatistic5Table input:checkbox[name="UserStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            UserStat = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val2);
                }
            }
        }
    }else if(id == 'UserStat2'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat11Checkbox";
        if($("#rmResStat11Checkbox").attr('checked')) {
            globalUser2ChckVar = true;
            var schCheckbox = 0;
            $('#ReservationStatistic11Table input:checkbox[name="UserStat2Sel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
			UserStat2 = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalUser2ChckVar = false;
            $('#ReservationStatistic11Table input:checkbox[name="UserStat2Sel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            UserStat2 = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val);
                }
            }
        }
    }else if(id == 'ModelStat'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat6Checkbox";
        if($("#rmResStat6Checkbox").attr('checked')) {
            globalModelChckVar = true;
            var schCheckbox = 0;
            $('#ReservationStatistic6Table input:checkbox[name="ModelStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
            ModelStat = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalModelChckVar = false;
            $('#ReservationStatistic6Table input:checkbox[name="ModelStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            ModelStat = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
				if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val);
                }
            }
        }
    }else if(id == 'CardStat'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat7Checkbox";
        if($("#rmResStat7Checkbox").attr('checked')) {
            globalCardChckVar = true;
            var schCheckbox = 0;
            $('#ReservationStatistic7Table input:checkbox[name="CardStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
            CardStat = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalCardChckVar = false;
            $('#ReservationStatistic7Table input:checkbox[name="CardStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            CardStat = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val);
                }
            }
        }
    }else if(id == 'ProdStat'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat9Checkbox";
        if($("#rmResStat9Checkbox").attr('checked')) {
            globalProdChckVar = true;
            var schCheckbox = 0;
            $('#ReservationStatistic9Table input:checkbox[name="ProdStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox++;
            });
            ProdStat = schCheckbox;
			getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalProdChckVar = false;
            $('#ReservationStatistic9Table input:checkbox[name="ProdStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            ProdStat = 0;
            getAllPageUnCheck();
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val);
                }
            }
        }
    }else if(id == 'DescriptionStat'){
        refreshAvailability = true;
        globalFiltLoad = true;
        var val = "#rmResStat9Checkbox";
        if($("#rmResStat10Checkbox").attr('checked')) {
            globalDescChckVar = true;
            var schCheckbox2 = 0;
            $('#ReservationStatistic10Table input:checkbox[name="DescriptionStatSel"]').each(function() {
                $(this).attr('checked',true);
                $(this).parent().parent().addClass('highlight');
                schCheckbox2++;
            });
            DescriptionStat = schCheckbox;
            getAllPageCheck();
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }else{
                globalPageSel.push(val);
            }
        }else {
            globalDescChckVar = false;
            $('#ReservationStatistic10Table input:checkbox[name="DescriptionStatSel"]').each(function() {
                $(this).attr('checked',false);
                $(this).parent().parent().removeClass('highlight');
            });
            DescriptionStat = 0;
            getAllPageUnCheck();
			var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                    unCheckAllSub(val);
                }
            }
        }
    }
}



/*
 *
 *  FUNCTION NAME : checkSingleStat()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : Check the selected checkbox of the main table
 *  PARAMETERS    : ref,id, dids
 *  
 */
function checkSingleStat(ref,id,dids) {
	if(ref == "ResStatRes") {
        var schCheckbox = 0;
        $('#ReservationStatistic13Table input:checkbox[name="ReserveStatResSel"]').each(function() {
            schCheckbox++;
        });
        if($('#'+id).is(':checked')) {
			enabledButtonsStat();
			$('#'+id).parent().parent().addClass('highlight');
			ReservationStat = ReservationStat + 1;
			getPageCheck('#'+id);
        }else {
			enabledButtonsStat();
			getPageUnCheck("#"+id);
            $('#'+id).parent().parent().removeClass('highlight');
			ReservationStat = ReservationStat - 1;
        }
		if(ReservationStat == schCheckbox) {
            $(".ResStatResCheckAll").attr('checked','checked');
            var val = "#ReservationCheckbox";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }else {
            $(".ResStatResCheckAll").removeAttr('checked');
            var val = "#ReservationCheckbox";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (ReservationStat == 0) {
                refreshAvailability = true;
            }
        }
	}else if(ref == "ResStat") {
        var schCheckbox = 0;
        $('#ReservationStatisticTable input:checkbox[name="ReserveStatSel"]').each(function() {
            schCheckbox++;
        });
        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            ResStat = ResStat + 1;
            getPageCheck('#'+id);

        }else {
            enabledButtonsStat();
            ResStat = ResStat - 1;
            getPageUnCheck("#"+id);

            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(ResStat == schCheckbox) {
            $(".ResStatCheckAll").attr('checked','checked');
            var val = "#ReservationStatisticCheckbox2";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }else {
            $(".ResStatCheckAll").removeAttr('checked');
            var val = "#ReservationStatisticCheckbox2";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (ResStat == 0) {
                refreshAvailability = true;
            }
        }
    }else if(ref == "SlotStat"){
		var schCheckbox2 = 0;
        $('#ReservationStatistic2Table input:checkbox[name="SlotStatSel"]').each(function() {
            schCheckbox2++;
        });
        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            SlotStat = SlotStat + 1;
            getPageCheck('#'+id);
        }else {
            enabledButtonsStat();
            SlotStat = SlotStat - 1;
            getPageUnCheck("#"+id);
            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(SlotStat == schCheckbox2) {
            $("#rmResStat2Checkbox2").attr('checked','checked');
            var val = "#rmResStat2Checkbox2";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }
        else {
            $("#rmResStat2Checkbox2").removeAttr('checked');
            var val = "#rmResStat2Checkbox2";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (ResStat == 0) {
                refreshAvailability = true;
            }

        }
    }else if(ref == "ModuleStat"){
		var schCheckbox3 = 0;
        $('#ReservationStatistic3Table input:checkbox[name="ModuleStatSel"]').each(function() {
            schCheckbox3++;
        });

        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            ModuleStat = ModuleStat + 1;
            getPageCheck('#'+id);

        } else {
            enabledButtonsStat();
            ModuleStat = ModuleStat - 1;
            getPageUnCheck("#"+id);

            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(ModuleStat == schCheckbox3) {
            $("#rmResStat3Checkbox2").attr('checked','checked');
            var val = "#rmResStat3Checkbox2";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }
        else {
            $("#rmResStat3Checkbox2").removeAttr('checked');
            var val = "#rmResStat3Checkbox2";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (ResStat == 0) {
                refreshAvailability = true;
            }

        }
    }else if(ref == "PortStat"){
		var schCheckbox4 = 0;
        $('#ReservationStatistic4Table input:checkbox[name="PortStatSel"]').each(function() {
            schCheckbox4++;
        });

        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            PortStat = PortStat + 1;
            getPageCheck('#'+id);

        } else {
            enabledButtonsStat();
            PortStat = PortStat - 1;
            getPageUnCheck("#"+id);

            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(PortStat == schCheckbox4) {
            $("#rmResStat4Checkbox2").attr('checked','checked');
            var val = "#rmResStat4Checkbox2";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }
        else {
            $("#rmResStat4Checkbox2").removeAttr('checked');
            var val = "#rmResStat4Checkbox2";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (ResStat == 0) {
                refreshAvailability = true;
            }

        }
    }else if(ref == "UserStat"){
		var schCheckbox5 = 0;
        $('#ReservationStatistic5Table input:checkbox[name="UserStatSel"]').each(function() {
            schCheckbox5++;
        });
        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            UserStat = UserStat + 1;
            getPageCheck('#'+id);

        }else {
            enabledButtonsStat();
            UserStat = UserStat - 1;
            getPageUnCheck("#"+id);

            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(UserStat == schCheckbox5) {
            $("#rmResStat5Checkbox2").attr('checked','checked');
            var val = "#rmResStat5Checkbox2";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }
        else {
            $("#rmResStat5Checkbox2").removeAttr('checked');
            var val = "#rmResStat5Checkbox2";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (UserStat == 0) {
                refreshAvailability = true;
            }

        }
    }else if(ref == "UserStat2"){
		var schCheckbox11 = 0;
        $('#ReservationStatistic11Table input:checkbox[name="UserStat2Sel"]').each(function() {
            schCheckbox11++;
        });
        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            UserStat2 = UserStat2 + 1;
            getPageCheck('#'+id);

        }else {
            enabledButtonsStat();
            UserStat2 = UserStat2 - 1;
            getPageUnCheck("#"+id);

            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(UserStat2 == schCheckbox11) {
            $("#rmResStat11Checkbox").attr('checked','checked');
            var val = "#rmResStat11Checkbox";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }else {
            $("#rmResStat11Checkbox").removeAttr('checked');
            var val = "#rmResStat11Checkbox";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (UserStat2 == 0) {
                refreshAvailability = true;
            }
        }
    }else if(ref == "ModelStat"){
		var schCheckbox6 = 0;
        $('#ReservationStatistic6Table input:checkbox[name="ModelStatSel"]').each(function() {
            schCheckbox6++;
        });
        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            ModelStat = ModelStat + 1;
            getPageCheck('#'+id);
        }else {
            enabledButtonsStat();
            ModelStat = ModelStat - 1;
            getPageUnCheck("#"+id);
            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(ModelStat == schCheckbox6) {
            $("#rmResStat6Checkbox").attr('checked','checked');
            var val = "#rmResStat6Checkbox";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }else {
            $("#rmResStat6Checkbox").removeAttr('checked');
            var val = "#rmResStat6Checkbox";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (ModelStat == 0) {
                refreshAvailability = true;
            }

        }
    }else if(ref == "CardStat"){
		var schCheckbox7 = 0;
        $('#ReservationStatistic7Table input:checkbox[name="CardStatSel"]').each(function() {
            schCheckbox7++;
        });
        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            CardStat = CardStat + 1;
            getPageCheck('#'+id);

        }else {
            enabledButtonsStat();
            CardStat = CardStat - 1;
            getPageUnCheck("#"+id);

            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(CardStat == schCheckbox7) {
            $("#rmResStat7Checkbox").attr('checked','checked');
            var val = "#rmResStat7Checkbox";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }
        else {
            $("#rmResStat7Checkbox").removeAttr('checked');
            var val = "#rmResStat7Checkbox";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (CardStat == 0) {
                refreshAvailability = true;
            }

        }
    }else if(ref == "ProdStat"){
		var schCheckbox9 = 0;
        $('#ReservationStatistic9Table input:checkbox[name="ProdStatSel"]').each(function() {
            schCheckbox9++;
        });
        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            ProdStat = ProdStat + 1;
            getPageCheck('#'+id);

        }else {
            enabledButtonsStat();
            ProdStat = ProdStat - 1;
            getPageUnCheck("#"+id);

            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(ProdStat == schCheckbox9) {
            $("#rmResStat9Checkbox").attr('checked','checked');
            var val = "#rmResStat9Checkbox";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        } else {
            $("#rmResStat9Checkbox").removeAttr('checked');
            var val = "#rmResStat9Checkbox";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (ProdStat == 0) {
                refreshAvailability = true;
            }

        }
    }else if(ref == "DescriptionStat"){
		var schCheckbox = 0;
        $('#ReservationStatistic10Table input:checkbox[name="DescriptionStatSel"]').each(function() {
            schCheckbox++;
        });
        if($('#'+id).is(':checked')) {
            enabledButtonsStat();
            $('#'+id).parent().parent().addClass('highlight');
            DescriptionStat = DescriptionStat + 1;
            getPageCheck('#'+id);

        }else {
            enabledButtonsStat();
            DescriptionStat = DescriptionStat - 1;
            getPageUnCheck("#"+id);

            $('#'+id).parent().parent().removeClass('highlight');
        }
        if(DescriptionStat == schCheckbox) {
            $("#rmResStat10Checkbox").attr('checked','checked');
            var val = "#rmResStat10Checkbox";
            var pageChk = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(pageChk == '-1'){
                    globalPageSel.push(val);
                }
            }
            refreshAvailability = false;
        }
        else {
            $("#rmResStat10Checkbox").removeAttr('checked');
            var val = "#rmResStat10Checkbox";
            var indexofArr = globalPageSel.indexOf(val);
            if(globalPageSel != ""){
                if(indexofArr != '-1'){
                    globalPageSel.splice(indexofArr,1);
                }
            }
            if (DescriptionStat == 0) {
                refreshAvailability = true;
            }

        }
    }
}


/*
 *
 *  FUNCTION NAME : unCheckAllSub()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : Delete the id of checkbox from globalPageSel
 *  PARAMETERS    : val
 *  
 */
function unCheckAllSub(val){
    var globalIndex = [];
    var y= new RegExp(val);
    for(var x=0; x < globalPageSel.length; x++){
        var g = y.test(globalPageSel[x]);
        if(g == true){
            globalIndex.push(globalPageSel[x]);
        }
    }
    for(var z=0; z < globalIndex.length; z++){
        var h = globalPageSel.indexOf(globalIndex[z]);
        globalPageSel.splice(h,1);
    }
}

/*
 *
 *  FUNCTION NAME : globalInitStat()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : contains the date convertion
 *  PARAMETERS    : 
 *  
 */
var filterVal,fview,date,date2,mos,domain,terminal,switch1 = "";
function globalInitStat(){
	if(globalLoad == "rmResStat12" || globalLoad == "rmResStat13" || globalLoad == "rmResStat14"){
        var tmR = '2';
		fview = $('#statsView2').val();
		fview = fview[0];
    }else{
		$('#mainTblPg').show();
        $('#mainTblPg2').show();
		$('#stre-0 .links').show();
        var tmR='';
		fview = $('#statsView').val();
    }
    filterVal = globalStrFilter;
    filterVal += applyFilter();
	if(fview =='Quarter'){
		if(tmR ==2){
	        $('#ProcessText'+tmR).css({'display':'block'});
		}else{
			$('#ProcessText'+tmR).css({'visibility':'visible'});
		}
    }else{
		if(tmR ==2){
			$('#ProcessText'+tmR).css({'display':'none'});
		}else{
			$('#ProcessText'+tmR).css({'visibility':'hidden'});
		}
    }
    if(filterVal != "" ){
        page = 1;
    }

    date = $('#statTime'+tmR).val();
	if(date != 'Processing....'){
		 $('#hiddenVal').val(date);	

	}
    mos = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
    switch (fview) {
        case "Day":
            var dateArr = date.split("-");
            if ($.inArray(dateArr[0],mos) != -1) {
                date = convertDate2(date,fview);
            }
        break;
        case "Week":
            var dateArr = date.split(" to ")[0].split("-");
            if ($.inArray(dateArr[0],mos) != -1) {
                date = convertDate2(date,fview);
            }
        break;
        case "Month":
            var monNam = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var dRange = $('#statTime'+tmR).val().split("-");
            //var pos = monNam.indexOf(dRange[1])+1;
            var dRange1 = dRange[1];
			var dRange0 = parseInt(dRange[0]);
            var pos = dRange1;//parseInt(dRange1);
//            var syear = parseInt(dRange0);
            var syear = $('#monYear').val();
			if(syear == undefined){
				syear = dRange[0];
			}
//			console.log(dRange1.length, dRange1);
			if(dRange1.length ==1){
				pos = "0"+pos;
			}
            date = syear+"-"+pos+"-01";
            var lastday = daysInMonth(pos,syear);
            date += ","+syear+"-"+pos+"-"+lastday;
            globalDate2 = $('#statTime4'+tmR).val();
        break;
        case "Quarter":
            var monNam = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var dRange = $('#statTime3'+tmR).val().split(" ");
            var pos = monNam.indexOf(dRange[0])+1;
            var syear = parseInt(dRange[1]);
            date = dRange[1]+"-"+pos+"-01";
            dRange = $('#statTime4'+tmR).val().split(" ");
            pos = monNam.indexOf(dRange[0])+1;
            var lastday = daysInMonth(pos,syear);
            date += ","+dRange[1]+"-"+pos+"-"+lastday;
            globalDate2 = $('#statTime4'+tmR).val();
        break;
        case "Annual":
            var monNam = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var pos = "12";
            var syear = parseInt(date);
            date = date+"-01-01";
            var lastday = daysInMonth(pos,syear);
            date += ","+syear+"-12-"+lastday;
            globalDate2 = $('#statTime'+tmR).val();
        break;
        case "Custom":
            var y = $('#startDate'+tmR).val();
            var yArr = y.split("-");
            if ($.inArray(yArr[0],mos) != -1) {
                y = convertDate2(y,fview);
            }
            $('#startDate'+tmR).val(y);
            y = $('#endDate'+tmR).val();
            yArr = y.split("-");
            if ($.inArray(yArr[0],mos) != -1) {
                y = convertDate2(y,fview);
            }
            $('#endDate'+tmR).val(y);
            date = $('#startDate'+tmR).val()+","+$('#endDate'+tmR).val();

            globalDate2 = $('#statTime2'+tmR).val();
            var from = $("#startDate"+tmR).val();
            var to = $("#endDate"+tmR).val();
            date = from+","+to;
            $('#startDate'+tmR).val('Processing...');
            $('#endDate'+tmR).val('');
        break;
    }
    globalDateInfo = date;
    date2 = date;
    clearDropDown(fview);
	if(date != 'Processing....' || date != 'Processing....,Processing....'){
//    	$('#statTime').val("Processing....");
	}
	
	$('#srtree').addClass('clickable');
    $('#stre-10').addClass('clickable');

    domain = statDomainVal;
    terminal = "no";
    switch1 = "no";

    if (globalStatTerminal[globalLoad] != undefined) {
        terminal = globalStatTerminal[globalLoad];
    }

    if (globalStatSwitch[globalLoad] != undefined) {
        switch1 = globalStatSwitch[globalLoad];
    }

    if(fview == "Day"){
        date = date+","+date;
    }
	$.blockUI({ 
		message: null,
		overlayCSS: { backgroundColor: '#80FFFFFF'}
	}); 
}


/*
 *
 *  FUNCTION NAME : initStatTable()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Device Detailed Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable(limit) {
    var limitTrigger = limit;
    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
    }
    if (refreshFlagResource == 'ReservationStatistic') {
        globalLoad = 'rmResStat';
    } else {
        return;
    }

    $(document).ready(function() {
        //var currUser = checkUserStat(globalUser);
        if (GlobalUserLevel == "User") {
            for (var j = 0; j < 8; j++) {
                if (j == 0)
                    j = "";
                $('#ReservationStatistic'+j+'Table tr').each(function() {
                    $(this).find('th').eq(0).hide();
                });
            }
        globalDate2 = $('#statTime2').val();
        }
    });
    var page = $('#ReservationStatisticPageNumber').text();
    var limit = $('#ReservationStatisticPageLimit').val();

	if(date != 'Processing....' || date != 'Processing....,Processing....'){
 	   globalInitStat(); //all the conditions for the date is transfered here

	}
	if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }
    if (processingblocker != "" && globalDateInfo == "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    var sort = Sort['ReservationStatistic'];
    var orderby = Order['ReservationStatistic'];

    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }
    $('#ReservationStatisticTable').find("tr:gt(1)").remove();
	$('#content1').addClass('fullwidth');
    var url1 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action=devicedetailedview&id=&limit='+limit+'&page='+page+'&view='+fview+'&date='+date+'&detailedview=Detailed&domain='+domain+"&terminal="+terminal+"&switch="+switch1+"&filter="+filterVal+"&sort="+sort+"&orderby="+orderby;

	$.ajax({
        url: url1,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText').css({'visibility':'hidden'});
            var cgival=1;
            var xsltFilename = "ReservationStatistic.xsl";
            globalLoad = "rmResStat";
            data = $.trim(data);
            stattodo(data,cgival,xsltFilename);
            testStats();
            $('#ReservationStatisticCheckbox').attr('checked',false);
            var chkReserveStatSel = $("input[name='ReserveStatSel']:checked");
            if(domain=='67' || domain=='1' || domain == '69'){
                chkReserveStatSel.each(function(){
                    $(this).attr('disabled',true);
                });
            }
            swapHeader();
            checkChkbox();
            colorHeader(); //<!--for the header color when using the filter-->

            var chkMain = document.getElementById('ReservationStatisticCheckbox2');
            if(chkMain.checked == true){
                $('#ReservationStatisticTable input:checkbox[name="ReserveStatSel"]').each(function() {
                    $(this).parent().parent().addClass('highlight');
                    $(this).attr("checked", true);
                    var val = $(this).attr('id');
                    getPageCheck('#'+val);
                });
            }
            var ctr=0;
            var ctr2=0;
            $('#ReservationStatisticTable input:checkbox[name="ReserveStatSel"]').each(function() {
                if($(this).is(':checked')){
                    ctr++;
                }
                ctr2++;
                $(this).removeAttr('disabled');
            });
            ResStat = ctr;
            if(ctr == ctr2){
                if(ctr >= 1){
                    $('#ReservationStatisticCheckbox2').attr("checked",true);
                    getPageCheck('#ReservationStatisticCheckbox2');
                }else{
                    $('#ReservationStatisticCheckbox2').attr("checked",false);
                    getPageUnCheck('#ReservationStatisticCheckbox2');
                }
            }
			var match = $('#ReservationStatisticTotalMatches').html();
            if(match > 1){
                $('#matches').html('Matches');
            }else{
                $('#matches').html('Match');
            }
            $('#statsViewNew').css({'display':'block'});

            var totalmatch = $('#ReservationStatisticTotalPages').html();
            if(totalmatch == 1){
                $('#ReservationStatisticPageNumber').html('1');
                $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
            }
            globalIndexFlag = true;

        }
    });
    if(devpop){
        initSelectedDeviceStat(devpop);
    }
    $('#clearFilt').css({'visibility':'visible'});
}

/*
 *
 *  FUNCTION NAME : initStatTable3()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Slot Detailed Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable3() {

    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
    }
    if (refreshFlagResource == 'ReservationStatistic') {
        globalLoad = 'rmResStat2';
    } else {
        return;
    }

    var limit = $('#ReservationStatisticPageLimit').val();
    var page = $('#ReservationStatisticPageNumber').text();
    var sort = Sort['ReservationStatistic2'];
    var orderby = Order['ReservationStatistic2'];

    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }

    globalInitStat(); //all the conditions for the date is transfered here

    //PROCESSING ISSUE
    if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }
    if (processingblocker != "" && globalDateInfo == "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    $('#ReservationStatistic2Table').find("tr:gt(1)").remove();
	$('#content3').addClass('fullwidth');
    var url1 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action=slotdetailedview&id=&limit='+limit+'&page='+page+'&view='+fview+'&date='+date+'&detailedview=Detailed&domain='+domain+"&terminal="+terminal+"&switch="+switch1+"&filter="+filterVal+"&sort="+sort+"&orderby="+orderby;
	$.ajax({
        url: url1,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText').css({'visibility':'hidden'});
            globalLoad = "rmResStat2";
            var cgival = 2;
            stattodo(data,cgival);
            testStats();
            colorHeader();
            checkChkbox();
            swapHeader();
            var chkMain = document.getElementById('rmResStat2Checkbox2');
            if(chkMain.checked == true){
                $('#ReservationStatistic2Table input:checkbox[name="SlotStatSel"]').each(function() {
                    $(this).parent().parent().addClass('highlight');
                    $(this).attr("checked", true);
                    var val = $(this).attr('id');
                    getPageCheck('#'+val);
                });
            }
            var ctr=0;
            var ctr2=0;
            $('#ReservationStatistic2Table input:checkbox[name="SlotStatSel"]').each(function() {
                if($(this).is(':checked')){
                    ctr++;
                }
                ctr2++;
                $(this).removeAttr('disabled');
            });
            SlotStat = ctr;
            if(ctr == ctr2){
                if(ctr >= 1){
                    $('#rmResStat2Checkbox2').attr("checked",true);
                    getPageCheck('#rmResStat2Checkbox2');
                }else{
                    $('#rmResStat2Checkbox2').attr("checked",false);
                    getPageUnCheck('#rmResStat2Checkbox2');
                }
            }
            var match = $('#ReservationStatisticTotalMatches').html();
            if(match > 1){
                $('#matches').html('Matches');
            }else{
                $('#matches').html('Match');
            }
            $('#statsViewNew').css({'display':'block'});

            var totalmatch = $('#ReservationStatisticTotalPages').html();
            if(totalmatch == 1){
                $('#ReservationStatisticPageNumber').html('1');
                $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
            }
            globalIndexFlag = true;
        }
    });
	if(devpop){
        initSelectedDeviceStat(devpop);
    }
    $('#clearFilt').css({'visibility':'visible'});
}

/*
 *
 *  FUNCTION NAME : initStatTable4()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Module Detailed Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable4() {
    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
    }
	if (refreshFlagResource == 'ReservationStatistic') {
        globalLoad = 'rmResStat3';
    } else {
        return;
    }
    var limit = $('#ReservationStatisticPageLimit').val();
    var page = $('#ReservationStatisticPageNumber').text();

    var sort = Sort['ReservationStatistic3'];
    var orderby = Order['ReservationStatistic3'];
    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }

    globalInitStat(); //all the conditions for the date is transfered here

    //PROCESSING ISSUE
    if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }
    if (processingblocker != "" && globalDateInfo == "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    $('#ReservationStatistic3Table').find("tr:gt(1)").remove();
	$('#content4').addClass('fullwidth');
	var url1 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action=moduledetailedview&id=&limit='+limit+'&page='+page+'&view='+fview+'&date='+date+'&detailedview=Detailed&domain='+domain+"&terminal="+terminal+"&switch="+switch1+'&sort='+sort+'&orderby='+orderby+'&user='+globalUser+'&filter='+filterVal;
    $.ajax({
        url: url1,
        dataType: 'text/xml',
        success: function(data) {
             $('#ProcessText').css({'visibility':'hidden'});
            var cgival = 3;
            stattodo(data,cgival);
            globalLoad = "rmResStat3";
            testStats();
            data = $.trim(data);

            swapHeader();
            $(data).find('input').each(function(){
                var totalMatch = $(this);
                var totalMatchValue = totalMatch.attr('Value');
                if(domain == "69" && totalMatchValue == "0"){
                    alerts("L2 Devices doesn't have any Module");
                }else if(domain == "67" && totalMatchValue == "0"){
                    alerts("L1 Devices doesn't have any Module");
                }
                if(domain == "1" && totalMatchValue == "0"){
                    alerts("Default doesn't have any Module");
                }
                if(domain == "73" && totalMatchValue == "0"){
                    alerts("Jd Devices For Debug doesn't have any Module");
                }
                if(domain > 73 && totalMatchValue == "0"){
                    alerts("Domain doesn't have any Module");
                }
                return false;
            });
            colorHeader();
            checkChkbox();
            var chkMain = document.getElementById('rmResStat3Checkbox2');
            if(chkMain.checked == true){
                $('#ReservationStatistic3Table input:checkbox[name="ModuleStatSel"]').each(function() {
                    $(this).parent().parent().addClass('highlight');
                    $(this).attr("checked", true);
                    var val = $(this).attr('id');
                    getPageCheck('#'+val);
                });
            }
            var ctr=0;
            var ctr2=0;
            $('#ReservationStatistic3Table input:checkbox[name="ModuleStatSel"]').each(function() {
                if($(this).is(':checked')){
                    ctr++;
                }
                ctr2++;
                $(this).removeAttr('disabled');
            });
			ModuleStat = ctr;
            if(ctr == ctr2){
                if(ctr >= 1){
                    $('#rmResStat3Checkbox2').attr("checked",true);
                    getPageCheck('#rmResStat3Checkbox2');
                }else{
                    $('#rmResStat3Checkbox2').attr("checked",false);
                    getPageUnCheck('#rmResStat2Checkbox2');
                }
            }
            var match = $('#ReservationStatisticTotalMatches').html();
            if(match > 1){
                $('#matches').html('Matches');
            }else{
                $('#matches').html('Match');
            }
            $('#statsViewNew').css({'display':'block'});

            var totalmatch = $('#ReservationStatisticTotalPages').html();
            if(totalmatch == 1){
                $('#ReservationStatisticPageNumber').html('1');
                $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
            }
            if(devpop){
                initSelectedDeviceStat(devpop);
            }
            $('#clearFilt').css({'visibility':'visible'});
            globalIndexFlag = true;
        }
    });

}


/*
 *
 *  FUNCTION NAME : initStatTable5()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Port Detailed Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable5(limit) {
    var limitTrigger = limit;
    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
    }
	if (refreshFlagResource == 'ReservationStatistic') {
        globalLoad = 'rmResStat4';
    } else {
        return;
    }
    var limit = $('#ReservationStatisticPageLimit').val();
    if(limitTrigger != 1){
        var page = $('#ReservationStatisticPageNumber').text();
    }else{
        var page = 1;
    }
    var sort = Sort['ReservationStatistic4'];
    var orderby = Order['ReservationStatistic4'];
    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }
    globalInitStat(); //all the conditions for the date is transfered here

    //PROCESSING ISSUE
    if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }
    if (processingblocker != "" && globalDateInfo == "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    $('#ReservationStatistic4Table').find("tr:gt(1)").remove();
	$('#content5').addClass('fullwidth');
    var url1 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action=portdetailedview&id=&limit='+limit+'&page='+page+'&view='+fview+'&date='+date+'&detailedview=Detailed&domain='+domain+"&terminal="+terminal+"&switch="+switch1+"&filter="+filterVal+"&sort="+sort+"&orderby="+orderby;
    $.ajax({
        url: url1,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText').css({'visibility':'hidden'});
            globalLoad = "rmResStat4";
            var cgival = 4;
            stattodo(data,cgival);
            testStats();
            colorHeader();
            checkChkbox();
            swapHeader();
            var chkMain = document.getElementById('rmResStat4Checkbox2');
            if(chkMain.checked == true){
                $('#ReservationStatistic4Table input:checkbox[name="PortStatSel"]').each(function() {
                    $(this).parent().parent().addClass('highlight');
                    $(this).attr("checked", true);
                    var val = $(this).attr('id');
                    getPageCheck('#'+val);
                });
            }
            var ctr=0;
            var ctr2=0;
            $('#ReservationStatistic4Table input:checkbox[name="PortStatSel"]').each(function() {
                if($(this).is(':checked')){
                    ctr++;
                }
                ctr2++;
                $(this).removeAttr('disabled');
            });
            PortStat = ctr;
            if(ctr == ctr2){
                if(ctr >= 1){
                    $('#rmResStat4Checkbox2').attr("checked",true);
                    getPageCheck('#rmResStat4Checkbox2');
                }else{
                    $('#rmResStat4Checkbox2').attr("checked",false);
                    getPageUnCheck('#rmResStat4Checkbox2');
                }
            }
            var match = $('#ReservationStatisticTotalMatches').html();
			if(match > 1){
                $('#matches').html('Matches');
            }else{
                $('#matches').html('Match');
            }
            $('#statsViewNew').css({'display':'block'});

            var totalmatch = $('#ReservationStatisticTotalPages').html();
            if(totalmatch == 1){
                $('#ReservationStatisticPageNumber').html('1');
                $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
            }
            globalIndexFlag = true;
        }
    });
    if(devpop){
        initSelectedDeviceStat(devpop);
    }
    $('#clearFilt').css({'visibility':'visible'});
}


/*
 *
 *  FUNCTION NAME : initStatTable6()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the User Detailed & Summary Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable6() {
    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
    }
    var limit = $('#ReservationStatisticPageLimit').val();
    var page = $('#ReservationStatisticPageNumber').text();
    if(globalLoad =="rmResStat5"){
        var sort = Sort['ReservationStatistic5'];
        var orderby = Order['ReservationStatistic5'];
    }else{
        var sort = Sort['ReservationStatistic11'];
        var orderby = Order['ReservationStatistic11'];
    }

    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }
    globalInitStat(); //all the conditions for the date is transfered here
    if(fview =="Day") {
        startdate = date2;
        enddate = date2;
    }else{
        var dateARR = date2.split(',');
        startdate = dateARR[0];
        enddate = dateARR[1];
    }
    if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }

    if (processingblocker != "" && globalDateInfo == "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    var viewselect = $('#viewStatSelect').val();
    var url1 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action=userdetailedview&limit='+limit+'&page='+page+'&view='+fview+'&date='+date+'&detailedview=Detailed&domain='+domain+"&filter="+filterVal+"&sort="+sort+"&orderby="+orderby+'&user='+globalUser+"&terminal="+terminal+"&switch="+switch1;

    var url2 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action=usersummaryview&limit='+limit+'&page='+page+'&view='+fview+'&date='+date+'&detailedview=Summary&domain='+domain+"&filter="+filterVal+"&sort="+sort+"&orderby="+orderby+'&user='+globalUser+"&terminal="+terminal+"&switch="+switch1;
    if(viewselect =='Detailed'){
        var url = url1
        document.getElementById('hideTD').style.display='none';
        $('#StatisticGraphButton6').hide();
		$('#content6').addClass('fullwidth');
    }else if(viewselect =='Summary'){
         var url = url2;
        $('#StatisticReport6Button').show();
        document.getElementById('hideTD').style.display='block';
        $('#StatisticGraphButton6').show();
		$('#content6').addClass('fullwidth');
    }
    $('#ReservationStatistic5Table').find("tr:gt(1)").remove();
    $('#ReservationStatistic11Table').find("tr:gt(1)").remove();
	$.ajax({
        url: url,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText').css({'visibility':'hidden'});
            if(viewselect =='Detailed'){
                var cgival = 8;
            }else{
                var cgival = 7;
            }
            stattodo(data,cgival);
            swapHeader();
            if(viewselect =='Detailed'){
                globalLoad = "rmResStat5";
            }else{
                globalLoad = "rmResStat11";
            }
            data = $.trim(data);
            testStats();
            colorHeader();
            checkChkbox();
            if(viewselect =='Detailed'){
                var chkMain = document.getElementById('rmResStat5Checkbox2');
                var chkMain2 = 'rmResStat5Checkbox2';
                var tblname = "ReservationStatistic5Table";
                var chkname = "UserStatSel";
            }else{
                var chkMain = document.getElementById('rmResStat11Checkbox');
                var chkMain2 = 'rmResStat11Checkbox';
                var tblname = "ReservationStatistic11Table";
                var chkname = "UserStat2Sel";
            }
            if(chkMain.checked == true){
                $('#'+tblname+' input:checkbox[name="'+chkname+'"]').each(function() {
                    $(this).parent().parent().addClass('highlight');
                    $(this).attr("checked", true);
                    var val = $(this).attr('id');
                    getPageCheck('#'+val);
                });
            }
            var ctr=0;
            var ctr2=0;
            $('#'+tblname+' input:checkbox[name="'+chkname+'"]').each(function() {
                if($(this).is(':checked')){
                    ctr++;
                }
                ctr2++;
                $(this).removeAttr('disabled');
            });
            if(viewselect =='Detailed'){
                UserStat = ctr;
            }else{
                UserStat2 = ctr;
            }
			if(ctr == ctr2){
                if(ctr >= 1){
                    $('#'+chkMain2).attr("checked",true);
                    getPageCheck('#'+chkMain2);
                }else{
                    $('#'+chkMain2).attr("checked",false);
                    getPageUnCheck('#'+chkMain2);
                }
            }
            var match = $('#ReservationStatisticTotalMatches').html();
            if(match > 1){
                $('#matches').html('Matches');
            }else{
                $('#matches').html('Match');
            }
            var totalmatch = $('#ReservationStatisticTotalPages').html();
            if(totalmatch == 1){
                $('#ReservationStatisticPageNumber').html('1');
                $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
            }
            globalIndexFlag = true;
        }
    });
    var view2 = $('#viewStatSelect').val();
    if(view2 == 'Detailed'){
        $('#statTimePickerdiv').css({'display':'none'});
        $('#statsViewNew').css({'display':'block'});
        $('#clearFilt').css({'visibility':'visible'});
    }else if(view2 == 'Summary'){
        $('#statTimePickerdiv').css({'display':'none'});
        $('#statsViewNew').css({'display':'block'});
        $('#clearFilt').css({'visibility':'block'});
    }
}

/*
 *
 *  FUNCTION NAME : initStatTable7()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Device Summary Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable7() {
    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
    }
	if (refreshFlagResource == 'ReservationStatistic') {
        globalLoad = 'rmResStat6';
    } else {
        return;
    }
    var limit = $('#ReservationStatisticPageLimit').val();
    var page = $('#ReservationStatisticPageNumber').text();
    var sort = Sort['ReservationStatistic6'];
    var orderby = Order['ReservationStatistic6'];

    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }
    globalInitStat(); //all the conditions for the date is transfered her
    //PROCESSING ISSUE
    if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }

    if (processingblocker != "" && globalDateInfo == "Processing..." && processingblocker != "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    $('#ReservationStatistic6Table').find("tr:gt(1)").remove();
	$('#content7').addClass('fullwidth');
    var newdate = date;//getSummaryDate(date2,fview);
    var url2 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action=modelstats&query='+newdate+"&domain="+domain+'&limit='+limit+'&page='+page+'&sort='+sort+'&orderby='+orderby+'&user='+globalUser+'&filter='+filterVal+"&terminal="+terminal+"&switch="+switch1;
    $.ajax({
        url: url2,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText').css({'visibility':'hidden'});
            globalLoad = "rmResStat6";
            data = $.trim(data);
            var cgival=9;
            stattodo(data,cgival);
            testStats();
            colorHeader();
            checkChkbox();
            swapHeader();

            var chkMain = document.getElementById('rmResStat6Checkbox');
            if(chkMain.checked == true){
                $('#ReservationStatistic6Table input:checkbox[name="ModelStatSel"]').each(function() {
                    $(this).parent().parent().addClass('highlight');
                    $(this).attr("checked", true);
                    var val = $(this).attr('id');
                    getPageCheck('#'+val);
                });
            }
            var ctr=0;
            var ctr2=0;
            $('#ReservationStatistic6Table input:checkbox[name="ModelStatSel"]').each(function() {
                if($(this).is(':checked')){
                    ctr++;
                }
                ctr2++;
                $(this).removeAttr('disabled');
            });
            ModelStat = ctr;
            if(ctr == ctr2){
                if(ctr >= 1){
                    $('#rmResStat6Checkbox').attr("checked",true);
                    getPageCheck('#rmResStat6Checkbox');
                }else{
                    $('#rmResStat6Checkbox').attr("checked",false);
                    getPageUnCheck('#rmResStat6Checkbox');
                }
            }
			var match = $('#ReservationStatisticTotalMatches').html();
            if(match > 1){
                $('#matches').html('Matches');
            }else{
                $('#matches').html('Match');
            }
            $('#statsViewNew').css({'display':'block'});
            var totalmatch = $('#ReservationStatisticTotalPages').html();
            if(totalmatch == 1){
                $('#ReservationStatisticPageNumber').html('1');
                $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
            }
            globalIndexFlag = true;
        }
    });
    $('#statsViewNew').css({'display':'block'});
}


/*
 *
 *  FUNCTION NAME : initStatTable8()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Slot Summary Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable8() {
    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
	}
	if (refreshFlagResource == 'ReservationStatistic') {
        globalLoad = 'rmResStat7';
    } else {
        return;
    }
    var limit = $('#ReservationStatisticPageLimit').val();
    var page = $('#ReservationStatisticPageNumber').text();
    var sort = Sort['ReservationStatistic7'];
    var orderby = Order['ReservationStatistic7'];

    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }
    globalInitStat(); //all the conditions for the date is transfered her
    //PROCESSING ISSUE
    if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }

    if (processingblocker != "" && globalDateInfo == "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    $('#ReservationStatistic7Table').find("tr:gt(1)").remove();
	$('#content8').addClass('fullwidth');
    var newdate = date;//getSummaryDate(date2,fview);
    var url2 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action=esprpstats&query='+newdate+"&domain="+domain+'&limit='+limit+'&page='+page+'&sort='+sort+'&orderby='+orderby+'&user='+globalUser+'&filter='+filterVal+"&terminal="+terminal+"&switch="+switch1;;
    $.ajax({
        url: url2,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText').css({'visibility':'hidden'});
            var cgival = 10;
            globalLoad = "rmResStat7";
            data = $.trim(data);
            stattodo(data,cgival);
            testStats();
            colorHeader();
            checkChkbox();
            swapHeader();

                    var chkMain = document.getElementById('rmResStat7Checkbox');
                    if(chkMain.checked == true){
                        $('#ReservationStatistic7Table input:checkbox[name="CardStatSel"]').each(function() {
                            $(this).parent().parent().addClass('highlight');
                            $(this).attr("checked", true);
                            var val = $(this).attr('id');
                            getPageCheck('#'+val);
                        });
                    }
                    var ctr=0;
                    var ctr2=0;
                    $('#ReservationStatistic7Table input:checkbox[name="CardStatSel"]').each(function() {
                        if($(this).is(':checked')){
                            ctr++;
                        }
                        ctr2++;
                        $(this).removeAttr('disabled');
                    });
                    CardStat = ctr;
                    if(ctr == ctr2){
                        if(ctr >= 1){
                            $('#rmResStat7Checkbox').attr("checked",true);
                            getPageCheck('#rmResStat7Checkbox');
                        }else{
                            $('#rmResStat7Checkbox').attr("checked",false);
                            getPageUnCheck('#rmResStat7Checkbox');
                        }
                    }
					var match = $('#ReservationStatisticTotalMatches').html();
                    if(match > 1){
                        $('#matches').html('Matches');
                    }else{
                        $('#matches').html('Match');
                    }
                    $('#statsViewNew').css({'display':'block'});

                    var totalmatch = $('#ReservationStatisticTotalPages').html();
                    if(totalmatch == 1){
                        $('#ReservationStatisticPageNumber').html('1');
                        $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
                    }
                globalIndexFlag = true;
        }
    });
    $('#statsViewNew').css({'display':'block'});
}

/*
 *
 *  FUNCTION NAME : initStatTable9()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Module Summary Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable9() {
    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
    }
    if (refreshFlagResource == 'ReservationStatistic') {
        globalLoad = 'rmResStat9';
    } else {
        return;
    }

    var limit = $('#ReservationStatisticPageLimit').val();
    var page = $('#ReservationStatisticPageNumber').text();
    var sort = Sort['ReservationStatistic9'];
    var orderby = Order['ReservationStatistic9'];

    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }
    globalInitStat(); //all the conditions for the date is transfered here
    //PROCESSING ISSUE
    if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }

    if (processingblocker != "" && globalDateInfo == "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    $('#ReservationStatistic9Table').find("tr:gt(1)").remove();
	$('#content9').addClass('fullwidth');
    var newdate = date;//getSummaryDate(date2,fview);
    var url2 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action=modulestats&query='+newdate+"&domain="+domain+'&limit='+limit+'&page='+page+'&sort='+sort+'&orderby='+orderby+'&user='+globalUser+'&filter='+filterVal+"&terminal="+terminal+"&switch="+switch1;
    $.ajax({
        url: url2,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText').css({'visibility':'hidden'});
            globalLoad = "rmResStat9";
            var cgival = 11;
            data = $.trim(data);
            stattodo(data,cgival);
            testStats();
            colorHeader();
            checkChkbox();
            swapHeader();
                    var chkMain = document.getElementById('rmResStat9Checkbox');
                    if(chkMain.checked == true){
                        $('#ReservationStatistic9Table input:checkbox[name="ProdStatSel"]').each(function() {
                            $(this).parent().parent().addClass('highlight');
                            $(this).attr("checked", true);
                            var val = $(this).attr('id');
                            getPageCheck('#'+val);
                        });
                    }
                    var ctr=0;
                    var ctr2=0;
                    $('#ReservationStatistic9Table input:checkbox[name="ProdStatSel"]').each(function() {
                        if($(this).is(':checked')){
                            ctr++;
                        }
                        ctr2++;
                        $(this).removeAttr('disabled');
                    });
                    ProdStat = ctr;
                    if(ctr == ctr2){
                        if(ctr >= 1){
                            $('#rmResStat9Checkbox').attr("checked",true);
                            getPageCheck('#rmResStat9Checkbox');
                        }else{
                            $('#rmResStat9Checkbox').attr("checked",false);
                            getPageUnCheck('#rmResStat9Checkbox');
                        }
                    }
					var match = $('#ReservationStatisticTotalMatches').html();
                    if(match > 1){
                        $('#matches').html('Matches');
                    }else{
                        $('#matches').html('Match');
                    }
                    $('#statsViewNew').css({'display':'block'});

                    var totalmatch = $('#tReservationStatisticTotalPages').html();
                    if(totalmatch == 1){
                        $('#ReservationStatisticPageNumber').html('1');
                        $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
                    }
                globalIndexFlag = true;
        }
    });
    $('#statsViewNew').css({'display':'block'});
}

/*
 *
 *  FUNCTION NAME : initStatTable10()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Port Summary Table
 *  PARAMETERS    : 
 *  
 */
function initStatTable10() {
    if (refreshAvailability == false && refreshFlagResource == 'ReservationStatistic') {
        return;
    }
	if (refreshFlagResource == 'ReservationStatistic') {
        globalLoad = 'rmResStat10';
    } else {
        return;
    }
    var limit = $('#ReservationStatisticPageLimit').val();
    var page = $('#ReservationStatisticPageNumber').text();

    var sort = Sort['ReservationStatistic10'];
    var orderby = Order['ReservationStatistic10'];
    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }
    globalInitStat(); //all the conditions for the date is transfered her
    //PROCESSING ISSUE
    if (globalDateInfo != "Processing...") {
        processingblocker = date;
    }

    if (processingblocker != "" && globalDateInfo == "Processing...") {
        date = processingblocker;
        globalDateInfo = date;
    }
    $('#ReservationStatistic10Table').find("tr:gt(1)").remove();
	$('#content10').addClass('fullwidth');
    var newdate = date;//getSummaryDate(date2,fview);
    var url2 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action=portstats&query='+newdate+"&domain="+domain+'&limit='+limit+'&page='+page+'&sort='+sort+'&orderby='+orderby+'&user='+globalUser+'&filter='+filterVal+"&terminal="+terminal+"&switch="+switch1;
    $.ajax({
        url: url2,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText').css({'visibility':'hidden'});
            globalLoad = "rmResStat10";
            data = $.trim(data);
            var cgival = 12;
            stattodo(data,cgival);
            testStats();
            colorHeader();
            checkChkbox();
            swapHeader();
                    var chkMain = document.getElementById('rmResStat10Checkbox');
                    if(chkMain.checked == true){
                        $('#ReservationStatistic10Table input:checkbox[name="DescriptionStatSel"]').each(function() {
                            $(this).parent().parent().addClass('highlight');
                            $(this).attr("checked", true);
                            var val = $(this).attr('id');
                            getPageCheck('#'+val);
                        });
                    }
                    var ctr=0;
                    var ctr2=0;
                    $('#ReservationStatistic10Table input:checkbox[name="DescriptionStatSel"]').each(function() {
                        if($(this).is(':checked')){
                            ctr++;
                        }
                        ctr2++;
                        $(this).removeAttr('disabled');
                    });
                    DescStat = ctr;
                    if(ctr == ctr2){
                        if(ctr >= 1){
                            $('#rmResStat10Checkbox').attr("checked",true);
                            getPageCheck('#rmResStat10Checkbox');
                        }else{
                            $('#rmResStat10Checkbox').attr("checked",false);
                            getPageUnCheck('#rmResStat10Checkbox');
                        }
                    }
					var match = $('#ReservationStatisticTotalMatches').html();
                    if(match > 1){
                        $('#matches').html('Matches');
                    }else{
                        $('#matches').html('Match');
                    }
                    $('#statsViewNew').css({'display':'block'});

                    var totalmatch = $('#ReservationStatisticTotalPages').html();
                    if(totalmatch == 1){
                        $('#ReservationStatisticPageNumber').html('1');
                        $('#ReservationStatisticPages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
                    }
                globalIndexFlag = true;
        }
    });
    $('#statsViewNew').css({'display':'block'});
}

/*
 *
 *  FUNCTION NAME : initStatTable11()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : initialize and load the Reservation Statistics
 *  PARAMETERS    : 
 *  
 */
function initStatTable11(thsChk) {
	if(globalLoad != "rmResStat12" || globalLoad != "rmResStat13" || globalLoad != "rmResStat14"){
		globalLoad = "rmResStat14";
    }
	$('#checkDiv').css({'visibility':'hidden'});
	var ctr=0;
    $('input:checkbox[name="checkbox"]').each(function() {
	    if($(this).is(':checked')){
    	    ctr++;
		}
   	});
    if(ctr == 0){
		$('#'+thsChk).attr('checked',true);
        alerts('You cannot uncheck all the checkbox.');
		return;
    }

	$('#Statul li').removeClass('ui-tabs-selected ui-state-active');
//    $(src).addClass('ui-tabs-selected ui-state-active');
	$('#mainTblPg').hide(); //hides paginations
    $('#mainTblPg2').hide(); //hides components
	$('#stre-0 .links').hide();
	var limit = $('#ReservationStatistic2PageLimit').val();
    var page = $('#ReservationStatistic2PageNumber').text();
    var sort = Sort['ReservationStatistic13'];
    var orderby = Order['ReservationStatistic13'];

	var totalpage = (globalTotalMatch / limit);
	totalpage = Math.ceil(totalpage); 	
	if(totalpage != globalTotalPage){ // checks if totalpage is match from the return of cgi.
		page = 1;
	}
    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }

    if (globalDateInfo != "Processing....") {
    	globalInitStat(); //all the conditions for the date is transfered here
        processingblocker = $('#hiddenVal').val();
    }
    if (processingblocker != "" && globalDateInfo == "Processing....") {
    	globalInitStat(); //all the conditions for the date is transfered here
        date = processingblocker;
        globalDateInfo = date;
    }
	
    var userVal = $('#statSelect2').val();
	if(fview=='Day'){
		var dte = date.split(',');
		var dateStr = '`date='+dte[0];
		var view = 'daily';
	}else if(fview == 'Week'){
		var view = 'weekly';
		var dateStr = '`date='+date;
	}else if(fview == 'Month'){
		var view = 'monthly';
        var dateStr = '`date='+date;
    }else if(fview == 'Quarter'){
		var monNam = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
		var dte = date.split(',');
		var mntStr = dte[0].split('-');
		var mntStr2 = parseInt(mntStr[1]) -1;
		for(var a=0; a < monNam.length; a++){
			if(mntStr2 == a){
				dte=monNam[a];
			}
		}
		var view = 'quarterly';
        var dateStr = '`year='+mntStr[0]+'`month='+dte;
    }else if(fview == 'Annual'){
		var monNam = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
        var dte = date.split(',');
        var mntStr = dte[0].split('-');
        var mntStr2 = parseInt(mntStr[1]) -1;
		var yearStr = mntStr[0];
        for(var a=0; a < monNam.length; a++){
            if(mntStr2 == a){
                dte=monNam[a];
            }
        }
		var view = 'annual';
        var dateStr = '`month='+dte+'`year='+yearStr;
    }else if(fview == 'Custom'){
		var view = 'custom';
        var dateStr = '`date='+date;
    }
	if(flagstat2 == false){ // first load when condition is true and there is no selected tab
		var qstr = '`limit='+limit+'`page='+page;
		dynamicStatTab(view,dateStr,qstr);
	}else{
		var qstr = '`limit='+limit+'`page='+page;
		loadReserveStatTable(globalSelectedTab,view,dateStr,qstr,thsChk);
	}
	$('#content').addClass('fullwidth');
}


/*
 *
 *  FUNCTION NAME : getdomains()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE :	November 18, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : gets all available Domain 
 *  PARAMETERS    : 
 *  
 */
function getStatDomains(){
	var url = 'https://'+CURRENT_IP+'/cgi-bin/Final/NFast/NFast_STAT/NFastSTATCGI.py?action=statdomains';
    $.ajax({
        url: url,
        dataType: 'text/xml',
        async: false,
        success: function(data) {
//			data = '<root><row domId="1" domName="Default" /><row domId="33" domName="Guaranteed" /><row domId="35" domName="Expensive" /><row domId="36" domName="Security" /><row domId="41" domName="BxB Domain" /></root>';
            var mydata = data;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
            var row = xmlDoc.getElementsByTagName('row');
			var str='';
			for(var b=0; b < row.length; b++){
				var domId = row[b].getAttribute('domId');
				var domName = row[b].getAttribute('domName');
				if(domName != 'All'){
					str += "<option value='dom_"+domName+"_"+domId+"'>"+domName+"</option>";
				}
			}
			$('#user').html(str);
		}
	});
	
}


/*
 *
 *  FUNCTION NAME : getdevices()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : October, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : gets all available Model,ERP,RP,Slot,Module 
 *  PARAMETERS    : 
 *  
 */
function getdevices(){
    var url = 'https://'+CURRENT_IP+'/cgi-bin/Final/NFast/NFast_STAT/NFastSTATCGI.py?action=statdevices';
    $.ajax({
        url: url,
        dataType: 'text/xml',
        async: false,
        success: function(data) {
            var mydata = data;
			var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
            var row = xmlDoc.getElementsByTagName('row');
            var model = row[0].getAttribute('Model');
			model = model.split(',');
            var rp = row[0].getAttribute('RP');
			rp = rp.split(',');
            var slot = row[0].getAttribute('Slot');
			slot = slot.split(',');
            var esp = row[0].getAttribute('ESP');
			esp = esp.split(',');
			var module = row[0].getAttribute('Module');
			module = module.split(',');
			var str1='';
			var str2='';
			var str3='';
			var str4='';
			var str5='';
			for(var a=0; a< model.length; a++){
				str1 += "<option value='Model_"+model[a]+"'>"+model[a]+"</option>";
			}
			for(var b=0; b< rp.length; b++){
                str2 += "<option value='RP_"+rp[b]+"'>"+rp[b]+"</option>";
            }
			for(var c=0; c< slot.length; c++){
                str3 += "<option value='Slot_"+slot[c]+"'>"+slot[c]+"</option>";
            }
			for(var d=0; d< esp.length; d++){
                str4 += "<option value='ESP_"+esp[d]+"'>"+esp[d]+"</option>";
            }
			for(var e=0; e< module.length; e++){
                str5 += "<option value='Module_"+module[e]+"'>"+module[e]+"</option>";
            }
			$('#device optgroup[label="Model"]').html(str1);
			$('#device optgroup[label="RP"]').html(str2);
			$('#device optgroup[label="Slot"]').html(str3);
			$('#device optgroup[label="ESP"]').html(str4);
			$('#device optgroup[label="Module"]').html(str5);

        }
    });
}
/*
 *
 *  FUNCTION NAME : dynamicComboBox()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : create dynamic contents for the combobox of Reservation 
 *  PARAMETERS    : data
 *  
 */
function dynamicComboBox(data){
    var str;
    var url1 = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdminPy.py?action=getuser';
    $.ajax({
        url: url1,
        dataType: 'text/xml',
        success: function(data) {
            var user;
            var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString(data ,"text/xml");
            var data2 = xmlDoc.getElementsByTagName("row");
            for(var i = 0; i < data2.length; i++){
                var user = data2[i].getAttribute('user');
                var dataArr=user.split(',');
                for(var j = 1; j < dataArr.length; j++){
                    str+='<option value="'+dataArr[j]+'">'+dataArr[j]+'</option>';
                }
            }
            $('#statSelect2').append(str);
        }
    });
}


/*
 *
 *  FUNCTION NAME : getQueryGraph()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : Query String
 *  PARAMETERS    : 
 *  
 */
function getQueryGraph(view,dateStr){
	var val=[],val2='', val3='', val4='';
	var str='',arr=[],arr2=[],arr3,arr4,arr5,arr6,arr7,arr8=[];
	var valstring='graph=';
	var name1 = 'multiselect_reservation';
	var name2 = 'multiselect_device';
	var name3 = 'multiselect_user';
	var model = [];
	var slot=[];
	var module=[];
	var rp=[];
	var esp=[];
	var domain=[];
	$('input:checkbox[name="checkbox"]').each(function() {
    	if($(this).is(':checked')){
        	val.push($(this).val()); // Reservation,Device,User
        }
   	});
	$('input:checkbox[name="'+name1+'"]').each(function() {
		if($(this).is(':checked')){
			val2 = $(this).val();
			if(val2.toLowerCase() == 'reserved' || val2.toLowerCase() == 'failed' || val2.toLowerCase() == 'rescheduled'){
				arr.push(val2); // Type values in dropdown checkbox

			}else{
				arr2.push(val2); // Application values in dropdown checkbox
			}
			//str += val2;
		}
   	});
	$('input:checkbox[name="'+name2+'"]').each(function() {
        if($(this).is(':checked')){
        	val3 = $(this).val();	
			arr3 = val3.split('Model_');
			arr4 = val3.split('ESP_');
			arr5 = val3.split('RP_');
			arr6 = val3.split('Module_');
			arr7 = val3.split('Slot_');
			if(arr3[1] != undefined){
				model.push(arr3[1]);
			}else if(arr4[1] != undefined){
				esp.push(arr4[1]);
			}else if(arr5[1] != undefined){
				rp.push(arr5[1]);	
			}else if(arr6[1] != undefined){
				module.push(arr6[1]);	
			}else if(arr7[1] != undefined){
				slot.push(arr7[1]);
			}
        }

    });
	$('input:checkbox[name="'+name3+'"]').each(function() {
        if($(this).is(':checked')){
			val4 = $(this).val();
            valName = val4.split('_')[1];
			var z = ((val4.split('_')).length -1);
            valId =  val4.split('_')[z];

			arr8.push(valId);
		}
	});

	if(model.length >1 || model.length ==1){
	//+'*Esp^'+esp+'*Rp^'+rp+'*Slot^'+slot+'*Module^'+module;
		str +='`dev=Model^'+model;
	}
	if(esp.length > 1){
		str += '*Esp^'+esp;
	}else if(esp.length == 1){
		str +='`dev=ESP^'+esp;
	}
	if(rp.length > 1){
		str += '*Rp^'+rp;
	}else if(rp.length == 1){
		str += '`dev=Rp^'+rp;
	}
	
	if(module.length > 1){
		str += '*Module^'+module;
	}else if(module.length ==1){
		str += '`dev=Module^'+module;
	}
	if(slot.length > 1){
		str += '*Slot^'+slot;
	}else if (slot.length ==1){
		str += '`dev=Slot^'+slot;
	}
	
	if(arr8.length > 0){
		var dom = '`dom='+arr8;
	}else{
		var dom = '`dom=';
	}
	var qstr = '`main='+val+str+'`Type='+arr+'`Application='+arr2+dom; // query string for tool tip of graph
	valstring += val + '`view='+view+dateStr+'`Type='+arr+'`Application='+arr2+str+dom;
	graphToolTip(qstr,str);	
	globalTooltipqstr= qstr;
	globalTooltipstr= str;
    return valstring
}
/*
 *
 *  FUNCTION NAME : 
 *  AUTHOR        : James Turingan
 *  DATE          :	October 2, 2013
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : 
 *  PARAMETERS    : 
 *  
 */

var globalTooltipqstr, globalTooltipstr;
function graphToolTip(qstr,str){
	if(!qstr){
		qstr = globalTooltipqstr;
	}
	if(!str){
		str = globalTooltipstr;
	}
	if(str == '' || str == undefined){
		var dev ='';
	}else{
		var dev ='`dev='+str;
	}
	globalStatSelected = [];
	var url = 'https://'+CURRENT_IP+'/cgi-bin/Final/NFast/NFast_STAT/NFastSTATCGI.py?action=pointgraphinfo&query=date='+date2+'`view='+fview+qstr+dev;
    $.ajax({
        url: url,
        dataType: 'text/xml',
        async: false,
        success: function(data) {
            var mydata = data;
			var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
            var row = xmlDoc.getElementsByTagName('row');
			for(var i = 0; i < row.length; i++){		
/*				var name = row[i].getAttribute("Name");
				var min = row[i].getAttribute("Min");
				var max = row[i].getAttribute("Max");
				var ave = row[i].getAttribute("Average");*/
				var name = row[i].getAttribute("Name");
				var time = row[i].getAttribute("Time");
				var val = row[i].getAttribute("Value");
				var inter = row[i].getAttribute("Intervals");
				var val2 = val.split(',');
				var inter2 = inter.split(',');
				var value = [], intervals=[];
				for(a=0; a< val2.length; a++){
					value.push(val2[a]);
					intervals.push(inter2[a]);
				}
				globalStatSelected.push({name:name, time:intervals, val:value, realtime:time});
//				globalStatSelected.push({name:name,max:max,min:min,average:ave});
			}
		}
	});
}

function granularites(val,tym,hr,tot){
	hr = hr.split(' ');
    var str='',intervals='',value='',str2='',categ=[],ser =[];
    var a,b,c;
	setTimeout(function(){
	    for(var i=0; i < globalStatSelected.length; i++){
    	    str ='';
        	if(globalStatSelected[i].name == val){
                if(globalStatSelected[i].name == val && tym == globalStatSelected[i].realtime){
                    a = globalStatSelected[i].name;
                    b = globalStatSelected[i].time;
                    c = globalStatSelected[i].val;
                    for(x=0; x< c.length; x++){
                        if(fview =="Day"){
                            if(b[x].length ==1){
                                tm = '0'+b[x];
                            }else{
								tm = b[x];
							}
							categ.push(hr[0]+":"+tm+" "+hr[1]);
							ser.push(parseInt(c[x]));
                        }else if(fview == "Week"){
                            if(b[x].length ==1){
                                tm = '0'+b[x]+':00';
                            }else{
                                tm = b[x]+':00';
                            }
							categ.push(tm);
                            ser.push(parseInt(c[x]));
                        }else if(fview == "Month"){
                            if(b[x].length ==1){
                                tm = '0'+b[x]+':00';
                            }else{
                                tm = b[x]+':00';
                            }
							categ.push(tm);
                            ser.push(parseInt(c[x]));
                        }
                    }
					$('#granu').highcharts({
			            chart: {
            		    	type: 'bar'
		            	},
	            		title: {
			                text: 'Detailed Statistics'
        			    },
		    	        subtitle: {
        			        text: 'Total Number of Reservation: '+tot
		            	},
	        		    xAxis: {
    	            		categories: categ,
			                title: {
        			            text: 'Intervals'
	        		        }
	    		        },
			            legend: {
	    		            enabled: false
    	    	    	},
		        	    yAxis: {
        		    	    min: 0,
                			title: {
		                    	text: 'Reservation Number'
	        		        },
			            },
			            plotOptions: {
        			        bar: {
                			    dataLabels: {
                    	    		enabled: true
		                	    }
	        		        }
			            },            
        			    credits: {
            	    		enabled: false
		        	    },
        		    	series: [{
                			data: ser 
			            }],
						tooltip: {
			                enabled: false
            			}
        			});
				}
        	}
	    }
	},500);
	
	$('#granu').dialog({
		title: 'Detailed Statistics',
        autoOpen: false,
        resizable: false,
        modal: true,
        height: 500,
        width: 520,
        closeOnEscape: false,
        draggable: true,
		
	});
	$('#granu').dialog('open');	
}

/*
 *
 *  FUNCTION NAME : toolTipVal()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : Nov. 19,2013
 *  REVISION #    : 3
 *  DESCRIPTION   : this function is for the additional tool tip of the graph 
 *  PARAMETERS    : val,tym, hr
 *  
 */
function toolTipVal(val,tym,hr){
	hr = hr.split(' ');
	var str='',intervals='',value='',str2='';
	var a,b,c;
	for(var i=0; i < globalStatSelected.length; i++){
		str ='';
		if(globalStatSelected[i].name == val){
			for(g=0; g < globalStatSelected[i].time.length; g++){
				if(globalStatSelected[i].name == val && tym == globalStatSelected[i].realtime){
					a = globalStatSelected[i].name;
					b = globalStatSelected[i].time;
					c = globalStatSelected[i].val;
					for(x=0; x< c.length; x++){
						if(fview =="Day"){							
							console.log('b[x]=='+b[x]);
		      	    		if(b[x].length ==1){
		          	    		tm = '0'+b[x];
							}else{
								tm = b[x];
							}
							str2 = "<b>Granularities (5 mins.)</b><br/>";
							str += hr[0]+":"+tm+" "+hr[1]+" = "+c[x]+"<br/>";
						}else if(fview == "Week"){
							if(b[x].length ==1){
                                tm = '0'+b[x]+':00';
                            }else{
								tm = b[x]+':00';
							}
							str2 = "<b>Granularities (1 hour.)</b><br/>";
                            str += tm+" = "+c[x]+"<br/>";
						}else if(fview == "Month"){
							if(b[x].length ==1){
                                tm = '0'+b[x]+':00';
                            }else{
                                tm = b[x]+':00';
                            }
							str2 = "<b>Granularities (1 hour.)</b><br/>";
                            str += tm+" = "+c[x]+"<br/>";
						}
					}
					
					return str2+str;
//					a = globalStatSelected[i].max;
//					b = globalStatSelected[i].min;
//			 		c = globalStatSelected[i].average;
				}
			}
		}
	}
//	str = 'Max: '+a+ '<br />Min: '+b+'<br />Average: '+c;
//	return str;
}

/*
 *
 *  FUNCTION NAME : getSingleReserveStat()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : getting the specific user and convert to XML String for pie graph when selecting radio buttons 
 *  PARAMETERS    : data
 *  
 */
function getSingleReserveStat(){
    var dataArr=[];
    $('#radioTable input:radio[name="radiobtn"]').each(function() {
        if($(this).attr('checked')) {
            var a = $(this).attr('did'); //User
            var b = $(this).val(); //MainId
            var c = $(this).attr('did2');//StartTime
            var d = $(this).attr('did3');//EndTime
            var xmlAttr = "MainId='"+b+"' User='"+a+"' StartTime='"+c+"' EndTime='"+d+"'";
            dataArr.push(xmlAttr);
            globalStatId.push(xmlAttr);
        }
    });
    // convert data to xml
    var xmlDATA ="<MAINCONFIG>";
    for(var i=0; i < dataArr.length; i++){
        xmlDATA += "<RESERVED "+dataArr[i]+ " />";
    }
    xmlDATA +="</MAINCONFIG>";

    var action ="reservationgraph";
    var id = xmlDATA
    initGraphReserve("Pie",id,action);
}


/*
 *
 *  FUNCTION NAME : changeView2()
 *  AUTHOR        : Maricel Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : show hide some info on the main table when you trigger the Reservation/Utilization dropdown 
 *  PARAMETERS    : view
 *  
 */
function changeView2(view) {
    var view2;
    var toappend = "Total";
    if (brviews == "Domain") {
        view2 = $('#statSelect').val();
        var view3 = $('#viewStatSelect').val();
        if (view2 == "0") {
        	switch (view3) {
                case "Detailed":
                    view2 = "";
                break;
                case "Summary":
                    view2 = "6";
                    toappend = "Average";
                    if ($('#statsViewNew').val() == "Utilization") {
                        $('#resStatistic').attr('disabled',true);
                    } else {
                        $('#resStatistic').attr('disabled',false);
                      }
                break;
            }
		} else if (view2 == "2") {
            switch (view3) {
                case "Detailed":
                    view2 = "2";
                break;
                case "Summary":
                    view2 = "7";
                    toappend = "Average";
                    if ($('#statsViewNew').val() == "Utilization") {
                        $('#resStatistic').attr('disabled',true);
                    } else {
                        $('#resStatistic').attr('disabled',false);
                      }
                break;
            }
		} else if (view2 == "3") {
			switch (view3) {
                    case "Detailed":
                        view2 = "3";
                    break;
                    case "Summary":
                        view2 = "9";
                        toappend = "Average";
                    if ($('#statsViewNew').val() == "Utilization") {
                        $('#resStatistic').attr('disabled',true);
                    } else {
                        $('#resStatistic').attr('disabled',false);
                      }
                    break;
                }
        } else if (view2 == "4") {
        	switch (view3) {
                    case "Detailed":
                        view2 = "4";
                    break;
                    case "Summary":
                        view2 = "10";
                        toappend = "Average";
                    if ($('#statsViewNew').val() == "Utilization") {
                        document.getElementById('resStatistic').checked = false;
                        $('#resStatistic').attr('disabled',true);
                    } else {
                        $('#resStatistic').attr('disabled',false);
                      }
                    break;
            }
        }
    } else {
            view2 = "5";
    }
	if (view == 'Utilization') {
        if ($('#resStatistic').is(':checked') == false) {
//            $('#'+view2+'x').attr('colspan', '4');
            $('#'+view2+'x').empty().append('Average Utilization');
            $('#'+view2+'x2').empty().append(toappend+' Utilization');
            $(".UtilizationStatView").show();
            $(".ConventionStatView").hide();
            $(".StatisticsExpanded").hide();
        } else {
            statExpandedView('true');
            $('#'+view2+'x').empty().append('Average Utilization');
            $('#'+view2+'x2').empty().append(toappend+' Utilization');
        }
    } else if(view == 'Convention') {
        if ($('#resStatistic').is(':checked') == false) {
  //          $('#'+view2+'x').attr('colspan', '6');
            $('#'+view2+'x').empty().append('Total Reservation');
            $(".ConventionStatView").show();
            $(".UtilizationStatView").hide();
            $(".StatisticsExpanded").hide();
        } else {
            statExpandedView('true');
            $('#'+view2+'x').empty().append('Total Reservation');
        }
    }
    swapHeader();
}

/*
 *
 *  FUNCTION NAME : swapHeader()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : Dynamic change of table header depends if table is supposed to be Total or Average
 *  PARAMETERS    : 
 *  
 */
function swapHeader(){
    var mainView=$('#viewStatSelect').val();
    var view2 = $('#statSelect').val();
    var view = $('#statsViewNew').val();
    var toappend ="";
    switch(mainView){
        case "Detailed":
            if(view2==0){
                view2 ="";
            }
            toappend ="Total";
        break;
        case "Summary":
            if(view2==0){
                view2 = 6;
            }else if(view2 == 2){
                view2 = 7;
            }else if(view2 == 3){
                view2 = 9;
            }else if(view2 == 4){
                view2 = 10;
            }else{
                view2 = 5;
            }
            toappend ="Average";
        break;

    }
    if(brviews != "Domain"){
        view2 = "5";
        toappend ="Total";
    }
    if (view == 'Utilization') {
        $(".ReservationStatistic"+view2+"TablerhsTable").hide();
            $(".ReservationStatistic"+view2+"TablersTable").show();

        if ($('#resStatistic').is(':checked') == false) {
			$('#'+view2+'x').attr('colspan', '4');
            $('#'+view2+'x').empty().append(toappend+' Utilization');
            $('#'+view2+'xx').empty().append(toappend+' Utilization');
            $('#'+view2+'x2').empty().append(toappend+' Utilization');
            $(".UtilizationStatView").show();
            $(".ConventionStatView").hide();
            $(".StatisticsExpanded").hide();
        } else {
            $(".ReservationStatistic"+view2+"TablersTable").show();
            statExpandedView('true');
            $('#'+view2+'x').empty().append(toappend+' Utilization');
            $('#'+view2+'x2').empty().append(toappend+' Utilization');
          }
    } else if(view == 'Convention') {
        $(".ReservationStatistic"+view2+"TablerhsTable").hide();
        $(".ReservationStatistic"+view2+"TablersTable").show();
        if ($('#resStatistic').is(':checked') == false) {
            $('#'+view2+'x').attr('colspan', '6');
            $('#'+view2+'x').empty().append('Total Reservation');
            $('#'+view2+'xx').empty().append('Total Reservation');
            $(".ConventionStatView").show();
            $(".UtilizationStatView").hide();
            $(".StatisticsExpanded").hide();
            $(".thHide").hide();
        } else {
            statExpandedView('true');
            $('#'+view2+'x').empty().append('Total Reservation');
            $(".thHide").show();
          }
    }
    toappend ='';
}

/*
 *
 *  FUNCTION NAME : clearDropDown()
 *  AUTHOR        : Maricel Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : Adds the "Processing..." text to the dropdown while the table is still loading
 *  PARAMETERS    : fview
 *  
 */
function clearDropDown (fview) {
    if (fview == "Month" || fview == "Annual") {
        $('#statTime').empty();
        $('#statTime').append("<option value='Process'>Processing....</option>");
    }
}

/*
 *
 *  FUNCTION NAME : testStats()
 *  AUTHOR        : Maricel Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   :  
 *  PARAMETERS    : 
 *  
 */
function testStats() {
    var view;
    if (brviews == "Domain") {
        view = $('#statSelect').val();
        var view3 = $('#viewStatSelect').val();
        if (view == "0") {
            switch (view3) {
                case "Detailed": view = ""; break;
                case "Summary": view = "6"; break;
            }
       } else if (view == "2") {
            switch (view3) {
                case "Detailed": view = "2"; break;
                case "Summary": view = "7"; break;
            }
       } else if (view == "3") {
       	    switch (view3) {
                case "Detailed": view = "3"; break;
                case "Summary": view = "9"; break;
            }
       } else {
       		switch (view3) {
        	    case "Detailed": view = "4"; break;
                case "Summary": view = "10"; break;
			}
       }
    } else {
        view = "5";
    }
        var TableName = "ReservationStatistic"+view+"TablerhsTable";
        var TableName2 = "ReservationStatistic"+view+"TablersTable";
    if($('#statsViewNew').val()=='Utilization'){  //--mdhmsJuly31
        $('#'+view+'x').attr('colspan', '4');
        $(".ConventionStatView").hide();
        $(".UtilizationStatView").show();    //--mdhmsJuly31
        $(".StatisticsExpanded").hide();

    } else {
        if (brviews == "Domain") {
            if ($('#resStatistic').is(':checked') == false) {
				$('#'+view+'x').attr('colspan', '6');
                $(".ConventionStatView").show();
                $(".UtilizationStatView").hide();    //--mdhmsJuly31
                $(".StatisticsExpanded").hide();
                $("."+TableName2).show();
                $("."+TableName).hide();
            } else {
                $('#'+view+'x').attr('colspan', '14');
                $(".ConventionStatView").show();
                $(".UtilizationStatView").hide();    //--mdhmsJuly31
                $(".StatisticsExpanded").show();
                $("."+TableName).show();
                $("."+TableName2).hide();

             }
        } else {
            $('#'+view+'x').attr('colspan', '6');
            $(".ConventionStatView").show();
            $(".UtilizationStatView").hide();    //--mdhmsJuly31
          }
	}
}

/*
 *
 *  FUNCTION NAME : stattodo()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : getting the specific user and convert to XML String for pie graph when selecting radio buttons 
 *  PARAMETERS    : newdata->xml that is returned by the CGI, cgival->number that corresponds to the XSLT number
 *  
 */
function stattodo(newdata,cgival) {
    $("#loading-container").dialog("close");
    var view = $('#statSelect').val();
    var view2 = $('#viewStatSelect').val();
    if(cgival == '7'){
        cgival = '11';
        var sort = Sort['ReservationStatistic'+cgival];
        var orderby = Order['ReservationStatistic'+cgival];
        cgival = '7';
    }else if (cgival =='8'){
        cgival = '5';
        var sort = Sort['ReservationStatistic'+cgival];
        var orderby = Order['ReservationStatistic'+cgival];
        cgival = '8';
    }else if(cgival == '9'){
        cgival = '6';
        var sort = Sort['ReservationStatistic'+cgival];
        var orderby = Order['ReservationStatistic'+cgival];
        cgival = '9';
    }else if(cgival =='10'){
        cgival = '7';
        var sort = Sort['ReservationStatistic'+cgival];
        var orderby = Order['ReservationStatistic'+cgival];
        cgival = '10';
    }else if(cgival =='11'){
        cgival = '9';
        var sort = Sort['ReservationStatistic'+cgival];
        var orderby = Order['ReservationStatistic'+cgival];
        cgival = '11';
    }else if(cgival =='12'){
        cgival = '10';
        var sort = Sort['ReservationStatistic'+cgival];
        var orderby = Order['ReservationStatistic'+cgival];
        cgival = '12';
	}else if(cgival =='13'){
        var sort = Sort['ReservationStatistic'+13];
        var orderby = Order['ReservationStatistic'+13];
    }else if(cgival =='14'){
        var sort = Sort['ReservationStatistic'+14];
        var orderby = Order['ReservationStatistic'+14];
    }else if(cgival =='15'){
        var sort = Sort['ReservationStatistic'+15];
        var orderby = Order['ReservationStatistic'+15];
    }else{
        var sort = Sort['ReservationStatistic'+cgival];
        var orderby = Order['ReservationStatistic'+cgival];
    }
	
	if (brviews == "Domain") {
        if (view == "0"){
            switch (view2) {
                case "Detailed":
                    view = "";
                break;
                default:
                    view = "6";
                break;
            }
        } else if (view == "2"){
            switch (view2) {
                case "Detailed":
                    view = "2";
                break;
                default:
                    view = "7";
                break;
            }
         } else if (view == "3") {
            switch (view2) {
                case "Detailed":
                    view = "3";
                break;
                default:
                    view = "9";
                break;
            }
         } else if (view == "4") {
                switch (view2) {
                    case "Detailed":
                        view = "4";
                    break;
                    default:
                        view = "10";
                    break;
                }
         }

    }else if(brviews=="Reservation"){
		if(globalLoad =="rmResStat12"){
            view = "13";
        }else if(globalLoad == "rmResStat13"){
            view = "14";
        }else{
            view = "15";

		}
    } else {
        if(view2 =="Detailed"){
            view = "5";
        }else{
            view = "11";
        }
    }

    $('#ReservationStatistic'+view+'Table tr').not('.ui-widget-header').remove();
    if(cgival==1){
        sort = Sort['ReservationStatistic'];
        orderby = Order['ReservationStatistic'];

        displayCGI(newdata,"newTable","../xslt/ReservationStatistic.xsl");
    }else if(cgival==2){
        displayCGI(newdata,"newTable4","../xslt/ReservationStatistic4.xsl");
    }else if(cgival==3){
        displayCGI(newdata,"newTable5","../xslt/ReservationStatistic5.xsl");
    }else if(cgival==4){
        displayCGI(newdata,"newTable6","../xslt/ReservationStatistic6.xsl");
    }else if(cgival==7){
        displayCGI(newdata,"newTable7","../xslt/ReservationStatistic7.xsl");
    }else if(cgival==8){
        displayCGI(newdata,"newTable7","../xslt/ReservationStatistic8.xsl");
    }else if(cgival==9){
        displayCGI(newdata,"newTable8","../xslt/ReservationStatistic9.xsl");
    }else if(cgival==10){
        displayCGI(newdata,"newTable9","../xslt/ReservationStatistic10.xsl");
    }else if(cgival==11){
        displayCGI(newdata,"newTable10","../xslt/ReservationStatistic11.xsl");
    }else if(cgival==12){
        displayCGI(newdata,"newTable11","../xslt/ReservationStatistic12.xsl");
    }else if(cgival==13){
        displayCGI(newdata,"newTable12","../xslt/ReservationStatistic15.xsl");
    }else if(cgival==14){
        displayCGI(newdata,"newTable12","../xslt/ReservationStatistic16.xsl");
    }else if(cgival==15){
        displayCGI(newdata,"newTable12","../xslt/ReservationStatistic17.xsl");
    }else{
		$('#ReservationStatistic'+view+'Table').append(newdata);
    }

    $('#ReservationStatistic'+view+'Table th.sortable nobr img').each(function(){
        sortval = $(this).parent().parent().attr('value');
        if(sortval == sort){
            if (orderby == 'asc'){
                $(this).attr('src','../styles/chiron/asc.gif');
                $(this).attr('title','Sort in descending order');
            }else{
                $(this).attr('src','../styles/chiron/desc.gif');
                $(this).attr('title','Sort in ascending order');
            }
        }
    });

    setPageTotalMatches('ReservationStatistic'+view);
    $('.'+globalLoad+'sortable').find('ul').each(function() {
        if ($('input:text',this).attr('id') == undefined) {
            return;
        }
        var key = $('input:text',this).attr('id').split("_")[1];
        if (globalFieldFilt[globalLoad+"^^"+key] != undefined && globalFieldFilt[globalLoad+"^^"+key] != key) {
            $(this).parent().parent().attr('style','background:#99CCFF;');
        } else {
            $(this).parent().parent().attr('style','background:#7B96BD;');
          }
    });

    /*AUTO CHECK NG FILTER*/
	autoCheckFilter();
    if ($('#resStatistic').is(':checked') == false) {
        testStats();
        var m = $('#statsViewNew').val();
        if (m == "Convention") {
            $('.ConventionStatView').show();
            $(".UtilizationStatView").hide();
            $(".ReservationStatisticTablehsTable").not('.ConventionStatView').hide();
            $(".StatisticsExpanded").hide();
        } else {
            $('.ConventionStatView').hide();
            $(".StatisticsExpanded").hide();
            $(".UtilizationStatView").show();
            $(".ReservationStatisticTablehsTable").not('.UtilizationStatView').hide();
          }
        if (globalLoad == "rmResStat" || globalLoad == "rmResStat6") {
            $('#ReservationStatisticTable th.sortable').each(function() {
                switch ($(this).text()) {
                    case "Device" :
                        $(this).removeAttr('style');
//                        $(this).attr('colspan',4);
                    break;
                }
            });
        }
    } else {
        //xView('true','ReservationStatisticTable','2,5,6,7,8,9,10,11,12,14,23,24');
        statExpandedView('true');
    }
    createFilter();
    refreshRate = true;
    refreshCTR = true;
	if(globalLoad == "rmResStat14" || globalLoad == "rmResStat12" || globalLoad == "rmResStat13"){
//		clearTimeout(autoUpdateVarTT);
//		clearTimeout(autoUpdateVarRG);
		clearTimeout(autoUpdateVar);
        var command = "autoUpdate(refreshFlagResource)";
        autoUpdateVar = setTimeout(command,35000);
    }else{
//		clearTimeout(autoUpdateVarTT);
//		clearTimeout(autoUpdateVarRG);
	    clearTimeout(autoUpdateVar);
    	var command = "autoUpdate(refreshFlagResource)";
		autoUpdateVar = setTimeout(command,300000);
	}
    $('.'+refreshFlagResource+'RTM').hover(
        function () {
            $('ul', this).slideDown(100);
            var pos = $('ul',this).position();
            if (pos.left > $('#'+refreshFlagResource+'13Table').width()) {
                var newpos = ($('#'+refreshFlagResource+'13Table').width() + $('#'+refreshFlagResource+'Table').position().left) - $('ul',this).width() - 150;
                $("ul",this).css('left',newpos+'px');
            }
        },
        function () {
            $('ul', this).slideUp(100);
        }
    );

    $('.'+refreshFlagResource+view+'Sortable').hover(
        function () {
            $('ul', this).slideDown(100);
        },
        function () {
            $('ul', this).slideUp(100);
    });
    $('.'+globalLoad+"sortable").prev().prev().hover(
        function () {
            $('ul', $(this).next().next()).slideDown(100);
            var key = $('input:text',this).attr('id').split("_")[1];
            if ($('input:text',this).val() != ""  || globalPrevFieldFilt[globalLoad+"^^"+key] != globalFieldFilt[globalLoad+"^^"+key]){
                $('input:text',this).val("");
                chFilterOpt($('input:text',this).attr('id'));
            }
        },
        function () {
			$('.'+globalLoad+"sortable").hover(
                function() {
                },
                function() {
                    $('ul', $('.'+globalLoad+"sortable")).slideUp(100);
                    var key = $('input:text',this).attr('id').split("_")[1];
                    if (globalPrevFieldFilt[globalLoad+"^^"+key] != globalFieldFilt[globalLoad+"^^"+key]){
                        //initStatTable();
                        FinalStatTable();
                        globalPrevFieldFilt[globalLoad+"^^"+key] = globalFieldFilt[globalLoad+"^^"+key];
                    }
            });
    });
    $(".sortable2").hover(
        function() {
        },
        function() {
            $('ul', $('.'+globalLoad+"sortable")).slideUp(100);
    });
	if(globalLoad == "rmResStat12" || globalLoad == "rmResStat13" || globalLoad == "rmResStat14"){
        var tmR = '2';
		$('#stre-0 .links').hide();
    }else{
        var tmR='';
		$('#stre-0 .links').show();
    }
	var viewtmp = $('#statsView'+tmR).val();
    if (viewtmp == "Month" || viewtmp == "Annual") {
        populateDropDown(viewtmp);
    } else {
        if (viewtmp == "Quarter") {
            if (globalDate2 == undefined || globalDate2 == "") {
                var monNam = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
                var dateText = $('#statTime3'+tmR).val();
                var qMonths = dateText.split(" ");
                var qmon = monNam.indexOf(qMonths[0])+1;
                if (qmon > 10) {
                    year2 = parseInt(qMonths[1]) + 1;
                    t = (parseInt(qmon) + 2) % 12;
                } else {
                    year2 = qMonths[1];
                    t = (parseInt(qmon) + 2)
                }
//                $('#statTime2').val(monNam[t-1]+" "+year2);
           } else {
                $('#statTime'+tmR).val(globalDateInfo);
                var newdate2 = convertDate(globalDate2,viewtmp);
//                $('#statTime2').val(newdate2);
           }
        } else if (viewtmp == "Custom") {
            var from = globalDateInfo.split(",")[0];
            var to = globalDateInfo.split(",")[1]
            var y = convertDate(from,viewtmp);
            $('#startDate'+tmR).val(y);
            y = convertDate(to,viewtmp);
            $('#endDate'+tmR).val(y);
        } else {
            var newdate = convertDate(globalDateInfo,viewtmp);
            $('#statTime'+tmR).val(newdate);
        }
    }
    $('#srtree').removeClass('clickable');
    $('#stre-0').removeClass('clickable');
    bindHeaderStatSort();
	$(".tooltip").tooltip();
	$.unblockUI();
	$('#content').removeClass('fullwidth');
	$('#content1').removeClass('fullwidth');
	$('#content2').removeClass('fullwidth');
	$('#content3').removeClass('fullwidth');
	$('#content4').removeClass('fullwidth');
	$('#content5').removeClass('fullwidth');
    $('#content6').removeClass('fullwidth');
    $('#content7').removeClass('fullwidth');
    $('#content8').removeClass('fullwidth');
    $('#content9').removeClass('fullwidth');
	$('#content10').removeClass('fullwidth');
}

/*
 *
 *  FUNCTION NAME : populateDropDown()
 *  AUTHOR        : Maricel Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : Dynamically populates the dropdown of Month/Yearly view
 *  PARAMETERS    : view
 *  
 */
function populateDropDown (view) {
	if(globalLoad == "rmResStat12" || globalLoad == "rmResStat13" || globalLoad == "rmResStat14"){
        var tmR = '2';
    }else{
        var tmR='';
    }
    if (view == "Month") {
        $('#statTime'+tmR).empty();
        var dateArr = "";
        if (/process/i.test(globalDateInfo) == true) {
            var timeEx = getLocalTimeForStat();
            var yr = parseInt(timeEx.split(",")[1].split("-")[0])+ 1900;
            var mo = parseInt(timeEx.split(",")[1].split("-")[1])+ 1;
            if (mo < 10) {
                mo = "0" + mo;
            }
            globalDateInfo = ""+yr+"-"+mo;
            dateArr = globalDateInfo.split("-");
        } else {
            dateArr = globalDateInfo.split("-");
        }
        var year = dateArr[0];
        var newMonth = dateArr[1];
/*        if (newMonth.length == 2) {
            newMonth = newMonth[1];
        }*/
        var string = "<select id='statTime"+tmR+"' style='width:100px' onchange='FinalStatTable()' onclick='clickPicker();' class='optionDes a-btn'>";
        var newg;
        var monNam = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
        for (var g = 0; g < monNam.length; g++) {
            if ((g+1) == newMonth) {
                if ((g+1) < 10) {
                    newg = "0"+(g+1);
                } else {
                    newg = g+1;
                }
                string += '<option value="'+year+'-'+newg+'" selected>'+monNam[g]+'</option>';
            } else {
                if ((g+1) < 10) {
                    newg = "0"+(g+1);
                } else {
                    newg = g+1;
                }
                string += '<option value="'+year+'-'+newg+'">'+monNam[g]+'</option>';
           }
        }
		string += "</select>&nbsp;";
		string += "<select id='monYear' style='width:100px' onchange='FinalStatTable()' onclick='clickPicker();' class='optionDes a-btn'>";
       // date = new Date();
        //year = parseInt(year)+5;
        //year2 = parseInt(year)-5;
		var date = new Date();
        var year = date.getFullYear();
        var glbalDate = globalDateInfo.split(',')[0];
        var year3 = glbalDate.split('-')[0];
		year = year+5;
        year2 = year-5;
/*		var yearMax = year + 7;	
        for (var i = yearMax; i > year; i--){
			var count = i - year;
           	string += '<option value="'+(year+count)+'">'+(year+count)+'</option>';
      	}*/
        for (var g = 17; g > 0; g--) {
        	if(year == year3){
            	string += '<option value="'+year+'" selected>'+year+'</option>';
            }else{
            	string += '<option value="'+year+'">'+year+'</option>';
            }
            year--;
      	}

        string += "</select>";
        $('#firstInfo'+tmR).empty().append(string);
    } else {
        $('#statTime'+tmR).empty();
        var string = "<select id='statTime"+tmR+"' style='width:100px' onchange='FinalStatTable()' onclick='clickPicker();' class='optionDes a-btn'>";
        var date = new Date();
        var year = date.getFullYear();
        var glbalDate = globalDateInfo.split(',')[0];
        var year3 = glbalDate.split('-')[0];
        year = year+5;
        year2 = year-5;
        for (var g = 17; g > 0; g--) {
            if(year == year3){
                string += '<option value="'+year+'" selected=true>'+year+'</option>';
            }else{
                string += '<option value="'+year+'">'+year+'</option>';
            }
            year--;
        }
        string += "</select>";
        $('#firstInfo'+tmR).empty().append(string);
    }
}


/*
 *
 *  FUNCTION NAME : openSelectedDeviceStat()
 *  AUTHOR        : Maricel Louise Sumulong
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 3
 *  DESCRIPTION   : opens a dialog box for viewing statistics report 
 *  PARAMETERS    : id, view, and view value
 *  
 */
function openSelectedDeviceStat(id, view1, action) {
    globalAction = action;
    detstatid = id;
    var currpage = 1;
    var value = $('#statTime').val();
    var view = $('#statsView').val();
    if(action=='usertopdevice'){
        var tit = "Top Device(s) used by User";
    }else if(action =="devicedetaileduserinfo" || action =="slotdetaileduserinfo" || action =="moduledetaileduserinfo" || action =="portdetaileduserinfo"){
        var tit = "Top User(s) for this device";
    }else{
        var tit = "Detailed Statistics";
    }
    $('#selectedDevStat').dialog({
        title: tit,
        autoOpen: false,
        resizable: false,
        modal: true,
        height: 'auto',
        width: 1000,
        closeOnEscape: false,
        draggable: true,
        open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide();  },
        buttons: {
            'Close': function() {
                devpop = "";
                devpopFlag = false;
                $(this).dialog('destroy');
                refreshFlagResource = "ReservationStatistic";
                refreshAvailability = true;
                $('.resstatcheckbox').each(function() {
                    $(this).attr('checked',false);
                    $(this).parent().parent().removeClass('highlight');
                });
                $('#ReservationStatisticCheckbox').attr('checked',false);
                globalPageLoad[globalLoad] = "";
                if(action=='devicedetailedstat' || action=='devicedetaileduserinfo'){
                    initStatTable();
                }else if(action=='moduledetailedstat' || action=='moduledetaileduserinfo'){
                    initStatTable4();
				}else if(action=='portdetailedstat' || action=='portdetaileduserinfo'){
                    initStatTable5();
                }else if(action=='slotdetailedstat' || action=='slotedetaileduserinfo'){
                    initStatTable3();
                }else if(action=='modelstatsinfo'){
                    initStatTable7();
                }else if(action=='slotstatsinfo'){
                    initStatTable8();
                }else if(action=='modulestatsinfo'){
                    initStatTable9();
                }else if(action=='portstatsinfo'){
                    initStatTable10();
                }else if(action == 'userdetailedstat' || action == 'usertopdevice'){
                    initStatTable6();
                }
                globalPageSel =[];
                $('.ResStatCheckAll').attr('checked',false);
            }
        }
    });
    refreshAvailability = false;
    refreshFlagResource = "ReservationStatistic8";
    $('#selectedDevStat').empty().dialog('open');
    $('.ui-dialog :button').blur();
    var ind = parseInt($('.ui-widget-overlay').css('z-index'))+50;
    $('#selectedDevStat').parent().css('z-index',ind);
    $('#selectedDevStat').load('../pages/RMReserveStatistic2.php',function(){
        initSelectedDeviceStat(id,view,value,currpage,action);
    });
	setTimeout(function(){
		$('.blockUI').remove();
	},500);
}


/*
 *
 *  FUNCTION NAME : initSelectedDeviceStat()
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : resends the query to CGI when autorefresh occurs, for pop-up table i.e. openSelectedDeviceStat 
 *  PARAMETERS    : id,view,value,currpage,action
 *  
 */
function initSelectedDeviceStat(id,view,value,currpage,action) {
    id = id.replace('+', '%2b'); //converts the + sign into %2b for URL
    if(devpopFlag == false){
        devpop = id+','+view+','+value+','+currpage+','+action;
        devpopFlag = true;
    }else{
        var devArr = id.split(",");
        id = devArr[0];
        view = devArr[1];
        value = devArr[2];
        currpage = devArr[3];
        action = devArr[4];
    }

    var limit = $('#ReservationStatistic8PageLimit').val();
    if(currpage == undefined || currpage ==""){
        var page = $('#ReservationStatistic8PageNumber').text();
    }else{
		var page = currpage;
    }
	globalInitStat(); //all the conditions for the date is transfered here

    var terminal = "no";
    var switch1 = "no";


    if (globalStatTerminal[globalLoad] != undefined) {
        terminal = globalStatTerminal[globalLoad];
    }

    if (globalStatSwitch[globalLoad] != undefined) {
        switch1 = globalStatSwitch[globalLoad];
    }

    var sort = Sort['ReservationStatistic8'];
    var orderby = Order['ReservationStatistic8'];

    if (sort == '' || sort == undefined){
        sort = '';
    }
    if (orderby == '' || orderby == undefined){
        orderby = '';
    }

    var ViewStat = $('#viewStatSelect').val();
    if(globalLoad != 'rmResStat11' && ViewStat=='Summary'){
        value =date;//getSummaryDate(value,view); // get date for summary view in all component
        var cgiurl = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi?action='+action+'&id='+id+'&query='+value+'&limit='+limit+'&page='+page+'&view='+view+"&terminal="+terminal+"&switch="+switch1+"&domain="+domain;
    }else{
        value =date;//getSummaryDate(value,view);
        var cgiurl = 'https://'+CURRENT_IP+'/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdmin.fcgi?action='+action+'&id='+id+'&limit='+limit+'&page='+page+'&view='+view+'&date='+value+'&detailedview'+'&domain'+"&terminal="+terminal+"&switch="+switch1+"&sort="+sort+"&order="+orderby;
    }
	$.ajax({
        url: cgiurl,
        dataType: 'text/xml',
        success: function(data) {
            $('#selectedDevXSL').empty();
            if(action=='devicedetailedstat'){
                var xslname="ReservationStatistic2.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
			}else if(action=='moduledetailedstat'){
                var xslname="DetailedStatisticModule.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
			}else if(action=='portdetailedstat'){
                var xslname="DetailedStatisticPort.xsl";
				$('#resStatistic2').attr('disabled','true');
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action=='slotdetailedstat'){
                var xslname="DetailedStatisticSlot.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
			}else if(action=='userdetailedstat'){
                var xslname="DetailedStatisticUser.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
			}else if(action =="modelstatsinfo"){
                var xslname="SummaryStatisticDevice.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action =="slotstatsinfo"){
                var xslname="SummaryStatisticSlot.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action =="modulestatsinfo"){
                var xslname="SummaryStatisticModule.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action =="portstatsinfo"){
                var xslname="SummaryStatisticPort.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action =="usertopdevice"){
                var xslname="TopDeviceSummaryUser.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action == 'devicedetaileduserinfo'){
                var xslname="TopUserDetailedDevice.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action == 'slotdetaileduserinfo'){
                var xslname="TopUserDetailedSlot.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action == 'moduledetaileduserinfo'){
                var xslname="TopUserDetailedModule.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }else if(action == 'portdetaileduserinfo'){
                var xslname="TopUserDetailedPort.xsl";
                $('#expandedPop').css({"visibility":"hidden"});
            }

            displayResult(data,"selectedDevXSL","../xslt/"+xslname);
            if ($("#resStatistic2").is(":checked")) {
                $(".ReservationStatistic8TablehsTable").show();
			} else {
                $(".ReservationStatistic8TablehsTable").hide();
              }
            setPageTotalMatches('ReservationStatistic8');
            refreshRate = true;
            refreshCTR = true;
            var command = "autoUpdate('ReservationStatistic8')";
            setTimeout(command,60000);
            $('.'+refreshFlagResource+'Sortable').hover(
                function () {
                    $('ul', this).slideDown(100);
                },
                function () {
                    $('ul', this).slideUp(100);
            });
            getTM('ReservationStatistic8');

            getTP('ReservationStatistic8',view,value,globalAction);

            var totalMatch = $('#ReservationStatistic8TotalMatch').html();
            if( totalMatch == '0' || totalMatch == '1'){
                $('#ReservationStatistic8Matches').html("Match");
            }
            else{
                $('#ReservationStatistic8Matches').html("Matches");
            }
            $('#ReservationStatistic8Table th.sortable nobr img').each(function(){
    	    	sortval = $(this).parent().parent().attr('value');
	        	if(sortval == sort){
    		        if (orderby == 'asc'){
            		    $(this).attr('src','../styles/chiron/asc.gif');
		                $(this).attr('title','Sort in descending order');
        		    }else{
                		$(this).attr('src','../styles/chiron/desc.gif');
		                $(this).attr('title','Sort in ascending order');
            		}
        		}
    		});
			bindHeaderStatSort();
			var viewtmp = $('#statsView').val();
		    if (viewtmp == "Month" || viewtmp == "Annual") {
        		populateDropDown(viewtmp);
		    } else {
        		if (viewtmp == "Quarter") {
		            if (globalDate2 == undefined || globalDate2 == "") {
        	    	    var monNam = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            	    	var dateText = $('#statTime3').val();
		                var qMonths = dateText.split(" ");
        		        var qmon = monNam.indexOf(qMonths[0])+1;
                		if (qmon > 10) {
		                    year2 = parseInt(qMonths[1]) + 1;
        	        	    t = (parseInt(qmon) + 2) % 12;
            		    } else {
		                    year2 = qMonths[1];
        		            t = (parseInt(qmon) + 2)
                		}
//		                $('#statTime2').val(monNam[t-1]+" "+year2);
        	        } else {
		                $('#statTime').val(globalDateInfo);
        		        var newdate2 = convertDate(globalDate2,viewtmp);
//                		$('#statTime2').val(newdate2);
		            }
        		} else if (viewtmp == "Custom") {
		            var from = globalDateInfo.split(",")[0];
        		    var to = globalDateInfo.split(",")[1]
		            var y = convertDate(from,viewtmp);
        		    $('#startDate').val(y);
		            y = convertDate(to,viewtmp);
        		    $('#endDate').val(y);
		   		} else {
	    	        var newdate = convertDate(globalDateInfo,viewtmp);
            		$('#statTime').val(newdate);
        		}
    		}
        }
    });
}


/*
 *
 *  FUNCTION NAME : openGraphReserve()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : August 23, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : opens a dialog box for graphs of Reservation Statistic 
 *  PARAMETERS    : type,id,action,globalStatId
 *  
 */
function openGraphReserve(type,id,action,globalStatId){
    refreshAvailability = false;
    $('.ui-dialog :button').blur();
    initGraphReserve(type,id,action);
	globalIdInitGraphReserve = id;
}




/*
 *
 *  FUNCTION NAME : dynamicStatTab()
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   : 
 *  REVISION DATE : September 28, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : creates a dynamic tab 
 *  PARAMETERS    : 
 *  
 */
function dynamicStatTab(fview,dateStr,qstr){
	var val,val2,val3;
	var str='';
	var valstring;
	var name1 = 'multiselect_reservation';
	var name2 = 'multiselect_device';
	var name3 = 'multiselect_user';
	var action ='';
	var view = '"'+fview+'"';
	var date = '"'+dateStr+'"';
	var qstr2 = '"'+qstr+'"';
	var label,label2;
//	var $widget = $("#device").multiselect();	
	$('input:checkbox[name="checkbox"]').each(function() {
    	if($(this).is(':checked')){
    	   	val = $(this).val();
			if(val.length > 7){
				val2 = val.substr(0,7)+'...';
			}else{
				val2 = val;
			}
    		valstring ='"'+val+'"';
            str += "<li id='li"+val+"'class='ntabs ui-state-default ui-corner-top tooltip2' title='"+val+"'>";
			str += "<a onclick='globalSelectedTab="+valstring+";flagstat2=true;initStatTable11();'>"+val2+"</a>";
			str += "<a class='remove tooltiptab' id='closeRE'><span id='close"+val+"' onclick='removeStatTab(this.id,\"main\")' class='ui-icon-circle-close ui-icon '></span></a></li>";
		}
			
    });
	$('input:checkbox[name="'+name1+'"]').each(function() {
      	if($(this).is(':checked') && $('#cbReservation').is(':checked')){
			val = $(this).val();
			if(val.length > 7){
                val2 = val.substr(0,7)+'...';
            }else{
                val2 = val;
            }
			valstring ='"'+val+'"';
			var params='"'+'reservation'+'"';
			str += "<li id='li"+val+"_reservation'class='ntabs ui-state-default ui-corner-top tooltip2' title='"+val+"'>";
			str += "<a onclick='globalSelectedTab="+valstring+"; flagstat2=true;initStatTable11();' >"+val2+"</a>";
			str += "<a class='remove tooltiptab' id='closeRE'><span id='close"+val+"' onclick='removeStatTab(this.id,"+params+")' class='ui-icon-circle-close ui-icon '></span></a></li>";	
		}else if($(this).is(':checked') && $('#cbReservation').is(':checked') == false){ // removes all selected in reservation dropdown
			$(this).removeAttr('checked');
			$(this).multiselect('refresh');
		}

    });
	$('input:checkbox[name="'+name2+'"]').each(function() {
      	if($(this).is(':checked') && $('#cbDevice').is(':checked')){
    		val = $(this).val();
            valstring ='"'+val+'"';
			var sub='"'+'sub'+'"';
			var params2='"'+'device'+'"';
			var name = val.split('_');
			if(name[0].toLowerCase() == 'model'){
				label = name[1];
				label2 = label;
			}else if(val.substring(0,5).toLowerCase() != 'model'){
				label = val.replace('_',':');
			}
			label2 = label.replace(/-/g,'_');
			label2 = label2.replace('+','_');
			label2 = label2.replace('/','_');
			label2 = label2.replace(':','_');
			label2 = label2.replace(' ','_');

			if(label.length > 7){
                val2 = label.substr(0,7)+'...';
            }else{
                val2 = label;
            }
            str += "<li id='li"+label2+"_device'class='ntabs ui-state-default ui-corner-top tooltip2' title='"+label+"'>";
			str += "<a onclick='globalSelectedTab="+valstring+";flagstat2=true;initStatTable11();'>"+val2+"</a>";
			str += "<a class='remove tooltiptab' id='closeRE'><span id='close"+val+"' onclick='removeStatTab(this.id,"+params2+")' class='ui-icon-circle-close ui-icon '></span></a></li>";
    	}else if($(this).is(':checked') && $('#cbDevice').is(':checked') == false){ // removes all selected in device dropdown
			$(this).removeAttr('checked');
			$(this).multiselect('refresh');
		
		}
	 });
	$('input:checkbox[name="'+name3+'"]').each(function() {
      	if($(this).is(':checked') && $('#cbUser').is(':checked')){
			val = $(this).val();
			valName = val.split('_')[1];
			var z = ((val.split('_')).length -1);
			valId =  val.split('_')[z];
			if(valName.length > 7){
                val2 = valName.substr(0,7)+'...';
            }else{
                val2 = valName;
            }
			valstring ='"'+valName+'"';
			var params='"'+'user'+'"';
			str += "<li id='li"+valName+"_user' class='ntabs ui-state-default ui-corner-top tooltip2' title='"+valName+"'>";
			str += "<a onclick='globalSelectedTab="+valstring+"; flagstat2=true;initStatTable11();' >"+val2+"</a>";
			str += "<a class='remove tooltiptab' id='closeRE'><span id='close"+valName+"' onclick='removeStatTab(this.id,"+params+")' class='ui-icon-circle-close ui-icon '></span></a></li>";	
//			val = valName;
		}else if($(this).is(':checked') && $('#cbUser').is(':checked') == false){ // removes all selected in reservation dropdown
			$(this).removeAttr('checked');
			$(this).multiselect('refresh');
		}

    });
	if($('#cbDevice').is(':checked') == false){// disabled the multiselect/dropdown device
		$('#device').multiselect('disable');
		reDrawDevices();
	}else{
		$('#device').multiselect('enable');
	}
	
	if($('#cbReservation').is(':checked') == false){ // disabled the multiselect/dropdown reservation
		$('#reservation').multiselect('disable');
		reDrawReservation();
	}else{
		$('#reservation').multiselect('enable');
	}
	if($('#cbUser').is(':checked') == false){ // disabled the multiselect/dropdown user
        $('#user').multiselect('disable');
        reDrawUser();
    }else{
        $('#user').multiselect('enable');
    }
	$('#Statul').empty().append(str); // append the li value to create a dynamic tab
	$(".ui-multiselect").css({"width":"auto"}); 
	loadReserveStatTable(val,fview,dateStr,qstr); // initialize the graph and table
	$(".tooltip2").tooltip();
}


/*
 *
 *  FUNCTION NAME : removeStatTab
 *  AUTHOR        : James Turingan
 *  DATE          :	September 28, 2013
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : close the specific tab
 *  PARAMETERS    : val 
 *  
 */
function removeStatTab(id,src){
	var ctr=0,ctr1=0,ctr2=0,ctr3=0;
    $('input:checkbox[name="checkbox"]').each(function() {
        if($(this).is(':checked')){
            ctr++;
        }
    });
	$('input:checkbox[name="multiselect_reservation"]').each(function() {
        if($(this).is(':checked')){
            ctr1++;
        }
    });
	$('input:checkbox[name="multiselect_device"]').each(function() {
        if($(this).is(':checked')){
            ctr2++;
        }
    });
	$('input:checkbox[name="multiselect_user"]').each(function() {
        if($(this).is(':checked')){
            ctr3++;
        }
    });
    if(ctr == 1 && ctr1 == 0 && ctr2 == 0 && ctr3 == 0){
        alerts('You cannot remove all the tab.');
        return;
    }else if((ctr == 1) && (ctr1 == 1 || ctr2 == 1 || ctr3 == 1) && (src == 'main')){
		alerts('You cannot remove all the main tab.');
        return;
	}
	var name1 = 'multiselect_reservation';
	var name2 = 'multiselect_device';
	var name3 = 'multiselect_user';
//	var val,val3,val4;
	globalStatSelected=[];
	globalSelectedTab ='';
	var newId = id.split('close');
	$('#cb'+newId[1]).removeAttr('checked');
	$('#li'+newId[1]).css('display','none');
	$('#li'+newId[1]+'_reservation').css('display','none');
	$('#li'+newId[1]+'_device').css('display','none');

	$('input:checkbox[name="'+name1+'"]').each(function() {
		if($(this).is(':checked')){
			var val = $(this).val();
			if(newId[1] == val){
				$(this).removeAttr('checked');
				$(this).removeAttr('selected');
			}
		}
   	});
	$('input:checkbox[name="'+name2+'"]').each(function() {
		if($(this).is(':checked')){
			var val = $(this).val();
			if(newId[1] == val){
				$(this).removeAttr('checked');
				$(this).multiselect('refresh');
			}
		}
   	});
	$('input:checkbox[name="'+name3+'"]').each(function() {
        if($(this).is(':checked')){
            var val = ($(this).val()).split('_');
            if(newId[1] == val[1]){
                $(this).removeAttr('checked');
                $(this).multiselect('refresh');
            }
        }
    });
	if(src == 'reservation'){
		reDrawReservation();
	}else if(src == 'device'){
		reDrawDevices();
	}else if(src == 'user'){
		reDrawUser();
	}
	$(".ui-multiselect").css({"width":"auto"});
    initStatTable11();
}

/*
 *
 *  FUNCTION NAME : reDrawReservation
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   :
 *  REVISION DATE : October 04, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : rebuilds the multi select dropdown for reservation
 *  PARAMETERS    : 
 *  
 */
function reDrawReservation(){

	var str1='<optgroup label="Type" >';
	var str2='<optgroup label="Application" >';
	$('input:checkbox[name="multiselect_reservation"]').each(function() {
		if($(this).is(':checked')){
			var val = $(this).val();
			if(val.toLowerCase() == 'reserved' || val.toLowerCase() == 'failed' || val.toLowerCase() == 'rescheduled'){
				str1+="<option selected ='selected' value='"+val+"'>"+val+"</option>";	
			}else{
				str2+="<option selected ='selected' value='"+val+"'>"+val+"</option>";	

			}
		}else{
			var val2 = $(this).val();
			if(val2.toLowerCase() == 'reserved' || val2.toLowerCase() == 'failed' || val2.toLowerCase() == 'rescheduled'){
				str1+="<option value='"+val2+"'>"+val2+"</option>";	
			}else{
				str2+="<option value='"+val2+"'>"+val2+"</option>";	

			}

		}
   	});
	str2+='</optgroup>';
	str1+='</optgroup>';
	var string = str1+str2; // concatenation for type and application
	$('#reservation').empty().append(string).multiselect('refresh'); // redraw
	$('.ui-multiselect-menu').css({'width':'auto'});	// set the width to auto
}

/*
 *
 *  FUNCTION NAME : reDrawDevices
 *  AUTHOR        : James Turingan
 *  DATE          :
 *  MODIFIED BY   :
 *  REVISION DATE : October 04, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : rebuilds the multi select dropdown for reservation
 *  PARAMETERS    : 
 *  
 */
function reDrawDevices(){
	var str1='<optgroup label="Model" >';
	var str2='<optgroup label="RP" >';
	var str3='<optgroup label="Slot" >';
	var str4='<optgroup label="ESP" >';
	var str5='<optgroup label="Module" >';
	$('input:checkbox[name="multiselect_device"]').each(function() {
    	if($(this).is(':checked')){
			var val = $(this).val();
			var model = val.split('_');
			var esp = val.split('_');
			var rp = val.split('_');
			var module = val.split('_');
			var slot = val.split('_');
			if(model[1] != undefined || model[0].toLowerCase() == 'model'){
				str1 += "<option selected='selected' value='"+val+"'>"+val+"</option>";
			}else if(esp[1] != undefined || esp[0].toLowerCase() == 'esp'){
                str4 += "<option selected='selected' value='"+val+"'>"+val+"</option>";
			}else if(rp[1] != undefined || rp[0].toLowerCase() == 'rp'){
                str2 += "<option selected='selected' value='"+val+"'>"+val+"</option>";
			}else if(module[1] != undefined || module[0].toLowerCase() == 'module'){
                str5 += "<option selected='selected' value='"+val+"'>"+val+"</option>";
			}else if(slot[1] != undefined || slot[0].toLowerCase() == 'slot'){
                str3 += "<option selected='selected' value='"+val+"'>"+val+"</option>";
			}
        }else{
			var val2 = $(this).val();
			var model2 = val2.split('_');
			var esp2 = val2.split('_');
			var rp2 = val2.split('_');
			var module2 = val2.split('_');
			var slot2 = val2.split('_');
			if(model2[1] != undefined || model2[0].toLowerCase() == 'model'){
				str1 += "<option value='"+val2+"'>"+val2+"</option>";
			}else if(esp2[1] != undefined || esp2[0].toLowerCase() == 'esp'){
                str4 += "<option value='"+val2+"'>"+val2+"</option>";
			}else if(rp2[1] != undefined || rp2[0].toLowerCase() == 'rp'){
                str2 += "<option value='"+val2+"'>"+val2+"</option>";
			}else if(module2[1] != undefined || module2[0].toLowerCase() == 'module'){
                str5 += "<option value='"+val2+"'>"+val2+"</option>";
			}else if(slot2[1] != undefined || slot2[0].toLowerCase() == 'slot'){
                str3 += "<option value='"+val2+"'>"+val2+"</option>";
			}
		}

    });
	str1+="</optgroup>";
	str2+="</optgroup>";
	str3+="</optgroup>";
	str4+="</optgroup>";
	str5+="</optgroup>";
	var string= str1+str2+str3+str4+str5;
	$('#device').empty().append(string).multiselect('refresh'); // redraw
	$('.ui-multiselect-menu').css({'width':'auto'});	// set the width to auto

}

/*
 *
 *  FUNCTION NAME : reDrawUser
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :
 *  MODIFIED BY   :
 *  REVISION DATE : November 18, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : rebuilds the multi select dropdown for user
 *  PARAMETERS    : 
 *  
 */
function reDrawUser(){
	var str='';
	$('input:checkbox[name="multiselect_user"]').each(function() {
		if($(this).is(':checked')){
			var val = $(this).val();
			str+="<option selected ='selected' value='"+val+"'>"+val+"</option>";			
		}else{
			var val2 = $(this).val();
			str+="<option value='"+val2+"'>"+val2+"</option>";
		}
   	});
	$('#user').empty().append(str).multiselect('refresh'); // redraw
	$('.ui-multiselect-menu').css({'width':'auto'});	// set the width to auto
}

/*
 *
 *  FUNCTION NAME : maximizeGraph
 *  AUTHOR        : James Turingan
 *  DATE          :	September 30, 2013
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : Fullscreen the graph 
 *  PARAMETERS    : id
 *  
 */
function maximizeGraph(){
	var id;
	if($('.fieldsetDes').is(':visible')){
		id = 'stat-11';
		$('#stat-11').css({"width":"80%","height":"100%"});
//		$('#graphDiv2').css({"height":"800px"});
//		$('#graphDiv2').removeAttr("min-height");
	}else{
		id = 'graphDiv2';

	}
	var element = document.getElementById(id);
	if (element.mozRequestFullScreen) {
    	element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {     
	    element.webkitRequestFullScreen();
	}else{
    	element.requestFullscreen();
	}
	
	$('#statSelec').hide();
	$('#tabularData').hide();
	$('body').keydown(function (e){
		var order = e.which;
		if(order == 27){
			$('#statSelec').show();
			$('#stat-11').removeAttr('style');
			$('#stat-11').css({"width":"100%","height":"100%"});
			$('#tabularData').show();
		}
	});
}


/*
 *
 *  FUNCTION NAME : toogleTable
 *  AUTHOR        : James Turingan
 *  DATE          :	September 30, 2013
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : show/hide
 *  PARAMETERS    : src
 *  
 */
var innerGraphDiv=590;
function toogleTable(src,table){
	if($('#'+src).attr('checked')) {
		if(table=='mainTbl'){
			$('#StatisticTab').slideDown(1000);
		}else if(table == 'statSel'){
			$('#statSelec').slideDown(1000);
		}else{
			$('#fieldsetDes').slideDown(1000);
		}
	}else{
		if(table=='mainTbl'){
			$('#StatisticTab').slideUp(1000);
		}else if(table == 'statSel'){
			$('#statSelec').slideUp(1000);
		}else{
			$('#fieldsetDes').slideUp(1000);
		}
	}
	if($('#mainTbl').attr('checked')== false && $('#allTime').attr('checked')== false){
		if($('#statSel').attr('checked')== false){
			chartMargin =100;
			chartLegend = 0;
		}else{
			chartMargin =130;
			chartLegend = -30;
		}
		flagstat = true;
		innerGraphDiv=640;
		$('#graphDivMain').css({'height':'640px'});
		initStatTable11();
	}else if($('#mainTbl').attr('checked')== true && $('#allTime').attr('checked')== true){
		if($('#statSel').attr('checked')== false){
			chartMargin =100;
			chartLegend = 0;
		}else{
			chartMargin =130;
			chartLegend = -30;
		}
		flagstat = true;
		innerGraphDiv=590;
		$('#graphDivMain').css({'height':'590px'});
		initStatTable11();
	}else if($('#mainTbl').attr('checked')== true || $('#allTime').attr('checked')== true){
		if($('#statSel').attr('checked')== false){
			chartMargin =100;
			chartLegend = 0;
		}else{
			chartMargin =130;
			chartLegend = -30;
		}
		flagstat = true;
		innerGraphDiv=590;
		$('#graphDivMain').css({'height':'590px'});
		initStatTable11();
		$('#StatisticTab').css({'margin-top': '15px'});
	}

}

/*
 *
 *  FUNCTION NAME : loadStatisticSummary
 *  AUTHOR        : James Turingan
 *  DATE          :	September 30, 2013
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : October 09,2013
 *  REVISION #    : 2
 *  DESCRIPTION   : fetch info for All time High and Statistics Summary
 *  PARAMETERS    : view,dateStr
 *  
 */

function loadStatisticSummary(view,dateStr,thsChk){

	var chkD =[];
	$('input:checkbox[name="checkbox"]').each(function() {
        if($(this).is(':checked')){
            chkD.push($(this).attr('value'));
        }
    });
    var url = 'https://'+CURRENT_IP+'/cgi-bin/Final/NFast/NFast_STAT/NFastSTATCGI.py?action=statsummary&query=view='+view+dateStr+'`checked='+chkD;
    $.ajax({
        url: url,
        dataType: 'text/xml',
        async: false,
        success: function(data) {
            var mydata = data;
			var parser = new DOMParser();
            var xmlDoc;
            xmlDoc = parser.parseFromString( mydata , "text/xml" );
            var row = xmlDoc.getElementsByTagName('row');
			var comC='';
            var typeC='';
			for(var a =0; a< row.length; a++){
				var comp = row[a].getAttribute('component');
				var type = row[a].getAttribute('type');
				if(comp){
					var max = row[a].getAttribute('Max');
					var min = row[a].getAttribute('Min');
        	        var ave = row[a].getAttribute('Average');
					comC +=	'&nbsp;<a class="tooltip">Max '+comp+': <b>'+max+'</b></a>&nbsp;';
					comC += '&nbsp;<a class="tooltip">Min '+comp+': <b>'+min+'</b></a>&nbsp;';
					comC += '&nbsp;<a class="tooltip">Ave. '+comp+': <b>'+ave+'</b></a>&nbsp;';
//					$('.max'+comp).html(max);
//					$('.min'+comp).html(min);
//	                $('.ave'+comp).html(ave);
				}else if(type){
					var name = row[a].getAttribute('Name');
					var val = row[a].getAttribute('value');
					var list = row[a].getAttribute('list');
					typeC += '&nbsp;<a class="tooltip" title="'+list+'">'+name+': <b>'+val+'</b></a>&nbsp;'
/*					if(name == 'Active User'){
						$('.activeUser').html(val);
						$('.activeUser').parent().parent().attr('title',list);
					}else if(name == 'Concurrent User'){
						$('.concurrentUser').html(val);
						$('.concurrentUser').parent().parent().attr('title',list);
                    }else if(name == 'Reservation'){
						$('.activeReservation').html(val);
						$('.activeReservation').parent().parent().attr('title',list);
                    }else if(name == 'Concurrent Reservation'){
						$('.concurrentReservation').html(val);
						$('.concurrentReservation').parent().parent().attr('title',list);
                    }else if(name == 'Reservation Devices'){
						$('.activeReservationDevice').html(val);
						$('.activeReservationDevice').parent().parent().attr('title',list);
                    }else if(name == 'Concurrent Reservation Devices'){
						$('.concurrentReservationDevice').html(val);
						$('.concurrentReservationDevice').parent().parent().attr('title',list);
                    }*/
				}
				$('#s1').html(typeC);
				$('#s2').html(comC);
				$("#s1").endlessScroll({ width: '100%', height: '25px', steps: -2, speed: 70, mousestop: true });
		        $("#s2").endlessScroll({ width: '100%', height: '25px', steps: -2, speed: 70, mousestop: true });
			}
		}
	});
}
/*
 *
 *  FUNCTION NAME : queryReservationTable
 *  AUTHOR        : James Turingan
 *  DATE          :	October 02, 2013
 *  MODIFIED BY   : Mark Anthony Elbambo
 *  REVISION DATE : Nov. 18, 2013
 *  REVISION #    : 2
 *  DESCRIPTION   : query string for Reservation page in statistics and reports
 *  PARAMETERS    : val,view,dateStr,qstr2
 *  CHANGES		  : added the selection for user
 */
function queryReservationTable(val,view,dateStr,qstr2){
	var val2,id,val3;
    val2 = val.replace(/-/g,'_');
    val2 = val2.replace('/','_');
    val2 = val2.replace(':','_');
	val2 = val2.replace(' ','_');
	val2 = val2.replace('-','_');
	id = val2.split('Model_');	
	val3 = val.split('_');
	globalSelectedTab = val; // this variable holds the selected tab for the pagiantion, limit by or auto refresh of the reservation page
	$('#StatisticTab li').removeClass('ui-tabs-selected ui-state-active');
	$('#li'+val2).addClass('ui-tabs-selected ui-state-active');
	$('#li'+val2+'_reservation').addClass('ui-tabs-selected ui-state-active');
	$('#li'+val2+'_device').addClass('ui-tabs-selected ui-state-active');
	$('#li'+val3[1]+'_user').addClass('ui-tabs-selected ui-state-active');
	var action = val.split('_');
	var qstr,cgival;
	var arr = [];	
	var arr2=[];
	var currpage;
	if(action[0].toLowerCase() == 'model' || action[0].toLowerCase() == 'rp' || action[0].toLowerCase() == 'esp' || action[0].toLowerCase() == 'module' || action[0].toLowerCase() == 'slot'){
		qstr = 'action=devicetable&query=dev='+action[0]+'^'+action[1]+'`view='+view+dateStr;
		currpage = '&nbsp&#187&nbsp '+'<span  id="subh">'+action[0]+'</span> '+'&nbsp&#187&nbsp'+'<span id="subh2" style="font-weight:bold;color:#D61C18;" >'+action[1]+'</span>';
		cgival = 14;
    	globalLoad = "rmResStat13";
		$('#li'+id[1]+'_device').addClass('ui-tabs-selected ui-state-active');
	}else if(action[0].toLowerCase() == 'user' || action[0].toLowerCase() == 'dom'){
		if(action[0].toLowerCase() == 'dom'){
			var z = (action.length - 1);
			dateStr = dateStr+'`dom='+action[z];
			var valE = action[1].charAt(0).toUpperCase() + action[1].slice(1);
			var subhUser = ' &nbsp&#187&nbsp <span  id="subh">Domain</span> ';
		}else{
			var valE = action[0].charAt(0).toUpperCase() + action[0].slice(1);
			var subhUser ='';
		}
		qstr = 'action=usertable&query=`view='+view+dateStr;
		cgival = 15;
    	globalLoad = "rmResStat14";
		currpage = subhUser+' &nbsp&#187&nbsp'+'<span id="subh2" style="font-weight:bold;color:#D61C18;" >'+valE+'</span>';
	}else if(action[0].toLowerCase() == 'device'){
		var valE = action[0].charAt(0).toUpperCase() + action[0].slice(1);
		qstr = 'action=devicetable&query=`view='+view.replace('+','%2b')+dateStr;
		cgival = 14;
    	globalLoad = "rmResStat13";
		currpage = ' &nbsp&#187&nbsp'+'<span id="subh2" style="font-weight:bold;color:#D61C18;" >'+valE+'</span>';

	}else if(action[0].toLowerCase() == 'reservation' ){
		var valE = action[0].charAt(0).toUpperCase() + action[0].slice(1);
		qstr = 'action=reservationstat&query=`view='+view+dateStr;
		cgival = 13;
    	globalLoad = "rmResStat12";
		currpage = ' &nbsp&#187&nbsp'+'<span id="subh2" style="font-weight:bold;color:#D61C18;" >'+valE+'</span>';

	}else if(action[0].toLowerCase() == 'failed' || action[0].toLowerCase() == 'configeditor' || action[0].toLowerCase() == 'topo' || action[0].toLowerCase() == 'reserved' || action[0].toLowerCase() == 'titan' || action[0].toLowerCase() == 'rescheduled' || action[0].toLowerCase() == 'api'){
		if(action[0].toLowerCase() == 'failed' || action[0].toLowerCase() == 'rescheduled' || action[0].toLowerCase() == 'reserved'){
			var tp = 'type';
		}else{
			var tp = 'application';
		}
		qstr = 'action=reservationstat&query=`'+tp+'='+action[0]+'`view='+view+dateStr;
		cgival = 13;
    	globalLoad = "rmResStat12";
		currpage = ' &nbsp&#187&nbsp'+'<span  id="subh">Reservation</span> '+'&nbsp&#187&nbsp'+'<span id="subh2" style="font-weight:bold;color:#D61C18;" >'+action[0]+'</span>';
	}
	arr2.push(qstr,cgival);
	globalAction = arr2;
	qstr += qstr2;
	arr.push(qstr,cgival);
	$('#subContainer').empty().html(currpage); // headers for the reservation tables
	return arr;
}

/*
 *
 *  FUNCTION NAME : loadReserveStatTable
 *  AUTHOR        : James Turingan
 *  DATE          :	October 11, 2013
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : initialize the specific table based on query string in function queryReservationTable
 *  PARAMETERS    : val,view,dateStr,qstr
 * 
 */
function loadReserveStatTable(val,view,dateStr,qstr,thsChk){
	var str = queryReservationTable(val,view,dateStr,qstr); 
    var url = 'https://'+CURRENT_IP+'/cgi-bin/Final/NFast/NFast_STAT/NFastSTATCGI.py?'+str[0];
	
    $('#ReservationStatistic13Table').find("tr:gt(1)").remove();
    $('#ReservationStatistic14Table').find("tr:gt(1)").remove();
	$('#ReservationStatistic15Table').find("tr:gt(1)").remove();
	$('#statSelec select').addClass('ui-multiselect ui-widget ui-state-default optionDes a-btn');
	$('#statSelec [type=text]').addClass('selecText');
	var cgival=str[1];
	loadGraphLoader();
setTimeout(function(){
	$.ajax({
        url: url,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText2').css({'visibility':'hidden'});
			
            stattodo(data,cgival);
			$('#mainTblPg').hide(); //hides paginations
			$('#mainTblPg2').hide(); //hides components
			$('#statSelec select').addClass('ui-multiselect ui-widget ui-state-default optionDes a-btn');
			$('#statSelec [type=text]').addClass('selecText');
			var qstr = getQueryGraph(view,dateStr); 
	       	openGraphReserve("Line",qstr,"reservationgraph",globalStatId); 
//			loadStatisticSummary(view,dateStr); // initialize for the Summary statistic
            swapHeader();
            testStats();
            colorHeader();
            checkChkbox();
            var match = $('#ReservationStatistic2TotalMatches').html();
            if(match > 1){
                $('#matches2').html('Matches');
            }else{
                $('#matches2').html('Match');
            }
            $('#statsViewNew').css({'display':'block'});
			var totalmatch = $('#ReservationStatistic2TotalPages').html();
            if(totalmatch == 1){
                $('#ReservationStatistic2PageNumber').html('1');
                $('#ReservationStatistic2Pages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
            }
            globalIndexFlag = true;
			refreshAvailability = true;
        }
    });
},1000);
    var view2 = $('#viewStatSelect').val();
    if(view2 == 'Detailed'){
        $('#statTimePickerdiv').css({'display':'none'});
        $('#statsViewNew').css({'display':'block'});
        $('#clearFilt').css({'visibility':'visible'});
    }
	flagstat2 = false;
	loadStatisticSummary(view,dateStr,thsChk);
}

/*
 *
 *  FUNCTION NAME : loadGraphLoader
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          :	October 11, 2013
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : start and initializes the percent loader used for graphs
 *  PARAMETERS    : 
 *  
 */
var $topLoader, topLoaderRunning, animator, kb, totalKb, speed, animateFunc;
function loadGraphLoader(){
	$topLoader = $("#graphDivMain").empty().percentageLoader({
		width: 150, 
		height: 150, 
		controllable : true, 
		progress : 0, 
		onProgressUpdate : function(val) {
			$topLoader.setValue(Math.round(val * 100.0));
		}
	});

	topLoaderRunning = false;
	animator = true;

	if (topLoaderRunning) {
		return;
	}
	topLoaderRunning = true;
	$topLoader.setProgress(0);
	$topLoader.setValue('0%');
	kb = 0;
	totalKb = 100;
	speed = 50;
        
	animateFunc = function() {
		if(animator == true){
			kb += 2;
/*			if(kb ==50){
				speed = 100;
			}else if(kb == 90){
				speed = 300;
			}else if(kb == 95){
				speed = 500;
			}else if(kb > 95){
				speed = 1000;
			}*/
			$topLoader.setProgress(kb / totalKb);
			$topLoader.setValue(kb.toString() + '%');
              
			if (kb < totalKb && kb != 99) {
				setTimeout(animateFunc, speed);
			} else {
				topLoaderRunning = false;
			}
		}
	}
	setTimeout(animateFunc, speed);
 }


/*
 *
 *  FUNCTION NAME : statClickPage
 *  AUTHOR        : James Turingan
 *  DATE          :	October 11, 2013
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : query for the pagination of reservation tree view
 *  PARAMETERS    : page
 *  
 */
function statClickPage(page){
	var cgival = globalAction[1]; 
	var limit = $('#ReservationStatistic2PageLimit').val();
	$('#content').addClass('fullwidth');
	$('#ReservationStatistic13Table').find("tr:gt(1)").remove();
    $('#ReservationStatistic14Table').find("tr:gt(1)").remove();
	$('#ReservationStatistic15Table').find("tr:gt(1)").remove();

	$('#ReservationStatistic2PageNumber').empty().append(page);
	$('#statSelec select').addClass('ui-multiselect ui-widget ui-state-default optionDes a-btn');
    $('#statSelec [type=text]').addClass('selecText');

	var url = 'https://'+CURRENT_IP+'/cgi-bin/Final/NFast/NFast_STAT/NFastSTATCGI.py?'+globalAction[0]+'`limit='+limit+'`page='+page;
	$.ajax({
        url: url,
        dataType: 'text/xml',
        success: function(data) {
            $('#ProcessText2').css({'visibility':'hidden'});
			
            stattodo(data,cgival);
			$('#mainTblPg').hide(); //hides paginations
			$('#mainTblPg2').hide(); //hides components
			$('#statSelec select').addClass('ui-multiselect ui-widget ui-state-default optionDes a-btn');
		    $('#statSelec [type=text]').addClass('selecText');
            swapHeader();
            testStats();
            colorHeader();
            checkChkbox();
            var match = $('#ReservationStatistic2TotalMatches').html();
            if(match > 1){
                $('#matches').html('Matches');
            }else{
                $('#matches').html('Match');
            }
            $('#statsViewNew').css({'display':'block'});
			var totalmatch = $('#ReservationStatistic2TotalPages').html();
            if(totalmatch == 1){
                $('#ReservationStatistic2PageNumber').html('1');
                $('#ReservationStatistic2Pages').html('<span id="rm1" style="cursor:pointer; color:#39599C;">1</span>');
            }
			flagstat2=false;
            globalIndexFlag = true;
        }
    });
}



