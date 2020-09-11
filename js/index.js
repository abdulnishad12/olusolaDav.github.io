// ---------------------------------Animation -------------------------------

// Hero Section

let lastScrollPos = window.scrollY;
let titleSection = document.querySelector(".title-section");
let titleSectionBottom = titleSection.scrollHeight;
let articleSection = document.querySelector(".body-section");
let articleSectionTop = articleSection.getBoundingClientRect().top;

let scale = 1;
let x = -1;

document.addEventListener("scroll", function(e) {
  let currentScrollPos = window.scrollY;
  if (
    currentScrollPos > titleSectionBottom &&
    currentScrollPos < articleSectionTop - titleSectionBottom
  ) {
    let text = document.querySelector(".hero-section svg text");
    if (currentScrollPos > lastScrollPos) {
      if (scale <= 64) {
        scale = scale * 2;
      }
    } else {
      if (scale >= 2) {
        scale = scale / 2;
      }
    }

    text.style.transform = `scale(${scale})`;
  }
  if (
    currentScrollPos > titleSectionBottom * 1.6 &&
    currentScrollPos < articleSectionTop
  ) {
    let title = document.querySelector(".hero-section .hero-title");
    if (currentScrollPos > lastScrollPos) {
      if (x >= -150) {
        x = x * 1.5;
      }
    } else {
      if (x <= -1.5) {
        x = x / 1.5;
      }
    }

    title.style.transform = `translateX(${x}%)`;
    title.style.opacity = 1;
  } else {
    let title = document.querySelector(".hero-section .hero-title");
    title.style.opacity = 0;
  }
  lastScrollPos = currentScrollPos;
});

// Main header / Title Section

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseover", () => {
    anime({
      targets: link,
      keyframes: [
        { translateY: "-2px" },
        { translateY: "4px" },
        { translateY: "0px" },
        { translateY: "2px" },
        { translateY: "-4px" },
        { translateY: "0px" }
      ],
      duration: 400,
      easing: "easeInOutExpo"
    });
  });
});

anime
  .timeline()
  .add({
    targets: ".main-header",
    opacity: [0, 1],
    translateY: ["-5rem", 0],
    easing: "spring(1, 80, 10, 0)",
    duration: 300
  })
  .add(
    {
      targets: [".nav-link", ".brand"],
      opacity: [0, 1],
      translateY: ["-2rem", 0],
      easing: "spring(1, 80, 10, 0)",
      duration: 500
    },
    "-=800"
  )
  .add(
    {
      targets: ".title-header .line",
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700
    },
    "-=1400"
  )
  .add(
    {
      targets: ".title-header .line",
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em"
    },
    "-=700"
  )
  .add(
    {
      targets: ".title-header .letters-left",
      opacity: [0, 1],
      translateX: ["0.65em", "0.15em"],
      easing: "easeOutExpo",
      duration: 600
    },
    "-=300"
  )
  .add(
    {
      targets: ".title-header .letters-right",
      opacity: [0, 1],
      translateX: ["-0.65em", "-0.15em"],
      easing: "easeOutExpo",
      duration: 800
    },
    "-=800"
  );


 




               
               
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
                    tog6=false;
                }
            
               else if (tog6 == false) {
                    document.getElementById("button-6").innerHTML="VIEW ALL";
                    tog6=true;
                }
            
            } 

             let tog7 =true;
            function toggleWeb() {
                if (tog7 == true) {
                    document.getElementById("button-8").innerHTML="VIEW LESS";
                    tog7=false;
                }
            
               else if (tog7 == false) {
                    document.getElementById("button-8").innerHTML="VIEW ALL";
                    tog7=true;
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
    document.getElementById('button-8').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }, 700)
   



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



