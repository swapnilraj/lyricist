export const bgsngBaseConfig = {
  apiKey: process.env.BUGSNAG_API_KEY,
  appVersion: process.env.VERSION,
  beforeSend: report => {
    report.stacktrace = report.stacktrace.map(fixStacktrace);
  },
};

export const fixStacktrace = frame => {
  frame.file = frame.file.replace(
    /chrome-extension:/g,
    'chrome_extension:'
  );
  return frame;
};

export const FAIL_PRIORITIES = {
  NO_TAG          : 400,
  TAG_WITH_DATA   : 300,
  TAG_WITHOUT_DATA: 200,
  MANUAL_REPORT   : 100,
};
