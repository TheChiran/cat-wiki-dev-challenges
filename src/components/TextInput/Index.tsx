import { KeyboardEvent } from "react";
import "./text-input.scss";

type TextInputProps = {
    placeholder?: string;
    startIcon?: string;
    endIcon?: string;
    inputValue?: string;
    style?: {};
    type?: string;
    onClick?: () => void;
    onEnterPressed?: () => void;
    onValueChange?: (updated_value: string) => void;
};

const CheckIfImage = () => {
    let regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF|svg)$/);
    return function (str: string) {
        if (regex.test(str) === true) {
            console.log('true');
            return true;
        }
        return false;
    }
};

export default function TextInput({ placeholder = 'Enter search text', startIcon = '', endIcon = '',
    onClick = () => { }, onValueChange = () => { }, onEnterPressed = () => { }, type = 'text', inputValue = '' }: TextInputProps) {
    const checkImage = CheckIfImage();
    let [isStartIconImage, isEndIconImage] = [false, false];
    let [startIconClass, endIconClass] = ['start-icon', 'end-icon']
    if (startIcon !== '') {
        isStartIconImage = checkImage(startIcon);
        startIconClass = `${startIconClass} material-icons`;
    }
    if (endIcon !== '') {
        isEndIconImage = checkImage(endIcon);
        endIconClass = `${endIconClass} material-icons`;

    }

    const handleKeyUp = (event: KeyboardEvent | Event) => {
        if ((event as KeyboardEvent).key === 'Enter') {
            onEnterPressed();
        }
        else {
            onValueChange((event.target as HTMLInputElement).value);
        }
    };

    return (
        <div className="text-input">
            {startIcon !== '' &&
                <span className={startIconClass} onClick={onClick}>
                    {isStartIconImage ? <img src={startIcon} /> : startIcon}
                </span>
            }
            <input type={type} placeholder={placeholder} onKeyUp={handleKeyUp} />
            {endIcon !== '' &&
                <span className={endIconClass} onClick={onClick}>
                    {isEndIconImage ? <img src={endIcon} /> : endIcon}
                </span>
            }
        </div>
    )
}