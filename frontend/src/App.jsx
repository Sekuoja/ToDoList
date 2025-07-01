import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const App = () => {
    return <>
 <Input.Group><Input placeholder="Search.."/><Button type="primary" style={{flexDirection: "row-reverse", gap: "8px"}} icon={<SearchOutlined />}>Search</Button></Input.Group>
           </>
}

export default App;
