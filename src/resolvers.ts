import { AxiosResponse } from "axios";
import { getAssets, getOpenHighLowCloseVolume } from "./coinapi";
const USE_MOCK = true;

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    assets: async () => {
      const assets = await getAssets(USE_MOCK);
      return assets;
    },
    openHighLowCloseVolumes: async () => {
      const ohlcv = await getOpenHighLowCloseVolume(USE_MOCK);
      return ohlcv;
    },
  },
};
