////var ch1 = document.getElementById('target2').clientHeight;
//console.log(document.getElementById('target1').clientHeight);
//
var ch1 = document.getElementById('top-section').offsetHeight;
////console.log(ch1);
document.getElementById("target1").style.height = ch1;
console.log(document.getElementById('target1').clientHeight);


var ch2 = document.getElementById('testimonial').offsetHeight;
//console.log(ch2);

var ch3 = document.getElementById('coursework').offsetHeight;
//console.log(ch3);

var ch4 = document.getElementById('brands').offsetHeight;
//console.log(ch4);

var ch5 = document.getElementById('job-opp').offsetHeight;
//console.log(ch5);

var ch6 = document.getElementById('footer').offsetHeight;
//console.log(ch6);


var total = ch1 + ch2 + ch3 + ch4 + ch5 + ch6;
console.log(total);

//document.getElementById("smooth").style.height = total+"px";
console.log(document.getElementById('smooth').offsetHeight);