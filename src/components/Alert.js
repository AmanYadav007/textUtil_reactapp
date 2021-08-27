import React from 'react'

export default function Alert(props) {

    const captilize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '40px'}}>
            {props.alert && <div class={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
                    <strong>{captilize(props.alert.ty)}</strong> : {props.alert.msg}
            </div>}
        </div>
            
        
    )
}
