
let url = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=united%20states&api_key=6d5b312a15cc01ff5104a98e9cd8f04a&format=json"
  // console.log(url)

  $.get(url, function(data) {
    // console.log(data);
    let song1 = data.tracks.track[0].name
    let artist1 = data.tracks.track[0].artist.name
  $("#song1").text(song1 + " by " + artist1)
    let track1 = data.tracks.track[0].image[3]["#text"]
  $("#track1").attr('src',track1)
    let song2 = data.tracks.track[1].name
    let artist2 = data.tracks.track[1].artist.name
  $("#song2").text(song2 + " by " + artist2)
    let track2 = data.tracks.track[1].image[3]["#text"]
  $("#track2").attr('src',track2)
    let song3 = data.tracks.track[2].name
    let artist3 = data.tracks.track[2].artist.name
  $("#song3").text(song3 + " by " + artist3)
    let track3 = data.tracks.track[2].image[3]["#text"]
  $("#track3").attr('src',track3)

  })
