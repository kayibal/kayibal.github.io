// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(function(){
	$(".link").each(function(id, el){
		var wrapper = $(el).find(".wrapper");
		$(el).click(function(){
			if($(el).attr("data-href").indexOf("mailto") > -1){
				window.location.href = $(el).attr("data-href")
			} else {
				window.open($(el).attr("data-href"));
				console.log($(el).attr("data-href"));
			}
		});
	})
});