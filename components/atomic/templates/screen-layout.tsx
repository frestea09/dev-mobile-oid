import type { ReactNode } from 'react';
import { ScrollView, ViewProps } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { styles } from '@/components/atomic/templates/screen-layout.style';

type ScreenLayoutProps = ViewProps & {
  children: ReactNode;
};

export const ScreenLayout = ({ children, style, ...props }: ScreenLayoutProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ScrollView
      {...props}
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }, style]}>
      {children}
    </ScrollView>
  );
};
