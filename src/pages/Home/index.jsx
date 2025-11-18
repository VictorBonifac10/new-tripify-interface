// Components
import { Button, ClientCarousel, Footer, Header, ScrollIndicator, ServicesCards, SupportButton, Title, OfferCarousel } from "../../components";

// Tags from Styles
import { ContainerBody, Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, ContainerMain, Text, ContainerServices, ContainerPortfolio, Mask, ContainerClients, ContainerContact, ContactCard, OfferContainer } from "./styles";

// Medias
import Logo from '../../assets/Logo.svg'
import Plane from '../../assets/plane.svg'
import videoBanner from '../../assets/videoBanner.mp4'
import videoBanner2 from '../../assets/videoBanner2.mp4'

export function Home() {

    return (
        <ContainerBody>
            <Header />
            <SupportButton />
            <ContainerTop>
                <Banner>
                    <video src={videoBanner} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="bannerContainer">
                        <ContentLeft>
                            <img src={Logo} alt='Logo da Empresa' />
                            <FirstDescription>
                                Viaje com conforto, segurança e as melhores condições de voo.
                            </FirstDescription>
                            <SecondDescription>
                                Buscamos as mais íncriveis opções de voos, cruzeiros, resorts e experiências com um ótimo custo-benefício para você e sua família.
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
                            <i class="ri-mail-line"></i>
                            <i className="ri-instagram-line"></i>
                        </ContentRight>
                    </div>
                    <ScrollIndicator />
                </Banner>
            </ContainerTop>
            <ContainerMain>
                <ContainerServices id="services">
                    <Title subtitle="Existem inumeros tipos de viagem que você pode fazer">Viagens</Title>
                    <ServicesCards />
                </ContainerServices>
                <ContainerPortfolio>
                    <video src={videoBanner2} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="content">
                        <Title subtitle="Acesse todos os nossos pacotes e faça um orçamento">Pacotes</Title>
                        <Text>
                            Clique em "Veja mais" e descubra todos os nossos pacotes de viagem, incluindo destinos nacionais, internacionais, cruzeiros, roteiros personalizados e muito mais. Cada experiência foi planejada com cuidado para oferecer conforto, segurança e excelente custo-benefício.
                            <br /><br />
                            Explore nossas opções e encontre o pacote ideal para a sua próxima aventura — com suporte especializado, condições exclusivas e toda a tranquilidade que você merece ao viajar.
                        </Text>
                        <br />
                        <div className="custom-button">
                            <Button href="/portfolio">Veja mais <i className="ri-arrow-right-down-long-line"></i></Button>
                        </div>
                    </div>
                </ContainerPortfolio>
                <OfferContainer>
                    <Title subtitle="Aproveite nossas ofertas e garanta os melhores descontos">Ofertas</Title>
                    <OfferCarousel />
                </OfferContainer>
                <ContainerClients>
                    <Title subtitle="Veja as opiniões de nossos clientes sobre nossos serviços">Clientes</Title>
                    <ClientCarousel />
                </ContainerClients>
                <ContainerContact id="contact">
                    <Title subtitle="Entre em contato conosco, sem compromisso">Contato</Title>
                    <div className="contactContent">
                        <div className="leftContent">
                            <Text>
                                Seja para tirar dúvidas, solicitar um orçamento ou iniciar um projeto, nossa equipe está sempre pronta para ouvir suas ideias e oferecer o ideal para o seu negócio.
                                <br /><br />
                                Portanto, envie-nos uma mensagem e agarre agora mesmo a oportunidade de criar experiências digitais únicas e que conectam sua marca ao público certo.
                                <br /><br />
                                Vamos juntos rumo à evolução da sua presença online!
                            </Text>
                            <div class="plane" aria-hidden="true">
                                <img src={Plane} alt='Avião' />
                            </div>
                        </div>
                        <div className="rightContent">
                            <ContactCard>
                                <div>
                                    <i className="ri-whatsapp-line"></i>
                                    <h3>WhatsApp</h3>
                                </div>
                                <p>+55(00)9999-9901</p>
                            </ContactCard>
                            <ContactCard>
                                <div>
                                    <i class="ri-mail-line"></i>
                                    <h3>Email</h3>
                                </div>
                                <p>contato@tripifyviagens.com.br</p>
                            </ContactCard>
                            <ContactCard>
                                <div>
                                    <i className="ri-instagram-line"></i>
                                    <h3>Instagram</h3>
                                </div>
                                <p>@tripifyviagens</p>
                            </ContactCard>
                        </div>
                    </div>
                </ContainerContact>
            </ContainerMain>
            <Footer />
        </ContainerBody >
    )
}