import Reveal from './Reveal.jsx'
import { featuredProject, workProjects, alsoBuilding } from '../data.js'

function ProjectCard({ project, delay }) {
  return (
    <Reveal as="div" delay={delay} className="card" data-tag={project.tag}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="stack">
        {project.stack.map((s) => <span key={s}>{s}</span>)}
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work">
      <Reveal className="section-head">
        <span className="num">02</span><h2 className="display">SELECTED WORK</h2><div className="rule" />
      </Reveal>

      <Reveal className="featured">
        <div className="fx-body">
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.description}</p>
          <div className="stack">
            {featuredProject.stack.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>
        <div className="fx-stats">
          {featuredProject.stats.map((s) => (
            <div className="big-stat" key={s.l}>
              <span className="n">{s.n}</span>
              <span className="l">{s.l}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="grid">
        {workProjects.map((p, i) => <ProjectCard project={p} delay={i} key={p.title} />)}
      </div>

      <Reveal as="h4" className="subhead">Also building (as DANTE)</Reveal>
      <div className="grid">
        {alsoBuilding.map((p, i) => <ProjectCard project={p} delay={i} key={p.title} />)}
      </div>
    </section>
  )
}
