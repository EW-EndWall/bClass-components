/* * Bclass components v1.0.0 (--)
 * * Copyright 2021-2023 The Bclass Authors
 * * Licensed (--)
 * * Update (--)
 */

(() => {
  // * page loader remowed
  document.onreadystatechange = () => {
    setTimeout(() => {
      const pageLoader = document.getElementById("page-loader");
      if (pageLoader) pageLoader.remove();
    }, 500);
  };
  // * -----------------------------------------------------
  // * create cookie
  function setCookie(cookieName, cookieValue, numdaystilexpireasinteger) {
    const d = new Date();
    d.setTime(d.getTime() + numdaystilexpireasinteger * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie =
      cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }
  // * get cookie
  function getCookie(cookieName) {
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
  }
  // * check coockie
  function checkCookiesConfirmation() {
    // * call cookie to get its value
    const x = getCookie("cookies-confirmation");
    if (x != "") {
      $("#cookies-confirmation").remove();
    }
  }
  $("#cookies-confirmation-close").on("click", function () {
    $("#cookies-confirmation").remove();
    setCookie("cookies-confirmation", "yes", 180);
  });
  // * start check coockie
  $(document).ready(function () {
    checkCookiesConfirmation();
  });
  // * -----------------------------------------------------
  // * input-sellect
  // * .input-sellect-m-1 selected bug fix
  if ($(".input-sellect-m-1").length > 0) {
    $(".input-sellect-m-1 select").each(function () {
      const selectElement = $(this);
      let selectElements = selectElement
        .find("option:selected")
        .map(function () {
          return $(this).text();
        })
        .get()
        .join(", ");
      selectElement.siblings("span").text(selectElements);
    });
  }
  // * .input-sellect-m-1 open
  $(".input-sellect-m-1").on("click", function () {
    if (!$(event.target).is("select")) {
      $(this).find("select").slideToggle().toggleClass("d-none");
      // * close others
      $(".input-sellect-m-1")
        .not(this)
        .find("select")
        .slideUp()
        .addClass("d-none");
      // * close all
      $(document).on("click.input-sellect-m-1", function (e) {
        const target = $(e.target);
        if (!target.closest(".input-sellect-m-1").length) {
          $(".input-sellect-m-1").find("select").slideUp().addClass("d-none");
          $(document).off("click.input-sellect-m-1");
        }
      });
      const selectedOptions = $(this)
        .find("option:selected")
        .map(function () {
          return $(this).text();
        })
        .get()
        .join(", ");
      $(this).find("span").text(selectedOptions);
    }
  });
  // * .input-sellect-m-1 option search
  $(".input-sellect-m-1 input").on("keyup", function () {
    const searchText = $(this).val().toLowerCase();
    const select = $(this).siblings("select");
    const options = select.find("option");
    const span = $(".input-sellect-m-1 span");

    options.each(function () {
      const option = $(this);
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
  $(".input-sellect-m-1").on("click", function () {
    if (!$(event.target).is("select") && $(this).find("input").length > 0) {
      let selectedOptions = $(this).find("option:selected").text().trim();
      if (selectedOptions) $(this).find("input").val(selectedOptions);
    }
  });
  // * -----------------------------------------------------
  // * model 1
  // * if is any drop menu
  if ($(".drop-menu-m-1").length) {
    $(".drop-menu-m-1").find("ul").slice(1).hide();
    // * on clikc btn open drop menu
    $(document).on("click", ".drop-menu-m-1-btn", function (e) {
      e.stopPropagation();
      const clickedBtn = $(this);
      const clickedMenu = clickedBtn.siblings(".drop-menu-m-1");
      // * is open
      if (clickedMenu.is(":visible")) {
        clickedMenu.slideUp(150);
      } else {
        $(".drop-menu-m-1").slideUp(150);
        // * open menu restart
        clickedMenu.slideDown(150, function () {
          clickedMenu.find("li").show().find("ul").hide();
        });
      }
      $(document).on("click.menu", function (e) {
        const target = $(e.target);
        if (
          !target.closest(".drop-menu-m-1-btn").length &&
          !target.closest(".drop-menu-m-1").length
        ) {
          $(".drop-menu-m-1").slideUp(0);
          $(document).off("click.menu");
        }
      });
    });
    // * submenu navigation within the menu
    $(document).on("click", ".drop-menu-m-1 li a", function (e) {
      const item = $(this);
      // * if sub menu is any
      if (item.siblings("ul").length) {
        item.parents("li:first").siblings("li").slideToggle();
        item.closest("li").find("ul:first").slideToggle();
        // * other sub menu hide
        item.siblings("ul").find("ul").hide();
        item.siblings("ul").find("li").show();
      }
    });
  }
  // * model 2
  if ($(".drop-menu-m-2").length) {
    // * mobil menu show hide btn
    $(".drop-down-m-2 > .drop-down-m-2-btn > a").click(function (e) {
      e.stopPropagation();
      $(this).parent(".drop-down-m-2-btn").next("ul").slideToggle(200);
      // * When clicking outside the menu
      $(document).on("click", function (e) {
        if (!$(e.target).closest(".drop-down-m-2").length) {
          $(".drop-down-m-2 > ul").slideUp(200);
          $(this).find(".visible").removeClass("visible");
        }
      });
    });
    // * dropdown model 1 show hide
    $(".drop-down-m-2-sub").on("click", function (e) {
      if ($(window).width() <= 768) {
        const clickedBtn = $(this);
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
            .find(".drop-down-m-2-sub")
            .siblings("ul")
            .removeClass("visible");
          // * sub menu hide
          clickedBtn.siblings("ul").find("ul").removeClass("visible");
          clickedMenu.toggleClass("visible");
        }
        // * mobil to pc visible bug fix
        $(window).on("resize", function () {
          if ($(window).width() >= 768) {
            $(".drop-down-m-2-sub").siblings("ul").removeClass("visible");
          }
        });
      }
    });
    // * click bug fix
    $(".drop-down-m-2-sub ~ ul .drop-down-m-2-sub").on("click", function (e) {
      e.stopPropagation();
    });
  }
  // * model 3
  $(".drop-menu-m-3-show-btn").click(function (e) {
    $(".drop-menu-m-3-show").toggleClass("drop-menu-m-3-menu");
  });
  // * -----------------------------------------------------
})();
