import {Button} from 'antd'
import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'

class Main extends PureComponent {
    render() {
        return (<div>
            <Button>Hello Gemini</Button>
        </div>)
    }
}

ReactDOM.render(<Main />, document.getElementById("container"))