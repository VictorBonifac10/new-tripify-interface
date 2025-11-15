import { Button, ClientCarousel, Footer, Header, ScrollIndicator, ServicesCards, SupportButton, Title } from "../../components";

import { ContainerBody, Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, ContainerMain, Text, ContainerServices, ContainerPortfolio, Mask, ContainerClients, ContainerContact, ContactCard } from "./styles";

import Logo from '../../assets/Logo.svg'
import videoBanner from '../../assets/videoBanner.mov'
import videoPortfolio from '../../assets/videoPortfolio.mp4'

export function Home() {

    return (
        <ContainerBody>
            <Header />
            <SupportButton />
            <ContainerTop>
                <Banner>
                    <video src={videoBanner} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="containerBanner">
                        <ContentLeft>
                            <img src={Logo} alt='Logo da Empresa' />
                            <FirstDescription>
                                Viaje com conforto, segurança e as melhores condições.
                            </FirstDescription>
                            <SecondDescription>
                                Montamos roteiros exclusivos com custo-benefício ideal para você viajar mais e melhor.
                            </SecondDescription>
                            <div className="custom-button">
                                <Button href="#services">
                                    Veja mais
                                    <i className="ri-arrow-right-down-long-line"></i>
                                </Button>
                            </div>
                        </ContentLeft>
                        <ContentRight>
                            <i className="ri-whatsapp-line"></i>
                            <i className="ri-google-line"></i>
                            <i className="ri-instagram-line"></i>
                        </ContentRight>
                    </div>
                    <ScrollIndicator />
                </Banner>
            </ContainerTop>
            <ContainerMain>
                <ContainerServices id="services">
                    <Title>Porque escolher nossa equipe?</Title>
                    <ServicesCards />
                </ContainerServices>
                <ContainerPortfolio>
                    <video src={videoPortfolio} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="content">
                        <Title>Portfólio</Title>
                        <Text>
                            Clique em "Veja mais" e tenha acesso a todos os nossos serviços, desde sites institucionais e landing pages até estratégias para fortalecer sua presença online. Cada projeto é desenvolvido com atenção aos detalhes, design moderno e funcionalidade, garantindo que sua marca se destaque e conquiste resultados reais.
                            <br /><br />
                            Explore nosso portfólio e descubra como podemos impulsionar sua presença digital de forma autêntica e eficiente.
                        </Text>
                    </div>
                    <br />
                    <div className="custom-button">
                        <Button href="/portfolio">Veja mais <i className="ri-arrow-right-down-long-line"></i></Button>
                    </div>
                </ContainerPortfolio>
                <ContainerClients>
                    <Title>Clientes</Title>
                    <ClientCarousel />
                </ContainerClients>
                <ContainerContact id="contact">
                    <div className="content">
                        <Title>Contato</Title>
                        <Text>
                            Seja para tirar dúvidas, solicitar um orçamento ou iniciar um projeto, nossa equipe está sempre pronta para ouvir suas ideias e oferecer o ideal para o seu negócio.
                            <br /><br />
                            Portanto, envie-nos uma mensagem e agarre agora mesmo a oportunidade de criar experiências digitais únicas e que conectam sua marca ao público certo.
                            <br /><br />
                            Vamos juntos rumo à evolução da sua presença online!
                        </Text>
                    </div>
                    <div className="content-contact-card">
                        <ContactCard>
                            <div>
                                <i className="ri-whatsapp-line"></i>
                                <h3>WhatsApp</h3>
                            </div>
                            <p>+55(16)9908-3476</p>
                        </ContactCard>
                        <ContactCard>
                            <div>
                                <i className="ri-google-line"></i>
                                <h3>Email</h3>
                            </div>
                            <p>evolvesolutions@gmail.com</p>
                        </ContactCard>
                        <ContactCard>
                            <div>
                                <i className="ri-instagram-line"></i>
                                <h3>Instagram</h3>
                            </div>
                            <p>@evolvesolutions</p>
                        </ContactCard>
                    </div>
                </ContainerContact>
            </ContainerMain>
            <Footer />
        </ContainerBody>
    )
}