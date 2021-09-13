$(document).on('click',function(e) {
	if ($(e.target).parents('.collapse-hide').length === 0) {
    	$('.collapse-hide').collapse('hide');	
    };
    if (
      !$(e.target).hasClass("show-cl-btn") &&
      $(e.target).parents(".add-show").length === 0 &&
      $(e.target).parents(".collapse-hide").length === 0
    ) {
      $(".add-show").removeClass('show');
    };
});
$(document).on('click', '.form-c-btn', function () {
  if ($(this).hasClass('show')) {
    $(this).removeClass('show');
    $(this).find('.md-text').text('Expand filter');
  } else {
    $(this).addClass('show');
    $(this).find('.md-text').text('Minimize filter');
  }
});
$(document).on('click', '.show-cl-btn', function () {
  if ($(this).parents(".add-show").hasClass('show')) {
    $(this).parents(".add-show").removeClass('show');
  } else {
    $(".add-show").removeClass('show');
    $(this).parents(".add-show").addClass('show');
  }
});
$(document).on('click', '.broker-btn', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).addClass('btn-warning');
    $(this).removeClass('btn-secondary');
  } else {
    $(this).addClass('active');
    $(this).removeClass('btn-warning');
    $(this).addClass('btn-secondary');
  }
});

$(document).on('click', '.hide-user-collapse', function () {
  $(".add-show").removeClass('show');
  $('.collapse-hide').collapse('hide');	
});
$('.dropdown-menu').on('click', function (e) {
  e.stopPropagation();
});
$('.quantity-button')
  .off('click')
  .on('click', function () {
    if ($(this).hasClass('quantity-add')) {
      var addValue = parseInt($(this).parent().find('input').val()) + 1;
      $(this).parent().find('input').val(addValue).trigger('change');
    }
    if ($(this).hasClass('quantity-remove')) {
      var removeValue = parseInt($(this).parent().find('input').val()) - 1;
      if (removeValue == 0) {
        removeValue = 1;
      }
      $(this).parent().find('input').val(removeValue).trigger('change');
    }
  });
$('.quantity input')
  .off('change')
  .on('change', function () {
    console.log($(this).val());
  });
// slider

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 5,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  spaceBetween: 10,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper = new Swiper('.search-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    570: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper('.d-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.d-next',
    prevEl: '.d-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
var swiper = new Swiper('.d-new-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.d1-next',
    prevEl: '.d1-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

console.log($('.d-slider .swiper-wrapper').height());
$('.dashboard-slider .swiper-slide').height(
  $('.d-slider .swiper-wrapper').height()
);
//broker

function brokerCarinfo(e, num) {
  $('.b-mcar-info').hide('slow');
  $('.car-ac').removeClass('bg-warning');
  $(e.currentTarget).toggleClass('bg-warning');

  $('#bcarInfo-' + num).show('slow');
}
$(window).on('load', function () {
  if ($(window).width() > 768) {
    $('.broker-car-table tr').removeClass('bg-warning');
  } else {
    $('.broker-car-table tr').eq(0).addClass('bg-warning');
  }
});
$(window).on('resize', function () {
  if ($(window).width() > 768) {
    $('.broker-car-table tr').removeClass('bg-warning');
  } else {
    $('.broker-car-table tr').removeClass('bg-warning');
    $('.broker-car-table tr').eq(0).addClass('bg-warning');
  }
});

// tab using select
$('.nav-tabs-selector').on('change', function (e) {
  $(this).closest(".tab-area").find('.nav-tabs a').eq($(this).val()).tab('show');
});

// steps to do
$('input[type=radio][name=name]').change(function() {
  $('.steps-to-do').find('.steps-item').removeClass('active');
  $(this).closest( '.steps-item' ).addClass('active');
});

function manufacture(e, num) {
  var m = $(e.currentTarget);
  if (m.is(':checked')) {
    $('#mfac-' + num).addClass('border-bottom-c');
    $('#car-model-' + num).show();
  } else {
    $('#mfac-' + num).removeClass('border-bottom-c');
    $('#car-model-' + num).hide();
  }
}