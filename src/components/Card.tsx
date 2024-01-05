import { FC, ReactNode } from 'react'

type CardPropTypes = {
    children: ReactNode;
    title: string;
    actions: ReactNode;
}

const Card: FC<CardPropTypes> = ({ title, children, actions }) => {
  return (
    <section className='card'>
        <h2>{title}</h2>
        {actions}
        {children}
    </section>
  )
}

export default Card