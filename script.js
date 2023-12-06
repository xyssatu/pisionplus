
//SPORTS

let soccerch = 'https://alpukat-live-cdn.mncnow.id/live/eds/soccerchannel-test/sa_dash_vmx/soccerchannel-test.mpd';
let sportstar3sd = 'https://alpukat-live-cdn.mncnow.id/live/eds/Soccer-2/sa_dash_vmx/Soccer-2.mpd';
let ss3 = 'https://alpukat-live-cdn.mncnow.id/live/eds/MNCSports3-HD/sa_dash_vmx/MNCSports3-HD.mpd';
let ss4 = 'https://alpukat-live-cdn.mncnow.id/live/eds/Sportstar4/sa_dash_vmx/Sportstar4.mpd';
let ss2 = 'https://alpukat-live-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd';
let ss1 = 'https://alpukat-live-cdn.mncnow.id/live/eds/MNCSports-HD/sa_dash_vmx/MNCSports-HD.mpd';
let spotv= 'https://alpukat-live-cdn.mncnow.id/live/eds/SPOTV-HD/sa_dash_vmx/SPOTV-HD.mpd';
let spotv2= 'https://alpukat-live-cdn.mncnow.id/live/eds/SPOTV2-HD/sa_dash_vmx/SPOTV2-HD.mpd';
let fight= 'https://alpukat-live-cdn.mncnow.id/live/eds/FightSports/sa_dash_vmx/FightSports.mpd';


//LOKAL
let oktv = 'https://alpukat-live-cdn.mncnow.id/live/eds/OKTV/sa_dash_vmx/OKTV.mpd';
let mnctv = 'https://alpukat-live-cdn.mncnow.id/live/eds/MNCTV-HD/sa_dash_vmx/MNCTV-HD.mpd';
let rcti = 'https://alpukat-live-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';
let gtv = 'https://alpukat-live-cdn.mncnow.id/live/eds/GTV-HD/sa_dash_vmx/GTV-HD.mpd';
let inews = 'https://alpukat-live-cdn.mncnow.id/live/eds/iNewsTV-HDD/sa_dash_vmx/iNewsTV-HDD.mpd';
let trans7 = 'https://alpukat-live-cdn.mncnow.id/live/eds/Trans7-2/sa_dash_vmx/Trans7-2.mpd';
let transtv = 'https://alpukat-live-cdn.mncnow.id/live/eds/TransTV-2/sa_dash_vmx/TransTV-2.mpd';
let antv = 'https://alpukat-live-cdn.mncnow.id/live/eds/ANTV/sa_dash_vmx/ANTV.mpd';
let tvone = 'https://alpukat-live-cdn.mncnow.id/live/eds/TVOne/sa_dash_vmx/TVOne.mpd ';
let metrotv = 'https://alpukat-live-cdn.mncnow.id/live/eds/Metro-TV2/sa_dash_vmx/Metro-TV2.mpd';






//SPORTS
async function init1() {
  const video = document.getElementById('ss1');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '531c6d50e3e9f9ba66446f624f492289': 'd769d9ae238bdd424f8bcdcdc9a3801f'
      }
    }
  });
 // player.configure('manifest.dash.ignoreMinBufferTime', true);
  //player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(ss1);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init2() {
  const video = document.getElementById('ss2');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '45fec91ce1f19b6b1f31d69dcfaaf6cd': '843e228ab109e9aa6c4822ee4ad05d7d'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
 //player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(ss2);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init3() {
  const video = document.getElementById('ss3');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        'fadd2720deff5925ab86df0819cd7775': 'f67ff08c7ebc779f6a6fcfc83835f65b'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
 //player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(ss3);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init4() {
  const video = document.getElementById('ss4');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        'b81b1942c65f35547ced1bff074206a5': 'a07dc4d86f51db7195f4b7e2abe9d9e8'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
  //player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(ss4);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}



