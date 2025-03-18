
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Gyukotsu Ramen", restaurant: "Ramen-ya", image: "images/gyukotsu.jpg", rating: 4, comment: "Very tasteful!" },
    { id: 4,  name:  "Nirvana Ramen", restaurant: "Sakura no Hana"        ,image: "images/nirvana.jpg", rating : 3, comment: "Sumptuous"},
    { id: 5,  name:  "Naruto Ramen",  restaurant: "Gohanya"         ,image: "images/naruto.jpg", rating : 5, comment: "Spicy!"},
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById("detail-name").textContent = ramen.name || "Ramen Name";
    document.getElementById("Image").src = ramen.image;
    document.getElementById("detail-restaurant").textContent = ramen.restaurant || "Restaurant";
    document.getElementById("detail-rating").textContent = ramen.rating ? `Rating: ${ramen.rating}` : "Rating: N/A";
    document.getElementById("detail-comment").textContent = ramen.comment || "No comment";
}
function onClick(ramen) {
    
}


function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const newRamen = {
            id: ramens.length + 1, 
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: `images/${document.getElementById("new-image").value}`, 
            rating: parseInt(document.getElementById("new-rating").value) || undefined,
            comment: document.getElementById("new-comment").value || undefined
        };

        ramens.push(newRamen); 
        displayRamens(); 
        this.reset();
    });
}


window.onload = displayRamens;