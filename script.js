
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
let musictv = 'https://alpukat-live-cdn.mncnow.id/live/eds/soccerchannel-HD/sa_dash_vmx/soccerchannel-HD.mpd';
let rcti = 'https://alpukat-live-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';

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
        '9ba3e153ef8956d6e2b0684fcf74f58f': 'dbc28cb5c6426080f984a5b6d436bb30'
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
        'fadd2720deff5925ab86df0819cd7775': 'f67ff08c7ebc779f6a6fcfc83835f65b'
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
        'fadd2720deff5925ab86df0819cd7775': 'f67ff08c7ebc779f6a6fcfc83835f65b'
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
        'fadd2720deff5925ab86df0819cd7775': 'f67ff08c7ebc779f6a6fcfc83835f65b'
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

async function init7() {
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
        'b81b1942c65f35547ced1bff074206a5': 'a07dc4d86f51db7195f4b7e2abe9d9e8'
      }
    }
  });
 player.configure('manifest.dash.ignoreMinBufferTime', true);
  player.configure('streaming.rebufferingGoal', 1 /* second */);
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
function changeSourceMusictv() {
  punya_oketv = 'https://pisionplus.xyssatu.workers.dev/live/eds/OKTV/sa_dash_vmx/OKTV.mpd';
  initMusictv();
}
