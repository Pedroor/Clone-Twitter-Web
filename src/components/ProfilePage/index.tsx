import React from 'react';

import Feed from '../Feed'

import { 
Container,
Banner,
Avatar,
ProfileData,
LocationIcon,
CakeIcon,
Followage,
EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Pedro Arthur</h1>
        <h2>@Programmer</h2>

        <p>
          Developer at <a href="https://cardfi.com.br">@Cardfi</a>
        </p>
        
        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 06 agosto de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            762 <strong>seguidores</strong>
          </span>
        </Followage>

      </ProfileData>
      <Feed/>
    </Container>
  );
}

export default ProfilePage;