<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>nytimes</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/2b71f82e84.js" crossorigin="anonymous"></script>
  <link href="style.css" rel="stylesheet" type="text/css" />

</head>

<body>
  <div class="side-menu" id="mySidenav">
    <button class="closebtn" onclick="closeNav()">&times;</button>
    <div class="side-menu-list" id="menu-list">
      <button>Business</button>
      <button>Entertainment</button>
      <button>General</button>
      <button>Health</button>
      <button>Science</button>
      <button>Sports</button>
      <button>Technology</button>
    </div>

</div>



  <section class="container">
    <div class="menu-and-search">
      <i class="fas fa-bars fa-xl hide icon-button" onclick="openNav()"></i>
      <i class="fas fa-search fa-xl icon-button" onclick="openSearchBox()"></i>

      <span id="input-area">
          <input type="text" id="search-input" placeholder="당신의 키워드는?" />
          <button class="search-button" onclick="getNewsByKeyword()">검색!</button>
      </span>

    </div>

    <section>
      <div class="head-line">
        <img src="nytimes.png">
      </div>

      <div class="menus">
        <button>Business</button>
        <button>Entertainment</button>
        <button>General</button>
        <button>Health</button>
        <button>Science</button>
        <button>Sports</button>
        <button>Technology</button>
        
      </div>
      
    </section>

    <section id = "news-board">
      <div class="row news">
        <div class="col-lg-4">
          <img class="news-img-size" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHg4wsZl75FRwzBY8Zl0dZ6ldCWC5Q7uPrg&usqp=CAU">
        </div>

        <div class="col-lg-8">
          <h2>
            제목 두둥
          </h2>
          
          <p>
            내용
          </p>
          
          <div>
            출처
          </div>
        </div>
        
      </div>
    </section>
    
  </section>

  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.0/moment.min.js"></script>
  <script src="main.js"></script>
  
</body>

</html>
