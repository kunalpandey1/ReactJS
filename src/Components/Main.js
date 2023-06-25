import React from 'react';
import {CommonContext} from './CommonContext';

class Main extends React.Component{
    render(){
        return (
            <CommonContext.Consumer >
                {
                    ({color})=>{
                       return <h1 style={{backgroundColor:color}}>Hello , This is Main Page </h1>
                    }
                }
            </CommonContext.Consumer>
        );
    }
}

export default Main;