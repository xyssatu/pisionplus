let punya_lsbtv_rcti = 'https://mangga-live-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';
let punya_lsbtv_soccerch = 'https://mangga-live-cdn.mncnow.id/live/eds/soccerchannel-HD/sa_dash_vmx/soccerchannel-HD.mpd';

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

  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(punya_lsbtv_rcti);
    console.log('RCTI video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

function initSoccerch() {
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

  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load(punya_lsbtv_soccerch);
    console.log('Soccerch video has now been loaded!');
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

document.addEventListener('shaka-ui-loaded', initRcti);
document.addEventListener('shaka-ui-loaded', initSoccerch);
document.addEventListener('shaka-ui-load-failed', initFailed);




//URL PENGGANTI

function changeSourceRcti() {
  punya_lsbtv_rcti = 'https://lsbplus.pisionpluss.workers.dev/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd';
  initRcti();
}

function changeSourceSoccerch() {
  punya_lsbtv_soccerch = 'https://lsbplus.pisionpluss.workers.dev/live/eds/soccerchannel-HD/sa_dash_vmx/soccerchannel-HD.mpd';
  initSoccerch();
}
</script>
