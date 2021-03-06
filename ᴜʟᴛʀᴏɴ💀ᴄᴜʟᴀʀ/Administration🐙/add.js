// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `add`,
  commandType: "Administration๐",
  description: `Module to add a person to a group.
Add new people to a group by entering their mobile number as per the format mentioned below.
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example -
*${UltronSitreper.ULTRONIX}add 9861212121*
`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    try {
      if (!แดสแดสแดษด.isGroup) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `module only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (!แดสแดสแดษด.isBotGroupAdmin) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Sorry, don't have permission to do so since I am not an admin.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (Arc.length === 0) {
        await ฯโััฯฮทโฮนัฮทั.sendMessage(แดสแดสแดษด.chatId, "โ", MessageType.text);
        await ฯโััฯฮทโฮนัฮทั.sendMessage(
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
        );
        return;
      }
      let number;
      if (isNaN(Arc[0]) || Arc[0][0] === `+` || Arc[0].length < 10) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Valid formats -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX\n\nFor example-\n*${UltronSitreper.ULTRONIX}add 9861212121*\n*${UltronSitreper.ULTRONIX}add 919861212121*`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (Arc[0].length == 10 && !isNaN(Arc[0])) {
        number = `91` + Arc[0];
      } else {
        number = Arc[0];
      }
      const exists = await ฯโััฯฮทโฮนัฮทั.isOnWhatsApp(number + `@s.whatsapp.net`);
      if (!exists) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `The number you're trying to add isn't available on WhatsApp.\nPlease verify the number again.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      const request = ฯโััฯฮทโฮนัฮทั.groupAdd(แดสแดสแดษด.chatId, [
        แดสแดสแดษด.owner,
        number + `@s.whatsapp.net`,
      ]);
      const response = await request;

      if (response[number + `@c.us`] == 408) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `The number entered cannot be added back before 24 hours.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      } else if (response[number + `@c.us`] == 409) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `The number entered is already a member of this group.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      ฯโััฯฮทโฮนัฮทั.sendMessage(
        แดสแดสแดษด.chatId,
        ` ` + number + ` added successfully!` + ``,
        MessageType.text
      );
    } catch (cแดสสแดส) {
      if (cแดสสแดส.status == 400) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.
VERIFY NUMBER \  NOT IN WHATSAPP!
โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${แดสแดสแดษด.moduleName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐?? โข ${แดสแดสแดษด.isPm}`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
      }
      ฯโััฯฮทโฮนัฮทั.sendMessage(
        แดสแดสแดษด.chatId,
        `*๐ฎแดสแดสแดษดโข* ๐๐ข๐๐ง'๐ญ ๐ฐ๐จ๐ซ๐ค ๐๐ฌ ๐๐ฑ๐ฉ๐๐๐ญ๐๐โ

๐ก๐๐ฒ๐ฟ๐ฒ ๐ถ๐ ๐ฎ ๐๐บ๐ฎ๐น๐น ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐ฎ๐ป๐ฑ ๐๐ผ ๐น๐ผ๐ด ๐๐ต๐ฒ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐๐๐ฒ ${UltronSitreper.ULTRONIX}๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
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
