Template.blockSocial.onRendered(function () {
  $('#gallerySocial').justifiedGallery({
  // option: default,
  rowHeight: 70,
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
  rel : 'gallery1',
  imagesAnimationDuration: 300
    }).on('jg.complete', function (e) {
      // this callback runs after the gallery layout is created
      $('#gallerySocial img').swipebox();
    }).on('jg.resize', function (e) {
      // this callback runs after the gallery is resized
    }).on('jq.rowflush', function (e) {
      // this callback runs when a new row is ready
    });

})


Template.blockSocial.helpers({
  images: function () {
    photos = [
      {url: '/m1_thumbnail.jpg'},
      {url: '/m2_thumbnail.jpg'},
      {url: '/m3_thumbnail.jpg'},
      {url: '/m4_thumbnail.jpg'},
      {url: '/m5_thumbnail.jpg'},
      {url: '/m6_thumbnail.jpg'},
      {url: '/m7_thumbnail.jpg'},
      {url: '/m8_thumbnail.jpg'},
      {url: '/m9_thumbnail.jpg'},
      {url: '/m10_thumbnail.jpg'},
      {url: '/m11_thumbnail.jpg'},
      {url: '/m12_thumbnail.jpg'},
      {url: '/m13_thumbnail.jpg'}
    ]
    return photos
  }
})
