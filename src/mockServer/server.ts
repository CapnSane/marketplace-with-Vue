const users = [
  {
    id: 1,
    name: 'Jorge Jorginaldo',
    username: 'Jorgito',
    password: '123123',
    token: 'megaToken',
    birthday: '29/02/1996',
    country: 'Brazil',
    city: 'Caximbinhas',
    address: 'Rua dos Jorges, 42',
    balance: 500,
    cards: [],
    status: 'ok'
  },
  {
    id: 2,
    name: 'Jorgelvis Jorgelvison',
    username: 'Jorjão',
    password: 'asd',
    token: 'asd',
    birthday: '01/01/2000',
    country: 'Brazil',
    city: 'Caximbinha do Norte',
    address: 'Rua dos Jorges, 21',
    balance: 30,
    cards: [],
    status: 'ok'
  }
];

// const data = window.localStorage.getItem('tmp_marketplace');

// if (data) {
//   const parsedData = JSON.parse(data);
//   Object.keys(parsedData).forEach((i) => {
//     users[0] = parsedData[i];
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
    birthday: '',
    country: '',
    city: '',
    address: '',
    balance: 0,
    cards: [],
    status: 'ok',
  };

  users.push(newUser);
  console.log(users);
  console.log(newUser.name);
  
  // newUser.name = name;
  // newUser.username = username;
  // newUser.password = password;
  // newUser.token = 'token_tunado';
  // newUser.balance = Math.floor(Math.random() * 1000);

  window.localStorage.setItem('tmp_marketplace', JSON.stringify(newUser));

  return {
    status: 'ok',
    result: {
      id: newUser.id,
      name: newUser.name,
      username: newUser.username,
      token: newUser.token,
      balance: newUser.balance,
      birthday: newUser.birthday,
      country: newUser.country,
      city: newUser.city,
      address: newUser.address,
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
      token: user.token,
      balance: user.balance,
      birthday: user.birthday,
      country: user.country,
      city: user.city,
      address: user.address,
    }
  };
};

// export const getMe = async () => ({
//   status: 'OK',
//   result: {
//     id: user.id,
//     name: user.name,
//     username: user.username,
//     balance: user.balance,
//     cards: user.cards,
//   },
// });

// export const buy = async (body: any) => {
//   console.log('comprou', body);
//   body.cards.forEach((card: any) => {
//     user.cards.push(card);
//     user.balance -= card.price;
//   });

//   window.localStorage.setItem('tmp_marketplace_vue31', JSON.stringify(user));

//   return {
//     status: 'OK',
//     result: {
//       balance: user.balance,
//     },
//   };
// };

// export const sell = async (body: any) => {
//   console.log(JSON.stringify(user.cards));

//   const idx = user.cards.findIndex((x: any) => x.id === body.card_id && x.price === body.price);

//   user.balance += body.price;

//   user.cards.splice(idx, 1);

//   window.localStorage.setItem('tmp_marketplace_vue31', JSON.stringify(user));

//   return {
//     status: 'OK',
//     result: {
//       balance: user.balance,
//     },
//   };
// };
