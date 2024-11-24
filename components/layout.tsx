import React from "react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { SnackbarProvider } from "notistack";

import vi from "../translations/vi.json";
import { ContentWrapper } from "./styled-components";
import Header from "./header";

const messages: { [key: string]: unknown } = { vi };

export default function Layout({ children }: { children: React.ReactNode }) {
  const { locale } = useRouter();

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <IntlProvider
          locale={locale || "vi"}
          messages={messages[locale || "vi"] as Record<string, string>}
        >
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
        </IntlProvider>
    </SnackbarProvider>
  );
}
