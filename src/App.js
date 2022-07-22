import MFSearch from './MFSearch';

const App = () => (
  <div>
    <h1>Remote component for Module Federation task</h1>
    <MFSearch onChange={(val) => {console.log(val)}}/>
  </div>
);

export default App;
