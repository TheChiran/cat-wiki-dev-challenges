import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import catApi from "../../apis/cat-api";
import TopSearchSkeleton from "../../components/Skeletons/TopSearch/Index";
import Transitions from "../../components/Transitions/Index";
import "./top-search.scss";

export default function TopSearch() {
    const [topSearched, setTopSearched] = useState<any>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [otherBreeds, setOtherBreeds] = useState<any>([]);
    const [loadMoreLoading, setLoadMoreLoading] = useState<boolean>(false);
    const [loadMoreText, setLoadMoreLoadingText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const callTopTenSearched = async () => {
            setLoading(true);
            const result = await catApi.get(`/images/search?limit=10&page=1&has_breeds=1`);
            setTopSearched(result.data);
        };
        callTopTenSearched();
    }, []);

    useEffect(() => {
        const callOtherBreedsAPI = async () => {
            const result = await catApi.get(`/images/search?limit=10&page=1&has_breeds=1`);
            if (result.data.lenght === 0) {
                setLoadMoreLoadingText('Sorry! no more data.');
                return;
            }
            const updatedData = otherBreeds.concat(result.data);
            setOtherBreeds(updatedData);
            setLoading(false);
            setLoadMoreLoading(false);
        };
        callOtherBreedsAPI();
    }, [currentPage]);

    const loadMore = () => {
        setLoadMoreLoading(true);
        setCurrentPage(currentPage + 1);
    };

    if (loading) return (
        <TopSearchSkeleton />
    );

    return (
        <Transitions>
            <div className="top-searches">
                <div className="top-search">
                    <h2 className="top-search__title">Top 10 most searched breeds</h2>
                    <div className="top-search__breeds">
                        {topSearched?.map((breed: any, index: number) => {
                            return (
                                <div className="breed">
                                    <div className="image">
                                        <img src={breed.url} alt={`${breed.breeds[0].name} image`} />
                                    </div>
                                    <div className="breed__content">
                                        <h2 className="title">{index + 1}. {breed.breeds[0].name}</h2>
                                        <h3 className="description">{breed.breeds[0].description}</h3>
                                        <Link to={`/breed/${breed?.breeds[0]?.id}`} className='know-more'>Read More <span className="material-icons">arrow_right_alt</span></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="others">
                    <h2 className="others__title">Other searched breeds</h2>
                    <div className="others__breeds">
                        {otherBreeds?.map((breed: any, index: number) => {
                            return (
                                <div className="breed">
                                    <div className="image">
                                        <img src={breed.url} alt={`${breed?.breeds[0]?.name} image`} />
                                    </div>
                                    <div className="breed__content">
                                        <h2 className="title">{index + 11}. {breed?.breeds[0]?.name}</h2>
                                        <h3 className="description">{breed?.breeds[0]?.description}</h3>
                                        <Link to={`/breed/${breed?.breeds[0]?.id}`} className='know-more'>Read More <span className="material-icons">arrow_right_alt</span></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    {loadMoreText !== '' ? <p>{loadMoreText}</p> : loadMoreLoading ? 'Loading Data' : <button onClick={loadMore} className="load-more">Load More <span className="material-icons">refresh</span></button>}
                </div>
            </div>
        </Transitions>
    )
}