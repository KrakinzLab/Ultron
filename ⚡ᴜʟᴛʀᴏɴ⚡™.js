// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const { registerFont, createCanvas, loadImage } = require(`canvas`);
registerFont(`./แดสแดสแดษด/Honeycomb-Round.otf`, { family: `Honeycomb` });
registerFont(`./แดสแดสแดษด/LobsterTwo-Bold.ttf`, { family: `Lobster` });
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`./แดสแดสแดษด/UltronSitreper`);
const แดสแดสแดษดึสีผึึ = require(`./แดสแดสแดษด/UltronCOrex`);
var randomMC = require(`random-material-color`);
const ษ ษ แดสแดสแดษด = require(`./แดสแดสแดษด/ษ ษ แดสแดสแดษด`);
const แดสแดสแดษดวึึ = require(`./แดสแดสแดษด/helper`);
const clientult = require(`./แดสแดสแดษด/ษ ษ ส`);
const แดสแดสแดษดsql = UltronSitreper.POSTQL;
const แดสแดสแดษดSudo = [`block`, `unblock`];
var rg = require(`random-greetings`);
const Kolor = require(`chalk`);
const fs = require(`fs`);
console.clear();
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
var ฯโััฯฮทโฮนัฮทั = แดสแดสแดษดึสีผึึ.WhatsApp;
async function แดสแดสแดษดRunner() {
  ฯโััฯฮทโฮนัฮทั.logger.level = `error`;
  var UltronSitrep = new Map();
  try {
    var session = แดสแดสแดษดึสีผึึ.ultronreignite(UltronSitreper.ULTRON);
    ฯโััฯฮทโฮนัฮทั.loadAuthInfo(session);
  } catch (cแดสสแดส) {
    if (
      cแดสสแดส instanceof TypeError ||
      cแดสสแดส.message === `given authInfo is null` ||
      cแดสสแดส instanceof SyntaxError
    ) {
      console.log(
        Kolor.redBright.bold(
          `Incorrect Session String. Please authenticate again!`
        )
      );
      process.exit(0);
    } else {
      console.log(Kolor.redBright.bold(`SOMETHING WENT WRONG.\n`));
      process.exit(0);
    }
  }
  // ===============================================================================
  // ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
  // ===============================================================================
  ฯโััฯฮทโฮนัฮทั.on(`connecting`, async () => {
    console.log(Kolor.yellowBright.bold(`๐กโฌฐ  ๐๐ฐ๐ฏ๐ฏ๐ฆ๐ค๐ต๐ช๐ฏ๐จ ๐ต๐ฐ ๐๐ฉ๐ข๐ต๐ด๐๐ฑ๐ฑ...๐ค`));
  });
  // ===============================================================================
  // ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
  // ===============================================================================
  ฯโััฯฮทโฮนัฮทั.on(`open`, async () => {
    console.log(Kolor.yellowBright.bold(`๐กโฌฐ  ๐๐ฐ๐ฏ๐ฏ๐ฆ๐ค๐ต๐ช๐ฏ๐จ ๐ต๐ฐ ๐๐ข๐ต๐ข๐ฃ๐ข๐ด๐ฆ...โ`));
    try {
      await แดสแดสแดษดsql.authenticate();
    } catch (error) {
      console.error(`โโฌฐ Unable to connect to the database:`, error);
    }
    console.log(Kolor.yellowBright.bold(`๐กโฌฐ  ๐๐บ๐ฏ๐ค๐ช๐ฏ๐จ ๐๐ข๐ต๐ข ๐ธ๐ช๐ต๐ฉ ๐๐ฐ๐ด๐ต...โ`));
    await แดสแดสแดษดsql.sync();
    console.clear();
    console.log(Kolor.yellowBright.bold(`๐กโฌฐ  ๐๐ฏ๐ด๐ต๐ข๐ญ๐ญ๐ช๐ฏ๐จ ๐๐ญ๐ถ๐จ๐ช๐ฏ๐ด...โ`));
    const Folders = fs.readdirSync(`./แดสแดสแดษด๐แดแดสแดส`);
    for (const folder of Folders) {
      const moduleFiles = fs
        .readdirSync(`./แดสแดสแดษด๐แดแดสแดส/${folder}`)
        .filter((file) => file.endsWith(`.js`));
      for (const file of moduleFiles) {
        const module = require(`./แดสแดสแดษด๐แดแดสแดส/${folder}/${file}`);
        UltronSitrep.set(module.name, module);
        console.log(
          Kolor.yellowBright.bold(`๐กโฌฐ  `),
          Kolor.greenBright.bold(module.name),
          Kolor.whiteBright.bold(module.description.toLowerCase())
        );
      }
    }
    // ===============================================================================
    // ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
    // ===============================================================================
    await ฯโััฯฮทโฮนัฮทั.sendMessage(
      ฯโััฯฮทโฮนัฮทั.user.jid,
      {
        url: `https://i.postimg.cc/KcNwHtZt/ltr.png`,
      },
      MessageType.image,
      {
        mimetype: Mimetype.png,
        caption: `*โก๐๐๐๐๐๐โข*\n๐๐๐๐ ๐๐๐ฅ๐จ๐ฐ๐๐ฝ`,
      }
    );
    await ฯโััฯฮทโฮนัฮทั.sendMessage(
      ฯโััฯฮทโฮนัฮทั.user.jid,
      {
        buttonText: "๐๐น๐ถ๐ฐ๐ธ ๐๐ฒ๐ฟ๐ฒโค  เน?เน",
        description: "All Good To Go Sir!",
        sections: [
          {
            title: "*โก๐๐๐๐๐๐โข*",
            rows: [
              {
                title: "โ๏ธ๐๐ข๐ญ๐๐ฎ๐",
                description: `๐DEV: https://github.com/RED-ALISON
                ๐ULTRON: https://github.com/RED-ALISON/Ultron`,
                rowId: "rowid1",
              },
              {
                title: "โ๏ธ๐๐ง๐ค๐ช๐ฅ",
                description: `๐Whatsapp: https://chat.whatsapp.com/ILVS6uZVPvO6bWqyxUr5pg
                ๐Discord: https://discord.gg/xcFN6NDHEV`,
                rowId: "rowid2",
              },
            ],
          },
        ],
        listType: 1,
      },
      MessageType.listMessage
    );
    console.log(
      Kolor.yellowBright.bold(
        `=================๐    |  แดสแดสแดษด  |    ๐=================`
      ),
      Kolor.redBright.bold(`
โโโ   โโโโโโ  โโโโโโโโโโโโโโโโ  โโโโโโโ โโโโ   โโโ
โโโ   โโโโโโ  โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ  โโโ
โโโ   โโโโโโ     โโโ   โโโโโโโโโโโ   โโโโโโโโโ โโโ
โโโ   โโโโโโ     โโโ   โโโโโโโโโโโ   โโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ   โโโ  โโโโโโโโโโโโโโโ โโโโโโ
โโโโโโโ โโโโโโโโโโโ   โโโ  โโโ โโโโโโโ โโโ  โโโโโ`),
      Kolor.yellowBright.bold(
        `\n=================๐    |  แดสแดสแดษด  |    ๐=================
๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..`
      )
    );
  });
  // ===============================================================================
  // ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
  // ===============================================================================
  await ฯโััฯฮทโฮนัฮทั.connect();
  ฯโััฯฮทโฮนัฮทั.on(`group-participants-update`, async (update) => {
    console.log(
      `=================๐    |  ษขสแดแดแด แดแดสแดษชแดษชแดแดษดแด แดแดแดแดแดแด  |    ๐=================`
    );
    console.log(update.participants);
    console.log(update.actor);
    console.log(update.jid);
    var groupId = update.jid;
    var parID = update.participants;
    try {
      if (update.action === `add`) {
        var enable = await ษ ษ แดสแดสแดษด.checkSettings(groupId, `welcome`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        var greets = [
          `IDโ ${parID}\nJust joined the server - glhf!`,
          `IDโ ${parID}\nJust joined. Everyone, look busy!`,
          `IDโ ${parID}\nJust joined. Can I get a heal?`,
          `IDโ ${parID}\nJoined your party.`,
          `IDโ ${parID}\nJoined. You must construct additional pylons.`,
          `IDโ ${parID}\nIs here.`,
          `IDโ ${parID}\nWelcome, Stay awhile and listen.`,
          `IDโ ${parID}\nWelcome, We were expecting you ( อกยฐ อส อกยฐ)`,
          `IDโ ${parID}\nWelcome, We hope you brought pizza.`,
          `IDโ ${parID}\nWelcome Leave your weapons by the door.`,
          `IDโ ${parID}\nJust Appeared.`,
          `IDโ ${parID}\nSwoooosh. Just landed.`,
          `IDโ ${parID}\nBrace yourselves. Just joined the server.`,
          `IDโ ${parID}\nJust joined. Hide your bananas.`,
          `IDโ ${parID}\nJust arrived. Seems OP - please nerf.`,
          `IDโ ${parID}\nJust slid into the server.`,
          `IDโ ${parID}\nHas spawned in the server.`,
          `IDโ ${parID}\nShowed up!`,
          `IDโ ${parID}\nHopped into the server. Kangaroo!!`,
          `IDโ ${parID}\nJust showed up. Hold my beer.`,
        ];
        var Fetched = await ษ ษ แดสแดสแดษด.getMessage(groupId, `welcome`);
        const width = 1280;
        const height = 720;
        const canvas = createCanvas(width, height);
        const context = canvas.getContext(`2d`);
        context.fillStyle = `#555555`;
        context.fillRect(0, 0, width, height);
        context.font = `bold 50pt Lobster`;
        context.textAlign = `center`;
        context.textBaseline = `top`;
        const text = greets[Math.floor(Math.random() * greets.length)];
        const textWidth = context.measureText(text).width;
        context.fillRect(
          600 - textWidth / 2 - 10,
          170 - 5,
          textWidth + 20,
          120
        );
        const text2 = rg.greet();
        context.fillStyle = randomMC.getColor();
        context.fillText(text, 600, 170);
        context.fillStyle = `#fff`;
        context.font = `bold 40pt Honeycomb`;
        context.fillText(text2, 600, 530);
        const myimg = loadImage(`./แดสแดสแดษด/แดสแดสแดษดษ ษ .png`);
        await myimg.then(() => {
          const buffer = canvas.toBuffer(`image/png`);
          fs.writeFileSync(`./แดสแดสแดษด/แดสแดสแดษดษ ษ .png`, buffer);
          ฯโััฯฮทโฮนัฮทั.sendMessage(
            groupId,
            {
              url: `./แดสแดสแดษด/แดสแดสแดษดษ ษ .png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: `โ* ${Fetched.message}`,
            }
          );
        });
        return;
      } else if (update.action === `remove`) {
        var enable = await ษ ษ แดสแดสแดษด.checkSettings(groupId, `goodbye`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        ฯโััฯฮทโฮนัฮทั.sendMessage(groupId, `GooDbye`, MessageType.text);
      }
    } catch (cแดสสแดส) {
      console.log(cแดสสแดส);
    }
  });
  // ===============================================================================
  // ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
  // ===============================================================================
  ฯโััฯฮทโฮนัฮทั.on(`chat-update`, async (chat) => {
    if (!chat.hasNewMessage) {
      return;
    }
    if (!chat.messages) {
      return;
    }
    chat = chat.messages.all()[0];
    var sender = chat.key.remoteJid;
    const groupMetadata = sender.endsWith(`@g.us`)
      ? await ฯโััฯฮทโฮนัฮทั.groupMetadata(sender)
      : ``;
    var แดสแดสแดษด = แดสแดสแดษดวึึ.resolve(chat, ฯโััฯฮทโฮนัฮทั, groupMetadata);
    const adminmodls = [
      `add`,
      `demote`,
      `invite`,
      `mute`,
      `promote`,
      `remove`,
      `unmute`,
      `welcome`,
      `disappear`,
      `goodbye`,
      `setdp`,
      `tagall`,
    ];
    if (แดสแดสแดษด.isCmd && !แดสแดสแดษด.fromMe && !แดสแดสแดษด.isSenderSUDO) {
      if (UltronSitreper.PRIVACY === `public`) {
        if (
          adminmodls.indexOf(แดสแดสแดษด.moduleName) >= 0 &&
          !แดสแดสแดษด.isSenderGroupAdmin
        ) {
          console.log(
            Kolor.redBright.bold(`๐กโฌฐ  adminmodls `),
            Kolor.greenBright.bold(`${แดสแดสแดษด.moduleName}`),
            Kolor.redBright.bold(`not executed in public Work Type.`)
          );
          return ฯโััฯฮทโฮนัฮทั.sendMessage(
            แดสแดสแดษด.chatId,
            `You need to be an admin to execute this module.`,
            MessageType.text
          );
        } else if (
          แดสแดสแดษดSudo.indexOf(แดสแดสแดษด.moduleName) >= 0 &&
          !แดสแดสแดษด.isSenderSUDO
        ) {
          console.log(
            Kolor.redBright.bold(`๐กโฌฐ  sudo commmand `),
            Kolor.greenBright.bold(`${แดสแดสแดษด.moduleName}`),
            Kolor.redBright.bold(`not executed in public Work Type.`)
          );
          var messageSent = await clientult.getUser(แดสแดสแดษด.chatId);
          if (messageSent) {
            return console.log(
              Kolor.blue(
                `๐กโฌฐ  Promo message had already been sent to ` + แดสแดสแดษด.chatId
              )
            );
          } else {
            await clientult.addUser(แดสแดสแดษด.chatId);
            return ฯโััฯฮทโฮนัฮทั.sendMessage(
              แดสแดสแดษด.chatId,
              `แดสแดสแดษด is Alive!.
I guess you were trying to use my modules in *${แดสแดสแดษด.groupName}*. However, the bot is currently in ${worktype} mode. This enables only the owner and sudo clientult to use the module *${moduleName}* .
If you are keen to use my features, you can deploy แดสแดสแดษด on your own account without much effort, in less than 5 minutes! Check out the links given below.`,
              {
                worktype: `public`,
                groupName: แดสแดสแดษด.groupName ? แดสแดสแดษด.groupName : `private chat`,
                moduleName: แดสแดสแดษด.moduleName,
              },
              MessageType.text,
              {
                contextInfo: {
                  stanzaId: chat.key.id,
                  participant: แดสแดสแดษด.sender,
                  quotedMessage: {
                    conversation: แดสแดสแดษด.body,
                  },
                },
              }
            );
          }
        }
      } else if (UltronSitreper.PRIVACY === `private` && !แดสแดสแดษด.isSenderSUDO) {
        console.log(
          Kolor.redBright.bold(`๐กโฌฐ  commmand `),
          Kolor.greenBright.bold(`${แดสแดสแดษด.moduleName}`),
          Kolor.redBright.bold(`not executed in private Work Type.`)
        );
        var messageSent = await clientult.getUser(แดสแดสแดษด.chatId);
        if (messageSent) {
          return console.log(
            Kolor.blue(
              `๐กโฌฐ  Promo message had already been sent to ` + แดสแดสแดษด.chatId
            )
          );
        } else {
          await clientult.addUser(แดสแดสแดษด.chatId);
          return ฯโััฯฮทโฮนัฮทั.sendMessage(
            แดสแดสแดษด.chatId,
            `แดสแดสแดษด is Alive!.
I guess you were trying to use my modules in *${แดสแดสแดษด.groupName}*. However, the bot is currently in ${worktype} mode. This enables only the owner and sudo clientult to use the module *${moduleName}* .
If you are keen to use my features, you can deploy แดสแดสแดษด on your own account without much effort, in less than 5 minutes! Check out the links given below.`,
            {
              worktype: `private`,
              groupName: แดสแดสแดษด.groupName ? แดสแดสแดษด.groupName : `private chat`,
              moduleName: แดสแดสแดษด.moduleName,
            },
            MessageType.text,
            {
              contextInfo: {
                stanzaId: chat.key.id,
                participant: แดสแดสแดษด.sender,
                quotedMessage: {
                  conversation: แดสแดสแดษด.body,
                },
              },
            }
          );
        }
      }
    }
    // ===============================================================================
    // ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
    // ===============================================================================
    if (แดสแดสแดษด.isCmd) {
      console.log(
        Kolor.greenBright.bold(
          `๐กโฌฐ  ${แดสแดสแดษด.moduleName.toUpperCase()} module executed.`
        )
      );
      const module = UltronSitrep.get(แดสแดสแดษด.moduleName);
      var Arc = แดสแดสแดษด.body.trim().split(/\s+/).slice(1);
      var UltronRegex = new RegExp(UltronSitreper.ULTRONIX, `g`);
      var Ultronf = /\/\^\[(.*)+\]\/\g/g.exec(UltronRegex)[1];
      if (!module) {
        return ฯโััฯฮทโฮนัฮทั.sendMessage(
          แดสแดสแดษด.chatId,
          {
            url: `https://i.postimg.cc/Gt46wxDL/ltr-Invalid.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*โ ๏ธ๐๐ป๐๐ฎ๐น๐ถ๐ฑ แดสแดสแดษด ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ*

*No such module found.*
Please Use *${Ultronf}help to get the list of available modules*`,
          }
        );
      } else if (module && แดสแดสแดษด.moduleName == `help`) {
        try {
          return module.handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc, UltronSitrep);
        } catch (cแดสสแดส) {
          return console.log(Kolor.redBright.bold(`โโฌฐ `, cแดสสแดส));
        }
      }
      module.handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc);
    }
  });
}
แดสแดสแดษดRunner().catch((cแดสสแดส) =>
  console.log(Kolor.redBright.bold(`โโฌฐ`), Kolor.redBright.italic(cแดสสแดส))
);
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
