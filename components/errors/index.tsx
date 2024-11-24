import React from "react";
import Error from "next/error";
import { useIntl } from "react-intl";

export default function DisplayErrors({ errorCode }: { errorCode: number }) {
  const intl = useIntl();

  return (
    <Error
      statusCode={errorCode}
      title={intl.formatMessage({
        id: `${errorCode}_error_message`,
        defaultMessage: intl.formatMessage({ id: "500_error_message" }),
      })}
    />
  );
}
