import './App.css';
import { Layout } from "antd";
import Top from "./Top.js";
import Side from "./Side.js";

const {Footer} = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
      <Top/>
        <Layout>
          <Side/>
        </Layout>
      <Footer>footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
