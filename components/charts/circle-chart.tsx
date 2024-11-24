import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Box, Typography, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, useMediaQuery } from "@mui/material";
import { getRequest } from "../helpers/api-requests";

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
  labels: ["Very Good", "Good", "Average", "Poor"],
  legend: {
    show: false,
    position: "bottom",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          width: 300,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const CircleChart = () => {
  const [selectedSubject, setSelectedSubject] = React.useState<string>("math");
  const [studentRating, setStudentRating] = useState<{ verygood: number; good: number; average: number; poor: number }>({
    verygood: 0,
    good: 0,
    average: 0,
    poor: 0,
  });

  const isMobile = useMediaQuery("(max-width:600px)");

  const setUpData = () => {
    getRequest(`/students`, {
      subject: selectedSubject,
    })
      .then((rating) => {
        console.log("rating", rating);
        setStudentRating(rating);
      })
      .catch(() => {});
  };

  useEffect(() => {
    setUpData();
  }, [selectedSubject]);

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedSubject(event.target.value);
  };

  function calculatePercentages(data: { [key: string]: number }): number[] {
    const total = Object.values(data).reduce((acc, value) => acc + value, 0);

    const percentages = Object.values(data).map((value) => {
      const percentage = (value / total) * 100;
      return Math.floor(percentage * 100) / 100;
    });

    return percentages;
  }

  const chartData = calculatePercentages(studentRating);

  return (
    <Box
      sx={{
        borderRadius: 1,
        border: 1,
        borderColor: "divider",
        bgcolor: "white",
        p: 3,
        boxShadow: 3,
        minWidth: isMobile ? "80%" : 670,
        maxWidth: 670,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          REPORT
        </Typography>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel id="subject-select-label">Subject</InputLabel>
          <Select
            labelId="subject-select-label"
            id="subject-select"
            value={selectedSubject}
            onChange={handleSelectChange}
            label="Subject"
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
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <ReactApexChart options={options} series={chartData} type="donut" width={isMobile ? 200 : 380} />
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
        {["Very Good", "Good", "Average", "Poor"].map((label, index) => (
          <Box key={label} sx={{ display: "flex", alignItems: "center", width: "45%", mb: 1 }}>
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                mr: 1,
              }}
            />
            <Typography variant="h6" sx={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
              <span>{label}</span>
              <span>{chartData[index] || 0}%</span>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CircleChart;
