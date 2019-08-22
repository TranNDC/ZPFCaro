import React from 'react';
import './CountDownBox.css';

class CountDownBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: 5, go: "GO" }
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            this.setState({
                time: this.state.time-1
            });
            if (this.state.time == -2) {
                clearInterval(this.state.intervalId)
                this.setState({ time: null, go: "" })
            }
        }, 1000);
        this.setState({ intervalId })
    }

    render() {
        return ( 
            <div className="cdb-style">
                {(this.state.time > 0) ? this.state.time : this.state.go}
            </div>
        );
    }
}

export default CountDownBox;