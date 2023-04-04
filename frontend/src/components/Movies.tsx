import { useState, useEffect } from 'react';
import './../custom.scss';
import BackToTopButton from './BackToTopButton';
import { Movie } from '../types/movie';

export default function Movies() {
  useEffect(() => {
    document.title = 'Movies | Joel Hilton Movie Collection';
  }, []);

  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOfMovies(temp);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <BackToTopButton />
      <div className="text-center">
        <h1 className="text-light m-3">Movie Collection</h1>
      </div>

      <div className="mt-4 mb-4 mx-3">
        <table className="table table-dark table-striped table-hover table-rounded">
          <thead>
            <tr className="table bg-primary text-light">
              <th></th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.movieId}>
                <td className="text-muted">{m.movieId}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
