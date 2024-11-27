const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar ul");


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('display');
});

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const Info = document.querySelector('.info');
const icon = themeToggleButton.querySelector('i');
const nav = document.querySelector("nav");
const serviceBoxes = document.querySelectorAll(".service-box");
const road = document.querySelector("#roadmap");
const contact = document.querySelector(".contact-section");
const TextContainer = document.querySelector(".details-container p")
const roadmapItem = document.querySelectorAll(".roadmap-item ");
const ProjectsP = document.querySelectorAll(".project");
const form = document.querySelector("form");
const Input = document.querySelectorAll("form input");
const Textarea = document.querySelector("form textarea");
const footer = document.querySelector("footer");
const Status = document.querySelector('#Status h1 span a')
const a = document.querySelectorAll('.a');

themeToggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
// --dark-mode
    if (body.classList.contains('dark-mode')) {

        body.style.background = 'radial-gradient(circle at center, rgb(49 83 48) 0%, rgb(0 0 0) 36%)';
        body.style.color = 'white';
        Info.style.color = "white";
        a.forEach(href => {
            href.style.color = "white"
        })
        serviceBoxes.forEach(service => {
            service.style.backgroundColor = "#121212";
            service.style.color = "white";
        });
        TextContainer.forEach(text => {
            text.style.color = "white";
        });
        form.style.backgroundColor = "#1e1e1e";
        Input.forEach(input => {
            input.style.backgroundColor = "#2a2a2a";
        });
        Textarea.style.backgroundColor = "#2a2a2a";

        document.querySelector('#projects').style.backgroundColor = "#1e1e1e";
        ProjectsP.forEach(project => {
            project.style.backgroundColor = "#2a2a2a";
            project.style.color = "white";
        });

        footer.style.backgroundColor = "#121212";
        footer.style.color = "white";

        roadmapItem.forEach(item => {
            item.style.backgroundColor = "#121212";
            item.style.color = "white";
        });

        Status.style.color = "white";
        road.style.backgroundColor = "#1f1f1f";
        contact.style.backgroundColor = "black";

        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = "white"
    }







    else {
// --light-mode
        body.style.background = 'radial-gradient(circle, rgb(76 203 73 / 37%) 0%, rgb(255, 255, 255) 27%)';
        body.style.color = 'black';
        Info.style.color = "black";

        serviceBoxes.forEach(service => {
            service.style.backgroundColor = "white";
            service.style.color = "#121212";
        });
        a.forEach(href => {
            href.style.color = "black"
        })
        TextContainer.forEach(text => {
            text.style.color = "black";
        });
        form.style.backgroundColor = "#f0f0f0";
        Input.forEach(input => {
            input.style.backgroundColor = "white";
        });
        Textarea.style.backgroundColor = "white";

        document.querySelector('#projects').style.backgroundColor = "white";
        ProjectsP.forEach(project => {
            project.style.backgroundColor = "#f0f0f0";
            project.style.color = "black";
        });

        footer.style.backgroundColor = "white";
        footer.style.color = "black";

        roadmapItem.forEach(item => {
            item.style.backgroundColor = "#";
            item.style.color = "#333333";
        });

        Status.style.color = "blue";
        road.style.backgroundColor = "white";
        contact.style.backgroundColor = "white";

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = "#147818"
    }
});


const yearElement = document.getElementById('current-year');
const today = new Date();
yearElement.textContent = today.getFullYear();


document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#about", {
        transform: "translateX(-100%)",
        y: -100,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
        }
    });

    gsap.from("#roadmap", {
        transform: "translateX(-100%)",
        y: -100,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
        }
    });

});





