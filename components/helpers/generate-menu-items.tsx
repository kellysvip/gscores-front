import {
  Dashboard,
  ReportSharp,
  SearchOutlined,
  Settings,
} from "@mui/icons-material";
import * as React from "react";

import { NestedMenuItem } from "../menu/nested-menu-item";

export function generateMenuItems(
  toggleDrawer: (open: boolean) => () => void
): React.ReactNode[] {
  return [
    <NestedMenuItem
      key="menu_dashboard"
      icon={<Dashboard />}
      translationId="menu_dashboard"
      href="/dashboard"
      handleItemClick={toggleDrawer(false)}
    />,
    <NestedMenuItem
      key="menu_search"
      icon={<SearchOutlined />}
      translationId="menu_search"
      href="/search"
      handleItemClick={toggleDrawer(false)}
    />,
    <NestedMenuItem
      key="menu_report"
      icon={<ReportSharp />}
      translationId="menu_report"
      href="/report"
      handleItemClick={toggleDrawer(false)}
    />,
    <NestedMenuItem
      key="menu_setting"
      icon={<Settings />}
      translationId="menu_setting"
      href="/setting"
      handleItemClick={toggleDrawer(false)}
    />,
  ];
}
