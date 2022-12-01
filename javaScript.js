function changeBg(color) {
    document.body.style.background = color;
}
console.log("nfhewgv")

function SearchTheMovie() {
    let id = document.getElementById('take').value;
    // console.log(id);
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        let data = this.responseText;
        data = JSON.parse(data);
        display(data);
    }

    xhr.open("GET", `https://api.tvmaze.com/search/shows?q=${id}`);
    xhr.send();
}

function display(data) {
    // console.log(data);
    document.getElementById('take').value = '';
    let imgstr = ``;
    for (let i of data) {
        imgstr += `<img src="${i.show.image.medium}" alt="">`;
    }
    document.getElementById('img').innerHTML = imgstr;
}

// tv maje api

// Axios ..