import React, { useEffect, useState } from 'react'
import './AddNNewAddress.css'
import jwtDecode from 'jwt-decode';
import UseToken from '../handleToken/UseToken';

export default function AddNewAddress() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const { getToken } = UseToken();
    const userId = jwtDecode(getToken()).id;

    useEffect(() => {
        // Fetch the user's existing information and populate the form fields
        fetch(`http://localhost:5000/api/v1/account/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setFirstName(data.data.customer[0].firstName);
                setLastName(data.data.customer[0].lastName);
                setAddress(data.data.customer[0].address);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with the updated user data
        const updatedUserData = {
            lastName,
            firstName,
            address,
        };

        // Send a PATCH request to update the user's information
        fetch(`http://localhost:5000/api/v1/customer/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response or update the UI as needed
                console.log('User information updated:', data);
            })
            .catch((error) => {
                console.log('Error updating user information:', error);
            });
        alert('Add New Address successfully!');
    };
    return (
        <div className='ana_container'>
            <div className='ada_body'>
                <div className="ada_heading">Create Address</div>
                <div className='ada_form'>
                    <form>
                        <div className='form-control'>
                            <label for="fullname" className='input-label'>Full Name: </label>
                            <div>
                                <input disabled type='text' required name='fullname' placeholder='Enter Your Fullname'
                                    className='input_ds' value={firstName + " " + lastName} />
                            </div>
                        </div>

                        <div className='form-control'>
                            <label for="address" className='input-label'>Address: </label>
                            <div>
                                <textarea type='text' required name='address' placeholder='Enter Your Address'
                                    className='input_ds' onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>


                        <div className="form-control">
                            <label className="input-label">&nbsp;</label>
                            <button type="submit" className="btn-submit" onClick={handleSubmit}>Add Address</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
