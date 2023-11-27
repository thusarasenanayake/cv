import Header from './components/header'
import About from './components/about'
import Education from './components/education'
import TechnicalSkills from './components/technical-skills'
import WorkExperience from './components/work-experience'
import Footer from './components/footer'
import ThemeToggle from './components/theme-toggle';

export default function Home() {
  return (
    <main className="m-8 md:mx:16 lg:mx-48 print:mx-8">
      <ThemeToggle />
      <Header />
      <About />
      <Education />
      <br />
      <TechnicalSkills />
      <WorkExperience />
      <Footer />
    </main>
  )
}
