class Time {
  constructor(Sigla, Nome, Jogadores,Jogos,Vitorias) {
    this.Sigla = Sigla;
    this.Nome = Nome;
    this.Jogadores = Jogadores;
    this.Jogos = Jogos;
    this.Vitorias = Vitorias;
  }
}

class Jogador {
  constructor(Lane, Nome,Nacionalidade) {
    this.Lane = Lane;
    this.Nome = Nome;
    this.Nacionalidade = Nacionalidade;
  }
}

class Lane {
  constructor(Id,Nome,Imagem) {
      this.Id = Id;
      this.Nome = Nome;
      this.Imagem = Imagem;
  }
}

class Nacionalidade {
  constructor(Sigla,Nome,Imagem) {
      this.Sigla = Sigla;
      this.Nome = Nome;
      this.Imagem = Imagem;
  }
}

class Campeonato{
  constructor(Sigla,Nome,Times) {
      this.Sigla = Sigla;
      this.Nome = Nome;
this.Times = Times
  }
}

let Alemanha = new Nacionalidade("GE","Alemanha","germany");
let Argentina = new Nacionalidade("AR","Argentina","argentina");
let Armenia = new Nacionalidade("AM","Armenia","armenia");
let Australia = new Nacionalidade("AU","Australia","australia");
let Brasil = new Nacionalidade("BR","Brasil","brasil");
let Canada = new Nacionalidade("CA","Canada","canada");
let Chile = new Nacionalidade("CL","Chile","chile");
let CoreiaDoSul = new Nacionalidade("KR","Coréia do Sul","coreia-do-sul");
let Croacia = new Nacionalidade("HR","Croacia","croacia");
let Dinamarca = new Nacionalidade("DN","Dinamarca","dinamarca");
let EstadosUnidos = new Nacionalidade("US", "Estados Unidos", "estados-unidos");
let Franca = new Nacionalidade("FR", "França", "france");
let Mexico = new Nacionalidade("MX","Mexico","mexico");
let NovaZelandia = new Nacionalidade("NZ","Nova Zelandia","nova-zelandia");
let Portugal = new Nacionalidade("PT","Portugal","portugal");
let Russia = new Nacionalidade("RU","Russia","russia");
let Peru = new Nacionalidade("PE","Peru","peru");
let Singapura = new Nacionalidade("SP", "Singapura", "singapura");
let Suecia = new Nacionalidade("SW", "Suecia", "sweden");
let Turquia = new Nacionalidade("TR","Turquia","turquia");
let Uruguai = new Nacionalidade("UR","Uruguai","Uruguay");


let TOP = new Lane(1,"TOP","toplane");
let JG = new Lane(2,"JG","jungle");
let MID = new Lane(3,"MID","midlane");
let BOT = new Lane(4,"BOT","botlane");
let SUP = new Lane(5,"SUP","support");
let C = new Lane(6,"C","coach");
let A = new Lane(7,"A","analista");
let HC = new Lane(7,"HC");

