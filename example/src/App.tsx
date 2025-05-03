import { View, StyleSheet } from 'react-native';
import {
  Button,
  FabButton,
  RadioButton,
  Select,
  Switcher,
  Table,
  TextField,
  ThemeProvider,
} from 'react-native-astro-ui';

export default function App() {
  return (
    <ThemeProvider initialMode="light">
      <View style={styles.container}>
        <Button onClick={() => console.log('clicked')}>Hi</Button>
        <Table
          headings={['Name', 'Age']}
          rows={[
            ['John Doe', '30'],
            ['Jane Smith', '25'],
          ]}
        />
        <Select
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
          ]}
          value="1"
          onChange={(value) => console.log(value)}
          placeholder="Select an option"
        />
        <TextField />
        <RadioButton />
        <Switcher
          label="Switch me"
          value={true}
          onChange={(value) => console.log(value)}
        />
        <FabButton />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
