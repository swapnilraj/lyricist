import awaitElement from '../awaitElement';

/**
 * MUSIC_ICON_CONFIDENCE represents the probability of a video page being a
 * music video. The current confidence is chosen from personal experience while
 * browsing videos.
 *
 * The confidence level is not 100, since there are some YouTube channels which
 * are not solely music channels that have the music indicator.
 * Example KSIOlajidebt
 */
const MUSIC_ICON_CONFIDENCE = 0.80;
const MUSIC_ICON_SELECTOR = 'badge-style-type-verified-artist';

export const getPrediction = () => {
  const musicIcon = await awaitElement(MUSIC_ICON_SELECTOR);
  return [!!musicIcon, musicIcon ? MUSIC_ICON_CONFIDENCE : 0];
};