let Abaxial = new Jogador(C,"Abaxial",EstadosUnidos);
let Absolut = new Jogador(BOT,"Absolut",Brasil);
let Accez = new Jogador(JG,"Accez",Brasil);
let Add = new Jogador(TOP,"Add",CoreiaDoSul);
let Aegis = new Jogador(JG,"Aegis",Brasil);
let Aithusa = new Jogador(MID,"Aithusa",Brasil);
let Aladoric = new Jogador(SUP,"Aladoric",Australia);
let Alocs = new Jogador(C,"Alocs",Brasil);
let Any = new Jogador(MID,"Anyyy",Brasil);
let Aoshi = new Jogador(C,"Aoshi",Brasil);
let Ares = new Jogador(C,"Ares",CoreiaDoSul);
let Asper = new Jogador(SUP,"Asper",CoreiaDoSul);
let Asta = new Jogador(JG,"Asta",Brasil);
let Avenger = new Jogador(MID,"Avenger",Brasil);
let Ayel = new Jogador(TOP,"Ayel",Brasil);
let Ayu = new Jogador(BOT,"Ayu",Brasil);
let Bankai = new Jogador(TOP,"Bankai",Brasil);
let BAO = new Jogador(BOT,"BAO",CoreiaDoSul);
let Beenie = new Jogador(BOT,"Beenie",Brasil);
let Beelzy = new Jogador(C,"Beelzy",Brasil);
let Betao = new Jogador(TOP,"Betao",Brasil);
let Bigfafa = new Jogador(C,"Bigfafa",CoreiaDoSul);
let Blacky = new Jogador(MID,"Blacky",Brasil);
let Boal = new Jogador(TOP,"Boal",Brasil);
let BocaJR = new Jogador(SUP,"BocaJR",Brasil);
let Bong = new Jogador(TOP,"Bong",CoreiaDoSul);
let Bounty = new Jogador(SUP,"Bounty",Brasil);
let BP = new Jogador(A,"BP",Portugal);
let Brance = new Jogador(BOT,"Brance",Brasil);
let Brandao = new Jogador(A,"Brandao",Brasil);
let Brucer = new Jogador(MID,"Brucer",Brasil);
let Buggax = new Jogador(TOP,"Buggax",Uruguai);
let Bydeki = new Jogador(BOT,"Bydeki",Brasil);
let brTT = new Jogador(BOT,"brTT",Brasil);
let Bugi = new Jogador(JG,"Bugi",CoreiaDoSul);
let Bvoy = new Jogador(BOT,"Bvoy",CoreiaDoSul);
let Cabu = new Jogador(SUP,"Cabu",Brasil);
let Canna = new Jogador(TOP,"Canna",CoreiaDoSul);
let Caos = new Jogador(A,"Caos",Brasil);
let CarioK = new Jogador(JG,"CarioK",Brasil);
let Cavalo = new Jogador(SUP,"Cavalo",Brasil);
let Ceos = new Jogador(SUP,"Ceos",Brasil);
let Celo = new Jogador(BOT,"Celo",Brasil);
let Cepted = new Jogador(MID,"Cepted",CoreiaDoSul);
let Coelho = new Jogador(C,"Coelho",Brasil);
let Croc = new Jogador(JG,"Croc",CoreiaDoSul);
let Crowe = new Jogador(C,"Crowe",EstadosUnidos);
let CuVee = new Jogador(TOP,"CuVee",CoreiaDoSul);
let Damage = new Jogador(SUP,"Damage",Brasil);
let Decoy = new Jogador(SUP, "Decoy", NovaZelandia);
let Destroy = new Jogador(TOP, "Destroy", CoreiaDoSul);
let Diamondprox = new Jogador(JG,"Diamondprox",Russia);
let Dionrray = new Jogador(C,"Dionrray",Brasil);
let Disamis = new Jogador(JG,"Disamis",Brasil);
let Disave = new Jogador(BOT,"Disave",Brasil);
let Djoko = new Jogador(C,"Djoko",Brasil);
let DonArts = new Jogador(JG,"DonArts",Alemanha);
let DoRun = new Jogador(TOP, "DoRun", CoreiaDoSul);
let DrakeHero = new Jogador(JG, "DrakeHero", Brasil);
let Drop = new Jogador(BOT,"Drop",Brasil);
let DudsTheBoy = new Jogador(BOT,"DudsTheBoy",Brasil);
let Dynquedo = new Jogador(MID,"Dynquedo",Brasil);
let Edward = new Jogador(C,"Edward",Armenia);
let Elramir = new Jogador(JG,"Elramir",Turquia);
let Enel = new Jogador(JG,"Enel",Brasil);
let Enga = new Jogador(MID,"Enga",Argentina);
let Envy = new Jogador(MID,"Envy",Brasil);
let Erasus = new Jogador(JG,"Erasus",Brasil);
let eSa = new Jogador(SUP,"eSa",Brasil);
let Evrot = new Jogador(MID,"Evrot",Brasil);
let Expect = new Jogador(TOP,"Expect",CoreiaDoSul);
let Flare = new Jogador(BOT,"Flare",Brasil);
let Flawless = new Jogador(JG,"Flawless",CoreiaDoSul);
let fnB = new Jogador(TOP,"fnB",Brasil);
let Follow = new Jogador(JG,"Follow",Argentina);
let FrostStrike = new Jogador(JG,"FrostStrike",Chile);
let Frosty = new Jogador(SUP,"Frosty",Brasil);
let Furyz = new Jogador(A, "Furyz", Brasil);
let Fuuu = new Jogador(MID, "Fuuu", Brasil);
let Gafone = new Jogador(C,"Gafone",Brasil);
let Garo = new Jogador(BOT,"Garo",Brasil);
let GeumGo = new Jogador(JG,"GeumGo",CoreiaDoSul);
let Goku = new Jogador(MID,"Goku",Brasil);
let Goot = new Jogador(JG,"Goot",Brasil);
let Grell = new Jogador(JG,"Grell",Mexico);
let Grevthar = new Jogador(MID,"Grevthar",Brasil);
let Guard = new Jogador(SUP,"Guard",CoreiaDoSul)
let Guigo = new Jogador(TOP,"Guigo",Brasil);
let Guigs = new Jogador(SUP, "Guigs", Brasil);
let Hachani = new Jogador(C, "Hachani", CoreiaDoSul);
let Hades = new Jogador(BOT,"Hades",CoreiaDoSul);
let Harumi = new Jogador(SUP,"Harumi",Brasil);
let Halier = new Jogador(A,"Halier",Brasil);
let Hauz = new Jogador(MID,"Hauz",Brasil);
let Hawk = new Jogador(SUP,"Hawk",Brasil);
let Hidan = new Jogador(TOP,"Hidan",Brasil);
let Hirit = new Jogador(TOP,"Hirit",CoreiaDoSul);
let Hiro = new Jogador(C,"Hiro",CoreiaDoSul);
let Hugato = new Jogador(JG,"Hugato",Brasil);
let Hypno = new Jogador(A,"Hypno",Brasil);
let JackPot = new Jogador(TOP,"JackPot",CoreiaDoSul);
let JeanMago = new Jogador(MID,"Jean Mago",Brasil);
let Jisu = new Jogador(TOP,"Jisu",CoreiaDoSul);
let Jockster = new Jogador(SUP,"Jockster",Brasil);
let JoJo = new Jogador(SUP,"JoJo",Brasil);
let Juc = new Jogador(A,"Juc",Brasil);
let Juliera = new Jogador(BOT,"Juliera",Brasil);
let Juzo = new Jogador(BOT, "Juzo", Brasil);
let Kabbie = new Jogador(SUP, "Kabbie", CoreiaDoSul);
let KaKaO = new Jogador(JG,"KaKaO",CoreiaDoSul);
let Kalec = new Jogador(C,"Kalec",Brasil);
let Kennedys = new Jogador(TOP,"Kennedys",Brasil);
let Khorn = new Jogador(A,"Khorn",Brasil);
let Kiari = new Jogador(TOP,"Kiari",Brasil);
let Kick = new Jogador(MID,"Kick",Brasil);
let Kim = new Jogador(C,"Kim",Brasil);
let Kira = new Jogador(A, "Kira", Brasil);
let Kojima = new Jogador(BOT, "Kojima", Brasil);
let Krastyel = new Jogador(MID,"Krastyel",Brasil);
let Kuma = new Jogador(C,"Kuma",Brasil);
let Kuri = new Jogador(SUP, "Kuri", CoreiaDoSul);
let Laden = new Jogador(C, "Laden", CoreiaDoSul);
let Lapis = new Jogador(TOP,"Lapis",CoreiaDoSul);
let Lava = new Jogador(MID,"Lava",CoreiaDoSul);
let Lonely = new Jogador(TOP,"Lonely",CoreiaDoSul);
let Loreviz = new Jogador(C,"Loreviz",Brasil);
let Luci = new Jogador(SUP,"Luci",CoreiaDoSul);
let Luskka = new Jogador(BOT,"Luskka",Brasil);
let Lyafaenia = new Jogador(C,"Lyafaenia",Brasil);
let Maestro = new Jogador(C,"Maestro",Brasil);
let Matsu = new Jogador(BOT, "Matsu", Brasil);
let Makes = new Jogador(TOP, "Makes", Brasil);
let Malrang = new Jogador(JG, "Malrang", CoreiaDoSul);
let Medina = new Jogador(C,"Medina",Brasil);
let Mewkyo = new Jogador(JG,"Mewkyo",Brasil);
let Mia = new Jogador(SUP,"Mia",CoreiaDoSul);
let micaO = new Jogador(BOT,"micaO",Brasil);
let Mickey = new Jogador(MID,"Mickey",CoreiaDoSul);
let Mido = new Jogador(SUP,"Mido",Brasil);
let Mills = new Jogador(BOT,"Mills",Brasil);
let Minerva = new Jogador(JG, "Minerva", Brasil);
let Mir = new Jogador(JG, "Mir", CoreiaDoSul);
let Mireu = new Jogador(MID,"Mireu",CoreiaDoSul);
let Mocha = new Jogador(SUP,"Mocha",CoreiaDoSul);
let Nelson = new Jogador(A,"Nelson",Singapura);
let Netuno = new Jogador(BOT,"Netuno",Brasil);
let Newbie = new Jogador(SUP,"Newbie",Argentina);
let Nia = new Jogador(SUP,"Nia",CoreiaDoSul);
let NinjaKiwi = new Jogador(BOT,"NinjaKiwi",Brasil);
let Nishikino = new Jogador(A,"Nishikino",Brasil);
let NosFerus = new Jogador(MID,"NosFerus",Brasil);
let Nova = new Jogador(C,"Nova",Turquia);
let Nuddle = new Jogador(C,"Nuddle",Canada);
let Oddie = new Jogador(JG, "Oddie", Peru);
let Olleh = new Jogador(SUP, "Olleh", CoreiaDoSul);
let Onfleek = new Jogador(JG, "Onfleek", CoreiaDoSul);
let Onmeta = new Jogador(C,"Onmeta",Brasil);
let Pades = new Jogador(C,"Pades",Turquia);
let Parang = new Jogador(TOP,"Parang",CoreiaDoSul);
let pbO = new Jogador(BOT,"pbO",Brasil);
let Piloto = new Jogador(MID,"Piloto",Brasil);
let Pirean = new Jogador(MID,"Pirean",CoreiaDoSul);
let Pit = new Jogador(A,"Pit",Brasil);
let Politico = new Jogador(C,"Politico",Brasil);
let ProDelta = new Jogador(SUP,"ProDelta",Brasil);
let Professor = new Jogador(SUP,"Professor",Brasil);
let RafaP = new Jogador(A,"RafaP",Brasil);
let Rainbow = new Jogador(MID,"Rainbow",CoreiaDoSul);
let Ranger = new Jogador(SUP,"Ranger",Brasil);
let RAV3N = new Jogador(BOT,"RAV3N",Brasil);
let Raven = new Jogador(A,"Raven",Portugal);
let RedBert = new Jogador(SUP,"RedBert",Brasil);
let Revolta = new Jogador(C,"Revolta",Brasil);
let Rhuckz = new Jogador(SUP,"Rhuckz",Portugal);
let Riyev = new Jogador(A,"Riyev",Brasil);
let Robo = new Jogador(TOP,"Robo",Brasil);
let Route = new Jogador(BOT,"Route",CoreiaDoSul);
let Ruin = new Jogador(TOP,"Ruin",CoreiaDoSul);
let Ryan = new Jogador(JG,"Ryan",CoreiaDoSul);
let Sacre = new Jogador(TOP, "Sacre", Croacia);
let Sarkis = new Jogador(C, "Sarkis", Brasil);
let Sbs = new Jogador(C, "Sbs", CoreiaDoSul);
let Scamber = new Jogador(SUP, "Scamber", Brasil); 
let Scary = new Jogador(JG,"Scary",Brasil);
let Scuro = new Jogador(SUP, "Scuro", Brasil); 
let Seeel = new Jogador(C, "Seeel", CoreiaDoSul);
let Seize = new Jogador(JG, "Seize", CoreiaDoSul);
let Sephis = new Jogador(C,"Sephis",Brasil); 
let Shini = new Jogador(JG,"Shini",Brasil);
let ShowMaker = new Jogador(MID,"ShowMaker",CoreiaDoSul);
let Shrimp = new Jogador(JG,"Shrimp",CoreiaDoSul);
let Sive = new Jogador(SUP,"Sive",CoreiaDoSul);
let Skeeto = new Jogador(TOP,"Skeeto",Chile);
let Skybart = new Jogador(TOP,"Skybart",Brasil);
let Smeb = new Jogador(TOP, "Smeb", CoreiaDoSul);
let Smiley = new Jogador(BOT, "Smiley", Suecia);
let Snaker = new Jogador(BOT,"Snaker",Argentina);
let Snowflower = new Jogador(SUP,"Snowflower",CoreiaDoSul);
let Snowlz = new Jogador(C,"Snowlz",Brasil)
let Stardust = new Jogador(C,"Stardust",CoreiaDoSul);
let St1ng = new Jogador(JG,"St1ng",Brasil);
let Stepz = new Jogador(BOT, "Stepz", Brasil);
let Strazzy = new Jogador(C, "Strazzy", Brasil);
let SuperCleber = new Jogador(TOP,"SuperCleber",Brasil);
let Taxer = new Jogador(JG,"Taxer",Dinamarca);
let Tay = new Jogador(TOP,"Tay",Brasil);
let Telas = new Jogador(SUP,"Telas",Brasil);
let Tinowns = new Jogador(MID,"Tinowns",Brasil);
let TioBen = new Jogador(C,"TioBen",Brasil);
let Titan = new Jogador(BOT,"Titan",Brasil);
let Tockers = new Jogador(A, "Tockers", Brasil);
let Toucouille = new Jogador(MID, "Toucouille", Franca);
let Trap = new Jogador(TOP,"Trap",CoreiaDoSul);
let Trick = new Jogador(JG,"Trick",CoreiaDoSul);
let Trigo = new Jogador(BOT,"Trigo",Brasil);
let Truklax = new Jogador(TOP,"Truklax",Portugal);
let Turtle = new Jogador(C,"Turtle",Brasil);
let Tusin = new Jogador(SUP,"Tusin",CoreiaDoSul);
let Tutsz = new Jogador(MID,"Tutsz",Brasil);
let Tyrin = new Jogador(TOP,"Tyrin",Brasil);
let Vahvel = new Jogador(SUP,"Vahvel",Brasil);
let Von = new Jogador(C,"Von",Brasil);
let VulcanicDog = new Jogador(JG,"Vulcanic Dog",Argentina);
let VVVert = new Jogador(TOP,"VVVert",Brasil);
let Wiz = new Jogador(JG,"Wiz",CoreiaDoSul);
let Wizer = new Jogador(TOP,"Wizer",CoreiaDoSul);
let Woodboy = new Jogador(SUP,"Woodboy",Brasil);
let Wos = new Jogador(SUP,"Wos",Brasil);
let Xero = new Jogador(C,"Xero",CoreiaDoSul);
let Yampi = new Jogador(JG,"Yampi",Brasil);
let Yang = new Jogador(TOP,"Yang",Brasil);
let Yuri = new Jogador(MID,"Yuri",CoreiaDoSul);
let Zay = new Jogador(SUP,"Zay",Brasil);
let Zirigui = new Jogador(SUP,"Zirigui",Brasil);
let Zuao = new Jogador(JG,"Zuao",Brasil);
let Zzk = new Jogador(TOP,"Zzk",CoreiaDoSul);

