import React, {PureComponent} from 'react'
import { Icon, Form, Input, Upload } from 'antd'
import { connect } from 'dva'

import { ipcRenderer, remote } from 'electron'

const { dialog } = remote


class Settings extends PureComponent {

    componentDidMount = () => {
        // let androidHome = ipcRenderer.sendSync("get-android-home")
        // const { setFieldsValue } = this.props.form
        // setFieldsValue({"env": androidHome}) 
        const { dispatch, form } = this.props
        dispatch({type: "settings/fetch"})
    }

    showDirectoryBrowser = () => {
        const { dispatch } = this.props

        dispatch({type: "settings/save"})
    }
    
    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

        return (
        <Form {...formItemLayout}>
           <Form.Item label="ANDROID_HOME">
            {getFieldDecorator('env', {
                rules: [{ required: true, message: 'Please input your ANDROID_HOME env!' }],
            })(<Input addonAfter={
                <Icon type="setting" onClick={this.showDirectoryBrowser} style={{cursor: "pointer"}} />
            } /> )}
            </Form.Item>
        </Form>
        )
    }

}

const FormComponent = Form.create({ 
    name: 'settings',
    mapPropsToFields: (props) => ({
        env: Form.createFormField({ value: props.androidHome })
    })
})(Settings)


const ConnectedComponet = connect(
    ({ settings}) => ({ androidHome: settings.androidHome })
)
(FormComponent)
export default ConnectedComponet