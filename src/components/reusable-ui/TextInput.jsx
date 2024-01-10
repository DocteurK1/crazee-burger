import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input
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
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.SM};
    margin-right: 10px;
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.semiBold};
    color: ${theme.colors.dark};
    width: 100%;
    /* display: flex; */

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
