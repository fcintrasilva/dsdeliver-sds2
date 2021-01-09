import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductCard from './ProductCard';
import ProductsList from './ProductsList';
import StepsHeader from './stepsHeader';
import './styles.css';
import { OrderLocationdata, Product } from './types';


function Orders(){

    const [products, setProduct] = useState<Product[]>([]);
    const[orderLocation, setOrderLocation] = useState<OrderLocationdata>();
    

    useEffect(()=>{
        //Fazer requisição ao backend para buscar os produtos
        fetchProducts()
        .then(Response => setProduct(Response.data))
        .catch(error => console.log(error))



    }, []);

    return(
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>           
            
            
        </div>

        
    )
}

export default Orders;