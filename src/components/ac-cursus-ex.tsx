import * as React from "react";
import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import * as styles from "./ac-cursus-ex.module.css";

type AcCursusExType = {
  /** Style props */
  acCursusExInViverraGravidAccentColor?: Property.AccentColor;
};

const AcCursusEx: FunctionComponent<AcCursusExType> = ({
  acCursusExInViverraGravidAccentColor,
}) => {
  const acCursusExStyle: CSS.Properties = useMemo(() => {
    return {
      accentColor: acCursusExInViverraGravidAccentColor,
    };
  }, [acCursusExInViverraGravidAccentColor]);

  return (
    <p
      className={styles.acCursusEx}
      style={acCursusExStyle}
    >{`ac cursus ex in viverra gravida diam enim. Cras Donec ex quis lorem. consectetur tincidunt lorem. ac ex sit elementum malesuada nulla, lobortis, eget sapien `}</p>
  );
};

export default AcCursusEx;
