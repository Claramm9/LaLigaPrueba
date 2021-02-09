import styled from 'styled-components';
import { DESKTOP } from '../../../base/styles/media-queries';
import { PRIMARY_WHITE } from '../../../base/styles/skin';

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
TitleRow.displayName = 'TitleRow';

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 4px;
  color: ${PRIMARY_WHITE};

  ${DESKTOP} {
    font-size: 22px;
  }
`;
Title.displayName = 'Title';

export const IconRow = styled.div`
  display: flex;
  align-items: center;
`;
IconRow.displayName = 'IconRow';

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  padding: 4px;
  margin: 4px;
  cursor: pointer;

  ${DESKTOP} {
    width: 20px;
    height: 20px;
  }
`;
Icon.displayName = 'Icon';
