import { getAssets, getOpenHighLowCloseVolume } from "./coinapi";
import { assetIds, periodIds } from "./metaData";
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
      args: { assetId: string; periodId: string }
    ) => {
      const ohlcv = await getOpenHighLowCloseVolume(
        args.assetId,
        args.periodId,
        USE_MOCK
      );
      return ohlcv;
    },
    availableAssetIds: () => assetIds,
    availablePeriodIds: () => periodIds,
  },
};
