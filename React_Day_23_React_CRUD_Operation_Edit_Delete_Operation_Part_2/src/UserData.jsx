import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { NavLink } from 'react-router-dom';

const UserData = () => {

    const [data, setData] = useState([]);


    // API Calling

    const LoadData = async () => {

        try {
            const result = await Axios.get('http://localhost:3000/User');
            // console.log(result);
            console.log(result.data);
            console.log("Success!!")

            setData(result.data);
        }

        catch {
            console.log("Error");
        }





    }

    useEffect(() => {
        LoadData();
    }, [])


    // ************************************************************


    const DeleteUser = async (id) => {

        // alert(id);

        // Filter Data
        const result = data.filter((val) => val.id !== id)
        setData(result);

        await Axios.delete(`http://localhost:3000/User/${id}`);
    }




    // ************************************************************

    return (
        <>

            <h1 className='text-center p-3 text-warning fw-bold my-3'>User Data</h1>

            <table className='table table-hover table-striped text-center my-3 '>
                <thead className='fw-bold'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pass</th>
                        <th>Skill</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className='fw-normal'>

                    {

                        data.map((val, index) => {
                            return (
                                <tr key={val.id}>

                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.pass}</td>
                                    <td>{val.skill}</td>
                                    {/* <td><i className='fa fa-trash text-danger' onClick={() => DeleteUser(val.id)}></i></td> */}
                                    <td><i className='fa fa-trash text-danger' onClick={() => { if (window.confirm('Are You Sure ?')) { DeleteUser(val.id) } }}></i></td>
                                    <td><NavLink to={`/edituser/${val.id}`}><i className='fa fa-edit text-success' ></i></NavLink></td>
                                    <td><NavLink to={`/genratecertificate/${val.id}`}><b className='btn btn-primary'> Genrate Form</b></NavLink></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >


        </>
    )
}

export default UserData



// Axios-
// Promise based HTTP client for the browser and node.js



// npm i axios -1.7

// Posting HTML forms as JSON
// Automatic JSON data handling in response
// Features
// Make XMLHttpRequests from the browser
// Make http requests from node.js
// Supports the Promise API
// Intercept request and response
// Transform request and response data
// Cancel requests
// Automatic transforms for JSON data
// 🆕 Automatic data object serialization to multipart/form-data and x-www-form-urlencoded body encodings
// Client side support for protecting against XSRF



// Axios.request(config)
// Axios.get(url[, config])
// Axios.delete(url[, config])
// Axios.head(url[, config])
// Axios.options(url[, config])
// Axios.post(url[, data[, config]])
// Axios.put(url[, data[, config]])
// Axios.patch(url[, data[, config]])


// Axios.get()
// Axios.post()
// Axios.put()
// Axios.delete()


// Async/Await
// Async/await is syntactic sugar built on top of Promises, introduced in ES2017.
// It allows writing asynchronous code in a synchronous manner, making it easier to read and maintain.