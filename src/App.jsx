
import './App.css'
import Contacts from './components/contacts/contacts'
import DegreesAndDiploma from './components/degrees_diploma/degrees'
import Header from './components/header/header'
import Projects from './components/projects/projects'
import QualitiesAndHobbies from './components/qualities/qualities_and_hobbies'
import Technos from './components/techno/technos'
import Welcome from './components/welcome/welcome'

function App() {

  return (
    <>
      <Header />
      <Welcome />
      <DegreesAndDiploma />
      <Technos />
      <Projects />
      <QualitiesAndHobbies />
      <Contacts />
    </>
  )
}

export default App
