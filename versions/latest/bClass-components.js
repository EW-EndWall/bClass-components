/*
 * * Bclass components v1.1.0
 * * Copyright 2021 ("https://github.com/EW-EndWall/bClass-components/blob/main/LICENSE")
 * * Licensed ("Bik Public License 2.0")
 * * License Update ("03/28/2024")
 */
document.addEventListener("DOMContentLoaded", () => {
  // * page loader remowed
  document.onreadystatechange = () => {
    setTimeout(() => {
      const pageLoader = document.getElementById("page-loader");
      if (pageLoader) pageLoader.remove();
    }, 500);
  };
  // * -----------------------------------------------------
  // * create cookie
  const setCookie = (cookieName, cookieValue, numdaystilexpireasinteger) => {
    const d = new Date();
    d.setTime(d.getTime() + numdaystilexpireasinteger * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie =
      cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  };
  // * get cookie
  const getCookie = (cookieName) => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(";");

    let foundCookie = "";
    cookies.forEach((cookie) => {
      let trimmedCookie = cookie.trim();
      if (trimmedCookie.indexOf(name) === 0) {
        foundCookie = trimmedCookie.substring(name.length);
      }
    });
    return foundCookie;
  };
  // * check coockie
  const checkCookiesConfirmation = () => {
    // * call cookie to get its value
    const x = getCookie("cookies-confirmation");
    if (x != "") {
      $("#cookies-confirmation").remove();
    }
  };
  $("#cookies-confirmation-close").on("click", () => {
    $("#cookies-confirmation").remove();
    setCookie("cookies-confirmation", true, 180);
  });
  // * start check coockie
  $(document).ready(() => {
    checkCookiesConfirmation();
  });
  // * -----------------------------------------------------
  // * input-sellect
  // * .input-sellect-m-1 selected bug fix
  if ($(".input-sellect-m-1").length > 0) {
    $(".input-sellect-m-1 select").each((index, element) => {
      const selectElement = $(element);
      let selectElements = selectElement
        .find("option:selected")
        .map((index, element) => {
          return $(element).text();
        })
        .get()
        .join(", ");
      selectElement.siblings("span").text(selectElements);
    });
  }
  // * .input-sellect-m-1 open
  $(".input-sellect-m-1").on("click", (index, element) => {
    if (!$(index.target).is("select")) {
      $(element).children("span").toggleClass("active");
      $(element).find("select").slideToggle().toggleClass("d-none");
      // * close others
      $(".input-sellect-m-1")
        .not(element)
        .find("select")
        .slideUp()
        .addClass("d-none");
      // * close all
      $(document).on("click.input-sellect-m-1", (index, element) => {
        const target = $(index.target);
        if (!target.closest(".input-sellect-m-1").length) {
          $(".input-sellect-m-1").find("span").removeClass("active");
          $(".input-sellect-m-1").find("select").slideUp().addClass("d-none");
          $(document).off("click.input-sellect-m-1");
        }
      });
      const selectedOptions = $(element)
        .find("option:selected")
        .map((index, element) => {
          return $(element).text();
        })
        .get()
        .join(", ");
      $(element).find("span").text(selectedOptions);
    }
  });
  // * .input-sellect-m-1 option search
  $(".input-sellect-m-1 input").on("keyup", (index, element) => {
    const searchText = $(element).val().toLowerCase();
    const select = $(element).siblings("select");
    const options = select.find("option");

    options.each((index, element) => {
      const option = $(element);
      const optionText = option.text().toLowerCase();

      if (optionText.includes(searchText)) {
        option.show();
      } else {
        option.hide();
      }
    });
    if (searchText === "") {
      select.addClass("d-none");
    } else {
      select.removeClass("d-none");
    }
  });
  $(".input-sellect-m-1").on("click", (index, element) => {
    if (!$(index.target).is("select") && $(element).find("input").length > 0) {
      let selectedOptions = $(element).find("option:selected").text().trim();
      if (selectedOptions) $(element).find("input").val(selectedOptions);
    }
  });
  // * -----------------------------------------------------
  // * model 1
  // * if is any dropdown
  if ($(".dropdown-m-1").length) {
    // * sub menu hidden
    $(".dropdown-m-1").find("ul ul").hide();
    // * on clikc btn open dropdown
    $(document).on("click", ".dropdown-m-1-btn", (index, element) => {
      index.stopPropagation();
      const clickedBtn = $(element);
      const clickedMenu = clickedBtn.siblings(".dropdown-m-1");

      // * is open
      clickedBtn.toggleClass("active");
      if (clickedMenu.is(":visible")) {
        clickedMenu.slideUp(150);
      } else {
        $(".dropdown-m-1-btn + .dropdown-m-1").slideUp(150);
        // * open menu restart
        clickedMenu.find("li a.active").removeClass("active");
        clickedMenu.slideDown(150, () => {
          clickedMenu.find("li").show().find("ul").hide();
        });
      }
      $(document).on("click.menu", (index, element) => {
        const target = $(index.target);
        if (
          !target.closest(".dropdown-btn").length &&
          !target.closest(".dropdown-m-1").length
        ) {
          $(".dropdown-m-1-btn").removeClass("active");
          $(".dropdown-m-1-btn + .dropdown-m-1").slideUp(150);
          $(document).off("click.menu");
        }
      });
    });
    // * submenu navigation within the menu
    $(document).on("click", ".dropdown-m-1 li a", (index, element) => {
      const item = $(element);
      // * if sub menu is any
      if (item.siblings("ul").length) {
        item.toggleClass("active");
        item.parents("li:first").siblings("li").slideToggle();
        item.closest("li").find("ul:first").slideToggle();
        // * other sub menu hide
        item.siblings("ul").find("ul").hide();
        item.siblings("ul").find("li").show();
      }
    });
  }
  // * model 2
  // * mobil menu show hide btn
  $(".dropdown-m-2 > .dropdown-m-2-btn > button").click((index, element) => {
    index.stopPropagation();
    $(element).parent(".dropdown-m-2-btn").next("ul").slideToggle(200);
    // * When clicking outside the menu
    $(document).on("click", (index, element) => {
      if (!$(index.target).closest(".dropdown-m-2").length) {
        $(".dropdown-m-2 > ul").slideUp(200);
        $(element).find(".visible").removeClass("visible");
      }
    });
  });
  // * dropdown model 12show hide
  $(".dropdown-m-2-sub").on("click", (index, element) => {
    if ($(window).width() <= 768) {
      const clickedBtn = $(element);
      const clickedMenu = clickedBtn.siblings("ul");
      // * is show menu check
      if (clickedMenu.is(":visible")) {
        clickedMenu.toggleClass("visible");
      } else {
        // * other sub menu hide
        clickedBtn
          .parent("li")
          .siblings()
          .find("ul")
          .removeClass("visible")
          .find(".dropdown-m-2-sub")
          .siblings("ul")
          .removeClass("visible");
        // * sub menu hide
        clickedBtn.siblings("ul").find("ul").removeClass("visible");
        clickedMenu.toggleClass("visible");
      }
      // * mobil to pc visible bug fix
      $(window).on("resize", () => {
        if ($(window).width() >= 768) {
          $(".dropdown-m-2-sub").siblings("ul").removeClass("visible");
        }
      });
    }
  });
  // * click bug fix
  $(".dropdown-m-2-sub ~ ul .dropdown-m-2-sub").on("click", (e) => {
    e.stopPropagation();
  });
  // * model 3
  $(".dropdown-m-3-btn").click(() => {
    $(".dropdown-m-3-hideable").toggleClass("visible");
  });
  // * -----------------------------------------------------
});
