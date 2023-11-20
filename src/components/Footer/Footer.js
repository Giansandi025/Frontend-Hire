import React from 'react'
import Assets from '../../assets/img'
const Footer = () =>{
    return(
        <div>
            <div className="container-fluid" style={{backgroundColor:"#5E50A1"}}>
                <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-3 col-sm-7">
                        <img src={Assets.logo2} alt="" style={{height: "50px", marginRight: "41px"}}/>
                    </div>
                </div>
                <div className="row pt-3 pb-5">
                    <div className="col-lg-4">
                        <h6 className='text-start text-white myfont3' style={{marginLeft:"40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h6>
                    </div>
                </div>
                <div style={{backgroundColor:"white",height:"2px",marginLeft:"32px"}} className="line"></div>
                <div className="row mt-4">
                    <div className="col-lg-3 col-sm-6">
                        <p className='text-white myfont3'>2020 Pewworld. All right reserved</p>
                    </div>
                    <div className="col-lg-1 offset-lg-6 col-sm-1 offset-sm-2">
                        <p className='text-white myfont3'>Telepon</p>
                    </div>
                    <div className="col-lg-1 col-sm-1 ms-sm-5">
                        <p className='text-white myfont3'>Email</p>
                    </div>
                </div>
            </div>
                </div>
        </div>
    )
}
export default Footer;