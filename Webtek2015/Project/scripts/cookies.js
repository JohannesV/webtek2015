/*
Author: Marianne, Ellen, Johanne,  Johannes and Eirik
Date: October 13, 2015
Purpose: Remembering and requesting a name
Filename: cookies.js


*/

window.onload = checkName;

daysToMs = 24 * 60 * 60 * 1000;

function setName(name, timeInDays) {
  var expiration = new Date();
  expiration.setTime(expiration.getTime() + (timeInDays * daysToMs));
  var expirationText = "expires=" + expiration.toUTCString();
  document.cookie = "username=" + name + ";" + expirationText+";path=/";

}

function getName() {
  console.log('running getname');
  var name = "username=";
  allCookies = document.cookie.split(';');
  for (var i = 0; i < allCookies.length; i++) {
    var cookie = allCookies[i];
    while (cookie.charAt(0) == ' ') cookie = cookie.substring(1);
    if (cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
  }
  return "";
}

function checkName() {
  console.log('Looking for a name in the cookies');
  var name = getName();

  if (name != "") {
    var welcomeBackString="Welcome back, " + name + "!";
  /*  alert(welcomeBackString);*/
    document.getElementById('nameOutput').innerHTML=welcomeBackString;
  } else {
    name = prompt("This is a test of name-remembering cookies! Please enter your name here (or nothing at all):", "");
    if (name != null && name != '') {

      //TODO: set a element in the proper pages to the name, instead of an ugly alert box
      setName(name, 14);
    }
  }
}
