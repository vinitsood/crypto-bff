import { getAssets, getOpenHighLowCloseVolume } from "../api/coinapi";
import { assetIds, intervalIds } from "../metaData";
const USE_MOCK = false;

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    assets: async (_: object, args: { assetIds: string }) => {
      const assets = await getAssets(args.assetIds, USE_MOCK);
      return assets;
    },
    openHighLowCloseVolumes: async (
      _: object,
      args: { assetId: string; intervalId: string }
    ) => {
      const ohlcv = await getOpenHighLowCloseVolume(
        args.assetId,
        args.intervalId,
        USE_MOCK
      );
      return ohlcv;
    },
    availableAssetIds: () => assetIds,
    availableIntervalIds: () => intervalIds,
  },
};
