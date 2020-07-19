import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Alert, FlatList, ScrollView, Modal, View, TextInput } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import InputPost from '../../components/InputPost';

import {
  LogOut,
  Container,
  UserDetail,
  Avatar,
  Title,
  Post,
  ButtonAddPost,
  Header,
  UpdateAt,
  Text,
  Interaction,
  ButtonLike,
  Liketext,
  Icon,
  ModalContainer,
  ButtonModalCancel,
  TitleModal,
  TextModal,
} from './styles';
import avatarImg from '../../assets/avatar.png';

interface PostData {
  id: string;
  text: string;
  like: number;
  unlike: number;
  updatedAt: string;
  author: string;
  authorId: string;
}

interface ModalProps {
  id: string;
  text: string;
}

interface UserProps {
  id: string;
  name: string;
  avatar: string;
}

interface FormAddPost {
  text: string;
  editar: string;
}

const Profile: React.FC = () => {
  // eslint-disable-next-line no-console
  console.disableYellowBox = true;

  const formRef = useRef<FormHandles>(null);
  const inputRef = useRef<TextInput>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [render, setRender] = useState(false);
  const [postModal, setPostModal] = useState<ModalProps>({} as ModalProps);
  const [posts, setPosts] = useState<PostData[]>([]);

  const { signOut, token, user } = useAuth();
  const { name: UserName } = user as UserProps;

  useEffect(() => {
    async function loadMyPosts() {
      const response = await api.get('/posts/myPosts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts(response.data.reverse());
    }
    loadMyPosts();
    setRender(false)
  }, [render, token]);

  const handleEditPost = useCallback(
    async (post: FormAddPost) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          editar: Yup.string().required(),
        });

        await schema.validate(post, { abortEarly: false });

        const { data } = await api.put(
          `/posts/${postModal.id}`,
          { text: post.editar },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setPosts(posts.map(post => (post.id === postModal.id ? data : post)));
        setPostModal({ id: '', text: '' });
        setModalVisible(false);
        setRender(true)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [token, posts, postModal],
  );

  const handleAddPost = useCallback(
    async (post: FormAddPost) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          text: Yup.string().required(),
        });

        await schema.validate(post, { abortEarly: false });

        const { data } = await api.post(
          '/posts',
          { text: post.text },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setPosts([...posts, data]);
        setRender(true)
        formRef.current?.reset({ text: '' })
        inputRef.current?.clear()
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [token, posts],
  );

  const handleDeletePost = useCallback(
    async (id: string) => {
      Alert.alert('Deseja deletar este post ?', '', [{
        text: 'Sim',
        onPress: () => {
          api.delete(`/posts/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setRender(true)
        },
      },
      {
        text: 'Não',
        onPress: () => { return },
      }])
    },
    [token],
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <UserDetail>
        <LogOut onPress={signOut}>
          <Icon name="log-out" size={28} color="#3f3d56" />
        </LogOut>
        <Avatar source={avatarImg} />
        <Title style={{ fontSize: 42 }}>{UserName}</Title>

        <Form
          style={{
            flexDirection: 'row',
          }}
          ref={formRef}
          onSubmit={handleAddPost}
        >
          <InputPost
            ref={inputRef}
            maxLength={280}
            multiline
            autoCapitalize="sentences"
            name="text"
            icon="message-circle"
            placeholder="Poste uma ideia"
          />
          <ButtonAddPost
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            <Icon name="send" size={28} color="#FFF" />
          </ButtonAddPost>
        </Form>
      </UserDetail>
      <Container>
        <FlatList
          data={posts}
          keyExtractor={incident => incident.id}
          showsVerticalScrollIndicator={false}
          // onTouchStart={loadMyPosts}
          renderItem={({ item: incident }) => (
            <Post key={incident.id}>
              <Header>
                <UpdateAt>{incident.updatedAt}</UpdateAt>
              </Header>
              <Text>{incident.text}</Text>
              <Interaction>
                <ButtonLike disabled>
                  <Icon name="thumbs-up" size={20} color="#a5a3ac" />
                  <Liketext style={{ color: '#a5a3ac' }}>
                    {incident.like}
                  </Liketext>
                </ButtonLike>
                <ButtonLike disabled>
                  <Icon name="thumbs-down" size={20} color="#a5a3ac" />
                  <Liketext style={{ color: '#a5a3ac' }}>
                    {incident.unlike}
                  </Liketext>
                </ButtonLike>
                <ButtonLike
                  onPress={() => {
                    setPostModal({ id: incident.id, text: incident.text });
                    setModalVisible(true);
                  }}
                >
                  <Icon name="edit" size={20} color="#3F3D56" />
                  <Liketext style={{ color: '#3F3D56' }}>Editar</Liketext>
                </ButtonLike>
                <ButtonLike
                  onPress={() => {
                    handleDeletePost(incident.id);
                  }}
                >
                  <Icon name="trash-2" size={20} color="#C53030" />
                  <Liketext style={{ color: '#C53030' }}>Deletar</Liketext>
                </ButtonLike>
              </Interaction>
            </Post>
          )}
        />
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(61,61,86,0.6)' }} >
            <ModalContainer>
              <ButtonModalCancel
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Icon name="x" size={32} color="#c53030" />
              </ButtonModalCancel>
              <TitleModal>Editar Ideal</TitleModal>
              <TextModal>{postModal.text}</TextModal>

              <Form
                style={{
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  position: 'absolute',
                  bottom: 0,
                }}
                ref={formRef}
                onSubmit={handleEditPost}
              >
                <InputPost
                  isModal
                  maxLength={280}
                  multiline
                  autoCapitalize="sentences"
                  name="editar"
                  icon="file-text"
                  placeholder="Editar"
                />
                <ButtonAddPost
                  style={{ backgroundColor: '#3f3d56' }}
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                >
                  <Icon name="edit-3" size={28} color="#fff" />
                </ButtonAddPost>
              </Form>
            </ModalContainer>
          </View>
        </Modal>
      </Container>
    </ScrollView >
  );
};

export default Profile;
