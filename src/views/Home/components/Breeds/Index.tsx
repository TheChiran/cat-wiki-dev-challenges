import { useNavigate } from "react-router-dom";
import Breed from "../../../../components/Breed/Index";
import "./breeds.scss";

type BreedImage = {
    url: string;
    name: string;
};

const breedsImageList: BreedImage[] = [
    { url: 'https://cdn2.thecatapi.com/images/J2PmlIizw.jpg', name: 'Bengal' },
    { url: 'https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg', name: 'Savannah' },
    { url: 'https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg', name: 'Norwegian Forest Cat' },
    { url: 'https://cdn2.thecatapi.com/images/aaxNf4D0H.jpg', name: 'Selkirk Rex' },
]

export default function Breeds() {
    const navigate = useNavigate();

    return (
        <div className="breed-list">
            <h2 className="breed-list__title">Most Searched Breeds</h2>
            <div className="breed-list__breeds">
                <div className="title">
                    <h2 className="total-breed">66+ Breeds For you to discover</h2>
                    <h3 className="more" onClick={() => navigate('/top-search')}>See More <span className="material-icons">arrow_right_alt</span></h3>
                </div>
                <div className="top-breeds">
                    {breedsImageList?.map(({ name, url }: BreedImage, index) => {
                        return (
                            <Breed name={name} imageUrl={url} hasSideOverlay={index === 0} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}