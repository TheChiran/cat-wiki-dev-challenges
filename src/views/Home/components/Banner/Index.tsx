import bannerImg from "./../../../../assets/Banner-img.png";
import logo from "./../../../../assets/CatwikiLogo-white.svg";

import TextInput from "../../../../components/TextInput/Index";

import "./banner.scss";
import { useState } from "react";
import BreedSelect from "../../../../components/BreedSelect/Index";
import catApi from "../../../../apis/cat-api";

interface Cat {
    name?: string;
};

export default function HomeBanner() {
    const [dataLoading, setDataLoading] = useState<boolean>();

    const [searchText, setSearchText] = useState<string | undefined>();
    const onSearchTextChange = (value: string) => {
        setSearchText(value);
    }

    const onSearch = async () => {
        setDataLoading(true);
        try {
            const result = await catApi.get<Cat[]>(`/breeds/search?name=${(searchText as string).toLocaleLowerCase()}`);

            if (result.data.length === 0) {
                alert('We found no result');
                setCatBreedList([]);
                return;
            }
            setCatBreedList(result.data);
            setDataLoading(false);
        } catch (error) {
            console.log('error: ', error);
            setDataLoading(false);
        }
    };

    const [mobileSearchOpened, setMobileSearchOpened] = useState<boolean>(false);

    const toggleMobileSearchTriggered = () => {
        setMobileSearchOpened(!mobileSearchOpened);
    };

    const [catBreedList, setCatBreedList] = useState<Cat[]>([]);

    return (
        <div className="home-banner">
            <div className="home-banner__image-wrapper">
                <img src={bannerImg} alt="" />
            </div>
            <div className="home-banner__contents">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <h2 className="title">Get to know more about your cat breed</h2>
                <div className="search">
                    <div className="search__mbl-trigger" onClick={toggleMobileSearchTriggered}>
                        <h2 className="title">Search</h2>
                        <div className="material-icons">search</div>
                    </div>
                    <div className="search__desktop">
                        <TextInput endIcon="search"
                            onValueChange={onSearchTextChange}
                            inputValue={searchText}
                            onClick={onSearch}
                            onEnterPressed={onSearch}
                        />
                        {catBreedList.length > 0 && <BreedSelect items={catBreedList} is_loading={dataLoading} />}
                    </div>
                    <div className={`search__mobile ${mobileSearchOpened ? 'search-mbl-open' : ''}`} >
                        <div className="cross-btn" onClick={toggleMobileSearchTriggered}>
                            <span className="material-icons">clear</span>
                        </div>
                        <TextInput endIcon="search"
                            onValueChange={onSearchTextChange}
                            inputValue={searchText}
                            onClick={onSearch}
                            onEnterPressed={onSearch}
                        />
                        {catBreedList.length > 0 && <BreedSelect items={catBreedList} is_loading={dataLoading} />}
                    </div>
                </div>
            </div>
        </div>
    )
}