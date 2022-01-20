import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';


const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1> Sopping Store </h1>            
            <hr />
            
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product ={ product } >
                    <ProductCard.Image />
                    <ProductCard.Title title={ '' } />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard 
                    product ={ product }
                    className="bg-dark text-white" 
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                <ProductCard 
                    product ={ product }
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                
            </div>
        </div>
    )
}

export default ShoppingPage
