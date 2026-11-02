const API = 'https://6ae31757933120ae20f84337.mockapi.io/tasks';

const request = async (url, method = 'GET', body) => {
  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body && JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`Ошибка ${response.status}`);
  return response.json();
};

export const getTasks = (query) => request(`${API}?${query}`);
export const createTask = (task) => request(API, 'POST', task);
export const updateTask = (id, task) => request(`${API}/${id}`, 'PUT', task);
export const deleteTask = (id) => request(`${API}/${id}`, 'DELETE');
