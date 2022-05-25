import styled from "styled-components";
import defaultImg from "../../assets/bg_1.jpg";
const StyledHero = styled.header`
  height: 100px;
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: left;
  justify-content: left;
`;

export default StyledHero;
