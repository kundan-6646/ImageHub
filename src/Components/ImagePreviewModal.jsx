import { FaCheckCircle  } from 'react-icons/fa';
import ImagePreviewModalFooter from './ImagePreviewModalFooter';

let ImagePreviewModal = ({imgInfo}) => {

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="user">
                            <img src={imgInfo.user ? imgInfo.user.profile_image.small : ''} className="user-img" alt='User Image' />
                            <div className="user-data">
                                <div className="user-name">{imgInfo.user ? imgInfo.user.name : ''}</div>
                                {imgInfo.user && imgInfo.user.social.portfolio_url ? 
                                    <div className="user-status"><a target='_blank' href={imgInfo.user.social.portfolio_url}>Available for hire</a> <FaCheckCircle /></div>
                                    : ''
                                }
                            </div>
                        </div>
                        <div className="btn-group">
                            <a href={imgInfo.urls ? imgInfo.urls.regular : ''} target='_blank'><button type="button" className="btn btn-outline-secondary">Download</button></a>
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href={imgInfo.urls ? imgInfo.urls.small : ''} target='_blank'>Small</a></li>
                                <li><a className="dropdown-item" href={imgInfo.urls ? imgInfo.urls.regular : ''} target='_blank'>Medium</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href={imgInfo.urls ? imgInfo.urls.full : ''} target='_blank'>Original Size</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="modal-body">
                        <img src={imgInfo.urls ? imgInfo.urls.regular : ''} alt={imgInfo ? imgInfo.alt_description : ''} />
                    </div>
                    {Object.keys(imgInfo).length !== 0 ? <ImagePreviewModalFooter imgInfo={imgInfo} /> : <></>}
                </div>
            </div>
        </div>
    )
}

export default ImagePreviewModal;