import React from 'react'
import Layout from '../../components/Layout'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout>
    <Helmet>
      <title>Viesti lähetetty - Asunnon omatoimimyynti RA</title>
    </Helmet>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Kiitos yhteydenotostasi!</h1>
          <p>Vastaamme sinulle mahdollisimman pian. Kun haluat tehdä asuntokaupat Asunnon omatoimimyynnin
              avustamana, lähetämme sinulle toimeksiantosopimuksen sähköpostiisi.</p>
              <p>Terveisin, Ralf Ahlskog - Asunnon Omatoimimyynti RA</p>
        </div>
      </div>
    </section>
  </Layout>
)
