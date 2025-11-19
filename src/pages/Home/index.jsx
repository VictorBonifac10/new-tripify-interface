// Components
import { Link, Mask, ClientCarousel, Footer, ServicesCards, Title, OfferCarousel, TopBanner } from "../../components";

// Tags from Styles
import { ContainerBody, ContainerMain, Text, ContainerServices, ContainerPortfolio, ContainerClients, ContainerContact, ContactCard, OfferContainer } from "./styles";

// Medias
import Plane from '../../assets/plane.svg'
import videoBanner from '../../assets/videoBanner.mp4'
import videoBanner3 from '../../assets/videoBanner3.mp4'

export function Home() {

    return (
        <ContainerBody>
            <TopBanner
                variantFirstDescription="Viaje com conforto, segurança e as melhores condições"
                variantSecondDescription="Buscamos as mais íncriveis opções de voos, cruzeiros e experiências para você e sua família!"
                video={videoBanner} />
            <ContainerMain>
                <ContainerServices id="services">
                    <Title subtitle="Existem inumeros tipos de viagem que você pode fazer">Viagens</Title>
                    <ServicesCards />
                </ContainerServices>
                <ContainerPortfolio>
                    <video src={videoBanner3} preload="none" autoPlay muted loop></video>
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
                            <Link href="/portfolio">Veja mais <i className="ri-arrow-right-down-long-line"></i></Link>
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