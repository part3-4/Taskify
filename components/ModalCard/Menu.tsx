import MenuImg from '@/public/assets/icons/MenuButton.svg';
import { fontStyle } from '@/styles/fontStyle';
import { onMobile } from '@/styles/mediaQuery';
import { COLORS } from '@/styles/palettes';
import { useState } from 'react';
import { styled } from 'styled-components';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <StyledContainer onClick={openMenu} onBlur={closeMenu}>
      {isOpen && (
        <StyledMenu>
          <StyledButton>수정하기</StyledButton>
          <StyledButton>삭제하기</StyledButton>
        </StyledMenu>
      )}
    </StyledContainer>
  );
}

export default Menu;

const StyledContainer = styled.button`
  position: relative;
  width: 28px;
  height: 28px;
  background-image: url(${MenuImg.src});
  background-position: center;

  ${onMobile} {
    width: 20px;
    height: 20px;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  right: 8px;
  top: 28px;
  width: 93px;
  height: 82px;
  padding: 6px;
  border: 1px solid ${COLORS.GRAY_D9};
  border-radius: 6px;
  background-color: ${COLORS.WHITE_FF};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  ${onMobile} {
    width: 86px;
    height: 74px;
  }
`;

const StyledButton = styled.div`
  padding: 4px 16px;
  ${fontStyle(14, 400)};
  text-align: center;
  line-height: 24px;
  color: ${COLORS.BLACK_33};

  &:hover {
    border-radius: 4px;
    color: ${COLORS.VIOLET_55};
    background: ${COLORS.VIOLET_F1};
  }

  ${onMobile} {
    font-size: 1.2rem;
    padding: 2px 16px;
  }
`;