#Br-team-stream 

Allows you to access personalized bleacher report news from your favorite team 

Just pass in an array of teams you\'re interested in like the example below, and it will return a list of objects with the articles' name source and image

Usage
```
var getTeamStream = require('br-team-stream')
getTeamStream(['philadelphia-eagles', 'chicago-bulls', 'los-angeles-lakers'], function (err, res) { 
  if (err) console.log(err)
  res.forEach(function (item) { 
    console.log(item.title)
  })
})
```
Lisence is ISC
