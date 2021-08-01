import styled from '@emotion/styled';

export const MenuListWrapper = styled.div`
  & ul {
    list-style: none;
    padding: 0 0 14px 14px;
    margin-bottom: 0px;

    & li {
      cursor: pointer;
      border-bottom: 1px solid gray;
      transition: 600ms;

      &:hover {
        font-weight: bold;
      }

      & p {
        margin-bottom: 0;
      }

      & span {
        font-size: 0.8rem;
        color: gray;
      }
    }
  }
`;
