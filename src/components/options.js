import React, { Component } from 'react';

class Options extends Component {
    render(){
        return(
            <div className='options'>
                <div className='option'>
                    <button className='buttons' id='a' onClick={this.props.nextArch}>A</button>
                    <h2>{this.props.optionA}</h2>
                </div>
                <div className='option'>
                    <button className='buttons' id='b' onClick={this.props.nextArch}>B</button>
                    <h2>{this.props.optionB}</h2>
                </div>
            </div>
        );
    }
}
export { Options };