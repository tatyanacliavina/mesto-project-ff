const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-22",
  headers: {
    authorization: "afba6626-4902-4e72-b000-2c6e7befb6da",
    "Content-Type": "application/json",
  },
};

export function promisProfile() {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    headers: apiConfig.headers,
  }).then(promisStatus);
}

export function promisCards() {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    headers: apiConfig.headers,
  }).then(promisStatus);
}

export function saveCard(nameCard, linkCard) {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    headers: apiConfig.headers,
    method: "POST",
    body: JSON.stringify({
      name: nameCard,
      link: linkCard,
    }),
  }).then(promisStatus);
}

export function saveInfoProfile(name, job) {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: job,
    }),
  }).then(promisStatus);
}

export function saveNewAvatar(link) {
  return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  }).then(promisStatus);
}

export function promisDeleteCard(cardId) {
  return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(promisStatus);
}

export function likePut(cardId) {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: apiConfig.headers,
  }).then(promisStatus);
}

export function likeDelete(cardId) {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(promisStatus);
}

function promisStatus(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
