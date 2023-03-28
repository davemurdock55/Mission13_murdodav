import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center">
      {/* <Banner text={"David's React App | Main"} /> */}
      <h1 className="text-light mt-3">Joel Hilton Movie Collection</h1>

      <center>
        <div
          className="card border-primary bg-dark m-3"
          style={{ width: '35rem' }}
        >
          <img
            src="./JoelHiltonHeadshot.jpg"
            className="card-img-top"
            alt="Joel Hilton"
          />
          <div className="card-body p-0">
            <div className="bg-primary border-secondary pt-3 pb-2">
              <h5 className="card-title text-light">
                Welcome to Joel Hilton's Movie Collection
              </h5>
            </div>
            <p className="card-text text-light pt-3 px-3">
              This is a site for Joel Hilton to keep track of his movie
              collection. In the future, you will be able to add, edit, and
              delete the movies in the collection.
            </p>
            <Link to="/movies" className="btn btn-primary text-light">
              Movie Collection
            </Link>
            <p className="card-text mt-2">
              <small className="text-muted">Made by David Murdock</small>
            </p>
          </div>
        </div>
      </center>
    </div>
  );
}
