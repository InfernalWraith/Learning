import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onDeleteClick = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            // Fragment because 'div' removes the semantic-ui styling
            <React.Fragment>
                <button 
                    className="ui primary button"
                    onClick={() => this.props.deleteStream(id)}
                >
                    Delete
                </button>
                <Link
                    to="/"
                    className="ui button"
                    onClick={() => console.log("Cancel")}
                >
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete stream: ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);