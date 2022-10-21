export interface AccounPlan {
  id: string;
  name: string;
  description: string;
  isAnnualPlan: boolean;
  leadLimit: number;
  websiteLimit: number;
  userLimit: number;
  priceARS: number;
  priceUSD: number;
  priceBRL: number;
  priceListARS: number;
  priceListUSD: number;
  priceListBRL: number;
  integrationsAllowed: boolean;
  imageUrl: string;
  upgradePrice: number;
  planRemainingTime: PlanRemainingTime;
}

export interface PlanRemainingTime {
  number: string;
  translationKey: string;
}
