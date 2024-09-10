import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/navbar'
import About from './sections/about'
import Course from './sections/course'
import Hero from './sections/hero'

library.add(fab, fas, far)

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Course />
    </>
  )
}
