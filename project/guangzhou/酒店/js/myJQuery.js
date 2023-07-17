$(document).ready(function () {
    var $pic_word = $(".top_hospital .swiper .swiper-wrapper .swiper-slide .top_hospital_Lb");
    var $hospital_rec_BudgetHotel = $(".Hotel_Recommendation .Hotel_Recommendation_Head ul #BudgetHotel");
    var $hospital_rec_DeluxeHotel = $(".Hotel_Recommendation .Hotel_Recommendation_Head ul #DeluxeHotel");
    var $BudgetHotel = $(".Hotel_Recommendation .Hotel_Recommendation_List .Hotel_Recommendation_List_BudgetHotel");
    var $DeluxeHotel = $(".Hotel_Recommendation .Hotel_Recommendation_List .Hotel_Recommendation_List_DeluxeHotel");
    $pic_word.click(function () {
        $(this).children("p").toggle(500);
        $(this).children("span").toggle(500);
        $(this).children("img").animate({
            
        },800);
        $(this).parent().siblings().children().children("p").hide(500);
        $(this).parent().siblings().children().children("span").show(500);
        $(this).parent().siblings().children().children("img").animate({

        },800);
    });
    
    $hospital_rec_BudgetHotel.click(function(){
        $(this).animate({
            backgroundColor: '#ebe8e8',
        },0);
        $hospital_rec_DeluxeHotel.animate({
            backgroundColor: 'white',
        },0);
        $BudgetHotel.show(500);
        $DeluxeHotel.hide(2000);
    });
    $hospital_rec_DeluxeHotel.click(function(){
        $(this).animate({
            backgroundColor: '#ebe8e8',
        },0);
        $hospital_rec_BudgetHotel.animate({
            backgroundColor: 'white',
        },0);
        $BudgetHotel.hide(1000);
        $DeluxeHotel.show(500);
    });
});
