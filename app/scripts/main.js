
//Sidebar Main info

var tempUser = $('#user_template').html();

var renderedUser =_.template(tempUser);

var final_rendered_user_html = renderedUser(userInfo);

  $('.sidebar').append(final_rendered_user_html);

//Right side main info

var temp = $('#repo_template').html();

var rendered =_.template(temp);

var final_rendered_html;

_.each(repository, function(item){

  final_rendered_html = rendered(item);

  $('.rightPane .box').append(final_rendered_html);

});
