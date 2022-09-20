const API_KEY = 'api_key=27c245578ee9d805c6b06cde50fbb45a';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const main = document.getElementById('main');
//const form = document.getElementById('form');
//const search = document.getElementById('search')

alert('در صورت نمایش ندادن فیلم ها لطفا فیلتر شکن را روشن کرده و دوباره برنامه را اجرا کنید(صفحه را دوباره باز کنید). چون من در برنامه از Api دیگری استفاده کردم زیرا نتوانستم از Api گفته شده توسط استاد استفاده کنم چون به صورت لیست چیزی را به من نمیداد و فقط یک فیلم را به تنهایی باز میگرداند')

getMovies(API_URL);

function getMovies(url){
    
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    }).catch(() => {
        alert('Connect To Vpn')
    })
}


let showMovies = function(data){
    main.innerHTML = '';
    data.forEach(movie => {
        
        const{title, poster_path, vote_average, overview} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMG_URL + poster_path }" alt="${title}">  

            <div class="caption">
              <h3>${title}</h3>
              <span id="rating">${vote_average}</span>
            </div>

            <div class="overView">
              <h4>Overview</h4>
              <p>${overview}</p>
            </div>
        `
        main.appendChild(movieElement);
    });
}