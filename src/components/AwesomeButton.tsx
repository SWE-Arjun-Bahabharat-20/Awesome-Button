import React, { FC, useRef } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
    StyleProp,
    View,
    Platform,
    Animated,
    Easing,
} from 'react-native';

export interface AwesomeButtonProps extends TouchableOpacityProps {
    /**
     * Button text content
     */
    title: string;

    /**
     * Button type/style variant
     */
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'ghost';

    /**
     * Button size
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Shows loading indicator and disables button
     */
    loading?: boolean;

    /**
     * Icon to display before button text
     */
    leftIcon?: React.ReactNode;

    /**
     * Icon to display after button text
     */
    rightIcon?: React.ReactNode;

    /**
     * Custom style for button container
     */
    buttonStyle?: StyleProp<ViewStyle>;

    /**
     * Custom style for button text
     */
    textStyle?: StyleProp<TextStyle>;

    /**
     * Uses uppercase text for button title
     */
    uppercase?: boolean;

    /**
     * Rounded corners for button (boolean or custom radius value)
     */
    rounded?: boolean | number;

    /**
     * Full width button
     */
    fullWidth?: boolean;

    /**
     * Disable button shadow
     */
    disableShadow?: boolean;

    /**
     * Custom background color
     */
    backgroundColor?: string;

    /**
     * Custom text color
     */
    textColor?: string;

    /**
     * Custom border color
     */
    borderColor?: string;

    /**
     * Custom border width
     */
    borderWidth?: number;

    /**
     * Border style
     */
    borderStyle?: 'solid' | 'dotted' | 'dashed';

    /**
     * Custom loading indicator color
     */
    loadingColor?: string;

    /**
     * Enable animation effects
     * Set to false to disable all animations
     */
    animated?: boolean;

    /**
     * Animation scale intensity (0.0-1.0)
     * Lower values = stronger animation
     * Only applied when animated=true
     */
    animationScale?: number;
}

/**
 * A highly customizable button component for React Native
 */
