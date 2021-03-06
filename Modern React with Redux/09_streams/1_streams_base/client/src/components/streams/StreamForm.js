import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    renderInput = (formProps) => {
        const errorClass = `field 
        ${formProps.meta.error && formProps.meta.touched 
            ? 'error'
            : ''}`
        return (
            <div className={errorClass}>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
                {this.renderError(formProps.meta)}
            </div>
        );
    }
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Stream title" />
                <Field name="description" component={this.renderInput} label="Stream description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a stream title";
    }

    if (!formValues.description) {
        errors.description = "You must enter a stream description";
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
