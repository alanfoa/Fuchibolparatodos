let servidorCanalesOnline = "";

if (window.location.pathname.includes('/pro/')) {
    servidorCanalesOnline = "../servidores/";
} else {
    servidorCanalesOnline = "servidores/";
}

let MisCanales = new Map();

// ---- INICIO: CANALES AUTO-GENERADOS ----
MisCanales.set(
    "LPF PLAY",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "lpf.html",
        ]
    }
);

MisCanales.set(
    "TELEFE",
    {
        pais: "Argentina",
        guide: "TELEFE HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZWZlSEQ=",
            servidorCanalesOnline + "cvatt.html?get=VGVsZWZlSEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZWZlSEQ=",
            servidorCanalesOnline + "akamaizedpro.html?id=telefe_arg",
            servidorCanalesOnline + "akamaized.html?id=telefe_arg",
            servidorCanalesOnline + "megacable.html?id=Telefe_HD",
            servidorCanalesOnline + "megacablepro.html?id=Telefe_HD",
            // servidorCanalesOnline + "cobo.html?id=TELEFE",
            // servidorCanalesOnline + "telefe.html",
            // servidorCanalesOnline + "telefepro.html",
            // servidorCanalesOnline + "telefe_mundial.html?id=Telefe_Mundial",
            // servidorCanalesOnline + "telefe_mundial.html?id=Telefe_Stream",
            // servidorCanalesOnline + "videx.html?id=telefe",
            "https://stream-xhd.com/live1.php?stream=telefe",
            "https://stream-xhd.com/live2.php?stream=telefe",
            // servidorCanalesOnline + "fetch.html?stream=Telefe",
            // servidorCanalesOnline + "fetch2.html?stream=Telefe",
            servidorCanalesOnline + "latamlive.html?id=TELEFE_AR_IP_ENC_LIVE",
            // servidorCanalesOnline + "    ",
            servidorCanalesOnline + "aneviapro.html?id=Telefe",
            // servidorCanalesOnline + "proxym3u8/?id=TELEFE",
            // "server/cvatt.html?get=VGVsZWZlSEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=VGVsZWZlSEQ=",
            // "https://zzcointv.xyz/html/cvatt.html?get=VGVsZWZlSEQ=",
            // "https://a3.115tv.site/cvatt.html?get=VGVsZWZlSEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VGVsZWZlSEQ=",

            // "server/cvatt2_ext.html?get=VGVsZWZlSEQ=",
            // servidorCanalesOnline + "tvmia.html?stream=an_Telefe",
            servidorCanalesOnline + "sensa.html?id=Telefe",
            // "m3u8.html?stream=Telefe2",
            servidorCanalesOnline + "gigared.html?id=Telefe",
            servidorCanalesOnline + "gigared_ext.html?id=Telefe",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TELEFE",
            // servidorCanalesOnline + "m3u8.html?stream=Telefe_Interior",
            // servidorCanalesOnline + "sensa_ext.html?id=Telefe",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Telefe",
            // servidorCanalesOnline + "playme.html?get=CH_TELEFE",
            // "https://nebunexa.co/telefe.html",
            // "https://photocall.site/jc6e/l1?ch=telefe",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VGVsZWZlSEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VGVsZWZlSEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=VGVsZWZlSEQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VGVsZWZlSEQ=",
            // "https://nebunexa.com/cvatt.php?get=VGVsZWZlSEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=VGVsZWZlSEQ=",
            // "https://streamx10.cloud/jwplayer.php?stream=telefe",
            // "https://streamx10.cloud/server1.php?stream=telefe",
            // "https://futbollibrelibre.com/canales.php?stream=telefe",
            // "https://streamx10.cloud/global2.php?channel=telefe",
            // "https://streamx10.cloud/global3.php?channel=telefe", //No funciona en la apk 
            // "https://streamx10.cloud/global1.php?channel=telefe",
            // "https://la10hd.com/vivo/canal.php?stream=telefe",
            // "https://la10hd.com/vivo/canales.php?stream=telefe",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=telefe",
            // "https://can14-11-2024wplayerfloprinci.github.io/canvarispaises-1.html?id=caaatelefecapital",
            // "https://cantodos19-11-2024op2.github.io/todsloscan-2.html?id=caaatelefecapital",
            // "https://deportesfutgol.com/vivo/canal.php?stream=telefe",
            // "https://fullchannels.online/canales.php?id=GH",
            // "https://fullchannels.online/canales.php?id=GH1",
            // "https://fullchannels.online/canales.php?id=GH2",
            // "https://tutlehd5.com/online.php?a=410",
            // "https://todcanembfloargop2.glitch.me/canop2.html?id=caaatelefecapital",
            // https://cablevisionflow2.dev.ar/extencion.html?get=VGVsZWZlSEQ=
            // "chrome-extension://opmeopcambhfimffbomjgemehjkbbmji/pages/player.html#https://smt-edge03.sensa.com.ar/live/eds/Telefe/live_dash_cld/Telefe.mpd?ck=eyI5YmI1NGZjY2ZmYWRkZDM4OTE2ZTg1YzA4ZGU5OGNjOSI6ImQwNmY1MDljNDE4ZWI2ZjFiMmZjMmI3NjY0NDUzMjhiIn0=&headers=eyJvcmlnaW4iOiJodHRwczovL3BsYXllci5zZW5zYS5jb20uYXIiLCJyZWZlcmVyIjoiaHR0cHM6Ly9wbGF5ZXIuc2Vuc2EuY29tLmFyLyJ9",

            // "https://cableparatodoscan-varisscanop3-fl.blogspot.com/p/sopraacansensa-sodepo.html?id=Telefe",
            // "https://pracanespeeeedaaass.github.io/cantods-seeesaa.html?id=Telefe",

            // "https://tiogol.com/vivo/canal.php?stream=telefe"
            // https://bestleague.one/cvatt.html?get=VGVsZWZlSEQ=
            // https://cointv.online/html/cvatt.html?get=VGVsZWZlSEQ=

            //Telefe Internacional
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZWZlX0ludGVybmFjaW9uYWw=",
            servidorCanalesOnline + "cvatt.html?get=VGVsZWZlX0ludGVybmFjaW9uYWw=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZWZlX0ludGVybmFjaW9uYWw=",
            // servidorCanalesOnline + "proxym3u8/?id=TELEFE_INTERNACIONAL",

            //Servidor Canal 8 Mar Del Plata
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZWZlX01EUV9IRA==",
            servidorCanalesOnline + "cvatt.html?get=VGVsZWZlX01EUV9IRA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZWZlX01EUV9IRA==",
            servidorCanalesOnline + "fetch2.html?stream=Canal_8_Mar_Del_Plata",

            // Servidores de Santa Fe
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMTNfU0ZF",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMTNfU0ZF",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMTNfU0ZF",
            // servidorCanalesOnline + "telefe.html?channel=telefe_santafe",
            // servidorCanalesOnline + "fetch.html?stream=Telefe_SantaFe",

            // Servidores de Stgo. del Estero
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWw3X1NERQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWw3X1NERQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWw3X1NERQ==",

            // "cobo.html?id=Telefe_SantaFe",

            // Servidores de Bahia Blanca
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWw5X0JhaGlhX0JsYW5jYQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWw5X0JhaGlhX0JsYW5jYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWw5X0JhaGlhX0JsYW5jYQ==",

            // Servidores de Corrientes
            // servidorCanalesOnline + "cobo.html?id=CH_13_Corrientes",
            // servidorCanalesOnline + "m3u8.html?stream=13_MAX_TV_Corrientes",
            servidorCanalesOnline + "cvatt_pro.html?get=Q0hfMTNfQ29ycmllbnRlcw==",
            servidorCanalesOnline + "cvatt.html?get=Q0hfMTNfQ29ycmllbnRlcw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q0hfMTNfQ29ycmllbnRlcw==",

            // Servidores de Mendoza
            servidorCanalesOnline + "m3u8.html?stream=El_Nueve_Mendoza",
            servidorCanalesOnline + "extension.html?get=Televidaar",


            // Servidores de Cordoba
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfOF9DQkE",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfOF9DQkE",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfOF9DQkE",
            // servidorCanalesOnline + "telefe.html?channel=telefe_cordoba",
            // servidorCanalesOnline + "fetch.html?stream=Telefe_Cordoba",

            // Servidores de Rosario
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfNV9Sb3Nhcmlv",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfNV9Sb3Nhcmlv",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfNV9Sb3Nhcmlv",
            // servidorCanalesOnline + "telefe.html?channel=telefe_rosario",
            // servidorCanalesOnline + "fetch.html?stream=Telefe_Rosario",


            // Servidores de Tucumán
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfOF9UdWN1bWFu",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfOF9UdWN1bWFu",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfOF9UdWN1bWFu",
            // servidorCanalesOnline + "m3u8.html?stream=Telefe_Tucumán",
            // "https://www.dailymotion.com/embed/video/x8z8w7c?autoplay=1",

            // Servidores de Salta
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZWZlX1NhbHRh",
            servidorCanalesOnline + "cvatt.html?get=VGVsZWZlX1NhbHRh",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZWZlX1NhbHRh",

            // Servidores de Jujuy
            servidorCanalesOnline + "cvatt_pro.html?get=Q0hfN19KdWp1eQ==",
            // servidorCanalesOnline + "cvatt.html?get=Q0hfN19KdWp1eQ==",
            // servidorCanalesOnline + "cvatt2_ext.html?get=Q0hfN19KdWp1eQ==",
            servidorCanalesOnline + "m3u8.html?stream=Canal_7_Jujuy",

            // Servidores de Neuquen
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZWZlX05ldXF1ZW4=",
            servidorCanalesOnline + "cvatt.html?get=VGVsZWZlX05ldXF1ZW4=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZWZlX05ldXF1ZW4=",
            servidorCanalesOnline + "fetch.html?stream=Canal_7_Neuquen",
            // servidorCanalesOnline + "m3u8.html?stream=Canal_7_Neuquen",
        ]
    }
);

MisCanales.set(
    "EL TRECE",
    {
        pais: "Argentina",
        guide: "El Trece HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QXJ0ZWFySEQ",
            servidorCanalesOnline + "cvatt.html?get=QXJ0ZWFySEQ",
            // "server/cvatt.html?get=QXJ0ZWFySEQ",
            // "https://sssshhh.xyz/cvatt.html?get=QXJ0ZWFySEQ",
            // "https://a3.115tv.site/cvatt.html?get=QXJ0ZWFySEQ",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QXJ0ZWFySEQ",
            servidorCanalesOnline + "cvatt2_ext.html?get=QXJ0ZWFySEQ",
            servidorCanalesOnline + "akamaizedpro.html?id=eltrece_arg",
            servidorCanalesOnline + "akamaized.html?id=eltrece_arg",
            servidorCanalesOnline + "megacable.html?id=Canal_13_HD",
            servidorCanalesOnline + "megacablepro.html?id=Canal_13_HD",
            servidorCanalesOnline + "vodgc.html?id=eltrecetv",
            servidorCanalesOnline + "latamlive.html?id=CANAL_13_HD_IP_ENC_LIVE",
            servidorCanalesOnline + "aneviapro.html?id=El_Trece",
            // servidorCanalesOnline + "tvfuego.html?id=el13",
            servidorCanalesOnline + "edge.html?get=Trece_Satelital",
            // "server/cvatt2_ext.html?get=QXJ0ZWFySEQ",
            servidorCanalesOnline + "tvmia.html?stream=bn_El_Trece_AR",
            servidorCanalesOnline + "sensa.html?id=Canal13",
            // servidorCanalesOnline + "gigared_ext.html?id=Canal_13",
            // servidorCanalesOnline + "gigared.html?id=Canal_13",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Canal_13_HD",
            // servidorCanalesOnline + "m3u8.html?stream=El_Trece_CABA1",
            // servidorCanalesOnline + "m3u8.html?stream=El_Trece_CABA2",
            // servidorCanalesOnline + "m3u8.html?stream=El_Trece_CABA3",
            // servidorCanalesOnline + "m3u8.html?stream=El_Trece_CABA4",
            // servidorCanalesOnline + "m3u8.html?stream=El_Trece_CABA5",
            // servidorCanalesOnline + "m3u8.html?stream=El_Trece_CABA6",
            // servidorCanalesOnline + "sensa_ext.html?id=Canal13",

            //El Trece Internacional
            servidorCanalesOnline + "cvatt_pro.html?get=QXJ0ZWFyX0ludGVybmFjaW9uYWw=",
            servidorCanalesOnline + "cvatt.html?get=QXJ0ZWFyX0ludGVybmFjaW9uYWw=",
            servidorCanalesOnline + "cvatt2_ext.html?get=QXJ0ZWFyX0ludGVybmFjaW9uYWw=",

            //Canal 3 Rosario
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfM19Sb3Nhcmlv",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfM19Sb3Nhcmlv",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfM19Sb3Nhcmlv",

            //Canal 10 Tucumán
            servidorCanalesOnline + "cvatt_pro.html?get=Q2gxMF9UdWN1bWFu",
            servidorCanalesOnline + "cvatt.html?get=Q2gxMF9UdWN1bWFu",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2gxMF9UdWN1bWFu",

            //Canal 7 Bahia Blanca
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWw3X0JhaGlhX0JsYW5jYQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWw3X0JhaGlhX0JsYW5jYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWw3X0JhaGlhX0JsYW5jYQ==",

            //Canal 6 Bariloche
            servidorCanalesOnline + "sensa_output.html?id=El_seis",
            servidorCanalesOnline + "sensa_ext.html?id=El_seis",

            //Canal 9 Parana
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfOV9QYXJhbmE=",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfOV9QYXJhbmE=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfOV9QYXJhbmE=",

            //Canal 9 Resistencia
            servidorCanalesOnline + "cvatt_pro.html?get=Q0hfOV9SZXNpc3RlbmNpYQ==",
            servidorCanalesOnline + "cvatt.html?get=Q0hfOV9SZXNpc3RlbmNpYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q0hfOV9SZXNpc3RlbmNpYQ==",


            // "cobo.html?id=Canal_9_Resistencia",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QXJ0ZWFySEQ",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QXJ0ZWFySEQ",
            // "https://cv.photocalltv.me/cv2.php?get=QXJ0ZWFySEQ",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QXJ0ZWFySEQ",
            // "https://nebunexa.com/cvatt.php?get=QXJ0ZWFySEQ",
            // "https://www.enlatele.tv/player/cv2.php?get=QXJ0ZWFySEQ",
            // "https://fullchannels.online/canales.php?id=eltrece",
            // "https://tutlehd5.com/online.php?a=409",
        ]
    }
);

MisCanales.set(
    "AMÉRICA",
    {
        pais: "Argentina",
        guide: "AMERICA HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QW1lcmljYVRW",
            servidorCanalesOnline + "cvatt.html?get=QW1lcmljYVRW",
            // "server/cvatt.html?get=QW1lcmljYVRW",
            // "https://sssshhh.xyz/cvatt.html?get=QW1lcmljYVRW",
            // "https://a3.115tv.site/cvatt.html?get=QW1lcmljYVRW",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QW1lcmljYVRW",
            servidorCanalesOnline + "cvatt2_ext.html?get=QW1lcmljYVRW",
            servidorCanalesOnline + "akamaizedpro.html?id=americatv_arg",
            servidorCanalesOnline + "akamaized.html?id=americatv_arg",
            servidorCanalesOnline + "megacable.html?id=America_HD",
            servidorCanalesOnline + "megacablepro.html?id=America_HD",
            servidorCanalesOnline + "trimi.html?id=AMERICA_BACKUP",
            servidorCanalesOnline + "edge-apps.html?id=america",
            servidorCanalesOnline + "edge.html?get=America_Interior",
            // servidorCanalesOnline + "tvmia.html?stream=an_America",
            servidorCanalesOnline + "sensa.html?id=America",
            servidorCanalesOnline + "aneviapro.html?id=America",
            servidorCanalesOnline + "gigared.html?id=AmericaTV",
            servidorCanalesOnline + "gigared_ext.html?id=AmericaTV",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=AMERICA_TV",
            // servidorCanalesOnline + "sensa_ext.html?id=America",

            // "https://vmf.edge-apps.net/embed/live.php?streamname=americahls-100056&autoplay=false"
            // "server/cvatt2_ext.html?get=QW1lcmljYVRW",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QW1lcmljYVRW",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QW1lcmljYVRW",
            // "https://cv.photocalltv.me/cv2.php?get=QW1lcmljYVRW",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QW1lcmljYVRW",
            // "https://nebunexa.com/cvatt.php?get=QW1lcmljYVRW",
            // "https://www.enlatele.tv/player/cv2.php?get=QW1lcmljYVRW",

            //America tucumán
            servidorCanalesOnline + "cvatt_pro.html?get=QW1lcmljYV9UdWN1bWFu",
            servidorCanalesOnline + "cvatt.html?get=QW1lcmljYV9UdWN1bWFu",
            servidorCanalesOnline + "cvatt2_ext.html?get=QW1lcmljYV9UdWN1bWFu",

            //America Paraguay
            servidorCanalesOnline + "cvatt_pro.html?get=QW1lcmljYV9QWQ==",
            servidorCanalesOnline + "cvatt.html?get=QW1lcmljYV9QWQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=QW1lcmljYV9QWQ==",
        ]
    }
);

MisCanales.set(
    "A24",
    {
        pais: "Argentina",
        guide: "A24 HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QW1lcmljYTI0",
            servidorCanalesOnline + "cvatt.html?get=QW1lcmljYTI0",
            servidorCanalesOnline + "cvatt2_ext.html?get=QW1lcmljYTI0",
            servidorCanalesOnline + "akamaizedpro.html?id=a24",
            servidorCanalesOnline + "akamaized.html?id=a24",
            servidorCanalesOnline + "aneviapro.html?id=A24",
            servidorCanalesOnline + "megacable.html?id=A24_HD",
            servidorCanalesOnline + "megacablepro.html?id=A24_HD",
            servidorCanalesOnline + "edge-apps.html?id=a24",
            servidorCanalesOnline + "edge.html?get=A24",
            // "server/cvatt.html?get=QW1lcmljYTI0",
            // "https://sssshhh.xyz/cvatt.html?get=QW1lcmljYTI0",
            // "https://a3.115tv.site/cvatt.html?get=QW1lcmljYTI0",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QW1lcmljYTI0",
            // servidorCanalesOnline + "m3u8.html?stream=A24",
            // servidorCanalesOnline + "tvmia.html?stream=an_A24",
            servidorCanalesOnline + "sensa.html?id=A24",
            servidorCanalesOnline + "gigared.html?id=A24",
            servidorCanalesOnline + "gigared_ext.html?id=A24",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=A24",
            "https://vmf.edge-apps.net/embed/live.php?streamname=a24-100056&autoplay=true",
            servidorCanalesOnline + "cvatt_pro.html?get=QTI0X1BZ",
            servidorCanalesOnline + "cvatt.html?get=QTI0X1BZ",
            servidorCanalesOnline + "cvatt2_ext.html?get=QTI0X1BZ",
            // servidorCanalesOnline + "sensa_ext.html?id=A24",
            // "server/cvatt2_ext.html?get=QW1lcmljYTI0",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QW1lcmljYTI0",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QW1lcmljYTI0",
            // "https://cv.photocalltv.me/cv2.php?get=QW1lcmljYTI0",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QW1lcmljYTI0",
            // "https://nebunexa.com/cvatt.php?get=QW1lcmljYTI0",
            // "https://www.enlatele.tv/player/cv2.php?get=QW1lcmljYTI0",
        ]
    }
)

MisCanales.set(
        "CANAL 26",
        {
            pais: "Argentina",
            guide: "Canal 26",
            enlaces: [
                servidorCanalesOnline + "cvatt_pro.html?get=MjZfVFZfSEQ",
                servidorCanalesOnline + "cvatt.html?get=MjZfVFZfSEQ",
                // "server/cvatt.html?get=MjZfVFZfSEQ",
                // "https://sssshhh.xyz/cvatt.html?get=MjZfVFZfSEQ",
                // "https://a3.115tv.site/cvatt.html?get=MjZfVFZfSEQ",
                // "https://a3.115tv.site/cvatt2_ext.html?get=MjZfVFZfSEQ",
                servidorCanalesOnline + "cvatt2_ext.html?get=MjZfVFZfSEQ",
                servidorCanalesOnline + "akamaizedpro.html?id=canal26_arg",
                servidorCanalesOnline + "akamaized.html?id=canal26_arg",
                servidorCanalesOnline + "megacable.html?id=_26_TV",
                servidorCanalesOnline + "megacablepro.html?id=_26_TV",
                servidorCanalesOnline + "telecentro.html?id=canal26",
                servidorCanalesOnline + "edge.html?get=Canal_26",
                servidorCanalesOnline + "tvmia.html?stream=an_Canal_26",
                // servidorCanalesOnline + "aneviapro.html?id=m3u8_canal26",
                servidorCanalesOnline + "gigared.html?id=Canal26",
                servidorCanalesOnline + "gigared_ext.html?id=Canal26",
                // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Canal_26",
                servidorCanalesOnline + "sensa.html?id=Canal26",
                // servidorCanalesOnline + "sensa_ext.html?id=Canal26",
                // "server/cvatt2_ext.html?get=MjZfVFZfSEQ",
                // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=MjZfVFZfSEQ",
                // "https://flowflowflow1.dombhei.com/cvatt.html?get=MjZfVFZfSEQ",
                // "https://cv.photocalltv.me/cv2.php?get=MjZfVFZfSEQ",
                // "https://tomyjerry.nebunexa.com/cvatt.php?get=MjZfVFZfSEQ",
                // "https://nebunexa.com/cvatt.php?get=MjZfVFZfSEQ",
                // "https://www.enlatele.tv/player/cv2.php?get=MjZfVFZfSEQ",
            ]
        }
    );

MisCanales.set(
    "TV PÚBLICA",
    {
        pais: "Argentina",
        guide: "TV PÚBLICA HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWw3",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWw3",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWw3",
            servidorCanalesOnline + "akamaizedpro.html?id=tvpublica_arg",
            servidorCanalesOnline + "akamaized.html?id=tvpublica_arg",
            servidorCanalesOnline + "megacable.html?id=TV_Publica_HD",
            servidorCanalesOnline + "megacablepro.html?id=TV_Publica_HD",
            // "server/cvatt.html?get=Q2FuYWw3",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FuYWw3",
            // "https://a3.115tv.site/cvatt.html?get=Q2FuYWw3",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FuYWw3",
            servidorCanalesOnline + "aneviapro.html?id=Tv_Publica",
            servidorCanalesOnline + "edge-apps.html?id=tvpublica",
            servidorCanalesOnline + "edge.html?get=TV_Publica",
            // "server/cvatt2_ext.html?get=Q2FuYWw3",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FuYWw3",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FuYWw3",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FuYWw3",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FuYWw3",
            // "https://nebunexa.com/cvatt.php?get=Q2FuYWw3",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FuYWw3",
            // "https://a3.115tv.site/cvattde.html?get=Q2FuYWw3",
            // servidorCanalesOnline + "cvattde.html?get=Q2FuYWw3",
            servidorCanalesOnline + "tvmia.html?stream=an_TV_Publica",
            servidorCanalesOnline + "sensa.html?id=TVPublica",
            servidorCanalesOnline + "gigared.html?id=TV_Publica",
            servidorCanalesOnline + "gigared_ext.html?id=TV_Publica",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TV_PUBLICA_HD",
            // servidorCanalesOnline + "cobo.html?id=TV_PUBLICA",
            // servidorCanalesOnline + "sensa_ext.html?id=TVPublica",
            // "m3u8.html?stream=TV_Publica_CABA",
            // "server/cvattde.html?get=Q2FuYWw3",
            // "https://sssshhh.xyz/cvattde.html?get=Q2FuYWw3",
            // "https://streamx10.cloud/global2.php?channel=tv_publica",
            // "https://streamx10.cloud/global3.php?channel=tv_publica", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=tv_publica",
            // "https://la10hd.com/vivo/canal.php?stream=tvpublica",
            // "https://la10hd.com/vivo/canales.php?stream=tvpublica",
            servidorCanalesOnline + "jjfutbol2pro.html?name=tvpublica",

            //TV Publica Internacional
            servidorCanalesOnline + "cvatt_pro.html?get=VFZfUHVibGljYV9JbnRlcm5hY2lvbmFs",
            servidorCanalesOnline + "cvatt.html?get=VFZfUHVibGljYV9JbnRlcm5hY2lvbmFs",
            servidorCanalesOnline + "cvatt2_ext.html?get=VFZfUHVibGljYV9JbnRlcm5hY2lvbmFs",

            //Canal7_Catamarca
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWw3X0NhdGFtYXJjYQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWw3X0NhdGFtYXJjYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWw3X0NhdGFtYXJjYQ==",
        ]
    }
);

MisCanales.set(
    "CRÓNICA",
    {
        pais: "Argentina",
        guide: "Crónica TV HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q3JvbmljYVRW",
            servidorCanalesOnline + "cvatt.html?get=Q3JvbmljYVRW",
            // "server/cvatt.html?get=Q3JvbmljYVRW",
            // "https://sssshhh.xyz/cvatt.html?get=Q3JvbmljYVRW",
            // "https://a3.115tv.site/cvatt.html?get=Q3JvbmljYVRW",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q3JvbmljYVRW",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q3JvbmljYVRW",
            servidorCanalesOnline + "akamaizedpro.html?id=cronicatv",
            servidorCanalesOnline + "akamaized.html?id=cronicatv",
            servidorCanalesOnline + "megacable.html?id=Cronica",
            servidorCanalesOnline + "megacablepro.html?id=Cronica",
            servidorCanalesOnline + "aneviapro.html?id=Cronica",
            servidorCanalesOnline + "edge.html?get=Cronica",
            servidorCanalesOnline + "tvmia.html?stream=an_Cronica",
            servidorCanalesOnline + "sensa.html?id=Cronica",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Cronica_TV",
            // servidorCanalesOnline + "sensa_ext.html?id=Cronica",
            // "server/cvatt2_ext.html?get=Q3JvbmljYVRW",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q3JvbmljYVRW",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q3JvbmljYVRW",
            // "https://cv.photocalltv.me/cv2.php?get=Q3JvbmljYVRW",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q3JvbmljYVRW",
            // "https://nebunexa.com/cvatt.php?get=Q3JvbmljYVRW",
            // "https://www.enlatele.tv/player/cv2.php?get=Q3JvbmljYVRW",
        ]
    }
);

MisCanales.set(
    "TN",
    {
        pais: "Argentina",
        guide: "TN HD",
        enlaces: [
            // servidorCanalesOnline + "cvatt_pro.html?get=VG9kb19Ob3RpY2lhc180Sw==",
            // servidorCanalesOnline + "cvatt.html?get=VG9kb19Ob3RpY2lhc180Sw==",
            // servidorCanalesOnline + "cvatt2_ext.html?get=VG9kb19Ob3RpY2lhc180Sw==",
            servidorCanalesOnline + "cvatt_pro.html?get=VG9kb05vdGljaWFz",
            servidorCanalesOnline + "cvatt.html?get=VG9kb05vdGljaWFz",
            servidorCanalesOnline + "cvatt2_ext.html?get=VG9kb05vdGljaWFz",
            servidorCanalesOnline + "akamaizedpro.html?id=tn",
            servidorCanalesOnline + "akamaized.html?id=tn",
            servidorCanalesOnline + "megacable.html?id=TN",
            servidorCanalesOnline + "megacablepro.html?id=TN",
            servidorCanalesOnline + "vodgc.html?id=TN",
            servidorCanalesOnline + "aneviapro.html?id=TN",
            // servidorCanalesOnline + "cvatt_v1.html?id=TN",
            // "server/cvatt.html?get=VG9kb05vdGljaWFz",
            // "https://sssshhh.xyz/cvatt.html?get=VG9kb05vdGljaWFz",
            // "https://a3.115tv.site/cvatt.html?get=VG9kb05vdGljaWFz",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VG9kb05vdGljaWFz",
            servidorCanalesOnline + "edge.html?get=TN",
            // servidorCanalesOnline + "tvmia.html?stream=an_TN",
            servidorCanalesOnline + "sensa.html?id=TN",
            servidorCanalesOnline + "gigared.html?id=TN",
            servidorCanalesOnline + "gigared_ext.html?id=TN",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TN_HD",
            // servidorCanalesOnline + "hls.html?stream=TN24",
            // servidorCanalesOnline + "sensa_ext.html?id=TN",
            // "server/cvatt2_ext.html?get=VG9kb05vdGljaWFz",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VG9kb05vdGljaWFz",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VG9kb05vdGljaWFz",
            // "https://cv.photocalltv.me/cv2.php?get=VG9kb05vdGljaWFz",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VG9kb05vdGljaWFz",
            // "https://nebunexa.com/cvatt.php?get=VG9kb05vdGljaWFz",
            // "https://www.enlatele.tv/player/cv2.php?get=VG9kb05vdGljaWFz",
        ]
    }
);

MisCanales.set(
    "C5N",
    {
        pais: "Argentina",
        guide: "C5N HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QzVO",
            servidorCanalesOnline + "cvatt.html?get=QzVO",
            // "server/cvatt.html?get=QzVO",
            // "https://sssshhh.xyz/cvatt.html?get=QzVO",
            // "https://a3.115tv.site/cvatt.html?get=QzVO",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QzVO",
            servidorCanalesOnline + "cvatt2_ext.html?get=QzVO",
            servidorCanalesOnline + "akamaizedpro.html?id=c5n",
            servidorCanalesOnline + "akamaized.html?id=c5n",
            servidorCanalesOnline + "megacable.html?id=C5N",
            servidorCanalesOnline + "megacablepro.html?id=C5N",
            servidorCanalesOnline + "aneviapro.html?id=C5N",
            // servidorCanalesOnline + "cvatt_v1.html?id=C5N",
            servidorCanalesOnline + "edge.html?get=C5N",
            servidorCanalesOnline + "tvmia.html?stream=an_C5N",
            servidorCanalesOnline + "sensa.html?id=C5N",
            servidorCanalesOnline + "gigared.html?id=C5N",
            servidorCanalesOnline + "gigared_ext.html?id=C5N",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=C5N",
            // servidorCanalesOnline + "sensa_ext.html?id=C5N",
            // "server/cvatt2_ext.html?get=QzVO",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QzVO",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QzVO",
            // "https://cv.photocalltv.me/cv2.php?get=QzVO",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QzVO",
            // "https://nebunexa.com/cvatt.php?get=QzVO",
            // "https://www.enlatele.tv/player/cv2.php?get=QzVO",
        ]
    }
);

MisCanales.set(
    "LN+",
    {
        pais: "Argentina",
        guide: "LN+",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TGFfTmFjaW9u",
            servidorCanalesOnline + "cvatt.html?get=TGFfTmFjaW9u",
            // "server/cvatt.html?get=TGFfTmFjaW9u",
            // "https://sssshhh.xyz/cvatt.html?get=TGFfTmFjaW9u",
            // "https://a3.115tv.site/cvatt.html?get=TGFfTmFjaW9u",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TGFfTmFjaW9u",
            servidorCanalesOnline + "cvatt2_ext.html?get=TGFfTmFjaW9u",
            servidorCanalesOnline + "akamaizedpro.html?id=lanacion_arg",
            servidorCanalesOnline + "akamaized.html?id=lanacion_arg",
            servidorCanalesOnline + "megacable.html?id=LN_HD",
            servidorCanalesOnline + "megacablepro.html?id=LN_HD",
            servidorCanalesOnline + "aneviapro.html?id=LN",
            servidorCanalesOnline + "edge.html?get=LNmas",
            servidorCanalesOnline + "tvmia.html?stream=an_LN_mas",
            servidorCanalesOnline + "sensa.html?id=LaNacionMas",
            servidorCanalesOnline + "gigared.html?id=LNmas",
            servidorCanalesOnline + "gigared_ext.html?id=LNmas",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=LN_Plus",
            // servidorCanalesOnline + "sensa_ext.html?id=LaNacionMas",
            // "server/cvatt2_ext.html?get=TGFfTmFjaW9u",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TGFfTmFjaW9u",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TGFfTmFjaW9u",
            // "https://cv.photocalltv.me/cv2.php?get=TGFfTmFjaW9u",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TGFfTmFjaW9u",
            // "https://nebunexa.com/cvatt.php?get=TGFfTmFjaW9u",
            // "https://www.enlatele.tv/player/cv2.php?get=TGFfTmFjaW9u",
        ]
    }
);

MisCanales.set(
    "CANAL 7 MENDOZA",
    {
        pais: "Argentina",
        enlaces: [
            // servidorCanalesOnline + "edgectc.html?id=CANAL7_MZA",
            "https://vmf.edge-apps.net/embed/live.php?streamname=canal7mendoza-100056&autoplay=true",
            servidorCanalesOnline + "edge-apps.html?id=canal7mendoza",
            // "https://vmf.edge-apps.net/embed/live.php?streamname=canal7mendoza-100056&autoplay=false"
            // servidorCanalesOnline + "m3u8.html?stream=Canal_7_Mendoza",
        ]
    }
);

MisCanales.set(
    "CANAL NUEVE",
    {
        pais: "Argentina",
        guide: "El Nueve HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWw5",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWw5",
            // "server/cvatt.html?get=Q2FuYWw5",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FuYWw5",
            // "https://a3.115tv.site/cvatt.html?get=Q2FuYWw5",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FuYWw5",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWw5",
            servidorCanalesOnline + "akamaizedpro.html?id=elnueve_arg",
            servidorCanalesOnline + "akamaized.html?id=elnueve_arg",
            servidorCanalesOnline + "megacable.html?id=Canal_9_HD",
            servidorCanalesOnline + "megacablepro.html?id=Canal_9_HD",
            servidorCanalesOnline + "aneviapro.html?id=El_Nueve",
            servidorCanalesOnline + "trimi.html?id=C4N4L_NU3V3",
            servidorCanalesOnline + "edge.html?get=Canal_Nueve_Interior",
            servidorCanalesOnline + "tvmia.html?stream=an_Canal_El_Nueve",
            servidorCanalesOnline + "sensa.html?id=Canal9",
            servidorCanalesOnline + "gigared.html?id=Canal_9",
            servidorCanalesOnline + "gigared_ext.html?id=Canal_9",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=CANAL_9_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=Canal9",
            // servidorCanalesOnline + "m3u8.html?stream=Canal_El_Nueve",
            // "server/cvatt2_ext.html?get=Q2FuYWw5",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FuYWw5",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FuYWw5",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FuYWw5",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FuYWw5",
            // "https://nebunexa.com/cvatt.php?get=Q2FuYWw5",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FuYWw5",
        ]
    }
);

MisCanales.set(
    "CANAL DOCE",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMTJfQ0JB",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMTJfQ0JB",
            // "server/cvatt.html?get=Q2FuYWxfMTJfQ0JB",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FuYWxfMTJfQ0JB",
            // "https://a3.115tv.site/cvatt.html?get=Q2FuYWxfMTJfQ0JB",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FuYWxfMTJfQ0JB",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMTJfQ0JB",
            servidorCanalesOnline + "sensa.html?id=Canal12cba",
            // "server/cvatt2_ext.html?get=Q2FuYWxfMTJfQ0JB",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FuYWxfMTJfQ0JB",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FuYWxfMTJfQ0JB",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FuYWxfMTJfQ0JB",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FuYWxfMTJfQ0JB",
            // "https://nebunexa.com/cvatt.php?get=Q2FuYWxfMTJfQ0JB",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FuYWxfMTJfQ0JB",
        ]
    }
);

MisCanales.set(
    "CANAL Á",
    {
        pais: "Argentina",
        guide: "CANAL A",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfYQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfYQ==",
            servidorCanalesOnline + "edge.html?get=Canal_A",
            servidorCanalesOnline + "sensa.html?id=CanalA",
            servidorCanalesOnline + "gigared.html?id=CanalA",
            servidorCanalesOnline + "gigared_ext.html?id=CanalA",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Canal_A",
        ]
    }
);

MisCanales.set(
    "NETTV",
    {
        pais: "Argentina",
        guide: "Net TV",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TmV0X1RW",
            servidorCanalesOnline + "cvatt.html?get=TmV0X1RW",
            // "server/cvatt.html?get=TmV0X1RW",
            // "https://sssshhh.xyz/cvatt.html?get=TmV0X1RW",
            // "https://a3.115tv.site/cvatt.html?get=TmV0X1RW",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TmV0X1RW",
            servidorCanalesOnline + "cvatt2_ext.html?get=TmV0X1RW",
            servidorCanalesOnline + "edge.html?get=NETTV",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=NET_TV",
            servidorCanalesOnline + "tvmia.html?stream=an_NET_TV",
            servidorCanalesOnline + "sensa.html?id=NETTV",
            servidorCanalesOnline + "m3u8.html?stream=NET_TV_1_CABA",
            servidorCanalesOnline + "m3u8.html?stream=NET_TV_2_CABA",
            // servidorCanalesOnline + "sensa_ext.html?id=NETTV",
            // "server/cvatt2_ext.html?get=TmV0X1RW",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TmV0X1RW",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TmV0X1RW",
            // "https://cv.photocalltv.me/cv2.php?get=TmV0X1RW",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TmV0X1RW",
            // "https://nebunexa.com/cvatt.php?get=TmV0X1RW",
            // "https://www.enlatele.tv/player/cv2.php?get=TmV0X1RW",
        ]
    }
);

MisCanales.set(
    "Bravo TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QnJhdm9UVg==",
            servidorCanalesOnline + "cvatt.html?get=QnJhdm9UVg==",
            // "server/cvatt.html?get=QnJhdm9UVg==",
            // "https://sssshhh.xyz/cvatt.html?get=QnJhdm9UVg==",
            // "https://a3.115tv.site/cvatt.html?get=QnJhdm9UVg==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QnJhdm9UVg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=QnJhdm9UVg==",
            servidorCanalesOnline + "tvmia.html?stream=an_BRAVO_TV",
            servidorCanalesOnline + "sensa.html?id=BravoTV",
            servidorCanalesOnline + "m3u8.html?stream=BRAVOTV_CABA",
            // servidorCanalesOnline + "sensa_ext.html?id=BravoTV",
            // "server/cvatt2_ext.html?get=QnJhdm9UVg==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QnJhdm9UVg==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QnJhdm9UVg==",
            // "https://cv.photocalltv.me/cv2.php?get=QnJhdm9UVg==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QnJhdm9UVg==",
            // "https://nebunexa.com/cvatt.php?get=QnJhdm9UVg==",
            // "https://www.enlatele.tv/player/cv2.php?get=QnJhdm9UVg==",
        ]
    }
);

MisCanales.set(
    "Telemax",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZW1heA",
            servidorCanalesOnline + "cvatt.html?get=VGVsZW1heA",
            // "server/cvatt.html?get=VGVsZW1heA",
            // "https://sssshhh.xyz/cvatt.html?get=VGVsZW1heA",
            // "https://a3.115tv.site/cvatt.html?get=VGVsZW1heA",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VGVsZW1heA",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZW1heA",
            servidorCanalesOnline + "m3u8.html?stream=Telemax_CABA",
            // "server/cvatt2_ext.html?get=VGVsZW1heA",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VGVsZW1heA",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VGVsZW1heA",
            // "https://cv.photocalltv.me/cv2.php?get=VGVsZW1heA",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VGVsZW1heA",
            // "https://nebunexa.com/cvatt.php?get=VGVsZW1heA",
            // "https://www.enlatele.tv/player/cv2.php?get=VGVsZW1heA",
        ]
    }
);

MisCanales.set(
    "MIX TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TWl4VFY=",
            servidorCanalesOnline + "cvatt.html?get=TWl4VFY=",
            servidorCanalesOnline + "cvatt2_ext.html?get=TWl4VFY=",
        ]
    }
);

MisCanales.set(
    "Ar12",
    {
        pais: "Argentina",
        guide: "IP HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            servidorCanalesOnline + "cvatt.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "server/cvatt.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://sssshhh.xyz/cvatt.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://a3.115tv.site/cvatt.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            servidorCanalesOnline + "cvatt2_ext.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            servidorCanalesOnline + "aneviapro.html?id=IP_Noticias",
            servidorCanalesOnline + "edge.html?get=Ar12",
            servidorCanalesOnline + "sensa.html?id=Argentina12",
            servidorCanalesOnline + "tvmia.html?stream=an_IP_Noticias",
            // "server/cvatt2_ext.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://cv.photocalltv.me/cv2.php?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://nebunexa.com/cvatt.php?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
            // "https://www.enlatele.tv/player/cv2.php?get=SW52ZXN0aWdhY2lvbl9QZXJpb2Rpc3RpY2E=",
        ]
    }
);

MisCanales.set(
    "TeleSur",
    {
        pais: "Venezuela",
        guide: "Telesur",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZXN1cg==",
            servidorCanalesOnline + "cvatt.html?get=VGVsZXN1cg==",
            // "server/cvatt.html?get=VGVsZXN1cg==",
            // "https://sssshhh.xyz/cvatt.html?get=VGVsZXN1cg==",
            // "https://a3.115tv.site/cvatt.html?get=VGVsZXN1cg==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VGVsZXN1cg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZXN1cg==",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Telesur",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=TELESUR",
            // servidorCanalesOnline + "m3u8.html?stream=TeleSur_Vene",
            // "server/cvatt2_ext.html?get=VGVsZXN1cg==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VGVsZXN1cg==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VGVsZXN1cg==",
            // "https://cv.photocalltv.me/cv2.php?get=VGVsZXN1cg==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VGVsZXN1cg==",
            // "https://nebunexa.com/cvatt.php?get=VGVsZXN1cg==",
            // "https://www.enlatele.tv/player/cv2.php?get=VGVsZXN1cg==",
        ]
    }
);

MisCanales.set(
    "GEN",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=R0VOX1RW",
            servidorCanalesOnline + "cvatt.html?get=R0VOX1RW",
            // "server/cvatt.html?get=R0VOX1RW",
            // "https://sssshhh.xyz/cvatt.html?get=R0VOX1RW",
            // "https://a3.115tv.site/cvatt.html?get=R0VOX1RW",
            // "https://a3.115tv.site/cvatt2_ext.html?get=R0VOX1RW",
            servidorCanalesOnline + "cvatt2_ext.html?get=R0VOX1RW",
            // "server/cvatt2_ext.html?get=R0VOX1RW",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=R0VOX1RW",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=R0VOX1RW",
            // "https://cv.photocalltv.me/cv2.php?get=R0VOX1RW",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=R0VOX1RW",
            // "https://nebunexa.com/cvatt.php?get=R0VOX1RW",
            // "https://www.enlatele.tv/player/cv2.php?get=R0VOX1RW",
        ]
    }
);

MisCanales.set(
    "RCC",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UkND",
            servidorCanalesOnline + "cvatt.html?get=UkND",
            servidorCanalesOnline + "cvatt2_ext.html?get=UkND",
        ]
    }
);

MisCanales.set(
    "SUR TV",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=U1VSX1RWX0M0",
            servidorCanalesOnline + "cvatt.html?get=U1VSX1RWX0M0",
            servidorCanalesOnline + "cvatt2_ext.html?get=U1VSX1RWX0M0",
        ]
    }
);

MisCanales.set(
    "Popu TV",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VW5pdmVyc28=",
            servidorCanalesOnline + "cvatt.html?get=VW5pdmVyc28=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VW5pdmVyc28=",
        ]
    }
);

MisCanales.set(
    "TV Cámara",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VFZfQ2FtYXJh",
            servidorCanalesOnline + "cvatt.html?get=VFZfQ2FtYXJh",
            servidorCanalesOnline + "cvatt2_ext.html?get=VFZfQ2FtYXJh",
        ]
    }
);

MisCanales.set(
    "El Once",
    {
        pais: "Paraná",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMTFfUGFyYW5h",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMTFfUGFyYW5h",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMTFfUGFyYW5h",
            // servidorCanalesOnline + "aneviapro.html?id=m3u8_eloncetv",
        ]
    }
);

MisCanales.set(
    "CyD Litoral",
    {
        pais: "Paraná",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FibGVfWV9EaWFyaW8=",
            servidorCanalesOnline + "cvatt.html?get=Q2FibGVfWV9EaWFyaW8=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FibGVfWV9EaWFyaW8=",
        ]
    }
);

MisCanales.set(
    "Canal de la Ciudad",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "server/cvatt.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://a3.115tv.site/cvatt.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            servidorCanalesOnline + "tvmia.html?stream=an_CANAL_DE_LA_CUIDAD",
            // "https://vmf.edge-apps.net/embed/live.php?streamname=gcba_video4-100042&autoplay=true",
            // "server/cvatt2_ext.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://nebunexa.com/cvatt.php?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FuYWxfZGVfbGFfY2l1ZGFk",
        ]
    }
);

MisCanales.set(
    "Somos TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_SOMOS",
            //Mar del plata
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfQ2l1ZGFkX01EUQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfQ2l1ZGFkX01EUQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfQ2l1ZGFkX01EUQ==",
            //La Plata
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfTGFfUGxhdGE=",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfTGFfUGxhdGE=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfTGFfUGxhdGE=",
            //Santa Fe
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfU1RG",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfU1RG",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfU1RG",
            //Rosario
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfUm9zYXJpbw==",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfUm9zYXJpbw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfUm9zYXJpbw==",
            //Corrientes
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfQ29ycmllbnRlcw==",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfQ29ycmllbnRlcw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfQ29ycmllbnRlcw==",
            //Rafaela
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfUmFmYWVsYQ==",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfUmFmYWVsYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfUmFmYWVsYQ==",
            //Tucuman
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfVHVjdW1hbg==",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfVHVjdW1hbg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfVHVjdW1hbg==",
            //Paraná
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfUGFyYW5h",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfUGFyYW5h",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfUGFyYW5h",
            //Bell Ville
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfQmVsbF9WaWxsZQ==",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfQmVsbF9WaWxsZQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfQmVsbF9WaWxsZQ==",
            //Del Valle
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfRWxfVmFsbGU=",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfRWxfVmFsbGU=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfRWxfVmFsbGU=",
            //Salta
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfU2FsdGE=",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfU2FsdGE=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfU2FsdGE=",
            //Bahia Blanca
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfQmFoaWFfQmxhbmNh",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfQmFoaWFfQmxhbmNh",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfQmFoaWFfQmxhbmNh",
            //Chaco
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfUmVzaXN0ZW5jaWE=",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfUmVzaXN0ZW5jaWE=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfUmVzaXN0ZW5jaWE=",
            //Somos San Pedro
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfU2FuX1BlZHJv",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfU2FuX1BlZHJv",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfU2FuX1BlZHJv",
            //Somos Azul
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfQXp1bA==",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfQXp1bA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfQXp1bA==",
            //Somos Norte
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfTm9ydGU=",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfTm9ydGU=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfTm9ydGU=",
            //Somos Formosa
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfRm9ybW9zYQ==",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfRm9ybW9zYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfRm9ybW9zYQ==",
            //Somos Misiones
            servidorCanalesOnline + "cvatt_pro.html?get=U29tb3NfTWlzaW9uZXM=",
            servidorCanalesOnline + "cvatt.html?get=U29tb3NfTWlzaW9uZXM=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29tb3NfTWlzaW9uZXM=",
            //Villa Maria
            // servidorCanalesOnline + "m3u8.html?stream=Somos_Villamaria",
            //Gualeguaychu
            // servidorCanalesOnline + "m3u8.html?stream=Somos_Gualeguaychu",
        ]
    }
);

MisCanales.set(
    "C9N",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QzlOX0M0",
            servidorCanalesOnline + "cvatt.html?get=QzlOX0M0",
            // "server/cvatt.html?get=QzlOX0M0",
            // "https://sssshhh.xyz/cvatt.html?get=QzlOX0M0",
            // "https://a3.115tv.site/cvatt.html?get=QzlOX0M0",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QzlOX0M0",
            servidorCanalesOnline + "cvatt2_ext.html?get=QzlOX0M0",
            // servidorCanalesOnline + "m3u8.html?stream=C9N_PARA",
            // "server/cvatt2_ext.html?get=QzlOX0M0",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QzlOX0M0",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QzlOX0M0",
            // "https://cv.photocalltv.me/cv2.php?get=QzlOX0M0",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QzlOX0M0",
            // "https://nebunexa.com/cvatt.php?get=QzlOX0M0",
            // "https://www.enlatele.tv/player/cv2.php?get=QzlOX0M0",
        ]
    }
);

MisCanales.set(
    "CNN",
    {
        pais: "Estados Unidos",
        guide: "CNN",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q05OX2VuX0VzcGFub2w=",
            servidorCanalesOnline + "cvatt.html?get=Q05OX2VuX0VzcGFub2w=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q05OX2VuX0VzcGFub2w=",
            servidorCanalesOnline + "edge.html?get=CNN_En_Esp",
            servidorCanalesOnline + "sensa.html?id=CnnEspanol",
            servidorCanalesOnline + "megacable.html?id=CNN_Espanol",
            servidorCanalesOnline + "megacablepro.html?id=CNN_Espanol",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=CNN_Espanol",
            // servidorCanalesOnline + "sensa_ext.html?id=CnnEspanol",

            // "server/cvatt.html?get=Q05OX2VuX0VzcGFub2w=",
            // "server/cvatt2_ext.html?get=Q05OX2VuX0VzcGFub2w=",

            // CNN Internacional
            servidorCanalesOnline + "cvatt_pro.html?get=Q05OX0ludGVybmFjaW9uYWw=",
            servidorCanalesOnline + "cvatt.html?get=Q05OX0ludGVybmFjaW9uYWw=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q05OX0ludGVybmFjaW9uYWw=",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=CNN_International",

        ]
    }
);

MisCanales.set(
    "EWTN",
    {
        pais: "Estados Unidos",
        guide: "EWTN",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RVdUTg==",
            servidorCanalesOnline + "cvatt.html?get=RVdUTg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVdUTg==",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=EWTN",
            servidorCanalesOnline + "sensa.html?id=EWTN",
            // servidorCanalesOnline + "sensa_ext.html?id=EWTN",

        ]
    }
);

MisCanales.set(
    "Paravision",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UEFSQVZJU0lPTl9DNA==",
            servidorCanalesOnline + "cvatt.html?get=UEFSQVZJU0lPTl9DNA==",
            // "server/cvatt.html?get=UEFSQVZJU0lPTl9DNA==",
            // "https://sssshhh.xyz/cvatt.html?get=UEFSQVZJU0lPTl9DNA==",
            // "https://a3.115tv.site/cvatt.html?get=UEFSQVZJU0lPTl9DNA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=UEFSQVZJU0lPTl9DNA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=UEFSQVZJU0lPTl9DNA==",
            // "server/cvatt2_ext.html?get=UEFSQVZJU0lPTl9DNA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=UEFSQVZJU0lPTl9DNA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=UEFSQVZJU0lPTl9DNA==",
            // "https://cv.photocalltv.me/cv2.php?get=UEFSQVZJU0lPTl9DNA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=UEFSQVZJU0lPTl9DNA==",
            // "https://nebunexa.com/cvatt.php?get=UEFSQVZJU0lPTl9DNA==",
            // "https://www.enlatele.tv/player/cv2.php?get=UEFSQVZJU0lPTl9DNA==",
        ]
    }
);

MisCanales.set(
    "Teledoce",
    {
        pais: "Uruguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWwxMlVSVQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWwxMlVSVQ==",
            // "server/cvatt.html?get=Q2FuYWwxMlVSVQ==",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FuYWwxMlVSVQ==",
            // "https://a3.115tv.site/cvatt.html?get=Q2FuYWwxMlVSVQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FuYWwxMlVSVQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWwxMlVSVQ==",
            // "server/cvatt2_ext.html?get=Q2FuYWwxMlVSVQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FuYWwxMlVSVQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FuYWwxMlVSVQ==",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FuYWwxMlVSVQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FuYWwxMlVSVQ==",
            // "https://nebunexa.com/cvatt.php?get=Q2FuYWwxMlVSVQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FuYWwxMlVSVQ==",
        ]
    }
);

MisCanales.set(
    "Canal 5 Uruguay",
    {
        pais: "Uruguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VFZfTmFjaW9uYWxfVXk=",
            servidorCanalesOnline + "cvatt.html?get=VFZfTmFjaW9uYWxfVXk=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VFZfTmFjaW9uYWxfVXk=",
        ]
    }
);

MisCanales.set(
    "Canal 2 Ushuaia",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_TV2_Noticias",
            servidorCanalesOnline + "m3u8.html?stream=Canal_TV2_Noticias2",
        ]
    }
);

MisCanales.set(
    "Canal E",
    {
        pais: "Argentina",
        enlaces: [
            // servidorCanalesOnline + "m3u8.html?stream=Canal_E",
            servidorCanalesOnline + "trimi.html?id=CANAL_E",
            servidorCanalesOnline + "sensa_ext.html?id=CanalE",
        ]
    }
);

MisCanales.set(
    "Canal 79",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfNzlfTURR",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfNzlfTURR",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfNzlfTURR",
            servidorCanalesOnline + "m3u8.html?stream=Canal_79_Mar_del_Plata",
            servidorCanalesOnline + "m3u8.html?stream=Canal_79_La_Costa",
            servidorCanalesOnline + "m3u8.html?stream=Canal_79_Santa_Clara",
            servidorCanalesOnline + "m3u8.html?stream=Canal_79_Villa_Maza",
            servidorCanalesOnline + "m3u8.html?stream=Canal_79_Puan",
        ]
    }
);

MisCanales.set(
    "Canal 2 Mar del Plata",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMl9NRFFfTEND",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMl9NRFFfTEND",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMl9NRFFfTEND",
            servidorCanalesOnline + "m3u8.html?stream=Canal_2_Mar_del_Plata",
        ]
    }
);

MisCanales.set(
    "Canal 10 Mar del Plata",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMTBfTURR",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMTBfTURR",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMTBfTURR",
            "https://vmf.edge-apps.net/embed/live.php?streamname=canal10mdq-100044&autoplay=true",
            servidorCanalesOnline + "edge-apps.html?id=canal10mdq",
        ]
    }
);

MisCanales.set(
    "Unife",
    {
        pais: "Argentina",
        enlaces: [
            // servidorCanalesOnline + "m3u8.html?stream=Unife_Argentina",
            servidorCanalesOnline + "m3u8.html?stream=Unife_Argentina2",
            servidorCanalesOnline + "m3u8.html?stream=Unife_Argentina3",
            servidorCanalesOnline + "aneviapro.html?id=unife",
            // servidorCanalesOnline + "boldmss.html?get=UNIFE",
            // servidorCanalesOnline + "boldmss_ext.html?get=UNIFE",
            // servidorCanalesOnline + "playme.html?get=CH_UNIFE",
            servidorCanalesOnline + "extension.html?get=CH_UNIFE",
            servidorCanalesOnline + "gigared.html?id=Unife",
            servidorCanalesOnline + "gigared_ext.html?id=Unife",
        ]
    }
);

MisCanales.set(
    "EcoTV Tandil",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RWNvVHZfVGFuZGls",
            servidorCanalesOnline + "cvatt.html?get=RWNvVHZfVGFuZGls",
            servidorCanalesOnline + "cvatt2_ext.html?get=RWNvVHZfVGFuZGls",
            // servidorCanalesOnline + "m3u8.html?stream=EcoTV_Tandil",
        ]
    }
);

MisCanales.set(
    "TVA San Rafael",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "extension.html?get=tvasanrafael",
        ]
    }
);

MisCanales.set(
    "Canal 6 Telesur",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=canal6sanrafael",
            servidorCanalesOnline + "sensa_ext.html?id=Canal6sanrafael",
            servidorCanalesOnline + "sensa_ext.html?id=Canal6sanrafael_2",
        ]
    }
);

MisCanales.set(
    "Caras TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Caras_TV",
            servidorCanalesOnline + "edge.html?get=Caras_TV",
        ]
    }
);

MisCanales.set(
    "Orbe 21",
    {
        pais: "Argentina",
        guide: "Orbe 21",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMjE=",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMjE=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMjE=",
            servidorCanalesOnline + "m3u8.html?stream=Orbe_21",
        ]
    }
);

MisCanales.set(
    "Canal 5 Tucumán",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_5_Tucuman",
        ]
    }
);

MisCanales.set(
    "Construir TV",
    {
        pais: "Argentina",
        guide: "CONSTRUIR",
        enlaces: [
            servidorCanalesOnline + "aneviapro.html?id=construiriptv",
            servidorCanalesOnline + "boldmss.html?get=CONSTRUIR_TV",
            // servidorCanalesOnline + "boldmss_ext.html?get=CONSTRUIR_TV",
        ]
    }
);

MisCanales.set(
    "Tru TV",
    {
        pais: "Argentina",
        enlaces: [
            // servidorCanalesOnline + "m3u8.html?stream=TruTV",
        ]
    }
);

MisCanales.set(
    "COONET TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "sensa_output.html?id=COONET_TV",
        ]
    }
);

MisCanales.set(
    "Canal 10 Cordoba",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWwxMF9DQkFfSEQ=",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWwxMF9DQkFfSEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWwxMF9DQkFfSEQ=",
            servidorCanalesOnline + "m3u8.html?stream=Canal_10_Cordoba",
        ]
    }
);

MisCanales.set(
    "Canal 13 Rio Cuarto",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMTNfUmlvXzR0bw==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMTNfUmlvXzR0bw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMTNfUmlvXzR0bw==",
        ]
    }
);

MisCanales.set(
    "Telediario Television",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=TelediarioTelevision",
            servidorCanalesOnline + "sensa_ext.html?id=TelediarioTelevision",
        ]
    }
);

MisCanales.set(
    "Canal 5 TV Corrientes",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_5_TV_Corrientes",
        ]
    }
);

MisCanales.set(
    "Corrientes TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZW1lZGlh",
            servidorCanalesOnline + "cvatt.html?get=VGVsZW1lZGlh",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZW1lZGlh",
        ]
    }
);

MisCanales.set(
    "T5 Satelital",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=T5Satelital",
            servidorCanalesOnline + "sensa_ext.html?id=T5Satelital",
        ]
    }
);

MisCanales.set(
    "Lapacho Formosa",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMTFfRm9ybW9zYQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMTFfRm9ybW9zYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMTFfRm9ybW9zYQ==",
            // servidorCanalesOnline + "m3u8html?stream=Lapacho_Canal_11",
        ]
    }
);

MisCanales.set(
    "Canal 3 Formosa",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfM19Gb3Jtb3Nh",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfM19Gb3Jtb3Nh",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfM19Gb3Jtb3Nh",
        ]
    }
);

MisCanales.set(
    "Tele Junín",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZUp1bmlu",
            servidorCanalesOnline + "cvatt.html?get=VGVsZUp1bmlu",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZUp1bmlu",
        ]
    }
);

MisCanales.set(
    "Canal 10 Junín",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfMTBfSnVuaW4=",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfMTBfSnVuaW4=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfMTBfSnVuaW4=",
            "https://vmf.edge-apps.net/embed/live.php?streamname=canal10junin-100056&autoplay=true",
            servidorCanalesOnline + "m3u8.html?stream=Canal_13_La_Rioja",
            servidorCanalesOnline + "edge-apps.html?id=canal10junin",
        ]
    }
);

MisCanales.set(
    "Canal 10 Rio Negro",
    {
        pais: "Argentina",
        enlaces: [
            // servidorCanalesOnline + "m3u8.html?stream=Canal_10_Rio_Negro",
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWwxMF9SaW9fTmVncm8=",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWwxMF9SaW9fTmVncm8=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWwxMF9SaW9fTmVncm8=",
            servidorCanalesOnline + "fetch.html?stream=Canal_10_Rio_Negro",
            // "https://arcast.net/c10rionegro/index.php",
        ]
    }
);

MisCanales.set(
    "Canal C",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfQw==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfQw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfQw==",
        ]
    }
);

MisCanales.set(
    "Next TV Carlos Paz",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TG9jYWxfQ2FybG9zX1Bheg==",
            servidorCanalesOnline + "cvatt.html?get=TG9jYWxfQ2FybG9zX1Bheg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=TG9jYWxfQ2FybG9zX1Bheg==",
        ]
    }
);

MisCanales.set(
    "D news",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RE5ld3M=",
            servidorCanalesOnline + "cvatt.html?get=RE5ld3M=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RE5ld3M=",
            servidorCanalesOnline + "edge.html?get=DNews",
        ]
    }
);

MisCanales.set(
    "Canal Doce Posadas",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q0hfMTJfUG9zYWRhcw==",
            servidorCanalesOnline + "cvatt.html?get=Q0hfMTJfUG9zYWRhcw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q0hfMTJfUG9zYWRhcw==",
            servidorCanalesOnline + "gigared.html?id=Canal_12_Misiones",
            servidorCanalesOnline + "gigared_ext.html?id=Canal_12_Misiones",
            servidorCanalesOnline + "sensa_output.html?id=Canal_Doce_Posadas",
            "https://vmf.edge-apps.net/embed/live.php?streamname=c12_live01-100129&autoplay=true",
            servidorCanalesOnline + "edge-apps.html?id=canal12posadas",
        ]
    }
);

MisCanales.set(
    "Teleposadas",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Teleposadas",
        ]
    }
);

MisCanales.set(
    "Multivision Salta",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Multivision_Federal_Salta",
            servidorCanalesOnline + "sensa_ext.html?id=Multivision",
        ]
    }
);

MisCanales.set(
    "OneTV San Juan",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=OneTV_San_Juan",
        ]
    }
);

MisCanales.set(
    "Xama HD San Juan",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Xama_HD",
        ]
    }
);

MisCanales.set(
    "Canal 4 San Juan",
    {
        pais: "Argentina",
        enlaces: [
            // servidorCanalesOnline + "aneviapro.html?id=canal4SanJuan",
            // servidorCanalesOnline + "m3u8.html?stream=Canal_4_San_Juan",
        ]
    }
);

MisCanales.set(
    "Canal 13 San Juan",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "aneviapro.html?id=canal13SanJuan",
        ]
    }
);

MisCanales.set(
    "Canal 34 San Juan",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_34_San_Juan_HD",
            servidorCanalesOnline + "m3u8.html?stream=Canal_34_San_Juan_HD2",
        ]
    }
);

MisCanales.set(
    "Canal 8 San Juan",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "aneviapro.html?id=canal8SanJuan",
        ]
    }
);

MisCanales.set(
    "Solidaria TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=SolidariaTV_San_Juan",
        ]
    }
);

MisCanales.set(
    "Del Sur San Juan",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Del_Sur_San_Juan",
        ]
    }
);

MisCanales.set(
    "Ivision TV",
    {
        pais: "Argentina",
        enlaces: [
            // servidorCanalesOnline + "cobo.html?id=Ivision_TV",
        ]
    }
);

MisCanales.set(
    "Aire Santa Fe",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Aire_de_Santa_Fe",
            "https://rudo.video/live/airedesantafetv",
        ]
    }
);

MisCanales.set(
    "Litus TV Santa Fe",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Litus_TV_Santa_Fe",
        ]
    }
);

MisCanales.set(
    "Vive TV Santa Fe",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "sensa_output.html?id=Vive_TV",
            servidorCanalesOnline + "m3u8.html?stream=Vive_TV_Santa_Fe",
        ]
    }
);

MisCanales.set(
    "Canal 5 Santa Fe",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_5_Santa_Fe",
        ]
    }
);

MisCanales.set(
    "Canal VEO Santa Fe",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_VEO_Santa_Fe",
            servidorCanalesOnline + "m3u8.html?stream=Canal_VEO_Santa_Fe2",
            servidorCanalesOnline + "edge.html?get=VEO_Santa_Fe",
        ]
    }
);

MisCanales.set(
    "TDC Santa Fe",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=TDC_Santa_Fe",
        ]
    }
);

MisCanales.set(
    "CIA Santa Fe",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Cable_Imagen_Armstrong_Santa_Fe",
        ]
    }
);

MisCanales.set(
    "PAVHD",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "sensa_output.html?id=PATVD",
        ]
    }
);

MisCanales.set(
    "RTS Santa Fe",
    {
        pais: "Argentina",
        enlaces: [
            // "m3u8.html?stream=RTS_Santa_Fe",
            servidorCanalesOnline + "cvatt_pro.html?get=NVJUVg==",
            servidorCanalesOnline + "cvatt.html?get=NVJUVg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=NVJUVg==",
            servidorCanalesOnline + "edge.html?get=RTS_Santa_Fe",
            // "https://livestream.com/accounts/22636012/events/8242619/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false",
        ]
    }
);

MisCanales.set(
    "Canal 3 Tacural",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "sensa_output.html?id=Canal_3_Tacural",
            servidorCanalesOnline + "sensa_ext.html?id=Canal_3_Tacural",
        ]
    }
);

MisCanales.set(
    "Canal Luz",
    {
        pais: "Argentina",
        enlaces: [
            // "m3u8.html?stream=Canal_Luz_Rosario",
            servidorCanalesOnline + "cvatt_pro.html?get=Q0FOQUxfTFVa",
            servidorCanalesOnline + "cvatt.html?get=Q0FOQUxfTFVa",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q0FOQUxfTFVa",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Canal_Luz",
            servidorCanalesOnline + "sensa.html?id=CanalLuz",
            "https://vmf.edge-apps.net/embed/live.php?streamname=canal_luz01-100009&autoplay=true",
            servidorCanalesOnline + "edge-apps.html?id=canal_luz",
            // servidorCanalesOnline + "sensa_ext.html?id=CanalLuz",
        ]
    }
);

MisCanales.set(
    "Tierramia",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Tierra_Mia",
        ]
    }
);

MisCanales.set(
    "Latina TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Latina_TV",
        ]
    }
);

MisCanales.set(
    "TV Pública Fueguina",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "aneviapro.html?id=tvpfueguina",
        ]
    }
);

MisCanales.set(
    "Canal 2 Tierra del Fuego",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "aneviapro.html?id=tvfcanal2",
        ]
    }
);

MisCanales.set(
    "Canal 3 Tierra del Fuego",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "aneviapro.html?id=tvfcanal3",
        ]
    }
);

MisCanales.set(
    "Novelisima",
    {
        pais: "Venezuela",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=novelisima",
            servidorCanalesOnline + "akamaized.html?id=novelisima",
            servidorCanalesOnline + "edge.html?get=Novelisima",
            servidorCanalesOnline + "sensa.html?id=Novelis",
            // servidorCanalesOnline + "sensa_ext.html?id=Novelis",
        ]
    }
);

MisCanales.set(
    "Vale TV",
    {
        pais: "Venezuela",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Vale_TV_Vene",
        ]
    }
);

MisCanales.set(
    "DW",
    {
        pais: "España",
        guide: "DW",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RFc=",
            servidorCanalesOnline + "cvatt.html?get=RFc=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RFc=",
            servidorCanalesOnline + "edge.html?get=DW",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Deutsche_Welle",
            servidorCanalesOnline + "sensa.html?id=DW_Channel",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=DW",
            servidorCanalesOnline + "m3u8.html?stream=DW_ES",
            servidorCanalesOnline + "m3u8.html?stream=DW_ES2",
            // servidorCanalesOnline + "sensa_ext.html?id=DW_Channel",
        ]
    }
);

MisCanales.set(
    "TVE 1 ES",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=la1spain",
            // "https://172m3u8.netlify.app/?id=TVE_1_ES",
            // "cobo.html?id=TV_LA_1_ES",
            // servidorCanalesOnline + "tvmia.html?stream=sn_TVE_1_ES",
            servidorCanalesOnline + "mpd_es.html?id=LA1",
        ]
    }
);

MisCanales.set(
    "TVE 2 ES",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=la2spain",
            // "https://172m3u8.netlify.app/?id=TVE_2_ES",
            // "cobo.html?id=TV_LA_2_ES",
            // servidorCanalesOnline + "tvmia.html?stream=sn_TVE_2_ES",
            servidorCanalesOnline + "mpd_es.html?id=LA2",
        ]
    }
);

MisCanales.set(
    "Antena 3",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QW50ZW5hXzM=",
            servidorCanalesOnline + "cvatt.html?get=QW50ZW5hXzM=",
            // "server/cvatt.html?get=QW50ZW5hXzM=",
            // "https://sssshhh.xyz/cvatt.html?get=QW50ZW5hXzM=",
            // "https://a3.115tv.site/cvatt.html?get=QW50ZW5hXzM=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QW50ZW5hXzM=",
            servidorCanalesOnline + "cvatt2_ext.html?get=QW50ZW5hXzM=",
            servidorCanalesOnline + "zapitvpro.html?id=antena3",
            // servidorCanalesOnline + "tvmia.html?stream=sn_ANTENA3",
            // "https://172m3u8.netlify.app/?id=Antena_3",
            servidorCanalesOnline + "mpd_es.html?id=ANTENA3",
            // "server/cvatt2_ext.html?get=QW50ZW5hXzM=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QW50ZW5hXzM=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QW50ZW5hXzM=",
            // "https://cv.photocalltv.me/cv2.php?get=QW50ZW5hXzM=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QW50ZW5hXzM=",
            // "https://nebunexa.com/cvatt.php?get=QW50ZW5hXzM=",
            // "https://www.enlatele.tv/player/cv2.php?get=QW50ZW5hXzM=",
            // "https://fullchannels.online/canales.php?id=antena3",
            // "https://fullchannels.online/canales.php?id=antena3-op3",
            // "https://fullchannels.online/canales.php?id=antena3-op2",
        ]
    }
);

MisCanales.set(
    "La Cuatro",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Cuatro",
            servidorCanalesOnline + "zapitvpro.html?id=cuatro",
            // servidorCanalesOnline + "tvmia.html?stream=sn_Canal_cuatro_ES",
            servidorCanalesOnline + "mpd_es.html?id=CUATRO",
        ]
    }
);

MisCanales.set(
    "Telecinco",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Canal_5_Esp",
            servidorCanalesOnline + "zapitvpro.html?id=telecinco",
            // servidorCanalesOnline + "tvmia.html?stream=sn_Canal_5_ES",
            servidorCanalesOnline + "mpd_es.html?id=TELECINCO",
        ]
    }
);

MisCanales.set(
    "laSexta",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Atresmedia",
            servidorCanalesOnline + "zapitvpro.html?id=lasexta",
            // servidorCanalesOnline + "tvmia.html?stream=sn_Canal_6_ES",
            servidorCanalesOnline + "mpd_es.html?id=LASEXTA",
        ]
    }
);

MisCanales.set(
    "Divinity",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=divinity",
        ]
    }
);

MisCanales.set(
    "24h",
    {
        pais: "España",
        enlaces: [
            // servidorCanalesOnline + "tvmia.html?stream=sn_24H",
            servidorCanalesOnline + "m3u8.html?stream=24h_1",
            servidorCanalesOnline + "edge.html?get=24H",
            servidorCanalesOnline + "gigared.html?id=24H",
            servidorCanalesOnline + "gigared_ext.html?id=24H",
            // servidorCanalesOnline + "cobo.html?id=24hours",
            // servidorCanalesOnline + "m3u8.html?stream=24h_2",
        ]
    }
);

MisCanales.set(
    "clan",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=clan_ES_inter",
            // servidorCanalesOnline + "hls.html?stream=clan",
            // servidorCanalesOnline + "m3u8.html?stream=clan_ES",
            // servidorCanalesOnline + "vaughn.html?stream=clan",
            // servidorCanalesOnline + "tvmia.html?stream=sn_CLAN",
        ]
    }
);

MisCanales.set(
    "tdp",
    {
        pais: "España",
        enlaces: [
            // servidorCanalesOnline + "tvmia.html?stream=sn_TDP",
        ]
    }
);

MisCanales.set(
    "TVE Internacional",
    {
        pais: "España",
        guide: "tve HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VFZfRXNwYW5h",
            servidorCanalesOnline + "cvatt.html?get=VFZfRXNwYW5h",
            // "server/cvatt.html?get=VFZfRXNwYW5h",
            // "https://sssshhh.xyz/cvatt.html?get=VFZfRXNwYW5h",
            // "https://a3.115tv.site/cvatt.html?get=VFZfRXNwYW5h",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VFZfRXNwYW5h",
            servidorCanalesOnline + "cvatt2_ext.html?get=VFZfRXNwYW5h",
            servidorCanalesOnline + "edge.html?get=TVE",
            servidorCanalesOnline + "gigared.html?id=TVE",
            servidorCanalesOnline + "gigared_ext.html?id=TVE",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TVE",
            servidorCanalesOnline + "m3u8.html?stream=TVE_Internacional_ES",
            servidorCanalesOnline + "m3u8.html?stream=TVE_Internacional_ES2",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=TVE",
            // "server/cvatt2_ext.html?get=VFZfRXNwYW5h",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VFZfRXNwYW5h",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VFZfRXNwYW5h",
            // "https://cv.photocalltv.me/cv2.php?get=VFZfRXNwYW5h",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VFZfRXNwYW5h",
            // "https://nebunexa.com/cvatt.php?get=VFZfRXNwYW5h",
            // "https://www.enlatele.tv/player/cv2.php?get=VFZfRXNwYW5h",
        ]
    }
);

MisCanales.set(
    "TV GALICIA",
    {
        pais: "España",
        guide: "TV GALICIA",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VHZfR2FsaWNpYQ==",
            servidorCanalesOnline + "cvatt.html?get=VHZfR2FsaWNpYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=VHZfR2FsaWNpYQ==",
        ]
    }
);

MisCanales.set(
    "Star TVE",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=STAR_TVE_ES",
            servidorCanalesOnline + "edge.html?get=Star_TVE",
        ]
    }
);

MisCanales.set(
    "Alacanti TV",
    {
        pais: "España",
        enlaces: [
            "https://streaming01.gestec-video.com/redirect_alacanti.php",
        ]
    }
);

MisCanales.set(
    "Elche 7TV",
    {
        pais: "España",
        enlaces: [
            "https://elche7tv.gestec-video.com",
        ]
    }
);

MisCanales.set(
    "8 La Marina TV",
    {
        pais: "España",
        enlaces: [
            "https://streaming005.gestec-video.com/canal24.php",
        ]
    }
);

MisCanales.set(
    "TeleMadrid",
    {
        pais: "España",
        enlaces: [
            // "m3u8.html?stream=TeleMadrid_ES",
            // servidorCanalesOnline + "tvmia.html?stream=sn_TELEMADRID",
            servidorCanalesOnline + "m3u8.html?stream=TeleMadrid_Inter_ES",
        ]
    }
);

MisCanales.set(
    "TeleMadrid la Otra",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=TeleMadrid_la_otra_ES",
        ]
    }
);

MisCanales.set(
    "Nesting TV",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Nesting_TV_ES",
        ]
    }
);

MisCanales.set(
    "Distrito TV",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Distrito_TV_ES",
        ]
    }
);

MisCanales.set(
    "DH",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=DH_ES",
        ]
    }
);

MisCanales.set(
    "El Toro TV",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=El_Toro_TV_ES",
        ]
    }
);

MisCanales.set(
    "El Confidencial",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Elconfidencial_ES",
        ]
    }
);

MisCanales.set(
    "El Pais",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=ElPais_ES",
        ]
    }
);

MisCanales.set(
    "Hispan TV",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Hispan_TV_ES",
        ]
    }
);

MisCanales.set(
    "Rakuten TV",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Rakuten_TV_ES",
        ]
    }
);

MisCanales.set(
    "Runtime Cine",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Runtime_Cine_ES",
        ]
    }
);

MisCanales.set(
    "RT en Español",
    {
        pais: "Rusia",
        guide: "RT",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=RT_en_Español",
            servidorCanalesOnline + "m3u8.html?stream=RT_en_Español2",
            servidorCanalesOnline + "m3u8.html?stream=RT_en_Español3",
            servidorCanalesOnline + "aneviapro.html?id=RT_Espanol",
            servidorCanalesOnline + "edge.html?get=RT_En_Espanol",
        ]
    }
);

MisCanales.set(
    "GLD",
    {
        pais: "R. Dominicana",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=GLD_REPDOM",
        ]
    }
);

MisCanales.set(
    "Makao TV",
    {
        pais: "R. Dominicana",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Makao_REPDOM",
        ]
    }
);

MisCanales.set(
    "TV+ UCV",
    {
        pais: "Chile",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=TV_Mas_UCV_CHILE",
        ]
    }
);

MisCanales.set(
    "Canal 9 Bio Bio",
    {
        pais: "Chile",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=9_Bio_Bio_CHILE",
        ]
    }
);

MisCanales.set(
    "El Pingüino",
    {
        pais: "Chile",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=El_Pinguino_CHILE",
        ]
    }
);

MisCanales.set(
    "Moni TV",
    {
        pais: "Chile",
        enlaces: [
            servidorCanalesOnline + "fetch.html?stream=monitvhd_CHILE",
            servidorCanalesOnline + "m3u8.html?stream=monitvhd_CHILE",
        ]
    }
);

MisCanales.set(
    "T13",
    {
        pais: "Chile",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=T13_CHILE",
        ]
    }
);

MisCanales.set(
    "G Vision",
    {
        pais: "Chile",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=G_Vision_CHILE",
        ]
    }
);

MisCanales.set(
    "Chile Channel",
    {
        pais: "Chile",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=chilechannel_CHILE",
        ]
    }
);

MisCanales.set(
    "Love Nature",
    {
        pais: "Canadá",
        enlaces: [
            servidorCanalesOnline + "iptvperu.html?id=LoveNature",
            servidorCanalesOnline + "sensa.html?id=LoveNature",
            servidorCanalesOnline + "gigared.html?id=Love_Nature",
            servidorCanalesOnline + "gigared_ext.html?id=Love_Nature",
            servidorCanalesOnline + "edge.html?get=Love_Nature",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=LOVE_NATURE",
            // "https://telegratuita.com/repro/?r=L2NhbmFsZXMvbG92ZW5hdHVyZS5waHA=",
            servidorCanalesOnline + "m3u8.html?stream=Love_Nature1",
            // servidorCanalesOnline + "sensa_ext.html?id=LoveNature",
            // servidorCanalesOnline + "m3u8.html?stream=Love_Nature2",
            // servidorCanalesOnline + "m3u8.html?stream=Love_Nature3",
        ]
    }
);

MisCanales.set(
    "Love ThePlanet",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Love_ThePlanet",
        ]
    }
);

MisCanales.set(
    "Love Wine",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Love_Wine",
        ]
    }
);

MisCanales.set(
    "Red Bull TV",
    {
        pais: "Austria",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Red_Bull_TV",
        ]
    }
);

MisCanales.set(
    "5 Minute Crafts",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=IDEAS_EN_5_MINUTOS",
            servidorCanalesOnline + "m3u8.html?stream=5_Minute_Crafts",
        ]
    }
);

MisCanales.set(
    "Latele",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TEFfVEVMRV9DNA==",
            servidorCanalesOnline + "cvatt.html?get=TEFfVEVMRV9DNA==",
            // "server/cvatt.html?get=TEFfVEVMRV9DNA==",
            // "https://sssshhh.xyz/cvatt.html?get=TEFfVEVMRV9DNA==",
            // "https://a3.115tv.site/cvatt.html?get=TEFfVEVMRV9DNA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TEFfVEVMRV9DNA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=TEFfVEVMRV9DNA==",
            // servidorCanalesOnline + "m3u8.html?stream=Latele_PARA",
            // "server/cvatt2_ext.html?get=TEFfVEVMRV9DNA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TEFfVEVMRV9DNA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TEFfVEVMRV9DNA==",
            // "https://cv.photocalltv.me/cv2.php?get=TEFfVEVMRV9DNA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TEFfVEVMRV9DNA==",
            // "https://nebunexa.com/cvatt.php?get=TEFfVEVMRV9DNA==",
            // "https://www.enlatele.tv/player/cv2.php?get=TEFfVEVMRV9DNA==",
        ]
    }
);

MisCanales.set(
    "TV Chile",
    {
        pais: "Chile",
        guide: "TV CHILE",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VHZfQ2hpbGU=",
            servidorCanalesOnline + "cvatt.html?get=VHZfQ2hpbGU=",
            // "server/cvatt.html?get=VHZfQ2hpbGU=",
            // "https://sssshhh.xyz/cvatt.html?get=VHZfQ2hpbGU=",
            // "https://a3.115tv.site/cvatt.html?get=VHZfQ2hpbGU=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VHZfQ2hpbGU=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VHZfQ2hpbGU=",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TV_Chile",
            servidorCanalesOnline + "sensa.html?id=TVChile",
            // servidorCanalesOnline + "sensa_ext.html?id=TVChile",
            // "server/cvatt2_ext.html?get=VHZfQ2hpbGU=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VHZfQ2hpbGU=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VHZfQ2hpbGU=",
            // "https://cv.photocalltv.me/cv2.php?get=VHZfQ2hpbGU==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VHZfQ2hpbGU=",
            // "https://nebunexa.com/cvatt.php?get=VHZfQ2hpbGU=",
            // "https://www.enlatele.tv/player/cv2.php?get=VHZfQ2hpbGU=",
        ]
    }
);

MisCanales.set(
    "Canal 4 Uruguay",
    {
        pais: "Uruguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWw0X1VSVQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWw0X1VSVQ==",
            // "server/cvatt.html?get=Q2FuYWw0X1VSVQ==",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FuYWw0X1VSVQ==",
            // "https://a3.115tv.site/cvatt.html?get=Q2FuYWw0X1VSVQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FuYWw0X1VSVQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWw0X1VSVQ==",
            servidorCanalesOnline + "tvmia.html?stream=c_CANAL_4_URU",
            // "server/cvatt2_ext.html?get=Q2FuYWw0X1VSVQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FuYWw0X1VSVQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FuYWw0X1VSVQ==",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FuYWw0X1VSVQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FuYWw0X1VSVQ==",
            // "https://nebunexa.com/cvatt.php?get=Q2FuYWw0X1VSVQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FuYWw0X1VSVQ==",
        ]
    }
);

MisCanales.set(
    "Canal 10 Uruguayo",
    {
        pais: "Uruguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWwxMF9VUlU=",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWwxMF9VUlU=",
            // "server/cvatt.html?get=Q2FuYWwxMF9VUlU=",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FuYWwxMF9VUlU=",
            // "https://a3.115tv.site/cvatt.html?get=Q2FuYWwxMF9VUlU=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FuYWwxMF9VUlU=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWwxMF9VUlU=",
            servidorCanalesOnline + "tvmia.html?stream=bn_Canal_10_URU",
            // "server/cvatt2_ext.html?get=Q2FuYWwxMF9VUlU=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FuYWwxMF9VUlU=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FuYWwxMF9VUlU=",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FuYWwxMF9VUlU=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FuYWwxMF9VUlU=",
            // "https://nebunexa.com/cvatt.php?get=Q2FuYWwxMF9VUlU=",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FuYWwxMF9VUlU=",
        ]
    }
);

MisCanales.set(
    "UCL URUGUAY",
    {
        pais: "Uruguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfVQ==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfVQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfVQ==",
            servidorCanalesOnline + "tvmia.html?stream=bn_UCL",
            servidorCanalesOnline + "m3u8.html?stream=UCL_URUGUAY",
        ]
    }
);

MisCanales.set(
    "Ecuavisa Ecuador",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_ECUAVISA",
            servidorCanalesOnline + "m3u8.html?stream=Ecuavisa_Ecuador",
        ]
    }
);

MisCanales.set(
    "American TV",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Americantv_ECU",
        ]
    }
);

MisCanales.set(
    "Teleamazonas",
    {
        pais: "Ecuador",
        enlaces: [
            // servidorCanalesOnline + "tvmia.html?stream=an_TeleAmazonas",
        ]
    }
);

MisCanales.set(
    "RTS",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_RTS_Ecuador",
        ]
    }
);

MisCanales.set(
    "Ecuador TV",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_ECUADOR_TV",
            servidorCanalesOnline + "m3u8.html?stream=Ecuador_TV_ECU",
        ]
    }
);

MisCanales.set(
    "TVC",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_TVC",
        ]
    }
);

MisCanales.set(
    "TC",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_TC_ECUADOR",
        ]
    }
);

MisCanales.set(
    "Educa",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_educa",
        ]
    }
);

MisCanales.set(
    "Oromar TV",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Oromar_TV_ECU",
        ]
    }
);

MisCanales.set(
    "America TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "iptvperu.html?id=america",
            // servidorCanalesOnline + "m3u8.html?stream=America_TV_PERU",
            // servidorCanalesOnline + "tvmia.html?stream=an_America_Peru",
        ]
    }
);

MisCanales.set(
    "Willax TV",
    {
        pais: "Perú",
        enlaces: [
            // servidorCanalesOnline + "m3u8.html?stream=Willax_TV_PERU",
            servidorCanalesOnline + "tvmia.html?stream=c_WILLAX",
        ]
    }
);

MisCanales.set(
    "Panamericana TV",
    {
        pais: "Perú",
        enlaces: [
            // "https://player.kick.com/ptv5?autoplay=true&muted=false",
            servidorCanalesOnline + "tvmia.html?stream=an_PanamericanaTV_PERU"
        ]
    }
);

MisCanales.set(
    "Peru Mágico",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_Peru_Magico",
        ]
    }
);

MisCanales.set(
    "NET Channel HD",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=NET_Channel_HD_PERU",
        ]
    }
);

MisCanales.set(
    "RPP TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_RPP",
        ]
    }
);

MisCanales.set(
    "Canal N",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_CANAL_N_PERU",
        ]
    }
);

MisCanales.set(
    "Latina TV Perú",
    {
        pais: "Perú",
        enlaces: [
            // servidorCanalesOnline + "tvmia.html?stream=an_Latina_TV",
            servidorCanalesOnline + "m3u8.html?stream=LATINA_PERU1",
            servidorCanalesOnline + "m3u8.html?stream=LATINA_PERU2",
            servidorCanalesOnline + "m3u8.html?stream=LATINA_PERU3",
        ]
    }
);

MisCanales.set(
    "Latina Noticias Perú",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=LATINA_NOTICIAS_PERU",
        ]
    }
);

MisCanales.set(
    "Latina Clásicos Perú",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=LATINA_CLASICOS_PERU",
        ]
    }
);

MisCanales.set(
    "TV Cosmo",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Cosmos_TV_PERU",
        ]
    }
);

MisCanales.set(
    "Bethel",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Bethel_PERU",
        ]
    }
);

MisCanales.set(
    "Autentica TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Autentica_TV_PERU",
        ]
    }
);

MisCanales.set(
    "Yurimaguas TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Yurimaguas_TV_PERU",
        ]
    }
);

MisCanales.set(
    "TACALA TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=TACALA_TV_PERU",
        ]
    }
);

MisCanales.set(
    "RTV Libertad",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=RTV_Libertad_PERU",
        ]
    }
);

MisCanales.set(
    "Yurivision",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Yurivision_PERU",
        ]
    }
);

MisCanales.set(
    "Canal 8",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal8_PERU",
        ]
    }
);

MisCanales.set(
    "Cumo",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Cumo_PERU",
        ]
    }
);

MisCanales.set(
    "SONO ONDA TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Sono_Onda_TV_PERU",
        ]
    }
);

MisCanales.set(
    "Conecta2 TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Conecta2_PERU",
        ]
    }
);

MisCanales.set(
    "Piura TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Piura_TV_PERU",
        ]
    }
);

MisCanales.set(
    "TV Oriente",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=TV_Oriente_PERU",
        ]
    }
);

MisCanales.set(
    "GF TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=GF_TV_PERU",
        ]
    }
);

MisCanales.set(
    "MASTER TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=MASTER_TV_PERU",
        ]
    }
);

MisCanales.set(
    "Planeta TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Planeta_TV_PERU",
        ]
    }
);

MisCanales.set(
    "Super Canal",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Super_Canal_PERU",
        ]
    }
);

MisCanales.set(
    "Rselva TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Rselva_TV_PERU",
        ]
    }
);

MisCanales.set(
    "Uranio TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Uranio_TV_PERU",
        ]
    }
);

MisCanales.set(
    "Telecolor",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Telecolor_PERU",
        ]
    }
);

MisCanales.set(
    "Via Altomayo",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Via_Alto_Mayo_PERU",
        ]
    }
);

MisCanales.set(
    "CR TV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=CR_TV_PERU",
        ]
    }
);

MisCanales.set(
    "NPY",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Tk9USUNJQVNfUFlfQzQ=",
            servidorCanalesOnline + "cvatt.html?get=Tk9USUNJQVNfUFlfQzQ=",
            // "server/cvatt.html?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://sssshhh.xyz/cvatt.html?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://a3.115tv.site/cvatt.html?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Tk9USUNJQVNfUFlfQzQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Tk9USUNJQVNfUFlfQzQ=",
            // servidorCanalesOnline + "m3u8.html?stream=NPY_PARA",
            // "https://www.desdepylabs.com/External/tvaccion/npy",
            // "server/cvatt2_ext.html?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://cv.photocalltv.me/cv2.php?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://nebunexa.com/cvatt.php?get=Tk9USUNJQVNfUFlfQzQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=Tk9USUNJQVNfUFlfQzQ=",
        ]
    }
);

MisCanales.set(
    "5 DÍAS PY",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=NV9EaWFzX1BZ",
            servidorCanalesOnline + "cvatt.html?get=NV9EaWFzX1BZ",
            servidorCanalesOnline + "cvatt2_ext.html?get=NV9EaWFzX1BZ",
        ]
    }
);

MisCanales.set(
    "PYTV",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UGFyYWd1YXlfVFY=",
            servidorCanalesOnline + "cvatt.html?get=UGFyYWd1YXlfVFY=",
            // "server/cvatt.html?get=UGFyYWd1YXlfVFY=",
            // "https://sssshhh.xyz/cvatt.html?get=UGFyYWd1YXlfVFY=",
            // "https://a3.115tv.site/cvatt.html?get=UGFyYWd1YXlfVFY=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=UGFyYWd1YXlfVFY=",
            servidorCanalesOnline + "cvatt2_ext.html?get=UGFyYWd1YXlfVFY=",
            // "server/cvatt2_ext.html?get=UGFyYWd1YXlfVFY=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=UGFyYWd1YXlfVFY=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=UGFyYWd1YXlfVFY=",
            // "https://cv.photocalltv.me/cv2.php?get=UGFyYWd1YXlfVFY=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=UGFyYWd1YXlfVFY=",
            // "https://nebunexa.com/cvatt.php?get=UGFyYWd1YXlfVFY=",
            // "https://www.enlatele.tv/player/cv2.php?get=UGFyYWd1YXlfVFY=",
        ]
    }
);

MisCanales.set(
    "ABC TV PY",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QUJDX1RWX0M0",
            servidorCanalesOnline + "cvatt.html?get=QUJDX1RWX0M0",
            servidorCanalesOnline + "cvatt2_ext.html?get=QUJDX1RWX0M0",
            servidorCanalesOnline + "m3u8.html?stream=ABC_TV_PY",
        ]
    }
);

MisCanales.set(
    "Trece PY",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UlBDX0M0",
            servidorCanalesOnline + "cvatt.html?get=UlBDX0M0",
            // "server/cvatt.html?get=UlBDX0M0",
            // "https://sssshhh.xyz/cvatt.html?get=UlBDX0M0",
            // "https://a3.115tv.site/cvatt.html?get=UlBDX0M0",
            // "https://a3.115tv.site/cvatt2_ext.html?get=UlBDX0M0",
            servidorCanalesOnline + "cvatt2_ext.html?get=UlBDX0M0",
            // servidorCanalesOnline + "m3u8.html?stream=Trece_PARA",
            // "https://www.desdepylabs.com/External/trecetv",
            // "server/cvatt2_ext.html?get=UlBDX0M0",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=UlBDX0M0",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=UlBDX0M0",
            // "https://cv.photocalltv.me/cv2.php?get=UlBDX0M0",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=UlBDX0M0",
            // "https://nebunexa.com/cvatt.php?get=UlBDX0M0",
            // "https://www.enlatele.tv/player/cv2.php?get=UlBDX0M0",
        ]
    }
);

MisCanales.set(
    "Unicanal",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VU5JQ0FOQUxfQzQ=",
            servidorCanalesOnline + "cvatt.html?get=VU5JQ0FOQUxfQzQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VU5JQ0FOQUxfQzQ=",
            // servidorCanalesOnline + "m3u8.html?stream=Unicanal_PARA",
            // servidorCanalesOnline + "cobo.html?id=UNICANAL",
            "https://www.desdepylabs.com/External/unicanal",
        ]
    }
);

MisCanales.set(
    "Ñanduti",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TmFuZHV0aV9QeQ==",
            servidorCanalesOnline + "cvatt.html?get=TmFuZHV0aV9QeQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=TmFuZHV0aV9QeQ==",
        ]
    }
);

MisCanales.set(
    "Mega TV",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TWVnYV9UVg==",
            servidorCanalesOnline + "cvatt.html?get=TWVnYV9UVg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=TWVnYV9UVg==",
            servidorCanalesOnline + "m3u8.html?stream=MegaTV_PARA",
        ]
    }
);

MisCanales.set(
    "Educanal",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RWR1Y2FuYWw=",
            servidorCanalesOnline + "cvatt.html?get=RWR1Y2FuYWw=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RWR1Y2FuYWw=",
            servidorCanalesOnline + "m3u8.html?stream=EDUCANAL_PARA",
        ]
    }
);

MisCanales.set(
    "Flow Sports 1",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RXZlbnRvczFIRA",
            servidorCanalesOnline + "cvatt.html?get=RXZlbnRvczFIRA",
            servidorCanalesOnline + "cvatt2_ext.html?get=RXZlbnRvczFIRA",
        ]
    }
);

MisCanales.set(
    "Flow Sports 2",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RXZlbnRvc18yX0hE",
            servidorCanalesOnline + "cvatt.html?get=RXZlbnRvc18yX0hE",
            servidorCanalesOnline + "cvatt2_ext.html?get=RXZlbnRvc18yX0hE",
        ]
    }
);

MisCanales.set(
    "Flow Sports 3",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RXZlbnRvc18z",
            servidorCanalesOnline + "cvatt.html?get=RXZlbnRvc18z",
            servidorCanalesOnline + "cvatt2_ext.html?get=RXZlbnRvc18z",
        ]
    }
);

MisCanales.set(
    "TyC Sports",
    {
        pais: "Argentina",
        guide: "TYC SPORTS HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VHlDU3BvcnQ",
            servidorCanalesOnline + "cvatt.html?get=VHlDU3BvcnQ",
            // "server/cvatt.html?get=VHlDU3BvcnQ",
            // "https://sssshhh.xyz/cvatt.html?get=VHlDU3BvcnQ",
            // "https://a3.115tv.site/cvatt.html?get=VHlDU3BvcnQ",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VHlDU3BvcnQ",
            servidorCanalesOnline + "cvatt2_ext.html?get=VHlDU3BvcnQ",
            servidorCanalesOnline + "akamaizedpro.html?id=tycsports_arg",
            servidorCanalesOnline + "akamaized.html?id=tycsports_arg",
            servidorCanalesOnline + "akamaizedpro.html?id=tycsports",
            servidorCanalesOnline + "akamaized.html?id=tycsports",
            servidorCanalesOnline + "megacable.html?id=TyC_Sports_HD",
            servidorCanalesOnline + "megacablepro.html?id=TyC_Sports_HD",
            // servidorCanalesOnline + "deepcathinkpro.html?feed=77",
            servidorCanalesOnline + "latamlive.html?id=TYC_SPORTS_AR_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=tycsports",
            // "https://cdn.tdtcloud.xyz/ws14.php",
            servidorCanalesOnline + "aneviapro.html?id=TyC",
            servidorCanalesOnline + "edge.html?get=TyC_Sports",
            // servidorCanalesOnline + "tvmia.html?stream=an_TyC_Sports",
            servidorCanalesOnline + "sensa.html?id=TYCSports",
            servidorCanalesOnline + "gigared.html?id=TyC_Sports",
            servidorCanalesOnline + "gigared_ext.html?id=TyC_Sports",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TyC_HD",
            servidorCanalesOnline + "boldmss.html?get=TYC_BAK",
            // servidorCanalesOnline + "boldmss_ext.html?get=TYC_BAK",
            // servidorCanalesOnline + "playme.html?get=CH_TYCSPORTS",
            // servidorCanalesOnline + "sensa_ext.html?id=TYCSports",
            // "server/cvatt2_ext.html?get=VHlDU3BvcnQ",
            // "m3u8.html?stream=TyC_Sport",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VHlDU3BvcnQ",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VHlDU3BvcnQ",
            // "https://cv.photocalltv.me/cv2.php?get=VHlDU3BvcnQ",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VHlDU3BvcnQ",
            // "https://nebunexa.com/cvatt.php?get=VHlDU3BvcnQ",
            // "https://www.enlatele.tv/player/cv2.php?get=VHlDU3BvcnQ",
            // "https://futbollibrelibre.com/canales.php?stream=tycsports",
            // "https://streamx10.cloud/global2.php?channel=tycsports",
            // "https://streamx10.cloud/global3.php?channel=tyc_sports", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=tycsports",
            // "https://la10hd.com/vivo/canal.php?stream=tycsports",
            // "https://la10hd.com/vivo/canales.php?stream=tycsports",
            servidorCanalesOnline + "jjfutbol2pro.html?name=tycsports",
            // "https://can-teestremaa-sd-depopp.glitch.me/teeyceeargsdd.html",
        ]
    }
);

MisCanales.set(
    "TyC Sports Internacional",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VHlDX0ludGVybmFjaW9uYWw",
            servidorCanalesOnline + "cvatt.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "server/cvatt.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://sssshhh.xyz/cvatt.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://a3.115tv.site/cvatt.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VHlDX0ludGVybmFjaW9uYWw",
            servidorCanalesOnline + "cvatt2_ext.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "server/cvatt2_ext.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://cv.photocalltv.me/cv2.php?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://nebunexa.com/cvatt.php?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://www.enlatele.tv/player/cv2.php?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://a3.115tv.site/cvattde.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // servidorCanalesOnline + "cvattde.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "server/cvattde.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://sssshhh.xyz/cvattde.html?get=VHlDX0ludGVybmFjaW9uYWw",
            // "https://la10hd.com/vivo/canal.php?stream=tycinternacional",
            // "https://la10hd.com/vivo/canales.php?stream=tycinternacional",
            // "https://streamx10.cloud/global2.php?channel=tycinternacional",
            // "https://streamx10.cloud/global1.php?channel=tycinternacional",
            servidorCanalesOnline + "jjfutbol2pro.html?name=tycinternacional",
        ]
    }
);

MisCanales.set(
    "DeporTV",
    {
        pais: "Argentina",
        guide: "DEPORTV HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGVwb3JUVkhE",
            servidorCanalesOnline + "cvatt.html?get=RGVwb3JUVkhE",
            // "server/cvatt.html?get=RGVwb3JUVkhE",
            // "https://sssshhh.xyz/cvatt.html?get=RGVwb3JUVkhE",
            // "https://a3.115tv.site/cvatt.html?get=RGVwb3JUVkhE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGVwb3JUVkhE",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGVwb3JUVkhE",
            servidorCanalesOnline + "edge.html?get=Deportv",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=DeporTV_HD",
            servidorCanalesOnline + "tvmia.html?stream=an_DEPORTV",
            servidorCanalesOnline + "sensa.html?id=Deportv",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=DEPORTV",
            // servidorCanalesOnline + "sensa_ext.html?id=Deportv",
            // "server/cvatt2_ext.html?get=RGVwb3JUVkhE",
            // "cvattde.html?get=RGVwb3JUVkhE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGVwb3JUVkhE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGVwb3JUVkhE",
            // "https://cv.photocalltv.me/cv2.php?get=RGVwb3JUVkhE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGVwb3JUVkhE",
            // "https://nebunexa.com/cvatt.php?get=RGVwb3JUVkhE",
            // "https://www.enlatele.tv/player/cv2.php?get=RGVwb3JUVkhE",
        ]
    }
);

MisCanales.set(
    "DSports",
    {
        pais: "Argentina",
        enlaces: [
            ///Argentina
            servidorCanalesOnline + "cvatt_pro.html?get=RFNwb3J0c18x",
            servidorCanalesOnline + "cvatt.html?get=RFNwb3J0c18x",
            servidorCanalesOnline + "cvatt2_ext.html?get=RFNwb3J0c18x",
            servidorCanalesOnline + "dsports.html?id=DSports_cbsivideo",
            servidorCanalesOnline + "akamaizedpro.html?id=dsports_arg",
            servidorCanalesOnline + "akamaized.html?id=dsports_arg",

            ///Uruguay
            servidorCanalesOnline + "cvatt_pro.html?get=RHNwb3J0c19VWQ==",
            servidorCanalesOnline + "cvatt.html?get=RHNwb3J0c19VWQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=RHNwb3J0c19VWQ==",




            servidorCanalesOnline + "flypro.html?id=dsports",
            servidorCanalesOnline + "fly-hls.html?id=dsports",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=dsports",
            // servidorCanalesOnline + "deepcathinkpro.html?feed=94",
            // "https://cdn.tdtcloud.xyz/ws07.php",
            "https://streamx-hd.com/live1.php?stream=dsports",
            // servidorCanalesOnline + "proxym3u8/?id=DSPORTS_AR",
            // "https://199m3u8.netlify.app/?id=DSports",
            // servidorCanalesOnline + "m3u8.html?stream=DSportsArg_2",
            // "https://superiorcrop.net/embed/ehf5qe1r",
            // "https://live.vkvideo.ru/app/embed/fanfut3",
            // servidorCanalesOnline + "extension.html?get=DSPORTS",
            // "https://elcanaldeportivo.com/dsports-sharecast.php",
            // "https://welivesports.shop/goal/directvarg.php",
            // "https://telegratuita.org/premium/player1.php?canal=dsports",
            // "https://rereyano.ru/player/3/94",
            // "https://cartelive.club/player/3/94",
            // "https://bolaloca.my/player/3/94",
            // "https://futbollibrelibre.com/canales.php?stream=dsports",
            // "https://streamx10.cloud/global2.php?channel=dsports",
            // "https://streamx10.cloud/global1.php?channel=dsports",
            // "https://streamx10.cloud/global3.php?channel=dsports", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=dsports",
            // "https://la10hd.com/vivo/canales.php?stream=dsports",
            servidorCanalesOnline + "jjfutbol2pro.html?name=dsports",
            // "https://fullchannels.online/canales.php?id=directv",
        ]
    }
);

MisCanales.set(
    "DSports2",
    {
        pais: "Argentina",
        enlaces: [
            ///Argentina
            servidorCanalesOnline + "cvatt_pro.html?get=RFNwb3J0c18y",
            servidorCanalesOnline + "cvatt.html?get=RFNwb3J0c18y",
            servidorCanalesOnline + "cvatt2_ext.html?get=RFNwb3J0c18y",
            servidorCanalesOnline + "dsports.html?id=DSports2_cbsivideo",
            servidorCanalesOnline + "akamaizedpro.html?id=dsports2_arg",
            servidorCanalesOnline + "akamaized.html?id=dsports2_arg",

            ///Uruguay
            servidorCanalesOnline + "cvatt_pro.html?get=RHNwb3J0czJfVVk=",
            servidorCanalesOnline + "cvatt.html?get=RHNwb3J0czJfVVk=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RHNwb3J0czJfVVk=",

            servidorCanalesOnline + "flypro.html?id=dsports2",
            servidorCanalesOnline + "fly-hls.html?id=dsports2",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=dsports2",
            // servidorCanalesOnline + "deepcathinkpro.html?feed=95",
            // "https://cdn.tdtcloud.xyz/ws08.php",
            // servidorCanalesOnline + "proxym3u8/?id=DSPORTS2_AR",
            // "https://172m3u8.netlify.app/?id=Dsports2",
            // servidorCanalesOnline + "m3u8.html?stream=DSports2Arg",
            // "https://welivesport.shop/embed/directv2arg.php",
            // "https://lal0hd.com/sw.html?get=https://lal0hd.com/repro/eventos.html",
            // "https://rereyano.ru/player/3/95",
            // "https://cartelive.club/player/3/95",
            // "https://bolaloca.my/player/3/95",
            // "https://thedaddy.click/embed/stream-25.php",
            // "https://futbollibrelibre.com/canales.php?stream=dsports2",
            // "https://streamx10.cloud/global2.php?channel=dsports2",
            // "https://streamx10.cloud/global1.php?channel=dsports2",
            // "https://streamx10.cloud/global3.php?channel=dsports2", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=dsports2",
            // "https://la10hd.com/vivo/canales.php?stream=dsports2",
            servidorCanalesOnline + "jjfutbol2pro.html?name=dsports2",
            // "https://fullchannels.online/canales.php?id=directv2-op2",
        ]
    }
);

MisCanales.set(
    "DSports Plus",
    {
        pais: "Argentina",
        enlaces: [
            ///Uruguay
            servidorCanalesOnline + "cvatt_pro.html?get=RHNwb3J0c19QbHVzX1VZ",
            servidorCanalesOnline + "cvatt.html?get=RHNwb3J0c19QbHVzX1VZ",
            servidorCanalesOnline + "cvatt2_ext.html?get=RHNwb3J0c19QbHVzX1VZ",

            servidorCanalesOnline + "dsports.html?id=DSportsPlus_cbsivideo",
            servidorCanalesOnline + "flypro.html?id=dsportsplus",
            servidorCanalesOnline + "fly-hls.html?id=dsportsplus",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=dsportsplus",
            // servidorCanalesOnline + "deepcathinkpro.html?feed=96",
            // "https://cdn.tdtcloud.xyz/ws09.php",
            // "https://rereyano.ru/player/3/96",
            // "https://cartelive.club/player/3/96",
            // "https://bolaloca.my/player/3/96",
            // "https://futbollibrelibre.com/canales.php?stream=dsportsplus",
            // "https://streamx10.cloud/global2.php?channel=dsportsplus",
            // "https://streamx10.cloud/global1.php?channel=dsportsplus",
            // "https://streamx10.cloud/global3.php?channel=dsportsplus", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=dsportsplus",
            // "https://la10hd.com/vivo/canales.php?stream=dsportsplus",
            servidorCanalesOnline + "jjfutbol2pro.html?name=dsports+",
            // "https://fullchannels.online/canales.php?id=directvplus-op2",
            // "https://zonahack-2aeb7.web.app/tvonline.html?url=https://cansd-teleetreee-maemb.glitch.me/detee3.html",
        ]
    }
);

MisCanales.set(
    "VS Sports",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Tmlja211c2lj",
            servidorCanalesOnline + "cvatt.html?get=Tmlja211c2lj",
            servidorCanalesOnline + "cvatt2_ext.html?get=Tmlja211c2lj",
        ]
    }
);

MisCanales.set(
    "BEIN Ñ Sport",
    {
        pais: "Estados Unidos",
        enlaces: [
            // servidorCanalesOnline + "tdtcloudpro.html?stream=beinsports",
            // "https://cdn.tdtcloud.xyz/ws23.php",
            // servidorCanalesOnline + "cobo.html?id=BEIN_XTRA_N_ES",
            // "https://forlessmake.store/cobo.html?id=BEIN_XTRA_N_ES",
            // "https://la10hd.com/vivo/canal.php?stream=beinsportes",
            // "https://la10hd.com/vivo/canales.php?stream=beinsportes",
            servidorCanalesOnline + "jjfutbol2pro.html?name=beinsportes",
            // "https://fullchannels.online/canales.php?id=bein-op3",

        ]
    }
);

MisCanales.set(
    "GOLPLAY",
    {
        pais: "España",
        enlaces: [
            // servidorCanalesOnline + "tvmia.html?stream=sn_GOL_PLAY",
        ]
    }
);

MisCanales.set(
    "Claro Sports",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=clarosports",
            servidorCanalesOnline + "akamaized.html?id=clarosports",
            servidorCanalesOnline + "m3u8.html?stream=Claro_Sports",
            servidorCanalesOnline + "m3u8.html?stream=Claro_Sports2",
            servidorCanalesOnline + "sensa.html?id=ClaroSports",
            servidorCanalesOnline + "edge.html?get=Claro_Sports",
            // servidorCanalesOnline + "sensa_ext.html?id=ClaroSports",
        ]
    }
);

MisCanales.set(
    "AMÉRICA SPORTS",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QW1lcmljYV9TcG9ydHM=",
            servidorCanalesOnline + "cvatt.html?get=QW1lcmljYV9TcG9ydHM=",
            servidorCanalesOnline + "cvatt2_ext.html?get=QW1lcmljYV9TcG9ydHM=",
            servidorCanalesOnline + "akamaizedpro.html?id=americasport_arg",
            servidorCanalesOnline + "akamaized.html?id=americasport_arg",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=America_Sports",
            servidorCanalesOnline + "sensa.html?id=AmericaSports",
            // servidorCanalesOnline + "sensa_ext.html?id=AmericaSports",
        ]
    }
);

MisCanales.set(
    "SHOWSPORT",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=U2hvd19TcG9ydHM=",
            servidorCanalesOnline + "cvatt.html?get=U2hvd19TcG9ydHM=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U2hvd19TcG9ydHM=",
        ]
    }
);

MisCanales.set(
    "PX SPORTS",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UFhfU3BvcnRz",
            servidorCanalesOnline + "cvatt.html?get=UFhfU3BvcnRz",
            servidorCanalesOnline + "cvatt2_ext.html?get=UFhfU3BvcnRz",
            servidorCanalesOnline + "akamaizedpro.html?id=pxsports",
            servidorCanalesOnline + "akamaized.html?id=pxsports",
            servidorCanalesOnline + "sensa.html?id=PXSports",
            // servidorCanalesOnline + "sensa_ext.html?id=PXSports",
        ]
    }
);

MisCanales.set(
    "TNT Sports",
    {
        pais: "Argentina",
        guide: "TNT Sport Premium HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VE5UX1Nwb3J0c19IRA",
            servidorCanalesOnline + "cvatt.html?get=VE5UX1Nwb3J0c19IRA",
            // "server/cvatt.html?get=VE5UX1Nwb3J0c19IRA",
            // "https://sssshhh.xyz/cvatt.html?get=VE5UX1Nwb3J0c19IRA",
            // "https://a3.115tv.site/cvatt.html?get=VE5UX1Nwb3J0c19IRA",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VE5UX1Nwb3J0c19IRA",
            servidorCanalesOnline + "cvatt2_ext.html?get=VE5UX1Nwb3J0c19IRA",
            servidorCanalesOnline + "akamaizedpro.html?id=tntsports_arg",
            servidorCanalesOnline + "akamaized.html?id=tntsports_arg",
            servidorCanalesOnline + "megacable.html?id=TNT_Sports_HD",
            servidorCanalesOnline + "megacablepro.html?id=TNT_Sports_HD",
            // servidorCanalesOnline + "deepcathinkpro.html?feed=75",
            servidorCanalesOnline + "latamlive.html?id=TNTS_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=tntsports",
            // "https://cdn.tdtcloud.xyz/ws22.php",
            servidorCanalesOnline + "edge.html?get=TNT_Sports",
            "https://aux.canalesonline24.workers.dev/trimi.html?id=TNT_SPORTS",
            servidorCanalesOnline + "gigared.html?id=TNT_Sports_Premium",
            servidorCanalesOnline + "gigared_ext.html?id=TNT_Sports_Premium",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TNT_Sports_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=TNT_SPORTS2",
            // "server/cvatt2_ext.html?get=VE5UX1Nwb3J0c19IRA",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VE5UX1Nwb3J0c19IRA",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VE5UX1Nwb3J0c19IRA",
            // "https://cv.photocalltv.me/cv2.php?get=VE5UX1Nwb3J0c19IRA",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VE5UX1Nwb3J0c19IRA",
            // "https://nebunexa.com/cvatt.php?get=VE5UX1Nwb3J0c19IRA",
            // "https://www.enlatele.tv/player/cv2.php?get=VE5UX1Nwb3J0c19IRA",
            // "https://betzta.com/canales.php?stream=tntsportar",
            // "https://futbollibrelibre.com/canales.php?stream=tntsports",
            // "https://telegratuita.org/premium/player1.php?canal=tntsportsar",
            // "https://rereyano.ru/player/4/75",
            // "https://cartelive.club/player/4/75",
            // "https://bolaloca.my/player/4/75",
            // "https://streamx10.cloud/global2.php?channel=tntsports",
            // "https://streamx10.cloud/global1.php?channel=tntsports",
            // "https://streamx10.cloud/global3.php?channel=tntsports_argentina", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=tntsports",
            // "https://la10hd.com/vivo/canales.php?stream=tntsports",
            servidorCanalesOnline + "jjfutbol2pro.html?name=tntsports",
        ]
    }
);

MisCanales.set(
    "TNT Sports Premium CL",
    {
        pais: "Chile",
        enlaces: [
            // servidorCanalesOnline + "deepcathinkpro.html?feed=83",
            // servidorCanalesOnline + "tvmia.html?stream=an_TNT_SPORTS_PREMIUM",
            // "https://streamx10.cloud/global2.php?channel=tntsportschile",
            // "https://streamx10.cloud/global1.php?channel=tntsportschile",
            // "https://streamx10.cloud/global2.php?channel=tnt_chile",
            // "https://streamx10.cloud/global1.php?channel=tnt_chile",
            // "https://streamx10.cloud/global3.php?channel=tnt_chile", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=tntsportschile",
            // "https://la10hd.com/vivo/canales.php?stream=tntsportschile",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=tntsportschile",
            // "https://fullchannels.online/canales.php?id=tntchile",
        ]
    }
);

MisCanales.set(
    "FUTV",
    {
        pais: "Costa Rica",
        enlaces: [
            // "https://futbollibrelibre.com/canales.php?stream=futv",
            // "https://streamx10.cloud/global2.php?channel=futv",
            // "https://streamx10.cloud/global1.php?channel=futv",
            // "https://streamx10.cloud/global3.php?channel=futv", //No funciona en la apk
            // "https://la10hd.com/vivo/canales.php?stream=futv",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=futv",
        ]
    }
);

MisCanales.set(
    "ESPN MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=espn",
            servidorCanalesOnline + "akamaized.html?id=espn",
            // "https://streamx10.cloud/global2.php?channel=espnmx",
            // "https://streamx10.cloud/global1.php?channel=espnmx",
            // "https://streamx10.cloud/global3.php?channel=espnmx", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=espnmx",
            // "https://la10hd.com/vivo/canales.php?stream=espnmx",
            servidorCanalesOnline + "izzigo.html?id=ESPN",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espnmx",
        ]
    }
);

MisCanales.set(
    "ESPN 2 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=espn_2",
            servidorCanalesOnline + "akamaized.html?id=espn_2",
            // "https://streamx10.cloud/global2.php?channel=espn2mx",
            // "https://streamx10.cloud/global1.php?channel=espn2mx",
            // "https://la10hd.com/vivo/canal.php?stream=espn2mx",
            // "https://la10hd.com/vivo/canales.php?stream=espn2mx",
            servidorCanalesOnline + "izzigo.html?id=ESPN_2",
        ]
    }
);

MisCanales.set(
    "ESPN 3 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=espn_3",
            servidorCanalesOnline + "akamaized.html?id=espn_3",
            // "https://streamx10.cloud/global2.php?channel=espn3mx",
            // "https://streamx10.cloud/global1.php?channel=espn3mx",
            // "https://la10hd.com/vivo/canal.php?stream=espn3mx",
            // "https://la10hd.com/vivo/canales.php?stream=espn3mx",
            servidorCanalesOnline + "izzigo.html?id=ESPN_3",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn3mx",
        ]
    }
);

MisCanales.set(
    "ESPN 4 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=espn_extra",
            servidorCanalesOnline + "akamaized.html?id=espn_extra",
            // "https://streamx10.cloud/global2.php?channel=espn4mx",
            // "https://streamx10.cloud/global1.php?channel=espn4mx",
            // "https://la10hd.com/vivo/canal.php?stream=espn4mx",
            // "https://la10hd.com/vivo/canales.php?stream=espn4mx",
            servidorCanalesOnline + "izzigo.html?id=ESPN_4",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn4mx",
        ]
    }
);

MisCanales.set(
    "ESPN DISNEY",
    {
        pais: "Argentina",
        enlaces: [
            // "https://streamx-hd.com/live1.php?stream=starplus01",
            // "https://streamx-hd.com/live1.php?stream=starplus02",
            // "https://streamx-hd.com/live1.php?stream=starplus03",
            // "https://streamx-hd.com/live1.php?stream=starplus04",
            // "https://streamx-hd.com/live1.php?stream=starplus05",
            // "https://streamx-hd.com/live1.php?stream=starplus06",
            // "https://streamx-hd.com/live1.php?stream=starplus07",
            // "https://streamx-hd.com/live1.php?stream=starplus08",
            // "https://streamx-hd.com/live1.php?stream=starplus09",
            // "https://streamx-hd.com/live1.php?stream=starplus10",
            // "https://streamx-hd.com/live1.php?stream=starplus11",
            // "https://streamx-hd.com/live1.php?stream=starplus12",
            // "https://streamx-hd.com/live1.php?stream=starplus13",
            // "https://streamx-hd.com/live1.php?stream=starplus14",
            // "https://streamx-hd.com/live1.php?stream=starplus15",
            // "https://streamx-hd.com/live1.php?stream=starplus16",


            "https://streamx-hd.com/live1.php?stream=espnplus1", //17
            "https://streamx-hd.com/live1.php?stream=espnplus2", //18
            "https://streamx-hd.com/live1.php?stream=espnplus3", //19
            "https://streamx-hd.com/live1.php?stream=espnplus4", //20
            "https://streamx-hd.com/live1.php?stream=espnplus5", //21
            "https://streamx-hd.com/live1.php?stream=espnplus6", //22
            "https://streamx-hd.com/live1.php?stream=espnplus7", //23
            "https://streamx-hd.com/live1.php?stream=espnplus8", //24
            "https://streamx-hd.com/live1.php?stream=espnplus9", //25

            "https://streamx-hd.com/live1.php?stream=disney1",  //26
            "https://streamx-hd.com/live1.php?stream=disney2",  //27
            "https://streamx-hd.com/live1.php?stream=disney3",  //28
            "https://streamx-hd.com/live1.php?stream=disney4",  //29
            "https://streamx-hd.com/live1.php?stream=disney5",  //30
            "https://streamx-hd.com/live1.php?stream=disney6",  //31
            "https://streamx-hd.com/live1.php?stream=disney7",  //32
            "https://streamx-hd.com/live1.php?stream=disney8",  //33
            "https://streamx-hd.com/live1.php?stream=disney9",  //34
            "https://streamx-hd.com/live1.php?stream=disney10", //35
            "https://streamx-hd.com/live1.php?stream=disney11", //36
            "https://streamx-hd.com/live1.php?stream=disney12", //37
            "https://streamx-hd.com/live1.php?stream=disney13", //38
            "https://streamx-hd.com/live1.php?stream=disney14", //39
            "https://streamx-hd.com/live1.php?stream=disney15", //40
            "https://streamx-hd.com/live1.php?stream=disney16", //41
            "https://streamx-hd.com/live1.php?stream=disney17", //42
            "https://streamx-hd.com/live1.php?stream=disney18", //43
            "https://streamx-hd.com/live1.php?stream=disney19", //44
            "https://streamx-hd.com/live1.php?stream=disney20", //45    
        ]
    }
);

MisCanales.set(
    "ESPN",
    {
        pais: "Argentina",
        guide: "ESPN HD",
        enlaces: [
            ///Argentina
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTjJIRA",
            servidorCanalesOnline + "cvatt.html?get=RVNQTjJIRA",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTjJIRA",
            servidorCanalesOnline + "akamaizedpro.html?id=espn_arg",
            servidorCanalesOnline + "akamaized.html?id=espn_arg",
            servidorCanalesOnline + "megacable.html?id=ESPN_HD",
            servidorCanalesOnline + "megacablepro.html?id=ESPN_HD",
            // servidorCanalesOnline + "videx.html?id=espn_1",

            ///Uruguay
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTl9VWQ==",
            servidorCanalesOnline + "cvatt.html?get=RVNQTl9VWQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTl9VWQ==",
            ///Paraguay
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTjJfUFk=",
            servidorCanalesOnline + "cvatt.html?get=RVNQTjJfUFk=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTjJfUFk=",

            // "server/cvatt.html?get=RVNQTjJIRA",
            // "https://sssshhh.xyz/cvatt.html?get=RVNQTjJIRA",
            // "https://a3.115tv.site/cvatt.html?get=RVNQTjJIRA",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RVNQTjJIRA",
            servidorCanalesOnline + "latamlive.html?id=ESPN1_AR_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=espn",
            // "https://cdn.tdtcloud.xyz/ws04.php",
            servidorCanalesOnline + "aneviapro.html?id=ESPN",
            servidorCanalesOnline + "edge.html?get=ESPN",
            // servidorCanalesOnline + "tvmia.html?stream=an_ESPN",
            servidorCanalesOnline + "sensa.html?id=ESPN",
            servidorCanalesOnline + "gigared.html?id=ESPN",
            servidorCanalesOnline + "gigared_ext.html?id=ESPN",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=ESPN_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ESPN",
            // servidorCanalesOnline + "sensa_ext.html?id=ESPN",
            // "server/cvatt2_ext.html?get=RVNQTjJIRA",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RVNQTjJIRA",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RVNQTjJIRA",
            // "https://cv.photocalltv.me/cv2.php?get=RVNQTjJIRA",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RVNQTjJIRA",
            // "https://nebunexa.com/cvatt.php?get=RVNQTjJIRA",
            // "https://www.enlatele.tv/player/cv2.php?get=RVNQTjJIRA",
            // "https://a3.115tv.site/cvattde.html?get=RVNQTjJIRA",
            // servidorCanalesOnline + "cvattde.html?get=RVNQTjJIRA",
            // "server/cvattde.html?get=RVNQTjJIRA",
            // "https://sssshhh.xyz/cvattde.html?get=RVNQTjJIRA",
            // "https://futbollibrelibre.com/canales.php?stream=espn",
            // "https://streamx10.cloud/global2.php?channel=espn",
            // "https://streamx10.cloud/global1.php?channel=espn",
            // "https://streamx10.cloud/global3.php?channel=espn1", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=espn",
            // "https://la10hd.com/vivo/canales.php?stream=espn",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn",
            // "https://deportesfutgol.com/vivo/canal.php?stream=espn",
        ]
    }
);

MisCanales.set(
    "ESPN 2",
    {
        pais: "Argentina",
        guide: "ESPN 2 HD",
        enlaces: [
            ///Argentina
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTjJfQXJn",
            servidorCanalesOnline + "cvatt.html?get=RVNQTjJfQXJn",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTjJfQXJn",
            servidorCanalesOnline + "akamaizedpro.html?id=espn2_arg",
            servidorCanalesOnline + "akamaized.html?id=espn2_arg",
            servidorCanalesOnline + "megacable.html?id=ESPN_2_HD",
            servidorCanalesOnline + "megacablepro.html?id=ESPN_2_HD",
            // servidorCanalesOnline + "videx.html?id=espn_1",


            ///Uruguay
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTjJfVVk=",
            servidorCanalesOnline + "cvatt.html?get=RVNQTjJfVVk=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTjJfVVk=",
            ///Paraguay
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTl9QWQ==",
            servidorCanalesOnline + "cvatt.html?get=RVNQTl9QWQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTl9QWQ==",
            // "server/cvatt.html?get=RVNQTjJfQXJn",
            // "https://sssshhh.xyz/cvatt.html?get=RVNQTjJfQXJn",
            // "https://a3.115tv.site/cvatt.html?get=RVNQTjJfQXJn",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RVNQTjJfQXJn",
            servidorCanalesOnline + "latamlive.html?id=ESPN2_AR_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=espn2",
            // "https://cdn.tdtcloud.xyz/ws05.php",
            servidorCanalesOnline + "aneviapro.html?id=ESPN2",
            servidorCanalesOnline + "edge.html?get=ESPN_2",
            // servidorCanalesOnline + "tvmia.html?stream=bn_ESPN2",
            servidorCanalesOnline + "sensa.html?id=ESPN2",
            servidorCanalesOnline + "gigared.html?id=ESPN2",
            servidorCanalesOnline + "gigared_ext.html?id=ESPN2",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=ESPN_2_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ESPN_2",
            // servidorCanalesOnline + "sensa_ext.html?id=ESPN2",
            // "server/cvatt2_ext.html?get=RVNQTjJfQXJn",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RVNQTjJfQXJn",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RVNQTjJfQXJn",
            // "https://cv.photocalltv.me/cv2.php?get=RVNQTjJfQXJn",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RVNQTjJfQXJn",
            // "https://nebunexa.com/cvatt.php?get=RVNQTjJfQXJn",
            // "https://www.enlatele.tv/player/cv2.php?get=RVNQTjJfQXJn",
            // "https://a3.115tv.site/cvattde.html?get=RVNQTjJfQXJn",
            // servidorCanalesOnline + "cvattde.html?get=RVNQTjJfQXJn",
            // "server/cvattde.html?get=RVNQTjJfQXJn",
            // "https://sssshhh.xyz/cvattde.html?get=RVNQTjJfQXJn",
            // "https://futbollibrelibre.com/canales.php?stream=espn2",
            // "https://streamx10.cloud/global2.php?channel=espn2",
            // "https://streamx10.cloud/global3.php?channel=espn2", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=espn2",
            // "https://la10hd.com/vivo/canal.php?stream=espn2",
            // "https://la10hd.com/vivo/canales.php?stream=espn2",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn2",
            // "https://deportesfutgol.com/vivo/canal.php?stream=espn2",
        ]
    }
);

MisCanales.set(
    "ESPN 3",
    {
        pais: "Argentina",
        guide: "ESPN 3 HD",
        enlaces: [
            ///Argentina
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTjM",
            servidorCanalesOnline + "cvatt.html?get=RVNQTjM",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTjM",
            servidorCanalesOnline + "akamaizedpro.html?id=espn3_arg",
            servidorCanalesOnline + "akamaized.html?id=espn3_arg",
            servidorCanalesOnline + "megacable.html?id=ESPN_3_HD",
            servidorCanalesOnline + "megacablepro.html?id=ESPN_3_HD",
            // servidorCanalesOnline + "videx.html?id=espn_3",

            ///Uruguay
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTjNfVXktUHk=",
            servidorCanalesOnline + "cvatt.html?get=RVNQTjNfVXktUHk=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTjNfVXktUHk=",
            ///Paraguay
            // servidorCanalesOnline + "cvatt_pro.html?get=RVNQTjNfVXktUHk",
            // servidorCanalesOnline + "cvatt.html?get=RVNQTjNfVXktUHk",
            // servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTjNfVXktUHk",
            // "server/cvatt.html?get=RVNQTjM",
            // "https://sssshhh.xyz/cvatt.html?get=RVNQTjM",
            // "https://a3.115tv.site/cvatt.html?get=RVNQTjM",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RVNQTjM",
            servidorCanalesOnline + "latamlive.html?id=ESPN3_AR_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=espn3",
            // "https://cdn.tdtcloud.xyz/ws06.php",
            servidorCanalesOnline + "aneviapro.html?id=ESPN3",
            servidorCanalesOnline + "edge.html?get=ESPN_3",
            // servidorCanalesOnline + "tvmia.html?stream=an_ESPN3",
            servidorCanalesOnline + "sensa.html?id=ESPN3",
            servidorCanalesOnline + "gigared.html?id=ESPN3",
            servidorCanalesOnline + "gigared_ext.html?id=ESPN3",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=ESPN_3_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ESPN_3",
            // servidorCanalesOnline + "sensa_ext.html?id=ESPN3",
            // "server/cvatt2_ext.html?get=RVNQTjM",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RVNQTjM",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RVNQTjM",
            // "https://cv.photocalltv.me/cv2.php?get=RVNQTjM",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RVNQTjM",
            // "https://nebunexa.com/cvatt.php?get=RVNQTjM",
            // "https://www.enlatele.tv/player/cv2.php?get=RVNQTjM",
            // "https://a3.115tv.site/cvattde.html?get=RVNQTjM",
            // servidorCanalesOnline + "cvattde.html?get=RVNQTjM",
            // "server/cvattde.html?get=RVNQTjM",
            // "https://sssshhh.xyz/cvattde.html?get=RVNQTjM",
            // "https://futbollibrelibre.com/canales.php?stream=espn3",
            // "https://streamx10.cloud/global2.php?channel=espn3",
            // "https://streamx10.cloud/global3.php?channel=espn3", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=espn3",
            // "https://la10hd.com/vivo/canal.php?stream=espn3",
            // "https://la10hd.com/vivo/canales.php?stream=espn3",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn3",
        ]
    }
);

MisCanales.set(
    "ESPN 4",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTkhE",
            servidorCanalesOnline + "cvatt.html?get=RVNQTkhE",
            // "server/cvatt.html?get=RVNQTkhE",
            // "https://sssshhh.xyz/cvatt.html?get=RVNQTkhE",
            // "https://a3.115tv.site/cvatt.html?get=RVNQTkhE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RVNQTkhE",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTkhE",
            servidorCanalesOnline + "akamaizedpro.html?id=espn4_arg",
            servidorCanalesOnline + "akamaized.html?id=espn4_arg",
            servidorCanalesOnline + "megacable.html?id=ESPN_4_HD",
            servidorCanalesOnline + "megacablepro.html?id=ESPN_4_HD",
            // servidorCanalesOnline + "videx.html?id=espn_4",
            servidorCanalesOnline + "latamlive.html?id=ESPN4_AR_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=espn4",
            // "https://cdn.tdtcloud.xyz/ws10.php",
            servidorCanalesOnline + "edge.html?get=ESPN_4",
            servidorCanalesOnline + "sensa.html?id=ESPN4",
            servidorCanalesOnline + "gigared.html?id=ESPN4",
            servidorCanalesOnline + "gigared_ext.html?id=ESPN4",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=ESPN_4_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ESPN_4",
            // servidorCanalesOnline + "sensa_ext.html?id=ESPN4",
            // "server/cvatt2_ext.html?get=RVNQTkhE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RVNQTkhE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RVNQTkhE",
            // "https://cv.photocalltv.me/cv2.php?get=RVNQTkhE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RVNQTkhE",
            // "https://nebunexa.com/cvatt.php?get=RVNQTkhE",
            // "https://www.enlatele.tv/player/cv2.php?get=RVNQTkhE",
            // "https://a3.115tv.site/cvattde.html?get=RVNQTkhE",
            // servidorCanalesOnline + "cvattde.html?get=RVNQTkhE",
            // "server/cvattde.html?get=RVNQTkhE",
            // "https://sssshhh.xyz/cvattde.html?get=RVNQTkhE",
            // "https://futbollibrelibre.com/canales.php?stream=espn4",
            // "https://streamx10.cloud/global2.php?channel=espn4",
            // "https://streamx10.cloud/global3.php?channel=espn4", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=espn4",
            // "https://la10hd.com/vivo/canal.php?stream=espn4",
            // "https://la10hd.com/vivo/canales.php?stream=espn4",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn4",
        ]
    }
);

MisCanales.set(
    "ESPN 5",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RVNQTjQ=",
            servidorCanalesOnline + "cvatt.html?get=RVNQTjQ=",
            // "server/cvatt.html?get=RVNQTjQ=",
            // "https://sssshhh.xyz/cvatt.html?get=RVNQTjQ=",
            // "https://a3.115tv.site/cvatt.html?get=RVNQTjQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RVNQTjQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RVNQTjQ=",
            // servidorCanalesOnline + "videx.html?id=espn_5",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=espn5",
            // "https://cdn.tdtcloud.xyz/ws11.php",
            // "server/cvatt2_ext.html?get=RVNQTjQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RVNQTjQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RVNQTjQ=",
            // "https://cv.photocalltv.me/cv2.php?get=RVNQTjQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RVNQTjQ=",
            // "https://nebunexa.com/cvatt.php?get=RVNQTjQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=RVNQTjQ=",
            // "https://a3.115tv.site/cvattde.html?get=RVNQTjQ=",
            // servidorCanalesOnline + "cvattde.html?get=RVNQTjQ=",
            // "server/cvattde.html?get=RVNQTjQ=",
            // "https://sssshhh.xyz/cvattde.html?get=RVNQTjQ=",
            // "https://futbollibrelibre.com/canales.php?stream=espn5",
            // "https://streamx10.cloud/global2.php?channel=espn5",
            // "https://streamx10.cloud/global3.php?channel=espn5", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=espn5",
            // "https://la10hd.com/vivo/canal.php?stream=espn5",
            // "https://la10hd.com/vivo/canales.php?stream=espn5",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn5",
        ]
    }
);

MisCanales.set(
    "ESPN 6",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rm94U3BvcnRzM19VWQ==",
            servidorCanalesOnline + "cvatt.html?get=Rm94U3BvcnRzM19VWQ==",
            // "server/cvatt.html?get=Rm94U3BvcnRzM19VWQ==",
            // "https://sssshhh.xyz/cvatt.html?get=Rm94U3BvcnRzM19VWQ==",
            // "https://a3.115tv.site/cvatt.html?get=Rm94U3BvcnRzM19VWQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rm94U3BvcnRzM19VWQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rm94U3BvcnRzM19VWQ==",
            // servidorCanalesOnline + "videx.html?id=espn_6",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=espn6",
            // "https://cdn.tdtcloud.xyz/ws12.php",
            // "server/cvatt2_ext.html?get=Rm94U3BvcnRzM19VWQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rm94U3BvcnRzM19VWQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rm94U3BvcnRzM19VWQ==",
            // "https://cv.photocalltv.me/cv2.php?get=Rm94U3BvcnRzM19VWQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rm94U3BvcnRzM19VWQ==",
            // "https://nebunexa.com/cvatt.php?get=Rm94U3BvcnRzM19VWQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=Rm94U3BvcnRzM19VWQ==",
            // "https://a3.115tv.site/cvattde.html?get=Rm94U3BvcnRzM19VWQ==",
            // servidorCanalesOnline + "cvattde.html?get=Rm94U3BvcnRzM19VWQ==",
            // "server/cvattde.html?get=Rm94U3BvcnRzM19VWQ==",
            // "https://sssshhh.xyz/cvattde.html?get=Rm94U3BvcnRzM19VWQ==",
            // "https://futbollibrelibre.com/canales.php?stream=espn6",
            // "https://streamx10.cloud/global2.php?channel=espn6",
            // "https://streamx10.cloud/global3.php?channel=espn6", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=espn6",
            // "https://la10hd.com/vivo/canal.php?stream=espn6",
            // "https://la10hd.com/vivo/canales.php?stream=espn6",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn6",
        ]
    }
);

MisCanales.set(
    "ESPN 7",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rm94U3BvcnRzMl9VWQ==",
            servidorCanalesOnline + "cvatt.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "server/cvatt.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://sssshhh.xyz/cvatt.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://a3.115tv.site/cvatt.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rm94U3BvcnRzMl9VWQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rm94U3BvcnRzMl9VWQ==",
            // servidorCanalesOnline + "videx.html?id=espn_7",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=espn7",
            // "https://cdn.tdtcloud.xyz/ws13.php",
            // "server/cvatt2_ext.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://cv.photocalltv.me/cv2.php?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://nebunexa.com/cvatt.php?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://a3.115tv.site/cvattde.html?get=Rm94U3BvcnRzMl9VWQ==",
            // servidorCanalesOnline + "cvattde.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "server/cvattde.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://sssshhh.xyz/cvattde.html?get=Rm94U3BvcnRzMl9VWQ==",
            // "https://futbollibrelibre.com/canales.php?stream=espn7",
            // "https://streamx10.cloud/global2.php?channel=espn7",
            // "https://streamx10.cloud/global3.php?channel=espn7", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=espn7",
            // "https://la10hd.com/vivo/canal.php?stream=espn7",
            // "https://la10hd.com/vivo/canales.php?stream=espn7",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espn7",
        ]
    }
);

MisCanales.set(
    "ESPN Extra",
    {
        pais: "Argentina",
        guide: "ESPN EXTRA HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RXZlbnRvczFIRA",
            servidorCanalesOnline + "cvatt.html?get=RXZlbnRvczFIRA",
            // "server/cvatt.html?get=RXZlbnRvczFIRA",
            // "https://sssshhh.xyz/cvatt.html?get=RXZlbnRvczFIRA",
            // "https://a3.115tv.site/cvatt.html?get=RXZlbnRvczFIRA",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RXZlbnRvczFIRA",
            servidorCanalesOnline + "cvatt2_ext.html?get=RXZlbnRvczFIRA",
            // "server/cvatt2_ext.html?get=RXZlbnRvczFIRA",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RXZlbnRvczFIRA",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RXZlbnRvczFIRA",
            // "https://cv.photocalltv.me/cv2.php?get=RXZlbnRvczFIRA",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RXZlbnRvczFIRA",
            // "https://nebunexa.com/cvatt.php?get=RXZlbnRvczFIRA",
            // "https://www.enlatele.tv/player/cv2.php?get=RXZlbnRvczFIRA",
            // "https://a3.115tv.site/cvattde.html?get=RXZlbnRvczFIRA",
            // servidorCanalesOnline + "cvattde.html?get=RXZlbnRvczFIRA",
            // "server/cvattde.html?get=RXZlbnRvczFIRA",
            // "https://sssshhh.xyz/cvattde.html?get=RXZlbnRvczFIRA",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=espnpremium",
        ]
    }
);

MisCanales.set(
    "ESPN Deportes",
    {
        pais: "Argentina",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Espn_Deportes",
            // "https://futbollibrelibre.com/canales.php?stream=espndeportes",

            servidorCanalesOnline + "movetv.html?get=ESPN_DEPORTES",
            // "https://streamx10.cloud/global2.php?channel=espndeportes",
            // "https://streamx10.cloud/global1.php?channel=espndeportes",
            // "https://streamx10.cloud/global3.php?channel=espn_deportes", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=espndeportes",
            // "https://la10hd.com/vivo/canales.php?stream=espndeportes",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espndeportes",
        ]
    }
);

MisCanales.set(
    "ESPN Premium",
    {
        pais: "Argentina",
        guide: "ESPN Premium HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            servidorCanalesOnline + "cvatt.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "server/cvatt.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://sssshhh.xyz/cvatt.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://a3.115tv.site/cvatt.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            servidorCanalesOnline + "akamaizedpro.html?id=espnpr_arg",
            servidorCanalesOnline + "akamaized.html?id=espnpr_arg",
            servidorCanalesOnline + "megacable.html?id=ESPN_Premium_HD",
            servidorCanalesOnline + "megacablepro.html?id=ESPN_Premium_HD",
            // servidorCanalesOnline + "videx.html?id=espn_premium_ar",
            // servidorCanalesOnline + "deepcathinkpro.html?feed=76",
            servidorCanalesOnline + "latamlive.html?id=ESPNPREMIUM_ENC_LIVE",
            servidorCanalesOnline + "edge.html?get=ESPN_Premium",
            // servidorCanalesOnline + "tvmia.html?stream=c_ESPN_PREMIUM",
            servidorCanalesOnline + "sensa.html?id=ESPNPremium",
            servidorCanalesOnline + "gigared.html?id=ESPN_Premium",
            servidorCanalesOnline + "gigared_ext.html?id=ESPN_Premium",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=ESPN_PREMIUM",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ESPN_PREMIUM2",
            // servidorCanalesOnline + "playme.html?get=CH_ESPNPREMIUM",
            // servidorCanalesOnline + "sensa_ext.html?id=ESPNPremium",
            // "server/cvatt2_ext.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://cv.photocalltv.me/cv2.php?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://nebunexa.com/cvatt.php?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://www.enlatele.tv/player/cv2.php?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://a3.115tv.site/cvattde.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // servidorCanalesOnline + "cvattde.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "server/cvattde.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://sssshhh.xyz/cvattde.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE",
            // "https://futbollibrelibre.com/canales.php?stream=espnpremium",
            // "https://telegratuita.org/premium/player1.php?canal=espnpremiumar",
            // "https://rereyano.ru/player/4/76",
            // "https://cartelive.club/player/4/76",
            // "https://bolaloca.my/player/4/76",
            // "https://streamx10.cloud/global2.php?channel=espnpremium",
            // "https://streamx10.cloud/global1.php?channel=espnpremium",
            // "https://streamx10.cloud/global3.php?channel=espn_premium", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=espnpremium",
            // "https://la10hd.com/vivo/canales.php?stream=espnpremium",
            servidorCanalesOnline + "jjfutbol2pro.html?name=espnpremium",
            // "https://fullchannels.online/canales.php?id=espnpremium-op3",
        ]
    }
);

MisCanales.set(
    "Caracol TV",
    {
        pais: "Colombia",
        enlaces: [
            // servidorCanalesOnline + "tdtcloudpro.html?stream=caracol",
            // "https://cdn.tdtcloud.xyz/caracolhd201x.php",
            // "https://172m3u8.netlify.app/?id=Caracol",
            // "https://172m3u8.netlify.app/?id=Caracol2",
            // servidorCanalesOnline + "cobo.html?id=CaracolTVHD",
            // servidorCanalesOnline + "m3u8.html?stream=Caracol_COL",
            // "https://streamx10.cloud/global2.php?channel=caracoltv",
            // "https://streamx10.cloud/global1.php?channel=caracoltv",
            // "https://streamx10.cloud/global3.php?channel=caracoltv", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=caracol",
            // "https://la10hd.com/vivo/canales.php?stream=caracol",
            servidorCanalesOnline + "jjfutbol2pro.html?name=caracol",
        ]
    }
);

MisCanales.set(
    "Caracol HD2",
    {
        pais: "Colombia",
        enlaces: [
            // servidorCanalesOnline + "m3u8.html?stream=Caracol_HD2_COL",
        ]
    }
);

MisCanales.set(
    "City TV",
    {
        pais: "Colombia",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=City_TV",
            // servidorCanalesOnline + "m3u8.html?stream=City_TV_Bogota",
            servidorCanalesOnline + "tvmia.html?stream=bn_CityTV_Bogota1",
            // "https://25e72v47aq90r.dynamicimpound.net/embed/6powr48polz3kl",
            // "https://www.youtube.com/embed/Xm76djyYF9U?autoplay=1&mute=0&enablejsapi=1&origin=https%3A%2F%2Fcitytv.eltiempo.com",
        ]
    }
);

MisCanales.set(
    "VePlus",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=veplus",
            servidorCanalesOnline + "akamaized.html?id=veplus",
            servidorCanalesOnline + "sensa.html?id=VePlus",
            // servidorCanalesOnline + "sensa_ext.html?id=VePlus",
        ]
    }
);

MisCanales.set(
    "NTN24",
    {
        pais: "Colombia",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=NTN24",
            servidorCanalesOnline + "tvmia.html?stream=bn_NTN24_COL",
        ]
    }
);

MisCanales.set(
    "Señal Colombia",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=bn_Señal_Colombia",
            // servidorCanalesOnline + "m3u8.html?stream=Senal_Colombia",
        ]
    }
);

MisCanales.set(
    "BUGA TV",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_BUGA_TV",
        ]
    }
);

MisCanales.set(
    "Trece CO",
    {
        pais: "Colombia",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Trece",
            servidorCanalesOnline + "tvmia.html?stream=bn_Trece_COL",
            "https://player.cdnmedia.tv/embed/daa9651b/autoplay=true",
            "https://player.instantvideocloud.net/#/embed/daa9651b/autoplay=true",
        ]
    }
);

MisCanales.set(
    "Red Más",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Red_Más_COL",
        ]
    }
);

MisCanales.set(
    "CANAL TRO",
    {
        pais: "Colombia",
        enlaces: [
            "https://player.cdnmedia.tv/embed/00d77fad/autoplay=true",
        ]
    }
);

MisCanales.set(
    "Interconnect TV",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "fetch.html?stream=Interconnect_TV_COL",
            servidorCanalesOnline + "m3u8.html?stream=Interconnect_TV_COL",
        ]
    }
);

MisCanales.set(
    "CaliTV",
    {
        pais: "Colombia",
        enlaces: [
            // servidorCanalesOnline + "m3u8.html?stream=CaliTV_COL",
            // servidorCanalesOnline + "m3u8.html?stream=CaliTV2_COL",
            servidorCanalesOnline + "fetch.html?stream=CaliTV",

        ]
    }
);

MisCanales.set(
    "Teleantioquia",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=bn_Teleantioquia",
        ]
    }
);

MisCanales.set(
    "Telecaribe",
    {
        pais: "Colombia",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Telecaribe",
            servidorCanalesOnline + "tvmia.html?stream=bn_Telecaribe_COL",
            "https://player.cdnmedia.tv/embed/180720d1/autoplay=true",
        ]
    }
);

MisCanales.set(
    "Telecaribe Plus",
    {
        pais: "Colombia",
        enlaces: [
            "https://player.cdnmedia.tv/embed/7b249b9d/autoplay=true",
        ]
    }
);

MisCanales.set(
    "Mi Gente TV",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Mi_Gente_TV_COL",
        ]
    }
);

MisCanales.set(
    "Bum Televisión",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Bum_Television_COL",
        ]
    }
);

MisCanales.set(
    "Liga 1 MAX",
    {
        pais: "Perú",
        enlaces: [
            // "https://futbollibrelibre.com/canales.php?stream=liga1max",
            // "https://streamx10.cloud/global2.php?channel=liga1max",
            // "https://streamx10.cloud/global1.php?channel=liga1max",
            // "https://streamx10.cloud/global3.php?channel=l1max", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=liga1max",
            // "https://la10hd.com/vivo/canales.php?stream=liga1max",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=liga1max",
            // "https://fullchannels.online/canales.php?id=liga1max",
        ]
    }
);

MisCanales.set(
    "Milenio",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Milenio_MX",
        ]
    }
);

MisCanales.set(
    "Estrella TV",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=EstrellaTV_MX",
        ]
    }
);

MisCanales.set(
    "adn40",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=adn40_MX",
        ]
    }
);

MisCanales.set(
    "FreeTV Banda",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Banda",
        ]
    }
);

MisCanales.set(
    "FreeTV Accion",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Accion",
        ]
    }
);

MisCanales.set(
    "FreeTV Terror",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Terror",
        ]
    }
);

MisCanales.set(
    "FreeTV Drama",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Drama",
        ]
    }
);

MisCanales.set(
    "FreeTV Estelar",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Estelar",
        ]
    }
);

MisCanales.set(
    "FreeTV Familia",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Familia",
        ]
    }
);

MisCanales.set(
    "FreeTV Clásico",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Clasico",
        ]
    }
);

MisCanales.set(
    "FreeTV Live",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Live",
        ]
    }
);

MisCanales.set(
    "FreeTV Hit",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Hit",
        ]
    }
);

MisCanales.set(
    "FreeTV Saber Más",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "FreeTV.html?id=Saber_Mas",
        ]
    }
);

MisCanales.set(
    "Azteca 7",
    {
        pais: "México",
        enlaces: [
            // servidorCanalesOnline + "m3u8.html?stream=Vall_AZTECA_7_MX",
            // "https://streamx10.cloud/global2.php?channel=azteca7",
            // "https://streamx10.cloud/global1.php?channel=azteca7",
            // "https://streamx10.cloud/global3.php?channel=azteca7", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=azteca7",
            // "https://la10hd.com/vivo/canales.php?stream=azteca7",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=azteca7",
            // "https://fullchannels.online/canales.php?id=azteca7-op2",
        ]
    }
);

MisCanales.set(
    "Azteca uno",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Azteca_Uno_Menos_MX",
            // "https://fullchannels.online/canales.php?id=azteca",
        ]
    }
);

MisCanales.set(
    "Azteca Internacional",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=aztecainternacionalhd",
            servidorCanalesOnline + "akamaized.html?id=aztecainternacionalhd",
            servidorCanalesOnline + "m3u8.html?stream=Azteca_Internacional",
            servidorCanalesOnline + "m3u8.html?stream=Azteca_Internacional_MX",
        ]
    }
);

MisCanales.set(
    "Azteca Corazón",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=aztecacorazon",
            servidorCanalesOnline + "akamaized.html?id=aztecacorazon",
            // "https://172m3u8.netlify.app/?id=Azteca_Corazon",
            servidorCanalesOnline + "m3u8.html?stream=Azteca_Corazon",
            servidorCanalesOnline + "m3u8.html?stream=Azteca_Corazon2",
            servidorCanalesOnline + "m3u8.html?stream=Azteca_Corazon3",
        ]
    }
);

MisCanales.set(
    "Azteca Cinema",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=aztecacinemahd",
            servidorCanalesOnline + "akamaized.html?id=aztecacinemahd",
        ]
    }
);

MisCanales.set(
    "Azteca Clic",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=aztecaclichd",
            servidorCanalesOnline + "akamaized.html?id=aztecaclichd",
            servidorCanalesOnline + "m3u8.html?stream=Azteca_Clic",
        ]
    }
);

MisCanales.set(
    "TV Azteca Deportes",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=aztecadeporteshd",
            servidorCanalesOnline + "akamaized.html?id=aztecadeporteshd",
            // "https://streamx10.cloud/global2.php?channel=azteca_deportes",
            // "https://streamx10.cloud/global1.php?channel=azteca_deportes",
            // "https://streamx10.cloud/global3.php?channel=azteca_deportes", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=azteca_deportes",
            // "https://la10hd.com/vivo/canales.php?stream=azteca_deportes",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=azteca_deportes",
        ]
    }
);

MisCanales.set(
    "Canal Once MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_Once_MX",
        ]
    }
);

MisCanales.set(
    "Canal 14 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal14_MX",
        ]
    }
);

MisCanales.set(
    "Canal 33 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal33_MX",
        ]
    }
);

MisCanales.set(
    "Canal 44C",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal44C_MX",
        ]
    }
);

MisCanales.set(
    "Canal 66 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal66_MX",
        ]
    }
);

MisCanales.set(
    "Canal 10 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal10_MX",
        ]
    }
);

MisCanales.set(
    "USA NETWORK",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VVNBX05ldHdvcms=",
            servidorCanalesOnline + "cvatt.html?get=VVNBX05ldHdvcms=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VVNBX05ldHdvcms=",
            servidorCanalesOnline + "akamaizedpro.html?id=usamexico",
            servidorCanalesOnline + "akamaized.html?id=usamexico",
            servidorCanalesOnline + "gigared.html?id=USA_Network",
            servidorCanalesOnline + "gigared_ext.html?id=USA_Network",
            // servidorCanalesOnline + "cobo.html?id=USANETWORK",
            servidorCanalesOnline + "extension.html?get=USA_NETWORK",
        ]
    }
);

MisCanales.set(
    "Usa Network (SYFY)",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=syfy",
        ]
    }
);

MisCanales.set(
    "NEOX",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Neox",
            servidorCanalesOnline + "zapitvpro.html?id=neox",
            // servidorCanalesOnline + "tvmia.html?stream=sn_NEOX",
            servidorCanalesOnline + "mpd_es.html?id=NEOX",
        ]
    }
);

MisCanales.set(
    "NOVA",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=NOVA",
            servidorCanalesOnline + "zapitvpro.html?id=nova",
            // servidorCanalesOnline + "tvmia.html?stream=sn_NOVA",
            servidorCanalesOnline + "mpd_es.html?id=NOVA",
        ]
    }
);

MisCanales.set(
    "ODISEA",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=odisea",
            // "https://172m3u8.netlify.app/?id=ODISEA",
            servidorCanalesOnline + "mpd_es.html?id=ODISEA",
        ]
    }
);

MisCanales.set(
    "FDF",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=FDF",
            servidorCanalesOnline + "zapitvpro.html?id=fdf",
            servidorCanalesOnline + "tvmia.html?stream=sn_FDF",
            servidorCanalesOnline + "mpd_es.html?id=FDF",
        ]
    }
);

MisCanales.set(
    "Energy",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Energy",
            servidorCanalesOnline + "zapitvpro.html?id=energy",
            // servidorCanalesOnline + "tvmia.html?stream=sn_Energy",
        ]
    }
);

MisCanales.set(
    "Hollywood",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=canalhollywood",
        ]
    }
);

MisCanales.set(
    "Calle 13",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=calle13",
        ]
    }
);

MisCanales.set(
    "Xtrm",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=xtrm",
        ]
    }
);

MisCanales.set(
    "SundanceTV",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=sundancetv",
        ]
    }
);

MisCanales.set(
    "Canal cocina",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=canalcocina",
        ]
    }
);

MisCanales.set(
    "Paramount Network ES",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=No_se",
            servidorCanalesOnline + "tvmia.html?stream=sn_Paramount_Network",
        ]
    }
);

MisCanales.set(
    "GOLPERU",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_Gol_Peru",
            // "https://futbollibrelibre.com/canales.php?stream=golperu",
            // "https://streamx10.cloud/global2.php?channel=golperu",
            // "https://streamx10.cloud/global1.php?channel=golperu",
            // "https://streamx10.cloud/global3.php?channel=golperu", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=golperu",
            // "https://la10hd.com/vivo/canales.php?stream=golperu",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=golperu",
        ]
    }
);

MisCanales.set(
    "GOLTV",
    {
        pais: "Uruguay",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=bn_GOLTV",
            // "https://futbollibrelibre.com/canales.php?stream=goltv",
            // "https://streamx10.cloud/global2.php?channel=goltv",
            // "https://streamx10.cloud/global1.php?channel=goltv",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=goltv",
        ]
    }
);

MisCanales.set(
    "Tigo Sports",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Tigo_Sport_Paraguay",
        ]
    }
);

MisCanales.set(
    "Tigo Sports Plus",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Tigo_Sport_Plus_Paraguay",
        ]
    }
);

MisCanales.set(
    "FOX SPORTS",
    {
        pais: "Argentina",
        guide: "FOX SPORTS HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rm94U3BvcnRz",
            servidorCanalesOnline + "cvatt.html?get=Rm94U3BvcnRz",
            // "server/cvatt.html?get=Rm94U3BvcnRz",
            // "https://sssshhh.xyz/cvatt.html?get=Rm94U3BvcnRz",
            // "https://a3.115tv.site/cvatt.html?get=Rm94U3BvcnRz",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rm94U3BvcnRz",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rm94U3BvcnRz",
            servidorCanalesOnline + "akamaizedpro.html?id=foxsports_arg",
            servidorCanalesOnline + "akamaized.html?id=foxsports_arg",
            servidorCanalesOnline + "megacable.html?id=Fox_Sports_HD",
            servidorCanalesOnline + "megacablepro.html?id=Fox_Sports_HD",
            // servidorCanalesOnline + "videx.html?id=fox_sports_ar",
            servidorCanalesOnline + "latamlive.html?id=FOX_SPORTS_HD_AR_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=foxsports1ar",
            // "https://cdn.tdtcloud.xyz/ws17.php",
            servidorCanalesOnline + "aneviapro.html?id=FOX_Sports_HD",
            servidorCanalesOnline + "edge.html?get=Fox_Sports",
            // servidorCanalesOnline + "tvmia.html?stream=an_FOX_SPORTS",
            servidorCanalesOnline + "sensa.html?id=FoxSports1",
            servidorCanalesOnline + "gigared.html?id=Fox_Sports",
            servidorCanalesOnline + "gigared_ext.html?id=Fox_Sports",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=FOX_SPORTS_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Fox_Sports",
            // servidorCanalesOnline + "sensa_ext.html?id=FoxSports1",
            // "server/cvatt2_ext.html?get=Rm94U3BvcnRz",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rm94U3BvcnRz",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rm94U3BvcnRz",
            // "https://cv.photocalltv.me/cv2.php?get=Rm94U3BvcnRz",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rm94U3BvcnRz",
            // "https://nebunexa.com/cvatt.php?get=Rm94U3BvcnRz",
            // "https://www.enlatele.tv/player/cv2.php?get=Rm94U3BvcnRz",
            // "https://a3.115tv.site/cvattde.html?get=Rm94U3BvcnRz",
            // servidorCanalesOnline + "cvattde.html?get=Rm94U3BvcnRz",
            // "server/cvattde.html?get=Rm94U3BvcnRz",
            // "https://sssshhh.xyz/cvattde.html?get=Rm94U3BvcnRz",
            // "https://futbollibrelibre.com/canales.php?stream=foxsports",
            // "https://streamx10.cloud/global2.php?channel=foxsports",
            // "https://streamx10.cloud/global1.php?channel=foxsports",
            // "https://streamx10.cloud/global3.php?channel=fox1ar", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=foxsports",
            // "https://la10hd.com/vivo/canales.php?stream=foxsports",
            servidorCanalesOnline + "jjfutbol2pro.html?name=foxsports",
            // "https://fullchannels.online/canales.php?id=foxsports-op3",
        ]
    }
);

MisCanales.set(
    "FOX SPORTS 2",
    {
        pais: "Argentina",
        guide: "FOX SPORTS 2 HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rm94U3BvcnRzMkhE",
            servidorCanalesOnline + "cvatt.html?get=Rm94U3BvcnRzMkhE",
            // "server/cvatt.html?get=Rm94U3BvcnRzMkhE",
            // "https://sssshhh.xyz/cvatt.html?get=Rm94U3BvcnRzMkhE",
            // "https://a3.115tv.site/cvatt.html?get=Rm94U3BvcnRzMkhE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rm94U3BvcnRzMkhE",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rm94U3BvcnRzMkhE",
            servidorCanalesOnline + "akamaizedpro.html?id=foxsports2_arg",
            servidorCanalesOnline + "akamaized.html?id=foxsports2_arg",
            servidorCanalesOnline + "megacable.html?id=Fox_Sports_2_HD",
            servidorCanalesOnline + "megacablepro.html?id=Fox_Sports_2_HD",
            // servidorCanalesOnline + "videx.html?id=fox_sports_2_ar",
            servidorCanalesOnline + "latamlive.html?id=FOX_SPORTS2_HD_AR_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=foxsports2ar",
            // "https://cdn.tdtcloud.xyz/ws18.php",
            servidorCanalesOnline + "edge.html?get=Fox_Sports_2",
            // servidorCanalesOnline + "tvmia.html?stream=an_FOX_SPORTS2",
            servidorCanalesOnline + "sensa.html?id=FoxSports2",
            servidorCanalesOnline + "aneviapro.html?id=fox2ar",
            servidorCanalesOnline + "gigared.html?id=Fox_Sports_2",
            servidorCanalesOnline + "gigared_ext.html?id=Fox_Sports_2",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Fox_Sports_2_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Fox_Sports_2",
            // servidorCanalesOnline + "sensa_ext.html?id=FoxSports2",
            // "server/cvatt2_ext.html?get=Rm94U3BvcnRzMkhE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rm94U3BvcnRzMkhE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rm94U3BvcnRzMkhE",
            // "https://cv.photocalltv.me/cv2.php?get=Rm94U3BvcnRzMkhE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rm94U3BvcnRzMkhE",
            // "https://nebunexa.com/cvatt.php?get=Rm94U3BvcnRzMkhE",
            // "https://www.enlatele.tv/player/cv2.php?get=Rm94U3BvcnRzMkhE",
            // "https://a3.115tv.site/cvattde.html?get=Rm94U3BvcnRzMkhE",
            // servidorCanalesOnline + "cvattde.html?get=Rm94U3BvcnRzMkhE",
            // "server/cvattde.html?get=Rm94U3BvcnRzMkhE",
            // "https://sssshhh.xyz/cvattde.html?get=Rm94U3BvcnRzMkhE",
            // "https://futbollibrelibre.com/canales.php?stream=foxsports2",
            // "https://streamx10.cloud/global2.php?channel=fox2ar",
            // "https://streamx10.cloud/global1.php?channel=fox2ar",
            // "https://streamx10.cloud/global3.php?channel=fox2ar", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=foxsports2",
            // "https://la10hd.com/vivo/canales.php?stream=foxsports2",
            servidorCanalesOnline + "jjfutbol2pro.html?name=foxsports2",
            // "https://fullchannels.online/canales.php?id=foxsports2-op3",
        ]
    }
);

MisCanales.set(
    "FOX SPORTS 3",
    {
        pais: "Argentina",
        guide: "FOX Sports 3 HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rm94U3BvcnRzM0hE",
            servidorCanalesOnline + "cvatt.html?get=Rm94U3BvcnRzM0hE",
            // "server/cvatt.html?get=Rm94U3BvcnRzM0hE",
            // "https://sssshhh.xyz/cvatt.html?get=Rm94U3BvcnRzM0hE",
            // "https://a3.115tv.site/cvatt.html?get=Rm94U3BvcnRzM0hE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rm94U3BvcnRzM0hE",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rm94U3BvcnRzM0hE",
            servidorCanalesOnline + "akamaizedpro.html?id=foxsports3_arg",
            servidorCanalesOnline + "akamaized.html?id=foxsports3_arg",
            servidorCanalesOnline + "megacable.html?id=Fox_Sports_3_HD",
            servidorCanalesOnline + "megacablepro.html?id=Fox_Sports_3_HD",
            // servidorCanalesOnline + "videx.html?id=fox_sports_3_ar",
            servidorCanalesOnline + "latamlive.html?id=FOX_SPORTS3_AR_ENC_LIVE",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=foxsports3ar",
            // "https://cdn.tdtcloud.xyz/ws19.php",
            servidorCanalesOnline + "edge.html?get=Fox_Sports_3",
            servidorCanalesOnline + "sensa.html?id=FoxSports3",
            servidorCanalesOnline + "aneviapro.html?id=fox3ar",
            servidorCanalesOnline + "gigared.html?id=Fox_Sports_3",
            servidorCanalesOnline + "gigared_ext.html?id=Fox_Sports_3",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Fox_Sports_3_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Fox_Sports_3",
            // servidorCanalesOnline + "sensa_ext.html?id=FoxSports3",
            // "server/cvatt2_ext.html?get=Rm94U3BvcnRzM0hE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rm94U3BvcnRzM0hE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rm94U3BvcnRzM0hE",
            // "https://cv.photocalltv.me/cv2.php?get=Rm94U3BvcnRzM0hE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rm94U3BvcnRzM0hE",
            // "https://nebunexa.com/cvatt.php?get=Rm94U3BvcnRzM0hE",
            // "https://www.enlatele.tv/player/cv2.php?get=Rm94U3BvcnRzM0hE",
            // "https://a3.115tv.site/cvattde.html?get=Rm94U3BvcnRzM0hE",
            // servidorCanalesOnline + "cvattde.html?get=Rm94U3BvcnRzM0hE",
            // "server/cvattde.html?get=Rm94U3BvcnRzM0hE",
            // "https://sssshhh.xyz/cvattde.html?get=Rm94U3BvcnRzM0hE",
            // "https://futbollibrelibre.com/canales.php?stream=foxsports3",
            // "https://streamx10.cloud/global2.php?channel=fox3ar",
            // "https://streamx10.cloud/global3.php?channel=fox3ar", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=fox3ar",
            // "https://la10hd.com/vivo/canal.php?stream=foxsports3",
            // "https://la10hd.com/vivo/canales.php?stream=foxsports3",
            servidorCanalesOnline + "jjfutbol2pro.html?name=foxsports3",
            // "https://fullchannels.online/canales.php?id=foxsports3-op3",
        ]
    }
);

MisCanales.set(
    "FOX SPORTS Premium",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=foxsportsprhd",
            servidorCanalesOnline + "akamaized.html?id=foxsportsprhd",
            // servidorCanalesOnline + "cobo.html?id=FOX_Sports_Premium",
            // "https://streamx10.cloud/global2.php?channel=foxsportspremium",
            // "https://streamx10.cloud/global1.php?channel=foxsportspremium",
            // "https://streamx10.cloud/global3.php?channel=foxsportspremium", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=foxsportspremium",
            // "https://la10hd.com/vivo/canales.php?stream=foxsportspremium",
            servidorCanalesOnline + "flypro.html?id=foxpremiumx",
            servidorCanalesOnline + "jjfutbol2pro.html?name=foxsportspremium",
            // "https://fullchannels.online/canales.php?id=foxpremium",
            // "https://thedaddy.to/embed/stream-830.php",
        ]
    }
);

MisCanales.set(
    "GOLF TV AMÉRICA",
    {
        pais: "Estados Unidos",
        guide: "Golf Channel HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=R29sZl9DaGFubmVs",
            servidorCanalesOnline + "cvatt.html?get=R29sZl9DaGFubmVs",
            servidorCanalesOnline + "cvatt2_ext.html?get=R29sZl9DaGFubmVs",
            servidorCanalesOnline + "edge.html?get=Golf_Channel",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Golf_Channel_HD",
            servidorCanalesOnline + "tvmia.html?stream=an_GOLF_TV_AMÉRICA",
        ]
    }
);

MisCanales.set(
    "FOX SPORTS MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=foxsportshd",
            servidorCanalesOnline + "akamaized.html?id=foxsportshd",
            // "https://streamx10.cloud/global2.php?channel=foxsportsmx",
            // "https://streamx10.cloud/global1.php?channel=foxsportsmx",
            // "https://streamx10.cloud/global3.php?channel=foxsportsmx", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=foxsportsmx",
            // "https://la10hd.com/vivo/canales.php?stream=foxsportsmx",
            servidorCanalesOnline + "flypro.html?id=fox1mx",
            servidorCanalesOnline + "jjfutbol2pro.html?name=foxsportsmx",
        ]
    }
);

MisCanales.set(
    "FOX SPORTS 2 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=foxsports2hd",
            servidorCanalesOnline + "akamaized.html?id=foxsports2hd",
            // "https://streamx10.cloud/global2.php?channel=foxsports2mx",
            // "https://streamx10.cloud/global1.php?channel=foxsports2mx",
            servidorCanalesOnline + "flypro.html?id=fox2mx",
            servidorCanalesOnline + "jjfutbol2pro.html?name=foxsports2mx",
        ]
    }
);

MisCanales.set(
    "FOX SPORTS 3 MX",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=foxsports3hd",
            servidorCanalesOnline + "akamaized.html?id=foxsports3hd",
            // "https://streamx10.cloud/global2.php?channel=foxsports3mx",
            // "https://streamx10.cloud/global1.php?channel=foxsports3mx",
            servidorCanalesOnline + "flypro.html?id=fox3mx",
            servidorCanalesOnline + "jjfutbol2pro.html?name=foxsports3mx",
        ]
    }
);

MisCanales.set(
    "LaLiga TV",
    {
        pais: "España",
        enlaces: [
            // "https://streamx10.cloud/global2.php?channel=laligahypermotion",
            // "https://streamx10.cloud/global1.php?channel=laligahypermotion",
            // "cobo.html?id=laligahyp",
            // "https://candler.beauty/cobo.html?id=laligatv",
        ]
    }
);

MisCanales.set(
    "Movistar Deportes",
    {
        pais: "Argentina",
        enlaces: [
            // "https://futbollibrelibre.com/canales.php?stream=movistar",
            // "https://streamx10.cloud/global2.php?channel=movistar_deportes_peru",
            // "https://streamx10.cloud/global1.php?channel=movistar_deportes_peru",
            // "https://streamx10.cloud/global3.php?channel=movistar_deportes_peru", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=movistar",
            // "https://la10hd.com/vivo/canales.php?stream=movistar",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=movistar",
        ]
    }
);

MisCanales.set(
    "Movistar LaLiga",
    {
        pais: "España",
        enlaces: [
            // "https://streamx10.cloud/global2.php?channel=movistarlaliga",
            // "https://streamx10.cloud/global1.php?channel=movistarlaliga",
            // "https://streamx10.cloud/global3.php?channel=movistarlaliga", //No funciona en la apk
            // servidorCanalesOnline + "jjfutbol2pro.html?name=movistarlaliga",
        ]
    }
);

MisCanales.set(
    "Liga de Campeones",
    {
        pais: "España",
        enlaces: [
            // "https://streamx10.cloud/global2.php?channel=movistarligadecampeones",
            // "https://streamx10.cloud/global1.php?channel=movistarligadecampeones",
            // "https://streamx10.cloud/global3.php?channel=movistarligadecampeones", //No funciona en la apk
        ]
    }
);

MisCanales.set(
    "Liga de Campeones 2",
    {
        pais: "España",
        enlaces: [
            // "https://streamx10.cloud/global2.php?channel=movistarligadecampeones2",
            // "https://streamx10.cloud/global3.php?channel=movistarligadecampeones2", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=movistarligadecampeones2",
        ]
    }
);

MisCanales.set(
    "Liga de Campeones 3",
    {
        pais: "España",
        enlaces: [
            // "https://streamx10.cloud/global2.php?channel=movistarligadecampeones3",
            // "https://streamx10.cloud/global3.php?channel=movistarligadecampeones3", //No funciona en la apk
            // "https://streamx10.cloud/global1.php?channel=movistarligadecampeones3",
        ]
    }
);

MisCanales.set(
    "Peacock 1",
    {
        pais: "Estados Unidos",
        enlaces: [
            // "https://streamx10.cloud/global2.php?channel=peacock1",
            // "https://streamx10.cloud/global1.php?channel=peacock1",
        ]
    }
);

MisCanales.set(
    "Peacock 2",
    {
        pais: "Estados Unidos",
        enlaces: [
            // "https://streamx10.cloud/global2.php?channel=peacock2",
            // "https://streamx10.cloud/global1.php?channel=peacock2",
        ]
    }
);

MisCanales.set(
    "ECDF",
    {
        pais: "Ecuador",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_ECDF",
            // "https://streamx10.cloud/global2.php?channel=ecdf",
            // "https://streamx10.cloud/global1.php?channel=ecdf",
            // "https://streamx10.cloud/global3.php?channel=ecdf", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=ecdf",
            // "https://la10hd.com/vivo/canales.php?stream=ecdf",
            servidorCanalesOnline + "jjfutbol2pro.html?name=ecdf",
        ]
    }
);

MisCanales.set(
    "ECDF LigaPro",
    {
        pais: "Ecuador",
        enlaces: [
            // "https://streamx10.cloud/global2.php?channel=eventos2",
            // "https://streamx10.cloud/global1.php?channel=eventos2",
            // "https://streamx10.cloud/global3.php?channel=eventos2", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=ecdf_ligapro",
            // "https://la10hd.com/vivo/canales.php?stream=ecdf_ligapro",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=ecdf_ligapro",
        ]
    }
);

MisCanales.set(
    "TUDN",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "flypro.html?id=tudnmx",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=tudnmx",
            // "https://cdn.tdtcloud.xyz/ws20.php",
            // "https://streamx10.cloud/global2.php?channel=tudn_usa",
            // "https://streamx10.cloud/global1.php?channel=tudn_usa",
            // "https://streamx10.cloud/global3.php?channel=tudn_usa", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=tudn",
            // "https://la10hd.com/vivo/canales.php?stream=tudn",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=tudn",
            // "https://la10hd.com/vivo/canal.php?stream=tudn_mx",
            servidorCanalesOnline + "jjfutbol2pro.html?name=tudn_mx",
            // "https://thedaddy.to/embed/stream-66.php",
        ]
    }
);

MisCanales.set(
    "ATV",
    {
        pais: "Perú",
        enlaces: [
            servidorCanalesOnline + "tvmia.html?stream=an_ATV",
            //  "https://la10hd.com/vivo/canal.php?stream=atv",
            //  "https://la10hd.com/vivo/canales.php?stream=atv",
            //  servidorCanalesOnline + "jjfutbol2pro.html?name=atv",
        ]
    }
);

MisCanales.set(
    "RCN",
    {
        pais: "Colombia",
        enlaces: [
            // servidorCanalesOnline + "fetch.html?stream=rcn",
            // servidorCanalesOnline + "fetch2.html?stream=rcn",
            // servidorCanalesOnline + "tdtcloudpro.html?stream=rcn2",
            // "https://cdn.tdtcloud.xyz/ws16.php",
            // "m3u8.html?stream=RCN_COL",
            servidorCanalesOnline + "tvmia.html?stream=an_RCN",
            // "https://streamx10.cloud/global2.php?channel=rcnco",
            // "https://streamx10.cloud/global1.php?channel=rcnco",
            // "https://streamx10.cloud/global3.php?channel=rcnco", //No funciona en la apk
            // "https://la10hd.com/vivo/canales.php?stream=eventos",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=eventos",
        ]
    }
);

MisCanales.set(
    "RCN MÁS",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=RCNMAS1",
            servidorCanalesOnline + "m3u8.html?stream=RCNMAS2",
        ]
    }
);

MisCanales.set(
    "RCN Novelas",
    {
        pais: "Colombia",
        enlaces: [
            servidorCanalesOnline + "edge.html?get=RCN_Novelas",
        ]
    }
);

MisCanales.set(
    "Win Sports",
    {
        pais: "Colombia",
        enlaces: [
            // servidorCanalesOnline + "tdtcloudpro.html?stream=winsports",            
            // "https://cdn.tdtcloud.xyz/ws02.php",
            // "https://172m3u8.netlify.app/?id=Win_Sports",
            // "https://172m3u8.netlify.app/?id=Win_Sports_2",
            // "https://streamx10.cloud/global2.php?channel=winsports",
            // "https://streamx10.cloud/global1.php?channel=winsports",
            // "https://streamx10.cloud/global3.php?channel=winsports", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=winsports",
            // "https://la10hd.com/vivo/canales.php?stream=winsports",
            servidorCanalesOnline + "jjfutbol2pro.html?name=winsports",
            // "https://fullchannels.online/canales.php?id=winsports",
        ]
    }
);

MisCanales.set(
    "Win Sports +",
    {
        pais: "Colombia",
        enlaces: [
            // servidorCanalesOnline + "tdtcloudpro.html?stream=winsportsplus",
            // "https://cdn.tdtcloud.xyz/ws01.php",
            // servidorCanalesOnline + "tvmia.html?stream=bn_WINPLUS",
            // "https://streamx10.cloud/global2.php?channel=winsportsplus",
            // "https://streamx10.cloud/global1.php?channel=winsportsplus",
            // "https://streamx10.cloud/global2.php?channel=winplusonline1",
            // "https://streamx10.cloud/global1.php?channel=winplusonline1",
            // "https://streamx10.cloud/global2.php?channel=winplus2",
            // "https://streamx10.cloud/global1.php?channel=winplus2",
            // "https://streamx10.cloud/global2.php?channel=winplus",
            // "https://streamx10.cloud/global1.php?channel=winplus",
            // "https://streamx10.cloud/global3.php?channel=winplus", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=winsportsplus",
            // "https://la10hd.com/vivo/canales.php?stream=winsportsplus",
            servidorCanalesOnline + "jjfutbol2pro.html?name=winsportsplus",
        ]
    }
);

MisCanales.set(
    "ITV Deportes",
    {
        pais: "Reino Unido",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=ITV_DEPORTES",
        ]
    }
);

MisCanales.set(
    "Eurosport 1 ES",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=eurosport_1_hd",
            // servidorCanalesOnline + "tvmia.html?stream=sn_EUROSPORTS1",
            // "https://streamx10.cloud/global2.php?channel=eurosports1_es",
            // "https://streamx10.cloud/global1.php?channel=eurosports1_es",
            // "https://streamx10.cloud/global3.php?channel=eurosports1_es", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=eurosports1_es",
            // "https://la10hd.com/vivo/canales.php?stream=eurosports1_es",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=eurosports1_es",
        ]
    }
);

MisCanales.set(
    "Eurosport 2 ES",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=eurosport_2_hd",
            // "https://streamx10.cloud/global2.php?channel=eurosports2_es",
            // "https://streamx10.cloud/global1.php?channel=eurosports2_es",
            // "https://streamx10.cloud/global3.php?channel=eurosports2_es", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=eurosports2_es",
            // "https://la10hd.com/vivo/canales.php?stream=eurosports2_es",
            // servidorCanalesOnline + "jjfutbol2pro.html?name=eurosports2_es",
        ]
    }
);

MisCanales.set(
    "DAZN F1",
    {
        pais: "España",
        enlaces: [
            // servidorCanalesOnline + "videx.html?id=dazn_f1",
            // servidorCanalesOnline + "deepcathinkpro.html?feed=60",
            // servidorCanalesOnline + "vodgc.html?id=dazn_f1",
            // servidorCanalesOnline + "hls.html?stream=dazn_f1",
            // "https://deportelibres.shop/total/stream-537.php",
            // servidorCanalesOnline + "extension.html?get=DAZN_FORMULA1",
            // "https://199m3u8.netlify.app/?id=Dazn_F1",
            // "https://miztv.top/total/stream-537.php",
            // "https://rereyano.ru/player/2/60",
            // "https://cartelive.club/player/2/60",
            // "https://bolaloca.my/player/2/60",
            // "https://enz.gdplayertv.to/live-tv/dazn-f1/?alt=0&embed=1",
            // "https://enz.gdplayertv.to/live-tv/dazn-f1/?embed=1",
            // "https://antenaplanet.store/daznf1.php",
            // "https://deporte-libre.link/en-vivo-online/dazn-formula-1-es/embed.php",
            // servidorCanalesOnline + "cobo.html?id=FORMULA_1",
            // "https://www.vidembed.re/stream/5ce1773e-7859-4e5b-b22f-d1abfd161f6a",
            // "https://forlessmake.store/cobo.html?id=FORMULA_1",
            // "https://candler.beauty/cobo.html?id=FORMULA_1",
            // "https://fullchannels.online/canales-sport.php?id=daznf1",
        ]
    }
);

MisCanales.set(
    "Eurochannel",
    {
        pais: "Brasil",
        guide: "EUROCHANNEL",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RXVyb2NoYW5uZWw=",
            servidorCanalesOnline + "cvatt.html?get=RXVyb2NoYW5uZWw=",
            // "server/cvatt.html?get=RXVyb2NoYW5uZWw=",
            // "https://sssshhh.xyz/cvatt.html?get=RXVyb2NoYW5uZWw=",
            // "https://a3.115tv.site/cvatt.html?get=RXVyb2NoYW5uZWw=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RXVyb2NoYW5uZWw=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RXVyb2NoYW5uZWw=",
            servidorCanalesOnline + "sensa.html?id=Eurochannel",
            servidorCanalesOnline + "gigared.html?id=Eurochannel",
            servidorCanalesOnline + "gigared_ext.html?id=Eurochannel",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Eurochannel",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=EUROCHANNEL",
            // servidorCanalesOnline + "sensa_ext.html?id=Eurochannel",
            // "server/cvatt2_ext.html?get=RXVyb2NoYW5uZWw=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RXVyb2NoYW5uZWw=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RXVyb2NoYW5uZWw=",
            // "https://cv.photocalltv.me/cv2.php?get=RXVyb2NoYW5uZWw=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RXVyb2NoYW5uZWw=",
            // "https://nebunexa.com/cvatt.php?get=RXVyb2NoYW5uZWw=",
            // "https://www.enlatele.tv/player/cv2.php?get=RXVyb2NoYW5uZWw=",
        ]
    }
);

MisCanales.set(
    "Record TV",
    {
        pais: "Brasil",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UmVkZV9SZWNvcmQ=",
            servidorCanalesOnline + "cvatt.html?get=UmVkZV9SZWNvcmQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=UmVkZV9SZWNvcmQ=",
        ]
    }
);

MisCanales.set(
    "Euronews",
    {
        pais: "Francia",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RXVyb25ld3M=",
            servidorCanalesOnline + "cvatt.html?get=RXVyb25ld3M=",
            // "server/cvatt.html?get=RXVyb25ld3M=",
            // "https://sssshhh.xyz/cvatt.html?get=RXVyb25ld3M=",
            // "https://a3.115tv.site/cvatt.html?get=RXVyb25ld3M=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RXVyb25ld3M=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RXVyb25ld3M=",
            servidorCanalesOnline + "edge.html?get=Euronews",
            // "server/cvatt2_ext.html?get=RXVyb25ld3M=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RXVyb25ld3M=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RXVyb25ld3M=",
            // "https://cv.photocalltv.me/cv2.php?get=RXVyb25ld3M=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RXVyb25ld3M=",
            // "https://nebunexa.com/cvatt.php?get=RXVyb25ld3M=",
            // "https://www.enlatele.tv/player/cv2.php?get=RXVyb25ld3M=",
        ]
    }
);

MisCanales.set(
    "France 24 Español",
    {
        pais: "Francia",
        guide: "FRANCE 24",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RnJhbmNlMjRfRmxvdw==",
            servidorCanalesOnline + "cvatt.html?get=RnJhbmNlMjRfRmxvdw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=RnJhbmNlMjRfRmxvdw==",
            servidorCanalesOnline + "tvmia.html?stream=an_France24",
        ]
    }
);

MisCanales.set(
    "Europa Europa",
    {
        pais: "Argentina",
        guide: "Europa Europa",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RXVyb3BhX0V1cm9wYQ",
            servidorCanalesOnline + "cvatt.html?get=RXVyb3BhX0V1cm9wYQ",
            // "server/cvatt.html?get=RXVyb3BhX0V1cm9wYQ",
            // "https://sssshhh.xyz/cvatt.html?get=RXVyb3BhX0V1cm9wYQ",
            // "https://a3.115tv.site/cvatt.html?get=RXVyb3BhX0V1cm9wYQ",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RXVyb3BhX0V1cm9wYQ",
            servidorCanalesOnline + "cvatt2_ext.html?get=RXVyb3BhX0V1cm9wYQ",
            servidorCanalesOnline + "akamaizedpro.html?id=europa_europa",
            servidorCanalesOnline + "akamaized.html?id=europa_europa",
            servidorCanalesOnline + "edge.html?get=Europa_Europa",
            servidorCanalesOnline + "sensa.html?id=EuropaEuropa",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Europa_Europa",
            // servidorCanalesOnline + "sensa_ext.html?id=EuropaEuropa",
            // "server/cvatt2_ext.html?get=RXVyb3BhX0V1cm9wYQ",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RXVyb3BhX0V1cm9wYQ",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RXVyb3BhX0V1cm9wYQ",
            // "https://cv.photocalltv.me/cv2.php?get=RXVyb3BhX0V1cm9wYQ",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RXVyb3BhX0V1cm9wYQ",
            // "https://nebunexa.com/cvatt.php?get=RXVyb3BhX0V1cm9wYQ",
            // "https://www.enlatele.tv/player/cv2.php?get=RXVyb3BhX0V1cm9wYQ",
        ]
    }
);

MisCanales.set(
    "NBA TV",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TkJBX1RW",
            servidorCanalesOnline + "cvatt.html?get=TkJBX1RW",
            // "server/cvatt.html?get=TkJBX1RW",
            // "https://sssshhh.xyz/cvatt.html?get=TkJBX1RW",
            // "https://a3.115tv.site/cvatt.html?get=TkJBX1RW",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TkJBX1RW",
            servidorCanalesOnline + "cvatt2_ext.html?get=TkJBX1RW",
            // "server/cvatt2_ext.html?get=TkJBX1RW",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TkJBX1RW",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TkJBX1RW",
            // "https://cv.photocalltv.me/cv2.php?get=TkJBX1RW",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TkJBX1RW",
            // "https://nebunexa.com/cvatt.php?get=TkJBX1RW",
            // "https://www.enlatele.tv/player/cv2.php?get=TkJBX1RW",
            // "https://a3.115tv.site/cvattde.html?get=TkJBX1RW",
            // servidorCanalesOnline + "cvattde.html?get=TkJBX1RW",
            // "server/cvattde.html?get=TkJBX1RW",
            // "https://sssshhh.xyz/cvattde.html?get=TkJBX1RW",

            // "https://streamx10.cloud/global2.php?channel=nba1",
            // "https://streamx10.cloud/global2.php?channel=nba2",
            // "https://streamx10.cloud/global2.php?channel=nba3",
            // "https://streamx10.cloud/global2.php?channel=nba4",
            // "https://streamx10.cloud/global2.php?channel=nba5",
            // "https://streamx10.cloud/global2.php?channel=nba6",
            // "https://streamx10.cloud/global2.php?channel=nba7",
            // "https://streamx10.cloud/global2.php?channel=nba8",
            // "https://streamx10.cloud/global2.php?channel=nba9",
            // "https://streamx10.cloud/global2.php?channel=nba10",
        ]
    }
);

MisCanales.set(
    "Star Channel",
    {
        pais: "Argentina",
        guide: "STAR CHANNEL HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rk9YSEQ=",
            servidorCanalesOnline + "cvatt.html?get=Rk9YSEQ=",
            // "server/cvatt.html?get=Rk9YSEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=Rk9YSEQ=",
            // "https://a3.115tv.site/cvatt.html?get=Rk9YSEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rk9YSEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rk9YSEQ=",
            servidorCanalesOnline + "akamaizedpro.html?id=start_channel",
            servidorCanalesOnline + "akamaized.html?id=start_channel",
            servidorCanalesOnline + "aneviapro.html?id=Star_Channel",
            servidorCanalesOnline + "edge.html?get=Star_Channel",
            servidorCanalesOnline + "gigared.html?id=Star_Channel",
            servidorCanalesOnline + "gigared_ext.html?id=Star_Channel",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=FOX_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=STAR",
            servidorCanalesOnline + "extension.html?get=STAR_CHANNEL",
            // "server/cvatt2_ext.html?get=Rk9YSEQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rk9YSEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rk9YSEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=Rk9YSEQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rk9YSEQ=",
            // "https://nebunexa.com/cvatt.php?get=Rk9YSEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=Rk9YSEQ=",
        ]
    }
);

MisCanales.set(
    "TNT HD",
    {
        pais: "Estados Unidos",
        guide: "TNT HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VE5UX0hEX0FyZw",
            servidorCanalesOnline + "cvatt.html?get=VE5UX0hEX0FyZw",
            // "server/cvatt.html?get=VE5UX0hEX0FyZw",
            // "https://sssshhh.xyz/cvatt.html?get=VE5UX0hEX0FyZw",
            // "https://a3.115tv.site/cvatt.html?get=VE5UX0hEX0FyZw",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VE5UX0hEX0FyZw",
            servidorCanalesOnline + "cvatt2_ext.html?get=VE5UX0hEX0FyZw",
            servidorCanalesOnline + "akamaizedpro.html?id=tnt",
            servidorCanalesOnline + "akamaized.html?id=tnt",
            servidorCanalesOnline + "aneviapro.html?id=TNT",
            servidorCanalesOnline + "edge.html?get=TNT",
            servidorCanalesOnline + "sensa.html?id=TNT",
            servidorCanalesOnline + "gigared.html?id=TNT",
            servidorCanalesOnline + "gigared_ext.html?id=TNT",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TNT_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=TNT",
            // servidorCanalesOnline + "sensa_ext.html?id=TNT",
            servidorCanalesOnline + "extension.html?get=TNT",
            // "server/cvatt2_ext.html?get=VE5UX0hEX0FyZw",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VE5UX0hEX0FyZw",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VE5UX0hEX0FyZw",
            // "https://cv.photocalltv.me/cv2.php?get=VE5UX0hEX0FyZw",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VE5UX0hEX0FyZw",
            // "https://nebunexa.com/cvatt.php?get=VE5UX0hEX0FyZw",
            // "https://www.enlatele.tv/player/cv2.php?get=VE5UX0hEX0FyZw",
            // "https://todcanembfloargop2.glitch.me/canop2.html?id=tnt",
        ]
    }
);

MisCanales.set(
    "TNT Novelas",
    {
        pais: "Estados Unidos",
        guide: "tnt novelas",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VEJT",
            servidorCanalesOnline + "cvatt.html?get=VEJT",
            // "server/cvatt.html?get=VEJT",
            // "https://sssshhh.xyz/cvatt.html?get=VEJT",
            // "https://a3.115tv.site/cvatt.html?get=VEJT",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VEJT",
            servidorCanalesOnline + "cvatt2_ext.html?get=VEJT",
            servidorCanalesOnline + "akamaizedpro.html?id=tntnovelashd",
            servidorCanalesOnline + "akamaized.html?id=tntnovelashd",
            servidorCanalesOnline + "edge.html?get=TNT_Novelas",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TNT_NOVELAS",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=TNT_NOVELAS",
            servidorCanalesOnline + "extension.html?get=TNT_NOVELAS",
            // "server/cvatt2_ext.html?get=VEJT",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VEJT",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VEJT",
            // "https://cv.photocalltv.me/cv2.php?get=VEJT",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VEJT",
            // "https://nebunexa.com/cvatt.php?get=VEJT",
            // "https://www.enlatele.tv/player/cv2.php?get=VEJT",
        ]
    }
);

MisCanales.set(
    "TNT Series",
    {
        pais: "Estados Unidos",
        guide: "TNT Series HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VE5UU2VyaWVz",
            servidorCanalesOnline + "cvatt.html?get=VE5UU2VyaWVz",
            // "server/cvatt.html?get=VE5UU2VyaWVz",
            // "https://sssshhh.xyz/cvatt.html?get=VE5UU2VyaWVz",
            // "https://a3.115tv.site/cvatt.html?get=VE5UU2VyaWVz",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VE5UU2VyaWVz",
            servidorCanalesOnline + "cvatt2_ext.html?get=VE5UU2VyaWVz",
            servidorCanalesOnline + "akamaizedpro.html?id=tntseries",
            servidorCanalesOnline + "akamaized.html?id=tntseries",
            servidorCanalesOnline + "aneviapro.html?id=TNTSeries",
            servidorCanalesOnline + "edge.html?get=TNT_Series",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TNT_SERIES_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=TNT_SERIES",
            servidorCanalesOnline + "extension.html?get=TNT_SERIES",
            // "server/cvatt2_ext.html?get=VE5UU2VyaWVz",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VE5UU2VyaWVz",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VE5UU2VyaWVz",
            // "https://cv.photocalltv.me/cv2.php?get=VE5UU2VyaWVz",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VE5UU2VyaWVz",
            // "https://nebunexa.com/cvatt.php?get=VE5UU2VyaWVz",
            // "https://www.enlatele.tv/player/cv2.php?get=VE5UU2VyaWVz",
        ]
    }
);

MisCanales.set(
    "HBO",
    {
        pais: "Estados Unidos",
        guide: "HBO HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SEJPSEQ=",
            servidorCanalesOnline + "cvatt.html?get=SEJPSEQ=",
            // "server/cvatt.html?get=SEJPSEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=SEJPSEQ=",
            // "https://a3.115tv.site/cvatt.html?get=SEJPSEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SEJPSEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=SEJPSEQ=",
            servidorCanalesOnline + "megacable.html?id=HBO_HD",
            servidorCanalesOnline + "megacablepro.html?id=HBO_HD",
            servidorCanalesOnline + "latamlive.html?id=HBO_HD_AR_ENC_LIVE",
            servidorCanalesOnline + "edge.html?get=HBO",
            servidorCanalesOnline + "sensa.html?id=HBO",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HBO",
            servidorCanalesOnline + "aneviapro.html?id=HBO",
            // servidorCanalesOnline + "sensa_ext.html?id=HBO",
            servidorCanalesOnline + "vriootts.html?id=hbo",
            servidorCanalesOnline + "extension.html?get=HBO",
            // "server/cvatt2_ext.html?get=SEJPSEQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SEJPSEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SEJPSEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=SEJPSEQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SEJPSEQ=",
            // "https://nebunexa.com/cvatt.php?get=SEJPSEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=SEJPSEQ=",
            // "https://todcanembfloargop2.glitch.me/canop2.html?id=hhhb1",
        ]
    }
);

MisCanales.set(
    "HBO 2",
    {
        pais: "Estados Unidos",
        guide: "HBO 2 HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SEJPXzI=",
            servidorCanalesOnline + "cvatt.html?get=SEJPXzI=",
            // "server/cvatt.html?get=SEJPXzI=",
            // "https://sssshhh.xyz/cvatt.html?get=SEJPXzI=",
            // "https://a3.115tv.site/cvatt.html?get=SEJPXzI=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SEJPXzI=",
            servidorCanalesOnline + "cvatt2_ext.html?get=SEJPXzI=",
            servidorCanalesOnline + "megacable.html?id=HBO_2",
            servidorCanalesOnline + "megacablepro.html?id=HBO_2",
            servidorCanalesOnline + "latamlive.html?id=HBO2_AR_ENC_LIVE",
            servidorCanalesOnline + "edge.html?get=HBO_2",
            servidorCanalesOnline + "sensa.html?id=HBO2",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HBO2",
            servidorCanalesOnline + "aneviapro.html?id=HBO2",
            // servidorCanalesOnline + "sensa_ext.html?id=HBO2",
            servidorCanalesOnline + "vriootts.html?id=hbo2",
            servidorCanalesOnline + "extension.html?get=HBO2",
            // "server/cvatt2_ext.html?get=SEJPXzI=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SEJPXzI=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SEJPXzI=",
            // "https://cv.photocalltv.me/cv2.php?get=SEJPXzI=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SEJPXzI=",
            // "https://nebunexa.com/cvatt.php?get=SEJPXzI=",
            // "https://www.enlatele.tv/player/cv2.php?get=SEJPXzI=",
        ]
    }
);

MisCanales.set(
    "HBO Plus",
    {
        pais: "Estados Unidos",
        guide: "HBO plus HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SEJPX1BsdXM=",
            servidorCanalesOnline + "cvatt.html?get=SEJPX1BsdXM=",
            // "server/cvatt.html?get=SEJPX1BsdXM=",
            // "https://sssshhh.xyz/cvatt.html?get=SEJPX1BsdXM=",
            // "https://a3.115tv.site/cvatt.html?get=SEJPX1BsdXM=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SEJPX1BsdXM=",
            servidorCanalesOnline + "cvatt2_ext.html?get=SEJPX1BsdXM=",
            servidorCanalesOnline + "latamlive.html?id=HBO_PLUS_HD_AR_ENC_LIVE",
            servidorCanalesOnline + "edge.html?get=HBO_Plus",
            servidorCanalesOnline + "sensa.html?id=HBOPlus",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HBO_PLUS_HD",
            servidorCanalesOnline + "aneviapro.html?id=HBO_Plus",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=HBO_PLUS",
            // servidorCanalesOnline + "sensa_ext.html?id=HBOPlus",
            servidorCanalesOnline + "vriootts.html?id=hboplus",
            servidorCanalesOnline + "extension.html?get=HBO_PLUS",
            // "server/cvatt2_ext.html?get=SEJPX1BsdXM=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SEJPX1BsdXM=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SEJPX1BsdXM=",
            // "https://cv.photocalltv.me/cv2.php?get=SEJPX1BsdXM=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SEJPX1BsdXM=",
            // "https://nebunexa.com/cvatt.php?get=SEJPX1BsdXM=",
            // "https://www.enlatele.tv/player/cv2.php?get=SEJPX1BsdXM=",
        ]
    }
);

MisCanales.set(
    "HBO Family",
    {
        pais: "Estados Unidos",
        guide: "HBO family HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SEJPX0ZhbWlseQ==",
            servidorCanalesOnline + "cvatt.html?get=SEJPX0ZhbWlseQ==",
            // "server/cvatt.html?get=SEJPX0ZhbWlseQ==",
            // "https://sssshhh.xyz/cvatt.html?get=SEJPX0ZhbWlseQ==",
            // "https://a3.115tv.site/cvatt.html?get=SEJPX0ZhbWlseQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SEJPX0ZhbWlseQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=SEJPX0ZhbWlseQ==",
            servidorCanalesOnline + "megacable.html?id=HBO_FAMILY",
            servidorCanalesOnline + "megacablepro.html?id=HBO_FAMILY",
            servidorCanalesOnline + "latamlive.html?id=HBO_FAMILY_HD_AR_ENC_LIVE",
            servidorCanalesOnline + "edge.html?get=HBO_Family",
            servidorCanalesOnline + "sensa.html?id=HBOFamily",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HBO_Family",
            servidorCanalesOnline + "aneviapro.html?id=HBO_Family",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=HBO_FAMILY",
            // servidorCanalesOnline + "sensa_ext.html?id=HBOFamily",
            servidorCanalesOnline + "vriootts.html?id=hbofamily",
            servidorCanalesOnline + "extension.html?get=HBO_FAMILY",
            // "server/cvatt2_ext.html?get=SEJPX0ZhbWlseQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SEJPX0ZhbWlseQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SEJPX0ZhbWlseQ==",
            // "https://cv.photocalltv.me/cv2.php?get=SEJPX0ZhbWlseQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SEJPX0ZhbWlseQ==",
            // "https://nebunexa.com/cvatt.php?get=SEJPX0ZhbWlseQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=SEJPX0ZhbWlseQ==",
        ]
    }
);

MisCanales.set(
    "HBO Xtreme",
    {
        pais: "Estados Unidos",
        guide: "HBO XTREME HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SEJPX0V4dHJlbWU=",
            servidorCanalesOnline + "cvatt.html?get=SEJPX0V4dHJlbWU=",
            // "server/cvatt.html?get=SEJPX0V4dHJlbWU=",
            // "https://sssshhh.xyz/cvatt.html?get=SEJPX0V4dHJlbWU=",
            // "https://a3.115tv.site/cvatt.html?get=SEJPX0V4dHJlbWU=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SEJPX0V4dHJlbWU=",
            servidorCanalesOnline + "cvatt2_ext.html?get=SEJPX0V4dHJlbWU=",
            servidorCanalesOnline + "megacable.html?id=HBO_XTREME",
            servidorCanalesOnline + "megacablepro.html?id=HBO_XTREME",
            servidorCanalesOnline + "latamlive.html?id=HBO_XTREME_HD_AR_ENC_LIVE",
            servidorCanalesOnline + "edge.html?get=HBO_Xtreme",
            servidorCanalesOnline + "sensa.html?id=HBOXtreme",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HBO_Xtreme",
            servidorCanalesOnline + "aneviapro.html?id=HBO_Xtreme",
            // servidorCanalesOnline + "sensa_ext.html?id=HBOXtreme",
            servidorCanalesOnline + "extension.html?get=HBO_XTREME",
            // "server/cvatt2_ext.html?get=SEJPX0V4dHJlbWU=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SEJPX0V4dHJlbWU=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SEJPX0V4dHJlbWU=",
            // "https://cv.photocalltv.me/cv2.php?get=SEJPX0V4dHJlbWU=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SEJPX0V4dHJlbWU=",
            // "https://nebunexa.com/cvatt.php?get=SEJPX0V4dHJlbWU=",
            // "https://www.enlatele.tv/player/cv2.php?get=SEJPX0V4dHJlbWU=",
        ]
    }
);

MisCanales.set(
    "HBO Mundi",
    {
        pais: "Estados Unidos",
        guide: "HBO MUNDI HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SEJPX011bmRp",
            servidorCanalesOnline + "cvatt.html?get=SEJPX011bmRp",
            // "server/cvatt.html?get=SEJPX011bmRp",
            // "https://sssshhh.xyz/cvatt.html?get=SEJPX011bmRp",
            // "https://a3.115tv.site/cvatt.html?get=SEJPX011bmRp",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SEJPX011bmRp",
            servidorCanalesOnline + "cvatt2_ext.html?get=SEJPX011bmRp",
            servidorCanalesOnline + "latamlive.html?id=HBO_MUNDI_HD_AR_ENC_LIVE",
            servidorCanalesOnline + "sensa.html?id=HBOMundi",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HBO_MUNDI",
            servidorCanalesOnline + "aneviapro.html?id=HBO_Mundi",
            // servidorCanalesOnline + "sensa_ext.html?id=HBOMundi",
            servidorCanalesOnline + "extension.html?get=HBO_MUNDI",
            // "server/cvatt2_ext.html?get=SEJPX011bmRp",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SEJPX011bmRp",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SEJPX011bmRp",
            // "https://cv.photocalltv.me/cv2.php?get=SEJPX011bmRp",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SEJPX011bmRp",
            // "https://nebunexa.com/cvatt.php?get=SEJPX011bmRp",
            // "https://www.enlatele.tv/player/cv2.php?get=SEJPX011bmRp",
        ]
    }
);

MisCanales.set(
    "HBO POP",
    {
        pais: "Estados Unidos",
        guide: "HBO POP HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SEJPX1BPUA==",
            servidorCanalesOnline + "cvatt.html?get=SEJPX1BPUA==",
            // "server/cvatt.html?get=SEJPX1BPUA==",
            // "https://sssshhh.xyz/cvatt.html?get=SEJPX1BPUA==",
            // "https://a3.115tv.site/cvatt.html?get=SEJPX1BPUA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SEJPX1BPUA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=SEJPX1BPUA==",
            servidorCanalesOnline + "latamlive.html?id=HBO_POP_AR_HD_ENC_LIVE",
            servidorCanalesOnline + "edge.html?get=HBO_POP",
            servidorCanalesOnline + "sensa.html?id=HBOPop",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HBO_POP",
            servidorCanalesOnline + "aneviapro.html?id=HBO_Pop",
            // servidorCanalesOnline + "sensa_ext.html?id=HBOPop",
            servidorCanalesOnline + "extension.html?get=HBO_POP",
            // "server/cvatt2_ext.html?get=SEJPX1BPUA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SEJPX1BPUA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SEJPX1BPUA==",
            // "https://cv.photocalltv.me/cv2.php?get=SEJPX1BPUA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SEJPX1BPUA==",
            // "https://nebunexa.com/cvatt.php?get=SEJPX1BPUA==",
            // "https://www.enlatele.tv/player/cv2.php?get=SEJPX1BPUA==",
        ]
    }
);

MisCanales.set(
    "HBO Signature",
    {
        pais: "Estados Unidos",
        guide: "HBO Signature HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SEJPX1NpZ25hdHVyZQ==",
            servidorCanalesOnline + "cvatt.html?get=SEJPX1NpZ25hdHVyZQ==",
            // "server/cvatt.html?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://sssshhh.xyz/cvatt.html?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://a3.115tv.site/cvatt.html?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SEJPX1NpZ25hdHVyZQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=SEJPX1NpZ25hdHVyZQ==",
            servidorCanalesOnline + "megacable.html?id=HBO_Signature_HD",
            servidorCanalesOnline + "megacablepro.html?id=HBO_Signature_HD",
            servidorCanalesOnline + "latamlive.html?id=HBO_SIGNATURE_AR_HD_ENC_LIVE",
            servidorCanalesOnline + "edge.html?get=HBO_Signature",
            servidorCanalesOnline + "sensa.html?id=HBOSignature",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HBO_Signature",
            servidorCanalesOnline + "aneviapro.html?id=HBO_Signature",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=HBO_SIGNATURE",
            // servidorCanalesOnline + "sensa_ext.html?id=HBOSignature",
            servidorCanalesOnline + "vriootts.html?id=hbosignature",
            servidorCanalesOnline + "extension.html?get=HBO_SIGNATURE",
            // "server/cvatt2_ext.html?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://cv.photocalltv.me/cv2.php?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://nebunexa.com/cvatt.php?get=SEJPX1NpZ25hdHVyZQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=SEJPX1NpZ25hdHVyZQ==",
        ]
    }
);

MisCanales.set(
    "HGTV",
    {
        pais: "Estados Unidos",
        guide: "HGTV",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SG9tZV9hbmRfR2FyZGVu",
            servidorCanalesOnline + "cvatt.html?get=SG9tZV9hbmRfR2FyZGVu",
            servidorCanalesOnline + "cvatt2_ext.html?get=SG9tZV9hbmRfR2FyZGVu",
            servidorCanalesOnline + "aneviapro.html?id=Discovery_HGTV",
            servidorCanalesOnline + "sensa.html?id=HGTV",
            servidorCanalesOnline + "gigared.html?id=HGTV",
            servidorCanalesOnline + "gigared_ext.html?id=HGTV",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=HGTV",
            // servidorCanalesOnline + "sensa_ext.html?id=HGTV",
            servidorCanalesOnline + "extension.html?get=HGTV",
        ]
    }
);

MisCanales.set(
    "Space",
    {
        pais: "Argentina",
        guide: "SPACE HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=U3BhY2U=",
            servidorCanalesOnline + "cvatt.html?get=U3BhY2U=",
            // "server/cvatt.html?get=U3BhY2U=",
            // "https://sssshhh.xyz/cvatt.html?get=U3BhY2U=",
            // "https://a3.115tv.site/cvatt.html?get=U3BhY2U=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=U3BhY2U=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U3BhY2U=",
            servidorCanalesOnline + "akamaizedpro.html?id=space",
            servidorCanalesOnline + "akamaized.html?id=space",
            servidorCanalesOnline + "aneviapro.html?id=Space",
            servidorCanalesOnline + "edge.html?get=Space",
            servidorCanalesOnline + "sensa.html?id=Space",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Space_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=SPACE",
            // servidorCanalesOnline + "sensa_ext.html?id=Space",
            servidorCanalesOnline + "extension.html?get=SPACE",
            // "server/cvatt2_ext.html?get=U3BhY2U=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=U3BhY2U=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=U3BhY2U=",
            // "https://cv.photocalltv.me/cv2.php?get=U3BhY2U=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=U3BhY2U=",
            // "https://nebunexa.com/cvatt.php?get=U3BhY2U=",
            // "https://www.enlatele.tv/player/cv2.php?get=U3BhY2U=",
        ]
    }
);

MisCanales.set(
    "A&E",
    {
        pais: "Estados Unidos",
        guide: "A&E HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QUVIRA==",
            servidorCanalesOnline + "cvatt.html?get=QUVIRA==",
            // "server/cvatt.html?get=QUVIRA==",
            // "https://sssshhh.xyz/cvatt.html?get=QUVIRA==",
            // "https://a3.115tv.site/cvatt.html?get=QUVIRA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QUVIRA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=QUVIRA==",
            servidorCanalesOnline + "akamaizedpro.html?id=aehd",
            servidorCanalesOnline + "akamaized.html?id=aehd",
            servidorCanalesOnline + "sensa.html?id=AyE",
            servidorCanalesOnline + "gigared.html?id=AyE",
            servidorCanalesOnline + "gigared_ext.html?id=AyE",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=AE_Mundo_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=AE",
            // servidorCanalesOnline + "sensa_ext.html?id=AyE",
            // "server/cvatt2_ext.html?get=QUVIRA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QUVIRA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QUVIRA==",
            // "https://cv.photocalltv.me/cv2.php?get=QUVIRA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QUVIRA==",
            // "https://nebunexa.com/cvatt.php?get=QUVIRA==",
            // "https://www.enlatele.tv/player/cv2.php?get=QUVIRA==",
        ]
    }
);

MisCanales.set(
    "Cinecanal",
    {
        pais: "Argentina",
        guide: "CINECANAL HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2luZWNhbmFsSEQ=",
            servidorCanalesOnline + "cvatt.html?get=Q2luZWNhbmFsSEQ=",
            // "server/cvatt.html?get=Q2luZWNhbmFsSEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=Q2luZWNhbmFsSEQ=",
            // "https://a3.115tv.site/cvatt.html?get=Q2luZWNhbmFsSEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2luZWNhbmFsSEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2luZWNhbmFsSEQ=",
            servidorCanalesOnline + "akamaizedpro.html?id=cinecanal",
            servidorCanalesOnline + "akamaized.html?id=cinecanal",
            servidorCanalesOnline + "aneviapro.html?id=Cinecanal",
            servidorCanalesOnline + "sensa.html?id=Cinecanal",
            servidorCanalesOnline + "gigared.html?id=Cinecanal",
            servidorCanalesOnline + "gigared_ext.html?id=Cinecanal",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=CINECANAL_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=CINECANAL",
            // servidorCanalesOnline + "sensa_ext.html?id=Cinecanal",
            servidorCanalesOnline + "extension.html?get=CINECANAL",
            // "server/cvatt2_ext.html?get=Q2luZWNhbmFsSEQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2luZWNhbmFsSEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2luZWNhbmFsSEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=Q2luZWNhbmFsSEQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2luZWNhbmFsSEQ=",
            // "https://nebunexa.com/cvatt.php?get=Q2luZWNhbmFsSEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2luZWNhbmFsSEQ=",
        ]
    }
);

MisCanales.set(
    "Cinemax",
    {
        pais: "Estados Unidos",
        guide: "Cinemax HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2luZW1heA==",
            servidorCanalesOnline + "cvatt.html?get=Q2luZW1heA==",
            // "server/cvatt.html?get=Q2luZW1heA==",
            // "https://sssshhh.xyz/cvatt.html?get=Q2luZW1heA==",
            // "https://a3.115tv.site/cvatt.html?get=Q2luZW1heA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2luZW1heA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2luZW1heA==",
            servidorCanalesOnline + "akamaizedpro.html?id=cinemax",
            servidorCanalesOnline + "akamaized.html?id=cinemax",
            servidorCanalesOnline + "edge.html?get=Cinemax",
            servidorCanalesOnline + "sensa.html?id=Cinemax",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=CINEMAX",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=CINEMAX",
            // servidorCanalesOnline + "sensa_ext.html?id=Cinemax",
            servidorCanalesOnline + "extension.html?get=CINEMAX",
            // "server/cvatt2_ext.html?get=Q2luZW1heA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2luZW1heA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2luZW1heA==",
            // "https://cv.photocalltv.me/cv2.php?get=Q2luZW1heA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2luZW1heA==",
            // "https://nebunexa.com/cvatt.php?get=Q2luZW1heA==",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2luZW1heA==",
        ]
    }
);

MisCanales.set(
    "Cine AR",
    {
        pais: "Argentina",
        guide: "CINE.AR",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SU5DQUFfVHY=",
            servidorCanalesOnline + "cvatt.html?get=SU5DQUFfVHY=",
            // "server/cvatt.html?get=SU5DQUFfVHY=",
            // "https://sssshhh.xyz/cvatt.html?get=SU5DQUFfVHY=",
            // "https://a3.115tv.site/cvatt.html?get=SU5DQUFfVHY=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SU5DQUFfVHY=",
            servidorCanalesOnline + "cvatt2_ext.html?get=SU5DQUFfVHY=",
            servidorCanalesOnline + "aneviapro.html?id=CineAr",
            servidorCanalesOnline + "edge.html?get=CineAR",
            servidorCanalesOnline + "gigared.html?id=Cine_ar",
            servidorCanalesOnline + "gigared_ext.html?id=Cine_ar",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Cine_AR",
            servidorCanalesOnline + "tvmia.html?stream=an_CineAR",
            servidorCanalesOnline + "sensa.html?id=CineAR",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=CINE_AR",
            // servidorCanalesOnline + "sensa_ext.html?id=CineAR",
            // "server/cvatt2_ext.html?get=SU5DQUFfVHY=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SU5DQUFfVHY=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SU5DQUFfVHY=",
            // "https://cv.photocalltv.me/cv2.php?get=SU5DQUFfVHY=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SU5DQUFfVHY=",
            // "https://nebunexa.com/cvatt.php?get=SU5DQUFfVHY=",
            // "https://www.enlatele.tv/player/cv2.php?get=SU5DQUFfVHY=",
        ]
    }
);

MisCanales.set(
    "De Película",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=DePelicula",
            // servidorCanalesOnline + "sensa_ext.html?id=DePelicula",
        ]
    }
);

MisCanales.set(
    "Cine Familiar",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "iptvperu.html?id=cinefamiliar",
            servidorCanalesOnline + "sensa.html?id=CineFamiliar",
            // servidorCanalesOnline + "edge.html?get=Cine_Premium",
            servidorCanalesOnline + "gigared.html?id=Cine_Familiar",
            servidorCanalesOnline + "gigared_ext.html?id=Cine_Familiar",
            // servidorCanalesOnline + "sensa_ext.html?id=CineFamiliar",
        ]
    }
);

MisCanales.set(
    "Cine Hispano",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "iptvperu.html?id=cinehispano",
            // servidorCanalesOnline + "edge.html?get=Cine_Hispano",
            servidorCanalesOnline + "sensa.html?id=CineHispano",
            // servidorCanalesOnline + "sensa_ext.html?id=CineHispano",
        ]
    }
);

MisCanales.set(
    "Cine Premium",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "iptvperu.html?id=cinepremium",
            servidorCanalesOnline + "sensa.html?id=CinePremium",
            // servidorCanalesOnline + "edge.html?get=Cine_Premium",
            servidorCanalesOnline + "gigared.html?id=Cine_Premium",
            servidorCanalesOnline + "gigared_ext.html?id=Cine_Premium",
            // servidorCanalesOnline + "sensa_ext.html?id=CinePremium",
        ]
    }
);

MisCanales.set(
    "DHE",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=REhF",
            servidorCanalesOnline + "cvatt.html?get=REhF",
            servidorCanalesOnline + "cvatt2_ext.html?get=REhF",
            servidorCanalesOnline + "akamaizedpro.html?id=dnehd",
            servidorCanalesOnline + "akamaized.html?id=dnehd",
            servidorCanalesOnline + "sensa.html?id=DHE",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=DHE_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=DHE",
        ]
    }
);

MisCanales.set(
    "AMC",
    {
        pais: "Estados Unidos",
        guide: "AMC HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QU1D",
            servidorCanalesOnline + "cvatt.html?get=QU1D",
            // "server/cvatt.html?get=QU1D",
            // "https://sssshhh.xyz/cvatt.html?get=QU1D",
            // "https://a3.115tv.site/cvatt.html?get=QU1D",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QU1D",
            servidorCanalesOnline + "cvatt2_ext.html?get=QU1D",
            servidorCanalesOnline + "akamaizedpro.html?id=amc",
            servidorCanalesOnline + "akamaized.html?id=amc",
            servidorCanalesOnline + "edge.html?get=AMC",
            servidorCanalesOnline + "sensa.html?id=AMC",
            servidorCanalesOnline + "gigared.html?id=AMC",
            servidorCanalesOnline + "gigared_ext.html?id=AMC",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=AMC",
            // servidorCanalesOnline + "sensa_ext.html?id=AMC",
            // "server/cvatt2_ext.html?get=QU1D",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QU1D",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QU1D",
            // "https://cv.photocalltv.me/cv2.php?get=QU1D",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QU1D",
            // "https://nebunexa.com/cvatt.php?get=QU1D",
            // "https://www.enlatele.tv/player/cv2.php?get=QU1D",
        ]
    }
);

MisCanales.set(
    "AMC Series",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QU1DX1Nlcmllcw==",
            servidorCanalesOnline + "cvatt.html?get=QU1DX1Nlcmllcw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=QU1DX1Nlcmllcw==",
            servidorCanalesOnline + "aneviapro.html?id=AMC",
            servidorCanalesOnline + "edge.html?get=AMC_Series",
            servidorCanalesOnline + "gigared.html?id=Mas_Chic",
            servidorCanalesOnline + "gigared_ext.html?id=Mas_Chic",
        ]
    }
);

MisCanales.set(
    "AXN",
    {
        pais: "Estados Unidos",
        guide: "AXN HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QVhOSEQ=",
            servidorCanalesOnline + "cvatt.html?get=QVhOSEQ=",
            // "server/cvatt.html?get=QVhOSEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=QVhOSEQ=",
            // "https://a3.115tv.site/cvatt.html?get=QVhOSEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QVhOSEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=QVhOSEQ=",
            servidorCanalesOnline + "akamaizedpro.html?id=axnhd",
            servidorCanalesOnline + "akamaized.html?id=axnhd",
            servidorCanalesOnline + "aneviapro.html?id=AXN",
            servidorCanalesOnline + "sensa.html?id=AXN",
            servidorCanalesOnline + "gigared.html?id=AXN",
            servidorCanalesOnline + "gigared_ext.html?id=AXN",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=AXN_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=AXN",
            // "https://172m3u8.netlify.app/?id=AXN",
            servidorCanalesOnline + "mpd_es.html?id=AXN",
            // servidorCanalesOnline + "sensa_ext.html?id=AXN",
            servidorCanalesOnline + "extension.html?get=AXN",
            // "server/cvatt2_ext.html?get=QVhOSEQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QVhOSEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QVhOSEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=QVhOSEQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QVhOSEQ=",
            // "https://nebunexa.com/cvatt.php?get=QVhOSEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=QVhOSEQ=",
        ]
    }
);

MisCanales.set(
    "AXN MOVIES",
    {
        pais: "Estados Unidos",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Axn_Movies",
            servidorCanalesOnline + "zapitvpro.html?id=axnmovies",
            servidorCanalesOnline + "mpd_es.html?id=AXN_MOVIE",
        ]
    }
);

MisCanales.set(
    "A3Cine",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QTNfQ2luZQ==",
            servidorCanalesOnline + "cvatt.html?get=QTNfQ2luZQ==",
            // "server/cvatt.html?get=QTNfQ2luZQ==",
            // "https://sssshhh.xyz/cvatt.html?get=QTNfQ2luZQ==",
            // "https://a3.115tv.site/cvatt.html?get=QTNfQ2luZQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QTNfQ2luZQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=QTNfQ2luZQ==",
            servidorCanalesOnline + "akamaizedpro.html?id=a3cine",
            servidorCanalesOnline + "akamaized.html?id=a3cine",
            servidorCanalesOnline + "edge.html?get=Atrescine",
            servidorCanalesOnline + "tvmia.html?stream=c_A3CINE",
            // "server/cvatt2_ext.html?get=QTNfQ2luZQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QTNfQ2luZQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QTNfQ2luZQ==",
            // "https://cv.photocalltv.me/cv2.php?get=QTNfQ2luZQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QTNfQ2luZQ==",
            // "https://nebunexa.com/cvatt.php?get=QTNfQ2luZQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=QTNfQ2luZQ==",
        ]
    }
);

MisCanales.set(
    "A3Series",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QTNfU2VyaWVz",
            servidorCanalesOnline + "cvatt.html?get=QTNfU2VyaWVz",
            servidorCanalesOnline + "cvatt2_ext.html?get=QTNfU2VyaWVz",
            servidorCanalesOnline + "akamaizedpro.html?id=a3series",
            servidorCanalesOnline + "akamaized.html?id=a3series",
            servidorCanalesOnline + "edge.html?get=Atreseries",
            // servidorCanalesOnline + "tvmia.html?stream=sn_A3S",

        ]
    }
);

MisCanales.set(
    "Universal TV",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            servidorCanalesOnline + "cvatt.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "server/cvatt.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://a3.115tv.site/cvatt.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            servidorCanalesOnline + "akamaizedpro.html?id=universal_channel",
            servidorCanalesOnline + "akamaized.html?id=universal_channel",
            servidorCanalesOnline + "aneviapro.html?id=Universal",
            servidorCanalesOnline + "sensa.html?id=Universal",
            servidorCanalesOnline + "gigared.html?id=Universal",
            servidorCanalesOnline + "gigared_ext.html?id=Universal",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Universal_Channel_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=Universal",
            servidorCanalesOnline + "vriootts.html?id=UNIVERSAL",
            servidorCanalesOnline + "extension.html?get=UNIVERSAL",
            // "server/cvatt2_ext.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
        ]
    }
);

MisCanales.set(
    "Universal Cinema",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            servidorCanalesOnline + "cvatt.html?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            // "server/cvatt.html?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            // "https://sssshhh.xyz/cvatt.html?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            servidorCanalesOnline + "sensa.html?id=UniCin",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Universal_Cinema_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=UniCin",
            servidorCanalesOnline + "vriootts.html?id=UNIVERSAL_CINEMA",
            servidorCanalesOnline + "extension.html?get=UNIVERSAL_CINEMA",
            // "server/cvatt2_ext.html?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            // "https://cv.photocalltv.me/cv2.php?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            // "https://nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX0NpbmVtYQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=VW5pdmVyc2FsX0NpbmVtYQ==",
        ]
    }
);

MisCanales.set(
    "Universal Crime",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=dW5pdmVyc2FsX0NyaW1l",
            servidorCanalesOnline + "cvatt.html?get=dW5pdmVyc2FsX0NyaW1l",
            // "server/cvatt.html?get=dW5pdmVyc2FsX0NyaW1l",
            // "https://sssshhh.xyz/cvatt.html?get=dW5pdmVyc2FsX0NyaW1l",
            servidorCanalesOnline + "cvatt2_ext.html?get=dW5pdmVyc2FsX0NyaW1l",
            servidorCanalesOnline + "sensa.html?id=UniCri",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Universal_Crime_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=UniCri",
            servidorCanalesOnline + "vriootts.html?id=UNIVERSAL_CRIME",
            servidorCanalesOnline + "extension.html?get=UNIVERSAL_CRIME",
            // "server/cvatt2_ext.html?get=dW5pdmVyc2FsX0NyaW1l",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=dW5pdmVyc2FsX0NyaW1l",
            // "https://cv.photocalltv.me/cv2.php?get=dW5pdmVyc2FsX0NyaW1l",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=dW5pdmVyc2FsX0NyaW1l",
            // "https://nebunexa.com/cvatt.php?get=dW5pdmVyc2FsX0NyaW1l",
            // "https://www.enlatele.tv/player/cv2.php?get=dW5pdmVyc2FsX0NyaW1l",
        ]
    }
);

MisCanales.set(
    "Universal Comedy",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            servidorCanalesOnline + "cvatt.html?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            // "server/cvatt.html?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            // "https://sssshhh.xyz/cvatt.html?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            servidorCanalesOnline + "sensa.html?id=UniCom",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Universal_Comedy_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=UniCom",
            servidorCanalesOnline + "vriootts.html?id=UNIVERSAL_COMEDY",
            servidorCanalesOnline + "extension.html?get=UNIVERSAL_COMEDY",
            // "server/cvatt2_ext.html?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            // "https://cv.photocalltv.me/cv2.php?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            // "https://nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX0NvbWVkeQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=VW5pdmVyc2FsX0NvbWVkeQ==",
        ]
    }
);

MisCanales.set(
    "Universal Reality",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            servidorCanalesOnline + "cvatt.html?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            // "server/cvatt.html?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            // "https://sssshhh.xyz/cvatt.html?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            servidorCanalesOnline + "sensa.html?id=UniRea",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Universal_Reality_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=UniRea",
            servidorCanalesOnline + "vriootts.html?id=UNIVERSAL_REALITY",
            servidorCanalesOnline + "extension.html?get=UNIVERSAL_REALITY",
            // "server/cvatt2_ext.html?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            // "https://cv.photocalltv.me/cv2.php?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            // "https://nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX1JlYWxpdHk=",
            // "https://www.enlatele.tv/player/cv2.php?get=VW5pdmVyc2FsX1JlYWxpdHk=",
        ]
    }
);

MisCanales.set(
    "Universal Premiere",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            servidorCanalesOnline + "cvatt.html?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            // "server/cvatt.html?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            // "https://sssshhh.xyz/cvatt.html?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            servidorCanalesOnline + "cvatt2_ext.html?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            servidorCanalesOnline + "sensa.html?id=UniPre",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Universal_Premiere_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=UniPre",
            servidorCanalesOnline + "vriootts.html?id=UNIVERSAL_PREMIERE",
            servidorCanalesOnline + "extension.html?get=UNIVERSAL_PREMIERE",
            // "https://d-t--v-arg-emb-congeeeooocan.glitch.me/uuniiveee6-arg-geo.html",
            // "server/cvatt2_ext.html?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            // "https://cv.photocalltv.me/cv2.php?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            // "https://nebunexa.com/cvatt.php?get=VW5pdmVyc2FsX1ByZW1pZXJl",
            // "https://www.enlatele.tv/player/cv2.php?get=VW5pdmVyc2FsX1ByZW1pZXJl",
        ]
    }
);

MisCanales.set(
    "FXHD",
    {
        pais: "Estados Unidos",
        guide: "FX HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RlhIRA==",
            servidorCanalesOnline + "cvatt.html?get=RlhIRA==",
            // "server/cvatt.html?get=RlhIRA==",
            // "https://sssshhh.xyz/cvatt.html?get=RlhIRA==",
            // "https://a3.115tv.site/cvatt.html?get=RlhIRA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RlhIRA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=RlhIRA==",
            servidorCanalesOnline + "akamaizedpro.html?id=fx",
            servidorCanalesOnline + "akamaized.html?id=fx",
            servidorCanalesOnline + "aneviapro.html?id=FX",
            servidorCanalesOnline + "edge.html?get=FX",
            servidorCanalesOnline + "gigared.html?id=FX",
            servidorCanalesOnline + "gigared_ext.html?id=FX",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=FX",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=FX",
            servidorCanalesOnline + "extension.html?get=FX",
            // "server/cvatt2_ext.html?get=RlhIRA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RlhIRA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RlhIRA==",
            // "https://cv.photocalltv.me/cv2.php?get=RlhIRA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RlhIRA==",
            // "https://nebunexa.com/cvatt.php?get=RlhIRA==",
            // "https://www.enlatele.tv/player/cv2.php?get=RlhIRA==",
        ]
    }
);

MisCanales.set(
    "Film Arts",
    {
        pais: "Argentina",
        guide: "Film & Arts",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RmlsbV9BcnRz",
            servidorCanalesOnline + "cvatt.html?get=RmlsbV9BcnRz",
            // "server/cvatt.html?get=RmlsbV9BcnRz",
            // "https://sssshhh.xyz/cvatt.html?get=RmlsbV9BcnRz",
            // "https://a3.115tv.site/cvatt.html?get=RmlsbV9BcnRz",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RmlsbV9BcnRz",
            servidorCanalesOnline + "cvatt2_ext.html?get=RmlsbV9BcnRz",
            servidorCanalesOnline + "akamaizedpro.html?id=film_and_arts",
            servidorCanalesOnline + "akamaized.html?id=film_and_arts",
            servidorCanalesOnline + "edge.html?get=Film_Arts",
            servidorCanalesOnline + "gigared.html?id=Film_and_Arts",
            servidorCanalesOnline + "gigared_ext.html?id=Film_and_Arts",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Film_Arts",
            // "server/cvatt2_ext.html?get=RmlsbV9BcnRz",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RmlsbV9BcnRz",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RmlsbV9BcnRz",
            // "https://cv.photocalltv.me/cv2.php?get=RmlsbV9BcnRz",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RmlsbV9BcnRz",
            // "https://nebunexa.com/cvatt.php?get=RmlsbV9BcnRz",
            // "https://www.enlatele.tv/player/cv2.php?get=RmlsbV9BcnRz",
        ]
    }
);

MisCanales.set(
    "TV Ciudad",
    {
        pais: "Uruguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGV2ZV9DaXVkYWQ=",
            servidorCanalesOnline + "cvatt.html?get=VGV2ZV9DaXVkYWQ=",
            // "server/cvatt.html?get=VGV2ZV9DaXVkYWQ=",
            // "https://sssshhh.xyz/cvatt.html?get=VGV2ZV9DaXVkYWQ=",
            // "https://a3.115tv.site/cvatt.html?get=VGV2ZV9DaXVkYWQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VGV2ZV9DaXVkYWQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGV2ZV9DaXVkYWQ=",
            servidorCanalesOnline + "tvmia.html?stream=c_TV_CUIDAD",
            // "server/cvatt2_ext.html?get=VGV2ZV9DaXVkYWQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VGV2ZV9DaXVkYWQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VGV2ZV9DaXVkYWQ=",
            // "https://cv.photocalltv.me/cv2.php?get=VGV2ZV9DaXVkYWQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VGV2ZV9DaXVkYWQ=",
            // "https://nebunexa.com/cvatt.php?get=VGV2ZV9DaXVkYWQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=VGV2ZV9DaXVkYWQ=",
        ]
    }
);

MisCanales.set(
    "TV5 MONDE",
    {
        pais: "Francia",
        guide: "TV5MONDE",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VFY1X01vbmRl",
            servidorCanalesOnline + "cvatt.html?get=VFY1X01vbmRl",
            // "server/cvatt.html?get=VFY1X01vbmRl",
            // "https://sssshhh.xyz/cvatt.html?get=VFY1X01vbmRl",
            // "https://a3.115tv.site/cvatt.html?get=VFY1X01vbmRl",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VFY1X01vbmRl",
            servidorCanalesOnline + "cvatt2_ext.html?get=VFY1X01vbmRl",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TV5_Monde",
            // "server/cvatt2_ext.html?get=VFY1X01vbmRl",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VFY1X01vbmRl",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VFY1X01vbmRl",
            // "https://cv.photocalltv.me/cv2.php?get=VFY1X01vbmRl",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VFY1X01vbmRl",
            // "https://nebunexa.com/cvatt.php?get=VFY1X01vbmRl",
            // "https://www.enlatele.tv/player/cv2.php?get=VFY1X01vbmRl",
        ]
    }
);

MisCanales.set(
    "Warner",
    {
        pais: "Estados Unidos",
        guide: "Warner HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=V2FybmVySEQ=",
            servidorCanalesOnline + "cvatt.html?get=V2FybmVySEQ=",
            // "server/cvatt.html?get=V2FybmVySEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=V2FybmVySEQ=",
            // "https://a3.115tv.site/cvatt.html?get=V2FybmVySEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=V2FybmVySEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=V2FybmVySEQ=",
            servidorCanalesOnline + "akamaizedpro.html?id=warner_channel",
            servidorCanalesOnline + "akamaized.html?id=warner_channel",
            servidorCanalesOnline + "aneviapro.html?id=Warner",
            servidorCanalesOnline + "edge.html?get=Warner",
            servidorCanalesOnline + "sensa.html?id=Warner",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Warner_Channel_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=WARNER",
            // servidorCanalesOnline + "sensa_ext.html?id=Warner",
            servidorCanalesOnline + "extension.html?get=WARNER",
            // "server/cvatt2_ext.html?get=V2FybmVySEQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=V2FybmVySEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=V2FybmVySEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=V2FybmVySEQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=V2FybmVySEQ=",
            // "https://nebunexa.com/cvatt.php?get=V2FybmVySEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=V2FybmVySEQ=",
        ]
    }
);

MisCanales.set(
    "Studio Universal",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            servidorCanalesOnline + "cvatt.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "server/cvatt.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://sssshhh.xyz/cvatt.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://a3.115tv.site/cvatt.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            servidorCanalesOnline + "akamaizedpro.html?id=studio_universal",
            servidorCanalesOnline + "akamaized.html?id=studio_universal",
            servidorCanalesOnline + "aneviapro.html?id=Studio_Universal",
            servidorCanalesOnline + "sensa.html?id=StudioUniversal",
            servidorCanalesOnline + "gigared.html?id=Studio_Universal",
            servidorCanalesOnline + "gigared_ext.html?id=Studio_Universal",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Studio_Universal_HD",
            // servidorCanalesOnline + "sensa_ext.html?id=StudioUniversal",
            servidorCanalesOnline + "extension.html?get=STUDIO_UNIVERSAL",
            // "server/cvatt2_ext.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://cv.photocalltv.me/cv2.php?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://nebunexa.com/cvatt.php?get=U3R1ZGlvX1VuaXZlcnNhbA==",
            // "https://www.enlatele.tv/player/cv2.php?get=U3R1ZGlvX1VuaXZlcnNhbA==",
        ]
    }
);

MisCanales.set(
    "Sony Channel",
    {
        pais: "Estados Unidos",
        guide: "SONY HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=U29ueUhE",
            servidorCanalesOnline + "cvatt.html?get=U29ueUhE",
            // "server/cvatt.html?get=U29ueUhE",
            // "https://sssshhh.xyz/cvatt.html?get=U29ueUhE",
            // "https://a3.115tv.site/cvatt.html?get=U29ueUhE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=U29ueUhE",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29ueUhE",
            servidorCanalesOnline + "akamaizedpro.html?id=sony",
            servidorCanalesOnline + "akamaized.html?id=sony",
            servidorCanalesOnline + "aneviapro.html?id=Sony",
            servidorCanalesOnline + "gigared.html?id=Sony_Channel",
            servidorCanalesOnline + "gigared_ext.html?id=Sony_Channel",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Sony_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=SONY",
            servidorCanalesOnline + "extension.html?get=SONY",
            // "server/cvatt2_ext.html?get=U29ueUhE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=U29ueUhE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=U29ueUhE",
            // "https://cv.photocalltv.me/cv2.php?get=U29ueUhE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=U29ueUhE",
            // "https://nebunexa.com/cvatt.php?get=U29ueUhE",
            // "https://www.enlatele.tv/player/cv2.php?get=U29ueUhE",
        ]
    }
);

MisCanales.set(
    "Sony Movies",
    {
        pais: "Estados Unidos",
        guide: "SONY MOVIES HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=U29ueV9Nb3ZpZXM=",
            servidorCanalesOnline + "cvatt.html?get=U29ueV9Nb3ZpZXM=",
            // "server/cvatt.html?get=U29ueV9Nb3ZpZXM=",
            // "https://sssshhh.xyz/cvatt.html?get=U29ueUhE",
            // "https://a3.115tv.site/cvatt.html?get=U29ueUhE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=U29ueUhE",
            servidorCanalesOnline + "cvatt2_ext.html?get=U29ueV9Nb3ZpZXM=",
            servidorCanalesOnline + "gigared.html?id=Sony_Movies",
            servidorCanalesOnline + "gigared_ext.html?id=Sony_Movies",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Sony_Movies_HD",
            // "server/cvatt2_ext.html?get=U29ueV9Nb3ZpZXM=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=U29ueUhE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=U29ueUhE",
            // "https://cv.photocalltv.me/cv2.php?get=U29ueUhE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=U29ueUhE",
            // "https://nebunexa.com/cvatt.php?get=U29ueUhE",
            // "https://www.enlatele.tv/player/cv2.php?get=U29ueUhE",
        ]
    }
);

MisCanales.set(
    "Sony Cine",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Sony_Cine1",
            // "m3u8.html?stream=Sony_Cine2",
        ]
    }
);

MisCanales.set(
    "Sony Novelas",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=SONY_NOVELAS",
        ]
    }
);

MisCanales.set(
    "Sony Competencias",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=SONY_COMPETENCIAS",
        ]
    }
);

MisCanales.set(
    "TCM",
    {
        pais: "Estados Unidos",
        guide: "TCM",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VENN",
            servidorCanalesOnline + "cvatt.html?get=VENN",
            // "server/cvatt.html?get=VENN",
            // "https://sssshhh.xyz/cvatt.html?get=VENN",
            // "https://a3.115tv.site/cvatt.html?get=VENN",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VENN",
            servidorCanalesOnline + "cvatt2_ext.html?get=VENN",
            servidorCanalesOnline + "edge.html?get=TCM",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TCM",
            // "server/cvatt2_ext.html?get=VENN",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VENN",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VENN",
            // "https://cv.photocalltv.me/cv2.php?get=VENN",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VENN",
            // "https://nebunexa.com/cvatt.php?get=VENN",
            // "https://www.enlatele.tv/player/cv2.php?get=VENN",
        ]
    }
);

MisCanales.set(
    "GOLDEN",
    {
        pais: "México",
        guide: "GOLDEN HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=R29sZGVu",
            servidorCanalesOnline + "cvatt.html?get=R29sZGVu",
            servidorCanalesOnline + "cvatt2_ext.html?get=R29sZGVu",
            servidorCanalesOnline + "edge.html?get=Golden",
            servidorCanalesOnline + "gigared.html?id=Golden",
            servidorCanalesOnline + "gigared_ext.html?id=Golden",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Golden",
            servidorCanalesOnline + "sensa.html?id=Golden",
            // "https://telegratuita.com/repro/?r=L3YxeC9wbGF5ZXIucGhwP2lkPWFkc3RRZXY0cTBtVmRERVY=",
            // servidorCanalesOnline + "sensa_ext.html?id=Golden",
            // "https://telegratuita.com/repro/?r=L3YxeC9wbGF5ZXIucGhwP2lkPWFkc3RRZXY0cTBtVmRERVY=",
            // servidorCanalesOnline + "m3u8.html?stream=Vall_GOLDEN",
            // "https://fullchannels.online/canales/golden/",
            // "https://telefullenvivo.org/canales/golden/",
            // "https://zzcointv.xyz/canales/golden/",
        ]
    }
);

MisCanales.set(
    "GOLDEN Premier",
    {
        pais: "México",
        enlaces: [
            // "https://telegratuita.com/repro/?r=L3YxeC9wbGF5ZXIucGhwP2lkPWFkc3R4VjI2cWd5SmFHNVo=",
            // servidorCanalesOnline + "m3u8.html?stream=Vall_GOLDEN_PREMIER",
            // "https://fullchannels.online/canales/golden-premier/",
            // "https://telefullenvivo.org/canales/golden-premier/",
            // "https://zzcointv.xyz/canales/golden-premier/",
        ]
    }
);

MisCanales.set(
    "GOLDEN Plus",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "gigared.html?id=Golden_Plus",
            servidorCanalesOnline + "gigared_ext.html?id=Golden_Plus",
            // "https://telegratuita.com/repro/?r=L3YxeC9wbGF5ZXIucGhwP2lkPWFkc3RaTFE5YVBMTGEwcFc=",
            // "https://fullchannels.online/canales.php?id=golden-plus",
            // "https://telefullenvivo.org/canales/golden-plus/"},
            // "https://zzcointv.xyz/canales/golden-plus/",
        ]
    }
);

MisCanales.set(
    "GOLDEN Edge",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "gigared.html?id=Golden_Edge",
            servidorCanalesOnline + "gigared_ext.html?id=Golden_Edge",
            servidorCanalesOnline + "sensa.html?id=GoldenEdge",
            // "https://telegratuita.com/repro/?r=L3YxeC9wbGF5ZXIucGhwP2lkPWFkc3RrbHg3cW15QnE0QnA=",
            // servidorCanalesOnline + "sensa_ext.html?id=GoldenEdge",
            // "https://fullchannels.online/canales/golden-edge/",
            // "https://zzcointv.xyz/canales/golden-edge/",
        ]
    }
);

MisCanales.set(
    "Multipremier",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=MULTIPREMIER",
            servidorCanalesOnline + "akamaized.html?id=MULTIPREMIER",
            servidorCanalesOnline + "edge.html?get=MultiPremier",
            // servidorCanalesOnline + "m3u8.html?stream=Vall_GOLDEN_MULTIPREMIER"
        ]
    }
);

MisCanales.set(
    "Canal GTV",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_GTV_Guate",
        ]
    }
);

MisCanales.set(
    "TV Florencia",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=TV_Florencia",
        ]
    }
);

MisCanales.set(
    "Barbe TV",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Barbe_TV",
        ]
    }
);

MisCanales.set(
    "Canal 100 Chinique",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_100_Chinique",
        ]
    }
);

MisCanales.set(
    "Aurora Media Films",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Aurora_Media_Films",
        ]
    }
);

MisCanales.set(
    "Luna Visión",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Luna_Visión",
        ]
    }
);

MisCanales.set(
    "Canal 4 Ixíl",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_4_Ixíl",
        ]
    }
);

MisCanales.set(
    "Supercable",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Supercable",
        ]
    }
);

MisCanales.set(
    "Sol Tv",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Sol_Tv",
        ]
    }
);

MisCanales.set(
    "Más Tv",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Mas_Tv",
        ]
    }
);

MisCanales.set(
    "Canal 26 Cono Sur",
    {
        pais: "Guatemala",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Canal_26_Cono_Sur",
        ]
    }
);

MisCanales.set(
    "Comedy Central",
    {
        pais: "Estados Unidos",
        guide: "Comedy Central HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q29tZWR5Q2VudHJhbA",
            servidorCanalesOnline + "cvatt.html?get=Q29tZWR5Q2VudHJhbA",
            // "server/cvatt.html?get=Q29tZWR5Q2VudHJhbA",
            // "https://sssshhh.xyz/cvatt.html?get=Q29tZWR5Q2VudHJhbA",
            // "https://a3.115tv.site/cvatt.html?get=Q29tZWR5Q2VudHJhbA",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q29tZWR5Q2VudHJhbA",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q29tZWR5Q2VudHJhbA",
            servidorCanalesOnline + "akamaizedpro.html?id=comedy_central",
            servidorCanalesOnline + "akamaized.html?id=comedy_central",
            servidorCanalesOnline + "gigared.html?id=Comedy_Central",
            servidorCanalesOnline + "gigared_ext.html?id=Comedy_Central",
            servidorCanalesOnline + "sensa.html?id=ComCentral",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=COMEDY_CENTRAL",
            // servidorCanalesOnline + "sensa_ext.html?id=ComCentral",
            // "server/cvatt2_ext.html?get=Q29tZWR5Q2VudHJhbA",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q29tZWR5Q2VudHJhbA",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q29tZWR5Q2VudHJhbA",
            // "https://cv.photocalltv.me/cv2.php?get=Q29tZWR5Q2VudHJhbA",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q29tZWR5Q2VudHJhbA",
            // "https://nebunexa.com/cvatt.php?get=Q29tZWR5Q2VudHJhbA",
            // "https://www.enlatele.tv/player/cv2.php?get=Q29tZWR5Q2VudHJhbA",
        ]
    }
);

MisCanales.set(
    "Ciudad Magazine",
    {
        pais: "Argentina",
        guide: "Magazine",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TWFnYXppbmU=",
            servidorCanalesOnline + "cvatt.html?get=TWFnYXppbmU=",
            // "server/cvatt.html?get=TWFnYXppbmU=",
            // "https://sssshhh.xyz/cvatt.html?get=TWFnYXppbmU=",
            // "https://a3.115tv.site/cvatt.html?get=TWFnYXppbmU=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TWFnYXppbmU=",
            servidorCanalesOnline + "cvatt2_ext.html?get=TWFnYXppbmU=",
            servidorCanalesOnline + "edge.html?get=Ciudad_Magazine",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Ciudad_Magazine",
            servidorCanalesOnline + "tvmia.html?stream=an_Cuidad_Magazine",
            servidorCanalesOnline + "sensa.html?id=CiudadMagazine",
            servidorCanalesOnline + "m3u8.html?stream=Ciudad_Magazine",
            // servidorCanalesOnline + "sensa_ext.html?id=CiudadMagazine",
            // "server/cvatt2_ext.html?get=TWFnYXppbmU=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TWFnYXppbmU=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TWFnYXppbmU=",
            // "https://cv.photocalltv.me/cv2.php?get=TWFnYXppbmU=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TWFnYXppbmU=",
            // "https://nebunexa.com/cvatt.php?get=TWFnYXppbmU=",
            // "https://www.enlatele.tv/player/cv2.php?get=TWFnYXppbmU=",
        ]
    }
);

MisCanales.set(
    "Universo",
    {
        pais: "Estados Unidos",
        enlaces: [
            // servidorCanalesOnline + "tdtcloudpro.html?stream=universo",
            // "https://cdn.tdtcloud.xyz/ws21.php",
            // "cobo.html?id=UNIVERSO", ///Universo
            // "https://streamx10.cloud/global2.php?channel=universo_usa",
            // "https://streamx10.cloud/global1.php?channel=universo_usa",
            servidorCanalesOnline + "jjfutbol2pro.html?name=universo",
            // "https://streamx10.cloud/global3.php?channel=universo_usa", //No funciona en la apk
            // "https://forlessmake.store/cobo.html?id=NBC_USA", ///Universo
            // "https://candler.beauty/mpdk.html?get=aHR0cHM6Ly9mc2x5LnN0cmVhbS5wZWFjb2NrdHYuY29tL0NvbnRlbnQvQ01BRl9PTDEtQ1RSLTRzL0xpdmUvY2hhbm5lbCh1bml2ZXJzby1lYXN0KS9tYXN0ZXIubXBk&key=MjMyZDcxYmIwMTNkMzlmZmI5MmVlOGM1NzZmYjdlOGU=&key2=MDg3NDA4YTQ4YmU4ZDU3MDQ2YzM4NjhiMzdlYTkwYmE=",
        ]
    }
);

MisCanales.set(
    "Pasiones",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UGFzaW9uZXM=",
            servidorCanalesOnline + "cvatt.html?get=UGFzaW9uZXM=",
            // "server/cvatt.html?get=UGFzaW9uZXM=",
            servidorCanalesOnline + "cvatt2_ext.html?get=UGFzaW9uZXM=",
            servidorCanalesOnline + "akamaizedpro.html?id=pasioneshd",
            servidorCanalesOnline + "akamaized.html?id=pasioneshd",
            servidorCanalesOnline + "tvmia.html?stream=c_PASIONES",
            // "server/cvatt.html2?get=UGFzaW9uZXM=",
        ]
    }
);

MisCanales.set(
    "Tlnovelas",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZW5vdmVsYXM=",
            servidorCanalesOnline + "cvatt.html?get=VGVsZW5vdmVsYXM=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZW5vdmVsYXM=",
            servidorCanalesOnline + "gigared.html?id=Telenovelas",
            servidorCanalesOnline + "gigared_ext.html?id=Telenovelas",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Telenovelas",
            servidorCanalesOnline + "sensa.html?id=Tlnovelas",
            // servidorCanalesOnline + "sensa_ext.html?id=Tlnovelas",
            // "https://fullchannels.online/canales.php?id=tlenovelas",
        ]
    }
);

MisCanales.set(
    "Canal U",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q0JBMjQ=",
            servidorCanalesOnline + "cvatt.html?get=Q0JBMjQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q0JBMjQ=",
        ]
    }
);

MisCanales.set(
    "DARK",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=DARK",
            servidorCanalesOnline + "zapitvpro.html?id=dark",
            servidorCanalesOnline + "mpd_es.html?id=DARK",
        ]
    }
);

MisCanales.set(
    "AMC BREAK",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=amcbreak",
            servidorCanalesOnline + "mpd_es.html?id=AMC_BREAK",
        ]
    }
);

MisCanales.set(
    "AMC CRIME",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=CRIME",
            servidorCanalesOnline + "zapitvpro.html?id=amcrime",
            servidorCanalesOnline + "mpd_es.html?id=AMC_CRIME",
        ]
    }
);

MisCanales.set(
    "D KISS",
    {
        pais: "España",
        enlaces: [
            // servidorCanalesOnline + "tvmia.html?stream=sn_DKISS",
            servidorCanalesOnline + "zapitvpro.html?id=dkiss",
            servidorCanalesOnline + "mpd_es.html?id=D_KISS",
        ]
    }
);

MisCanales.set(
    "B MAD",
    {
        pais: "España",
        enlaces: [
            // servidorCanalesOnline + "tvmia.html?stream=sn_BE_MAD",
            // "https://172m3u8.netlify.app/?id=BE_MAD",
            servidorCanalesOnline + "zapitvpro.html?id=bemad",
            servidorCanalesOnline + "mpd_es.html?id=B_MAD",
        ]
    }
);

MisCanales.set(
    "MEGA",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=MEGA",
            servidorCanalesOnline + "zapitvpro.html?id=mega",
            // servidorCanalesOnline + "tvmia.html?stream=sn_MEGA",
            servidorCanalesOnline + "mpd_es.html?id=MEGA",
        ]
    }
);

MisCanales.set(
    "TEN",
    {
        pais: "España",
        enlaces: [
            // servidorCanalesOnline + "tvmia.html?stream=sn_TEN",
        ]
    }
);

MisCanales.set(
    "Telemundo",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGVsZW11bmRvX0hE",
            servidorCanalesOnline + "cvatt.html?get=VGVsZW11bmRvX0hE",
            // "server/cvatt.html?get=VGVsZW11bmRvX0hE",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGVsZW11bmRvX0hE",
            // "server/cvatt2_ext.html?get=VGVsZW11bmRvX0hE",
            servidorCanalesOnline + "sensa.html?id=Telemundo",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Telemundo_HD",
            // servidorCanalesOnline + "cobo.html?id=TELEMUNDO47_1",
            // servidorCanalesOnline + "cobo.html?id=TELEMUNDO47_2",
            // servidorCanalesOnline + "m3u8.html?stream=Telemundo49",
            // servidorCanalesOnline + "m3u8.html?stream=Telemundo52",
            servidorCanalesOnline + "m3u8.html?stream=Telemundo_PR",
            // servidorCanalesOnline + "sensa_ext.html?id=Telemundo",


            // "https://streamx10.cloud/global2.php?channel=telemundousa",
            // "https://streamx10.cloud/global1.php?channel=telemundousa",
            // "https://streamx10.cloud/global3.php?channel=telemundousa", //No funciona en la apk
            // "https://la10hd.com/vivo/canal.php?stream=telemundo",
            // "https://la10hd.com/vivo/canales.php?stream=telemundo",
            servidorCanalesOnline + "jjfutbol2pro.html?name=telemundo",
            // "https://tutlehd5.com//online.php?a=413",
            // "https://candler.beauty/mpdk.html?get=aHR0cHM6Ly9mc2x5LnN0cmVhbS5wZWFjb2NrdHYuY29tL0NvbnRlbnQvQ01BRl9PTDEtQ1RSLTRzL0xpdmUvY2hhbm5lbChrdmVhKS9tYXN0ZXIubXBk&key=ZGZiNTkxNDJjZTUyM2E2YzkwMDc1OGQ1ZWU0Yzc5OTc=&key2=YmQyZDY4NGU1OTA4MTUxOTBlZGEwNTZhNmQ5NjE4YmM=",
            // "https://thedaddy.to/embed/stream-131.php",
        ]
    }
);

MisCanales.set(
    "Telefuturo",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VEVMRUZVVFVST19DNA==",
            servidorCanalesOnline + "cvatt.html?get=VEVMRUZVVFVST19DNA==",
            // "server/cvatt.html?get=VEVMRUZVVFVST19DNA==",
            // "https://sssshhh.xyz/cvatt.html?get=VEVMRUZVVFVST19DNA==",
            // "https://a3.115tv.site/cvatt.html?get=VEVMRUZVVFVST19DNA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VEVMRUZVVFVST19DNA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=VEVMRUZVVFVST19DNA==",
            // servidorCanalesOnline + "m3u8.html?stream=Telefuturo_PARA",
            // "server/cvatt2_ext.html?get=VEVMRUZVVFVST19DNA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VEVMRUZVVFVST19DNA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VEVMRUZVVFVST19DNA==",
            // "https://cv.photocalltv.me/cv2.php?get=VEVMRUZVVFVST19DNA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VEVMRUZVVFVST19DNA==",
            // "https://nebunexa.com/cvatt.php?get=VEVMRUZVVFVST19DNA==",
            // "https://www.enlatele.tv/player/cv2.php?get=VEVMRUZVVFVST19DNA==",
        ]
    }
);

MisCanales.set(
    "Union TV",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VW5pb25UVg==",
            servidorCanalesOnline + "cvatt.html?get=VW5pb25UVg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=VW5pb25UVg==",
        ]
    }
);

MisCanales.set(
    "Lifetime",
    {
        pais: "Estados Unidos",
        guide: "LIFETIME HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TGlmZXRpbWU=",
            servidorCanalesOnline + "cvatt.html?get=TGlmZXRpbWU=",
            // "server/cvatt.html?get=TGlmZXRpbWU=",
            // "https://sssshhh.xyz/cvatt.html?get=TGlmZXRpbWU=",
            // "https://a3.115tv.site/cvatt.html?get=TGlmZXRpbWU=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TGlmZXRpbWU=",
            servidorCanalesOnline + "cvatt2_ext.html?get=TGlmZXRpbWU=",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Lifetime_HD",
            servidorCanalesOnline + "sensa.html?id=Lifetime",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=LIFETIME",
            // servidorCanalesOnline + "sensa_ext.html?id=Lifetime",
            // "server/cvatt2_ext.html?get=TGlmZXRpbWU=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TGlmZXRpbWU=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TGlmZXRpbWU=",
            // "https://cv.photocalltv.me/cv2.php?get=TGlmZXRpbWU=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TGlmZXRpbWU=",
            // "https://nebunexa.com/cvatt.php?get=TGlmZXRpbWU=",
            // "https://www.enlatele.tv/player/cv2.php?get=TGlmZXRpbWU=",
        ]
    }
);

MisCanales.set(
    "Las Estrellas",
    {
        pais: "México",
        guide: "ESTRELLAS HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "server/cvatt.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://a3.115tv.site/cvatt.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            servidorCanalesOnline + "edge.html?get=Las_Estrellas",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=El_canal_de_las_estrellas",
            servidorCanalesOnline + "sensa.html?id=Estrellas",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ESTRELLAS",
            // servidorCanalesOnline + "sensa_ext.html?id=Estrellas",
            // "server/cvatt2_ext.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://nebunexa.com/cvatt.php?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==",
        ]
    }
);

MisCanales.set(
    "Fox News",
    {
        pais: "Estados Unidos",
        guide: "FOX news",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rm94X05ld3M=",
            servidorCanalesOnline + "cvatt.html?get=Rm94X05ld3M=",
            // "server/cvatt.html?get=Rm94X05ld3M=",
            // "https://sssshhh.xyz/cvatt.html?get=Rm94X05ld3M=",
            // "https://a3.115tv.site/cvatt.html?get=Rm94X05ld3M=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rm94X05ld3M=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rm94X05ld3M=",
            // "server/cvatt2_ext.html?get=Rm94X05ld3M=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rm94X05ld3M=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rm94X05ld3M=",
            // "https://cv.photocalltv.me/cv2.php?get=Rm94X05ld3M=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rm94X05ld3M=",
            // "https://nebunexa.com/cvatt.php?get=Rm94X05ld3M=",
            // "https://www.enlatele.tv/player/cv2.php?get=Rm94X05ld3M=",
        ]
    }
);

MisCanales.set(
    "BBC News",
    {
        pais: "Reino Unido",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QkJDX1dvcmxkX05ld3M",
            servidorCanalesOnline + "cvatt.html?get=QkJDX1dvcmxkX05ld3M",
            // "server/cvatt.html?get=QkJDX1dvcmxkX05ld3M",
            // "https://sssshhh.xyz/cvatt.html?get=QkJDX1dvcmxkX05ld3M",
            // "https://a3.115tv.site/cvatt.html?get=QkJDX1dvcmxkX05ld3M",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QkJDX1dvcmxkX05ld3M",
            servidorCanalesOnline + "cvatt2_ext.html?get=QkJDX1dvcmxkX05ld3M",
            // "server/cvatt2_ext.html?get=QkJDX1dvcmxkX05ld3M",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QkJDX1dvcmxkX05ld3M",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QkJDX1dvcmxkX05ld3M",
            // "https://cv.photocalltv.me/cv2.php?get=QkJDX1dvcmxkX05ld3M",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QkJDX1dvcmxkX05ld3M",
            // "https://nebunexa.com/cvatt.php?get=QkJDX1dvcmxkX05ld3M",
            // "https://www.enlatele.tv/player/cv2.php?get=QkJDX1dvcmxkX05ld3M",
        ]
    }
);

MisCanales.set(
    "Kanal D Drama",
    {
        pais: "México",
        enlaces: [
            servidorCanalesOnline + "akamaizedpro.html?id=kanalddrama",
            servidorCanalesOnline + "akamaized.html?id=kanalddrama",
            servidorCanalesOnline + "m3u8.html?stream=Kanal_D_DRAMA1",
            servidorCanalesOnline + "m3u8.html?stream=Kanal_D_DRAMA2",
            servidorCanalesOnline + "edge.html?get=Kanal_D_Drama",
            servidorCanalesOnline + "sensa.html?id=KanalD",
            servidorCanalesOnline + "m3u8.html?stream=Kanal_D_DRAMA3",
            // servidorCanalesOnline + "sensa_ext.html?id=KanalD",
        ]
    }
);

MisCanales.set(
    "VOLVER",
    {
        pais: "Argentina",
        guide: "VOLVER",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Vm9sdmVy",
            servidorCanalesOnline + "cvatt.html?get=Vm9sdmVy",
            // "server/cvatt.html?get=Vm9sdmVy",
            // "https://sssshhh.xyz/cvatt.html?get=Vm9sdmVy",
            // "https://a3.115tv.site/cvatt.html?get=Vm9sdmVy",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Vm9sdmVy",
            servidorCanalesOnline + "cvatt2_ext.html?get=Vm9sdmVy",
            servidorCanalesOnline + "edge.html?get=Volver",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Volver",
            servidorCanalesOnline + "tvmia.html?stream=an_VOLVER",
            servidorCanalesOnline + "sensa.html?id=Volver",
            // servidorCanalesOnline + "sensa_ext.html?id=Volver",
            // "server/cvatt2_ext.html?get=Vm9sdmVy",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Vm9sdmVy",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Vm9sdmVy",
            // "https://cv.photocalltv.me/cv2.php?get=Vm9sdmVy",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Vm9sdmVy",
            // "https://nebunexa.com/cvatt.php?get=Vm9sdmVy",
            // "https://www.enlatele.tv/player/cv2.php?get=Vm9sdmVy",
        ]
    }
);

MisCanales.set(
    "KZO Entertainment",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=S1pP",
            servidorCanalesOnline + "cvatt.html?get=S1pP",
            servidorCanalesOnline + "cvatt2_ext.html?get=S1pP",
            servidorCanalesOnline + "tvmia.html?stream=an_KZO_Entertainment",
        ]
    }
);

MisCanales.set(
    "TEC TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "edgectc.html?id=TEC_HD",
            servidorCanalesOnline + "aneviapro.html?id=tecnopolis",
            // servidorCanalesOnline + "aneviapro.html?id=tecnopolis",
            // servidorCanalesOnline + "m3u8.html?stream=TEC_TV",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=TEC_TV",
        ]
    }
);

MisCanales.set(
    "RAI",
    {
        pais: "Italia",
        guide: "Rai HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UkFJ",
            servidorCanalesOnline + "cvatt.html?get=UkFJ",
            // "server/cvatt.html?get=UkFJ",
            // "https://sssshhh.xyz/cvatt.html?get=UkFJ",
            // "https://a3.115tv.site/cvatt.html?get=UkFJ",
            // "https://a3.115tv.site/cvatt2_ext.html?get=UkFJ",
            servidorCanalesOnline + "cvatt2_ext.html?get=UkFJ",
            servidorCanalesOnline + "edge.html?get=RAI_Italia",
            servidorCanalesOnline + "gigared.html?id=RAI",
            servidorCanalesOnline + "gigared_ext.html?id=RAI",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Rai_Italia",
            // "server/cvatt2_ext.html?get=UkFJ",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=UkFJ",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=UkFJ",
            // "https://cv.photocalltv.me/cv2.php?get=UkFJ",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=UkFJ",
            // "https://nebunexa.com/cvatt.php?get=UkFJ",
            // "https://www.enlatele.tv/player/cv2.php?get=UkFJ",
        ]
    }
);

MisCanales.set(
    "SNT",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=U05UX0M0",
            servidorCanalesOnline + "cvatt.html?get=U05UX0M0",
            // "server/cvatt.html?get=U05UX0M0",
            // "https://sssshhh.xyz/cvatt.html?get=U05UX0M0",
            // "https://a3.115tv.site/cvatt.html?get=U05UX0M0",
            // "https://a3.115tv.site/cvatt2_ext.html?get=U05UX0M0",
            servidorCanalesOnline + "cvatt2_ext.html?get=U05UX0M0",
            // servidorCanalesOnline + "tvmia.html?stream=SNT_PARA",
            // "server/cvatt2_ext.html?get=U05UX0M0",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=U05UX0M0",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=U05UX0M0",
            // "https://cv.photocalltv.me/cv2.php?get=U05UX0M0",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=U05UX0M0",
            // "https://nebunexa.com/cvatt.php?get=U05UX0M0",
            // "https://www.enlatele.tv/player/cv2.php?get=U05UX0M0",
        ]
    }
);

MisCanales.set(
    "Cartoonito",
    {
        pais: "Estados Unidos",
        guide: "CARTOONITO",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Qm9vbWVyYW5n",
            servidorCanalesOnline + "cvatt.html?get=Qm9vbWVyYW5n",
            // "server/cvatt.html?get=Qm9vbWVyYW5n",
            // "https://sssshhh.xyz/cvatt.html?get=Qm9vbWVyYW5n",
            // "https://a3.115tv.site/cvatt.html?get=Qm9vbWVyYW5n",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Qm9vbWVyYW5n",
            servidorCanalesOnline + "cvatt2_ext.html?get=Qm9vbWVyYW5n",
            servidorCanalesOnline + "akamaizedpro.html?id=cartoonitohd",
            servidorCanalesOnline + "akamaized.html?id=cartoonitohd",
            servidorCanalesOnline + "aneviapro.html?id=Boomerang",
            servidorCanalesOnline + "megacable.html?id=Cartoonito",
            servidorCanalesOnline + "megacablepro.html?id=Cartoonito",
            servidorCanalesOnline + "sensa.html?id=Boomerang",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Boomerang",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=CARTOONITO",
            // servidorCanalesOnline + "sensa_ext.html?id=Boomerang",
            // "server/cvatt2_ext.html?get=Qm9vbWVyYW5n",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Qm9vbWVyYW5n",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Qm9vbWVyYW5n",
            // "https://cv.photocalltv.me/cv2.php?get=Qm9vbWVyYW5n",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Qm9vbWVyYW5n",
            // "https://nebunexa.com/cvatt.php?get=Qm9vbWVyYW5n",
            // "https://www.enlatele.tv/player/cv2.php?get=Qm9vbWVyYW5n",
        ]
    }
);

MisCanales.set(
    "Cartoon Network",
    {
        pais: "Estados Unidos",
        guide: "CARTOON NETWORK HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FydG9vbk5ldHdvcms=",
            servidorCanalesOnline + "cvatt.html?get=Q2FydG9vbk5ldHdvcms=",
            // "server/cvatt.html?get=Q2FydG9vbk5ldHdvcms=",
            // "https://sssshhh.xyz/cvatt.html?get=Q2FydG9vbk5ldHdvcms=",
            // "https://a3.115tv.site/cvatt.html?get=Q2FydG9vbk5ldHdvcms=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q2FydG9vbk5ldHdvcms=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FydG9vbk5ldHdvcms=",
            servidorCanalesOnline + "akamaizedpro.html?id=cartoonnetworks",
            servidorCanalesOnline + "akamaized.html?id=cartoonnetworks",
            servidorCanalesOnline + "aneviapro.html?id=Cartoon_Network",
            servidorCanalesOnline + "edge.html?get=Cartoon_Network",
            servidorCanalesOnline + "sensa.html?id=CartoonNetwork",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Cartoon_Networks_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=CARTOON",
            servidorCanalesOnline + "vriootts.html?id=Cartoonnetwork",
            // servidorCanalesOnline + "sensa_ext.html?id=CartoonNetwork",
            // "server/cvatt2_ext.html?get=Q2FydG9vbk5ldHdvcms=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q2FydG9vbk5ldHdvcms=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q2FydG9vbk5ldHdvcms=",
            // "https://cv.photocalltv.me/cv2.php?get=Q2FydG9vbk5ldHdvcms=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q2FydG9vbk5ldHdvcms=",
            // "https://nebunexa.com/cvatt.php?get=Q2FydG9vbk5ldHdvcms=",
            // "https://www.enlatele.tv/player/cv2.php?get=Q2FydG9vbk5ldHdvcms=",
        ]
    }
);

MisCanales.set(
    "Disney Channel",
    {
        pais: "Estados Unidos",
        guide: "Disney channel HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlzbmV5Q2hhbm5lbEhE",
            servidorCanalesOnline + "cvatt.html?get=RGlzbmV5Q2hhbm5lbEhE",
            // "server/cvatt.html?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://sssshhh.xyz/cvatt.html?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://a3.115tv.site/cvatt.html?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlzbmV5Q2hhbm5lbEhE",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlzbmV5Q2hhbm5lbEhE",
            servidorCanalesOnline + "megacable.html?id=Disney_Channel_HD",
            servidorCanalesOnline + "megacablepro.html?id=Disney_Channel_HD",
            servidorCanalesOnline + "aneviapro.html?id=Disney_Channel",
            servidorCanalesOnline + "edge.html?get=Disney_Channel",
            servidorCanalesOnline + "gigared.html?id=Disney_Channel",
            servidorCanalesOnline + "gigared_ext.html?id=Disney_Channel",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Disney_Channel_HD",
            // servidorCanalesOnline + "tvmia.html?stream=sn_DISNEY_CHANNEL",
            servidorCanalesOnline + "sensa.html?id=DisneyCh",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=DISNEY",
            // servidorCanalesOnline + "sensa_ext.html?id=DisneyCh",
            // "server/cvatt2_ext.html?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://cv.photocalltv.me/cv2.php?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://nebunexa.com/cvatt.php?get=RGlzbmV5Q2hhbm5lbEhE",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlzbmV5Q2hhbm5lbEhE",
        ]
    }
);

MisCanales.set(
    "Disney JR",
    {
        pais: "Estados Unidos",
        guide: "Disney Junior HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlzbmV5SnI=",
            servidorCanalesOnline + "cvatt.html?get=RGlzbmV5SnI=",
            // "server/cvatt.html?get=RGlzbmV5SnI=",
            // "https://sssshhh.xyz/cvatt.html?get=RGlzbmV5SnI=",
            // "https://a3.115tv.site/cvatt.html?get=RGlzbmV5SnI=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlzbmV5SnI=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlzbmV5SnI=",
            servidorCanalesOnline + "megacable.html?id=Disney_Jr",
            servidorCanalesOnline + "megacablepro.html?id=Disney_Jr",
            servidorCanalesOnline + "edge.html?get=Disney_Jr",
            servidorCanalesOnline + "sensa.html?id=DisneyJR",
            servidorCanalesOnline + "gigared.html?id=Disney_Junior",
            servidorCanalesOnline + "gigared_ext.html?id=Disney_Junior",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Disney_Junior",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=DISNEY_JR",
            // servidorCanalesOnline + "sensa_ext.html?id=DisneyJR",
            // "server/cvatt2_ext.html?get=RGlzbmV5SnI=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlzbmV5SnI=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlzbmV5SnI=",
            // "https://cv.photocalltv.me/cv2.php?get=RGlzbmV5SnI=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlzbmV5SnI=",
            // "https://nebunexa.com/cvatt.php?get=RGlzbmV5SnI=",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlzbmV5SnI=",
        ]
    }
);

MisCanales.set(
    "Discovery Kids",
    {
        pais: "Estados Unidos",
        guide: "Discovery Kids HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlzY292ZXJ5X0tpZHM=",
            servidorCanalesOnline + "cvatt.html?get=RGlzY292ZXJ5X0tpZHM=",
            // "server/cvatt.html?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://sssshhh.xyz/cvatt.html?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://a3.115tv.site/cvatt.html?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlzY292ZXJ5X0tpZHM=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlzY292ZXJ5X0tpZHM=",
            servidorCanalesOnline + "akamaizedpro.html?id=discoverykids",
            servidorCanalesOnline + "akamaized.html?id=discoverykids",
            servidorCanalesOnline + "aneviapro.html?id=Discovery_Kids",
            servidorCanalesOnline + "sensa.html?id=DiscoveryKids",
            servidorCanalesOnline + "gigared.html?id=Discovery_Kids",
            servidorCanalesOnline + "gigared_ext.html?id=Discovery_Kids",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Discovery_Kids_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Discovery_KIDS",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryKids",
            // "server/cvatt2_ext.html?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://cv.photocalltv.me/cv2.php?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://nebunexa.com/cvatt.php?get=RGlzY292ZXJ5X0tpZHM=",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlzY292ZXJ5X0tpZHM=",
        ]
    }
);

MisCanales.set(
    "NICK",
    {
        pais: "Estados Unidos",
        guide: "Nickelodeon HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Tmlja2Vsb2Rlb24=",
            servidorCanalesOnline + "cvatt.html?get=Tmlja2Vsb2Rlb24=",
            // "server/cvatt.html?get=Tmlja2Vsb2Rlb24=",
            // "https://sssshhh.xyz/cvatt.html?get=Tmlja2Vsb2Rlb24=",
            // "https://a3.115tv.site/cvatt.html?get=Tmlja2Vsb2Rlb24=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Tmlja2Vsb2Rlb24=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Tmlja2Vsb2Rlb24=",
            servidorCanalesOnline + "akamaizedpro.html?id=Nickelodeon",
            servidorCanalesOnline + "akamaized.html?id=Nickelodeon",
            servidorCanalesOnline + "aneviapro.html?id=Nick",
            servidorCanalesOnline + "gigared.html?id=Nickelodeon",
            servidorCanalesOnline + "gigared_ext.html?id=Nickelodeon",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Nickelodeon",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=NICK",
            // "server/cvatt2_ext.html?get=Tmlja2Vsb2Rlb24=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Tmlja2Vsb2Rlb24=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Tmlja2Vsb2Rlb24=",
            // "https://cv.photocalltv.me/cv2.php?get=Tmlja2Vsb2Rlb24=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Tmlja2Vsb2Rlb24=",
            // "https://nebunexa.com/cvatt.php?get=Tmlja2Vsb2Rlb24=",
            // "https://www.enlatele.tv/player/cv2.php?get=Tmlja2Vsb2Rlb24=",
        ]
    }
);

MisCanales.set(
    "NICK JR",
    {
        pais: "Estados Unidos",
        guide: "Nick Jr HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Tmlja19Kcg==",
            servidorCanalesOnline + "cvatt.html?get=Tmlja19Kcg==",
            // "server/cvatt.html?get=Tmlja19Kcg==",
            // "https://sssshhh.xyz/cvatt.html?get=Tmlja19Kcg==",
            // "https://a3.115tv.site/cvatt.html?get=Tmlja19Kcg==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Tmlja19Kcg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Tmlja19Kcg==",
            servidorCanalesOnline + "akamaizedpro.html?id=nickjrhd",
            servidorCanalesOnline + "akamaized.html?id=nickjrhd",
            servidorCanalesOnline + "aneviapro.html?id=Nick_Jr",
            servidorCanalesOnline + "sensa.html?id=NickJrCo",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Nick_Junior",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=NICK_JR",
            // servidorCanalesOnline + "sensa_ext.html?id=NickJrCo",
            // "server/cvatt2_ext.html?get=Tmlja19Kcg==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Tmlja19Kcg==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Tmlja19Kcg==",
            // "https://cv.photocalltv.me/cv2.php?get=Tmlja19Kcg==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Tmlja19Kcg==",
            // "https://nebunexa.com/cvatt.php?get=Tmlja19Kcg==",
            // "https://www.enlatele.tv/player/cv2.php?get=Tmlja19Kcg==",
        ]
    }
);

MisCanales.set(
    "TEEN NICK",
    {
        pais: "Estados Unidos",
        guide: "Teen Nick",
        enlaces: [
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=TEEN_NICK",
        ]
    }
);

MisCanales.set(
    "Canal Infantil",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "iptvperu.html?id=canalinfantil",
            // servidorCanalesOnline + "sensa.html?id=CanalInfantil",
            servidorCanalesOnline + "edge.html?get=Canal_Infantil",
            servidorCanalesOnline + "sensa_ext.html?id=CanalInfantil",
        ]
    }
);

MisCanales.set(
    "ZooMoo",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "gigared.html?id=Zoo_Moo",
            servidorCanalesOnline + "gigared_ext.html?id=Zoo_Moo",
            servidorCanalesOnline + "edge.html?get=Zoomoo",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=ZooMoo_HD",
            // servidorCanalesOnline + "sensa.html?id=ZooMoo",
            servidorCanalesOnline + "sensa_ext.html?id=ZooMoo",
        ]
    }
);

MisCanales.set(
    "BABY TV",
    {
        pais: "Argentina",
        guide: "Baby TV",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QmFieVRW",
            servidorCanalesOnline + "cvatt.html?get=QmFieVRW",
            servidorCanalesOnline + "cvatt2_ext.html?get=QmFieVRW",
            servidorCanalesOnline + "edge.html?get=Baby_TV",
            servidorCanalesOnline + "sensa.html?id=BabyTV",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=BABY_TV",
            // servidorCanalesOnline + "sensa_ext.html?id=BabyTV",
        ]
    }
);

MisCanales.set(
    "Box Kids TV",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Box_Kids_TV",
        ]
    }
);

MisCanales.set(
    "Tooncast",
    {
        pais: "Argentina",
        guide: "TOONCAST",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VG9vbmNhc3Q=",
            servidorCanalesOnline + "cvatt.html?get=VG9vbmNhc3Q=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VG9vbmNhc3Q=",
            servidorCanalesOnline + "aneviapro.html?id=Tooncast",
            servidorCanalesOnline + "edge.html?get=Tooncast",
            servidorCanalesOnline + "sensa.html?id=Tooncast",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Tooncast",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=TOONCAST",
            // servidorCanalesOnline + "sensa_ext.html?id=Tooncast",
        ]
    }
);

MisCanales.set(
    "BOING",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=boing",
            // "https://172m3u8.netlify.app/?id=Boing",
            // servidorCanalesOnline + "tvmia.html?stream=sn_BOING",
            servidorCanalesOnline + "mpd_es.html?id=BOING",
        ]
    }
);

MisCanales.set(
    "Plim Plim",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UGxpbV9QbGlt",
            servidorCanalesOnline + "cvatt.html?get=UGxpbV9QbGlt",
            servidorCanalesOnline + "cvatt2_ext.html?get=UGxpbV9QbGlt",
            servidorCanalesOnline + "edge.html?get=Plim_Plim",
            servidorCanalesOnline + "gigared.html?id=Plim_Plim",
            servidorCanalesOnline + "gigared_ext.html?id=Plim_Plim",
        ]
    }
);

MisCanales.set(
    "Kidoo",
    {
        pais: "Chile",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=S2lkb28=",
            servidorCanalesOnline + "cvatt.html?get=S2lkb28=",
            servidorCanalesOnline + "cvatt2_ext.html?get=S2lkb28=",
        ]
    }
);

MisCanales.set(
    "Adult Swim",
    {
        pais: "Estados Unidos",
        guide: "adult swim",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QWR1bHRfU3dpbQ==",
            servidorCanalesOnline + "cvatt.html?get=QWR1bHRfU3dpbQ==",
            // "server/cvatt.html?get=QWR1bHRfU3dpbQ==",
            // "https://sssshhh.xyz/cvatt.html?get=QWR1bHRfU3dpbQ==",
            // "https://a3.115tv.site/cvatt.html?get=QWR1bHRfU3dpbQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QWR1bHRfU3dpbQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=QWR1bHRfU3dpbQ==",
            servidorCanalesOnline + "akamaizedpro.html?id=adultswim",
            servidorCanalesOnline + "akamaized.html?id=adultswim",
            servidorCanalesOnline + "sensa.html?id=AdultSwim",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=ADULT_SWIM",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ADULT_SWIM",
            // servidorCanalesOnline + "sensa_ext.html?id=AdultSwim",
            servidorCanalesOnline + "extension.html?get=ADULT_SWIM",
            // "server/cvatt2_ext.html?get=QWR1bHRfU3dpbQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QWR1bHRfU3dpbQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QWR1bHRfU3dpbQ==",
            // "https://cv.photocalltv.me/cv2.php?get=QWR1bHRfU3dpbQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QWR1bHRfU3dpbQ==",
            // "https://nebunexa.com/cvatt.php?get=QWR1bHRfU3dpbQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=QWR1bHRfU3dpbQ==",
        ]
    }
);

MisCanales.set(
    "Dreamworks",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RHJlYW13b3Jrcw==",
            servidorCanalesOnline + "cvatt.html?get=RHJlYW13b3Jrcw==",
            // "server/cvatt.html?get=RHJlYW13b3Jrcw==",
            // "https://sssshhh.xyz/cvatt.html?get=RHJlYW13b3Jrcw==",
            // "https://a3.115tv.site/cvatt.html?get=RHJlYW13b3Jrcw==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RHJlYW13b3Jrcw==",
            servidorCanalesOnline + "cvatt2_ext.html?get=RHJlYW13b3Jrcw==",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=DreamWorks_HD",
            // "server/cvatt2_ext.html?get=RHJlYW13b3Jrcw==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RHJlYW13b3Jrcw==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RHJlYW13b3Jrcw==",
            // "https://cv.photocalltv.me/cv2.php?get=RHJlYW13b3Jrcw==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RHJlYW13b3Jrcw==",
            // "https://nebunexa.com/cvatt.php?get=RHJlYW13b3Jrcw==",
            // "https://www.enlatele.tv/player/cv2.php?get=RHJlYW13b3Jrcw==",
        ]
    }
);

MisCanales.set(
    "PAKA PAKA",
    {
        pais: "Argentina",
        guide: "PAKA PAKA",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UEFLQV9QQUtB",
            servidorCanalesOnline + "cvatt.html?get=UEFLQV9QQUtB",
            // "server/cvatt.html?get=UEFLQV9QQUtB",
            // "https://sssshhh.xyz/cvatt.html?get=UEFLQV9QQUtB",
            // "https://a3.115tv.site/cvatt.html?get=UEFLQV9QQUtB",
            // "https://a3.115tv.site/cvatt2_ext.html?get=UEFLQV9QQUtB",
            servidorCanalesOnline + "cvatt2_ext.html?get=UEFLQV9QQUtB",
            servidorCanalesOnline + "edge.html?get=Paka_Paka",
            servidorCanalesOnline + "gigared.html?id=PakaPaka",
            servidorCanalesOnline + "gigared_ext.html?id=PakaPaka",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Paka_Paka",
            servidorCanalesOnline + "tvmia.html?stream=an_Paka_Paka",
            servidorCanalesOnline + "sensa.html?id=PakaPaka",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=PAKA_PAKA",
            // servidorCanalesOnline + "sensa_ext.html?id=PakaPaka",
            // "server/cvatt2_ext.html?get=UEFLQV9QQUtB",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=UEFLQV9QQUtB",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=UEFLQV9QQUtB",
            // "https://cv.photocalltv.me/cv2.php?get=UEFLQV9QQUtB",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=UEFLQV9QQUtB",
            // "https://nebunexa.com/cvatt.php?get=UEFLQV9QQUtB",
            // "https://www.enlatele.tv/player/cv2.php?get=UEFLQV9QQUtB",
        ]
    }
);

MisCanales.set(
    "MTV",
    {
        pais: "Estados Unidos",
        guide: "MTV HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TVRWX0hE",
            servidorCanalesOnline + "cvatt.html?get=TVRWX0hE",
            // "server/cvatt.html?get=TVRWX0hE",
            // "https://sssshhh.xyz/cvatt.html?get=TVRWX0hE",
            // "https://a3.115tv.site/cvatt.html?get=TVRWX0hE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TVRWX0hE",
            servidorCanalesOnline + "cvatt2_ext.html?get=TVRWX0hE",
            servidorCanalesOnline + "aneviapro.html?id=MTV",
            servidorCanalesOnline + "sensa.html?id=MTV",
            servidorCanalesOnline + "gigared.html?id=MTV",
            servidorCanalesOnline + "gigared_ext.html?id=MTV",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=MTV",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=MTV",
            // servidorCanalesOnline + "sensa_ext.html?id=MTV",
            // "server/cvatt2_ext.html?get=TVRWX0hE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TVRWX0hE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TVRWX0hE",
            // "https://cv.photocalltv.me/cv2.php?get=TVRWX0hE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TVRWX0hE",
            // "https://nebunexa.com/cvatt.php?get=TVRWX0hE",
            // "https://www.enlatele.tv/player/cv2.php?get=TVRWX0hE",
        ]
    }
);

MisCanales.set(
    "MTV 80s",
    {
        pais: "Estados Unidos",
        enlaces: [
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=MTV_80s",
        ]
    }
);

MisCanales.set(
    "MTV LIVE",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=MTVLive",
            // servidorCanalesOnline + "sensa_ext.html?id=MTVLive",
        ]
    }
);

MisCanales.set(
    "TELEHIT",
    {
        pais: "Estados Unidos",
        guide: "TELEHIT HD",
        enlaces: [
            servidorCanalesOnline + "gigared.html?id=Telehit_Musica",
            servidorCanalesOnline + "gigared_ext.html?id=Telehit_Musica",
            servidorCanalesOnline + "sensa.html?id=Telehit",
            // servidorCanalesOnline + "sensa_ext.html?id=Telehit",
        ]
    }
);

MisCanales.set(
    "Mi Música HITS",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=MiMusicaHit",
            // servidorCanalesOnline + "sensa_ext.html?id=MiMusicaHit",
        ]
    }
);

MisCanales.set(
    "Mi Música Reggaeton",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=MiMusicaReggaeton",
            // servidorCanalesOnline + "sensa_ext.html?id=MiMusicaReggaeton",
        ]
    }
);

MisCanales.set(
    "Mi Música Romantica",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=MiMusicaRomantica",
            // servidorCanalesOnline + "sensa_ext.html?id=MiMusicaRomantica",
        ]
    }
);

MisCanales.set(
    "Mi Música K-POP",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "sensa.html?id=MiMusicaKPOP",
            // servidorCanalesOnline + "sensa_ext.html?id=MiMusicaKPOP",
        ]
    }
);

MisCanales.set(
    "Vorterix",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Vm9ydGVyaXg=",
            servidorCanalesOnline + "cvatt.html?get=Vm9ydGVyaXg=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Vm9ydGVyaXg=",
        ]
    }
);

MisCanales.set(
    "Allegro",
    {
        pais: "Estados Unidos",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QWxsZWdyb0hE",
            servidorCanalesOnline + "cvatt.html?get=QWxsZWdyb0hE",
            servidorCanalesOnline + "cvatt2_ext.html?get=QWxsZWdyb0hE",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Allegro_HD",
            servidorCanalesOnline + "sensa.html?id=Allegro",
            // servidorCanalesOnline + "sensa_ext.html?id=Allegro",
        ]
    }
);

MisCanales.set(
    "CM",
    {
        pais: "Argentina",
        guide: "CM HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q00=",
            servidorCanalesOnline + "cvatt.html?get=Q00=",
            // "server/cvatt.html?get=Q00=",
            // "https://sssshhh.xyz/cvatt.html?get=Q00=",
            // "https://a3.115tv.site/cvatt.html?get=Q00=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Q00=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q00=",
            servidorCanalesOnline + "edge.html?get=CM",
            servidorCanalesOnline + "gigared.html?id=CM",
            servidorCanalesOnline + "gigared_ext.html?id=CM",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=CM_Musical",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=CM",
            // "server/cvatt2_ext.html?get=Q00=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Q00=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Q00=",
            // "https://cv.photocalltv.me/cv2.php?get=Q00=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Q00=",
            // "https://nebunexa.com/cvatt.php?get=Q00=",
            // "https://www.enlatele.tv/player/cv2.php?get=Q00=",
        ]
    }
);

MisCanales.set(
    "HTV",
    {
        pais: "Estados Unidos",
        guide: "hTV",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SFRW",
            servidorCanalesOnline + "cvatt.html?get=SFRW",
            // "server/cvatt.html?get=SFRW",
            // "https://sssshhh.xyz/cvatt.html?get=SFRW",
            // "https://a3.115tv.site/cvatt.html?get=SFRW",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SFRW",
            servidorCanalesOnline + "cvatt2_ext.html?get=SFRW",
            servidorCanalesOnline + "akamaizedpro.html?id=htv",
            servidorCanalesOnline + "akamaized.html?id=htv",
            servidorCanalesOnline + "edge.html?get=HTV",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=HTV",
            // "server/cvatt2_ext.html?get=SFRW",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SFRW",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SFRW",
            // "https://cv.photocalltv.me/cv2.php?get=SFRW",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SFRW",
            // "https://nebunexa.com/cvatt.php?get=SFRW",
            // "https://www.enlatele.tv/player/cv2.php?get=SFRW",
        ]
    }
);

MisCanales.set(
    "Quiero",
    {
        pais: "Argentina",
        guide: "QUIERO",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=UXVpZXJvX0hE",
            servidorCanalesOnline + "cvatt.html?get=UXVpZXJvX0hE",
            // "server/cvatt.html?get=UXVpZXJvX0hE",
            // "https://sssshhh.xyz/cvatt.html?get=UXVpZXJvX0hE",
            // "https://a3.115tv.site/cvatt.html?get=UXVpZXJvX0hE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=UXVpZXJvX0hE",
            servidorCanalesOnline + "cvatt2_ext.html?get=UXVpZXJvX0hE",
            servidorCanalesOnline + "edge.html?get=Quiero",
            servidorCanalesOnline + "gigared.html?id=Quiero_Musica",
            servidorCanalesOnline + "gigared_ext.html?id=Quiero_Musica",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Quiero_Musica",
            servidorCanalesOnline + "sensa.html?id=QuieroMusica",
            // servidorCanalesOnline + "sensa_ext.html?id=QuieroMusica",
            // "server/cvatt2_ext.html?get=UXVpZXJvX0hE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=UXVpZXJvX0hE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=UXVpZXJvX0hE",
            // "https://cv.photocalltv.me/cv2.php?get=UXVpZXJvX0hE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=UXVpZXJvX0hE",
            // "https://nebunexa.com/cvatt.php?get=UXVpZXJvX0hE",
            // "https://www.enlatele.tv/player/cv2.php?get=UXVpZXJvX0hE",
        ]
    }
);

MisCanales.set(
    "Venus Media",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VmVudXNfTWVkaWE=",
            servidorCanalesOnline + "cvatt.html?get=VmVudXNfTWVkaWE=",
            servidorCanalesOnline + "cvatt2_ext.html?get=VmVudXNfTWVkaWE=",
        ]
    }
);

MisCanales.set(
    "Flow Music XP",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rmxvd19NdXNpY19YUA==",
            servidorCanalesOnline + "cvatt.html?get=Rmxvd19NdXNpY19YUA==",
            // "server/cvatt.html?get=Rmxvd19NdXNpY19YUA==",
            // "https://sssshhh.xyz/cvatt.html?get=Rmxvd19NdXNpY19YUA==",
            // "https://a3.115tv.site/cvatt.html?get=Rmxvd19NdXNpY19YUA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rmxvd19NdXNpY19YUA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rmxvd19NdXNpY19YUA==",
            // "server/cvatt2_ext.html?get=Rmxvd19NdXNpY19YUA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rmxvd19NdXNpY19YUA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rmxvd19NdXNpY19YUA==",
            // "https://cv.photocalltv.me/cv2.php?get=Rmxvd19NdXNpY19YUA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rmxvd19NdXNpY19YUA==",
            // "https://nebunexa.com/cvatt.php?get=Rmxvd19NdXNpY19YUA==",
            // "https://www.enlatele.tv/player/cv2.php?get=Rmxvd19NdXNpY19YUA==",
        ]
    }
);

MisCanales.set(
    "Flow Music 1",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            servidorCanalesOnline + "cvatt.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "server/cvatt.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "https://sssshhh.xyz/cvatt.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "https://a3.115tv.site/cvatt.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            servidorCanalesOnline + "cvatt2_ext.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "server/cvatt2_ext.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "https://cv.photocalltv.me/cv2.php?get=Rmxvd19NdXNpY18x",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "https://nebunexa.com/cvatt.php?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
            // "https://www.enlatele.tv/player/cv2.php?get=Rmxvd19NdXNpY18x", // Queda el logo, no trasmite
        ]
    }
);

MisCanales.set(
    "Flow Eventos",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RXZlbnRvc19IRF9VeQ==",
            servidorCanalesOnline + "cvatt.html?get=RXZlbnRvc19IRF9VeQ==",
            // "server/cvatt.html?get=RXZlbnRvc19IRF9VeQ==",
            // "https://sssshhh.xyz/cvatt.html?get=RXZlbnRvc19IRF9VeQ==",
            // "https://a3.115tv.site/cvatt.html?get=RXZlbnRvc19IRF9VeQ==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RXZlbnRvc19IRF9VeQ==",
            servidorCanalesOnline + "cvatt2_ext.html?get=RXZlbnRvc19IRF9VeQ==",
            // "server/cvatt2_ext.html?get=RXZlbnRvc19IRF9VeQ==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RXZlbnRvc19IRF9VeQ==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RXZlbnRvc19IRF9VeQ==",
            // "https://cv.photocalltv.me/cv2.php?get=RXZlbnRvc19IRF9VeQ==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RXZlbnRvc19IRF9VeQ==",
            // "https://nebunexa.com/cvatt.php?get=RXZlbnRvc19IRF9VeQ==",
            // "https://www.enlatele.tv/player/cv2.php?get=RXZlbnRvc19IRF9VeQ==",
        ]
    }
);

MisCanales.set(
    "Discovery Channel",
    {
        pais: "Estados Unidos",
        guide: "Discovery Channel HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlzY292ZXJ5SEQ=",
            servidorCanalesOnline + "cvatt.html?get=RGlzY292ZXJ5SEQ=",
            // "server/cvatt.html?get=RGlzY292ZXJ5SEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=RGlzY292ZXJ5SEQ=",
            // "https://a3.115tv.site/cvatt.html?get=RGlzY292ZXJ5SEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlzY292ZXJ5SEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlzY292ZXJ5SEQ=",
            servidorCanalesOnline + "aneviapro.html?id=Discovery",
            servidorCanalesOnline + "sensa.html?id=DiscoveryChannel",
            servidorCanalesOnline + "gigared.html?id=Discovery_Channel",
            servidorCanalesOnline + "gigared_ext.html?id=Discovery_Channel",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Discovery_Channel_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=DISCOVERY_CHANNEL_BACKUP",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryChannel",
            // "server/cvatt2_ext.html?get=RGlzY292ZXJ5SEQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlzY292ZXJ5SEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlzY292ZXJ5SEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=RGlzY292ZXJ5SEQ",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlzY292ZXJ5SEQ=",
            // "https://nebunexa.com/cvatt.php?get=RGlzY292ZXJ5SEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlzY292ZXJ5SEQ=",
        ]
    }
);

MisCanales.set(
    "Discovery World",
    {
        pais: "Estados Unidos",
        guide: "Discovery World HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            servidorCanalesOnline + "cvatt.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "server/cvatt.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://sssshhh.xyz/cvatt.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://a3.115tv.site/cvatt.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            servidorCanalesOnline + "sensa.html?id=DiscoveryWorld",
            servidorCanalesOnline + "gigared.html?id=Discovery_World",
            servidorCanalesOnline + "gigared_ext.html?id=Discovery_World",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Discovery_World_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Discovery_WORLD",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryWorld",
            // "server/cvatt2_ext.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://cv.photocalltv.me/cv2.php?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://nebunexa.com/cvatt.php?get=RGlzY292ZXJ5X1dvcmxkX0hE",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlzY292ZXJ5X1dvcmxkX0hE",
        ]
    }
);

MisCanales.set(
    "Discovery Theater",
    {
        pais: "Estados Unidos",
        guide: "Discovery Theater HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VGhlYXRlcl9IRA==",
            servidorCanalesOnline + "cvatt.html?get=VGhlYXRlcl9IRA==",
            // "server/cvatt.html?get=VGhlYXRlcl9IRA==",
            // "https://sssshhh.xyz/cvatt.html?get=VGhlYXRlcl9IRA==",
            // "https://a3.115tv.site/cvatt.html?get=VGhlYXRlcl9IRA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VGhlYXRlcl9IRA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=VGhlYXRlcl9IRA==",
            servidorCanalesOnline + "sensa.html?id=DiscoveryTheater",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Discovery_Theater_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Discovery_THEATER",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryTheater",
            // "server/cvatt2_ext.html?get=VGhlYXRlcl9IRA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VGhlYXRlcl9IRA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VGhlYXRlcl9IRA==",
            // "https://cv.photocalltv.me/cv2.php?get=VGhlYXRlcl9IRA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VGhlYXRlcl9IRA==",
            // "https://nebunexa.com/cvatt.php?get=VGhlYXRlcl9IRA==",
            // "https://www.enlatele.tv/player/cv2.php?get=VGhlYXRlcl9IRA==",
        ]
    }
);

MisCanales.set(
    "Discovery Science",
    {
        pais: "Estados Unidos",
        guide: "Discovery Science HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            servidorCanalesOnline + "cvatt.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "server/cvatt.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://sssshhh.xyz/cvatt.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://a3.115tv.site/cvatt.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            servidorCanalesOnline + "sensa.html?id=DiscoveryScience",
            servidorCanalesOnline + "gigared.html?id=Discovery_Science",
            servidorCanalesOnline + "gigared_ext.html?id=Discovery_Science",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Discovery_Science",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Discovery_SCIENCE",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryScience",
            // "server/cvatt2_ext.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://cv.photocalltv.me/cv2.php?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://nebunexa.com/cvatt.php?get=RGlzY292ZXJ5X1NjaWVuY2U=",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlzY292ZXJ5X1NjaWVuY2U=",
        ]
    }
);

MisCanales.set(
    "Discovery TLC",
    {
        pais: "Estados Unidos",
        guide: "TLC HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=VExD",
            servidorCanalesOnline + "cvatt.html?get=VExD",
            // "server/cvatt.html?get=VExD",
            // "https://sssshhh.xyz/cvatt.html?get=VExD",
            // "https://a3.115tv.site/cvatt.html?get=VExD",
            // "https://a3.115tv.site/cvatt2_ext.html?get=VExD",
            servidorCanalesOnline + "cvatt2_ext.html?get=VExD",
            servidorCanalesOnline + "edge.html?get=Discovery_TLC",
            servidorCanalesOnline + "sensa.html?id=DiscoveryTravelAndLiving",
            servidorCanalesOnline + "gigared.html?id=TLC",
            servidorCanalesOnline + "gigared_ext.html?id=TLC",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Discovery_TLC",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Discovery_TLC",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryTravelAndLiving",
            // "server/cvatt2_ext.html?get=VExD",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=VExD",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=VExD",
            // "https://cv.photocalltv.me/cv2.php?get=VExD",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=VExD",
            // "https://nebunexa.com/cvatt.php?get=VExD",
            // "https://www.enlatele.tv/player/cv2.php?get=VExD",
        ]
    }
);

MisCanales.set(
    "Discovery Turbo",
    {
        pais: "Estados Unidos",
        guide: "TURBO",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlzY292ZXJ5VHVyYm8=",
            servidorCanalesOnline + "cvatt.html?get=RGlzY292ZXJ5VHVyYm8=",
            // "server/cvatt.html?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://sssshhh.xyz/cvatt.html?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://a3.115tv.site/cvatt.html?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlzY292ZXJ5VHVyYm8=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlzY292ZXJ5VHVyYm8=",
            servidorCanalesOnline + "aneviapro.html?id=Discovery_Turbo",
            servidorCanalesOnline + "gigared.html?id=Discovery_Turbo",
            servidorCanalesOnline + "gigared_ext.html?id=Discovery_Turbo",
            servidorCanalesOnline + "sensa.html?id=DiscoveryTurbo",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Discovery_TURBO",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryTurbo",
            // "server/cvatt2_ext.html?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://cv.photocalltv.me/cv2.php?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://nebunexa.com/cvatt.php?get=RGlzY292ZXJ5VHVyYm8=",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlzY292ZXJ5VHVyYm8=",
        ]
    }
);

MisCanales.set(
    "Discovery H&H",
    {
        pais: "Estados Unidos",
        guide: "Home & Health",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            servidorCanalesOnline + "cvatt.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "server/cvatt.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://sssshhh.xyz/cvatt.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://a3.115tv.site/cvatt.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            servidorCanalesOnline + "edge.html?get=Discovery_HyH",
            servidorCanalesOnline + "sensa.html?id=DiscoveryHomeHealth",
            servidorCanalesOnline + "gigared.html?id=Discovery_HyH",
            servidorCanalesOnline + "gigared_ext.html?id=Discovery_HyH",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=DIscovery_H_H_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Discovery_Home_Health",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryHomeHealth",
            // "server/cvatt2_ext.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://cv.photocalltv.me/cv2.php?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://nebunexa.com/cvatt.php?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE",
        ]
    }
);

MisCanales.set(
    "Discovery ID",
    {
        pais: "Estados Unidos",
        guide: "ID",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SUQ=",
            servidorCanalesOnline + "cvatt.html?get=SUQ=",
            // "server/cvatt.html?get=SUQ=",
            // "https://sssshhh.xyz/cvatt.html?get=SUQ=",
            // "https://a3.115tv.site/cvatt.html?get=SUQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SUQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=SUQ=",
            servidorCanalesOnline + "aneviapro.html?id=Discovery_ID",
            servidorCanalesOnline + "sensa.html?id=DiscoveryID",
            servidorCanalesOnline + "gigared.html?id=Investigation_discovery",
            servidorCanalesOnline + "gigared_ext.html?id=Investigation_discovery",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Discovery_ID_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=Discovery_ID",
            // servidorCanalesOnline + "sensa_ext.html?id=DiscoveryID",
            // "server/cvatt2_ext.html?get=SUQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SUQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SUQ=",
            // "https://cv.photocalltv.me/cv2.php?get=SUQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SUQ=",
            // "https://nebunexa.com/cvatt.php?get=SUQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=SUQ=",
        ]
    }
);

MisCanales.set(
    "DMAX",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=DMAX",
            servidorCanalesOnline + "zapitvpro.html?id=dmax",
            // servidorCanalesOnline + "tvmia.html?stream=sn_DMAX",
        ]
    }
);

MisCanales.set(
    "SUN",
    {
        pais: "Panamá",
        guide: "SUN Channel HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=U3VuX0NoYW5uZWw=",
            servidorCanalesOnline + "cvatt.html?get=U3VuX0NoYW5uZWw=",
            // "server/cvatt.html?get=U3VuX0NoYW5uZWw=",
            // "https://sssshhh.xyz/cvatt.html?get=U3VuX0NoYW5uZWw=",
            // "https://a3.115tv.site/cvatt.html?get=U3VuX0NoYW5uZWw=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=U3VuX0NoYW5uZWw=",
            servidorCanalesOnline + "cvatt2_ext.html?get=U3VuX0NoYW5uZWw=",
            servidorCanalesOnline + "edge.html?get=Sun_Channel",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Sun_Channel_HD",
            servidorCanalesOnline + "sensa.html?id=SUN",
            // servidorCanalesOnline + "sensa_ext.html?id=SUN",
            // "server/cvatt2_ext.html?get=U3VuX0NoYW5uZWw=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=U3VuX0NoYW5uZWw=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=U3VuX0NoYW5uZWw=",
            // "https://cv.photocalltv.me/cv2.php?get=U3VuX0NoYW5uZWw",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=U3VuX0NoYW5uZWw=",
            // "https://nebunexa.com/cvatt.php?get=U3VuX0NoYW5uZWw=",
            // "https://www.enlatele.tv/player/cv2.php?get=U3VuX0NoYW5uZWw=",
        ]
    }
);

MisCanales.set(
    "Animal Planet",
    {
        pais: "Estados Unidos",
        guide: "Animal Planet HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QW5pbWFsUGxhbmV0",
            servidorCanalesOnline + "cvatt.html?get=QW5pbWFsUGxhbmV0",
            // "server/cvatt.html?get=QW5pbWFsUGxhbmV0",
            // "https://sssshhh.xyz/cvatt.html?get=QW5pbWFsUGxhbmV0",
            // "https://a3.115tv.site/cvatt.html?get=QW5pbWFsUGxhbmV0",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QW5pbWFsUGxhbmV0",
            servidorCanalesOnline + "cvatt2_ext.html?get=QW5pbWFsUGxhbmV0",
            servidorCanalesOnline + "aneviapro.html?id=Animal_Planet",
            servidorCanalesOnline + "gigared.html?id=Animal_Planet",
            servidorCanalesOnline + "gigared_ext.html?id=Animal_Planet",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Animal_Planet_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ANIMAL_PLANET",
            // "server/cvatt2_ext.html?get=QW5pbWFsUGxhbmV0",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QW5pbWFsUGxhbmV0",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QW5pbWFsUGxhbmV0",
            // "https://cv.photocalltv.me/cv2.php?get=QW5pbWFsUGxhbmV0",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QW5pbWFsUGxhbmV0",
            // "https://nebunexa.com/cvatt.php?get=QW5pbWFsUGxhbmV0",
            // "https://www.enlatele.tv/player/cv2.php?get=QW5pbWFsUGxhbmV0",
        ]
    }
);

MisCanales.set(
    "National Geographic",
    {
        pais: "Estados Unidos",
        guide: "NATIONAL GEOGRAPHIC HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TmF0R2VvSEQ=",
            servidorCanalesOnline + "cvatt.html?get=TmF0R2VvSEQ=",
            // "server/cvatt.html?get=TmF0R2VvSEQ=",
            // "https://sssshhh.xyz/cvatt.html?get=TmF0R2VvSEQ=",
            // "https://a3.115tv.site/cvatt.html?get=TmF0R2VvSEQ=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TmF0R2VvSEQ=",
            servidorCanalesOnline + "cvatt2_ext.html?get=TmF0R2VvSEQ=",
            servidorCanalesOnline + "akamaizedpro.html?id=national_geographic",
            servidorCanalesOnline + "akamaized.html?id=national_geographic",
            servidorCanalesOnline + "edge.html?get=Nat_Geo",
            servidorCanalesOnline + "sensa.html?id=NatGeo",
            servidorCanalesOnline + "gigared.html?id=Nat_Geo",
            servidorCanalesOnline + "gigared_ext.html?id=Nat_Geo",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=NatGeo",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=NAT_GEO",
            // servidorCanalesOnline + "sensa_ext.html?id=NatGeo",
            // "server/cvatt2_ext.html?get=TmF0R2VvSEQ=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TmF0R2VvSEQ=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TmF0R2VvSEQ=",
            // "https://cv.photocalltv.me/cv2.php?get=TmF0R2VvSEQ=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TmF0R2VvSEQ=",
            // "https://nebunexa.com/cvatt.php?get=TmF0R2VvSEQ=",
            // "https://www.enlatele.tv/player/cv2.php?get=TmF0R2VvSEQ=",
        ]
    }
);

MisCanales.set(
    "National Geographic Wild",
    {
        pais: "España",
        enlaces: [
            // "https://172m3u8.netlify.app/?id=Nat_Geo_Wild",
            // servidorCanalesOnline + "m3u8.html?stream=natgeowild",
            // servidorCanalesOnline + "extension.html?get=natgeowild",
        ]
    }
);

MisCanales.set(
    "Historia",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "zapitvpro.html?id=historia",
            servidorCanalesOnline + "mpd_es.html?id=HISTORIA",
        ]
    }
);

MisCanales.set(
    "History",
    {
        pais: "Estados Unidos",
        guide: "History Channel HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SGlzdG9yeUhE",
            servidorCanalesOnline + "cvatt.html?get=SGlzdG9yeUhE",
            // "server/cvatt.html?get=SGlzdG9yeUhE",
            // "https://sssshhh.xyz/cvatt.html?get=SGlzdG9yeUhE",
            // "https://a3.115tv.site/cvatt.html?get=SGlzdG9yeUhE",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SGlzdG9yeUhE",
            servidorCanalesOnline + "cvatt2_ext.html?get=SGlzdG9yeUhE",
            servidorCanalesOnline + "aneviapro.html?id=History_Channel",
            servidorCanalesOnline + "sensa.html?id=History",
            servidorCanalesOnline + "gigared.html?id=History_Channel",
            servidorCanalesOnline + "gigared_ext.html?id=History_Channel",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=History_Channel_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=HISTORY",
            // servidorCanalesOnline + "sensa_ext.html?id=History",
            servidorCanalesOnline + "vriootts.html?id=history",
            servidorCanalesOnline + "extension.html?get=HISTORY",
            // "server/cvatt2_ext.html?get=SGlzdG9yeUhE",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SGlzdG9yeUhE",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SGlzdG9yeUhE",
            // "https://cv.photocalltv.me/cv2.php?get=SGlzdG9yeUhE",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SGlzdG9yeUhE",
            // "https://nebunexa.com/cvatt.php?get=SGlzdG9yeUhE",
            // "https://www.enlatele.tv/player/cv2.php?get=SGlzdG9yeUhE",
        ]
    }
);

MisCanales.set(
    "History 2",
    {
        pais: "Estados Unidos",
        guide: "HISTORY 2",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SGlzdG9yeV8y",
            servidorCanalesOnline + "cvatt.html?get=SGlzdG9yeV8y",
            // "server/cvatt.html?get=SGlzdG9yeV8y",
            // "https://sssshhh.xyz/cvatt.html?get=SGlzdG9yeV8y",
            // "https://a3.115tv.site/cvatt.html?get=SGlzdG9yeV8y",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SGlzdG9yeV8y",
            servidorCanalesOnline + "cvatt2_ext.html?get=SGlzdG9yeV8y",
            servidorCanalesOnline + "sensa.html?id=History2",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=History_Channel2_HD",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=HISTORY2",
            // servidorCanalesOnline + "sensa_ext.html?id=History2",
            servidorCanalesOnline + "vriootts.html?id=historychannel2",
            servidorCanalesOnline + "extension.html?get=HISTORY2",
            // "server/cvatt2_ext.html?get=SGlzdG9yeV8y",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SGlzdG9yeV8y",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SGlzdG9yeV8y",
            // "https://cv.photocalltv.me/cv2.php?get=SGlzdG9yeV8y",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SGlzdG9yeV8y",
            // "https://nebunexa.com/cvatt.php?get=SGlzdG9yeV8y",
            // "https://www.enlatele.tv/player/cv2.php?get=SGlzdG9yeV8y",
        ]
    }
);

MisCanales.set(
    "Garage TV",
    {
        pais: "Argentina",
        guide: "El Garage",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RWxfR2FyYWdl",
            servidorCanalesOnline + "cvatt.html?get=RWxfR2FyYWdl",
            // "server/cvatt.html?get=RWxfR2FyYWdl",
            // "https://sssshhh.xyz/cvatt.html?get=RWxfR2FyYWdl",
            // "https://a3.115tv.site/cvatt.html?get=RWxfR2FyYWdl",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RWxfR2FyYWdl",
            servidorCanalesOnline + "cvatt2_ext.html?get=RWxfR2FyYWdl",
            servidorCanalesOnline + "gigared.html?id=El_Garage",
            servidorCanalesOnline + "gigared_ext.html?id=El_Garage",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=El_Garage",
            servidorCanalesOnline + "tvmia.html?stream=c_GarajeTV",
            servidorCanalesOnline + "sensa.html?id=ElGarage",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ENCUENTRO",
            servidorCanalesOnline + "m3u8.html?stream=Garage_TV",
            // servidorCanalesOnline + "sensa_ext.html?id=ElGarage",
            // "server/cvatt2_ext.html?get=RWxfR2FyYWdl",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RWxfR2FyYWdl",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RWxfR2FyYWdl",
            // "https://cv.photocalltv.me/cv2.php?get=RWxfR2FyYWdl",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RWxfR2FyYWdl",
            // "https://nebunexa.com/cvatt.php?get=RWxfR2FyYWdl",
        ]
    }
);

MisCanales.set(
    "Encuentro",
    {
        pais: "Argentina",
        guide: "Encuentro",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RW5jdWVudHJv",
            servidorCanalesOnline + "cvatt.html?get=RW5jdWVudHJv",
            // "server/cvatt.html?get=RW5jdWVudHJv",
            // "https://sssshhh.xyz/cvatt.html?get=RW5jdWVudHJv",
            // "https://a3.115tv.site/cvatt.html?get=RW5jdWVudHJv",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RW5jdWVudHJv",
            servidorCanalesOnline + "cvatt2_ext.html?get=RW5jdWVudHJv",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Encuentro",
            servidorCanalesOnline + "tvmia.html?stream=an_Encuentro",
            servidorCanalesOnline + "sensa.html?id=Encuentro",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=ENCUENTRO",
            // servidorCanalesOnline + "sensa_ext.html?id=Encuentro",
            // "server/cvatt2_ext.html?get=RW5jdWVudHJv",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RW5jdWVudHJv",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RW5jdWVudHJv",
            // "https://cv.photocalltv.me/cv2.php?get=RW5jdWVudHJv",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RW5jdWVudHJv",
            // "https://nebunexa.com/cvatt.php?get=RW5jdWVudHJv",
            // "https://www.enlatele.tv/player/cv2.php?get=RW5jdWVudHJv",
        ]
    }
);

MisCanales.set(
    "E Entertaiment",
    {
        pais: "Estados Unidos",
        guide: "E!",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            servidorCanalesOnline + "cvatt.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "server/cvatt.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://sssshhh.xyz/cvatt.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://a3.115tv.site/cvatt.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            servidorCanalesOnline + "cvatt2_ext.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            servidorCanalesOnline + "gigared.html?id=E_Entertainment",
            servidorCanalesOnline + "gigared_ext.html?id=E_Entertainment",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Entertaiment",
            servidorCanalesOnline + "sensa.html?id=Entertaiment",
            // servidorCanalesOnline + "sensa_ext.html?id=Entertaiment",
            // "server/cvatt2_ext.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://cv.photocalltv.me/cv2.php?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://nebunexa.com/cvatt.php?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
            // "https://www.enlatele.tv/player/cv2.php?get=RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=",
        ]
    }
);

MisCanales.set(
    "Diputados TV",
    {
        pais: "Argentina",
        guide: "Diputados",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=RGlwdXRhZG9zX1RW",
            servidorCanalesOnline + "cvatt.html?get=RGlwdXRhZG9zX1RW",
            // "server/cvatt.html?get=RGlwdXRhZG9zX1RW",
            // "https://sssshhh.xyz/cvatt.html?get=RGlwdXRhZG9zX1RW",
            // "https://a3.115tv.site/cvatt.html?get=RGlwdXRhZG9zX1RW",
            // "https://a3.115tv.site/cvatt2_ext.html?get=RGlwdXRhZG9zX1RW",
            servidorCanalesOnline + "cvatt2_ext.html?get=RGlwdXRhZG9zX1RW",
            // "server/cvatt2_ext.html?get=RGlwdXRhZG9zX1RW",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=RGlwdXRhZG9zX1RW",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=RGlwdXRhZG9zX1RW",
            // "https://cv.photocalltv.me/cv2.php?get=RGlwdXRhZG9zX1RW",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=RGlwdXRhZG9zX1RW",
            // "https://nebunexa.com/cvatt.php?get=RGlwdXRhZG9zX1RW",
            // "https://www.enlatele.tv/player/cv2.php?get=RGlwdXRhZG9zX1RW",
        ]
    }
);

MisCanales.set(
    "FOOD Network",
    {
        pais: "Estados Unidos",
        guide: "FOOD NETWORK HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Rm9vZF9OZXR3b3Jr",
            servidorCanalesOnline + "cvatt.html?get=Rm9vZF9OZXR3b3Jr",
            // "server/cvatt.html?get=Rm9vZF9OZXR3b3Jr",
            // "https://sssshhh.xyz/cvatt.html?get=Rm9vZF9OZXR3b3Jr",
            // "https://a3.115tv.site/cvatt.html?get=Rm9vZF9OZXR3b3Jr",
            // "https://a3.115tv.site/cvatt2_ext.html?get=Rm9vZF9OZXR3b3Jr",
            servidorCanalesOnline + "cvatt2_ext.html?get=Rm9vZF9OZXR3b3Jr",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Food_Network_HD",
            // "server/cvatt2_ext.html?get=Rm9vZF9OZXR3b3Jr",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=Rm9vZF9OZXR3b3Jr",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=Rm9vZF9OZXR3b3Jr",
            // "https://cv.photocalltv.me/cv2.php?get=Rm9vZF9OZXR3b3Jr",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=Rm9vZF9OZXR3b3Jr",
            // "https://nebunexa.com/cvatt.php?get=Rm9vZF9OZXR3b3Jr",
            // "https://www.enlatele.tv/player/cv2.php?get=Rm9vZF9OZXR3b3Jr",
        ]
    }
);

MisCanales.set(
    "El Gourmet",
    {
        pais: "Argentina",
        guide: "el Gourmet HD",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=R291cm1ldA==",
            servidorCanalesOnline + "cvatt.html?get=R291cm1ldA==",
            // "server/cvatt.html?get=R291cm1ldA==",
            // "https://sssshhh.xyz/cvatt.html?get=R291cm1ldA==",
            // "https://a3.115tv.site/cvatt.html?get=R291cm1ldA==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=R291cm1ldA==",
            servidorCanalesOnline + "cvatt2_ext.html?get=R291cm1ldA==",
            servidorCanalesOnline + "aneviapro.html?id=El_Gourmet",
            servidorCanalesOnline + "edge.html?get=Gourmet",
            servidorCanalesOnline + "gigared.html?id=El_Gourmet",
            servidorCanalesOnline + "gigared_ext.html?id=El_Gourmet",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=El_Gourmet",
            servidorCanalesOnline + "sensa.html?id=ElGourmet",
            // "https://aux.canalesonline24.workers.dev/trimi.html?id=EL_GOURMET",
            // servidorCanalesOnline + "cobo.html?id=EL_GOURMET",
            // "https://embed.saohgdasregions.fun/embed2/elgourmet.html",
            // servidorCanalesOnline + "sensa_ext.html?id=ElGourmet",
            servidorCanalesOnline + "vriootts.html?id=Gourmet",
            servidorCanalesOnline + "extension.html?get=Gourmet",
            // "server/cvatt2_ext.html?get=R291cm1ldA==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=R291cm1ldA==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=R291cm1ldA==",
            // "https://cv.photocalltv.me/cv2.php?get=R291cm1ldA==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=R291cm1ldA==",
            // "https://nebunexa.com/cvatt.php?get=R291cm1ldA==",
            // "https://www.enlatele.tv/player/cv2.php?get=R291cm1ldA==",
        ]
    }
);

MisCanales.set(
    "Hola TV",
    {
        pais: "España",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=SG9sYV9UVg==",
            servidorCanalesOnline + "cvatt.html?get=SG9sYV9UVg==",
            // "server/cvatt.html?get=SG9sYV9UVg==",
            // "https://sssshhh.xyz/cvatt.html?get=SG9sYV9UVg==",
            // "https://a3.115tv.site/cvatt.html?get=SG9sYV9UVg==",
            // "https://a3.115tv.site/cvatt2_ext.html?get=SG9sYV9UVg==",
            servidorCanalesOnline + "cvatt2_ext.html?get=SG9sYV9UVg==",
            servidorCanalesOnline + "edge.html?get=Hola_TV",
            // servidorCanalesOnline + "tvmia.html?stream=sn_HOLATV",
            // "server/cvatt2_ext.html?get=SG9sYV9UVg==",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=SG9sYV9UVg==",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=SG9sYV9UVg==",
            // "https://cv.photocalltv.me/cv2.php?get=SG9sYV9UVg==",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=SG9sYV9UVg==",
            // "https://nebunexa.com/cvatt.php?get=SG9sYV9UVg==",
            // "https://www.enlatele.tv/player/cv2.php?get=SG9sYV9UVg==",
        ]
    }
);

MisCanales.set(
    "Metro",
    {
        pais: "Argentina",
        guide: "METRO",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TWV0cm8",
            servidorCanalesOnline + "cvatt.html?get=TWV0cm8",
            // "server/cvatt.html?get=TWV0cm8",
            // "https://sssshhh.xyz/cvatt.html?get=TWV0cm8",
            // "https://a3.115tv.site/cvatt.html?get=TWV0cm8",
            // "https://a3.115tv.site/cvatt2_ext.html?get=TWV0cm8",
            servidorCanalesOnline + "cvatt2_ext.html?get=TWV0cm8",
            servidorCanalesOnline + "tvmia.html?stream=an_METRO",
            // "server/cvatt2_ext.html?get=TWV0cm8",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=TWV0cm8",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=TWV0cm8",
            // "https://cv.photocalltv.me/cv2.php?get=TWV0cm8",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=TWV0cm8",
            // "https://nebunexa.com/cvatt.php?get=TWV0cm8",
            // "https://www.enlatele.tv/player/cv2.php?get=TWV0cm8",
        ]
    }
);

MisCanales.set(
    "Argentinisima",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=QXJnZW50aW5pc2ltYQ",
            servidorCanalesOnline + "cvatt.html?get=QXJnZW50aW5pc2ltYQ",
            // "server/cvatt.html?get=QXJnZW50aW5pc2ltYQ",
            // "https://sssshhh.xyz/cvatt.html?get=QXJnZW50aW5pc2ltYQ",
            // "https://a3.115tv.site/cvatt.html?get=QXJnZW50aW5pc2ltYQ",
            // "https://a3.115tv.site/cvatt2_ext.html?get=QXJnZW50aW5pc2ltYQ",
            servidorCanalesOnline + "cvatt2_ext.html?get=QXJnZW50aW5pc2ltYQ",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Argentinisima",
            // "server/cvatt2_ext.html?get=QXJnZW50aW5pc2ltYQ",
            // "https://cantodspaexteenop1.github.io/todscansoextensiin-op-1.html?get=QXJnZW50aW5pc2ltYQ",
            // "https://flowflowflow1.dombhei.com/cvatt.html?get=QXJnZW50aW5pc2ltYQ",
            // "https://cv.photocalltv.me/cv2.php?get=QXJnZW50aW5pc2ltYQ",
            // "https://tomyjerry.nebunexa.com/cvatt.php?get=QXJnZW50aW5pc2ltYQ",
            // "https://nebunexa.com/cvatt.php?get=QXJnZW50aW5pc2ltYQ",
            // "https://www.enlatele.tv/player/cv2.php?get=QXJnZW50aW5pc2ltYQ",
            servidorCanalesOnline + "m3u8.html?stream=Argentinisima_Satelital"
        ]
    }
);

MisCanales.set(
    "Canal Rural",
    {
        pais: "Argentina",
        guide: "RURAL",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfUnVyYWw=",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfUnVyYWw=",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfUnVyYWw=",
            servidorCanalesOnline + "edge.html?get=Canal_Rural",
            // "https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=Canal_Rural",
            servidorCanalesOnline + "sensa.html?id=CanalRural",
            // servidorCanalesOnline + "sensa_ext.html?id=CanalRural",
        ]
    }
);

MisCanales.set(
    "Latam Rural",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=TGF0YW1fUnVyYWw=",
            servidorCanalesOnline + "cvatt.html?get=TGF0YW1fUnVyYWw=",
            servidorCanalesOnline + "cvatt2_ext.html?get=TGF0YW1fUnVyYWw=",
        ]
    }
);

MisCanales.set(
    "Canal PRO",
    {
        pais: "Paraguay",
        enlaces: [
            servidorCanalesOnline + "cvatt_pro.html?get=Q2FuYWxfUFJP",
            servidorCanalesOnline + "cvatt.html?get=Q2FuYWxfUFJP",
            servidorCanalesOnline + "cvatt2_ext.html?get=Q2FuYWxfUFJP",
        ]
    }
);

MisCanales.set(
    "Caso Cerrado",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=CasoCerrado",
        ]
    }
);

MisCanales.set(
    "Los Pitufos",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=LosPitufos",
        ]
    }
);

MisCanales.set(
    "Los Simpsons",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "videx.html?id=los_simpons",
            servidorCanalesOnline + "vaughnpro.html",
            // servidorCanalesOnline + "giatv.html?id=los_simpson",
            // servidorCanalesOnline + "giatv.html?id=los_simpson2",
            // servidorCanalesOnline + "http.html?id=Los_Simpson",
            // servidorCanalesOnline + "http.html?id=Los_Simpson2",
        ]
    }
);

MisCanales.set(
    "Futurama mania",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "vaughnpro.html?stream=Futurama_mania",
        ]
    }
);

MisCanales.set(
    "South Park",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "vaughnpro.html?stream=Angeline",
        ]
    }
);

MisCanales.set(
    "The big bang theory",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "vaughnpro.html?stream=Cienciaficcion1",
        ]
    }
);

MisCanales.set(
    "Neflix HD",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "vaughnpro.html?stream=Neflix",
        ]
    }
);

MisCanales.set(
    "Terror mania",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "vaughnpro.html?stream=Terror_mania",
        ]
    }
);

MisCanales.set(
    "Fortuna TV",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "vaughnpro.html?stream=Tufortunatv",
        ]
    }
);

MisCanales.set(
    "Sintonia TV",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "vaughnpro.html?stream=Sintonia",
        ]
    }
);

MisCanales.set(
    "El Chavo del Ocho",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "giatv.html?id=elchavo",
        ]
    }
);

MisCanales.set(
    "Billy y Mandy",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Billy_y_Mandy",
        ]
    }
);

MisCanales.set(
    "Los Chicos del Barrio",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Los_Chicos_Del_Barrio",
        ]
    }
);

MisCanales.set(
    "Tom y Jerry",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "giatv.html?id=Tom_y_Jerry",
            // servidorCanalesOnline + "proxym3u8/?id=Tom_Y_Jerry",
            // servidorCanalesOnline + "http.html?id=Tomy_y_Jerry",
            // servidorCanalesOnline + "http.html?id=Tom_Y_Jerry2",
        ]
    }
);

MisCanales.set(
    "Chip y Dale",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Chip_y_Dale",
        ]
    }
);

MisCanales.set(
    "Johnny Bravo",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Johnny_Bravo",
        ]
    }
);

MisCanales.set(
    "Maycol el del medio",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Maycol",
        ]
    }
);

MisCanales.set(
    "Dragon Ball Z",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Dragon_Ball_Z",
        ]
    }
);

MisCanales.set(
    "Dragon Ball Super",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Dragon_Ball_Super",
        ]
    }
);

MisCanales.set(
    "Darwin Watterson",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Darwin",
        ]
    }
);

MisCanales.set(
    "Laboratorio de Dexter",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Dexter",
        ]
    }
);

MisCanales.set(
    "Garfield",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Garfield",
        ]
    }
);

MisCanales.set(
    "Grizzy",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Grizzy",
        ]
    }
);

MisCanales.set(
    "Los 3 Chiflados",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Los_3_Chiflados",
        ]
    }
);

MisCanales.set(
    "Mansion Foster",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Mansion_Foster",
        ]
    }
);

MisCanales.set(
    "Uncle Grandpa",
    {
        pais: "Varios",
        enlaces: [
            // servidorCanalesOnline + "http.html?id=Tio_Grandpa",
        ]
    }
);

MisCanales.set(
    "Monster Jam",
    {
        pais: "Varios",
        enlaces: [
            servidorCanalesOnline + "m3u8.html?stream=Monster_Jam",
        ]
    }
);

MisCanales.set(
    "KICK",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "kick fusion.html",
            servidorCanalesOnline + "kick tendencia.html",
            servidorCanalesOnline + "kick topvistos.html",
        ]
    }
);

MisCanales.set(
    "YouTube",
    {
        pais: "Argentina",
        enlaces: [
            servidorCanalesOnline + "ApiYTBuscador.html",
        ]
    }
);

MisCanales.set(
        "Venus",
        {
            pais: "Argentina",
            enlaces: [
                // servidorCanalesOnline + "cvatt_pro.html?get=VmVudXM=",
                servidorCanalesOnline + "cvatt.html?get=VmVudXM=",
                servidorCanalesOnline + "cvatt2_ext.html?get=VmVudXM=",
            ]
        }
    );

MisCanales.set(
        "Playboy",
        {
            pais: "Estados Unidos",
            enlaces: [
                // servidorCanalesOnline + "cvatt_pro.html?get=UGxheWJveQ",
                servidorCanalesOnline + "cvatt.html?get=UGxheWJveQ",
                servidorCanalesOnline + "cvatt2_ext.html?get=UGxheWJveQ",
            ]
        }
    );

MisCanales.set(
        "Sextreme",
        {
            pais: "Argentina",
            enlaces: [
                // servidorCanalesOnline + "cvatt_pro.html?get=U2V4dHJlbWU",
                servidorCanalesOnline + "cvatt.html?get=U2V4dHJlbWU",
                servidorCanalesOnline + "cvatt2_ext.html?get=U2V4dHJlbWU",
            ]
        }
    );

MisCanales.set(
        "Hustler",
        {
            pais: "Argentina",
            enlaces: [
                // servidorCanalesOnline + "cvatt_pro.html?get=SHVzdGxlcg==",
                servidorCanalesOnline + "cvatt.html?get=SHVzdGxlcg==",
                servidorCanalesOnline + "cvatt2_ext.html?get=SHVzdGxlcg==",
            ]
        }
    );

MisCanales.set(
        "CHATURBATE",
        {
            pais: "Argentina",
            enlaces: [
                // "https://pelisjuanita.com/tv/chbte.html",
                // servidorCanalesOnline + "chbte_chat.html",
            ]
        }
    );
// ---- FIN: CANALES AUTO-GENERADOS ----

// dlhd_so();
function dlhd_so() {
    MisCanales.set(
        "Venus",
        {
            pais: "Argentina",
            enlaces: [
                // servidorCanalesOnline + "cvatt_pro.html?get=VmVudXM=",
                servidorCanalesOnline + "cvatt.html?get=VmVudXM=",
                servidorCanalesOnline + "cvatt2_ext.html?get=VmVudXM=",
            ]
        }
    );

    MisCanales.set(
        "Playboy",
        {
            pais: "Estados Unidos",
            enlaces: [
                // servidorCanalesOnline + "cvatt_pro.html?get=UGxheWJveQ",
                servidorCanalesOnline + "cvatt.html?get=UGxheWJveQ",
                servidorCanalesOnline + "cvatt2_ext.html?get=UGxheWJveQ",
            ]
        }
    );

    MisCanales.set(
        "Sextreme",
        {
            pais: "Argentina",
            enlaces: [
                // servidorCanalesOnline + "cvatt_pro.html?get=U2V4dHJlbWU",
                servidorCanalesOnline + "cvatt.html?get=U2V4dHJlbWU",
                servidorCanalesOnline + "cvatt2_ext.html?get=U2V4dHJlbWU",
            ]
        }
    );

    MisCanales.set(
        "CHATURBATE",
        {
            pais: "Argentina",
            enlaces: [
                // "https://pelisjuanita.com/tv/chbte.html",
                servidorCanalesOnline + "chbte_chat.html",
            ]
        }
    );




    !function () {
        var d = s => atob(s), r = {};
        r[d("Y3ZhdHQuaHRtbD9nZXQ9")] = d("Y2FuYWxlc3BhcmF0b2Rvcy5odG1sP2dldD0=");
        r[d("Y3ZhdHQyX2V4dC5odG1sP2dldD0=")] = d("Y2FuYWxlc3BhcmF0b2Rvc19leHQuaHRtbD9nZXQ9");
        MisCanales.forEach((c, n, m) => {
            c.enlaces = c.enlaces.map(L => {
                for (var k in r) L = L.replace(k, r[k]);
                return L
            })
        })
    }();
}


function isAppleDevice() {
    return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent) && typeof window.MSStream === 'undefined';
}

if (isAppleDevice()) {
    const filtros = [
        "GranHermano.html",
        "edge.html",
        "m3u8.html",
        "http.html",
        "199m3u8",
        "172m3u8",
        "104m3u8",
        // "proxym3u8",
        "kick fusion.html",
        "kick tendencia.html",
        "kick topvistos.html",
        "telefe.html",
        "miagendadeportiva.html",
        "jjfutbol2pro.html",
        "giatv.html",
        "latamlive.html",
        "iptvperu.html",
        "fetch.html",
        "fetch2.html",
        "lpf.html",
        "deepcathink.html",
        "edge-apps.html",
        "tdtcloud.html",
    ];

    MisCanales.forEach((canal, nombre, map) => {
        // 👉 SOLO deja los enlaces que coinciden con los filtros
        canal.enlaces = canal.enlaces.filter(link =>
            filtros.some(f => link.includes(f))
        );

        // 👉 Si no queda ningún enlace válido, elimina el canal
        if (canal.enlaces.length === 0) {
            map.delete(nombre);
        }
    });
}


MisCanales.forEach((canal, nombre, map) => {
    // Filtra los enlaces de cada canal
    canal.enlaces = canal.enlaces.filter(link =>
        !link.includes("tvmia.html?stream=an_") &&
        !link.includes("tvmia.html?stream=bn_") &&
        !link.includes("tvmia.html?stream=c_") &&
        !link.includes("tvmia.html?stream=sn_") &&
        !link.includes("aneviapro.html?id=") &&
        !link.includes("boldmss.html?get=") &&
        // !link.includes("boldmss_ext.html?get=") &&
        !link.includes("playme.html?get=") &&
        // !link.includes("proxym3u8/?id=") &&
        !link.includes("trimi.html?id=") &&
        !link.includes("edge.html?get=") &&
        // !link.includes("cvatt_pro.html?get=") &&
        !link.includes("gigared.html?id=") &&
        !link.includes("jjfutbol2.html?r=") &&

        !link.includes("latamlive.html") &&
        // !link.includes("jjfutbol2pro.html") &&
        // !link.includes("miagendadeportiva.html") &&
        // !link.includes("FreeTV.html") &&
        !link.includes("sensa.html?id=")
        // !link.includes("sensa_ext.html?id=") &&
        // !link.includes("vaughn.html?stream=") &&
        // !link.includes("mpd_es.html?id=")
    );

    // Si el canal no tiene enlaces después de la filtración, eliminarlo del Map
    if (canal.enlaces.length === 0) {
        map.delete(nombre);
    }
});

let url_server = new URL(window.location.href); // Obtiene la URL actual
const stream_url = url_server.searchParams.get('server1y2'); // Intenta obtener el parámetro 'stream'

if (stream_url === "off") {
    MisCanales.forEach((canal, nombre, map) => {
        // Filtra los enlaces de cada canal
        canal.enlaces = canal.enlaces.filter(link =>
            !link.includes("cvatt.html?get=") &&
            !link.includes("cvatt2_ext.html?get=")
        );

        // Si el canal no tiene enlaces después de la filtración, eliminarlo del Map
        if (canal.enlaces.length === 0) {
            map.delete(nombre);
        }
    });
}

let cvattproserver = "cvatt_pro.html?get=";
let cvattserver = "cvatt.html?get=";
let cvatt2server = "cvatt2_ext.html?get=";

!function () {
    var d = s => atob(s), r = {};
    r[d("Y3ZhdHQuaHRtbD9nZXQ9")] = d("Y2FuYWxlc3BhcmF0b2Rvcy5odG1sP2dldD0=");
    r[d("Y3ZhdHQyX2V4dC5odG1sP2dldD0=")] = d("Y2FuYWxlc3BhcmF0b2Rvc19leHQuaHRtbD9nZXQ9");
    MisCanales.forEach((c, n, m) => {
        c.enlaces = c.enlaces.map(L => {
            for (var k in r) L = L.replace(k, r[k]);
            return L
        })
    })
}();

cvattserver = atob("Y2FuYWxlc3BhcmF0b2Rvcy5odG1sP2dldD0=");
cvatt2server = atob("Y2FuYWxlc3BhcmF0b2Rvc19leHQuaHRtbD9nZXQ9");


const enlacesServidor = {
    //Kick
    [servidorCanalesOnline + "kick fusion.html"]: "Kick Fusión",
    [servidorCanalesOnline + "kick tendencia.html"]: "Tendencia",
    [servidorCanalesOnline + "kick topvistos.html"]: "Top más vistos",

    //Telefe
    // [servidorCanalesOnline + "telefe.html"]: "Trasmitir",
    [servidorCanalesOnline + "fetch.html?stream=Telefe"]: "Trasmitir",
    [servidorCanalesOnline + "fetch2.html?stream=Telefe"]: "Trasmitir",
    [servidorCanalesOnline + cvattproserver + "VGVsZWZlX0ludGVybmFjaW9uYWw="]: "Internacional 1",
    [servidorCanalesOnline + cvattserver + "VGVsZWZlX0ludGVybmFjaW9uYWw="]: "Internacional 2",
    [servidorCanalesOnline + cvatt2server + "VGVsZWZlX0ludGVybmFjaW9uYWw="]: "Internacional 3",
    [servidorCanalesOnline + cvattproserver + "VGVsZWZlX01EUV9IRA=="]: "Canal 8 Mar del Plata 1",
    [servidorCanalesOnline + cvattserver + "VGVsZWZlX01EUV9IRA=="]: "Canal 8 Mar del Plata 2",
    [servidorCanalesOnline + cvatt2server + "VGVsZWZlX01EUV9IRA=="]: "Canal 8 Mar del Plata 3",
    [servidorCanalesOnline + "fetch2.html?stream=Canal_8_Mar_Del_Plata"]: "Canal 8 Mar del Plata 4",
    [servidorCanalesOnline + cvattproserver + "Q0hfN19KdWp1eQ=="]: "Canal 7 Jujuy 1",
    [servidorCanalesOnline + cvattserver + "Q0hfN19KdWp1eQ=="]: "Canal 7 Jujuy 2",
    [servidorCanalesOnline + cvatt2server + "Q0hfN19KdWp1eQ=="]: "Canal 7 Jujuy 3",
    [servidorCanalesOnline + "m3u8.html?stream=Canal_7_Jujuy"]: "Canal 7 Jujuy 1",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWxfMTNfU0ZF"]: "Santa Fe 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWxfMTNfU0ZF"]: "Santa Fe 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWxfMTNfU0ZF"]: "Santa Fe 3",
    [servidorCanalesOnline + "telefe.html?channel=telefe_santafe"]: "Santa Fe 4",
    [servidorCanalesOnline + "fetch.html?stream=Telefe_SantaFe"]: "Santa Fe 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWw3X1NERQ=="]: "Stgo. del Estero 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWw3X1NERQ=="]: "Stgo. del Estero 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWw3X1NERQ=="]: "Stgo. del Estero 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWw5X0JhaGlhX0JsYW5jYQ=="]: "elnueve Bahía Blanca 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWw5X0JhaGlhX0JsYW5jYQ=="]: "elnueve Bahía Blanca 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWw5X0JhaGlhX0JsYW5jYQ=="]: "elnueve Bahía Blanca 3",
    [servidorCanalesOnline + "cobo.html?id=CH_13_Corrientes"]: "13 MAX 1",
    [servidorCanalesOnline + cvattproserver + "Q0hfMTNfQ29ycmllbnRlcw=="]: "13 MAX Corrientes 1",
    [servidorCanalesOnline + cvattserver + "Q0hfMTNfQ29ycmllbnRlcw=="]: "13 MAX Corrientes 2",
    [servidorCanalesOnline + cvatt2server + "Q0hfMTNfQ29ycmllbnRlcw=="]: "13 MAX Corrientes 3",
    [servidorCanalesOnline + "m3u8.html?stream=13_MAX_TV_Corrientes"]: "13 MAX Corrientes 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWxfOF9DQkE"]: "Córdoba 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWxfOF9DQkE"]: "Córdoba 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWxfOF9DQkE"]: "Córdoba 3",
    [servidorCanalesOnline + "telefe.html?channel=telefe_cordoba"]: "Córdoba 4",
    [servidorCanalesOnline + "fetch.html?stream=Telefe_Cordoba"]: "Córdoba 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWxfNV9Sb3Nhcmlv"]: "Rosario 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWxfNV9Sb3Nhcmlv"]: "Rosario 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWxfNV9Sb3Nhcmlv"]: "Rosario 3",
    [servidorCanalesOnline + "telefe.html?channel=telefe_rosario"]: "Rosario 4",
    [servidorCanalesOnline + "fetch.html?stream=Telefe_Rosario"]: "Rosario 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWxfOF9UdWN1bWFu"]: "elocho Tucumán 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWxfOF9UdWN1bWFu"]: "elocho Tucumán 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWxfOF9UdWN1bWFu"]: "elocho Tucumán 3",
    [servidorCanalesOnline + "m3u8.html?stream=Telefe_Tucumán"]: "Tucumán 3",
    [servidorCanalesOnline + cvattproserver + "VGVsZWZlX1NhbHRh"]: "elonce Salta 1",
    [servidorCanalesOnline + cvattserver + "VGVsZWZlX1NhbHRh"]: "elonce Salta 2",
    [servidorCanalesOnline + cvatt2server + "VGVsZWZlX1NhbHRh"]: "elonce Salta 3",
    [servidorCanalesOnline + cvattproserver + "VGVsZWZlX05ldXF1ZW4="]: "Canal 7 Neuquén 1",
    [servidorCanalesOnline + cvattserver + "VGVsZWZlX05ldXF1ZW4="]: "Canal 7 Neuquén 2",
    [servidorCanalesOnline + cvatt2server + "VGVsZWZlX05ldXF1ZW4="]: "Canal 7 Neuquén 3",
    [servidorCanalesOnline + "fetch.html?stream=Canal_7_Neuquen"]: "Canal 7 Neuquén 4",
    [servidorCanalesOnline + "m3u8.html?stream=Canal_7_Neuquen"]: "Canal 7 Neuquén 5",

    // Servidores de Mendoza
    [servidorCanalesOnline + "m3u8.html?stream=El_Nueve_Mendoza"]: "Televida Mendoza 1",
    [servidorCanalesOnline + "extension.html?get=Televidaar"]: "Televida Mendoza 2",


    // Servidores EL TRECE
    [servidorCanalesOnline + cvattproserver + "QXJ0ZWFyX0ludGVybmFjaW9uYWw="]: "Internacional 1",
    [servidorCanalesOnline + cvattserver + "QXJ0ZWFyX0ludGVybmFjaW9uYWw="]: "Internacional 2",
    [servidorCanalesOnline + cvatt2server + "QXJ0ZWFyX0ludGVybmFjaW9uYWw="]: "Internacional 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWxfM19Sb3Nhcmlv"]: "eltres Rosario 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWxfM19Sb3Nhcmlv"]: "eltres Rosario 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWxfM19Sb3Nhcmlv"]: "eltres Rosario 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWw3X0JhaGlhX0JsYW5jYQ=="]: "Bahia Blanca 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWw3X0JhaGlhX0JsYW5jYQ=="]: "Bahia Blanca 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWw3X0JhaGlhX0JsYW5jYQ=="]: "Bahia Blanca 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWxfOV9QYXJhbmE="]: "Canal 9 Parana 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWxfOV9QYXJhbmE="]: "Canal 9 Parana 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWxfOV9QYXJhbmE="]: "Canal 9 Parana 3",
    [servidorCanalesOnline + cvattproserver + "Q0hfOV9SZXNpc3RlbmNpYQ=="]: "Canal 9 Resistencia 1",
    [servidorCanalesOnline + cvattserver + "Q0hfOV9SZXNpc3RlbmNpYQ=="]: "Canal 9 Resistencia 2",
    [servidorCanalesOnline + cvatt2server + "Q0hfOV9SZXNpc3RlbmNpYQ=="]: "Canal 9 Resistencia 3",
    [servidorCanalesOnline + "sensa_output.html?id=El_seis"]: "Canal 6 Bariloche 1",
    [servidorCanalesOnline + "sensa_ext.html?id=El_seis"]: "Canal 6 Bariloche 2",

    // Servidores A24
    [servidorCanalesOnline + cvattproserver + "QTI0X1BZ"]: "Paraguay 1",
    [servidorCanalesOnline + cvattserver + "QTI0X1BZ"]: "Paraguay 2",
    [servidorCanalesOnline + cvatt2server + "QTI0X1BZ"]: "Paraguay 3",

    // Servidores TV Publica
    [servidorCanalesOnline + cvattproserver + "VFZfUHVibGljYV9JbnRlcm5hY2lvbmFs"]: "Internacional 1",
    [servidorCanalesOnline + cvattserver + "VFZfUHVibGljYV9JbnRlcm5hY2lvbmFs"]: "Internacional 2",
    [servidorCanalesOnline + cvatt2server + "VFZfUHVibGljYV9JbnRlcm5hY2lvbmFs"]: "Internacional 3",
    //Canal7_Catamarca
    [servidorCanalesOnline + cvattproserver + "Q2FuYWw3X0NhdGFtYXJjYQ=="]: "Catamarca 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWw3X0NhdGFtYXJjYQ=="]: "Catamarca 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWw3X0NhdGFtYXJjYQ=="]: "Catamarca 3",

    // Servidores AMÉRICA
    [servidorCanalesOnline + cvattproserver + "QW1lcmljYV9UdWN1bWFu"]: "Tucumán 1",
    [servidorCanalesOnline + cvattserver + "QW1lcmljYV9UdWN1bWFu"]: "Tucumán 2",
    [servidorCanalesOnline + cvatt2server + "QW1lcmljYV9UdWN1bWFu"]: "Tucumán 3",
    [servidorCanalesOnline + cvattproserver + "QW1lcmljYV9QWQ=="]: "Paraguay 1",
    [servidorCanalesOnline + cvattserver + "QW1lcmljYV9QWQ=="]: "Paraguay 2",
    [servidorCanalesOnline + cvatt2server + "QW1lcmljYV9QWQ=="]: "Paraguay 3",

    //Canal 79
    [servidorCanalesOnline + cvattproserver + "Q2FuYWxfNzlfTURR"]: "Mar del Plata 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWxfNzlfTURR"]: "Mar del Plata 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWxfNzlfTURR"]: "Mar del Plata 3",
    [servidorCanalesOnline + "m3u8.html?stream=Canal_79_Mar_del_Plata"]: "Mar del Plata 4",
    [servidorCanalesOnline + "m3u8.html?stream=Canal_79_La_Costa"]: "La Costa",
    [servidorCanalesOnline + "m3u8.html?stream=Canal_79_Santa_Clara"]: "Santa Clara",
    [servidorCanalesOnline + "m3u8.html?stream=Canal_79_Villa_Maza"]: "Villa Maza",
    [servidorCanalesOnline + "m3u8.html?stream=Canal_79_Puan"]: "Puan",

    // Servidores SOMOS
    [servidorCanalesOnline + cvattproserver + "U29tb3NfVHVjdW1hbg=="]: "Tucumán 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfVHVjdW1hbg=="]: "Tucumán 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfVHVjdW1hbg=="]: "Tucumán 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfUGFyYW5h"]: "Entre Rios 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfUGFyYW5h"]: "Entre Rios 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfUGFyYW5h"]: "Entre Rios 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfQmVsbF9WaWxsZQ=="]: "Bell Ville 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfQmVsbF9WaWxsZQ=="]: "Bell Ville 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfQmVsbF9WaWxsZQ=="]: "Bell Ville 3",
    [servidorCanalesOnline + cvattproserver + "Q2FuYWxfQ2l1ZGFkX01EUQ=="]: "Mar del Plata 1",
    [servidorCanalesOnline + cvattserver + "Q2FuYWxfQ2l1ZGFkX01EUQ=="]: "Mar del Plata 2",
    [servidorCanalesOnline + cvatt2server + "Q2FuYWxfQ2l1ZGFkX01EUQ=="]: "Mar del Plata 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfTGFfUGxhdGE="]: "La Plata 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfTGFfUGxhdGE="]: "La Plata 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfTGFfUGxhdGE="]: "La Plata 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfRWxfVmFsbGU="]: "El Valle 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfRWxfVmFsbGU="]: "El Valle 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfRWxfVmFsbGU="]: "El Valle 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfUmFmYWVsYQ=="]: "Rafaela 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfUmFmYWVsYQ=="]: "Rafaela 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfUmFmYWVsYQ=="]: "Rafaela 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfU2FsdGE="]: "Salta 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfU2FsdGE="]: "Salta 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfU2FsdGE="]: "Salta 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfU1RG"]: "Santa Fe 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfU1RG"]: "Santa Fe 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfU1RG"]: "Santa Fe 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfQ29ycmllbnRlcw=="]: "Corrientes 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfQ29ycmllbnRlcw=="]: "Corrientes 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfQ29ycmllbnRlcw=="]: "Corrientes 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfQmFoaWFfQmxhbmNh"]: "Bahia Blanca 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfQmFoaWFfQmxhbmNh"]: "Bahia Blanca 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfQmFoaWFfQmxhbmNh"]: "Bahia Blanca 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfUmVzaXN0ZW5jaWE="]: "Chaco 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfUmVzaXN0ZW5jaWE="]: "Chaco 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfUmVzaXN0ZW5jaWE="]: "Chaco 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfUm9zYXJpbw=="]: "Rosario 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfUm9zYXJpbw=="]: "Rosario 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfUm9zYXJpbw=="]: "Rosario 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfU2FuX1BlZHJv"]: "San Pedro 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfU2FuX1BlZHJv"]: "San Pedro 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfU2FuX1BlZHJv"]: "San Pedro 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfQXp1bA=="]: "Azul 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfQXp1bA=="]: "Azul 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfQXp1bA=="]: "Azul 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfTm9ydGU="]: "Norte 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfTm9ydGU="]: "Norte 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfTm9ydGU="]: "Norte 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfRm9ybW9zYQ=="]: "Formosa 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfRm9ybW9zYQ=="]: "Formosa 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfRm9ybW9zYQ=="]: "Formosa 3",
    [servidorCanalesOnline + cvattproserver + "U29tb3NfTWlzaW9uZXM="]: "Misiones 1",
    [servidorCanalesOnline + cvattserver + "U29tb3NfTWlzaW9uZXM="]: "Misiones 2",
    [servidorCanalesOnline + cvatt2server + "U29tb3NfTWlzaW9uZXM="]: "Misiones 3",
    [servidorCanalesOnline + "m3u8.html?stream=Somos_Villamaria"]: "Villa Maria",
    [servidorCanalesOnline + "m3u8.html?stream=Somos_Gualeguaychu"]: "Gualeguaychú",

    //Servidor Gourmet
    [servidorCanalesOnline + "extension.html?get=Gourmet"]: "Extensión",

    // CNN Internacional
    [servidorCanalesOnline + cvattproserver + "Q05OX0ludGVybmFjaW9uYWw="]: "Internacional 1",
    [servidorCanalesOnline + cvattserver + "Q05OX0ludGVybmFjaW9uYWw="]: "Internacional 2",
    [servidorCanalesOnline + cvatt2server + "Q05OX0ludGVybmFjaW9uYWw="]: "Internacional 3",
    // ["https://auxcanalesonline.netlify.app/?path=/anbalancerpro.html?id=CNN_International"]: "Internacional 3",

    //Telemundo
    [servidorCanalesOnline + cvattproserver + "VGVsZW11bmRvX0hE"]: "Internacional 1",
    [servidorCanalesOnline + cvattserver + "VGVsZW11bmRvX0hE"]: "Internacional 2",
    [servidorCanalesOnline + cvatt2server + "VGVsZW11bmRvX0hE"]: "Internacional 3",
    // [servidorCanalesOnline + "anbalancer.html?id=Telemundo_HD"]: "Internacional 3",
    [servidorCanalesOnline + "cobo.html?id=TELEMUNDO47_1"]: "Telemundo 47 1",
    [servidorCanalesOnline + "cobo.html?id=TELEMUNDO47_2"]: "Telemundo 47 2",
    [servidorCanalesOnline + "m3u8.html?stream=Telemundo49"]: "Telemundo 49",
    [servidorCanalesOnline + "m3u8.html?stream=Telemundo52"]: "Telemundo 52",
    [servidorCanalesOnline + "m3u8.html?stream=Telemundo_PR"]: "Puerto Rico",

    //ESPN DISNEY
    ["https://streamtp-abc.net/premier.php?stream=starplus01"]: "starplus01",
    ["https://streamtp-abc.net/premier.php?stream=starplus02"]: "starplus02",
    ["https://streamtp-abc.net/premier.php?stream=starplus03"]: "starplus03",
    ["https://streamtp-abc.net/premier.php?stream=starplus04"]: "starplus04",
    ["https://streamtp-abc.net/premier.php?stream=starplus05"]: "starplus05",
    ["https://streamtp-abc.net/premier.php?stream=starplus06"]: "starplus06",
    ["https://streamtp-abc.net/premier.php?stream=starplus07"]: "starplus07",
    ["https://streamtp-abc.net/premier.php?stream=starplus08"]: "starplus08",
    ["https://streamtp-abc.net/premier.php?stream=starplus09"]: "starplus09",
    ["https://streamtp-abc.net/premier.php?stream=starplus10"]: "starplus10",
    ["https://streamtp-abc.net/premier.php?stream=starplus11"]: "starplus11",
    ["https://streamtp-abc.net/premier.php?stream=starplus12"]: "starplus12",
    ["https://streamtp-abc.net/premier.php?stream=starplus13"]: "starplus13",
    ["https://streamtp-abc.net/premier.php?stream=starplus14"]: "starplus14",
    ["https://streamtp-abc.net/premier.php?stream=starplus15"]: "starplus15",
    ["https://streamtp-abc.net/premier.php?stream=starplus16"]: "starplus16",

    ["https://streamtp-abc.net/premier.php?stream=espnplus1"]: "espnplus1",
    ["https://streamtp-abc.net/premier.php?stream=espnplus2"]: "espnplus2",
    ["https://streamtp-abc.net/premier.php?stream=espnplus3"]: "espnplus3",
    ["https://streamtp-abc.net/premier.php?stream=espnplus4"]: "espnplus4",
    ["https://streamtp-abc.net/premier.php?stream=espnplus5"]: "espnplus5",
    ["https://streamtp-abc.net/premier.php?stream=espnplus6"]: "espnplus6",
    ["https://streamtp-abc.net/premier.php?stream=espnplus7"]: "espnplus7",
    ["https://streamtp-abc.net/premier.php?stream=espnplus8"]: "espnplus8",
    ["https://streamtp-abc.net/premier.php?stream=espnplus9"]: "espnplus9",
    ["https://streamtp-abc.net/premier.php?stream=disney1"]: "disney1",
    ["https://streamtp-abc.net/premier.php?stream=disney2"]: "disney2",
    ["https://streamtp-abc.net/premier.php?stream=disney3"]: "disney3",
    ["https://streamtp-abc.net/premier.php?stream=disney4"]: "disney4",
    ["https://streamtp-abc.net/premier.php?stream=disney5"]: "disney5",
    ["https://streamtp-abc.net/premier.php?stream=disney6"]: "disney6",
    ["https://streamtp-abc.net/premier.php?stream=disney7"]: "disney7",
    ["https://streamtp-abc.net/premier.php?stream=disney8"]: "disney8",
    ["https://streamtp-abc.net/premier.php?stream=disney9"]: "disney9",
    ["https://streamtp-abc.net/premier.php?stream=disney10"]: "disney10",
    ["https://streamtp-abc.net/premier.php?stream=disney11"]: "disney11",
    ["https://streamtp-abc.net/premier.php?stream=disney12"]: "disney12",
    ["https://streamtp-abc.net/premier.php?stream=disney13"]: "disney13",
    ["https://streamtp-abc.net/premier.php?stream=disney14"]: "disney14",
    ["https://streamtp-abc.net/premier.php?stream=disney15"]: "disney15",
    ["https://streamtp-abc.net/premier.php?stream=disney16"]: "disney16",
    ["https://streamtp-abc.net/premier.php?stream=disney17"]: "disney17",
    ["https://streamtp-abc.net/premier.php?stream=disney18"]: "disney18",
    ["https://streamtp-abc.net/premier.php?stream=disney19"]: "disney19",
    ["https://streamtp-abc.net/premier.php?stream=disney20"]: "disney20",

    // Gran Hermano Cámaras
    [servidorCanalesOnline + "GranHermano.html?id=24h"]: "Cámara 24hs",
    [servidorCanalesOnline + "GranHermano.html?id=cam1"]: "Cámara 1",
    [servidorCanalesOnline + "GranHermano.html?id=cam2"]: "Cámara 2",
    [servidorCanalesOnline + "GranHermano.html?id=cam3"]: "Cámara 3",
    [servidorCanalesOnline + "GranHermano.html?id=multicam"]: "Multicámaras",

    [servidorCanalesOnline + "mundialClubes.html"]: "Calendario",
    [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=telefeapi.html"]: "Telefe",


    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=m3u8.html?stream=DSportsArg_2"]: "DSport",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=m3u8.html?stream=DSports2Arg"]: "DSport2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=https://streamx10.cloud/global2.php?channel=dsports"]: "DSport",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=https://streamx10.cloud/global2.php?channel=dsports2"]: "DSport2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=https://streamx10.cloud/global2.php?channel=dazntv1"]: "DAZN 1",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=https://streamx10.cloud/global2.php?channel=dazntv2"]: "DAZN 2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=https://streamx10.cloud/global2.php?channel=dazntv3"]: "DAZN 3",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=https://streamx10.cloud/global2.php?channel=tudn_usa"]: "Turd",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=https://streamx10.cloud/global2.php?channel=eventos4"]: "ESPN DISNEY",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?stream=https://streamx10.cloud/global2.php?channel=sporttvbr1"]: "SportTV BR",

    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canal.php?stream=dsports"]: "DSport",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canales.php?stream=dsports"]: "DSport",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://la14hd.com/vivo/canal.php?stream=dsports"]: "DSport",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canal.php?stream=dsports2"]: "DSport2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canales.php?stream=dsports2"]: "DSport2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://la14hd.com/vivo/canal.php?stream=dsports2"]: "DSport2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canal.php?stream=dazntv1"]: "DAZN 1",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canales.php?stream=dazntv1"]: "DAZN 1",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://la14hd.com/vivo/canal.php?stream=dazntv1"]: "DAZN 1",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canal.php?stream=dazntv2"]: "DAZN 2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canales.php?stream=dazntv2"]: "DAZN 2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://la14hd.com/vivo/canal.php?stream=dazntv2"]: "DAZN 2",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canal.php?stream=dazntv3"]: "DAZN 3",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canales.php?stream=dazntv3"]: "DAZN 3",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://la14hd.com/vivo/canal.php?stream=dazntv3"]: "DAZN 3",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canal.php?stream=tudn_usa"]: "Turd",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canales.php?stream=tudn_usa"]: "Turd",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://la14hd.com/vivo/canal.php?stream=tudn_usa"]: "Turd",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canal.php?stream=eventos4"]: "ESPN DISNEY",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canales.php?stream=eventos4"]: "ESPN DISNEY",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://la14hd.com/vivo/canal.php?stream=eventos4"]: "ESPN DISNEY",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canal.php?stream=sporttvbr1"]: "SportTV BR",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://tvtvhd.com/canales.php?stream=sporttvbr1"]: "SportTV BR",
    // [servidorCanalesOnline + "Mundial_de_Clubes.html?streamservidorCanalesOnline + =jjfutbol2.html?r=https://la14hd.com/vivo/canal.php?stream=sporttvbr1"]: "SportTV BR",

    // [servidorCanalesOnline + "edge.html?get="]: "Trasmitir",
};



const listasPermitidas = {
    "Argentina": new Set([
        "Gran Hermano", "TELEFE", "EL TRECE", "AMÉRICA", "A24", "CANAL 26",
        "TV PÚBLICA", "CRÓNICA", "TN", "C5N", "LN+", "CANAL NUEVE",
        "CANAL DOCE", "CANAL Á", "NETTV", "Bravo TV", "Telemax", "IP Noticias", "Canal 12 Posadas",
        "GEN", "Canal de la Ciudad", "Somos TV", "C9N", "CNN",
        "Teledoce", "Unife", "Caras TV", "Orbe 21", "Canal 5 Tucumán", "Canal 10 Tucumán",
        "Construir TV", "Latina TV", "Tierramia", "RT en Español", "Love Nature", "5 Minute Crafts",
        "TyC Sports", "TyC Sports Play", "TyC Sports Internacional", "DeporTV", "DirecTV Sports", "DirecTV Sports 2",
        "DirecTV Plus", "Claro Sports", "AMÉRICA SPORTS", "SHOWSPORT", "TNT Sports", "TNT Sports Premium CL",
        "ESPN DISNEY", "ESPN", "ESPN 2", "ESPN 3", "ESPN 4", "ESPN 5",
        "ESPN 6", "ESPN 7", "ESPN Extra", "ESPN Deportes", "ESPN Premium", "FOX SPORTS",
        "FOX SPORTS 2", "FOX SPORTS 3", "FOX SPORTS Premium", "Star Channel", "TNT HD", "TNT Novelas",
        "TNT Series", "HBO", "HBO 2", "HBO Plus", "HBO Family", "HBO Xtreme",
        "HBO Mundi", "HBO POP", "HBO Signature", "Space", "A&E", "Cinecanal",
        "Cinemax", "Cine AR", "DHE", "Paramount Network", "AMC", "AXN",
        "A3Cine", "A3Series", "Universal TV", "Universal Cinema", "Universal Crime", "Universal Comedy",
        "Universal Reality", "Universal Premiere", "FXHD", "Film Arts", "Warner", "Studio Universal",
        "Sony Channel", "Sony Movies", "Sony Cine", "GOLDEN", "Comedy Central", "Ciudad Magazine",
        "Universo", "Telemundo", "Las Estrellas", "Más Chic", "VOLVER", "Cartoonito",
        "Cartoon Network", "Disney Channel", "Disney JR", "Discovery Kids", "NICK", "NICK JR",
        "TEEN NICK", "BABY TV", "Tooncast", "Adult Swim", "Dreamworks", "PAKA PAKA",
        "MTV", "MTV hits", "MTV 00S", "Music TOP", "CM", "HTV",
        "Quiero", "Discovery Channel", "Discovery World", "Discovery Theater", "Discovery Science", "Discovery TLC",
        "Discovery Turbo", "Discovery H&H", "Discovery ID", "Animal Planet", "National Geographic",
        "History", "History 2", "Garage TV", "Encuentro", "E Entertaiment", "Diputados TV",
        "El Gourmet", "Metro", "Argentinisima", "Canal Rural",
        "MTV 00S", "MTV hits", "Los Simpsons",
    ]),
    "Grilla": new Set([
        "Gran Hermano", "TCM", "Multipremier", "HBO", "HBO 2", "HBO Plus", "HBO Family",
        "HBO Xtreme", "HBO Mundi", "HBO POP", "HBO Signature", "Universal Cinema", "Universal Crime",
        "TNT HD", "Cinemax", "Cinecanal", "Universal Premiere", "Universal Reality", "Universal Comedy",
        "A3Cine", "A3Series", "Paramount Network", "GOLDEN Premier", "Europa Europa", "Studio Universal", "Space",
        "Adult Swim", "Sony Channel", "TNT Series", "AMC", "Universal TV", "AXN",
        "Antena 3", "Discovery ID", "Film Arts", "A&E", "USA NETWORK", "FXHD",
        "Telemundo", "E Entertaiment", "Más Chic", "Lifetime", "Encuentro", "CANAL Á",
        "Hola TV", "FOOD Network", "El Gourmet", "HGTV", "Las Estrellas", "Pasiones",
        "Discovery Turbo", "Discovery Science", "Discovery TLC", "TNT Novelas", "Kanal D Drama", "Univision",
        "SUN", "Love Nature", "History 2", "History", "Animal Planet", "National Geographic",
        "Canal 10 Uruguayo", "Canal 4 Uruguay", "Discovery H&H", "Discovery World", "Discovery Theater", "Discovery Channel",
        "GOLTV", "TyC Sports", "TV Ciudad", "Win Sports +", "Win Sports", "Teledoce",
        "ESPN", "ESPN 2", "ESPN 3", "ESPN 4", "ESPN 5", "ESPN 6", "ESPN 7",
        "Record TV", "TV5 MONDE", "DW", "1000XHORA TV", "CRÓNICA", "Claro Sports",
        "CANAL 26", "TV Chile", "AMÉRICA", "C5N", "CANAL NUEVE", "LN+",
        "TELEFE", "RAI", "TN", "CNN", "A24", "RT en Español",
        "NICK JR", "NICK", "Cartoonito", "Tooncast", "Disney JR", "TVE Internacional",
        "MTV", "Cartoon Network", "Discovery Kids", "Disney Channel", "BABY TV", "TEEN NICK",
        "MTV 00S", "MTV hits", "France 24 Español", "BBC News", "Allegro",
    ]),
    "Noticias": new Set([
        "TELEFE", "EL TRECE", "AMÉRICA", "A24", "CANAL 26",
        "TV PÚBLICA", "CRÓNICA", "TN", "C5N", "LN+",
        "CANAL NUEVE", "CANAL DOCE", "NETTV", "Telemax", "IP Noticias", "Canal 12 Posadas",
        "TeleSur", "GEN", "Canal de la Ciudad", "Somos TV", "C9N",
        "CNN", "Teledoce", "Canal 5 Uruguay", "Canal 79 Mar del Plata", "Canal 2 Mar del Plata",
        "Canal 10 Cordoba", "Canal 10 Tucumán", "Canal 5 Tucumán", "Canal 10 Mar del Plata", "Canal 9 Litoral",
        "D news", "Next TV Carlos Paz", "Canal C", "Televida Mendoza", "Canal 10 Rio Negro",
        "Aire Santa Fe", "Am 1020 San Juan", "Canal 34 San Juan", "Xama HD San Juan", "Teleposadas",
        "TVE 1 ES", "DW", "VPI TV", "Canal VEO Santa Fe", "Canal 5 Santa Fe",
        "TVE Internacional", "24h", "laSexta", "Antena 3", "TVE 2 ES",
        "TeleMadrid", "8 La Marina TV", "Elche 7TV", "Alacanti TV", "Laocho",
        "El Confidencial", "El Toro TV", "ONE TV", "Distrito TV", "TeleMadrid la Otra",
        "RT en Español", "TV Melilla", "La 7 TV", "Hispan TV", "El Pais",
        "Canal 9 Bio Bio", "TV+ UCV", "La Red", "Makao TV", "Canal 21",
        "Canal 4 Uruguay", "TV Chile", "G Vision", "T13", "El Pingüino",
        "Ecuador TV", "Teleamazonas", "Ecuavisa Ecuador", "UCL URUGUAY", "Canal 10 Uruguayo",
        "Panamericana TV", "Willax TV", "America TV", "Oromar TV", "TC",
        "Exitosa", "Latina Noticias Perú", "Latina TV Perú", "Canal N", "RPP TV",
        "TV Oriente", "Conecta2 TV", "SONO ONDA TV", "TVPE", "ATV Sur",
        "Trece PY", "ABC TV PY", "PYTV", "5 DÍAS PY", "NPY",
        "CANAL 7 MENDOZA", "Mega TV", "Paravision", "Sintonia TV", "Unicanal",
        "", "", "", "", "KZO Entertainment",
    ]),
    "Deportes": new Set([
        "TyC Sports Play", "TyC Sports 2", "TyC Sports", "Red Bull TV",
        "DirecTV Plus", "DirecTV Sports 2", "DirecTV Sports", "DeporTV", "TyC Sports Internacional",
        "AMÉRICA SPORTS", "Canela Deportes", "Claro Sports", "GOLPLAY", "BEIN Ñ Sport",
        "FUTV", "TNT Sports Premium CL", "TNT Sports", "PX SPORTS", "SHOWSPORT",
        "ESPN DISNEY", "ESPN 4 MX", "ESPN 3 MX", "ESPN 2 MX", "ESPN MX",
        "ESPN 5", "ESPN 4", "ESPN 3", "ESPN 2", "ESPN",
        "ESPN Premium", "ESPN Deportes", "ESPN Extra", "ESPN 7", "ESPN 6",
        "Sky Sports 5", "Sky Sports 4", "Sky Sports 3", "Sky Sports 2", "Sky Sports 1",
        "FOX SPORTS 2", "FOX SPORTS", "GOLTV", "GOLPERU", "Liga 1 MAX",
        "FOX SPORTS 2 USA", "FOX SPORTS 1 USA", "FOX DEPORTES USA", "FOX SPORTS Premium", "FOX SPORTS 3",
        "LaLiga TV", "FOX SPORTS 3 MX", "FOX SPORTS 2 MX", "FOX SPORTS MX", "GOLF TV AMÉRICA",
        "Liga de Campeones 3", "Liga de Campeones 2", "Liga de Campeones", "Movistar LaLiga", "Movistar Deportes",
        "Sport TV3", "Sport TV2", "Sport TV1", "Peacock 2", "Peacock 1",
        "Win Sports +", "Win Sports", "TUDN", "ECDF LigaPro", "ECDF",
        "DAZN 2 ES", "DAZN 1 ES", "Eurosport 2 ES", "Eurosport 1 ES", "ITV Deportes",
        "NBA TV", "WWE", "CBS Sports", "DAZN LaLiga", "DAZN F1",
        "", "", "", "", "",
    ]),
    "Cultura": new Set([
        "Canal de la Ciudad", "CANAL Á", "Unife", "Orbe 21", "Construir TV",
        "Chile Channel", "DH", "Nesting TV", "Vive TV Santa Fe", "Litus TV Santa Fe",
        "Piura TV", "Cumo", "OZONO TV", "TV Cosmo",
        "", "", "", "", "",
    ]),
    "Caricaturas": new Set([
        "Cartoon Network", "Cartoonito",
        "NICK JR", "NICK", "Discovery Kids", "Disney JR", "Disney Channel",
        "Plim Plim", "BOING", "Tooncast", "BABY TV", "TEEN NICK",
        "Los Simpsons", "PAKA PAKA", "Dreamworks", "Adult Swim", "Kidoo",
        "South Park", "Ganja TV", "Goku TV", "Futurama mania",
        "", "", "TEC TV", "ZooMoo", "Canal Infantil", "La Vaca y el Pollito", "Ed, Edd y Eddy",
        "El Chavo del Ocho", "Billy y Mandy", "Los Chicos del Barrio",
        "Tomy y Jerry", "Chip y Dale", "Johnny Bravo", "Maycol el del medio",
        "Dragon Ball Z", "Dragon Ball Super", "Darwin Watterson", "Laboratorio de Dexter",
        "Garfield", "Grizzy", "Los 3 Chiflados", "Mansion Foster", "Uncle Grandpa",
    ]),
    "Peliculas": new Set([
        "Canal 34 San Juan", "Bayres TV", "Runtime Cine", "Rakuten TV",
        "American TV", "TV Terror", "Moni TV", "+ Cine Classic", "SPTV Digital",
        "HBO 2", "HBO", "TNT HD", "Star Channel", "Paramount Network",
        "HBO POP", "HBO Mundi", "HBO Xtreme", "HBO Family", "HBO Plus",
        "Cinecanal", "A&E", "Space", "HGTV", "HBO Signature",
        "AXN", "AMC", "DHE", "Cine AR", "Cinemax",
        "Universal Crime", "Universal Cinema", "Universal TV", "A3Cine", "AXN MOVIES",
        "Warner", "FXHD", "Universal Premiere", "Universal Reality", "Universal Comedy",
        "GOLDEN", "Sony Cine", "Sony Movies", "Sony Channel", "Studio Universal",
        "Neflix HD", "Multipremier", "GOLDEN Edge", "GOLDEN Plus", "GOLDEN Premier",
        "Solucion TV", "Chincha TV", "Fortuna TV", "Peliculas mania", "Terror mania",
        "Comedy Central", "USA NETWORK", "Telecine",
        "Planeta TV", "Europa Europa", "Eurochannel", "VOLVER", "TCM",
        "Cine Hispano", "Cine Familiar", "Yurimaguas TV", "CR TV", "+ Cine",
        "", "Squirrel", "De Película", "Canal GTV", "Cine Premium",
        "", "", "", "", "",
        "", "", "", "", "",
    ]),
    "Series": new Set([
        "Star TVE", "A3Series", "TNT Series", "SPTV Digital", "Rakuten TV", "La 7 TV",
        "Autentica TV", "", "", "", "",
        "", "", "", "", "",
    ]),
    "Novelas": new Set([
        "Venevisión", "Tele Tuya",
        "TNT Novelas", "Latina Clásicos Perú", "TVC", "Star TVE",
        "Tlnovelas", "SUR TV", "Sony Novelas", "Las Estrellas", "Pasiones",
        "", "", "", "", "Novelisima",
    ]),
    "Documentales": new Set([
        "Orbe 21", "DW", "Love ThePlanet", "Love Nature", "", "Hispan TV", "Nesting TV", "NET Channel HD", "Educa", "Love Wine",
        "Discovery TLC", "Discovery Science", "Discovery Theater", "Discovery World", "Discovery Channel",
        "Animal Planet", "DMAX", "Discovery ID", "Discovery H&H", "Discovery Turbo",
        "", "Garage TV", "History 2", "History", "National Geographic",
        "", "", "", "", "",
    ]),
    "Entretenimiento": new Set([
        "Unife", "Caras TV", "Am 1020 San Juan", "Vive TV Santa Fe",
        "", "Sony Competencias", "E Entertaiment", "X TV", "RTS",
        "", "", "", "", "",
    ]),
    "Música": new Set([
        "MTV", "NICK MUSIC", "Latina TV", "Tierramia",
        "HTV", "CM", "Music TOP", "MTV 00S", "MTV hits",
        "Flow Eventos", "Flow Music 2", "Flow Music 1", "Flow Music XP", "Quiero",
        "Vorterix", "Mi Música Romantica", "Mi Música Reggaeton", "Mi Música HITS", "TELEHIT",
        "", "", "Allegro", "MTV LIVE", "Mi Música K-POP",
    ]),
    "Varios": new Set([
        "5 Minute Crafts", "Canal Rural", "WWE", "Latam Rural",
        "EWTN", "Canal Luz", "The big bang theory", "Love ThePlanet",
        "", "", "", "", "Love Wine", "La Vaca y el Pollito", "Ed, Edd y Eddy",
        "El Chavo del Ocho", "Billy y Mandy", "Los Chicos del Barrio",
        "Tomy y Jerry", "Chip y Dale", "Johnny Bravo", "Maycol el del medio",
        "Dragon Ball Z", "Dragon Ball Super", "Darwin Watterson", "Laboratorio de Dexter",
        "Garfield", "Grizzy", "Los 3 Chiflados", "Mansion Foster", "Uncle Grandpa",
    ]),
    "Adultos": new Set([
        "Venus", "Playboy", "Sextreme", "CHATURBATE",
    ]),

};




// Sin bloqueo de dominio - cualquier dominio puede ejecutar la página


// Histats.com  START  (aync)
// var _Hasync = _Hasync || [];
// _Hasync.push(['Histats.start', '1,4914043,4,327,112,62,00011001']);
// _Hasync.push(['Histats.fasi', '1']);
// _Hasync.push(['Histats.track_hits', '']);
// (function () {
//     var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
//     hs.src = ('//s10.histats.com/js15_as.js');
//     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
// })();
// Histats.com  END