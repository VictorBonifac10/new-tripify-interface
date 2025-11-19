import styled from "styled-components";

export const Wrap = styled.div`

  width: 100%;
  padding: 30px;

  /* container do swiper (geralmente tem .swiper class) */
  .offer-swiper {
    width: 100%;
    padding-bottom: 50px;
  }

  /* ajuste importante: deixe o wrapper usar alinhamento correto */
  .offer-swiper .swiper-wrapper {
    /* garante que as "linhas" do grid iniciem no topo e não estiquem verticalmente */
    align-content: start;
    /* casos extremos: permite que o swiper calcule as colunas/linhas corretamente */
  }

  /* Opcional: pager dots centralizados */
  .offer-swiper .swiper-pagination {
    margin-top: 12px;
  }
`;
