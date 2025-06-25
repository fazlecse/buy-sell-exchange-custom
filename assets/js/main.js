"use strict";
// Preloader start
const preloaderFunction = () => {
  document.getElementById("preloader").style.display = "none";
};

// toggleSideMenu start
const toggleSideMenu = () => {
  document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// add bg to nav
if ($("nav").length) {
  const header = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY >= 10);
  });
}

$(document).ready(function () {
  // testimonial carousel start
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 2000,
    rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 3,
      },
      375: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 2,
      },
      768: {
        items: 2,
        nav: true,
        dots: false,
        margin: 15,
      },
      992: {
        items: 2,
        nav: true,
        dots: false,
      },
      1200: {
        items: 3,
        nav: true,
        dots: false,
      },
    },
  });
  // testimonial carousel end
  // Why choose carousel start
  $(".why-choose-carousel").owlCarousel({
    // loop: true,
    // autoplay: true,
    margin: 20,
    autoplayTimeout: 2000,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 3,
      },
      768: {
        items: 2,
        nav: true,
        dots: false,
      },
      992: {
        items: 2,
        nav: true,
        dots: false,
      },
      1200: {
        items: 3,
        nav: true,
        dots: false,
      },
    },
  });
  // Why choose carousel end

  // Banner sllider start
  if ($(".banner-slider").length) {
    $(".banner-slider").slick({
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      arrows: false,
      // rtl: true,
    });
  }
  // Banner sllider end

  // Nice select start
  if ($(".nice-select").length) {
    $(".nice-select").niceSelect();
  }
  // Nice select end

  // cmn select2 start
  $(".cmn-select2").select2();
  // cmn select2 end

  // cmn-select2 with image start
  $(".cmn-select2-image").select2({
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
      '<span><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $('<span><img class="img-flag" /> <span></span></span>');

    $state.find("span").text(state.text);
    $state
      .find("img")
      .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
  }
  // cmn-select2 with image end

  // Modal select2 with image start
  $(".modal-select2-image").select2({
    dropdownParent: $("#formModal"),
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
      '<span><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $('<span><img class="img-flag" /> <span></span></span>');

    $state.find("span").text(state.text);
    $state
      .find("img")
      .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
  }
  // MOdal select2 with image end

  // Cmn select2 tags start
  $(".cmn-select2-tags").select2({
    tags: true,
  });
  // Cmn select2 tags end

  // cmn select2 modal start
  $(".modal-select2").select2({
    dropdownParent: $("#formModal"),
  });
  // cmn select2 modal start
  if ($("#myID").length) {
    flatpickr("#myID", {
      inline: true,
      dateFormat: "d-m-Y",
    });
  }

  // Isotope start
  if ($(".listing-row").length) {
    $(document).ready(function () {
      var $grid = $(".listing-row").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: 1,
        },
      });

      var selectedFilter = localStorage.getItem("selectedFilter") || ".all";
      $grid.isotope({ filter: selectedFilter });

      $(".isotope-btn-group button").removeClass("active");
      $(
        '.isotope-btn-group button[data-filter="' + selectedFilter + '"]'
      ).addClass("active");

      $(".isotope-btn-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
        localStorage.setItem("selectedFilter", filterValue);

        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
      });

      $grid.isotope("layout");

      $(".form-check-input").on("change", function () {
        $(".review-single-hidden-box").toggle(this.checked);
        $grid.isotope("layout");
      });
    });
  }
  // Isotope ends
});
// Fancybox carousel section start
if ($(".fancybox-carousel-section").length) {
  // Initialise Carousel
  const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
  });

  // Thumbnails
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
      target: mainCarousel,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: false,
    slidesPerPage: 1,
    infinite: true,
  });

  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
      on: {
        change: (that) => {
          mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });
}
// Fancybox carousel section end

// Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// Copy text start
function copyTextFunc() {
  const element = document.querySelector(".docs-code");
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
}
// Copy text end

// Social share start
if ($("#shareBlock").length) {
  $("#shareBlock").socialSharingPlugin({
    urlShare: window.location.href,
    description: $("meta[name=description]").attr("content"),
    title: $("title").text(),
  });
}
// Social share end

// International Telephone Input start
if ($("#telephone").length) {
  const input = document.querySelector("#telephone");
  window.intlTelInput(input, {
    initialCountry: "bd",
    separateDialCode: true,
  });
}
// International Telephone Input end

// Copy page url start
if ($("#copyBtn").length) {
  document.getElementById("copyBtn").addEventListener("click", () => {
    let referralURL = document.getElementById("referralURL");
    referralURL.select();
    navigator.clipboard.writeText(referralURL.value);
    if (referralURL.value) {
      document.getElementById("copyBtn").innerHTML =
        '<i class="fa-regular fa-circle-check"></i> Copied';
      setTimeout(() => {
        document.getElementById("copyBtn").innerHTML =
          '<i class="fa-regular fa-copy"></i>copy';
      }, 1000);
    }
  });
}

