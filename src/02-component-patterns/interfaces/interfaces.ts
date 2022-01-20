import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImgProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

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
    Title: ( Props : ProductTitleProps ) => JSX.Element,
    Image: ( Props : ProductImgProps) => JSX.Element,
    Buttons: ( Props : ProductButtonsProps ) => JSX.Element
}