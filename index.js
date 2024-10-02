// Get the button:
let mybutton = document.getElementById("myButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

let scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
let topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// read more
function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

// loader
var myVar;

loader=()=>{
    myVar = setTimeout(showPage, 3000);
}
showPage=()=>{
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}