// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../á´Êá´Êá´É´/UltronSitreper`);
const âÎ¹ÑÎ·Ñ = require("../../á´Êá´Êá´É´/catch");
const got = require(`got`);
// ââââââââââââââââââââââââââââââââââââââââââââ
module.exports = {
  name: `github`,
  commandType: "Funâ¡",
  description: `Get the github profile by module  *${UltronSitreper.ULTRONIX}github <user>*  
or replying  *${UltronSitreper.ULTRONIX}github* .`,
  async handle(ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, chat, á´Êá´Êá´É´, Arc) {
    try {
      let user_name = ``;
      if (á´Êá´Êá´É´.isReply) {
        user_name = á´Êá´Êá´É´.replyMessage;
      } else {
        if (Arc.length === 0) {
          await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ.sendMessage(á´Êá´Êá´É´.chatId, "â", MessageType.text);
          await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
            .sendMessage(
              á´Êá´Êá´É´.chatId,
              {
                url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                caption: `*â ï¸Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
              }
            )
            .catch((cá´ÊÊá´Ê) => {
              âÎ¹ÑÎ·Ñ.catch((cá´ÊÊá´Ê, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
            });
          return;
        }
        user_name = Arc[0];
      }
      let userResponse = await got(`https://api.github.com/users/` + user_name);
      let user = JSON.parse(userResponse.body);
      Object.keys(user).forEach(function (key) {
        if (user[key] === null || user[key] === ``) {
          user[key] = `N/A`;
        }
      });
      let caption =
        `*ð¤ Name :* ` +
        user.name +
        `\n*ð» Link :* ` +
        user.html_url +
        `\n*ð§ Type :* ` +
        user.type +
        `\n*ð¢ Company :* ` +
        user.company +
        `\n*ð­ Blog :* ` +
        user.blog +
        `\n*ð Location :* ` +
        user.location +
        `\n*ð Bio :* ` +
        user.bio +
        `\n*â¤ï¸ Followers :* ` +
        user.followers +
        `\n*ðï¸ Following :* ` +
        user.following +
        `\n*ð Public Repos :* ` +
        user.public_repos +
        `\n*ð Public Gists :* ` +
        user.public_gists +
        `\n*ð Profile Created :* ` +
        user.created_at +
        `\n*âï¸ Profile Updated :* ` +
        user.updated_at;
      if (user.public_repos > 0) {
        let reposResponse = await got(user.repos_url);
        let reposData = JSON.parse(reposResponse.body);
        repos = reposData[0].name;
        for (let i = 1; i < reposData.length && i < 5; i++) {
          repos += ` | ` + reposData[i].name;
        }
        caption += `\n*ð Some Repos :* ` + repos;
      }
      try {
        await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
          .sendMessage(
            á´Êá´Êá´É´.chatId,
            {
              url: user.avatar_url,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: caption,
              thumbnail: null,
            }
          )
          .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
      } catch (cá´ÊÊá´Ê) {
        ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ.sendMessage(á´Êá´Êá´É´.chatId, caption, MessageType.text);
      }
    } catch (cá´ÊÊá´Ê) {
      await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ.sendMessage(
        á´Êá´Êá´É´.chatId,
        `ê±á´á´á´á´ÊÉªÉ´É¢ á´¡á´É´á´ á´¡Êá´É´É¢.Êá´Êá´ á´Êá´ ê±á´á´á´ Êá´É¢ê± ê±ÉªÉ´á´á´ á´¡Êá´É´ á´Êá´ Êá´á´ á´¡á´ê± É´á´á´ Êá´ê±á´á´É´á´ÉªÉ´É¢ á´ê± á´xá´á´á´á´á´á´.
ACCOUNT NOT FOUND
â ï¸ðð¿ð¿ð¼ð¿
â¢ ${cá´ÊÊá´Ê}


ð¡ðð¼ðºðºð®ð»ð± â¢ ${á´Êá´Êá´É´.moduleName}
ð®ðð ðð®ð ð£ð ? â¢ ${á´Êá´Êá´É´.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
