export interface Asset {
  asset_id: string;
  name: string;
  type_is_crypto: number;
  price_usd: number;
  id_icon: string;
  [others: string]: any;
}

export interface OpenHighLowCloseVolumeSet {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  price_open: number;
  price_high: number;
  price_low: number;
  price_close: number;
  volume_traded: number;
  trades_count: number;
}
