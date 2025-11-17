// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// Swiper modules
import { Grid, Pagination } from 'swiper/modules';

// Data

import { packages } from '../../data/packages';

// Components
import { Button, ClientCarousel, Footer, Header, ScrollIndicator, ServicesCards, SupportButton, Title } from "../../components";

// Tags from Styles
import { ContainerBody, Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, ContainerMain, Text, ContainerServices, ContainerPortfolio, Mask, ContainerClients, ContainerContact, ContactCard, OfferContainer } from "./styles";

// Medias
import Logo from '../../assets/Logo.svg'
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
                    <Title subtitle="Existem inumeros tipos de viagem que você pode fazer">Viagens</Title>
                    <ServicesCards />
                </ContainerServices>
                <ContainerPortfolio>
                    <video src={videoBanner2} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="content">
                        <Title subtitle="Acesse nosso catálogo e vamos orçar tudo pra você rapidinho">Catálogo</Title>
                        <Text>
                            Clique em "Veja mais" e tenha acesso a todos os nossos serviços, desde sites institucionais e landing pages até estratégias para fortalecer sua presença online. Cada projeto é desenvolvido com atenção aos detalhes, design moderno e funcionalidade, garantindo que sua marca se destaque e conquiste resultados reais.
                            <br /><br />
                            Explore nosso portfólio e descubra como podemos impulsionar sua presença digital de forma autêntica e eficiente.
                        </Text>
                        <br />
                        <div className="custom-button">
                            <Button href="/portfolio">Veja mais <i className="ri-arrow-right-down-long-line"></i></Button>
                        </div>
                    </div>
                </ContainerPortfolio>
                <OfferContainer>
                    <Title subtitle="Aproveite nossas ofertas e garanta os melhores descontos">Ofertas</Title>

                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                    >
                        {packages
                            .filter(item => item.offer) // ou item.offer === true
                            .map(data => (
                                <SwiperSlide>
                                    <img src={data.img} alt="empresa" />
                                    <article>
                                        <h2>{data.destination}</h2>
                                        <p>{data.description}</p>
                                        <div>
                                            <span>2.00,00</span>
                                            <p>x2 pessoas</p>
                                        </div>
                                        <Button variant='secondary'>Comprar</Button>
                                    </article>
                                </SwiperSlide>
                            ))}

                    </Swiper>
                </OfferContainer>
                <ContainerClients>
                    <Title subtitle="Veja as opiniões de nossos clientes sobre nossos serviços">Clientes</Title>
                    <ClientCarousel />
                </ContainerClients>
                <ContainerContact id="contact">
                    <Title subtitle="Entre em contato conosco, sem compromisso">Contato</Title>
                    <div className="content">
                        <Text>
                            Seja para tirar dúvidas, solicitar um orçamento ou iniciar um projeto, nossa equipe está sempre pronta para ouvir suas ideias e oferecer o ideal para o seu negócio.
                            <br /><br />
                            Portanto, envie-nos uma mensagem e agarre agora mesmo a oportunidade de criar experiências digitais únicas e que conectam sua marca ao público certo.
                            <br /><br />
                            Vamos juntos rumo à evolução da sua presença online!
                        </Text>
                        <div className="content-contact-card">
                            <ContactCard>
                                <div>
                                    <i className="ri-whatsapp-line"></i>
                                    <h3>WhatsApp</h3>
                                </div>
                                <p>+55(00)9999-9901</p>
                            </ContactCard>
                            <ContactCard>
                                <div>
                                    <i className="ri-google-line"></i>
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