import bannerImg from "./../../../../assets/Banner-img.png";
import logo from "./../../../../assets/CatwikiLogo-white.svg";

import TextInput from "../../../../components/TextInput/Index";

import "./banner.scss";
import { useState } from "react";
import BreedSelect from "../../../../components/BreedSelect/Index";

export default function HomeBanner() {
    const [searchText, setSearchText] = useState<string | undefined>();
    const onSearchTextChange = (value: string) => {
        setSearchText(value);
    }

    const onSearch = () => {
        console.log('search called with search value: ', searchText);
    };

    const [mobileSearchOpened, setMobileSearchOpened] = useState<boolean>(false);

    const toggleMobileSearchTriggered = () => {
        setMobileSearchOpened(!mobileSearchOpened);
    };

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
                        <BreedSelect />
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
                        <BreedSelect />
                    </div>
                </div>
            </div>
        </div>
    )
}