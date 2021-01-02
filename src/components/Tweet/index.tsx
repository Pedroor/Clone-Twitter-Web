import React from 'react';

 import {
Container,
Retweeted,
CakeIcon,
Body,
Avatar,
Content,
Header,
Dot,
Description,
ImageContent,
Icons,
Status,
CommentIcon,
RetweetIcon,
LikeIcon, 

} from './styles';


const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <CakeIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>17 de jun</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
    );
}

export default Tweet;