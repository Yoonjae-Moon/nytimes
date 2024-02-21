const API_KEY = `503efe60dfbb4954bb3963baadbf8b56`;
let news = []
const getLatestNews = async()=>{
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
                     );
  
  const response = await fetch(url);
  const data = await response.json()  
  news = data.articles;
  console.log("ddd", news);
};

getLatestNews();
