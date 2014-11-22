var assert = require('assert') 
  , nock = require('nock') 
  , teamStream = require('./index')

describe('pulling data for a valid team (The Eagles)', function (done) { 
  beforeEach(function () { 
    nock('http://bleacherreport.com')
      .get('/front_page/user_stream_teams?teams=philadelphia-eagles&json=true') 
      .replyWithFile(200, __dirname + '/mocks/mocks.json') 
  })
  it ('should return an array of objects', function (done) { 
    done()  
  }) 
  
  it ('every object should have a link, image, title, and articleLink', function (done) { 
    done()
  })  

})
