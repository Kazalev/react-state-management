import './App.css';
import { MovieList } from './components/MovieList.jsx';
import { MovieInput } from './components/MovieInput.jsx';

function App() {
    return (
        <>
            <MovieInput />
            <MovieList />
        </>
    );
}

export default App;
