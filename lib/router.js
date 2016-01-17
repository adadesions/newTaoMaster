Router.configure({
  layoutTemplate: 'layouts'
})

Router.route('/', {
  path: '/',
  name: 'home'
})

Router.route('/taoMasa', {
  path: '/taoMasa',
  name: 'masterTaoMasa'
})

Router.route('/gallery', {
  path: '/gallery',
  name: 'pictureGallery'
})

Router.route('/videos', {
  path: '/videos',
  name: 'videoGallery'
})

Router.route('/testimonial', {
  path: '/testimonial',
  name: 'testimonial'
})

Router.route('/Contact', {
  path: '/Contact',
  name: 'contact'
})
// ita
 // Router.route('/ita', {
 //   path: '/ita',
 //   name: 'homeIta'
 // })
//
// Router.route('/taoMasaIta', {
//   path: '/taoMasaIta',
//   name: 'masterTaoMasaIta'
// })
//
// Router.route('/galleryIta', {
//   path: '/galleryIta',
//   name: 'pictureGalleryIta'
// })
//
// Router.route('/videosIta', {
//   path: '/videosIta',
//   name: 'videoGalleryIta'
// })
//
// Router.route('/testimonialIta', {
//   path: '/testimonialIta',
//   name: 'testimonialIta'
// })
//
// Router.route('/ContactIta', {
//   path: '/ContactIta',
//   name: 'contactIta'
