import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App.tsx';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter basename="">
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
    <div>
      <Toaster />
    </div>
  </HashRouter>
);
