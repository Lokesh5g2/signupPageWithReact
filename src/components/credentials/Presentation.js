import React from 'react'

const Presentation = () => {
    return (
        <div>
            <div className="row">
                <div className='col'>
                    <label htmlFor='workAutorization' className='label'>New Password *</label>
                    <input id='workAutorization' type="tel" required className='input' />
                </div>
                <div className='col'>
                    <label htmlFor='gender' className='label'>Re-Enter New Password *</label>
                    <input id='gender' type="tel" required className='input' />
                </div>
            </div>
        </div>
    )
}

export default Presentation