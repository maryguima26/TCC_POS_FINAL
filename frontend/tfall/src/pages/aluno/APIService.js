export default class APIService {
  static async GetAlunos(usuario, token) {
    const resp = await fetch(
      `http://ec2-54-165-229-139.compute-1.amazonaws.com/api/aluno/?search=${usuario.username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    if (!resp.ok) {
      throw Error(resp);
    }
    return await resp.json();
  }

  static async LoginUser(body) {
    const resp = await fetch(
      "http://ec2-54-165-229-139.compute-1.amazonaws.com/api/token/auth/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    // resp.json()
    if (!resp.ok) {
      throw Error(resp);
    }
    return await resp.json();
  }

  static async RegisterAluno(body, token) {
    const resp = await fetch(
      "http://ec2-54-165-229-139.compute-1.amazonaws.com/api/aluno/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      }
    );
    return await resp.json();
  }

  static async RegisterPerform(body, token) {
    const resp = await fetch(
      "http://ec2-54-165-229-139.compute-1.amazonaws.com/performance/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      }
    );
    if (!resp.ok) {
      throw Error(resp);
    }
    return await resp.json();
  }

  static async RegisterUser(body) {
    const resp = await fetch(
      "http://ec2-54-165-229-139.compute-1.amazonaws.com/api/user/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (!resp.ok) {
      throw Error(resp);
    }
    return await resp.json();
  }

  static async RetrieveTreino(nome, token) {
    const resp = await fetch(
      `http://ec2-54-165-229-139.compute-1.amazonaws.com/api/treino/?search=${nome}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    if (!resp.ok) {
      throw Error(resp);
    }
    return await resp.json();
  }
}
