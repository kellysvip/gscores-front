import styled from "@emotion/styled";
import Link from "next/link";

export const FlexCenterAlignCenterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled(FlexCenterAlignCenterRow)`
  padding: 2rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const NoDecorationLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const CustomDetailsWrapper = styled.div`
  width: 80%;
  padding: 2rem;
  margin: 2rem;
  border: 1px solid;
  border-radius: 1rem;
  border-color: #bdbdbd;
  box-shadow: 0.1rem 0.1rem 0.1rem #bdbdbd;
`;

export const FlexSpaceBetweenRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start !important;
  align-items: flex-start !important;
  margin: 0.5rem 0;
  flex: 1;

  .MuiTypography-root {
    font-weight: bold;
    font-size: 0.875rem;
  }

  .MuiInputBase-multiline {
    padding: 0;
  }

  .MuiFormHelperText-root {
    font-size: 0.675rem;
    width: 100%;
    font-weight: 400;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    text-align: left;
    margin: 0.1875rem 0.875rem 0 1.5rem;
    text-transform: lowercase;
  }

  .MuiFormHelperText-root::first-letter {
    text-transform: capitalize;
  }

  .MuiInputBase-root {
    margin-left: 1.5rem;
    border: none;
  }

  .MuiOutlinedInput-input {
    padding: 0.5rem;
  }

  .MuiInputBase-root:hover:before,
  .MuiInputBase-root:before,
  .MuiInputBase-root:after {
    border: none !important;
  }

  .editMode & .MuiInputBase-root:before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
  }
  .editMode {
    .MuiInputBase-root:hover:before,
    .MuiInputBase-root:after,
    .MuiInputBase-root:before {
      border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
    }
  }

  .Mui-disabled.MuiNativeSelect-icon {
    display: none;
  }
`;

export const FlexStartColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FlexSpaceBetweenColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;