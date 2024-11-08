import './App.css';
import { Layout } from "antd";
import Top from "./Top.js";
import Side from "./Side.js";
import MainContent from "./MainContent.js";
const {Footer} = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
      <Top/>
        <Layout>
          <Side/>
          <MainContent/>
        </Layout>
      <Footer>footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
