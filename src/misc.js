function renderBars() {
  const bar_keys = Object.keys(EDIT_BARS);
  for(let i = 0; i < 4; i++) {
    const currentKey = bar_keys[i]
    const currentData = EDIT_BARS[currentKey];
    _drawBar(i, currentKey, currentData);
  }
}

function _drawBar(i, currentKey, currentData) {
  // Draw BG
  hmUI.createWidget(hmUI.widget.IMG, {
    x: i % 2 == 1 ? 96 : 0,
    y: i > 1 ? 364 : 0,
    src: `bars/${currentKey}.png`,
    show_level: hmUI.show_level.ONLY_NORMAL
  });

  // Draw ARC_PROGRESS
  hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
    type: currentData.progressDataType ? currentData.progressDataType :
      currentData.dataType,
    center_x: 96,
    center_y: i > 1 ? 392 : 96,
    radius: 82,
    start_angle: i % 2 == 0 ? -90 : 90,
    end_angle: ([-12, 12, -168, 168])[i],
    line_width: 20,
    color: currentData.color,
    show_level: hmUI.show_level.ONLY_NORMAL
  });

  // Draw TEXT
  hmUI.createWidget(hmUI.widget.TEXT_IMG, {
    x: i % 2 == 1 ? 96 : 4,
    y: i > 1 ? 370 : 100,
    w: 92,
    font_array: mkImgArray(`fonts/${currentData.font}`),
    align_h: i % 2 == 1 ? hmUI.align.RIGHT : hmUI.align.LEFT,
    type: currentData.dataType,
    dot_image: currentData.dotImage,
    unit_en: currentData.unit,
    show_level: hmUI.show_level.ONLY_NORMAL
  })
}

function renderWidgets() {
  const widgets_keys = Object.keys(EDIT_WIDGETS);
  for(let i = 0; i < 2; i++) {
    const currentData = EDIT_WIDGETS[widgets_keys[i]];
    currentData.render(i == 0 ? 36 : 376);
  }
}

function renderStatus() {
  // left up
  // right up
  hmUI.createWidget(hmUI.widget.IMG_STATUS, {
    x: 164,
    y: 130,
    src: 'status/alarm_enable.png',
    type: hmUI.system_status.CLOCK
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
