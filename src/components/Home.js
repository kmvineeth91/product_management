import React from 'react'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'

function Home() {

    const [products, setProducts] = useState([])
    const [addButton, setAddButton] = useState(false)
    const [listBtn, setListBtn] = useState(false)
    const [deleteBtn, setDeleteBtn] = useState(false)

    const add = (event) => {
        event.preventDefault()
        const data = event.target
        const newProduct = {
            product_code: data.product_code.value,
            product_name: data.product_name.value,
            qty: data.qty.value
        }
        //Add products in array
        setProducts([...products, newProduct])
        console.log(products);
        alert('Product added successfully')
    }
    const deleteProduct =(event) => {
        event.preventDefault()
        let pdt_code = event.target.product_code.value
        let pdt_qty = event.target.qty.value
        let index = products.findIndex(data =>data.product_code == pdt_code)
        if(products[index].p_qty<pdt_qty){
            pdt_qty=products[index].pdt_qty
          }
          setProducts([...products,products[index].p_qty-=pdt_qty])
          alert('Product delete successfully')
    }
   
   
    return (
        <div>
            <div className='mt-2 p-3'>
                <Button variant="info"
                    onClick={() => {
                        setAddButton(!addButton)
                        setDeleteBtn(false)
                        setListBtn(false)
                    }}>Add Product</Button>{' '}

                <Button variant="info"
                    onClick={() => {
                        setDeleteBtn(!deleteBtn)
                        setAddButton(false)
                        setListBtn(false)
                    }}>Delete Product</Button>{' '}

                <Button variant="info"
                    onClick={() => {
                        setListBtn(!listBtn)
                        setAddButton(false)
                        setDeleteBtn(false)
                    }}>List Products</Button>{' '}
            </div>
            <hr />
            <Row>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <div>
                        {

                            addButton && <Form className='mt-3' onSubmit={add}>
                                <Form.Group className="mb-3" controlId="formBasicProductCode">
                                    <Form.Label>Product Code</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Product Code" name='product_code' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Product Name" name='product_name' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicQuantity">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" placeholder="Quantity" name='qty' />
                                </Form.Group>
                                <Button variant="info" type="submit">
                                    Add Product
                                </Button>
                            </Form>
                        }

                    </div>

                    {/* Remove Products */}
                    <div>
                        {
                            deleteBtn &&
                            <Form className='mt-5' onSubmit={deleteProduct}>
                                <Form.Group className="mb-3" controlId="formBasicProductCode">
                                    <Form.Label>Product Code</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Product Code" name='product_code' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Product Name" name='product_name' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicQuantity">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" placeholder="Quantity" name='qty' />
                                </Form.Group>
                                <Button variant="info" type="submit" 
                                 >
                                    Delete Product
                                </Button>
                            </Form>
                        }

                    </div>

                    {/* Product listing */}
                    <div>
                        {
                            listBtn &&
                            <Table striped bordered hover variant="dark" className='mt-3'>
                                <thead>
                                    <tr>
                                        <th>Sl.No:</th>
                                        <th>Product Code</th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((item, index) => {
                                            return (
                            
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.product_code}</td>
                                                    <td>{item.product_name}</td>
                                                    <td>{item.qty}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        }

                    </div>
                </Col>
                <Col lg={4}></Col>
            </Row>
        </div>
    )
}

export default Home