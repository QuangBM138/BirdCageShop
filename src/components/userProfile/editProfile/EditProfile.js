import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import UseToken from '../../handleToken/UseToken';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

export default function EditProfile() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');

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
                setPhone(data.data.customer[0].account[0].phoneNumber)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with the updated user data
        const updatedUserData = {
            firstName,
            lastName,
            phone,
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
        alert('User information updated successfully!');
    };

    return (
        <div>
            <div className="user_container">
                <div className="user_profile">
                    <div className="user_heading">
                        <h1>Update Profile</h1>
                    </div>
                    <div className="user_body">
                        <div className="user_infor">
                            <form className="form_infor" >
                                <table className="imformation">
                                    <tr className="table_tr">
                                        <td className="table_td_1">
                                            <label>Fullname:</label>
                                        </td>
                                        <td className="table_td_2">
                                            <div className="td_div_3">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className="td_div_input_1"
                                                    placeholder="First Name"
                                                    value={firstName}
                                                    required
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    className="td_div_input_1"
                                                    placeholder="Last Name"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="table_tr">
                                        <td className="table_td_1">
                                            <label>Phone Number:</label>
                                        </td>
                                        <td className="table_td_2">
                                            <div className="td_div_2">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="td_div_input_2"
                                                    placeholder="Phone Number"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="table_tr">
                                        <td className="table_td_1">
                                            <label></label>
                                        </td>
                                        <td className="table_td_2">
                                            <div className="td_div_4">
                                                <button className="td_link" type="submit" onClick={handleSubmit}>
                                                    Update information
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                    <Link to={`/user`} className='myorder_link'><div><KeyboardBackspaceIcon /> My Profile</div></Link>
                </div>
            </div>
        </div>
    );
}
