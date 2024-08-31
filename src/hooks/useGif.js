import { useEffect, useState } from "react"
import axios from 'axios';
  
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function useGif(tag) {

    const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {

        setLoading(true);
        const {data} = await axios.get(tag ? `${Url}&tag=${tag}` : Url);
        const imageSource = data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    },[])

    return {gif, loading, fetchData}
}