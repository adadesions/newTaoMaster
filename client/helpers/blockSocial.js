Template.blockSocial.onRendered(function () {
  $('#gallerySocial').justifiedGallery({
    lastRow : 'nojustify',
    rowHeight : 100,
    rel : 'gallery1',
    margins : 1
}).on('jg.complete', function () {
    $('#gallerySocial img').swipebox();
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
