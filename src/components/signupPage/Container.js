import { React, useState } from 'react'
import Presentation from './Presentation'

const Container = () => {
    const [data, setData] = useState({
        username: "",
        password: ''
    })
    const onChangeData = (e) => {
        setData(e.target.name = e.target.value)
    }
    return (
        <div>
            <Presentation onChangeData={onChangeData} data={data} />
        </div>
    )
}

export default Container