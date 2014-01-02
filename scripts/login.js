/*This script file contains functions that are used in the login page.
 * Each function should have their own headers for reference to the next
 * developer.*/

/*Event binding for login page init, login button, register button*/
$( document ).on( "pageinit", "#Login", function( event ) {
	$( "#loginLoader" ).dialog({ create: function( event, ui ) {} });
	$("#configFooter").hide();
});
$(document).on('click', '#LoginButton', function() {
	loading('show');
    $("#LoginButton").addClass('animated wobble');
    setTimeout(function(){
       	$("#LoginButton").removeClass('animated wobble');
    },1500);
    login();
});
$(document).on('click', '#RegisterButton', function() {
	$("#RegisterButton").addClass('animated wobble');
    setTimeout(function(){
    	$("#RegisterButton").removeClass('animated wobble');
    },1500);
    createAccount();
});
/*
 *
 *  FUNCTION NAME : loadLogin
 *  AUTHOR        : Mark Anthony Elbambo
 *  DATE          : December 10, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : loads the content of login page
 *  PARAMETERS    : 
 *
 */
function loadLogin(){
	$.ajax({
        url: "pages/login.html",
        dataType: 'html',
        success: function(data) {
			$("#Login").append(data);
			$("#Login").trigger('create');
		}
	});
}


/*
 *
 *	FUNCTION NAME : submitenter
 *	AUTHOR		  : 
 *	DATE		  :	
 *	MODIFIED BY	  :	Maricel Louise Sumulong
 *	REVISION DATE : August 30, 2012
 *	REVISION #	  : 1
 *	DESCRIPTION	  :	checks if the key pressed is enter
 *	PARAMETERS	  : key event
 *
*/
function submitenter(e) {

	var keycode;
    
	if(window.event) {
	    keycode = window.event.keyCode;
    } else if(e) {
	    keycode = e.which;
      } else {
	      return true;
	    }

    if (keycode == 13 && $('#logAlert').is(':visible') == false) {
	    login();
        return false;
    } else {
	    return true;
      }
}

function ValidateIPaddress(ipaddress){  
	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)){
		return "true";
	} else{
	  	alert("You have entered an invalid IP address!");
    	return "false";
	}
} 

/*
 *
 *	FUNCTION NAME : login
 *	AUTHOR		  : 
 *	DATE		  :	
 *	MODIFIED BY	  :	Angeline Bringas
 *	REVISION DATE : December 6,2013
 *	REVISION #	  : 
 *	DESCRIPTION	  :	login user
 *	PARAMETERS	  : 
 *
*/
function login() {
	//$("#loginLoader").dialog("open");
//	var load="<center><div style='font-size: 10px;background-color: white'><b>Logging-In...</b><br/><img src='../styles/images/preloader.gif' height='30px' width='30px'></div></center>";
//	$("#loginLoader").empty().append(load);
		
	var usrName = document.getElementById('UserName').value;
	var passWord = document.getElementById('Password').value;
		
//	var newpass = CheckExpirepassword(usrName);
//	var newpass = 1;
	var IPTxt = $("#ipAddTxt").val();
    if(IPTxt == ""){
        alert("Ip Address are required.");
		loading('hide');
		return;
    }else{
		var vald = ValidateIPaddress(IPTxt);
		if(vald =="true"){
			CURRENT_IP = IPTxt;
		}
    }	
	globalUserName = usrName;
	var pass = $.md5(passWord);
	var urls = "http://"+CURRENT_IP+"/cgi-bin/Final/AutoCompleteAdmin/FQueryCgiAdminPy.py?action=Authenticate&query=User="+usrName+"^Pass="+pass;
	$.ajax({
		url: urls,
		timeout: 120000,
		dataType: 'html',
		success: function(data) {
			//data = "Ok";
			data = $.trim(data);
			if(data == 'Ok'){				
				globalLoginFlag =1;
				$.mobile.changePage( $("#configEditorPage"), {
		        	transition: "flow",
          			reverse: false,
          			changeHash: true
    			});
				globalUserName = usrName;
				userInformation2();
				setTimeout(function(){
					$("#configFooter").show();
					loadGridMenuContent();
				},100);
				loading('hide');
	//			window.location.href="https://"+CURRENT_IP+"/Mobile/index.html";
			}else{
				alert("Username and Password invalid.");
				loading('hide');
				globalLoginFlag = 0;
			}
		}
	});
}

/*
 *
 *	FUNCTION NAME : signout
 *	AUTHOR		  : Mark Anthony Elbambo
 *	DATE		  :	12-10-13
 *	MODIFIED BY	  :	
 *	REVISION DATE : 
 *	DESCRIPTION	  : deletes the global variables and redirect to login page
 *	PARAMETERS	  : none
 *
*/
function signout(){
	globalLoginFlag = 0;
	globalUserName="";
	$.mobile.changePage( $("#Login"), {
    	transition: "flow",
        reverse: true,
        changeHash: true
    });
	$("#configFooter").hide();
	clearCanvas();
}

/*
 *
 *	FUNCTION NAME : txtfocus
 *	AUTHOR		  : 
 *	DATE		  :	
 *	MODIFIED BY	  :	
 *	REVISION DATE : 
 *	DESCRIPTION	  : focuses on the username input box
 *	PARAMETERS	  : none
 *
*/

function txtfocus() {
	document.getElementById('Username').focus();
}

/*
 *
 *	FUNCTION NAME :	createAccount
 *	AUTHOR		  :	Angeline Bringas
 *	DATE		  : December 9,2013
 *	MODIFIED BY	  : 
 *	REVISION DATE : 
 *	REVISION #	  : 
 *	DESCRIPTION	  :	
 *	PARAMETERS	  : none
 *
*/

function createAccount() {

	/*$("#loginLoader").dialog("open");
	var load="<center><div style='font-size: 10px;background-color: white'><b>Gathering Information...</b><br/><img src='../styles/images/preloader.gif' height='30px' width='30px'></div></center>";
	$("#loginLoader").empty().append(load);*/

	$('#RegisterBtn').empty().load('pages/Register.html',function() {
		$("#loginLoader").dialog("close");
		$('#RegisterBtn').dialog('open');
		$('.ui-dialog :button').blur();
	//	$('#addtxtUserName').focus();
	});

}

