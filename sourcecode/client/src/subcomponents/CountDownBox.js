import React from 'react';
import './CountDownBox.css';

class CountDownBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: 3 }
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            this.setState({
                time: this.state.time-1
            });
            if (this.state.time == 0) {
                clearInterval(this.state.intervalId)
                return;
            }
        }, 1000);
        this.setState({ intervalId })
      }
      
      componentWillUnmount() {
        clearInterval(this.state.intervalId)
      }

      print = (time) => {
        return (
            <div className="cdb-style scale-in-center">
                    {time}
                </div>
        );
      }

    render() {
        let valTime = this.props.value
        
        return ( 
            <div className="cdb-style scale-in-center">
                {this.state.time}
            </div>
        );
    }
}

export default CountDownBox;