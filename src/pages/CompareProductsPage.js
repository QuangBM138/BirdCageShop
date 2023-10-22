import React from 'react'
import { useParams } from 'react-router'
import { Products_Cage } from '../data/CagesNewest'
import ListProductCompare from '../components/compareCages/ListProductCompare'
import BoxProductCompareDetail from '../components/compareCages/BoxProductCompareDetail'
export default function CompareProductsPage() {
    const { cageId1, cageId2 } = useParams()
    const cage1 = Products_Cage.find(cage => cage._id == cageId1)
    const cage2 = Products_Cage.find(cage => cage._id == cageId2)
    console.log(cage1, cage2);
    return (
        <div className='com-pro-container'>
            <ListProductCompare compareProducts={{ cage1, cage2 }} />
            <BoxProductCompareDetail compareProducts={{ cage1, cage2 }} />
        </div>
    )
}
