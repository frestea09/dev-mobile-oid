import { View } from 'react-native';

import { AppointmentCard } from '@/components/atomic/molecules/appointment-card';
import { labels } from '@/constants/labels';
import { appointments } from '@/constants/demo-data';
import { getDoctorById, getServiceById } from '@/utils/appointments';
import { styles } from '@/components/atomic/organisms/appointment-list.style';

type AppointmentListProps = {
  onPressItem: (appointmentId: string) => void;
};

export const AppointmentList = ({ onPressItem }: AppointmentListProps) => (
  <View style={styles.container}>
    {appointments.map((appointment) => {
      const service = getServiceById(appointment.serviceId);
      const doctor = getDoctorById(appointment.doctorId);

      return (
        <AppointmentCard
          key={appointment.id}
          serviceName={service.name}
          doctorName={doctor.name}
          date={appointment.date}
          time={appointment.time}
          location={appointment.location}
          statusLabel={appointment.status}
          actionLabel={labels.appointments.reschedule}
          onPress={() => onPressItem(appointment.id)}
        />
      );
    })}
  </View>
);
