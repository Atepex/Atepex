import React from 'react'


export default ({ input, label, meta: {error, touched} }) => {
    return (
        <div>
            <input placeholder={label} {...input} style={{margin: '5px'}} />
            <div style={{marginBottom: '20px', color: 'red'}}>
                {touched && error}
            </div>
        </div>
    );
}

