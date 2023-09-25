import { FaShare } from 'react-icons/fa';


let ImagePreviewModalFooter = ({imgInfo}) => {
    function getImageDesc() {
        let text = imgInfo.description;
        if(!text) {
            text =  imgInfo.alt_description;
        }

        return text;
    }
    return (
        <div className="modal-footer">
            <div className="image-info">
               <div>
                    <div className="image-info-item">
                        <span className='bold-text'>Likes</span>
                        <span className='brand-color'>{imgInfo.likes}</span>
                    </div>
                    <div className="image-info-item">
                        <span className='bold-text'>Dimensions</span>
                        <span className='brand-color'>{imgInfo.width + " X " + imgInfo.height}</span>
                    </div>
               </div> 

               <div>
                  <a href={imgInfo.urls.regular} target='_blank'><button className="btn btn-sm btn-outline-danger"><FaShare /> Share</button></a>  
                  {/* <button className="btn btn-sm btn-outline-danger"><FaInfo /> Info</button>   */}
               </div>
            </div>
            <div className='image-description mt-4'>{getImageDesc()}</div>
            <div className='image-tags mt-4'>
                {imgInfo.tags.map((tag, idx) => <div key={idx + 'tag.title'} className='image-tag'>{tag.title}</div>)}
            </div>
        </div>
    )
}

export default ImagePreviewModalFooter;