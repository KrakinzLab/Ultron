// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const translate = require(`@vitalets/google-translate-api`);
const { MessageType } = require(`@adiwajshing/baileys`);
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `tr`,
  commandType: "Funโก",
  description: `Language Translator`,
  แดสแดสแดษดสึสษ: `Use  *${UltronSitreper.ULTRONIX}tr <text> | <language>*  to translate text to the specified language. You can also reply to a text message with syntax  *${UltronSitreper.ULTRONIX}tr <language>*  to translate text.
If you do not specify a language, it defaults to <English class=''></English>`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    const processing = await ฯโััฯฮทโฮนัฮทั
      .sendMessage(
        แดสแดสแดษด.chatId,
        `Translating. Please wait...`,
        MessageType.text
      )
      .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
    try {
      var text = ``;
      var language = ``;
      if (Arc.length === 0) {
        await ฯโััฯฮทโฮนัฮทั.sendMessage(แดสแดสแดษด.chatId, "โ", MessageType.text);
        await ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            {
              url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*โ?๏ธSeems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
            }
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (!แดสแดสแดษด.isReply) {
        try {
          var body = แดสแดสแดษด.body.split(`|`);
          text = body[0].replace(แดสแดสแดษด.body[0] + แดสแดสแดษด.moduleName + ` `, ``);
          var i = 0;
          while (body[1].split(` `)[i] == ``) {
            i++;
          }
          language = body[1].split(` `)[i];
        } catch (cแดสสแดส) {
          if (cแดสสแดส instanceof TypeError) {
            text = แดสแดสแดษด.body.replace(
              แดสแดสแดษด.body[0] + แดสแดสแดษด.moduleName + ` `,
              ``
            );
            language = `English`;
          }
        }
      } else if (แดสแดสแดษด.replyMessage) {
        text = แดสแดสแดษด.replyMessage;
        language = Arc[0];
      } else {
        await ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Please reply to a text message.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
      }
      if (text.length > 4000) {
        await ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `*Total characters should be less than 4000.*\nTotal characters for current input were {}.`.format(
              text.length
            ),
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
      }
      await translate(text, {
        to: language,
      })
        .then((res) => {
          ฯโััฯฮทโฮนัฮทั.sendMessage(
            แดสแดสแดษด.chatId,
            `*TR:* Translate [*{}* -> *{}*]\n\n{}`.format(
              res.from.language.iso,
              language,
              res.text
            ),
            MessageType.text
          );
        })
        .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
    } catch (cแดสสแดส) {
      ฯโััฯฮทโฮนัฮทั.sendMessage(
        แดสแดสแดษด.chatId,
        `*๐ฎแดสแดสแดษดโข* ๐๐ข๐๐ง'๐ญ ๐ฐ๐จ๐ซ๐ค ๐๐ฌ ๐๐ฑ๐ฉ๐๐๐ญ๐๐โ

๐ก๐๐ฒ๐ฟ๐ฒ ๐ถ๐ ๐ฎ ๐๐บ๐ฎ๐น๐น ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐ฎ๐ป๐ฑ ๐๐ผ ๐น๐ผ๐ด ๐๐ต๐ฒ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐๐๐ฒ ${UltronSitreper.ULTRONIX}๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
