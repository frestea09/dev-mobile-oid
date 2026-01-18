import { useRouter } from 'expo-router';

import { ScreenLayout } from '@/components/atomic/templates/screen-layout';
import { AppButton } from '@/components/atomic/atoms/app-button';
import { AppText } from '@/components/atomic/atoms/app-text';
import { labels } from '@/constants/labels';
import { styles } from '@/app/modal.style';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <ScreenLayout style={styles.container}>
      <AppText variant="title">{labels.modal.title}</AppText>
      <AppText variant="body">{labels.modal.description}</AppText>
      <AppButton label={labels.modal.backHome} onPress={() => router.replace('/')} />
    </ScreenLayout>
  );
}
