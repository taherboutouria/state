import React from "react";


class Compteur extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
        console.log("constructor");
    }

    Increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
    componentDidMount() {
        const interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
        
        console.log("componentDidMount",interval);
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        if (this.state.count < 10) {
            clearInterval(this.interval);
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.Increment()}>+</button>
                COUNT:  {this.state.count}
                <button onClick={() => this.Decrement()}>-</button>
            </div>
        )
    }
}

export default Compteur;