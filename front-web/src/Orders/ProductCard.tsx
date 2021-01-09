
import { Product } from './types';

type Props = {
    product: Product;
}
function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formatter.format(price);
}

function ProductCard({product}: Props){
    return(
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img
             src={product.imageUri} 
             className="order-card-image"
             alt={product.name}
             />
            <h3 className="order-card-price">
               {formatPrice(product.price)}
            </h3>

            <div className="order-card-description">
                <h3>
                    {product.description}                  
                </h3>
                Uma deliciosa combinação de <br/>
                Linguiça Calabresa, rodelas de <br/>
                cebolas frescas, azeitonas <br/>
                pretas, mussarela, polpa de <br/>
                tomate, orégano e massa especial.

                <p></p>

            </div>

           
            

        </div>
    )

}
export default ProductCard;