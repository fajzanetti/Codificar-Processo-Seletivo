import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Image,
  Title,
  BackToSignIn,
  BackToSignInText,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import titleImg from '../../assets/title.png';

const SignUp: React.FC = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
      console.log('show', isKeyboardVisible);
    });
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      console.log('hide', isKeyboardVisible);
    });

    return () => {
      keyboardHide.remove();
      keyboardShow.remove();
    };
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container
            style={
              isKeyboardVisible && {
                bottom: 100,
              }
            }
          >
            <Image isKeyboard={isKeyboardVisible} source={titleImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('deu');
              }}
            >
              Cadastrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      {!isKeyboardVisible && (
        <BackToSignIn
          onPress={() => {
            console.log('deu');
          }}
        >
          <Icon name="arrow-left" size={20} color="#6c63ff" />
          <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
      )}
    </>
  );
};

export default SignUp;
