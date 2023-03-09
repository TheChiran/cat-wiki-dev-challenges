import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catApi from "../../apis/cat-api";
import Breed from "../../components/Breed/Index";
import "./breed-detail.scss";

type Breed = {
    name?: string;
    temperament?: string;
    origin?: string;
    description?: string;
    life_span?: string;
    adaptability?: number;
    affection_level?: number;
    child_friendly?: number;
    grooming?: number;
    intelligence?: number;
    health_issues?: number;
    social_needs?: number;
    stranger_friendly?: number;
};

export default function BreedDetail() {
    const { id } = useParams();
    const [breedImage, setBreedImage] = useState<string>();
    const [breed, setBreed] = useState<Breed>();
    const [isLoading, setLoading] = useState<boolean | null>(null);

    useEffect(() => {
        const callBreedAPI = async () => {
            const response = await catApi.get(`/images/search?breed_id=${id}`);
            setBreedImage(response.data[0].url);
            setBreed(response.data[0].breeds[0] as Breed);
        };
        callBreedAPI();
    }, [id]);

    return (
        <div className="breed-detail">
            <div className="breed-information">
                <div className="breed-information__image">
                    <Breed imageUrl={breedImage as string} hasSideOverlay />
                </div>
                <div className="breed-information__details">
                    <h2 className="name">{breed?.name}</h2>
                    <h2 className="description">{breed?.description}</h2>
                    <h2 className="general"><span>Temparament:</span> {breed?.temperament}</h2>
                    <h2 className="general"><span>Origin:</span> {breed?.origin}</h2>
                    <h2 className="general"><span>Life Span:</span> {breed?.life_span} years</h2>
                    <div className="detailed-list">
                        <div className="detailed">
                            <h2>Adaptability:</h2>
                            <div className="ratings">
                                {[1, 2, 3, 4, 5].map((value) => {
                                    return (
                                        <span className={`rating ${value <= Number(breed?.adaptability) ? 'rating-active' : 'rating-inactive'}`}></span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="detailed">
                            <h2>Affection level:</h2>
                            <div className="ratings">
                                {[1, 2, 3, 4, 5].map((value) => {
                                    return (
                                        <span className={`rating ${value <= Number(breed?.affection_level) ? 'rating-active' : 'rating-inactive'}`}></span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="detailed">
                            <h2>Child Friendly:</h2>
                            <div className="ratings">
                                {[1, 2, 3, 4, 5].map((value) => {
                                    return (
                                        <span className={`rating ${value <= Number(breed?.child_friendly) ? 'rating-active' : 'rating-inactive'}`}></span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="detailed">
                            <h2>Grooming:</h2>
                            <div className="ratings">
                                {[1, 2, 3, 4, 5].map((value) => {
                                    return (
                                        <span className={`rating ${value <= Number(breed?.grooming) ? 'rating-active' : 'rating-inactive'}`}></span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="detailed">
                            <h2>Intelligence:</h2>
                            <div className="ratings">
                                {[1, 2, 3, 4, 5].map((value) => {
                                    return (
                                        <span className={`rating ${value <= Number(breed?.intelligence) ? 'rating-active' : 'rating-inactive'}`}></span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="detailed">
                            <h2>Health issues:</h2>
                            <div className="ratings">
                                {[1, 2, 3, 4, 5].map((value) => {
                                    return (
                                        <span className={`rating ${value <= Number(breed?.health_issues) ? 'rating-active' : 'rating-inactive'}`}></span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="detailed">
                            <h2>Social needs:</h2>
                            <div className="ratings">
                                {[1, 2, 3, 4, 5].map((value) => {
                                    return (
                                        <span className={`rating ${value <= Number(breed?.social_needs) ? 'rating-active' : 'rating-inactive'}`}></span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="detailed">
                            <h2>Stranger friendly:</h2>
                            <div className="ratings">
                                {[1, 2, 3, 4, 5].map((value) => {
                                    return (
                                        <span className={`rating ${value <= Number(breed?.stranger_friendly) ? 'rating-active' : 'rating-inactive'}`}></span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-images">
                <h2 className="related-images__title">Other Photos</h2>
                <div className="related-images__image-list">
                    <div className="image">
                        <img src="https://cdn2.thecatapi.com/images/3gv.jpg" alt="Cat image" />
                    </div>

                    <div className="image">
                        <img src="https://cdn2.thecatapi.com/images/5al.jpg" alt="Cat image" />
                    </div>

                    <div className="image">
                        <img src="https://cdn2.thecatapi.com/images/b36.jpg" alt="Cat image" />
                    </div>

                    <div className="image">
                        <img src="https://cdn2.thecatapi.com/images/b7m.jpg" alt="Cat image" />
                    </div>

                    <div className="image">
                        <img src="https://cdn2.thecatapi.com/images/bj5.jpg" alt="Cat image" />
                    </div>

                    <div className="image">
                        <img src="https://cdn2.thecatapi.com/images/d5p.jpg" alt="Cat image" />
                    </div>

                    <div className="image">
                        <img src="https://cdn2.thecatapi.com/images/dum.jpg" alt="Cat image" />
                    </div>

                    <div className="image">
                        <img src="https://cdn2.thecatapi.com/images/obRjvWv-e.jpg" alt="Cat image" />
                    </div>
                </div>
            </div>
        </div>
    )
}