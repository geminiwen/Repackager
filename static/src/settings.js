import React, {PureComponent} from 'react'
import { Icon, Form, Input, Upload } from 'antd'

import { ipcRenderer, remote } from 'electron'

const { dialog } = remote

class Settings extends PureComponent {
    
    state = {
        androidHome: ""
    }


    componentDidMount = () => {
        let androidHome = ipcRenderer.sendSync("get-android-home")
        const { setFieldsValue } = this.props.form
        setFieldsValue({"env": androidHome}) 
    }

    handleAndroidHome = (info) => {
        let fileList = [...info.fileList];
    }

    showDirectoryBrowser = () => {
        const { androidHome } = this.state
        const { setFieldsValue } = this.props.form
        if (androidHome) {
        }
        let result = dialog.showOpenDialogSync(
            { title: "ANDROID_HOME", defaultPath: androidHome, properties: ["openDirectory"] }
        )
        
        if (!result) return

        setFieldsValue({"env": result[0]})

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
                rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input addonAfter={
                <Icon type="setting" onClick={this.showDirectoryBrowser} style={{cursor: "pointer"}} />
            } /> )}
            </Form.Item>
        </Form>
        )
    }

}

const WrappedRegistrationForm = Form.create({ name: 'settings' })(Settings);

export default WrappedRegistrationForm