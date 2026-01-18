import { View } from 'react-native';

import { AppBadge } from '@/components/atomic/atoms/app-badge';
import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppCard } from '@/components/atomic/atoms/app-card';
import { AppText } from '@/components/atomic/atoms/app-text';
import { styles } from '@/components/atomic/molecules/doctor-card.style';

type DoctorCardProps = {
  name: string;
  specialty: string;
  location: string;
  rating: number;
  actionLabel: string;
  onPress: () => void;
};

export const DoctorCard = ({
  name,
  specialty,
  location,
  rating,
  actionLabel,
  onPress,
}: DoctorCardProps) => (
  <AppCard style={styles.card}>
    <View style={styles.header}>
      <AppText variant="subtitle">{name}</AppText>
      <AppBadge label={specialty} />
    </View>
    <View style={styles.meta}>
      <AppText variant="caption">{location}</AppText>
      <AppText variant="caption">⭐ {rating.toFixed(1)}</AppText>
    </View>
    <AppButton label={actionLabel} variant="secondary" onPress={onPress} />
  </AppCard>
);
