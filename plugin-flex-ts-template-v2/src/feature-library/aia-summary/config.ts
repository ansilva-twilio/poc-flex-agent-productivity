import { getFeatureFlags } from '../../utils/configuration';
import AiaSummaryConfig from './types/ServiceConfiguration';

const { enabled = false } = (getFeatureFlags()?.features?.aia_summary as AiaSummaryConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};
