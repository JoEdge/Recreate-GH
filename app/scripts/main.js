//API info

var user_url = 'https://api.github.com/users/joedge';

var star_url = 'https://api.github.com/users/joedge/starred';

var org_url = 'https://api.github.com/users/joedge/orgs';

var repo_url = 'https://api.github.com/users/joedge/repos';

//info from user url
var tempHeader = $('#header_template').html();
var render =_.template(tempHeader);

var tempTop = $('#user_top_template').html();
var renderedTop =_.template(tempTop);

var tempMiddle1 = $('#user_middle_template1').html();
var renderedMiddle1 =_.template(tempMiddle1);

var tempMiddle3 = $('#user_middle_template3').html();
var renderedMiddle3 =_.template(tempMiddle3);

  $.getJSON(user_url).done( function(user_data){

    $('.header_image').append(render(user_data));

    $('.sidebar_top').append(renderedTop(user_data));

    $('.sidebar_middle').append(renderedMiddle1(user_data));

    $('.sidebar_middle').append(renderedMiddle3(user_data));

});


//Sidebar middle - star info
var tempMiddle2 = $('#user_middle_template2').html();

var renderedMiddle2 =_.template(tempMiddle2);

  $.getJSON(star_url).done( function(star_data){

    _.each(star_data, function(a){

    $('.sidebar_middle').append(renderedMiddle2(a));
})

});

//Sidebar bottom - org info
var tempOrg = $('#user_bottom_template').html();

var renderedOrg =_.template(tempOrg);

  $.getJSON(org_url).done( function(org_data){

    _.each(org_data, function(a){

    $('.sidebar_bottom').append(renderedOrg(a));
})

});

//Right side main info
var temp = $('#repo_template').html();
var rendered =_.template(temp);

  $.getJSON(repo_url).done( function(repo_data){

    _.each(repo_data, function(a){

  $('.repo_info').append(rendered(a));

})

});