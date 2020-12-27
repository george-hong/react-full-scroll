/*
 * @Author: ChangJun Hong
 * @Date: 2020-12-25 16:30:37
 * @Last Modified time: 2020-12-25 16:30:37
 * @Title：全屏滚动组件
 * @Prop：{
 *
 * }
 */


import React, { Component } from 'react';
import './full-scroll.scss';

interface FullScrollItemProps {
  children?: React.ReactNode | String;
}

class FullScrollItem extends Component<FullScrollItemProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div className="full-scroll-item-component">
        { children }
      </div>
    )
  }
};

export default FullScrollItem;