const AwesomeButton: FC<AwesomeButtonProps> = ({
    title,
    variant = 'primary',
    size = 'medium',
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    buttonStyle,
    textStyle,
    uppercase = false,
    rounded = false,
    fullWidth = false,
    disableShadow = false,
    backgroundColor,
    textColor,
    borderColor,
    borderWidth,
    borderStyle = 'solid',
    loadingColor,
    animated = false, // Default to false - animation only enabled when explicitly requested
    animationScale = 0.95,
    ...rest
}) => {
    // Animation value for scale effect
    const scaleAnim = useRef(new Animated.Value(1)).current;

    // Handle press in animation
    const handlePressIn = () => {
        if (animated && !disabled && !loading) {
            Animated.timing(scaleAnim, {
                toValue: animationScale,
                duration: 100,
                useNativeDriver: true,
                easing: Easing.ease,
            }).start();
        }
    };

    // Handle press out animation
    const handlePressOut = () => {
        if (animated && !disabled && !loading) {
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
                easing: Easing.ease,
            }).start();
        }
    };

    // Create custom styles based on provided color props
    const customContainerStyle = backgroundColor ? { backgroundColor } : undefined;

    // Custom border styles
    const customBorderStyle: ViewStyle = {};
    if (borderColor) customBorderStyle.borderColor = borderColor;
    if (borderWidth !== undefined) customBorderStyle.borderWidth = borderWidth;
    if (borderStyle) customBorderStyle.borderStyle = borderStyle;

    // Custom text style
    const customTextStyle = textColor ? { color: textColor } : undefined;

    // Handle custom rounded value
    const customRoundedStyle = typeof rounded === 'number'
        ? { borderRadius: rounded }
        : rounded === true
            ? styles.rounded
            : undefined;

    // Create shadow style based on platform
    const shadowStyle = !disableShadow && variant !== 'ghost'
        ? Platform.OS === 'ios'
            ? styles.iosShadow
            : Platform.OS === 'android'
                ? styles.androidShadow
                : styles.shadow
        : undefined;

    // Determine the container and text styles based on props
    const containerStyles = [
        styles.container,
        styles[`${variant}Container`] || styles.primaryContainer,
        styles[`${size}Container`] || styles.mediumContainer,
        customRoundedStyle,
        fullWidth && styles.fullWidth,
        shadowStyle,
        disabled && styles.disabledContainer,
        customContainerStyle,
        customBorderStyle,
        buttonStyle,
    ];

    const textStyles = [
        styles.text,
        styles[`${variant}Text`] || styles.primaryText,
        styles[`${size}Text`] || styles.mediumText,
        disabled && styles.disabledText,
        customTextStyle,
        textStyle,
    ];

    const displayText = uppercase ? title.toUpperCase() : title;

    // Use animated component only when animation is enabled
    if (animated) {
        const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

        return (
            <AnimatedTouchable
                style={[
                    containerStyles,
                    { transform: [{ scale: scaleAnim }] }
                ]}
                disabled={disabled || loading}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityState={{ disabled: disabled || loading }}
                accessibilityLabel={title}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                {...rest}
            >
                {loading ? (
                    <ActivityIndicator
                        size="small"
                        color={loadingColor || (variant === 'outline' || variant === 'ghost' ? '#3498db' : '#fff')}
                    />
                ) : (
                    <View style={styles.contentContainer}>
                        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
                        <Text style={textStyles} numberOfLines={1} ellipsizeMode="tail">{displayText}</Text>
                        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
                    </View>
                )}
            </AnimatedTouchable>
        );
    }

    // Regular non-animated button
    return (
        <TouchableOpacity
            style={containerStyles}
            disabled={disabled || loading}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={{ disabled: disabled || loading }}
            accessibilityLabel={title}
            {...rest}
        >
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={loadingColor || (variant === 'outline' || variant === 'ghost' ? '#3498db' : '#fff')}
                />
            ) : (
                <View style={styles.contentContainer}>
                    {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
                    <Text style={textStyles} numberOfLines={1} ellipsizeMode="tail">{displayText}</Text>
                    {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        minWidth: 120,
        minHeight: 45,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    iosShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    androidShadow: {
        // elevation: 3,
    },
    rounded: {
        borderRadius: 50,
    },
    fullWidth: {
        alignSelf: 'stretch',
    },
    iconLeft: {
        marginRight: 8,
    },
    iconRight: {
        marginLeft: 8,
    },
    text: {
        fontWeight: '600',
        textAlign: 'center',
    },
    // Variant styles
    primaryContainer: {
        backgroundColor: '#3498db',
        borderWidth: 0,
    },
    secondaryContainer: {
        backgroundColor: '#95a5a6',
        borderWidth: 0,
    },
    outlineContainer: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#3498db',
    },
    dangerContainer: {
        backgroundColor: '#e74c3c',
        borderWidth: 0,
    },
    successContainer: {
        backgroundColor: '#2ecc71',
        borderWidth: 0,
    },
    ghostContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    // Size styles
    smallContainer: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        minWidth: 80,
        minHeight: 32,
    },
    mediumContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        minWidth: 120,
        minHeight: 40,
    },
    largeContainer: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        minWidth: 150,
        minHeight: 48,
    },
    // Text styles based on variant
    primaryText: {
        color: '#fff',
    },
    secondaryText: {
        color: '#fff',
    },
    outlineText: {
        color: '#3498db',
    },
    dangerText: {
        color: '#fff',
    },
    successText: {
        color: '#fff',
    },
    ghostText: {
        color: '#3498db',
    },
    // Text styles based on size
    smallText: {
        fontSize: 13,
    },
    mediumText: {
        fontSize: 15,
    },
    largeText: {
        fontSize: 16,
    },
    // Disabled styles
    disabledContainer: {
        backgroundColor: '#ecf0f1',
        borderColor: '#bdc3c7',
        opacity: 0.7,
    },
    disabledText: {
        color: '#95a5a6',
    },
});

export default AwesomeButton;