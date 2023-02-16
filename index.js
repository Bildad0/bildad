$(document).ready(function () {
  "use strict";
  const progressBar = document.querySelector(".progress-bar");
  window.addEventListener("scroll", function () {
    let width =
      ((this.document.body.scrollTop ||
        this.document.documentElement.scrollTop) /
        (this.document.documentElement.scrollHeight -
          this.document.documentElement.clientHeight)) *
      100;
    progressBar.style.width = `${width}`;
  });
});
