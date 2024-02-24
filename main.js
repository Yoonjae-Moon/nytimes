const API_KEY = `503efe60dfbb4954bb3963baadbf8b56`;
let newsList = []
const menus = document.querySelectorAll(".menus button")
console.log("mmm", menus);
menus.forEach(menu=>menu.addEventListener("click",(event)=>getNewsByCategory(event)))

let totalResult = 0;
let page = 1
const pageSize = 10;
const groupSize = 5;


let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);

//에러
const getNews = async()=>{
  try{

    url.searchParams.set("page", page); // =>? &page=page
    url.searchParams.set("pageSize", pageSize);

    const response = await fetch(url);

    const data = await response.json()
    if (response.status === 200){
      if (data.articles.length === 0){
        throw new Error("No result for this search")
      }
      newsList = data.articles;
      totalResult = data.totalResults

      render();
      paginationRender()

    } else{
      throw new Error(data.message)
    }    
  }catch(error){
    errorRender(error.message)
  }
}

//뉴스 가져오기
const getLatestNews = async () => {
  url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);

  getNews();

};

//카테고리 분류
const getNewsByCategory = async(event)=>{
  const category = event.target.textContent.toLowerCase();
  url = new URL(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
  getNews();
}

//키워드 검색
const getNewsByKeyword=async()=>{
  const keyword = document.getElementById("search-input").value;
  
  url = new URL(`https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`)

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

const paginationRender=()=>{
  //totalResult
  //page
  //pageSize
  //groupSize
  //totalPages
  const totalPages = Math.ceil(totalResult / pageSize)
  //pageGroup
  const pageGroup = Math.ceil(page/groupSize)
  //lastPage
  let lastPage = pageGroup * groupSize;
  // 마지막 페이지 그룹이 그룹 사이즈보다 작다? lastpage = totalpage
  if (lastPage > totalPages){
    lastPage = totalPages
  }



  //firstPage
  const firstPage = lastPage - (groupSize-1) <= 0 ? 1 : lastPage - (groupSize - 1);

  //first~last
  let paginationHTML = '';

  if (page > 1) { // Show these only if we are not on the first page
    paginationHTML += `<li class="page-item" onclick="moveToPage(1)"><a class="page-link">&lt;&lt;</a></li>
                        <li class="page-item" onclick="moveToPage(${page - 1})"><a class="page-link">&lt;</a></li>`;
  }

  for (let i = firstPage; i <= lastPage; i++) {
    paginationHTML += `<li class="page-item ${i === page ? "active" : ""}" onclick="moveToPage(${i})"><a class="page-link">${i}</a></li>`;
  }

  if (page < totalPages) { // Show these only if we are not on the last page
    paginationHTML += `<li class="page-item" onclick="moveToPage(${page + 1})"><a class="page-link">&gt;</a></li>
                        <li class="page-item" onclick="moveToPage(${totalPages})"><a class="page-link">&gt;&gt;</a></li>`;
  }


  document.querySelector(".pagination").innerHTML=paginationHTML


  // <nav aria-label="Page navigation example">
  //   <ul class="pagination">
  //     <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  //     <li class="page-item"><a class="page-link" href="#">1</a></li>
  //     <li class="page-item"><a class="page-link" href="#">2</a></li>
  //     <li class="page-item"><a class="page-link" href="#">3</a></li>
  //     <li class="page-item"><a class="page-link" href="#">Next</a></li>
  //   </ul>
  // </nav>
  
}

const moveToPage = (pageNum) => {
  console.log("moveToPage", pageNum);
  page = pageNum;
  getNews()
}

getLatestNews();



