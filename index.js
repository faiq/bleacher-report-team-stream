var request = require('request') 
  , cheerio = require('cheerio') 
  , base = 'http://bleacherreport.com/front_page/user_stream_teams'

function buildArticle (title, source, imageLink) { 
  return { 
    title: title,
    source: source,
    imageLink: imageLink
  } 
}

function buildRequestOptions(arr)  {
  var teams = '?teams='  
  teams = teams + arr.join('+') + '&json=true'
  base = base + teams
  return options = { 
    uri: base,
    method: "GET"
  } 
} 

function getTeamStream (arr, cb) {  
  var options = buildRequestOptions(arr)
    , retArr = []
  request(options, function (err, res, body) { 
    if (err) cb(err, null)
    body = JSON.parse(body)
    $ = cheerio.load(body.one_stream)
    $('.uber-stream-container .body .uber-stream-items #team-stream-carousel ul li').each(function(i, elem) { 
      var img = $(this).find('.image-with-caption img').attr('data-defer-src')
        , headline = $(this).find('h2').text().trim()
        , source = $(this).find('.credit').text()
      retArr.push(buildArticle(headline, source, img))
    })
    cb(null, retArr)
  })
}

module.exports = getTeamStream
