const $ = document;
const cloth1 = $.querySelector(".cloth-1");
const cloth2 = $.querySelector(".cloth-2");
const cloth3 = $.querySelector(".cloth-3");
const cloth4 = $.querySelector(".cloth-4");

const isLoggedIn = localStorage.getItem("login");
if (!isLoggedIn) {
    window.location.href = "http://127.0.0.1:5500/login.html";
}

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        const one = Math.floor(Math.random() * 20);
        const two = Math.floor(Math.random() * 20);
        const three = Math.floor(Math.random() * 20);
        const four = Math.floor(Math.random() * 20);
        cloth1.firstElementChild.setAttribute("src", json[one].image);
        cloth1.lastElementChild.textContent = `${json[one].price} $`;

        cloth2.firstElementChild.setAttribute("src", json[two].image);
        cloth2.lastElementChild.textContent = `${json[two].price} $`;

        cloth3.firstElementChild.setAttribute("src", json[three].image);
        cloth3.lastElementChild.textContent = `${json[three].price} $`;

        cloth4.firstElementChild.setAttribute("src", json[four].image);
        cloth4.lastElementChild.textContent = `${json[four].price} $`;
        console.log('nima');
    });
