import React from "react";
import { View, Text } from "react-native";

/**
 *
 * @param param0
 * @returns
 */
const FeatureView = (props) => {
  const { name, children, features } = props;
   
  const checkIsActived = () => {
    return features[name] === true;
  };

  return checkIsActived() ? <View>{children}</View> : <></>;
}

export default FeatureView;
