import type { ReactNode } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { AppText } from '@/components/atomic/atoms/app-text';
import { styles } from '@/components/atomic/atoms/app-button.style';

export type AppButtonVariant = 'primary' | 'secondary' | 'ghost';

type AppButtonProps = PressableProps & {
  label: string;
  variant?: AppButtonVariant;
  leading?: ReactNode;
};

export const AppButton = ({
  label,
  variant = 'primary',
  leading,
  style,
  ...props
}: AppButtonProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        variant === 'primary' && { backgroundColor: colors.tint },
        variant === 'secondary' && { borderColor: colors.tint },
        pressed && styles.pressed,
        style,
      ]}>
      <View style={styles.content}>
        {leading}
        <AppText
          variant="body"
          style={[
            styles.label,
            variant === 'primary' && styles.primaryLabel,
            variant === 'secondary' && { color: colors.tint },
            variant === 'ghost' && { color: colors.tint },
          ]}>
          {label}
        </AppText>
      </View>
    </Pressable>
  );
};
