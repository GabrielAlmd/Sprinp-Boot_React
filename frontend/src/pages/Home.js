import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';


export default function Home() {

    const [prices, setPrices] = useState([]);

    useEffect(() => {
        loadPrices();
    }, []);

    const loadPrices = async () => {
        const result = await axios.get("http://localhost:8080/allPrices");
        setPrices(result.data);
    }


    return (
        <div className='containe px-4 py-2'>

            {/*form for search results*/}
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 my-5 shadow">
                    <h2 className="text-center m-4">Search Prices</h2>

                    <form>
                        <div className='row mt-4'>
                            <div className='col'>
                                <div className='row'>
                                    <label for='start_date' class='col-sm-2 col-form-label'>From</label>
                                    <div className='col'>
                                        <input 
                                            type='date'
                                            className='form-control'
                                            id='start_date' 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <label for='end_date' class='col-sm-2 col-form-label'>to</label>
                                    <div className='col'>
                                        <input type='date' className='form-control' id='end_date' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col'>
                                <div className='row'>
                                    <label for='price' class='col-sm-2 col-form-label'>Price:</label>
                                    <div className='col'>
                                        <div class='input-group mb-3'>
                                            <input type='number' inputMode='decimal' min='0' step='.01' className='form-control' id='end_date' />
                                            <span class='input-group-text'>€</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <label for='price' class='col-sm-2 col-form-label'>Store:</label>
                                    <div className='col'>
                                        <input type='number' className='form-control' id='end_date' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/*table with the results of the search*/}
            <table className="table mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Brand Id</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Price List</th>
                        <th scope="col">Product Id</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Price</th>
                        <th scope="col">Currency</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        prices.map((price, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{price.brand_id}</td>
                                {/*Use moment for formating time stamp to data string*/}
                                <td>{moment(price.start_date).format("LLL")}</td>
                                <td>{moment(price.end_date).format("LLL")}</td>
                                <td>{price.price_list}</td>
                                <td>{price.product_id}</td>
                                <td>{price.priority}</td>
                                <td>{price.price}</td>
                                <td>{price.curr}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
