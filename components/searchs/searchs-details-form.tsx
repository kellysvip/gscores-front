import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { debounce } from "@mui/material/utils";

import { FlexStartColumn, InputWrapper } from "../styled-components";
import { SearchInput } from "../search-input";
import { getRequest } from "../helpers/api-requests";
import { Student } from "../constants/types/student.type";

export const SEARCH_DELAY_MS = 400;

const languageMap = {
  N1: 'English',
  N2: 'Russian',
  N3: 'French',
  N4: 'Chinese',
  N5: 'German',
  N6: 'Japanese',
  N7: 'Korean'
};

export default function SearchDetailsForm() {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [student, setStudent] = useState<Student>();

  const handleSearchTextChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value || undefined);
    },
    SEARCH_DELAY_MS
  );

  const setUpData = () => {
    getRequest(`/students/${search}`)
      .then((student) => {
        console.log(search, student);
        setStudent(student);
      })
      .catch(() => {
        setStudent(undefined);
      });
  };

  useEffect(() => {
    setUpData();
  }, [search]);

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

  return (
    <FlexStartColumn>
      <Card sx={{ minWidth: isMobile ? 300 : isTablet ? 400 : 500, padding: isMobile ? 2 : 4 }}>
        <CardContent>
          <form>
            <InputWrapper>
              <FlexStartColumn>
                <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: "bold" }}>
                  User Registration
                </Typography>
                <Typography> Registration number: </Typography>

                <SearchInput handleChange={handleSearchTextChange} />
              </FlexStartColumn>
            </InputWrapper>
          </form>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: isMobile ? 300 : isTablet ? 400 : 500, marginTop: 3, padding: isMobile ? 2 : 4 }}>
        <CardContent>
          {!student ? (
            <Typography sx={{ fontWeight: "bold" }}>
              Cannot find this student's registration number
            </Typography>
          ) : (
            <>
              {student.id && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Number: {student.id}
                </Typography>
              )}
              {student.math && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Math: {student.math}
                </Typography>
              )}
              {student.physics && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Physics: {student.physics}
                </Typography>
              )}
              {student.chemistry && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Chemistry: {student.chemistry}
                </Typography>
              )}
              {student.literature && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Literature: {student.literature}
                </Typography>
              )}
              {student.biology && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Biology: {student.biology}
                </Typography>
              )}
              {student.history && (
                <Typography sx={{ fontWeight: "bold" }}>
                  History: {student.history}
                </Typography>
              )}
              {student.geography && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Geography: {student.geography}
                </Typography>
              )}
              {student.civicEducation && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Civic Education: {student.civicEducation}
                </Typography>
              )}
              {student.foreignLanguage && (
                <Typography sx={{ fontWeight: "bold" }}>
                  {languageMap[student.foreignLanguageCode as keyof typeof languageMap]}: {student.foreignLanguage}
                </Typography>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </FlexStartColumn>
  );
}
