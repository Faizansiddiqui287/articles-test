import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
const News = () => {
    const API_KEY = "0d310839fde24789bd3fb194e65483fc";
    useEffect(() => {
        (async _ => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
            console.log(response.data?.articles);

        })()
    }, [])
    return (
        <>
            <h1>
                Hello world!
            </h1>
        </>
    );
}

export default News;
