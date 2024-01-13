import { skills, experiences} from "../constants"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import CTA from "../components/CTA"

const About = () => {
  return (
   <section className="max-container">
    <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Koushik</span></h1>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>As a seasoned Full Stack Developer, I specialize in bridging the gap between technical expertise and effective education through immersive, hands-on learning experiences. My commitment to cultivating talent is reflected in my proficiency in both frontend and backend technologies, making me adept at guiding individuals through the intricacies of full-stack development</p>
    </div>

    <div className="flex py-10 flex-col">
      <h3 className="subhead-text">My Skills</h3>

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div key={skill.name} className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="py-16">
      <h3 className="subhead-text">Work Experience</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>Throughout my professional journey, I've collaborated with diverse companies, consistently elevating my skills while fostering collaboration with talented individuals. Here's a succinct rundown of my experience:</p>
    </div>

    <div className="mnt-12 flex">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement key={exp.company_name} date={exp.date} contentStyle={{borderBottom: '8px', borderStyle:'solid', borderBottomColor:exp.iconBg, boxShadow:'none'}}>
              <div className="">
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {exp.title}
                </h3>
                <p className="text-black-500 font-base font-medium" style={{margin:0}}>
                  {exp.company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {exp.points.map((point, index) => (
                  <li key={`exp-point-${index}`} className="text-black-500/50 font-normal text-sm pl-1">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </div>
    </div>

    <hr className="border-slate-200" />

    <CTA/>
   </section>
  )
}

export default About