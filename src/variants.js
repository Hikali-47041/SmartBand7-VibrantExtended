const EDIT_BARS = {
  steps: {
    dataType: hmUI.data_type.STEP,
    font: "sm_yellow",
    color: 0xffac33,
  },
  battery: {
    dataType: hmUI.data_type.BATTERY,
    unit: "fonts/sm_green/percent.png",
    font: "sm_green",
    color: 0x2cde85,
  },
  stress: {
    dataType: hmUI.data_type.STRESS,
    font: "sm_lightblue",
    color: 0x3daee9,
  },
  heartrate: {
    dataType: hmUI.data_type.HEART,
    font: "sm_red",
    color: 0xe974a3,
  },
};

const FONT_WHITE = mkImgArray("fonts/white");
const EDIT_WIDGETS = {
  weather: {
    render: (y) => {
      hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
        x: 74,
        y,
        image_array: mkImgArray("widgets/weather", 29),
        image_length: 29,
        type: hmUI.data_type.WEATHER_CURRENT,
        show_level: hmUI.show_level.ONLY_NORMAL,
      });

      hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: 48,
        y: y + 48,
        w: 96,
        h: 30,
        align_h: hmUI.align.CENTER_H,
        invalid_image: "fonts/null.png",
        negative_image: "fonts/fu.png",
        show_level: hmUI.show_level.ONLY_NORMAL,
        type: hmUI.data_type.WEATHER_CURRENT,
        font_array: FONT_WHITE,
        unit_en: "fonts/du.png",
        unit_sc: "fonts/du.png",
        unit_tc: "fonts/du.png",
      });
    }
  },
  second: {
    render: (y) => {
      // digital
      hmUI.createWidget(hmUI.widget.IMG_TIME, {
        second_startX: 78,
        second_startY: y + 26,
        second_zero: 1,
        second_array: FONT_WHITE,
        second_algin: hmUI.align.CENTER_H,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      // bg
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 62,
        y: y + 5,
        w: 68,
        h: 68,
        src: "widgets/second/bg.png"
      });
      // analog
      hmUI.createWidget(hmUI.widget.TIME_POINTER, {
        second_centerX: 96,
        second_centerY: y + 39,
        second_posX: 11,
        second_posY: 34,
        second_path: "widgets/second/second_pointer.png",
        show_level: hmUI.show_level.ONLY_NORMAL,
      });
    }
  }
};
