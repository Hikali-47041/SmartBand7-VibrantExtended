function renderStatus() {
  // left up
  hmUI.createWidget(hmUI.widget.IMG_STATUS, {
    x: 2,
    y: 130,
    src: 'status/alarm_enable.png',
    type: hmUI.system_status.CLOCK
  });
  // right up
  hmUI.createWidget(hmUI.widget.IMG_STATUS, {
    x: 164,
    y: 130,
    src: 'status/lock_enable.png',
    type: hmUI.system_status.LOCK
  });
  // left down
  hmUI.createWidget(hmUI.widget.IMG, {
    x: 2,
    y: 334,
    src: "status/dnd_disable.png"
  });
  hmUI.createWidget(hmUI.widget.IMG_STATUS, {
    x: 2,
    y: 334,
    src: 'status/dnd_enable.png',
    type: hmUI.system_status.DISTURB
  });
  // right down
  hmUI.createWidget(hmUI.widget.IMG, {
    x: 164,
    y: 334,
    src: "status/connection_active.png"
  }); 
  hmUI.createWidget(hmUI.widget.IMG_STATUS, {
    x: 164,
    y: 334,
    src: 'status/connection_inactive.png',
    type: hmUI.system_status.DISCONNECT
  });
}

function getTbTimerState() {
  const state = hmFS.SysProGetChars("mmk_tb_timer_state");
  if(!state) return "--.--";

  const [id, startedTime, endTime] = state.split(":").map((v) => parseInt(v));
  const delay = Math.floor((endTime - Date.now()) / 1000);
  if(delay <= 0) return "--.--";

  const minute = Math.min(Math.floor(delay / 60), 99).toString().padStart(2, "0"),
    second = (delay % 60).toString().padStart(2, "0");

  return `${minute}.${second}`;
}

// getProperty() is not work well
// ref: https://docs.zepp.com/docs/1.0/watchface/api/hmUI/getProperty/ 
class Wallpaper {
  constructor(alpha = 255) {
    this.alpha = alpha;
    this.widgets = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: "wallpaper/wallpaper.png",
      alpha: alpha,
      show_level: hmUI.show_level.ONLY_NORMAL
    });
  }

  getAlpha() {
    return this.alpha;
  }
  setAlpha(alpha) {
    this.alpha = alpha;
    this.widgets.setProperty(hmUI.prop.MORE, {alpha: alpha});
  }
}

// render background
function renderWallpaper(isOverlapped = false) {
    return new Wallpaper(isOverlapped ? 0 : 51);
}
