'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // Modal variables
  const modal = document.querySelector('[data-modal]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

  // Modal function
  const modalCloseFunc = function () { modal.classList.add('closed') };

  // Modal eventListeners
  if (modalCloseOverlay && modalCloseBtn) {
    modalCloseOverlay.addEventListener('click', modalCloseFunc);
    modalCloseBtn.addEventListener('click', modalCloseFunc);
  }

  // Notification toast variables
  const notificationToast = document.querySelector('[data-toast]');
  const toastCloseBtn = document.querySelector('[data-toast-close]');

  // Notification toast eventListener
  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', function () {
      if (notificationToast) {
        notificationToast.classList.add('closed');
      }
    });
  }

  // Mobile menu variables
  const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
  const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
  const overlay = document.querySelector('[data-overlay]');

  for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    const mobileMenu = document.querySelector(`[data-mobile-menu="${i}"]`);

    // Mobile menu function
    const mobileMenuCloseFunc = function () {
      if (mobileMenu && overlay) {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    // Mobile menu eventListeners
    if (mobileMenuOpenBtn[i] && mobileMenuCloseBtn[i]) {
      mobileMenuOpenBtn[i].addEventListener('click', function () {
        if (mobileMenu && overlay) {
          mobileMenu.classList.add('active');
          overlay.classList.add('active');
        }
      });

      mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
      overlay.addEventListener('click', mobileMenuCloseFunc);
    }
  }

  // Accordion variables
  const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
  const accordion = document.querySelectorAll('[data-accordion]');

  for (let i = 0; i < accordionBtn.length; i++) {

    accordionBtn[i].addEventListener('click', function () {

      const clickedBtn = this.nextElementSibling && this.nextElementSibling.classList.contains('active');

      for (let j = 0; j < accordion.length; j++) {

        if (clickedBtn) break;

        if (accordion[j] && accordion[j].classList.contains('active')) {

          accordion[j].classList.remove('active');
          if (accordionBtn[j]) {
            accordionBtn[j].classList.remove('active');
          }
        }
      }

      if (this.nextElementSibling) {
        this.nextElementSibling.classList.toggle('active');
      }
      this.classList.toggle('active');
    });
  }
});
