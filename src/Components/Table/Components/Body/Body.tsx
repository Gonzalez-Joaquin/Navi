import style from "./body.module.css"

interface Props {
  children: React.ReactNode
  className?: string
}

const Body = ({ children, className }: Props) => {
  return <tbody className={`${style.body} ${className || ""}`}>{children}</tbody>
}

export default Body
