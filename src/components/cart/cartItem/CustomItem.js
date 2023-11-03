import React, { useEffect, useState } from 'react'
import "./Item.css"
import Button from '@mui/material/Button';
import UseToken from '../../handleToken/UseToken';
export default function CustomItem({ customCageList, component }) {
    const components = component
    const pendingList = customCageList
    console.log(pendingList[0].cage[0])
    // const [pendingList, setPendingList] = useState(customCageList.filter(i => i[0].status === "Pending"))
    return (

        <div className='cart-row-custom'>

            {
                components.map((com, index) =>
                    <div className='component-names'>
                        <div className='component-name'>
                            {com.map(item =>
                                <div className='component-name-image'>
                                    <span>{item.data.component.name}</span>
                                    <img className='image-component-custom' src={item.data.component.imagePath} />
                                </div>
                            )}
                        </div>
                        <div className='content-custom-cage'>
                            {pendingList[index].cage[0].status == "Pending" ?
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
                                        {pendingList[index].cage[0].price === undefined ? "Waiting" : pendingList[index].cage[0].price + "$"}
                                    </span>
                                </div>
                                <div className='custom-cage-create-date'>
                                    <span>Create:</span>
                                    {pendingList[index].cage[0].createDate}
                                </div>
                                <div className='size-cage'>
                                    <div className='size'>
                                        <span>Width:</span>
                                        <span>{pendingList[index].cage[0].width}</span>
                                    </div>
                                    <div className='size'>
                                        <span>Height:</span>
                                        <span>{pendingList[index].cage[0].height}</span>
                                    </div>
                                    <div className='size'>
                                        <span>Length:</span>
                                        <span>{pendingList[index].cage[0].length}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}
