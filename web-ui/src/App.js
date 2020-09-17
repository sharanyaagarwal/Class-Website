import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesMapping } from "./Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { classWebTheme } from "./theme";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={classWebTheme}>
          <RoutesMapping></RoutesMapping>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
