import { getPrediction as icon_getPrediction } from
  '../../../../js/utils/music_video_detector/verified_artist_detector.js';

import getPrediction, { _getPrediction } from
  '../../../../js/utils/music_video_detector/detector.js';

import { div } from './dom_utils';

/**
 * Test the expected behaviour of the verified artist icon detector, when the
 * verified artist icon exists.
 */
test('Verified artist icon exists', () => {
  document.body.innerHTML =
    div({
      innerHTML: div({ 
        className: 'badge-style-type-verified-artist'
      }),
      id: 'owner-container'
    });

  return getPrediction().then(p => expect(p).toEqual(0.8));
});

/**
 * Test the normal expected of the verified artist icon detector, when the
 * verified artist icon does not exist.
 */
test('Verified artist icon does not exist', () => {
  document.body.innerHTML =
    div({
      innerHTML: div({ 
        className: 'badge-style-type-verified'
      }),
      id: 'owner-container'
    });

  return getPrediction().then(p => expect(p).toEqual(0));
});

/**
 * Test the behaviour of the detector module with multiple detectors, the
 * module should always report the highest confidence.
 */
test('Highest confidence predictor should always be chosen', () => {
  document.body.innerHTML =
    div({
      innerHTML: div({ 
        className: 'badge-style-type-verified-artist'
      }),
      id: 'owner-container'
    });

  return _getPrediction([ icon_getPrediction(), Promise.resolve(1) ])
    .then(p => expect(p).toEqual(1));
});
