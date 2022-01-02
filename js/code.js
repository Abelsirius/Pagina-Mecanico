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


/* -------------------------- ScrollReveal --------------------- */


const sr = ScrollReveal({
  distance:"60px",
  duration:2800,
  reset:true
})


sr.reveal(".content_titulo_inicio,.titulo_about,.subtitulo_about,.imgBx_about,.content_titulo,.card_servicio,.card_galeria,.content_data,.geolocation_maps,.content_form,.content_up_footer,.footer_reglas",{
  origin: "top",
  interval: 100
})


/* -------------------- Form WhatsApp ------------------ */


let contentIcon = document.querySelector('.content_icon_whatsapp');
let formWhatsApp = document.querySelector('.form_whatsapp')
let btnWhatsApp = document.querySelector('#btn_close_whats');


const toogleFormWhatsApp = () =>{
       
   formWhatsApp.classList.toggle('active');

}

contentIcon.addEventListener('click',toogleFormWhatsApp)

const closeFormWhats = () =>{
  formWhatsApp.classList.remove('active');
}

btnWhatsApp.addEventListener('click',closeFormWhats)

/* -------------------- Api WhatsApp ------------------ */

const sendMensaje = (e) =>{
   e.preventDefault()
   let name = document.querySelector('.nombre-input-whatsapp');
   let text = document.querySelector('.mensaje-input-whatsapp');
   let url = "https://api.whatsapp.com/send?phone=51922260216&text=Nombre: %0A" + name.value + "%0a%0AMensaje: %0A" + text.value + "%0A";
   if(name.value.length > 0 && text.value.length > 0){
    window.open(url)
    name.value = '';
    text.value = '';
    formWhatsApp.classList.remove('active');
   }else{
       if(formWhatsApp.lastElementChild.classList.contains('error-whatsapp') === false){
        let error = document.createElement('H3');
        error.classList.add('error-whatsapp')
        error.textContent = "Por favor rellene los campos";
        error.style.color = '#fa4e4e';
        error.style.padding = '0 0 8px 0'
        formWhatsApp.appendChild(error)
       }
   }
}

formWhatsApp.addEventListener('submit',sendMensaje)
