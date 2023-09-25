import { useState } from "react";
import ImageCard from "./ImageCard";
import ImagePreviewModal from "./ImagePreviewModal";
import NotFound from '../Images/not-found.png';

let Collections = ({title, data}) => {
 
    let [currentSelected, setCurrentSelected] = useState({});
    return (
        <div className="container mt-5 mb-4">
            <h4 className="collection-heading mb-4">{title ? title : 'Popular Collections'}</h4>
            <ImagePreviewModal imgInfo={currentSelected} />

            {data.length > 0 ? <div className="images ">
                {data.map((image) => <ImageCard key={image.id} 
                imgData={image}
                setCurrentSelected = {setCurrentSelected} />)}
            </div> 
            : <div className="no-results">
                <img src={NotFound} alt="No results found" />
            </div>}
        </div>
    )
}

export default Collections;