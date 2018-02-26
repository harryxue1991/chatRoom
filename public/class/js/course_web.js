$(function() {
    // 多余17个字符的内容后加...
        $.each($('.course_web_h2'),function(index,item) {
            var str = $(item).text();
            if(str.length > 17) {
                 $(item).text(str.substring(0,17) + '...');
            }
        })

// 背景色为灰色设置
        var webClassheight = $(window).height()
        var headerheight = $('.course_web_header').height() + $('.header').height();
        $('.course_web_class').css({height:webClassheight-headerheight})

// tab切换
        $('.course_webLi').on('click',function(e) {
            $(e.currentTarget).addClass('course_webLi_active').siblings().removeClass('course_webLi_active');
            var value = e.currentTarget.dataset.value;
            $.each($('.course_web_class'),function(index,item) {
                if(item.dataset.content == value) {
                    $(item).show();
                }else {
                    $(item).hide();
                }
            })
        })
})