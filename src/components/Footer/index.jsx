import { ContainerFooter, Text } from "./styles";

import Logo from '../../assets/Logo.svg'

export function Footer() {
    return (

        <ContainerFooter>
            <img src={Logo} alt='Logo da Empresa' />
            <Text>
                Descubra destinos incríveis e viva momentos inesquecíveis.
            </Text>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/portfolio">Portfólio</a>

                </li>
                <li>
                    <a href="#">Termos e Condições</a>
                </li>
            </ul>
            <div>
                <i className="ri-whatsapp-line"></i>
                <i className="ri-google-line"></i>
                <i className="ri-instagram-line"></i>
            </div>
            <Text>
                © 2025 evolve solutions - All rights reserved.
            </Text>
        </ContainerFooter>

    )
}