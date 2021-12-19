module.exports = {
  name:"küfür-engel",
  code:`
  $if[$message[1]==aç]
  $channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:$getServerVar[rick_tick] | Başarıyla Küfür-Engel Sistemi Açıldı}{footer:$getServerVar[footer]}{thumbnail:$userAvatar}]
  $setServerVar[küfür;açık]
  $setServerVar[küfürayarlayan;$authorID]
  $endif
  $if[$message[1]==kapat]
  $channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:$getServerVar[rick_tick] | Başarıyla Küfür-Engel Sistemi Kapatıldı}{footer:$getServerVar[footer]}{thumbnail:$userAvatar}]
  $setServerVar[küfür;kapalı]
  $endif
  $onlyPerms[admin;$getServerVar[admin]]
  $onlyIf[$checkContains[$tolowerCase[$message[1]];aç;kapat]==true;{color:$getServerVar[renk]}{footer:$getServerVar[footer]}{description:$getServerVar[rick_carpi] | Lütfen Bir Argüman Kullan : \`\aç,kapat\`\}{thumbnail:$userAvatar}]
  `}