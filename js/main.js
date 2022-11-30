
"use strict"

document.addEventListener('DOMContentLoaded', function () {


   //=====================================================================================================
   const wrapper = document.querySelector('.wrapper');
   if (wrapper && !wrapper.classList.contains('_loaded')) {
      wrapper.classList.add('_loaded');
   }
   //=====================================================================================================   
});
//Меню бургер

if (document.querySelector(".icon-menu")) {
   document.addEventListener("click", function (e) {
      if (e.target.closest('.icon-menu')) {
         document.documentElement.classList.toggle("menu-open");
      }
   });
};
