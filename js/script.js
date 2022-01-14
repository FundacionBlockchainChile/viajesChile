$(function () {
  ;('use strict')

  // CONSTANTS
  const nav = $('nav')
  const form_btn = $('#form_btn')
  const close_modaL_one_btn = $('.modal_one .close_modal')
  const close_modaL_two_btn = $('.modal_two .close_modal')
  const check_email_btn = $('.check_email')
  const input_email = $('#input_email')

  // TOOLTIP SCRIPT
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // HIDE DROPABLE MENU AFTER ITEM CLICK
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide')
  })

  // WINDOWS SCROLL DETECT
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop()
    if (scroll > 300) $(nav).removeClass('backTransparent')
    else $(nav).addClass('backTransparent')
  })

  form_btn.click((event) => {
    event.stopPropagation()
    console.log('stoped')
    $('.modal_one').removeClass('hide')
    event.stopPropagation()
  })

  close_modaL_one_btn.click((event) => {
    event.stopPropagation()
    $('.modal_one').toggleClass('hide')
  })

  close_modaL_two_btn.click((event) => {
    event.stopPropagation()
    $('.modal_two').toggleClass('hide')
  })

  // CHECK VALID MAIL FORMAT
  check_email_btn.on('click', () => {
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
    if (testEmail.test(input_email.val())) {
      $('.modal_one').toggleClass('hide')
      input_email.val('')
      $('.modal_two').toggleClass('hide')
    } else {
      alert(`Please enter a valid email`)
    }
  })
})
