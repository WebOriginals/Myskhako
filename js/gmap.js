  var wWidth = $(window).innerWidth();

  function initMap() {
      var map = new google.maps.Map(
          document.getElementById('map'), {
              zoom: 17,
            //   zoom: 16, 
            //   center: {
            //           lat: 45.048605,
            //           lng: 38.985924
            //   },
              center: { 
                    //   lat: 45.048704,
                    //   lng: 38.984945
                    // lat: 45.037859,
                    // lng: 38.911795
                    lat: 44.657328,
                    lng: 37.759189
                    // lat: 45.038912, 
                    // lng: 38.917184 
              }, 
              scrollwheel: false,
                styles: [{
                    stylers: [{ 
                        saturation: -100
                    }]  
                }],
              // center: {
              //     lat: 44.597807,
              //     lng: 40.109275
              // },
              // center: {
              //     lat: 44.596524,
              //     lng: 40.109138
              // },
              // styles: [{
              //   stylers: [{
              //     saturation: -100
              //   }]
              // }]
          });

      var contentString =
          '<div class="info__item"><div class="info__title" style="font-size:1.1em;">Мысхако</div><div class="info__address">Адрес организации, улица , дом</div></div>';
      var infoWindow = new google.maps.InfoWindow({
          content: contentString
      });

      new google.maps.Marker({
          position: {
                    //   lat: 45.037859, 
                    //   lng: 38.911795
                     
                    lat: 44.657328,
                    lng: 37.757189
          },
          map: map,
        //   icon: 'img/baloon.png'
          icon: '../img/baloon.svg' 
        //   icon: 'img/baloon.svg' 
      }).addListener('click', function (event) {
          infoWindow.open(map, this);
      });

  }






