import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './DetailOrder.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button } from '@mui/material';
import Reviews from '../productDetail/reviews/Reviews';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import StarIcon from '@mui/icons-material/Star';
export default function DetailOrder() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='detailorder_container'>
            <div className='detailorder'>
                <div className='detailorder_header'>
                    <span>
                        Detail Oreder #554027753
                    </span>
                    <span className='detailorder_split'>
                        -
                    </span>
                    <span className='detailorder_stastus'>
                        Successful delivery
                    </span>
                </div>
                <div className='orderdate'>
                    Order Date:
                    11:29 13/10/2023
                </div>
                <div className='detailorder_notification'>
                    <div className='noti_title'>
                        Notification
                    </div>
                    <div className='noti_content'>
                        <div className='notifications'>
                            <div className='notificatios_item'>
                                <div className='noti_date'>
                                    12:39 14/10/2023
                                </div>
                                <div className='noti_comment'>
                                    Đơn hàng #554027753 đã sẵn sàng để giao đến quý khách.
                                    Chúng tôi vừa bàn giao đơn hàng của quý khách đến đối tác vận chuyển Best Inc.
                                    Đơn hàng sẽ được giao trước 23:59 ngày 14/04/2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='detailorder_orderinformation'>
                    <div className='order_userinformation'>
                        <div className='title_oui'>
                            Address Of User
                        </div>
                        <div className='content_oui'>
                            <p className='name_oui'>
                                Nguyen Le Hong Nhi
                            </p>
                            <p className='address_oui'>
                                Address: Ấp 3, Xã Đông Thạnh, Huyện Hóc Môn, Hồ Chí Minh, Việt Nam
                            </p>
                            <p className='phone_oui'>

                                Phone: 0923472930
                            </p>
                        </div>
                    </div>
                    <div className='order_deliverymethod'>
                        <div className='title_odm'>
                            Delivery method
                        </div>
                        <div className='content_odm'>
                            <p>
                                Economical delivery
                            </p>
                            <p>
                                Delivered on Tuesday, April 13
                            </p>
                            <p>
                                Delivered by TikiNOW Smart Logistics
                            </p>
                            <p>
                                Shipping fee: $0.50
                            </p>
                        </div>
                    </div>
                    <div className='order_payment'>
                        <div className='title_op'>
                            Payment
                        </div>
                        <div className='content_op'>
                            <p>Cash payment upon delivery</p>
                        </div>
                    </div>
                </div>

                <table class="table_order">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th >Name of Product</th>
                            <th >Price</th>
                            <th >Quantity</th>
                            <th >Discount</th>
                            <th >Provisional</th>

                        </tr>
                    </thead>
                    <tbody className='table_orderdetail' >
                        <tr>

                            <td><img class="uk-preserve-width uk-border-circle" src="https://m.media-amazon.com/images/I/81gYKAMky+L._AC_SY879_.jpg" width="80" height="80" alt="" /></td>
                            <td class="uk-text">
                                <p>Prevue Hendryx SP850G/W Clean Life Cockatiel Cage, Green and White</p>


                                <Button variant="outlined" href="#outlined-buttons" style={{ color: "#1a1a1a", borderColor: "#1a1a1a", fontSize: "10px", marginRight: "5px" }}>
                                    Repurchase
                                </Button>
                                <Button

                                    onClick={handleClickOpen}

                                    variant="outlined" href="#outlined-buttons" style={{ color: "#1a1a1a", borderColor: "#1a1a1a", fontSize: "10px" }}>
                                    {open ? 'Close Review' : 'Write a review'}

                                </Button>
                                {open && (
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
                                )}
                            </td>
                            <td class="uk-text"><p>$50.00</p></td>
                            <td class="uk-text"><p>1</p></td>
                            <td class="uk-text"><p>$0.00</p></td>
                            <td class="uk-text"><p>$50.00</p></td>

                        </tr>
                        <tr>

                            <td><img class="uk-preserve-width uk-border-circle" src="https://m.media-amazon.com/images/I/81gYKAMky+L._AC_SY879_.jpg" width="80" height="80" alt="" /></td>
                            <td class="uk-text">
                                <p>Prevue Hendryx SP850G/W Clean Life Cockatiel Cage, Green and White</p>
                                <Button variant="outlined" href="#outlined-buttons" style={{ color: "#1a1a1a", borderColor: "#1a1a1a", fontSize: "10px", marginRight: "5px" }}>
                                    Repurchase
                                </Button>
                                <Button variant="outlined" href="#outlined-buttons" style={{ color: "#1a1a1a", borderColor: "#1a1a1a", fontSize: "10px" }}>
                                    Write a review
                                </Button>
                            </td>
                            <td class="uk-text"><p>$50.00</p></td>
                            <td class="uk-text"><p>1</p></td>
                            <td class="uk-text"><p>$0.00</p></td>
                            <td class="uk-text"><p>$50.00</p></td>

                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5">
                                <span>
                                    Provisional
                                </span>
                            </td>
                            <td>
                                $100.00
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <span>
                                    Shipping fee
                                </span>
                            </td>
                            <td>
                                $0.50
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <span>
                                    Total
                                </span>
                            </td>
                            <td>

                                $100.50

                            </td>
                        </tr>
                    </tfoot>

                </table>

                <Link to={`/user`} className='myorder_link'><div><KeyboardBackspaceIcon /> Back</div></Link>
            </div>

        </div>
    )
}
