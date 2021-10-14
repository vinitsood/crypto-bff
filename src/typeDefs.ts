import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Asset {
    asset_id: String!
    name: String!
    type_is_crypto: Int!
    price_usd: Float!
    id_icon: String!
    volume_1day_usd: Float!
  }

  type OpenHighLowCloseVolume {
    time_period_start: String!
    time_period_end: String!
    time_open: String!
    time_close: String!
    price_open: Float!
    price_high: Float!
    price_low: Float!
    price_close: Float!
    volume_traded: Float!
    trades_count: Int!
  }

  type Query {
    hello: String
    assets: [Asset!]!
    openHighLowCloseVolumes: [OpenHighLowCloseVolume!]!
    availableAssetIds: [String!]!
    availablePeriodIds: [String!]!
  }
`;
