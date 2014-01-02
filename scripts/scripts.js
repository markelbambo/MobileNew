$( document ).on( "mobileinit", function() {
  $.mobile.loader.prototype.options.text = "loading";
  $.mobile.loader.prototype.options.textVisible = false;
  $.mobile.loader.prototype.options.theme = "a";
  $.mobile.loader.prototype.options.html = "";
});
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
var globalLoginFlag = 0;
var globalDomainArray = new Array();
var globalResourceDomain= "";
if(globalLoginFlag == 1){
	$.mobile.changePage( $("#configEditorPage"), {
          transition: "flow",
          reverse: false,
          changeHash: true
    });
}else{
	$.mobile.changePage( $("#Login"), {
          transition: "flow",
          reverse: false,
          changeHash: true
    });
}

/*Page orientation - Portrait/Landscape */
window.onorientationchange = function () {
	setTimeout(draw(), 100); 
}
/*##########################################################################################################################*/
/*Canvas drawing*/
$(document).ready(function() {	
	loadLogin();
	loadConfigEditor();
	CommitAction();
	populateCombo();
	outOfFocus();
	$(document).on('pagebeforeshow', 'div[data-role="dialog"]', function (e, ui) {
		$("#configFooter").hide();
    	ui.prevPage.addClass("ui-dialog-background ");
	});

	$(document).on('pagehide', 'div[data-role="dialog"]', function (e, ui) {
    	$(".ui-dialog-background ").removeClass("ui-dialog-background ");
		$("#configFooter").show();
	});

});
/* show DOMAIN NAME */
var clickbutDom = true;
$(document).on('click', '#triggerDomain', function() {
	if (clickbutDom == true){
		$("#panel3").hide();
		clickbutDom =false;
	}else if (clickbutDom == false){
		$("#configText").empty().append(Name);
		$("#panel3").show();
   //		$("#panel3").addClass('trigger2 left');
//		$("#panel3").css({"position": "absolute","opacity": "0.9","display": "block"});
		clickbutDom=true;
	}
});
/* SHOW HIDE CONFIGURATION NAME */
var glo = false;
$(document).on('click', '#trigger2', function() {
	if (glo == false && Name!=""){
		$("#configText").empty().append(Name);
		$("#panel2").show();
   		$("#panel2").addClass('trigger right');
		$("#panel2").css({"position": "absolute","opacity": "0.9","display": "block"});
		glo =true;
	}else if (glo == true){
		$("#panel2").hide();
		glo=false;
	}
});
/* POPUP FOR EDIT CONFIGURATION NAME */
$(document).on('dblclick', '#confi', function() {
	$.mobile.changePage($('#editConfigName'),{
		 transition: "pop",
		  changeHash: false
	},1500);	
	var n = Name.split(".");
	$('#txtConfigName').val(n[0]);
});
$(document).on('click', "#okEditConfig", function() {
	var text = $("#txtConfigName").val();
		if ($.trim(text)==''){
			alert('Space are not allowed.');
				return false;
		}
		Name = text+".stat";
		$('#txtConfigName').val(Name);
		$('#configText').empty().append(Name);
		$.mobile.changePage( $("#configEditorPage"), {
    	      transition: "pop",
    	      reverse: false,
    	      changeHash: true
    	});
});
$(document).on('click', '#cancelEditConfig', function() {
	$.mobile.changePage($('#configEditorPage'),{
		 transition: "pop",
		  changeHash: true
	},1500);	
	$('#txtConfigName').val(Name);
});


/*##########################################################################################################################*/

/*Menu animation*/
/*$(document).on('click', '.configCar', function() {
    $(".configCar").addClass('animated wobble');
    setTimeout(function(){
    	$(".configCar").removeClass('animated wobble');
    	$.mobile.changePage($('#configDialog'),{
    		transition: "pop"
    	});
    },1500);
});*/
$(document).on('dblclick', 'div[data-role="content"]', function() {
	if($("#configFooter").attr("style") == "display: block;" || $("#configFooter").attr("style") == ""){
		$("#configFooter").hide();
	}else{
		$("#configFooter").show();
	}
});

$(document).on('click', '.configCar', function() {
    $(".configCar").addClass('animated wobble');
    setTimeout(function(){
    	$(".configCar").removeClass('animated wobble');
    	$.mobile.changePage( $("#configEditorPage"), {
		  transition: "flow",
		  reverse: false,
		  changeHash: true
		});
    },1500);
});
$(document).on('click', '.configCar2', function() {
    $(".configCar2").addClass('animated wobble');
    setTimeout(function(){
    	$(".configCar2").removeClass('animated wobble');
    	$.mobile.changePage( $("#configEditorPage"), {
		  transition: "flow",
		  reverse: false,
		  changeHash: true
		});
    },1500);
});
$(document).on('click', '.adminCar', function() {
	$(".adminCar").addClass('animated wobble');
	setTimeout(function(){
		$(".adminCar").removeClass('animated wobble');
		$.mobile.changePage($('#adminDialog'),{
    		transition: "pop"
    	});
	},1500);
});
$(document).on('click', '.rmCar', function() {
	$(".rmCar").addClass('animated wobble');
	setTimeout(function(){
		$(".rmCar").removeClass('animated wobble');
		$.mobile.changePage($('#rmDialog'),{
    		transition: "pop"
    	});
	},1500);
});
$(document).on('click', '.pmCar', function() {
	$(".pmCar").addClass('animated wobble');
	setTimeout(function(){
		$(".pmCar").removeClass('animated wobble');
		$.mobile.changePage($('#pmDialog'),{
    		transition: "pop"
    	});
	},1500);
});
$(document).on('click', '.statCar', function() {
	$(".statCar").addClass('animated wobble');
	setTimeout(function(){
		$(".statCar").removeClass('animated wobble');
		$.mobile.changePage($('#statsDialog'),{
    		transition: "pop"
    	});
	},1500);
});
$(document).on('click', '#showGridline', function() {
	$("#showGridline").addClass('animated pulse');
	setTimeout(function(){
	showGrid();   	
	},1500);
});
$(document).on('click', '#editGridline', function() {
	$("#editGridline").addClass('animated pulse');
	setTimeout(function(){
		$.mobile.changePage($('#editGridPopup'),{
			changeHash: false,
    		transition: "pop"
		});
		
	},1500);
});
$(document).on('click', '#submitValue', function() {
		var val = ($("#gridValue").val());
        var val2 = parseInt(val);
        var a = checkNum(val2);

				
		if(a == true){
			return;
		}else if(a == false){
			globalGridSize = val2;
			console.log(globalGridSize);
			$("#editGridPopup").dialog('close');	
			clearGrid = true;
			setTimeout(function(){
					showGrid();
			},4000);
		}
								
});
$(document).on('keyup', '#gridValue', function() {
    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
       this.value = this.value.replace(/[^0-9\.]/g, '');
    }
});


