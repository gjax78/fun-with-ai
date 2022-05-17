const fetchAPI = {
  postPrompt(prompt, engine) {
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 250,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }

    return fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (!response.ok) {
        throw new Error()
      } else {
        return response.json()
      }
    })
  }
}

export default fetchAPI