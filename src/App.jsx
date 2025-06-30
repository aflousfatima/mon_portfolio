import Header from './components/Header';
import Body from './components/Body';
import ProfessionalSummary from './components/ProfessionalSummary';
import Education from './components/Education';
import Experience from './components/Experience';
import Projet from './components/Projet';
import './App.css';
import Skills from './components/Skills';
import Articles from './components/Articles';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
function App() {
  return (
    <div className="app-container">
      <Header />
      <Body />
      <ProfessionalSummary />
      <Education />
      <Experience />
      <Projet />
      <Skills />
      <Articles />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;