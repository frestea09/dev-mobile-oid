import { Pressable, TextInput, View } from 'react-native';
import { useMemo, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { ScreenLayout } from '@/components/atomic/templates/screen-layout';
import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppText } from '@/components/atomic/atoms/app-text';
import { SectionHeader } from '@/components/atomic/molecules/section-header';
import { labels } from '@/constants/labels';
import { bookingDates, bookingTimes, doctors, services } from '@/constants/demo-data';
import { getDateByValue, getDoctorById, getServiceById, getTimeByValue } from '@/utils/appointments';
import { styles } from '@/app/book-appointment.style';

export default function BookAppointmentScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ serviceId?: string }>();

  const [selectedServiceId, setSelectedServiceId] = useState(
    params.serviceId ?? services[0].id
  );
  const [selectedDoctorId, setSelectedDoctorId] = useState(doctors[0].id);
  const [selectedDateValue, setSelectedDateValue] = useState(bookingDates[0].value);
  const [selectedTimeValue, setSelectedTimeValue] = useState(bookingTimes[0].value);
  const [notes, setNotes] = useState('');

  const selectedService = useMemo(
    () => getServiceById(selectedServiceId),
    [selectedServiceId]
  );
  const selectedDoctor = useMemo(
    () => getDoctorById(selectedDoctorId),
    [selectedDoctorId]
  );
  const selectedDate = useMemo(
    () => getDateByValue(selectedDateValue),
    [selectedDateValue]
  );
  const selectedTime = useMemo(
    () => getTimeByValue(selectedTimeValue),
    [selectedTimeValue]
  );

  const handleConfirm = () => {
    router.push({
      pathname: '/booking-success',
      params: {
        serviceId: selectedService.id,
        doctorId: selectedDoctor.id,
        date: selectedDate.value,
        time: selectedTime.value,
      },
    });
  };

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <AppText variant="title">{labels.booking.title}</AppText>
        <AppText variant="body">{labels.booking.subtitle}</AppText>
      </View>

      <View style={styles.section}>
        <SectionHeader title={labels.booking.chooseService} />
        <View style={styles.options}>
          {services.map((service) => {
            const isActive = selectedServiceId === service.id;
            return (
              <Pressable
                key={service.id}
                onPress={() => setSelectedServiceId(service.id)}
                style={[styles.optionButton, isActive && styles.optionButtonActive]}>
                <AppText
                  variant="caption"
                  style={[styles.optionLabel, isActive && styles.optionLabelActive]}>
                  {service.name}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader title={labels.booking.chooseDoctor} />
        <View style={styles.options}>
          {doctors.map((doctor) => {
            const isActive = selectedDoctorId === doctor.id;
            return (
              <Pressable
                key={doctor.id}
                onPress={() => setSelectedDoctorId(doctor.id)}
                style={[styles.optionButton, isActive && styles.optionButtonActive]}>
                <AppText
                  variant="caption"
                  style={[styles.optionLabel, isActive && styles.optionLabelActive]}>
                  {doctor.name}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader title={labels.booking.chooseDate} />
        <View style={styles.options}>
          {bookingDates.map((date) => {
            const isActive = selectedDateValue === date.value;
            return (
              <Pressable
                key={date.id}
                onPress={() => setSelectedDateValue(date.value)}
                style={[styles.optionButton, isActive && styles.optionButtonActive]}>
                <AppText
                  variant="caption"
                  style={[styles.optionLabel, isActive && styles.optionLabelActive]}>
                  {date.label}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader title={labels.booking.chooseTime} />
        <View style={styles.options}>
          {bookingTimes.map((time) => {
            const isActive = selectedTimeValue === time.value;
            return (
              <Pressable
                key={time.id}
                onPress={() => setSelectedTimeValue(time.value)}
                style={[styles.optionButton, isActive && styles.optionButtonActive]}>
                <AppText
                  variant="caption"
                  style={[styles.optionLabel, isActive && styles.optionLabelActive]}>
                  {time.label}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader title={labels.booking.addNotes} />
        <TextInput
          placeholder={labels.booking.notesPlaceholder}
          value={notes}
          onChangeText={setNotes}
          style={styles.input}
          multiline
        />
      </View>

      <AppButton label={labels.common.confirm} onPress={handleConfirm} />
    </ScreenLayout>
  );
}
