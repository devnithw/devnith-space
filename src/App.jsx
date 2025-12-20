import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Cinema from './pages/Cinema';
import Books from './pages/Books';
import Songs from './pages/Songs';
import ReviewDetail from './components/ReviewDetail';
import cinemaData from './data/cinema.json';
import booksData from './data/books.json';
import songsData from './data/songs.json';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/cinema/:id" element={<ReviewDetail data={cinemaData} category="cinema" />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<ReviewDetail data={booksData} category="books" />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/:id" element={<ReviewDetail data={songsData} category="songs" />} />
      </Routes>
    </div>
  );
}

export default App;
