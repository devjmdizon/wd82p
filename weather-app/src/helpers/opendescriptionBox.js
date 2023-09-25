const descriptBox = document.getElementById("descript-box");
const descriptTitle = document.getElementById("descript-title");
const backArrow = document.getElementById("back-arrow");

export default function closedesciptionBox() {
  descriptBox.style.display = "flex";
  descriptTitle.style.display = "block";
  backArrow.style.display = "block";
}
