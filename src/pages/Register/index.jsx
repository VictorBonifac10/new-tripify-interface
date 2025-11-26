import { Mask, Title } from "../../components";

// Tags from Styles
import { Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, SocialMediaContainer, ResgisterForm, Button } from "./styles";

//Medias
import Logo from '../../assets/Logo.svg'
import video from '../../assets/videoBanner.mp4'

export function Register() {
    return (

        <ContainerTop>
            <Banner>
                <video src={video} preload="none" autoPlay muted loop></video>
                <Mask />
                <div className="bannerContainer">
                    <ContentLeft>
                        <img src={Logo} alt='Logo da Empresa' />
                        <FirstDescription>
                            Seja bem-vindo ao seu novo jeito de viajar mais e melhor!
                        </FirstDescription>
                        <SecondDescription>
                            Cadastre-se agora mesmo e busque pela mais íncriveis opções de voos, cruzeiros e experiências!
                        </SecondDescription>
                        <SocialMediaContainer>
                            <i className="ri-whatsapp-line"></i>
                            <i class="ri-mail-line"></i>
                            <i className="ri-instagram-line"></i>
                        </SocialMediaContainer>
                    </ContentLeft>
                    <ContentRight>
                        <ResgisterForm>
                            <Title style={{ color: "#fff" }}>Cadastro</Title>
                            <section>
                                <div className="inputContainer">
                                    <label>Nome:</label>
                                    <input type="text" />
                                </div>
                                <div className="inputContainer">
                                    <label>Email:</label>
                                    <input type="e-mail" />
                                </div>
                            </section>
                            <section>
                                <div className="inputContainer">
                                    <label>Senha:</label>
                                    <input type="password" />
                                </div>
                                <div className="inputContainer">
                                    <label>Valide Senha:</label>
                                    <input type="password" />
                                </div>
                            </section>
                            <div className="inputContainer">
                                <label>Tel:</label>
                                <input type="text" />
                            </div>
                            <Button>Salvar</Button>
                        </ResgisterForm>
                        <div className="linkContainer">
                            <p>Já tem uma conta?</p>
                            <a href="/login"> Clique aqui.</a>
                        </div>
                    </ContentRight>
                </div>
            </Banner>
        </ContainerTop>

    )
}