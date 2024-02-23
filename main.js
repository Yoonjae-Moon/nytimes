const API_KEY = `503efe60dfbb4954bb3963baadbf8b56`;
let newsList = []
const menus = document.querySelectorAll(".menus button")
console.log("mmm", menus);
menus.forEach(menu=>menu.addEventListener("click",(event)=>getNewsByCategory(event)))

let url = new URL(`https://yjtimes.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`);

//에러
const getNews = async()=>{
  try{
    const response = await fetch(url);

    const data = await response.json()
    if (response.status === 200){
      if (data.articles.length === 0){
        throw new Error("No result for this search")
      }
      newsList = data.articles;
      render();
    } else{
      throw new Error(data.message)
    }    
  }catch(error){
    errorRender(error.message)
  }
}

//뉴스 가져오기
const getLatestNews = async () => {
  url = new URL(`https://yjtimes.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`);

  getNews();

};

//카테고리 분류
const getNewsByCategory = async(event)=>{
  const category = event.target.textContent.toLowerCase();
  url = new URL(`https://yjtimes.netlify.app/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
  getNews();
}

//키워드 검색
const getNewsByKeyword=async()=>{
  const keyword = document.getElementById("search-input").value;
  
  url = new URL(`https://yjtimes.netlify.app/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`)

  getNews();
}

//render 함수
const render = () => {
  const newsHTML = newsList.map(news =>
    `<div class="row news">
      <div class="col-lg-4">
        <img class="news-img-size" src="${news.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'}">
      </div>
      <div class="col-lg-8">
        <h2>${news.title}</h2>
        <p>${
          news.description && news.description.length > 200
            ? news.description.substring(0, 200) + "..."
            : news.description || "내용없음"
        }</p>
        <div>${news.source?.name || 'no source'} * ${news.publishedAt}</div>
      </div>
    </div>`
  ).join('');
  
  document.getElementById('news-board').innerHTML = newsHTML;
}

const errorRender = (errorMessage) => {
  const errorHTML = `<div class="alert alert-danger" role="alert">
    ${errorMessage}
  </div>`;

  document.getElementById("news-board").innerHTML=errorHTML
}

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

const openSearchBox = () => {
  let inputArea = document.getElementById("input-area");
  if (inputArea.style.display === "inline") {
    inputArea.style.display = "none";
  } else {
    
    inputArea.style.display = "inline";
  }
};

getLatestNews();

//햄버거 메뉴
//검색 기능 생겼다 사라지기
//검색결과 없을 시-done
//이미지가 없을 시