$(document).on('click', '#logOut', function() {
	signout();
});
$(document).on('taphold', '#deviceSubCisco', function() {
		loading("show");
	setTimeout(function(){
	    $.mobile.changePage($('#ConfigManagePop'),{
    	    transition: "pop"
        });
		globalManageDeviceShow ="deviceMenu";
		deviceListPopupTable('deviceMenu'); 
   	},1500);
});
$(document).on('taphold', '#testToolSubIxia', function() {
		loading("show");
	setTimeout(function(){
	    $.mobile.changePage($('#ConfigManageTestPop'),{
    	    transition: "pop"
        });
		TestToolListTable(); 
   	},1500);
});

/*##########################################################################################################################*/
/* for CONFIG EDITOR: manage device (DONE BUTTON) */
$(document).on('click', "#dlistDone", function(){
	var load ="";
	var device = [];
	setTimeout(function(){
		$(".trManageDevice").each(function(){
			if($(this).hasClass('highlight') == true){
				var devicename =	$(this).attr('DeviceName');
				load =  $(this).attr("LoadType");
				if($.inArray(devicename,device)==-1){
					device.push(devicename);
				}
       		}
    	});
		createQueryMapLink(device,load);
		if (globalManageDeviceShow.toLowerCase()=="tootipdevice"){
						
		}
   		$.mobile.changePage($('#configEditorPage'),{
   			transition: "pop"
   		});
		configEditorManageDevice = false // to stop objpath 
	},1500);
});
/*##########################################################################################################################*/
/*configEditorPage" action bindings*/
$( document ).on( "pageinit", "#configEditorPage", function( event ) {
	initDialog();
	draw();
	loadFilterDevices();
	$('#domainText').empty().append(ResourceDomain);
/*Grid  Menu icon action bindings*/
	$(document).on('click', '.imgReservation', function(){
		var id = $(this).attr('id');
		if(id == 'imgReservation'){
			$('#ulReserved').slideDown(500);	
			$('#ulScheduler').slideUp(500);
			$('#ulManage').slideUp(500);
		}else if(id == 'imgScheduler'){
			$('#ulReserved').slideUp(500);	
			$('#ulScheduler').slideDown(500);
			$('#ulManage').slideUp(500);
		}else if(id == 'imgManage'){
			$('#ulReserved').slideUp(500);	
			$('#ulScheduler').slideUp(500);
			$('#ulManage').slideDown(500);
		}
	});
	$(document).on('click', '#CancelRButton', function(){
		cancelReservation();
	});
	$(document).on('click', '#RequestButton', function(){
		createQueryforResevartion();
		initDate();
	});
	$(document).on('change', '#FlashDurationSel', function(){
		durationOnChange($(this).val());
	});

	$(document).on('change', '.picker', function(){
		outOfFocus();
	});
	
	$(document).on('click', '.bckPalette', function(){
		var tblId = $(this).parent().parent().parent().parent().attr("id");
		$("#"+tblId).hide();
		$("#gridPalette").show();
	});

	$(document).on('click', '#resDomIco', function() {
		$("#resDomIco").addClass('animated pulse');
		setTimeout(function(){
			$("#resDomIco").removeClass('animated pulse');
			$.mobile.changePage($('#ResourcePop'),{
				changeHash : false,
	    		transition: "pop"
	    	});
		},1500);		
	});
	$(document).on('click', '#rmConnectivityLogs', function() {
		setTimeout(function(){
			$("#eventNewDevice").show();
		},1500);		
	});

	$(document).on('click', '#deviceIco', function() {
		$("#deviceIco").addClass('animated pulse');
		setTimeout(function(){
			$("#deviceIco").removeClass('animated pulse');
			$("#gridPalette").hide();
			$("#devicePalette").show();
		},1500);		
	});
	$(document).on('click', '#deviceSubCisco', function() {
        $("#devicePaletteSubTrMain").hide();
        $("#devicePaletteSubTrCisco").show();
        $("#devicePalette .bckPalette").off("click");
        $("#devicePalette .bckPalette").on("click", function(){
            $("#devicePaletteSubTrCisco").hide();
            $("#devicePaletteSubTrMain").show();
        });
/*
		setTimeout(function(){
    	   	$.mobile.changePage($('#FilterMenuPop'),{
        	   	transition: "pop"
	        });
			$("#FilterMenuPop").trigger("create");
    	},100);
*/
    });
	$(document).on('click', '#deviceSubList', function() {
        $("#devicePaletteSubTrMain").hide();
        $("#devicePaletteSubTrList").show();
        $("#devicePalette .bckPalette").off("click");
        $("#devicePalette .bckPalette").on("click", function(){
            $("#devicePaletteSubTrList").hide();
            $("#devicePaletteSubTrMain").show();
        });
    });
	$(document).on('click', '#testToolIco', function() {
		$("#testToolIco").addClass('animated pulse');
		setTimeout(function(){
			$("#testToolIco").removeClass('animated pulse');
			$("#gridPalette").hide();
			$("#testToolPalette").show();
		},1500);		
	});
	$(document).on('click', '#testToolSubList', function() {
		$("#testToolPaletteSubTrMain").hide();
		$("#testToolPaletteSubTrList").show();
		$("#testToolPalette .bckPalette").off("click");
		$("#testToolPalette .bckPalette").on("click", function(){
			$("#testToolPaletteSubTrList").hide();
			$("#testToolPaletteSubTrMain").show();
		});
	});
	$(document).on('click', '#testToolSubIxia', function() {
		$("#testToolPaletteSubTrMain").hide();
		$("#testToolPaletteSubTrIxia").show();
        $("#testToolPalette .bckPalette").off("click");
        $("#testToolPalette .bckPalette").on("click", function(){
            $("#testToolPaletteSubTrIxia").hide();
            $("#testToolPaletteSubTrMain").show();
        });
    });
	$(document).on('click', '#testToolSubIxiaList', function() {
		$("#testToolSubIxiaList").addClass('animated pulse');
        setTimeout(function(){
            $("#testToolSubIxiaList").removeClass('animated pulse');
            $.mobile.changePage($('#testToolList'),{
                transition: "pop"
            });
        },1500);
	});
	$(document).on('click', '#serverIco', function() {
		$("#serverIco").addClass('animated pulse');
		setTimeout(function(){
			$("#serverIco").removeClass('animated pulse');
			$("#gridPalette").hide();
			$("#serverPalette").show();
		},1500);		
	});
	
	$(document).on('click', '#connectIco', function() {
		$("#connectIco").addClass('animated pulse');
		setTimeout(function(){
			$("#connectIco").removeClass('animated pulse');
			$("#gridPalette").hide();
			$("#connectivityPalette").show();
		},1500);		
	});
	$(document).on('click', '#connectivitySubL1', function() {
        $("#connectivityPaletteSubTrMain").hide();
        $("#connectivityPaletteSubTrL1").show();
        $("#connectivityPalette .bckPalette").off("click");
        $("#connectivityPalette .bckPalette").on("click", function(){
            $("#connectivityPaletteSubTrL1").hide();
            $("#connectivityPaletteSubTrMain").show();
        });
    });
	$(document).on('click', '#connectivitySubL2', function() {
		$("#connectivityPaletteSubTrMain").hide();
        $("#connectivityPaletteSubTrL2").show();
        $("#connectivityPalette .bckPalette").off("click");
        $("#connectivityPalette .bckPalette").on("click", function(){
            $("#connectivityPaletteSubTrL2").hide();
            $("#connectivityPaletteSubTrMain").show();
        });
    });
	$(document).on('click', '#interfaceIco', function() {
		$("#interfaceIco").addClass('animated pulse');
		setTimeout(function(){
			$("#interfaceIco").removeClass('animated pulse');
			$("#gridPalette").hide();	
			$("#interfacePalette").show();
		},1500);		
	});

	$(document).on('click', '.bckPaletteBars', function(){
		var tblId = $(this).parent().parent().parent().parent().attr("id");
		$("#"+tblId).hide();
		$("#barsPalette").show();
	});
	$(document).on('click', '#topos', function(){
		$("#viewTools").hide();
		$("#diagramTools").show();
		console.log('ASDASDASD?A');
	});
	$(document).on('click', '#SaveDiagram', function(){
		console.log('SAVE DI');
		stage.toDataURL({
		    callback: function(dataUrl) {
//		    	window.location = dataUrl;
				console.log('PASOK DI SAVE',dataUrl);
//				Canvas2Image.saveAsPNG(dataUrl);
	    	}
    	});
//		var oCanvas = document.getElementById("canvasID");
	
		
	});


    $(document).on('click', '#viewOptions', function() {
        $("#viewOptions").addClass('animated pulse');
        setTimeout(function(){
//            $("#viewOptions").removeClass('animated pulse');
            $("#barsPalette").hide();
            $("#viewOptionPalette").show();
        },1500);
    });
    $(document).on('click', '#enableDisableDebug', function() {
        $("#enableDisableDebug").addClass('animated pulse');
        setTimeout(function(){
            $("#viewOptions").removeClass('animated pulse');
            $("#enableDisable").show();
        },1500);
    });
    $(document).on('click', '#gridLines', function() {
        $("#gridLines").addClass('animated pulse');
        setTimeout(function(){
    //        $("#gridLines").removeClass('animated pulse');
            $("#viewOptionPalette").hide();
            $("#gridOptionsPalette").show();
        },1500);
    });
	$(document).on('click', '#barsConfig', function() {
        $("#barsConfig").addClass('animated pulse');
        setTimeout(function(){
  //          $("#barsConfig").removeClass('animated pulse');
            $("#barsPalette").hide();
            $("#configPalette").show();
        },1500);
    });
   $(document).on('click', '#deviceList', function() {
        $("#deviceList").addClass('animated pulse');
        setTimeout(function(){
//            $("#viewOptions").removeClass('animated pulse');
            $("#deviceMenu").hide();
            $("#deviceListSub").show();
        },1500);
    });
   $(document).on('click', '#deviceToolsList', function() {
        $("#deviceToolsList").addClass('animated pulse');
        setTimeout(function(){
//            $("#viewOptions").removeClass('animated pulse');
            $("#deviceMenu").hide();
            $("#deviceToolsListSub").show();
        },1500);
    });
	$(document).on('click', '.bckDeviceMenu', function(){
		var tblId = $(this).parent().parent().parent().parent().attr("id");
		$("#"+tblId).hide();
		$("#deviceMenu").show();
	});
   $(document).on('click', '#linkList', function() {
        $("#linkList").addClass('animated pulse');
        setTimeout(function(){
//            $("#viewOptions").removeClass('animated pulse');
            $("#linkMenu").hide();
            $("#subLink").show();
        },1500);
    });
	$(document).on('click', '.bckLinkMenu', function(){
		var tblId = $(this).parent().parent().parent().parent().attr("id");
		$("#"+tblId).hide();
		$("#linkMenu").show();
	});
/*Load Config event bindings*/
	$(document).on('click', '#loadConfigImg', function() {
		loadLoadConfig();
		$("#loadConfigImg").addClass('animated pulse');
        setTimeout(function(){
            $("#loadConfigImg").removeClass('animated pulse');
            $.mobile.changePage($('#loadConfig'),{
				changeHash : false,
                transition: "pop"
            });
        },1500);
	});
	$(document).on('change', '#loadConfTypeSelect', function() {
		var val = $('#loadConfTypeSelect').val();
		if(val =="static"){
			$("#loadConfSelect > option").each(function() {
				var type = $(this).attr("type");
				if(type == "stat"){
					$(this).css({"display":"block"});
				}else{
					$(this).css({"display":"none"});
				}
			});
		}else if(val == "dynamic"){
			$("#loadConfSelect > option").each(function() {
				var type = $(this).attr("type");
                if(type == "dyn"){
                    $(this).css({"display":"block"});
                }else{
                    $(this).css({"display":"none"});
                }
            });
		}else if(val =="file"){			
			showDirectory();
		}else{
			$("#loadConfSelect > option").each(function() {
				var type = $(this).attr("type");
            	$(this).css({"display":"none"});
            });
		}
/*		if(val=="file"){
            $("#fileDiv").show();
        }else{
			$("#fileDiv").hide()
		}*/
	});
	$(document).on('click', '#okLoadConf', function() {
		var confName,mainid,fileType;
		$('#loadConfSelect > option:selected').each(function() {
			confName= $(this).attr("value");
			mainid= $(this).attr("id");
			fileType = $(this).attr("filetype");
		});
		if(confName == "" || confName == undefined && ($('#loadConfTypeSelect').val() != "file")){
			alert("Please select a configuration to load.");
			return;
		}else if($('#loadConfTypeSelect').val() == "file"){
			var cnfName = $("#loadConfSelect").val();
			showFile(cnfName);
		}else{
			loadLoadConfigOk(confName,mainid,fileType);
		}
	});
	$(document).on('click', '#cancelLoadConf', function() {
		$("#loadConfig").dialog("close");
	});
/*Delete Config event bindings*/
	$(document).on('click', '#deleteConfigImg', function() {
		loadDeleteConfig();
		$("#deleteConfigImg").addClass('animated pulse');
        setTimeout(function(){
            $("#deleteConfigImg").removeClass('animated pulse');
            $.mobile.changePage($('#deleteConfig'),{
				changeHash : false,
                transition: "pop"
            });
        },1500);
	});
	$(document).on('change', '#deleteConfTypeSelect', function() {
		var val = $('#deleteConfTypeSelect').val();
		if(val =="static"){
			$("#deleteConfSelect > option").each(function() {
				var type = $(this).attr("type");
				if(type == "stat"){
					$(this).css({"display":"block"});
				}else{
					$(this).css({"display":"none"});
				}
			});
		}else if(val == "dynamic"){
			$("#deleteConfSelect > option").each(function() {
				var type = $(this).attr("type");
                if(type == "dyn"){
                    $(this).css({"display":"block"});
                }else{
                    $(this).css({"display":"none"});
                }
            });
		}else{
			$("#deleteConfSelect > option").each(function() {
				var type = $(this).attr("type");
            	$(this).css({"display":"none"});
            });
		}
	});
	$(document).on('click', '#okDeleteConf', function() {
		var confName,mainid,fileType;
		$('#deleteConfSelect > option:selected').each(function() {
			confName= $(this).attr("value");
			mainid= $(this).attr("id");
			fileType = $(this).attr("filetype");
		});
		if(confName == "" || confName == undefined){
			alert("Please select a configuration to delete.");
			return;
		}else{
			var all = false;
			if($("#deleteConfSelect").val() == "all"){
				confName = globalConfgName;
				mainid = globalConfgId;
				all= true;
			}
			loadDeleteConfigOk(confName,mainid,fileType,all);
		}
	});
	$(document).on('click', '#cancelDeleteConf', function() {
        $("#deleteConfig").dialog("close");
    });
/*Save Config event bindings*/
	$(document).on('click', '#saveConfigImg', function() {
		if(devicesArr ==[] || devicesArr.length ==0){
    	    alert("No device/configuration to save, please create one first.");
        	return;
	    }
		loadSaveConfig();
		$("#saveConfigImg").addClass('animated pulse');
        setTimeout(function(){
            $("#saveConfigImg").removeClass('animated pulse');
            $.mobile.changePage($('#saveConfig'),{
				changeHash : false,
                transition: "pop"
            });			
			$("#submitSAveFile").hide();
//			$("#saveConfFileTypeFileExt").hide();
//			$("#saveConfFileTypeFileType").hide();
        },1500);
	});
	$(document).on('change', "#saveConfFileTypeFileExt", function() {
		if($(this).val() == "topo"){
			createTopo();
		}
	});
	$(document).on('change', "#saveConfFileType", function() {
		createConfigName();
		if($(this).val() == "file"){
			$(".fileType").show();
			$(".dbType").hide();
			$("#submitSAveFile").show();
			$("#okSaveConf").hide();
			var nameVar = Name.split(".")[0];
	        Name = nameVar;
		}else{
			$("#okSaveConf").show();
			$(".fileType").hide();
            $(".dbType").show();
			$("#submitSAveFile").hide();
			var tp = $("#saveConfFileTypeDBType").val();
			if(tp == "static"){
         		var nameVar = Name.split(".")[0];
		        Name = Name = nameVar+".stat";
        	}else if(tp == "dynamic"){
            	var nameVar = Name.split(".")[0];
            	Name = Name = nameVar+".dyn";
	        }else if(tp == "testbed"){
            	var nameVar = Name.split(".")[0];
            	Name = Name = nameVar+".tb";
        	}
		}
		var xmlData = getXmlData();
		$("#saveConfFileName").val(Name);
		$("#saveConfFileTxtAreaXML").html(xmlData);
		$("#saveConfig").trigger("create");
	});
	$(document).on('change', "#saveConfFileTypeDBType", function() {
		if($(this).val() == "static"){
			var nameVar = Name.split(".")[0];
			Name = Name = nameVar+".stat";
		}else if($(this).val() == "dynamic"){
			var nameVar = Name.split(".")[0];
            Name = Name = nameVar+".dyn";
		}else if($(this).val() == "testbed"){
			var nameVar = Name.split(".")[0];
            Name = Name = nameVar+".tb";
		}else{
            var nameVar = Name.split(".")[0];
            Name = nameVar;
        }
       	$("#saveConfFileName").val(Name);
	});
	$(document).on('click', '#okSaveConf', function() {
		var confName = $("#saveConfFileName").val();
		var FType = $("#saveConfFileType").val();
		var FTypeDB = $("#saveConfFileTypeDBType").val();
		if(FType =="database" && (FTypeDB == "dynamic" || FTypeDB == "static")){
			saveConfigtoDB(confName,FTypeDB);
		}else if(FType =="database" && FTypeDB == "testbed"){
			Name = Name+".dyn";
			saveConfigtoDBTestbed(confName);
		}
	});
	$(document).on('click', "#submitSAveFile", function() {
        var confName = $("#saveConfFileName").val();
		var ext = $("#saveConfFileTypeFileExt").val();
		var cont = $("#saveConfFileTxtAreaXML").html();
		downloadFile(confName,cont,ext);
    });
	$(document).on('click', '#cancelSaveConf', function() {
        $("#saveConfig").dialog("close");
    });


/*changing of image src of action buttons*/
	$(document).on('click', '#applyall', function() {
		$(this).attr("src","img/action_buttons/applyallActive.png");
		$("#loadactive").attr("src","img/action_buttons/loadactive.png");
		$("#clearcanvas").attr("src","img/action_buttons/clear.png");
		$("#committopology").attr("src","img/action_buttons/commit.png");
		$("#cancelreservation").attr("src","img/action_buttons/cancel.png");
	});
	$(document).on('click', '#loadactive', function() {
        $(this).attr("src","img/action_buttons/loadactiveActive.png");
        $("#applyall").attr("src","img/action_buttons/applyall.png");
        $("#clearcanvas").attr("src","img/action_buttons/clear.png");
        $("#committopology").attr("src","img/action_buttons/commit.png");
        $("#cancelreservation").attr("src","img/action_buttons/cancel.png");
		loadActive();	
    });
	$(document).on('click', '#clearcanvas', function() {
        $(this).attr("src","img/action_buttons/clearActive.png");
        $("#loadactive").attr("src","img/action_buttons/loadactive.png");
		$("#applyall").attr("src","img/action_buttons/applyall.png");
        $("#committopology").attr("src","img/action_buttons/commit.png");
        $("#cancelreservation").attr("src","img/action_buttons/cancel.png");
		clearCanvas();
    });
    $(document).on('click', '#committopology', function() {
		if(devicesArr.length > 0){
	        $(this).attr("src","img/action_buttons/commitActive.png");
    	    $("#applyall").attr("src","img/action_buttons/applyall.png");
        	$("#clearcanvas").attr("src","img/action_buttons/clear.png");
	        $("#cancelreservation").attr("src","img/action_buttons/cancel.png");
			$("#loadactive").attr("src","img/action_buttons/loadactive.png");

			$(document).on('pagebeforeshow', '#commitOptions', function (e, ui) {
				checkCommitOptions();
			});
			setTimeout(function(){
        	    $("#committopology").removeClass('animated pulse');
            	$.mobile.changePage($('#commitOptions'),{
                	transition: "pop"
	            });
    	        populateCombo();
        	},1500);
		}else{
			alert("No device/s to commit, please create one first.");
		}
    });
	$(document).on('click', '#cancelreservation', function() {
        $(this).attr("src","img/action_buttons/cancelActive.png");
		$("#loadactive").attr("src","img/action_buttons/loadactive.png");
        $("#applyall").attr("src","img/action_buttons/applyall.png");
        $("#clearcanvas").attr("src","img/action_buttons/clear.png");
        $("#committopology").attr("src","img/action_buttons/commit.png");
		cancelReservation();
    });
});
$(document).on('click', '#okCommitOptions', function() {
	var myXML = getXmlData();
	initDate();
	commitTopology();
});
$(document).on('click', '#cancelCommitOptions', function() {
	$("#commitOptions").dialog("close");
});


