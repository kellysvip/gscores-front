import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { ListItemButton, ListItemIcon } from "@mui/material";

export const ProfileAvatar = styled.img`
  border-radius: 5rem;
  float: left;
  height: 5.8rem;
  width: 5.8rem;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
`;

export const MenuHolder = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ProfileHolder = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const ListItemWrapper = styled(ListItemButton)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 2rem;
`;

export const ListItemIconWrapper = styled(ListItemIcon)`
  color: black;
  margin-right: 1rem;
  min-width: 0;
`;
