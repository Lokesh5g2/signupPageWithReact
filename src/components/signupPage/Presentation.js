import { React } from 'react'
import '../styles/style.css'
import BasicTabs from '../tabs/Presentation'
const Presentation = () => {
    return (
        <div>
            <div className='cards'>
                <div className='leftHalf'>
                    <h1>Logo</h1>
                </div>
                <div className='formContainer'>
                    <h1 className='signUp'>Sign Up</h1>
                    <p className='subHead'>Please Fill the details to continue</p>
                    <BasicTabs />
                </div>
            </div>
            <footer>
                <p>By login you agree to our <a href='#term'>terms</a> and that you have read our data <a href='#policy'>policy</a></p>
                <p>Copyright © flairtechno.com 2022.</p>
            </footer>
        </div>
    )
}

export default Presentation