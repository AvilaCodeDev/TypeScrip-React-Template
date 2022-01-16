import { ReactElement } from 'react';

export interface ProductCardProps{
    children?: ReactElement 
    product: Product,
}

export interface Product{
    id: string,
    title: string,
    img?: string
}

export interface ProductContexProps{
    counter: number;
    increasedBy: ( value: number ) => void;
    product: Product
}

export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string;}) => JSX.Element,
    Image: ({ img }: { img?: string ;}) => JSX.Element,
    Buttons: () => JSX.Element
}