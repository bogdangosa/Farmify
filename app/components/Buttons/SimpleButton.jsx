import React from 'react';
import { TouchableOpacity,Pressable, Text, ActivityIndicator,StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const SimpleButton = ({
    onPress,
    onLongPress,
    title,
    iconLeft,
    iconRight,
    style,
    textStyle,
    disabled,
    activeOpacity=0.7,
    loading,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        activeOpacity={activeOpacity}
        style={[disabled ? styles.disabledButton : styles.button, style]}
      >
        {iconLeft}
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        )}
        {iconRight}
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: COLORS.accent,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      // Add any additional styles or override default styles here
    },
    disabledButton: {
      backgroundColor: "grey",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    buttonText: {
      color: COLORS.background,
      fontStyle: "normal",
      fontSize: 16,
      // Add any additional styles or override default styles here
    },
  });

export default SimpleButton;