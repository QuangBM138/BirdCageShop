import React from 'react'
import './Payment.css'
import { useState } from 'react'
import { useEffect } from 'react'

function List() {
    const [list, setList] = useState(JSON.parse(localStorage.getItem('cart')))
    const [subTotal, setSubTotal] = useState(0)
    const [shipping, setShipping] = useState(20)

    useEffect(() => {
        computeSubTotal()
    }, [])
    const computeSubTotal = () => {
        let tmp = 0
        list.map(i => {
            tmp = tmp + Number.parseInt(i.price)
        })
        setSubTotal(tmp)
    }

    const getFirstImgUrl = (data) => {
        try {
            const imagesArray = JSON.parse(data);
            if (Array.isArray(imagesArray) && imagesArray.length > 0) {
                return imagesArray[0]
            }
        } catch (error) {
            console.error("Error parsing or accessing the image array:", error)
        }
        return null
    }

    return (
        <div className='w-full'>
            <div className='w-full mx-auto md:w-[60%] flex flex-col items-center'>
                {/* item */}
                {list.map(i => (
                    <div key={i.id} className='w-full flex justify-between items-center rounded-lg mb-5'>
                        <div className='flex items-center w-[80%]'>
                            <div className='w-[64px] rounded-lg  h-[64px] relative'>
                                <span className='absolute rounded-full text-center text-white top-[-10px] right-[-10px] w-[20px] bg-[#666] h-[20px] z-10'>{i?.cartQuantity}</span>
                                <div className='absolute top-0 left-0 overflow-hidden w-[64px] h-[64px] border-i rounded-lg'>
                                    <img className='w-full' src={getFirstImgUrl(i?.images)} alt='' />
                                </div>
                            </div>
                            <div className='ml-3 w-[70%]'>
                                <p className='leading-5 text-[14px] truncate-cus' title={i?.name}>{i?.name}</p>
                                <p className='leading-5 text-[#666] text-[12px] truncate-cus' title={i?.size}>{i?.size}</p>
                            </div>
                        </div>
                        <div className='text-[14px] w-[10%]'>${i.price}</div>
                    </div>
                ))}
            </div>
            <div className='w-full md:w-[60%] mx-auto'>
                <div className='w-full flex items-center justify-between mb-2'>
                    <span className='text-[14px]'>Subtotal</span>
                    <span className='text-[14px] font-bold'>${subTotal}</span>
                </div>
                <div className='w-full flex items-center justify-between mb-2'>
                    <span className='text-[14px]'>Shipping</span>
                    <span className='text-[14px]'>${shipping}</span>
                </div>
                <div className='w-full flex items-center justify-between mb-2'>
                    <span className='text-[17px] font-bold'>Total</span>
                    <span className='text-[17px] font-bold'>${subTotal + shipping}</span>
                </div>
            </div>
        </div>
    )
}

export default List