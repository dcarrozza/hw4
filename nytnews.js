$(function() {
  let apiKey = "dc81afe67ef34938846aee28e6e6967b";
  let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + apiKey;
  // console.log(url)
    $.get(url, function(data) {
      // console.log(data);
    let newstitle1 = data.results[2].title
    $("#headline1").text(newstitle1)
    let content1 = data.results[2].abstract
    $("#content1").text(content1)
    let link1 = data.results[2].short_url
    $("#link1").attr('href',link1)

    let newstitle2 = data.results[3].title
    $("#headline2").text(newstitle2)
    let content2 = data.results[3].abstract
    $("#content2").text(content2)
    let link2 = data.results[3].short_url
    $("#link2").attr('href',link2)

    let newstitle3 = data.results[4].title
    $("#headline3").text(newstitle3)
    let content3 = data.results[4].abstract
    $("#content3").text(content3)
    let link3 = data.results[4].short_url
    $("#link3").attr('href',link3)

    let newstitle4 = data.results[5].title
    $("#headline4").text(newstitle4)
    let content4 = data.results[5].abstract
    $("#content4").text(content4)
    let link4 = data.results[5].short_url
    $("#link4").attr('href',link4)

    })
  })
