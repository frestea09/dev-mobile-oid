import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  primary: {},
  secondary: {
    backgroundColor: 'transparent',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  label: {
    color: '#ffffff',
    fontWeight: '600',
  },
  primaryLabel: {
    color: '#ffffff',
  },
  pressed: {
    opacity: 0.8,
  },
});
