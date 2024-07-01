/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== BOTTOM NAVIGATION ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)


/*==================== SIDE NAVIGATION ACTIVE LINK ====================*/
var sidenavContainer = document.getElementById("sidenavbar-nav");
var sidenavlinks = sidenavContainer.getElementsByClassName("sidenav-link");

for (var i = 0; i < sidenavlinks.length; i++) {
  sidenavlinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("sidenav-active");
    current[0].className = current[0].className.replace(" sidenav-active", "");
    this.className += " sidenav-active";
  });
}


/*==================== SKILLS TOGGLE ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  // for(i = 0; i < skillsContent.length; i++){
  //     skillsContent[i].className = 'skills_content skills_close'
  // }

  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
  }

  if (itemClass === 'skills_content skills_open') {
    this.parentNode.className = 'skills_content skills_close'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
});


/*==================== PROJECT TOGGLE ====================*/
const projectContent = document.getElementsByClassName('project_content'),
  projectHeader = document.querySelectorAll('.project_header')

function toggleProject() {
  let itemClass = this.parentNode.className

  // for(i = 0; i < skillsContent.length; i++){
  //     skillsContent[i].className = 'skills_content skills_close'
  // }

  if (itemClass === 'project_content project_close') {
    this.parentNode.className = 'project_content project_open'
  }

  if (itemClass === 'project_content project_open') {
    this.parentNode.className = 'project_content project_close'
  }
}

projectHeader.forEach((el) => {
  el.addEventListener('click', toggleProject)
});


/*==================== EXPERIENCE ====================*/
const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

function experience(join_date) {
  var current_date = new Date();
  var diff = (current_date.getTime() - join_date.getTime()) / 1000;

  var year_str = "yr"
  var month_str = "mo"
  var join_month = monthNames[join_date.getMonth() - 1];
  var experience_str = join_month + " " + join_date.getFullYear() + " - Present ("

  diff /= (60 * 60 * 24 * 7 * 4);
  diff = Math.ceil(diff);

  var year_count = 0;
  var month_count = diff % 12;

  if (diff >= 12){
    year_count = Math.floor(diff / 12)
    year_str = year_count > 1 ? "yrs" : "yr";
  } 

  if (month_count == 0){
    month_count = 1
  } 

  month_str = month_count > 1 ? "mos" : "mo";

  return experience_str + (year_count > 1 ? year_count + " " + year_str + " " + month_count + " " + month_str : month_count + " " + month_str) + ")";
}


var company_join = new Date("2024-07-01");
var current_experience = experience(company_join);
const current_company = document.getElementById("current_company");

current_company.innerHTML = current_experience;


/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== SET CURRENT YEAR TO COPYRIGHT ====================*/
document.getElementById('copyright-year').innerHTML = new Date().getFullYear()
