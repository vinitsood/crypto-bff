import axios from "axios";
import { periodIdMap } from "../metaData";
import { Asset, OpenHighLowCloseVolumeSet } from "./coinApiTypes";
import { mockedAssets } from "./mock/assets";
import { mockedOpenHighLowCloseVolumeSeries } from "./mock/ohlcv";

// axios.defaults.baseURL = "https://rest-sandbox.coinapi.io/";
axios.defaults.baseURL ="https://rest.coinapi.io/"
axios.defaults.headers.common["X-CoinAPI-Key"] = process.env.X_COINAPI_KEY;

export const getAssets: (
  assetIds: string,
  useMock?: boolean
) => Promise<Asset[]> = async (assetIds, useMock = false) => {
  if (useMock) {
    return mockedAssets;
  }
  const { data } = await axios.get<Asset[]>(
    `/v1/assets?filter_asset_id=${assetIds}`
  );

  return data;
};

export const getOpenHighLowCloseVolume: (
  assetId: string,
  intervalId: string,
  useMock?: boolean
) => Promise<OpenHighLowCloseVolumeSet[]> = async (
  assetId,
  intervalId,
  useMock = false
) => {
  if (useMock) {
    return mockedOpenHighLowCloseVolumeSeries;
  }

  const { periodId, limit } = periodIdMap[intervalId];

  const { data } = await axios.get<OpenHighLowCloseVolumeSet[]>(
    `v1/ohlcv/GEMINI_SPOT_${assetId}_USD/latest?period_id=${periodId}&limit=${limit}`
  );

  return data;
};
