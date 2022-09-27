const LOCALE = "en-US";

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString(LOCALE);
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatFloat(float) {
  return float.toFixed(2).toLocaleString(LOCALE);
}

export function sortQuestions(questions) {
  return questions.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
}
