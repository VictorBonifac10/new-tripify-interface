import { CartButtonContainer } from './styles'

export function CartButton({ variant }) {
    return (
        <CartButtonContainer>
            {variant}
            <i class="ri-shopping-cart-line"></i>
        </CartButtonContainer>
    )
}