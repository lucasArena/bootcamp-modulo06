import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static propType = {
    route: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
  };

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }

  render() {
    const { route } = this.props;
    const { name, bio, avatar } = route.params.user;
    const { stars } = this.state;
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: avatar }} />
          <Name>{name}</Name>
          <Bio>{bio}</Bio>
          <Stars
            data={stars}
            keyExtractor={(star) => star.id}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        </Header>
      </Container>
    );
  }
}
