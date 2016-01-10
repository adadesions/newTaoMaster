Template.courseShow.onRendered(function () {
  Session.set('courseContainer','healingCourse')

})


Template.courseShow.helpers({
  courseContainer: function () {
    return Session.get('courseContainer')
  }
})

Template.courseShow.events({
  'click .item': function (e) {
    let courseId = $(e.target).attr('id')
    Session.set('courseContainer',courseId)
  }
})
