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
function experience(joinDate, now = new Date()) {
  if (!(joinDate instanceof Date) || isNaN(joinDate)) {
    return "Invalid start date";
  }
  if (joinDate > now) {
    const startLabel = joinDate.toLocaleString("en-US", { month: "short", year: "numeric" });
    return `${startLabel} - Present (0 mo)`; // or: `Starts ${startLabel}`
  }

  // Work with date-only precision to avoid time-of-day skew
  const start = new Date(joinDate.getFullYear(), joinDate.getMonth(), joinDate.getDate());
  const end   = new Date(now.getFullYear(),     now.getMonth(),     now.getDate());

  // Compute years and months
  let years  = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // If we haven't reached the start day in the current month, subtract one month
  if (end.getDate() < start.getDate()) {
    months -= 1;
  }
  if (months < 0) {
    years  -= 1;
    months += 12;
  }

  const startLabel = start.toLocaleString("en-US", { month: "short", year: "numeric" });

  // Build the duration string (LinkedIn-style: omit "0 mos" when we have whole years)
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0 || years === 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);

  return `${startLabel} - Present (${parts.join(" ")})`;
}

// Usage
const company_join = new Date(2024, 7, 1); // Aug is 7 (0-based)
const current_experience = experience(company_join);
const current_company = document.getElementById("current_company");
if (current_company) current_company.textContent = current_experience;

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


