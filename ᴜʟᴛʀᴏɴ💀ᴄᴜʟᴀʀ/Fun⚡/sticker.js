// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const { MessageType, MimetypeMap } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `sticker`,
  commandType: "Funโก",
  description: `Module to convert image to sticker`,
  แดสแดสแดษดสึสษ: `Use this module to convert any image from your chat to a sticker. Reply to an image message with the module  *${UltronSitreper.ULTRONIX}sticker*  to convert and send that image as a sticker.`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    try {
      const convertToSticker = async (imageId, replyChat) => {
        await ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Your sticker is downloading. Please wait...`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        const filePath = await ฯโััฯฮทโฮนัฮทั
          .downloadAndSaveMediaMessage(replyChat, `./แดสแดสแดษด/แดแดแดแด/ct-` + imageId)
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        const stickerPath = `./แดสแดสแดษด/แดแดแดแด/st-` + imageId + `.webp`;
        if (แดสแดสแดษด.type === `image` || แดสแดสแดษด.isReplyImage) {
          ffmpeg(filePath)
            .outputOptions([`-y`, `-vcodec libwebp`])
            .videoFilters(
              `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
            )
            .save(stickerPath)
            .on(`end`, async () => {
              await ฯโััฯฮทโฮนัฮทั
                .sendMessage(
                  แดสแดสแดษด.chatId,
                  fs.readFileSync(stickerPath),
                  MessageType.sticker
                )
                .catch((cแดสสแดส) => {
                  โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
                });
              fs.unlink(filePath, (cแดสสแดส) => {
                if (cแดสสแดส) {
                  console.log(cแดสสแดส);
                } else {
                  console.log("Deleted!");
                }
              });
              fs.unlink(stickerPath, (cแดสสแดส) => {
                if (cแดสสแดส) {
                  console.log(cแดสสแดส);
                } else {
                  console.log("Deleted!");
                }
              });
            })
            .on(`error`, async (CYฮฃะฏะฏ) => {
              ฯโััฯฮทโฮนัฮทั.sendMessage(
                แดสแดสแดษด.chatId,
                `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.

โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${CYฮฃะฏะฏ}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${แดสแดสแดษด.moduleName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐?? โข ${แดสแดสแดษด.isPm}`,
                MessageType.text
              );
            });
          return;
        }
        ffmpeg(filePath)
          .duration(8)
          .outputOptions([
            `-y`,
            `-vcodec libwebp`,
            `-lossless 1`,
            `-qscale 1`,
            `-preset default`,
            `-loop 0`,
            `-an`,
            `-vsync 0`,
            `-s 600x600`,
          ])
          .videoFilters(
            `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
          )
          .save(stickerPath)
          .on(`end`, async () => {
            await ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                fs.readFileSync(stickerPath),
                MessageType.sticker
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            fs.unlink(filePath, (cแดสสแดส) => {
              if (cแดสสแดส) {
                console.log(cแดสสแดส);
              } else {
                console.log("Deleted!");
              }
            });
            fs.unlink(stickerPath, (cแดสสแดส) => {
              if (cแดสสแดส) {
                console.log(cแดสสแดส);
              } else {
                console.log("Deleted!");
              }
            });
          })
          .on(`cแดสสแดส`, async (CYฮฃะฏะฏ) => {
            return ฯโััฯฮทโฮนัฮทั.sendMessage(
              แดสแดสแดษด.chatId,
              `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.

โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${CYฮฃะฏะฏ}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${แดสแดสแดษด.moduleName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐?? โข ${แดสแดสแดษด.isPm}`,
              MessageType.text
            );
          });
      };

      if (แดสแดสแดษด.isImage || แดสแดสแดษด.isGIF || แดสแดสแดษด.isVideo) {
        var replyChatObject = {
          message: chat.message,
        };
        var imageId = chat.key.id;
        convertToSticker(imageId, replyChatObject);
      } else if (
        แดสแดสแดษด.isReplyImage ||
        แดสแดสแดษด.isReplyGIF ||
        แดสแดสแดษด.isReplyVideo
      ) {
        var replyChatObject = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
        convertToSticker(imageId, replyChatObject);
      } else {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Please tag a valid image/video/gif message to convert to sticker.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
      }
      return;
    } catch (CYฮฃะฏะฏ) {
      ฯโััฯฮทโฮนัฮทั.sendMessage(
        แดสแดสแดษด.chatId,
        `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.
ENTER VALID FILE!
โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${CYฮฃะฏะฏ}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${แดสแดสแดษด.moduleName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐?? โข ${แดสแดสแดษด.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
