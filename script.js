
    /* Minimal JS (older syntax as preferred) */
    (function(){
      var mobileToggle = document.getElementById('mobile-toggle');
      var nav = document.querySelector('nav.primary');
      var demoBtns = document.querySelectorAll('#nav-demo, #hero-demo');

      function toggleNav(){
        var expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        if(!expanded){
          nav.style.display = 'flex';
          nav.style.flexDirection = 'column';
          nav.style.marginRight = '1rem'
          mobileToggle.setAttribute('aria-expanded','true');
        } else {
          nav.style.display = 'none';
          mobileToggle.setAttribute('aria-expanded','false');
        }
      }

      mobileToggle.addEventListener('click', toggleNav);

      for(var i=0;i<demoBtns.length;i++){
        demoBtns[i].addEventListener('click', function(){
          window.location.href = '#';
        });
      }

      // graceful desktop reset
      window.addEventListener('resize', function(){
        if(window.innerWidth >= 860){
          nav.style.display = 'flex';
        } else {
          nav.style.display = 'none';
          mobileToggle.setAttribute('aria-expanded','false');
        }
      });
    }());