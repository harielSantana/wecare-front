export const API_URL = process.env.REACT_APP_END_POINT;

export function CAREGIVER_POST(body) {
  return {
    url: API_URL + 'signup/caregiver',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function CAREGIVER_GET(token) {
  return {
    url: API_URL + '/api/caregiver',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

/*PHOTO */

export function USER_PHOTO_POST(body) {
  return {
    url: API_URL + '/photos',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function CAREGIVER_PHOTO_POST(body) {
  return {
    url: API_URL + '/photos',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_PHOTO_GET(token, iscaregiver) {
  return {
    url: API_URL + `/Photos?token=${token}&IsCaregiver=${iscaregiver}`,
    options: {
      method: 'GET',
    },
  };
}
