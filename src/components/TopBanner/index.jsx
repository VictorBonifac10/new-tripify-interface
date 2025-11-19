import { Header, Link, SupportButton } from "../index";

// Tags from Styles
import { Banner, ContainerTop, ContentLeft, ContentRight, FirstDescription, SecondDescription } from "./styles";

//Medias
import Logo from '../../assets/Logo.svg'
import { ScrollIndicator, Mask } from "../index";

export function TopBanner({ variantFirstDescription, variantSecondDescription, video }) {
    return (
        <>
            <Header />
            <SupportButton />
            <ContainerTop>
                <Banner>
                    <video src={video} preload="none" autoPlay muted loop></video>
                    <Mask />
                    <div className="bannerContainer">
                        <ContentLeft>
                            <img src={Logo} alt='Logo da Empresa' />
                            <FirstDescription>
                                {variantFirstDescription}
                            </FirstDescription>
                            <SecondDescription>
                                {variantSecondDescription}
                            </SecondDescription>
                            <div className="custom-button">
                                <Link href="#services">
                                    Veja mais
                                    <i className="ri-arrow-right-down-long-line"></i>
                                </Link>
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
        </>
    )
}