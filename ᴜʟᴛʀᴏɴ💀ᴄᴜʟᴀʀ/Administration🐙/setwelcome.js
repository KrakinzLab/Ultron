// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const { MessageType } = require(`@adiwajshing/baileys`);
const Greetings = require(`../../แดสแดสแดษด/ษ ษ แดสแดสแดษด`);
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `setwelcome`,
  commandType: "Administration๐",
  description: `New members of a group chat will be welcomed with a message. 
It can be an image, video, gif with caption or just a text message.
Use this module to either set, update or delete the existing message.
The welcome option can be disabled but saved using the   *${UltronSitreper.ULTRONIX}welcome  off*  module. 
In order to delete the existing message, use  *${UltronSitreper.ULTRONIX}welcome  delete*${UltronSitreper.ULTRONIX} .
Do note, the welcome option is still enabled after you use the delete option.`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    try {
      if (!แดสแดสแดษด.isGroup) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `This module is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      var Msg = await Greetings.getMessage(แดสแดสแดษด.chatId, `welcome`);
      if (Arc.length == 0) {
        var enabled = await Greetings.checkSettings(แดสแดสแดษด.chatId, `welcome`);
        try {
          if (enabled === false || enabled === undefined) {
            ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                `Set a welcome message first.`,
                MessageType.text
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          } else if (enabled === `OFF`) {
            ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                `Greetings are enabled: False \nCurrently greeting new members with:`,
                MessageType.text
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            ฯโััฯฮทโฮนัฮทั
              .sendMessage(แดสแดสแดษด.chatId, Msg.message, MessageType.text)
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          }

          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `Greetings are enabled: True \nCurrently greeting new members with:`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(แดสแดสแดษด.chatId, Msg.message, MessageType.text)
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
        } catch (cแดสสแดส) {
          throw cแดสสแดส;
        }
      } else {
        try {
          if (Arc[0] === `OFF` || Arc[0] === `off` || Arc[0] === `Off`) {
            switched = `OFF`;
            await Greetings.changeSettings(แดสแดสแดษด.chatId, switched);
            ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                `Welcome message has been disabled.`,
                MessageType.text
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          }
          if (Arc[0] === `ON` || Arc[0] === `on` || Arc[0] === `On`) {
            switched = `ON`;
            await Greetings.changeSettings(แดสแดสแดษด.chatId, switched);
            ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                `Welcome message has been enabled.`,
                MessageType.text
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          }
          if (Arc[0] === `delete`) {
            var Msg = await Greetings.deleteMessage(แดสแดสแดษด.chatId, `welcome`);
            if (Msg === false || Msg === undefined) {
              ฯโััฯฮทโฮนัฮทั
                .sendMessage(
                  แดสแดสแดษด.chatId,
                  `Set a welcome message first.`,
                  MessageType.text
                )
                .catch((cแดสสแดส) => {
                  โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
                });
              return;
            }

            await ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                `Welcome message deleted.`,
                MessageType.text
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          }
          text = แดสแดสแดษด.body.replace(
            แดสแดสแดษด.body[0] + แดสแดสแดษด.moduleName + ` `,
            ``
          );
          if (Msg === false || Msg === undefined) {
            await Greetings.setWelcome(แดสแดสแดษด.chatId, text);
            await ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                `Welcome message updated and enabled.`,
                MessageType.text
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          } else {
            await Greetings.deleteMessage(แดสแดสแดษด.chatId, `welcome`);
            await Greetings.setWelcome(แดสแดสแดษด.chatId, text);
            await ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                `Welcome message updated and enabled.`,
                MessageType.text
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          }
        } catch (cแดสสแดส) {
          throw cแดสสแดส;
        }
      }
    } catch (cแดสสแดส) {
      ฯโััฯฮทโฮนัฮทั.sendMessage(
        แดสแดสแดษด.chatId,
        `*๐ฎแดสแดสแดษดโข* ๐๐ข๐๐ง'๐ญ ๐ฐ๐จ๐ซ๐ค ๐๐ฌ ๐๐ฑ๐ฉ๐๐๐ญ๐๐โ

๐ก๐๐ฒ๐ฟ๐ฒ ๐ถ๐ ๐ฎ ๐๐บ๐ฎ๐น๐น ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐ฎ๐ป๐ฑ ๐๐ผ ๐น๐ผ๐ด ๐๐ต๐ฒ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐๐๐ฒ ${UltronSitreper.ULTRONIX}๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}`,
        MessageType.text
      );
      return;
    }
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
