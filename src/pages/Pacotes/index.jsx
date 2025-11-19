import { PackageCard, Title, TopBanner } from "../../components";
import { PackagesContainer, GridCard, Aside } from "./styles";

import videoBanner2 from '../../assets/videoBanner2.mp4'
import { useEffect, useRef } from "react";

//import { useState } from "react";

//import { packages } from "../../data/packages";

export function Pacotes() {

    //const [packageCard, setPackageCard] = useState([]);

    //-------------------------------------------------
    // Function Nacionais() --> Busca por pacotes de viagens nacionais
    //-------------------------------------------------

    const btnRef = useRef();

    useEffect(() => {
        let btn = btnRef.current;
        btn.addEventListener('click', () => {
            console.log(btn.value);
        });

        return () => btn.removeEventListener('click', () => { });
    }, []);

    //if (packages.filter(data => data.categorie === 'Viagens Nacionais').map(item => (
    //    console.log(item.destination)
    //)));


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
                        <button ref={btnRef} value="todos">Todos</button>
                        <button value="nacionais">Viagens Nacionais</button>
                        <button value="internacios">Viagens Internacionais</button>
                        <button value="cruzeiros">Cruzeiros</button>
                        <button value="resorts">Resorts & Relax</button>
                        <button value="eventos">Eventos e Festivais</button>
                        <button value="casais">Pacotes para Casais</button>
                    </Aside>
                    <GridCard>
                        <PackageCard />
                    </GridCard>
                </section>
            </PackagesContainer >
        </>
    )
}