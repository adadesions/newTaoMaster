Template.pictureGallery.onRendered(function () {
    $('#gallery').justifiedGallery({
    // option: default,
    rowHeight: 120,
    maxRowHeight: 0,
    lastRow: 'nojustify',
    fixedHeight: false,
    captions: true,
    margins: 1,
    randomize: false,
    extension: /.[^.]+$/,
    refreshTime: 250,
    waitThumbnailsLoad: true,
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
})
