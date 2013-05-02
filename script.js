
$(document).ready(function() {			
			
			
			// Function and settings for jQuery popup dialog  ///////////////////////////////////////////////////////////////////////
      
		      $(function() {
		      
		              $( "#calculatorPopup" ).dialog({
		                      autoOpen: false,
		                      //height: 550,
		                      width: 450,
		                      modal: true,
		                      buttons: {
		                              "Send": function() { // this button validates the form and collects all data form fields and sends to collected email address throughout Ajax
		                                function send(datastr){
		            $.ajax({  
		              type: "POST",
		              url: "http://bytek.dev.redslab.ie/tests/mail.php",
		              data: datastr,
		              cache: false,
		              success: function(html){
		                    $("#response").fadeIn("slow");
		                    $("#response").html(html);
		                    setTimeout('$("#response").fadeOut("slow")',2000);
		                  }
		            });
		            //fail(function(jqXHR, textStatus) {
		            //  alert( "Request failed: " + textStatus, errorThrown );
		          };
		
		                      
		
                  var valid = '';
									var isr = ' is required.';
									var savings = $("#result").text();
									var name = $("#name").val();
									var company = $("#company").val();
									var mail = $("#mail").val();
									var telephone = $("#telephone").val();
									var text = $("#text").val();
									if (name.length<1) {
										valid += '<br />Name'+isr;
									}
									if (company.length<1) {
										valid += '<br />Company'+isr;
									}
									if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
										valid += '<br />A valid Email'+isr;
									}
									if (!telephone.match(/^[0-9-+]+$/)) {
										valid += '<br />Telephone Number'+isr;
									}
									if (text.length<1) {
										valid += '<br />Message'+isr;
									}
									if (valid!='') {
										$("#response").fadeIn("slow");
										$("#response").html("Error:"+valid);
									}
									else {
										var datastr ='&savings=' + savings + '&name=' + name + '&company=' + company + '&mail=' + mail + '&telephone=' + telephone + '&text=' + text;
										$("#response").css("display", "block");
										$("#response").html("Sending message .... ");
										$("#response").fadeIn("slow");
		                                setTimeout(function(){send(datastr);},2000);
									}
									return false;
		                      
		                              },
		                              
		                              "Cancel": function() {  // Cancels the dialog/pupup window
		                                      $( this ).dialog( "close" );
		                              },
		                      },
		                      
		                      // behaviour of the Cancel(close) button: cleans and removes all typed in details and also removes response warning in the form..
		                      close: function() {
		                              $('#name').val("");
		                              $('#company').val("");
		                              $('#mail').val("");
		                              $('#telephone').val("");
		                              $('#text').val("");
		                              $("#response").css("display", "none");
		                      }
		              });
		              
		              //Ajax function to send gathered data above into mail_sender on success php mail returns echo "Mail successful sent" into div#response
		        
		                
		      
		          
		          // Calculator Script ///////////////////////////////////////////////////////////////////////////////
		           function calculateDiscount(){
		              // Calculator Logick: gathers and calculates checkbox values and generates result
		              var getSavings, result, id1,id2, defaultDiscount;
		              
		              defaultDiscount = '45-55%';
		              
		              // predefined values/statements
		              getSavings = function(val1,val2){
		                  if ((val1 === 1 && !val2) ||
		                     (val1 === 5 && !val2)  ||
		                     (val1 === 5 && val2 === 6)){
		                     return "30-40%";
		                  }
		    
		                  if (val1 === 1 && val2 === 2){
		                     return "35-45%";
		                  }
		    
		                  if ((val1 === 2 && !val2) ||
		                      (val1 === 3 && !val2) ||
		                      (val1 === 2 && val2 === 6) ||
		                      (val1 === 1 && val2 === 7) ||
		                      (val1 === 4 && val2 === 6)){
		                      return "40-50%";
		                  }
		    
		                  if ((val1 === 3 && val2 === 4) ||
		                      (val1 === 2 && val2 === 7) ||
		                      (val1 === 4 && val2 === 7)){
		                      return "45-55%";
		                  }
		    
		                  if (val1 === 4 && !val2){
		                      return "50-55%";
		                  }
		                  if (val1 === 6 && !val2){
		                      return "25-35%";
		                  }
		                  if (val1 === 1 && val2 ===6){
		                     return "45-50%";
		                  }
		                  if ((val1 === 3 && val2 ===6)||
		                     (val1 === 3 && val2 ===7)){
		                     return "50-60%";
		                  } 
		                  if (val1 === 5 && val2 ===7){
		                     return "50-50%";
		                  }
		                  if (val1 === 6 && val2 ===7){
		                     return "55-60%";
		                  }
		                  return defaultDiscount; // default value for all unkonwn values
		              };
		     
		              // gathers checked checkbox values and saves them in variable "result"
		              options = $('#savingsContainer').find('.savingOption:checked');
		                            
		              if (options.length >2){
		                  result = defaultDiscount;
		              }else if (options.length>0){
		
		                  val1 = +options.eq(0).val();
		
		                  val2 = options.eq(1) && +options.eq(1).val();
		
		                  result = getSavings(val1, val2); 
		              }else{
		                  return false;
		              }
		              return result;
		            };

		            function getSelectedPrinters(){
		              	var checkedPrinters,container,results=[];
 						  			container = $('#savingsContainer');
	                  checkedPrinters = container.find('.savingOption:checked');
	               
	                  $.each(checkedPrinters,function(i,item){
	                  	results.push(container.find('label[for="'+item.id+'"]').text());
	                  })

	                  return results.join(',');
		            };
		      
		            $('#btnCalculateSavings').click(function(e) { 
		                    var calculatorResult,selectedPrinters;
		
		                    e = e || event; 
		                    e.preventDefault();
		                            
		                    calculatorResult = calculateDiscount();
		                    
		                    if (calculatorResult){
		                      $("#result").text(calculatorResult);

		                    	selectedPrinters = getSelectedPrinters();

		                      $("#checkedPrinters").text(selectedPrinters); // inserts result value in to html div#results
		                      // Calling jquery dialog/popup window and populate calculator results into it onClick
		                    $("#calculatorPopup" ).dialog( "open" ); 
		                    }else{
		                      alert('Oops! You did not selected any options! \nPlease choose your printer');
		                    }
		             });
		
		      });
			
			
			// Header Slider
			$(function() {
				$('.iosSlider').iosSlider({
					scrollbar: true,
					snapToChildren: true,
					desktopClickDrag: true,
					scrollbarLocation: 'top',
					scrollbarMargin: '0',
					scrollbarBorderRadius: '0',
					responsiveSlideWidth: true,
					navSlideSelector: $('.iosSliderButtons .button'),
					infiniteSlider: true,
					startAtSlide: '1',
					autoSlide: true,
					autoSlideTimer: 4000, 
					onSlideChange: slideContentChange,
					onSlideComplete: slideContentComplete,
					onSliderLoaded: slideContentLoaded,
					keyboardControls: true
				});
				
				function slideContentChange(args) {
					
					/* indicator */
					$(args.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
					$(args.sliderObject).parent().find('.iosSliderButtons .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
					
				}
				
				function slideContentComplete(args) {
					
					if(!args.slideChanged) return false;
					

					
				}
				
				function slideContentLoaded(args) {
					
					
					/* indicator */
					$(args.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
					$(args.sliderObject).parent().find('.iosSliderButtons .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
					
				}
			});
			        
 
});