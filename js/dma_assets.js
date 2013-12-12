//On Page Load
$(document).ready(function(){
	//Check for params
	if(source.toLowerCase().indexOf("?src=test")>=0){
		//If params set, then hide page
		$('#PromotionalSection').hide();
	}
});