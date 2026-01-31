import About from "../components/About"
import Contact from "../components/Contact"
import Landing from "../components/Landing"
import Meta from "../components/Meta"
import Work from "../components/Work"
export default function Home() {
  return (
    <main>
      <Meta/>
      <Landing />
      <About />
      {/* <Work /> */}
      <Contact />
    </main>
  )
}
