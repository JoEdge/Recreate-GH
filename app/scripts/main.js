//Sidebar Main info

var star_url = 'https://api.github.com/users/joedge/starred';

var org_url = 'https://api.github.com/users/joedge/orgs';

var user_url = 'https://api.github.com/users/joedge';

//Header info
var tempHeader = $('#header_template').html();

var renderedHeader =_.template(tempHeader);

  $.getJSON(user_url).done( function(header_data){

    $('.header_image').append(renderedHeader(header_data));

});


//Side bar info
var tempUser = $('#user_template').html();

var renderedUser =_.template(tempUser);

  $.getJSON(user_url).done( function(user_data){

    $('.sidebar').append(renderedUser(user_data));

});

//Right side main info
var repo_url = 'https://api.github.com/users/joedge/repos';

var temp = $('#repo_template').html();

var rendered =_.template(temp);

  $.getJSON(repo_url).done( function(repo_data){

    _.each(repo_data, function(a){

  $('.repo_info').append(rendered(a));

})

});
