export const baseUrl = "https://api.nemec.nomoredomains.xyz";
// export const baseUrl = "http://localhost:3000";
export const moviesUrl = "https://api.nomoreparties.co";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(res);
};

export const errorType = {
  valueMissing: {
    default: "Это обязательное поле",
    search: "Введите ключевое слово",
  },
  typeMismatch: {
    name: "Это поле принимает только латиницу, кириллицу, пробел или дефис.",
    email: "Введите корректный email",
  },
  tooShort: {
    name: 'Имя пользователя должно состоять минимум из 2 символов"',
    password: "Пароль должен состоять минимум из 6 символов",
  },
};

export const cookieExpiredTime = 10000;

export const countMovieDuration = (duration) => {
  const hours = parseInt(duration / 60);
  const minutes = duration % 60;

  return {
    hours: hours,
    minutes: minutes,
  };
};

export const inputPatterns = {
  name: "^([А-Яа-яA-Za-z\\-])+$",
  email: undefined,  
};
