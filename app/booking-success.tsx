import { View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { ScreenLayout } from '@/components/atomic/templates/screen-layout';
import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppCard } from '@/components/atomic/atoms/app-card';
import { AppText } from '@/components/atomic/atoms/app-text';
import { InfoRow } from '@/components/atomic/molecules/info-row';
import { labels } from '@/constants/labels';
import { getDoctorById, getServiceById } from '@/utils/appointments';
import { formatDateLabel } from '@/utils/formatters';
import { styles } from '@/app/booking-success.style';

export default function BookingSuccessScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    serviceId?: string;
    doctorId?: string;
    date?: string;
    time?: string;
  }>();

  const service = getServiceById(params.serviceId);
  const doctor = getDoctorById(params.doctorId);

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <AppText variant="title">{labels.success.title}</AppText>
        <AppText variant="body">{labels.success.message}</AppText>
      </View>

      <AppCard style={styles.card}>
        <InfoRow label={labels.booking.chooseService} value={service.name} />
        <InfoRow label={labels.booking.chooseDoctor} value={doctor.name} />
        <InfoRow
          label={labels.booking.chooseDate}
          value={params.date ? formatDateLabel(params.date) : ''}
        />
        <InfoRow label={labels.booking.chooseTime} value={params.time ?? ''} />
      </AppCard>

      <View style={styles.section}>
        <AppButton
          label={labels.success.viewAppointments}
          onPress={() => router.replace('/appointments')}
        />
        <AppButton label={labels.common.backHome} variant="secondary" onPress={() => router.push('/')} />
      </View>
    </ScreenLayout>
  );
}
