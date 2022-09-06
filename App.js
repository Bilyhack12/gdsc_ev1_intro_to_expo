import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, Appbar } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function App() {
  return (
    <Provider>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="calendar" onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>

        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
    </Provider>
  );
}
