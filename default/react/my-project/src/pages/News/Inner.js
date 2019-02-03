import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

@connect(({ inner, loading }) => ({
  inner,
  loading: loading.models.inner,
}))
class Inner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'inner/fetch',
    });
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }];

    const { inner: { list } } = this.props;

    const dataSource = [...list];

    return (
      <div>
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          size="small" />
      </div>
    );
  }
}

export default Inner;
