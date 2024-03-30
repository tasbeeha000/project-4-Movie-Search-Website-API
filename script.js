
function getMovie() {
    let SearchButton = document.getElementById("SearchBtn");
    let wordInputField = document.getElementById("SearchForWord").value;
    let MoviePoster = document.getElementById("poster");
   
    let MovieGenre = document.getElementById("genre");
    let MoviePlot = document.getElementById("plot");
    let MovieLanguage = document.getElementById("language");
    let MovieImdbRating = document.getElementById("ImdbRating");
    let MovieReleaseDate = document.getElementById("RealseDate");
    let MovieTime = document.getElementById("Time");
    let movieName = document.getElementById("movieTitle");
    let Movieactor = document.getElementById('actors');
  let MovieCountry = document.getElementById('country') ;
  let RealeseYearDate = document.getElementById('RealeseDY');
  let NoOfSeason = document.getElementById('season');
   

  let MoviePosterSec = document.getElementById('movie-poster');
  let MovieDetailSec = document.getElementById('movie-details');
  let MovieExtraDetail = document.getElementById('Extra-details');
  let ErrorNotFound = document.getElementById('ErrorSec');
    
   
    if (wordInputField === ''  ) {
      
      let AlertText = document.getElementById('alert-text');
    
      AlertText.classList.add('show');
      setTimeout(function() {
        AlertText.classList.remove('show');
    }, 5000);
 
    } 
    
    else {
     
      const apiKey = "c42ea8c1";
      const apiUrl = `https://www.omdbapi.com/?t=${wordInputField}&apikey=${apiKey}`;
      document.getElementById("loader").style.cssText = "display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;  z-index: 9999;";
     
      fetch(apiUrl)
        .then((response) => response.json()) 
        .then((data) => { 
          document.getElementById("loader").style.display = "none";
          
          if(data.Response  == 'False'){
         
            MoviePosterSec.style.cssText = "display: none";
            MovieDetailSec.style.cssText = "display: none;";
            MovieExtraDetail.style.cssText = "display: none;";
            ErrorNotFound.style.cssText = 'display: flex';
           
           
          
          }

          else{
            console.log(data);
            MoviePosterSec.style.cssText = "display: grid";
            MovieDetailSec.style.cssText = "display: grid";
            MovieExtraDetail.style.cssText = "display: grid";
            ErrorNotFound.style.cssText = 'display: none';
           
          MoviePoster.src = data.Poster;

        
          Movieactor.innerHTML = `Cast : ${data.Actors}`;
          MovieImdbRating.innerHTML = `Imdb : ${data.imdbRating}`;

          MovieGenre.innerHTML = `Genres : ${data.Genre} `;
          MoviePlot.innerHTML = data.Plot;
          MovieLanguage.innerHTML = `Language : ${data.Language}`;

          MovieReleaseDate.innerHTML = `Year : ${data.Year}`;
          MovieTime.innerHTML = `Duration : ${data.Runtime}`;
          movieName.innerHTML = `Title : ${data.Title}`;
          MovieCountry.innerHTML = `Country : ${data.Country}`;
          RealeseYearDate.innerHTML = `Date : ${data.Released}`;
          if (data.totalSeasons !== undefined && data.totalSeasons !== null) {
            NoOfSeason.innerHTML = `Total Seasons : ${data.totalSeasons}`;
        } else {
           
            NoOfSeason.innerHTML = ""; 
        }

          }
          
        });
    }
  }

  