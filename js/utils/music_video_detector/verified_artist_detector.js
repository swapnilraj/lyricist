import awaitElement from '../awaitElement';

/**
 * VERIFIED_ARTIST_ICON_CONFIDENCE represents the probability of a video page
 * being a music video. The current confidence is chosen from personal
 * experience while browsing videos.
 *
 * The confidence level is not 100, since there are some YouTube channels which
 * are not solely music channels that have the music indicator.
 * Example KSIOlajidebt
 *
 * Design Document on this module:
 *  https://gist.github.com/swapnilraj/04d2ddcc88ab1ea38ebefa4cb8d485b7
 */
const NO_CONFIDENCE = 0;
const VERIFIED_ARTIST_ICON_CONFIDENCE = 0.80;
const VERIFIED_ARTIST_ICON_SELECTOR = '.badge-style-type-verified-artist';
const OWNER_CONTAINER = '#owner-container';

/** The prediction is the detector's confidence in saying if the video is a
 * music video. A confidence of 0 signifies that the detector thinks that the
 * video is not a music video.
 */
export const getPrediction = async () =>
  awaitElement(OWNER_CONTAINER)
    .then(ownerContainer =>
      ownerContainer.querySelector(VERIFIED_ARTIST_ICON_SELECTOR))
    .then(musicIcon => {
      if (!musicIcon) throw NO_CONFIDENCE;
      return musicIcon;
      })
    .then(_ => VERIFIED_ARTIST_ICON_CONFIDENCE)
    .catch(_ => NO_CONFIDENCE);
