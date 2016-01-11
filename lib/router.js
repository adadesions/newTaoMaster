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
