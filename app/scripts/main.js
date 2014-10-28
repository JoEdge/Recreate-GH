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

var tempMiddle1 = $('#user_middle_template1').html();
var renderedMiddle1 = Handlebars.compile(tempMiddle1);

var tempMiddle3 = $('#user_middle_template3').html();
var renderedMiddle3 = Handlebars.compile(tempMiddle3);

  $.getJSON(user_url).done( function(user_data){

    $('.header_image').html(render(user_data));

    $('.sidebar_top').html(renderedTop(user_data));

    $('.sidebar_middle').append(renderedMiddle1(user_data));

    $('.sidebar_middle').append(renderedMiddle3(user_data));
});


//Sidebar middle - star info
var tempMiddle2 = $('#user_middle_template2').html();

var renderedMiddle2 = Handlebars.compile(tempMiddle2);

  $.getJSON(star_url).done( function(star_data){

    _.each(star_data, function(a){

    $('.sidebar_middle').append(renderedMiddle2(a));
});

});

//Sidebar bottom - org info
var tempOrg = $('#user_bottom_template').html();

var renderedOrg = Handlebars.compile(tempOrg);

  $.getJSON(org_url).done( function(org_data){

    _.each(org_data, function(a){

    $('.sidebar_bottom').html(renderedOrg(a));
});

});

//Right side main info
var temp = $('#repo_template').html();
var rendered = Handlebars.compile(temp);

  $.getJSON(repo_url).done( function(repo_data){

    _.each(repo_data, function(a){

  $('.repo_info').append(rendered(a));

});

});

});
