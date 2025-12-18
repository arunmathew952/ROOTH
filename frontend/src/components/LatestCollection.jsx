import React , {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './productItem'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,4));
    },[products])

  return (
    <div className='my-8'>
        <div className='text-center py-8 text-3xl'>
            <Title text1= {'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>lorum ipsum lorum ipsum lorum ipsum lorum ipsu </p>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 w-fit mx-auto">
                {
                    latestProducts.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
        

    </div>
  )
}

export default LatestCollection