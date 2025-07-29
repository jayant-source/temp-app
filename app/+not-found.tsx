import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';

export default function NotFoundScreen() {
  const { language } = useLanguage();

  return (
    <>
      <Stack.Screen options={{ title: translate('oops', language) }} />
      <View style={styles.container}>
        <Text style={styles.text}>{translate('screenNotExist', language)}</Text>
        <Link href="/" style={styles.link}>
          <Text>{translate('goToHome', language)}</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
