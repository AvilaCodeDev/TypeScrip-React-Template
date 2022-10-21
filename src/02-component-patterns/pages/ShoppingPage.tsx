import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';


const ShoppingPage = () => {
    const { products, onProductCountChange, shoppingCart} = useShoppingCart();


    return (
        <div>
            <h1> Sopping Store </h1>            
            <hr />
            
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map( ( product ) => (
                        <ProductCard 
                            key={ product.id }
                            product ={ product }
                            className="bg-dark text-white" 
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 } 
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-white" />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>                
                    ) )
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                                <ProductCard 
                                    key = { key }
                                    product ={ product }
                                    className="bg-dark text-white" 
                                    style={{
                                        width: '100px'
                                    }}
                                    onChange={ onProductCountChange }
                                    value = { product.count }
                                >
                                    <ProductImage className="custom-image" />
                                    <ProductButtons 
                                        className="custom-buttons" 
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    />
                                </ProductCard>
                            )
                    )
                }
            </div>
            <div>
                <code>
                    { JSON.stringify( shoppingCart, null, 5 ) }
                </code>
            </div>
        </div>
    )
}

export default ShoppingPage
