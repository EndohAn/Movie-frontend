

import './App.css';
import { MyMovies } from './MyMovies';
import { useEffect, useState } from 'react';
import { getAllMovies, addMovie, editMovie, deleteMovie } from './FetchMovies';


function App() {

const [myMovie, setMovie] = useState([]);
const [title, setTitle] = useState("");
const [editing, setEditing] = useState(false);
const [movieId,setMovieId ] = useState("")


useEffect(() => {
  getAllMovies(setMovie)
}, [])

const updatingInInput = (_id, title) => {
  setEditing(true)
  setTitle(title)
  setMovieId(_id)
}



  return (
    <div>
     <h1>Movie  List</h1>
 
     <input
     type="text"
     placeholder="Add a movie"
     value = {title}
     onChange = {(e) => setTitle(e.target.value)}
     />
 
     <button 
     disabled={!title}
     onClick=
     {editing ? () => editMovie(movieId, title, setMovie, setTitle, setEditing) : () => addMovie(title, setTitle, setMovie)}>
     {editing ? "Edit" : "Add"}
     </button>  
 
 {myMovie.map((movie) => <MyMovies text={movie.title} key={movie._id}
 updatingInInput={() => updatingInInput(movie._id, movie.title)}
 deleteMovie={() =>deleteMovie(movie._id, setMovie)}
 />
 )} 
    </div>
   );
}

export default App;