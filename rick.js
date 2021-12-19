const rick = require('aoi.js');
const bot = new rick.Bot({
  token: process.env['token'],  ///.enve token diye bir deger acip tokeninizi girin!
  prefix:"r!"
  })


bot.onMessage();


bot.loadCommands('./komutlar/')

bot.readyCommand({
  channel:"",
  code:`
  $log[🎊 $userTag[$clientID] 🎊]
 ` })
            


bot.variables({
  renk:"ffb0ff", //// Renk Kodunuz
  footer:"Extrax💗Konaha", ////footerınız
  rick_carpi:"<a:yasak:856123802654998568>",   /////carpi Emojisi Idsi
  rick_tick:"<:mtick:918491401631719485>",      /////tick  Emojisi Idsi
  admin:"{color:$getServerVar[renk]}{description:$getServerVar[rick_carpi] | Üzgünüm Ama Admin Yetkin Yok}{thumbnail:$userAvatar}{footer:$getServerVar[footer]}",
  warn:"0",
  küfür:"kapalı",
  küfürayarlayan:"",
  küfürs:"1",
  link:"kapalı",
  linkayarlayan:"",
  raid:"kapalı",
  raidsayı:"7"

  })



bot.command({
  name:"$alwaysExecute",
  code:`
  $color[$getServerVar[renk]]
  $thumbnail[$userAvatar]
  $footer[$getServerVar[footer]]
  $description[
  $getServerVar[rick_carpi] | <@$authorID> Küfür Etmek Kesinlikle Yasak
  ]
  $clear[1]
  $deleteIn[5s]
  $onlyIf[$hasAnyPerm[admin;manageserver]==false;]
  $onlyIf[$checkContains[$message;amk;aq;amq;am;amck;amcik;amcık;sik;skm;göt;oc;oç;orspu;orusbu;oruzbu;orospu;orzbu;yarrak;yarak;sikerim;wtf;fk;fck;fuck;stfu]==true;] 
  $onlyIf[$getServerVar[küfür]!=kapalı;]
  $addReactions[😳]
   `
})


bot.command({
  name:"$alwaysExecute",
  code:`
  $color[$getServerVar[renk]]
  $thumbnail[$userAvatar]
  $footer[$getServerVar[footer]]
  $description[
  $getServerVar[rick_carpi] | <@$authorID> Link Atmak Kesinlikle Yasak
  ]
  $clear[1]
  $deleteIn[5s]
  $onlyIf[$checkContains[$tolowerCase[$message];https://;discord.gg;.gg;.com;.co;.go;.lyx]==true;]
  $onlyIf[$getServerVar[link]!=kapalı;]
  $onlyIf[$hasAnyPerm[admin;manageserver]==false;]
  $addReactions[😳]
   `
})


bot.command({
name:"$alwaysExecute",
code:`
$onlyIf[$mentionedUsersCount<=$getServerVar[raidsayı];{execute:raid}]
$onlyIf[$mentioned[1]!=;]
$onlyIf[$hasPerms[$authorID;admin]!=true;]
$onlyIf[$getServerVar[raid]!=kapalı;]
`
})
bot.awaitedCommand({
name:"raid",
code:`
$author[Bir Kullanıcı Uyarıldı]
$description[**Uyarılan:** \`$usertag\`
**Sebebi:** \`Fazla etiket attı.\`]
$thumbnail[$authorAvatar]
$color[$getServerVar[renk]]
$setServerVar[warn;$sum[$getServerVar[warn;$authorID];1];$authorID]

`
})