$( document ).on( "pageinit", "#commitPop", function( event ) {
	durationOnChange('Duration');	
	initDate();
	outOfFocus();
});
$( document ).on( "pageinit", "#ConfigManageTestPop", function( event ) {
	$(document).on('click', '#testlistDone', function() {
		if(testToolObj[0].Ports.length == 0){
			var msg = testToolObj[0].DeviceName+" has no selected. Do you want to select ports?";
			$('#msgAlert').empty().append(msg);
		   	$.mobile.changePage("#warning", {
				transition: "flow",
				reverse: false,
				changeHash: true
			});
		}else{	
			$("#testToolPaletteSubTrList").hide();
			createTestToolObj();
		   	$.mobile.changePage("#configEditorPage", {
				transition: "flow",
				reverse: false,
				changeHash: true
			});
		}
		console.log('WESSSSS');
    });

});

$( document ).on( "pageinit", "#warning", function( event ) {
	$(document).on('click', '#YesAlertButton', function( event) {
		$('.trManageTestTool').each(function(){
			$(this).removeClass('highlight');
			testToolObj = [];
			checkDevNameTT = [];
			checkPortsTTList = [];
		});

	});
});
$( document ).on( "pageinit", "#PortTestTool", function( event ) {
	loading('hide');
	$('#PortTitle').text(HostName);	
	PortTestToolTable();
	$(document).on('change', '#portTypeTT', function() {
		connTypeFilter();
    });
	$(document).on('click', '#cport', function() {
		if($(this).is(':checked')){
			console.log($(this).val());
			for(var i = 0; i < testToolObj.length; i++){
				if(HostName == testToolObj[i].DeviceName){
					testToolObj[i].Flag = 1;
				}
			}
		}else{
			console.log('UNCHECK!!!!');
			for(var i = 0; i < testToolObj.length; i++){
				if(HostName == testToolObj[i].DeviceName){
					testToolObj[i].Flag = 0;
				}
			}


		}
    });


	
});
$( document ).on( "pageinit", "#loadActivePop", function( event ) {
	$('#divloadActiveTable').load('pages/ConfigEditor/LoadActiveTable.html',function(){

		loadActiveTableQuery();

	});
	$(document).on('click', '#LoadActiveButton', function() {
  //      $("#loadActivePop").popup('close');
	   	$.mobile.changePage("#configEditorPage", {
			transition: "flow",
			reverse: false,
			changeHash: true
		});
		showActiveTopology();

    });
	$(document).on('click', '#CloseALButton', function() {
//        $("#loadActivePop").popup('close');
   	   	$.mobile.changePage("#configEditorPage", {
			transition: "flow",
			reverse: false,
			changeHash: true
		});

    });
	$(document).on('click', '#cbShowAll', function() {
		globalLAFlag = true;
		loadActiveTableQuery();
    });

	$(document).on('click', '.trSelected', function() {
		globalLAdate = $(this).attr('sdate') +','+$(this).attr('edate');	
		globalLArId = $(this).attr('rId');
	});



	
});
$( document ).on( "pageinit", "#deviceMenuPop", function( event ) {
});
$( document ).on( "pageinit", "#FilterMenuPop", function( event ) {
	disabledFilter();
	initDynamicFilterValue();
	$(document).on('click', '#CloseFButton', function() {
		$.mobile.changePage( "#configEditorPage", {
			transition: "flow",
			reverse: false,
		  	changeHash: true
		});

	});
	$(document).on('click', '#DoneFButton', function() {
		$.mobile.changePage( "#configEditorPage", {
			transition: "flow",
			reverse: false,
		  	changeHash: true
		});

	});
	$(document).on('change', '.changeSelected', function(){
		console.log('WA>>>>>>>>');
		if($(this).attr('id') == 'sysNameselF'){
			systemsname2 = $(this).val();			
		}
		if($(this).attr('id') == 'ProductselF'){
			productId2 = $(this).val();
		}
		if($(this).attr('id') == 'VersionselF'){
			vId2 =  $(this).val();
		}
		if($(this).attr('id') == 'OSselF'){
			ostype2 =  $(this).val();

		}
		if($(this).attr('id') == 'OSVersionselF'){
			osversion2 =  $(this).val();			
		}
		if($(this).attr('id') == 'SWselF'){
			swpackage2 =  $(this).val();
		}



//		setTimeout(function(){
			onChangeDropDownList($(this).val(), $(this).attr('did'));
//		},500);
	});


});
$( document ).on( "pageinit", "#administrationPage", function( event ) {
	initDialog();
});
$( document ).on( "pageinit", "#powerManagementPage", function( event ) {
	initDialog();
});
$( document ).on( "pageinit", "#RMConnectivity", function( event ) {
	initDialog();
	loadConnectivity();
	$(document).on('click', '#ConnectivityGenerateReport', function() {
		RMGenerateReport();	
	});	

});
$( document ).on( "pageinit", "#RMPort", function( event ) {
	initDialog();
	loadPort();
		$(document).on('click', '#PortGenerateReport', function() {
			RMGenerateReport();		
		});	
});
$( document ).on( "pageinit", "#RMHistory", function( event ) {
	initDialog();
	loadHistory();
	$(document).on('click', '#ClearRHistory', function() {
		clearRHistory();	
	});

});
$( document ).on( "pageinit", "#RMDevices", function( event ) {
	initDialog();
	loadDevices();
});

