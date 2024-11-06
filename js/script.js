window.addEventListener("load", function () {
  AOS.init();
  const header = document.querySelector(".header-warp");
  const logoImg = document.querySelector(".logoimg");
  const headernavititle = document.querySelectorAll(".header-navi > li > a");
  const mbBarIcon = document.querySelector(".mb-barcolor"); // .mb-barcolor는 <i> 태그에 적용됨

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      // When scrolled down
      header.classList.add("scrolled");
      logoImg.classList.add("scrolled");
      headernavititle.forEach((link) => link.classList.add("scrolled"));
      mbBarIcon.classList.add("scrolled"); // <i> 태그에 scrolled 클래스 추가
    } else {
      // When scrolled to the top
      header.classList.remove("scrolled");
      logoImg.classList.remove("scrolled");
      headernavititle.forEach((link) => link.classList.remove("scrolled"));
      mbBarIcon.classList.remove("scrolled"); // <i> 태그에서 scrolled 클래스 제거
    }
  });

  const brandInforBt = document.querySelector(".brand-button");
  const brandInfor = document.querySelector(".brand-infor");
  const buttonText = document.getElementById("button-text");

  brandInforBt.addEventListener("click", function () {
    brandInfor.classList.toggle("show");
    // 버튼 텍스트 업데이트
    if (brandInfor.classList.contains("show")) {
      buttonText.textContent = "브랜드 소개 ▲";
    } else {
      buttonText.textContent = "브랜드 소개 ▼";
    }
  });

  var creatorswiper = new Swiper(".creatorSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    loop: true, // 루프 모드를 활성화

    pagination: {
      el: ".creatorpagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // 800px 이상일 때 슬라이드를 2개씩 표시
      800: {
        slidesPerView: 3,
      },

      480: {
        slidesPerView: 2.5, // 480px 이상에서 슬라이드 1개 표시
      },
    },
  });
  var newswiper = new Swiper(".newSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    loop: true, // 루프 모드를 활성화

    pagination: {
      el: ".newpagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // 800px 이상일 때 슬라이드를 2개씩 표시
      800: {
        slidesPerView: 3,
      },

      480: {
        slidesPerView: 2.5, // 480px 이상에서 슬라이드 1개 표시
      },
    },
  });

  const heartIcons = document.querySelectorAll(".heart-icon");
  const plusIcons = document.querySelectorAll(".plus-icon");
  const newheartIcons = document.querySelectorAll(".new-heart-icon");
  const cartIcons = document.querySelectorAll(".cart-icon");
  const modal = document.getElementById("creator-modal");
  const message = document.getElementById("message");
  const actionButton = document.getElementById("action-button");
  const closeButton = document.querySelector(".creator-modal-close");

  // 하트 아이콘 클릭 이벤트
  heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener("click", function () {
      const icon = heartIcon.querySelector("i");
      if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "#ff0000";
        message.textContent = "나의 코디에 저장하였습니다";
        actionButton.textContent = "나의 코디 바로가기";
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = "#ffffff";
        message.textContent = "나의 코디에서 삭제하였습니다";
        actionButton.textContent = "나의 코디 바로가기";
      }
      modal.style.display = "block"; // 모달 표시
    });
  });

  // 더하기 아이콘 클릭 이벤트
  plusIcons.forEach((plusIcon) => {
    plusIcon.addEventListener("click", function () {
      const icon = plusIcon.querySelector("i");
      if (icon.classList.contains("fa-plus")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
        message.textContent = "나의 크리에이터에 저장하였습니다";
        actionButton.textContent = "나의 크리에이터 바로가기";
      } else {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        message.textContent = "나의 크리에이터에서 삭제하였습니다";
        actionButton.textContent = "나의 크리에이터 바로가기";
      }
      modal.style.display = "block"; // 모달 표시
    });
  });

  // 새 하트 아이콘 클릭 이벤트
  newheartIcons.forEach((newheartIcon) => {
    newheartIcon.addEventListener("click", function () {
      const icon = this.querySelector("i");
      if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "#ff0000";
        message.textContent = "관심 있는 상품에 저장하였습니다";
        actionButton.textContent = "나의 찜목록 바로가기";
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = "#ffffff";
        message.textContent = "관심 있는 상품에서 삭제하였습니다";
        actionButton.textContent = "나의 코디 바로가기";
      }
      modal.style.display = "block"; // 모달 표시
    });
  });

  // 장바구니 아이콘 클릭 이벤트
  cartIcons.forEach((cartIcon) => {
    cartIcon.addEventListener("click", function () {
      const icon = this.querySelector("i"); // 클릭한 아이콘 선택
      if (icon.style.color === "rgb(255, 0, 0)") {
        icon.style.color = "#ffffff"; // 원래 색으로 변경
        message.textContent = "장바구니 목록에서 삭제하였습니다";
        actionButton.textContent = "장바구니 바로가기";
      } else {
        icon.style.color = "#ff0000"; // 빨간색으로 변경
        message.textContent = "장바구니 목록에 삭재하였습니다";
        actionButton.textContent = "장바구니 바로가기";
      }
      modal.style.display = "block"; // 모달 표시
    });
  });

  // 모달 닫기 버튼
  closeButton.onclick = function () {
    modal.style.display = "none"; // 모달 숨김
  };

  // 모달 외부 클릭 시 닫기
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; // 모달 숨김
    }
  };
});
