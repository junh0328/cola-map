import styled from '@emotion/styled';
import Slider from 'react-slick';

export const SlideWrapper = styled.div`
  position: absolute;
  z-index: 10000;
  bottom: 5%;
  height: 15vh;
  width: 100%;
`;

export const MySlider = styled(Slider)`
  height: 100%;
  & .slick-list {
    background-color: transparent;
    height: 100%;
  }
  & .slick-track {
    height: 100%;
  }
  & .slick-slide {
    border-radius: 15px;
    display: flex;
    justify-content: center;
    background-color: white;
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  & .slick-active {
  }
  & .slick-center {
  }
  & .slick-current {
    background-color: black;
    color: white;
    transition: 1s;
  }
`;

export const SlideMainWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SlideImgWrapper = styled.div`
  & img {
    width: 10%;
  }
`;

export const SlideName = styled.div`
  margin-top: 3%;
  font-size: 1.1rem;
`;
