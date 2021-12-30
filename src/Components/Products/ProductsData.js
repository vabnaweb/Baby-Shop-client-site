import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsData = (props) => {
    const { _id, img, age, price } = props.product
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-size" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Age: {age}</Card.Title>
                        <Card.Title>Price: $ {price}</Card.Title>
                        
                        <Link to={`/order/${_id}`}>
                            <Button>Order Now</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </Col>

        </div>
    );
};

export default ProductsData;