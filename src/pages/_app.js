import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { fetchFacts } from "@/reducers/reducers";

console.log("dispatching");
store.dispatch(fetchFacts);

export default function App({ Component, pageProps }) {
  return (
    <div className="layout">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
