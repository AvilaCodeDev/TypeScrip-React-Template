import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { useContext } from 'react';

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext( ProductContext );
    let imgToshow: string = noImage;

    if( img ){
        imgToshow = img;
    }else if ( product.img ){
        imgToshow = product.img
    }

    return (
        <img className={ styles.productImg } src={ imgToshow } alt="Product" />
    );
}