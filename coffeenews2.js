$(document).ready(function () {
  $('.button-collapse').sideNav();
  $('.carousel.carousel-slider').carousel({ fullWidth: true });
});

$.get('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=d3c7138c3b3b4fbfa75ea4c537b2a552', function (data) {
  console.log(data.articles);
  for (var i = 0; i < data.articles.length; i++) {
    var image = document.createElement('img');
    var anchor = document.createElement('a');
    image.setAttribute('src', data.articles[i].urlToImage);
    anchor.setAttribute('href', data.articles[i].url);
    anchor.innerHTML = data.articles[i].title;
    document.getElementById('last').appendChild(image);
    document.getElementById('last').appendChild(anchor);
  }
});

$.get('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=d3c7138c3b3b4fbfa75ea4c537b2a552', function (data) {
  console.log(data.articles);
  for (var i = 0; i < data.articles.length; i++) {
    var image = document.createElement('img');
    var anchor = document.createElement('a');
    image.setAttribute('src', data.articles[i].urlToImage);
    anchor.setAttribute('href', data.articles[i].url);
    anchor.innerHTML = data.articles[i].title;
    document.getElementById('last').appendChild(image);
    document.getElementById('last').appendChild(anchor);
  }
});

$.get('https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=d3c7138c3b3b4fbfa75ea4c537b2a552', function (data) {
  console.log(data.articles);
  for (var i = 0; i < data.articles.length; i++) {
    var image = document.createElement('img');
    var anchor = document.createElement('a');
    image.setAttribute('src', data.articles[i].urlToImage);
    anchor.setAttribute('href', data.articles[i].url);
    anchor.innerHTML = data.articles[i].title;
    document.getElementById('last').appendChild(image);
    document.getElementById('last').appendChild(anchor);
  }
});
