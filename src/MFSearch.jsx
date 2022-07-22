import { Input } from 'antd'

const MFSearch = ({ onChange }) => <Input.Search placeholder="remote search" style={{ marginTop: '10px'}} onSearch={onChange} />
export default MFSearch;
