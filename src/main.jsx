// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store'; // ✅ Correct path
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom'; // ✅ ADD THIS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter> {/* ✅ FIXED: Add router here */}
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
