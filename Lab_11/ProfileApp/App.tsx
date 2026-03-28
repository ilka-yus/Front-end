import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileCard
          name='Иван Иванов'
          role='Mobile Developer'
          avatar='https://randomuser.me/api/portraits/men/27.jpg'
          bio='Люблю React Native и чистый код.'
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' }
});