import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  render() {
    const { dispatch, count } = this.props;

    console.log(count);

    return (
      <div className={styles.normal}>
        <div className={styles.record}>Highest Record: {count.record}</div>
        <div className={styles.current}>{count.current}</div>
        <div className={styles.button}>
          <button onClick={() => {dispatch({type:'count/add1'});}}>+</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
    console.log(state)
    return{count:state.count};
}
export default connect(mapStateToProps)(IndexPage);
