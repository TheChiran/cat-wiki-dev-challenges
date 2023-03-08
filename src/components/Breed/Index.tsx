import "./breed.scss";

type BreedProps = {
    name: string;
    imageUrl: string;
    hasSideOverlay?: boolean;
};

export default function Breed({
    name, imageUrl, hasSideOverlay = false
}: BreedProps) {
    return (
        <div className={`breed`}>
            <div className={`image-wrapper ${hasSideOverlay ? 'side-overlay' : ''}`}>
                <img src={imageUrl} alt="Cat Breed Image" />
            </div>
            <h2 className="name">{name}</h2>
        </div>
    )
};