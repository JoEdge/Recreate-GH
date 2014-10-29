$( document ).ready(function() {


//API info

var user_url = 'https://api.github.com/users/joedge';

var star_url = 'https://api.github.com/users/joedge/starred';

var org_url = 'https://api.github.com/users/joedge/orgs';

var repo_url = 'https://api.github.com/users/joedge/repos';

Handlebars.registerHelper("prettyDate", function(date) {
return new Date(date).toString('MMM'+'dd'+' yyyy')
});

//info from user url

var render = Handlebars.templates['header'];

var renderedTop = Handlebars.templates['user_top'];

var renderedMiddle1 = Handlebars.templates['sidebar_middle1'];

var renderedMiddle3 = Handlebars.templates['sidebar_middle2'];

  $.getJSON(user_url).done( function(user_data){

    $('.header_image').html(render(user_data));

    $('.sidebar_top').html(renderedTop(user_data));
    $('.sidebar_middle').append(renderedMiddle1(user_data));
  $('.sidebar_middle').append(renderedMiddle3(user_data));
});


//Sidebar middle - star info
var renderedMiddle2 = Handlebars.templates['sidebar_middle3'];

  $.getJSON(star_url).done( function(star_data){

    _.each(star_data, function(a){

    $('.sidebar_middle').append(renderedMiddle2(a));
});

});

//Sidebar bottom - org info
var renderedOrg = Handlebars.templates['sidebar_bottom'];

  $.getJSON(org_url).done( function(org_data){

    _.each(org_data, function(a){

    $('.sidebar_bottom').html(renderedOrg(a));
});

});

//Right side main info
var rendered = Handlebars.templates['repo_main'];

  $.getJSON(repo_url).done( function(repo_data){

    _.each(repo_data, function(a){

  $('.repo_info').append(rendered(a));

});

});

});
