import { useApp } from '@realm/react';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


export function Login() {
  const app = useApp();

  async function handleSignIn() {
    try {
      const email = 'user@escola.com';
      const pass = '123456';

      const credentials = Realm.Credentials.emailPassword(email, pass);
      await app.logIn(credentials);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleSignIn}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});