import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function productList() {
    const [products, setproducts] = useState([])

    const getproducts = async () => {
        try {
            /* FETCH */
            // const response = await fetch('http://localhost:3000/products')
            // const data = await response.json()
            // if (response.status === 200) setproducts(data)

            /* AXIOS */
            const response = await axios.get('http://localhost:3000/products')
            if (response.status === 200) setproducts(response.data)
            
        } catch (error) {
            console.error('error', error)
        }
    }
  
    useEffect(() => { getproducts() }, [])

    return (
        <>
            <h2>product List</h2>

            {products?.map((product) => {
                return (
                    <div key={product?.id}>
                        <p>{product?.name} - {product?.type} - {product?.breed}</p>

                        <Link to={`/${product?.id}`}>
                            <button>product detail</button>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default productList