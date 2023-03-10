import "./style.scss";

export default function TopSearchSkeleton() {
    return (
        <div className="top-search-skeleton">
            <div className="top-searched">
                <div className="title"></div>
                <div className="breed-skeleton-list">
                    {[1, 2, 3, 4, 5].map((value) => {
                        return (
                            <div className="breed">
                                <div className="image"></div>
                                <div className="contents">
                                    <div className="name"></div>
                                    <div className="description"></div>
                                    <div className="read-more"></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}