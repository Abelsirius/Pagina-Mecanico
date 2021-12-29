      let btnMenu = document.querySelector('.nav_menu_icon');
      let iconMenu = document.querySelector('.fa-bars')

      
      const toggleMenu = () =>{
         
        let navMenu = document.querySelector('.nav_menu');

         navMenu.classList.toggle('active');
         
         if(navMenu.classList.contains('active')){
          iconMenu.className ="fas fa-times";
         }else{
          iconMenu.className ="fas fa-bars";

         }
      }

      btnMenu.addEventListener('click',toggleMenu)



// Anter y Despues de los carros 


let ListBtn = document.querySelectorAll('.galeria-btn');
let closeModal = document.querySelector('.close_modal');


ListBtn.forEach(btn => {
   btn.addEventListener('click', MostrarAntesDespues)
})

function MostrarAntesDespues (e){
                        
   
  e.preventDefault()
  
  let modalAntesDespues = document.querySelector('.container_mostrar_antes_depues');

  modalAntesDespues.classList.add('active')

}


const cerrarModal = () =>{
   
  let modalAntesDespues = document.querySelector('.container_mostrar_antes_depues');

  modalAntesDespues.classList.remove('active')

}


closeModal.addEventListener('click', cerrarModal)


/* ------ Slider Antes y Despues  -------*/


var swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/* ------ header  -------*/


let header = document.querySelector('header');


const activeHeader = () =>{
    
   let pageY  = window.scrollY;

   if(pageY > 0){
     header.classList.add('active')
   }
   else{
    header.classList.remove('active')
   }

}

window.addEventListener('scroll',activeHeader)



/* ------------- Theme-page-dark --------------*/


let icono = document.querySelector('.icono_theme');


const darkTheme = () =>{

  if(icono.classList.contains('fa-moon')){
     icono.classList.replace('fa-moon','fa-sun')
     document.querySelector('body').classList.add('dark-theme')
  }else{
  icono.classList.replace('fa-sun','fa-moon')
  document.querySelector('body').classList.remove('dark-theme')
  }

}


icono.addEventListener('click',darkTheme)
