import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Post,
  Avatar,
  UserDetail,
  Header,
  Author,
  UpdateAt,
  Text,
  Interaction,
  ButtonLike,
  Liketext,
  Icon,
} from './styles';

import avatarImg from '../../assets/avatar.png';

interface PostData {
  id: string;
  text: string;
  like: number;
  unlike: number;
  updatedAt: Date;
  author: string;
  authorId: string;
}

interface UserProps {
  id: string;
  name: string;
}

const Main: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const { token, user } = useAuth();
  const { id: idUser } = user as UserProps;

  const loadAllPosts = useCallback(async () => {
    const response = await api.get('/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setPosts(response.data.reverse());
  }, [token]);

  const handleLike = useCallback(
    async (id: string) => {
      const { data } = await api.put(
        `/posts/like/${id}`,
        { likeAdd: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setPosts(posts.map(post => (post.id === id ? data : post)));
    },
    [token, posts],
  );

  const handleUnLike = useCallback(
    async (id: string) => {
      const { data } = await api.put(
        `/posts/unlike/${id}`,
        { unlikeAdd: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setPosts(posts.map(post => (post.id === id ? data : post)));
    },
    [token, posts],
  );

  useEffect(() => {
    async function loadAllPosts() {
      const response = await api.get('/posts/myPosts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts(response.data.reverse());
    }
    loadAllPosts();
  }, [token]);

  return (
    <Container>
      <FlatList
        data={posts}
        keyExtractor={incident => incident.id}
        showsVerticalScrollIndicator={false}
        onTouchStart={loadAllPosts}
        renderItem={({ item: incident }) => (
          <Post>
            <UserDetail>
              <Avatar source={avatarImg} />
              <Header>
                <Author numberOfLines={1} ellipsizeMode="tail">
                  {incident.author}
                </Author>
                <UpdateAt>{incident.updatedAt}</UpdateAt>
              </Header>
            </UserDetail>
            <Text>{incident.text}</Text>
            <Interaction>
              <ButtonLike
                onPress={() => handleLike(incident.id)}
                disabled={idUser === incident.authorId}
              >
                <Icon
                  name="thumbs-up"
                  size={24}
                  color={idUser === incident.authorId ? '#a5a3ac' : '#3F3D56'}
                />
              </ButtonLike>
              <Liketext>{incident.like}</Liketext>
              <ButtonLike
                onPress={() => handleUnLike(incident.id)}
                disabled={idUser === incident.authorId}
              >
                <Icon
                  name="thumbs-down"
                  size={24}
                  color={idUser === incident.authorId ? '#a5a3ac' : '#3F3D56'}
                />
              </ButtonLike>
              <Liketext>{incident.unlike}</Liketext>
            </Interaction>
          </Post>
        )}
      />
    </Container>
  );
};

export default Main;
