import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div class="copyright">
          © Asunnon omatoimimyynti RA. Kaikki oikeudet pidätetään. Kuvat: <a href="http://unsplash.com" target="_blank" rel="noopener">Unsplash</a>. Design: <a href="http://templated.co" target="_blank" rel="noopener">TEMPLATED</a>. Toteutus: <a href="https://nikiahlskog.com" target="_blank" rel="noopener">Niki Ahlskog</a>.
				</div>
      </footer>
    )
  }
}

export default Footer
