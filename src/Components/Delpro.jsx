import React from 'react'
import Navbar from './Navbar'

const Delpro = () => {
  return (
    <div>
        <Navbar/>

<div className="container">
        <div className="">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                <div className="row g-2 p-5 ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Delete Product:</label>
                        <input type="text" className="form-control" />
                        <br></br>


                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>





            </div>
        </div>
    </div>



</div>
    </div>
  )
}

export default Delpro