function activeLinks(linksClass, active) {
  const menu = document.querySelectorAll('.' + linksClass);
  function removeActive() {
      menu.forEach(function(link){
          const classLink = link.classList;
          classLink.remove(active);
      });
  }
  menu.forEach(function(link){
      link.addEventListener('click', function(event){
          removeActive();
          event.target.classList.add(active);
      });
  });
}
activeLinks('bar-link', 'active');

const btnTop = document.querySelector('#back-to-top');
const btnHome = document.querySelector('#home');
  btnTop.addEventListener('click', ()=>{
    scrollTo({top:0,behavior:"smooth"});
  });
  btnHome.addEventListener('click', ()=>{
    scrollTo({top:0, behavior:"smooth"});
  })   

const btnAbout = document.querySelector('#about');
  btnAbout.addEventListener('click', ()=>{
    scrollTo({top:700,behavior:"smooth"});
  });    

  
