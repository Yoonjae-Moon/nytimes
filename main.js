const API_KEY = `503efe60dfbb4954bb3963baadbf8b56`;
let newsList = []
const getLatestNews = async () => {
  const url = new URL(`https://yjtimes.netlify.app/`
  );

  const response = await fetch(url);
  const data = await response.json()
  newsList = data.articles;
  render();
  console.log("ddd", newsList);
};

const render = () => {
  const newsHTML = newsList.map(
    news => `<div class="row news">
  <div class="col-lg-4">
    <img class="news-img-size" src=${news.urlToImage}>
  </div>

  <div class="col-lg-8">
    <h2>
      ${news.title}
    </h2>
    
    <p>
      ${news.description}
    </p>
    
    <div>
      ${news.source.name} * ${news.publishedAt}
    </div>
  </div>
  
</div>`).join('');


  document.getElementById('news-board').innerHTML = newsHTML
}
getLatestNews();
