import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import axios from "axios";

function TransFile() {
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .get("http://localhost:8080/CopyFile", {
        params: {
          sourceUrl: values.origin,
          targetUrl: values.target,
        },
      })
      .then((data) => console.log(data));
  };

  return (
    <div className="app">
      <div className="form">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item label="选择文件路径" name="origin">
            <Input />
          </Form.Item>
          <Form.Item label="目标路径" name="target">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default TransFile;
