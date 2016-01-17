Template.navigator.events({
  'click a': function () {
    console.log('check');
    $('.show-navbar').addClass('collapsed').attr('aria-expanded',false)
    $('.navbar-collapse').removeClass('in').attr('aria-expanded',false)
  }
})
