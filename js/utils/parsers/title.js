import bugsnag from '@bugsnag/js';

import { bgsngBaseConfig, FAIL_PRIORITIES } from '../bugsnag';

const TITLE_SPLIT_REGEX = /(.*)(\||\/\/\/|-|:)(.*)(\s-\sYouTube)$/;
const BRACKET_REGEX = /(\(|\[|\{).*(\}|\]|\))/;
const FEAT_REGEX = /(\sfeat|\sft.).*/i;
const OFFICIAL_REGEX = /(\sofficial video).*/i;

const bgsngConfig = {
  ...bgsngBaseConfig,
  metadata: {
    video_title: getTitle,
    priority: FAIL_PRIORITIES.NO_TAG,
  }
}

const getTitle = () => document.title;

/**
 * @param {string} title
 * @returns {metadata} Metadata for the lyrics provider
 */
const sandTitle = title => {
  try {
    const matches = title
      .match(TITLE_SPLIT_REGEX)
      .map(s => s.trim()
        .replace(BRACKET_REGEX, "")
        .replace(FEAT_REGEX, "")
        .replace(OFFICIAL_REGEX, "")
      );
  } catch (err) {
    if (err instanceof TypeError) {
      // notify bugsnag of the error with the metadata decided.
    }
  }
  return {
    artist: matches[1],
    title: matches[3],
  };
};


/**
 * @returns {metadata} Metadata for the lyrics provider
 */
export const getMetadata = () => sandTitle(getTitle());
