import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadSpinner from './LoadSpinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <h4>{this.state.errorMessage}</h4>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay
                    lat={this.state.lat} 
                />
            );  
        }

        return <LoadSpinner loadText="Waiting on your geolocation" />;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render( <App />, document.querySelector('#root'))
