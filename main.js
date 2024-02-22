const API_KEY = `503efe60dfbb4954bb3963baadbf8b56`;
let newsList = []
const menus = document.querySelectorAll(".menus button")
console.log("mmm", menus);
menus.forEach(menu=>menu.addEventListener("click",(event)=>getNewsByCategory(event)))

const getLatestNews = async () => {
  const url = new URL(`https://yjtimes.netlify.app/`
  );

  const response = await fetch(url);
  const data = await response.json()
  newsList = data.articles;
  render();
  console.log("ddd", newsList);
};

const getNewsByCategory = async(event)=>{
  const category = event.target.textContent.toLowerCase();
  console.log("category");
  const url = new URL(`https://yjtimes.netlify.app/`)
  const response = await fetch(url)
  const data = await response.json()
  console.log("ddd", data)

  newsList = data.articles;
  render();
}

const getNewsByKeyword=async()=>{
  const keyword = document.getElementById("search-input").value;
  
  console.log("keyword");
  const url = new URL(`https://yjtimes.netlify.app/`)

  const response = await fetch (url)
  const data = await response.json()
  console.log("keyword data", data);
}

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

// 1. 버튼에 클릭 이벤트 주기
// 2. 카테고리별 뉴스 가져오기
// 3. 뉴스 보여주기
