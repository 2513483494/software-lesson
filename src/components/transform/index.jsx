import { Form, Input, Button, Modal, Space } from "antd";
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
  const zip = () => {
    const values = form.getFieldsValue(["origin", "target"]);
    axios
      .get("http://localhost:8080/ZipFile", {
        params: {
          sourceUrl: values.origin,
          targetUrl: values.target,
        },
      })
      .then((data) => console.log(data));
  };
  const toPackage = () => {
    const values = form.getFieldsValue(["origin", "target"]);
    axios
      .get("http://localhost:8080/PackageFile", {
        params: {
          files: values.origin,
          targetUrl: values.target,
        },
      })
      .then((data) => console.log(data));
  };
  const [form] = Form.useForm();
  return (
    <div className="app">
      <div className="form">
        <Form name="basic" onFinish={onFinish} form={form}>
          <Form.Item label="选择文件路径" name="origin">
            <Input />
          </Form.Item>
          <Form.Item label="选择目标路径" name="target">
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                备份\还原
              </Button>
              <Button type="primary" onClick={zip}>
                压缩备份
              </Button>
              <Button type="primary" onClick={toPackage}>
                打包备份
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default TransFile;
