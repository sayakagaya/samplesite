// モーダル
  // モーダルオープン gallery-itemを格納
  const modalOpen = document.querySelectorAll(".goods_regular_item");

  //モーダルをforEachで取得し、コールバック関数の引数をbuttonに設定
  modalOpen.forEach(function (button) {
    // button(gallery-item)をクリックしたとき
    button.onclick = function () {
      // data-modalの値を取得(getAttributeは属性値の取得)
      var modal = button.getAttribute("data-modal");
      // data-modalの値と同じidのモーダルを表示
      document.getElementById(modal).style.display = "block";
    };
  });

  // モーダルクローズ　closeを格納
  const modalClose = document.querySelectorAll(".close");

  //モーダルをforEachで取得し、コールバック関数の引数をbuttonに設定
  modalClose.forEach(function (button) {
    // button(close)をクリックしたとき
    button.onclick = function () {
      // 祖先の要素　.modalを格納
      var modal = button.closest(".modal");
      // モーダルを非表示
      modal.style.display = "none";
    };
  });
