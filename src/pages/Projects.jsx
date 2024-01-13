import { Link } from "react-router-dom"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const Projects = () => {
  return (
    <section className="max-container">
    <h1 className="head-text">My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span></h1>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>I've undertaken several meaningful projects over the years, many of which hold a special place in my heart. Some of these projects are open-source, allowing anyone interested to explore the codebase and contribute valuable ideas for further improvements. Your collaboration is highly appreciated, and together, we can make a positive impact on the development community.</p>
    </div>

    <div className="flex flex-wrap my-20 gap-16">
      {projects.map((proj) => (
        <div className="lg:w-[400px] w-full" key={proj.name}>
          <div className="block-container w-12 h-12">
            <div className={`btn-back rounded-xl ${proj.theme}`}/>
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={proj.iconUrl} className="w-1/2 h-1/2 object-contain" alt="" />
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <h4 className="text-2xl font-poppins font-semibold">{proj.name}</h4>
            <p className="mt-2 text-slate-500">{proj.description}</p>
            <div className="mt-5 flex items-center gap-2 font-poppins">
              <Link to={proj.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
                Try It Out
              </Link>
              <img src={arrow} alt="" className="w-4 h-4 object-contain"/>
            </div>
          </div>
        </div>
      ))}
    </div>

    <hr className="border-slate-200" />

    <CTA/>
    </section>
  )
}

export default Projects