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
        <div className="relative z-0 dark:bg-[var(--bg-primary)] bg-[var(--bg-primary)]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-0">
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
