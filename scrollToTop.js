// 스크롤 이벤트를 감지하여 버튼 표시 여부를 결정
window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.classList.add("show"); // 스크롤 내리면 버튼 표시
    } else {
      btn.classList.remove("show"); // 맨 위로 올리면 버튼 숨김
    }
  };
  
  // 버튼 클릭 시 페이지 상단으로 이동
  document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
 

