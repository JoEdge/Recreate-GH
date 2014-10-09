/*s

//Sidebar Main info

var tempUser = $('#user_template').html();

var renderedUser =_.template(tempUser);

var final_rendered_user_html = renderedUser(userInfo);

  $('.sidebar').append(final_rendered_user_html);

//Right side main info


var temp = $('#repo_template').html();

var rendered =_.template(temp);

var final_rendered_html;

repository.reverse();

_.each(repository, function(item){

  final_rendered_html = rendered(item);

  $('.repo_info').append(final_rendered_html);

});*/


//Sidebar Main info



var user_url = 'https://api.github.com/users/joedge';

var star_url = 'https://api.github.com/users/joedge/starred';

var org_url = 'https://api.github.com/users/joedge/orgs';

var tempUser = $('#user_template').html();

var renderedUser =_.template(tempUser);

// var final_rendered_user_html = renderedUser(user_url);

  $.getJSON(user_url).done( function(i){

    $('.sidebar').append(renderedUser(i));

});








//Right side main info
var repo_url = 'https://api.github.com/users/joedge/repos';

var temp = $('#repo_template').html();

var rendered =_.template(temp);


  $.getJSON(repo_url).done(function(i){

  $('.repo_info').append(rendered(i));
});
