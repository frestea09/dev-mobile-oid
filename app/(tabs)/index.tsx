import { Alert, View } from 'react-native';
import { useRouter } from 'expo-router';

import { ScreenLayout } from '@/components/atomic/templates/screen-layout';
import { AppText } from '@/components/atomic/atoms/app-text';
import { HomeHero } from '@/components/atomic/organisms/home-hero';
import { QuickActions } from '@/components/atomic/organisms/quick-actions';
import { SectionHeader } from '@/components/atomic/molecules/section-header';
import { ServicesList } from '@/components/atomic/organisms/services-list';
import { AppointmentList } from '@/components/atomic/organisms/appointment-list';
import { labels } from '@/constants/labels';
import { styles } from '@/app/(tabs)/index.style';

export default function HomeScreen() {
  const router = useRouter();

  const handleQuickAction = (actionId: string) => {
    if (actionId === 'act-book') {
      router.push('/book-appointment');
      return;
    }
    if (actionId === 'act-services') {
      router.push('/appointments');
      return;
    }
    Alert.alert(labels.actions.supportCenter, labels.home.tagline);
  };

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <AppText variant="subtitle">{labels.home.greeting}</AppText>
        <AppText variant="title">{labels.appName}</AppText>
        <AppText variant="body">{labels.home.tagline}</AppText>
      </View>

      <HomeHero
        title={labels.home.title}
        subtitle={labels.booking.subtitle}
        actionLabel={labels.actions.bookAppointment}
        onPress={() => router.push('/book-appointment')}
      />

      <View style={styles.section}>
        <SectionHeader title={labels.home.quickActionsTitle} />
        <QuickActions onPressAction={handleQuickAction} />
      </View>

      <View style={styles.section}>
        <SectionHeader
          title={labels.home.servicesTitle}
          actionLabel={labels.common.viewAll}
          onPressAction={() => router.push('/appointments')}
        />
        <ServicesList onPressService={(serviceId) => router.push(`/book-appointment?serviceId=${serviceId}`)} />
      </View>

      <View style={styles.section}>
        <SectionHeader
          title={labels.home.appointmentsTitle}
          actionLabel={labels.common.viewAll}
          onPressAction={() => router.push('/appointments')}
        />
        <AppointmentList onPressItem={() => router.push('/appointments')} />
      </View>
    </ScreenLayout>
  );
}
