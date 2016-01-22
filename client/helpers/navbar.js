//Set Lang Session
Session.setDefault('lang','eng')

Template.registerHelper('isEng', function () {
  return Session.get('lang') === 'eng' ? true : false
})

Template.headHomePage.events({
  'click .us': function () {
    Session.set('lang', 'eng')
  },
  'click .it': function () {
    Session.set('lang','ita')
  }
})
