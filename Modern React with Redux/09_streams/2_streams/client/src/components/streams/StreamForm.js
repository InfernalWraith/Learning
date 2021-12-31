import React from 'react';
import { Form, Field } from 'react-final-form';

const StreamForm = props => {
    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    const renderInput = (formProps) => {
        const errorClass = `field 
        ${formProps.meta.error && formProps.meta.touched 
            ? 'error'
            : ''}`
        return (
            <div className={errorClass}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete='off' />
                {renderError(formProps.meta)}
            </div>
        );
    }
    
    const onSubmit = (formValues) => {
        props.onSubmit(formValues);
    }

    return (
        <Form 
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            validate={formValues => {
                const errors = {};

                if (!formValues.title) {
                    errors.title = "You must enter a stream title";
                }

                if (!formValues.description) {
                    errors.description = "You must enter a stream description";
                }

                return errors;
            }}
            render={({ handleSubmit }) => {
                <form className="ui form error" onSubmit={handleSubmit}>
                    <Field name="title" component={renderInput} label="Stream Title" />
                    <Field name="description" component={renderInput} label="Stream Description" />
                    <button className="ui button primary">Submit</button>
                </form>
            }}
        />
    );
};

export default StreamForm;
