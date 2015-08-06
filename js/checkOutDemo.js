$( document ).ready(function() {   
	checkTabMgnt(2,'citrusCardPay','Credit');
	$(".checkOutBtn").on("click",function(e){
		var id=$(this).attr("id");
		if(id=="citrusCardPayButton"){
			makePayment("card");
		}else{
			makePayment("netbanking");
		}
	});
});
function checkTabMgnt(number,btnId,cType){
	$(".checkOutNav ul li").removeClass("checkOutSelectedTab");
	$("#navigationTab-"+number).addClass('checkOutSelectedTab');
	$("#citrusCardType").val(cType);
	$(".PO-1,.PO-2,.PO-3").hide();	
	$("#checkOutMestroError").removeClass( "animationMestroError" );
	$(".cardTypeCantainer").fadeOut();
	$(".PO-"+number).show();
	$(".empty_val").val('');
	$("#checkOutScheme").hide();
	$(".cardTypeCantainer").fadeIn(1000).text(cType+" Card Details");
	if(btnId == "citrusCardPay"){
 		$(".checkOutBtn").attr('id', btnId+'Button');	
		$(".checkOutBtn").prop('disabled', false);
	}
	else{
		$(".checkOutBtn").attr('id', btnId+'Button');	
		$(".checkOutBtn").prop('disabled', false);		
	}	
}
$(".checkOutBtn").on("click",function() {
	var flag = 1;
	if( $('.checkOutBtn').attr('id') == "citrusCardPayButton"){
		var ide = $("#citrusExpiry").val();
			ide = ide.substring(0,5).concat("20"+ide.substr(ide.length - 2))
		if(ide.length==9){
			$("#citrusExpiry").val(ide);
		}
		try{	 
			var resp = CitrusPay.Validators.RegularExpressionValidator($("#citrusEmail").val(), 'Email', "");	 
		}
		catch(e){ console.log(e.message);
			flag = 0;
			$("#checkOutEmailError").html(e.message.split(':')[0]).show(500);
			$("#citrusEmail").css("border","2px solid #e78484");
		}
		try{
			var resp = CitrusPay.Validators.CardNumberValidator($("#citrusNumber").val(), 'CardNumber', "");	 
		}
		catch(e){ console.log(e.message);
			flag = 0;
			$("#checkOutCardError").html(e.message.split(':')[0]).show(500);
			$("#citrusNumber").css("border-bottom","2px solid #e78484");
		}
		try{
			var respe = CitrusPay.Validators.RegularExpressionValidator($("#citrusNumber").val().replace(/\s+/g, ''), 'CardNumber', "");
		}
		catch(e){ console.log(e.message);
			flag = 0;
			$("#checkOutCardError").html(e.message.split(':')[0]).show(500);
			$("#citrusNumber").css("border-bottom","2px solid #e78484");
		}
		try{
			var respr = CitrusPay.Validators.RequiredValidator($("#citrusNumber").val(), "");			
		}
		catch(e){ console.log(e.message);
			flag = 0;
			$("#checkOutCardError").html(e.message).show(500);
			$("#citrusNumber").css("border-bottom","2px solid #e78484");
		}
		if($("#citrusScheme").val() !== 'maestro'){
			try{
				var resp = CitrusPay.Validators.DateValidator($("#citrusExpiry").val().replace(/\s+/g, ''), "");			
			}
			catch(e){ console.log(e.message);
				flag = 0;
				var getDate = $("#citrusExpiry").val();
				if(getDate.length==9){
					var getDateOfYear = getDate.substr(getDate.length - 2);
					$("#citrusExpiry").val(getDate.slice(0,-4).concat(getDateOfYear));
				}
				$("#checkOutExpiryError").html(e.message.split(':')[0]).show(500).css({"text-align": "center", "text-indent": "26px"});
				$("#citrusExpiry").css("border-bottom","2px solid #e78484");
			}
			try{
				var respr = CitrusPay.Validators.RequiredValidator($("#citrusExpiry").val(), "");			
			}
			catch(e){ console.log(e.message);
				flag = 0;
				var getDate = $("#citrusExpiry").val();
				if(getDate.length==9){
					var getDateOfYear = getDate.substr(getDate.length - 2);
					$("#citrusExpiry").val(getDate.slice(0,-4).concat(getDateOfYear));
				}
				$("#checkOutExpiryError").html(e.message.split(':')[0]).show(500);
				$("#citrusExpiry").css("border-bottom","2px solid #e78484");
			}	
		
			try{
				var respe = CitrusPay.Validators.RegularExpressionValidator($("#citrusCvv").val(), 'CVV', "");		
			}
			catch(e){ console.log(e.message);
				flag = 0;
				$("#checkOutCvvError").html(e.message.split(':')[0]).show(500).css("text-indent","-19px");
				$("#citrusCvv").css("border-bottom","2px solid #e78484");
			}
			try{
				var resp = CitrusPay.Validators.RequiredValidator($("#citrusCvv").val(), "");			
			}
			catch(e){ console.log(e.message);
				flag = 0;
				$("#checkOutCvvError").html(e.message.split(':')[0]).show(500);
				$("#citrusCvv").css("border-bottom","2px solid #e78484");
			}	
		}
	}
	else{
		try{	 
			var resp = CitrusPay.Validators.RegularExpressionValidator($("#citrusEmail").val(), 'Email', "");	 
		}
		catch(e){ console.log(e.message);
			flag = 0;
			$("#checkOutEmailError").html(e.message.split(':')[0]).show(500);
			$("#citrusEmail").css("border","2px solid #e78484");
		}
		try{
			
			if($("#citrusAvailableOptions :selected").text() == "Select other banks")  throw "Please select bank from above";
		}
		catch(e){		
			flag = 0;
			$("center select").css("border","1px solid #e78484");
			$("#checkOutNetError").html(e).show(500);
		}
	}
	if(flag == 1){
		$(".checkOutHeader").addClass("rotateAnimation");
		$(".disableBlock").css('zIndex', '10000');
		$(".emailFld, .checkOutBody, .checkOutBtn").css('opacity', '0.3');
	}
});
/* .............................. card validation ............................ */

	/* $("#citrusNumber").focusout(function() {
	try{
		var resp = CitrusPay.Validators.CardNumberValidator($("#citrusNumber").val(), 'CardNumber', "");	 
	}
	catch(e){ console.log(e.message);
		$("#checkOutCardError").html(e.message.split(':')[0]).show(500);
		$("#citrusNumber").css("border-bottom","2px solid #e78484");
	}
	try{
		var respe = CitrusPay.Validators.RegularExpressionValidator($("#citrusNumber").val().replace(/\s+/g, ''), 'CardNumber', "");
	}
	catch(e){ console.log(e.message);
		$("#checkOutCardError").html(e.message.split(':')[0]).show(500);
		$("#citrusNumber").css("border-bottom","2px solid #e78484");
	}
	try{
		var respr = CitrusPay.Validators.RequiredValidator($("#citrusNumber").val(), "");			
	}
	catch(e){ console.log(e.message);
		$("#checkOutCardError").html(e.message).show(500);
		$("#citrusNumber").css("border-bottom","2px solid #e78484");
	}		
}); */
$("#citrusEmail").focusin(function() {	
	$("#checkOutEmailError").hide(500);
	$("#citrusEmail").css("border","1px solid rgba(0,0,0,0.1)");	 
});
$("#citrusNumber").focusin(function() {	
	$("#checkOutCardError").hide(500);
	$("#citrusNumber").css("border-bottom","1px solid rgba(0,0,0,0.1)");	 
});
$(".NBcheckOutList, select#citrusAvailableOptions").on("click",function() {	
	$("#checkOutNetError").hide(500);
	$("center select").css("border","1px solid rgb(169, 169, 169)");	 
});
/* .............................. expary validation ............................ */
/* $("#citrusExpiry").focusout(function() {
	if($("#citrusScheme").val() !== 'MTRO'){
		try{
			var resp = CitrusPay.Validators.DateValidator($("#citrusExpiry").val().replace(/\s+/g, ''), "");			
		}
		catch(e){ console.log(e.message);
			$("#checkOutExpiryError").html(e.message.split(':')[0]).show(500).css({"text-align": "center", "text-indent": "26px"});
			$("#citrusExpiry").css("border-bottom","2px solid #e78484");
		}
		try{
			var respr = CitrusPay.Validators.RequiredValidator($("#citrusExpiry").val(), "");			
		}
		catch(e){ console.log(e.message);
			$("#checkOutExpiryError").html(e.message.split(':')[0]).show(500);
			$("#citrusExpiry").css("border-bottom","2px solid #e78484");
		}	
	}
});
$("#citrusExpiry").keyup(function() {
	if($('#citrusExpiry').val().replace(/\s+/g, '').length == 7){
		try{
			var resp = CitrusPay.Validators.DateValidator($("#citrusExpiry").val().replace(/\s+/g, ''), "");			
		}
		catch(e){ console.log(e.message);
			$("#checkOutExpiryError").html(e.message.split(':')[0]).show(500).css({"text-align": "center", "text-indent": "26px"});
			$("#citrusExpiry").css("border-bottom","2px solid #e78484");
		}
		try{
			var respr = CitrusPay.Validators.RequiredValidator($("#citrusExpiry").val(), "");			
		}
		catch(e){ console.log(e.message);
			$("#checkOutExpiryError").html(e.message.split(':')[0]).show(500);
			$("#citrusExpiry").css("border-bottom","2px solid #e78484");
		}	
	}
}); */

