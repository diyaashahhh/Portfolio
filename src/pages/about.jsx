import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { skills, projects } from '../constants'
import CTA from '../components/CTA.JSX'

const about = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        Hello I'm <span className='blue-gradient_text 
        font-semibold drop-shadow'>Diya </span></h1>
       
       <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a Computer Engineering Student and ambitious web developer . I am passionate about creating beautiful and user-friendly websites. I have projects in developing websites using HTML, CSS, JavaScript, React, and Node.js. I am always looking for new challenges and opportunities to learn and grow.
        </p>
       </div>
    
       <div className='py-10 flex flex-col'>
         <h3 className='subhead-text'>My skills</h3>
         <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className='block-container w-20 h-20 '>
              <div className='btn-back rounded-xl '/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
          </div>
        ))}
        </div>
       </div>

       <div className='py-16'>
        <h3 className='subhead-text'>My Projects</h3>
        <div>
          <p>
            Here are some of the projects I have worked on:
          </p>
        </div>
        <div className='mt-12 flex'>
        <VerticalTimeline>
  {projects.map((project) => (
    <VerticalTimelineElement
      key={project.name}
      date={project.date} // ✅ Ensure 'date' exists
      icon={
        <div className='flex justify-center items-center w-full h-full'> 
          <img src={project.iconUrl} alt={project.name} className='w-[60%] h-[60%] object-contain' />
        </div>
      }
      iconStyle={{ background: project.iconBg }} // ✅ Ensure 'iconBg' exists
      contentStyle={{ 
        borderBottom: "8px solid", 
        borderBottomColor: project.iconBg, 
        boxShadow: 'none' 
      }} // ✅ Fix 'contentStyle' typo
    >
      <div>
        <h3 className='text-black text-xl font-poppins font-semibold'>
          {project.name}
        </h3>
      </div>
      <ul className='my-5 list-disc space-y-2'>
        {project.description.map((point, index) => (
          <li key={`project-point-${index}`} className='text-black/50 font-normal pl-1 text-sm'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  ))}
</VerticalTimeline>

        </div>
       
       </div>

    <hr className='border-slate-200'/>
    < CTA />
    </section>
  )
}

export default about
