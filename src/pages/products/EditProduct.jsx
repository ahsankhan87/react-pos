import React, { useState } from 'react'
import axios from 'axios'

function EditProduct({ ProductToEdit }) {

    const [ProductName, setProductName] = useState(ProductToEdit?.name)
    const [ProductType, setProductType] = useState(ProductToEdit?.item_type)
    const [Productqty, setProductqty] = useState(ProductToEdit?.brand)
    const [ProductcostPrice, setProductcostPrice] = useState(ProductToEdit?.cost_price)

    const editProduct = async () => {
        try {
            const ProductData = {
                item_id: ProductToEdit.item_id,
                name: ProductName,
                type: ProductType,
                quantity: Productqty,
                cost_price: ProductcostPrice
            }

            /* FETCH */
            // const response = await fetch(`http://localhost:3000/Products/${ProductToEdit.item_id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(ProductData)
            // })

            /* AXIOS */
            const response = await axios.put(
                `http://localhost:3000/products/${ProductToEdit.item_id}`,
                ProductData,
                { headers: { 'Content-Type': 'application/json' } }
            )
            
            if (response.status === 200) {
                window.location.href = `/${ProductToEdit.item_id}`
            }
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Edit Product</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product name</label>
                <input type='text' value={ProductName} onChange={e => setProductName(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product type</label>
                <input type='text' value={ProductType} onChange={e => setProductType(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product qty</label>
                <input type='text' value={Productqty} onChange={e => setProductqty(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product costPrice</label>
                <input type='text' value={ProductcostPrice} onChange={e => setProductcostPrice(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => editProduct()}
            >
                Update changes
            </button>
        </div>
    )
}

export default EditProduct