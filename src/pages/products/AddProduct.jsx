import React, { useState } from 'react'
import axios from 'axios'

function AddProduct() {

    const [ProductName, setProductName] = useState()
    const [ProductType, setProductType] = useState()
    const [ProductAge, setProductAge] = useState()
    const [ProductBreed, setProductBreed] = useState()

    const addProduct = async () => {
        try {
            const ProductData = {
                name: ProductName,
                type: ProductType,
                age: ProductAge,
                breed: ProductBreed
            }

            /* FETCH */
            // const response = await fetch('http://localhost:3000/Products/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(ProductData)
            // })

            // if (response.status === 200) {
            //     const data = await response.json()
            //     window.location.href = `/${data.id}`
            // }

            /* AXIOS */
            const response = await axios.post(
                'http://localhost:3000/products/',
                ProductData,
                { headers: { 'Content-Type': 'application/json' } }
            )
                
            if (response.status === 200) window.location.href = `/${response.data.id}`

        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Add Product</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product name</label>
                <input type='text' value={ProductName} onChange={e => setProductName(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product type</label>
                <input type='text' value={ProductType} onChange={e => setProductType(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product age</label>
                <input type='text' value={ProductAge} onChange={e => setProductAge(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product breed</label>
                <input type='text' value={ProductBreed} onChange={e => setProductBreed(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => addProduct()}
            >
                Add Product
            </button>
        </div>
    )
}

export default AddProduct