import { Card,Button,Modal } from "antd";
import "antd/dist/antd.css";
import "./app.css";
import TransFile from "./components/transform/index";

function App() {
  const enCode = ()=>{

  }
  const title=(
    <div>
      一、文件转移<Button type='link' onClick={enCode}>加密</Button>
    </div>
  )
  return (
    <div className="app">
      <Card title={title} style={{width:500}}>
        <TransFile />
      </Card>
    </div>
  );
}

export default App;
