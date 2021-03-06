// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const ytdl = require(`ytdl-core`);
const yts = require(`yt-search`);
const fs = require(`fs`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `ytdl`,
  commandType: "Music๐",
  description: `Use this module to download audio of your choice either by specifying a YouTube link or the name of the song.`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
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
            caption: `*โ ๏ธSeems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
          }
        )
        .catch((cแดสสแดส) => {
          โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        });
      return;
    }
    await ฯโััฯฮทโฮนัฮทั
      .sendMessage(แดสแดสแดษด.chatId, `Downloading your song...`, MessageType.text)
      .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));

    // Task starts here
    var Id = ` `;
    if (Arc[0].includes(`youtu`)) {
      Id = Arc[0];
      try {
        if (Arc[0].includes(`watch?v=`)) {
          var songId = Arc[0].split(`watch?v=`)[1];
        } else {
          var songId = Arc[0].split(`/`)[3];
        }
        await yts({
          videoId: songId,
        });
      } catch (cแดสสแดส) {
        throw cแดสสแดส;
      }
    } else {
      var song = await yts(Arc.join(` `));
      song = song.all;
      if (song.length < 1) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Could not find the song you entered. Check whether the link or keyword entered is correct.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      Id = song[0].url;
    }
    try {
      var stream = ytdl(Id, {
        quality: `highestaudio`,
      });

      ffmpeg(stream)
        .audioBitrate(320)
        .toFormat(`ipod`)
        .saveToFile(`./แดสแดสแดษด/แดแดแดแด/${chat.key.id}.mp3`)
        .on(`end`, async () => {
          await ฯโััฯฮทโฮนัฮทั
            .sendMessage(แดสแดสแดษด.chatId, `Uploading song...`, MessageType.text)
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          await ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              fs.readFileSync(`./แดสแดสแดษด/แดแดแดแด/${chat.key.id}.mp3`),
              MessageType.audio,
              {
                mimetype: Mimetype.mp4Audio,
              }
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          fs.unlink(`./แดสแดสแดษด/แดแดแดแด/${chat.key.id}.mp3`, (cแดสสแดส) => {
            if (cแดสสแดส) console.log(cแดสสแดส);
            else {
              console.log("Deleted!");
            }
          });
        });
    } catch (cแดสสแดส) {
      throw cแดสสแดส;
    }
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
