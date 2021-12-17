import styled from 'styled-components';
import { Trip } from '../../interfaces';

const Container = styled.div`
  display: flex;
  height: 300px;
  margin-bottom: 50px;
  gap: 25px;
`;

const LeftCol = styled.div`
  max-width: 200px;
`;
const RightCol = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
  border-radius: 15px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  margin-top: 0px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 0.85em;
  color: var(--darkGrey);
  white-space: pre-wrap;
`;

const ImgPanel = styled.div`
  display: flex;
  gap: 20px;
`;

const SquareImg = styled.img`
  border-radius: 15px;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const Link = styled.a`
  color: var(--blue);
`;

const TagWrapper = styled.div`
  display: block;
  font-size: 0.82em;
  margin-top: 3px;
`;

const Tag = styled.a`
  color: var(--darkGrey);
`;

const Item: React.FC<Trip> = (props) => {
  const { title, url, description, photos, tags } = props;

  const shortenedDesc =
    description.length > 200
      ? description.substring(0, 200) + ' ....'
      : description;

  const firstPhoto = photos[0]; // Get the first photo

  const extraPhotos = [...photos];
  extraPhotos.shift(); // Return the array without the first photo

  const stringTag = tags.map((tag, i) => (
    <span>
      {i === tags.length - 1 ? ' และ ' : ' '}
      <Tag href="/">{tag}</Tag>
    </span>
  ));

  return (
    <Container>
      <LeftCol>
        <Img src={firstPhoto} />
      </LeftCol>
      <RightCol>
        <div>
          <Title>{title}</Title>
          <Description>
            {shortenedDesc + ' '}
            <Link href={url}>อ่านต่อ</Link>
            <TagWrapper>
              {'หมวด -'}
              {stringTag}
            </TagWrapper>
          </Description>
        </div>
        <ImgPanel>
          {extraPhotos &&
            extraPhotos.map((photo) => <SquareImg src={photo} key={photo} />)}
        </ImgPanel>
      </RightCol>
    </Container>
  );
};

export default Item;
