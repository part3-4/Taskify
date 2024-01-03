import API from '@/apis/api';
import Column from '@/components/Columns/Column';
import ColumnAddButton from '@/components/common/Button/ColumnAddButton';
import { onPc, onTablet } from '@/styles/mediaQuery';
import { GetColumnListProps } from '@/types/api';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';

interface ColumnProps {
  id: number;
  title: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
}

function Columns({ dashboardId }: GetColumnListProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [columns, setColumns] = useState<ColumnProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({ 이름: '' });

  const setModalValue = (values: { 이름: '' }) => {
    setValue(values);
  };

  // 컬럼 목록 조회
  const getColumnListFunc = async (dashboardId: number) => {
    if (Number.isNaN(dashboardId)) return;
    const res = await API.columns.getColumnList({ dashboardId });
    const columns = res?.data;
    const isSuccess = res?.result;
    setIsSuccess(isSuccess === 'SUCCESS');
    setColumns(columns);
  };

  const handleClickCreateModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  // 새 컬럼 추가하기
  const createColumnFunc = async (title: string, dashboardId: number) => {
    const response = await API.columns.createColumn({
      title: title,
      dashboardId: dashboardId,
    });
    await getColumnListFunc(dashboardId);
  };

  useEffect(() => {
    getColumnListFunc(dashboardId);
  }, [dashboardId]);

  return (
    <StyledContainer>
      {isSuccess && (
        <StyledWrapper>
          {columns.map((column) => {
            return (
              <li key={column.id}>
                <Column
                  title={column.title}
                  columnId={column.id}
                  dashboardId={dashboardId}
                  applyColumnDelete={getColumnListFunc}
                />
              </li>
            );
          })}
        </StyledWrapper>
      )}
      <StyledWrapper2>
        <ColumnAddButton onClick={handleClickCreateModal} />
        {isOpen && (
          <Modal
            title="새 컬럼 생성"
            getValue={setModalValue}
            onCancelClick={() => {
              setIsOpen(false);
            }}
            onOkClick={async () => {
              createColumnFunc(value.이름, dashboardId);
              setIsOpen(false);
            }}
          />
        )}
      </StyledWrapper2>
    </StyledContainer>
  );
}

export default Columns;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${onPc} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${onPc} {
    flex-direction: row;
  }
`;

const StyledWrapper2 = styled.div`
  padding: 12px 0 12px;

  ${onTablet} {
    padding: 20px 0 20px;
  }

  ${onPc} {
    padding: 68px 0 0 20px;
  }
`;