/* $("#citrusExpiry").keyup(function() {	
	if($('#citrusExpiry').val().replace(/\s+/g, '').length == 6){
		$("#checkOutExpiryError").hide(500);
		$("#citrusExpiry").css("border-bottom","1px solid rgba(0,0,0,0.1)");
	} 
}); */
$("#citrusExpiry").focusin(function() {	
		var getDate = $("#citrusExpiry").val();
		if(getDate.length==9){
			var getDateOfYear = getDate.substr(getDate.length - 2);
			$("#citrusExpiry").val(getDate.slice(0,-4).concat(getDateOfYear));
		}
		$("#checkOutExpiryError").hide(500);
		$("#citrusExpiry").css("border-bottom","1px solid rgba(0,0,0,0.1)");	 
});
/* .............................. cvv validation ............................ */
/* $("#citrusCvv").focusout(function() {
	if($("#citrusScheme").val() !== 'MTRO'){
		try{
			var respe = CitrusPay.Validators.RegularExpressionValidator($("#citrusCvv").val(), 'CVV', "");		
		}
		catch(e){ console.log(e.message);
			$("#checkOutCvvError").html(e.message.split(':')[0]).show(500).css("text-indent","-19px");
			$("#citrusCvv").css("border-bottom","2px solid #e78484");
		}
		try{
			var resp = CitrusPay.Validators.RequiredValidator($("#citrusCvv").val(), "");			
		}
		catch(e){ console.log(e.message);
			$("#checkOutCvvError").html(e.message.split(':')[0]).show(500);
			$("#citrusCvv").css("border-bottom","2px solid #e78484");
		}	
	}
}); */
$("#citrusCvv").focusin(function() {	
		$("#checkOutCvvError").hide(500);
		$("#citrusCvv").css("border-bottom","1px solid rgba(0,0,0,0.1)");	 
});

