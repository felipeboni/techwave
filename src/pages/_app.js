import "@/styles/globals.css";
import NavBar from "./layout/navbar";
import TopBar from "./layout/topbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";
import store from "../../redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="flex flex-col h-full">
            <NavBar {...pageProps} />
            <TopBar />

            <div className="flex-1">
              <Component {...pageProps} />
            </div>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
