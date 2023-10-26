import React, { useState } from 'react';
import './Reviews.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import StarIcon from '@mui/icons-material/Star';

export default function Reviews() {

    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(!open);
    // };


    return (
        <section className="text-gray-600 body-font overflow-hidden" >
            <div className=" px-0 pb-12 sm:px-10 py-0 sm:py-18 mx-auto">
                <div className='container_showandreview'>
                    <div className='review_header'>
                        <h2 className='h2_ny'>
                            Customer Reviews
                        </h2>
                        <div className='design_notyet'>
                            <span>
                                Not review yet
                            </span>
                            {/* <button className='button_design' onClick={handleClickOpen}>
                                {open ? 'Close Review' : 'Write a review'}
                            </button> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
