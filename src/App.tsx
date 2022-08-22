import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global";
import { UseContextProvider } from "./context/useContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UseContextProvider>
      <GlobalStyle />
      <Home />
      <Toaster position="top-right" />
    </UseContextProvider>
  );
}

export default App;
