import { View } from 'react-native';

import { AppText } from '@/components/atomic/atoms/app-text';
import { styles } from '@/components/atomic/molecules/info-row.style';

type InfoRowProps = {
  label: string;
  value: string;
};

export const InfoRow = ({ label, value }: InfoRowProps) => (
  <View style={styles.row}>
    <AppText variant="caption" style={styles.label}>
      {label}
    </AppText>
    <AppText variant="body" style={styles.value}>
      {value}
    </AppText>
  </View>
);
