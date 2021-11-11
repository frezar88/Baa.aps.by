import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import BrandModelStore from "./store/BrandModelStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        brandModel: new BrandModelStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

