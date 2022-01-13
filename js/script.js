$(function () {
  ;('use strict')

  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide')
  })

  let nav = $('nav')
  let send_btn = $('#send_btn')
  // let $inicio_btn = $('#inicio_btn')

  // let $btn_one = $('#button_one')
  // let $btn_two = $('#button_two')
  // let $btn_three = $('#button_three')
  let $modal = $('.my_modal')
  let $open_modal_btn = $('.open_modal')
  let $close_modaL_btn = $('.close_modal')
  let $check_email_btn = $('.check_email')
  let $input_email = $('#input_email')

  $('.desc_one').toggle()
  $('.desc_two').toggle()
  $('.desc_three').toggle()
  // $modal.toggle()

  // SCROLL
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop()
    if (scroll > 300) $(nav).removeClass('backTransparent')
    else $(nav).addClass('backTransparent')
  })

  send_btn.click(() => {
    $navbarNav.toggleClass('show')
  })

  // // $inicio_btn.on('click', () => {
  // //   $navbarNav.toggleClass('show')
  // // })

  // $btn_one.on('click', () => {
  //   $('.desc_one').toggle()
  //   $btn_one.toggleClass('fa-arrow-alt-circle-down fa-arrow-alt-circle-up')
  // })

  // $btn_two.on('click', () => {
  //   $('.desc_two').toggle()
  //   $btn_two.toggleClass('fa-arrow-alt-circle-down fa-arrow-alt-circle-up')
  // })

  // $btn_three.on('click', () => {
  //   $('.desc_three').toggle()
  //   $btn_three.toggleClass('fa-arrow-alt-circle-down fa-arrow-alt-circle-up')
  // })

  // $open_modal_btn.on('click', () => {
  //   $('.my_modal').toggle()
  // })

  // $close_modaL_btn.on('click', () => {
  //   $('.my_modal').toggle()
  //   $input_email.val('')
  // })

  // $check_email_btn.on('click', () => {
  //   var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
  //   if (testEmail.test($input_email.val())) {
  //     alert(`Your email was sended. Thanks!`)
  //     $('.my_modal').toggle()
  //     $input_email.val('')
  //   } else {
  //     alert(`Please enter a valid email`)
  //   }
  // })
})
