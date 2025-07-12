import { ref } from 'vue'

export function useFetch(url, action, corps) {
  let data = ref(null)
  let error = ref(null)
  fetch(url, {
    method: action ? action : 'GET',
    body: JSON.stringify(corps),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((json) => {
      data.value = json
    })
    .catch((err) => (error.value = err))

  return { data, error }
}