$( document ).on( "pageinit", "#RMHistorySched", function( event ) {
	initDialog();
	loadHistorySched();
	$(document).on('click', '.sched', function() {
		eventid1 = $(this).attr('eId');
		devdev1 = $(this).attr('mId');	
		statsstats = $(this).attr('sId');
	});

});
$( document ).on( "pageinit", "#RMEventSched", function( event ) {
	initDialog();
	loadEventSched();
	$(document).on('click', '.sched', function() {
		eventid1 = $(this).attr('eId');
		devdev1 = $(this).attr('mId');	
		statsstats = $(this).attr('sId');
		configname = $(this).attr('configname');
	});
	$(document).on('click', '#continueCancel', function() {
		SchedCancel();	
	});


});
$( document ).on( "pageinit", "#RMManageDevice", function( event ) {
	initDialog();
	loadManageDevice();
	$(document).on('click', '#ManageGenerateReport', function() {
			RMGenerateReport();		
		});	
});
$( document ).on( "pageinit", "#resourceManagementPage", function( event ) {
	initDialog();
	loadReserve();
	$(document).on('click', '#ReserveRelease', function() {
		loadReserveRelease();
		$(document).on('click', '#ReleaseAll', function() {
		rmReleaseAll();
	});
		
	});
	$(document).on('click', '#ReserveEdit', function() {
		loadReserveRelease();
	});
	$(document).on('click', '#ReserveGenerateReport', function() {
		RMGenerateReport();		
	});


});
$( document ).on( "pageinit", "#RMHistorySched2", function( event ) {
	initDialog();
	loadHistoryScheduler2();
	$(document).on('click', '#rmConnectivityLogs', function() {
		showAllConnections();
			});
	$(document).on('click', '.SanityLogs', function() {
		showDeviceConnections();	
	});
	$(document).on('click', '.showLogs', function() {
		globalHostName = $(this).attr('hostname');
		globalDeviceId = $(this).attr('deviceId');
	});
});
/*$(document).on("click", "#RMDeviceLogs", function () {
	showDeviceConnections();
});
*/
$( document ).on( "pageinit", "#statisticsPage", function( event ) {
	initDialog();
	createLineGraphReserve();
});
$( document ).on( "pageinit", "#statisticsdomainpage", function( event ) {
	initdialog();
	initstatcomponent();
//	loadstatdomaintables();
//	createlinegraphreserve();
});
//$( document ).on( "pageinit", "#ConfigManageDevice", function( event ) {
//	initdialog();
//	deviceListPopupTable();
//	loadstatdomaintables();
//	createlinegraphreserve();
//});


