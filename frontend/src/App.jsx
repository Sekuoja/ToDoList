import { Input, Button, List } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const data = [
    'Item 1',
    'Item 2',
    'Item 3',
];


const App = () => {
    return <>
        <Input.Group><Input placeholder="Search.." /><Button type="primary" style={{ flexDirection: "row-reverse", gap: "8px" }} icon={<SearchOutlined />}>Search</Button></Input.Group>
        <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    {item}
                </List.Item>
            )} />
    </>
}

export default App;
