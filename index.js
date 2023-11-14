let punya_rcti = 'https://mangga-live-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';
let punya_soccerch = 'https://mangga-live-cdn.mncnow.id/live/eds/soccerchannel-HD/sa_dash_vmx/soccerchannel-HD.mpd';




async function initRcti() {
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
 // player.configure('manifest.dash.ignoreMinBufferTime', true);
  //player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(punya_rcti);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}





async function initSoccerch() {
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
    await player.load(punya_soccerch);
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init14() {
  const video = document.getElementById('fifa3');
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
        '9fb55f07f62e4a2fa53d2bc75a8d8283': '77c592feb70a9e8df7984c1e8dd6d820'
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
    await player.load('https://i.mjh.nz/SamsungTVPlus/ATBA3300007PT.m3u8');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}









async function init1() {
  const video = document.getElementById('ssc1');
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
        'e76ae17d861546be9c238e6582509c2c': 'de1a91e2306bf8442236a80477f526e1'
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
    await player.load('https://ssc-1-on-prem-ak.akamaized.net/out/v1/ec938957da2849879f0cfac7e309ff38/index.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init2() {
  const video = document.getElementById('ssc2');
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
        'b8763ccad3d146c2b15f8a77a4d6d733': 'ab87f6ae46b2dc187bd94cbb48cfe074'
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
    await player.load('https://ssc-2-on-prem-ak.akamaized.net/out/v1/d9a2acf5f809461ca47714440fcbc0f4/index.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}



async function init3() {
  const video = document.getElementById('ssc3');
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
        'c3af2aa1da4a41cbb37b1dbe43b46782': 'b6b74f29f6d1501b989c96aec4dae599'
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
    await player.load('https://ssc-3-on-prem-ak.akamaized.net/out/v1/ad2b1abef05c419aa6a4e6aee6d269a2/index.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}




async function init4() {
  const video = document.getElementById('ssc4');
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
        '2c506baa39a74674874ae2ab8bbc792f': '1fa11c606eea3ba805f3d2efa537b1fa'
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
    await player.load('https://ssc-4-on-prem-ak.akamaized.net/out/v1/3e442c7dad1b44b6a0914aa26b62a892/index.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}




async function init5() {
  const video = document.getElementById('ssc5');
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
        '150150f30a8140a2bfda5d1b3fbb2d4b': 'dad19250368b129f003817b778d65dae'
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
    await player.load('https://ssc-5-on-prem-cw-ak.akamaized.net/out/v1/ee54cd9a3f844ceb8249f430733f9c00/index.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}



async function init6() {
  const video = document.getElementById('ssc_extra1');
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
        '0bf5a32868224a6f9f3a749a9ea20eb2': '0ace749c97932aa44434da3a88c1ee69'
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
    await player.load('https://ssc-extra1-on-prem-cw-ak.akamaized.net/out/v1/d309ac98b822425d9435cca654211498/index.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init7() {
  const video = document.getElementById('ssc_extra2');
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
        'fc98baf530ac49aea60a7bf50929aa91': 'f8c40722bb6a0cf822588661740a08bb'
      }
    }
  });
 // player.configure('manifest.dash.ignoreMinBufferTime', true);
 // player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load('https://ssc-extra2-on-prem-ak.akamaized.net/out/v1/a525c44d152f4d238aa21af75945e29c/index.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}



async function init8() {
  const video = document.getElementById('ssc_extra3');
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
        '9b05d5f11a0b422d86354c34782ed2bc': '82aef319b4cfc71fd48cdd495ee79786'
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
    await player.load('https://ssc-extra3-on-prem-cw-ak.akamaized.net/out/v1/9d373d000ab64078b131f9d4c18e3502/index.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}



async function init9() {
  const video = document.getElementById('mewatch6');
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
        'cdf0001f693942da990fe81afa3eb0cd': '6b8d4bc58615439954851eeda771f417'
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
    await player.load('https://tglmp02.akamaized.net/out/v1/6e5a888d4bf847a2be521c55f7bfd08c/manifest.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init10() {
  const video = document.getElementById('bein1my');
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
        '2eae64f36919660fb5df0396746db524': '971aa1f075a00ef73eb9029f781838f5'
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
    await player.load('https://unifi-live08.secureswiftcontent.com/UnifiHD/live13.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  
}
}

async function init13() {
  const video = document.getElementById('match_football1');
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
        'dbce02ba047a663162cf01a13f72fada': '01228427a01cd4f5b11d58fb2f0f70fe'
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
    await player.load('https://video.beeline.tv/live/d/channel319.isml/manifest-stb.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init14() {
  const video = document.getElementById('match_football2');
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
        '4ee92db5fec64a759fe0e43f5401ea20': '87cecedd78a51865acec7dcf0ecbb7f6'
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
    await player.load('https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init15() {
  const video = document.getElementById('match_football3');
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
        '5af547ae2dee032b9f0a8d165b03dc37': '6c840f523c773f979496228d8b44c028'
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
    await player.load('https://video.beeline.tv/live/d/channel321.isml/manifest-stb.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}



async function init16() {
  const video = document.getElementById('tv2_sportsx');
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
        '00d8116805ab3578aa98cde9e79ba60d': '7ab22ba5e8cb8c4d67f666f1b703189f'
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
    await player.load('https://tv2-play-ew-aws-arn-dash-a.akamaized.net/__cl/cg:live/__c/tv2_sport_x/__op/cenc/__f/single.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init17() {
  const video = document.getElementById('tsn1');
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
        'dea83ced0141424e983e1afe463b4b0d': 'c00dd5dd17b0799aa4013f365a1393ce'
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
    await player.load('https://live-ctv.video.9c9media.com/f/TSN/TSN1/manifest.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init18() {
  const video = document.getElementById('tsn2');
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
        'ddc52c88e2c24d38a5bc8dda8a2acb61': 'ad5ea485464a13eec7dda3249c556446'
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
    await player.load('https://live-ctv.video.9c9media.com/f/TSN/TSN2/manifest.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init19() {
  const video = document.getElementById('tsn3');
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
        'c0f378ad54e14a9c85a3d8c986d2a51f': '5e1d040743ff78715e464ffb905e68a9'
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
    await player.load('https://live-ctv.video.9c9media.com/f/TSN/TSN3/manifest.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init20() {
  const video = document.getElementById('tsn4');
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
        'f0a2efd11e0643c3a45d6f67d02f1a97': '85bf4469003bd28f01ea4fefedd5a431'
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
    await player.load('https://live-ctv.video.9c9media.com/f/TSN/TSN4/manifest.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}


async function init21() {
  const video = document.getElementById('tsn5');
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
        'cb57741a1cee422690c6294a06eb1320': '7a0cfd493df6ef7cc0d0bb3ad95cec8c'
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
    await player.load('https://live-ctv.video.9c9media.com/f/TSN/TSN5/manifest.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

async function init22() {
  const video = document.getElementById('tyc_sports');
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
        'cb57741a1cee422690c6294a06eb1320': '7a0cfd493df6ef7cc0d0bb3ad95cec8c'
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
    await player.load('https://csc-ptn-edge01.sensa.com.ar/live/eds/TYCSports/live_dash_cld/TYCSports.mpd');
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

document.addEventListener('shaka-ui-loaded', initSoccerch);
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
document.addEventListener('shaka-ui-loaded', initRcti);
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



function changeSource() {
  punya_rcti = 'https://lsbplus.pisionpluss.workers.dev/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';
  initRcti();
}
function changeSource() {
  punya_soccerch = 'https://lsbplus.pisionpluss.workers.dev/live/eds/soccerchannel-HD/sa_dash_vmx/soccerchannel-HD.mpd';
  initSoccerch();
}
