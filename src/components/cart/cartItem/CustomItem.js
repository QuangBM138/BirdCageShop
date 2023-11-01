import React, { useEffect, useState } from 'react'
import "./Item.css"
import Button from '@mui/material/Button';
import UseToken from '../../handleToken/UseToken';
export default function CustomItem({ customCageList, component }) {
    const components = component

    return (

        <div className='cart-row-custom'>
            <div className='component-names'>
                {components.map(com =>
                    <div className='component-name' key={com.data.component._id}>
                        <span>{com.data.component.name}</span>
                        <img className='image-component-custom' src={com.data.component.imagePath} />
                    </div>
                )}
            </div>


            <div key={customCageList._id} className='content-custom-cage'>
                {customCageList.status == "Pending" ?
                    <Button sx={{ width: "100px", height: "50px", alignSelf: "center" }} variant="outlined" color="error">
                        Pending
                    </Button> :
                    <Button sx={{ width: "100px", height: "50px", alignSelf: "center" }} variant="outlined" color="success">
                        Approved
                    </Button>
                }
                <div className='product-info custom-product-infor'>
                    <div className='price'>
                        <span>Price:</span>
                        <span className='money'>
                            {customCageList.price === undefined ? "Waiting" : customCageList.price + "$"}
                        </span>
                    </div>
                    <div className='custom-cage-create-date'>
                        <span>Create:</span>
                        {customCageList.createDate}
                    </div>
                    <div className='size-cage'>
                        <div className='size'>
                            <span>Width:</span>
                            <span>{customCageList.width}</span>
                        </div>
                        <div className='size'>
                            <span>Height:</span>
                            <span>{customCageList.height}</span>
                        </div>
                        <div className='size'>
                            <span>Length:</span>
                            <span>{customCageList.length}</span>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}
