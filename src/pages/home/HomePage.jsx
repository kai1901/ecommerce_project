import axios from 'axios';
import { useEffect, useState } from 'react';
import './HomePage.css';
import { Header } from '../../components/Header'; 
import { ProductsGrid  } from './ProductsGrid';

export function HomePage({ cart }) {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        axios.get('/api/products')
            // fetch() sẽ cần một khoảng thời gian để tải hết dữ liệu từ backend
            // trong khi đó đoạn code sẽ chạy hết các dòng code trong return
            // sau khi đã load xong data sẽ chạy đoạn code trong then()
            .then((response) => {
                setProducts(response.data);
            });

    }, []);


    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
            <title>Ecommerce Project</title>

            <Header cart={cart}/>

            <div className="home-page">
                <ProductsGrid products={products}/>
            </div>
        </>
    );
}

