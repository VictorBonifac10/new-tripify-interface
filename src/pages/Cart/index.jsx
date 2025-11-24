import { Header, Title, OfferCarousel, Footer } from "../../components";
import { PackagesContainer, CartGroup, ListCart, ResumeCart, ItemCart } from "./styles";

import imgBanner from '../../assets/cartBanner.jpg'
import img from '../../assets/nacionais.jpg'

export function Cart() {

    return (
        <>
            <Header />
            <PackagesContainer>
                <Title subtitle="Sua viagem está apenas a um clique de distância.">Carrinho</Title>
                <CartGroup>
                    <img src={imgBanner} alt="Viagens" />
                    <div>
                        <ListCart>
                            <Title>Itens</Title>
                            <ItemCart>
                                <img src={img} alt="Viagens" />
                                <p>Rio de Janeiro</p>
                                <p>2.900,00</p>
                                <div>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </ItemCart>
                            <ItemCart>
                                <img src={img} alt="Viagens" />
                                <p>Rio de Janeiro</p>
                                <p>2.900,00</p>
                                <div>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </ItemCart>
                            <ItemCart>
                                <img src={img} alt="Viagens" />
                                <p>Rio de Janeiro</p>
                                <p>2.900,00</p>
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
                                    <h4>Taxas:<span>0,00</span></h4>
                                </article>
                                <h4>Valor Total:<span>5.000,00</span></h4>
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