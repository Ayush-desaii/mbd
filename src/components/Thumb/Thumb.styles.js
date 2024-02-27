import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  padding: 10px 10px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
