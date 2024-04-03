// netlify/functions/get-start-time.js
exports.handler = async (event, context) => {
  const startTime = new Date().toISOString();

  return {
    statusCode: 200,
    body: JSON.stringify({ startTime }),
    headers: {
      'Access-Control-Allow-Origin': '*', // CORS izinleri
    },
  };
};
