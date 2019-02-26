var element=document.querySelector('.menu_small');
var menu=document.querySelector('.menu');
 var count=true;
 element.addEventListener('click', function(){
 	
 	if (count){ 	menu.style="display:block;";
 	                //menu.style="position:absolute;";

                count=false;     } else {
                	menu.style="display:none; position:static;";
                	
                	count=true;
                }
 });