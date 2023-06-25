import React from 'react';
import {CommonContext} from './CommonContext';

class Footer extends React.Component{
    render(){
        return (
            <CommonContext.Consumer >
                {
                    ({color})=>{
                        return <h1 className ="foot"style={{backgroundColor:color}}>Footer Page </h1>
                    }
                }
            </CommonContext.Consumer>
        );
    }
}

export default Footer;

// also check index.css for footer style 