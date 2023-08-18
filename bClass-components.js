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
  $(".input-sellect-m-1").click(function () {
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
  $(".input-sellect-m-1 input").keyup(function () {
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
  $(".input-sellect-m-1").click(function () {
    if (!$(event.target).is("select") && $(this).find("input").length > 0) {
      let selectedOptions = $(this).find("option:selected").text().trim();
      if (selectedOptions) $(this).find("input").val(selectedOptions);
    }
  });
  // * -----------------------------------------------------
})();
