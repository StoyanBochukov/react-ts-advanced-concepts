import { ComponentPropsWithoutRef, FC, ReactNode } from "react"


type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ id, label, ...props }) => {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} />
    </p>
  )
}

export default Input