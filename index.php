<!DOCTYPE html>
		<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
		
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.3/styles/github.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">		
<html lang="en" ng-app="MyApp">
	<head>	
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/tab.css">
		<script src="js/jquery-1.11.1.min.js"></script>	
		
		
		
		<link rel="stylesheet" type="text/css" href="css/style2.css">	
		<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/hmac-sha1.js"></script>
			

	</head>
	
	
	
<?php


		/*  $access_key = "SBBQ6ZMAR9NQ3KWK5B3B"; //put your own access_key - found in admin panel sandbox nagama		 
         $secret_key = "9cb8adb33795e35b614dc48615cd2187f23d007e"; //put your own secret_key - found in admin panel sandbox nagama */	 $access_key = "18IZE4MDYJTCKUCJ3N67"; //put your own access_key - found in admin panel sandbox nagama		 
         $secret_key = "259fe54d60ff40cf244702ab62cc8befa1d3d11c"; //put your own secret_key - found in admin panel sandbox nagama
         		  
		 $baseUrl = "http://localhost";
		 //put your own return_url.php here.
												
		       $txn_id = time() . rand(10000,99999);
												
		        $value = "1.00"; //Charge amount is in INR by default
												
		  $data_string = "merchantAccessKey=" . $access_key
						. "&transactionId="  . $txn_id
						. "&amount="         . $value;
												
		    $signature = hash_hmac('sha1', $data_string, $secret_key);

		       $amount = array('value' => $value, 'currency' => 'INR');
		       
?>
	
	
	
	
	
	
	
	
	<body ng-controller="ScrollCtrl">
<!-- ................................................. header body  ................................................ -->
<!-- Top Scroll -->
		<div class="jsDemo">
		
		
		
			
	<!--------------------------------------hidden form fields-------------------------------------------------->
			
		<!-- <input id="citrusEmail" type="hidden" value="jaysinh.gohil@citruspay.com" />		 -->
		   
	       <!--unique transaction id-->
			<input type="hidden" readonly id="citrusMerchantTxnId" value="<?php echo $txn_id; ?>" placeholder="Merchant transaction id" />
			<!--Amount-->
			<input type="hidden" readonly  id="citrusAmount" value="1.00" />
			<!--Mobile number-->
			<input type="hidden" readonly id="citrusMobile" value="8856044553" />
			<!--First Name-->
			<input type="hidden" readonly id="citrusFirstName" value="Jaysinh" />
			<!--Last Name-->
			<input type="hidden" readonly id="citrusLastName" value="Gohil" />
			<!--Street1-->
			<input type="hidden" readonly id="citrusStreet1" value="karve chowk" />
			<!--Street2-->
			<input type="hidden" readonly id="citrusStreet2" value="karve nagar"/>
			<!--City-->
			<input type="hidden" readonly id="citrusCity" value="Pune"/>
			<!--State-->
			<input type="hidden" readonly id="citrusState" value="Maharashtra"/>
			<!--Country-->
			<input type="hidden" readonly id="citrusCountry" value="India"/>
			<!--Zip-->
			<input type="hidden" readonly id="citrusZip" value="411052"/>
			<!--Signature -->
			<input type="hidden" readonly id='citrusSignature' value="<?php echo $signature; ?>"  />
			<!--Return Url-->
			<input type="hidden" readonly id="citrusReturnUrl" value="http://icp.citruspay.com/DevelopersGuide/index.php#/citrusjs"  />
			<!--Custom parameter Name-->
			<input type="hidden" id="citrusCustomParamsName1" value="plan"  />
			<!--Custom parameter value-->
			<input type="hidden" id="citrusCustomParamsValue1" value="Rs. 10 plan"  />
			<!--Custom parameter Name-->
			<input type="hidden" id="citrusCustomParamsName2" value="productName"  />
			<!--Custom parameter value-->
			<input type="hidden" id="citrusCustomParamsValue2" value="HD Pendrive"  />
			<!--Card type-->
			<input type="hidden" id="citrusCardType" value=""/>
	<!--------------------------------------hidden form fields-------------------------------------------------->	
		<div class="checkOutDemo drop-shadow">
			<div class="disableBlock"></div>
			<div>
				<img class="checkOutHeader" src="images/logo@2x.png">
				<a ng-href="./index.html#/citrusjs" class="closeCheckout">
					<img class="closeCheckoutImg" src="images/close.png">
				</a>
			</div>
			<div class="checkOutSpace"></div>
			<div class="emailFld">
				<input id="citrusEmail" placeholder="Enter Your Email" type="text" class="checkOutInput emailInput" />
				<p id="checkOutEmailError" style="display:none" class="checkOutErrorMsg Email_error"></p>
			</div>
			<div class="checkOutBody">
