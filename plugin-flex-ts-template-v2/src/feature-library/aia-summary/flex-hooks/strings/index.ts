import esMX from './es-mx.json';
import ptBR from './pt-br.json';

export enum StringTemplates {
  SUMMARY_TITLE = 'PSVirtualAgentSummaryTitle',
}

export const stringHook = () => ({
  'en-US': {
    [StringTemplates.SUMMARY_TITLE]: 'Summary of the conversation with the Virtual Assistant:',
  },
  'es-MX': esMX,
  'pt-BR': ptBR,
});
