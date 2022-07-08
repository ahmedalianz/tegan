import "styles/globals.scss";

import { Provider } from "react-redux";
import SSRProvider from "react-bootstrap/SSRProvider";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
import store from "redux/store";

const Layout = dynamic(() => import("components/LAYOUT/Layout"));

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
