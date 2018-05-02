import React from 'react'
import { Button,Input } from 'element-react';
import 'element-theme-default';
class App extends  React.Component{
    render(){
        return <div>
            <Button type="primary">Hello</Button>
            <Input
                type="textarea"
                autosize={{ minRows: 2, maxRows: 4}}
                placeholder="请输入内容"
            />
        </div>
    }
}
export default  App