import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Products_Cage } from '../../../data/CagesNewest'
import ClearIcon from '@mui/icons-material/Clear';
import "./Compare.css"
export default function Compare({ listProductCompare, compareParentCallback }) {



    console.log(listProductCompare);
    return (
        <div className='compare-container'>
            <ul className='list-compare'>
                {listProductCompare.map(item =>
                    <li key={item._id}>
                        <Link to={`/detail/${item._id}`}>
                            <img src={listProductCompare.find(cage => cage._id === item._id).imagePath} />
                            <h3 className='name-compare-product'>{listProductCompare.find(cage => cage._id === item._id).name}</h3>
                        </Link>
                        <span
                            onClick={() => compareParentCallback(item)}
                            className='clear-icon'><ClearIcon /></span>
                    </li>
                )}
            </ul>
            <div className='close-compare'>

                {listProductCompare.length < 2 ? <h3>Please choose 2 cages</h3> : <Link to={`/compare/${listProductCompare[0]._id}/${listProductCompare[1]._id}`}>Compare now</Link>}

            </div>
        </div>
    )
}
