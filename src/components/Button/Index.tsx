import React from 'react';
import './button.scss';

interface ButtonProps {
    variant?: 'default' | 'outline' | 'text';
    isDisabled?: false | true;
    disableShadow?: boolean;
    startIcon?: string;
    endIcon?: string;
    size?: 'sm' | 'md' | 'lg' | 'default' | '';
    color?: 'default' | 'primary' | 'secondary' | 'danger' | '';
    style?: Object;
    text?: string;
    onClick?: ()=> void;
};

const getVariantClassname = (variant=''): string =>{
    if(variant==='') return '';

    return `v-${variant}`;
};

const getColorClassName = (color=''):string=>{
    if(color === '') return '';

    return `color-${color}`;
}

const getSizeClassName = (size = ''): string =>{
    if(size === '') return '';

    return `${size}`;
};

const Button: React.FC<ButtonProps> = 
({text='Button',variant='default',size='',isDisabled=false,
disableShadow=false,endIcon='',startIcon='',color='',
...props}: ButtonProps)=>{
    return (
        <button 
            className={isDisabled ? variant==='text' ? 'btn-text-disabled': 'btn-disabled' 
            :`${getVariantClassname(variant)} ${disableShadow ? 'disable-shadow': ''} 
            ${endIcon !== '' || startIcon !== '' ? 'has-icon': ''} 
            ${getColorClassName(color)} ${getSizeClassName(size)}`} 
            disabled={isDisabled}>
            {startIcon !== '' ? <span className="material-icons">
            {startIcon}
            </span>: ''}
            {text}
            {endIcon !== '' ? <span className="material-icons">
            {endIcon}
            </span>: ''}
        </button>
    );
};

export default Button;