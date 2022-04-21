import './App.css';
import { Provider } from "react-redux"
import store from './components/redux/store'
import RouterApp from './components/router/route';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RouterApp />
      </div>
    </Provider>
  )
}

export default App;