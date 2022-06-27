import React from 'react'
import '../styles/style.css'
import { Button } from '@mui/material'
const Presentation = () => {
    return (
        <div>
            <header>
                <img src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="cannot load" height="100" className="profilePhoto" />
                <Button
                    sx={{
                        marginLeft: "10px",
                        borderRadius: "25px",
                        border: "1px solid rgba(221, 227, 236, 1)",
                        opacity: "1",
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        color: "#0B0E1F",
                        fontSize: "9px",
                        padding: "10px",
                        width: "8vw"
                    }}
                    component="label"
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </header>
            <div className='personalDetailsInputs'>
                <div className="row">
                    <div className='col'>
                        <label htmlFor='firstName' className='label'>First Name *</label>
                        <input id='firstName' type="text" required className='input' />
                    </div>
                    <div className='col'>
                        <label htmlFor='middleName' className='label'>Middle Name *</label>
                        <input id='middleName' type="text" required className='input' />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <label htmlFor='lastName' className='label'>Last Name *</label>
                        <input id='lastName' type="text" required className='input' />
                    </div>
                    <div className='col'>
                        <label htmlFor='email' className='label'>Email *</label>
                        <input id='email' type="email" required className='input' />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <label htmlFor='phoneNumber' className='label'>Phone *</label>
                        <input id='phoneNumber' type="tel" required className='input' />
                    </div>
                    <div className='col'>
                        <label htmlFor='gender' className='label'>Gender *</label>
                        <input id='gender' required className='input' />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <label htmlFor='dob' className='label'>Date of Birth *</label>
                        <input id='dob' required className='input' />
                    </div>
                    <div className='col'>
                        <label htmlFor='maritalStatus' className='label'>Marital status *</label>
                        <input id='maritalStatus' required className='input' />
                    </div>
                </div>
                <div className='btnHolder'>
                    <button>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Presentation