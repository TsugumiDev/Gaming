import Footer from "./components/Footer/Footer";
import { store, persistor } from "../src/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainRouter from "./router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainRouter />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
