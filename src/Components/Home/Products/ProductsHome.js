import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import HomeProductsData from './HomeProductsData';
import { useDispatch, useSelector } from 'react-redux';
import { SetProduct } from '../../../Redux/Actions/ProductActions';
import axios from 'axios';
import './Products.css'
const ProductsHome = () => {
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.allProducts.products.slice(0,6))
    console.log(products)
    
    const {isLoading} = useAuth();
    
    const fetchData= async ()=>{

        const response=await axios.get('https://dry-mountain-44007.herokuapp.com/products').catch(err=>console.log(err))
       dispatch(SetProduct(response.data));
     }
     
          useEffect(()=>{
           fetchData()
          },[])
    
    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="info" />
        
    }
    return (
        <div>

            <Container>
                <h1 className="my-5 fw-bold text-center text-colr">Our Products</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product => <HomeProductsData key={product._id} product={product}></HomeProductsData>)
                    }
                </Row>
                <Link to="/products">
                    <Button className="mt-3">See More</Button></Link>
            </Container>



        </div>
    );
};

export default ProductsHome;