import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';


const ManageProductsData = (props) => {
    const { _id, img, age,  price } = props.product

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure? Do you want to delete this product?")
        if (proceed) {
            const url = `https://dry-mountain-44007.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        window.alert("Deleted Successfully")
                        window.location.reload(false);


                    }
                })

        }

    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-size" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Age: {age}</Card.Title>
                        <Card.Title>Price: {price}</Card.Title>
                        
                        <Button className="" onClick={() => handleDelete(_id)}>Delete</Button>
                    </Card.Body>
                </Card>

            </Col>

        </div>
    );
};

export default ManageProductsData;