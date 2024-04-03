// netlify/functions/get-start-time.js
exports.handler = async (event, context) => {
  const startTime = process.env.START_TIME;

  return {
    statusCode: 200,
    body: JSON.stringify({ startTime }),
    headers: {
      'Access-Control-Allow-Origin': '*', // CORS izinleri
    },
  };
};
