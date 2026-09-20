let channelList = [
    {
        name: '',
        getURL: '',
        keyId: "",
        key: "",
        number: 0,
    }
]



const CHANNELS = new Map([
    // Canal 7
    ...["R0VOX19DQU0x","Q29uc3RydWlyX1RW", "RHNwb3J0c19QbHVzX1VZ", "SHVzdGxlcg==", "RHNwb3J0czJfVVk=", "RHNwb3J0c19VWQ==", "VG9kb19Ob3RpY2lhc180Sw==", "RGF5c3Rhcg==", "U29tb3NfTWlzaW9uZXM=", "VW5pdmVyc2lkYWRfTURR", "RWNvVHZfVGFuZGls", "U29tb3NfQmVsbF9WaWxsZQ==", "U29tb3NfVHVjdW1hbg==", "VW5pb25UVg==", "VmVudXNfTWVkaWE=", "U29tb3NfU2FuX1BlZHJv", "VGVsZW1lZGlh", "Q2FuYWxfMTBfSnVuaW4=", "VGVsZUp1bmlu", "U29tb3NfQXp1bA==", "RVNQTjNfVXktUHk=", "RVNQTjNfVXktUHk==", "RXZlbnRvc18z", "QTNfQ2luZQ==", "QXJpcmFuZw==", "QmFuZGVpcmFudGVz", "QWxsamF6emVyYQ==", "Q2FuYWxfUFJP", "VW5pdmVyc28=", "Q2FuYWxfMTFfUGFyYW5h", "Q0FOQUxfTFVa", "QWxsZWdyb0hE", "QmFieVRW", "RE5ld3M=", "VVNBX05ldHdvcms=", "QTNfU2VyaWVz", "TWVnYV9UVg==", "QW1lcmljYV9UdWN1bWFu", "UFhfU3BvcnRz", "Q2gxMF9UdWN1bWFu", "SG9tZV9hbmRfR2FyZGVu", "REhF", "Rmxvd19NdXNpY19YUA==", "QUVIRA==", "SG9sYV9UVg==", "QVhOSEQ=", "TVRWMDA=", "V2FybmVySEQ=", "R0VOX1RW", "Rm94X1Nwb3J0c19QcmVtaXVuX0hE", "VG9kb05vdGljaWFz", "VHlDU3BvcnQ", "QW1lcmljYTI0", "QzVO", "TGFfTmFjaW9u", "Q3JvbmljYVRW", "Q2FuYWxfOF9UdWN1bWFu", "UGFyYWd1YXlfVFY=", "UGFyYW1vdW50", "Q29tZWR5Q2VudHJhbA", "Rmxvd19NdXNpY18x", "Rmxvd19NdXNpY18y", "Rmxvd19NdXNpY18z", "Qm9vbWVyYW5n", "RHJlYW13b3Jrcw==", "QW5pbWFsUGxhbmV0", "SGlzdG9yeUhE", "SUQ=", "QnJhdm9UVg==", "U29ueUhE", "U29ueV9Nb3ZpZXM=", "VHJ1VFY=", "SEJPX1BPUA==", "RGlzY292ZXJ5VHVyYm8=", "RGlzbmV5SnI=", "SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=", "Rm94U3BvcnRzMl9VWQ==", "RVNQTjQ=", "Rm94U3BvcnRzM19VWQ==", "RXZlbnRvc19IRF9VeQ==", "VGVsZW11bmRvX0hE", "UGFzaW9uZXM="].map(k => [k, 7]),
    // Canal 6
    ...["VEJT","Q2FuYWxfMTBfTURR", "Q2FuYWxfOTA=", "U29tb3NfTm9ydGU=",  "Q2FibGVfWV9EaWFyaW8=", "VFZfRXNwYW5h", "VHZfR2FsaWNpYQ==", "RVNQTjJfQXJn", "Q2FuYWxfMjE=", "VGVsZW5vdmVsYXM=", "RVdUTg==", "S1pP", "Vm9ydGVyaXg=", "RFc=", "Q05OX0ludGVybmFjaW9uYWw=", "S2lkb28=", "VG9vbmNhc3Q=", "UGxpbV9QbGlt", "RnJhbmNlXzI0", "Tmlja211c2lj", "U29tb3NfTGFfUGxhdGE=", "QXJ0ZWFyX0ludGVybmFjaW9uYWw=", "RXZlbnRvc18yX0hE", "R29sZGVu", "Q2FuYWxfOV9QYXJhbmE=", "R29sZl9DaGFubmVs", "Q2FuYWxfYQ==", "QW1lcmljYV9TcG9ydHM=", "Q2luZW1heA==", "Q2FuYWxfOF9DQkE", "MjZfVFZfSEQ", "RGlwdXRhZG9zX1RW", "QXJnZW50aW5pc2ltYQ", "TWV0cm8", "QkJDX1dvcmxkX05ld3M", "VGhlYXRlcl9IRA==", "R2xpdHo=", "UXVpZXJvX0hE", "RGlzY292ZXJ5X1dvcmxkX0hE", "RXVyb2NoYW5uZWw=", "RGlzY292ZXJ5X1NjaWVuY2U=", "SU5DQUFfVHY=", "VFY1X01vbmRl", "TVRWX0hpdHM=", "TVRWX0hE", "Tmlja19Kcg==", "VFZFX0VzcGFuYQ==", "V09CSQ==", "Vm9sdmVy", "VGVsZXN1cg==", "TGlmZXRpbWU=", "QW50ZW5hXzM=", "Rm94X05ld3M=", "VHZfQ2hpbGU=", "TWFzX0NoaWM=", "U3R1ZGlvX1VuaXZlcnNhbA==", "SVNBVA==", "U3VuX0NoYW5uZWw=", "UkFJ", "VmVudXM=", "U2V4dHJlbWU", "UGxheWJveQ", "VE5UX1Nwb3J0c19IRA", "VGVsZWZlSEQ=", "Q2FuYWw3", "RW5jdWVudHJv", "VGVsZW1heA", "TmV0X1RW", "Q2FuYWxfMTJfQ0JB", "RWxfR2FyYWdl", "RmlsbV9BcnRz", "VW5pdmVyc2FsX0NoYW5uZWxfSEQ=", "RXVyb3BhX0V1cm9wYQ", "RXVyb25ld3M=", "Rm9vZF9OZXR3b3Jr", "RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=", "Q00=", "UEFLQV9QQUtB", "SGlzdG9yeV8y", "U3lGeQ==", "VEJT", "VENN", "SEJPXzI=", "SEJPX1BsdXM=", "SEJPX0ZhbWlseQ==", "SEJPX0V4dHJlbWU=", "SEJPX011bmRp", "SEJPX1NpZ25hdHVyZQ==", "Q2FuYWxfUnVyYWw=", "VExD", "Q2FuYWxfZGVfbGFfY2l1ZGFk", "RGlzY292ZXJ5X0tpZHM=", "SFRW", "TkJBX1RW", "VW5pdmVyc2FsX0NpbmVtYQ==", "VW5pdmVyc2FsX0NvbWVkeQ==", "dW5pdmVyc2FsX0NyaW1l", "VW5pdmVyc2FsX1ByZW1pZXJl", "VW5pdmVyc2FsX1JlYWxpdHk=", "Q05OX2VuX0VzcGFub2w=", "Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw=="].map(k => [k, 6]),
    // Canal 5
    ...["QzlOX0M0", "Q2FuYWxfQw==", "U29tb3NfUm9zYXJpbw==", "U29tb3NfU1RG", "QUJDX1RWX0M0"].map(k => [k, 5]),
    // Canal 4
    ...["SEVJX05PVw==", "UlBDX0M0", "RVNQTl9VWQ==", "Q0hfN19KdWp1eQ==", "Q2FuYWwzX1NhbnRhX1Jvc2E=", "Q2FuYWxfOV9NZW5kb3ph", "Q2FuYWw5X0xhX1Jpb2ph", "VFNOX05lY29jaGVh", "Q2FuYWw3X0NhdGFtYXJjYQ==", "U29tb3NfRm9ybW9zYQ==", "Q2FuYWxfM19Gb3Jtb3Nh", "VFZfUHVibGljYV9JbnRlcm5hY2lvbmFs", "TmFuZHV0aV9QeQ==", "RWR1Y2FuYWw=", "UkND", "Q2FuYWxfMl9NRFFfTEND", "VGVsZWZlX01EUV9IRA==", "U29tb3NfUGFyYW5h", "Q2FuYWxfMTFfRm9ybW9zYQ==", "Q2FuYWxfMTNfUmlvXzR0bw==", "QW1lcmljYV9QWQ==", "QTI0X1BZ", "RXZlbnRvczNfVVk=", "RXZlbnRvc18yX1VZ", "RVNQTjJfVVk=", "RXZlbnRvczJfUFk=", "RVNQTl9QWQ==", "RVNQTjJfUFk=", "NVJUVg==", "Q2FuYWwxMF9SaW9fTmVncm8=", "Q2FuYWxfNV9Sb3Nhcmlv", "VFZfQ2FtYXJh", "Q0hfMTJfUG9zYWRhcw==", "Q0JBMjQ=", "TWl4VFY=", "TG9jYWxfQ2FybG9zX1Bheg==", "Q2FuYWwxMF9DQkFfSEQ=", "VU5JQ0FOQUxfQzQ=", "TGF0YW1fUnVyYWw=", "U29tb3NfQ29ycmllbnRlcw==", "U29tb3NfU2FsdGE=", "U29tb3NfUmFmYWVsYQ==", "U29tb3NfUmVzaXN0ZW5jaWE=", "U29tb3NfRWxfVmFsbGU=", "Q2FuYWxfQ2l1ZGFkX01EUQ==", "NV9EaWFzX1BZ", "VGVsZWZlX0ludGVybmFjaW9uYWw=", "Q0hfMTNfQ29ycmllbnRlcw==", "U2hvd19TcG9ydHM=", "Q0hfOV9SZXNpc3RlbmNpYQ==", "VEVMRUZVVFVST19DNA==", "VGVsZWZlX05ldXF1ZW4=", "VGVsZWZlX1NhbHRh", "U05UX0M0", "UEFSQVZJU0lPTl9DNA==", "Tk9USUNJQVNfUFlfQzQ=", "TEFfVEVMRV9DNA==", "U1VSX1RWX0M0", "Q2FuYWwxMlVSVQ==", "Q2FuYWw0X1VSVQ==", "SEJPSEQ=", "Q2FuYWwxMF9VUlU="].map(k => [k, 4]),
    // Canal 3
    ...["QU1DX1Nlcmllcw==", "RFNwb3J0c18x", "RFNwb3J0c18y", "U2VuYWxfTWFyaWE=", "Q2FuYWxfNzlfTURR", "RXZlbnRvc19QWQ==", "Q2FuYWw3X1NERQ==", "Qmxvb21iZXJn", "Q2FuYWxfVQ==", "RnJhbmNlMjRfRmxvdw==", "VFZfTmFjaW9uYWxfVXk=", "UmVkZV9SZWNvcmQ=", "U29tb3NfQmFoaWFfQmxhbmNh", "Q2FuYWxfM19Sb3Nhcmlv", "Q2FuYWw3X0JhaGlhX0JsYW5jYQ==", "Q2FuYWxfMTNfU0ZF", "Q2FuYWw5X0JhaGlhX0JsYW5jYQ==", "TmF0R2VvSEQ=", "VE5UX0hEX0FyZw==", "VE5UU2VyaWVz", "Q2FydG9vbk5ldHdvcms=", "Tmlja2Vsb2Rlb24=", "QWR1bHRfU3dpbQ==", "RXZlbnRvczFIRA"].map(k => [k, 3])
]);

