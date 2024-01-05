import styled from "styled-components";
import { theme } from "../../theme";

export default function AddFormInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...extraProps}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  // Style pour la div Input with icon

  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  /* display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 10px 0; */

  display: flex;
  margin-top: 10px;
  padding: 8px 16px 8px 24px;
  align-items: center;
  gap: 13px;

  border-radius: 5px;
  background: #f5f5f7;

  .icon {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.SM};
    margin-right: 10px;
  }

  input {
    /* border: none;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.semiBold};
    color: ${theme.colors.dark};
    width: 100%; */
    /* display: flex; */
    width: 600px;
    color: ${theme.colors.dark};
    background: #f5f5f7;
    font-family: Arial;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    &::placeholder {
      /* background: ${theme.colors.white}; */
      color: ${theme.colors.greyMedium};
    }
  }
`;
