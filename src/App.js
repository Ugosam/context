import logo from './logo.svg';
import './App.css';
import { ThemeContextProvider } from './context/DataTheme';
import { Text } from './text';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Text />
        
      </ThemeContextProvider>
    </>
  );
}

export default App;
