window.addEventListener("load", function(){
    setTimeout(function(){
        document.getElementById("loading").classList.remove("active");
    },3000)
})


 function showElementAnimation() {

    var element = document.getElementsByClassName('js-animation');
    if(!element) return; 
    
    var showTiming = window.innerHeight > 768 ? 200 : 40; 
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
  
    for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } 
    }
  }

  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);

  $(function () {
    $('.js-btn').on('click', function () {        
      $('.menu , .btn-line').toggleClass('open'); 
    })
  });

  var startPos = 0,winScrollTop = 0;
  $(window).on('scroll',function(){
      winScrollTop = $(this).scrollTop();
      if (winScrollTop >= startPos) {
          $('.header').addClass('hide');
      } else {
          $('.header').removeClass('hide');
      }
      startPos = winScrollTop;
  });
  
  $(function() {
    var btn = $('.scllor_btn');
    
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 100) {
        btn.addClass('active');
      }else{
        btn.removeClass('active');
      }
    });
  
    btn.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      });
    });
  });
