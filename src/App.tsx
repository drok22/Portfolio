import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import NonProfessional from "./components/NonProfessional";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="is-preload">
      <Header />
      <div id="wrapper">
        <div id="main">
            <About section={"one"} />
            <Skills section={"two"} />
            <Projects section={"three"} />
            <NonProfessional section={"four"} />
            <Contact section={"five"} />
            <Footer />
        </div>
      </div>
    </body>
  );
}

export default App;
