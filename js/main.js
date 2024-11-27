
window.addEventListener("load", () => {
    const preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
        preloader.style.display = "none";
            /* animate on scroll */
        AOS.init();
    }, 600);
});

/* header bg reveal */

const headerBg = () => {
    const header =  document.querySelector(".js-header");
    
    window.addEventListener("scroll",function() {
        if(this.scrollY > 0){
         header.classList.add("bg-reveal");
        }
        else{
        header.classList.remove("bg-reveal");
        }
    });
}
headerBg();

function housekeeping() {
    var myWindow = window.open("","","width=300,height=100");
    myWindow.document.write("<h4>We have a team of well-trained housekeeper offer their services to house or office</h4>");
}
function garderner() {
    var myWindow = window.open("","","width=300,height=100");
    myWindow.document.write("<h4>Depending on regions and availability of our gardeners, we have a small team of gardeners who servers our clients as an on service.</h4>");
}
function swimming() {
    var myWindow = window.open("","","width=300,height=100");
    myWindow.document.write("<h4>We offer our clients full maintenance plans for swimming pools, water features, sewage treatment plants and more. Our technical team will ensure the service and replacement of any parts and equipment.</h4>");
}
function nursery() {
    var myWindow = window.open("","","width=300,height=100");
    myWindow.document.write("<h4>Reliable and caring individuals to provide safe supervision and nurturing for your children.</h4>");
}


/* nav */

const navigation = () => {
     const navToggler = document.querySelector(".js-nav-toggler");
     const nav = document.querySelector(".js-nav");
     const navItems = nav.querySelectorAll("li");

     const navToggle = () =>{
        nav.classList.toggle("open");
        navToggler.classList.toggle("active");
        }

        navToggler.addEventListener("click", navToggle);

        navItems.forEach((li) => {
            li.querySelector("a").addEventListener("click", () => {
                if(window.innerWidth <= 767){
                    navToggle();
                }
            });
        });
}
navigation();
