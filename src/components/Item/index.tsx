import styled from 'styled-components';
import { Trip } from '../../interfaces';

const Container = styled.div`
  display: flex;
`;

const LeftCol = styled.div`
  flex-grow: 2;
`;
const RightCol = styled.div`
  flex-grow: 3;
`;

const Img = styled.img`
  border-radius: 15px;
`;

const Title = styled.h3``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgPanel = styled.div`
  display: flex;
`;

const SquareImg = styled.img`
  border-radius: 15px;
`;

const Item: React.FC<Trip> = (props) => {
  const { title, url, description, photos, tags } = props;

  const firstPhoto = photos[0]; // Get the first photo
  const extraPhotos = photos.splice(0, 1); // Return the array without the first photo

  return (
    <Container>
      <LeftCol>
        <Img src={firstPhoto} />
      </LeftCol>
      <RightCol>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ImgPanel>
          {extraPhotos.map((photo) => (
            <SquareImg src={photo} key={photo} />
          ))}
        </ImgPanel>
      </RightCol>
    </Container>
  );
};

export default Item;
