import { ComponentPropsWithoutRef } from "react"


type FormProps = ComponentPropsWithoutRef<'form'>

const Form = (props: FormProps) => {
  return (
    <form action="" {...props}>
        {props.children}
    </form>
  )
}

export default Form