// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
const ud = require(`urban-dictionary`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `ud`,
  commandType: "Funโก",
  description: `Urban Dictionary`,
  แดสแดสแดษดสึสษ: `Use this module to find the meaning of a word in Urban Dictionary. Enter  *${UltronSitreper.ULTRONIX}ud*  module.`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    try {
      var text = ``;
      if (!(แดสแดสแดษด.replyMessage === ``)) {
        text = แดสแดสแดษด.replyMessage;
      } else if (Arc.length === 0) {
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
              caption: `*โ ๏ธSeems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
            }
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      } else {
        text = Arc.join(` `);
      }

      let Response = await ud.define(text);
      let result = Response.reduce(function (prev, current) {
        return prev.thumbs_up + prev.thumbs_down >
          current.thumbs_up + current.thumbs_down
          ? prev
          : current;
      });

      result.definition = result.definition.replace(/\[/g, `_`);
      result.definition = result.definition.replace(/\]/g, `_`);
      result.example = result.example.replace(/\[/g, `_`);
      result.example = result.example.replace(/\]/g, `_`);

      let msg =
        `*Word :* ` +
        result.word +
        `\n\n*Meaning :*\n` +
        result.definition +
        `\n\n*Example:*\n` +
        result.example +
        `\nใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธใฐ๏ธ\n๐` +
        result.thumbs_up +
        `  ๐` +
        result.thumbs_down;
      await ฯโััฯฮทโฮนัฮทั
        .sendMessage(แดสแดสแดษด.chatId, msg, MessageType.text)
        .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
    } catch (cแดสสแดส) {
      ฯโััฯฮทโฮนัฮทั.sendMessage(
        แดสแดสแดษด.chatId,
        `*๐ฎแดสแดสแดษดโข* ๐๐ข๐๐ง'๐ญ ๐ฐ๐จ๐ซ๐ค ๐๐ฌ ๐๐ฑ๐ฉ๐๐๐ญ๐๐โ

๐ก๐๐ฒ๐ฟ๐ฒ ๐ถ๐ ๐ฎ ๐๐บ๐ฎ๐น๐น ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐ฎ๐ป๐ฑ ๐๐ผ ๐น๐ผ๐ด ๐๐ต๐ฒ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐๐๐ฒ ${UltronSitreper.ULTRONIX}๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
