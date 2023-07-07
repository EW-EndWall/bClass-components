// * page loader remowed
document.onreadystatechange = () => {
  setTimeout(() => {
    document.getElementById("page-loader").remove();
  }, 500);
};
