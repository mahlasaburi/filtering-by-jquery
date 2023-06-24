$(document).ready(function () {
    // if triangle button is clicked
    $('.triangle-btn').on('click', function(){
        $('.circle-hide, .square-hide, .triangle-hide').show();
        $('.circle-hide, .square-hide').hide();
        $('#filter, .filter').removeClass("active");
		$(this).addClass("active");
    });
    // console.log($('.triangle-btn'));
    // if square button is clicked
    $('.square-btn').on('click', function(){
        $('.circle-hide, .square-hide, .triangle-hide').show();
        $('.circle-hide, .triangle-hide').hide();
        $('#filter, .filter').removeClass("active");
		$(this).addClass("active");
    });
    // if triangle button is clicked
    $('.circle-btn').on('click', function(){
        $('.circle-hide, .square-hide, .triangle-hide').show();
        $('.triangle-hide, .square-hide').hide();
        $('#filter, .filter').removeClass("active");
		$(this).addClass("active");
    });
    // if red button is clicked
    $('.red-btn').on('click', function(){
        $('.circle-hide, .square-hide, .triangle-hide').show();
        $('.not-red').hide();
        $('#filter, .filter').removeClass("active");
		$(this).addClass("active");
    });
    // if all button is clicked
    $('.all-btn').on('click', function(){
        $('.circle-hide, .square-hide, .triangle-hide').show();
        $('#filter, .filter').removeClass("active");
		$(this).addClass("active");
    });
});
