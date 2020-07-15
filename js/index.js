
               
               
               //------------------------Butoons----------------------
               let toggle =true;
            function toggleIll() {
                if (toggle == true) {
                    document.getElementById("button").innerHTML="VIEW LESS";
                    toggle=false;
                }
            
               else if (toggle == false) {
                    document.getElementById("button").innerHTML="VIEW ALL";
                    toggle=true;
                }
            
            } 


            let tog2 =true;
            function toggleCart() {
                if (tog2 == true) {
                    document.getElementById("button-2").innerHTML="VIEW LESS";
                    tog2=false;
                }
            
               else if (tog2 == false) {
                    document.getElementById("button-2").innerHTML="VIEW ALL";
                    tog2=true;
                }
            
            }
            
            let tog3 =true;
            function toggleCar() {
                if (tog3 == true) {
                    document.getElementById("button-3").innerHTML="VIEW LESS";
                    tog3=false;
                }
            
               else if (tog3 == false) {
                    document.getElementById("button-3").innerHTML="VIEW ALL";
                    tog3=true;
                }
            
            } 


            let tog4 =true;
            function toggleMan() {
                if (tog4 == true) {
                    document.getElementById("button-4").innerHTML="VIEW LESS";
                    tog4=false;
                }
            
               else if (tog4 == false) {
                    document.getElementById("button-4").innerHTML="VIEW ALL";
                    tog4=true;
                }
            
            }
            

            let tog5 =true;
            function toggleLog() {
                if (tog5 == true) {
                    document.getElementById("button-5").innerHTML="VIEW LESS";
                    tog5=false;
                }
            
               else if (tog5 == false) {
                    document.getElementById("button-5").innerHTML="VIEW ALL";
                    tog5=true;
                }
            
            } 

            let tog6 =true;
            function togglePost() {
                if (tog6 == true) {
                    document.getElementById("button-6").innerHTML="VIEW LESS";
                    tog5=false;
                }
            
               else if (tog6 == false) {
                    document.getElementById("button-6").innerHTML="VIEW ALL";
                    tog6=true;
                }
            
            } 


            function openNav() {
                document.getElementById("mySidenav").style.width = "100%";
                document.getElementById("openNav").style.display ="none";
              }
              


              function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("openNav").style.display ="block";
              }


  
         

 setInterval(function() {
    document.getElementById('button').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('button-2').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('button-3').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('button-4').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('button-5').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('button-6').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }, 700)
   
  /*  function myLogo() {
      document.body.innerHTML= <img src="./img/mylogo.gif" alt=""/>
   } */


  //How my Index.js should be 
 
   window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});



 $(document).ready(function (){
    $('.submit').click(function (event) {
        
        


        var email = $('.email').val()
        var phone = $('.phone').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length >= 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('')
        } else {
            event.preventDefault()
            statusElm.append('<div>  Email is not valid </div>')
        }

        if(message.length >= 15) {
            statusElm.append('')
        } else {
            event.preventDefault()
            statusElm.append('<div>Your massage must includes altleast 15 charcters</div>')
        }
    })

}) 