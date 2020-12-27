import React, { Component } from 'react';
import './App.scss';
import FullScroll from './reactFullScroll/full-scroll';

class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'first'
    }
  }

  render() {
    const { activeKey } = this.state;

    return (
        <div className="home-page">
          <FullScroll
              activeKey={activeKey}
              addEventToDocument
          >
            <FullScroll.Item
                key="first"
            >
              <div className="first-screen screen">
                <p>第一屏</p>
                <p>第一屏</p>
                <p>第一屏</p>
                <p>第一屏</p>
                <p>第一屏</p>
                <p>第一屏</p>
                <p>第一屏</p>
              </div>
            </FullScroll.Item>
            <FullScroll.Item
                key="second"
            >
              <div className="second-screen screen">
                <p>第二屏</p>
                <p>第二屏</p>
                <p>第二屏</p>
                <p>第二屏</p>
                <p>第二屏</p>
                <p>第二屏</p>
                <p>第二屏</p>
                <p>第二屏</p>
                <p>第二屏</p>
              </div>
            </FullScroll.Item>
            <FullScroll.Item
                key="third"
            >
              <div className="third-screen screen">
                <p>第三屏</p>
                <p>第三屏</p>
                <p>第三屏</p>
                <p>第三屏</p>
                <p>第三屏</p>
                <p>第三屏</p>
                <p>第三屏</p>
                <p>第三屏</p>
              </div>
            </FullScroll.Item>
            <FullScroll.Item
                key="fourth"
            >
              <div className="fourth-screen screen">
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
                <p>第四屏</p>
              </div>
            </FullScroll.Item>
          </FullScroll>
        </div>
    );
  }
}

export default App;
