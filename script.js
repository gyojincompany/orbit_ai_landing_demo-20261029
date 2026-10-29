// ORBIT AI 랜딩 페이지 인터랙션
// 실제 서버나 AI 모델은 연결되어 있지 않습니다. 화면 동작을 확인하기 위한 데모 코드입니다.

const demoToast = document.getElementById("demo-toast");
const demoButtons = document.querySelectorAll("[data-demo-start]");
const closeToastButton = document.querySelector(".toast-close");
const faqButtons = document.querySelectorAll(".faq-question");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

// 무료 시작하기 버튼: 실제 가입 대신 데모 안내를 표시합니다.
demoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    demoToast.hidden = false;
  });
});

// 안내 메시지 닫기
closeToastButton.addEventListener("click", () => {
  demoToast.hidden = true;
});

// FAQ 아코디언: 질문을 누르면 답변이 열리고, 다시 누르면 닫힙니다.
faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.closest(".faq-item").querySelector(".faq-answer");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;
  });
});

// 모바일 메뉴 열기/닫기
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "메뉴 열기" : "메뉴 닫기");
  mainNav.classList.toggle("is-open", !isOpen);
});

// 모바일 메뉴에서 링크를 선택하면 메뉴를 닫습니다.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "메뉴 열기");
  });
});
