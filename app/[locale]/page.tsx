import Intro from "@/components/Intro"
import SectionDivider from "@/components/SectionDivider"
import About from "@/components/About"
// import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export const metadata = {
  title: "Xiao | Personal Portfolio",
  description: "Xiao is a frontend developer with 4 years of experience.",
}

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      {/* <Projects /> */}
      <Skills />
    </main>
  )
}
