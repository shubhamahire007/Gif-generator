import { useEffect, useState } from "react"
import './Tag.css'
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from '../hooks/useGif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

    const [tag, setTag] = useState('');

    const {gif, loading, fetchData} = useGif(tag);


    function clickHandler() {
        fetchData();
    }

    function changeHandler(event) {
        setTag(event.target.value);
    }

    return(
        <div className="tag">
        
            <h2>Random {tag} Gif</h2>

            {loading ? (<Spinner/>) : (<img src={gif} alt="Gif" width={300} height={400}/>)}
            
            <input
                type="text"
                className="input"
                placeholder="Enter any keyword"
                onChange={changeHandler}
                value={tag}
            />

            <button 
                onClick={clickHandler}
                className="btn">
                Generate
            </button>

        </div>
    )
}