function initDialog(){
	$( "#testToolList" ).dialog({ create: function( event, ui ) {} }); 
	$( "#ResourcePop" ).dialog({ create: function( event, ui ) {} });
	$( "#commitPop" ).dialog({ create: function( event, ui ) {} });
	$( "#CancelPopup" ).dialog({ create: function( event, ui ) {} });
	$( "#LogsPop" ).dialog({ create: function( event, ui ) {} });
	$( "#YesNoPopUp" ).dialog({ create: function( event, ui ) {} });
	$( "#OkPopUp" ).dialog({ create: function( event, ui ) {} });
	$( "#CustomViewPopUp" ).dialog({ create: function( event, ui ) {} });
	$( "#debugPopup" ).dialog({ create: function( event, ui ) {} });
	
	$( "#configDialog" ).dialog({ create: function( event, ui ) {} }); 
	$( "#adminDialog" ).dialog({ create: function( event, ui ) {} });
	$( "#pmDialog" ).dialog({ create: function( event, ui ) {} });
	$( "#rmDialog" ).dialog({ create: function( event, ui ) {} }); 
	$( "#statsDialog" ).dialog({ create: function( event, ui ) {} });
	$( "#ConfigManageDevice" ).dialog({ create: function( event, ui ) {} });
	$("#loadConfig").dialog({ create: function( event, ui ) {} });
	$('#deleteConfig').dialog({ create: function( event, ui ) {} });
	$("#editGridPopup").dialog({ create: function( event, ui ) {} });
	$('#saveConfig').dialog({ create: function( event, ui ) {} });
	$("#deviceConfig").dialog({ create: function( event, ui ) {} });
	$("#autoDisDevConfig").dialog({ create: function( event, ui ) {} });
	$("#newDeviceDialog").dialog({ create: function( event, ui ) {} });
	$("#newTestToolDialog").dialog({ create: function( event, ui ) {} });
	$("#newServerDialog").dialog({ create: function( event, ui ) {} });
	$("#editConfigName").dialog({ create: function( event, ui ) {} });
	$( "#commitOptions" ).dialog({ create: function( event, ui ) {} });
	$("#lineTableDiv").dialog({ create: function( event, ui ) {} });
	$("#flapPopupDiv").dialog({ create: function( event, ui ) {} });
}
function initStatComponent(){
	console.log('wee');
	$('#domain-table2-popup').css({'display':'none'});
	$('#domain-table3-popup').css({'display':'none'});
	$('#domain-table4-popup').css({'display':'none'});

}

