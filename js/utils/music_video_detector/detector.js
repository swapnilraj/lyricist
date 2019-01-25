/**
 * List of detectors
 *  - Music icon detector
 */

import { getPrediction as icon_getPrediction } from './verified_artist_detector';

const sortPredictions = predictions =>
  predictions.sort((fst, snd) => snd - fst);

const getPrediction = async () =>
  Promise.all(
    [ icon_getPrediction(), ]
  )
  .then(sortPredictions)
  .then(predictions => predictions[0])
  .catch(_ => 0);

export default getPrediction;
