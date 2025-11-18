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
                    <a href="/portfolio">Viagens</a>
                </li>
                <li>
                    <a href="#">Pacotes</a>
                </li>
                <li>
                    <a href="#">Ofertas</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
            <div>
                <i className="ri-whatsapp-line"></i>
                <i className="ri-google-line"></i>
                <i className="ri-instagram-line"></i>
            </div>
            <Text>
                © 2025 Tripify Viagens - All rights reserved.
            </Text>
        </ContainerFooter>

    )
}