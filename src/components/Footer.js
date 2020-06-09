import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="copyright">
          © Asunnon omatoimimyynti RA. Kaikki oikeudet pidätetään.
          Kuvat: <a href="http://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>.
          Toteutus: <a href="https://nikiahlskog.com" target="_blank" rel="noreferrer">Niki Ahlskog</a>.
				</div>
      </footer>
    )
  }
}

export default Footer
