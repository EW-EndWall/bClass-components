/***
 * * Bclass components v1.1.0
 * * Copyright 2021 ("https://github.com/EW-EndWall/bClass-components/blob/main/LICENSE")
 * * Licensed ("Bik Public License 2.0")
 * * License Update ("03/28/2024")
 */
// * page loader remowed
document.onreadystatechange = () => {
  setTimeout(() => {
    const pageLoader = document.getElementById("page-loader");
    if (pageLoader) pageLoader.remove();
  }, 500);
};
document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
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
    // * input password
    $(".input-password-m-1-btn").on("click", (event) => {
      const passwordInput = $(event.target).siblings("input");
      const isPasswordVisible = passwordInput[0].type === "text";
      passwordInput[0].type = isPasswordVisible ? "password" : "text";
      $(event.currentTarget).toggleClass("visible");
    });
    // * input number
    $(".input-number-m-2 span, .input-number-m-3 span").on("click", (event) => {
      const clickedIndex = $(event.currentTarget).index();
      const numberInput = $(event.currentTarget).siblings(
        "input[type=number]"
      )[0];
      if (clickedIndex === 0) numberInput.stepDown();
      else if (clickedIndex === 2) numberInput.stepUp();
    });
    // * input file
    $(".input-file-m-1 input").change(() => {
      const fileInput = $(event.currentTarget); // * get inpu
      const files = fileInput[0].files; // * get file
      const fileExtension = files[0]?.name
        .substring(files[0]?.name.lastIndexOf("."))
        .toLowerCase(); // * get extension
      const fileCount = fileInput[0]?.max || 99; // * is limit
      const ınputFileContainer = fileInput.closest(".input-file-m-1"); // * get container
      // * check result container
      let previewContainer = ınputFileContainer
        .prevAll(".input-file-m-1-preview")
        .first();
      if (!previewContainer.length)
        previewContainer = ınputFileContainer
          .nextAll(".input-file-m-1-preview")
          .first();
      // * Create an invisible input in PreviewContainer
      let hiddenInput = previewContainer.find('input[type="hidden"]');
      if (hiddenInput.length === 0) {
        hiddenInput = $('<input type="hidden" name="fileData">');
        previewContainer.append(hiddenInput);
      }
      // * file list
      const fileDataList = (files) => {
        // * Add file information to hidden input
        const fileList = JSON.parse(hiddenInput.val() || "[]"); // * get json data
        const isFileExists = fileList.some(
          (f) => f.name == files[0].name && f.size == files[0].size
        );
        if (isFileExists || fileList.length >= fileCount) {
          return true; // * process end
        }
        const readera = new FileReader();
        readera.readAsDataURL(files[0]);
        readera.onload = () => {
          fileList.push({
            name: files[0].name,
            size: files[0].size,
            type: files[0].type,
            data: readera.result,
          }); // * add file info

          hiddenInput.val(JSON.stringify(fileList)); // * Write updated data to input
        };
      };
      // * file list remove
      const fileDataRemove = (previewDiv) => {
        const fileList = JSON.parse(hiddenInput.val() || "[]"); // * get json data
        // * remove info
        const updatedFileData = fileList.filter(
          (f) => f.name !== files[0].name
        );
        hiddenInput.val(JSON.stringify(updatedFileData)); // * Write updated data to input
        previewDiv.remove(); // * Remove the div containing the img and icon
      };
      // * reader img
      const imgFileReader = ({ files, previewContainer }) => {
        if (files.length > 0) {
          //* cleck list and add list
          const listCheck = fileDataList(files);
          if (listCheck) return;
          const reader = new FileReader();
          // * Once the file is read, set the img source to the file data
          reader.onload = (e) => {
            // * Create the <div> element and its children
            const previewDiv = $("<div></div>");
            const imgElement = $("<img>").attr("src", e.target.result); // * Set the img src
            const deleteIcon = $("<i></i>").addClass(
              "fa fa-times-circle hover:content-2-text hover:zoom input-file-m-1-delete"
            );
            // * Append the img and delete icon to the preview div
            previewDiv.append(imgElement);
            previewDiv.append(deleteIcon);
            // * Append the preview div to the preview container
            previewContainer.append(previewDiv);
            // * Optionally, add a click event to the delete icon to remove the image preview
            deleteIcon.on("click", function () {
              fileDataRemove(previewDiv);
            });
          };
          // * Read the first file as a data URL (this will encode the image as a base64 string)
          reader.readAsDataURL(files[0]);
        }
      };
      // * reader video
      const videoFileReader = ({ files, previewContainer }) => {
        if (files.length > 0) {
          //* cleck list and add list
          const listCheck = fileDataList(files);
          if (listCheck) return;
          const previewDiv = $("<div></div>");
          const span = $(
            '<span class="d-flex flex-col align-items-center w-100 h-100"></span>'
          );
          const spanText = $(
            `<span class="w-100 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap">${files[0].name}</span>`
          );
          const deleteIcon = $("<i></i>").addClass(
            "fa fa-times-circle hover:content-2-text hover:zoom input-file-m-1-delete"
          );
          const thumbnail = $("<img>").addClass("w-100 h-100"); // * Set the img src
          // * Creating dynamic video and canvas
          const video = document.createElement("video");
          const canvas = document.createElement("canvas");
          video.src = URL.createObjectURL(files[0]);
          video.muted = true;
          video.playsInline = true;
          video.addEventListener("loadeddata", () => {
            video.currentTime = 1; // * Go to second 1
          });
          video.addEventListener("seeked", () => {
            const context = canvas.getContext("2d");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            // * Generate image URL
            const dataURL = canvas.toDataURL("image/png");
            thumbnail.attr("src", dataURL);
            // * Append the img and delete icon to the preview div
            span.append(thumbnail);
            previewDiv.append(span);
            previewDiv.append(spanText);
            // * We add the preview div to the previewContainer
            previewContainer.append(previewDiv);
            previewDiv.append(deleteIcon);
            // * Clean up resources
            video.pause();
            URL.revokeObjectURL(video.src);
            video.remove();
            canvas.remove();
          });
          // * delete data
          deleteIcon.on("click", function () {
            fileDataRemove(previewDiv);
          });
        }
      };
      // * reader sound
      const soundFileReader = ({ files, previewContainer }) => {
        if (files.length > 0) {
          //* cleck list and add list
          const listCheck = fileDataList(files);
          if (listCheck) return;
          // * sound file control
          // * We create the preview div for the sound file
          const previewDiv = $("<div></div>");
          const span = $(
            '<span class="d-flex flex-col align-items-center w-100 h-100"></span>'
          );
          const spanText = $(
            `<span class="w-100 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap">${files[0].name}</span>`
          );
          const zipIcon = $("<i></i>").addClass(
            "fa-solid fa-volume-low font-size-2.5 m-auto"
          );
          const deleteIcon = $("<i></i>").addClass(
            "fa fa-times-circle hover:content-2-text hover:zoom input-file-m-1-delete"
          );
          // * Append the img and delete icon to the preview div
          span.append(zipIcon);
          span.append(spanText);
          previewDiv.append(span);
          // * We add the preview div to the previewContainer
          previewContainer.append(previewDiv);
          previewDiv.append(deleteIcon);
          // * delete data
          deleteIcon.on("click", function () {
            fileDataRemove(previewDiv);
          });
        }
      };
      // * reader zip
      const zipFileReader = ({ files, previewContainer }) => {
        if (files.length > 0) {
          //* cleck list and add list
          const listCheck = fileDataList(files);
          if (listCheck) return;
          // * Zip file control
          // * We create the preview div for the zip file
          const previewDiv = $("<div></div>");
          const span = $(
            '<span class="d-flex flex-col align-items-center w-100 h-100"></span>'
          );
          const spanText = $(
            `<span class="w-100 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap">${files[0].name}</span>`
          );
          const zipIcon = $("<i></i>").addClass(
            "fa-solid fa-file-zipper font-size-2.5 m-auto"
          );
          const deleteIcon = $("<i></i>").addClass(
            "fa fa-times-circle hover:content-2-text hover:zoom input-file-m-1-delete"
          );
          // * Append the img and delete icon to the preview div
          span.append(zipIcon);
          span.append(spanText);
          previewDiv.append(span);
          // * We add the preview div to the previewContainer
          previewContainer.append(previewDiv);
          previewDiv.append(deleteIcon);
          // * delete data
          deleteIcon.on("click", function () {
            fileDataRemove(previewDiv);
          });
        }
      };
      // * reader document
      const docFileReader = ({ files, previewContainer }) => {
        if (files.length > 0) {
          //* cleck list and add list
          const listCheck = fileDataList(files);
          if (listCheck) return;
          // * document file control
          // * We create the preview div for the document file
          const previewDiv = $("<div></div>");
          const span = $(
            '<span class="d-flex flex-col align-items-center w-100 h-100"></span>'
          );
          const spanText = $(
            `<span class="w-100 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap">${files[0].name}</span>`
          );
          const zipIcon = $("<i></i>").addClass(
            "fa-solid fa-file-invoice font-size-2.5 m-auto"
          );
          const deleteIcon = $("<i></i>").addClass(
            "fa fa-times-circle hover:content-2-text hover:zoom input-file-m-1-delete"
          );
          // * Append the img and delete icon to the preview div
          span.append(zipIcon);
          span.append(spanText);
          previewDiv.append(span);
          // * We add the preview div to the previewContainer
          previewContainer.append(previewDiv);
          previewDiv.append(deleteIcon);
          // * delete data
          deleteIcon.on("click", function () {
            fileDataRemove(previewDiv);
          });
        }
      };
      //* cheack file type
      if ([".png", ".jpg", ".gif"].includes(fileExtension)) {
        imgFileReader({ files, previewContainer });
      } else if ([".mp4"].includes(fileExtension)) {
        videoFileReader({ files, previewContainer });
      } else if ([".mp3"].includes(fileExtension)) {
        soundFileReader({ files, previewContainer });
      } else if ([".zip", ".rar"].includes(fileExtension)) {
        zipFileReader({ files, previewContainer });
      } else if (
        [
          ".doc",
          ".docx",
          ".xls",
          ".xlsx",
          ".ppt",
          ".pptx",
          ".pdf",
          ".odt",
          ".ods",
          ".odp",
          ".txt",
        ].includes(fileExtension)
      ) {
        docFileReader({ files, previewContainer });
      }
    });
  }
});
