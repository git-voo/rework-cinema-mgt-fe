import React, { useState, useEffect } from "react";
import "../../src/styles/cards/cards.scss"; 
import Card from "react-bootstrap/Card"; 

import { AiOutlineUpload } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai"; 
import { axiosInstance } from "../services/AxiosInstance";
import { Link } from "react-router-dom";

const Cards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   axiosInstance.get("/movies/all")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="card-container">
      <div className="card-container-grid">
        {movies.length ? (
          movies.map((movie) => {
            return  <Link to={`/movie/${movie._id}`} className="card-section" key={movie._id}>
              <Card
                className="card-component"
                // style={{ width: "18rem", background: "white" }}
              >
                <div className="card-image-section">
                <div className="cardbuttons">
                    <div className="price">$10.00</div>
                    <div className="icons">
                      <div>
                        <AiOutlineUpload />
                      </div>
                      <div>
                        <AiFillHeart />
                      </div>
                    </div>
                  </div>

                  <div className="image ">
                  <img  src={movie.thumbnail} />
                  </div>
               
                </div>



                <div className="card-footer">
                  <div className="date">
                    <h4 className="month">Sep</h4>
                    <h4 className="day">11</h4>
                  </div>
                  <div className="movie-title">
                    <h5 className="title">{movie.title}</h5>
                    <p className="movie-description">{movie.description}</p>
                  </div>
                </div>
              </Card>
            </Link>;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
