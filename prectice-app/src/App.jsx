import TaskComponent from './components/TaskComponent.jsx'
import AuthComponent from './components/AuthComponent.jsx'
import './App.css';
import store from './store/store.js';
import { Provider } from 'react-redux';

function App() {


  return (
    <Provider store={store}>
     <div>
     <h1> Task Management App</h1>
      <div>
        <TaskComponent />
      </div>
      <div>
        <AuthComponent />
      </div>
     </div>
    </Provider>
  );
}

export default App
