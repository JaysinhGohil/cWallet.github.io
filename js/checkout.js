//UI validations
jQuery(document).ready(function() {
    // setup card inputs;
    jQuery('#citrusNumber').payment('formatCardNumber');
    jQuery('#citrusExpiry').payment('formatCardExpiry');
    jQuery('#citrusCvv').payment('formatCardCVC');

    jQuery('#citrusNumber').keyup(function(){
        var cardNum = jQuery('#citrusNumber').val().replace(/\s+/g, '');
        var type = jQuery.payment.cardType(cardNum);
        //jQuery("#citrusNumber").css("background-image", "url(images/" + type + ".png)");       
        jQuery("#citrusScheme").val(type);
		
		switch (type) {
			 case 'visa':
			  type = 'VISA';
			  break;
			 case 'mastercard' :
			 case 'master card' :
			  type = 'MCRD';
			  break;
			 case 'maestro':
			 case 'maestro card' :
			  type = 'MTRO';
			  break;
			 case 'amex':
			  type = 'AMEX';
			  break;
			 case 'dinersclub' :
			 case 'diners club':
			  type = 'DINERS';
			  break;
			 case 'master card' :
			  type = 'MCRD';
			  break;
			 case 'rupay card' :
			  type = 'RPAY';
			  break;
			 default: type = "blank";
		}
		if(type != "blank"){
			$("#checkOutScheme").attr("src","images/"+type+".png");
			$("#checkOutScheme").show(1000);
			if (type == "MTRO"){
				$("#checkOutMestroError").addClass( "animationMestroError" );
			}
		}
		else{
			$("#checkOutScheme").attr("src","images/blank.png");
			$("#checkOutScheme").hide();
			$("#checkOutMestroError").removeClass( "animationMestroError" );
		}
        if(type!='AMEX')
            jQuery("#citrusCvv").attr("maxlength","3");
        else
            jQuery("#citrusCvv").attr("maxlength","4");
    });

});
jQuery(document).ready(function() {
	$(".checkOutDemo").css({"transform": "all 1s ease, opacity 1.5s ease", "transition": "all 1s ease, opacity 1.5s ease","transform": "rotateY(360deg)"});
	$(".checkOutDemo").css({"-webkit-transform": "all 1s ease, opacity 1.5s ease", "transition": "all 1s ease, opacity 1.5s ease","-webkit-transform": "rotateY(360deg)"});
	$(".checkOutDemo").css({"-webkit-transform": "all 1s ease, opacity 1.5s ease", "transition": "all 1s ease, opacity 1.5s ease","-webkit-transform": "rotateY(360deg)"});
	});