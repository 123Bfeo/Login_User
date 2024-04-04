//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginComponent from "./components/LoginComponent";
function App() {
  return (
    <>
      <div className='container-xl'>
        <h1 className="mb-5">Inicia sesión</h1>
        <LoginComponent />
      </div>

    </>
  );
}

export default App;
