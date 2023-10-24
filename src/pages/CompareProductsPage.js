import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Products_Cage } from '../data/CagesNewest'
import ListProductCompare from '../components/compareCages/ListProductCompare'
import BoxProductCompareDetail from '../components/compareCages/BoxProductCompareDetail'
export default function CompareProductsPage() {
    const { cageId1, cageId2 } = useParams()
    const [cage1, setCage1] = useState({})
    const [cage2, setCage2] = useState({})
    console.log(cageId1, cageId2);
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/cage/" + cageId1)
            .then(res => res.json())
            .then(cage => setCage1(cage.data.component))
        fetch("http://localhost:5000/api/v1/cage/" + cageId2)
            .then(res => res.json())
            .then(cage => setCage2(cage.data.component))
    }, [])
    console.log(cage1, cage2);
    return (
        <div className='com-pro-container'>
            <ListProductCompare compareProducts={{ cage1, cage2 }} />
            <BoxProductCompareDetail compareProducts={{ cage1, cage2 }} />
        </div>
    )
}
