export default class APIService {
  static async UpdateDica(dica_id, body, token) {
    const resp = await fetch(
      `http://15.228.156.155:8000/api/dicas/${dica_id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          // Authorization: `Token 3efdb00ecf3504c8e839a3b97bfb083f2556599c`,
        },
        body: JSON.stringify(body),
        referrerPolicy: "unsafe_url",
      }
    );
    return await resp.json();
  }

  static async InsertDica(body, token) {
    const resp = await fetch("http://15.228.156.155:8000/api/dicas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        // Authorization: `Token 3efdb00ecf3504c8e839a3b97bfb083f2556599c`,
      },
      body: JSON.stringify(body),
      referrerPolicy: "unsafe_url",
    });
    return await resp.json();
  }

  static DeleteDica(dica_id, token) {
    return fetch(`http://15.228.156.155:8000/api/dicas/${dica_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        // Authorization: `Token 3efdb00ecf3504c8e839a3b97bfb083f2556599c`,
      },
      referrerPolicy: "unsafe_url",
    }
    );
  }

  static async LoginUser(body, token) {
    const resp = await fetch("http://15.228.156.155:8000/api/token/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      referrerPolicy: "unsafe_url",
    });
    // resp.json()
    if (!resp.ok) {
      throw Error(resp);
    }
    return await resp.json();
  }

  static async RegisterUser(body) {
    const resp = await fetch("http://15.228.156.155:8000/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      referrerPolicy: "unsafe_url",
    });
    return resp.json();
  }
}
