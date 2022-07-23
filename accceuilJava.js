 


    
// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
   
    
    do {
        if (!e.target.matches('.accordion') & acp[u].style.maxHeight != null) {
            if (acp[u].style.maxHeight) {

                acp[u].style.maxHeight = null;
            }
        }
        u = u + 1;
    } while (u < acp.length)
}



// ACCORDEON animation


// afficher/cacher les accordions . 
window.onload = function () {

    var acc = document.getElementsByClassName("accordion");

    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click" , function () {
            this.classList.toggle("active");
            
            var panel = this.nextElementSibling;
            
           
            if (panel.style.display != "block") {
              
                panel.style.display = "block";
               
            }
            else {
               
                panel.style.display = "none";
                
            }
        });
    }





    var acc1 = document.getElementsByClassName("accordion1");

    var a;
 

    for (a = 0; a < acc1.length; a++) {
        acc1[a].addEventListener("click", function () {

            
            var panel = this.nextElementSibling;
            this.classList.toggle("active1");
            if (panel.style.maxHeight) {
               
                panel.style.maxHeight = null;
            }
            else {
                
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }




}


    

// fin accordion

   
   