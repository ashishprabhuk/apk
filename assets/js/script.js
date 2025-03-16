'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// description variables
const descriptionItem = document.querySelectorAll("[data-description-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const descriptionModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < descriptionItem.length; i++) {

  descriptionItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-description-avatar]").src;
    modalImg.alt = this.querySelector("[data-description-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-description-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-description-text]").innerHTML;

    descriptionModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", descriptionModalFunc);
overlay.addEventListener("click", descriptionModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// ----------------

// Assuming you have the same skills data
const skills = [
  // ... your skills data
  {
    title: "Frontend",
    skills: [
      
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Angular",
        image:
          "./assets/images/angular.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
"https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Sass",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
      },
      {
        name: "Material UI",
        image: "./assets/images/material.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "./assets/images/nodejs.png",
      },
      {
        name: "Express Js",
        image:"./assets/images/express.png",
      },
      // {
      //   name: "Graph Ql",
      //   image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      // },
      {
        name: "Java",
        image:
          "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      },
      {
        name: "Spring",
        image:
          "https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png",
      },
      {
        name: "Spring Boot",
        image: "./assets/images/spring-boot.png",
      },
      {
        name: "MySQL",
        image:
          "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-15.png",
      },
      // {
      //   name: "Postgresql",
      //   image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      // },
      {
        name: "MongoDB",
        image:
          "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      },
    ],
  },
  // {
  //   title: "Android",
  //   skills: [
  //     {
  //       name: "Java",
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  //     },
  //     {
  //       name: "Kotlin",
  //       image:
  //         "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  //     },
  //     {
  //       name: "XML",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
  //     },
  //     {
  //       name: "Android Studio",
  //       image:
  //         "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  //     },
  //   ],
  // },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      },
      {
        name: "GitHub",
        image:
          "./assets/images/github.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "IntelliJ IDEA",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png",
      },
      {
        name: "Postman",
        image:
          "https://cdn.worldvectorlogo.com/logos/postman.svg",
      },
      {
        name: "Figma",
        image:
          "./assets/images/figma1.png",
      },
      {
        name: "Adobe XD",
        image:
          "./assets/images/xd.png",
      },
      {
        name: "Illustrator",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png",
      },
    ],
  },
];

// Function to create a skill element
function createSkillElement(skill) {
  const skillElement = document.createElement('div');
  skillElement.className = 'skill';

  const skillTitle = document.createElement('h2');
  skillTitle.className = 'skill-title';
  skillTitle.textContent = skill.title;

  const skillList = document.createElement('div');
  skillList.className = 'skill-list';

  skill.skills.forEach(item => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';

    const skillImage = document.createElement('img');
    skillImage.className = 'skill-image';
    skillImage.src = item.image;
    skillImage.alt = `${item.name} Icon`;

    const itemName = document.createTextNode(item.name);

    skillItem.appendChild(skillImage);
    skillItem.appendChild(itemName);
    skillList.appendChild(skillItem);
  });

  skillElement.appendChild(skillTitle);
  skillElement.appendChild(skillList);

  return skillElement;
}

// Function to initialize the skills container
function initializeSkillsContainer() {
  const skillsContainer = document.getElementById('skills-container');

  skills.forEach(skill => {
    const skillElement = createSkillElement(skill);
    skillsContainer.appendChild(skillElement);
  });
}

// Call the initialization function when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeSkillsContainer);