/*swipe*/
/*
$(document).on("swipeleft", "#configEditorPage", function () {
	$.mobile.changePage( "pages/Admin/AdminUser.html", {
	  transition: "flow",
	  reverse: false,
	  changeHash: true
	});
});
$(document).on("swiperight", "#configEditorPage", function () {
	$("#gridPanel").panel( "open" );
});
*/
$(document).on("swiperight", "#administrationPage", function () {
	$.mobile.changePage( $("#configEditorPage"), {
	  transition: "flow",
	  reverse: true,
	  changeHash: true
	});
});
$(document).on("swipeleft", "#administrationPage", function () {
	$.mobile.changePage( "../RM/RMReservationReserved.html", {
	  transition: "flow",
	  reverse: false,
	  changeHash: true
	});
});
$(document).on("swiperight", "#resourceManagementPage", function () {
	$.mobile.changePage( "../Admin/AdminUser.html", {
	  transition: "flow",
	  reverse: true,
	  changeHash: true
	});
});
$(document).on("swipeleft", "#resourceManagementPage", function () {
	$.mobile.changePage( "../PM/PMPDU.html", {
	  transition: "flow",
	  reverse: false,
	  changeHash: true
	});
});
$(document).on("swiperight", "#powerManagementPage", function () {
	$.mobile.changePage( "../RM/RMReservationReserved.html", {
	  transition: "flow",
	  reverse: true,
	  changeHash: true
	});
});
$(document).on("swipeleft", "#powerManagementPage", function () {
	$.mobile.changePage( "../Stats/StatisticsReservation.html", {
	  transition: "flow",
	  reverse: false,
	  changeHash: true
	});
});
$(document).on("swiperight", "#statisticsPage", function () {
	$.mobile.changePage( "../PM/PMPDU.html", {
	  transition: "flow",
	  reverse: true,
	  changeHash: true
	});
});



/*##################################################################################################*/

