const user = {
  id: 1,
  name: 'Jorge',
  username: 'asd',
  password: '123',
  token: 'megaToken',
  balance: 0,
  cards: [],
  status: 'ok'
};

// const data = window.localStorage.getItem('tmp_marketplace_vue31');

// if (data) {
//   const parsedData = JSON.parse(data);
//   Object.keys(parsedData).forEach((i) => {
//     user[i] = parsedData[i];
//   });
// }

export const Signup = async (name: string, username: string, password: string) => {
  console.log('signup');

  user.name = name;
  user.username = username;
  user.password = password;
  user.token = 'token_tunado';
  user.balance = Math.floor(Math.random() * 1000);

  //   window.localStorage.setItem('tmp_marketplace_vue31', JSON.stringify(user));

  return {
    status: 'ok',
    result: {
      id: user.id,
      name: user.name,
      username: user.username,
      token: user.token
    }
  };
};

export const Login = async (username: string, password: string) => {
  if (username !== user.username) {
    return { status: 'WRONG_USER' };
  }

  if (password !== user.password) {
    return { status: 'WRONG_PASSWORD' };
  }

  return {
    status: 'ok',
    result: {
      id: user.id,
      name: user.name,
      username: user.username,
      token: 'tokenMisterioso'
    }
  };
};
