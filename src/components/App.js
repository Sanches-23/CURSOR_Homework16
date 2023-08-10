import './styles/Reset.css'

import jsonData from './PostInfo.json';
import Base from "./base/Base";

const App = () => {
  return (

      <Base data={jsonData.post}></Base>

  );
}

export default App;
