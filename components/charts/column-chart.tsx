import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { getRequest } from "../helpers/api-requests";

const ColumnChart: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [studentGrade, setStudentGrade] = useState({});

  const setUpData = () => {
    getRequest(`/students/count_grade`, {
      subject: selectedSubject
    })
      .then((grade) => {
        console.log('rating', grade);
        setStudentGrade(grade);
      })
      .catch(() => { });
  };

  useEffect(() => {
    setUpData();

  }, [selectedSubject]);

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedSubject(event.target.value)
  };

  const data = Object.entries(studentGrade).map(([score, quantity]) => ({
    score: parseFloat(score),
    quantity,
  }));

  return (
    <Card sx={{ width: "100%", boxShadow: 3 }}>
      <CardHeader
        title="Score Distribution"
        action={
          <FormControl>
            <InputLabel id="select-subject">Subject</InputLabel>
            <Select
              labelId="select-subject"
              value={selectedSubject}
              onChange={handleSelectChange}
              label="Subject"
              size="small"
              sx={{ width: 150 }}
            >
              <MenuItem value="math">Math</MenuItem>
              <MenuItem value="physics">Physics</MenuItem>
              <MenuItem value="chemistry">Chemistry</MenuItem>
              <MenuItem value="literature">Literature</MenuItem>
              <MenuItem value="history">History</MenuItem>
              <MenuItem value="geography">Geography</MenuItem>
              <MenuItem value="biology">Biology</MenuItem>
              <MenuItem value="civicEducation">Civic Education</MenuItem>
              <MenuItem value="foreignLanguage">Foreign Language</MenuItem>
            </Select>
          </FormControl>
        }
      />
      <CardContent>
        <ResponsiveContainer width="100%" height={335}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="score" label={{ value: "Score", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Quantity", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="quantity" name="Quantity" fill="#3C50E0" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ColumnChart;
