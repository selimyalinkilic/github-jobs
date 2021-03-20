import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header";
import Jobs from './pages/Jobs';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import GlobalStyle from "./theme/GlobalStyle";
import {useDarkMode} from "./theme/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;  
  const themeCheck = theme === "light" ? false : true;  
  const themeClass = theme === "light" ? "lightContent" : "darkContent";
  return (
    <ThemeProvider theme={themeMode}>
      <div className={themeClass + " App"}>
        <GlobalStyle />
        <Header themeHandler={toggleTheme} themeCheck={themeCheck} />
        <Switch>
          <Route path="/" component={Jobs}  exact />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
