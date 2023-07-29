/* * Bclass components v1.0.0 (--)
 * * Copyright 2021-2023 The Bclass Authors
 * * Licensed (--)
 * * Update (--)
 */
// * page loader remowed
document.onreadystatechange = () => {
  setTimeout(() => {
    const pageLoader = document.getElementById("page-loader");
    if (pageLoader) pageLoader.remove();
  }, 500);
};
