import { Header, Title, OfferCarousel, Footer, SupportButton } from "../../components";
import { PackagesContainer, CartGroup, ListCart, ResumeCart, ItemCart } from "./styles";

import imgBanner from '../../assets/banner.png'
import img from '../../assets/nacionais.jpg'
import { formatPrice } from "../../utils/formatPrice";

export function Cart() {
    return (
        <>
            <Header />
            <SupportButton />
            <PackagesContainer>
                <Title subtitle="Sua viagem está apenas a um clique de distância.">Carrinho</Title>
                <CartGroup>
                    <img src={imgBanner} alt="Viagens" />
                    <div className="listCartContainer">
                        <ListCart>
                            <Title>Itens</Title>
                            <ItemCart>
                                <img src={img} alt="Viagens" />
                                <p>Rio de Janeiro</p>
                                <p>{formatPrice(2900)}</p>
                                <div>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </ItemCart>
                            <ItemCart>
                                <img src={img} alt="Viagens" />
                                <p>Rio de Janeiro</p>
                                <p>{formatPrice(2900)}</p>
                                <div>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </ItemCart>
                            <ItemCart>
                                <img src={img} alt="Viagens" />
                                <p>Rio de Janeiro</p>
                                <p>{formatPrice(2900)}</p>
                                <div>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </ItemCart>

                        </ListCart>
                        <ResumeCart>
                            <Title>Resumo</Title>
                            <section>
                                <article>
                                    <h4>Total de Itens:<span>2</span></h4>
                                    <h4>Taxas:<span><p>{formatPrice(0)}</p></span></h4>
                                </article>
                                <h4>Valor Total:<span><p>{formatPrice(5000)}</p></span></h4>
                            </section>
                        </ResumeCart>
                    </div>
                </CartGroup>
                <Title subtitle="Adicione mais experiências ao seu carrinho">Ofertas</Title>
                <OfferCarousel />
            </PackagesContainer >
            <Footer />
        </>
    )
}