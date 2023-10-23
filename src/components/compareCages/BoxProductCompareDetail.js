import React from 'react'

export default function BoxProductCompareDetail({ compareProducts }) {
    const { cage1, cage2 } = compareProducts
    return (
        <>
            <h3 style={{ marginTop: "40px", padding: "10px", fontWeight: 700 }}>Detail Cages</h3>
            <div className='list-detail-product'>
                {/* width */}
                <div className='part-detail'>
                    <div className='part-detail-title'>
                        Width
                    </div>
                    <div className='part-detail-product'>
                        <span>{cage1.width}</span>
                        <span>{cage2.width}</span>

                    </div>
                </div>
                {/* length */}
                <div className='part-detail'>
                    <div className='part-detail-title'>
                        Length
                    </div>
                    <div className='part-detail-product'>
                        <span>{cage1.length}</span>
                        <span>{cage2.length}</span>
                    </div>
                </div>
                {/* height */}
                <div className='part-detail'>
                    <div className='part-detail-title'>
                        Height
                    </div>
                    <div className='part-detail-product'>
                        <span>{cage1.height}</span>
                        <span>{cage2.height}</span>
                    </div>
                </div>
                {/* description */}
                <div className='part-detail'>
                    <div className='part-detail-title'>
                        Description
                    </div>
                    <div className='part-detail-product'>
                        <span>{cage1.description}</span>
                        <span>{cage2.description}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
