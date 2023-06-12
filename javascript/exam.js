const sidebar = document.querySelector('.sidebar');
const sidebarDivBg = document.querySelector('.cover-bg');
const firstImage = document.getElementById('first-image');
const toggleButton = document.querySelectorAll('.line');
const sidebarMenuLink = document.querySelectorAll('.sidebar-menu-link');
const secondImage = document.getElementById('second-image');
const thirdImage = document.getElementById('third-image');
const fourthImage = document.getElementById('fourth-image');
const fifthImage = document.getElementById('fifth-image');
const sixthImage = document.getElementById('sixth-image');
const burgerMenu = document.getElementById('burger-menu');
const sidebarMenu = document.getElementById('sidebar-menu');
const goTopButton = document.getElementById('goTopBtn');
const menu = () => {
    document.querySelector(".hamburger-menu").addEventListener('click', function () {
        sidebar.classList.toggle("active");
        sidebar.style.height = 'auto';
    });
}
// menu()
const removeDiv = () => {
    for (let link of sidebarMenuLink) {
        link.onclick = function () {
            sidebar.style.display = 'none';
            // burgerMenu.style.display = 'none';
        }
    }
};
removeDiv();
const navBar = document.getElementById('nav_bar');
const featuredPortfolio = document.getElementById('featured-portfolio');

window.onscroll = function () {
    const navScrool = window.scrollY;
    const logoColor = document.getElementById('mainLogo');
    const textColor = document.querySelectorAll('.nav-bar-text');

    if (navScrool >= 100) {
        navBar.classList.add('after-scroll-nav-bar-bg');
        logoColor.classList.add('logo-after-scroll');
        goTopButton.style.display = 'block'
        for (let bgcolor of textColor) {
            bgcolor.style.color = 'blue';
        }
    }
    else {
        navBar.classList.remove('after-scroll-nav-bar-bg');
        logoColor.classList.remove('logo-after-scroll');
        goTopButton.style.display = 'none'

        for (let bgcolor of textColor) {
            bgcolor.style.color = 'white';
        }
    }
};
const pic1 = document.querySelectorAll('.package');
const pic2 = document.querySelectorAll('.mocking');
const pic3 = document.querySelector('.typographypic');
const pic4 = document.querySelectorAll('.photographypic');

const typography = () => {
    for (let pic of pic1) {
        pic.style.display = 'none';
    }
    for (let pict of pic2) {
        pict.style.display = 'none';
    }
    for (let picture of pic4) {
        picture.style.display = 'none';
    }
    pic3.style.display = 'block';
}
const mocking = () => {
    for (let pic of pic1) {
        pic.style.display = 'none';
    }

    for (let pictu of pic3) {
        pictu.style.display = 'none';
    }
    for (let picture of pic4) {
        picture.style.display = 'none';
    }
    for (let pict of pic2) {
        pict.style.display = 'block';

    }
};
const packaging = () => {

    for (let pict of pic2) {
        pict.style.display = 'none';
    }
    for (let pictu of pic3) {
        pictu.style.display = 'none';
    }
    for (let picture of pic4) {
        picture.style.display = 'none';
    }
    for (let pic of pic1) {
        pic.style.display = 'block';
    }

};
const allButton = () => {
    const pic1 = document.querySelectorAll('.all');
    for (let pic of pic1) {
        pic.style.display = 'block';
        pic.style.position = 'static';
    }
};
const photography = () => {
    for (let pic of pic1) {
        pic.style.display = 'none';
    }
    for (let pict of pic2) {
        pict.style.display = 'none';
    }
    for (let pictu of pic3) {
        pictu.style.display = 'none';
    }
    pic4.style.display = 'block';

};
const hireMe = () => {
    const hireMeLink = "https://www.fiverr.com/shuvajitdas441/be-a-professional-frontend-developer-for-your-website";
    window.open(hireMeLink, '_blank');
};
const downloadCV = () => {
    const downloadCvLink = 'https://drive.google.com/file/d/1OXLY0Q-jq551MaZcxx7_DmWCOsfmtF9f/view?usp=share_link';
    window.open(downloadCvLink, '_blank');
};
const displayDate = () => {
    const dateDiv = document.querySelectorAll('#date');
    dateDiv.forEach(div => {
        const date = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        const dateFormat = date.toLocaleString("en-US", options);
        div.innerText = dateFormat
    })
};
displayDate();
const sendEmail = () => {
    const recipient = "shuvajitdas838@gmail.com";
    const mailerName = document.querySelector('.name').value;
    const mailerEmail = document.querySelector('.email').value;
    const mailerPhone = document.querySelector('.phone').value;
    const mailerMessage = document.querySelector('.message').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "Shuvajit",
        Password: "shuvo@12131",
        To: recipient,
        From: mailerEmail,
        Subject: "Contact Form Submission",
        Body: `Name: ${mailerName}\nEmail: ${mailerEmail}\nPhone: ${mailerPhone}\nMessage: ${mailerMessage}`
    }).then(
        alert("Email sent successfully")
    );
};
const goUpBtn = () => {
    goTopButton.addEventListener('click', function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        // sidebar.style.display = 'block'

        // burgerMenu.style.display = 'block';
        // menu()
        // sidebar.style.display = 'none'
        // burgerMenu.addEventListener('click', function () {
        //     sidebar.style.display = 'block'
        // })
        // if (burgerMenu === 'click') {
        //     sidebar.style.display = 'block'
        // }
        // else {
        //     sidebar.style.display = 'none'
        // }
        // burgerMenu.onclick() = function () {
        //     sidebar.style.display = 'block'
        // }
    })
}
goUpBtn()
window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
        sidebar.style.display = 'none';
    }
    else if (window.innerWidth < 600) {
        burgerMenu.onclick = function () { sidebar.style.display = 'block'; }

    }
})
menu()