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
            <div className="container px-0 pb-12 sm:px-10 py-0 sm:py-18 mx-auto">
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
                    {/* {open && (
                        <div className='review_body'>
                            <h3 className='h3_war'>
                                Write a review
                            </h3>
                            <label className='war_name'>
                                <h4>
                                    Name
                                </h4>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Enter your name"
                                />
                            </label>
                            <label className='war_email'>
                                <h4>
                                    Email
                                </h4>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="john.smith@example.com"
                                />
                            </label>
                            <div className='war_rating'>
                                <h4>Rating <StarIcon /></h4>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </div>

                            <label className='war_reviewtitle'>
                                <h4>
                                    Review title
                                </h4>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Give your review a title"
                                />
                            </label>
                            <label className='war_reviewbody'>
                                <h4>
                                    Body of review (1500)
                                </h4>
                                <textarea
                                    type='text'
                                    name='body_review'
                                    placeholder='Write your comments here'
                                />
                            </label>
                            <div className='a_sumitreview'>
                                <a className='sumitreview'>Submit</a>
                            </div>
                        </div>
                    )} */}
                </div>
            </div>
        </section>

    )
}
