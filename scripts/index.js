const innerWrap = document.querySelector(".header .inner-wrap");
const innerMenu = document.querySelector(".header .inner-wrap .inner-menu");
const barIcon = document.querySelector("header .inner-wrap .inner-bar .bar-ico");
const closeIcon = document.querySelector(".header .inner-wrap .close-ico");
const unorderList = document.querySelector(".header .inner-wrap .inner-menu ul");
const lists = document.querySelectorAll(".header .inner-menu ul li");
const anchors = document.querySelectorAll(".header .inner-menu ul li a");

const handleClickBarIcon = (e) => {
  e.target.style.display = "none";
  closeIcon.style.display = "inline-block";
  unorderList.style.display = "block";
  innerMenu.style.display = "block";
  innerWrap.style = "padding-bottom: 0";

  for (const li of lists) {
    li.style = "border-top: 1px solid #eee; padding: 0";
  }

  for (const a of anchors) {
    a.style = "width: 100%;text-align: center;font-size: 16px;height: 50px;font-weight: 400;line-height: 50px; transition: all .25s ease-in-out;";
    a.addEventListener("click", () => {
      innerWrap.style = "padding-bottom: 24px";
      closeIcon.style.display = "none";
      barIcon.style.display = "inline-block";
      innerMenu.style.display = "none";
    });
  }

}

barIcon.addEventListener("click", handleClickBarIcon);

const handleCloseMenu = () => {
  innerWrap.style = "padding-bottom: 24px";
  closeIcon.style.display = "none";
  barIcon.style.display = "inline-block";
  innerMenu.style.display = "none";
}

closeIcon.addEventListener("click", handleCloseMenu);