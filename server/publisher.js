Meteor.publish('allMarkers', function () {
  return Markers.find()
})
