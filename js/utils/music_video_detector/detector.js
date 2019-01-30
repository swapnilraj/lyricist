/**
 * List of detectors
 *  - Verified artist icon detector
 */

import { getPrediction as icon_getPrediction } from './verified_artist_detector';

const sortPredictions = predictions =>
  predictions.sort((fst, snd) => snd - fst);

/**
 * Run all the predictors in the list of detectors asynchronously and choose
 * the prediction with the highest confidence as the final prediction.
 */
export const _getPrediction = detectorList =>
  Promise.all(detectorList)
    .then(sortPredictions)
    .then(predictions => predictions[0])
    .catch(_ => 0);

const getPrediction = () => _getPrediction([ icon_getPrediction(), ]);

export default getPrediction;
