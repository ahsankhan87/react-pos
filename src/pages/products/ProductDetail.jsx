import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function ProductDetail({ setProductToEdit }) {

    const [Product, setProduct] = useState([])

    const { ProductId } = useParams()

    const getProduct = async () => {
        try {
            /* FETCH */
            // const response = await fetch(`http://localhost:3000/Products/${ProductId}`)
            // const data = await response.json()
            // if (response.status === 200) {
            //     setProduct(data)
            //     setProductToEdit(data)
            // }

            /* AXIOS */
            const response = await axios.get(`http://localhost:3000/Products/${ProductId}`)
            if (response.status === 200) {
                setProduct(response.data)
                setProductToEdit(response.data)
            }
            
        } catch (error) {
            console.error('error', error)
        }
    }
  
    useEffect(() => { getProduct() }, [])

    const deleteProduct = async () => {
        try {
            /* FETCH */
            // const response = await fetch(`http://localhost:3000/Products/${ProductId}`, {
            //     method: 'DELETE'
            // })
            
            /* AXIOS */
            const response = await axios.delete(`http://localhost:3000/products/${ProductId}`)

            if (response.status === 200) window.location.href = '/'
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Product Detail</h2>

            {Product && (
                <>
                    <p>Product name: {Product.name}</p>
                    <p>Product type: {Product.type}</p>
                    <p>Product qty: {Product.qty}</p>
                    <p>Product costPrice: {Product.costPrice}</p>

                    <div style={{ display: 'flex', justifyContent: 'center', aligniItems: 'center' }}>
                        
                        <Link to={`/${Product?.id}/edit`}>
                            <button style={{ marginRight: 10 }}>Edit Product</button>
                        </Link>

                        <button
                            style={{ marginLeft: 10 }}
                            onClick={() => deleteProduct()}
                        >
                            Delete Product
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductDetail