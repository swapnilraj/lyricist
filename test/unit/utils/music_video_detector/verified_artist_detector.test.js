import { getPrediction } from
  '../../../../js/utils/music_video_detector/verified_artist_detector.js';

import { div } from './dom_utils';

/**
 * Test the normal behaviour of the verified artist icon detector.
 */
test('Verified artist icon exists', () => {
  document.body.innerHTML =
    div({
      innerHTML: div({ 
        className: 'badge-style-type-verified-artist'
      }),
      id: 'owner-container'
    });

  return getPrediction().then(p => expect(p).toEqual(0.80));
});

/**
 * Test the behaviour of detector when the verified icon does not exist, the
 * prediction should be no confidence.
 */
test('Verified artist icon does not exist', () => {
  document.body.innerHTML = div({id: 'owner-container'});
  return getPrediction().then(p => expect(p).toEqual(0));
});

/**
 * Test the behaviour of detector on a non-video pagem the prediction should be
 * no confidenceverified artist icon.
 */
test.skip('Owner container does not exist', () => {
  // Override the default timeout for async functions, this is done to account
  // for the timeout of awaitElement which is 30s.
  jest.setTimeout(35000);
  document.body.innerHTML = div({className: 'badge-style-type-verified-artist'});
  return getPrediction().then(p => expect(p).toEqual(0));
});