function getChannelNumber(getURL) {
    return CHANNELS.get(getURL) || 3;
}

function getChannelKeys(getURL) {
    const channelMap = {
        "QmFuZGVpcmFudGVz": { keyId: "0b4f56d5c19b45fb3e75a73b6ec06e6c", key: "c464e2b6ded2b52e1e7753b3a859abce" }, //Bandeirantes
        "QWxsamF6emVyYQ==": { keyId: "057b33828e9cdc4fd4dc656fca2a33a2", key: "67b4b14e46cd980bc188bf86eb5ee102" }, //Alljazzera
        "QXJpcmFuZw==": { keyId: "436d78a75fad9bdcc6d409640c116a62", key: "c77471ac3b694513a9c5ff68b8d4fac5" }, //Arirang
        "SEVJX05PVw==": { keyId: "c0d244daa9dc6f4ee4ce22d500c1eddb", key: "abb2d1767b1114c981a0666ad5913c19" }, //HEI_NOW
        "VHZfR2FsaWNpYQ==": { keyId: "6ff4f32b7b8a05f97d0aa3e28175c0ec", key: "a4e220d4532e75ae46eca19646b4034c" }, //Tv_Galicia
        "Q2FibGVfWV9EaWFyaW8=": { keyId: "6df95979c5b379c56f6e87a19e37be00", key: "034564e9816644d6618644246347bc64" }, //Cable_Y_Diario
        "Q2FuYWxfVW5pdmVyc2lkYWQ=": { keyId: "93c40cee58a5f415828cc32d0c80d311", key: "d00906d71ee69515cd4dca1162d5ae7f" }, //Canal_Universidad
        "U29tb3NfQXp1bA==": { keyId: "4343f3f5f5b4d3dffa9584d20d912ac6", key: "9f0c94b68cf89c38d30dd56a2fbecd48" }, //Somos_Azul
        "VGVsZUp1bmlu": { keyId: "04a6e06cd400b52502f9dcab713077ad", key: "629fc0a3c99442eb5ff46b6f3133fd44" }, //TeleJunin
        "Q2FuYWxfMTBfSnVuaW4=": { keyId: "2002528cbe8ebac766a4b87b2c931cb7", key: "e545efab88c32190b395fe2fa96cf0ce" }, //Canal_10_Junin
        "VGVsZW1lZGlh": { keyId: "294b92debd46867562934091f551e6e5", key: "79ec0fe4b5fa6c66a29c93542a070f19" }, //Telemedia
        "QTI0X1BZ": { keyId: "3ca6efbbe0202efe4bba7ca50433537a", key: "4c896a4ac1c9d89d38e7b68b21a40837" }, //A24_PY
        "QW1lcmljYV9QWQ==": { keyId: "4e4a187474de8e29a8507d496c8a594f", key: "daab5ccf306d67749740f7ce02c07850" }, //America_PY
        "": { keyId: "", key: "" }, //
        "VFZfUHVibGljYV9JbnRlcm5hY2lvbmFs": { keyId: "09833bbfc87acd3a509a57e75b4d37ef", key: "13906c6849c0c81de495ddd9539765fe" }, //TV_Publica_Internacional

        "VGVsZWZlX1Rlc3RDNg==": { keyId: "b5c32c5a5504b0afabb2b4baaaecdb48", key: "e31730aa3bf4c9706d0a2fe2352f33d0" }, //

        //Caidos
        "Q2FuYWwzX1NhbnRhX1Jvc2E=": { keyId: "719aa3a5e270c7f69eba374ed80d7986", key: "97ac59118cf4cf242e2c31e87cd38e1e" }, //Canal3_Santa_Rosa
        "Q2FuYWxfOV9NZW5kb3ph": { keyId: "719aa3a5e270c7f69eba374ed80d7986", key: "97ac59118cf4cf242e2c31e87cd38e1e" }, //Canal_9_Mendoza
        "VFNOX05lY29jaGVh": { keyId: "719aa3a5e270c7f69eba374ed80d7986", key: "97ac59118cf4cf242e2c31e87cd38e1e" }, //TSN_Necochea
        "Q2FuYWw5X0xhX1Jpb2ph": { keyId: "719aa3a5e270c7f69eba374ed80d7986", key: "97ac59118cf4cf242e2c31e87cd38e1e" }, //Canal9_La_Rioja
        // "RGF5c3Rhcg==": { keyId: "719aa3a5e270c7f69eba374ed80d7986", key: "97ac59118cf4cf242e2c31e87cd38e1e" }, //Daystar
        // "RGF5c3Rhcg==": { keyId: "c48d578949a3d595c87232a17430e375", key: "6ef34a3ae28d31ddb9e3741fe15e36f8" }, //Daystar
        "RGF5c3Rhcg==": { keyId: "002dda055fd4b6f2b4c80e63e9accd62", key: "09b90b0fc347ce6ac854935626103938" }, //Daystar
        "Q0hfN19KdWp1eQ==": { keyId: "719aa3a5e270c7f69eba374ed80d7986", key: "97ac59118cf4cf242e2c31e87cd38e1e" }, //CH_7_Jujuy

        //Anda solo con SA_Live_dash_widevine
        "VG9kb19Ob3RpY2lhc180Sw==": { keyId: "2959bf95e218a7ec8a9ea434430b45e7", key: "9727d27dc22ad3a63d94338f92b7a55a" }, //Todo_Noticias_4K
        // "VG9kb19Ob3RpY2lhc180Sw==": { keyId: "719aa3a5e270c7f69eba374ed80d7986", key: "97ac59118cf4cf242e2c31e87cd38e1e" }, //Todo_Noticias_4K


        // "TWV0cm8": { keyId: "719aa3a5e270c7f69eba374ed80d7986", key: "97ac59118cf4cf242e2c31e87cd38e1e" }, //Metro
        "TWV0cm8": { keyId: "30040b6c7b723aee251c0dc3c4f4d84c", key: "c8d60a61d2d9d2acd4040a21da4d2203" }, //Metro
        "": { keyId: "", key: "" }, //
        "Q2FuYWxfMTFfRm9ybW9zYQ==": { keyId: "78cbce875d90e04f3f2b2e26261d5255", key: "d6c6a3c3ec898483608ff39e086cad66" }, //Canal_11_Formosa
        "": { keyId: "", key: "" }, //
        "U2VuYWxfTWFyaWE=": { keyId: "d456fba3fccb4c06a0f4776fe412400b", key: "ca5530ffe42a38759d3887c82d6a909a" }, //Senal_Maria
        "Q2FuYWw3X1NERQ==": { keyId: "eec52ca8f4d229ae6aae86b6835256ed", key: "506afbd8be37e388f5d3ceb7992069d4" }, //Canal7_SDE
        "Q2FuYWwxMF9SaW9fTmVncm8=": { keyId: "491adb9269c5c8ab41f83936d0b4a68f", key: "7ab85b000d8b5a06f542aff956bcb007" }, //Canal10_Rio_Negro
        "NVJUVg==": { keyId: "7caca846fda0ac308553f7eb7284a596", key: "256934a336abbc242378af4a2dfcac4e" }, //5RTV
        "": { keyId: "", key: "" }, //
        "UkND": { keyId: "d8479ae2a7cc939e8382c8851927425d", key: "d1f89fc694800645ae926d9c5f13a1f6" }, //RCC
        "RWR1Y2FuYWw=": { keyId: "4a51992671bd007fbf5d5c257ee62ea0", key: "69c4603a7136ec9eb515f8e0ca9c275c" }, //Educanal
        "TmFuZHV0aV9QeQ==": { keyId: "46c3d8c42bb9799e5de5792e3fb45de4", key: "aed06fd292d278aa464da44752b9c313" }, //Nanduti_Py
        "": { keyId: "", key: "" }, //
        "": { keyId: "", key: "" }, //
        "Q2FuYWw3X0NhdGFtYXJjYQ==": { keyId: "b97459655c5e6d342bf49cf2bacd4daa", key: "04702a3736ee67d7d5a8cf8ddc36b7ee" }, //Canal7_Catamarca
        "": { keyId: "", key: "" }, //
        "": { keyId: "", key: "" }, //
        "": { keyId: "", key: "" }, //


        "Q2FuYWxfM19Gb3Jtb3Nh": { keyId: "fad37e328e1d36e0a5423a1a72d4085b", key: "93fb085bbb8d6583d159c766fca1cfff" }, //Canal_3_Formosa
        "U29tb3NfRm9ybW9zYQ==": { keyId: "ceeb1cfa7ecbc8b22ff9f186287aa4a1", key: "8367cc3655b9fb82d6473f27b3ef9907" }, //Somos_Formosa


        "": { keyId: "", key: "" }, //
        "U29tb3NfVHVjdW1hbg==": { keyId: "a2004558039ee95097010029015316b4", key: "29960fc94fbf7a13c9de1308d508bc25" }, //Somos_Tucuman
        "U29tb3NfUGFyYW5h": { keyId: "726c0ccee1985d0d59738bfe8e9aee2b", key: "0ff2c5a2381d8f0b7b92565dceb4ca58" }, //Somos_Parana
        "U29tb3NfQmVsbF9WaWxsZQ==": { keyId: "4dd0d6fab23ee397e603bf1cad49cc3f", key: "84163f0d536884a640a509a9a0c937ee" }, //Somos_Bell_Ville
        "Q2FuYWxfMTBfTURR": { keyId: "5f353c7f02f643da9049646fb835abcf", key: "ae8630fc13b9e4554c56bd0be31be74f" }, //Canal_10_MDQ
        "VGVsZWZlX01EUV9IRA==": { keyId: "cd82180cb606cee7547f58298c4f8fcb", key: "844489c5f007fbe4afa36c8d64528d73" }, //Telefe_MDQ_HD
        "": { keyId: "", key: "" }, //
        "Q2FuYWxfNzlfTURR": { keyId: "32b5308f8e6d411eab8a8f1576f95e27", key: "0afb56f72dbf8a5555e30a6f086049ac" }, //Canal_79_MDQ
        "Q2FuYWxfMl9NRFFfTEND": { keyId: "30691d3980864458cc24a230708cf003", key: "9f11ac9715b016312f6a222d0886c2af" }, //Canal_2_MDQ_LCC
        "RWNvVHZfVGFuZGls": { keyId: "2bcb0593847aa273102a0546f8d51ce4", key: "f04591c07966e6678462dd94f99da66a" }, //EcoTv_Tandil
        "VW5pdmVyc2lkYWRfTURR": { keyId: "4f6ab7206de81b4f19edcbc735a7f4ca", key: "5d05b9738b9a999a4b7c5b495866c21c" }, //Universidad_MDQ
        "": { keyId: "", key: "" }, //
        "": { keyId: "", key: "" }, //
        "RHNwb3J0c19VWQ==": { keyId: "143c71292a6dd58404efad283b220539", key: "9fceff2f3d70e2f569d5565407d7f743" }, //Dsports_UY
        "RHNwb3J0czJfVVk=": { keyId: "969a3f92b501140c840243fb52e2bde0", key: "d9957d1813667c03e67f6b21632ea7b4" }, //Dsports2_UY
        "RFNwb3J0c18x": { keyId: "86d19904429f78baf98cf1fd481c430e", key: "5229197732a9a3e109264b272bd782f2" }, //Dsports_UY
        "RFNwb3J0c18y": { keyId: "33848c262a3cc8c0eb8b34cdb9691f04", key: "fd8e52ad745cec9e62263928a10f3abd" }, //Dsports2_UY
        "RHNwb3J0c19QbHVzX1VZ": { keyId: "517d3690fb9e64f95a9272958a84df32", key: "b563bc52ea05c1e7002a996f688b08b9" }, //DSports-3 UY 
        
        
        "RVNQTjJfUFk=": { keyId: "0aab4bd18144c7316c35c74ccce96ddc", key: "3e6db98d9df4747108bd896cba0be57d" }, //ESPN2_PY creo que es 1
        "RVNQTl9QWQ==": { keyId: "4cbc5f5cbac72d38371bb63309e4a9d2", key: "dbc8de27da9726cd2e7659abb08e86ef" }, //ESPN_PY creo que es 2
        "RVNQTjNfVXktUHk=": { keyId: "ed53871dc50dcdc59a6271db3c8c51b3", key: "0c21dc8629e3f2e6fe9efa8b80dc447e" }, //ESPN3_Uy-Py creo que es 3
        "": { keyId: "", key: "" }, //
        "RVNQTl9VWQ==": { keyId: "6362e1f36fcb7ee3c47debd9140336ad", key: "9ba1d46c5b9c7a3130a5dabbf7155175" }, //ESPN_UY
        "RVNQTjJfVVk=": { keyId: "0d820100144772fed9f38b83650fa7e1", key: "ded8cc47b29b0eb0b0a87df22e721847" }, //ESPN2_UY
        "RVNQTjNfVXktUHk==": { keyId: "ed53871dc50dcdc59a6271db3c8c51b3", key: "0c21dc8629e3f2e6fe9efa8b80dc447e" }, //ESPN3_Uy-Py creo que es 3
        "": { keyId: "", key: "" }, //
        "RXZlbnRvc19IRF9VeQ==": { keyId: "48d0e34c8797c5c2a742d2630a8fb975", key: "fb5d12b9d8febe836e5670abd003ddca" }, //Eventos_HD_Uy - Charrua Television
        "RXZlbnRvc18yX1VZ": { keyId: "87bfded2bdfbd3ad9dce4d30b2739fd1", key: "e80b0d66d60fa0a2d24d8b36055a6fef" }, //Eventos_2_UY - Canal 4 Paysandu
        "RXZlbnRvczNfVVk=": { keyId: "f774b06a300783596f27b552226de9c0", key: "4d6256b28b487bcf906bcf0328635747" }, //Eventos3_UY
        "": { keyId: "", key: "" }, //
        "Q29uc3RydWlyX1RW": { keyId: "120cbb515df132052c883f5f52ac1d5a", key: "4397388a2a16bcb641b3ca4ee6e5ad9b" }, //Construir_TV
        "RXZlbnRvc19QWQ==": { keyId: "ed7b0d73a158d03e65fc777d324e25aa", key: "e751bb7d094949ad14e5cbc6827979bb" }, //Eventos_PY
        "RXZlbnRvczJfUFk=": { keyId: "e2d826c634f1c4013859ddd16f5bac42", key: "44424471e931147ae3d5c0f0e732d73d" }, //Eventos2_PY
        "Q2FuYWxfMTNfUmlvXzR0bw==": { keyId: "6f4439b8c624ac6a8abba87c3621d580", key: "c8798da6ee3e0934089ab2ab9fe5d5b7" }, //Canal_13_Rio_4to
        "VW5pb25UVg==": { keyId: "bc47bd761413375f1b6e7333a51de41a", key: "ccf01c0661ae65f273b79eeda0ec0f3e" }, //UnionTV
        "U29tb3NfU2FuX1BlZHJv": { keyId: "5ed7bfb5a7be4d99df70ed73852098d4", key: "df5123a8a8160b62b51c7cb6001be23c" }, //Somos_San_Pedro
        "U29tb3NfTm9ydGU=": { keyId: "ee8a6cc35fdb4ab7adeed9d16593459f", key: "5ca774838d5c887f7a8d7dee64b9a6b0" }, //Somos_Norte
        "VmVudXNfTWVkaWE=": { keyId: "835af7d77bd13621ba044ab931e5e89f", key: "753ed98985b348ab7bf3c0a2b24930eb" }, //Venus_Media
        "QU1DX1Nlcmllcw==": { keyId: "30ffe7a2776537e8cec7020d783536f9", key: "7b4f323576ac85d8938f5bebc245131c" }, //AMC_Series
        
        
        
        "Q2FuYWxfUFJP": { keyId: "e3dae0418c43c763bdc55c7cc887fb40", key: "608425ead9e9ce5e143cad164350f738" }, //Canal_PRO
        "Qmxvb21iZXJn": { keyId: "5e627ea0331d29957c4f4188a4591acd", key: "e08fd83ff31754b66ca99dc2a37af398" }, //Bloomberg
        "VFZfQ2FtYXJh": { keyId: "9357704ade444dc3b23be89865af2f58", key: "3d03e0a79d8f7b7aa2897c3d24bd4b6a" }, //TV_Camara Paraguay
        "VW5pdmVyc28=": { keyId: "ff2c94143de42e334c7ee3e081224ee4", key: "558c45cc6a1c9aa0b3ea99895196c6e4" }, //Universo PupoTV Paraguay
        "Q2FuYWxfMTFfUGFyYW5h": { keyId: "82d766840c7ea82b4f309ae1d4f9c0d7", key: "41071d71fc94b54c87e6140d7b2e9226" }, //Canal_11_Parana
        "Q2FuYWxfMjE=": { keyId: "29ccae9b98d74e76b35ac4e9a7fd1af1", key: "cd6f0d4dca0fc30533e845fc8ea6a945" }, //Canal_21 Orbe 21
        "Q0hfMTJfUG9zYWRhcw==": { keyId: "9c996a1465acddc9c3f7a2dd9b86aa88", key: "a2b63e48c99bebb52bfcdb1830efdd3e" }, //CH_12_Posadas
        "Q0JBMjQ=": { keyId: "b93e6ce6b4fb51b890ac57d8c0b6a402", key: "53eb2499d8c57cf6f9ea887c8683c591" }, //CBA24 - Canal U
        "VGVsZW5vdmVsYXM=": { keyId: "62bf7b8ec759904f0676d24b0baef659", key: "16435593f900bd954071486abdc8bd81" }, //Telenovelas
        "Q2FuYWxfVQ==": { keyId: "202a19e4871c4739a8010aa7b25af37d", key: "07015b4cfa048a3351b83d60aeca5ead" }, //Canal_UCL
        "Q0FOQUxfTFVa": { keyId: "f7523ea5a2da78c465d928be1d81e2a5", key: "870ad69e98abd52b443bd8f0204b3bc4" }, //CANAL_LUZ
        "RVdUTg==": { keyId: "07df3c48652a431ab779d133f085b799", key: "ee2fbeec1ecdffa5617383f684dfda0e" }, //EWTN
        "S1pP": { keyId: "71c9374566b0b5517083bc923175969a", key: "56292911445ae704f390669ec5d7faa7" }, //KZO
        "QWxsZWdyb0hE": { keyId: "e55e61b81b992d6c21466891d72157e9", key: "566d341bf7209a88976e75c20ad7aca2" }, //AllegroHD
        "Vm9ydGVyaXg=": { keyId: "eabe2c22350c26c7f0ad84b34932f08d", key: "39fa06836ec0f81d8dd9b6e01a3070e3" }, //Vorterix
        "TWl4VFY=": { keyId: "0e1327b5b1f4dfe767aec622c9ef64ce", key: "60c64a922af0121bf73261c825e33f18" }, //MixTV
        "RFc=": { keyId: "8bb583ab165ad7646298b7091d642162", key: "39a0ad8e7513ecfad34c60c519320095" }, //DW
        "U1VSX1RWX0M0": { keyId: "c047764a90e9a5b0213aec8fed8a24aa", key: "07e62001064fbe64796b4ed3836761f4" }, //SUR_TV_C4
        "Q05OX0ludGVybmFjaW9uYWw=": { keyId: "cdef9f28233ed83d8efc9d558230fe4c", key: "d90e7278af48ff14a1913036d9126a94" }, //CNN_Internacional
        "S2lkb28=": { keyId: "dcd89337a501ab929c01a039774089dc", key: "e96cc7be9139a8d581b3f5eebebfc10d" }, //Kidoo
        "QmFieVRW": { keyId: "9e09f0a3ecb932582e0f3bc6a6194c8d", key: "6d2363b7ba7680ea3bf6dcbad1efa5bf" }, //BabyTV
        "VG9vbmNhc3Q=": { keyId: "1b9f0bdb87e459cc9a02f16a58fb1e8a", key: "e112e71f1b991d61dd26719e2de903b6" }, //Tooncast
        "UGxpbV9QbGlt": { keyId: "5b34ec5be9a7d394e5f49a5ea55ac4f6", key: "3e8cca6f945a3a4c9984ae528c2407b9" }, //Plim_Plim
        "RnJhbmNlXzI0": { keyId: "f687c6991de847a7570aaafed45ef0ef", key: "f9ef914c2d632cdbc180d5b4828f0956" }, //France_24
        "RnJhbmNlMjRfRmxvdw==": { keyId: "92e2f2caa23a7b883e343b26c9f90ed1", key: "ff145008f5c53ee75c6d3498cd778acc" }, //France24_Flow
        "R0VOX19DQU0x": { keyId: "a2624484ee4d8c41bac4d41eee323773", key: "b58f5c587f8ba08e1132243b139ba4d4" }, //Nickmusic
        "RE5ld3M=": { keyId: "5dcaeaa309c8d828c7731c7877158a92", key: "423e96f5f1199b026cbab4a7521e0591" }, //DNews
        "TG9jYWxfQ2FybG9zX1Bheg==": { keyId: "7804609194dc7145bf297153276096d2", key: "03d3f4e3d0b35362dadfddce10dee00c" }, //Local_Carlos_Paz
        "Q2FuYWxfQw==": { keyId: "9a866ca98bef2351a68e4843139f8073", key: "b0893077653d1ef842a1b65d8b34455a" }, //Canal_C
        "VFZfTmFjaW9uYWxfVXk=": { keyId: "c50518d7f59f4c0aa9a3079fe2b014fd", key: "96038f76a2ba33866ea54eb4b260573f" }, //TV_Nacional_Uy
        "VVNBX05ldHdvcms=": { keyId: "c754b522b3b87dc2ba2da3e35154ec14", key: "141a51e9e83861ae99b4b217431710b3" }, //USA_Network
        "Q2FuYWwxMF9DQkFfSEQ=": { keyId: "6d85fcc70989d0dbe8d70dd70a4629c0", key: "a953290192fd5db5bf7936a88ecc6877" }, //Canal10_CBA_HD
        "VU5JQ0FOQUxfQzQ=": { keyId: "7d798b4e58cfda51da8b2a01989e7f93", key: "16c5c9d859b544dfe10119d67df15d66" }, //UNICANAL_C4
        "UmVkZV9SZWNvcmQ=": { keyId: "b0bd8ea11b3f4c219903085ef1d44b0d", key: "9a25709a72c2ca93cb738665736cfa5a" }, //Rede_Record
        "QTNfU2VyaWVz": { keyId: "6aa5288008ab3b1c01ccb2fc55bdd151", key: "0be049527ccbc5bfadc42f7845a5d35e" }, //A3_Series
        "TGF0YW1fUnVyYWw=": { keyId: "abdfd83824e9ba585f74fb72c647aa4f", key: "9967e06e39893998d16714988d9d87f1" }, //Latam_Rural
        "U29tb3NfUm9zYXJpbw==": { keyId: "863ed7f26cf51850b9ed735545c788ce", key: "789edf190d78baefb569e8ca09ac86c2" }, //Somos_Rosario
        "U29tb3NfQmFoaWFfQmxhbmNh": { keyId: "64c7e9ed4e3930b54d020c08a6792f10", key: "737b6374d4492e8c233ca2c2ebac9b85" }, //Somos_Bahia_Blanca
        "U29tb3NfU1RG": { keyId: "1344e18e45e6e6e5ec0a302d769c8e52", key: "913cfe90bb3af2d402eada6ad50ce22d" }, //Somos_STF
        "U29tb3NfQ29ycmllbnRlcw==": { keyId: "f0179a4ba9f407dfdee057a33f8f220c", key: "e0c3f11cb1d7f8d17b7a1532f29edb0b" }, //Somos_Corrientes
        "U29tb3NfTGFfUGxhdGE=": { keyId: "bffd3b447aa44a429a703245836e46fa", key: "13be31c0bcb76b28b1248bf64ab3926e" }, //Somos_La_Plata
        "U29tb3NfU2FsdGE=": { keyId: "9879546bcfd8a4231ce7502062f424fb", key: "e071693afea3e58f8b28bf5b2311e3fc" }, //Somos_Salta
        "U29tb3NfUmFmYWVsYQ==": { keyId: "7071b5b3283cebd376d1ba9c6e53ba6e", key: "87a6c4c8baaefb073270e92f092b4c25" }, //Somos_Rafaela
        "U29tb3NfUmVzaXN0ZW5jaWE=": { keyId: "a7c3579af87560a1dbc599c882516f95", key: "cdfe03336cc80ef7c3dd9eb19f298d04" }, //Somos_Resistencia
        "U29tb3NfRWxfVmFsbGU=": { keyId: "513f2056bf40d9123918fd7939fbf065", key: "075ee6dd9b67d88be5642eaa510e91cb" }, //Somos_El_Valle
        "U29tb3NfTWlzaW9uZXM=": { keyId: "170d08ce1e5e94e366318d178700e0cf", key: "76259c53b90ce8e0c2824ed49b767bd4" }, //Somos_Misiones
        
        "Q2FuYWxfQ2l1ZGFkX01EUQ==": { keyId: "b57763b8d9c205d609ea509432201fac", key: "a476cf79190fe4810efdd81e32317ff3" }, //Canal_Ciudad_MDQ
        "QUJDX1RWX0M0": { keyId: "1e8c184b326a2fb228b37a4a7114b633", key: "1c5fa10b3fe66d8693b8755e5f6ae6c0" }, //ABC_TV_C4
        "TWVnYV9UVg==": { keyId: "61a2b4ab23a8aaecf1333544b9401da5", key: "7d69d25a9b592969393d5aa89d5d40e6" }, //Mega_TV
        "NV9EaWFzX1BZ": { keyId: "07cb38268f0b93ba451304b79bc56aa6", key: "ff35371918bba3252e0aab1c3b1bde33" }, //5_Dias_PY
        "VGVsZWZlX0ludGVybmFjaW9uYWw=": { keyId: "cc0abcc84ec380cfc192b96d32abad23", key: "9b7825385b89ff82d01909a4ae404877" }, //Telefe_Internacional
        "QXJ0ZWFyX0ludGVybmFjaW9uYWw=": { keyId: "c5f7b491a191048931aaaf0314558bc7", key: "6477522b434cad2020b5fb4d055720b0" }, //Artear_Internacional - El Trece Internacional
        "R29sZGVu": { keyId: "f6cd784e5b53208261dd81a345908400", key: "b125fd77d7d88752dc045e57edcf9943" }, //Golden
        "QW1lcmljYV9UdWN1bWFu": { keyId: "ed542fdaa4598671e26aca3e160afed7", key: "cdb880c60523b9ebc61b9003c41f8048" }, //America_Tucuman
        "Q0hfMTNfQ29ycmllbnRlcw==": { keyId: "ee837d0ec414d95a51b0c7a57d49d307", key: "883fd72dc9b72db33d7b4f8dc0eb0016" }, //CH_13_Corrientes
        "Q2FuYWxfOV9QYXJhbmE=": { keyId: "dd573858f3414066b9292ef6397a5c3c", key: "593eb5f7facce4240ff7a5f26afd47e0" }, //Canal_9_Parana - El trece
        "Q2FuYWxfM19Sb3Nhcmlv": { keyId: "662447df521fb590b72b1a11671c2afd", key: "81c204c443987d7b176587d626a124a0" }, //Canal_3_Rosario - El trece
        "Q2FuYWw3X0JhaGlhX0JsYW5jYQ==": { keyId: "a15243320c0a79defa8814252e3e8c07", key: "0659db05632c0061c126db7a12582499" }, //Canal7_Bahia_Blanca - El trece
        "Q2FuYWxfUnVyYWw=": { keyId: "72308b4673698df3c4143be5410c82d4", key: "35f38c9fb04664572ee6c0a9c53a2388" }, //Canal_Rural
        "U2hvd19TcG9ydHM=": { keyId: "df3ed6245bb9af1a0346379e8e475dff", key: "f86f8457438d4e449d53b956cc1be664" }, //Show_Sports
        "UFhfU3BvcnRz": { keyId: "9393321daef1463fc7e2e060298db852", key: "be6bc91e17816f67e62596bed463c5ad" }, //PX_Sports
        "Q2FuYWxfMTNfU0ZF": { keyId: "59ef9057114f44a480b62e36a6b1374f", key: "74ef97bc54df5655c3a1d4f80b16e8d7" }, //Santa Fe Telefe
        "Q2FuYWw5X0JhaGlhX0JsYW5jYQ==": { keyId: "7ccfc823faed878832b3e4a69fcb72a2", key: "d68b394ab768f4a2ec148ab8cdac46ef" }, //Bahia Blanca - Telefe
        "Q2gxMF9UdWN1bWFu": { keyId: "7a53740aa52d8b50ccb218aab5e9d50e", key: "e772fa4a4997b50a0ff04e2ef286a864" }, //Ch10_Tucuman
        "Q2FuYWxfYQ==": { keyId: "ada50e6dfa73ff021b64cda0e3266441", key: "a8e86512821e7657d05acbbb703b5269" }, //CANAL A
        "QW1lcmljYV9TcG9ydHM=": { keyId: "a0aa01337a2148bda1e21862295ae037", key: "fee0f87a0527497351fc54ce36ad1de2" }, //Americasports-arg
        "REhF": { keyId: "7650ddfb5362bb721625873d246b71cc", key: "51c2839183b1f5056d94fe0b75e44662" }, //DHE
        "R29sZl9DaGFubmVs": { keyId: "38d6226b7cd2cfa86b4b9cdaa455e7d7", key: "24f0ef2bf787647cc02df870417eed2b" }, //GOLF TV
        "SG9tZV9hbmRfR2FyZGVu": { keyId: "fb0b850c84cede52061cf6f84fce6cc3", key: "f3de5c89d06ce99a76bdf20703da3cc2" }, //HGTV
        "Q0hfOV9SZXNpc3RlbmNpYQ==": { keyId: "dde29700ee0423e1afe3828c6f251295", key: "1928b62bc191bd26c357137d7d909868" }, //Canal 9 Resistencia
        "VW5pdmVyc2FsX0NpbmVtYQ==": { keyId: "6c2ba2a391c2edc5a2990841c5c30636", key: "892061b87f07c6d816f234a1328c3420" }, // Universal Cinema
        "VW5pdmVyc2FsX0NvbWVkeQ==": { keyId: "1b517ae7d7f99219f56dd4a84e15b81c", key: "339c4e668547d83c35c32e97a0a1453e" }, // Universal Comedy
        "dW5pdmVyc2FsX0NyaW1l": { keyId: "d8a2142b66d54b58165973e137bef4f0", key: "f30900beab737d0f39b543e58344ba2f" }, // Universal Crime
        "VW5pdmVyc2FsX1ByZW1pZXJl": { keyId: "909eb7589305cd00e1b6827fadd74411", key: "43a9e55701369434df4892240d9741c2" }, // Universal Premiere
        "VW5pdmVyc2FsX1JlYWxpdHk=": { keyId: "8ebb9535d7a19a2876a1d150fe613c88", key: "c1ad609a9831f56126f3c76ffbc4ca04" }, // Universal Reality
        "RVNQTjJIRA": { keyId: "d079ffa3757e8335611fc48be6ba47ff", key: "05059d1cb21b6708a55e9c26fb38e2f3" }, //ESPN
        "RVNQTjJfQXJn": { keyId: "e6eab53cf8ea962b999c59c298596a65", key: "10c103ae76f99620d66fa75f2c03302a" }, //ESPN2_Arg
        "RVNQTjM": { keyId: "deeed0f44c6b45e064f4d5064486e821", key: "bf89ceeb93564ddc603ba6afd8c9266a" }, //ESPN3
        "RVNQTkhE": { keyId: "d02981e6faeacef49c90fdb053ab641d", key: "645e13624e933841b1ea35cda1b55bd1" }, //ESPNHD 4
        "RVNQTjQ=": { keyId: "cf626de3cadd9bfaf0b85c06aafd2cd0", key: "bc2aa7d9e6354e4979ee62b0ec5595c5" }, // ESPN 5
        "Rm94U3BvcnRzM19VWQ==": { keyId: "fdac9b45f19959b848f498c8efe15d12", key: "c2a6e7acabc370ef792ffacc5e2610a9" }, // ESPN 6
        "Rm94U3BvcnRzMl9VWQ==": { keyId: "fdac9b45f19959b848f498c8efe15d12", key: "c2a6e7acabc370ef792ffacc5e2610a9" }, // ESPN 6
        "Rm94U3BvcnRz": { keyId: "37730b00a5f92084c47a8129e84559f3", key: "a2e20a45a057ff4e7c0bc2ad49e6f3e5" }, //FoxSports
        "Rm94U3BvcnRzMkhE": { keyId: "1b0ab680ef94a1842185fa78a830cbd7", key: "23129ab5572aeda7607c920655c0dbea" }, //FoxSports2HD
        "Rm94U3BvcnRzM0hE": { keyId: "4629bd0ae30c0e72af111fb948fada1c", key: "7864154c679e769e7f164ba083c8fad3" }, //FoxSports3HD
        "VE5UX1Nwb3J0c19IRA": { keyId: "9fb56301bc7687baf0b1a61def9a007a", key: "947d2294ba67256827e8e97f267e71e0" }, //TNT_Sports_HD
        "Rm94X1Nwb3J0c19QcmVtaXVuX0hE": { keyId: "c502892e037a9f34827147b2b24e42cf", key: "2531bd34bec6c0e8fa4e07aedb261ade" }, //ESPN_Premiun_HD
        "VHlDU3BvcnQ": { keyId: "0b1e6825350fa1bc0032f8f36287e006", key: "11fc540a4539d18f91cd403a5ed42284" }, //TyCSport
        "VHlDX0ludGVybmFjaW9uYWw": { keyId: "58e1ebe75d944f6a98ea67b1c7c0a572", key: "1c311b069dbce31ce8e62a6e7e2433eb" }, //TyC_Internacional
        "Q2FuYWw3": { keyId: "589f5b6f4afec0b3362cd6be2ab1eb36", key: "6d685f3151730ca6a4be7765a46d30a5" }, //Canal7-TV PUBLICA
        "RGVwb3JUVkhE": { keyId: "e721cdf9043ee562296005056a2757de", key: "70259c9d827905e8088cdedceb56ae87" }, //DeporTVHD
        "VlRWX0hE": { keyId: "b96960aa715a4e51b7e952e81c99ac8e", key: "5bbffc680764dbd63d90b774b3aa0c0a" }, //VTV_HD
        "VlRWX1BsdXNfSEQ": { keyId: "da8a49a594160cc0059f07b9f71cd39a", key: "37ca91dd799b351a02445151c7f61070" }, //VTV_Plus_HD
        
        
        "RXZlbnRvczFIRA": { keyId: "fdb996352a45b339b86f3eb336af36c6", key: "21b8543c13b2b87e0e097602a71f3f91" }, //Eventos1HD-ESPN EXTRA?
        "RXZlbnRvc18yX0hE": { keyId: "02c5f46dec4c3feadde6f5b0b0c6e9b6", key: "89186f8c250f8291b4211ac1b2bdc103" }, //Eventos_2_HD - Muestra Flow
        "RXZlbnRvc18z": { keyId: "8b2fdf5a35d01a6ac888b7e8b1a2ddad", key: "2c088b42e71dba1c572e7f04d2934430" }, //Eventos_3
        "Q2FuYWxfOTA=": { keyId: "ca50103f3285421e8be7da8c0c0e7a54", key: "3608e92a6feddf228c1f035ebb764426" }, //Canal_90
        
        
        "TkJBX1RW": { keyId: "1a9ded52bb6b4a95ceaf0225f6ec950d", key: "96ddfcf278a5103f3a4535efcb3cada2" }, //NBA TV 
        "QW1lcmljYTI0": { keyId: "71133ea8e1941323a21acb5090c5c469", key: "f46178e47581d410008a505eeed759fe" }, //America24-A24
        "QTNfQ2luZQ==": { keyId: "d6ff881a6f07986a80d6ad6f041b57d4", key: "b401c87c2ab11a1a488ee1c474b109ae" }, //A3_Cine
        "QUVIRA==": { keyId: "46d4dda63edf221dae86a32c6e1c8fdb", key: "40d66cb806ec1fa0f5649d800a43ec44" }, //AEHD
        "QU1D": { keyId: "30ffe7a2776537e8cec7020d783536f9", key: "7b4f323576ac85d8938f5bebc245131c" }, //AMC
        "QW1lcmljYVRW": { keyId: "3d7afc43dab940d699b61466b245369f", key: "712b5165ff990156e6c9e580b0b4df59" }, //AmericaTV
        "QW5pbWFsUGxhbmV0": { keyId: "bd3391cf0c35692dbaca16b76169e211", key: "0dd3924a07b0a4051f6db1d57e75a700" }, // Animal Planet
        "QW50ZW5hXzM=": { keyId: "1e1ad422a6714482b66fa702c16e50c6", key: "4fdf28a0ab91356ca55a75f4e9bf8c92" }, //Antena_3-INTERNACIONAL
        "QXJnZW50aW5pc2ltYQ": { keyId: "7e9c0f045a0940b971d1067eecf629b7", key: "923f466a008d077b21ac13ede21600a5" }, //Argentinisima
        "QVhOSEQ=": { keyId: "95b9c884a97447ecab423d054cc499aa", key: "f57499f1432bb70e9cb9a0ebfbef2da4" }, //AXNHD
        "QkJDX1dvcmxkX05ld3M": { keyId: "fe5abcb69ce6fe6d735275317046241c", key: "917566c164adacba90d0364f31808bd8" }, //BBC_World_News
        "QnJhdm9UVg==": { keyId: "ad7fbbec39cea4a5a63ac13d94da48d4", key: "f71087b4dc211db079237c0fb783eb93" }, //BravoTV
        "QzVO": { keyId: "ef98ad3a4a5b9f6edae885e8bf450d3c", key: "861873c6c69eb66df0afc3034a02a796" }, //C5N
        "QzlOX0M0": { keyId: "ed6a4c25be366a68b9758a24900fd7fc", key: "ed523316b354cd5b1b99b3f9e6a99af5" }, //C9N_C4
        "Q2FuYWwxMF9VUlU=": { keyId: "8dd34782d754f8fcb1e8b38da9ffad0b", key: "6fb97467c0f0ea13f86d41a70e029c51" }, //Canal10_URU
        "Q2FuYWxfMTJfQ0JB": { keyId: "90422640d3e846159fa450f83870ed4a", key: "abb3cd94aece1a462df25a8f21085cca" }, //Canal_12_CBA
        "MjZfVFZfSEQ": { keyId: "52e55c3298f2e07cbfe59eb48ffda940", key: "0fb5916a14188e5eed56afb110e82af7" }, //26_TV_HD
        "Q2FuYWw0X1VSVQ==": { keyId: "dabefaac89742589778fcfab78f08354", key: "896dd914683b01c8044ffd34d7b6416b" }, //Canal4_URU
        "Q2FydG9vbk5ldHdvcms=": { keyId: "e77eb4ef8dc7ad8191dc71d04f8fc3b3", key: "b4f9398a9261d11fcd6018acffab94d1" }, // Cartoon Network
        "Qm9vbWVyYW5n": { keyId: "db0e97e96205d545471ac982444cf3e3", key: "90b8bf6d1c8cf8761f75470f182e3dd1" }, //Boomerang-cartonito
        "SU5DQUFfVHY=": { keyId: "7a11a38b78f2a44380bf3954b169066e", key: "4e84e73a2ddfca8c8f473023033e0649" }, //INCAA_Tv-CINE AR
        "Q2luZWNhbmFsSEQ=": { keyId: "98b31a0a125d81ef4c9caf1683f55444", key: "7ec3df0771fe86c9f405765ce9fb5204" }, //CinecanalHD
        "Q2luZW1heA==": { keyId: "fd84db183866916b15366b4852e68da8", key: "1201b1f0ed299a46ddffabb5c8553793" }, // cinemax
        "TWFnYXppbmU=": { keyId: "36bc52ea68831dbbec6a9529bc81a9e8", key: "39858817235ad0c15640dbde56f87d78" }, //ciudad Magazine
        "Q00=": { keyId: "682f36b5736f4560951ca14b80d29524", key: "3accb729067a39b3b8143f1b447b9d25" }, //CM
        "Q29tZWR5Q2VudHJhbA": { keyId: "797eb97d11b7ee31e7da456248464879", key: "93a54e23d6fb5e7d05420a279923988c" }, //ComedyCentral
        "Q3JvbmljYVRW": { keyId: "33ded37fefaa6c3d6878e0d555dfaffd", key: "9e024c10af20f240a1ea35b94d147f28" }, //CronicaTV
        "RGlzY292ZXJ5SEQ=": { keyId: "f55aec775d92cea41ea0f80b8615495a", key: "8927f326931c6a5af38d0cd7cd744338" }, //DiscoveryHD
        "RGlzY292ZXJ5SG9tZUhlYWx0aEhE": { keyId: "6e2bc2b3c9464c407af6d0559bb5e1ea", key: "43ec5e698b6f60a0f41d604909a25186" }, // Discovery hyh
        "SUQ=": { keyId: "2a6094881a1486dc8a3efe6be9f22017", key: "ddb8613a5a749a93d9bbc44559298de0" }, // Discovery  id
        "RGlzY292ZXJ5X0tpZHM=": { keyId: "0a2c846ad90eb65c697b31e1b0728b53", key: "9cc6907a95fe0c4241a7103f25650f64" }, // Discovery Kids
        "RGlzY292ZXJ5X1NjaWVuY2U=": { keyId: "c9fcd9709b38058ca2c90b83e81bc039", key: "fb736e65c2a7248987e58a2a7e6d49a6" }, //Discovery_Science
        "VGhlYXRlcl9IRA==": { keyId: "e76e0dd95f2187770a6fa9f72d7600f5", key: "bcab30dad55228fcd0a89a534b7b4f04" }, //DISCOVERY Theater_HD
        "VExD": { keyId: "2718fd9ea3492a477bd91c51d348185d", key: "979d54e467efcac7b5ea18d50f74ee08" }, // Discovery TLC
        "RGlzY292ZXJ5VHVyYm8=": { keyId: "0f55ecc6486bcae9fd3f53271fc16ad8", key: "eeb7df5969fc58b5771f2f3bc7502ad5" }, // Discovery TURBO
        "RGlzY292ZXJ5X1dvcmxkX0hE": { keyId: "31e4b8ab99b5a7bd7812834701825dd9", key: "fe9e6e8c22b0d33baaae895b9d0317aa" }, //Discovery_World_HD
        "RGlzbmV5Q2hhbm5lbEhE": { keyId: "138981ed5f75527232593af4c92c9007", key: "0f05c78bd7e8bc3e9e0f708c1424f34b" }, //DisneyChannelHD
        "RGlzbmV5SnI=": { keyId: "bd29c4a538f28845ce33581111749428", key: "46d9589f41a11c3637c07c604956deac" }, // Disney Junior
        "RHJlYW13b3Jrcw==": { keyId: "7f30c43e47544412221fd64201d92f4b", key: "f83d09d75a0946b1d71aa48c201b4d8b" }, //Dreamworks
        "RGlwdXRhZG9zX1RW": { keyId: "83404a1a63bad8a1d21aabf89f6436cc", key: "b4ce534c34911e703ffc780653bb2a78" }, //Diputados_TV
        "Q2FuYWwxMlVSVQ==": { keyId: "dfde9d35d7438bfdf61da5dfac0557c1", key: "acb13370c03a7254e2bb9cc9d2125017" }, //Tele
        "Q2FuYWw5": { keyId: "3ddf62bf44e68f06a6adb810199df713", key: "2ace15b4ffbe70940fdf04cf97e114e7" }, //Canal9
        "QXJ0ZWFySEQ": { keyId: "4aa8ec10f92b212c0cbaaa8e0591b468", key: "17985aeaac30e62e6dad45f4df84cc2c" }, //ArtearHD-EL TRECE
        "RW5jdWVudHJv": { keyId: "13e166b20d99713a42e42bfe91c7330b", key: "413a0665d266bcc76a706ccfce2a2410" }, //Encuentro
        "RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=": { keyId: "194d96e9bd9009b1eacc529e3260560a", key: "c37a50d6848ce6d3dcce0c15d227b9e0" }, //E_Entertainment_Television
        "RXVyb2NoYW5uZWw=": { keyId: "95e7d20fc07b39fe9560be1a6be83ce1", key: "40ef00abd884db6166b105da88862849" }, //Eurochannel
        "RXVyb25ld3M=": { keyId: "04d36f1e6df4061c481d5734bf269aaf", key: "4d567918139c6ca6e9a07e8cd0111a2e" }, //Euronews
        "RXVyb3BhX0V1cm9wYQ": { keyId: "02ba4e4b769e4c148250ec3f2f206e46", key: "659530e217d14c24826899bdefac48e9" }, //Europa_Europa
        "RmlsbV9BcnRz": { keyId: "44ced0f8d39827356490dfdb264d9a0b", key: "af022335fabcd3e2df916b2b53ae3685" }, //Film_Arts
        "Rmxvd19NdXNpY19YUA==": { keyId: "b2aae44a74144be8b2118e20d1412bab", key: "8a7ae996d12d8d5d5637d1044f8e08b7" }, //Flow_Music_XP
        "Rmxvd19NdXNpY18x": { keyId: "f34cd7709f093d23d4db009107d96862", key: "d8a829138d970b45e867c9733a31b2f0" }, //Flow_Music_1
        "Rmxvd19NdXNpY18y": { keyId: "596b599580b39ae2f3c413f7eae36902", key: "2d7e3d5d31f68690fd877a111f84e8e3" }, //Flow_Music_2
        "Rmxvd19NdXNpY18z": { keyId: "e078b15ed770ec71f803c0ecc43de033", key: "7010bccda544f74d1b425c4cebd082d4" }, //Flow_Music_3
        "Rm9vZF9OZXR3b3Jr": { keyId: "94d3ef068988afbe74787867f3f505c5", key: "6264b63a33548f46327ce824127841ba" }, //Food_Network
        "Rm94X05ld3M=": { keyId: "488ea1defb086bbe1927cba169da7d5f", key: "ce35b54276eadded7b8d4301b3f9cc66" }, //Fox_News
        "RlhIRA==": { keyId: "9701932cab0e4aa3b8078176d5d54dd0", key: "76819026588b16fd7083436b2b94485e" }, //FXHD
        // "RlhIRA==": { keyId: "9ab9c42c713e0fb5517dc77cc19d6755", key: "d8c271b82387e609b6c19e5e79240aff" }, //FXHD
        "RWxfR2FyYWdl": { keyId: "a3ea9cbb34e7f4dbf6156a68f913d6d7", key: "1c00f433ce482e2b8766a6a020634947" }, //El_Garage
        "R0VOX1RW": { keyId: "07437c8de4e0da2fbfae8137647fbed5", key: "2993a1e2086fada083a8a2edd0ecc56b" }, //GEN_TV
        "R2xpdHo=": { keyId: "f812ef81d6ce425a8db4012a1ef8b0c1", key: "5c2b9791b1074727eb349588e32bdc0a" }, //Glitz NO FUNCIONA
        "R291cm1ldA==": { keyId: "8bde4fca7757c6c9f15a7bada68df2ba", key: "89ba78584f7612f0fccc62d26043433e" }, //Gourmet
        "SEJPSEQ=": { keyId: "b059cdbfc787a32f57fbcb6e52dbc0a0", key: "50648d7806624eb8d53fb2aecc8b1af1" }, // HBO
        "SEJPXzI=": { keyId: "91bd6f829d06498c21e212acf1c5fa07", key: "148a358284689e40b22074c244c535da" }, // HBO 2
        "SEJPX0ZhbWlseQ==": { keyId: "9768f423e5121ded23637f54245506a2", key: "abd28dce83c82d26d5953b416db0e52a" }, // HBO Family
        "SEJPX011bmRp": { keyId: "56fc145492109590d82cf8f60c55d4f5", key: "c713241579436e0d5fe2480b6eb7b1fd" }, // HBO Mundi
        "SEJPX1BsdXM=": { keyId: "c1c780647a98d46c3e5867cf204d129a", key: "006d44f02be55c28f34b9106d79a82a9" }, // HBO Plus
        "SEJPX1BPUA==": { keyId: "782be6aa05e2e53f1f0769ac21335975", key: "bc54efe24ebc6127dee264704cdd543b" }, // HBO POP
        "SEJPX1NpZ25hdHVyZQ==": { keyId: "4918d3bf399a237e8ee065eb3ebf7327", key: "747179296ae370e9b8746a09904b5385" }, // HBO Signature
        "SEJPX0V4dHJlbWU=": { keyId: "b1c518c4859b1eac1ac409dd7a712155", key: "d9ae29d636e14074da10360765ee4cb5" }, // HBO Xtreme
        "SGlzdG9yeUhE": { keyId: "b10e48eb0c9940015e28dfe7637b48fa", key: "4df252f95de70923b736f3f659821cb7" }, // History Channel
        "SGlzdG9yeV8y": { keyId: "6e08ea85cdbf5d3d2089d5e9a5349d8c", key: "ccdb13d6d47775894452a0629c986b67" }, // History Channel 2
        "SG9sYV9UVg==": { keyId: "4db9994d2578f4a5f90dbab82b0305d3", key: "68a48d4557690d54ee82b67597993491" }, //Hola_TV
        "SVNBVA==": { keyId: "db764164934a48749a7a01bd015694f3", key: "512f3c8869af45e6e5dd1525b6a77867" }, //ISAT
        "TGFfTmFjaW9u": { keyId: "3561945a15a88603aee20ea15c605d6c", key: "7a1676bb6cc6cbb328f41626d8084594" }, //La_Nacion
        "Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==": { keyId: "de5029988df5bb682986df4fb5ed3e70", key: "0170fc52a8dc136055e0cfd0a77d5761" }, //canal Las estrellas
        "TEFfVEVMRV9DNA==": { keyId: "51bcbf1f1f83f30e91a1f1b6ff9155ee", key: "c1fb35c39a7353bf9493799086d887ac" }, //LA_TELE_C4
        "TGlmZXRpbWU=": { keyId: "c0e2d5650551523ee94db5dc1a8a13d4", key: "d555f25b35d8f32cf9efab28c24ca1ba" }, //Lifetime
        "TWFzX0NoaWM=": { keyId: "dac8ff1688994efd898222acdd05cafc", key: "22fdf97c7233667518258ed16ccb2545" }, //Mas_Chic
        "TVRWX0hE": { keyId: "0c9eb3ead38a122ac460ad96a8ebfd2e", key: "66bfbfa4449eb8bc1bcf7577d5bffaad" }, //MTV_HD
        "TVRWMDA=": { keyId: "1f0c09ed9e5841cf867ba6eb3cdfd61d", key: "802c89c6bae6a245aaafcf40c1986fc1" }, //MTV00
        "TVRWX0hpdHM=": { keyId: "61008dfc867544cd872de99b1f2b82cf", key: "716449756316b91c54803aaa22a2fbf0" }, //MTV_Hits
        "TmF0R2VvSEQ=": { keyId: "73735c1740464c99cca3ffb450c15811", key: "b9241d083c902fa615e4f780081ae926" }, // NATGEO
        "TmV0X1RW": { keyId: "42803fd8c2cff83bfca0e64931c42d2b", key: "728caae294e864b66aabe753c72df05e" }, //Net_TV
        "Tmlja2Vsb2Rlb24=": { keyId: "89a6be32a372255475c03d910be1eae8", key: "4446ac987204570bbebb8ee5a4945903" }, // NICK
        "Tmlja19Kcg==": { keyId: "8e1fb2b59b9d83c11466cb54b31928e2", key: "3bf19e8d8956daca91daffb746f08bb1" }, //Nick_Jr
        "Tk9USUNJQVNfUFlfQzQ=": { keyId: "ae1b3bc5a68da1ed8a47b35afd13e310", key: "26710aad5c7ebeaf3d615db270355381" }, //NOTICIAS_PY_C4
        "UGFyYWd1YXlfVFY=": { keyId: "68a5bd6c58e6c05bacfd18d3feec31f2", key: "ae23f8357512df2dfabcb8104b078182" }, //Paraguay_TV
        "UGFyYW1vdW50": { keyId: "b85b710ecff3e38f31fc8e249b1c1cef", key: "a1544c193dde6f8858c9358ee69a60a7" }, //Paramount
        "UEFSQVZJU0lPTl9DNA==": { keyId: "b02c568163c14cfda4ddb958a0aab742", key: "edef8ba979d64acea3c827dcd51d21ed" }, //PARAVISION_C4
        "UEFLQV9QQUtB": { keyId: "334001b2f2644df9bdf35e92d2b89f8f", key: "475ec87d86ed0636dbb6d6d9d4a43bb7" }, //PAKA_PAKA
        "UXVpZXJvX0hE": { keyId: "a354b0c82a3a720c4a6f52ed5a1190f4", key: "45a76dcc84f058cfabc8b958d7303b28" }, //Quiero_HD
        "UkFJ": { keyId: "d214547d7d9a4011a39a899ce6e70071", key: "16c2ed0617cf1e123f3af6ea8875a82d" }, //RAI
        "U05UX0M0": { keyId: "a64f7643405eb504a6634036a96705e3", key: "e8c404746c8622774e35eba67fcc8623" }, //SNT_C4
        "U29ueUhE": { keyId: "fd9619f9d7c2d5115a339941279e0b4b", key: "bf55635e6591f905659fa27ab3ca2812" }, // Sony Channel
        "U29ueV9Nb3ZpZXM=": { keyId: "f76233e56d5102867c2bc5418871ad07", key: "16b38f0f7a797b3bb87983ebf5879814" }, // Sony Movie
        "U3BhY2U=": { keyId: "32684b675439d127a5ab1e07b2a57242", key: "e169f625df475d6d1c014cca1a52a251" }, //Space
        "Rk9YSEQ=": { keyId: "fc14190acc872e204f3973c75b6439f2", key: "34cf13899db248a7aa2c1deb288d75ef" }, //STAR-FOXHD
        "U3R1ZGlvX1VuaXZlcnNhbA==": { keyId: "dbe5d9ce01740076fdc95cbc0253b9ee", key: "d8a8ef434bffae80e45e203f6f7f4988" }, //Studio_Universal
        "U3VuX0NoYW5uZWw=": { keyId: "158177692aa3463eae5f4e1f72403e9c", key: "1c6c026fba9cf7ecb576c7bedce0ead4" }, //Sun_Channel
        "U3lGeQ==": { keyId: "9cd99cbb466c42e5b33e7a2ef7e2c7df", key: "18d9faccdaf2d15807d0a3f713e8b2a4" }, //SyFy
        "VENN": { keyId: "d40eab36dff7414984c6f51b7174be0c", key: "ebb259a7f76be779f8dd7d68f55e0098" }, // TCM
        "VGVsZXN1cg==": { keyId: "5235d8ee29f14ce6b26ea5d828aee77a", key: "6bf6bd339e3098babc2ab0b984cd2376" }, //Telesur
        "VGVsZWZlSEQ=": { keyId: "69d08ad795092fc59dbdfb194424dd92", key: "a73948b44e9292eede50c0c654301860" }, //TelefeHD
        "Q05OX2VuX0VzcGFub2w=": { keyId: "c63f6550cfa1dd89e607e6d10e0cd8e1", key: "30e26cc32d090bd86ad1e350fed5ce68" }, //CNN
        "VGVsZW11bmRvX0hE": { keyId: "53d752e4649dadd808d913985f86ee77", key: "d1fd24db1b61d634cabfc44538ce9b0e" }, //Telemundo
        "UGFzaW9uZXM=": { keyId: "dcf5f8c4d5b8d1f68a68dbe8a5c8d490", key: "b888f5f0c1cc6e097a67a56c25e2f490" }, //Pasiones
        "Q2FuYWxfOF9DQkE": { keyId: "103ce214b4d04c8eb4dd43670e956dad", key: "20e030576b8dc4df0d1c68e16af3bc0f" }, //Canal_8_Cordoba-TELEFE
        "Q2FuYWxfOF9UdWN1bWFu": { keyId: "7760caa058b51b7cce151c0539fa4a8f", key: "edd086c1011ed2c54cbe869d0e8d9289" }, //Canal_8_Tucuman-TELEFE
        "Q2FuYWxfNV9Sb3Nhcmlv": { keyId: "c61b5ac8e1664bf5b544e92ea2597e1c", key: "938437ac25f0a18e04efc1a083489edc" }, //Canal_5_Rosario-TELEFE
        "VGVsZWZlX1NhbHRh": { keyId: "6c7a5de392f874308e4dd8f2837f1115", key: "9ccf9ec6922c403d67d0df7952547581" }, //Telefe_Salta
        "VGVsZWZlX05ldXF1ZW4=": { keyId: "55828b728b8affe6d1d57d050025645d", key: "8ac11ed6d0ccaeac3f8218419f65bb94" }, //Telefe_Neuquen
        "VEVMRUZVVFVST19DNA==": { keyId: "ed2e9a12e8ae518192c371b6ee86744b", key: "7eaa24ac6e23fd7be2d48005d916eeb4" }, //TELEFUTURO_C4
        "VGVsZW1heA": { keyId: "bddc55bb3a2d3423281dc109107d851d", key: "9078a3e48389afcf63a457c0565e5263" }, //Telemax
        "VG9kb05vdGljaWFz": { keyId: "775d4113d76beac8231e92ed732e27d6", key: "0854a56be655bfa9055ef0e4980f4674" }, //TodoNoticias-TN
        "VE5UX0hEX0FyZw": { keyId: "61d9873e1f281cd0223acce773cc08b0", key: "3dda0d89ece37c244ed8cb7e90153555" }, //TNT_HD_Arg
        "VEJT": { keyId: "c62c95f2180545198eb91df4cc32e3fc", key: "6a21b6ef5adb8689dda7c3cc1eec0c35" }, // TNT Novelas (TBS)
        "VE5UU2VyaWVz": { keyId: "613a3dc25b1d3ed4186e2a399ac7f081", key: "7b5cf1cf7aeda446359bbcd23b5771b6" }, // TNT Series
        "VHZfQ2hpbGU=": { keyId: "c5d0d76e24844235988f9265619e5fec", key: "446b71a6deb806c6f129e25de999d07c" }, //Tv_Chile
        "VGV2ZV9DaXVkYWQ=": { keyId: "9b536cd1716647ee94c45fa4836d29d6", key: "d691c88a95440666742d1d8183182347" }, //Teve_Ciudad
        "VFY1X01vbmRl": { keyId: "d347434d36c4654fdd9285f5d439d119", key: "453ee4bc51a9557e01554e13449d77ee" }, //TV5_Monde
        "VFZfRXNwYW5h": { keyId: "e844b25249a7447c9e6ce3821059db8d", key: "de459a552468be246012335933ca9f3f" }, //TV_Espana-TVE
        "VHJ1VFY=": { keyId: "7d0cecffe9c29734343cf9983978c1a1", key: "f86b5ac05f2a2626b6c61bd4e13344d8" }, // TruTV
        "VW5pdmVyc2FsX0NoYW5uZWxfSEQ=": { keyId: "e0bb7db70deee6be9b881a5bd1af6453", key: "88c72f8626a9d7a9ca222fed62e1e6af" }, //Universal_Channel_HD
        "Vm9sdmVy": { keyId: "277df1cbe2bc86d555780d59eb7f2740", key: "306cb0274acd57bf70c7eafc643ebb4d" }, //Volver
        "V2FybmVySEQ=": { keyId: "07cef02a41651642cc35946c1b0fbc49", key: "be57342c7cf6e70aa851c0d1074d11c0" }, //WarnerHD
        "V09CSQ==": { keyId: "f2e44a719947ebfe37de527a9d6df71e", key: "029bddeb08909dd66a80276fc338d692" }, //WOBI
        "UGxheWJveQ": { keyId: "8577d81eaf33436d9f1e482360685a7c", key: "f608a0ac703cfaaf9442574d9a2b87fb" }, //Playboy
        "VmVudXM=": { keyId: "34237d2ae6684ee7a011f5b9c7c43e6d", key: "05d973d987915120e567880f50a422af" }, //Venus
        "U2V4dHJlbWU": { keyId: "95bd64227acf458daf7886f803d0298e", key: "79e28ee0ec58958bb666f9e53a0cd434" }, //Sextreme
        "SHVzdGxlcg==": { keyId: "cf37db556be5ee1ecd1ee1f1bcf39390", key: "cb2d8390f9c6c39311939fb51ba42ab2" }, //Hustler
        "SFRW": { keyId: "daecef5fe32f4ce083c6a0c692755d6a", key: "d4227f24389a9ba77293214b93eb0d7d" }, // HTV
        "SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=": { keyId: "723d8d918d61cee1f708ec849b6498a2", key: "b4b48cfccc1cddcc73bc7a7df46cb531" }, // IP Noticias
        // "UlBDX0M0": { keyId: "a8093cdcb2d504bd38f16764bd21b6e5", key: "bfcf3b033b5f0b5ae020751a6746326f" }, // el trece py
        "UlBDX0M0": { keyId: "a5a9d75cde4024c3f0479f32b229eebc", key: "3f5c379be6ee9c568bf81ca73f3e9144" }, //RPC_C4 no anda
        "QWR1bHRfU3dpbQ==": { keyId: "4e63e6ecde4f9cd9e68021b4c9af2d21", key: "438e6d40e9952362eef1c690c5f8455a" }, // AS
        "Q2FuYWxfZGVfbGFfY2l1ZGFk": { keyId: "8700e5c6a3528f38f878a1720ab8a5d4", key: "dd4d69622cd92dfe429229925c6a0a75" }, // El Canal de la Ciudad
    };
    
    channelList[0].name = atob(getURL);
    channelList[0].getURL = getURL;
    channelList[0].number = getChannelNumber(getURL);
    channelList[0].keyId = channelMap[getURL].keyId;
    channelList[0].key = channelMap[getURL].key;
    
    
    // return channelMap[getURL] || { keyId: null, key: null };
    return channelList;
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\[").replace(/[\]]/, "\]");
    var regex = new RegExp("[\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

async function getURLwithToken() {
    // Método principal: chromecast m3u8 redirect
    let token = sessionStorage.getItem('token');
    if (token) return token;

    const TOKEN_REGEX = /(https:\/\/.+?)(?=\/live)/;

    // Método 1: chromecast m3u8
    try {
        const url = 'https://chromecast.cvattv.com.ar/live/c6eds/TelefeHD/SA_Live_dash_cenc/TelefeHD.mpd';
        // const url = 'https://chromecast.cvattv.com.ar/live/c7eds/La_Nacion/sa_dash_full_e_7CF9BB041AD89713AD8CF4CF/La_Nacion.m3u8';
        const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
        if (response.redirected) {
            const match = response.url.match(TOKEN_REGEX);
            if (match) {
                token = match[0];
                sessionStorage.setItem('token', token);
                console.info('[token] Método 1 OK:', token);
                // alert(token);
                return token;
            }
        }
    } catch (err) {
        console.warn('[token] Método 1 falló:', err.message);
    }

    return null;
}

// Dominios
let mt = [
    "chromecast",
    "cdn",
]

// // Comprueba dominios y lo asigna
async function getValidMpd(channelInfo) {
    const channelToLoad = channelInfo || channelList[0];
    let urlWithToken = await getURLwithToken()
    // let url = `${urlWithToken}/live/c${channelToLoad.number || 3}eds/${atob(channelToLoad.getURL)}/sa_dash_full_e_7CF9BB041AD89713AD8CF4CF/${atob(channelToLoad.getURL)}.mpd`;
    // let url = `${urlWithToken}/live/c${channelToLoad.number || 3}eds/${atob(channelToLoad.getURL)}/SA_Live_dash_enc/${atob(channelToLoad.getURL)}.mpd`;
    // let url;
    // if(atob(channelToLoad.getURL) === "FXHD" || atob(channelToLoad.getURL) === "TBS"){
    //     url = `${urlWithToken}/out/v1/${atob(channelToLoad.getURL)}/SA_Live_dash_enc/${atob(channelToLoad.getURL)}.mpd`;
    // }else
    //     url = `${urlWithToken}/live/c${channelToLoad.number || 3}eds/${atob(channelToLoad.getURL)}/SA_Live_dash_enc/${atob(channelToLoad.getURL)}.mpd`;
    // return url;

    const channel = atob(channelToLoad.getURL);

    const path = ["FXHD", "TBS"].includes(channel)
        ? `/out/v1/${channel}/SA_Live_dash_enc/${channel}.mpd`
        : `/live/c${channelToLoad.number || 3}eds/${channel}/SA_Live_dash_enc/${channel}.mpd`;
    
    return `${urlWithToken}${path}`;
}


// async function getValidMpd(channelInfo) {
//     const channelToLoad = channelInfo || channelList[0];
//     const urlWithToken = await getURLwithToken();
//     const channelPath = atob(channelToLoad.getURL);
//     const channelNumber = channelToLoad.number || 3;

//     // 1. Definimos la lista de URLs a probar en orden
//     const primaryUrl = `${urlWithToken}/live/c${channelNumber}eds/${channelPath}/sa_dash_full_e_7CF9BB041AD89713AD8CF4CF/${channelPath}.mpd`;
//     const fallbackUrl = `${urlWithToken}/live/c${channelNumber}eds/${channelPath}/SA_Live_dash_enc/${channelPath}.mpd`;
    
//     // const primaryUrl = `${urlWithToken}/out/v1/${channelPath}/SA_Live_dash_enc/${channelPath}.mpd`;
//     // const fallbackUrl = `${urlWithToken}/live/c${channelNumber}eds/${channelPath}/SA_Live_dash_enc/${channelPath}.mpd`;

//     // 2. Probamos la primera URL
//     try {
//         const response = await fetch(primaryUrl, { method: 'HEAD' });
        
//         if (response.ok) {
//             return primaryUrl;
//         }
//     } catch (error) {
//         console.warn('Error al verificar la primera MPD, usando fallback:', error);
//     }

//     // 3. Si la primera falla o responde con error (404, 500, etc.), retorna la segunda
//     return fallbackUrl;
// }