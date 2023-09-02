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
  tooShort: "Пароль должен состоять минимум из 6 символов",
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
  // email:
  //   "/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])+$/",
};
