import { Header, Title, OfferCarousel, Footer, CartButton, FavoriteButton, SupportButton } from "../../components";
import { PackagesContainer, ProfileContainer, FormContainer, Form, Button, FavoriteList, ItemCart } from "./styles";

import imgBanner from '../../assets/banner.png'
import img from '../../assets/nacionais.jpg'
import profile from '../../assets/profile.jpg'
import { formatPrice } from "../../utils/formatPrice";

export function Profile() {
    return (
        <>
            <Header />
            <SupportButton />
            <PackagesContainer>
                <Title subtitle="Tenha acesso aos seus dados e viagens favoritas">Perfil</Title>
                <ProfileContainer>
                    <img src={imgBanner} alt="Viagens" />
                    <FormContainer>
                        <img src={profile} alt="Foto de Perfil" />
                        <Form>
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
                            <Button>Salvar</Button>
                        </Form>
                    </FormContainer>
                </ProfileContainer>
                <Title>Favoritos</Title>
                <FavoriteList>
                    <ItemCart>
                        <FavoriteButton className="i" />
                        <img src={img} alt="Viagens" />
                        <p>Rio de Janeiro</p>
                        <p>{formatPrice(800)}</p>
                        <div className="customCartButton">
                            <CartButton variant="" />
                        </div>
                    </ItemCart>
                    <ItemCart>
                        <FavoriteButton className="i" />
                        <img src={img} alt="Viagens" />
                        <p>Rio de Janeiro</p>
                        <p>{formatPrice(800)}</p>
                        <div className="customCartButton">
                            <CartButton variant="" />
                        </div>
                    </ItemCart>
                    <ItemCart>
                        <FavoriteButton className="i" />
                        <img src={img} alt="Viagens" />
                        <p>Rio de Janeiro</p>
                        <p>{formatPrice(800)}</p>
                        <div className="customCartButton">
                            <CartButton variant="" />
                        </div>
                    </ItemCart>
                    <ItemCart>
                        <FavoriteButton className="i" />
                        <img src={img} alt="Viagens" />
                        <p>Rio de Janeiro</p>
                        <p>{formatPrice(1500)}</p>
                        <div className="customCartButton">
                            <CartButton variant="" />
                        </div>
                    </ItemCart>
                </FavoriteList>
                <Title subtitle="Adicione mais experiências ao seu carrinho">Ofertas</Title>
                <OfferCarousel />
            </PackagesContainer >
            <Footer />
        </>
    )
}