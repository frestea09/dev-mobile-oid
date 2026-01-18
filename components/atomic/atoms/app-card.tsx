import { View, ViewProps } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { styles } from '@/components/atomic/atoms/app-card.style';

type AppCardProps = ViewProps;

export const AppCard = ({ style, ...props }: AppCardProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View
      {...props}
      style={[styles.base, { backgroundColor: colors.background }, styles.shadow, style]}
    />
  );
};
