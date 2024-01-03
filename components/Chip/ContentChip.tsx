import { onMobile } from '@/styles/mediaQuery';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ChipProps {
  text: string;
  color: string;
  backgroundColor: string;
  children?: ReactNode;
}

function ContentChip({ text, color, backgroundColor, children }: ChipProps) {
  return (
    <StyledContainer $color={color} $background={backgroundColor}>
      {text}
      {children}
    </StyledContainer>
  );
}

export default ContentChip;

const StyledContainer = styled.div<{ $color: string; $background: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  border-radius: 4px;
  margin-right: 6px;
  font-size: 1.2rem;
  color: ${({ $color }) => $color};
  background-color: ${({ $background }) => $background};

  ${onMobile} {
    font-size: 1rem;
  }
`;
