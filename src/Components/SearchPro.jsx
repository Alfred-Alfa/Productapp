import React from 'react'
import Navbar from './Navbar'

const SearchPro = () => {
  return (
<div>
    <Navbar/>

<div className="container">
        <div className="">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                <div className="row g-2 p-5 ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Product Name:</label>
                        <input type="text" className="form-control" />
                        <br></br>


                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>





            </div>
        </div>
    </div>


</div>
</div>
  )
}

export default SearchPro