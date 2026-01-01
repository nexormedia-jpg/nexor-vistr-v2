import { handleTelegramUpdate } from "./telegram/router.mjs";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    console.log("Incoming Telegram Update:", JSON.stringify(body));

    const response = await handleTelegramUpdate(body);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, response })
    };
  } catch (error) {
    console.error("Error in handler:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: error.message })
    };
  }
};
