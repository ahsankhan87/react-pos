import React, { useState } from 'react'
import axios from 'axios'

function EditProduct({ ProductToEdit }) {

    const [ProductName, setProductName] = useState(ProductToEdit?.name)
    const [ProductType, setProductType] = useState(ProductToEdit?.type)
    const [ProductAge, setProductAge] = useState(ProductToEdit?.age)
    const [ProductBreed, setProductBreed] = useState(ProductToEdit?.breed)

    const editProduct = async () => {
        try {
            const ProductData = {
                id: ProductToEdit.id,
                name: ProductName,
                type: ProductType,
                age: ProductAge,
                breed: ProductBreed
            }

            /* FETCH */
            // const response = await fetch(`http://localhost:3000/Products/${ProductToEdit.id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(ProductData)
            // })

            /* AXIOS */
            const response = await axios.put(
                `http://localhost:3000/products/${ProductToEdit.id}`,
                ProductData,
                { headers: { 'Content-Type': 'application/json' } }
            )
            
            if (response.status === 200) {
                window.location.href = `/${ProductToEdit.id}`
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
                <label>Product age</label>
                <input type='text' value={ProductAge} onChange={e => setProductAge(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Product breed</label>
                <input type='text' value={ProductBreed} onChange={e => setProductBreed(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => editProduct()}
            >
                Save changes
            </button>
        </div>
    )
}

export default EditProduct