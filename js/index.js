const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav links
const headerNavLinks = document.querySelectorAll('.container header nav a')
headerNavLinks.forEach((a, index) => {
  a.textContent = siteContent.nav[`nav-item-${index+1}`]
})


// cta-text h1
const ctaText = document.querySelector('.cta-text')
const myh1 = ctaText.querySelector('h1')
const h1Cta = siteContent.cta.h1.split(' ')
myh1.appendChild(document.createTextNode(h1Cta[0]))
myh1.appendChild(document.createElement('br'))
myh1.appendChild(document.createTextNode(h1Cta[1]))
myh1.appendChild(document.createElement('br'))
myh1.appendChild(document.createTextNode(h1Cta[2]))

// cta-text button

ctaText.querySelector('button').textContent = siteContent.cta.button

// cta img

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent.cta["img-src"])

// main-content
// top
const topContentText1 = document.querySelector('.top-content .text-content:nth-of-type(1)')
const topContentText2 = document.querySelector('.top-content .text-content:nth-of-type(2)')
topContentText1.querySelector('h4').textContent = siteContent["main-content"]["features-h4"]
topContentText1.querySelector('p').textContent = siteContent["main-content"]["features-content"]
topContentText2.querySelector('h4').textContent = siteContent["main-content"]["about-h4"]
topContentText2.querySelector('p').textContent = siteContent["main-content"]["about-content"]

// middle image

const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent["main-content"]["middle-img-src"]

// bottom

const bottomContentText = document.querySelectorAll('.bottom-content .text-content')

bottomContentText[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"]
bottomContentText[0].querySelector('p').textContent = siteContent["main-content"]["services-content"]
bottomContentText[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"]
bottomContentText[1].querySelector('p').textContent = siteContent["main-content"]["product-content"]
bottomContentText[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"]
bottomContentText[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"]

// contact

const contact = document.querySelector('.contact')
contact.querySelector('h4').textContent = siteContent["contact"]["contact-h4"]
contact.querySelector('p:nth-of-type(1)').textContent = siteContent["contact"]["address"]
contact.querySelector('p:nth-of-type(2)').textContent = siteContent["contact"]["phone"]
contact.querySelector('p:nth-of-type(3)').textContent = siteContent["contact"]["email"]

// footer

document.querySelector('footer p').textContent = siteContent["footer"]["copyright"]