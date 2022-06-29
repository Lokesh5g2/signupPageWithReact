import React from 'react'
import '../styles/style.css'
import { Button } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
const Presentation = () => {
    return (
        <div>
            <div className='personalDetailsInputs'>
                <div className="row">
                    <div className='col'>
                        <label htmlFor='mailingLine1' className='label'>Mailing Line 1 *</label>
                        <input id='mailingLine1' type="text" required className='input' />
                    </div>
                    <div className='col'>
                        <label htmlFor='mailingLine' className='label'>Mailing Line *</label>
                        <input id='mailingLine' type="text" required className='input' />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <label htmlFor='ciry' className='label'>City *</label>
                        <input id='ciry' type="text" required className='input' />
                    </div>
                    <div className='col'>
                        <label htmlFor='emergencyContact' className='label'>Emergency Contact *</label>
                        <input id='emergencyContact' type="email" required className='input' />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <label htmlFor='workAutorization' className='label'>Work Authorization Type *</label>
                        <input id='workAutorization' type="tel" required className='input' />
                    </div>
                    <div className='col'>
                        <label htmlFor='gender' className='label'>Number *</label>
                        <input id='gender' type="tel" required className='input' />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <label htmlFor='issueDate' className='label'>Issue date *</label>
                        <div >
                            <input id='issueDate' type="text" required className='input' />
                            <CalendarMonthOutlinedIcon sx={{ marginLeft: '-30px' }} />
                        </div>
                    </div>
                    <div className='col'>
                        <label htmlFor='expiryDate' className='label'>Expiry date *</label>
                        <div >
                            <input id='expiryDate' type="text" required className='input' />
                            <CalendarMonthOutlinedIcon sx={{ marginLeft: '-30px' }} />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <label className='label'>Work Authorization Documents *</label>
                        <Button
                            component="label"
                            className='chooseFile'
                            sx={{ fontSize: "10px", marginTop: "5px", backgroundColor: "rgba(221, 227, 236, 1)", color: '#0B0E1F', borderRadius: "15px", width: "8vw" }}
                        >
                            Choose File
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
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