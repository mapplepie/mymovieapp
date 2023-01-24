import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies:[]
  }
  getMovies = async () => {
    const {data: {data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <selection class="container">
        <div>
          {isLoading ? 
          (
            <div>
              <span class="loader_text">"Loading..." </span>
            </div>
          ) : (
            <div class="movies">
              {movies.map(movie => (
                <Movie 
                  key={movie.id}
                  id={movies.id} 
                  year={movies.year} 
                  title={movies.title} 
                  summary={movies.summary} 
                  poster={movies.medium_cover_image}
                  />
                  ))}
            </div> 
          )}
        </div> 
      </selection>
    )  
    
  }
}

// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

export default App;
