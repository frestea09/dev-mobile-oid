import { View, ViewProps } from 'react-native';

import { AppText } from '@/components/atomic/atoms/app-text';
import { styles } from '@/components/atomic/atoms/app-badge.style';

type AppBadgeProps = ViewProps & {
  label: string;
};

export const AppBadge = ({ label, style, ...props }: AppBadgeProps) => (
  <View {...props} style={[styles.base, style]}>
    <AppText variant="caption" style={styles.text}>
      {label}
    </AppText>
  </View>
);
