import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import './Banner.css';

const backdrop_path = "https://image.tmdb.org/t/p/original/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg";
//const backdrop_path = "https://www.themoviedb.org/t/p/original/mvpW6oqUF8L9P665vsGiuq9j97b.jpg";

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchDemonSlayer);
            setMovie(
                request.data
            );
            return request;
        } fetchData();
    })

    return (
        <div>
            {/* HEADER */}
            <header
                className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${backdrop_path})`,
                    backgroundPosition: "center-center"
                }}
            >
                {/* BANNER CONTENT*/}
                <div className='banner_content'>
                    <h1 className='banner_title'>
                        {movie.name || movie.title || movie.original_name}
                    </h1>
                    {/* 2 BUTTONS */}
                    <div className='banner_buttons'>
                        <a href="https://www.netflix.com/gb/title/81091393" target="_blank" rel="noreferrer"><button className='banner_button'>
                            Play
                        </button></a>
                        <a href="https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba" target="_blank" rel="noreferrer"><button className='banner_button'>
                            Wiki
                        </button></a>
                    </div>
                    {/* BANNER DESCRIPTION */}
                    <h1 className='banner_description'>{movie.overview}</h1>
                </div>

                <div className='banner--fadeBottom'></div>
            </header >
        </div >
    )
}


export default Banner;