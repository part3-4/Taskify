import emailIcon from '@/public/assets/icons/emailIcon.svg';
import facebookIcon from '@/public/assets/icons/facebookIcon.svg';
import instagramIcon from '@/public/assets/icons/instagramIcon.svg';
import { fontStyle } from '@/styles/fontStyle';
import { onMobile, onPc, onTablet } from '@/styles/mediaQuery';
import { COLORS } from '@/styles/palettes';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooterContainer>
      <StyledCopyright>©codeit - 2023</StyledCopyright>
      <StyledLinkContainer>
        <StyledLink href="/">Privacy Policy</StyledLink>
        <StyledLink href="/">FAQ</StyledLink>
      </StyledLinkContainer>
      <StyledSNSContainer>
        <Link href="/">
          <Image width={20} height={20} src={emailIcon} alt="이메일로 이동" />
        </Link>
        <Link href="https://www.facebook.com">
          <Image width={20} height={20} src={facebookIcon} alt="페이스북으로 이동" />
        </Link>
        <Link href="https://www.instagram.com">
          <Image width={20} height={20} src={instagramIcon} alt="인스타그램으로 이동" />
        </Link>
      </StyledSNSContainer>
    </StyledFooterContainer>
  );
}

export default Footer;

const StyledFooterContainer = styled.div`
  background-color: var(--bg-footer);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 30%;

  ${onTablet} {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 5%;
  }

  ${onPc} {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 7%;
  }
`;

const StyledCopyright = styled.div`
  color: ${COLORS.GRAY_9F};
  ${fontStyle(16, 400)};

  ${onMobile} {
    ${fontStyle(12, 400)}
    margin-bottom: 12px;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: ${COLORS.GRAY_9F};
  ${fontStyle(16, 400)};

  ${onMobile} {
    margin-bottom: 68px;
    ${fontStyle(12, 400)};
  }
`;

const StyledSNSContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
