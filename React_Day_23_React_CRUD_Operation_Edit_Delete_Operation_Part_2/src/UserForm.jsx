import React from "react";
import Axios from "axios";

class UserForm extends React.Component {

    constructor() {
        super()

        //1
        this.state = ({

            name: '',
            email: '',
            pass: '',
            skill: '',
        })

    }
    // *********************************************************************

    SaveForm = async(e) => {

        // Prevent by default behavior of Our browser
        e.preventDefault()

        alert("Congrats Dear Sucessfully Submitted Form!!");
        console.log(this.state);


        await Axios.post('http://localhost:3000/User',this.state);


    }

    // *********************************************************************

    render() {


        return (

            <>

                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-12 m-0 p-0">
                            <h1 className=" p-3 my-3 text-center text-warning">CRUD Operation User Form</h1>
                        </div>


                        <form action="" onSubmit={(e) => this.SaveForm(e)}>

                            <div className="col-md-12">

                                {/* nested grid */}
                                <div className="row fw-bold p-4 bg-dark text-light">

                                    <div className="col-md-12 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Enter Your Name :</label>

                                            {/* 2 */}
                                            <input type="text" placeholder="enter your name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} className="form-control" name="" id="" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Enter Your Email :</label>
                                            <input type="email" placeholder="enter your email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="form-control" name="" id="" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-3">
                                        <div className="form-group">
                                            <label htmlFor="">Enter Your Password :</label>
                                            <input type="password" placeholder="enter strong password" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value })} className="form-control" name="" id="" />
                                        </div>
                                    </div>

                                    <div className="col-md-12 my-3">
                                        <label htmlFor="">Choose Your Skill:</label>

                                        <select name="" className="form-control" id="" value={this.state.skill} onChange={(e) => this.setState({ skill: e.target.value })}>

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
                                        <button className="btn btn-danger px-4 my-3 fw-bold">Get A Quote</button>
                                    </div>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>


            </>

        )
    }


}


export default UserForm;