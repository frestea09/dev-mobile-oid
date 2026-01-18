import { View } from 'react-native';

import { AppButton } from '@/components/atomic/atoms/app-button';
import { IconSymbol, type IconSymbolName } from '@/components/ui/icon-symbol';
import { labels } from '@/constants/labels';
import { quickActions } from '@/constants/demo-data';
import { styles } from '@/components/atomic/organisms/quick-actions.style';

type QuickActionsProps = {
  onPressAction: (actionId: string) => void;
};

const getLabel = (labelKey: string) => {
  const [section, key] = labelKey.split('.');
  if (section === 'actions' && key && key in labels.actions) {
    return labels.actions[key as keyof typeof labels.actions];
  }
  return labelKey;
};

export const QuickActions = ({ onPressAction }: QuickActionsProps) => (
  <View style={styles.container}>
    {quickActions.map((action) => (
      <AppButton
        key={action.id}
        label={getLabel(action.labelKey)}
        variant="secondary"
        onPress={() => onPressAction(action.id)}
        leading={
          <IconSymbol name={action.icon as IconSymbolName} size={18} color="#0a7ea4" />
        }
        style={styles.button}
      />
    ))}
  </View>
);
