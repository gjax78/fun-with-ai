const fetchAPI = {
  postPrompt(data) {
    return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
     })
  }
}

export default fetchAPI