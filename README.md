# Reach-Full-Scroll
基于React的全屏滚动组件,会在指定的两个屏幕间切换，过程中不会显示其他屏幕。

## Install
`npm i react-full-scroll` or `yarn add react-full-scroll`

## Usage
```javascript
import FullScroll from 'react-full-scroll';

class Demo extends Component {
    render() {
        return (
            <div style={{ width: 500, height: 300 }}>
                <FullScroll>
                    <FullScroll.Item key="first">
                        <div style={{ background: 'skyblue' }}>
                            content one
                        </div>
                    </FullScroll.Item>
                    <FullScroll.Item key="second">
                        <div style={{ background: 'pink' }}>
                            content two
                        </div>
                    </FullScroll.Item>
                <FullScroll>
            </div>
        )   
    }
}
```

## Properties

|name|required|desc|default|
|:-:|:-:|:-:|:-:|
|defaultKey|false|默认key|-|
|className|false|自定义class|-|
|direction|false|滚动方向vertical或horizontal|vertical|
|disabledMouseScroll|false|禁用鼠标滚轮事件|false|
|transitionTime|false|滑动过渡时间ms|1000|
|toggleClassTime|false|切换动画class间隔ms|50|
|addEventToDocument|false|是否将鼠标事件添加到document元素|false|
|onReachBorder|false|到达屏幕边界事件|-|
|onChange|false|屏幕切换事件|-|
|onTransitionEnd|false|过渡结束事件|-|

## Methods

|name|desc|params|
|:-:|:-:|:-:|
|toggleScreen|跳转到指定key的屏幕|(key: 需要跳转到屏幕的key)|
|nextScreen|跳转到下一屏|-|
|prevScreen|跳转到上一屏|-|

## Tips

- 在切换屏幕过渡结束前,尝试切换屏幕不会生效。这个问题预计在下个版本中修复。
- 请给组件的父元素设定宽高