import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditUser = () => {



    // ********************************************


    //Used to fetch url data
    //useParams

    var data1 = useParams();
    console.log(data1)

    const { id } = useParams()

    // *************************************** 

    var nav = useNavigate();
    // *************************************** 



    // 3

    const [data, setData] = useState({ name: '', email: '', pass: '', skill: '' });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [skill, setSkill] = useState('');

    // ***************************************



    const GetData = async () => {

        const result = await Axios.get(`http://localhost:3000/User/${id}`);

        // console.log(result);
        console.log(result.data);

        // set data

        setName(result.data.name)
        setEmail(result.data.email)
        setPass(result.data.pass)
        setSkill(result.data.skill)





    }

    useEffect(() => {
        GetData();

    }, [])

    // ***************************************************************


    const UpdateForm = async (e) => {

        e.preventDefault();


        // console.log(name)
        // console.log(email)
        // console.log(pass)
        // console.log(skill)

        // setData({ name: name, email: email, pass: pass, skill: skill })


        // *************************************************************
        // Put method

        await Axios.put(`http://localhost:3000/User/${id}`, {
            name: name,
            skill: skill,
            pass: pass,
            email: email,
        })


        alert('Successfully Updated!!')

        // Redirect to userdata component
        nav('/userdata');
    }



    console.log(data);

    // ***************************************************************

    return (
        <>

            {/* <h1>Edit User Component - {id}</h1> */}

            {/* 4  */}

            {/* Form Design */}

            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 m-0 p-0">
                        <h1 className=" p-3 my-3 text-center text-warning">Edit User</h1>
                    </div>


                    <form action="" onSubmit={(e) => UpdateForm(e)}>

                        <div className="col-md-12">

                            {/* nested grid */}
                            <div className="row fw-bold p-4 bg-dark text-light">

                                <div className="col-md-12 my-3">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your Name :</label>

                                        {/* 2 */}
                                        <input type="text" placeholder="update your name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" name="" id="" />
                                    </div>
                                </div>

                                <div className="col-md-6 my-3">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your Email :</label>
                                        <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="" id="" />
                                    </div>
                                </div>

                                <div className="col-md-6 my-3">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your Password :</label>
                                        <input type="text" placeholder="enter strong password" value={pass} onChange={(e) => setPass(e.target.value)} className="form-control" name="" id="" />
                                    </div>
                                </div>

                                <div className="col-md-12 my-3">
                                    <label htmlFor="">Update Your Skill:</label>

                                    <select name="" className="form-control" id="" value={skill} onChange={(e) => setSkill(e.target.value)}>

                                        <option value="None">Select</option>
                                        <option value="ReactJS">ReactJS</option>
                                        <option value="Modern JS">Modern JS</option>
                                        <option value="Node JS">Node JS</option>
                                        <option value="MERN Stack">MERN Stack</option>
                                        <option value="AWS Solution Arch">AWS Solution Arch</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>



                                <div className="col-md-12 text-center">
                                    <button className="btn btn-danger px-4 my-3 fw-bold">Update User</button>
                                </div>

                            </div>
                        </div>

                    </form>
                </div>
            </div>



        </>
    )
}

export default EditUser

