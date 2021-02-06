import React, { Component } from 'react'
import './Button.css'

import Button from '../components/Button'
import { extend } from 'lodash'

export default class Calculator extends Component {
    render(){
        return (
            <div className="calculator">
                <Button />
            </div>
        )
    }
}