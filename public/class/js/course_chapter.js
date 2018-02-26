$(function() {
            // 收藏
        $('.collection').on('click',function() {
            if($('.iconfont_wap').hasClass('collection_active')) {
                // 取消收藏操作

                $('.collection .iconfont_wap').removeClass('collection_active');
            }else{
                // 添加收藏操作
                collection_success();
            }
        })

        // 分享弹窗
        $('.share').on('click',function() {
            $('.popup_share').fadeIn();
        })
        // 关闭分享弹窗
        $('.popupclose').on('click',function() {
            $('.popup_share').hide();
        })

    //点击微博分享
        $('#popupweibo').on('click',function() {
            console.log(1);
        })

    // 点击微信分享
        $('#popupwechat').on('click',function() {
            console.log(2);
        })

    //收藏成功
        function collection_success() {
                $('.collection .iconfont_wap').addClass('collection_active');
                $('.popup_text').text('已收藏');
                $('.popup_collection').show();
                setTimeout(function() {
                    $('.popup_collection').fadeOut();  
                },1000)
        }
        //分享成功
        function share_success() {
                $('.collection .iconfont_wap').addClass('collection_active');
                $('.popup_text').text('已分享');
                $('.popup_collection').show();
                setTimeout(function() {
                    $('.popup_collection').fadeOut();  
                },1000)
        }

// video 部分
    function showPlay() {
        $('.video_icon_play').show();
        $('.video_icon_replay,.video_icon_load,.video_retry').hide();
    }
    function showLoad() {
        $('.video_icon_load').show();
        $('.video_icon_replay,.video_icon_play,.video_retry').hide();
    }
    function showReplay() {
        $('.video_icon_load,.video_icon_play,.video_retry').hide();
        $('.video_icon_replay').show();
    }
    function showRetry() {
        $('.video_icon_load,.video_icon_play,.video_icon_replay').hide();
        $('.video_retry').show();
    }
    $('.course_chapter_study_btn').on('click',function() {
        showPlay();
        $('.videobox').show();
        $('.videoplay').css({'display':'block'}); //消除底部黑边
        $('.course_chapter_box').hide();
    })
    
    // 点击开始学习,播放视频
    $('.video_icon_play').on('click',function() {
        $('.videoplay')[0].play();   // 视频播放
        $('.video_icon_all').hide(); 
    })

    // video播放中隐藏弹窗
    $('.videoplay').on('timeupdate',function() {
            $('.video_icon_all').hide();
    })
    // video 暂停事件
    $('.videoplay').on('pause',function() {
        $('.video_icon_all').show();
        showPlay();
    })
    // video 正在请求数据
    $('.videoplay').on('waiting',function() {
        $('.video_icon_all').show();
        showLoad();
    })
    // video 播放结束事件
    $('.videoplay').on('ended',function() {
        $('.video_icon_all').show();
        showReplay();
    })
    $('.videoplay').on('error',function() {
        $('.video_icon_all').show();
        showRetry();
    })
    // 点击重播
    $('.video_icon_replay').on('click',function() {
        $('.videoplay')[0].currentTime = 0;
        $('.videoplay')[0].play();
    })
    // 点击重试
    $('.video_retry_button').on('click',function() {
        $('.video_icon_all').hide();
        $('.videoplay')[0].load();
    })
})
