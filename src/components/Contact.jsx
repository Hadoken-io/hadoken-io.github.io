import Reveal from './Reveal.jsx'
import { contact } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal as="h2" className="display">LET'S TALK</Reveal>
      <Reveal as="p" delay={1}>
        Open to ML / data engineering roles, freelance work, or just talking about model
        architecture and game design.
      </Reveal>
      <Reveal className="links" delay={2}>
        <a className="btn" href={`mailto:${contact.email}`}>Email me</a>
        <a className="btn ghost" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="btn ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </Reveal>
    </section>
  )
}
