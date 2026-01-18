import { View } from 'react-native';

import { AppBadge } from '@/components/atomic/atoms/app-badge';
import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppCard } from '@/components/atomic/atoms/app-card';
import { AppText } from '@/components/atomic/atoms/app-text';
import { styles } from '@/components/atomic/molecules/service-card.style';
import { formatCurrency } from '@/utils/formatters';

export type ServiceCardProps = {
  name: string;
  category: string;
  duration: string;
  price: number;
  rating: number;
  description: string;
  actionLabel: string;
  onPress: () => void;
};

export const ServiceCard = ({
  name,
  category,
  duration,
  price,
  rating,
  description,
  actionLabel,
  onPress,
}: ServiceCardProps) => (
  <AppCard style={styles.card}>
    <View style={styles.header}>
      <AppText variant="subtitle">{name}</AppText>
      <AppBadge label={category} />
    </View>
    <AppText variant="caption" style={styles.description}>
      {description}
    </AppText>
    <View style={styles.metaRow}>
      <AppText variant="caption">{duration}</AppText>
      <AppText variant="caption">⭐ {rating.toFixed(1)}</AppText>
      <AppText variant="caption">{formatCurrency(price)}</AppText>
    </View>
    <AppButton label={actionLabel} onPress={onPress} />
  </AppCard>
);
