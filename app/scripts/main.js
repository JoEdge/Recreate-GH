
var temp = $('#repo_template').html();

var rendered =_.template(temp);

var final_rendered_html;

_.each(repository, function(item){

  final_rendered_html = rendered(item);

  $('.rightPane .box').append(final_rendered_html);

});
