Template.navigator.events({
  'click a': function () {e    
    $('.show-navbar').addClass('collapsed').attr('aria-expanded',false)
    $('.navbar-collapse').removeClass('in').attr('aria-expanded',false)
  }
})
