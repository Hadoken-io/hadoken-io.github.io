import Reveal from './Reveal.jsx'
import { education, internships, certifications } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <Reveal className="section-head">
        <span className="num">01</span><h2 className="display">ABOUT ME</h2><div className="rule" />
      </Reveal>
      <div className="about-wrap">
        <Reveal>
          <p>
            I'm a final-year B.Tech Computer Science student at Techno College of Engineering
            Agartala, most interested in the space where data, machine learning, and real
            software meet. I like taking a model past the notebook stage — into an API, a
            working UI, something people can actually hit with real inputs.
          </p>
          <p>
            That's shown up in a grass-specific ELO + XGBoost tennis predictor with a FastAPI
            backend, and in Android and web apps built with small teams under real sprint
            deadlines. Outside of that, I write and build small narrative horror games solo,
            under the studio name DANTE — a creative outlet that keeps my systems thinking sharp.
          </p>
        </Reveal>
        <Reveal delay={1} className="info-card">
          <h4>EDUCATION</h4>
          <ul><li><b>{education.degree}</b> — {education.school}, {education.gpa}</li></ul>
          <h4>INTERNSHIPS</h4>
          <ul>
            {internships.map((i) => (
              <li key={i.org}><b>{i.org}</b> — {i.role}, {i.dates}</li>
            ))}
          </ul>
          <h4>CERTIFICATIONS</h4>
          <ul><li>{certifications}</li></ul>
        </Reveal>
      </div>
    </section>
  )
}
