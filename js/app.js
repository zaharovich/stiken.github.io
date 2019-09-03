

$( ".js-people" ).click(function() {
	$( ".lenta-section" ).fadeOut(500);
	$( ".extra-menu-tape" ).removeClass('active_left_bar').delay(500).fadeOut(0);

	

	var add_people = function(){
		$( ".people_section" ).fadeIn(500);
	};
	setTimeout(add_people, 500);
});

$( ".menu_item_lenti" ).click(function() {
	$( ".people_section" ).fadeOut(500);

	

	var add_lenta = function(){
		$( ".extra-menu-tape" ).fadeIn(0).addClass('active_left_bar');
		$( ".lenta-section" ).delay(500).fadeIn(500);
	};
	setTimeout(add_lenta, 500);
});



$( ".person" ).find('.menu').click(function() {
	$(this).toggleClass('active_person_menu');

});

$( ".add-new-lent" ).click(function() {
	$( ".tape .main-lent" ).addClass('active_main-lent');
});


$( ".d_tip_1" ).click(function() {
	$( ".all_tips" ).fadeOut(0);
	$( ".tip_1" ).fadeIn();
});

$( ".tip_1_1" ).click(function() {
	$( ".tip_1" ).fadeOut(0);
	$( ".tip_1_1_mode" ).fadeIn();
});

$( ".tip_1_2" ).click(function() {
	$( ".tip_1" ).fadeOut(0);
	$( ".tip_1_2_mode" ).fadeIn();
});

$( ".d_tip_2" ).click(function() {
	$( ".all_tips" ).fadeOut(0);
	$( ".tip_2_mode" ).fadeIn();
	$( ".slick-dots .slick-active" ).trigger( "click" );
});

$( ".d_tip_3" ).click(function() {
	$( ".all_tips" ).fadeOut(0);
	$( ".tip_3_mode" ).fadeIn();
});

$( ".d_tip_4" ).click(function() {
	$( ".all_tips" ).fadeOut(0);
	$( ".tip_4_mode" ).fadeIn();
	$( ".slick-dots .slick-active" ).trigger( "click" );
});

$( ".add_min span:first-child" ).click(function() {
	
	$(this).parent().parent().addClass('remove');

	var remove = function(){
		$(".remove").remove();
		var objt = $("div.grid_block").length;
		if (objt < 3) {
			$(".grid_block").removeClass('po_3');
		}
	};
	setTimeout(remove, 500);

	
});

$( ".add_min span:last-child" ).click(function() {
	
	$('.grid').append('<div class="ful_img grid_block"><img src="images/Union.svg" alt=""><p>Загрузить изображение</p><div class="add_min"><span id="remove">-</span><span>+</span></div></div>');

	var objt = $("div.grid_block").length;


	if (objt == 3) {
		$(".grid_block").addClass('po_3');
	}

});

$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	arrows:false,
});

$('.swipe').slick({

	slidesToShow: 1,
	variableWidth: true,
	infinite: true,
	arrows:false,
	dots: true,
});