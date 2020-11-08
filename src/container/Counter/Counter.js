import React, {Component} from 'react'
import './Counter.css'

class Counter extends Component{

    state = {
        number : 0
    }

    onCounterChanger = (val) => {
        this.props.CounterChanger(val)
    }


    handleAddCounter = () =>{
        this.setState({
            number : this.state.number + 1
        }, () => {this.onCounterChanger(this.state.number)}
        )
    }

    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button className="btn" onClick={this.handleAddCounter}>ClickMe</button>
            </div>
        )
    }
}
export default Counter
