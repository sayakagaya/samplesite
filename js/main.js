// ハンバーガーメニュー
const sidebar = document.querySelector(".header_menu_body");
document
  .querySelector(".humburger_area")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    sidebar.classList.toggle("active");
  });

document.querySelector(".link").addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

// スワイパー
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // And if we need scrollbar
});

//スムーススクロール
//すべてのaタグのhrefに#がついているもの
const anchors = document.querySelectorAll('a[href^="#"]');
// headerの高さを取得
const headerHeight = document.querySelector("header").offsetHeight;
//URLのアンカーを取得
const urlHash = location.href;

for (let i = 0; i < anchors.length; i++) {
  //各アンカーにクリックイベント
  anchors[i].addEventListener("click", function (event) {
    //デフォルトのクリックイベントを無効化
    event.preventDefault();

    //各anchorのhref属性の値を取得
    const href = anchors[i].getAttribute("href");

    //topに戻る以外のアンカー
    if (href !== "#top") {
      //スクロール先の要素を取得
      //アンカーのリンク先#を取り除いた名前と一致するIDの取得
      const target = document.getElementById(href.replace("#", ""));

      //スクロール先の要素の位置を取得
      //headerの高さをマイナス
      const position =
        window.pageYOffset + target.getBoundingClientRect().top - headerHeight;

      //スクロールアニメーション
      window.scroll({
        //スクロール先の要素の上までスクロール
        top: position,

        //スクロールアニメーション
        behavior: "smooth",
      });

      //topに戻る
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  });
}

// #page-topをクリックした際の設定
document.getElementById("page-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0, // ページトップまでスクロール
    behavior: "smooth", // スムーズスクロール
  });
});

// セクションフェード;
const targets = document.getElementsByClassName("fade");
for (let i = targets.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      }
    }
  });
  observer.observe(targets[i]);
}
