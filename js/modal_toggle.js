$(function(){
    $("#go_top").on("click", function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 750);
    });
  // hamburger icon 的切換
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
  });
  
   // 點擊漢堡按鈕，導覽列縮放
    $("button.hamburger").on("click", function(){
    $("#nav").fadeToggle();
  });


  
   // 點擊.tags_switch_button按鈕，導覽列縮放
    $("#list_switch").on("click", function(){
    $("#tags").slideToggle();
  });



    

    // 開啟 登入 Modal彈跳視窗
    $(".header_navigation_log-in").on("click", function(){
      $(".login_overlay").fadeIn();
    });
    
    // 關閉 登入 Modal彈跳視窗
    $(".btn_modal_login_close").on("click", function(){
      $(".login_overlay").fadeOut();
    });
  
    // 開啟 註冊 Modal彈跳視窗
    $(".header_navigation_sign-up").on("click", function(){
      $(".signup_overlay").fadeIn();
    });
    
    // 關閉 註冊 Modal彈跳視窗
    $(".btn_modal_signup_close").on("click", function(){
      $(".signup_overlay").fadeOut();
    });

    // 登入介面 還沒有帳號?點此註冊 關閉當前視窗
    $(".havent_span").on("click", function(){
      $(".login_overlay").fadeOut();
    });

    // 登入介面 還沒有帳號?點此註冊 開啟註冊視窗
    $(".havent_span").on("click", function(){
      $(".signup_overlay").fadeIn();
    });

    // 註冊介面 已有帳號?點此登入 關閉當前視窗
    $(".already_span").on("click", function(){
      $(".signup_overlay").fadeOut();
    });

    // 註冊介面 已有帳號?點此登入 開啟註冊視窗
    $(".already_span").on("click", function(){
      $(".login_overlay").fadeIn();
    });


    //主banner的開始寫日記 彈跳視窗
    $(".btn_action").on("click",function(){
      $(".login_overlay").fadeIn();
    });

    //廣告的開始寫日記 彈跳視窗
    $(".advertise_btn").on("click",function(){
      $(".login_overlay").fadeIn();
    });

    //立即註冊 彈跳視窗
    $(".signup_now").on("click",function(){
      $(".signup_overlay").fadeIn();
    });

    //預約線上諮詢 彈跳視窗
    $(".btn_consult_online").on("click",function(){
      $(".login_overlay").fadeIn();
    });


    //footer  登入彈跳視窗
    $(".log_in").on("click",function(){
      $(".login_overlay").fadeIn();
    });

    //footer  註冊彈跳視窗
    $(".sign_up").on("click",function(){
      $(".signup_overlay").fadeIn();
    });

    
  
    // //nav登入按鈕
    // let btn_login = document.getElementsByClassName("btn_modal_login")[0];
    
    // //nav註冊按鈕
    // let btn_signup = document.getElementsByClassName("btn_modal_signup")[0];
    
    // //登入前往註冊按鈕
    // let btn_toggle_signup = document.getElementsByClassName("btn_open_signup")[0];
    // //註冊前往登入按鈕
    // let btn_toggle_login = document.getElementsByClassName("btn_open_login")[0];
    
    // //關閉登入彈窗按鈕
    // let btn_login_close = document.getElementsByClassName("btn_modal_login_close")[0];
    // //關閉註冊彈窗按鈕
    // let btn_signup_close = document.getElementsByClassName("btn_modal_signup_close")[0];
    
    // //登入彈窗切換註冊彈窗事件
    // btn_toggle_signup.addEventListener("click", function(){
    //   btn_login_close.click();
    //   btn_signup.click();
    // })
    
    // //註冊彈窗切換登入彈窗事件
    // btn_toggle_login.addEventListener("click", function(){
    //   btn_signup_close.click();
    //   btn_login.click();
    // })
  
  });
  
  