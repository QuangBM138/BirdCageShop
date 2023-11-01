import React, { useEffect, useState } from 'react'
import "./Item.css"
import Button from '@mui/material/Button';
import UseToken from '../../handleToken/UseToken';
export default function CustomItem({ customCageList, component }) {

    const components = component
    const customCages = customCageList
    console.log(components, customCages);

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
            {customCages.map(customItem =>
                customItem.map(item =>
                    <div key={item._id} className='content-custom-cage'>
                        {item.cage[0].status == "Pending" ?
                            <Button sx={{ width: "100px", height: "50px", alignSelf: "center" }} variant="outlined" color="error">
                                Pending
                            </Button> :
                            <Button variant="contained" color="success">
                                CUS (You can checkout now)
                            </Button>
                        }
                        <div className='product-info custom-product-infor'>
                            <div className='price'>
                                <span>Price:</span>
                                <span className='money'>
                                    {item.cage[0].price === undefined ? "Waiting" : item.cage[0].price + "$"}
                                </span>
                            </div>
                            <div className='custom-cage-status'>


                            </div>
                            <div className='custom-cage-create-date'>
                                <span>Create Date:</span>
                                {item.cage[0].createDate}
                            </div>
                            <div className='size-cage'>
                                <div className='size'>
                                    <span>Width:</span>
                                    <span>{item.cage[0].width}</span>
                                </div>
                                <div className='size'>
                                    <span>Height:</span>
                                    <span>{item.cage[0].height}</span>
                                </div>
                                <div className='size'>
                                    <span>Length:</span>
                                    <span>{item.cage[0].length}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                )


            )
            }
        </div >
    )
}
