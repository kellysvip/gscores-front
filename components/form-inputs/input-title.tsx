import * as React from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

export type InputTitleProps = {
  translationId: string;
  isRequired?: boolean;
  style?: Record<string, string>;
};

export default function InputTitle({
  style,
  translationId,
  isRequired,
}: InputTitleProps) {
  return (
    <Typography style={{ color: "neutral", ...style }}>
      <FormattedMessage id={translationId} />
      {isRequired && <span style={{ color: "red" }}> *</span>}
    </Typography>
  );
}
