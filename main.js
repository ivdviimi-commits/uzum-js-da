document.body.style.background = "#f3f3f3";
document.body.style.fontFamily = "Arial";
document.body.style.padding = "20px";

let title = document.createElement("h1");
title.textContent = "Mening Marketim";
title.style.color = "#7000ff";
document.body.append(title);

let box = document.createElement("div");

box.style.display = "flex";
box.style.flexWrap = "wrap";
box.style.gap = "20px";

document.body.append(box);

function cardYarat(nom, narx, rasm) {
    let card = document.createElement("div");

    card.style.width = "200px";
    card.style.padding = "12px";
    card.style.background = "white";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 2px 8px #ddd";

    let img = document.createElement("img");
    img.src = rasm;
    img.style.width = "100%";
    img.style.height = "160px";
    img.style.objectFit = "contain";

    let name = document.createElement("h3");
    name.textContent = nom;

    let price = document.createElement("p");
    price.textContent = narx;
    price.style.color = "#7000ff";
    price.style.fontWeight = "bold";

    let btn = document.createElement("button");
    btn.textContent = "Savatga qo'shish";
    btn.style.background = "#7000ff";
    btn.style.color = "white";
    btn.style.padding = "10px";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";

    btn.onclick = function () {
        alert(nom + " savatga qo'shildi!");
    };

    card.append(img);
    card.append(name);
    card.append(price);
    card.append(btn);

    box.append(card);
}

cardYarat("Quloqchin", "85 000 so'm", "https://olcha.uz/image/675x900/products/2022-04-24/besprovodnye-naushniki-nia-x10-49758-0.jpeg");

cardYarat("Aqlli soat", "120 000 so'm", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400");

cardYarat("Krasovka", "230 000 so'm", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400");

cardYarat("Ko'zoynak", "65 000 so'm", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400");

cardYarat("Ryukzak", "150 000 so'm", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400");

cardYarat("Fotoapparat", "550 000 so'm", "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400");

cardYarat("Klaviatura", "95 000 so'm", "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400");

cardYarat("Sichqoncha", "55 000 so'm", "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400");

cardYarat("Atir", "175 000 so'm", "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400");

cardYarat("Sport sumkasi", "110 000 so'm", "https://images.unsplash.com/photo-1622560480654-d96214fdc887")