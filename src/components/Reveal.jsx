import useReveal from '../useReveal.js'

export default function Reveal({ as: Tag = 'div', delay, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  const delayClass = delay ? ` d${delay}` : ''
  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' in' : ''}${delayClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
