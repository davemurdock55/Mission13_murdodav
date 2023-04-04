import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Podcasts() {
  useEffect(() => {
    document.title = 'Podcasts | Joel Hilton Movie Collection';
  }, []);

  return (
    <div className="text-center">
      {/* <Banner text={"David's React App | Main"} /> */}
      <h1 className="text-light mt-3">Podcasts</h1>

      <center>
        <div
          className="card border-primary bg-dark m-3"
          style={{ width: '35rem' }}
        >
          <img
            src="./baconsale-logo.png"
            className="card-img-top bg-light p-5"
            alt="Baconsale"
          />
          <div className="card-body p-0">
            <div className="bg-primary border-secondary pt-3 pb-2">
              <h5 className="card-title text-light">BaconSale Podcast</h5>
            </div>
            <p className="card-text text-light pt-3 px-3">
              Baconsale is a podcast made by John Hilton. In his episodes, he
              talks about different movies, shows, and pop culture in general!
              Go check it out right now!
            </p>
            <Link
              to="https://baconsale.com/"
              target={'_blank'}
              className="btn btn-primary text-light"
            >
              BaconSale.com
            </Link>
            <p className="card-text m-2">
              <small className="text-muted">Made by David Murdock</small>
            </p>
          </div>
        </div>
      </center>
    </div>
  );
}
