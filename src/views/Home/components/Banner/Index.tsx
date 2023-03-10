import bannerImg from "./../../../../assets/Banner-img.png";
import logo from "./../../../../assets/CatwikiLogo-white.svg";

import TextInput from "../../../../components/TextInput/Index";

import "./banner.scss";
import { useEffect, useRef, useState } from "react";
import BreedSelect from "../../../../components/BreedSelect/Index";
import catApi from "../../../../apis/cat-api";
import { useNavigate } from "react-router-dom";

interface Cat {
    name?: string;
};

export default function HomeBanner() {
    const selectRef = useRef<any>(null);
    const selectRefMbl = useRef<any>(null);
    const [dataLoading, setDataLoading] = useState<boolean>(false);
    const [clickedOutsideSearch, setClickedOutsideSearch] = useState<boolean>(false);
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState<string | undefined>('');
    const onSearchTextChange = (value: string) => {
        setSearchText(value);
    }

    const onSearch = async () => {
        setDataLoading(true);
        if (searchText !== '') {
            try {
                const result = await catApi.get<Cat[]>(`/breeds/search?name=${(searchText as string).toLocaleLowerCase()}`);

                if (result.data.length === 0) {
                    alert('We found no result');
                    setCatBreedList([]);
                    setDataLoading(false);
                    return;
                }
                setCatBreedList(result.data);
                setDataLoading(false);
            } catch (error) {
                console.log('error: ', error);
                setDataLoading(false);
            }
        }
    };

    const [mobileSearchOpened, setMobileSearchOpened] = useState<boolean>(false);

    const toggleMobileSearchTriggered = () => {
        setMobileSearchOpened(!mobileSearchOpened);
    };

    const [catBreedList, setCatBreedList] = useState<Cat[]>([]);

    const selectOption = (id: string) => {
        navigate(`/breed/${id}`);
    };

    useEffect(() => {
        function handleClickSearchOutside(event: any) {
            const body = window.screen;

            if (body.width > 425 && selectRef.current && !selectRef?.current?.contains(event.target)) {
                setClickedOutsideSearch(true);
                return;
            }

            if (body.width <= 425 && selectRefMbl.current && !selectRefMbl?.current?.contains(event.target)) {
                setClickedOutsideSearch(true);
                return;
            }

            setClickedOutsideSearch(false);
        };

        document.addEventListener("mousedown", handleClickSearchOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickSearchOutside)
        };
    }, [selectRef]);

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
                    <div className="search__desktop" ref={selectRef}>
                        <TextInput endIcon="search"
                            onValueChange={onSearchTextChange}
                            inputValue={searchText}
                            onClick={onSearch}
                            onEnterPressed={onSearch}
                            isLoading={dataLoading}
                        />
                        {!clickedOutsideSearch && catBreedList.length > 0 && <BreedSelect items={catBreedList} is_loading={dataLoading} onSelect={selectOption} />}
                    </div>
                    <div className={`search__mobile ${mobileSearchOpened ? 'search-mbl-open' : ''}`} >
                        <div className="cross-btn" onClick={toggleMobileSearchTriggered}>
                            <span className="material-icons">clear</span>
                        </div>
                        <div className="search-input-mbl" ref={selectRefMbl}>
                            <TextInput endIcon="search"
                                onValueChange={onSearchTextChange}
                                inputValue={searchText}
                                onClick={onSearch}
                                onEnterPressed={onSearch}
                                isLoading={dataLoading}
                            />
                            {!clickedOutsideSearch && catBreedList.length > 0 && <BreedSelect items={catBreedList} is_loading={dataLoading} onSelect={selectOption} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}