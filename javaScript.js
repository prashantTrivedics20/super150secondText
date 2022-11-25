//alert("file conneted");
const api_url = "https://api.tvmaze.com/search/shows?q=";
//const api_url = "https://www.mygov.in/corona-data/covid19-statewise-status/";
function getApiData(url) {
    // var x = fetch(url).then((res) => { return res.json() }).then((data) => console.log(data));;
    // console.log(x);
    // this is for console

    setTimeout(() => {
        var x = fetch(url).then((res) => { return res.json() }).then((data) => display(data))
            .catch((error) => console.log(error.message));

    }, 3000);

}

function display(APIData) {

    console.log(APIData);

    for (let user of APIData) {

        document.getElementById("mytable").appendChild(tr);
    }

}







getApiData(api_url);