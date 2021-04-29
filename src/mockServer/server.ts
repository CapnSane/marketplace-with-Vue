const users = [
  {
    id: 1,
    name: 'Jorge',
    username: 'Jorgito',
    password: '123123',
    token: 'megaToken',
    balance: 0,
    cards: [],
    status: 'ok'
  },
  {
    id: 2,
    name: 'Jorjão',
    username: 'Jorgelvis',
    password: 'asd',
    token: 'asd',
    balance: 0,
    cards: [],
    status: 'ok'
  }
];

// const data = window.localStorage.getItem('tmp_marketplace_vue31');

// if (data) {
//   const parsedData = JSON.parse(data);
//   Object.keys(parsedData).forEach((i) => {
//     user[i] = parsedData[i];
//   });
// }

export const Signup = async (name: string, username: string, password: string) => {
  console.log('signup');

  let newUser = {
    id: 0,
    name: name,
    username: username,
    password: password,
    token: 'superToken',
    balance: 0,
    cards: [],
    status: 'ok',
  };

  users.push(newUser);
  console.log(users);
  
  // user.name = name;
  // user.username = username;
  // user.password = password;
  // user.token = 'token_tunado';
  // user.balance = Math.floor(Math.random() * 1000);

  //   window.localStorage.setItem('tmp_marketplace_vue31', JSON.stringify(user));

  return {
    status: 'ok',
    result: {
      id: newUser.id,
      name: newUser.name,
      username: newUser.username,
      token: newUser.token
    }
  };
};

export const Login = async (username: string, password: string) => {
  let user;
  for (let i = 0; i < users.length; i++) {
    const guess = users[i];
    if (username === guess.username) {
      user = guess;
      break;
    }
  }
  if (!user) {
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
      token: user.token
    }
  };
};
