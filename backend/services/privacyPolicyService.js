const natural = require('natural');
const tokenizer = new natural.SentenceTokenizer();

function summarizePrivacyPolicy(fullText) {
  const sentences = tokenizer.tokenize(fullText);
  
  // This is a very basic summarization. You might want to use a more sophisticated
  // algorithm or a machine learning model for better results.
  const summary = sentences.slice(0, 5).join(' ');
  
  return summary;
}

module.exports = { summarizePrivacyPolicy };