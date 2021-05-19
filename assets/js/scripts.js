/*************************************************************************
  * Highlight the nav link based on current page 
  *
  * Take the current page title, split it by the pipe, take the part after 
  * the pipe remove white space, make it lowercase, and replace all the 
  * remaining spaces with a dash
  *
  * turns this: Common Git Tasks 
  * into this: common-git-tasks
  *
  * Then compare that to the id attributes of all of the navigation links. 
  * If it's a match, then add the highlighted class to the li tag
**************************************/
const nav = document.getElementsByClassName('navlink');
const page = document.title.split('|')[1].trim().toLowerCase().replaceAll(' ', '-');
for (var i = 0; i < nav.length; i++) {
  if (nav.item(i).getAttribute('id') === page) {
    nav.item(i).classList.add('selected');
  }
}