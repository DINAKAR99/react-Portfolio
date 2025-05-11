import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  Leetcode,
} from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative z-0 dark:bg-primary-dark light:bg-primary-light">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Works />
          <Experience />
          <Leetcode />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
