Template.pictureGallery.onRendered(function () {
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
      $('.slide').click(function () {
        console.log('click');
        $('#swipebox-next').trigger('click')
      })
  }).on('jg.resize', function (e) {
    // this callback runs after the gallery is resized
  }).on('jq.rowflush', function (e) {
    // this callback runs when a new row is ready
  });
})

Template.pictureGallery.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('taoMap', function(map) {
    // Add a marker to the map once it's ready
    var pattayaAlbum = {
        url: '/foto/1 Thailand - Pattaya 11-10-2009.JPG',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(50, 38),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

    var turkeyAlbum = {
        url: '/foto/26 Turkey Picture - 12-09-2014.jpg',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(40, 53),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

    var kunmingAlbum = {
        url: '/foto/11 China - Kunming 20-03-2013.jpg',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(50, 67),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

    var italyAlbum = {
        url: '/foto/6 Italy 11-09-2011.jpg',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(50, 33),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(12.927608, 100.877081),
      map: map.instance,
      title: 'Pattaya',
      icon: pattayaAlbum,
    });

    var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(38.964314, 35.243196),
      map: map.instance,
      title: 'Turkey',
      icon: turkeyAlbum,
    });

    var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(24.880095, 102.832892),
      map: map.instance,
      title: 'Kunming',
      icon: kunmingAlbum,
    });

    var marker4 = new google.maps.Marker({
      position: new google.maps.LatLng(41.871940, 12.567380),
      map: map.instance,
      title: 'Italy',
      icon: italyAlbum,
    });
    // marker.addListener('click', function () {

    // });
    google.maps.event.addListener(marker, 'click', function () {
      $('.galleryMapImg1:first').trigger('click')
    })

    google.maps.event.addListener(marker2, 'click', function () {
      $('.galleryMapImg2:first').trigger('click')
    })

    google.maps.event.addListener(marker3, 'click', function () {
      $('.galleryMapImg3:first').trigger('click')
    })

    google.maps.event.addListener(marker4, 'click', function () {
      $('.galleryMapImg4:first').trigger('click')
    })
  });
});

Template.pictureGallery.helpers({
  images: function (album) {
    let theAlbum = {
      'pattaya': [
        'https://copy.com/PeNfZL92I1w10NIz',
        'https://copy.com/WP8fAYiaRigeH8Mr',
        'https://copy.com/2uzfsZzBII8zkgQI',
        'https://copy.com/BDZHVW4lMtOZTNRA',
        'https://copy.com/jrUCCeS1UqHS3QTS',
        'https://copy.com/XT8HXys0PsckW7w4',
        'https://copy.com/pX63wEF6BTEBDWFi',
        'https://copy.com/xwR8VPY1otMb3Vc8',
        'https://copy.com/9YzBtCg8nfNXX7MO',
        'https://copy.com/JYghl4nAZniLeYK7',
        'https://copy.com/ibG8RQcJqXqGnchi',
        'https://copy.com/CTHJUqiPfQkwXEDZ',
        'https://copy.com/CS3nugJEE2n4I8Se'
      ],
      'turkey': [
        'https://copy.com/HFYswTLXBf1J8ULW',
        'https://copy.com/gdz1ccN2NOuDspJr',
        'https://copy.com/yGRyR9EsJcIhNvep',
        'https://copy.com/BPjHPYzyCSJWLgIU',
        'https://copy.com/IrqOLpi37z8zPH1C',
        'https://copy.com/m0HUXfkH6RTbF7RP',
        'https://copy.com/p9zVTR6yLFQbkitB',
        'https://copy.com/ZXW0PA6gtNr8aWrO',
        'https://copy.com/D6lgxOJLOmhzhpdI',
      ],
      'kunming': [
        'https://copy.com/JQxwtveLepwgTCjT',
        'https://copy.com/pGPM6kSsCr0JWBa1',
        'https://copy.com/VVClxNMnsjtnf2OW',
        'https://copy.com/lUhgez1cU12zd9vc',
        'https://copy.com/Xpmy7DshPHIJZQ4m',
        'https://copy.com/1QDVmkx4seESLxHM',
        'https://copy.com/hlPVWs6zlhumMCzc',
        'https://copy.com/oCtxkf9rPiUpdeCl',
        'https://copy.com/2tmci0JgYoLK9Vbx',
        'https://copy.com/Dfp0Wv1yQ4KJCCax',
        'https://copy.com/SXnvBfxNTCQWyfCM',
        'https://copy.com/M1zg24P3Nt7EfK7s',
        'https://copy.com/v7vAESoJOKcBnA6L',
      ],
      'italy': [
        'https://copy.com/hiIGLYUmdcfnvYmo',
        'https://copy.com/DvbY2Bq6dQ0dpHgO',
        'https://copy.com/EY1s24J7hmM8bKd7',
        'https://copy.com/XEnrRR94neKRSQfF',
        'https://copy.com/7lC2AAuAw9DTOLUs',
        'https://copy.com/fD099rszb3dG1JGQ',
        'https://copy.com/7gxHyQZdTMFhEafy',
        'https://copy.com/mdx6ptLTPZRurqRX',
        'https://copy.com/NfknDlfEMta4TJKQ',
        'https://copy.com/ur7gGIVfLBRUb88s',
        'https://copy.com/AIxiJPcpg3620rWK',
        'https://copy.com/D4H1gwjyUEd3xYn8',
        'https://copy.com/2MkPzs6UIHXvMSTR',
        'https://copy.com/Ibfuo3I337DTmbqz',
        'https://copy.com/Rwse4kqIlsD29ULZ',
      ]
    }
    return theAlbum[album]
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
        zoom: 2
      };
    }
  }
})
