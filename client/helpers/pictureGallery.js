Template.pictureGallery.onRendered(function () {
  //   $('#gallery').justifiedGallery({
  //   // option: default,
  //   rowHeight: 120,
  //   maxRowHeight: 0,
  //   lastRow: 'nojustify',
  //   fixedHeight: false,
  //   captions: true,
  //   margins: 1,
  //   randomize: false,
  //   extension: /.[^.]+$/,
  //   refreshTime: 250,
  //   waitThumbnailsLoad: true,
  //   justifyThreshold: 0.35,
  //   cssAnimation: false,
  //   imagesAnimationDuration: 300
  // }).on('jg.complete', function (e) {
  //   // this callback runs after the gallery layout is created
  //     $('#gallery img').swipebox();
  // }).on('jg.resize', function (e) {
  //   // this callback runs after the gallery is resized
  // }).on('jq.rowflush', function (e) {
  //   // this callback runs when a new row is ready
  // });

  GoogleMaps.load();
})

Template.pictureGallery.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('taoMap', function(map) {
    // Add a marker to the map once it's ready
    var image = {
        url: '/m1_thumbnail.jpg',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(150, 90),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
      title: 'Hello',
      icon: image,
    });
    marker.addListener('click', add_google_logo);


    function add_google_logo() {
      $(this).swipebox()
    }


  });
});

Template.pictureGallery.events({

})

Template.pictureGallery.helpers({
  images: function () {
    photos = [
      {url: '/m1.jpg'},
      {url: '/m2.jpg'},
      {url: '/m3.jpg'},
      {url: '/m4.jpg'},
      {url: '/m5.jpg'},
      {url: '/m6.jpg'},
      {url: '/m7.jpg'},
      {url: '/m8.jpg'},
      {url: '/m9.jpg'},
      {url: '/m10.jpg'},
      {url: '/m11.jpg'},
      {url: '/m12.jpg'},
      {url: '/m13.jpg'}

    ]
    return photos
  },


  mapGallery: function() {
     var latLng = Geolocation.latLng();
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded() && latLng) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        options: {
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        zoom: 8

      };
    }
  }
})
