import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserProfile.css'
import StarIcon from '@mui/icons-material/Star';



export default function UserProfile() {
    const [img, setImg] = useState([]);

    // Format the image data once when the component mounts or when product.images changes
    // useEffect(() => {
    //     if (Products_Cage && Products_Cage.images) {
    //         const regx = /:\[\d{3},\d{3}]/g;
    //         const regxQuotes = /(\"{|\\|}")/g;
    //         const regxCurlyBraces = /(\{)/g;
    //         const regxCurlyBraces2 = /(\})/g;

    //         const formattedImages = Products_Cage.images
    //             .replace(regx, '')
    //             .replace(regxQuotes, '[')
    //             .replace(regxCurlyBraces2, ']')
    //             .replace(regxCurlyBraces, '[');

    //         setImg(JSON.parse(formattedImages));
    //     }

    // }, [Products_Cage]);





    return (
        <div className='userprofile_container'>
            <div className='account_detail'>
                <h4 className='accountD_h4'>Account Details</h4>
                <div className='user_information'>
                    <h5 className='nameuser_h5'>nhi nguyen</h5>
                    <div className='user_rating'>
                        <p>Score: </p>
                        <p>500.000</p>
                    </div>
                </div>
                <p className='va_p'><Link to={`/manageorder`} className='va_a'>Manage Order</Link></p>

                <p className='va_p'><Link to={`/adress`} className='va_a'>View Addresses</Link></p>

            </div>
        </div >
    )
}
