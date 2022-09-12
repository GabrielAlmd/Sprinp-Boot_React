import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddPrice() {

    let navigateTo = useNavigate();

    const [prices, setPrices] = useState({
        brand_id: "",
        start_date: "",
        end_date: "",
        price_list: "",
        product_id: "",
        priority: "",
        price: "",
        curr: ""
    });

    const { brand_id, start_date, end_date, price_list, product_id, priority, price, curr } = prices;

    //Get all vaules from the form
    const onInputChange = (e) => {
        setPrices({ ...prices, [e.target.name]: e.target.value })
    };

    //Submit the actions from input fields
    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/price", prices);
        navigateTo("/");
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Create New Price</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-4'>
                            <div className='row'>
                                <label htmlFor='start_date' className='col-sm-2 col-form-label'>
                                    Starts in
                                </label>
                                <div className='col'>
                                    <input
                                        type='datetime-local'
                                        className='form-control'
                                        name='start_date'
                                        value={start_date}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <label for='end_date' class='col-sm-2 col-form-label'>
                                    Ends in
                                </label>
                                <div className='col'>
                                    <input
                                        type='datetime-local'
                                        className='form-control'
                                        name='end_date'
                                        value={end_date}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='row'>
                                <div className='col'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='Product ID'
                                        name='product_id'
                                        min='0'
                                        value={product_id}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className='col'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='Price'
                                        name='price'
                                        min='0'
                                        step='0.01'
                                        value={price}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className='col'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Currency'
                                        name='curr'
                                        maxLength='3'
                                        value={curr}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='row'>
                                <div className='col'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='Brand ID'
                                        name='brand_id'
                                        min='0'
                                        value={brand_id}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className='col'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='Price List'
                                        name='price_list'
                                        min='0'
                                        value={price_list}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className='col'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='Priority'
                                        name='priority'
                                        min='0'
                                        value={priority}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link className='btn btn-outline-danger mx-2' to='/'>
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
