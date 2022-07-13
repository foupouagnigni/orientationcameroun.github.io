

// afficher/cacher les listes deroulantes . 
function myFunction(A) {
    switch(A){
        case 1: document.getElementById("myDropdown1").classList.toggle("show"); break;
        case 2: document.getElementById("myDropdown2").classList.toggle("show");break;
        case 3: document.getElementById("myDropdown3").classList.toggle("show");break;
        case 4: document.getElementById("myDropdown4").classList.toggle("show");break;
        case 5: document.getElementById("myDropdown5").classList.toggle("show"); break;
        case 6: document.getElementById("efor").style.maxHeight =12 ; break;
    
    }
  
}
    
// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn1')) {
        var myDropdown1 = document.getElementById("myDropdown1");
        if (myDropdown1.classList.contains('show')) {
            myDropdown1.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn2')) {
        var myDropdown2 = document.getElementById("myDropdown2");
        if (myDropdown2.classList.contains('show')) {
            myDropdown2.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn3')) {
        var myDropdown3 = document.getElementById("myDropdown3");
        if (myDropdown3.classList.contains('show')) {
            myDropdown3.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn4')) {
        var myDropdown4 = document.getElementById("myDropdown4");
        if (myDropdown4.classList.contains('show')) {
            myDropdown4.classList.remove('show');
        }
    }
   
}

// ACCORDEON animation


// afficher/cacher les accordions . 
window.onload = function () {

    var acc = document.getElementsByClassName("accordion");

    var i;
    var u;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {

            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            }
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }



}
window.onclick = function (e) {


    u = 0;
    var acp = document.getElementsByClassName("panel");

    do {

        if (!e.target.matches('.accordion') & acp[u].style.maxHeight != null) {



            if (acp[u].style.maxHeight) {

                acp[u].style.maxHeight = null;
            }
        }
        u = u + 1;
    } while (u < acp.length)



}






// fin */