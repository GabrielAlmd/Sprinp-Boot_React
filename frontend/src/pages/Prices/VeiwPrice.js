import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

export default function VeiwPrice() {

    const[prices, setPrices] = useState([]);

    useEffect(() => {
        loadPrices();
    },[]);

    const loadPrices =async()=> {
        const result=await axios.get("http://localhost:8080/allPrices");
        setPrices(result.data);
    }

    return (
        <div className='container'>
            <table className="table mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Brand Id</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Price List</th>
                        <th scope="col">Product Id</th>
                        <th scope="col">Prioraty</th>
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
                                <td>{price.prioraty}</td>
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
