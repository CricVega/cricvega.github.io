/*! CricVega — live cricket scores */
(function(){"use strict";
/* team_i18n.js */
const TEAM_I18N = {
  hi:{'India':'भारत','Australia':'ऑस्ट्रेलिया','England':'इंग्लैंड','Pakistan':'पाकिस्तान','South Africa':'दक्षिण अफ्रीका','New Zealand':'न्यूज़ीलैंड','Sri Lanka':'श्रीलंका','West Indies':'वेस्ट इंडीज़','Bangladesh':'बांग्लादेश','Afghanistan':'अफ़ग़ानिस्तान','Ireland':'आयरलैंड','Zimbabwe':'ज़िम्बाब्वे','Nepal':'नेपाल','Scotland':'स्कॉटलैंड','Netherlands':'नीदरलैंड','Namibia':'नामीबिया','Oman':'ओमान','United Arab Emirates':'यूएई','United States':'यूएसए'},
  bn:{'India':'ভারত','Australia':'অস্ট্রেলিয়া','England':'ইংল্যান্ড','Pakistan':'পাকিস্তান','South Africa':'দক্ষিণ আফ্রিকা','New Zealand':'নিউজিল্যান্ড','Sri Lanka':'শ্রীলঙ্কা','West Indies':'ওয়েস্ট ইন্ডিজ','Bangladesh':'বাংলাদেশ','Afghanistan':'আফগানিস্তান','Ireland':'আয়ারল্যান্ড','Zimbabwe':'জিম্বাবোয়ে','Nepal':'নেপাল','Scotland':'স্কটল্যান্ড','Netherlands':'নেদারল্যান্ডস','Namibia':'নামিবিয়া','Oman':'ওমান','United Arab Emirates':'ইউএই','United States':'যুক্তরাষ্ট্র'},
  ta:{'India':'இந்தியா','Australia':'ஆஸ்திரேலியா','England':'இங்கிலாந்து','Pakistan':'பாகிஸ்தான்','South Africa':'தென்னாப்பிரிக்கா','New Zealand':'நியூஸிலாந்து','Sri Lanka':'இலங்கை','West Indies':'மேற்கிந்திய தீவுகள்','Bangladesh':'வங்கதேசம்','Afghanistan':'ஆப்கானிஸ்தான்','Ireland':'அயர்லாந்து','Zimbabwe':'ஜிம்பாப்வே','Nepal':'நேபாளம்','Scotland':'ஸ்காட்லாந்து','Netherlands':'நெதர்லாந்து','Namibia':'நமீபியா','Oman':'ஓமன்','United Arab Emirates':'ஐக்கிய அரபு அமீரகம்','United States':'அமெரிக்கா'},
  es:{'India':'India','Australia':'Australia','England':'Inglaterra','Pakistan':'Pakistán','South Africa':'Sudáfrica','New Zealand':'Nueva Zelanda','Sri Lanka':'Sri Lanka','West Indies':'Indias Occidentales','Bangladesh':'Bangladés','Afghanistan':'Afganistán','Ireland':'Irlanda','Zimbabwe':'Zimbabue','Nepal':'Nepal','Scotland':'Escocia','Netherlands':'Países Bajos','Namibia':'Namibia','Oman':'Omán','United Arab Emirates':'EAU','United States':'EE. UU.'},
  fr:{'India':'Inde','Australia':'Australie','England':'Angleterre','Pakistan':'Pakistan','South Africa':'Afrique du Sud','New Zealand':'Nouvelle-Zélande','Sri Lanka':'Sri Lanka','West Indies':'Indes occidentales','Bangladesh':'Bangladesh','Afghanistan':'Afghanistan','Ireland':'Irlande','Zimbabwe':'Zimbabwe','Nepal':'Népal','Scotland':'Écosse','Netherlands':'Pays-Bas','Namibia':'Namibie','Oman':'Oman','United Arab Emirates':'EAU','United States':'États-Unis'}
};

/* i18n.js */
/* ---------- languages ---------- */
const LANGS=[{c:'en',l:'English'},{c:'hi',l:'हिन्दी'},{c:'bn',l:'বাংলা'},{c:'ta',l:'தமிழ்'},{c:'es',l:'Español'},{c:'fr',l:'Français'}];
const I18N={
en:{home:'Home',live:'Live Scores',schedule:'Schedule',results:'Results',news:'News',series:'Series',teams:'Teams',about:'About',
 searchPh:'Search matches, teams, series, news…',tLive:'Live',tUp:'Upcoming',tRec:'Recent',liveB:'Live',upB:'Upcoming',resB:'Result',brkB:'Break',
 all:'All',intl:'International',dom:'Domestic & League',women:'Women',
 featured:'Featured Match',liveMatches:'Live Matches',upMatches:'Upcoming Matches',recResults:'Recent Results',topStories:'Top Stories',viewAll:'View all',
 curSeries:'Current Series',popTeams:'Popular Teams',noMatches:'No matches here right now',loading:'Loading…',
 today:'Today',tomorrow:'Tomorrow',yesterday:'Yesterday',
 schedTitle:'Cricket Schedule',schedSub:'Upcoming international, domestic & league fixtures with start times in your time zone.',
 resTitle:'Cricket Results',resSub:'Latest completed matches and scorecards.',liveTitle:'Live Cricket Scores',liveSub:'Every live match — auto-updated ball by ball.',
 newsTitle:'Cricket News',newsSub:'Latest headlines from ESPNcricinfo and BBC Sport.',seriesTitle:'Cricket Series',seriesSub:'Ongoing and upcoming tours, tournaments and leagues.',
 teamsTitle:'Cricket Teams',teamsSub:'International teams — fixtures, results and news.',
 tabLive:'Live',tabComm:'Commentary',tabCard:'Scorecard',tabSquads:'Squads',tabInfo:'Info',tabTable:'Points Table',tabMatches:'Matches',tabNews:'News',
 batting:'Batting',bowling:'Bowling',batter:'Batter',bowler:'Bowler',extras:'Extras',total:'Total',fow:'Fall of wickets',yetToBat:'Did not bat',
 toss:'Toss',venue:'Venue',date:'Date',umpires:'Umpires',matchDays:'Match days',hours:'Hours of play',format:'Format',seriesL:'Series',matchNo:'Match',notes:'Match notes',
 crr:'CRR',rrr:'RRR',target:'Target',need:'{team} need {r} runs from {b} balls',overs:'Overs',over:'Over',runs:'runs',thisOver:'This over',recentOvers:'Recent overs',
 atCrease:'At the crease',bowlerNow:'Bowler',lastBall:'Last ball',four:'FOUR!',six:'SIX!',wicket:'WICKET!',loadOlder:'Load older commentary',
 autoBall:'Live — updates every ball',noComm:'Ball-by-ball commentary is not available for this match.',noCard:'Scorecard not available yet.',noSquad:'Squads not announced yet.',noTable:'No points table for this series.',
 playingXI:'Playing XI',bench:'Bench',captain:'C',keeper:'WK',
 team:'Team',p:'P',w:'W',l:'L',nr:'NR',pts:'Pts',nrr:'NRR',
 role:'Role',batStyle:'Batting',bowlStyle:'Bowling',age:'Age',born:'Born',country:'Team',years:'years',
 updated:'Updated',ago:'{n}s ago',justNow:'just now',retry:'Retry',errData:'Could not load live data. Check your connection — retrying automatically.',
 offline:'Connection problem — showing last loaded data.',notFound:'Page not found',notFoundText:'This page does not exist or has moved.',goHome:'Go to Home',
 start:'Starts',fixtures:'Fixtures & Results',installApp:'Install App',relNews:'Related News',readMore:'Read more',
 footAbout:'Fast live cricket scores, ball-by-ball commentary, full scorecards, schedules and news — in 6 languages.',quick:'Quick Links',info:'Information',privacy:'Privacy Policy',contact:'Contact',disclaimer:'Disclaimer',
 dataNote:'Match data: ESPN / Cricinfo public feed. News: ESPNcricinfo & BBC Sport. All trademarks belong to their owners.',
 matchesN:'{n} matches',liveN:'{n} live',vs:'vs',won:'won',players:'Players',matchesL:'Matches',newsL:'News',teamsL:'Teams',seriesL2:'Series'},
hi:{home:'होम',live:'लाइव स्कोर',schedule:'शेड्यूल',results:'रिज़ल्ट',news:'न्यूज़',series:'सीरीज़',teams:'टीमें',about:'हमारे बारे में',
 searchPh:'मैच, टीम, सीरीज़, न्यूज़ खोजें…',tLive:'लाइव',tUp:'आने वाले',tRec:'हाल के',liveB:'लाइव',upB:'आने वाला',resB:'परिणाम',brkB:'ब्रेक',
 all:'सभी',intl:'इंटरनेशनल',dom:'घरेलू और लीग',women:'महिला',
 featured:'मुख्य मैच',liveMatches:'लाइव मैच',upMatches:'आने वाले मैच',recResults:'हाल के परिणाम',topStories:'मुख्य खबरें',viewAll:'सभी देखें',
 curSeries:'चल रही सीरीज़',popTeams:'लोकप्रिय टीमें',noMatches:'अभी यहाँ कोई मैच नहीं',loading:'लोड हो रहा है…',
 today:'आज',tomorrow:'कल',yesterday:'बीता कल',
 schedTitle:'क्रिकेट शेड्यूल',schedSub:'इंटरनेशनल, घरेलू और लीग मैचों का शेड्यूल — आपके समय अनुसार।',
 resTitle:'क्रिकेट रिज़ल्ट',resSub:'हाल ही में खत्म हुए मैच और स्कोरकार्ड।',liveTitle:'लाइव क्रिकेट स्कोर',liveSub:'हर लाइव मैच — गेंद-दर-गेंद अपडेट।',
 newsTitle:'क्रिकेट न्यूज़',newsSub:'ESPNcricinfo और BBC Sport की ताज़ा खबरें।',seriesTitle:'क्रिकेट सीरीज़',seriesSub:'चल रहे और आने वाले दौरे, टूर्नामेंट और लीग।',
 teamsTitle:'क्रिकेट टीमें',teamsSub:'इंटरनेशनल टीमें — मैच, परिणाम और न्यूज़।',
 tabLive:'लाइव',tabComm:'कमेंट्री',tabCard:'स्कोरकार्ड',tabSquads:'टीम',tabInfo:'जानकारी',tabTable:'पॉइंट्स टेबल',tabMatches:'मैच',tabNews:'न्यूज़',
 batting:'बल्लेबाज़ी',bowling:'गेंदबाज़ी',batter:'बल्लेबाज़',bowler:'गेंदबाज़',extras:'अतिरिक्त',total:'कुल',fow:'विकेट पतन',yetToBat:'बल्लेबाज़ी नहीं की',
 toss:'टॉस',venue:'मैदान',date:'तारीख',umpires:'अंपायर',matchDays:'मैच के दिन',hours:'खेल का समय',format:'फॉर्मेट',seriesL:'सीरीज़',matchNo:'मैच',notes:'मैच नोट्स',
 crr:'रन रेट',rrr:'ज़रूरी रेट',target:'लक्ष्य',need:'{team} को {b} गेंदों में {r} रन चाहिए',overs:'ओवर',over:'ओवर',runs:'रन',thisOver:'यह ओवर',recentOvers:'पिछले ओवर',
 atCrease:'क्रीज़ पर',bowlerNow:'गेंदबाज़',lastBall:'पिछली गेंद',four:'चौका!',six:'छक्का!',wicket:'विकेट!',loadOlder:'पुरानी कमेंट्री देखें',
 autoBall:'लाइव — हर गेंद पर अपडेट',noComm:'इस मैच की गेंद-दर-गेंद कमेंट्री उपलब्ध नहीं है।',noCard:'स्कोरकार्ड अभी उपलब्ध नहीं।',noSquad:'टीम अभी घोषित नहीं।',noTable:'इस सीरीज़ की पॉइंट्स टेबल नहीं है।',
 playingXI:'प्लेइंग XI',bench:'बेंच',captain:'क',keeper:'वि.की.',
 team:'टीम',p:'मै',w:'जी',l:'हा',nr:'बेन',pts:'अंक',nrr:'NRR',
 role:'भूमिका',batStyle:'बल्लेबाज़ी',bowlStyle:'गेंदबाज़ी',age:'उम्र',born:'जन्म',country:'टीम',years:'साल',
 updated:'अपडेट',ago:'{n} सेकंड पहले',justNow:'अभी',retry:'फिर कोशिश करें',errData:'लाइव डेटा लोड नहीं हुआ। इंटरनेट देखें — अपने आप फिर कोशिश हो रही है।',
 offline:'कनेक्शन समस्या — आखिरी लोड किया डेटा दिख रहा है।',notFound:'पेज नहीं मिला',notFoundText:'यह पेज मौजूद नहीं है या हटा दिया गया है।',goHome:'होम पर जाएं',
 start:'शुरू',fixtures:'मैच और परिणाम',installApp:'ऐप इंस्टॉल करें',relNews:'संबंधित खबरें',readMore:'और पढ़ें',
 footAbout:'तेज़ लाइव क्रिकेट स्कोर, गेंद-दर-गेंद कमेंट्री, पूरा स्कोरकार्ड, शेड्यूल और न्यूज़ — 6 भाषाओं में।',quick:'लिंक',info:'जानकारी',privacy:'प्राइवेसी पॉलिसी',contact:'संपर्क',disclaimer:'अस्वीकरण',
 dataNote:'मैच डेटा: ESPN / Cricinfo पब्लिक फीड। न्यूज़: ESPNcricinfo और BBC Sport। सभी ट्रेडमार्क उनके मालिकों के हैं।',
 matchesN:'{n} मैच',liveN:'{n} लाइव',vs:'बनाम',won:'जीता',players:'खिलाड़ी',matchesL:'मैच',newsL:'न्यूज़',teamsL:'टीमें',seriesL2:'सीरीज़'},
bn:{home:'হোম',live:'লাইভ স্কোর',schedule:'সূচি',results:'ফলাফল',news:'খবর',series:'সিরিজ',teams:'দল',about:'আমাদের সম্পর্কে',
 searchPh:'ম্যাচ, দল, সিরিজ, খবর খুঁজুন…',tLive:'লাইভ',tUp:'আসন্ন',tRec:'সাম্প্রতিক',liveB:'লাইভ',upB:'আসন্ন',resB:'ফলাফল',brkB:'বিরতি',
 all:'সব',intl:'আন্তর্জাতিক',dom:'ঘরোয়া ও লিগ',women:'মহিলা',featured:'প্রধান ম্যাচ',liveMatches:'লাইভ ম্যাচ',upMatches:'আসন্ন ম্যাচ',recResults:'সাম্প্রতিক ফলাফল',topStories:'শীর্ষ খবর',viewAll:'সব দেখুন',
 curSeries:'চলমান সিরিজ',popTeams:'জনপ্রিয় দল',noMatches:'এখন কোনো ম্যাচ নেই',loading:'লোড হচ্ছে…',today:'আজ',tomorrow:'আগামীকাল',yesterday:'গতকাল',
 schedTitle:'ক্রিকেট সূচি',resTitle:'ক্রিকেট ফলাফল',liveTitle:'লাইভ ক্রিকেট স্কোর',newsTitle:'ক্রিকেট খবর',seriesTitle:'ক্রিকেট সিরিজ',teamsTitle:'ক্রিকেট দল',
 tabLive:'লাইভ',tabComm:'ধারাভাষ্য',tabCard:'স্কোরকার্ড',tabSquads:'স্কোয়াড',tabInfo:'তথ্য',tabTable:'পয়েন্ট টেবিল',tabMatches:'ম্যাচ',
 batting:'ব্যাটিং',bowling:'বোলিং',batter:'ব্যাটার',bowler:'বোলার',extras:'অতিরিক্ত',total:'মোট',fow:'উইকেট পতন',toss:'টস',venue:'মাঠ',umpires:'আম্পায়ার',
 crr:'রান রেট',rrr:'প্রয়োজনীয়',target:'লক্ষ্য',need:'{team}-এর {b} বলে {r} রান দরকার',overs:'ওভার',over:'ওভার',runs:'রান',thisOver:'এই ওভার',recentOvers:'সাম্প্রতিক ওভার',
 atCrease:'ক্রিজে',bowlerNow:'বোলার',lastBall:'শেষ বল',four:'চার!',six:'ছক্কা!',wicket:'উইকেট!',updated:'আপডেট',ago:'{n} সেকেন্ড আগে',justNow:'এইমাত্র',retry:'আবার চেষ্টা',
 privacy:'গোপনীয়তা নীতি',contact:'যোগাযোগ',disclaimer:'দাবিত্যাগ',quick:'লিংক',info:'তথ্য',goHome:'হোমে যান',notFound:'পেজ পাওয়া যায়নি'},
ta:{home:'முகப்பு',live:'நேரலை ஸ்கோர்',schedule:'அட்டவணை',results:'முடிவுகள்',news:'செய்திகள்',series:'தொடர்கள்',teams:'அணிகள்',about:'எங்களைப் பற்றி',
 searchPh:'போட்டி, அணி, தொடர், செய்தி தேடுங்கள்…',tLive:'நேரலை',tUp:'வரவிருக்கும்',tRec:'சமீபத்திய',liveB:'நேரலை',upB:'வரவிருப்பு',resB:'முடிவு',brkB:'இடைவேளை',
 all:'அனைத்தும்',intl:'சர்வதேச',dom:'உள்நாட்டு & லீக்',women:'பெண்கள்',featured:'முக்கிய போட்டி',liveMatches:'நேரலை போட்டிகள்',upMatches:'வரவிருக்கும் போட்டிகள்',recResults:'சமீபத்திய முடிவுகள்',topStories:'முக்கிய செய்திகள்',viewAll:'அனைத்தும்',
 curSeries:'நடப்பு தொடர்கள்',popTeams:'பிரபல அணிகள்',noMatches:'இப்போது போட்டிகள் இல்லை',loading:'ஏற்றுகிறது…',today:'இன்று',tomorrow:'நாளை',yesterday:'நேற்று',
 tabLive:'நேரலை',tabComm:'வர்ணனை',tabCard:'ஸ்கோர்கார்டு',tabSquads:'அணி',tabInfo:'தகவல்',tabTable:'புள்ளி அட்டவணை',tabMatches:'போட்டிகள்',
 batting:'பேட்டிங்',bowling:'பந்துவீச்சு',batter:'பேட்டர்',bowler:'பந்துவீச்சாளர்',extras:'உதிரிகள்',total:'மொத்தம்',toss:'டாஸ்',venue:'மைதானம்',
 crr:'ரன் ரேட்',rrr:'தேவை',target:'இலக்கு',need:'{team} {b} பந்துகளில் {r} ரன்கள் தேவை',overs:'ஓவர்கள்',over:'ஓவர்',runs:'ரன்கள்',thisOver:'இந்த ஓவர்',
 atCrease:'கிரீஸில்',bowlerNow:'பந்துவீச்சாளர்',lastBall:'கடைசி பந்து',four:'நான்கு!',six:'ஆறு!',wicket:'விக்கெட்!',updated:'புதுப்பிப்பு',retry:'மீண்டும்',goHome:'முகப்புக்கு'},
es:{home:'Inicio',live:'En vivo',schedule:'Calendario',results:'Resultados',news:'Noticias',series:'Series',teams:'Equipos',about:'Acerca de',
 searchPh:'Buscar partidos, equipos, series…',tLive:'En vivo',tUp:'Próximos',tRec:'Recientes',liveB:'Vivo',upB:'Próximo',resB:'Resultado',brkB:'Pausa',
 all:'Todos',intl:'Internacional',dom:'Nacional y ligas',women:'Femenino',featured:'Partido destacado',liveMatches:'Partidos en vivo',upMatches:'Próximos partidos',recResults:'Resultados recientes',topStories:'Noticias principales',viewAll:'Ver todo',
 curSeries:'Series actuales',popTeams:'Equipos populares',noMatches:'No hay partidos ahora',loading:'Cargando…',today:'Hoy',tomorrow:'Mañana',yesterday:'Ayer',
 tabLive:'En vivo',tabComm:'Comentario',tabCard:'Tarjeta',tabSquads:'Plantillas',tabInfo:'Info',tabTable:'Tabla',tabMatches:'Partidos',
 batting:'Bateo',bowling:'Lanzamiento',batter:'Bateador',bowler:'Lanzador',total:'Total',toss:'Sorteo',venue:'Estadio',need:'{team} necesita {r} carreras en {b} bolas',
 thisOver:'Este over',atCrease:'En el crease',lastBall:'Última bola',four:'¡CUATRO!',six:'¡SEIS!',wicket:'¡WICKET!',updated:'Actualizado',retry:'Reintentar',goHome:'Ir al inicio'},
fr:{home:'Accueil',live:'En direct',schedule:'Calendrier',results:'Résultats',news:'Actualités',series:'Séries',teams:'Équipes',about:'À propos',
 searchPh:'Rechercher matchs, équipes, séries…',tLive:'Direct',tUp:'À venir',tRec:'Récents',liveB:'Direct',upB:'À venir',resB:'Résultat',brkB:'Pause',
 all:'Tous',intl:'International',dom:'National et ligues',women:'Femmes',featured:'Match à la une',liveMatches:'Matchs en direct',upMatches:'Matchs à venir',recResults:'Résultats récents',topStories:'À la une',viewAll:'Tout voir',
 curSeries:'Séries en cours',popTeams:'Équipes populaires',noMatches:'Aucun match pour le moment',loading:'Chargement…',today:"Aujourd'hui",tomorrow:'Demain',yesterday:'Hier',
 tabLive:'Direct',tabComm:'Commentaire',tabCard:'Feuille de match',tabSquads:'Effectifs',tabInfo:'Infos',tabTable:'Classement',tabMatches:'Matchs',
 batting:'Batte',bowling:'Lancer',batter:'Batteur',bowler:'Lanceur',total:'Total',toss:'Tirage',venue:'Stade',need:'{team} a besoin de {r} points en {b} balles',
 thisOver:'Cet over',atCrease:'Au crease',lastBall:'Dernière balle',four:'QUATRE !',six:'SIX !',wicket:'WICKET !',updated:'Mis à jour',retry:'Réessayer',goHome:"Aller à l'accueil"}
};

/* core.js */
/* ---------- config ---------- */
const META = n => (document.querySelector('meta[name="'+n+'"]')||{}).content || '';
const BASE = META('cp-base') || '/';
const SITE = META('cp-site') || (location.origin + BASE);
const BRAND = 'CricVega';
const LANDING = location.pathname;

/* ---------- i18n helpers ---------- */
let lang = 'en';
try{ const q=new URLSearchParams(location.search).get('lang'); const s=localStorage.getItem('cp_lang');
  if(q && I18N[q]) lang=q; else if(s && I18N[s]) lang=s; else if((navigator.language||'').toLowerCase().startsWith('hi')) lang='hi'; }catch(e){}
function t(k){ const d=I18N[lang]||I18N.en; return d[k]!==undefined?d[k]:(I18N.en[k]!==undefined?I18N.en[k]:k); }
function tf(k,p){ let s=t(k); for(const x in p) s=s.split('{'+x+'}').join(p[x]); return s; }
function nM(n){ return (+n===1&&lang==='en')?'1 match':tf('matchesN',{n}); }
function TN(n){ const m=TEAM_I18N[lang]; return (m&&m[n])||n; }
function ST(txt){
  if(!txt || lang!=='hi') return txt;
  const s=String(txt), tn=n=>TN(n.trim());
  const R=[
    [/^(.+?) require (\d+) runs? with (\d+) wickets? and (\d+) balls? remaining$/i,(m,a,b,c,d)=>tn(a)+' को '+b+' रन चाहिए, '+c+' विकेट और '+d+' गेंद बाकी'],
    [/^(.+?) require (\d+) runs? from (\d+) balls?$/i,(m,a,b,c)=>tn(a)+' को '+c+' गेंदों में '+b+' रन चाहिए'],
    [/^(.+?) (?:require|need) (\d+) runs?(.*)$/i,(m,a,b,c)=>tn(a)+' को '+b+' रन चाहिए'+c],
    [/^(.+?) won by an inn?s (?:&|and) (\d+) runs?$/i,(m,a,b)=>tn(a)+' पारी और '+b+' रन से जीता'],
    [/^(.+?) won by (\d+) runs?(.*)$/i,(m,a,b,c)=>tn(a)+' '+b+' रन से जीता'+c],
    [/^(.+?) won by (\d+) (?:wkts?|wickets?)(.*)$/i,(m,a,b,c)=>tn(a)+' '+b+' विकेट से जीता'+c.replace(/\((\d+)b rem\)/,'($1 गेंद शेष)')],
    [/^(.+?) won the super over$/i,(m,a)=>tn(a)+' ने सुपर ओवर जीता'],
    [/^(.+?) lead by (\d+) runs?(.*)$/i,(m,a,b,c)=>tn(a)+' '+b+' रन से आगे'+c],
    [/^(.+?) trail by (\d+) runs?(.*)$/i,(m,a,b,c)=>tn(a)+' '+b+' रन से पीछे'+c],
    [/^(.+?) won (?:the )?toss (?:&|and) (?:elected to )?bat(?:ted)?(?: first)?$/i,(m,a)=>tn(a)+' ने टॉस जीतकर बल्लेबाज़ी चुनी'],
    [/^(.+?) won (?:the )?toss (?:&|and) (?:elected to )?(?:field|bowl)(?:ed)?(?: first)?$/i,(m,a)=>tn(a)+' ने टॉस जीतकर गेंदबाज़ी चुनी'],
    [/^(.+?) won (?:the )?toss$/i,(m,a)=>tn(a)+' ने टॉस जीता'],
    [/^(.+?)\s*,\s*elected to bat first$/i,(m,a)=>tn(a)+' ने पहले बल्लेबाज़ी चुनी'],
    [/^(.+?)\s*,\s*elected to (?:field|bowl) first$/i,(m,a)=>tn(a)+' ने पहले गेंदबाज़ी चुनी'],
    [/^starts at (\d{1,2}:\d{2}) local time$/i,(m,a)=>'स्थानीय समय '+a+' पर शुरू'],
    [/^match drawn$/i,()=>'मैच ड्रॉ'],[/^match tied.*$/i,()=>'मैच टाई'],[/^no result$/i,()=>'कोई परिणाम नहीं'],[/^match abandoned.*$/i,()=>'मैच रद्द'],
    [/^stumps$/i,()=>'दिन का खेल खत्म'],[/^lunch$/i,()=>'लंच'],[/^tea$/i,()=>'टी ब्रेक'],[/^innings break$/i,()=>'पारी ब्रेक'],[/^drinks$/i,()=>'ड्रिंक्स'],
    [/^rain(?: delay)?$/i,()=>'बारिश से रुका'],[/^result$/i,()=>'परिणाम'],[/^live$/i,()=>'लाइव'],[/^scheduled$/i,()=>'निर्धारित']
  ];
  for(const [re,f] of R) if(re.test(s)) return s.replace(re,f);
  return s;
}

/* ---------- utils ---------- */
const $ = s => document.querySelector(s);
const _ta = document.createElement('textarea');
function dec(s){ _ta.innerHTML=String(s==null?'':s); return _ta.value; }
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function strip(s){ return dec(String(s||'').replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim(); }
function slug(s){ return String(s||'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,80); }
function ymd(off, from){ const d=new Date((from||Date.now())+off*86400000); return d.getFullYear()+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0'); }
function loc(){ return lang==='en'?'en-IN':lang; }
function fdate(iso,opt){ const d=new Date(iso); if(isNaN(d)) return ''; try{ return d.toLocaleString(loc(),opt||{weekday:'short',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}); }catch(e){ return d.toDateString(); } }
function ftime(iso){ return fdate(iso,{hour:'2-digit',minute:'2-digit'}); }
function fday(iso){ return fdate(iso,{weekday:'short',day:'numeric',month:'short'}); }
function ago(ts){ const n=Math.max(0,Math.round((Date.now()-ts)/1000)); if(n<5) return t('justNow'); if(n<120) return tf('ago',{n}); const mnt=Math.round(n/60); if(mnt<60) return mnt+'m'; const h=Math.round(mnt/60); return h<48? h+'h' : Math.round(h/24)+'d'; }
function statMap(stats){ const o={}; (stats||[]).forEach(s=>{ o[s.name]=(s.displayValue!==undefined?s.displayValue:s.value); }); return o; }
function url(p){ return BASE + (p||''); }
function matchUrl(m){ return url('match/'+m.id+'-'+slug(m.t1.name+' vs '+m.t2.name+' '+(m.round||''))); }
function seriesUrl(id,name){ return url('series/'+id+'-'+slug(name||'series')); }
function teamUrl(name){ return url('team/'+slug(name)); }
function playerUrl(id,name){ return url('player/'+id+'-'+slug(name||'player')); }
function logo(tm,cls){
  const ab=esc((tm.abr||tm.name||'?').slice(0,3).toUpperCase());
  return tm.logo? '<img class="'+(cls||'logo-t')+'" src="'+esc(tm.logo)+'" alt="'+esc(tm.name)+' logo" loading="lazy" width="24" height="24" onerror="this.outerHTML=\'<span class=&quot;logo-ph&quot;>'+ab+'</span>\'">' : '<span class="logo-ph">'+ab+'</span>';
}

/* ---------- network ---------- */
const HOSTS=['https://site.web.api.espn.com','https://site.api.espn.com'];
async function getJSON(u,ms){
  const c=('AbortController' in window)?new AbortController():null;
  const tm=setTimeout(()=>{try{c&&c.abort();}catch(e){}},ms||12000);
  try{ const r=await fetch(u,c?{signal:c.signal}:undefined); if(!r.ok) throw new Error('HTTP '+r.status); return await r.json(); }
  finally{ clearTimeout(tm); }
}
async function espn(path){ let last; for(const h of HOSTS){ try{ return await getJSON(h+path); }catch(e){ last=e; } } throw last||new Error('feed'); }
const CACHE={};
async function cached(key,ttl,fn){
  const c=CACHE[key]; if(c && Date.now()-c.ts<ttl) return c.v;
  if(c && c.p) return c.p;
  const p=fn().then(v=>{ CACHE[key]={v,ts:Date.now()}; return v; }).catch(e=>{ if(CACHE[key]) CACHE[key].p=null; if(c && c.v!==undefined) return c.v; throw e; });
  CACHE[key]=Object.assign(c||{ts:0},{p}); return p;
}

/* data.js */
/* ---------- data model ---------- */
let POOL={};                 // id -> match
const DAYS={};               // yyyymmdd -> [ids]
let NEWS=null, CORE_OK=false, OFFLINE=false, LAST=0;
const DETAIL={}, PBP={}, SERIES={}, STAND={}, ATH={};

function normEvent(e, lg){
  const c=(e.competitions||[])[0]; if(!c) return null;
  const type=((e.status||{}).type)||((c.status||{}).type)||{};
  const summary=dec((c.status||{}).summary||(e.status||{}).summary||'');
  const comps=(c.competitors||[]).slice().sort((a,b)=>(+a.order||0)-(+b.order||0));
  if(comps.length<2) return null;
  const team=x=>{ const tm=x.team||{};
    const inns=(x.linescores||[]).filter(l=>l.isBatting&&(l.runs||l.wickets||+l.overs||l.isCurrent)).map(l=>({period:l.period,runs:l.runs||0,wkts:l.wickets||0,overs:l.overs,cur:!!l.isCurrent}));
    return {id:String(x.id||tm.id||''),name:dec(tm.displayName||tm.name||'TBC'),abr:dec(tm.abbreviation||''),logo:tm.logo||((tm.logos||[])[0]||{}).href||'',score:dec(x.score||''),winner:x.winner===true||x.winner==='true',inns,national:!!tm.isNational}; };
  const t1=team(comps[0]), t2=team(comps[1]);
  const st=type.state||'pre', has=!!(t1.score||t2.score);
  let tab='upcoming';
  if(st==='post') tab='recent'; else if(st==='in') tab=(!has&&/^starts|^match yet|^scheduled/i.test(summary))?'upcoming':'live';
  const cls=c.class||{};
  const lgName=dec(lg.name||lg.abbreviation||'');
  const women=/women/i.test(t1.name+' '+t2.name+' '+lgName);
  const intl=String(cls.internationalClassId||'0')!=='0';
  const tv=[]; (c.broadcasts||[]).forEach(b=>(b.names||[]).forEach(n=>tv.push(n))); (c.geoBroadcasts||[]).forEach(g=>{ const n=(g.media||{}).shortName; if(n&&!tv.includes(n)) tv.push(n); });
  return { id:String(e.id), league:String(lg.id||((e.season||{}).type)||''), tab, live:tab==='live', t1, t2,
    series:lgName, desc:dec(e.description||c.description||''), round:dec(c.description||'').replace(/,.*$/,''), type:dec(cls.eventType||cls.generalClassCard||''),
    status:summary, label:dec(type.description||type.detail||''), start:e.date||c.date, end:e.endDate||c.endDate,
    venue:dec(((c.venue||{}).fullName)||''), city:dec((((c.venue||{}).address)||{}).city||''), intl, women, tv, year:(e.season||{}).year };
}
function parsePanel(j){ const out=[]; (j&&j.scores||[]).forEach(s=>{ const lg=(s.leagues||[])[0]||{}; (s.events||[]).forEach(e=>{ try{ const m=normEvent(e,lg); if(m) out.push(m); }catch(x){} }); }); return out; }
function pri(m){ return (/\bindia\b/i.test(m.t1.name+' '+m.t2.name)?0:4)+(m.intl?0:2)+(m.women?1:0); }
function byStart(a,b){ return new Date(a.start)-new Date(b.start); }
function lists(){
  const all=Object.values(POOL);
  return { live: all.filter(m=>m.tab==='live').sort((a,b)=>pri(a)-pri(b)||byStart(a,b)),
    upcoming: all.filter(m=>m.tab==='upcoming'&&new Date(m.end||m.start)>Date.now()-6*3600e3).sort(byStart),
    recent: all.filter(m=>m.tab==='recent').sort((a,b)=>byStart(b,a)) };
}
function applyOverrides(){
  for(const id in PBP){ const o=PBP[id]&&PBP[id].override, m=POOL[id]; if(!o||!m||Date.now()-o.ts>90000) continue;
    const s=m.t1.id===o.teamId?m.t1:m.t2.id===o.teamId?m.t2:null; if(s) s.score=o.score; if(o.status) m.status=o.status; }
}
async function loadDay(d, force){
  const key='day'+(d||'now');
  const ttl = !d ? 8000 : (d>=ymd(0) ? 60000 : 600000);
  if(force) delete CACHE[key];
  const j = await cached(key, ttl, ()=>espn('/apis/site/v2/sports/cricket/scorepanel'+(d?'?dates='+d:'')));
  const list=parsePanel(j); list.forEach(m=>{ POOL[m.id]=Object.assign(POOL[m.id]||{},m); });
  if(d) DAYS[d]=list.map(m=>m.id);
  return list;
}
let coreBusy=false, coreFull=false;
async function loadCore(){
  if(coreBusy) return; coreBusy=true;
  try{
    const jobs=[];
    if(!coreFull){ jobs.push(loadDay(ymd(-1)),loadDay(ymd(1)),loadDay(ymd(2))); }
    const r=await Promise.allSettled([loadDay(null,true),...jobs]);
    if(r[0].status!=='fulfilled' && !r.slice(1).some(x=>x.status==='fulfilled')) throw new Error('core');
    if(jobs.length) coreFull=true;
    applyOverrides(); CORE_OK=true; OFFLINE=false; LAST=Date.now();
  }catch(e){ OFFLINE=true; }
  finally{ coreBusy=false; }
  update();
}

/* ---------- news ---------- */
async function loadNews(){
  const [a,b]=await Promise.allSettled([
    espn('/apis/site/v2/sports/cricket/8676/news'),
    getJSON('https://api.rss2json.com/v1/api.json?rss_url='+encodeURIComponent('https://feeds.bbci.co.uk/sport/cricket/rss.xml'),12000)
  ]);
  const items=[];
  if(a.status==='fulfilled') (a.value.articles||[]).forEach(x=>{ const l=((x.links||{}).web||{}).href; if(!x.headline||!l) return;
    items.push({title:strip(x.headline),desc:strip(x.description||''),link:l.replace(/^http:/,'https:'),date:x.published||x.lastModified,img:'',src:'ESPNcricinfo'}); });
  if(b.status==='fulfilled'&&b.value&&b.value.status==='ok') (b.value.items||[]).forEach(x=>{ if(!x.title||!x.link) return;
    items.push({title:strip(x.title),desc:strip(x.description||''),link:x.link,date:(x.pubDate||'').replace(' ','T')+'Z',img:x.thumbnail||((x.enclosure||{}).thumbnail)||'',src:'BBC Sport'}); });
  if(!items.length){ if(!NEWS) NEWS={items:[],failed:true}; update(); return; }
  const seen=new Set();
  NEWS={items:items.filter(n=>{ const k=n.title.toLowerCase(); if(seen.has(k)) return false; seen.add(k); return true; }).sort((x,y)=>(new Date(y.date)||0)-(new Date(x.date)||0)).slice(0,60)};
  update();
}

/* ---------- match summary ---------- */
async function loadSummary(id, force){
  const m=POOL[id]; const lg=(m&&m.league)||(DETAIL[id]&&DETAIL[id].league)||'8676';
  try{
    if(force) delete CACHE['sum'+id];
    const sum=await cached('sum'+id, 12000, ()=>espn('/apis/site/v2/sports/cricket/'+lg+'/summary?event='+id));
    DETAIL[id]={sum,ts:Date.now(),league:String((((sum.header||{}).leagues||[])[0]||{}).id||lg)};
    // create/refresh the match model from the summary header (deep links to old matches)
    try{ const h=sum.header, hc=h.competitions[0]; const lgx=(h.leagues||[])[0]||{id:lg,name:(m&&m.series)||''};
      const ev={id:h.id||id,date:hc.date,endDate:hc.endDate,description:h.description||hc.description,season:h.season,status:hc.status,competitions:[Object.assign({},hc,{venue:(sum.gameInfo||{}).venue})]};
      const nm=normEvent(ev,lgx); if(nm){ if(m){ ['status','label','tab','live'].forEach(k=>m[k]=nm[k]); if(!m.venue) m.venue=nm.venue; [['t1','t1'],['t2','t2']].forEach(([a])=>{ if(nm[a].score && (!PBP[id]||!PBP[id].override)) m[a].score=nm[a].score; }); } else POOL[id]=nm; }
    }catch(e){}
    applyOverrides();
  }catch(e){ if(!DETAIL[id]) DETAIL[id]={err:true,ts:Date.now()}; }
  update();
}
function buildInnings(sum){
  const hc=((sum.header||{}).competitions||[])[0]||{}, comps=hc.competitors||[], rosters=sum.rosters||[], byTeam={};
  rosters.forEach(r=>{ byTeam[String((r.team||{}).id)]=r; });
  const P=[];
  comps.forEach(cp=>{ const tid=String(cp.id||(cp.team||{}).id);
    (cp.linescores||[]).forEach(l=>{ if(!l.isBatting||!(l.runs||l.wickets||+l.overs||l.isCurrent)) return;
      P.push({period:l.period,teamId:tid,team:dec(((cp.team||{}).displayName)||''),abr:((cp.team||{}).abbreviation)||'',runs:l.runs||0,wkts:l.wickets||0,overs:l.overs,cur:!!l.isCurrent,target:l.target||0,desc:l.description||'',st:statMap((((l.statistics||{}).categories||[])[0]||{}).stats)}); }); });
  P.sort((a,b)=>a.period-b.period);
  P.forEach(p=>{
    const bat=byTeam[p.teamId], bowl=rosters.find(r=>String((r.team||{}).id)!==p.teamId);
    p.bat=[]; p.bowl=[]; p.fow=[]; p.dnb=[];
    if(bat) (bat.roster||[]).forEach(pl=>{
      const per=(pl.linescores||[]).find(x=>x.period===p.period), a=pl.athlete||{};
      const L=per&&per.linescores&&per.linescores[0]; const S=(L&&L.statistics)||{}; const s=statMap(((S.categories||[])[0]||{}).stats);
      if(!L||String(s.batted)!=='1'){ if(pl.starter!==false) p.dnb.push({id:a.id,name:dec(a.battingName||a.displayName||'')}); return; }
      const od=(S.batting||{}).outDetails||{}, out=String(s.outs)==='1';
      const d=od.details||{}; if(out && d.innings) p.fow.push({w:d.innings.wickets,r:d.innings.runs,o:(d.over||{}).overs,name:dec(a.battingName||a.displayName||'')});
      p.bat.push({id:a.id,order:+s.battingPosition||+L.order||99,name:dec(a.battingName||a.displayName||''),full:dec(a.displayName||''),dis:out?strip(od.shortText||s.dismissalCard||''):'not out',out,
        crease:!out&&p.cur&&/striker/.test(pl.activeName||''),strike:pl.activeName==='striker',r:s.runs||'0',b:s.ballsFaced||'0',f:s.fours||'0',x:s.sixes||'0'});
    });
    if(bowl) (bowl.roster||[]).forEach(pl=>{
      const per=(pl.linescores||[]).find(x=>x.period===p.period); if(!per||!per.linescores||!per.linescores[0]) return;
      const s=statMap((((per.linescores[0].statistics||{}).categories||[])[0]||{}).stats); if(!s.overs||s.overs==='0'||s.overs==='0.0') return;
      const a=pl.athlete||{}; p.bowl.push({id:a.id,pos:+s.bowlingPosition||99,name:dec(a.displayName||''),o:s.overs,m:s.maidens||'0',r:s.conceded||'0',w:s.wickets||'0',e:s.economyRate||'-',wd:s.wides||'0',nb:s.noballs||'0'});
    });
    p.bat.sort((a,b)=>a.order-b.order); p.bowl.sort((a,b)=>a.pos-b.pos); p.fow.sort((a,b)=>a.w-b.w);
    if(!p.bat.length) p.dnb=[];
  });
  return P;
}

/* ---------- ball by ball ---------- */
const PBP_LIMIT=30;
function ballLabel(x){
  const d=x.dismissal||{}, o=x.over||{}, sv=+x.scoreValue||0, pt=((x.playType||{}).description||'').toLowerCase();
  if(d.dismissal) return {t:'W',c:'w'};
  if(o.wide||pt==='wide') return {t:(sv>1?sv:'')+'wd',c:'x'};
  if(o.noBall||pt==='no ball') return {t:(sv>1?sv:'')+'nb',c:'x'};
  if(o.legByes||pt==='leg bye') return {t:sv+'lb',c:'x'};
  if(o.byes||pt==='bye') return {t:sv+'b',c:'x'};
  if(sv===4||pt==='four') return {t:'4',c:'f'};
  if(sv===6||pt==='six') return {t:'6',c:'s'};
  if(sv===0) return {t:'•',c:'z'};
  return {t:String(sv),c:'r'};
}
function oversDone(o){ if(!o) return ''; const n=+o.number||0, b=+o.ball||0; return b>=6?String(n):(n-1)+'.'+b; }
async function loadPBP(id, older){
  const m=POOL[id]; if(!m) return;
  const P=PBP[id]=PBP[id]||{map:new Map(),pc:0,maxSeq:0,minPage:0};
  if(P.busy) return; P.busy=true;
  const base='/apis/site/v2/sports/cricket/'+m.league+'/playbyplay?event='+id+'&limit='+PBP_LIMIT;
  const get=pg=>espn(base+'&page='+pg+'&_='+Date.now()).then(j=>(j&&j.commentary)||{});
  const add=it=>(it||[]).forEach(x=>{ if(x&&x.id!=null&&x.over) P.map.set(String(x.id),x); });
  const before=P.maxSeq;
  try{
    if(older){ if(P.minPage>1){ P.minPage--; add((await get(P.minPage)).items); } }
    else if(!P.pc){ const c=await get(1); P.pc=c.pageCount||1;
      if(P.pc>1){ const r=await Promise.allSettled([get(P.pc),get(P.pc-1)]); r.forEach(z=>{ if(z.status==='fulfilled') add(z.value.items); }); P.minPage=P.pc-1; }
      else { add(c.items); P.minPage=1; } }
    else { const c=await get(P.pc); add(c.items);
      if(c.pageCount&&c.pageCount>P.pc){ P.pc=c.pageCount; add((await get(P.pc)).items); }
      else if((c.items||[]).length>=PBP_LIMIT){ const d=await get(P.pc+1); if((d.items||[]).length){ P.pc++; add(d.items); } } }
    const arr=[...P.map.values()].sort((a,b)=>(a.sequence||0)-(b.sequence||0));
    if(!older && arr.length>400) arr.slice(0,arr.length-400).forEach(x=>P.map.delete(String(x.id)));
    const last=arr[arr.length-1]; P.maxSeq=last?(last.sequence||0):0; P.ts=Date.now(); P.loaded=true; P.err=false;
    if(before && P.maxSeq>before){
      const fresh=arr.filter(x=>(x.sequence||0)>before), big=fresh.slice().reverse().find(x=>'wfs'.includes(ballLabel(x).c));
      if(big){ P.flash={k:ballLabel(big).c,ts:Date.now(),who:strip(big.shortText||'')}; setTimeout(update,5200); }
    }
    if(last && m.live){ try{ const inn=last.innings||{}, bt=String((last.team||{}).id||''), side=m.t1.id===bt?m.t1:m.t2.id===bt?m.t2:null;
      if(side && inn.runs!==undefined){
        const cur=inn.runs+'/'+(inn.wickets||0)+' ('+oversDone(last.over)+(inn.ballLimit?'/'+(inn.ballLimit/6):'')+' ov'+(inn.target?', target '+inn.target:'')+')';
        const prev=side.score&&side.score.includes(' & ')?side.score.split(' & ').slice(0,-1).join(' & ')+' & ':'';
        const need=(+inn.target>0)?(+inn.target)-(+inn.runs||0):0;
        P.override={teamId:bt,score:prev+cur,status:need>0?side.name+' require '+need+' run'+(need===1?'':'s'):null,ts:Date.now()};
        applyOverrides(); } }catch(e){} }
  }catch(e){ if(!P.loaded) P.err=true; }
  finally{ P.busy=false; }
  if(P.maxSeq!==before||older||!P.shown){ P.shown=true; update(); }
}

/* ---------- series / standings / players ---------- */
async function loadSeries(lid){
  const y=new Date().getFullYear();
  const r=await Promise.allSettled([y-1,y,y+1].map(yr=>cached('ser'+lid+yr, 120000, ()=>espn('/apis/site/v2/sports/cricket/'+lid+'/scoreboard?dates='+yr))));
  const seen={}, list=[]; let name='';
  r.forEach(z=>{ if(z.status!=='fulfilled') return; const j=z.value, lg=(j.leagues||[])[0]||{id:lid}; if(lg.name) name=dec(lg.name);
    (j.events||[]).forEach(e=>{ const m=normEvent(e,lg); if(m&&!seen[m.id]){ seen[m.id]=1; list.push(m); if(!POOL[m.id]) POOL[m.id]=m; } }); });
  list.sort(byStart);
  SERIES[lid]={name,list,ts:Date.now(),ok:r.some(z=>z.status==='fulfilled')};
  update();
}
async function loadStandings(lid){
  try{ const j=await cached('st'+lid, 300000, ()=>espn('/apis/v2/sports/cricket/'+lid+'/standings'));
    const groups=(j.children||[]).map(g=>({name:dec(g.name||''),rows:((g.standings||{}).entries||[]).map(e=>{ const s={}; (e.stats||[]).forEach(x=>s[x.name]=x.displayValue); return {team:dec((e.team||{}).displayName||''),abr:(e.team||{}).abbreviation||'',logo:(((e.team||{}).logos||[])[0]||{}).href||'',s}; })})).filter(g=>g.rows.length);
    STAND[lid]={groups,ts:Date.now()};
  }catch(e){ STAND[lid]={groups:[],err:true}; }
  update();
}
async function loadAthlete(id){
  try{ const j=await cached('ath'+id, 3600e3, ()=>espn('/apis/common/v3/sports/cricket/athletes/'+id)); ATH[id]=j; }catch(e){ ATH[id]={err:true}; }
  update();
}

/* views.js */
/* ---------- small renderers ---------- */
function badge(m){
  if(m.tab==='live'){ if(/stumps|lunch|tea|innings break|drinks|rain|delay/i.test(m.label+' '+m.status)&&!/live/i.test(m.label)) return '<span class="badge brk">'+esc(ST(m.label)||t('brkB'))+'</span>';
    return '<span class="badge"><span class="dot"></span>'+t('liveB')+'</span>'; }
  if(m.tab==='upcoming') return '<span class="badge up">'+t('upB')+'</span>';
  return '<span class="badge res">'+t('resB')+'</span>';
}
function batSide(m){ if(!m.live) return null; const a=m.t1.inns.some(i=>i.cur), b=m.t2.inns.some(i=>i.cur); return a&&!b?'t1':b&&!a?'t2':null; }
function teamRow(m,side){
  const tm=m[side], bs=batSide(m);
  const sc=tm.score?'<span class="ts">'+esc(tm.score)+'</span>':'<span class="ts dim">'+(m.tab==='upcoming'?'':'—')+'</span>';
  return '<div class="trow'+(bs===side?' bat':'')+(m.tab==='recent'&&tm.winner?' win':'')+'">'+logo(tm)+'<span class="tn">'+esc(TN(tm.name))+'</span>'+sc+'</div>';
}
function statusLine(m){
  if(m.tab==='upcoming') return '🕐 '+esc(fdate(m.start));
  return esc(ST(m.status)||ST(m.label)||'');
}
function mrow(m, opt){
  opt=opt||{};
  return '<a class="mrow'+(m.live?' live':'')+'" href="'+matchUrl(m)+'"><div class="mh"><span>'+esc([m.round,opt.noSeries?'':m.series].filter(Boolean).join(' • '))+'</span>'+badge(m)+'</div>'
    + teamRow(m,'t1')+teamRow(m,'t2')
    + '<div class="ms">'+statusLine(m)+'</div>'
    + (opt.venue!==false&&m.venue?'<div class="mv">📍 '+esc(m.venue)+(m.type?' • '+esc(m.type):'')+'</div>':'')+'</a>';
}
function mini(m){
  const sc=tm=>esc(tm.score?tm.score.replace(/\s*\(.*?\)\s*$/,'').replace(/\s*\((\d+(\.\d+)?)(\/\d+)? ov.*$/,''):'');
  return '<a class="mini'+(m.live?' live':'')+'" href="'+matchUrl(m)+'"><div class="top"><span>'+esc(m.round||m.series)+'</span>'+badge(m)+'</div>'
    +['t1','t2'].map(s=>'<div class="tr"><span class="n">'+logo(m[s])+'<span>'+esc(m[s].abr||TN(m[s].name))+'</span></span><span class="s">'+sc(m[s])+'</span></div>').join('')
    +'<div class="st">'+(m.tab==='upcoming'?esc(fdate(m.start)):esc(ST(m.status)||''))+'</div></a>';
}
function spinner(){ return '<div class="card"><div class="card-b"><div class="spin"></div><div class="sk"></div><div class="sk" style="width:70%"></div></div></div>'; }
function card(title, body, more){ return '<section class="card"><div class="card-h"><h2>'+title+'</h2>'+(more?'<a class="more" href="'+more+'">'+t('viewAll')+' ›</a>':'')+'</div>'+body+'</section>'; }
function emptyB(){ return '<div class="empty">'+t('noMatches')+' 🏏</div>'; }
function offlineNote(){ return OFFLINE?'<div class="note">⚠️ '+(CORE_OK?t('offline'):t('errData'))+'</div>':''; }
function filt(list,f){ if(f==='intl') return list.filter(m=>m.intl&&!m.women); if(f==='dom') return list.filter(m=>!m.intl&&!m.women); if(f==='women') return list.filter(m=>m.women); return list; }
function filterChips(cur, qs){ return '<div class="chips scroll" style="margin-bottom:12px">'+[['all','all'],['intl','intl'],['dom','dom'],['women','women']].map(([k,l])=>'<a class="chip'+(cur===k?' on':'')+'" href="'+qs(k)+'">'+t(l)+'</a>').join('')+'</div>'; }
function grouped(list){
  const g={}, order=[]; list.forEach(m=>{ const k=m.league+'|'+m.series; if(!g[k]){ g[k]=[]; order.push(k);} g[k].push(m); });
  return order.map(k=>{ const [lid,name]=k.split('|'); return '<div class="grp-h"><a href="'+seriesUrl(lid,name)+'">'+esc(name)+'</a><span>'+nM(g[k].length)+'</span></div>'+g[k].map(m=>mrow(m,{noSeries:true})).join(''); }).join('');
}
function newsItem(n){
  const d=n.date?ago(new Date(n.date).getTime()):'';
  return '<a class="nitem" href="'+esc(n.link)+'" target="_blank" rel="noopener"><div class="nthumb">'+(n.img?'<img src="'+esc(n.img)+'" alt="" loading="lazy" onerror="this.remove()">':'')+'🏏</div><div><h3>'+esc(n.title)+'</h3>'+(n.desc?'<p>'+esc(n.desc)+'</p>':'')+'<div class="nmeta"><span class="src">'+esc(n.src)+'</span> '+esc(d)+'</div></div></a>';
}
function newsHero(n){
  return '<a class="nhero'+(n.img?'':' noimg')+'" href="'+esc(n.link)+'" target="_blank" rel="noopener">'+(n.img?'<img src="'+esc(n.img)+'" alt="'+esc(n.title)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noimg\');this.remove()">':'')+'<div class="cap"><span class="src" style="background:rgba(255,255,255,.18);color:#fff;border-color:transparent">'+esc(n.src)+'</span><h3>'+esc(n.title)+'</h3></div></a>';
}

/* ---------- HOME ---------- */
function isBreak(m){ return /stumps|lunch|tea|innings break|rain|delay|bad light|wet/i.test(m.label+' '+m.status); }
function featuredMatch(L){ return L.live.filter(m=>!isBreak(m)).sort((a,b)=>(a.intl?0:1)-(b.intl?0:1)||pri(a)-pri(b))[0] || L.live[0] || L.upcoming.filter(m=>m.intl).sort(byStart)[0] || L.recent.filter(m=>m.intl)[0] || L.upcoming[0] || L.recent[0]; }
function vHome(){
  const L=lists(); if(!CORE_OK && !OFFLINE) return spinner()+spinner();
  let h='<h1 class="sr-only">'+t('liveTitle')+'</h1>'+offlineNote();
  const f=featuredMatch(L);
  if(f){
    const P=PBP[f.id]; let balls='';
    if(f.live && P && P.map.size){ const arr=[...P.map.values()].sort((a,b)=>a.sequence-b.sequence).slice(-8); balls='<div class="fb"><small>'+t('recentOvers')+':</small>'+arr.map(x=>{const l=ballLabel(x);return '<span class="ball '+l.c+'">'+esc(l.t)+'</span>';}).join('')+'</div>'; }
    h+='<a class="feat" href="'+matchUrl(f)+'"><div class="fh"><span>⭐ '+t('featured')+' • '+esc(f.round)+' • '+esc(f.series)+'</span>'+badge(f)+'</div>'+teamRow(f,'t1')+teamRow(f,'t2')+'<div class="fs">'+statusLine(f)+'</div>'+balls+'<span class="cta">'+(f.live?'⚡ '+t('tabLive')+' — '+t('tabComm'):t('tabCard'))+' ›</span></a>';
  }
  const live=L.live.filter(m=>m!==f).slice(0,8);
  if(live.length) h+=card('🔴 '+t('liveMatches'), live.map(m=>mrow(m)).join(''), url('live-scores'));
  h+=newsBlock(6);
  h+=card('📅 '+t('upMatches'), L.upcoming.slice(0,6).map(m=>mrow(m)).join('')||emptyB(), url('schedule'));
  h+=card('✅ '+t('recResults'), L.recent.slice(0,6).map(m=>mrow(m)).join('')||emptyB(), url('results'));
  return h;
}
function newsBlock(n){
  if(!NEWS) return card('📰 '+t('topStories'),'<div class="card-b"><div class="sk"></div><div class="sk"></div><div class="sk" style="width:60%"></div></div>',url('news'));
  if(!NEWS.items.length) return '';
  const hero=NEWS.items.find(x=>x.img)||NEWS.items[0];
  return card('📰 '+t('topStories'),'<div class="card-b" style="padding-bottom:0">'+newsHero(hero)+'</div>'+NEWS.items.filter(x=>x!==hero).slice(0,n).map(newsItem).join(''),url('news'));
}

/* ---------- LIVE / SCHEDULE / RESULTS ---------- */
function vLive(){
  if(!CORE_OK && !OFFLINE) return spinner();
  const q=new URLSearchParams(location.search), tab=q.get('tab')||'live', f=q.get('f')||'all', L=lists();
  const qs=(tb,ff)=>url('live-scores')+'?tab='+tb+(ff&&ff!=='all'?'&f='+ff:'');
  let h='<div class="pg-h"><h1>'+t('liveTitle')+'</h1><p>'+t('liveSub')+'</p></div>'+offlineNote();
  h+='<div class="chips scroll" style="margin-bottom:10px">'+[['live','tLive'],['upcoming','tUp'],['recent','tRec']].map(([k,l])=>'<a class="chip'+(tab===k?' on':'')+'" href="'+qs(k,f)+'">'+(k==='live'?'🔴 ':'')+t(l)+' ('+filt(L[k],f).length+')</a>').join('')+'</div>';
  h+=filterChips(f,k=>qs(tab,k));
  const list=filt(L[tab]||[],f);
  h+='<section class="card">'+(list.length?grouped(list):emptyB())+'</section>';
  return h;
}
function dayStrip(offsets, cur, base){
  return '<div class="chips scroll" style="margin-bottom:10px">'+offsets.map(o=>{ const d=ymd(o), dt=new Date(Date.now()+o*86400000);
    const lbl=o===0?t('today'):o===1?t('tomorrow'):o===-1?t('yesterday'):fday(dt.toISOString());
    return '<a class="chip'+(cur===d?' on':'')+'" href="'+base+'?d='+d+'">'+esc(lbl)+'</a>'; }).join('')+'</div>';
}
function vDay(kind){
  const q=new URLSearchParams(location.search), f=q.get('f')||'all';
  const offs=kind==='schedule'?[0,1,2,3,4,5,6,7]:[0,-1,-2,-3,-4,-5,-6,-7];
  const d=q.get('d')||ymd(kind==='schedule'?0:0), base=url(kind);
  let h='<div class="pg-h"><h1>'+t(kind==='schedule'?'schedTitle':'resTitle')+'</h1><p>'+t(kind==='schedule'?'schedSub':'resSub')+'</p></div>'+offlineNote();
  h+=dayStrip(offs,d,base)+filterChips(f,k=>base+'?d='+d+(k!=='all'?'&f='+k:''));
  const ids=DAYS[d];
  if(!ids){ once('day'+d,()=>loadDay(d).then(update).catch(()=>{ DAYS[d]=DAYS[d]||[]; update(); })); return h+spinner(); }
  let list=ids.map(id=>POOL[id]).filter(Boolean);
  const dayStart=new Date(d.slice(0,4)+'-'+d.slice(4,6)+'-'+d.slice(6,8)+'T00:00:00'), dayEnd=new Date(dayStart.getTime()+86400000);
  if(kind==='results') list=list.filter(m=>m.tab==='recent'||m.live);
  else list=list.filter(m=>m.tab!=='recent'||new Date(m.start)>=dayStart);
  list=filt(list,f).sort((a,b)=>pri(a)-pri(b)||byStart(a,b));
  return h+'<section class="card">'+(list.length?grouped(list):emptyB())+'</section>';
}

/* ---------- NEWS ---------- */
function vNews(){
  const q=new URLSearchParams(location.search), src=q.get('src')||'all';
  let h='<div class="pg-h"><h1>'+t('newsTitle')+'</h1><p>'+t('newsSub')+'</p></div>';
  if(!NEWS) return h+spinner();
  const items=NEWS.items.filter(n=>src==='all'||(src==='espn'&&n.src==='ESPNcricinfo')||(src==='bbc'&&n.src==='BBC Sport'));
  h+='<div class="chips scroll" style="margin-bottom:12px">'+[['all',t('all')],['espn','ESPNcricinfo'],['bbc','BBC Sport']].map(([k,l])=>'<a class="chip'+(src===k?' on':'')+'" href="'+url('news')+(k==='all'?'':'?src='+k)+'">'+esc(l)+'</a>').join('')+'</div>';
  if(!items.length) return h+'<section class="card">'+emptyB()+'</section>';
  const hero=items.find(x=>x.img)||items[0];
  return h+'<section class="card"><div class="card-b" style="padding-bottom:0">'+newsHero(hero)+'</div>'+items.filter(x=>x!==hero).map(newsItem).join('')+'</section>';
}

/* ---------- SERIES ---------- */
function seriesIndex(){
  const map={};
  Object.values(POOL).forEach(m=>{ const s=map[m.league]=map[m.league]||{id:m.league,name:m.series,n:0,live:0,types:new Set(),start:m.start,end:m.end||m.start,intl:m.intl,women:m.women};
    s.n++; if(m.live) s.live++; if(m.type) s.types.add(m.type); if(new Date(m.start)<new Date(s.start)) s.start=m.start; if(new Date(m.end||m.start)>new Date(s.end)) s.end=m.end||m.start; });
  return Object.values(map).sort((a,b)=>(b.live-a.live)||((b.intl?1:0)-(a.intl?1:0))||a.name.localeCompare(b.name));
}
function vSeriesList(){
  if(!CORE_OK && !OFFLINE) return spinner();
  const all=seriesIndex(), grp=[['intl',all.filter(s=>s.intl&&!s.women)],['dom',all.filter(s=>!s.intl&&!s.women)],['women',all.filter(s=>s.women)]];
  let h='<div class="pg-h"><h1>'+t('seriesTitle')+'</h1><p>'+t('seriesSub')+'</p></div>'+offlineNote();
  grp.forEach(([k,list])=>{ if(!list.length) return;
    h+=card(t(k), '<div class="slist">'+list.map(s=>'<a href="'+seriesUrl(s.id,s.name)+'"><span>'+(s.live?'🔴 ':'')+esc(s.name)+'<br><small>'+esc([...s.types].join(', '))+' • '+esc(fday(s.start))+(fday(s.end)!==fday(s.start)?' – '+esc(fday(s.end)):'')+'</small></span><small>'+(s.live?tf('liveN',{n:s.live}):nM(s.n))+' ›</small></a>').join('')+'</div>'); });
  if(!all.length) h+='<section class="card">'+emptyB()+'</section>';
  return h;
}
function vSeries(lid){
  const S=SERIES[lid], q=new URLSearchParams(location.search), tab=q.get('tab')||'matches';
  if(!S) once('ser'+lid,()=>loadSeries(lid));
  if(!STAND[lid]) once('st'+lid,()=>loadStandings(lid));
  const name=(S&&S.name)||((Object.values(POOL).find(m=>m.league===lid)||{}).series)||t('series');
  const u=seriesUrl(lid,name), st=STAND[lid];
  let h='<nav class="crumb"><a href="'+url('')+'">'+t('home')+'</a>›<a href="'+url('series')+'">'+t('series')+'</a>›<span>'+esc(name)+'</span></nav><div class="pg-h"><h1>'+esc(name)+'</h1>'+(S&&S.list.length?'<p>'+esc(fday(S.list[0].start))+' – '+esc(fday(S.list[S.list.length-1].start))+' • '+nM(S.list.length)+'</p>':'')+'</div>';
  const hasT=st&&st.groups&&st.groups.length;
  h+='<section class="card"><nav class="tabs"><a class="'+(tab==='matches'?'on':'')+'" href="'+u+'">'+t('fixtures')+'</a>'+(hasT?'<a class="'+(tab==='table'?'on':'')+'" href="'+u+'?tab=table">'+t('tabTable')+'</a>':'')+'</nav>';
  if(tab==='table'&&hasT) h+='<div class="card-b">'+pointsTable(st)+'</div>';
  else if(!S) h+='<div class="card-b"><div class="spin"></div></div>';
  else if(!S.list.length) h+=emptyB();
  else h+=S.list.map(m=>mrow(m,{noSeries:true})).join('');
  return h+'</section>';
}
function pointsTable(st){
  return st.groups.map(g=>(g.name?'<div class="sec-h">'+esc(g.name)+'</div>':'')+'<div class="tbl"><table class="sc pt"><tr><th>#</th><th>'+t('team')+'</th><th>'+t('p')+'</th><th>'+t('w')+'</th><th>'+t('l')+'</th><th>'+t('nr')+'</th><th>'+t('pts')+'</th><th>'+t('nrr')+'</th></tr>'
    +g.rows.map((r,i)=>'<tr><td>'+esc(r.s.rank||i+1)+'</td><td><a href="'+teamUrl(r.team)+'" style="display:inline-flex;align-items:center;gap:8px">'+logo({name:r.team,abr:r.abr,logo:r.logo})+esc(TN(r.team))+'</a></td><td>'+esc(r.s.matchesPlayed||0)+'</td><td>'+esc(r.s.matchesWon||0)+'</td><td>'+esc(r.s.matchesLost||0)+'</td><td>'+esc(r.s.noresult||0)+'</td><td><b>'+esc(r.s.matchPoints||0)+'</b></td><td>'+esc(r.s.netrr||'-')+'</td></tr>').join('')+'</table></div>').join('');
}

/* ---------- TEAMS ---------- */
const TEAMS=[['India',6],['Australia',2],['England',1],['Pakistan',7],['South Africa',3],['New Zealand',5],['Sri Lanka',8],['West Indies',4],['Bangladesh',25],['Afghanistan',40],['Ireland',29],['Zimbabwe',9],['Netherlands',15],['Scotland',30],['Nepal',32],['United Arab Emirates',27],['United States of America',11],['Oman',37],['Namibia',28],['Canada',17]];
const tlogo=id=>'https://a.espncdn.com/i/teamlogos/cricket/500/'+id+'.png';
function vTeams(){
  return '<div class="pg-h"><h1>'+t('teamsTitle')+'</h1><p>'+t('teamsSub')+'</p></div><section class="card"><div class="tgrid">'
    +TEAMS.map(([n,id])=>'<a class="tcard" href="'+teamUrl(n)+'">'+logo({name:n,logo:tlogo(id)})+'<span>'+esc(TN(n))+'</span></a>').join('')+'</div></section>';
}
let teamRangeLoaded=false;
function vTeam(sl){
  const T=TEAMS.find(([n])=>slug(n)===sl); const name=T?T[0]:sl.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  if(!teamRangeLoaded){ teamRangeLoaded=true; Promise.allSettled([-6,-5,-4,-3,-2,3,4,5,6,7].map(o=>loadDay(ymd(o)))).then(update); }
  const re=new RegExp('^'+name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'( Women)?$','i');
  const ms=Object.values(POOL).filter(m=>re.test(m.t1.name)||re.test(m.t2.name));
  const L={live:ms.filter(m=>m.live),up:ms.filter(m=>m.tab==='upcoming').sort(byStart),rec:ms.filter(m=>m.tab==='recent').sort((a,b)=>byStart(b,a))};
  let h='<nav class="crumb"><a href="'+url('')+'">'+t('home')+'</a>›<a href="'+url('teams')+'">'+t('teams')+'</a>›<span>'+esc(TN(name))+'</span></nav>';
  h+='<section class="card"><div class="phead">'+(T?'<img src="'+tlogo(T[1])+'" alt="'+esc(name)+'" style="border-radius:12px;background:#fff;object-fit:contain">':'')+'<div><h1>'+esc(TN(name))+(lang==='en'?' Cricket Team':'')+'</h1><p class="muted">'+t('teamsSub')+'</p></div></div></section>';
  if(L.live.length) h+=card('🔴 '+t('liveMatches'),L.live.map(m=>mrow(m)).join(''));
  h+=card('📅 '+t('upMatches'),L.up.slice(0,10).map(m=>mrow(m)).join('')||emptyB());
  h+=card('✅ '+t('recResults'),L.rec.slice(0,10).map(m=>mrow(m)).join('')||emptyB());
  if(NEWS){ const nn=NEWS.items.filter(n=>re.test(n.title)||n.title.toLowerCase().includes(name.toLowerCase())).slice(0,8); if(nn.length) h+=card('📰 '+t('relNews'),nn.map(newsItem).join('')); }
  return h;
}

/* ---------- PLAYER ---------- */
function vPlayer(id){
  if(!ATH[id]) { once('ath'+id,()=>loadAthlete(id)); return spinner(); }
  const j=ATH[id]; if(j.err||!j.athlete) return notFound();
  const a=j.athlete, tm=a.team||{};
  const kv=[[t('role'),(a.position||{}).name],[t('country'),tm.displayName],[t('batStyle'),((a.batStyle||[])[0]||{}).description],[t('bowlStyle'),((a.bowlStyle||[])[0]||{}).description],[t('age'),a.age?a.age+' '+t('years'):''],[t('born'),a.displayDOB]].filter(x=>x[1]);
  let h='<nav class="crumb"><a href="'+url('')+'">'+t('home')+'</a>›<span>'+t('players')+'</span>›<span>'+esc(a.displayName)+'</span></nav>';
  h+='<section class="card"><div class="phead"><img src="'+esc((a.headshot||{}).href||'')+'" alt="'+esc(a.displayName)+'" onerror="this.style.display=\'none\'"><div><h1>'+esc(a.displayName)+'</h1>'+(a.fullName&&a.fullName!==a.displayName?'<p class="muted">'+esc(a.fullName)+'</p>':'')+''+(tm.displayName?'<p style="margin-top:6px"><a class="chip" href="'+teamUrl(tm.displayName)+'">'+esc(TN(tm.displayName))+'</a></p>':'')+'</div></div><div class="card-b"><div class="kv">'+kv.map(([k,v])=>'<div><span>'+esc(k)+'</span>'+esc(v)+'</div>').join('')+'</div></div></section>';
  if(NEWS){ const ln=(a.lastName||'').toLowerCase(); const nn=ln?NEWS.items.filter(n=>n.title.toLowerCase().includes(ln)).slice(0,8):[]; if(nn.length) h+=card('📰 '+t('relNews'),nn.map(newsItem).join('')); }
  return h;
}

function notFound(){ return '<section class="card"><div class="card-b center" style="padding:40px 16px"><div style="font-size:48px">🏏</div><h1 style="font-size:22px;margin:8px 0">'+t('notFound')+'</h1><p class="muted">'+t('notFoundText')+'</p><p style="margin-top:14px"><a class="btn" href="'+url('')+'">'+t('goHome')+'</a></p></div></section>'; }

/* match.js */
/* ---------- MATCH PAGE ---------- */
let pbpTimer=null, curMatch=null;
function vMatch(id){
  const m=POOL[id], D=DETAIL[id];
  if(!m){ if(finding[id]!==2){ findMatch(id); return spinner(); } return notFound(); }
  if(!D || Date.now()-D.ts>15000) once('sum'+id,()=>loadSummary(id));
  const q=new URLSearchParams(location.search), u=matchUrl(m);
  const P=PBP[id], hasComm=m.tab!=='upcoming';
  const def=m.live?'live':m.tab==='recent'?'scorecard':'info';
  let tab=q.get('tab')||def;
  if(hasComm && !P) loadPBP(id);
  const sum=D&&D.sum;
  // header
  const hc=sum&&((sum.header||{}).competitions||[])[0]||{};
  const title=TN(m.t1.name)+' '+t('vs')+' '+TN(m.t2.name)+(m.round?', '+m.round:'');
  let h='<nav class="crumb"><a href="'+url('')+'">'+t('home')+'</a>›<a href="'+seriesUrl(m.league,m.series)+'">'+esc(m.series)+'</a>›<span>'+esc(m.round||t('matchNo'))+'</span></nav>';
  h+='<section class="card"><div class="mhead"><h1>'+esc(title)+'</h1><div class="sub">'+badge(m)+' '+esc([m.type,m.venue].filter(Boolean).join(' • '))+' • '+esc(fdate(m.start))+' • <a href="'+seriesUrl(m.league,m.series)+'">'+esc(m.series)+'</a></div>'
    +teamRow(m,'t1')+teamRow(m,'t2')
    +(m.tab!=='upcoming'&&m.status?'<div class="status'+(m.live?' live':'')+'">'+esc(ST(m.status))+'</div>':'<div class="status">🕐 '+esc(ST(m.status)||fdate(m.start))+'</div>')+'</div>';
  const tabs=[];
  if(hasComm) tabs.push(['live',m.live?t('tabLive'):t('tabComm')]);
  tabs.push(['scorecard',t('tabCard')],['squads',t('tabSquads')],['info',t('tabInfo')]);
  const st=STAND[m.league]; if(!st) once('st'+m.league,()=>loadStandings(m.league));
  if(st&&st.groups&&st.groups.length) tabs.push(['table',t('tabTable')]);
  if(!tabs.some(x=>x[0]===tab)) tab=def;
  h+='<nav class="tabs">'+tabs.map(([k,l])=>'<a class="'+(tab===k?'on':'')+'" href="'+u+(k===def?'':'?tab='+k)+'">'+esc(l)+'</a>').join('')+'</nav></section>';
  curMatch={id,tab};
  let body='';
  if(tab==='live') body=commentary(m);
  else if(tab==='scorecard') body=sum?scorecard(sum,m):'<div class="spin"></div>';
  else if(tab==='squads') body=sum?squads(sum):'<div class="spin"></div>';
  else if(tab==='info') body=sum?info(sum,m):'<div class="spin"></div>';
  else if(tab==='table') body=pointsTable(st);
  h+='<section class="card"><div class="card-b">'+body+'</div></section>';
  if(NEWS){ const re=new RegExp('\\b('+[m.t1.name,m.t2.name].map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')\\b','i'); const nn=NEWS.items.filter(n=>re.test(n.title)).slice(0,5); if(nn.length) h+=card('📰 '+t('relNews'),nn.map(newsItem).join('')); }
  return h;
}
const finding={};
async function findMatch(id){
  if(finding[id]) return; finding[id]=1;
  // search recent/upcoming days for the event, then give up
  await loadSummary(id);
  if(!POOL[id]) for(const o of [0,-1,1,-2,2,-3,3]){ if(POOL[id]) break; try{ await loadDay(ymd(o)); }catch(e){} }
  finding[id]=2;
  update();
}

function commentary(m){
  const P=PBP[m.id];
  if(!P||(!P.loaded&&!P.err)) return '<div class="spin"></div>';
  const arr=[...P.map.values()].sort((a,b)=>(a.sequence||0)-(b.sequence||0));
  if(!arr.length) return '<p class="muted center">'+t('noComm')+'</p>';
  const last=arr[arr.length-1], inn=last.innings||{}, o=last.over||{};
  const teamNm=TN(dec((last.team||{}).displayName||(last.team||{}).name||''));
  let h='';
  if(P.flash&&Date.now()-P.flash.ts<5000){ const k=P.flash.k; h+='<div class="flash '+k+'">'+(k==='w'?'☝️ '+t('wicket'):k==='s'?'🚀 '+t('six'):'💥 '+t('four'))+'<small>'+esc(P.flash.who)+'</small></div>'; }
  const lab=ballLabel(last);
  if(m.live || true){
    h+='<div class="bbb"><div><div class="tm">'+esc(teamNm)+'</div><div class="big">'+esc(inn.runs)+'/'+esc(inn.wickets||0)+' <span>('+esc(oversDone(o))+(inn.ballLimit?'/'+(inn.ballLimit/6):'')+' '+t('overs').toLowerCase()+')</span></div></div><div class="lb">'+t('lastBall')+' '+esc(o.overs)+'<span class="ball lg '+lab.c+'">'+esc(lab.t)+'</span></div></div>';
    const bits=[];
    if(inn.runRate!==undefined) bits.push(t('crr')+' <b>'+(+inn.runRate).toFixed(2)+'</b>');
    if(+inn.target>0){ bits.push(t('target')+' <b>'+inn.target+'</b>'); const need=(+inn.target)-(+inn.runs||0), balls=+inn.remainingBalls||0;
      if(need>0&&balls>0){ bits.push(t('rrr')+' <b>'+(need*6/balls).toFixed(2)+'</b>'); bits.push('<b>'+esc(tf('need',{team:teamNm,r:need,b:balls}))+'</b>'); } }
    if(bits.length) h+='<div class="rates">'+bits.join('<span class="muted">•</span>')+'</div>';
    // recent overs
    const ovs=[]; arr.slice().reverse().forEach(x=>{ const k=x.period+'-'+(x.over||{}).number; let g=ovs[ovs.length-1]; if(!g||g.k!==k){ if(ovs.length>=4) return; g={k,n:(x.over||{}).number,items:[]}; ovs.push(g);} g.items.unshift(x); });
    h+='<div class="overs">'+ovs.map((g,i)=>(i?'<span class="sep"></span>':'')+'<div class="ov"><em>'+(i===0?t('thisOver'):t('over')+' '+g.n)+'</em>'+g.items.map(x=>{const l=ballLabel(x);return '<span class="ball '+l.c+'">'+esc(l.t)+'</span>';}).join('')+'<i>='+g.items.reduce((a,x)=>a+(+x.scoreValue||0),0)+'</i></div>').join('')+'</div>';
    if(m.live){
      const bat=[last.batsman,last.otherBatsman].filter(b=>b&&b.athlete&&b.athlete.displayName), bw=last.bowler;
      h+='<div class="crease">';
      if(bat.length) h+='<div class="box"><div class="lbl">🏏 '+t('atCrease')+'</div>'+bat.map((b,i)=>{ const out=i===0&&(last.dismissal||{}).dismissal;
        return '<div class="prow'+(out?' out':'')+'"><b>'+plink(b.athlete)+(i===0&&!out?' *':'')+'</b><span><b>'+esc(b.totalRuns||0)+'</b> <small>('+esc(b.faced||0)+')'+(+b.fours?' 4×'+b.fours:'')+(+b.sixes?' 6×'+b.sixes:'')+'</small></span></div>'; }).join('')+'</div>';
      if(bw&&bw.athlete&&bw.athlete.displayName) h+='<div class="box"><div class="lbl">🎯 '+t('bowlerNow')+'</div><div class="prow"><b>'+plink(bw.athlete)+'</b><span>'+esc(bw.overs)+'-'+esc(bw.maidens||0)+'-'+esc(bw.conceded||0)+'-<b>'+esc(bw.wickets||0)+'</b></span></div></div>';
      h+='</div>';
    }
  }
  // commentary grouped by over, newest first
  const groups=[]; arr.slice().reverse().forEach(x=>{ const k=x.period+'-'+(x.over||{}).number; let g=groups[groups.length-1]; if(!g||g.k!==k){ g={k,n:(x.over||{}).number,items:[]}; groups.push(g);} g.items.push(x); });
  const show=P.showAll?groups:groups.slice(0,8);
  show.forEach(g=>{ const first=g.items[g.items.length-1], lb=g.items[0], gi=lb.innings||{}, runs=g.items.reduce((a,x)=>a+(+x.scoreValue||0),0);
    h+='<div class="ovh"><b>'+t('over')+' '+esc(g.n)+'</b> • '+esc(dec((((first.bowler||{}).athlete)||{}).displayName||''))+'<span>'+runs+' '+(runs===1&&lang==='en'?'run':t('runs'))+' • '+esc(dec((lb.team||{}).abbreviation||''))+' '+esc(gi.runs)+'/'+esc(gi.wickets||0)+'</span></div>';
    g.items.forEach(x=>{ const l=ballLabel(x), post=strip(x.postText||''), pre=strip(x.preText||'');
      if(post) h+='<div class="cnote">'+esc(post)+'</div>';
      h+='<div class="crow'+(l.c==='w'?' w':'')+'"><div class="co">'+esc((x.over||{}).overs)+'<span class="ball '+l.c+'">'+esc(l.t)+'</span></div><div class="ct"><b>'+esc(strip(x.shortText||''))+'</b>'+(x.text?' — '+esc(strip(x.text)):'')+((x.dismissal||{}).dismissal&&x.dismissal.text?'<div class="dis">☝️ '+esc(strip(x.dismissal.text))+'</div>':'')+'</div></div>';
      if(pre) h+='<div class="cnote">'+esc(pre)+'</div>'; }); });
  if(groups.length>show.length||P.minPage>1) h+='<p class="center" style="margin-top:12px"><button class="btn ghost" data-act="older" data-id="'+m.id+'">'+t('loadOlder')+'</button></p>';
  h+='<p class="muted small center" style="margin-top:10px">'+(m.live?'🔄 '+t('autoBall')+' • ':'')+t('updated')+' '+esc(P.ts?ago(P.ts):'')+'</p>';
  return h;
}
function plink(a){ const n=dec(a.displayName||a.name||''); return a.id?'<a href="'+playerUrl(a.id,n)+'">'+esc(n)+'</a>':esc(n); }

function scorecard(sum,m){
  const P=buildInnings(sum);
  if(!P.length) return '<p class="muted center">'+t('noCard')+'</p>';
  return P.slice().reverse().map(p=>{
    let h='<div class="sec-h">'+esc(TN(p.team))+' — '+esc(p.runs)+'/'+esc(p.wkts)+' ('+esc(p.overs)+' '+t('overs').toLowerCase()+')'+(p.cur&&m.live?' <span class="badge"><span class="dot"></span>'+t('liveB')+'</span>':'')+'</div>';
    if(p.bat.length){
      h+='<div class="tbl"><table class="sc"><tr><th>'+t('batter')+'</th><th>R</th><th>B</th><th>4s</th><th>6s</th><th>SR</th></tr>'
        +p.bat.map(b=>{ const sr=+b.b?((+b.r)*100/(+b.b)).toFixed(1):'-';
          return '<tr'+(!b.out&&p.cur&&m.live?' class="hl"':'')+'><td>'+(b.id?'<a href="'+playerUrl(b.id,b.full||b.name)+'">'+esc(b.name)+'</a>':'<b>'+esc(b.name)+'</b>')+(b.strike&&p.cur&&m.live?' *':'')+'<span class="d">'+esc(b.dis)+'</span></td><td><b>'+esc(b.r)+'</b></td><td>'+esc(b.b)+'</td><td>'+esc(b.f)+'</td><td>'+esc(b.x)+'</td><td>'+sr+'</td></tr>'; }).join('');
      const mc=(sum.matchcards||[]).find(c=>c.headline==='Batting'&&String(c.inningsNumber)===String(p.period));
      const ex=(+p.runs||0)-p.bat.reduce((a,b)=>a+(+b.r||0),0);
      if(ex>=0) h+='<tr><td>'+t('extras')+(mc&&mc.extras?' <span class="d">'+esc(mc.extras)+'</span>':'')+'</td><td colspan="5"><b>'+ex+'</b></td></tr>';
      const rr=+p.overs?((+p.runs)/((Math.floor(+p.overs)*6+Math.round((+p.overs%1)*10))/6)).toFixed(2):'';
      h+='<tr class="tot"><td>'+t('total')+'</td><td colspan="5">'+esc(p.runs)+'/'+esc(p.wkts)+' ('+esc(p.overs)+' Ov'+(rr&&rr!=='NaN'?', RR '+rr:'')+')</td></tr></table></div>';
    }
    if(p.dnb.length) h+='<p class="small" style="margin:-4px 0 12px"><b>'+t('yetToBat')+':</b> <span class="muted">'+p.dnb.map(x=>esc(x.name)).join(', ')+'</span></p>';
    if(p.fow.length) h+='<div class="sec-h">'+t('fow')+'</div><div class="fow" style="margin-bottom:14px">'+p.fow.map(f=>'<span><b>'+esc(f.r)+'-'+esc(f.w)+'</b> ('+esc(f.name)+', '+esc(f.o)+')</span>').join(' ')+'</div>';
    if(p.bowl.length) h+='<div class="tbl"><table class="sc"><tr><th>'+t('bowler')+'</th><th>O</th><th>M</th><th>R</th><th>W</th><th>Econ</th><th>WD</th><th>NB</th></tr>'
      +p.bowl.map(b=>'<tr><td>'+(b.id?'<a href="'+playerUrl(b.id,b.name)+'">'+esc(b.name)+'</a>':esc(b.name))+'</td><td>'+esc(b.o)+'</td><td>'+esc(b.m)+'</td><td>'+esc(b.r)+'</td><td><b>'+esc(b.w)+'</b></td><td>'+esc(b.e)+'</td><td>'+esc(b.wd)+'</td><td>'+esc(b.nb)+'</td></tr>').join('')+'</table></div>';
    return h;
  }).join('');
}

function squads(sum){
  const R=sum.rosters||[], S=sum.squads||[];
  const cols=[];
  if(R.some(r=>(r.roster||[]).length)){
    R.forEach(r=>{ const tm=r.team||{}, list=(r.roster||[]).map(p=>({a:p.athlete||{},c:p.captain,k:/keeper|wicketkeeper/i.test(((p.position||{}).name)||''),role:((p.position||{}).name||'').replace(/^unknown$/i,''),xi:p.starter!==false})); cols.push({tm,list}); });
  } else S.forEach(s=>{ cols.push({tm:s.team||{},list:(s.athletes||[]).map(a=>({a,c:a.captain,k:a.keeper,role:((a.position||{}).name||'').replace(/^unknown$/i,''),xi:true}))}); });
  if(!cols.length||!cols.some(c=>c.list.length)) return '<p class="muted center">'+t('noSquad')+'</p>';
  return '<div class="squad">'+cols.map(c=>{ const xi=c.list.filter(p=>p.xi), bn=c.list.filter(p=>!p.xi), tl={name:dec(c.tm.displayName||c.tm.name||''),abr:c.tm.abbreviation,logo:((c.tm.logos||[])[0]||{}).href||c.tm.logo};
    const row=p=>{ const n=dec(p.a.displayName||p.a.name||''); return '<div class="pl"><img src="https://a.espncdn.com/i/headshots/cricket/players/full/'+esc(p.a.id)+'.png" alt="" loading="lazy" onerror="this.outerHTML=\'<span class=&quot;logo-ph&quot;>'+esc(n.slice(0,1))+'</span>\'"><div>'+(p.a.id?'<a href="'+playerUrl(p.a.id,n)+'"><b>'+esc(n)+'</b></a>':'<b>'+esc(n)+'</b>')+(p.c?'<span class="tag">'+t('captain')+'</span>':'')+(p.k?'<span class="tag k">'+t('keeper')+'</span>':'')+'<small>'+esc(p.role)+'</small></div></div>'; };
    return '<div><h3>'+logo(tl)+esc(TN(tl.name))+'</h3>'+(bn.length?'<div class="sec-h">'+t('playingXI')+'</div>':'')+xi.map(row).join('')+(bn.length?'<div class="sec-h" style="margin-top:14px">'+t('bench')+'</div><div class="bench">'+bn.map(row).join('')+'</div>':'')+'</div>'; }).join('')+'</div>';
}

function info(sum,m){
  const gi=sum.gameInfo||{}, v=gi.venue||{};
  const off=(gi.officials||[]).map(o=>dec(o.displayName||o.name||'')).filter(Boolean);
  const N={}; (sum.notes||[]).forEach(n=>{ const k=n.type||'note'; (N[k]=N[k]||[]).push(strip(n.text||n.headline||'')); });
  const kv=[[t('seriesL'),m.series],[t('matchNo'),[m.round,(N.matchnumber||[])[0]].filter(Boolean).join(' • ')],[t('format'),m.type],
    [t('date'),fdate(m.start,{weekday:'long',day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'})],
    [t('venue'),[dec(v.fullName||m.venue),dec((v.address||{}).country||'')].filter(Boolean).join(', ')],
    [t('toss'),(N.toss||[]).map(ST).join('; ')],[t('umpires'),off.join(', ')],[t('matchDays'),(N.matchdays||[]).join('; ')],[t('hours'),(N.hoursofplay||[]).join('; ')]].filter(x=>x[1]);
  let h='<div class="kv">'+kv.map(([k,val])=>'<div><span>'+esc(k)+'</span>'+esc(val)+'</div>').join('')+'</div>';
  const skip=['toss','matchdays','hoursofplay','matchnumber','season','livecommentator','livescorer','livescorers','livecommentators'];
  const other=[]; Object.keys(N).forEach(k=>{ if(!skip.includes(k.toLowerCase())) N[k].forEach(x=>x&&other.push(x)); });
  if(other.length) h+='<div class="sec-h" style="margin-top:16px">'+t('notes')+'</div>'+other.map(x=>'<div class="cnote" style="font-style:normal">'+esc(x)+'</div>').join('');
  return h;
}

/* shell.js */
/* ---------- async-once guard ---------- */
const PEND={};
function once(k,fn){ if(PEND[k]) return; PEND[k]=1; Promise.resolve().then(fn).catch(()=>{}).finally(()=>{ delete PEND[k]; }); }

/* ---------- router ---------- */
const STATIC_PAGES=['about','privacy-policy','contact','disclaimer','blog','terms'];
function routeOf(pathname){
  let p=decodeURIComponent(pathname||'/');
  if(p.startsWith(BASE)) p=p.slice(BASE.length); else if(p+'/'===BASE) p='';
  p=p.replace(/\.html$/,'').replace(/\/+$/,'').replace(/^\/+/,'');
  if(p===''||p==='index') return {v:'home'};
  const seg=p.split('/');
  if(seg.length===1){ if(['live-scores','schedule','results','news','series','teams'].includes(p)) return {v:p}; if(STATIC_PAGES.includes(p)) return {v:'static',p}; if(p==='404') return {v:'404'}; }
  if(seg.length===2){ const id=(seg[1].match(/^(\d+)/)||[])[1];
    if(seg[0]==='match'&&id) return {v:'match',id}; if(seg[0]==='series'&&id) return {v:'seriesPage',id};
    if(seg[0]==='player'&&id) return {v:'player',id}; if(seg[0]==='team'&&seg[1]) return {v:'team',slug:seg[1]}; if(seg[0]==='blog'&&seg[1]) return {v:'static',p}; }
  return {v:'404'};
}
let R=routeOf(location.pathname);
const APP=$('#app'), IS_STATIC=APP&&APP.dataset.static==='1';
let firstPaint=true;

function renderMain(){
  switch(R.v){
    case 'home': return vHome();
    case 'live-scores': return vLive();
    case 'schedule': return vDay('schedule');
    case 'results': return vDay('results');
    case 'news': return vNews();
    case 'series': return vSeriesList();
    case 'seriesPage': return vSeries(R.id);
    case 'teams': return vTeams();
    case 'team': return vTeam(R.slug);
    case 'match': return vMatch(R.id);
    case 'player': return vPlayer(R.id);
    default: return notFound();
  }
}

/* ---------- head / SEO on navigation ---------- */
function setMeta(sel,attr,val){ let el=document.head.querySelector(sel); if(!el){ el=document.createElement(sel.startsWith('link')?'link':'meta'); const m=sel.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/); if(m) el.setAttribute(m[1],m[2]); document.head.appendChild(el); } el.setAttribute(attr,val); }
function headFor(){
  const p=location.pathname===LANDING;
  const m=R.v==='match'&&POOL[R.id];
  let title='', desc='';
  if(m){ const tab=new URLSearchParams(location.search).get('tab');
    const nm=m.t1.name+' vs '+m.t2.name+(m.round?', '+m.round:'');
    const kind=tab==='scorecard'?'Full Scorecard':tab==='squads'?'Squads & Playing XI':tab==='info'?'Match Info':m.tab==='recent'?'Scorecard & Result':m.tab==='upcoming'?'Preview, Squads & Live Score':'Live Score & Ball by Ball Commentary';
    title=(m.state==='in'?'🔴 LIVE: ':'')+nm+' '+kind+(m.state==='post'&&m.status?' – '+m.status:'')+' – '+m.series+' | '+BRAND;
    desc=nm+' ('+m.series+') '+(m.tab==='recent'?'result: '+m.status+'. Full scorecard, fall of wickets and match details.':m.tab==='live'?'live score: '+[m.t1.score,m.t2.score].filter(Boolean).join(' / ')+'. Ball-by-ball commentary, scorecard and stats.':'on '+fdate(m.start)+' at '+m.venue+'. Squads, venue and live score.');
  } else if(R.v==='seriesPage'){ const S=SERIES[R.id]; const n=(S&&S.name)||((Object.values(POOL).find(x=>x.league===R.id)||{}).series); if(n){ title=n+' – Schedule, Results, Live Scores & Points Table | '+BRAND; desc=n+': full fixtures, match results, live scores and points table.'; } }
  else if(R.v==='team'){ const n=(TEAMS.find(([x])=>slug(x)===R.slug)||[R.slug])[0]; title=n+' Cricket Team – Live Score, Fixtures, Results & News | '+BRAND; desc=n+' cricket team live scores, upcoming matches, recent results and latest news.'; }
  else if(R.v==='player'){ const a=ATH[R.id]&&ATH[R.id].athlete; if(a){ title=a.displayName+' – Profile, Role, Batting & Bowling Style | '+BRAND; desc=a.displayName+' cricket profile: '+[(a.position||{}).name,(a.team||{}).displayName,a.age?'age '+a.age:''].filter(Boolean).join(', ')+'.'; } }
  else if(R.v==='404'){ title=t('notFound')+' | '+BRAND; }
  else if(!p && PAGE_HEAD[R.v]){ title=PAGE_HEAD[R.v][0]; desc=PAGE_HEAD[R.v][1]; }
  if(!title && p) return;              // landing page keeps the server-rendered head
  if(title) document.title=title;
  if(desc){ setMeta('meta[name="description"]','content',desc); setMeta('meta[property="og:description"]','content',desc); }
  if(title) setMeta('meta[property="og:title"]','content',title);
  const canon=SITE.replace(/\/$/,'')+location.pathname.replace(BASE.replace(/\/$/,''),'').replace(/\.html$/,'');
  setMeta('link[rel="canonical"]','href',canon); setMeta('meta[property="og:url"]','content',canon);
}
const PAGE_HEAD={}; try{ Object.assign(PAGE_HEAD, JSON.parse((document.getElementById('cp-heads')||{}).textContent||'{}')); }catch(e){}

/* ---------- strip & sidebar ---------- */
function vStrip(){
  const L=lists(), now=Date.now();
  const list=[...L.live, ...L.upcoming.filter(m=>new Date(m.start)-now<30*3600e3), ...L.recent.filter(m=>now-new Date(m.end||m.start)<30*3600e3)];
  list.sort((a,b)=>(a.live?0:1)-(b.live?0:1)||pri(a)-pri(b));
  if(!list.length) return '<div class="strip-empty">'+(CORE_OK||OFFLINE?t('noMatches'):t('loading'))+'</div>';
  return list.slice(0,24).map(mini).join('');
}
function vSide(){
  let h='';
  if(R.v==='match'){ const others=lists().live.filter(m=>m.id!==R.id).slice(0,6); if(others.length) h+=card('🔴 '+t('liveMatches'),others.map(m=>mrow(m,{venue:false})).join(''),url('live-scores')); }
  const S=seriesIndex().slice(0,10);
  if(S.length) h+=card('🏆 '+t('curSeries'),'<div class="slist">'+S.map(s=>'<a href="'+seriesUrl(s.id,s.name)+'"><span>'+(s.live?'🔴 ':'')+esc(s.name)+'</span><small>'+(s.live?tf('liveN',{n:s.live}):nM(s.n))+'</small></a>').join('')+'</div>',url('series'));
  if(R.v!=='home'&&R.v!=='news'&&NEWS&&NEWS.items.length) h+=card('📰 '+t('topStories'),NEWS.items.slice(0,5).map(newsItem).join(''),url('news'));
  h+=card('🌍 '+t('popTeams'),'<div class="tgrid" style="grid-template-columns:repeat(2,minmax(0,1fr))">'+TEAMS.slice(0,10).map(([n,id])=>'<a class="tcard" href="'+teamUrl(n)+'">'+logo({name:n,logo:tlogo(id)})+'<span>'+esc(TN(n))+'</span></a>').join('')+'</div>',url('teams'));
  if(deferredPrompt) h+='<section class="card"><div class="card-b center"><div style="font-size:34px">📲</div><p style="margin:6px 0 10px;font-weight:700">'+BRAND+' — '+t('autoBall')+'</p><button class="btn" data-act="install">'+t('installApp')+'</button></div></section>';
  return h;
}

/* ---------- render loop ---------- */
const lastHTML={};
function paint(el,html,key){
  if(!el||lastHTML[key]===html) return;
  const keep=[...el.querySelectorAll('.chips.scroll,.tabs,.overs,.tbl')].map(x=>x.scrollLeft);
  const sl=el.id==='strip'?el.scrollLeft:0;
  el.innerHTML=html; lastHTML[key]=html;
  el.querySelectorAll('.chips.scroll,.tabs,.overs,.tbl').forEach((x,i)=>{ if(keep[i]) x.scrollLeft=keep[i]; });
  if(sl) el.scrollLeft=sl;
  const on=el.querySelector('.chips.scroll .on,.tabs .on'); if(on&&!keep.length&&on.scrollIntoView&&on.offsetLeft>on.parentNode.clientWidth) on.parentNode.scrollLeft=on.offsetLeft-20;
}
let raf=0;
function update(){ if(raf) return; raf=requestAnimationFrame(()=>{ raf=0; try{ renderAll(); }catch(e){ console.error(e); } }); }
function renderAll(){
  paint($('#strip'),vStrip(),'strip');
  if(!IS_STATIC){
    const hasPre=APP.querySelector('[data-pre]');
    if(!(firstPaint&&hasPre&&!CORE_OK&&!OFFLINE&&['home','live-scores','schedule','results','news','series','match','seriesPage'].includes(R.v))){ paint(APP,renderMain(),'app'); firstPaint=false; }
    APP.dataset.view=R.v;
  }
  paint($('#side'),vSide(),'side');
  const seo=$('#seo'); if(seo) seo.hidden=location.pathname!==LANDING;
  document.querySelectorAll('.nav a[data-nav]').forEach(a=>{ const k=a.dataset.nav; a.classList.toggle('on',k===R.v||(k==='series'&&R.v==='seriesPage')||(k==='teams'&&R.v==='team')||(k==='live-scores'&&R.v==='match')||(k==='blog'&&R.v==='static'&&(R.p||'').startsWith('blog'))); });
  headFor();
}

/* ---------- navigation ---------- */
function go(href, replace){
  const u=new URL(href,location.href);
  const same=u.pathname===location.pathname;
  if(replace) history.replaceState(null,'',u.pathname+u.search+u.hash); else history.pushState(null,'',u.pathname+u.search+u.hash);
  R=routeOf(u.pathname); closeSearch();
  if(!same) window.scrollTo(0,0);
  if(R.v==='static'){ location.reload(); return; }
  lastHTML.app=null; renderAll(); kick();
}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');
  if(b){ const act=b.dataset.act;
    if(act==='older'){ const P=PBP[b.dataset.id]; if(P){ P.showAll=true; if(P.minPage>1){ b.disabled=true; b.textContent=t('loading'); loadPBP(b.dataset.id,true); } else update(); } }
    if(act==='install'&&deferredPrompt){ deferredPrompt.prompt(); deferredPrompt.userChoice.finally(()=>{ deferredPrompt=null; update(); $('#install').classList.remove('show'); }); }
    if(act==='retry'){ loadCore(); }
    return; }
  const a=e.target.closest('a[href]');
  if(!a||IS_STATIC||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
  if(a.target&&a.target!=='_self'||a.hasAttribute('download')||a.dataset.full!==undefined) return;
  const u=new URL(a.href,location.href);
  if(u.origin!==location.origin||!u.pathname.startsWith(BASE)) return;
  const r=routeOf(u.pathname); if(r.v==='static') return;
  e.preventDefault(); go(u.href);
});
window.addEventListener('popstate',()=>{ R=routeOf(location.pathname); lastHTML.app=null; renderAll(); kick(); });

/* ---------- search ---------- */
const QI=$('#q'), SR=$('#sres'); let selIdx=-1;
function closeSearch(){ if(SR){ SR.classList.remove('show'); SR.innerHTML=''; } selIdx=-1; }
function doSearch(q){
  q=q.trim().toLowerCase(); if(q.length<2){ closeSearch(); return; }
  const has=s=>String(s||'').toLowerCase().includes(q)||TN(String(s||'')).toLowerCase().includes(q);
  const ms=Object.values(POOL).filter(m=>has(m.t1.name)||has(m.t2.name)||has(m.series)||has(m.t1.abr)||has(m.t2.abr)||has(m.venue)).sort((a,b)=>(a.live?0:1)-(b.live?0:1)||pri(a)-pri(b)).slice(0,6);
  const ss=seriesIndex().filter(s=>has(s.name)).slice(0,4);
  const ts=TEAMS.filter(([n])=>has(n)).slice(0,4);
  const ns=(NEWS?NEWS.items:[]).filter(n=>has(n.title)).slice(0,4);
  let h='';
  if(ms.length) h+='<div class="grp">'+t('matchesL')+'</div>'+ms.map(m=>'<a href="'+matchUrl(m)+'">'+(m.live?'🔴':'🏏')+' '+esc(TN(m.t1.name)+' '+t('vs')+' '+TN(m.t2.name))+'<small>'+esc(m.round||'')+'</small></a>').join('');
  if(ts.length) h+='<div class="grp">'+t('teamsL')+'</div>'+ts.map(([n])=>'<a href="'+teamUrl(n)+'">🌍 '+esc(TN(n))+'</a>').join('');
  if(ss.length) h+='<div class="grp">'+t('seriesL2')+'</div>'+ss.map(s=>'<a href="'+seriesUrl(s.id,s.name)+'">🏆 '+esc(s.name)+'</a>').join('');
  if(ns.length) h+='<div class="grp">'+t('newsL')+'</div>'+ns.map(n=>'<a href="'+esc(n.link)+'" target="_blank" rel="noopener">📰 '+esc(n.title)+'</a>').join('');
  SR.innerHTML=h||'<div class="none">🔍 '+t('noMatches')+'</div>'; SR.classList.add('show'); selIdx=-1;
}
if(QI){
  QI.addEventListener('input',e=>doSearch(e.target.value));
  QI.addEventListener('keydown',e=>{ const it=[...SR.querySelectorAll('a')]; if(!it.length) return;
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){ e.preventDefault(); selIdx=(selIdx+(e.key==='ArrowDown'?1:-1)+it.length)%it.length; it.forEach((x,i)=>x.classList.toggle('sel',i===selIdx)); it[selIdx].scrollIntoView({block:'nearest'}); }
    else if(e.key==='Enter'){ e.preventDefault(); (it[selIdx]||it[0]).click(); QI.value=''; QI.blur(); }
    else if(e.key==='Escape'){ closeSearch(); QI.blur(); } });
  document.addEventListener('click',e=>{ if(!e.target.closest('.search')) closeSearch(); else if(e.target.closest('.sres a')){ QI.value=''; setTimeout(closeSearch,0); } });
}

/* ---------- chrome: language, theme, install ---------- */
function applyLang(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-k]').forEach(el=>{ el.textContent=t(el.dataset.k); });
  if(QI) QI.placeholder=t('searchPh');
  const s=$('#lang'); if(s) s.value=lang;
}
const LS=$('#lang');
if(LS){ LS.innerHTML=LANGS.map(l=>'<option value="'+l.c+'">'+l.l+'</option>').join(''); LS.value=lang;
  LS.addEventListener('change',()=>{ lang=LS.value; try{ localStorage.setItem('cp_lang',lang); }catch(e){} applyLang(); for(const k in lastHTML) lastHTML[k]=null; renderAll(); }); }
const TB=$('#theme');
function syncTheme(){ const d=document.body.classList.contains('dark'); if(TB){ TB.textContent=d?'☀️':'🌙'; TB.setAttribute('aria-label',d?'Light mode':'Dark mode'); } const mc=document.querySelector('meta[name="theme-color"]'); if(mc) mc.content=d?'#0b1220':'#0a2a57'; }
if(TB) TB.addEventListener('click',()=>{ document.body.classList.toggle('dark'); try{ localStorage.setItem('cp_theme',document.body.classList.contains('dark')?'dark':'light'); }catch(e){} syncTheme(); });
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault(); deferredPrompt=e; const b=$('#install'); if(b) b.classList.add('show'); update(); });
const IB=$('#install'); if(IB) IB.addEventListener('click',()=>{ if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt.userChoice.finally(()=>{ deferredPrompt=null; IB.classList.remove('show'); update(); }); } });

/* ---------- refresh schedule ---------- */
let tick=0;
function kick(){
  if(R.v==='match'){ const m=POOL[R.id]; if(m&&m.tab!=='upcoming') loadPBP(R.id); }
}
function loop(){
  if(document.hidden) return;
  tick++;
  if(tick%5===0) loadCore();                                       // 10s
  if(R.v==='match'){ const m=POOL[R.id]; if(m&&m.live&&tick%2===0) loadPBP(R.id); if(m&&tick%8===0) once('sum'+R.id,()=>loadSummary(R.id,true)); } // 4s / 16s
  if(R.v==='home'&&tick%4===0){ const f=featuredMatch(lists()); if(f&&f.live) loadPBP(f.id); }   // 8s
  if(R.v==='seriesPage'&&tick%30===0) once('ser'+R.id,()=>loadSeries(R.id));                   // 60s
  if(tick%150===0) loadNews();                                     // 5 min
  if(tick%3===0 && R.v==='match') update();                        // "updated x s ago"
}
setInterval(loop,2000);
document.addEventListener('visibilitychange',()=>{ if(!document.hidden){ loadCore(); kick(); } });
window.addEventListener('online',()=>{ loadCore(); });

/* ---------- boot ---------- */
(function boot(){
  syncTheme(); applyLang();
  renderAll();
  loadCore().then(()=>{ kick(); if(R.v==='home'){ const f=featuredMatch(lists()); if(f&&f.live) loadPBP(f.id); } });
  loadNews();
  if('serviceWorker' in navigator && location.protocol==='https:') navigator.serviceWorker.register(BASE+'sw.js').catch(()=>{});
})();

})();
