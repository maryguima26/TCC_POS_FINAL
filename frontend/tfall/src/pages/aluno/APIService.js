export default class APIService {
  static async GetUser(token) {
    const resp = await fetch("http://127.0.0.1:8000/api/aluno/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    return await resp.json().user;
  }

  // static async UpdateAluno(aluno_id, body, token) {
  //   const resp = await fetch(`http://127.0.0.1:8000/api/aluno/${aluno_id}/`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Token ${token}`,
  //     },
  //     body: JSON.stringify(body),
  //   });
  //   return await resp.json();
  // }

  static DeleteAluno(aluno_id, token) {
    return fetch(`http://127.0.0.1:8000/api/aluno/${aluno_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static LoginUser(body) {
    return fetch("http://127.0.0.1:8000/api/token/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => {
      // resp.json()
      if (!resp.ok) {
        throw Error(resp);
      }
      return resp.json();
    });
  }

  static LoginUser(body) {
    return fetch("http://127.0.0.1:8000/api/token/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => {
      // resp.json()
      if (!resp.ok) {
        throw Error(resp);
      }
      return resp.json();
      // console.log(resp);
    });
  }

  static async RegisterAluno(body, token) {
    const resp = await fetch("http://127.0.0.1:8000/api/aluno/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    });
    return resp.json();
  }

  static async getUser(body, token) {
    const resp = await fetch("http://127.0.0.1:8000/api/token/auth/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    });
    // resp.json()
    if (!resp.ok) {
      throw Error(resp);
    }
    return await resp.json();
  }
}
