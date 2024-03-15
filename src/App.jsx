import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Dashboard from "./screens/dashboard/DashboardScreen";
import { theme } from "./styles/theme/theme";
import { GlobalStyles } from "./styles/global/globalStyles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