$(document).on("pageinit","#ResourcePop", function() {
	$.mobile.toolbar.prototype.options.addBackBtn = true;

	var str = "";
	for (var i = 0; i < globalDomainArray.length; i++) {

		str += "<li data-mini='true'><a href='#' id="+globalDomainArray[i]+">"+globalDomainArray[i]+"</a></li>";

		$(document).on("click", "#"+globalDomainArray[i], function () {
			$("#ResourcePop").dialog("close")
			setTimeout(function(){
			$.mobile.changePage( $("#configEditorPage"), {
        		  transition: "flow",
	        	  reverse: false,
	    	      changeHash: true
		    });
			},100);
			confirmDomain($(this).attr("id"))
		});
	}

	$("#domainlist").html(str);
	$("#domainlist").listview("refresh");
	setTimeout(function(){
		$("#ResourcePop").trigger("create");
	},100);

});


$(document).on("click", "#logOut", function () {
	signout();
});


/*###################################################################################################*/

/*PM Tree*/
$(document).on("click", "#imgPDU", function () {	
	$("#imgPDU").addClass('animated tada');
    setTimeout(function(){
		$("#imgPDU").removeClass('animated tada');
	    $.mobile.changePage( "pages/PM/PMPDU.html", {
    		transition: "flow",
      		reverse: true,
      		changeHash: true
    	});
	},1500);
});
$(document).on("click", "#imgDevices", function () {
	$("#imgDevices").addClass('animated tada');
	setTimeout(function(){
		$("#imgDevices").removeClass('animated tada');
	    $.mobile.changePage( "pages/PM/PMPDU.html", {
    		transition: "flow",
		    reverse: true,
      		changeHash: true
    	});
	},1500);
});
$(document).on("click", "#imgLogs", function () {
	$("#imgLogs").addClass('animated tada');
	setTimeout(function(){
		$("#imgLogs").removeClass('animated tada');
	    $.mobile.changePage( "pages/PM/PMPDU.html", {
    		transition: "flow",
      		reverse: true,
      		changeHash: true
    	});
	},1500);
});


