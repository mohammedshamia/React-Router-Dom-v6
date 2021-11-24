import React from 'react';

function Example(props){
    return <div>
        <h1>{props.l}</h1>
        <button onClick={()=>{
            props.history.push('/page-2/2')
        }
        }>Home 1</button>
    </div>
}

export default Example;