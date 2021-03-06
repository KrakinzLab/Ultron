// ===============================================================================
// đŽá´Ęá´Ęá´É´â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`á´Ęá´Ęá´É´.env`)) {
  require(`dotenv`).config({
    path: `./á´Ęá´Ęá´É´.env`,
  });
} else {
  require(`dotenv`);
}
// ===============================================================================
// đŽá´Ęá´Ęá´É´â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
const env = {
  ULTRON: process.env.ULTRON === undefined ? `` : process.env.ULTRON,
  HEROKU: process.env.HEROKU === undefined ? false : true,
  IMDB: process.env.IMDB === undefined ? `5e36f0db` : process.env.IMDB,
  ULTRONIX:
    process.env.ULTRONIX === undefined ? `^[!]` : `^[${process.env.ULTRONIX}]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: process.env.OCR === undefined ? `9ffb44def388957` : process.env.OCR,
  WAPI:
    process.env.CURRENT_WEATHER_API_KEY === undefined
      ? `6729ac2b2e2bb5c686ff427a2f06df92`
      : process.env.CURRENT_WEATHER_API_KEY,
  SQLL: (process.env.SQLL =
    process.env.SQLL === undefined ? `./á´Ęá´Ęá´É´.db` : process.env.SQLL),
  POSTQL:
    process.env.SQLL === `./á´Ęá´Ęá´É´.db`
      ? new Sequelize({
          dialect: `sqlite`,
          storage: process.env.SQLL,
        })
      : new Sequelize(process.env.SQLL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }),
  PRIVACY: process.env.PRIVACY === undefined ? `private` : process.env.PRIVACY,
  SUDO: process.env.SUDO === undefined ? `` : process.env.SUDO,
};
module.exports = env;
// ===============================================================================
// đŽá´Ęá´Ęá´É´â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
