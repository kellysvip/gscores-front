import React, { ReactNode } from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { ListItemIconWrapper, ListItemWrapper } from "./styled-components";
import { FlexWrapper, NoDecorationLink } from "../styled-components";

type NestedMenuItemProps = {
  handleItemClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
  icon: ReactNode;
  translationId: string;
  href: string;
};

export function NestedMenuItem({
  handleItemClick,
  icon,
  translationId,
  href,
}: NestedMenuItemProps) {
  return (
    <NoDecorationLink key={translationId} href={href} passHref>
      <ListItemWrapper onClick={handleItemClick}>
        <FlexWrapper style={{ flexDirection: "row" }}>
          <ListItemIconWrapper>{icon}</ListItemIconWrapper>
          <Typography
            style={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            <Typography color="neutral">
              <FormattedMessage id={translationId} />
            </Typography>
          </Typography>
        </FlexWrapper>
      </ListItemWrapper>
    </NoDecorationLink>
  );
}
