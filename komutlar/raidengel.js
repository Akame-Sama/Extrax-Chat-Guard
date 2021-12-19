module.exports = {
name:"raid-engel",
code:`
$if[$message[1]==aç]
$channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:$getServerVar[rick_tick] | Raid Engel Sistemi Başarıyla Açıldı}{thumbnail:$userAvatar}]
$setServerVar[raid;açık]
$endif
$if[$message[1]==kapat]
$channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:$getServerVar[rick_tick] | Raid Engel Sistemi Başarıyla Kapatıldı}{thumbnail:$userAvatar}]
$setServerVar[raid;kapalı]
$endif
$if[$message[1]==sayı]
$channelSendMessage[$channelID;{color:$getServerVar[renk]}{description:$getServerVar[rick_tick] | Artık \`\$message[2]\`\ Sayıda Kişi Etiketlenirse Kişiyi Uyaracam}{thumbnail:$userAvatar}]
$setServerVar[raidsayı;message[2]]
$onlyIf[$isNumber[$message[2]]==true;{color:$getServerVar[renk]}{description:$getServerVar[rick_carpi] | Lütfen Bir Sayı Dışında Başka Birşey Girmeyiniz!}{thumbnail:$userAvatar}]
$onlyIf[$message[2]!=;{color:$getServerVar[renk]}{description:$getServerVar[rick_carpi] | Lütfen Bir Sayı Giriniz!}{thumbnail:$userAvatar}]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat;sayı]==true;{color:$getServerVar[renk]}{description:$getServerVar[rick_carpi] | Lütfen Bir Argüman Giriniz : \`\aç,kapat,sayı\`\}{thumbnail:$userAvatar}]
$onlyPerms[admin;$getServerVar[admin]]
`
}   


