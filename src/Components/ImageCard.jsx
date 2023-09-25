
let ImageCard = ({imgData, setCurrentSelected}) => {
    function getImageDesc() {
        let text = imgData.description;
        if(!text) {
            text =  imgData.alt_description;
        }

        return text.length > 30 ? text.substring(0, 30) + "..." : text;
    }

    return (
        <div className="image-card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
            setCurrentSelected(imgData);
        }}>
            <img src={imgData.urls.small} alt={imgData.alt_description} className="image" />
            <div className="image-preview">
                {getImageDesc()}
            </div>
        </div>
    )
}

export default ImageCard;