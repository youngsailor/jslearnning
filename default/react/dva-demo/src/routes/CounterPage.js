import React from 'react';
import { connect } from 'dva';
import Counter from '../components/Counter';
import styles from './IndexPage.css';

const CounterPage = (props) =>{
    console.log('aaaa')
    return (
        <div>
            <p>Counter</p>
            <Counter/>
        </div>
    )
}
Counter.propTypes = {

}
export default CounterPage;