let AnonTopBR = new Jogador(TOP,"???",Brasil)
let AnonJgBR = new Jogador(JG,"???",Brasil)
let AnonMidBR = new Jogador(MID,"???",Brasil)
let AnonAdcBR = new Jogador(BOT,"???",Brasil)
let AnonSupBR = new Jogador(SUP,"???",Brasil)
let AnonCoachBR = new Jogador(C,"???",Brasil)

let AnonTopKR = new Jogador(TOP,"???",CoreiaDoSul)
let AnonJgKR = new Jogador(JG,"???",CoreiaDoSul)
let AnonMidKR = new Jogador(MID,"???",CoreiaDoSul)
let AnonAdcKR = new Jogador(BOT,"???",CoreiaDoSul)
let AnonSupKR = new Jogador(SUP,"???",CoreiaDoSul)
let AnonCoachKR = new Jogador(C,"???",CoreiaDoSul)

let Fluxo = new Time("FX", "FLUXO", [Kiari, St1ng, Fuuu, Kojima, Scamber, Onmeta, Sephis], 0, 0);
let Furia = new Time("FUR", "FURIA", [Destroy, Mir, Tutsz, Ayu, Zay, Maestro, Sbs], 0, 0);
let INTZ = new Time("ITZ", "INTZ", [Tay, Yampi, Aithusa, NinjaKiwi, Damage, Aoshi, Strazzy], 0, 0);
let KaBuM = new Time("KBM", "KABUM", [Lonely, Malrang, Hauz, Netuno, Ceos, Ares, TioBen, Von], 0, 0);
let Liberty = new Time("LIB", "LIBERTY", [Makes, DrakeHero, Piloto, micaO, Cavalo, Turtle, Beelzy], 0, 0);
let LosGrandes = new Time("LOS", "LOS GRANDES", [SuperCleber, Seize, Envy, Celo,Kabbie, Dionrray,Medina], 0, 0);
let LOUD = new Time("LOUD", "LOUD", [Robo, Croc, Tinowns, Route, RedBert, Stardust], 0, 0);
let PaiN = new Time("PNG", "PAIN", [Wizer, CarioK, Dynquedo, Titan, Kuri, Xero, Sarkis], 0, 0);
let RED = new Time("RED", "RED", [fnB, Aegis, Grevthar, Brance, JoJo, Coelho, Kalec], 0, 0);
let VivoKeyd = new Time("KEYD", "VIVO KEYD", [Guigo, Disamis, Toucouille, Smiley, ProDelta, Seeel,Lyafaenia], 0, 0);