/*Admin Tree*/
$(document).on("click", "#imgUsers", function () {
	$("#imgUsers").addClass('animated tada');
	setTimeout(function(){
		$("#imgUsers").removeClass('animated tada');
	    $.mobile.changePage( "pages/Admin/AdminUser.html", {
    	  transition: "flow",
	      reverse: true,
    	  changeHash: true
	    });
	},1500);
});
$(document).on("click", "#imgGroups", function () {
	$("#imgGroups").addClass('animated tada');
	setTimeout(function(){
	$("#imgGroups").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgDomain", function () {
	$("#imgDomain").addClass('animated tada');
	setTimeout(function(){
	$("#imgDomain").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgAccRight", function () {
	$("#imgAccRight").addClass('animated tada');
	setTimeout(function(){
    $("#imgAccRight").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgServeInfo", function () {
	$("#imgServeInfo").addClass('animated tada');
	setTimeout(function(){
	$("#imgServeInfo").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgAccess", function () {
	$("#imgAccess").addClass('animated tada');
	setTimeout(function(){
	$("#imgAccess").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgEmailNotif", function () {
	$("#imgEmailNotif").addClass('animated tada');
	setTimeout(function(){
	$("#imgEmailNotif").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgAdminLogs", function () {
	$("#imgAdminLogs").addClass('animated tada');
	setTimeout(function(){
	$("#imgAdminLogs").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgVlan", function () {
	$("#imgVlan").addClass('animated tada');
	setTimeout(function(){
	$("#imgVlan").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgPower", function () {
	$("#imgPower").addClass('animated tada');
	setTimeout(function(){
	$("#imgPower").removeClass('animated tada');
    $.mobile.changePage( "pages/Admin/AdminUser.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});


/*RM Tree*/
$(document).on("click", "#imgRMReserved", function () {
	$("#imgRMReserved").addClass('animated tada');
    setTimeout(function(){
	$("#imgRMReserved").removeClass('animated tada');
    $.mobile.changePage( "pages/RM/RMReservationReserved.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgRMConnectivity", function () {
	$("#imgRMConnectivity").addClass('animated tada');
	setTimeout(function(){
	$("#imgRMConnectivity").removeClass('animated tada');
    $.mobile.changePage( "pages/RM/RMReservationConnectivity.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgRMPort", function () {
	$("#imgRMPort").addClass('animated tada');
	setTimeout(function(){
	$("#imgRMPort").removeClass('animated tada');
    $.mobile.changePage( "pages/RM/RMReservationPort.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgRMDevices", function () {
	$("#imgRMDevices").addClass('animated tada');
	setTimeout(function(){
	$("#imgRMDevices").removeClass('animated tada');
    $.mobile.changePage( "pages/RM/RMReservationDevices.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgRMHistory", function () {
	$("#imgRMHistory").addClass('animated tada');
	setTimeout(function(){
    $("#imgRMHistory").removeClass('animated tada');
    $.mobile.changePage( "pages/RM/RMReservationHistory.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgRMEvent", function () {
	$("#imgRMEvent").addClass('animated tada');
    setTimeout(function(){
	$("#imgRMEvent").removeClass('animated tada');
    $.mobile.changePage( "pages/RM/RMEventScheduler.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgRMSchedHist", function () {
    $.mobile.changePage( "pages/RM/RMHistoryScheduler.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
});

$(document).on("click", "#imgRMManage", function () {
	$("#imgRMManage").addClass('animated tada');
	setTimeout(function(){
	$("#imgRMManage").removeClass('animated tada');
    $.mobile.changePage( "pages/RM/RMManageDevice.html", {
      transition: "flow",
      reverse: true,
      changeHash: true
    });
	},1500);
});


/*Stats Tree*/
$(document).on("click", "#imgStatReservation", function () {
	$("#imgStatReservation").addClass('animated tada');
	setTimeout(function(){
	$("#imgStatReservation").removeClass('animated tada');
    $.mobile.changePage( "pages/Stats/StatisticsReservation.html", {
      transition: "flow",
      reverse: false,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgStatDomain", function () {
	$("#imgStatDomain").addClass('animated tada');
	setTimeout(function(){
	$("#imgStatDomain").removeClass('animated tada');
    $.mobile.changePage( "pages/Stats/StatisticsDomains.html", {
      transition: "flow",
      reverse: false,
      changeHash: true
    });
	},1500);
});
$(document).on("click", "#imgStatUser", function () {
	$("#imgStatUser").addClass('animated tada');
	setTimeout(function(){
	$("#imgStatUser").removeClass('animated tada');
    $.mobile.changePage( "pages/Stats/StatisticsDomains.html", {
      transition: "flow",
      reverse: false,
      changeHash: true
    });
	},1500);
});
function yesNoPopupFunc() {
	$("#YesNoPopUp").trigger("create");
	$.mobile.changePage( "#YesNoPopUp", {
      transition: "flow",
      reverse: false,
      changeHash: true
    });	
}
function okPopupFunc() {
	$("#OkPopUp").trigger("create");
	$.mobile.changePage( "#OkPopUp", {
      transition: "flow",
      reverse: false,
      changeHash: true
    });	
}
$(document).on("click", "#okButton", function () {
	setTimeout(function(){
    $.mobile.changePage( "#configEditorPage", {
      transition: "flow",
    });
	},1500);
});
$(document).on("click", "#yesButton", function () {
	setTimeout(function(){
    $.mobile.changePage( "#configEditorPage", {
      transition: "flow",
    });
	},1500);
});
$(document).on("click", "#noButton", function () {
	setTimeout(function(){
	    $.mobile.changePage( "#configEditorPage", {
    	  transition: "flow",
    	});
		cancelReservation();
	},1500);
});
$(document).on("click", "#viewOptionsButton", function () {
    setTimeout(function(){
	if(viewconfigname == true){
		$("#checkConfigname").attr('checked',true)
	}
    if(viewhostname == true){
        $("#checkhostname").attr('checked',true)
    }
    if(viewmanagementip == true){
        $("#checkmanagementip").attr('checked',true)
    }
    if(viewconsoleip == true){
        $("#checkconsoleip").attr('checked',true)
    }
    if(viewloopbackadd == true){
        $("#checkloopbackadd").attr('checked',true)
    }
    if(viewosversion == true){
        $("#checkosversion").attr('checked',true)
    }
    if(viewsoftwarepack == true){
        $("#checksoftwarepack").attr('checked',true)
    }
    if(viewinterfaceip == true){
        $("#checkinterfaceip").attr('checked',true)
    }
    if(viewinterfacename == true){
        $("#checkinterfacename").attr('checked',true)
    }
    $.mobile.changePage( "#CustomViewPopUp", {
      transition: "flow",
    });
    },1500);
});
/*$(document).on("click", "#viewTools", function () {
    setTimeout(function(){
    $.mobile.changePage( "#CustomViewPopUp", {
      transition: "flow",
    });
    },1500);
});*/
$(document).on("click", "#deviceList", function () {
	$("#rightDeviceSubList").show();
	$("#deviceToolsSubList").hide();
	$("#deviceSubList").show();
});
$(document).on("click", "#deviceToolsList", function () {
	$("#rightDeviceSubList").show();
    $("#deviceSubList").hide();	
    $("#deviceToolsSubList").show();
});
$(document).on("click", "#delDevDevMenu", function () {
	dragtoTrash(glblDevMenImg,gblDevMenX,gblDevMenY,"true");
	$("#deviceMenuPanel").popup("close");
});
$(document).on("click", "#linkList", function () {
    $("#rightLinkSubList").show();
    $("#linkSubList").show();
});
$(document).on("click", "#delLinkDevMenu", function () {
	deleteLink(gblLinkSource,gblLinkDestination);
	$("#linkMenuPanel").popup("close");
});

/* device mepping */
$(document).on("click", "#deviceMapDevMenu", function () {
	$("#deviceMenuPanel").popup("close");
	setTimeout(function(){
	    $.mobile.changePage($('#ConfigManagePop'),{
    	    transition: "pop"
        });
		dragtoTrashDeviceOnly(glblDevMenImg,gblDevMenX,gblDevMenY,"true");
		globalManageDeviceShow = "tooltipDevice";
		deviceListPopupTable('tooltipDevice'); 
   	},1500);
});
/*Device Configuration*/
$(document).on('pagebeforeshow', '#deviceConfig', function (e, ui) {
	$('#deviceConfig div[role="dialog"]').css({"max-width":"900px"});
});
$(document).on("click", "#devConfDevMenu", function () {
	loadDeviceConfig(glblDevMenImg);
	$.mobile.changePage( "#deviceConfig", {
    	transition: "pop",
		changeHash: false
    });
});
$(document).on("click", "#okDeviceConf", function () {
	var chk = $("#exclusivityChk").is(":checked");
	loadDeviceConfigOk(glblDevMenImg,chk);
	$("#deviceConfig").dialog("close");
});
$(document).on("click", "#cancelDeviceConf", function () {
	$("#deviceConfig").dialog("close");
});
/*Device Menu Auto Discover*/
$(document).on("click", "#autoDDevMenu", function () {
	$.mobile.changePage( "#autoDisDevConfig", {
        transition: "pop",
        changeHash: false
    });
});
$(document).on("click", "#okAutoDDeviceConf", function () {
    $("#autoDisDevConfig").dialog("close");
});
$(document).on("click", "#cancelAutoDDeviceConf", function () {
    $("#autoDisDevConfig").dialog("close");
});


/*New Device*/
$(document).on("click", "#deviceSubNew", function () {
	newDevice();
    $.mobile.changePage( "#newDeviceDialog", {
        transition: "pop",
        changeHash: false
    });
});
/*New TestTool*/
$(document).on("click", "#testToolSubNew", function () {
    $.mobile.changePage( "#newTestToolDialog", {
        transition: "pop",
        changeHash: false
    });
});
/*New Server*/
$(document).on("click", "#serverSubNew", function () {
    $.mobile.changePage( "#newServerDialog", {
        transition: "pop",
        changeHash: false
    });
});

$(document).on('click', '#toolsOptions', function() {
	$("#toolsOptions").addClass('animated pulse');
	setTimeout(function(){
    	$("#toolsOptions").removeClass('animated pulse');
        $("#barsPalette").hide();
        $("#viewTools").show();
	},1500);
});
/* Enable Disable popup start*/
$(document).on("click", "#enableDisableDebug", function () {
	$("#enableDisableDebug").addClass('animated pulse');
	setTimeout(function(){
		enableDisablePopupFunc();
	},1500);
});
function enableDisablePopupFunc() {
    $("#debugPopup").trigger("create");
	$("#debugheader").html("<center><h2>Debug</h2></center>");
    $.mobile.changePage( "#debugPopup", {
      transition: "flow",
      reverse: false,
      changeHash: true
    });
}
$(document).on("click", "#enableDisablefilter", function () {
    $("#enableDisablefilter").addClass('animated pulse');
    setTimeout(function(){
        enableDisablePopupFilter();
    },1500);
});
function enableDisablePopupFilter() {
    $("#debugPopup").trigger("create");
    $("#debugheader").html("<center><h2>Filter</h2></center>");
    $.mobile.changePage( "#debugPopup", {
      transition: "flow",
      reverse: false,
      changeHash: true
    });
}
$(document).on("click", "#enableDisabletimepicker", function () {
    $("#enableDisabletimepicker").addClass('animated pulse');
    setTimeout(function(){
        enableDisablePopupTimePicFunc();
    },1500);
});
function enableDisablePopupTimePicFunc() {
    $("#debugPopup").trigger("create");
    $("#debugheader").html("<center><h2>Time Picker</h2></center>");
    $.mobile.changePage( "#debugPopup", {
      transition: "flow",
      reverse: false,
      changeHash: true
    });
}
/* Enable Disable popup end */
