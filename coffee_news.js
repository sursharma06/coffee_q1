$.get('https://newsapi.org/v1/articles?source=newsweek&sortBy=top&apiKey=d3c7138c3b3b4fbfa75ea4c537b2a552', function (data) {
  //console.log(data.articles);
  var unorderedList = document.createElement('ul');
  for (var i = 0; i < data.articles.length; i++) {
    var list = document.createElement('li');
    var anchor = document.createElement('a');
    anchor.setAttribute('href', data.articles[i].url);
    anchor.innerHTML = data.articles[i].title;
    list.appendChild(anchor);
    unorderedList.appendChild(list);
    document.getElementById('newsweek').appendChild(unorderedList);
  }
});

$.get('https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=d3c7138c3b3b4fbfa75ea4c537b2a552', function (data) {
  // console.log(data.articles);
  var unorderedList = document.createElement('ul');
  for (var i = 0; i < data.articles.length; i++) {
    var list = document.createElement('li');
    var anchor = document.createElement('a');
    anchor.setAttribute('href', data.articles[i].url);
    anchor.innerHTML = data.articles[i].title;
    list.appendChild(anchor);
    unorderedList.appendChild(list);
    document.getElementById('buzzfeed').appendChild(unorderedList);
  }
});

var horoscope = document.getElementsByClassName('sign').innerHTML;

$.ajax({
    type: 'POST',
    url: 'https://aztro.herokuapp.com?sign=' + horoscope + '&day=today',
    success: function (data) {
      console.log(data);
    },
  });

$(document).ready(function () {
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown();
});
