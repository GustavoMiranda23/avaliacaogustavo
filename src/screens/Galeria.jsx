import * as React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Galeria = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Poor's man poison</Title>
      <Paragraph>Poor mans poison é uma banda incrivelmente legal com musicas folk</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/a97bd70723c2db4353ae5bfa557a0dcf/264x264.jpg' }} />
    
  </Card>
);

export default Galeria;