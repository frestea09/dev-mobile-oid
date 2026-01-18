import { Alert, View } from 'react-native';

import { ScreenLayout } from '@/components/atomic/templates/screen-layout';
import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppCard } from '@/components/atomic/atoms/app-card';
import { AppText } from '@/components/atomic/atoms/app-text';
import { InfoRow } from '@/components/atomic/molecules/info-row';
import { labels } from '@/constants/labels';
import { styles } from '@/app/(tabs)/profile.style';

export default function ProfileScreen() {
  return (
    <ScreenLayout>
      <View style={styles.header}>
        <AppText variant="title">{labels.profile.title}</AppText>
        <AppText variant="body">{labels.profile.subtitle}</AppText>
      </View>

      <AppCard style={styles.card}>
        <InfoRow label={labels.profile.membership} value={labels.profile.membershipLevel} />
        <InfoRow label={labels.profile.emailLabel} value="demo@ohealth.id" />
        <InfoRow label={labels.profile.phoneLabel} value="+62 812 3456 7890" />
      </AppCard>

      <View style={styles.section}>
        <AppButton
          label={labels.profile.editProfile}
          variant="secondary"
          onPress={() => Alert.alert(labels.profile.editProfile, labels.home.tagline)}
        />
        <AppButton
          label={labels.profile.notifications}
          variant="secondary"
          onPress={() => Alert.alert(labels.profile.notifications, labels.home.tagline)}
        />
        <AppButton
          label={labels.profile.paymentMethod}
          variant="secondary"
          onPress={() => Alert.alert(labels.profile.paymentMethod, labels.home.tagline)}
        />
      </View>
    </ScreenLayout>
  );
}
