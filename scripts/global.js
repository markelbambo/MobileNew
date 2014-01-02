/****Script for global variable******/
var CURRENT_IP;
var cgiurl = "/cgi-bin/Final/AutoCompleteCgiQuerry_withDb/querYCgi.fcgi";
var rmurl = "/cgi-bin/Final/RM/RM.py";
var globalFlag = false;
var globalFlagCommitted = false;
var imgArray = [];
var idsArray = [];
var checkLCArray = []; // holds all connected devices for checking
var pairedDevice='';
var linkcounter = 0;
var imgYPos=211;
var imgXPos=515;
var clearGrid = false;
var globalManageDeviceShow = "";
/****varibale for main config *****/
var ResourceId="";
var DomainName="";
var Connectivity="";
var testToolObj = [];
var DeviceSanity="";
var AccessSanity="";
var ZoneName="";
var DebugMode="false";
var RedFlag="";
var FileType="";
var LinkSanityEnable="";
var PortMappingEnable="";
var CommitEnable="";
var Iteration="";
var Interval="";
var MainId="";
var MainConfigurationUserId="";
var Name="";
var userInformation = [];
var globalUserName,globalUserId;
var MainFlag="";
var DateTime="";
var IterList="";
var IterNumber="";
var Offset="";
var DST="1";
var ResourceOrig="";
var ReservationType="Now";
var DevListFlag="";
var DevListCtr="";
var DndCtr="";
var TopologyName="";
var FileType="";
var UserName="";
var portmapArr = [];
var portmapNameArr = [];
var stage;
var layer;
var tooltipLayer;
/****varibale for device *****/
var sourcePath = "";
var dstPath = "";
var devicesArr = [];
var deviceArr = [];
var rackArr = [];
var slotArr = [];
var moduleArr = [];
var picArr = [];
var portArr = [];
var portArr2 = [];
var deviceCtr = 1;
var lineConnected = []; // hold all paired/connected devices
var lineNameArr=[];
var lineSpeed="";
var lineName="";
var lineType="";
var ResourceDomain="Guaranteed";
var ZoneDomain="";
var gblCanvasWidth="", gblCanvasHeight;
var portflag = false;
var portflag2 = false;
var portspeedflag = false;
var portspeedflag2 = false;
var connectedSwitch = false;
var sourceSwitch = "";
var destSwitch = "";
var trashW,trashH;
var glblDevMenImg,gblDevMenY,gblDevMenX;
var gblLinkSource,gblLinkDestination;
/****data before commit****/
var devicesArrBC = [];
var deviceArrBC = [];
var rackArrBC = [];
var slotArrBC = [];
var moduleArrBC = [];
var picArrBC = [];
var portArrBC = [];
var lineConnected2 = []; // hold all paired/connected devices
//after commit
var devicesArrAC = [];
/***Resource Management***/
var devdev1;
var statsstats;
var eventid1;
var statsstats;
var eventid;
var SanityId;
var SanityName;
var SanityDevId;
var globalHostName;
var globalDeviceId;
var configname;
var split = "";
split = new Date().toString().split(" ");
var x = split[5].toString();
var timezone = "";
timezone = x.substring(3);
var globalResourceId = [];
var globalPageRM;
var genIds = [];
var scheventid = [];
var deviceHistoryId = [];
/*View Options*/
var viewconfigname = true;
var viewhostname = true;
var viewmanagementip = true;
var viewconsoleip = true;
var viewloopbackadd = true;
var viewosversion;
var viewsoftwarepack;
var viewinterfaceip = true;
var viewinterfacename = true;
/***** ACTION *******/
var globalLAdate; 
var globalLArId;
var globalLAFlag = false;
var devicesFilter = [];
/*** FILTER ***/
var systemsname2='any';
var productId2='any';
var vId2='any';
var ostype2= 'any';
var osversion2 = 'any';
var swpackage2 = 'any';

var speed2 = '';
var portname = '';
var mediatype2 = '';
var bandwidth2 = '';

var HostName;

