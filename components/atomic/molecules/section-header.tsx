import { View } from 'react-native';

import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppText } from '@/components/atomic/atoms/app-text';
import { styles } from '@/components/atomic/molecules/section-header.style';

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export const SectionHeader = ({ title, actionLabel, onPressAction }: SectionHeaderProps) => (
  <View style={styles.container}>
    <AppText variant="subtitle">{title}</AppText>
    {actionLabel && onPressAction ? (
      <AppButton label={actionLabel} variant="ghost" onPress={onPressAction} />
    ) : null}
  </View>
);
