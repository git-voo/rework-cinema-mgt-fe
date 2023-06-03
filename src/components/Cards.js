import React, { useState, useEffect } from 'react'
import "../../src/styles/cards/cards.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import image1 from "../assets/images/imag1.jpeg";

import { AiOutlineUpload } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import axios from 'axios';

const Cards = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://visua-prime-6w73.onrender.com/movies/all").then((res) => {
            console.log(res.data);
            setMovies(res.data);
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    return (
      <div className='container'>
        {movies.map((movie) => (
          <div className="card-container-grid" >
            <div className="card-section">
              <Card className='card-component' style={{ width: '18rem', background: "white" }}>
                <div className="background-image">
                  <Card.Img variant="top" src={movie.thumbnail} />
                  <div className="cardbuttons">
                    <div className="price">$10.00</div>
                    <div className="icons">
                      <div><AiOutlineUpload /></div>
                      <div><AiFillHeart /></div>
                    </div>
                  </div>
                </div>
                <div className="card-header">
                  <div className="date">
                    <h4 className='month'>Sep</h4>
                    <h4 className='day'>11</h4>
                  </div>
                  <div className="movie-title">
                    <h4 className="title">{movie.title}</h4>
                    <p className="movie-description">{movie.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Cards;
  