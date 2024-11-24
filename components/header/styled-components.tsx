import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";

export const AvatarWrapper = styled.img`
  border-radius: 1.5rem;
  float: left;
  height: 1.8rem;
  width: 1.8rem;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CustomIconButton = styled(IconButton)`
  padding: 0.5rem;
`;
