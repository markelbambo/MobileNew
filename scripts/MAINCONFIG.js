/****Script for MAINCONFIG****/

/*
 *
 *  FUNCTION NAME : getXmlData 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data of topology
 *  PARAMETERS    : 
 *
 */
function getXmlData(){
	var XmlString = "<MAINCONFIG ResourceId='"+ResourceId+"' MainId='"+MainId+"' MainConfigurationUserId='"+MainConfigurationUserId+"' Name='"+Name+"'";
	XmlString += " UserName='"+UserName+"' Flag='"+MainFlag+"' TftpIpAddress='' TftpImagePath='' TftpImageName='' DateTIME='"+DateTime+"'"; 
	XmlString += " Interval='"+Interval+"' Iteration='"+Iteration+"' IterList='"+IterList+"' IterNumber='"+IterNumber+"' Offset='"+Offset+"'";
	XmlString += " DST='"+DST+"' ResourceOrig='"+ResourceOrig+"' ReservationType='"+ReservationType+"' DevListFlag='"+DevListFlag+"'";
	XmlString += " DevListCtr='"+DevListCtr+"' DndCtr='"+DndCtr+"' TopologyName='"+TopologyName+"' CommitEnable='"+CommitEnable+"'";
	XmlString += " DeviceConfigurationEnable='' TGENConfigurationEnable='' ImageConfigurationEnable='' PortMappingEnable=''";
	XmlString += " LinkSanityEnable='' URLConfigFlag='' FileType='"+FileType+"' URLImageFlag='' SetNewValues='' RedFlag='' DomainName='"+DomainName+"'";
	XmlString += " Connectivity='"+Connectivity+"' DeviceSanity='"+DeviceSanity+"' AccessSanity='"+AccessSanity+"' ZoneName='"+ZoneName+"'";
	XmlString += " DebugMode='"+DebugMode+"'>";
	XmlString += getDeviceInformation();
	XmlString += "</MAINCONFIG>";
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getDeviceInformation 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data of devices in canvas
 *  PARAMETERS    : XmlString 
 *
 */
function getDeviceInformation(){
	var XmlString = "";
	if(devicesArr.length){
		for(var t=0; t<devicesArr.length; t++){
			var device = devicesArr[t];	
			XmlString += "<DEVICES DeviceName='"+device.DeviceName+"' DeviceType='"+device.DeviceType+"' ObjectPath='"+device.ObjectPath+"'";
			XmlString += " Model='"+device.Model+"' DNDModelType='"+device.DNDModelType+"' SoftwareVersion='"+device.SoftwareVersion+"'";
			XmlString += " OSVersion='"+device.OSVersion+"' OSType='"+device.OSType+"' SoftwarePackage='"+device.SoftwarePackage+"'";
			XmlString += " ReEvaluate='"+device.ReEvaluate+"' IpAddress='"+device.IpAddress+"' DeviceId='"+device.DeviceId+"'";
			XmlString += " HostName='"+device.HostName+"' UpdateFlag='"+device.UpdateFlag+"' MediaType='"+device.MediaType+"'";
			XmlString += " Portname='"+device.Portname+"' ManagementIp='"+device.ManagementIp+"' ManagementIp2='"+device.ManagementIp2+"'";
			XmlString += " Auxiliary='"+device.Auxiliary+"' DiscoveryFlag='"+device.DiscoveryFlag+"' Exclusivity='"+device.Exclusivity+"'";
			XmlString += " XLocation='"+device.XLocation+"' YLocation='"+device.YLocation+"' PowerStatus='"+device.PowerStatus+"'";
			XmlString += " Power='"+device.Power+"' TftpIpAddress='"+device.TftpIpAddress+"' TftpHostname='"+device.TftpHostname+"'";
			XmlString += " TftpImagePath='"+device.TftpImagePath+"' TftpImageName='"+device.TftpImageName+"' TftpUser='"+device.TftpUser+"'";
			XmlString += " TftpPassword='"+device.TftpPassword+"' TftpAddress='"+device.TftpAddress+"' TacacsIpAddress='"+device.TacacsIpAddress+"'";
			XmlString += " TacacsHostname='"+device.TacacsHostname+"' RadiusHostname='"+device.RadiusHostname+"'";
			XmlString += " RadiusIpAddress='"+device.RadiusIpAddress+"' RadiusUsername='"+device.RadiusUsername+"'";
			XmlString += " RadiusPassword='"+device.RadiusPassword+"' Description='"+device.Description+"' Processor='"+device.Processor+"'";
			XmlString += " ProcessorBoardId='"+device.ProcessorBoardId+"' Manufacturer='"+device.Manufacturer+"' SerialNumber='"+device.SerialNumber+"'";
			XmlString += " IOS='"+device.IOS+"' CPUSpeed='"+device.CPUSpeed+"' SystemMemory='"+device.SystemMemory+"' NVRAMCF='"+device.NVRAMCF+"'";
			XmlString += " ProcessorMemory='"+device.ProcessorMemory+"' ConnectivityDone='"+device.ConnectivityDone+"'";
			XmlString += " ReachabilityDone='"+device.ReachabilityDone+"' ConvergenceDone='"+device.ConvergenceDone+"'";
			XmlString += " TFTPUser='"+device.TFTPUser+"' TFTPPassword='"+device.TFTPPassword+"' FTPServer='"+device.FTPServer+"'";
			XmlString += " TFTPServer='"+device.TFTPServer+"' FTPUser='"+device.FTPUser+"' FTPPassword='"+device.FTPPassword+"'";
			XmlString += " ConfigDetail='"+device.ConfigDetail+"' ConfigFilePath='"+device.ConfigFilePath+"' ConfigFileName='"+device.ConfigFileName+"'";
			XmlString += " ConfigUrl='"+device.ConfigUrl+"' SaveConfigUrl='"+device.SaveConfigUrl+"' ConfigServer='"+device.ConfigServer+"'";
			XmlString += " ConfigDestination='"+device.ConfigDestination+"' ImageFilePath='"+device.ImageFilePath+"'";
			XmlString += " ImageDetail='"+device.ImageDetail+"' ImageFileName='"+device.ImageFileName+"' ImageUrl='"+device.ImageUrl+"'";
			XmlString += " SaveImageUrl='"+device.SaveImageUrl+"' ImageServer='"+device.ImageServer+"' ImageDestination='"+device.ImageDestination+"'";
			XmlString += " SaveImageEnable='"+device.SaveImageEnable+"' SaveConfigEnable='"+device.SaveConfigEnable+"'";
			XmlString += " LoadConfigEnable='"+device.LoadConfigEnable+"' LoadImageEnable='"+device.LoadImageEnable+"'";
			XmlString += " SaveImageDetail='"+device.SaveImageDetail+"' SaveImageServer='"+device.SaveImageServer+"'";
			XmlString += " SaveImageDestination='"+device.SaveImageDestination+"' SaveImageUser='"+device.SaveImageUser+"'";
			XmlString += " SaveImagePassword='"+device.SaveImagePassword+"' SaveImageType='"+device.SaveImageType+"'";
			XmlString += " SaveConfigDetail='"+device.SaveConfigDetail+"' SaveConfigServer='"+device.SaveConfigServer+"'";
			XmlString += " SaveConfigDestination='"+device.SaveConfigDestination+"' SaveConfigUser='"+device.SaveConfigUser+"'";
			XmlString += " SaveConfigPassword='"+device.SaveConfigPassword+"' SaveConfigType='"+device.SaveConfigType+"'";
			XmlString += " SaveConfigFileName='"+device.SaveConfigFileName+"' SaveImageFileName='"+device.SaveImageFileName+"'";
			XmlString += " SystemImageName='"+device.SystemImageName+"' SystemConfigName='"+device.SystemConfigName+"'";
			XmlString += " SaveTypeImage='"+device.SaveTypeImage+"' TypeImage='"+device.TypeImage+"' SaveTypeConfig='"+device.SaveTypeConfig+"'";
			XmlString += " TypeConfig='"+device.TypeConfig+"' ChassisPid='"+device.ChassisPid+"' ChassisVid='"+device.ChassisVid+"'";
			XmlString += " ManagementInterface='"+device.ManagementInterface+"' ManagementInterface2='"+device.ManagementInterface2+"'";
			XmlString += getFilterAttribute(device);
			XmlString += getTitanInformation(device);
			XmlString += ">";
			XmlString += getDeviceInformation2(device);
			XmlString += getDeviceChild(device,device);
			XmlString +="</DEVICES>";
		}
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getFilterAttribute 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for filter
 *  PARAMETERS    : device,XmlString 
 *
 */
function getFilterAttribute(device){
	var XmlString = "";
	XmlString += " RouteProcessorName='"+device.RouteProcessorName+"' TotalMemory='"+device.TotalMemory+"'";
	XmlString += " TotalMemory2='"+device.TotalMemory2+"' RouteProcessorName2='"+device.RouteProcessorName2+"'";
	XmlString += " RouteRedundant='"+device.RouteRedundant+"' RouteProcessorDescription='"+device.RouteProcessorDescription+"'";
	XmlString += " RouteProcessorProductId='"+device.RouteProcessorProductId+"' RouteProcessorProductId2='"+device.RouteProcessorProductId2+"'";
	XmlString += " RouteProcessorVersionId='"+device.RouteProcessorVersionId+"' RouteProcessorVersionId2='"+device.RouteProcessorVersionId2+"'";
	XmlString += " EmbeddedRedundant='"+device.EmbeddedRedundant+"' EmbeddedProcessorName='"+device.EmbeddedProcessorName+"'";
	XmlString += " EmbeddedProcessorName2='"+device.EmbeddedProcessorName2+"'";
	XmlString += " EmbeddedProcessorDescription='"+device.EmbeddedProcessorDescription+"'";
	XmlString += " EmbeddedProcessorProductId='"+device.EmbeddedProcessorProductId+"'";
	XmlString += " EmbeddedProcessorVersionId='"+device.EmbeddedProcessorVersionId+"'";
	XmlString += " EmbeddedProcessorVersionId2='"+device.EmbeddedProcessorVersionId2+"'";
	XmlString += " EmbeddedProcessorNitrox='"+device.EmbeddedProcessorNitrox+"' EmbeddedProcessorOcteon='"+device.EmbeddedProcessorOcteon+"'";
	XmlString += " EmbeddedProcessorNitrox2='"+device.EmbeddedProcessorNitrox2+"'";
	XmlString += " EmbeddedProcessorOcteon2='"+device.EmbeddedProcessorOcteon2+"' LineCardName='"+device.LineCardName+"'";
	XmlString += " LineCardDescription='"+device.LineCardDescription+"' LineCardProductId='"+device.LineCardProductId+"'";
	XmlString += " LineCardVersionId='"+device.LineCardVersionId+"' LineCardNumber='"+device.LineCardNumber+"'";
	XmlString += " ModuleDescription='"+device.ModuleDescription+"' ModuleProductId='"+device.ModuleProductId+"'";
	XmlString += " ModuleName='"+device.ModuleName+"' ModuleVersionId='"+device.ModuleVersionId+"'";
	XmlString += " ProductFamily='"+device.ProductFamily+"' ServerType='"+device.ServerType+"'";
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getTitanInformation 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for titan
 *  PARAMETERS    : device,XmlString 
 *
 */
function getTitanInformation(device){
	var XmlString = "";
	XmlString += " ManagementIpMask='"+device.ManagementIpMask+"' ManagementIpMask2='"+device.ManagementIpMask2+"'";
	XmlString += " ManagementIpv6='"+device.ManagementIpv6+"' ManagementIpv62='"+device.ManagementIpv62+"'";
	XmlString += " ManagementIpv6Prefix='"+device.ManagementIpv6Prefix+"' ManagementIpv6Prefix2='"+device.ManagementIpv6Prefix2+"'";
	XmlString += " ProcessorType='"+device.ProcessorType+"' CPUCores='"+device.CPUCores+"' ProcessorSockets='"+device.ProcessorSockets+"'";
	XmlString += " CoresPerSocket='"+device.CoresPerSocket+"' LogicalProcessor='"+device.LogicalProcessor+"' ConsoleIp='"+device.ConsoleIp+"'";
	XmlString += " TitanName='"+device.TitanName+"' ProcessorFamily='"+device.ProcessorFamily+"' ProcessorPId='"+device.ProcessorPId+"'";
	XmlString += " ConsoleNet='"+device.ConsoleNet+"' Ipv6='"+device.Ipv6+"' Key='"+device.Key+"' Admin='"+device.Admin+"' Access='"+device.Access+"'";
	XmlString += " Account='"+device.Account+"' AccountPort='"+device.AccountPort+"'";
	XmlString += " AuthenticationDirectory='"+device.AuthenticationDirectory+"' AuthenticationPort='"+device.AuthenticationPort+"'";
	XmlString += " BEHostlist='"+device.BEHostlist+"' ConfigMethod='"+device.ConfigMethod+"'";
	XmlString += " ConfigFile='"+device.ConfigFile+"' ConfigPath='"+device.ConfigPath+"' ConfigName='"+device.ConfigName+"'";
	XmlString += " ClearType='"+device.ClearType+"' COAPort='"+device.COAPort+"' Community='"+device.Community+"'";
	XmlString += " Connectivity='"+device.Connectivity+"' DatabaseName='"+device.DatabaseName+"'";
	XmlString += " DatabaseTableName='"+device.DatabaseTableName+"' DatabaseType='"+device.DatabaseType+"'";
	XmlString += " DefaultSM='"+device.DefaultSM+"' DeviceList='"+device.DeviceList+"' ExtensionIp='"+device.ExtensionIp+"'";
	XmlString += " EnablePassword='"+device.EnablePassword+"' Features='"+device.Features+"' Function='"+device.Function+"'";
	XmlString += " LogDirectory='"+device.LogDirectory+"' NRCMD='"+device.NRCMD+"' NRCMDUsername='"+device.NRCMDUsername+"'";
	XmlString += " Port='"+device.Port+"' RedirectPort='"+device.RedirectPort+"' RedirectLogPort='"+device.RedirectLogPort+"'";
	XmlString += " RootDirectory='"+device.RootDirectory+"' ServerDirectory='"+device.ServerDirectory+"' VendorType='"+device.VendorType+"'";
	XmlString += " Snapshot='"+device.Snapshot+"' DomainName='"+device.DomainName+"' Application='"+device.Application+"'";
	XmlString += " Sequence='"+device.Sequence+"' RP0ConsoleIp='"+device.RP0ConsoleIp+"' RP1ConsoleIp='"+device.RP1ConsoleIp+"'";
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getDeviceInformation2 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for device node
 *  PARAMETERS    : device,XmlString 
 *
 */
function getDeviceInformation2(device){
	var XmlString = "";
	if(deviceArr.length){
		for(var t=0; t<deviceArr.length; t++){
			var devObject = deviceArr[t];
			if(devObject.ObjectPath == device.ObjectPath){
				XmlString += "<DEVICE ChassisAddress='' LoopBackAddress='' ObjectPath='"+devObject.ObjectPath+"' Username='"+devObject.Username+"'";
				XmlString += " ESXIUsername='"+devObject.ESXIUsername+"' Password='"+devObject.Password+"' ESXIPassword='"+devObject.ESXIPassword+"'";
				XmlString += " Status='"+devObject.Status+"' DeviceName='"+devObject.DeviceName+"' DevName='"+devObject.DevName+"'";
				XmlString += " DeviceId='"+devObject.DeviceId+"' RedFlag='"+devObject.RedFlag+"' ModelType='"+devObject.ModelType+"'";
				XmlString += " DNDModelType='"+devObject.DNDModelType+"' DeviceResId='"+devObject.DeviceResId+"' MacAddress='"+devObject.MacAddress+"'";
				XmlString += " DeviceFlag='"+devObject.DeviceFlag+"' HostName='"+devObject.HostName+"' UpdateFlag='"+devObject.UpdateFlag+"'";
				XmlString += " MediaType='"+devObject.MediaType+"' Portname='"+devObject.Portname+"' DBResId='"+devObject.DBResId+"'";
				XmlString += " ConnectivityType='"+devObject.ConnectivityType+"' PortSpeed='"+devObject.PortSpeed+"'";
				XmlString += " PortBandWidth='"+devObject.PortBandWidth+"' ExactHostName='"+devObject.ExactHostName+"'";
				XmlString += " LoadFlag='"+devObject.LoadFlag+"' PortView='"+devObject.PortView+"' Discovery='"+devObject.Discovery+"'";
				XmlString += " RouteProcessor='"+devObject.RouteProcessor+"' EmbeddedProcessor='"+devObject.EmbeddedProcessor+"'";
				XmlString += " LineCard='"+devObject.LineCard+"' ExactIpAdd='"+devObject.ExactIpAdd+"' PowerStatus='"+devObject.PowerStatus+"'";
				XmlString += " Application='"+devObject.Application+"' ProtoTypeFlag='"+devObject.ProtoTypeFlag+"'";
				XmlString += " SwitchPort='"+devObject.SwitchPort+"' MapName='"+devObject.MapName+"' ControllerInfo='"+devObject.ControllerInfo+"'";
				XmlString += " DeviceType='"+devObject.DeviceType+"'";
				XmlString += " />";
			}
		}
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getDeviceChild 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for device node
 *  PARAMETERS    : device,XmlString 
 *
 */
function getDeviceChild(device,device){
	var XmlString = "";
	if(rackArr.length && checkRackDevPath(device.ObjectPath,rackArr)){
		XmlString += getRackObject(device,device);
	}else if(slotArr.length && checkSlotDevPath(device.ObjectPath,slotArr)){
		XmlString += getSlotObject(device,device);
	}else if(moduleArr.length && checkModuleDevPath(device.ObjectPath,moduleArr)){
		XmlString += getModuleObject(device,device);
	}else if(picArr.length && checkPicDevPath(device.ObjectPath,picArr)){
		XmlString += getPicObject(device,device);
	}else if(portArr.length && checkPortDevPath(device.ObjectPath,portArr)){
		XmlString += getPortObject(device,device);
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getRackObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for rack node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getRackObject(dev,device){
	var XmlString = "";
	if(rackArr.length && checkRackDevPath(device.ObjectPath,rackArr)){
		for(var t=0; t<rackArr.length; t++){
			var rackobject = rackArr[t];
			if(rackobject.RackDevName == device.ObjectPath){
				XmlString += "<RACK RackDeviceId='"+rackobject.RackDeviceId+"' ProductNumber='"+rackobject.ProductNumber+"'";
				XmlString += " SwVersion='"+rackobject.SwVersion+"' RackName='"+rackobject.RackName+"' ObjectPath='"+rackobject.ObjectPath+"'";
				XmlString += " HwVersion='"+rackobject.HwVersion+"' Number='"+rackobject.Number+"' PortGroupSize='"+rackobject.PortGroupSize+"'";
				XmlString += " Ios='"+rackobject.Ios+"' ModuleDescription='"+rackobject.ModuleDescription+"' SerialNumber='"+rackobject.SerialNumber+"'";
				XmlString += " ModelType='"+rackobject.ModelType+"' BoardType='"+rackobject.BoardType+"' RackDevName='"+rackobject.RackDevName+"'";
				XmlString += " RackId='"+rackobject.RackId+"' MapName='"+rackobject.MapName+"' RedFlag='"+rackobject.RedFlag+"'";
				XmlString += " OrangeFlag='"+rackobject.OrangeFlag+"'>";
				XmlString += getSlotObject(dev,rackobject);
				XmlString += " </RACK>";
			}
		}
	}else if(slotArr.length && checkSlotDevPath(device.ObjectPath,slotArr)){
		XmlString += getSlotObject(dev,device);
	}else if(moduleArr.length && checkModuleDevPath(device.ObjectPath,moduleArr)){
		XmlString += getModuleObject(dev,device);
	}else if(picArr.length && checkPicDevPath(device.ObjectPath,picArr)){
		XmlString += getPicObject(dev,device);
	}else if(portArr.length && checkPortDevPath(device.ObjectPath,portArr)){
		XmlString += getPortObject(dev,device);
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getSlotObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for rack node
 *  PARAMETERS    : device,XmlString 
 *
 */
function getSlotObject(dev,device){
	var XmlString = "";
	if(slotArr.length && checkSlotDevPath(device.ObjectPath,slotArr)){
		for(var t=0; t<slotArr.length; t++){
			var slot = slotArr[t];
			if(slot.SlotDevName == device.ObjectPath){
				XmlString += "<SLOT SlotDeviceId='"+slot.SlotDeviceId+"' ProductNumber='"+slot.ProductNumber+"'";
				XmlString += " SlotName='"+slot.SlotName+"' ObjectPath='"+slot.ObjectPath+"' Number='"+slot.Number+"'";
				XmlString += " ModuleDescription='"+slot.ModuleDescription+"' SerialNumber='"+slot.SerialNumber+"' ModelType='"+slot.ModelType+"'";
				XmlString += " BoardType='"+slot.BoardType+"' SlotDevName='"+slot.SlotDevName+"' SlotId='"+slot.SlotId+"'";
				XmlString += " RedFlag='"+slot.RedFlag+"' >";
				XmlString += getModuleObject(dev,slot);
				XmlString += getPortObject(dev,slot);
				XmlString += " </SLOT>";
			}
		}
	}else if(picArr.length && checkPicDevPath(device.ObjectPath,picArr)){
		XmlString += getPicObject(dev,device);
	}else if(moduleArr.length && checkModuleDevPath(device.ObjectPath,moduleArr)){
		XmlString += getModuleObject(dev,device);
	}else if(portArr.length && checkPortDevPath(device.ObjectPath,portArr)){
		XmlString += getPortObject(dev,device);
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getModuleObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for module node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getModuleObject(dev,device){
	var XmlString = "";
	if(moduleArr.length && checkModuleDevPath(device.ObjectPath,moduleArr)){
		for(var t=0; t<moduleArr.length; t++){
			var module = moduleArr[t];
			if(module.ModuleDevName == device.ObjectPath){
				XmlString += "<MODULE ModuleId='"+module.ModuleId+"' ModuleResId='"+module.ModuleResId+"' ModuleSlotId='"+module.ModuleSlotId+"'";
				XmlString += " Number='"+module.Number+"' ModuleDescription='"+module.ModuleDescription+"' SerialNumber='"+module.SerialNumber+"'";
				XmlString += " ModuleName='"+module.ModuleName+"' ObjectPath='"+module.ObjectPath+"' ModuleDevName='"+module.ModuleDevName+"'";
				XmlString += " RedFlag='"+module.RedFlag+"' >";
				XmlString += getPortObject(dev,module);
				XmlString += " </MODULE>";
			}
		}
	}else if(picArr.length && checkPicDevPath(device.ObjectPath,picArr)){
		XmlString += getPicObject(dev,device);
	}else if(portArr.length && checkPortDevPath(device.ObjectPath,portArr)){
		XmlString += getPortObject(dev,device);
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getPicObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for module node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getPicObject(dev,device){
	var XmlString = "";
	if(picArr.length && checkPicDevPath(device.ObjectPath,picArr)){
		for(var t=0; t<picArr.length; t++){
			var pic = picArr[t];
			if(pic.PicDevName == device.ObjectPath){
				XmlString += "<PIC PICId='"+pic.PICId+"' PICResId='"+pic.PICResId+"' PICSlotId='"+pic.PICSlotId+"' Version='"+pic.Version+"'";
				XmlString += " PartNumber='"+pic.PartNumber+"' Number='"+pic.Number+"' Description='"+pic.Description+"'";
				XmlString += " SerialNumber='"+pic.SerialNumber+"' JedecCode='"+pic.JedecCode+"' AssemblyVersion='"+pic.AssemblyVersion+"'";
				XmlString += " AssemblyFlags='"+pic.AssemblyFlags+"' AssemblyFlags='"+pic.AssemblyFlags+"' Date='"+pic.Date+"'";
				XmlString += " EepromVersion='"+pic.EepromVersion+"' PicName='"+pic.PicName+"' ObjectPath='"+pic.ObjectPath+"'";
				XmlString += " PicDevName='"+pic.PicDevName+"' RedFlag='"+pic.RedFlag+"' OrangeFlag='"+pic.OrangeFlag+"'>";
				XmlString += getPortObject(dev,pic);
				XmlString += " </PIC>";
			}
		}
	}else if(portArr.length && checkPortDevPath(device.ObjectPath,portArr)){
		XmlString += getPortObject(dev,device);
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getPortObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for port node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getPortObject(dev,device){
	var XmlString = "";
	if(portArr.length && checkPortDevPath(device.ObjectPath,portArr)){
		for(var t=0; t<portArr.length ; t++){
			var port = portArr[t];
			if(port.PortDevName == device.ObjectPath){
				XmlString += "<PORT ObjectPath='"+port.ObjectPath+"' PortDevName='"+port.PortDevName+"' SwitchPortInfo='"+port.SwitchPortInfo+"' SwitchInfo='"+port.SwitchInfo+"'";
				XmlString += " VlanId='"+port.VlanId+"' VlanName='"+port.VlanName+"' PhysicalPortType='"+port.PhysicalPortType+"'";
				XmlString += " PortResId='"+port.PortResId+"' PortSlotId='"+port.PortSlotId+"' PortId='"+port.PortId+"'";
				XmlString += " Number='"+port.Number+"' PortName='"+port.PortName+"' UpdateFlag='"+port.UpdateFlag+"' PortFlag='"+port.PortFlag+"'";
				XmlString += " Availability='"+port.Availability+"' Type='"+port.Type+"' RedFlag='"+port.RedFlag+"' PartnerPort='"+port.PartnerPort+"'";
				XmlString += " Bandwidth='"+port.Bandwidth+"' Speed='"+port.Speed+"' EnablePort='"+port.EnablePort+"'";
				XmlString += " TunnelServicesPIC='"+port.TunnelServicesPIC+"' MultiServicesPIC='"+port.MultiServicesPIC+"' PortType='"+port.PortType+"'";
				XmlString += " PortCheck='"+port.PortCheck+"' PartnerPortDevice='"+port.PartnerPortDevice+"'";
				XmlString += " PartnerInformation='"+port.PartnerInformation+"' Description='"+port.Description+"' MediaType='"+port.MediaType+"'";
				XmlString += " AutoNegotiation='"+port.AutoNegotiation+"' Duplexity='"+port.Duplexity+"' PortConfig='"+port.PortConfig+"'";
				XmlString += " Phy='"+port.Phy+"' Spa='"+port.Spa+"' CarrierCard='"+port.CarrierCard+"'";
				XmlString += " PortCard='"+port.PortCard+"' EthMode='"+port.EthMode+"'";
				XmlString += " Speed2='"+port.Speed2+"' Sequence='"+port.Sequence+"' SaveConnectivity='"+port.SaveConnectivity+"'>";
				XmlString += getPortmapObject(port,device);
				XmlString += "</PORT>";

			}
		}
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getPortmapObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for portmap node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getPortmapObject(dev,device){
	var XmlString = "";
	if(lineConnected.length){
		for(var t=0; t<lineConnected.length; t++){
			var link = lineConnected[t];
			if((link.Source == dev.ObjectPath || link.Destination == dev.ObjectPath)){
				XmlString += "<PORTMAP Source='"+link.Source+"' Id='"+link.Id+"' SrcIp='"+link.SrcIp+"' DstIp='"+link.DstIp+"'";
				XmlString += " Port1Id='"+link.Port1Id+"' Port2Id='"+link.Port2Id+"' Name='"+link.Name+"' Destination='"+link.Destination+"'";
				XmlString += " LinkName='"+link.LinkName+"' CheckConnectivity='"+link.CheckConnectivity+"' ConnectivityDone='"+link.ConnectivityDone+"'";
				XmlString += " SrcMonitorSlot='"+link.SrcMonitorSlot+"' DstMonitorSlot='"+link.DstMonitorSlot+"'";
				XmlString += " PortMonitorEnable='"+link.PortMonitorEnable+"' ConnectivityFlag='"+link.ConnectivityFlag+"'/>";
			}
		}
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getDataFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get data on xml and set it to the devices in canvas
 *  PARAMETERS    : data
 *
 */
function getDataFromXML(data){
	portmapNameArr = [];
	portmapArr = [];
	var parser = new DOMParser();
    var xmlDoc = parser.parseFromString( data , "text/xml" );
    var mConfig = xmlDoc.getElementsByTagName('MAINCONFIG');
	if(mConfig.length){
		ResourceId = mConfig[0].getAttribute("ResourceId");
		MainId = mConfig[0].getAttribute("MainId");
		MainConfigurationUserId = mConfig[0].getAttribute("MainConfigurationUserId");
		Name = mConfig[0].getAttribute("Name");
		UserName = mConfig[0].getAttribute("UserName");
		MainFlag = mConfig[0].getAttribute("MainFlag");
		DateTime = mConfig[0].getAttribute("DateTime");
		DST = mConfig[0].getAttribute("DST");
		ResourceOrig = mConfig[0].getAttribute("ResourceOrig");
		ReservationType = mConfig[0].getAttribute("ReservationType");
		Interval = mConfig[0].getAttribute("Interval");
		Iteration = mConfig[0].getAttribute("Iteration");
		IterList = mConfig[0].getAttribute("IterList");
		IterNumber = mConfig[0].getAttribute("IterNumber");
		Offset = mConfig[0].getAttribute("Offset");
		DevListFlag = mConfig[0].getAttribute("DevListFlag");
		Connectivity = mConfig[0].getAttribute("Connectivity");
		DomainName = mConfig[0].getAttribute("DomainName");
		DeviceSanity = mConfig[0].getAttribute("DeviceSanity");
		AccessSanity = mConfig[0].getAttribute("AccessSanity");
		ZoneName = mConfig[0].getAttribute("ZoneName");
		DebugMode = mConfig[0].getAttribute("DebugMode");
		setChildNodeMainConfig(mConfig[0]);
	}
}
/*
 *
 *  FUNCTION NAME : setChildNodeMainConfig 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get child of xml
 *  PARAMETERS    : mConfig
 *
 */
function setChildNodeMainConfig(mConfig){
	var devices = mConfig.childNodes;
	var myCnt = 0;
	var myCnt2 = 0;
	for(var t=0; t<devices.length; t++){
		if(devices[t].nodeName == "DEVICES"){
			myCnt++;
		}
	}
	for(var t=0; t<devices.length; t++){
		if(devices[t].nodeName == "DEVICES"){
			portArr2 = [];
			var device = devices[t];
			var path = device.getAttribute("ObjectPath");
			var devObject = checkPath(path,devicesArr);
			if(devObject != null && devObject != undefined){
				setValuesInObject(devObject,device,myCnt2,myCnt);	
			}else{
    	    	idsArray.push(path);
				setDevicesValuesFromXML(device,false,myCnt2,myCnt);
			}
			myCnt2++;
		}
	}
}
/*
 *
 *  FUNCTION NAME : getDataForDeviceList 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 11, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get data of xml for device list
 *  PARAMETERS    : data
 *
 */
function getDataForDeviceList(data){
	var parser = new DOMParser();
    var xmlDoc = parser.parseFromString( data , "text/xml" );
    var mConfig = xmlDoc.getElementsByTagName('DEVICES');
	for(var t=0; t<mConfig.length; t++){
		var device = mConfig[t];
		var path = device.getAttribute("ObjectPath");
		if(path == ""){
			if (globalManageDeviceShow.toLowerCase()=="tooltipdevice"){
				path = glblDevMenImg;
			}else{
				var cnt = 1;
				path = generateDevicePath(cnt);
    	    	idsArray.push(path);
			}
			device.setAttribute("ObjectPath",path);
		}
		setDevicesValuesFromXML(device,true,t,mConfig);

	}
}
/*
 *
 *  FUNCTION NAME : setChildNodeMainDeviceList 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 13, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : set child for device list
 *  PARAMETERS    : mConfig
 *
 */
function setChildNodeMainDeviceList(mConfig){
	var devices = mConfig.childNodes;
	for(var t=0; t<devices.length; t++){
		if(devices[t].nodeName == "DEVICE"){
			var device = devices[t];
			var path = device.getAttribute("ObjectPath");
			if(path == ""){
				path = mConfig.getAttribute("ObjectPath");
				device.setAttribute("ObjectPath",path);
			}
			setDeviceValuesFromXML(device);
		}else if(devices[t].nodeName == "RACK"){
			var rack = devices[t];
			var path = rack.getAttribute("ObjectPath");
			if(path == ""){
				path = mConfig.getAttribute("ObjectPath") + "." + "Rack_" + rack.getAttribute("Number");
				rack.setAttribute("ObjectPath",path);
			}
			setRackValuesFromXML(rack,mConfig);
			setChildNodeMainDeviceList(rack);
		}else if(devices[t].nodeName == "SLOT"){
			var slot = devices[t];
			var path = slot.getAttribute("ObjectPath");
			if(path == ""){
				path = mConfig.getAttribute("ObjectPath") + "." + "Slot_" + slot.getAttribute("Number");
				slot.setAttribute("ObjectPath",path);
			}
			setSlotValuesFromXML(slot,mConfig);
			setChildNodeMainDeviceList(slot);
		}else if(devices[t].nodeName == "MODULE"){
			var module = devices[t];
			var path = module.getAttribute("ObjectPath");
			if(path == ""){
				path = mConfig.getAttribute("ObjectPath") + "." + "Module_" + module.getAttribute("Number");
				module.setAttribute("ObjectPath",path);
			}
			setModuleValuesFromXML(module,mConfig);
			setChildNodeMainDeviceList(module);
		}else if(devices[t].nodeName == "PORT"){
			var port = devices[t];
			var path = port.getAttribute("ObjectPath");
			if(path == ""){
				var phytype = port.getAttribute("PhysicalPortType");
				if(phytype != ""){
					path = mConfig.getAttribute("ObjectPath") + "." + "Port"+phytype+"_" + port.getAttribute("Number");
				}else{
					path = mConfig.getAttribute("ObjectPath") + "." + "Port_" + port.getAttribute("Number");
				}
				port.setAttribute("ObjectPath",path);
			}
			setPortValuesFromXML(port,mConfig);
		}
	}

}
/*
 *
 *  FUNCTION NAME : generateDevicePath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 13, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : generate object path for device
 *  PARAMETERS    : cnt 
 *
 */
function generateDevicePath(cnt){
	var devPath = "Device_" + cnt;
	if(idsArray.indexOf(devPath) != -1){
		cnt ++;
		devPath = generateDevicePath(cnt);
	}
	return devPath;
}
/*
 *
 *  FUNCTION NAME : checkPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get child of xml
 *  PARAMETERS    : path,myArray
 *
 */
function checkPath(path,myArray){
	var device;
	for(var s=0; s<myArray.length; s++){
		if(path == myArray[s].ObjectPath){
			device = myArray[s];
			s = myArray.length;
		}
	}
	return device;
}
/*
 *
 *  FUNCTION NAME : setChildNodeMainDevices 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get child of xml
 *  PARAMETERS    : mConfig
 *
 */
function setChildNodeMainDevices(mConfig){
	var devices = mConfig.childNodes;
	for(var t=0; t<devices.length; t++){
		if(devices[t].nodeName == "DEVICE"){
			var device = devices[t];
			setDeviceValuesFromXML(device);
		}else if(devices[t].nodeName == "RACK"){
			var rack = devices[t];
			setRackValuesFromXML(rack,mConfig);
			setChildNodeMainDevices(rack);
		}else if(devices[t].nodeName == "SLOT"){
			var slot = devices[t];
			setSlotValuesFromXML(slot,mConfig);
			setChildNodeMainDevices(slot);
		}else if(devices[t].nodeName == "MODULE"){
			var module = devices[t];
			setModuleValuesFromXML(module,mConfig);
			setChildNodeMainDevices(module);
		}else if(devices[t].nodeName == "PORT"){
			var port = devices[t];
			setPortValuesFromXML(port,mConfig);
			setChildNodeMainDevices(port);
		}else if(devices[t].nodeName == "PORTMAP"){
			var portmap = devices[t];
			var name = portmap.getAttribute("Name");
			if(portmapNameArr.indexOf(name) == -1){
				portmapNameArr.push(name);
				portmapArr.push(portmap);
			}
		}
	}
}
/*
 *
 *  FUNCTION NAME : setValuesInObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get devices values from xml
 *  PARAMETERS    : device
 *
 */
function setValuesInObject(devObject,device,cnt2,myArray2){
	devObject.DeviceName = device.getAttribute("DeviceName");
	devObject.DeviceType =  device.getAttribute("DeviceType");
	devObject.ObjectPath  = device.getAttribute("ObjectPath");
	devObject.Model = device.getAttribute("Model");
	devObject.DNDModelType = device.getAttribute("DNDModelType");
	devObject.SoftwareVersion =  device.getAttribute("SoftwareVersion");
	devObject.OSVersion = device.getAttribute("OSVersion");
	devObject.OSType = device.getAttribute("OSType");
	devObject.SoftwarePackage = device.getAttribute("SoftwarePackage");
	devObject.ReEvaluate = device.getAttribute("ReEvaluate");
	devObject.IpAddress = device.getAttribute("IpAddress");
	devObject.DeviceId = device.getAttribute("DeviceId");
	devObject.HostName = device.getAttribute("HostName");
	devObject.UpdateFlag = device.getAttribute("UpdateFlag");
	devObject.MediaType = device.getAttribute("MediaType");
	devObject.Portname = device.getAttribute("Portname");
	devObject.ManagementIp = device.getAttribute("ManagementIp");
	devObject.ManagementIp2 = device.getAttribute("ManagementIp2");
	devObject.Auxiliary = device.getAttribute("Auxiliary");
	devObject.DiscoveryFlag = device.getAttribute("DiscoveryFlag");
	devObject.Exclusivity = device.getAttribute("Exclusivity");
	devObject.XLocation = parseInt(device.getAttribute("XLocation"));
	devObject.YLocation = parseInt(device.getAttribute("YLocation"));
	devObject.PowerStatus = device.getAttribute("PowerStatus");
	devObject.Power = device.getAttribute("Power");
	devObject.TftpIpAddress = device.getAttribute("TftpIpAddress");
	devObject.TftpHostname = device.getAttribute("TftpHostname");
	devObject.TftpImagePath = device.getAttribute("TftpImagePath");
	devObject.TftpImageName = device.getAttribute("TftpImageName");
	devObject.TftpUser = device.getAttribute("TftpUser");
	devObject.TftpPassword = device.getAttribute("TftpPassword");
	devObject.TftpAddress = device.getAttribute("TftpAddress");
	devObject.TacacsIpAddress = device.getAttribute("TacacsIpAddress");
	devObject.TacacsHostname = device.getAttribute("TacacsHostname");
	devObject.RadiusHostname = device.getAttribute("RadiusHostname");
	devObject.RadiusIpAddress = device.getAttribute("RadiusIpAddress");
	devObject.RadiusUsername = device.getAttribute("RadiusUsername");
	devObject.RadiusPassword = device.getAttribute("RadiusPassword");
	devObject.Description = device.getAttribute("Description");
	devObject.Processor = device.getAttribute("Processor");
	devObject.ProcessorBoardId = device.getAttribute("ProcessorBoardId");
   	devObject.Manufacturer = device.getAttribute("Manufacturer");
	devObject.SerialNumber = device.getAttribute("SerialNumber");
	devObject.IOS = device.getAttribute("IOS");
	devObject.CPUSpeed = device.getAttribute("CPUSpeed");
	devObject.SystemMemory = device.getAttribute("SystemMemory");
	devObject.NVRAMCF = device.getAttribute("NVRAMCF");
	devObject.ProcessorMemory = device.getAttribute("ProcessorMemory");
	devObject.ConnectivityDone = device.getAttribute("ConnectivityDone");
	devObject.ReachabilityDone = device.getAttribute("ReachabilityDone");
	devObject.ConvergenceDone = device.getAttribute("ConvergenceDone");
	devObject.TFTPServer = device.getAttribute("TFTPServer");
	devObject.TFTPUser = device.getAttribute("TFTPUser");
	devObject.TFTPPassword = device.getAttribute("TFTPPassword");
	devObject.FTPUser = device.getAttribute("FTPUser");
	devObject.ConfigDetail = device.getAttribute("ConfigDetail");
	devObject.ConfigFilePath = device.getAttribute("ConfigFilePath");
	devObject.ConfigFileName = device.getAttribute("ConfigFileName");
	devObject.ConfigUrl = device.getAttribute("ConfigUrl");
	devObject.SaveConfigUrl = device.getAttribute("SaveConfigUrl");
	devObject.ConfigServer = device.getAttribute("ConfigServer");
	devObject.ConfigDestination = device.getAttribute("ConfigDestination");
	devObject.ImageFilePath = device.getAttribute("ImageFilePath");
	devObject.ImageDetail = device.getAttribute("ImageDetail");
	devObject.ImageFileName = device.getAttribute("ImageFileName");
	devObject.ImageUrl = device.getAttribute("ImageUrl");
	devObject.SaveImageUrl = device.getAttribute("SaveImageUrl");
	devObject.ImageServer = device.getAttribute("ImageServer");
	devObject.SaveImageEnable = device.getAttribute("SaveImageEnable");
	devObject.SaveConfigEnable = device.getAttribute("SaveConfigEnable");
	devObject.LoadConfigEnable = device.getAttribute("LoadConfigEnable");
	devObject.LoadImageEnable = device.getAttribute("LoadImageEnable");
	devObject.SaveImageDetail = device.getAttribute("SaveImageDetail");
	devObject.SaveImageServer = device.getAttribute("SaveImageServer");
	devObject.SaveImageDestination = device.getAttribute("SaveImageDestination");
	devObject.SaveImageUser = device.getAttribute("SaveImageUser");
	devObject.SaveImagePassword = device.getAttribute("SaveImagePassword");
	devObject.SaveImageType = device.getAttribute("SaveImageType");
	devObject.SaveConfigDetail = device.getAttribute("SaveConfigDetail");
	devObject.SaveConfigServer = device.getAttribute("SaveConfigServer");
	devObject.SaveConfigDestination = device.getAttribute("SaveConfigDestination");
	devObject.SaveConfigUser = device.getAttribute("SaveConfigUser");
	devObject.SaveConfigPassword = device.getAttribute("SaveConfigPassword");
	devObject.SaveConfigType = device.getAttribute("SaveConfigType");
	devObject.SaveConfigFileName = device.getAttribute("SaveConfigFileName");
	devObject.SaveImageFileName = device.getAttribute("SaveImageFileName");
	devObject.SystemImageName = device.getAttribute("SystemImageName");
	devObject.SystemConfigName = device.getAttribute("SystemConfigName");
	devObject.TypeImage = device.getAttribute("TypeImage");
	devObject.SaveTypeConfig = device.getAttribute("SaveTypeConfig");
	devObject.TypeConfig = device.getAttribute("TypeConfig");
	devObject.ChassisPid = device.getAttribute("ChassisPid");
	devObject.ChassisVid = device.getAttribute("ChassisVid");
	devObject.RouteProcessorName = device.getAttribute("RouteProcessorName");
	devObject.TotalMemory = device.getAttribute("TotalMemory");
	devObject.TotalMemory2 = device.getAttribute("TotalMemory2");
	devObject.RouteProcessorName2 = device.getAttribute("RouteProcessorName2");
	devObject.RouteRedundant = device.getAttribute("RouteRedundant");
	devObject.RouteProcessorDescription = device.getAttribute("RouteProcessorDescription");
	devObject.RouteProcessorProductId = device.getAttribute("RouteProcessorProductId");
	devObject.RouteProcessorProductId2 = device.getAttribute("RouteProcessorProductId2");
	devObject.RouteProcessorVersionId = device.getAttribute("RouteProcessorVersionId");
	devObject.RouteProcessorVersionId2 = device.getAttribute("RouteProcessorVersionId2");
	devObject.EmbeddedRedundant = device.getAttribute("EmbeddedRedundant");
	devObject.EmbeddedProcessorName = device.getAttribute("EmbeddedProcessorName");
	devObject.EmbeddedProcessorName2 = device.getAttribute("EmbeddedProcessorName2");
	devObject.EmbeddedProcessorDescription = device.getAttribute("EmbeddedProcessorDescription");
	devObject.EmbeddedProcessorProductId = device.getAttribute("EmbeddedProcessorProductId");
	devObject.EmbeddedProcessorProductId2 = device.getAttribute("EmbeddedProcessorProductId2");
	devObject.EmbeddedProcessorVersionId = device.getAttribute("EmbeddedProcessorVersionId");
	devObject.EmbeddedProcessorVersionId2 = device.getAttribute("EmbeddedProcessorVersionId2");
	devObject.EmbeddedProcessorNitrox = device.getAttribute("EmbeddedProcessorNitrox");
	devObject.EmbeddedProcessorOcteon = device.getAttribute("EmbeddedProcessorOcteon");
	devObject.EmbeddedProcessorNitrox2 = device.getAttribute("EmbeddedProcessorNitrox2");
	devObject.EmbeddedProcessorOcteon2 = device.getAttribute("EmbeddedProcessorOcteon2");
	devObject.LineCardName = device.getAttribute("LineCardName");
	devObject.LineCardVersionId = device.getAttribute("LineCardVersionId");
	devObject.LineCardNumber = device.getAttribute("LineCardNumber");
	devObject.ModuleDescription = device.getAttribute("ModuleDescription");
	devObject.ModuleProductId = device.getAttribute("ModuleProductId");
	devObject.ModuleVersionId = device.getAttribute("ModuleVersionId");
	devObject.ProductFamily = device.getAttribute("ProductFamily");
	devObject.ServerType = device.getAttribute("ServerType");
	devObject.ManagementInterface = device.getAttribute("ManagementInterface");
	devObject.ManagementInterface2 = device.getAttribute("ManagementInterface2");
	devObject.ManagementIpMask = device.getAttribute("ManagementIpMask");
	devObject.ManagementIpMask2 = device.getAttribute("ManagementIpMask2");
	devObject.ManagementIpv6 = device.getAttribute("ManagementIpv6");
	devObject.ManagementIpv62 = device.getAttribute("ManagementIpv62");
	devObject.ManagementIpv6Prefix = device.getAttribute("ManagementIpv6Prefix");
	devObject.ManagementIpv6Prefix2 = device.getAttribute("ManagementIpv6Prefix2");
	devObject.ProcessorType = device.getAttribute("ProcessorType");
	devObject.CPUCores = device.getAttribute("CPUCores");
	devObject.ProcessorSockets = device.getAttribute("ProcessorSockets");
	devObject.CoresPerSocket = device.getAttribute("CoresPerSocket");
	devObject.LogicalProcessor = device.getAttribute("LogicalProcessor");
	devObject.ConsoleIp = device.getAttribute("ConsoleIp");
	devObject.TitanName = device.getAttribute("TitanName");
	devObject.ProcessorFamily = device.getAttribute("ProcessorFamily");
	devObject.ConsoleNet = device.getAttribute("ConsoleNet");
	devObject.Ipv6 = device.getAttribute("Ipv6");
	devObject.Key = device.getAttribute("Key");
	devObject.Admin = device.getAttribute("Admin");
	devObject.Access = device.getAttribute("Access");
	devObject.Account = device.getAttribute("Account");
	devObject.AccountPort = device.getAttribute("AccountPort");
	devObject.AuthenticationPort = device.getAttribute("AuthenticationPort");
	devObject.BEHostlist = device.getAttribute("BEHostlist");
	devObject.ConfigMethod = device.getAttribute("ConfigMethod");
	devObject.ConfigName = device.getAttribute("ConfigName");
	devObject.ConfigFile = device.getAttribute("ConfigFile");
	devObject.ConfigPath = device.getAttribute("ConfigPath");
	devObject.ClearType = device.getAttribute("ClearType");
	devObject.COAPort = device.getAttribute("COAPort");
	devObject.Community = device.getAttribute("Community");
	devObject.Connectivity = device.getAttribute("Connectivity");
	devObject.DatabaseName  = device.getAttribute("DatabaseName");
	devObject.DatabaseTableName  = device.getAttribute("DatabaseTableName");
	devObject.DatabaseType  = device.getAttribute("DatabaseType");
	devObject.DeviceList = device.getAttribute("DeviceList");
	devObject.EnablePassword = device.getAttribute("EnablePassword");
	devObject.Features = device.getAttribute("Features");
	devObject.Function = device.getAttribute("Function");
	devObject.LogDirectory = device.getAttribute("LogDirectory");
	devObject.NRCMD = device.getAttribute("NRCMD");
	devObject.NRCMDUsername = device.getAttribute("NRCMDUsername");
	devObject.RedirectPort = device.getAttribute("RedirectPort");
	devObject.RootDirectory = device.getAttribute("RootDirectory");
	devObject.ServerDirectory = device.getAttribute("ServerDirectory");
	devObject.VendorType = device.getAttribute("VendorType");
	devObject.Snapshot = device.getAttribute("Snapshot");
	devObject.DomainName = device.getAttribute("DomainName");
	devObject.Sequence = device.getAttribute("Sequence");
	devObject.RP0ConsoleIp = device.getAttribute("RP0ConsoleIp");
	devObject.RP1ConsoleIp = device.getAttribute("RP1ConsoleIp");
	if(device.getAttribute("Status") != null && device.getAttribute("Status") != undefined){
		devObject.Status = device.getAttribute("Status");
	}else{
		var devices = device.childNodes;
		for(var t=0; t<devices.length; t++){
			if(devices[t].nodeName == "DEVICE"){
				var device2 = devices[t];
				if(device2.getAttribute("Status") != null && device2.getAttribute("Status") != undefined){
					devObject.Status = device2.getAttribute("Status");
				}
				
			}
		}
	}
	var src  = "";
	for(var t=0; t<devicesArrBC.length; t++){
		if(devObject.ObjectPath == devicesArrBC[t].ObjectPath){
			src = devicesArrBC[t].Source;
			break;
		}
	}
	devObject.Source = src;
	var myportArr  = portArr2;
	devObject.PortArr = myportArr;
	setChildNodeMainDevices(device);
	if (cnt2 == myArray2 - 1) {
		setLinkInformation();
	}
}
/*
 *
 *  FUNCTION NAME : setDevicesValuesFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get devices values from xml
 *  PARAMETERS    : device
 *
 */
function setDevicesValuesFromXML(device,flag,cnt2,myArray2){
	console.log("cnt2 >>>" + cnt2);
	console.log("myArray2 >>>" + myArray2);
	var devname = device.getAttribute("DeviceName");
	var devtype = device.getAttribute("DeviceType");
	var devpath = device.getAttribute("ObjectPath");
	var model = device.getAttribute("Model");
	var dndmodel = device.getAttribute("DNDModelType");
	var softver = device.getAttribute("SoftwareVersion");
	var osver = device.getAttribute("OSVersion");
	var ostype = device.getAttribute("OSType");
	var softpack = device.getAttribute("SoftwarePackage");
	var reeval = device.getAttribute("ReEvaluate");
	var ipadd = device.getAttribute("IpAddress");
	var devid = device.getAttribute("DeviceId");
	var hostname = device.getAttribute("HostName");
	var update = device.getAttribute("UpdateFlag");
	var media = device.getAttribute("MediaType");
	var portname = device.getAttribute("Portname");
	var mgntip = device.getAttribute("ManagementIp");
	var mgntip2 = device.getAttribute("ManagementIp2");
	var aux = device.getAttribute("Auxiliary");
	var disflag = device.getAttribute("DiscoveryFlag");
	var exclusive = device.getAttribute("Exclusivity");
	var xpos = device.getAttribute("XLocation");
	var ypos = device.getAttribute("YLocation");
	var powerstats = device.getAttribute("PowerStatus");
	var power = device.getAttribute("Power");
	var tftpip = device.getAttribute("TftpIpAddress");
	var itftphost = device.getAttribute("TftpHostname");
	var tftpimgpath = device.getAttribute("TftpImagePath");
	var tftpimgname = device.getAttribute("TftpImageName");
	var tftpuser = device.getAttribute("TftpUser");
	var tftppass = device.getAttribute("TftpPassword");
	var itftpadd = device.getAttribute("TftpAddress");
	var tacacsip = device.getAttribute("TacacsIpAddress");
	var tacacshost = device.getAttribute("TacacsHostname");
	var radiusname = device.getAttribute("RadiusHostname");
	var rdiusip = device.getAttribute("RadiusIpAddress");
	var radius = device.getAttribute("RadiusUsername");
	var radiuspass = device.getAttribute("RadiusPassword");
	var desc = device.getAttribute("Description");
	var processor = device.getAttribute("Processor");
	var processorboardid = device.getAttribute("ProcessorBoardId");
	var manu = device.getAttribute("Manufacturer");
	var serialnum = device.getAttribute("SerialNumber");
	var ios = device.getAttribute("IOS");
	var cpuspeed = device.getAttribute("CPUSpeed");
	var sysmem = device.getAttribute("SystemMemory");
	var nvramcp = device.getAttribute("NVRAMCF");
	var procmem = device.getAttribute("ProcessorMemory");
	var condone = device.getAttribute("ConnectivityDone");
	var reachdone = device.getAttribute("ReachabilityDone");
	var converdone = device.getAttribute("ConvergenceDone");
	var tftpserver = device.getAttribute("TFTPServer");
	var tuser = device.getAttribute("TFTPUser");
	var tpass = device.getAttribute("TFTPPassword");
	var ftpserver = device.getAttribute("FTPServer");
	var ftpuser = device.getAttribute("FTPUser");
	var ftppass = device.getAttribute("FTPPassword");
	var configdetail = device.getAttribute("ConfigDetail");
	var configfilepath = device.getAttribute("ConfigFilePath");
	var configfilename = device.getAttribute("ConfigFileName");
	var configurl = device.getAttribute("ConfigUrl");
	var saveconurl = device.getAttribute("SaveConfigUrl");
	var configserver = device.getAttribute("ConfigServer");
	var configdest = device.getAttribute("ConfigDestination");
	var imagefilepath = device.getAttribute("ImageFilePath");
	var imagedetail = device.getAttribute("ImageDetail");
	var imagefilename = device.getAttribute("ImageFileName");
	var imageurl = device.getAttribute("ImageUrl");
	var saveimageurl = device.getAttribute("SaveImageUrl");
	var imageserver = device.getAttribute("ImageServer");
	var iamgedest = device.getAttribute("ImageDestination");
	var saveimageen = device.getAttribute("SaveImageEnable");
	var saveconfigen = device.getAttribute("SaveConfigEnable");
	var loadconfigen = device.getAttribute("LoadConfigEnable");
	var loadimageen = device.getAttribute("LoadImageEnable");
	var saveimagedetail = device.getAttribute("SaveImageDetail");
	var saveimageserver = device.getAttribute("SaveImageServer");
	var saveimagedest = device.getAttribute("SaveImageDestination");
	var saveimageuser = device.getAttribute("SaveImageUser");
	var saveimagepass = device.getAttribute("SaveImagePassword");
	var saveimagetype = device.getAttribute("SaveImageType");
	var saveconfigdetail = device.getAttribute("SaveConfigDetail");
	var saveconfigserver = device.getAttribute("SaveConfigServer");
	var saveconfigdest = device.getAttribute("SaveConfigDestination");
	var saveconfiguser = device.getAttribute("SaveConfigUser");
	var saveconfigpass = device.getAttribute("SaveConfigPassword");
	var saveconfigtype = device.getAttribute("SaveConfigType");
	var saveconfigfilename = device.getAttribute("SaveConfigFileName");
	var saveimagefilename = device.getAttribute("SaveImageFileName");
	var sysimagename = device.getAttribute("SystemImageName");
	var systemconname = device.getAttribute("SystemConfigName");
	var savetypeimage = device.getAttribute("SaveTypeImage");
	var typeimage = device.getAttribute("TypeImage");
	var savetypeconfig = device.getAttribute("SaveTypeConfig");
	var typeconfig = device.getAttribute("TypeConfig");
	var chassispid = device.getAttribute("ChassisPid");
	var chassisvid = device.getAttribute("ChassisVid");
	var routename = device.getAttribute("RouteProcessorName");
	var totalmemory = device.getAttribute("TotalMemory");
	var totalmemory2 = device.getAttribute("TotalMemory2");
	var routename2 = device.getAttribute("RouteProcessorName2");
	var routeredundant = device.getAttribute("RouteRedundant");
	var routedesc = device.getAttribute("RouteProcessorDescription");
	var routeprodid = device.getAttribute("RouteProcessorProductId");
	var routeprodid2 = device.getAttribute("RouteProcessorProductId2");
	var routeverid = device.getAttribute("RouteProcessorVersionId");
	var routeverid2 = device.getAttribute("RouteProcessorVersionId2");
	var embedredundant = device.getAttribute("EmbeddedRedundant");
	var embedname = device.getAttribute("EmbeddedProcessorName");
	var embedname2 = device.getAttribute("EmbeddedProcessorName2");
	var embeddesc = device.getAttribute("EmbeddedProcessorDescription");
	var embedproid = device.getAttribute("EmbeddedProcessorProductId");
	var embedproid2 = device.getAttribute("EmbeddedProcessorProductId2");
	var embedverid = device.getAttribute("EmbeddedProcessorVersionId");
	var embedverid2 = device.getAttribute("EmbeddedProcessorVersionId2");
	var embednitrox = device.getAttribute("EmbeddedProcessorNitrox");
	var embedocteon = device.getAttribute("EmbeddedProcessorOcteon");
	var embednotrox2 = device.getAttribute("EmbeddedProcessorNitrox2");
	var embedocteon2 = device.getAttribute("EmbeddedProcessorOcteon2");
	var linename = device.getAttribute("LineCardName");
	var linedesc = device.getAttribute("LineCardDescription");
	var lineproid = device.getAttribute("LineCardProductId");
	var lineverid = device.getAttribute("LineCardVersionId");
	var linenum = device.getAttribute("LineCardNumber");
	var modname = device.getAttribute("ModuleName");
	var moddesc = device.getAttribute("ModuleDescription");
	var modproid = device.getAttribute("ModuleProductId");
	var modverid = device.getAttribute("ModuleVersionId");
	var profam = device.getAttribute("ProductFamily");
	var servertype = device.getAttribute("ServerType");
	var mgntint = device.getAttribute("ManagementInterface");
	var mgntint2 = device.getAttribute("ManagementInterface2");
	var mgntmask = device.getAttribute("ManagementIpMask");
	var mgntmask2 = device.getAttribute("ManagementIpMask2");
	var mgntipv6 = device.getAttribute("ManagementIpv6");
	var mgntipv62 = device.getAttribute("ManagementIpv62");
	var mgntipv5pref = device.getAttribute("ManagementIpv6Prefix");
	var mgntipv6pref = device.getAttribute("ManagementIpv6Prefix2");
	var protype = device.getAttribute("ProcessorType");
	var cpucore = device.getAttribute("CPUCores");
	var prosock = device.getAttribute("ProcessorSockets");
	var corespersock = device.getAttribute("CoresPerSocket");
	var logpro = device.getAttribute("LogicalProcessor");
	var conip = device.getAttribute("ConsoleIp");
	var titanname = device.getAttribute("TitanName");
	var prodfam = device.getAttribute("ProcessorFamily");
	var propid = device.getAttribute("ProcessorPId");
	var connet = device.getAttribute("ConsoleNet");
	var ipv6 = device.getAttribute("Ipv6");
	var key = device.getAttribute("Key");
	var admin = device.getAttribute("Admin");
	var access = device.getAttribute("Access");
	var account = device.getAttribute("Account");
	var accountport = device.getAttribute("AccountPort");
	var authendir = device.getAttribute("AuthenticationDirectory");
	var authenport = device.getAttribute("AuthenticationPort");
	var behost = device.getAttribute("BEHostlist");
	var configmethod = device.getAttribute("ConfigMethod");
	var configname = device.getAttribute("ConfigName");
	var configfile = device.getAttribute("ConfigFile");
	var configpath = device.getAttribute("ConfigPath");
	var cleartype = device.getAttribute("ClearType");
	var coaport = device.getAttribute("COAPort");
	var com = device.getAttribute("Community");
	var connectivity = device.getAttribute("Connectivity");
	var dbname  = device.getAttribute("DatabaseName");
	var dbtablename  = device.getAttribute("DatabaseTableName");
	var dbtype  = device.getAttribute("DatabaseType");
	var defaultsm  = device.getAttribute("DefaultSM");
	var devlist  = device.getAttribute("DeviceList");
	var extip  = device.getAttribute("ExtensionIp");
	var enpass  = device.getAttribute("EnablePassword");
	var features  = device.getAttribute("Features");
	var func  = device.getAttribute("Function");
	var logdir  = device.getAttribute("LogDirectory");
	var nrcmd  = device.getAttribute("NRCMD");
	var nrcmduser  = device.getAttribute("NRCMDUsername");
	var port  = device.getAttribute("Port");
	var redirport  = device.getAttribute("RedirectPort");
	var redirlogport  = device.getAttribute("RedirectLogPort");
	var rootdir  = device.getAttribute("RootDirectory");
	var serverdir  = device.getAttribute("ServerDirectory");
	var ventype  = device.getAttribute("VendorType");
	var snapshot  = device.getAttribute("Snapshot");
	var domname  = device.getAttribute("DomainName");
	var application  = device.getAttribute("Application");
	var sequence  = device.getAttribute("Sequence");
	var rp0con  = device.getAttribute("RP0ConsoleIp");
	var rp1con  = device.getAttribute("RP1ConsoleIp");
	var stats  = device.getAttribute("Status");
	var src  = "";
	devname = checkValue(devname);
	devtype = checkValue(devtype);
	devpath = checkValue(devpath);
	model = checkValue(model);
	dndmodel = checkValue(dndmodel);
	softver = checkValue(softver);
	osver = checkValue(osver);
	ostype = checkValue(ostype);
	softpack = checkValue(softpack);
	reeval = checkValue(reeval);
	ipadd = checkValue(ipadd);
	devid = checkValue(devid);
	hostname = checkValue(hostname);
	update = checkValue(update);
	media = checkValue(media);
	portname = checkValue(portname);
	mgntip = checkValue(mgntip);
	mgntip2 = checkValue(mgntip2);
	aux = checkValue(aux);
	disflag = checkValue(disflag);
	exclusive = checkValue(exclusive);
	xpos = checkValue(xpos);
	ypos = checkValue(ypos);
	powerstats = checkValue(powerstats);
	power = checkValue(power);
	tftpip = checkValue(tftpip);
	itftphost = checkValue(itftphost);
	tftpimgpath = checkValue(tftpimgpath);
	tftpimgname = checkValue(tftpimgname);
	tftpuser = checkValue(tftpuser);
	tftppass = checkValue(tftppass);
	itftpadd = checkValue(itftpadd);
	tacacsip = checkValue(tacacsip);
	tacacshost = checkValue(tacacshost);
	radiusname = checkValue(radiusname);
	rdiusip = checkValue(rdiusip);
	radius = checkValue(radius);
	radiuspass = checkValue(radiuspass);
	desc = checkValue(desc);
	processor = checkValue(processor);
	processorboardid = checkValue(processorboardid);
	manu = checkValue(manu);
	serialnum = checkValue(serialnum);
	ios = checkValue(ios);
	cpuspeed = checkValue(cpuspeed);
	sysmem = checkValue(sysmem);
	nvramcp = checkValue(nvramcp);
	procmem = checkValue(procmem);
	condone = checkValue(condone);
	reachdone = checkValue(reachdone);
	converdone = checkValue(converdone);
	tftpserver = checkValue(tftpserver);
	tuser = checkValue(tuser);
	tpass = checkValue(tpass);
	ftpserver = checkValue(ftpserver);
	ftpuser = checkValue(ftpuser);
	ftppass = checkValue(ftppass);
	configdetail = checkValue(configdetail);
	configfilepath = checkValue(configfilepath);
	configfilename = checkValue(configfilename);
	configurl = checkValue(configurl);
	saveconurl = checkValue(saveconurl);
	configserver = checkValue(configserver);
	configdest = checkValue(configdest);
	imagefilepath = checkValue(imagefilepath);
	imagedetail = checkValue(imagedetail);
	imagefilename = checkValue(imagefilename);
	imageurl = checkValue(imageurl);
	saveimageurl = checkValue(saveimageurl);
	imageserver = checkValue(imageserver);
	iamgedest = checkValue(iamgedest);
	saveimageen = checkValue(saveimageen);
	saveconfigen = checkValue(saveconfigen);
	loadconfigen = checkValue(loadconfigen);
	loadimageen = checkValue(loadimageen);
	saveimagedetail = checkValue(saveimagedetail);
	saveimageserver = checkValue(saveimageserver);
	saveimagedest = checkValue(saveimagedest);
	saveimageuser = checkValue(saveimageuser);
	saveimagepass = checkValue(saveimagepass);
	saveimagetype = checkValue(saveimagetype);
	saveconfigdetail = checkValue(saveconfigdetail);
	saveconfigserver = checkValue(saveconfigserver);
	saveconfigdest = checkValue(saveconfigdest);
	saveconfiguser = checkValue(saveconfiguser);
	saveconfigpass = checkValue(saveconfigpass);
	saveconfigtype = checkValue(saveconfigtype);
	saveconfigfilename = checkValue(saveconfigfilename);
	saveimagefilename = checkValue(saveimagefilename);
	sysimagename = checkValue(sysimagename);
	systemconname = checkValue(systemconname);
	savetypeimage = checkValue(savetypeimage);
	typeimage = checkValue(typeimage);
	savetypeconfig = checkValue(savetypeconfig);
	typeconfig = checkValue(typeconfig);
	chassispid = checkValue(chassispid);
	chassisvid = checkValue(chassisvid);
	routename = checkValue(routename);
	totalmemory = checkValue(totalmemory);
	totalmemory2 = checkValue(totalmemory2);
	routename2 = checkValue(routename2);
	routeredundant = checkValue(routeredundant);
	routedesc = checkValue(routedesc);
	routeprodid = checkValue(routeprodid);
	routeprodid2 = checkValue(routeprodid2);
	routeverid = checkValue(routeverid);
	routeverid2 = checkValue(routeverid2);
	embedredundant = checkValue(embedredundant);
	embedname = checkValue(embedname);
	embedname2 = checkValue(embedname2);
	embeddesc = checkValue(embeddesc);
	embedproid = checkValue(embedproid);
	embedproid2 = checkValue(embedproid2);
	embedverid = checkValue(embedverid);
	embedverid2 = checkValue(embedverid2);
	embednitrox = checkValue(embednitrox);
	embedocteon = checkValue(embedocteon);
	embednotrox2 = checkValue(embednotrox2);
	embedocteon2 = checkValue(embedocteon2);
	linename = checkValue(linename);
	linedesc = checkValue(linedesc);
	lineproid = checkValue(lineproid);
	lineverid = checkValue(lineverid);
	linenum = checkValue(linenum);
	modname = checkValue(modname);
	moddesc = checkValue(moddesc);
	modproid = checkValue(modproid);
	modverid = checkValue(modverid);
	profam = checkValue(profam);
	servertype = checkValue(servertype);
	mgntint = checkValue(mgntint);
	mgntint2 = checkValue(mgntint2);
	mgntmask = checkValue(mgntmask);
	mgntmask2 = checkValue(mgntmask2);
	mgntipv6 = checkValue(mgntipv6);
	mgntipv62 = checkValue(mgntipv62);
	mgntipv5pref = checkValue(mgntipv5pref);
	mgntipv6pref = checkValue(mgntipv6pref);
	protype = checkValue(protype);
	cpucore = checkValue(cpucore);
	prosock = checkValue(prosock);
	corespersock = checkValue(corespersock);
	logpro = checkValue(logpro);
	conip = checkValue(conip);
	titanname = checkValue(titanname);
	prodfam = checkValue(prodfam);
	propid = checkValue(propid);
	connet = checkValue(connet);
	ipv6 = checkValue(ipv6);
	key = checkValue(key);
	admin = checkValue(admin);
	access = checkValue(access);
	account = checkValue(account);
	accountport = checkValue(accountport);
	authendir = checkValue(authendir);
	authenport = checkValue(authenport);
	behost = checkValue(behost);
	configmethod = checkValue(configmethod);
	configname = checkValue(configname);
	configfile = checkValue(configfile);
	configpath = checkValue(configpath);
	cleartype = checkValue(cleartype);
	coaport = checkValue(coaport);
	com = checkValue(com);
	connectivity = checkValue(connectivity);
	dbname = checkValue(dbname);
	dbtablename = checkValue(dbtablename);
	dbtype = checkValue(dbtype);
	defaultsm = checkValue(defaultsm);
	devlist = checkValue(devlist);
	extip = checkValue(extip);
	enpass = checkValue(enpass);
	features = checkValue(features);
	func = checkValue(func);
	logdir = checkValue(logdir);
	nrcmd = checkValue(nrcmd);
	nrcmduser = checkValue(nrcmduser);
	port = checkValue(port);
	redirport = checkValue(redirport);
	redirlogport = checkValue(redirlogport);
	rootdir = checkValue(rootdir);
	serverdir = checkValue(serverdir);
	ventype = checkValue(ventype);
	snapshot = checkValue(snapshot);
	domname = checkValue(domname);
	application = checkValue(application);
	sequence = checkValue(sequence);
	rp0con = checkValue(rp0con);
	rp1con = checkValue(rp1con);
	stats = checkValue(stats);
	for(var t=0; t<devicesArrBC.length; t++){
		if(devpath == devicesArrBC[t].ObjectPath){
			src = devicesArrBC[t].Source;
			break;
		}
	}
	var myportArr  = portArr2;
	if(flag == true || src == null || src == "" || src == undefined){
		var srcs = findImageDevice(devtype,manu,model);
    	var imageObj = new Image();
	    imageObj.src = dir+"/img"+srcs;
	    var imsrc =  dir+"/img"+srcs;
    	var id =  $(src).attr('id');
	   	var model2 =  $(src).attr('model');
    	imageObj.onload = function() {
			if(globalManageDeviceShow.toLowerCase()=="tooltipdevice"){
				xpos = gblDevMenX;
				ypos = gblDevMenY;
			}else{
				ypos = imgYPos;
				xpos = imgXPos;
				imgXPos+=50;
			}
			if(flag == true){
				setChildNodeMainDeviceList(device);
			}else{
				setChildNodeMainDevices(device);
			}
			storeDeviceInformation(devname,devtype,devpath,model,dndmodel,softver,osver,ostype,softpack,reeval,ipadd,devid,hostname,update,media,portname,mgntip,mgntip2,aux,disflag,exclusive,xpos,ypos,powerstats,power,tftpip,itftphost,tftpimgpath,tftpimgname,tftpuser,tftppass,itftpadd,tacacsip,tacacshost,radiusname,rdiusip,radius,radiuspass,desc,processor,processorboardid,manu,serialnum,ios,cpuspeed,sysmem,nvramcp,procmem,condone,reachdone,converdone,tftpserver,tuser,tpass,ftpserver,ftpuser,ftppass,configdetail,configfilepath,configfilename,configurl,saveconurl,configserver,configdest,imagefilepath,imagedetail,imagefilename,imageurl,saveimageurl,imageserver,iamgedest,saveimageen,saveconfigen,loadconfigen,loadimageen,saveimagedetail,saveimageserver,saveimagedest,saveimageuser,saveimagepass,saveimagetype,saveconfigdetail,saveconfigserver,saveconfigdest,saveconfiguser,saveconfigpass,saveconfigtype,saveconfigfilename,saveimagefilename,sysimagename,systemconname,savetypeimage,typeimage,savetypeconfig,typeconfig,chassispid,chassisvid,routename,totalmemory,totalmemory2,routename2,routeredundant,routedesc,routeprodid,routeprodid2,routeverid,routeverid2,embedredundant,embedname,embedname2,embeddesc,embedproid,embedproid2,embedverid,embedverid2,embednitrox,embedocteon,embednotrox2,embedocteon2,linename,linedesc,lineproid,lineverid,linenum,modname,moddesc,modproid,modverid,profam,servertype,mgntint,mgntint2,mgntmask,mgntmask2,mgntipv6,mgntipv62,mgntipv5pref,mgntipv6pref,protype,cpucore,prosock,corespersock,logpro,conip,titanname,prodfam,propid,connet,ipv6,key,admin,access,account,accountport,authendir,authenport,behost,configmethod,configname,configfile,configpath,cleartype,coaport,com,connectivity,dbname,dbtablename,dbtype,defaultsm,devlist,extip,enpass,features,func,logdir,nrcmd,nrcmduser,port,redirport,redirlogport,rootdir,serverdir,ventype,snapshot,domname,application,sequence,rp0con,rp1con,imageObj,myportArr,stats);
			if (cnt2 == myArray2 - 1) {
				setLinkInformation();
			}
		}
	}else{
console.log(">>>><<<<< ELSE >>>>>");
		setChildNodeMainDevices(device);
		storeDeviceInformation(devname,devtype,devpath,model,dndmodel,softver,osver,ostype,softpack,reeval,ipadd,devid,hostname,update,media,portname,mgntip,mgntip2,aux,disflag,exclusive,xpos,ypos,powerstats,power,tftpip,itftphost,tftpimgpath,tftpimgname,tftpuser,tftppass,itftpadd,tacacsip,tacacshost,radiusname,rdiusip,radius,radiuspass,desc,processor,processorboardid,manu,serialnum,ios,cpuspeed,sysmem,nvramcp,procmem,condone,reachdone,converdone,tftpserver,tuser,tpass,ftpserver,ftpuser,ftppass,configdetail,configfilepath,configfilename,configurl,saveconurl,configserver,configdest,imagefilepath,imagedetail,imagefilename,imageurl,saveimageurl,imageserver,iamgedest,saveimageen,saveconfigen,loadconfigen,loadimageen,saveimagedetail,saveimageserver,saveimagedest,saveimageuser,saveimagepass,saveimagetype,saveconfigdetail,saveconfigserver,saveconfigdest,saveconfiguser,saveconfigpass,saveconfigtype,saveconfigfilename,saveimagefilename,sysimagename,systemconname,savetypeimage,typeimage,savetypeconfig,typeconfig,chassispid,chassisvid,routename,totalmemory,totalmemory2,routename2,routeredundant,routedesc,routeprodid,routeprodid2,routeverid,routeverid2,embedredundant,embedname,embedname2,embeddesc,embedproid,embedproid2,embedverid,embedverid2,embednitrox,embedocteon,embednotrox2,embedocteon2,linename,linedesc,lineproid,lineverid,linenum,modname,moddesc,modproid,modverid,profam,servertype,mgntint,mgntint2,mgntmask,mgntmask2,mgntipv6,mgntipv62,mgntipv5pref,mgntipv6pref,protype,cpucore,prosock,corespersock,logpro,conip,titanname,prodfam,propid,connet,ipv6,key,admin,access,account,accountport,authendir,authenport,behost,configmethod,configname,configfile,configpath,cleartype,coaport,com,connectivity,dbname,dbtablename,dbtype,defaultsm,devlist,extip,enpass,features,func,logdir,nrcmd,nrcmduser,port,redirport,redirlogport,rootdir,serverdir,ventype,snapshot,domname,application,sequence,rp0con,rp1con,src,myportArr,stats);
		if (cnt2 == myArray2 - 1) {
			setLinkInformation();
		}
	}
}
/*
 *
 *  FUNCTION NAME : setDeviceValuesFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get device values from xml
 *  PARAMETERS    : device
 *
 */
function setDeviceValuesFromXML(device){
	var chassis = device.getAttribute("ChassisAddress");
	var loop = device.getAttribute("LoopBackAddress");
	var user = device.getAttribute("Username");
	var esxi = device.getAttribute("ESXIUsername");
	var pass = device.getAttribute("Password");
	var esxipass = device.getAttribute("ESXIPassword");
	var objpath = device.getAttribute("ObjectPath");
	var stats = device.getAttribute("Status");
	var devicename = device.getAttribute("DeviceName");
	var devname = device.getAttribute("ObjectPath");
	var deviceid = device.getAttribute("DeviceId");
	var red = device.getAttribute("RedFlag");
	var model = device.getAttribute("ModelType");
	var dnd = device.getAttribute("ModelType");
	var devtype = device.getAttribute("DeviceType");
	var deviceresid = device.getAttribute("DeviceResId");
	var macadd = device.getAttribute("DeviceFlag");
	var deviceflag = device.getAttribute("DeviceFlag");
	var host = device.getAttribute("HostName");
	var update = device.getAttribute("UpdateFlag");
	var media = device.getAttribute("MediaType");
	var portname = device.getAttribute("PortName");
	var dbresid = device.getAttribute("DBResId");
	var contype = device.getAttribute("ConnectivityType");
	var portspeed = device.getAttribute("PortSpeed");
	var portband = device.getAttribute("PortBandWidth");
	var exactname = device.getAttribute("ExactHostName");
	var loadflag = device.getAttribute("LoadFlag");
	var portview = device.getAttribute("PortView");
	var discover = device.getAttribute("Discovery");
	var routepro = device.getAttribute("RouteProcessor");
	var embedpro = device.getAttribute("EmbeddedProcessor");
	var linecard = device.getAttribute("LineCard");
	var exactip = device.getAttribute("ExactIpAdd");
	var power = device.getAttribute("PowerStatus");
	var application = device.getAttribute("Application");
	var protoflag = device.getAttribute("ProtoTypeFlag");
	var switchport = device.getAttribute("SwitchPort");
	var mapname = device.getAttribute("MapName");
	var control = device.getAttribute("ControllerInfo");
	chassis = checkValue(chassis);
	loop = checkValue(loop);
	user = checkValue(user);
	esxi = checkValue(esxi);
	pass = checkValue(pass);
	esxipass = checkValue(esxipass);
	objpath = checkValue(objpath);
	stats = checkValue(stats);
	devicename = checkValue(devicename);
	devname = checkValue(devname);
	deviceid = checkValue(deviceid);
	red = checkValue(red);
	model = checkValue(model);
	dnd = checkValue(dnd);
	devtype = checkValue(devtype);
	deviceresid = checkValue(deviceresid);
	macadd = checkValue(macadd);
	deviceflag = checkValue(deviceflag);
	host = checkValue(host);
	update = checkValue(update);
	media = checkValue(media);
	portname = checkValue(portname);
	dbresid = checkValue(dbresid);
	contype = checkValue(contype);
	portspeed = checkValue(portspeed);
	portband = checkValue(portband);
	exactname = checkValue(exactname);
	loadflag = checkValue(loadflag);
	portview = checkValue(portview);
	discover = checkValue(discover);
	routepro = checkValue(routepro);
	embedpro = checkValue(embedpro);
	linecard = checkValue(linecard);
	exactip = checkValue(exactip);
	power = checkValue(power);
	application = checkValue(application);
	protoflag = checkValue(protoflag);
	switchport = checkValue(switchport);
	mapname = checkValue(mapname);
	control = checkValue(control);
	storeChildDevicesInformation(chassis,loop,user,esxi,pass,esxipass,objpath,stats,devicename,devname,deviceid,red,model,dnd,devtype,deviceresid,macadd,deviceflag,host,update,media,portname,dbresid,contype,portspeed,portband,exactname,loadflag,portview,discover,routepro,embedpro,linecard,exactip,power,application,protoflag,switchport,mapname,control);
}
/*
 *
 *  FUNCTION NAME : setRackValuesFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get rack values from xml
 *  PARAMETERS    : rack
 *
 */
function setRackValuesFromXML(rack,mConfig){
	var rackdevid = rack.getAttribute("RackDeviceId");
	var prodnum = rack.getAttribute("RackDeviceId");
	var swver = rack.getAttribute("SwVersion");
	var rackname = rack.getAttribute("RackName");
	var objpath = rack.getAttribute("ObjectPath");
	var hwver = rack.getAttribute("HwVersion");
	var num = rack.getAttribute("Number");
	var portgrp = rack.getAttribute("PortGroupSize");
	var ios = rack.getAttribute("Ios");
	var moddesc = rack.getAttribute("ModuleDescription");
	var sernum = rack.getAttribute("SerialNumber");
	var model = rack.getAttribute("ModelType");
	var board = rack.getAttribute("BoardType");
	var rackdev = rack.getAttribute("RackDevName");
	var rackid = rack.getAttribute("RackId");
	var mapname = rack.getAttribute("MapName");
	var redflag = rack.getAttribute("RedFlag");
	var orange = rack.getAttribute("OrangeFlag");
	rackdevid = checkValue(rackdevid);
	prodnum = checkValue(prodnum);
	swver = checkValue(swver);
	rackname = checkValue(rackname);
	hwver = checkValue(hwver);
	portgrp = checkValue(portgrp);
	ios = checkValue(ios);
	moddesc = checkValue(moddesc);
	sernum = checkValue(sernum);
	model = checkValue(model);
	board = checkValue(board);
	rackid = checkValue(rackid);
	mapname = checkValue(mapname);
	redflag = checkValue(redflag);
	orange = checkValue(orange);
	if(rackdev == "" || rackdev == "null" || rackdev == null){
		rackdev = mConfig.getAttribute("ObjectPath");
	}
	storeRackInformation(rackdevid,prodnum,swver,rackname,objpath,hwver,num,portgrp,ios,moddesc,sernum,model,board,rackdev,rackid,mapname,redflag,orange);
}
/*
 *
 *  FUNCTION NAME : setSlotValuesFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get rack values from xml
 *  PARAMETERS    : slot
 *
 */
function setSlotValuesFromXML(slot,mConfig){
	var slotdevid = slot.getAttribute("SlotDeviceId");
	var prodnum = slot.getAttribute("ProductNumber");
	var slotname = slot.getAttribute("SlotName");
	var objpath = slot.getAttribute("ObjectPath");
	var num = slot.getAttribute("Number");
	var moddesc = slot.getAttribute("ModuleDescription");
	var sernum = slot.getAttribute("SerialNumber");
	var model = slot.getAttribute("ModelType");
	var board = slot.getAttribute("BoardType");
	var slotdev = slot.getAttribute("SlotDevName");
	var slotid = slot.getAttribute("SlotId");
	var redflag = slot.getAttribute("RedFlag");
	slotdevid = checkValue(slotdevid);
	prodnum = checkValue(prodnum);
	slotname = checkValue(slotname);
	num = checkValue(num);
	moddesc = checkValue(moddesc);
	sernum = checkValue(sernum);
	model = checkValue(model);
	board = checkValue(board);
	slotid = checkValue(slotid);
	redflag = checkValue(redflag);
	if (slotdev == "" || slotdev == "null" || slotdev == null){
		slotdev = mConfig.getAttribute("ObjectPath");
	}
	storeSlotInformation(slotdevid,prodnum,slotname,objpath,num,moddesc,sernum,model,board,slotdev,slotid,redflag);
}
/*
 *
 *  FUNCTION NAME : setModuleValuesFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get module values from xml
 *  PARAMETERS    : module
 *
 */
function setModuleValuesFromXML(module,mConfig){
	var moduleid = module.getAttribute("ModuleId");
	var moduleresid = module.getAttribute("ModuleResId");
	var moduleslotid = module.getAttribute("ModuleSlotId");
	var num = module.getAttribute("Number");
	var moddesc = module.getAttribute("ModuleDescription");
	var sernum = module.getAttribute("SerialNumber");
	var modulename = module.getAttribute("ModuleName");
	var moddevname = module.getAttribute("ModuleDevName");
	var redflag = module.getAttribute("RedFlag");
	var object = module.getAttribute("ObjectPath");
	moduleid = checkValue(moduleid);
	moduleresid = checkValue(moduleresid);
	moduleslotid = checkValue(moduleslotid);
	num = checkValue(num);
	moddesc = checkValue(moddesc);
	sernum = checkValue(sernum);
	modulename = checkValue(modulename);
	redflag = checkValue(redflag);
	if(moddevname == "" || moddevname == "null" || moddevname == null){
		moddevname = mConfig.getAttribute("ObjectPath");
	}
	storeModuleInformation(moduleid,moduleresid,moduleslotid,num,moddesc,sernum,modulename,object,moddevname,redflag);
}
/*
 *
 *  FUNCTION NAME : setPicValuesFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get module values from xml
 *  PARAMETERS    : pic
 *
 */
function setPicValuesFromXML(pic,mConfig){
	var picid = pic.getAttribute("PICId");
	var picresid = pic.getAttribute("PICResId");
	var picslotid = pic.getAttribute("PICSlotId");
	var ver = pic.getAttribute("Version");
	var partnum = pic.getAttribute("PartNumber");
	var num = pic.getAttribute("Number");
	var desc = pic.getAttribute("Description");
	var sernum = pic.getAttribute("SerialNumber");
	var jedec = pic.getAttribute("JedecCode");
	var assver = pic.getAttribute("AssemblyVersion");
	var assflag = pic.getAttribute("AssemblyFlags");
	var assid = pic.getAttribute("AssemblyId");
	var date = pic.getAttribute("Date");
	var eeprom = pic.getAttribute("EepromVersion");
	var picname = pic.getAttribute("PicName");
	var objpath = pic.getAttribute("ObjectPath");
	var picdevname = pic.getAttribute("PicDevName");
	var redflag = pic.getAttribute("RedFlag");
	var orange = pic.getAttribute("OrangeFlag");
	picid = checkValue(picid);
	picresid = checkValue(picresid);
	picslotid = checkValue(picslotid);
	ver = checkValue(ver);
	partnum = checkValue(partnum);
	num = checkValue(num);
	desc = checkValue(desc);
	sernum = checkValue(sernum);
	jedec = checkValue(jedec);
	assver = checkValue(assver);
	assflag = checkValue(assflag);
	assid = checkValue(assid);
	date = checkValue(date);
	eeprom = checkValue(eeprom);
	picname = checkValue(picname);
	redflag = checkValue(redflag);
	if(picdevname == "" || picdevname == "null" || picdevname == null){
		picdevname = mConfig.getAttribute("ObjectPath");
	}
	storePicInformation(picid,picresid,picslotid,ver,partnum,num,desc,sernum,jedec,assver,assflag,assid,date,eeprom,picname,objpath,picdevname,redflag,orange);
}
/*
 *
 *  FUNCTION NAME : setPortValuesFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get port values from xml
 *  PARAMETERS    : port
 *
 */
function setPortValuesFromXML(port,mConfig){
	var switchportinfo = port.getAttribute("SwitchPortInfo");
	var switchinfo = port.getAttribute("SwitchInfo");
	var vlanid = port.getAttribute("VlanId");
	var vlanname = port.getAttribute("VlanName");
	var phyport = port.getAttribute("PhysicalPortType");
	var portresid = port.getAttribute("PortResId");
	var portslotid = port.getAttribute("PortSlotId");
	var portid = port.getAttribute("PortId");
	var num = port.getAttribute("Number");
	var portname = port.getAttribute("PortName");
	var update = port.getAttribute("UpdateFlag");
	var portflag = port.getAttribute("PortFlag");
	var objpath = port.getAttribute("ObjectPath");
	var avail = port.getAttribute("Availability");
	var type = port.getAttribute("Type");
	var red = port.getAttribute("RedFlag");
	var partner = port.getAttribute("PartnerPort");
	var bandwidth = port.getAttribute("Bandwidth");
	var speed = port.getAttribute("Speed");
	var enableport = port.getAttribute("EnablePort");
	var exclusive = port.getAttribute("Exclusivity");
	var tunnelservice = port.getAttribute("TunnelServicesPIC");
	var multiservice = port.getAttribute("MultiServicesPIC");
	var porttype = port.getAttribute("PortType");
	var portcheck = port.getAttribute("PortCheck");
	var partnerportdev = port.getAttribute("PartnerPortDevice");
	var partnerinfo = port.getAttribute("PartnerInformation");
	var desc = port.getAttribute("Description");
	var media = port.getAttribute("MediaType");
	var auto = port.getAttribute("AutoNegotiation");
	var duplex = port.getAttribute("Duplexity");
	var portconfig = port.getAttribute("PortConfig");
	var phy = port.getAttribute("Phy");
	var spa = port.getAttribute("spa");
	var carrier = port.getAttribute("CarrierCard");
	var portcard = port.getAttribute("PortCard");
	var ethmode = port.getAttribute("EthMode");
	var speed2 = port.getAttribute("Speed2");
	var sequence = port.getAttribute("Sequence");
	var savecon = port.getAttribute("SaveConnectivity");
	var devName = port.getAttribute("PortDevName");
	switchportinfo = checkValue(switchportinfo);
	switchinfo = checkValue(switchinfo);
	vlanid = checkValue(vlanid);
	vlanname = checkValue(vlanname);
	phyport = checkValue(phyport);
	portresid = checkValue(portresid);
	portslotid = checkValue(portslotid);
	portid = checkValue(portid);
	num = checkValue(num);
	portname = checkValue(portname);
	update = checkValue(update);
	portflag = checkValue(portflag);
	avail = checkValue(avail);
	type = checkValue(type);
	red = checkValue(red);
	partner = checkValue(partner);
	bandwidth = checkValue(bandwidth);
	speed = checkValue(speed);
	enableport = checkValue(enableport);
	exclusive = checkValue(exclusive);
	tunnelservice = checkValue(tunnelservice);
	multiservice = checkValue(multiservice);
	porttype = checkValue(porttype);
	portcheck = checkValue(portcheck);
	partnerportdev = checkValue(partnerportdev);
	partnerinfo = checkValue(partnerinfo);
	desc = checkValue(desc);
	media = checkValue(media);
	auto = checkValue(auto);
	duplex = checkValue(duplex);
	portconfig = checkValue(portconfig);
	phy = checkValue(phy);
	spa = checkValue(spa);
	carrier = checkValue(carrier);
	portcard = checkValue(portcard);
	ethmode = checkValue(ethmode);
	speed2 = checkValue(speed2);
	sequence = checkValue(sequence);
	savecon = checkValue(savecon);
	if(devName == "" || devName == "null" || devName == null){
		devName = mConfig.getAttribute("ObjectPath");
	}
	storePortInformation(switchportinfo,switchinfo,vlanid,vlanname,phyport,portresid,portslotid,portid,num,portname,update,portflag,objpath,avail,type,red,partner,bandwidth,speed,enableport,exclusive,tunnelservice,multiservice,porttype,portcheck,partnerportdev,partnerinfo,desc,media,auto,duplex,portconfig,phy,spa,carrier,portcard,ethmode,speed2,sequence,savecon,devName);
	portArr2.push(portArr[portArr.length-1]);
}
/*
 *
 *  FUNCTION NAME : setLinkInformation 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : James Turingan
 *  REVISION DATE : December 12, 2013
 *  REVISION #    : 
 *  DESCRIPTION   : get all link information
 *  PARAMETERS    : 
 *
 */
function setLinkInformation(){
	lineNameArr = [];
	if(portmapArr.length){
		for(var t=0; t<portmapArr.length; t++){
			var portmap = portmapArr[t];
			setPortmapValuesFromXML(portmap);
		}
	}
	console.log("devicesArr.length >>" + devicesArr.length);
	for(var t=0; t<devicesArr.length; t++){
		if (devicesArr[t].Status != undefined && devicesArr[t].Status != null && devicesArr[t].Status.toLowerCase() == "reserved" && devicesArr[t].Source != "") {
			modelsrc = getModel(devicesArr[t])
			var deviceObj2 = new Image();// devicesArr[t].Source
			deviceObj2.src = modelsrc;
			deviceObj2.onload = function() {
				globalFlagCommitted = true;
				rebuilCanvas();
			};
		    devicesArr[t].Source = deviceObj2;
		}else if(devicesArr[t].Source != null && devicesArr[t].Source != undefined && devicesArr[t].Source != ""){
			rebuilCanvas();
		}
	}
	if(devicesArr.length == 0){
		rebuilCanvas();
	}
}
/*
 *
 *  FUNCTION NAME : setPortmapValuesFromXML 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get portmap values from xml 
 *  PARAMETERS    : portmnap 
 *
 */
function setPortmapValuesFromXML(portmap){
	var name = portmap.getAttribute("Name");
	var sourceport = portmap.getAttribute("Source");
	var destport = portmap.getAttribute("Destination");
	var sourceArr = sourceport.split(".");
	var destArr = destport.split(".");
	var srcDevPath = sourceArr[0];
	var dstDevPath = destArr[0];
	var sourcedev;
	var destdev;
	for(var t=0; t<devicesArr.length; t++){
		if(devicesArr[t].ObjectPath == srcDevPath){
			sourcedev = devicesArr[t];
			break;
		}
	}
	for(var t=0; t<devicesArr.length; t++){
		if(devicesArr[t].ObjectPath == dstDevPath){
			destdev = devicesArr[t];
			break;
		}
	}
	var id = portmap.getAttribute("Id");
	var srcip = portmap.getAttribute("SrcIp");
	var dstip = portmap.getAttribute("DstIp");
	var portid = portmap.getAttribute("Port1Id");
	var portid2 = portmap.getAttribute("Port2Id");
	var dest = portmap.getAttribute("Destination");
	var source = portmap.getAttribute("Source");
	var linkname = portmap.getAttribute("LinkName");
	var checkcon = portmap.getAttribute("CheckConnectivity");
	var condone = portmap.getAttribute("ConnectivityDone");
	var srcslot = portmap.getAttribute("SrcMonitorSlot");
	var dstslot = portmap.getAttribute("DstMonitorSlot");
	var srcport = portmap.getAttribute("SrcMonitorPort");
	var dstport = portmap.getAttribute("DstMonitorPort");
	var portmonitor = portmap.getAttribute("PortMonitorEnable");
	var conflag = portmap.getAttribute("ConnectivityFlag");
	name = checkValue(name);
	sourceport = checkValue(sourceport);
	destport = checkValue(destport);
	id = checkValue(id);
	srcip = checkValue(srcip);
	dstip = checkValue(dstip);
	portid = checkValue(portid);
	portid2 = checkValue(portid2);
	dest = checkValue(dest);
	source = checkValue(source);
	linkname = checkValue(linkname);
	checkcon = checkValue(checkcon);
	condone = checkValue(condone);
	srcslot = checkValue(srcslot);
	dstslot = checkValue(dstslot);
	srcport = checkValue(srcport);
	dstport = checkValue(dstport);
	portmonitor = checkValue(portmonitor);
	conflag = checkValue(conflag);
	if(lineNameArr.indexOf(name) == -1){
		lineNameArr.push(name);
		storeLinkInformation(name,sourcedev,destdev,sourceport,destport,id,srcip,dstip,portid,portid2,dest,source,linkname,checkcon,condone,srcslot,dstslot,srcport,dstport,portmonitor,conflag);
	}
}

/*
 *
 *  FUNCTION NAME : getModel 
 *  AUTHOR        : Ray Martinez
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get model 
 *  PARAMETERS    : device
 *
 */
function getModel(device) {

	iconmodel = "";
	switch (device.Model.toLowerCase()) {
		case "asr1001":
		case "asr1002":
		case "asr1001-x":
		case "asr1002-x":
		case "asr1006":
		case "asr1004":
		case "asr1001-f":
		case "asr10013":
			iconmodel = "img/device/qfp.png";
			break;
			
		case "cisco3925-chassis":
		case "cisco2951/k9":
		case "cisco3925-chassis":
		case "7206vx":
		case "7301":
		case "cisco2911/k9":
		case "cisco2921/k9":
		case "c892fsp-k9":
		case "892":
		case "c10008":
		case "ws-c3750x24p":
		case "ws-c3750x-24":
		case "air-cap3602e-a-k9":
		case "ws-c3750":
			iconmodel = "img/device/cisco_vivid2.png";
			break;
		case "avalanche":
		case "optixia xm12":
		case "n2x":
		case "2900":
		case "optixia x16":
			iconmodel = "img/device/cisco_vivid2.png";
			break;
		default:
			iconmodel = "img/device/cisco_vivid2.png";
	}

	return iconmodel
}
/*
 *
 *  FUNCTION NAME : checkValue 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 13, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : check null value
 *  PARAMETERS    : value 
 *
 */
function checkValue(value){
	if(value == "" || value == "null" || value == null){
		value = "";
	}
	return value;
}
/*
 *
 *  FUNCTION NAME : checkRackDevicePath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get rack of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkRackDevicePath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].RackDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : checkSlotDevPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get slot of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkSlotDevPath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].SlotDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : checkModuleDevPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get module of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkModuleDevPath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].ModuleDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : checkPicDevPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get pic of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkPicDevPath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].PicDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : checkPortDevPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get port of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkPortDevPath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].PortDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
