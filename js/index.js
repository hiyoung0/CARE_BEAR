 $(document).ready(function(){
            //하트클릭효과
            $('button i').click(function(){
                if($(this).hasClass('heart')){
                    $(this).removeClass('heart');
                } else{
                    $(this).addClass('heart');
                }
            });
        });

        // $(document).ready(function(){
        //     $('button i').click(function(){
        //         $(this).css('animation-name','heartclick');
        //     });
        // });

        $(document).ready(function(){
           //더보기클릭효과
            $('.dollsbn').click(function(){
                $('#carebear').fadeIn();
                $('#figures').hide();
                $('#figuresmore').hide();
                $('#carebearmore').hide();
                $('.moreviewdolls').show();
                $('.moreviewfigures').show();
                $('section').css('height','3200px');
                $('#carebear').css('height','1300px');
                $('#figures').css('height','1300px');
            });

            $('.figuresbn').click(function(){
                $('#carebear').hide();
                $('#figures').fadeIn();
                $('#figuresmore').hide();
                $('.moreviewfigures').show();
                $('#carebearmore').hide();
                $('.moreviewdolls').show();
                $('section').css('height','3200px');
                $('#carebear').css('height','1300px');
                $('#figures').css('height','1300px');

            });

            $('.moreviewdolls').click(function(){
                $('section').css('height','3600px');
                $('#carebear').css('height','1700px');
                $('.moreviewdolls').hide();
                $('#carebearmore').show();
            });

            $('.moreviewfigures').click(function(){
                $('section').css('height','3600px');
                $('#figures').css('height','1700px');
                $('.moreviewfigures').hide();
                $('#figuresmore').show();
            });

            //탑버튼
            $(window).scroll(function(){
                if ($(this).scrollTop()>250) {
                    $('#topbtn2').fadeIn();
                }else{
                    $('#topbtn2').fadeOut();
                }
            });

            $('#topbtn2').click(function(){
                $('html, body').animate({
                    scrollTop :0
                },400);
                return false;
            });
            
        });