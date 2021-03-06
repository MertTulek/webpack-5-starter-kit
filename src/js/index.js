import css from "../scss/style.scss";
// const $ = require("jquery"); // if we need
import icons from "../icons/icons";
import * as main from "./main";

function docReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
docReady(() => {
  icons.forEach(iconSpriteFn);
  function iconSpriteFn(item, index) {
    const iconSprite = document.querySelector("#iconSprite");
    if (iconSprite) {
      iconSprite.innerHTML +=
        "<div class='icon-sprite__item'>" +
        "<span class='icon-sprite__number'>" +
        (index + 1) +
        "</span>" +
        "<div class='icon-sprite__preview'>" +
        item.iconSvg +
        "</div>" +
        "<div class='icon-sprite__name'>" +
        item.iconId +
        "</div>" +
        "</div>";
    }

    const icon = document.querySelectorAll(".icon");
    if (icon) {
      Array.prototype.forEach.call(icon, (el) => {
        let dataIconId = el.getAttribute("data-icon-id");
        if (dataIconId == item.iconId) {
          el.innerHTML = item.iconSvg;
        }
      });
    }
  }
  main;
});
