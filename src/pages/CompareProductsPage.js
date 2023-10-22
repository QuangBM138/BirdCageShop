import React from 'react'
import { useParams } from 'react-router'

export default function CompareProductsPage() {
    const { cageId1, cageId2 } = useParams()
    console.log(cageId1, cageId2)
    return (
        <div>CompareProductsPage</div>
    )
}
