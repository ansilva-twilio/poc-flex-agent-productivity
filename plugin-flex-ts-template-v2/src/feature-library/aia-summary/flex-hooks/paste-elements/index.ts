import { PasteCustomCSS } from '@twilio-paste/customization';

export const pasteElementHook = {
  SUMMARY_CALLOUT: {
    borderBottom: 'solid 1px #ccc',
    borderRadius: '0px',
  },
  SUMMARY_CALLOUT_HEADING: {
    fontWeight: 'bold',
  },
} as { [key: string]: any };
