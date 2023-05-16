import { FC } from "react";
import GlobalStyle from "./components/common/GlobalStyle.tsx";
import Layout from "./components/common/Layout.tsx";
import Input from "./components/home/Input.tsx";
import Previw from "./components/home/Previw.tsx";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Input />
        <Previw />
      </Layout>
    </div>
  );
}

export default App;
