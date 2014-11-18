var request = require('request') 
  , cheerio = require('cheerio') 
  , url = 'http://bleacherreport.com/front_page/user_stream_teams?teams=philadelphia-eagles%2Bdallas-cowboys%2Bchicago-bulls&json=true'
  , options = { 
      uri: url
    , method: "GET" 
   }

function buildArticle (title, source, imageLink) { 
  return { 
    title: title,
    source: source,
    imageLink: imageLink
  } 
}

request(options, function (err, res, body) { 
  body = JSON.parse(body)
  $ = cheerio.load(body.one_stream)
  $('.uber-stream-container .body .uber-stream-items #team-stream-carousel ul li').each(function(i, elem) { 
    var img = $(this).find('.image-with-caption img').attr('data-defer-src')
      , headline = $(this).find('h2').text().trim()
      , source = $(this).find('.credit').text()
    console.log(JSON.stringify(buildArticle(headline, source, img)))
  })
})
