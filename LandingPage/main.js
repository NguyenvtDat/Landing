var slideIndex = 0;
var w;
var maxitem;
function time() {
    w = window.innerWidth;
    if (w>=1050) {
        maxitem=4;
    } else if (w<1050&&w>600) {
        maxitem=3;
    }
    else{
        maxitem=1;
    }
}

setInterval(time,1000);
setInterval(showDivs,1000);
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("job-offer-card");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  if(slideIndex<0){
  	slideIndex = 0;
  }
  if(slideIndex>x.length-maxitem){
  	slideIndex = x.length-maxitem;
  }
  for (i = 0; i < maxitem; i++) {
    x[slideIndex+i].style.display = "block";  
  }
}