/* .............................. card holder name validation ............................ */

/* $("#citrusCardHolder").focusout(function() {
	try{
		var respe = CitrusPay.Validators.RegularExpressionValidator($("#citrusCardHolder").val(), 'Name', "");			
	}
	catch(e){ console.log(e.message);
		$("#checkOutCardHolderError").html(e.message.split(':')[0]).show(500);
		$("#citrusCardHolder").css("border-bottom","2px solid #e78484");
	}
	try{
		var resp = CitrusPay.Validators.RequiredValidator($("#citrusCardHolder").val(), "");			
	}
	catch(e){ console.log(e.message);
		$("#checkOutCardHolderError").html(e.message.split(':')[0]).show(500);
		$("#citrusCardHolder").css("border-bottom","2px solid #e78484");
	}
}); */
$("#citrusCardHolder").focusin(function() {	
		$("#checkOutCardHolderError").hide(500);
		$("#citrusCardHolder").css("border-bottom","1px solid rgba(0,0,0,0.1)");	 
});
/* $("#citrusCardHolder,#citrusCvv,#citrusExpiry,#citrusNumber").on("keyup change",function(){	
	if($("#citrusNumber").val()== "" || $("#citrusCardHolder").val()== "" || $("#citrusCvv").val()== "" || $("#citrusExpiry").val()== "" )
	{	
		$("#citrusCardPayButton").prop('disabled',true);
	}
	else
	{
		 disableBtnCard(); 
	}
}); 
 function disableBtnCard(){
		
	if($('#citrusNumber').val().replace(/\s+/g, '').length < 16 || $('#citrusCvv').val().length < 3 || $('#citrusExpiry').val().replace(/\s+/g, '').length <7){
		$("#citrusCardPayButton").prop('disabled',true);		
	}
	else if($('#checkOutCardError').is(':visible') || $('#checkOutCardHolderError').is(':visible') || $('#checkOutCvvError').is(':visible') || $('#checkOutExpiryError').is(':visible')){
		$("#citrusCardPayButton").prop('disabled',true);
	}
	else{
		$("#citrusCardPayButton").prop('disabled',false);
	}
} */
function checkOutSelectBankWithImg(e){
	$(e).find("input[type=radio]").prop("checked","checked");
}





/*............................................script for all Payment .......................................*/
//Library Error log functions
function citrusServerErrorMsg(errorResponse) {
}
function citrusClientErrMsg(errorResponse) {
}
//fetch the payment options
fetchPaymentOptions();

function handleCitrusPaymentOptions(citrusPaymentOptions){
	console.log(citrusPaymentOptions);
	var optionString = "<option selected disabled>Select other banks</option>";
	var netbankingOptions = citrusPaymentOptions.netBanking;
	for (var key in netbankingOptions) {
		var obj = netbankingOptions[key];
		optionString +=  '<option value ="' + obj.issuerCode + '">' + obj.bankName + '</option>';
	}
	jQuery('#citrusAvailableOptions').html(optionString);
}
$( ".NBcheckOutList").on("click",function(){
	var NBcheckedValImg = $( ".NBcheckOutList input[type='radio']:checked" ).val();
	$("#citrusAvailableOptions").find('option[value='+NBcheckedValImg+']').attr('selected','selected');
	$("#citrusNetbankingButton").prop('disabled',false);
});
$("select#citrusAvailableOptions").on("change",function(){
   var NBcheckedValDropDown = $( "#citrusAvailableOptions option:selected" ).val();
   $(".NBcheckOutList input[type='radio']").prop('checked',false);
   $(".NBcheckOutList").find('input[value='+NBcheckedValDropDown+']').prop('checked',true);
   $("#citrusNetbankingButton").prop('disabled',false);
});
function backToCheckout(){	
		$(".checkOutBody, .checkOutBtn, .emailFld").show();
		$(".checkOutBody2, .checkOutBtn2").hide();
}
/* $( "#myselect option:selected" ).text(); */