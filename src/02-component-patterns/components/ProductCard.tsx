import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContexProps, Product, onChnageArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContexProps );
const { Provider } = ProductContext;

export interface Props{
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChnageArgs ) => void;
    value?: number;
}


export const ProductCard = ({ children, product, className, style, onChange, value }: Props ) => {

    const { counter, increasedBy } = useProduct({ onChange, product, value });

    return (
        <Provider value={{ 
            counter,
            increasedBy,
            product
         }}>
            <div style={ style } className={ `${ styles.productCard } ${ className }` }>
                { children }
            </div>
        </Provider>
    )
}