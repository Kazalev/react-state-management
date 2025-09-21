import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../movieSlice';

export const MovieList = () => {
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();

    const handleDeleteMovie = (id) => {
        dispatch(removeMovie(id));
    };

    return (
        <div>
            <h1>MovieList</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <span>{movie.name}</span>
                    <button onClick={() => handleDeleteMovie(movie.id)}>Delete Movie</button>
                </div>
            ))}
        </div>
    );
};
