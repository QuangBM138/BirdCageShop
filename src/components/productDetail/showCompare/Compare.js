import React from 'react'
import { Link } from 'react-router-dom'
import { Products_Cage } from '../../../data/CagesNewest'
import ClearIcon from '@mui/icons-material/Clear';
import "./Compare.css"
export default function Compare({ listProductCompare, compareParentCallback }) {
    console.log(listProductCompare)
    return (
        <div className='compare-container'>
            <ul className='list-compare'>
                {listProductCompare.map(item =>
                    <li key={item}>
                        <Link to={`/detail/${item}`}>
                            <img src={Products_Cage.find(cage => cage._id === item).imagePath} />
                            <h3 className='name-compare-product'>{Products_Cage.find(cage => cage._id === item).name}</h3>
                        </Link>
                        <span
                            onClick={() => compareParentCallback(item)}
                            className='clear-icon'><ClearIcon /></span>
                    </li>
                )}
            </ul>
            <div className='close-compare'>
                {/* <Link to={listProductCompare.length < 2 ? "/1231" : ""}>Compare now</Link> */}
                {listProductCompare.length < 2 ? <h3>Please choose 2 cages</h3> : <Link to={`/compare/${listProductCompare[0]}/${listProductCompare[1]}`}>Compare now</Link>}

            </div>
        </div>
    )
}
