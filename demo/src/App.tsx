import React, {Component} from 'react';
import './App.scss';
// import FullScroll from './reactFullScroll/full-scroll';
import FullScroll from '../../lib/bundle';

const getRandomColorNumberItem = () => {
    return Math.floor(Math.random() * 255);
}

const getColor = () => {
    const color = `rgb(${getRandomColorNumberItem()}, ${getRandomColorNumberItem()}, ${getRandomColorNumberItem()})`;
    return color;
};
// @ts-ignore
const keyList: any = Array.apply(null, {length: 12}).map((i, index) => ({
    key: index.toString(),
    content: `第${index}屏`,
    backgroundColor: getColor()
}))

class App extends Component<any, any> {
    fullScrollRef: any = null;

    constructor(props) {
        super(props);
        this.state = {
            activeKey: keyList[0].key,
            keyList
        }
    }

    private chooseScreen = (key) => {
        const { fullScrollRef } = this;
        if (fullScrollRef) fullScrollRef.toggleScreen(key);
    }

    private nextScreen = () => {
        const { fullScrollRef } = this;
        if (fullScrollRef) fullScrollRef.nextScreen();
    }

    private prevScreen = () => {
        const { fullScrollRef } = this;
        if (fullScrollRef) fullScrollRef.prevScreen();
    }

    render() {
        const { keyList } = this.state;

        const beforeButton = (
            <button onClick={this.prevScreen}>
                上一屏
            </button>
        )

        const nextButton = (
            <button onClick={this.nextScreen}>
                下一屏
            </button>
        )

        return (
            <div className="home-page">
                <FullScroll
                    // activeKey={activeKey}
                    // defaultKey="3"
                    // disabledMouseScroll
                    addEventToWindow
                    ref={ref => this.fullScrollRef = ref}
                >
                    {
                        keyList.map(keyInfo => (
                            <FullScroll.Item
                                key={keyInfo.key}
                            >
                                <div
                                    className="screen"
                                    style={{'background': keyInfo.backgroundColor}}
                                >
                                    {beforeButton}{nextButton}
                                    {
                                        keyList.map(keyInfo => (
                                            <button
                                                onClick={() => this.chooseScreen(keyInfo.key)}
                                                key={keyInfo.key}
                                            >
                                                {`第${keyInfo.key}屏`}
                                            </button>
                                        ))
                                    }
                                    <p>{keyInfo.content}</p>
                                    <p>{keyInfo.content}</p>
                                    <p>{keyInfo.content}</p>
                                    <p>{keyInfo.content}</p>
                                    <p>{keyInfo.content}</p>
                                    <p>{keyInfo.content}</p>
                                    <p>{keyInfo.content}</p>
                                    <p>{keyInfo.content}</p>
                                </div>
                            </FullScroll.Item>
                        ))
                    }
                </FullScroll>
            </div>
        );
    }
}

export default App;
