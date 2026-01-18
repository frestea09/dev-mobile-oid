import { Alert, View } from 'react-native';
import { useRouter } from 'expo-router';

import { ScreenLayout } from '@/components/atomic/templates/screen-layout';
import { AppText } from '@/components/atomic/atoms/app-text';
import { AppButton } from '@/components/atomic/atoms/app-button';
import { SectionHeader } from '@/components/atomic/molecules/section-header';
import { AppointmentList } from '@/components/atomic/organisms/appointment-list';
import { DoctorCard } from '@/components/atomic/molecules/doctor-card';
import { labels } from '@/constants/labels';
import { doctors } from '@/constants/demo-data';
import { styles } from '@/app/(tabs)/appointments.style';

export default function AppointmentsScreen() {
  const router = useRouter();
  const featuredDoctor = doctors[0];

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <AppText variant="title">{labels.appointments.title}</AppText>
        <AppText variant="body">{labels.appointments.subtitle}</AppText>
      </View>

      <View style={styles.section}>
        <SectionHeader title={labels.home.appointmentsTitle} />
        <AppointmentList
          onPressItem={() => Alert.alert(labels.appointments.reschedule, labels.home.tagline)}
        />
      </View>

      <View style={styles.section}>
        <SectionHeader title={labels.booking.chooseDoctor} />
        <DoctorCard
          name={featuredDoctor.name}
          specialty={featuredDoctor.specialty}
          location={featuredDoctor.location}
          rating={featuredDoctor.rating}
          actionLabel={labels.actions.chatDoctor}
          onPress={() => Alert.alert(labels.actions.chatDoctor, featuredDoctor.name)}
        />
      </View>

      <View style={styles.section}>
        <SectionHeader title={labels.actions.bookAppointment} />
        <AppText variant="body">{labels.booking.subtitle}</AppText>
        <AppButton
          label={labels.common.continue}
          variant="secondary"
          onPress={() => router.push('/book-appointment')}
        />
      </View>
    </ScreenLayout>
  );
}
