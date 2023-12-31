import { fontStyle } from '@/styles/fontStyle';
import { onMobile, onPc, onTablet } from '@/styles/mediaQuery';
import { COLORS } from '@/styles/palettes';

import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  imageUrl: string;
  children: ReactNode;
  altText: string;
  onClick?: () => void;
}

function Button({ imageUrl, children, altText, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={imageUrl} alt={altText} />
      <p>{children}</p>
    </StyledButton>
  );
}

export default Button;

const StyledImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

const StyledButton = styled.button`
  width: min-content;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_D9};
  background: ${COLORS.WHITE_FF};

  p {
    color: ${COLORS.GRAY_78};
    ${fontStyle(14, 500)}
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${onPc} {
    height: 40px;
  }

  ${onTablet} {
    height: 36px;
  }

  ${onMobile} {
    height: 30px;

    ${StyledImage} {
      display: none;
    }
  }
`;
