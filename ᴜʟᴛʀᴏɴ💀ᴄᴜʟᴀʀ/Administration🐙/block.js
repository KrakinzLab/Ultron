// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `block`,
  commandType: "Administration๐",
  description: `Add the number to blocklist. You can reply to the person in group / pm or use .block <number>.`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    try {
      if (!แดสแดสแดษด.isReply && typeof Arc[0] == `undefined`) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Tag a message or enter a number to proceed.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      const reply = chat.message.extendedTextMessage;
      var contact = ``;
      if (!Arc.length > 0) {
        contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        contact = async (Arc, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด) => {
          var JoinIDNum = ``;
          var countryCode = UltronSitreper.COUNTRY_CODE;
          if (isNaN(Arc[0]) || Arc[0][0] === `+`) {
            if (Arc[0][0] === `@` || Arc[0][0] === `+`) {
              JoinIDNum = Arc[0].substring(1, Arc[0].length + 1);
            } else {
              ฯโััฯฮทโฮนัฮทั
                .sendMessage(
                  แดสแดสแดษด.chatId,
                  `*Enter valid contact number.* 
Approved Syntax:
1. XXXXXXXXXX
2. Tag the person
3. +(YYY)XXXXXXXXXX _(YY- Country Code, without zeros)_`,
                  MessageType.text
                )
                .catch((cแดสสแดส) => {
                  โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
                });
              return;
            }
          } else {
            JoinIDNum = Arc[0];
          }

          if (JoinIDNum.length < 8 || JoinIDNum.length > 13) {
            ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                `*Enter valid contact number.* 
Approved Syntax:
1. XXXXXXXXXX
2. Tag the person
3. +(YYY)XXXXXXXXXX _(YY- Country Code, without zeros)_`,
                MessageType.text
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          } else if (JoinIDNum.length === 10) {
            JoinIDNum = countryCode + JoinIDNum;
          }
          var isOnWhatsApp = await ฯโััฯฮทโฮนัฮทั.isOnWhatsApp(JoinIDNum);
          if (isOnWhatsApp === undefined) {
            throw `NumberInvalid`;
          }
          return JoinIDNum;
        };
      }

      if (contact === แดสแดสแดษด.owner.split(`@`)[0]) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Bot can not block itself`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }

      if (contact === ``) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Tag a message or enter a number to proceed.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      var JID = contact + `@s.whatsapp.net`;
      ฯโััฯฮทโฮนัฮทั.blockUser(JID, `add`);
      ฯโััฯฮทโฮนัฮทั
        .sendMessage(
          แดสแดสแดษด.chatId,
          `*` + contact + ` blocked successfully.*`,
          MessageType.text
        )
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
