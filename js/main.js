//by Tibame set up

$(function(){
    $("#go_top").on("click", function(){
      $('html, body').animate({// 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
        scrollTop: 0}, 750);//750毫秒
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

    // 登入 關閉視窗 清除資料
    $(".btn_modal_login_close").on("click", function(){
      $(".modal_email").val("");
      $(".modal_password").val("");
    });

    // 註冊 關閉視窗 清除資料
    $(".btn_modal_signup_close").on("click", function(){
      $(".modal_email").val("");
      $(".modal_password").val("");
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

  
  });
    
  