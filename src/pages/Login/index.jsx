import { Mask, Title } from "../../components";

// Tags from Styles
import { Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription, SocialMediaContainer, ResgisterForm, Button } from "./styles";

//Medias
import Logo from '../../assets/Logo.svg'
import video from '../../assets/videoBanner.mp4'

export function Login() {
    return (

        <ContainerTop>
            <Banner>
                <video src={video} preload="none" autoPlay muted loop></video>
                <Mask />
                <div className="bannerContainer">
                    <ContentLeft>
                        <img src={Logo} alt='Logo da Empresa' />
                        <FirstDescription>
                            Seja bem-vindo de volta, corra e aproveite as promoções.
                        </FirstDescription>
                        <SecondDescription>
                            A opurtunidade de adquirir uma nova viagem para 2026 está em suas mãos, logue agora mesmo!
                        </SecondDescription>
                        <SocialMediaContainer>
                            <i className="ri-whatsapp-line"></i>
                            <i class="ri-mail-line"></i>
                            <i className="ri-instagram-line"></i>
                        </SocialMediaContainer>
                    </ContentLeft>
                    <ContentRight>
                        <ResgisterForm>
                            <Title style={{ color: "#fff" }}>Login</Title>
                            <section>
                                <div className="inputContainer">
                                    <label>Email:</label>
                                    <input type="e-mail" />
                                </div>
                                <div className="inputContainer">
                                    <label>Senha:</label>
                                    <input type="password" />
                                </div>
                            </section>
                            <Button>Salvar</Button>
                        </ResgisterForm>
                        <div className="linkContainer">
                            <p>Não tem uma conta?</p>
                            <a href="/cadastro">Clique aqui.</a>
                        </div>
                    </ContentRight>
                </div>
            </Banner>
        </ContainerTop>

    )
}