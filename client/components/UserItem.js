import React from 'react';
import { ListItem } from 'react-native-elements';
import { observer } from 'mobx-react';

export default observer(({ user, chevron }) => {
  console.log(`RENDER in UserItem(${user.name})`);
  return <ListItem
    leftAvatar={{ source: { uri: user.avatar } }}
    title={user.name}
    chevron={chevron}
  />;
});