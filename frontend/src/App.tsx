import React from 'react';
import Task from 'pages/task';
import { Provider } from 'react-redux';
import store from 'store/store';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Task />
      <Toaster
        toastOptions={{
          success: {
            className:
              'text-green-900 text-xs font-semibold tracking-widest bg-green-100 w-auto',
            position: 'top-right',
            duration: 4000,
          },
          error: {
            className:
              'text-red-900 text-xs font-semibold tracking-widest bg-red-100 w-auto',
            position: 'top-right',
            duration: 4000,
          },
        }}
      />
    </Provider>
  );
};

export default App;
