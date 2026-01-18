import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { labels } from '../constants/labels';
import { styles } from './modal.styles';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{labels.misc.modalTitle}</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">{labels.misc.modalLink}</ThemedText>
      </Link>
    </ThemedView>
  );
}
