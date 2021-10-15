export const assetIds = [
  "BTC",
  "ADA",
  "DASH",
  "EOS",
  "ETH",
  "ETC",
  "IOTA",
  "LSK",
  "LTC",
  "XMR",
  "NEM",
  "OMNI",
  "QTUM",
  "XRP",
  "XLM",
  "ZEC",
];

export const intervalIds = ["DAY", "WEEK", "MONTH", "YEAR"];

export const periodIdMap = {
  DAY: { periodId: "1HRS", limit: 24 },
  WEEK: { periodId: "1DAY", limit: 7 },
  MONTH: { periodId: "1DAY", limit: 31 },
  YEAR: { periodId: "7DAY", limit: 52 },
};
