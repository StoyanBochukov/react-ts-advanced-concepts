import { ComponentPropsWithoutRef } from "react"

type ButtonProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    el: 'link'
} & ComponentPropsWithoutRef<'a'>

type ComponentProps = ButtonProps | AnchorProps

const Button = (props: ComponentProps) => {
    if(props.el === 'link'){
        return <a href="" {...props}></a>  
    }
  return <button {...props}></button>
}

export default Button