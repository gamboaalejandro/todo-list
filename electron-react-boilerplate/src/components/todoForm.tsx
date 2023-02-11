import React, { useEffect, useState, useCallback } from "react";
import {Form, Row, Col, Button, Input, } from 'antd'
import {PlusCircleFilled } from '@ant-design/icons'
import {Todo} from '../services/todoservice'

interface TodoFormProps {
  onformsubmit: (todo: Todo) => void;
}

const TodoForm = ({onformsubmit}: TodoFormProps) => {
const [form] = Form.useForm();


const onFinish = () => {
  onformsubmit({
    title: form.getFieldValue('title'),
    completed: false
  });
  form.resetFields();

}
return(
  <Form
  form={form}
  onFinish={onFinish}
  layout="horizontal"
  className="todo-form">
    <Row gutter={20}>
      <Col xs={24} sm={24} md={17} xl={20}>
      <Form.Item
       name= 'title'
       rules={[{ required: true, message: 'Please input your title!' }]}
      >
        <Input placeholder="Whats Need to be Done"/>
      </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={7} lg={5} xl={4}>
      <Button type="primary" htmlType="submit" block>
        <PlusCircleFilled />
      </Button>
      </Col>

    </Row>



  </Form>
)
}
export default TodoForm
