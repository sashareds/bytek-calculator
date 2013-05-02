<!DOCTYPE html>
<html>
<head>

<meta charset=utf-8 />
<title>Bytek Discount Calculator</title>

	<link href="http://bytek.dev.redslab.ie/core/css/jquery-ui-1.10.2.custom.css" rel="stylesheet" type="text/css" />
	<link href="main.css" rel="stylesheet" type="text/css" />
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
	
	<script src="script.js"></script>
	


</head>

<body>
		
			<!-- Calculator -->
			<div id="SavingsCalculatorBox">

			<h3>Printing Savings <span>Calculator</span></h3>
			<hr>
			<p>Which of the following do you use for printing? <b>PLEASE SELECT &#10003;</b></p>
			
				<form>
				
					<ul id="savingsContainer">
						
						<li>
						
							<input id="hp-colour" type="checkbox" class="savingOption" value="1"><label for="hp-colour">Hp Colour</label><br>
						    <input id="hp-mono" type="checkbox" class="savingOption" value="2"><label for="hp-mono">HP Mono</label><br>
						    <input id="oki-colour" type="checkbox" class="savingOption" value="3"><label for="oki-colour">OKI Colour</label><br>
						    <input id="oki-mono" type="checkbox" class="savingOption" value="4"><label for="oki-mono">OKI Mono</label>
						
						</li>
						
						<li>
						
							<input id="other-printer" type="checkbox" class="savingOption" value="5"><label for="other-printer">Other Printer</label><br>
						    <input id="copier" type="checkbox" class="savingOption" value="6"><label for="copier">Copier</label><br>
					        <input id="fax-machine" type="checkbox" class="savingOption" value="7"><label for="fax-machine">Fax Machine</label>
						
						</li>
						
        
	    
					</ul>
						
						<button id="btnCalculateSavings">CALCULATE</button>
				
				 </form>	
				 
			</div>
		
		
			<!-- Hidden Content for Calculator: Calculator PopUp Window -->
			<!-- PopUp Windows wiht result and form -->
			<div id="calculatorPopup" title="Calculator Results">
				<h3>
					Your saving will be 
					<br>
					<span id="result"> </span> <!-- container for calculator results/safings -->
					<br>
					
					<span id="checkedPrinters"> </span> <!-- container for calculator results/safings -->
				</h3>
			<hr>
			<p>Fill out form bellow to request a call back</p>
				
				
				<div class="mail">
					
					<div id="response">
					</div>
					
					<form id="formail" action="" method ="post">
					
						<label>Name: </label><span class="form-error">This field is required</span>
						<input type="text" name="name" id="name" />
						
						<label>Company: </label>
						<input type="text" name="name" id="company" />
						
						<label>Your mail:</label>
						<input type="email" name="mail" id="mail" />
						
						<label>Telephone: </label>
						<input type="tel" name="telephone" id="telephone" />
						
						<label>Message:</label>
						<textarea name="text" id="text" cols="40" rows="5"></textarea> 
						
					</form>
				</div>
			
			</div><!-- End of calculator hidden content -->

	</body>
</html>