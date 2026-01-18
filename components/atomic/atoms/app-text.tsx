import { Text, TextProps } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, Fonts } from '@/constants/theme';
import { styles } from '@/components/atomic/atoms/app-text.style';

export type AppTextVariant = 'title' | 'subtitle' | 'body' | 'caption';

type AppTextProps = TextProps & {
  variant?: AppTextVariant;
};

export const AppText = ({ variant = 'body', style, ...props }: AppTextProps) => {
  const colorScheme = useColorScheme();
  const colorSet = Colors[colorScheme ?? 'light'];

  return (
    <Text
      {...props}
      style={[
        styles.base,
        { color: colorSet.text, fontFamily: Fonts.sans },
        styles[variant],
        style,
      ]}
    />
  );
};
