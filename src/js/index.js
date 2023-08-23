const usernameEl = document.getElementById("username_card");
const articlesEl = document.getElementById("articles");

usernameEl.innerText = data.user_data.name;



let articlesInner = '';
data.article_data.forEach(e => {
    articlesInner += `<article><div class="thumbnail"><img src="./src/img/${e.img}"></div><div class="text"><h2>${e.title}</h2><p>${e.tease}</p></div></article>`;
});

articlesEl.innerHTML = articlesInner;

// if (data.dataset.name==="main-data"){
//     console.log("main-data loaded")

// }

console.log(data);