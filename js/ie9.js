$(function() {
	$('[autofocus]:not(:focus)').eq(0).focus();
});
(function ($) {
	$.support.placeholder = ('placeholder' in document.createElement('input'));
})(jQuery);

 //fix for IE9
 $(function () {
	 if (!$.support.placeholder) {
		 $("[placeholder]").focus(function () {
			 if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
		 }).blur(function () {
			 if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
		 }).blur();

		 $("[placeholder]").parents("form").submit(function () {
			 $(this).find('[placeholder]').each(function() {
				 if ($(this).val() == $(this).attr("placeholder")) {
					 $(this).val("");
				 }
			 });
		 });
	 }
	 
 });
/*  $(document).ready(function(){
    $(".checkOutShadow").remove();
}) */