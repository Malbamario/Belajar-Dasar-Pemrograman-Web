// Get the navbar
var navbar = document.getElementById("navbar");
document.getElementById("mainEl").style.marginTop = navbar.offsetHeight.toString() + "px";
document.getElementById("img_profil").style.backgroundImage =
    "url(./src/img/" + data.user_data.img_name + ")";

const usernameEl = document.getElementById("username_card");
const resinEl = document.getElementById("resinBar");
const resinLabel = document.getElementById("resinLabel");
const articlesEl = document.getElementById("articles");

usernameEl.innerText = data.user_data.name;
resinEl.value = data.user_data.resin;
resinLabel.innerText = data.user_data.resin + "/160";

let articlesInner = "";
data.article_data.forEach((e) => {
    articlesInner += `<article><img class="thumbnail" src="./src/img/${e.img}"><div class="text"><h2>${e.title}</h2><p>${e.tease}</p></div></article>`;
});

articlesEl.innerHTML = articlesInner;
