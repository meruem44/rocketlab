import "styled-components";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { metrics } from "./metrics";

declare module "styled-components" {
  type ColorsType = typeof colors;
  type FontsType = typeof fonts;
  type MetricsType = typeof metrics;

  export interface DefaultTheme {
    colors: ColorsType;
    fonts: FontsType;
    metrics: MetricsType;
  }
}
