import { LinkContainer } from './styles'

export function Link({ children, ...props }) {
    return (
        <LinkContainer {...props}>{children}</LinkContainer>
    )
}