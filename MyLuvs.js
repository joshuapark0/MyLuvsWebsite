//Change the logo color when scrolling down 

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var logo = document.getElementById('logo');
    header.classList.toggle("sticky", window.scrollY > 500);
    if(window.scrollY > 500){
        logo.src = "WhiteOutlineLogo.png";
    }
    else{
        logo.src = "WhiteOutlineLogo.png";
    }
});


// Show / Hide SideBar 

function showSidebar(){
    const sidebar = document.querySelector('.nav-links#sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.nav-links#sidebar')
    sidebar.style.display = 'none'
}


// Slide Images according to the slide button clicks 

const initSlider = () => {
    const imageList = document.querySelector(".slide-wrapper .item-list");
    const slideButtons = document.querySelectorAll(".slide-wrapper .slide-button");
    const mobileSlideButtons = document.querySelectorAll(".slide-wrapper .mobile-slide-button");
    // const slides = document.querySelectorAll(".slide-wrapper .item-list .card");
    // return slides[0].getBoundingClientRect().width; // Width of the slide including margins

    //const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        })
    })

    mobileSlideButtons.forEach(button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        })
    })

    /*
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList. scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList. scrollLeft >= maxScrollLeft ? "none" : "block";
    }
    */ 
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}
window.addEventListener("load", initSlider);