async function init5() {
  const video = document.getElementById('soccerch');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '4d38060bf41b3c29df0ec950ece6b5da': '7ee9506b13480491d79b71c062ab5366'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
  //player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(soccerch);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init6() {
  const video = document.getElementById('spotv');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '57d2ac9210cfbca3596cc679a01c8b29': 'd5e35c0f39c76adf24853d7ea18c71e7'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
// player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(spotv);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init7() {
  const video = document.getElementById('spotv2');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '4d38060bf41b3c29df0ec950ece6b5da': '7ee9506b13480491d79b71c062ab5366'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
// player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(spotv2);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init8() {
  const video = document.getElementById('fight');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        'd2159ffe3be22ed4916a6abe4d58d265': '3e4efcec08d5d5c18a403b7048a43638'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
// player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(fight);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


//LOKAL

async function init9() {
  const video = document.getElementById('rcti');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '9ba3e153ef8956d6e2b0684fcf74f58f': 'dbc28cb5c6426080f984a5b6d436bb30'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(rcti);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init10() {
  const video = document.getElementById('mnctv');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '828e0aba9825c3546a2831e4c0c36f7f': 'f85d3dcd38981368ab3da597e97ebdcc'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(mnctv);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init11() {
  const video = document.getElementById('gtv');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '88f6c7cbd793374cb5f12d7e26dcd63b': 'e82daa7c7bfb03d99327463fdbd37336'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(gtv);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init12() {
  const video = document.getElementById('inews');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        'a31cf5136789514b7e12b9cc99307c84': '980e54d671ffc2b2f4cf54e75cae0ac2'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(inews);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init13() {
  const video = document.getElementById('trans7');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '26bd60e03bbed7819eea0b27075a1897': 'd221ba6a6ab66e3083c001d2c4a3e5c5'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(trans7);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init14() {
  const video = document.getElementById('transtv');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '334950781f60a66f5e58324b70ac675d': '73caca97be8999ce9cfeb3babad8669d'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(transtv);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init15() {
  const video = document.getElementById('antv');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '4310edb8b9ffe79abb40bacafa778ec3': 'aebb7e86d8a336d9a93d3dd8a41153cf'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(antv);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init16() {
  const video = document.getElementById('tvone');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '90204c05545f95a262bb0d3ac45de870': '0e80f2a19fdf8da476bf695cd9570bb2'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(tvone);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}



async function init17() {
  const video = document.getElementById('metrotv');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'yellow',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '4497473c5b978655ce62de7873e04174': '6af319f8d82351f8c3b18c9abdfdef4d'
      }
    }
  });
 //player.configure('manifest.dash.ignoreMinBufferTime', true);
//  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(metrotv);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}




function onPlayerErrorEvent(errorEvent) {
  onPlayerError(event.detail);
}

function onPlayerError(error) {
  console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
  onPlayerError(event.detail);
}

function initFailed(errorEvent) {
  console.error('Unable to load the UI library!');
}

document.addEventListener('shaka-ui-loaded', init1);
document.addEventListener('shaka-ui-load-failed', initFailed);
document.addEventListener('shaka-ui-loaded', init2);

document.addEventListener('shaka-ui-loaded', init3);

 document.addEventListener('shaka-ui-loaded', init4);
 document.addEventListener('shaka-ui-loaded', init5);
document.addEventListener('shaka-ui-loaded', init6);

document.addEventListener('shaka-ui-loaded', init7);

 document.addEventListener('shaka-ui-loaded', init8);
 document.addEventListener('shaka-ui-loaded', init9);
document.addEventListener('shaka-ui-loaded', init10);
document.addEventListener('shaka-ui-loaded', init11);
document.addEventListener('shaka-ui-loaded', init12);

document.addEventListener('shaka-ui-loaded', init13);

 document.addEventListener('shaka-ui-loaded', init14);
 document.addEventListener('shaka-ui-loaded', init15);
document.addEventListener('shaka-ui-loaded', init16);

document.addEventListener('shaka-ui-loaded', init17);

 document.addEventListener('shaka-ui-loaded', init18);
 document.addEventListener('shaka-ui-loaded', init19);
document.addEventListener('shaka-ui-loaded', init20);
document.addEventListener('shaka-ui-loaded', init21);
document.addEventListener('shaka-ui-loaded', init22);

document.addEventListener('shaka-ui-loaded', init23);

 document.addEventListener('shaka-ui-loaded', init24);
 document.addEventListener('shaka-ui-loaded', init25);
document.addEventListener('shaka-ui-loaded', init26);

document.addEventListener('shaka-ui-loaded', init27);

 document.addEventListener('shaka-ui-loaded', init28);
 document.addEventListener('shaka-ui-loaded', init29);


//SPORT

function ganti_ss1() {
  ss1 = 'https://pisionplus.xyssatu.workers.dev/live/eds/MNCSports-HD/sa_dash_vmx/MNCSports-HD.mpd';
  init1();
}
function ganti_ss2() {
  ss2 = 'https://pisionplus.xyssatu.workers.dev/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd';
  init2();
}

function ganti_ss3() {
  ss3 = 'https://pisionplus.xyssatu.workers.dev/live/eds/MNCSports3-HD/sa_dash_vmx/MNCSports3-HD.mpd';
  init3();
}
function ganti_ss4() {
  ss4 = 'https://pisionplus.xyssatu.workers.dev/live/eds/Sportstar4/sa_dash_vmx/Sportstar4.mpd';
  init4();
}
function ganti_soccerch() {
  soccerch = 'https://pisionplus.xyssatu.workers.dev/live/eds/soccerchannel-test/sa_dash_vmx/soccerchannel-test.mpd';
  init5();
}
function ganti_spotv() {
  spotv = 'https://pisionplus.xyssatu.workers.dev/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';
  init6();
}

function ganti_spotv2() {
  spotv = 'https://pisionplus.xyssatu.workers.dev/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';
  init7();
}

function ganti_fight() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/FightSports/sa_dash_vmx/FightSports.mpd';
  init8();
}

//LOKAL
function ganti_rcti() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';
  init9();
}

function ganti_mnctv() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/MNCTV-HD/sa_dash_vmx/MNCTV-HD.mpd';
  init10();
}
function ganti_gtv() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/GTV-HD/sa_dash_vmx/GTV-HD.mpd';
  init11();
}

function ganti_inews() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/live/eds/iNewsTV-HDD/sa_dash_vmx/iNewsTV-HDD.mpd';
  init12();
}

function ganti_trans7() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/Trans7-2/sa_dash_vmx/Trans7-2.mpd';
  init13();
}

function ganti_transtv() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/live/eds/TransTV-2/sa_dash_vmx/TransTV-2.mpd';
  init14();
}
function ganti_antv() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/live/eds/ANTV/sa_dash_vmx/ANTV.mpd';
  init15();
}

function ganti_tvone() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/TVOne/sa_dash_vmx/TVOne.mpd';
  init16();
}

function ganti_metrotv() {
  fight = 'https://pisionplus.xyssatu.workers.dev/live/eds/live/eds/Metro-TV2/sa_dash_vmx/Metro-TV2.mpd';
  init17();
}












