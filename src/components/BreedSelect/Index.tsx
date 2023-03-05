import "./select.scss";

interface SelectItem {
    name: string;
};

type SelectProps = {
    items: SelectItem[];
    bindValue: any;
    onSelect: () => {};
}

const demoData = ['American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair', 'American Shorthair', 'American Wirehair'];

export default function BreedSelect() {
    return (
        <div className="cat-bred-select">
            <div className="cat-breed-select-list">
                {
                    demoData?.map((value) => {
                        return (
                            <div className="cat-bred-select__option">
                                {value}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};