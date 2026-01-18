import { View } from 'react-native';

import { AppBadge } from '@/components/atomic/atoms/app-badge';
import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppCard } from '@/components/atomic/atoms/app-card';
import { AppText } from '@/components/atomic/atoms/app-text';
import { styles } from '@/components/atomic/molecules/appointment-card.style';
import { formatDateLabel } from '@/utils/formatters';

export type AppointmentCardProps = {
  serviceName: string;
  doctorName: string;
  date: string;
  time: string;
  location: string;
  statusLabel: string;
  actionLabel: string;
  onPress: () => void;
};

export const AppointmentCard = ({
  serviceName,
  doctorName,
  date,
  time,
  location,
  statusLabel,
  actionLabel,
  onPress,
}: AppointmentCardProps) => (
  <AppCard style={styles.card}>
    <View style={styles.header}>
      <AppText variant="subtitle">{serviceName}</AppText>
      <AppBadge label={statusLabel} />
    </View>
    <AppText variant="caption" style={styles.doctor}>
      {doctorName}
    </AppText>
    <View style={styles.meta}>
      <AppText variant="caption">{formatDateLabel(date)}</AppText>
      <AppText variant="caption">{time}</AppText>
      <AppText variant="caption">{location}</AppText>
    </View>
    <AppButton label={actionLabel} variant="secondary" onPress={onPress} />
  </AppCard>
);
