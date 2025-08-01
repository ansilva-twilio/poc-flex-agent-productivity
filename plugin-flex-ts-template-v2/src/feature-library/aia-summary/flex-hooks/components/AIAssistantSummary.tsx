import * as Flex from '@twilio/flex-ui';

import { FlexComponent } from '../../../../types/feature-loader';
import AIAssistantSummary from '../../custom-components/AIAssistantSummary/AIAssistantSummary';

export const componentName = FlexComponent.TaskCanvasHeader;
export const componentHook = function addAIAssistantSummary(flex: typeof Flex, manager: Flex.Manager) {
    const options: Flex.ContentFragmentProps = { sortOrder: -1 };
    flex.TaskCanvas.Content.add(
        <AIAssistantSummary key="AIAssistantVoiceSummary" />,
        options
      );
};
