import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const GHScreenSobre = () => (
  <Card>
  
    <Card.Content>
      <Title>Poormans poison  </Title>
      <Paragraph>é uma banda de folk rock de quatro integrantes, foi criado em 2010 no Mississipi</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://cdns-images.dzcdn.net/images/artist/c309c5e900c1f6503e028be1a9136966/500x500.jpg' }} />
    
  </Card>
);

export default GHScreenSobre;