/*******************************************************
Fixed Navigation Menu
*******************************************************/

//
function fixedHeader() {
    document.getElementsByClassName('navbar')[0].style.position = 'fixed';
    document.getElementsByClassName('navbar')[0].style.top = '0';
    document.getElementsByClassName('navbar')[0].style.justifyContent = 'space-between';
    document.getElementsByClassName('navbar-img')[0].style.display = 'block';
    document.getElementsByTagName('main')[0].style.marginTop = '0';
};

function returnHeader() {
  document.getElementsByClassName('navbar')[0].style.position = '';
  document.getElementsByClassName('navbar')[0].style.top = '';
  document.getElementsByClassName('navbar-img')[0].style.display = '';
  document.getElementsByClassName('navbar')[0].style.justifyContent = '';
  document.getElementsByTagName('main')[0].style.marginTop = '';
}

window.addEventListener("scroll",function() {
  if(window.scrollY > window.innerHeight - 80) {
     fixedHeader();
  }
  if(window.scrollY <= window.innerHeight - 80) {
     returnHeader()
  }
},false);



/*******************************************************
TECHNICIAN SLIDE-IN EFFECT Menu
*******************************************************/
// Reference to all node locations
techOneImg = document.getElementsByClassName('technician1')[0].getElementsByTagName("img")[0];
techTwoImg = document.getElementsByClassName('technician2')[0].getElementsByTagName("img")[0];
techOneParagraph = document.getElementsByClassName('technician1')[0].getElementsByTagName("p")[0];
techTwoParagraph = document.getElementsByClassName('technician2')[0].getElementsByTagName("p")[0];

// Changes left style to 0
function slideElement(e) {
  e.style.left = '0';
}

// Returns left style to initial
function returnElement(e) {
  e.style.left = '';
}

// Use callback functions to slide items
function scrollingTech (e) {
  if (e.matches) {
    window.addEventListener("scroll",function() { 
      if(window.scrollY > technician1 - 300) {
        slideElement(techOneImg);
        slideElement(techOneParagraph);
      }
      if (window.scrollY > technician2 - 300) {
        slideElement(techTwoImg);
        slideElement(techTwoParagraph);
      }
      if(window.scrollY <= technician1 - 300) {
        returnElement(techOneImg);
        returnElement(techOneParagraph);
      }
      if (window.scrollY <= technician2 - 300) {
        returnElement(techTwoImg);
        returnElement(techTwoParagraph);
      }
    },false);
} else {
  window.addEventListener("scroll",function() { 
    if(window.scrollY > technician1 - 500) {
      slideElement(techOneImg);
      slideElement(techOneParagraph);
    }
    if (window.scrollY > technician2 - 500) {
      slideElement(techTwoImg);
      slideElement(techTwoParagraph);
    }
    if(window.scrollY <= technician1 - 500) {
      returnElement(techOneImg);
      returnElement(techOneParagraph);
    }
    if (window.scrollY <= technician2 - 500) {
      returnElement(techTwoImg);
      returnElement(techTwoParagraph);
    }
    },false);
}
};

// Find Technician elements on page
technician1 = window.scrollY + document.getElementsByClassName("technician1")[0].getBoundingClientRect().top;

technician2 = window.scrollY + document.getElementsByClassName("technician2")[0].getBoundingClientRect().top;

// Targets viewports at most 760px wide
var mediaQueryTech = window.matchMedia("(max-width: 760px)");

//Register Event Listener
mediaQueryTech.addEventListener('change', scrollingTech);

//Initial Check
scrollingTech(mediaQueryTech);