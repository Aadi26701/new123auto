import * as React from "react";
import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import * as styles from "./get-in-touch.module.css";

type GetInTouchType = {
  getInTouch?: string;

  /** Style props */
  getInTouchTop?: Property.Top;
  getInTouchLeft?: Property.Left;
  getInTouchColor?: Property.Color;
  getInTouchTextAlign?: Property.TextAlign;
  getInTouchFontSize?: Property.FontSize;
  getInTouchTextShadow?: Property.TextShadow;
  getInTouchAlignContent?: Property.AlignContent;
};

const GetInTouch: FunctionComponent<GetInTouchType> = ({
  getInTouch,
  getInTouchTop,
  getInTouchLeft,
  getInTouchColor,
  getInTouchTextAlign,
  getInTouchFontSize,
  getInTouchTextShadow,
  getInTouchAlignContent,
}) => {
  const getInTouchStyle: CSS.Properties = useMemo(() => {
    return {
      top: getInTouchTop,
      left: getInTouchLeft,
      color: getInTouchColor,
      textAlign: getInTouchTextAlign,
      fontSize: getInTouchFontSize,
      textShadow: getInTouchTextShadow,
      alignContent: getInTouchAlignContent,
    };
  }, [
    getInTouchTop,
    getInTouchLeft,
    getInTouchColor,
    getInTouchTextAlign,
    getInTouchFontSize,
    getInTouchTextShadow,
    getInTouchAlignContent,
  ]);

  return (
    <b className={styles.getInTouch} style={getInTouchStyle}>
      {getInTouch}
    </b>
  );
};

export default GetInTouch;
