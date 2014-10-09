$ ->
  initHeader()
  initProjects()
  return

$(window).scroll ->
  top_pos = $(window).scrollTop()
  $sitename = $('.sitename')
  $downicon = $('.down-icon')

  if top_pos > 100
    $sitename.addClass('small cursor-pointer')
    $downicon.removeClass('visible')
  else
    $sitename.removeClass('small cursor-pointer')
    $downicon.addClass('visible')
  return

initHeader = ->
  $('.sitename').addClass('visible').on 'click', ->
    $('body').animate scrollTop: 0

  $('.down-icon').addClass('visible').on 'click', ->
    $('body, html').animate scrollTop: 700, 1000
  return

initProjects = ->
  $('.fa-expand').on 'click', ->
    $block = $(this).parent()
    $page = $('body, html')
    body_height = $('body').outerHeight()

    if $block.hasClass('expanded')
      #400 - project container height
      $page.animate scrollTop: ($block.offset().top - (body_height - 400) / 2)
      $block.removeClass('expanded')
    else
      $page.animate scrollTop: $block.offset().top
      $block.addClass('expanded')

    $(this).toggleClass('fa-compress')
  return