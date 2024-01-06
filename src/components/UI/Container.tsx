import { type ElementType, type ReactNode, ComponentPropsWithoutRef } from "react"

type ContainerPropsType<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({ as, children, ...props }: ContainerPropsType<C>) {
    const Component = as || 'div';
    return <Component {...props}>{children}</Component>
}