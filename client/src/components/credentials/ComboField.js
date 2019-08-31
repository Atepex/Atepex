import React from 'react';

export default ({ input, label, fieldType, meta:{ error, touched } }) => {

    return (
        <div>
            <label>{label}</label>
            <input type={fieldType} {...input} style={{ margin: '5px' }}/>
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};