import React from 'react'
import "../addNewAddress/AddNNewAddress.css"

export default function EditAddress() {
    return (
        <div className='ana_container'>
            <div className='ada_body'>
                <div className="ada_heading">Edit Address</div>
                <div className='ada_form'>
                    <form>
                        <div className='form-control'>
                            <label for="fullname" className='input-label'>Full Name: </label>
                            <div>
                                <input type='text' required name='fullname' placeholder='Enter Your Fullname'
                                    className='input_ds' value={'Nguyen Le Hong Nhi'} />
                            </div>
                        </div>

                        <div className='form-control'>
                            <label for="address" className='input-label'>Address: </label>
                            <div>
                                <textarea type='text' required name='address' placeholder='Enter Your Address'
                                    className='input_ds' />
                            </div>
                        </div>
                        <div className="form-control">
                            <label for="deliveryAddressType" className="input-label">Type of Delivery Address:</label>
                            <label className="Radio__StyledRadio-sc-sim90b-0 kpLnYz">
                                <input type="radio" name="deliveryAddressType" value="" />
                                <span className="radio-fake"></span><span className="label">Private house/ Apartment</span>
                            </label>
                            <label className="Radio__StyledRadio-sc-sim90b-0 kpLnYz">
                                <input type="radio" name="deliveryAddressType" value="company" />
                                <span className="radio-fake"></span><span className="label">Office / Company</span>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="input-label">&nbsp;</label>
                            <button type="submit" className="btn-submit">Update Address</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    )
}
