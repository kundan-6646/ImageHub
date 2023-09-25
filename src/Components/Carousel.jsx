import c1 from '../Images/c-1.png';
import c2 from '../Images/c-2.png';
import c3 from '../Images/c-3.png';
import c4 from '../Images/c-4.png';

let Carousel = () => {

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={c1} className="d-block w-100" alt="Indian Wedding Images" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Capturing the Magic of Indian Weddings</h5>
                        <p>An Extravaganza of Love, Traditions, and Joy.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={c2} className="d-block w-100" alt="Indian Wedding Images" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Embracing Indian Wedding Splendor</h5>
                        <p>Where Traditions Sparkle with Love.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={c3} className="d-block w-100" alt="Indian Wedding Images" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Indian Wedding Spectacle</h5>
                        <p>Cherishing Moments for a Lifetime.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={c4} className="d-block w-100" alt="Indian Wedding Images" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Colors of Indian Matrimony</h5>
                        <p>A Vibrant Journey of Love and Culture.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}


export default Carousel;