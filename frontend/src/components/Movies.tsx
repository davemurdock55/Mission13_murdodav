import { useState, useEffect } from 'react';
import data from '.././MovieData.json';
import './../custom.scss';
import BackToTopButton from './BackToTopButton';

const mds = data.MovieData;

export default function Movies() {
  useEffect(() => {
    document.title = 'Movies | Joel Hilton Movie Collection';
  }, []);

  const [listOfMovies, setListOfMovies] = useState(mds);

  const addMovie = () => {
    // pulling in (spreading "...") all the data from mds
    setListOfMovies([
      ...mds,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

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
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.Title}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mb-5">
        <button className="btn btn-primary text-light" onClick={addMovie}>
          Add Movie
        </button>
      </div>
    </>
  );
}
