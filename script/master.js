$(document).ready(function(){
	
	$('#msg-contato').fadeIn();
	// faz a msg-contato aparecer

	$('#x').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).remove();
		$('#msg-contato').slideUp();
	});	
	// fechar a msg-contato

	$('#hamburgao').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.sidebar-nav').slideToggle();
	});
	// toggle no hamburgao

	// $('.game-article').hover(function(){
	// 	$(this).find('.description').fadeIn();
	// }, function(){
	// 	$(this).find('.description').fadeOut();
	// });





//e.preventDefault();
//e.stopPropagation();
});