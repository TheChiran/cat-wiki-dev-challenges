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
    )
}