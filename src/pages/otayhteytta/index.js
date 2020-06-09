import React from 'react'
import { navigate } from 'gatsby-link'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import logo from '../../img/logo.png'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="wrapper">
            <div className="inner split">
            <section>
              <h2>Yhteystiedot</h2>
              <p><strong>Asunnon omatoimimyynti</strong></p>
              <p>Ralf Ahlskog</p>
              <p>Pohjantähdentie 42 B</p>
              <p>00740 Helsinki</p>
              <p>ralf.ahlskog@rac.fi</p>
              <p>Puh. 0400870484</p>
              <p>Y-tunnus 2262313-7</p>
              <p>Palvelu on saatavissa vain Uudellamaalla. Muualla sijaitsevista kohteista voidaan neuvotella erikseen.</p>
              <img src={logo} alt="logo" className="margin-top-large"/>
            </section>
            <section id="yhteyslomake">
              <h2>Ota yhteyttä</h2>
              <form
                name="contact"
                method="post"
                className="alt"
                action="/otayhteytta/lahetetty/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Nimi
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'address'}>
                    Osoite
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'address'}
                      onChange={this.handleChange}
                      id={'address'}
                      required={false}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'phone'}>
                    Puhelinnumero
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'phone'}
                      onChange={this.handleChange}
                      id={'phone'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Sähköposti
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'apartmentType'}>
                    Kyseessä on
                  </label>
                  <div className="control">
                    <input type="radio" name="tyyppi" value="yksio" onChange={this.handleChange}/>
                    <label htmlFor="yksio">Yksiö</label><br />
                    <input type="radio" name="tyyppi" value="kaksio" onChange={this.handleChange}/>
                    <label htmlFor="kaksio">Kaksio</label><br />
                    <input type="radio" name="tyyppi" value="kolmio" onChange={this.handleChange}/>
                    <label htmlFor="kolmio">Kolmio</label><br />
                    <input type="radio" name="tyyppi" value="suurempi tai jokin muu" onChange={this.handleChange}/>
                    <label htmlFor="suurempi">Suurempi tai jokin muu asuntotyyppi</label><br />
                    <input type="radio" name="tyyppi" value="yhteydenotto" onChange={this.handleChange}/>
                    <label htmlFor="yhteydenotto">yhteydenotto</label>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'available'}>
                    Olen parhaiten tavoitettavissa:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'available'}
                      onChange={this.handleChange}
                      id={'available'}
                      required={false}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Vapaamuotoinen viesti
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={false}
                    />
                  </div>
                </div>
                <div className="field">
                  <ul className="actions action-buttonwrapper">
                    <li><p>Lähettämällä lomakkeen hyväksyt <Link to="/rekisteriseloste">tietosuojalausekkeen</Link></p>
                    </li>
                    <li><button className="button" type="submit">Lähetä</button></li>
                  </ul>
                </div>
              </form>
            </section>
          </div>
        </section>
      </Layout>
    )
  }
}
