import React, {Component} from 'react';

class CountDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initial: props.initial,
        }
        this.countId = ""
    }

    countDownByOneSecond = (event) => {
        this.countId = setInterval(() => {
            this.state.initial > 0 && this.setState({initial: this.state.initial - 1})
        }, 1000)
    }

    stopTimer = (event) => {
        clearTimeout(this.countId);
    }

    componentDidMount() {
        this.countDownByOneSecond()
    }

    render() {
        return (
            <div className={'countDown_text'}>
                <div className="countDown counter_text">
                    {"Time: " + this.state.initial}
                </div>
                <button className="stop_timer" onClick={this.stopTimer}>Stop Timer</button>
                <button className="continue" onClick={this.countDownByOneSecond}>Continue Timer</button>
            </div>
        );
    }
}

export default CountDown;