import React, {ComponentType} from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colors, spacing, typography} from '@/theme';
import {Text, TextProps} from '../text';
import {ActivityIndicator} from 'react-native';

type Presets = keyof typeof $viewPresets;

export interface ButtonAccessoryProps {
  style: StyleProp<any>;
  pressableState: PressableStateCallbackType;
  disabled?: boolean;
}

export interface ButtonProps extends PressableProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: TextProps['text'];

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the "pressed" state.
   */
  pressedStyle?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the button text.
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * An optional style override for the button text when in the "pressed" state.
   */
  pressedTextStyle?: StyleProp<TextStyle>;
  /**
   * An optional style override for the button text when in the "disabled" state.
   */
  disabledTextStyle?: StyleProp<TextStyle>;
  /**
   * One of the different types of button presets.
   */
  preset?: Presets;
  /**
   * An optional component to render on the right side of the text.
   * Example: `RightAccessory={(props) => <View {...props} />}`
   */
  RightAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * An optional component to render on the left side of the text.
   * Example: `LeftAccessory={(props) => <View {...props} />}`
   */
  LeftAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * disabled prop, accessed directly for declarative styling reasons.
   * https://reactnative.dev/docs/pressable#disabled
   */
  disabled?: boolean;
  /**
   * An optional style override for the disabled state
   */
  disabledStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a Pressable component.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Button/}
 * @param {ButtonProps} props - The props for the `Button` component.
 * @returns {JSX.Element} The rendered `Button` component.
 * @example
 * <Button
 *   tx="common.ok"
 *   style={styles.button}
 *   textStyle={styles.buttonText}
 *   onPress={handleButtonPress}
 * />
 */
export function Button(props: ButtonProps) {
  const {
    text,
    isLoading,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    disabledTextStyle: $disabledTextStyleOverride,
    children,
    RightAccessory,
    LeftAccessory,
    disabled,
    disabledStyle: $disabledViewStyleOverride,
    ...rest
  } = props;

  const preset: Presets = props.preset ?? 'default';
  /**
   * @param {PressableStateCallbackType} root0 - The root object containing the pressed state.
   * @param {boolean} root0.pressed - The pressed state.
   * @returns {StyleProp<ViewStyle>} The view style based on the pressed state.
   */
  function $viewStyle({
    pressed,
  }: PressableStateCallbackType): StyleProp<ViewStyle> {
    return [
      $viewPresets[preset],
      $viewStyleOverride,
      !!pressed && [$pressedViewPresets[preset], $pressedViewStyleOverride],
      !!disabled && $disabledViewStyleOverride,
    ];
  }
  /**
   * @param {PressableStateCallbackType} root0 - The root object containing the pressed state.
   * @param {boolean} root0.pressed - The pressed state.
   * @returns {StyleProp<TextStyle>} The text style based on the pressed state.
   */
  function $textStyle({
    pressed,
  }: PressableStateCallbackType): StyleProp<TextStyle> {
    return [
      $textPresets[preset],
      $textStyleOverride,
      !!pressed && [$pressedTextPresets[preset], $pressedTextStyleOverride],
      !!disabled && $disabledTextStyleOverride,
    ];
  }

  return (
    <Pressable
      style={$viewStyle}
      accessibilityRole="button"
      accessibilityState={{disabled: !!disabled}}
      {...rest}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} size={28} />
      ) : (
        state => (
          <>
            {!!LeftAccessory && (
              <LeftAccessory
                style={$leftAccessoryStyle}
                pressableState={state}
                disabled={disabled}
              />
            )}

            <Text text={text} style={$textStyle(state)}>
              {children}
            </Text>

            {!!RightAccessory && (
              <RightAccessory
                style={$rightAccessoryStyle}
                pressableState={state}
                disabled={disabled}
              />
            )}
          </>
        )
      )}
    </Pressable>
  );
}

const $baseViewStyle: ViewStyle = {
  minHeight: 56,
  width: '100%',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.sm,
  overflow: 'hidden',
};

const $baseTextStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: typography.fonts.inter.medium,
  textAlign: 'center',
  flexShrink: 1,
  flexGrow: 0,
  zIndex: 2,
  color: colors.white,
};

const $rightAccessoryStyle: ViewStyle = {marginStart: spacing.xs, zIndex: 1};
const $leftAccessoryStyle: ViewStyle = {marginEnd: spacing.xs, zIndex: 1};

const $viewPresets = {
  default: [
    $baseViewStyle,
    {
      // borderWidth: 1,
      // borderColor: colors.,
      backgroundColor: colors.defaultButton,
    },
  ] as StyleProp<ViewStyle>,

  gold: [
    $baseViewStyle,
    {backgroundColor: colors.brownButton},
  ] as StyleProp<ViewStyle>,

  // reversed: [
  //   $baseViewStyle,
  //   {
  //     backgroundColor: colors.white,
  //     borderColor: colors.black,
  //     borderWidth: 1,
  //   },
  // ] as StyleProp<ViewStyle>,
  // disabled: [
  //   $baseViewStyle,
  //   {
  //     backgroundColor: colors.inputBorder,
  //   },
  // ] as StyleProp<ViewStyle>,
};

const $textPresets: Record<Presets, StyleProp<TextStyle>> = {
  default: $baseTextStyle,
  gold: $baseTextStyle,
  // filled: $baseTextStyle,
  // reversed: [$baseTextStyle, {color: colors.black}],
  // disabled: [$baseTextStyle],
};

const $pressedViewPresets: Record<Presets, StyleProp<ViewStyle>> = {
  default: {backgroundColor: colors.defaultButton},
  gold: {backgroundColor: colors.gold},
  // filled: {backgroundColor: colors.primaryShade},
  // reversed: {opacity: 0.7},
  // disabled: [],
};

const $pressedTextPresets: Record<Presets, StyleProp<TextStyle>> = {
  default: {opacity: 0.9},
  gold: {opacity: 0.9},
  // filled: {opacity: 0.9},
  // reversed: {opacity: 0.7},
  // disabled: [],
};
