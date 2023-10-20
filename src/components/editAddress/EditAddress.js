import React from 'react'

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
                                    className='input_ds' />
                            </div>
                        </div>
                        <div className='form-control'>
                            <label for="company" className='input-label'>Company: </label>
                            <div>
                                <input type='text' required name='company' placeholder='Enter Your Company'
                                    className='input_ds' />
                            </div>
                        </div>
                        <div className='form-control'>
                            <label for="phonenumber" className='input-label'>Phone Number: </label>
                            <div>
                                <input type='text' required name='phonenumber' placeholder='Enter Your Phonenumber'
                                    className='input_ds' />
                            </div>
                        </div>
                        <div className='form-control'>
                            <label for="city" className='input-label'>City: </label>
                            <div>
                                <input type='text' required name='city' placeholder='Enter Your City'
                                    className='input_ds' />
                            </div>
                        </div>
                        <div className='form-control'>
                            <label for="district" className='input-label'>District: </label>
                            <div>
                                <input type='text' required name='district' placeholder='Enter Your District'
                                    className='input_ds' />
                            </div>
                        </div>
                        <div className='form-control'>
                            <label for="commune" className='input-label'>Commune: </label>
                            <div>
                                <input type='text' required name='commune' placeholder='Enter Your commune'
                                    className='input_ds' />
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
                            <label className="Checkbox__StyledCheckbox-sc-75m08j-0 etNXAi">
                                <input type="checkbox" />
                                <span className="checkbox-fake"></span>
                                <span className="label">Set ut default address</span>
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
