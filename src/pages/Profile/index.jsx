import { Header, Title, OfferCarousel, Footer, CartButton, FavoriteButton } from "../../components";
import { PackagesContainer, CartGroup, ProfileSection, Form, Button, ListCart, ItemCart } from "./styles";

import imgBanner from '../../assets/cartBanner.jpg'
import img from '../../assets/nacionais.jpg'

export function Profile() {

    return (
        <>
            <Header />
            <PackagesContainer>
                <Title subtitle="Tenha acesso aos seus dados e viagens favoritas">Perfil</Title>
                <CartGroup>
                    <img src={imgBanner} alt="Viagens" />
                    <div>
                        <ProfileSection>
                            <Title>Infos</Title>
                            <div className="formContainer">
                                <Form>
                                    <section>
                                        <article className="photo">
                                            <i class="ri-account-circle-line"></i>
                                        </article>
                                        <article className="infos">
                                            <div className="inputContainer">
                                                <label>Nome:</label>
                                                <input type="text" />
                                            </div>
                                            <div className="inputContainer">
                                                <label>Email:</label>
                                                <input type="e-mail" />
                                            </div>
                                            <div className="inputContainer">
                                                <label>Senha:</label>
                                                <input type="password" />
                                            </div>
                                            <div className="inputContainer">
                                                <label>Tel:</label>
                                                <input type="text" />
                                            </div>
                                            <div className="inputContainer">
                                                <label>Foto: </label>
                                                <input type="file" />
                                            </div>
                                        </article>
                                    </section>
                                    <Button>Salvar</Button>
                                </Form>
                            </div>
                        </ProfileSection>
                        <ListCart>
                            <Title>Favoritos</Title>
                            <ItemCart>
                                <FavoriteButton />
                                <img src={img} alt="Viagens" />
                                <p>Rio de Janeiro</p>
                                <p>2.900,00</p>
                                <div className="customCartButton">
                                    <CartButton variant="" />
                                </div>
                            </ItemCart>
                        </ListCart>
                    </div>
                </CartGroup>
                <Title subtitle="Adicione mais experiências ao seu carrinho">Ofertas</Title>
                <OfferCarousel />
            </PackagesContainer >
            <Footer />
        </>
    )
}