import React from 'react'
import logoImg from './logo.jpg'
import './logo.css'

class Logo extends React.Component{
    render(){
        return (
            <div class="logo-container">
                <img src={ logoImg } alt=""/>
            </div>
        )
    }
}

export default Logo