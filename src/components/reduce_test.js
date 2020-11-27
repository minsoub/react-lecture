import React from 'react';
import Counter from './counter';
import Buttons from './buttons';
import Option from './option';

class ReduceTest extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Counter />
                <Option />
                <Buttons />
            </div>
        )
    }
}
export default ReduceTest;