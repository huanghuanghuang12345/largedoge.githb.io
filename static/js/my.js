$(function(){
$(window).scroll(function(){
	  var top=$(window).scrollTop();
	  if(top>30){
		$('.head').addClass('active')
	  }else{
		$('.head').removeClass('active')
	  };
	  
	});

$(".mobile").click(function(){
	$(this).toggleClass('active');
	$(".m-menu").toggleClass('active');
});	

$(".m-menu span").click(function(){
	$(".mobile").removeClass('active');
	$(".m-menu").removeClass('active');
});	


})
