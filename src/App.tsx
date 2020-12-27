import React, {Component} from 'react';
import './App.scss';
import FullScroll from './reactFullScroll/full-scroll';

const getRandomColorNumberItem = () => {
    return Math.floor(Math.random() * 255);
}

const getColor = () => {
    const color = `rgb(${getRandomColorNumberItem()}, ${getRandomColorNumberItem()}, ${getRandomColorNumberItem()})`;
    return color;
};
// @ts-ignore
const keyList: any = Array.apply(null, {length: 3}).map((i, index) => ({
    key: index.toString(),
    content: `第${index}屏`,
    backgroundColor: getColor()
}))

class App extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: keyList[0].key,
            keyList,
            isTransition: false,
        }
    }

    private chooseScreen = (key) => {
        const { isTransition } = this.state;
        if (isTransition) return;
        this.setState({activeKey: key + '', isTransition: true});
    }

    private transitionEnd = () => {
        this.setState({ isTransition: false })
    }

    render() {
        const { activeKey, keyList } = this.state;

        const beforeButton = (
            <button onClick={() => this.chooseScreen(activeKey - 1) }>
                上一屏
            </button>
        )

        const nextButton = (
            <button onClick={() => this.chooseScreen(activeKey - 0 + 1) }>
                下一屏
            </button>
        )

        return (
            <div className="home-page">
                <FullScroll
                    activeKey={activeKey}
                    addEventToDocument
                    onTransitionEnd={this.transitionEnd}
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
