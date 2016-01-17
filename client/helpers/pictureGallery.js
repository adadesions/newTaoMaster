Template.pictureGallery.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('taoMap', function(map) {
    // Add a marker to the map once it's ready
    var markers = {}
    Markers.find().observe({
      //Start added
      added: function(doc) {
        let album = {
          url: doc.thumbnailUrl,
          size: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32)
        }
        let marker = new google.maps.Marker({
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(doc.lat, doc.lng),
          map: map.instance,
          icon: album,
          id: doc._id
        })
        google.maps.event.addListener(marker, 'click', function (e) {
          Session.set('albumId', doc._id)
          $('.current-album').swipebox({            
            useSVG: false
          })
          Meteor.setTimeout(function () {
            $('.current-album:first').trigger('click')
          },500)
        })
        markers[doc._id] = marker
      } //End added
    })
  });
});

Template.pictureGallery.onRendered(function () {
    Meteor.subscribe('allMarkers')
    GoogleMaps.load();

    $('#gallery').justifiedGallery({
    // option: default,
    rowHeight: 120,
    maxRowHeight: 0,
    lastRow: 'nojustify',
    fixedHeight: false,
    captions: false,
    margins: 1,
    randomize: false,
    extension: /.[^.]+$/,
    refreshTime: 250,
    waitThumbnailsLoad: false,
    justifyThreshold: 0.35,
    cssAnimation: false,
    imagesAnimationDuration: 300
  }).on('jg.complete', function (e) {
    // this callback runs after the gallery layout is created
      $('#gallery img').swipebox();
  }).on('jg.resize', function (e) {
    // this callback runs after the gallery is resized
  }).on('jq.rowflush', function (e) {
    // this callback runs when a new row is ready
  });
})


Template.pictureGallery.helpers({
  images: function (album) {
    let albumId = Session.get('albumId')
    return Markers.find({_id:albumId})
  },
  mapGallery: function() {
    // var latLng = Geolocation.latLng();
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(12.927608, 100.877081),
        options: {
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        zoom: 2
      };
    }
  }
})
