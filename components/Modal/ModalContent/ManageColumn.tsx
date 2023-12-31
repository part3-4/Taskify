import BasicInput from '@/components/Input/ModalInputContainer/BasicInput';
import { StyledContainer } from '@/components/Modal/ModalContent/Basic';
import { StyledTwinButton } from '@/components/Modal/ModalContent/CreateToDo';
import { INIT_MANAGE_COLUMN } from '@/constants/InitialModalValues';
import { fontStyle } from '@/styles/fontStyle';
import { onMobile } from '@/styles/mediaQuery';
import { COLORS } from '@/styles/palettes';
import { ModalCommonProps } from '@/types/modal';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props extends ModalCommonProps {
  onDeleteClick: () => void;
  defaultValue: { 이름: string };
}

function ManageColumn({
  onOkClick,
  onCancelClick = () => {},
  onDeleteClick = () => {},
  getValue = () => {},
  defaultValue,
}: Props) {
  const [values, setValues] = useState(defaultValue || INIT_MANAGE_COLUMN);

  const handleChange = (inputLabel: string, inputValue: string) => {
    setValues({
      ...values,
      [inputLabel]: inputValue,
    });
  };

  useEffect(() => {
    getValue(values);
  }, [getValue, values]);

  return (
    <>
      <StyledContainer>
        <BasicInput label="이름" onChange={handleChange} inputValue={values.이름} />
      </StyledContainer>

      <StyledButtonContainer>
        <StyledDeleteButton onClick={onDeleteClick}>삭제하기</StyledDeleteButton>
        <StyledTwinButton
          text1="취소"
          text2="변경"
          size="large"
          onLeftClick={onCancelClick}
          onRightClick={onOkClick}
        ></StyledTwinButton>
      </StyledButtonContainer>
    </>
  );
}

export default ManageColumn;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  align-items: flex-end;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  ${onMobile} {
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 6px;
  }
`;

const StyledDeleteButton = styled.button`
  text-decoration: underline;
  display: flex;
  margin-bottom: 8px;
  color: ${COLORS.GRAY_9F};
  ${fontStyle(14, 400)}
`;