const Times= [Fluxo,Furia,INTZ,KaBuM,Liberty,LosGrandes,LOUD,PaiN,RED,VivoKeyd]
//const Times= [Furia,RED,LOUD,PaiN,Miners,Flamengo,Rensga,Vorax,INTZ,KaBuM]

function ordenar(){
Times.sort(function (a, b) {
  if (a.Vitorias < b.Vitorias) {
    return 1;
  }
  if (a.Vitorias > b.Vitorias) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
}

function next(){
  var Rodada = document.getElementsByName('tabs');
  var titulo = document.getElementById('r')
  for(i = 0;i<Rodada.length;i++){
      if(Rodada[i].checked == true){
        Rodada[i+1].checked = true;

        titulo.innerHTML= "Rodada " + ((i+1)+1)
        break;
      }
  }
}

function back(){
  var Rodada = document.getElementsByName('tabs');
  var titulo = document.getElementById('r')
  for(i = 0;i<Rodada.length;i++){
      if(Rodada[i].checked == true){
        Rodada[i-1].checked = true;

        titulo.innerHTML= "Rodada " + ((i+1)-1)
        break;
      }
  }
}

function atualizarTabela(CRU1,FLA1,FUR1,ITZ1,KBM1,LOUD1,PNG1,RED1,RSG1,VRX1){
  document.getElementById('CRUV').innerHTML = CRU1;
  document.getElementById('FLAV').innerHTML = FLA1;
  document.getElementById('FURV').innerHTML = FUR1;
  document.getElementById('ITZV').innerHTML = ITZ1;
  document.getElementById('KBMV').innerHTML = KBM1;
  document.getElementById('LOUDV').innerHTML = LOUD1;
  document.getElementById('PNGV').innerHTML = PNG1;
  document.getElementById('REDV').innerHTML = RED1;
  document.getElementById('RSGV').innerHTML = RSG1;
  document.getElementById('VRXV').innerHTML = VRX1;
  sortTableNumber(1);
}

function percorrer()
{
  let CRU = 0;
  let FLA = 0;
  let FUR = 0
  let ITZ = 0;
  let KBM = 0;
  let LOUD = 0;
  let PNG = 0;
  let RED = 0;
  let RSG = 0;
  let VRX = 0;

  radios = document.getElementsByTagName('input');
  //radLoud = radios.namedItem("LOUD");
  for (var i = 0; i < radios.length; i++) {
    switch(radios[i].id)
    {
      case 'CRU':
        if(radios[i].checked ==true)
        {
        CRU++;
          atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
          //sortTableNumber(1);
        }
        break;
      
      case 'FLA':
          if(radios[i].checked ==true)
          {
          FLA++;
            atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
            //sortTableNumber(1);
          }
          break;

      case 'FUR':
        if(radios[i].checked ==true)
        {
        FUR++;
          atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
          //sortTableNumber(1);
        }
        break;

      case 'ITZ':
        if(radios[i].checked ==true)
        {
        ITZ++;
          atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
          //sortTableNumber(1);
        }
        break;

        case 'KBM':
          if(radios[i].checked ==true)
          {
          KBM++;
            atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
            //sortTableNumber(1);
          }
          break;
      
        case 'LOUD':
          if(radios[i].checked ==true)
          {
          LOUD++;
            atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
            //sortTableNumber(1);
          }
          break;
        
          case 'PNG':
          if(radios[i].checked ==true)
          {
            PNG++;
            atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
            //sortTableNumber(1);
          }
          break;

          case 'RED':
            if(radios[i].checked ==true)
            {
              RED++;
              atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
              //sortTableNumber(1);
            }
            break;

          case 'RSG':
            if(radios[i].checked ==true)
            {
              RSG++;
              atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
              //sortTableNumber(1);
            }
            break;

          case 'VRX':
            if(radios[i].checked ==true)
            {
              VRX++;
              atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
              //sortTableNumber(1);
            }
            break;
      default:
        atualizarTabela(CRU,FLA,FUR,ITZ,KBM,LOUD,PNG,RED,RSG,VRX);
        break;
      
    }
  }
}

var criarTabela = function(Times){
  document.write('<table  id="tabela" height = "50%" width="100%">');
  document.write("<tr style='background-color:#000000;color:#FFFFFF;'><th>Time</th><td align='center'><b>Vitorias</b></td></tr>");
      Times.forEach(x => {
        document.write("<tr id='"+x.Nome+"'>");
          document.write("<td id='nome'>");
            document.write(x.Nome);
          document.write("</td>");
          document.write("<td align='center' id='"+x.Sigla+"V'>");
            document.write(x.Vitorias);
          document.write("</td>");
        document.write("</tr>");
      });
  document.write("</table>");
  }

  // let criarNav = function(){
  //   document.write('<nav class="nav_tabs" width="50%">');
  //   document.write('		<table class="" width="100%">');
  //   document.write('			<tr width="100%">');
  //   document.write('				<td align="left"><a href="#" class="previous round" onclick="back()"><</a></td>');
  //   document.write('				<td align="center" id="r" class="r">Rodada 1</td>		');		
  //   document.write('				<td align="right"><a href="#" class="next round" onclick="next()">></a></td>');
  //   document.write('			</tr>');
  //   document.write('		</table>');
  //   document.write('<ul>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab1" class="rd_tab" name="tabs" value= "1" checked="true">');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(PaiN,LOUD,1);
  //   criarPartida(Rensga,Furia,2);
  //   criarPartida(KaBuM,RED,3);
  //   criarPartida(INTZ,Miners,4);
  //   criarPartida(Flamengo,Vorax,5);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab2" class="rd_tab" name="tabs" value= "2">');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(RED,INTZ,6);
  //   criarPartida(Furia,LOUD,7);
  //   criarPartida(Vorax,Rensga,8);
  //   criarPartida(KaBuM,Flamengo,9);
  //   criarPartida(Miners,PaiN,10);
  //   document.write('</article>');
  //   document.write('</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab3" class="rd_tab" name="tabs" value= "3" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,INTZ,11);
  //   criarPartida(Rensga,KaBuM,12);
  //   criarPartida(Miners,RED,13);
  //   criarPartida(LOUD,Vorax,14);
  //   criarPartida(PaiN,Furia,15);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab4" class="rd_tab" name="tabs" value= "4" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(KaBuM,LOUD,16);
  //   criarPartida(INTZ,Rensga,17);
  //   criarPartida(Miners,Flamengo,18);
  //   criarPartida(Vorax,Furia,19);
  //   criarPartida(RED,PaiN,20);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab5" class="rd_tab" name="tabs" value= "5" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(PaiN,Vorax,21);
  //   criarPartida(Furia,KaBuM,22);
  //   criarPartida(Flamengo,RED,23);
  //   criarPartida(Rensga,Miners,24);
  //   criarPartida(LOUD,INTZ,25);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab6" class="rd_tab" name="tabs" value= "6" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,PaiN,26);
  //   criarPartida(RED,Rensga,27);
  //   criarPartida(INTZ,Furia,28);
  //   criarPartida(KaBuM,Vorax,29);
  //   criarPartida(Miners,LOUD,30);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab7" class="rd_tab" name="tabs" value= "7" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Vorax,INTZ,31);
  //   criarPartida(Furia,Miners,32);
  //   criarPartida(LOUD,RED,33);
  //   criarPartida(Rensga,Flamengo,34);
  //   criarPartida(PaiN,KaBuM,35);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab8" class="rd_tab" name="tabs" value= "8" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,LOUD,36);
  //   criarPartida(RED,Furia,37);
  //   criarPartida(Rensga,PaiN,38);
  //   criarPartida(Miners,Vorax,39);
  //   criarPartida(INTZ,KaBuM,40);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab9" class="rd_tab" name="tabs" value= "9" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(LOUD,Rensga,41);
  //   criarPartida(KaBuM,Miners,42);
  //   criarPartida(PaiN,INTZ,43);
  //   criarPartida(Vorax,RED,44);
  //   criarPartida(Furia,Flamengo,45);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab10" class="rd_tab" name="tabs" value= "10">');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(PaiN,LOUD,46);
  //   criarPartida(Rensga,Furia,47);
  //   criarPartida(KaBuM,RED,48);
  //   criarPartida(INTZ,Miners,49);
  //   criarPartida(Flamengo,Vorax,50);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab11" class="rd_tab" name="tabs" value= "11">');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(RED,INTZ,51);
  //   criarPartida(Furia,LOUD,52);
  //   criarPartida(Vorax,Rensga,53);
  //   criarPartida(KaBuM,Flamengo,54);
  //   criarPartida(Miners,PaiN,55);
  //   document.write('</article>');
  //   document.write('</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab12" class="rd_tab" name="tabs" value= "12" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,INTZ,56);
  //   criarPartida(Rensga,KaBuM,57);
  //   criarPartida(Miners,RED,58);
  //   criarPartida(LOUD,Vorax,59);
  //   criarPartida(PaiN,Furia,60);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab13" class="rd_tab" name="tabs" value= "13" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(KaBuM,LOUD,61);
  //   criarPartida(INTZ,Rensga,62);
  //   criarPartida(Miners,Flamengo,63);
  //   criarPartida(Vorax,Furia,64);
  //   criarPartida(RED,PaiN,65);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab14" class="rd_tab" name="tabs" value= "14" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(PaiN,Vorax,66);
  //   criarPartida(Furia,KaBuM,67);
  //   criarPartida(Flamengo,RED,68);
  //   criarPartida(Rensga,Miners,69);
  //   criarPartida(LOUD,INTZ,70);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab15" class="rd_tab" name="tabs" value= "15" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,PaiN,71);
  //   criarPartida(RED,Rensga,72);
  //   criarPartida(INTZ,Furia,73);
  //   criarPartida(KaBuM,Vorax,74);
  //   criarPartida(Miners,LOUD,75);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab16" class="rd_tab" name="tabs" value= "16" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Vorax,INTZ,76);
  //   criarPartida(Furia,Miners,77);
  //   criarPartida(LOUD,RED,78);
  //   criarPartida(Rensga,Flamengo,79);
  //   criarPartida(PaiN,KaBuM,80);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab17" class="rd_tab" name="tabs" value= "17" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,LOUD,81);
  //   criarPartida(RED,Furia,82);
  //   criarPartida(Rensga,PaiN,83);
  //   criarPartida(Miners,Vorax,84);
  //   criarPartida(INTZ,KaBuM,85);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab18" class="rd_tab" name="tabs" value= "18" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(LOUD,Rensga,86);
  //   criarPartida(KaBuM,Miners,87);
  //   criarPartida(PaiN,INTZ,88);
  //   criarPartida(Vorax,RED,89);
  //   criarPartida(Furia,Flamengo,90);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab19" class="rd_tab" name="tabs" value= "19">');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(PaiN,LOUD,91);
  //   criarPartida(Rensga,Furia,92);
  //   criarPartida(KaBuM,RED,93);
  //   criarPartida(INTZ,Miners,94);
  //   criarPartida(Flamengo,Vorax,95);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab20" class="rd_tab" name="tabs" value= "20">');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(RED,INTZ,96);
  //   criarPartida(Furia,LOUD,97);
  //   criarPartida(Vorax,Rensga,98);
  //   criarPartida(KaBuM,Flamengo,99);
  //   criarPartida(Miners,PaiN,100);
  //   document.write('</article>');
  //   document.write('</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab21" class="rd_tab" name="tabs" value= "21" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,INTZ,101);
  //   criarPartida(Rensga,KaBuM,102);
  //   criarPartida(Miners,RED,103);
  //   criarPartida(LOUD,Vorax,104);
  //   criarPartida(PaiN,Furia,105);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab22" class="rd_tab" name="tabs" value= "22" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(KaBuM,LOUD,106);
  //   criarPartida(INTZ,Rensga,107);
  //   criarPartida(Miners,Flamengo,108);
  //   criarPartida(Vorax,Furia,109);
  //   criarPartida(RED,PaiN,110);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab23" class="rd_tab" name="tabs" value= "23" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(PaiN,Vorax,111);
  //   criarPartida(Furia,KaBuM,112);
  //   criarPartida(Flamengo,RED,113);
  //   criarPartida(Rensga,Miners,114);
  //   criarPartida(LOUD,INTZ,115);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab24" class="rd_tab" name="tabs" value= "24" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,PaiN,116);
  //   criarPartida(RED,Rensga,117);
  //   criarPartida(INTZ,Furia,118);
  //   criarPartida(KaBuM,Vorax,119);
  //   criarPartida(Miners,LOUD,120);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab25" class="rd_tab" name="tabs" value= "25" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Vorax,INTZ,121);
  //   criarPartida(Furia,Miners,122);
  //   criarPartida(LOUD,RED,123);
  //   criarPartida(Rensga,Flamengo,124);
  //   criarPartida(PaiN,KaBuM,125);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab26" class="rd_tab" name="tabs" value= "26" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(Flamengo,LOUD,126);
  //   criarPartida(RED,Furia,127);
  //   criarPartida(Rensga,PaiN,128);
  //   criarPartida(Miners,Vorax,129);
  //   criarPartida(INTZ,KaBuM,130);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('<li>');
  //   document.write('<input type="radio" id="tab27" class="rd_tab" name="tabs" value= "27" >');
  //   document.write('<div class="tab-content">');
  //   document.write('<article>');
  //   criarPartida(LOUD,Rensga,131);
  //   criarPartida(KaBuM,Miners,132);
  //   criarPartida(PaiN,INTZ,133);
  //   criarPartida(Vorax,RED,134);
  //   criarPartida(Furia,Flamengo,135);
  //   document.write('	</article>');
  //   document.write('	</div>');
  //   document.write('</li>');
  //   document.write('</ul>');
  //   document.write('	</nav>');
  // }

  let criarPartida = function(time1,time2,n){
    document.write('<div class="criacaopartida">');
    document.write(time1.Nome + ' <input type="radio" id="'+time1.Sigla+'" name="'+n+'" onchange="percorrer();" value="'+time1.Sigla+'">' + ' X ' + '<input type="radio" id="'+time2.Sigla+'" name='+n+' onchange="percorrer();" value="'+time2.Sigla+'"> ' + time2.Nome)    ;
    document.write('</div>');
    document.write('<br />');
  }

function sortTableNumber(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tabela");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

var cardTimes = function(){
document.write('<section class="cards">');
Times.forEach(x => {
  if(x.Jogadores.length > 0){
 
    document.write("<div>");
  document.write("<table class = 'tabela' padding-left='25px'>");
  document.write("<tr style='background-color:#000000;color:#FFFFFF;'>");
  document.write("<th></th>");
  document.write('<td align="center"><b>'+x.Nome+'</b></td>');
  document.write("<th></th>");
  document.write("</tr>");
  
  x.Jogadores.forEach(y => {
    document.write("<tr>");
    document.write('<td><img src = "bandeiras/'+y.Nacionalidade.Imagem+'.png"></td>')
   // document.write('<td>'+y.Nacionalidade.Sigla+'</td>')
    document.write('<td width="100px" padding-left="25px" align = "center">'+y.Nome+'</td>')
    //document.write('<td align = "center">'+y.Lane.Nome+'</td>')
    document.write('<td><img src = "lane/'+y.Lane.Imagem+'.png"></td>')
    document.write("</tr>");
    
  })
  
  document.write("</table>");
  document.write("</div>");
  } 
});
  document.write("</section>");
}

document.write('<div class="t">');
criarTabela(Times);
//criarNav();
document.write('</div>');

cardTimes();