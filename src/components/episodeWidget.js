import React from 'react'
import PropTypes from 'prop-types'

const EpisodeWidget = ({ episodeId }) => (
    <iframe
        frameborder="0"
        height="200px"
        scrolling="no"
        seamless
        src={"https://embed.simplecast.com/" + episodeId}
        width="100%">
    </iframe>
)

EpisodeWidget.propTypes = {
  episodeId: PropTypes.string
}

export default EpisodeWidgets