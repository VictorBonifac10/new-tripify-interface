import { Footer, PackageCard, Title, TopBanner } from "../../components";
import { PackagesContainer, GridCard, Aside } from "./styles";

import videoBanner2 from '../../assets/videoBanner2.mp4'
import { useState } from "react";
import { packages } from "../../data/packages";

export function Pacotes() {

    const [packageCard, setPackageCard] = useState('Todos');

    const changeStatePackageCard = (packageCard) => {
        setPackageCard(packageCard);
    }

    return (
        <>
            <TopBanner
                variantFirstDescription="Busque pelo pacote de viagem perfeito e economize até 50%"
                variantSecondDescription="As opções são ilimitadas e você pode curtir do seu jeito, com flexibilidade e um atendimento personalizado!"
                video={videoBanner2} />
            <PackagesContainer>
                <Title subtitle="Adicione ao seu carrinho para um orçamento mais detalhado.">Pacotes</Title>
                <section>
                    <Aside>
                        <button onClick={() => changeStatePackageCard('Todos')}>Todos</button>
                        <button onClick={() => changeStatePackageCard('Viagens Nacionais')}>Viagens Nacionais</button>
                        <button onClick={() => changeStatePackageCard('Viagens Internacionais')}>Viagens Internacionais</button>
                        <button onClick={() => changeStatePackageCard('Cruzeiros')}>Cruzeiros</button>
                        <button onClick={() => changeStatePackageCard('Resorts & Relax')}>Resorts & Relax</button>
                        <button onClick={() => changeStatePackageCard('Eventos e Festivais')}>Eventos e Festivais</button>
                        <button onClick={() => changeStatePackageCard('Pacotes para Casais')}>Pacotes para Casais</button>
                    </Aside>
                    <GridCard>
                        {packages
                            .filter(pkg => {
                                if (packageCard === 'Todos') return true;
                                return pkg.categorie === packageCard;
                            })
                            .map(pkg => (
                                <PackageCard
                                    key={pkg.id}
                                    Image={pkg.img}
                                    Destination={pkg.destination}
                                    Details={pkg.description}
                                    Price={pkg.price}
                                    Quantity={pkg.peopleQuantity} />
                            ))
                        }
                    </GridCard>
                </section>
            </PackagesContainer >
            <Footer />
        </>
    )
}