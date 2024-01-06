import { type ComponentPropsWithoutRef, type FormEvent, useRef, useImperativeHandle, forwardRef } from "react"


type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void
}

export type FormHandleType = {
    clear: () => void;
}

const Form = forwardRef<FormHandleType, FormProps>(({ onSave, children, ...otherProps }, ref) => {

    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
                console.log('Clearing form');
                
            }
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
        form.current?.reset();
    }

  return (
    <form action="" {...otherProps} onSubmit={handleSubmit} ref={form}>
        {children}
    </form>
  )
})

export default Form