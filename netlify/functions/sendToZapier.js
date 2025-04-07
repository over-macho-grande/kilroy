// netlify/functions/sendToZapier.js

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const data = JSON.parse(event.body);

    const zapierWebhookURL = "https://hooks.zapier.com/hooks/catch/22380236/2cvmn0j/";

    const zapierResponse = await fetch(zapierWebhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!zapierResponse.ok) {
      return {
        statusCode: zapierResponse.status,
        body: "Zapier request failed",
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  } catch (error) {
    console.error("Error forwarding to Zapier:", error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  }
};