// Copy page url end

// input field show hide password start
if (document.querySelector(".login-register-form")) {
  const passwordBoxes = document.querySelectorAll(".password-box");
  passwordBoxes.forEach((passwordBox) => {
    const passwordInput = passwordBox.querySelector(".password");
    const passwordIcon = passwordBox.querySelector(".password-icon");

    passwordIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.add("fa-eye-slash");
        passwordIcon.classList.remove("fa-eye");
      } else {
        passwordInput.type = "password";
        passwordIcon.classList.add("fa-eye");
        passwordIcon.classList.remove("fa-eye-slash");
      }
    });
  });
}
// input field show hide password end

// Dropdown select with Filter end
if ($(".search-box2").length) {
  function handleSelect(searchBox2, searchInput, searchItem) {
    searchInput.addEventListener("click", function (event) {
      searchBox2.classList.add("active");
      event.stopPropagation();
    });

    window.addEventListener("click", function () {
      searchBox2.classList.remove("active");
    });

    searchItem.forEach(function (searchItemSingle) {
      searchItemSingle.addEventListener("click", function () {
        const text = searchItemSingle.querySelector(".title");
        const textContent = text.textContent;
        searchInput.value = textContent;
        searchBox2.classList.remove("active");
      });
    });
  }

  const searchBox2 = document.querySelector("#search-box2");
  const searchInput = document.querySelector("#search-input");
  const searchItem = document.querySelectorAll("#search-result .search-item");
  handleSelect(searchBox2, searchInput, searchItem);

  // filter start
  function filterItems(inputId, items) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();

    items.forEach((item) => {
      const title = item.querySelector(".title");
      const txtValue = title.textContent || title.innerText;

      if (txtValue.toUpperCase().includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  const filterSearchInputId = "search-input";
  const filterSearchInput = document.getElementById(filterSearchInputId);
  const items = document.querySelectorAll("#search-result .search-item");
  filterSearchInput.addEventListener("keyup", function () {
    filterItems(filterSearchInputId, items);
  });
}
// Dropdown select with Filter end

// Adv search box start
$(document).ready(function () {
  if ($("#adv_search_btn").length) {
    $("#adv_search_btn").on("click", function () {
      $("#additional_box").toggleClass("active");
    });
    $("#cancel_btn").on("click", function () {
      $("#additional_box").removeClass("active");
    });
  }
});
// Adv search box end

// Modal select to input focus start
document.addEventListener("DOMContentLoaded", function () {
  function handleInput(inputAmountBox, inputAmountBoxInner) {
    if (inputAmountBox && inputAmountBoxInner) {
      const inputField = inputAmountBoxInner.querySelector("input");

      inputField.addEventListener("focus", function () {
        inputAmountBox.classList.add("active");
      });

      inputField.addEventListener("blur", function () {
        inputAmountBox.classList.remove("active");
      });

      // inputField.addEventListener("click", function () {
      //   inputField.setSelectionRange(
      //     inputField.value.length,
      //     inputField.value.length
      //   );
      // });

      inputAmountBox.addEventListener("click", function (event) {
        if (
          !event.target.closest(".icon-area") &&
          !event.target.closest(".text-area")
        ) {
          inputField.focus();
          // inputField.setSelectionRange(
          //   inputField.value.length,
          //   inputField.value.length
          // );
        }
      });
    }
  }

  const inputAmountBox = document.getElementById("inputAmountBox");
  const inputAmountBoxInner = document.getElementById("inputAmountBoxInner");
  handleInput(inputAmountBox, inputAmountBoxInner);

  const inputAmountBox2 = document.getElementById("inputAmountBox2");
  const inputAmountBoxInner2 = document.getElementById("inputAmountBoxInner2");
  handleInput(inputAmountBox2, inputAmountBoxInner2);
});
// Modal select to input focus end

// Filter section start
function filterItems(inputId) {
  var input, filter, items, title, subtitle, i, txtValue;
  input = document.getElementById(inputId);
  filter = input.value.toUpperCase();
  items = document.querySelectorAll("#currency-list .item");

  items.forEach(function (item) {
    title = item.querySelector(".title");
    subtitle = item.querySelector(".sub-title");

    txtValue = title.textContent || title.innerText;
    txtValue += " " + (subtitle.textContent || subtitle.innerText);

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
// Filter section end
// countdown
if ($("#countdown1").length) {
  $("#countdown1").countdown("2026/11/05", function (event) {
    $(this).html(
      event.strftime(
        '<div class="single-coundown"><h5>%H :</h5></div><div class="single-coundown"><h5>%M :</h5></div><div class="single-coundown"><h5>%S</h5></div>'
      )
    );
  });
}
