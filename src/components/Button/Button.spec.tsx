import * as React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Button from './Index';

describe('Testing button component',()=>{
    test('If button component has classname v-default when no prop is passed',()=>{
        const {container:buttonComponent} = render(<Button />);

        expect(buttonComponent.getElementsByClassName('v-default')).toHaveLength(1);    
    });
});