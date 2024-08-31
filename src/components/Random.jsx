import './Random.css'
import Spinner from "./Spinner";
import useGif from '../hooks/useGif'

export default function Random() {
    
    const {gif, loading, fetchData} = useGif();

    function clickHandler() {
        fetchData();
    }

    return(
        <div className="random">
        
            <h2>A Random Gif</h2>

            {loading ? (<Spinner/>) : (<img src={gif} alt="Gif" width={300} height={400}/>)}
            
            <button 
                onClick={clickHandler}
                className="btn">
                Generate
            </button>
        </div>
    )
}