const fs = require("fs/promises");
const gsjson = require("google-spreadsheet-to-json");

(async () => {
  try {
    const parsed = await gsjson({
      spreadsheetId: "1lUAMX7WYsTI6tlETd_1ojWfOdqlzFSbRsVH5jkFad3Y",
      worksheet: 0,
    });

    const result = parsed.reduce(
      (acc, { key, ru, uz }) => {
        acc.ru[key] = ru || "";
        acc.uz[key] = uz || "";

        return acc;
      },
      {
        ru: {},
        uz: {},
      }
    );
    await fs.writeFile(
      "./public/locales/ru/translation.json",
      JSON.stringify(result.ru, null, 2)
    );
    await fs.writeFile(
      "./public/locales/uz/translation.json",
      JSON.stringify(result.uz, null, 2)
    );
  } catch (error) {
    console.error(error);
  }
})();
