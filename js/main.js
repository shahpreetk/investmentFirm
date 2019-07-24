var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.075983, lng: 72.877655},
          zoom: 8
        });
      }
      $('navbar a, .btn').on('click', function(event) {
        if(this.hash !== ''){
          event.preventDefault();
          const hash=this.hash;
      
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 500
          },
          800,
        );
        }
      });