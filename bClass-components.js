// * page loader remowed
document.onreadystatechange = () => {
  setTimeout(() => {
    const pageLoader = document.getElementById("page-loader");
    if (pageLoader) pageLoader.remove();
  }, 500);
};
