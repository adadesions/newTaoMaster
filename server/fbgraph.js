FBGraph.setAccessToken('CAACEdEose0cBAGfFhz0bDH478qAcFhXGFkS3OtZALZC19Ecx7oELD3iwx5nToOLOrMQe8ZBiaM7aK2ZBkeRjVaX29Q9ZCEcr0pKEhodFEvfQfiwJZAb6gmPV9LOQ1ahmhZB71aVzolSaCdojXKZADHMctrB32jdA1zDcpgiTGb5A4zakChliZCTSUZBjfNHmSwEc1MVDd9ZBBqTx9uZAZBGxZCH2UG')

Meteor.methods({
  getFbImages: function (albumId) {
   let fb = FBGraph.get('/'+albumId+'?fields=photos{images}', function (err,res) {
     console.log(res);
   })
   return fb.options.uri
  }
})
