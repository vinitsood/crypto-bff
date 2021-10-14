import axios from "axios";
import { Asset, OpenHighLowCloseVolumeSet } from "./coinApiTypes";
import { mockedAssets } from "./mock/assets";
import { mockedOpenHighLowCloseVolumeSeries } from "./mock/ohlcv";

axios.defaults.baseURL = "https://rest-sandbox.coinapi.io/";
axios.defaults.headers.common["X-CoinAPI-Key"] = "MOCKED-KEY";

export const getAssets: (useMock?: boolean) => Promise<Asset[]> = async (
  useMock = false
) => {
  if (useMock) {
    return mockedAssets;
  }
  const { data } = await axios.get<Asset[]>(
    "/v1/assets?filter_asset_id=BTC,ETH"
  );

  return data;
};

export const getOpenHighLowCloseVolume: (
  useMock?: boolean
) => Promise<OpenHighLowCloseVolumeSet[]> = async (useMock = false) => {
  if (useMock) {
    return mockedOpenHighLowCloseVolumeSeries;
  }

  const { data } = await axios.get<OpenHighLowCloseVolumeSet[]>(
    "v1/ohlcv/GEMINI_SPOT_BTC_USD/latest?period_id=1MIN"
  );

  return data;
};
