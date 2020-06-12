import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'


export const RekisteriSelostePageTemplate = ({helmet}) => {
  return (
    <div>
      {helmet || ''}
    <section className="section">
      <div className="container">

          <h1>Rekisteriseloste</h1>
          <p>Henkilötietolain (523/1999) 10§:n mukainen rekisteriseloste.</p>

          <h2>1. Rekisterin pitäjä</h2>
          <ul class="gdpr-list">
            <li>Asunnon omatoimimyynti RA/RA Communications Oy</li>
            <li>Pohjantähdentie 42 B</li>
            <li>00740 Helsinki</li>
            <li>0400 870484, info@rac.fi</li>
          </ul>

          <h2>2. Yhteyshenkilö rekisteriä koskevissa asioissa</h2>
          <ul class="gdpr-list">
            <li>Ralf Ahlskog</li>
            <li>Pohjantähdentie 42 B</li>
            <li>00740 Helsinki</li>
            <li>0400 870484</li>
            <li>ralf.ahlskog@rac.fi</li>
          </ul>

          <h2>3. Rekisterin nimi</h2>
          <p>RA Communications Oy:n asiakas- ja markkinointirekisteri.</p>

          <h2>4. Henkilötietojen käsittelyn tarkoitus</h2>
          <p>
            Henkilötietoja käsitellään seuraavia tarkoituksia varten, näihin kuitenkaan tyhjentävästi rajoittumatta:
            myynnin ja markkinoinnin toimenpiteet, joiden tarkoituksena on uusasiakashankinta, olemassa olevien
            asiakassuhteiden hoito, yrityksen brändin ja tuotteiden markkinointi, myös suoramarkkinointi ja muut
            vastaavat markkinoinnin ja myynnin toimenpiteet, sekä suoramarkkinointikieltojen ylläpito.
          </p>

          <h2>5. Rekisterin tietosisältö</h2>
          <strong>Yksilöintitiedot</strong>
          <ul>
            <li>etu- ja sukunimi</li>
            <li>sähköposti</li>
            <li>puhelinnumero</li>
            <li>ip-osoitetieto tai muu tunniste</li>
          </ul>

          <strong>Muut tiedot</strong>
          <ul>
            <li>työnimike</li>
            <li>työnantaja/yritys ja sen yhteystiedot</li>
            <li>tiedot henkilön ilmoittamista markkinointiluvista ja -kielloista</li>
            <li>evästeiden ja muiden vastaavien tekniikoiden avulla kerätty profilointitieto</li>
            <li>käyttäytymiseen perustuvat tiedot</li>
          </ul>

          <h2>6. Säännönmukaiset tietolähteet</h2>
          <p>
            Rekisteriin tallennettavat tiedot kerätään pääasiassa rekisteröidyiltä itseltään RAC:n verkkosivujen kautta
            tai ostetaan kaupallisilta rekistereiden ylläitäjiltä. Henkilön tietoja voidaan myös lisätä rekisteriin
            puhelimitse, sähköpostitse tai muuta kautta tapahtuneen vuorovaikutuksen seurauksena.
          </p>
          <p>
            Käyttäytymiseen perustuvaa tietoa kerätään RAC:n verkkosivujen, sähköpostien ja sosiaalisen median
            kanavien kautta evästeiden ja muiden vastaavien tekniikoiden avulla. Rekisterissä olevia tietoja voidaan
            päivittää manuaalisesti ja kerätä myös julkisista rekistereistä.
          </p>
          <h2>7. Tietojen säännönmukaiset luovutukset</h2>
          <p>
            Emme luovuta rekisterin tietoja kolmansille osapuolille.
            Tietoja saatetaan kuitenkin luovuttaa, mikäli palvelun toteuttaminen sitä edellyttää esimerkiksi
            yhteistyössä järjestetyn tapahtuman yhteydessä ja ainoastaan henkilölle, joka käsittelee tietoja
            vastuullisesti.
          </p>
          <h2>8. Tietojen siirto EU:n tai ETA:n ulkopuolelle</h2>
          <p>Tietoja ei siirretä EU:n tai ETA:n ulkopuolelle.</p>
          <h2>9. Rekisterin suojauksen periaatteet</h2>
          <p>
            RAC pitää huolen omista käyttäjätunnuksistaan ja salasanoistaan niin, ettei ulkopuolisilla ole pääsyä
            RAC:n tiedostoihin.</p>
          <h2>10. Tarkastusoikeus</h2>
          <p>
            Jokaisella on oikeus tarkastaa rekisterissä olevat tietonsa. Jos tiedoissa on virheitä, rekisteröity voi vaatia
            virheen korjaamista. Tarkastus- ja korjausoikeutta koskevat yhteydenotot tulee tehdä kirjallisesti ja
            allekirjoitettuna tai sähköpostitse ja osoittaa kohdassa 2 mainitulle yhteyshenkilölle. Tarkastuspyynnön
            voi tehdä maksutta kerran vuodessa, ja niihin vastataan viimeistään kolmen kuukauden kuluttua
            pyynnön esittämisestä.</p>
          <p>
            Sähköpostimarkkinoinnissa vastaanottaja voi milloin tahansa poistaa tietonsa rekisteristä käyttämällä
            jokaisessa viestissä olevaa ”Peruuta tilaus”-toimintoa, tai lähettämällä poistopyyntö sähköpostilla
            rekisterin ylläpitäjän yhteyshenkilölle.</p>
      </div>
    </section>
    </div>
  )
}

const RekisteriSelostePage = () => {
  return (
    <Layout>
      <RekisteriSelostePageTemplate
        helmet={
          <Helmet>
            <title>Asunnon omatoimimyynti RA - Rekisteriseloste</title>
            <meta
              name="description"
              content="Rekisteriseloste"
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

export default RekisteriSelostePage

// export const RekisteriSelostePageQuery = graphql`
//   query RekisteriSelostePage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         description
//       }
//     }
//   }
// `
