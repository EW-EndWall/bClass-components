/***
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
      const selectedTexts = $(element)
        .find("option:selected")
        .map((i, option) => $(option).text())
        .get()
        .join(", ");
      $(element).siblings("span").text(selectedTexts);
    });
  }
  // * .input-sellect-m-1 open
  $(".input-sellect-m-1").on("click", (event) => {
    const targetElement = $(event.target);
    if (!targetElement.is("select")) {
      const container = $(event.currentTarget);
      container.children("span").toggleClass("active");
      container.find("select").slideToggle().toggleClass("d-none");
      // * close others
      $(".input-sellect-m-1")
        .not(container)
        .find("select")
        .slideUp()
        .addClass("d-none");
      // * close all
      $(document).on("click.input-sellect-m-1", (e) => {
        const documentTarget = $(e.target);
        if (!documentTarget.closest(".input-sellect-m-1").length) {
          $(".input-sellect-m-1").find("span").removeClass("active");
          $(".input-sellect-m-1").find("select").slideUp().addClass("d-none");
          $(document).off("click.input-sellect-m-1");
        }
      });
      const selectedOptions = container
        .find("option:selected")
        .map((i, option) => $(option).text())
        .get()
        .join(", ");
      container.find("span").text(selectedOptions);
    }
  });
  // * .input-sellect-m-1 option search
  $(".input-sellect-m-1 input").on("keyup", (event) => {
    const inputElement = $(event.currentTarget);
    const searchText = inputElement.val().toLowerCase();
    const select = inputElement.siblings("select");
    const options = select.find("option");

    options.each((index, option) => {
      const optionElement = $(option);
      const optionText = optionElement.text().toLowerCase();

      if (optionText.includes(searchText)) {
        optionElement.show();
      } else {
        optionElement.hide();
      }
    });

    if (searchText === "") return select.addClass("d-none");

    select.removeClass("d-none");
  });
  $(".input-sellect-m-1").on("click", (event) => {
    const clickedElement = $(event.currentTarget);
    if (
      !$(event.target).is("select") &&
      clickedElement.find("input").length > 0
    ) {
      const selectedOptions = clickedElement
        .find("option:selected")
        .text()
        .trim();
      if (selectedOptions) clickedElement.find("input").val(selectedOptions);
    }
  });
  // * -----------------------------------------------------
  // * model 1
  // * if is any dropdown
  if ($(".dropdown-m-1").length) {
    // * sub menu hidden
    $(".dropdown-m-1").find("ul ul").hide();
    // * on click btn open drop menu
    $(document).on("click", ".dropdown-m-1-btn", (event) => {
      event.stopPropagation();
      const clickedBtn = $(event.currentTarget);
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
      $(document).on("click.menu", (e) => {
        const target = $(e.target);
        if (
          !target.closest(".dropdown-m-1-btn").length &&
          !target.closest(".dropdown-m-1").length
        ) {
          $(".dropdown-m-1-btn").removeClass("active");
          $(".dropdown-m-1-btn + .dropdown-m-1").slideUp(150);
          $(document).off("click.menu");
        }
      });
    });
    // * submenu navigation within the menu
    $(document).on("click", ".dropdown-m-1 li a", (event) => {
      const item = $(event.currentTarget);
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
  $(".dropdown-m-2 > .dropdown-m-2-btn > button").click((event) => {
    event.stopPropagation();
    $(event.currentTarget)
      .parent(".dropdown-m-2-btn")
      .next("ul")
      .slideToggle(200);
    // * When clicking outside the menu
    $(document).on("click", (event) => {
      if (!$(event.target).closest(".dropdown-m-2").length) {
        $(".dropdown-m-2 > ul").slideUp(200);
        $(event.currentTarget).find(".visible").removeClass("visible");
      }
    });
  });
  // * dropdown model 2 show hide
  $(".dropdown-m-2-sub").on("click", (event) => {
    if ($(window).width() <= 768) {
      const clickedBtn = $(event.currentTarget);
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
  $(".dropdown-m-2-sub ~ ul .dropdown-m-2-sub").on("click", (event) => {
    event.stopPropagation();
  });
  // * model 3
  $(".dropdown-m-3-btn").click(() => {
    $(".dropdown-m-3-hideable").toggleClass("visible");
  });
  // * -----------------------------------------------------
});
