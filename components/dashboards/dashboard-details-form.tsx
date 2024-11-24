"use client";
import dynamic from "next/dynamic";
import React from "react";

const ColumnChart = dynamic(() => import("../../components/charts/column-chart"), {
  ssr: false,
});

export default function DashboardDetailsForm() {
  return (
    <ColumnChart />
  );
}
