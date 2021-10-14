import { OpenHighLowCloseVolumeSet } from "../coinApiTypes";

export const mockedOpenHighLowCloseVolumeSeries: OpenHighLowCloseVolumeSet[] =
  [
    {
      time_period_start: "2017-01-01T00:00:00.0000000Z",
      time_period_end: "2017-01-02T00:00:00.0000000Z",
      time_open: "2017-01-01T00:01:08.0000000Z",
      time_close: "2017-01-01T23:59:46.0000000Z",
      price_open: 966.34,
      price_high: 1005.0,
      price_low: 960.53,
      price_close: 997.75,
      volume_traded: 6850.59330859,
      trades_count: 7815,
    },
    {
      time_period_start: "2017-01-02T00:00:00.0000000Z",
      time_period_end: "2017-01-03T00:00:00.0000000Z",
      time_open: "2017-01-02T00:00:05.0000000Z",
      time_close: "2017-01-02T23:59:37.0000000Z",
      price_open: 997.75,
      price_high: 1032.0,
      price_low: 990.01,
      price_close: 1012.54,
      volume_traded: 8167.38103018,
      trades_count: 7871,
    },
  ];
