export type HostConfig = {
  query: string;
};

export type HostConfigs = Record<string, HostConfig | undefined>;

export const hostConfigs: HostConfigs = {
  "booth.pm": {
    query: '.item-search input[type="text"]',
  },
  "chromewebstore.google.com": {
    query: '.item-search input[type="text"]',
  },
  "mail.google.com": {
    query: '#aso_search_form_anchor input[type="text"]',
  },
  "nitori-net.jp": {
    query: "#productSuggestSearchBoxInput",
  },
  "open.spotify.com": {
    query: 'form[role="search"] input[type="search"]',
  },
  "soundhouse.co.jp": {
    query: "#search",
  },
  "www.amazon.co.jp": {
    query:
      'input[type="text"][name="field-keywords"][id="twotabsearchtextbox"]',
  },
  "www.amazon.com": {
    query:
      'input[type="text"][name="field-keywords"][id="twotabsearchtextbox"]',
  },
  "www.yodobashi.com": {
    query: 'input[type="text"][name="word"][id="getJsonData"]',
  },
};
