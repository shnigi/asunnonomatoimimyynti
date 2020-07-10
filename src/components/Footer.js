import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
        <footer className="site-footer">
          <div className="container">
            <div className="columns">
            <div className="column is-half">
                <h6>Asunnon omatoimimyynti</h6>
                <p className="text-justify">
                © Asunnon omatoimimyynti RA. Kaikki oikeudet pidätetään.
                <Link to="/rekisteriseloste"> Rekisteriselosteemme löydät tästä.</Link>
                </p>
              </div>

            <div className="column">
                <h6>Yhteystiedot</h6>
                <ul className="footer-links">
                <li><strong>Asunnon omatoimimyynti</strong></li>
                <li>Ralf Ahlskog</li>
                <li>info@asunnonomatoimimyynti.fi</li>
                <li>Puh. 0400870484</li>
                <li>Pohjantähdentie 42B</li>
                <li>00740 Helsinki</li>
                <li>Y-tunnus 2262313-7</li>
                </ul>
              </div>

            <div className="column">
                <h6>Linkit</h6>
                <ul className="footer-links">
                <li>
                  <Link to="/" activeClassName="footerActiveLink">
                    Etusivu
                  </Link>
                </li>
                <li>
                  <Link to="/palvelukuvaus" activeClassName="footerActiveLink">
                    Palvelukuvaus
                  </Link>
                </li>
                <li>
                  <Link to="/referenssit" activeClassName="footerActiveLink">
                    Referenssit
                  </Link>
                </li>
                <li>
                  <Link to="/hinnasto" activeClassName="footerActiveLink">
                    Hinnasto
                  </Link>
                </li>
                <li>
                  <Link to="/blogi" activeClassName="footerActiveLink">
                    Blogi
                  </Link>
                </li>
                <li>
                  <Link to="/otayhteytta" activeClassName="footerActiveLink">
                    Ota yhteyttä
                  </Link>
                </li>
                <li><Link to="/rekisteriseloste"> Rekisteriseloste</Link></li>
                </ul>
              </div>
            </div>
        </div>
        </footer>
    )
  }
}

export default Footer;
