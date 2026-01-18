import { View } from 'react-native';

import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppCard } from '@/components/atomic/atoms/app-card';
import { AppText } from '@/components/atomic/atoms/app-text';
import { styles } from '@/components/atomic/organisms/home-hero.style';

type HomeHeroProps = {
  title: string;
  subtitle: string;
  actionLabel: string;
  onPress: () => void;
};

export const HomeHero = ({ title, subtitle, actionLabel, onPress }: HomeHeroProps) => (
  <AppCard style={styles.card}>
    <View style={styles.content}>
      <AppText variant="title">{title}</AppText>
      <AppText variant="body" style={styles.subtitle}>
        {subtitle}
      </AppText>
    </View>
    <AppButton label={actionLabel} onPress={onPress} />
  </AppCard>
);
