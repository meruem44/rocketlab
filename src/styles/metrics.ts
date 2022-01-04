import { Dimensions, StatusBar } from "react-native";

import {
  isIphoneX,
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

const { width, height } = Dimensions.get("window");

const statusBarHeightIphoneX = getStatusBarHeight();
const bottomSpaceIphoneX = getBottomSpace();
const statusBarHeight = StatusBar.currentHeight;

export const metrics = {
  width,
  height,
  marginTop: isIphoneX() ? statusBarHeightIphoneX : statusBarHeight,
  marginBottom: isIphoneX() ? bottomSpaceIphoneX : 0,
  paddingHorizontal: "5%",
};
