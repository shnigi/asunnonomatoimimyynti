import React from 'react'
import PropTypes from 'prop-types'
import { HinnastoPageTemplate } from '../../templates/hinnasto'

const HinnastoPagePreview = ({ entry, widgetFor }) => (
  <HinnastoPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

HinnastoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HinnastoPagePreview
