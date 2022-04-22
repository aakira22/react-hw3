import "./styles.css";

import { NewsContextProvider } from "./NewsContext";

import News from "./components/News";

export default function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}
