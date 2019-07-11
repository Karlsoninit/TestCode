import styled from 'styled-components';

const StyleWrapper = styled.ul`
  background-image: ${({ icon }) => `url(${icon})`};
`;

export default StyleWrapper;
