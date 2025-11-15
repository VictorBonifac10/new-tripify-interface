import { packages } from '../../data/packages.js'

import { CardGrid, Card, CardTitle, CardBanner, Mask } from './styles'

export function ServicesCards() {
  return (

    <CardGrid>
      {packages.map(data => (
        <Card>
          <CardBanner>
            <img src={data.url} alt="Viagens Nacionais" />
            <Mask />
          </CardBanner>
          <CardTitle>
            <i className={data.icon}></i>
            <h4>{data.description}</h4>
          </CardTitle>
        </Card>
      ))}
    </CardGrid>
  )
}
