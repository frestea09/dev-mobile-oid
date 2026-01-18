import { Alert, AlertButton, AlertOptions, Platform } from 'react-native';

/**
 * A platform-agnostic Alert utility.
 * Uses window.alert/confirm on Web and Alert.alert on Native.
 */
export const PlatformAlert = {
    alert: (
        title: string,
        message?: string,
        buttons?: AlertButton[],
        options?: AlertOptions
    ) => {
        if (Platform.OS === 'web') {
            const text = [title, message].filter(Boolean).join('\n');

            // Case 1: No buttons or single "OK" button (Information)
            if (!buttons || buttons.length === 0 || (buttons.length === 1 && !buttons[0].onPress)) {
                window.alert(text);
                return;
            }

            // Case 2: Single button with onPress (Action confirmation/notification)
            if (buttons.length === 1 && buttons[0].onPress) {
                window.alert(text);
                buttons[0].onPress();
                return;
            }

            // Case 3: Two buttons (Confirmation: Cancel/OK)
            // We assume the last button is the "Confirm" action and the first is "Cancel"
            if (buttons.length >= 2) {
                const confirmBtn = buttons[buttons.length - 1];
                const cancelBtn = buttons[0]; // Usually the first one is cancel

                if (window.confirm(text)) {
                    confirmBtn.onPress?.();
                } else {
                    cancelBtn.onPress?.();
                }
                return;
            }
        }

        // Native Platform
        Alert.alert(title, message, buttons, options);
    }
};
