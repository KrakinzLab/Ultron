// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
const { MessageType } = require(`@adiwajshing/baileys`);
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `groupdp`,
  commandType: "Administration๐",
  description: `Use this module to change the group's icon.
Tag image with the module or send the desired image with caption as the module`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    try {
      if (!แดสแดสแดษด.isGroup) {
        await ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `This module is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (!แดสแดสแดษด.isImage && !แดสแดสแดษด.isReplyImage) {
        await ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Please reply or caption the image you want to make the group icon.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      var update = await ฯโััฯฮทโฮนัฮทั
        .sendMessage(
          แดสแดสแดษด.chatId,
          `Chnaging icon/group image...`,
          MessageType.text
        )
        .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
      var imageId = chat.key.id;
      const fileName = `./แดแดแดแด/change_pic` + imageId;
      if (แดสแดสแดษด.isImage) {
        var filePath = await ฯโััฯฮทโฮนัฮทั
          .downloadAndSaveMediaMessage(
            {
              message: chat.message,
            },
            fileName
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
      } else {
        var filePath = await ฯโััฯฮทโฮนัฮทั
          .downloadAndSaveMediaMessage(
            {
              message:
                chat.message.extendedTextMessage.contextInfo.quotedMessage,
            },
            fileName
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
      }

      const imagePath = `./แดแดแดแด/image-` + imageId + `.png`;
      ffmpeg(filePath)
        .outputOptions([`-y`, `-vcodec png`, `-s 500x500`])
        .videoFilters(
          `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease:eval=frame,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2,setsar=1:1`
        )
        .save(imagePath)
        .on(`end`, async () => {
          ฯโััฯฮทโฮนัฮทั
            .updateProfilePicture(แดสแดสแดษด.chatId, fs.readFileSync(imagePath))
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          fs.unlink(imagePath, (cแดสสแดส) => {
            if (cแดสสแดส) console.log(cแดสสแดส);
            else {
              console.log("Deleted!");
            }
          });
          fs.unlink(filePath, (cแดสสแดส) => {
            if (cแดสสแดส) console.log(cแดสสแดส);
            else {
              console.log("Deleted!");
            }
          });
        });
    } catch (cแดสสแดส) {
      await ฯโััฯฮทโฮนัฮทั.sendMessage(
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
