import { View } from 'react-native';

import { ServiceCard } from '@/components/atomic/molecules/service-card';
import { services } from '@/constants/demo-data';
import { labels } from '@/constants/labels';
import { styles } from '@/components/atomic/organisms/services-list.style';

type ServicesListProps = {
  onPressService: (serviceId: string) => void;
};

export const ServicesList = ({ onPressService }: ServicesListProps) => (
  <View style={styles.container}>
    {services.map((service) => (
      <ServiceCard
        key={service.id}
        name={service.name}
        category={service.category}
        duration={service.duration}
        price={service.price}
        rating={service.rating}
        description={service.description}
        actionLabel={labels.actions.bookAppointment}
        onPress={() => onPressService(service.id)}
      />
    ))}
  </View>
);
