
  // === Preloader ===
  window.addEventListener('load', () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        document.getElementById('mainContent').classList.remove('hidden');
      }, 500);
    }, 1000);
  });

  // === Mobile Menu Toggle ===
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

  // === Language Toggle ===
  let lang = "en";
  const langBtn = document.getElementById("langBtn");
  const mobileLangBtn = document.getElementById("mobileLangBtn");
  const langFlag = document.getElementById("langFlag");
  const mobileLangFlag = document.getElementById("mobileLangFlag");

  const navLinks = document.querySelectorAll(".md\\:flex .relative, .mobile-link, #mobileMenu a");
  const searchInputs = document.querySelectorAll('input[type="text"]');

  const text = {
    en: ["Home","About","Services","Projects","Blog","Contact"],
    ar: ["الرئيسية","من نحن","الخدمات","المشاريع","المدونة","تواصل"]
  };
  const placeholder = { en:"Search...", ar:"ابحث..." };

  function toggleLang(){
    lang = lang==="en"?"ar":"en";
    const flagSrc = lang==="en"?"https://flagcdn.com/w20/us.png":"https://flagcdn.com/w20/eg.png";
    langFlag.src = flagSrc;
    mobileLangFlag.src = flagSrc;

    // Desktop links
    document.querySelectorAll(".md\\:flex a").forEach((link,i)=> link.textContent = text[lang][i]);
    // Mobile links
    document.querySelectorAll("#mobileMenu a").forEach((link,i)=> link.textContent = text[lang][i]);
    // Search placeholders
    searchInputs.forEach(input=> input.placeholder = placeholder[lang]);
  }

  langBtn.addEventListener("click", toggleLang);
  mobileLangBtn.addEventListener("click", toggleLang);


  const heroBg = document.getElementById('hero-bg');
const heroContent = document.getElementById('hero-content');
const h1 = heroContent.querySelector('h1');
const p = heroContent.querySelector('p');
const button = heroContent.querySelector('button');



// مصفوفة المحتوى
const slides = [
  {
    bg:"img/img1.jpg",
    title: 'إدارة مالية للشركات',
    text: 'نساعدك على تنظيم أعمالك وتحقيق النمو المستدام',
    btn: 'تواصل معنا'
  },
  {
    
    bg:"img/images1.jpg",

    title: 'خدمات إدارية احترافية',
    text: 'نقدم حلول متكاملة لتطوير شركتك',
    btn: 'اطلب استشارة'
  },
  {


    bg:"img/images2.jpg",
    title: 'تحليل مالي دقيق',
    text: 'نساعدك على اتخاذ قرارات مالية أفضل',
    btn: 'ابدأ الآن'
  },
    {


    bg:"img/pngtree-corporate-executive-analyzing-financial-figures-during-a-board-meeting-photo-image_42705082.jpg",
    title: 'تحليل مالي دقيق',
    text: 'نساعدك على اتخاذ قرارات مالية أفضل',
    btn: "مرحبا بكم"
  }
  
];

let index = 0;

function changeSlide() {
  const slide = slides[index];
  heroBg.style.backgroundImage = `url(${slide.bg})`;
  h1.textContent = slide.title;
  p.textContent = slide.text;
  button.textContent = slide.btn;

  index = (index + 1) % slides.length;
}

// تغيير كل ثانية
changeSlide();
setInterval(changeSlide, 2000);



  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('span:last-child');

      // Toggle content
      content.classList.toggle('hidden');

      // Rotate icon
      icon.classList.toggle('rotate-45');

      // Optionally close other items
      accordionBtns.forEach(otherBtn => {
        if(otherBtn !== btn) {
          otherBtn.nextElementSibling.classList.add('hidden');
          otherBtn.querySelector('span:last-child').classList.remove('rotate-45');
        }
      });
    });
  });





const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200; // سرعة العد

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});


const slider = document.getElementById('slider');
let scrollPos = 0;

function autoSlide() {
  scrollPos += 1; // سرعة السلايدر
  if (scrollPos >= slider.scrollWidth - slider.clientWidth) {
    scrollPos = 0; // يرجع البداية
  }
  slider.scrollLeft = scrollPos;
  requestAnimationFrame(autoSlide);
}

autoSlide();