<!--NAV-->		<div class="checkOutNav">
					<ul>
						<a><li onclick="checkTabMgnt(1,'citrusCardPay','Debit')" id="navigationTab-1">Debit Card</li></a>
						<a><li onclick="checkTabMgnt(2,'citrusCardPay','Credit')" id="navigationTab-2" >Credit Card</li></a>
						<a><li onclick="checkTabMgnt(3,'citrusNetbanking','Netbanking')" id="navigationTab-3" >Net Banking</li></a>
					</ul>
				</div>
				<div class="checkOutPaymentBody">
					<div class="PO-2 PO-1 checkOutCardBody" style="background-image: url('images/map.png');background-position: center;background-repeat: no-repeat;background-size: 250px;display:none;">
						<form>
							<div class="checkOutFieldBox checkOutSchemImg checkOutCardHeader">
								<span class="cardTypeCantainer"></span>
								<input type="hidden" id="citrusScheme">
								<img id="checkOutScheme" style="display:none" src="images/blank.png">
							</div>
							<div class="checkOutFieldBox" style="margin-bottom: 5px; margin-top: 20px;">
								<input id="citrusNumber" class="checkOutInput empty_val" type="text" placeholder="Card Number" style="background-image:none;">
							</div>
							<p id="checkOutCardError" style="display:none" class="checkOutErrorMsg card_error"></p>
							<div class="checkOutFieldBox">
								<input id="citrusExpiry" class="checkOutInput checkOutInputExpiary empty_val" maxlength="7" type="text" placeholder="MM / YY">
								<input type="password"  id="citrusCvv" class="checkOutInput checkOutInputCvv empty_val" placeholder="CVV" />
							</div>
							<span class="errorSpanBox">
								<p id="checkOutExpiryError" style="display:none" class="checkOutErrorMsg checkOutErrorMsgExpiry"></p>
								<p id="checkOutCvvError" style="display:none" class="checkOutErrorMsg checkOutErrorMsgCvv"></p>
							</span>
							<div class="checkOutFieldBox" style="margin-top: 5px;">
								<input id="citrusCardHolder" class="checkOutInput" type="hidden" value="Valuedalued Customer" />
							</div>
							<p id="checkOutCardHolderError" style="display:none" class="checkOutErrorMsg"></p>
						</form>
						<p id="checkOutMestroError" class="checkOutErrorMsg card_error">Expiry &amp; CVV not mandatory for maestro card</p>
					</div>
					
<!--NB Payment-->	<div class="PO-3 checkOutNetBankingBody navigationTab" style="display:none;">
						<div>
							<ul>
								<li class="NBcheckOutList" onclick="checkOutSelectBankWithImg(this)">
									<input style="position:absolute;opacity:0;" value="CID002" type="radio" name="checkOutNBradio" >
									<img src="images/axis.png">
									<span class="bank_label">AXIS</span>
								</li>
								<li class="NBcheckOutList" onclick="checkOutSelectBankWithImg(this)">
									<input style="position:absolute;opacity:0;" value="CID019" type="radio" name="checkOutNBradio" >
									<img src="images/bankofindia.png">
									<span class="bank_label">BOI</span>
								</li>
								<li class="NBcheckOutList" onclick="checkOutSelectBankWithImg(this)">
									<input style="position:absolute;opacity:0;" value="CID005" type="radio" name="checkOutNBradio" >
									<img src="images/sbi.png">
									<span class="bank_label">SBI</span>
								</li>
								<li class="NBcheckOutList" onclick="checkOutSelectBankWithImg(this)">
									<input style="position:absolute;opacity:0;" value="CID001" type="radio" name="checkOutNBradio" >
									<img src="images/icici.png">
									<span class="bank_label">ICICI</span>
								</li>
								<li class="NBcheckOutList" onclick="checkOutSelectBankWithImg(this)">
									<input style="position:absolute;opacity:0;" value="CID010" type="radio" name="checkOutNBradio" >
									<img src="images/hdfc.png" >
									<span class="bank_label">HDFC</span>
								</li>
								<li class="NBcheckOutList" onclick="checkOutSelectBankWithImg(this)">
									<input style="position:absolute;opacity:0;" value="CID006" type="radio" name="checkOutNBradio" >
									<img src="images/DeutscheBank.png">
									<span class="bank_label">Deutsche</span>
								</li>								
							</ul>
						</div>
					</div>
					<div class="PO-3" style="display:none;">
						<center>
							<div>
								<select id="citrusAvailableOptions">
								</select>
								<p id="checkOutNetError" class="checkOutErrorMsg NB_error"></p>
							</div>
						</center>
					</div>
				</div>
				
			</div>	
			<div class="checkOutBody2" style="display:none">
				<img src="" class="errorImg" />
			</div>
			<button id="" class="checkOutBtn" >
				<span>Pay 1 Rs</span>
			</button>
			<button id="retry" class="checkOutBtn2" onclick="backToCheckout()" style="display:none">
				<span></span>
			</button>
			<div class="checkOutShadow" style="display:block">
			</div>
		</div>
		<?php 
			  if($_SERVER['REQUEST_METHOD'] === 'POST')
			   { if($_POST['TxStatus'] === 'SUCCESS') {?>
				
				<script>
					$(".errorImg").attr("src","images/payment_s.png");
					$(".checkOutBody, .checkOutBtn, .emailFld").hide();
					$(".checkOutBtn2>span").text("Continue");
					$(".checkOutBody2, .checkOutBtn2").show();					
				</script>
			 <?php  }
			  else{ ?>
				<script>
					$(".errorImg").attr("src","images/payment_f.png");
					$(".checkOutBody, .checkOutBtn, .emailFld").hide();
					$(".checkOutBtn2>span").text("Try Again");
					$(".checkOutBody2, .checkOutBtn2").show();					
				</script>
			 <?php }
			   }
		?>		
		<script src="http://code.jquery.com/jquery-2.1.1.min.js" > </script>
		<script src="js/citrus.js" > </script>	
		<script src="js/checkout.js" > </script>
		<script src="js/config.js" > </script>		
		<script src="https://icp.citruspay.com/js/jquery.payment.min.js" > </script>		
		<script>			   
					function citrusServerErrorMsg(errorResponse) {        				 
        				$("#citrusErrorMessage").html(errorResponse.txMsg);        				 
        			}
        			function citrusClientErrMsg(errorResponse) {        				 
        				$("#citrusErrorMessage").html(errorResponse);
        			}
					

		</script>
		<script src="js/checkOutDemo.js"></script>
		
		</div>

	</body>
</html>
