//API info

var star_url = 'https://api.github.com/users/joedge/starred';

var org_url = 'https://api.github.com/users/joedge/orgs';

var user_url = 'https://api.github.com/users/joedge';

var repo_url = 'https://api.github.com/users/joedge/repos';

//Header info
var tempHeader = $('#header_template').html();

var renderedHeader =_.template(tempHeader);

  $.getJSON(user_url).done( function(header_data){

    $('.header_image').append(renderedHeader(header_data));

});


//Side bar top info
var tempUser = $('#user_top_template').html();

var renderedUser =_.template(tempUser);

  $.getJSON(user_url).done( function(user_data){

    $('.sidebar_top').append(renderedUser(user_data));

});
//Sidebar middle

var tempMiddle1 = $('#user_middle_template1').html();

var renderedMiddle1 =_.template(tempMiddle1);

  $.getJSON(user_url).done( function(user_data){

    $('.sidebar_middle').append(renderedMiddle1(user_data));

});

var tempMiddle2 = $('#user_middle_template2').html();

var renderedMiddle2 =_.template(tempMiddle2);

  $.getJSON(star_url).done( function(star_data){

    _.each(star_data, function(a){

    $('.sidebar_middle').append(renderedMiddle2(a));
})

});


var tempMiddle3 = $('#user_middle_template3').html();

var renderedMiddle3 =_.template(tempMiddle3);

  $.getJSON(user_url).done( function(user_data){

    $('.sidebar_middle').append(renderedMiddle3(user_data));

});

//Sidebar bottom info
var tempOrg = $('#user_bottom_template').html();

var renderedOrg =_.template(tempOrg);

  $.getJSON(org_url).done( function(org_data){

    $('.sidebar_bottom').append(renderedOrg(org_data));

});

//Right side main info

var temp = $('#repo_template').html();

var rendered =_.template(temp);

  $.getJSON(repo_url).done( function(repo_data){

    _.each(repo_data, function(a){

  $('.repo_info').append(rendered(a));

})

});
