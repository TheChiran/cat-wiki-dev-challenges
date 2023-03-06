import "./select.scss";
import CircularProgress from '@mui/material/CircularProgress';

interface SelectItem {
    name: string;
};

type SelectProps = {
    items: any[];
    bindValue?: any;
    onSelect?: () => {};
    is_loading?: boolean;
}

const demoData = ['American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair', 'American Shorthair', 'American Wirehair'];

export default function BreedSelect({ items, is_loading }: SelectProps) {
    return (
        <div className="cat-bred-select">
            {is_loading && <center><CircularProgress /></center>}
            <div className="cat-breed-select-list">
                {!is_loading &&
                    items?.map((item: SelectItem) => {
                        return (
                            <div className="cat-bred-select__option">
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};