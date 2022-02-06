'use strict';

$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#sp-gnav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#sp-gnav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
      $("#sp-gnav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });