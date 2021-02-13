import React, { Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind()
        this.setOperation = this.setOperation.bind()
        this.addDigit = this.addDigit.bind()
    }

    clearMemory(){
        console.log('limpar');
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n);
    }

    render() {
        //ao inves de fazer o constructor poderia colocar as funcoes aqui tbm
        // const addDigit = n => this.addDigit(n)
        // const setOperation = n => this.setOperation(n)

        return (
            <div className="calculator">
                <Display value="100000" />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.addDigit} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.setOperation}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}