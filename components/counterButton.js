import {Component} from 'react'

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    handleClick = () => {
        this.setState( state => ({
                count: state.count + 1
        }), () => console.log(this.state.count));
    }

    render() {
        return (
            <button
                onClick = {this.handleClick}
            >
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;
 