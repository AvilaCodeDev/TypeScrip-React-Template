import { useEffect, useRef, useState } from 'react';
import { onChnageArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product,
    onChange?: ( args: onChnageArgs ) => void
    value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs ) => {
    const [ counter , setCounter ] = useState( value );

    const isControlled = useRef( !!onChange );

    const increasedBy = ( value: number) => {

        if( isControlled.current ) {
            return onChange! ({ count: value, product });
        }

        const newValue = Math.max( counter + value );
        setCounter( newValue );

        onChange && onChange({ count: newValue, product});
    }

    useEffect(() => {
      setCounter( value );
    }, [ value ]);
    

    return {
        counter,
        increasedBy
    }
}