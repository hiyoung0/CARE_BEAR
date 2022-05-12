$(document).ready(function(){
            //탑버튼
            $(window).scroll(function(){
                if ($(this).scrollTop()>250) {
                    $('#topbtn').fadeIn();
                }else{
                    $('#topbtn').fadeOut();
                }
            });

            $('#topbtn').click(function(){
                $('html, body').animate({
                    scrollTop :0
                },400);
                return false;
            });


            // 이미지 나오기//
            $('.pic1').hover(function(){
                $('.img1').show();
                $('.img2').hide();
                $('.img3').hide();
                $('.img4').hide();
                $('.img5').hide();
                $('.img6').hide();
                $('.img7').hide();
            });

            $('.pic2').hover(function(){
                $('.img1').hide();
                $('.img2').show();
                $('.img3').hide();
                $('.img4').hide();
                $('.img5').hide();
                $('.img6').hide();
                $('.img7').hide();
            });

            $('.pic3').hover(function(){
                $('.img1').hide();
                $('.img2').hide();
                $('.img3').show();
                $('.img4').hide();
                $('.img5').hide();
                $('.img6').hide();
                $('.img7').hide();
            });

            $('.pic4').hover(function(){
                $('.img1').hide();
                $('.img2').hide();
                $('.img3').hide();
                $('.img4').show();
                $('.img5').hide();
                $('.img6').hide();
                $('.img7').hide();
            });

            $('.pic5').hover(function(){
                $('.img1').hide();
                $('.img2').hide();
                $('.img3').hide();
                $('.img4').hide();
                $('.img5').show();
                $('.img6').hide();
                $('.img7').hide();
            });

            $('.pic6').hover(function(){
                $('.img1').hide();
                $('.img2').hide();
                $('.img3').hide();
                $('.img4').hide();
                $('.img5').hide();
                $('.img6').show();
                $('.img7').hide();
            });

            $('.pic7').hover(function(){
                $('.img1').hide();
                $('.img2').hide();
                $('.img3').hide();
                $('.img4').hide();
                $('.img5').hide();
                $('.img6').hide();
                $('.img7').show();
            });


            //하트클릭효과
            $('button i').click(function(){
                if($(this).hasClass('heart')){
                    $(this).removeClass('heart');
                } else{
                    $(this).addClass('heart');
                }
            });


            //상세설명
            $('.fa-angle-down').click(function(){
                $('.overview').slideToggle();
                $('.fa-angle-down').hide();
                $('.fa-angle-up').show();
            });

            $('.fa-angle-up').click(function(){
                $('.overview').slideToggle();
                $('.fa-angle-down').show();
                $('.fa-angle-up').hide();
            });


            //리뷰슬라이드업
            $('.b1b').click(function(){
                $('.b1').slideToggle();
                $('.b2').slideUp();
                $('.b3').slideUp();
            });

            $('.b2b').click(function(){
                $('.b2').slideToggle();
                $('.b3').slideUp();
                $('.b1').slideUp();
            });

            $('.b3b').click(function(){
                $('.b3').slideToggle();
                $('.b1').slideUp();
                $('.b2').slideUp();
            });


            //리뷰포토리뷰
            $('.every').click(function(){
                $('.review li').removeClass('bold');
                $(this).addClass('bold');
                $('.first').show();
                $('.second').show();
                $('.third').show();
            });

            $('.photoreview').click(function(){
                $('.review li').removeClass('bold');
                $(this).addClass('bold');
                $('.first').show();
                $('.second').hide();
                $('.third').hide();
                $('.b2').hide();
                $('.b3').hide();                
            });

            //큐엔에이슬라이드업
            $('.Q1').click(function(){
                $('.q1').slideToggle();
                $('.q2').slideUp();
            });

            $('.Q2').click(function(){
                $('.q2').slideToggle();
                $('.q1').slideUp();
            });

            //큐엔에이분리
            $('#select').change(function(){
                var result=$('#select option:selected').val();
                if(result == 'op1' || result == 'op2'){
                    $('.prod').show();
                }else{
                    $('.prod').hide();
                    $('.q1').hide();
                }
            });

            $('#select').change(function(){
                var result=$('#select option:selected').val();
                if(result == 'op1' || result == 'op3'){
                    $('.deli').show();
                }else{
                    $('.deli').hide();
                    $('.q2').hide();
                }
            });

            $('#select').change(function(){
                var result=$('#select option:selected').val();
                if(result == 'op1' || result == 'op4'){
                    $('.inven').show();
                }else{
                    $('.inven').hide();
                }
            });


            
            //수량,가격 변경
            var price_sum=13.97;
                        $('.price_sum').append('<h2>US$'+price_sum+'</h2>');

            $('.plus').click(function(){
                if($('.price_value').val()>10){
                    alert('10개 초과 구매가 불가능합니다.');
                    $('.price_value').val(10);
                }else{
                    $('.price_value').val(Number($('.price_value').val())+1);
                    var sum =Math.round(($('.price_value').val()*price_sum)*100)/100;
                    $('.price_sum').html('<h2>US$'+sum+'</h2>');
                }
            });

            $('.minus').click(function(){
                if($('.price_value').val()<2){
                    alert('1개 이상 구매가 가능합니다.');
                    $('.price_value').val(1);
                }else{
                $('.price_value').val(Number($('.price_value').val())-1);
                var sum =Math.round(($('.price_value').val()*price_sum)*100)/100;
                $('.price_sum').html('<h2>US$'+sum+'</h2>');
                }
            });

            

        });