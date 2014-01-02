function changeComponent(num){
	for(var i = 0; i < 8; i++){
		if(i == num){
		console.log(i!=num,num);
			$('#domain-table'+i).removeAttr('style');
			$('#domain-table'+i+'-popup').removeAttr('style','display:none');
		}else{
			$('#domain-table'+i).attr('style','display:none');
			$('#domain-table'+i+'-popup').attr('style','display:none');
		}
	}	
/*	switch (val){
		case "0": // shows devices
			$('#domainDevices-table')	
		break;
		case "1":
	
		break;
	}
*/
}

