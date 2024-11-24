import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@mui/material";

import { Student } from "../constants/types/student.type";
import { getRequest } from "../helpers/api-requests";
import { FlexSpaceBetweenColumn } from "../styled-components";

const CircleChart = dynamic(() => import("../../components/charts/circle-chart"), {
  ssr: false,
});

export default function ReportDetailsForm() {
  const [studentsList, setStudentsList] = useState<Student[]>([]);

  const setUpData = () => {
    getRequest(`/students/top/groupA`)
      .then((students) => {
        console.log(students);
        setStudentsList(students);
      })
      .catch(() => {});
  };

  useEffect(() => {
    setUpData();
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <FlexSpaceBetweenColumn>
      <CircleChart />

      {studentsList && (
        <Card sx={{ marginTop: '1rem', minWidth: isMobile ? '100%' : 720 }}>
          <CardHeader title="TOP 10 STUDENTS IN GROUP A" />
          <CardContent>
            <TableContainer sx={{ overflowX: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Student ID</TableCell>
                    <TableCell>Math</TableCell>
                    <TableCell>Physics</TableCell>
                    <TableCell>Chemistry</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentsList.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell sx={{ fontSize: isMobile ? '0.875rem' : 'inherit' }}>{student.id}</TableCell>
                      <TableCell sx={{ fontSize: isMobile ? '0.875rem' : 'inherit' }}>{student.math}</TableCell>
                      <TableCell sx={{ fontSize: isMobile ? '0.875rem' : 'inherit' }}>{student.physics}</TableCell>
                      <TableCell sx={{ fontSize: isMobile ? '0.875rem' : 'inherit' }}>{student.chemistry}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      )}
    </FlexSpaceBetweenColumn>
  );
}
