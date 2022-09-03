// aside setting box

let settingsBtn = document.querySelector(".sett");
settingsBtn.onclick = () => {
  document.querySelector(".settings").classList.add("open");
  document.querySelector(".overlay").style.display = "block";
};
let closeSettingBox = document.querySelector(".closeSettings");
closeSettingBox.onclick = () => {
  document.querySelector(".settings").classList.remove("open");
  document.querySelector(".overlay").style.display = "none";
};

document.querySelector(".overlay").onclick = () => {
  document.querySelector(".settings").classList.remove("open");
  document.querySelector(".overlay").style.display = "none";
};

let cartButton = document.querySelector(".cart");
cartButton.onclick = () => {
  location.href = "cart.html";
};

document.querySelector(".nav-cart").onclick = () => {
  location.href = "cart.html";
};
document.querySelector(".nav-home").onclick = () => {
  location.href = "index.html";
};
document.querySelector(".nav-orders").onclick = () => {
  location.href = "order.html";
};
document.querySelector(".nav-wish").onclick = () => {
  location.href = "wishlist.html";
};
document.querySelector(".nav-chat").onclick = () => {
  location.href = "chat.html";
};
document.querySelector(".back-shop-btn").onclick = () => {
  location.href = "index.html";
};
let sizeOptions = document.querySelectorAll(".sizeOptions .sOp");
sizeOptions.forEach((op) => {
  op.addEventListener("click", () => {
    resetActiveOptions(sizeOptions);
    op.classList.add("active");
  });
});
function resetActiveOptions(items) {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

let colorsOptions = document.querySelectorAll(".color-option");

colorsOptions.forEach((color) => {
  color.addEventListener("click", () => {
    resetActiveOptions(colorsOptions);
    color.classList.add("active");
  });
});

function goToShop() {
  location.href = "shop.html";
}
function getProduct() {
  location.href = "product.html";
}
