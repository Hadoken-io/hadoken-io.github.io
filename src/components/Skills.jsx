import Reveal from './Reveal.jsx'
import { skillBars, toolbelt } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <Reveal className="section-head">
        <span className="num">03</span><h2 className="display">SKILL STATUS</h2><div className="rule" />
      </Reveal>
      <Reveal className="stat-panel">
        {skillBars.map((s) => (
          <div className="stat-row" key={s.label}>
            <span className="label">{s.label}</span>
            <div className="bar"><i style={{ '--w': `${s.pct}%` }} /></div>
            <span className="pct">{s.pct}</span>
          </div>
        ))}
        <div className="toolbelt">
          {toolbelt.map((t) => <span key={t}>{t}</span>)}
        </div>
      </Reveal>
    </section>
  )
}
