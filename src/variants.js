const EDIT_BARS = {
  steps: {
    value: 0,
    dataType: hmUI.data_type.STEP,
    url: "activityAppScreen",
    font: "sm_yellow",
    color: 0xffac33,
  },
  consume: {
    value: 1,
    dataType: hmUI.data_type.CAL,
    url: "activityAppScreen",
    font: "sm_orange",
    color: 0xf15a22,
  },
  pai: {
    value: 2,
    dataType: hmUI.data_type.PAI_WEEKLY,
    url: "pai_app_Screen",
    font: "sm_blue",
    color: 0x8e6ae8,
  },
  battery: {
    value: 3,
    dataType: hmUI.data_type.BATTERY,
    unit: "fonts/sm_green/percent.png",
    url: "Settings_batteryManagerScreen",
    font: "sm_green",
    color: 0x2cde85,
  },
  heartrate: {
    value: 4,
    dataType: hmUI.data_type.HEART,
    url: "heart_app_Screen",
    font: "sm_red",
    color: 0xe974a3,
  },
  km: {
    value: 5,
    dataType: hmUI.data_type.DISTANCE,
    progressDataType: hmUI.data_type.STEP,
    dotImage: "fonts/sm_lightblue/10.png",
    url: "activityAppScreen",
    font: "sm_cyan",
    color: 0x04bac5,
  },
  stress: {
    value: 6,
    dataType: hmUI.data_type.STRESS,
    url: "StressHomeScreen",
    font: "sm_lightblue",
    color: 0x3daee9,
  },
  stand: {
    value: 7,
    dataType: hmUI.data_type.STAND,
    url: "activityAppScreen",
    font: "sm_green",
    color: 0x2cde85
  },
  spo2: {
    value: 8,
    dataType: hmUI.data_type.SPO2,
    url: "spo_HomeScreen",
    font: "sm_red",
    color: 0xe974a3
  },
  void: {
    value: 99
  }
};

const FONT_WHITE = mkImgArray("fonts/white");
const EDIT_WIDGETS = {
  weather: {
    value: 0,
    url: "WeatherScreen",
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
  heartrate: {
    value: 1,
    url: "heart_app_Screen",
    config: {
      type: hmUI.data_type.HEART,
      font_array: mkImgArray("fonts/red"),
    },
  },
  aqi: {
    value: 2,
    url: "WeatherScreen",
    config: {
      type: hmUI.data_type.AQI,
      font_array: FONT_WHITE,
    },
  },
  battery: {
    value: 3,
    url: "Settings_batteryManagerScreen",
    config: {
      type: hmUI.data_type.BATTERY,
      font_array: mkImgArray("fonts/green"),
      unit_en: "fonts/green/percent.png",
      unit_sc: "fonts/green/percent.png",
      unit_tc: "fonts/green/percent.png",
    },
  },
  humidity: {
    value: 4,
    url: "WeatherScreen",
    config: {
      type: hmUI.data_type.HUMIDITY,
      font_array: mkImgArray("fonts/blue"),
      unit_en: "fonts/blue/percent.png",
      unit_sc: "fonts/blue/percent.png",
      unit_tc: "fonts/blue/percent.png",
    },
  },
  steps: {
    value: 5,
    url: "activityAppScreen",
    config: {
      type: hmUI.data_type.STEP,
      font_array: mkImgArray("fonts/yellow"),
    },
  },
  sunrise: {
    value: 6,
    url: "WeatherScreen",
    config: {
      type: hmUI.data_type.SUN_RISE,
      font_array: FONT_WHITE,
    },
  },
  sunset: {
    value: 7,
    url: "WeatherScreen",
    config: {
      type: hmUI.data_type.SUN_SET,
      font_array: FONT_WHITE,
    },
  },
  uvi: {
    value: 8,
    url: "WeatherScreen",
    config: {
      type: hmUI.data_type.UVI,
      font_array: FONT_WHITE,
    },
  },
  countdown: {
    value: 9,
    url: "CountdownAppScreen",
    render: (y) => {
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 48,
        y,
        src: "widgets/demo/countdown.png"
      });
    }
  },
  stopwatch: {
    value: 10,
    url: "StopWatchScreen",
    render: (y) => {
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 48,
        y,
        src: "widgets/demo/stopwatch.png"
      });
    }
  },
  sleep: {
    value: 11,
    url: "Sleep_HomeScreen",
    config: {
      type: hmUI.data_type.SLEEP,
      font_array: FONT_WHITE,
      dot_image: 'fonts/10.png',
    },
  },
  alarm: {
    value: 12,
    url: "AlarmInfoScreen",
    config: {
      type: hmUI.data_type.ALARM_CLOCK,
      font_array: FONT_WHITE,
      padding: 1,
    },
  },

  tb_timer: {
    value: 13,
    url: () => {
      hmApp.startApp({
        appid: 33904,
        url: 'page/TimerSetScreen'
      });
    },
    render: (y) => {
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 74,
        y,
        src: `widgets/icon/tb_timer.png`,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      const view = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: 48,
        y: y + 48,
        w: 96,
        h: 30,
        align_h: hmUI.align.CENTER_H,
        negative_image: "fonts/fu.png",
        dot_image: 'fonts/point.png',
        show_level: hmUI.show_level.ONLY_NORMAL,
        text: getTbTimerState(),
        font_array: FONT_WHITE,
      });

      timer.createTimer(0, 500, () => {
        view.setProperty(hmUI.prop.TEXT, getTbTimerState());
      });
    }
  },
  tb_timer2: {
    value: 14,
    url: () => {
      hmApp.startApp({
        appid: 33904,
        url: 'page/MainScreen'
      });
    },
    render: (y) => {
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 74,
        y,
        src: `widgets/icon/toolbox.png`,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      const view = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: 48,
        y: y + 48,
        w: 96,
        h: 30,
        align_h: hmUI.align.CENTER_H,
        negative_image: "fonts/fu.png",
        dot_image: 'fonts/point.png',
        show_level: hmUI.show_level.ONLY_NORMAL,
        text: getTbTimerState(),
        font_array: FONT_WHITE,
      });

      timer.createTimer(0, 500, () => {
        view.setProperty(hmUI.prop.TEXT, getTbTimerState());
      });
    }
  },
  toolbox: {
    value: 15,
    url: () => {
      hmApp.startApp({
        appid: 33904,
        url: 'page/MainScreen'
      });
    },
    render: (y) => {
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 48,
        y,
        src: "widgets/demo/toolbox.png"
      });
    }
  },
  second: {
    value: 16,
    url: () => {
      hmApp.startApp({
        appid: 33904,
        url: 'page/MainScreen'
      });
    },
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
        second_posX: 8,
        second_posY: 40,
        second_path: "widgets/second/second_pointer.png",
        show_level: hmUI.show_level.ONLY_NORMAL,
      });
    }
  },
  digital_clock: {
    value: 17,
    url: () => {
      hmApp.startApp({
        appid: 33904,
        url: 'page/MainScreen'
      });
    },
    render: (y) => {
      // hh:mm
      hmUI.createWidget(hmUI.widget.IMG_TIME, {
        hour_startX: 56,
        hour_startY: y + 26,
        hour_zero: 1,
        hour_array: FONT_WHITE,
        hour_unit_en: 'fonts/point.png',
        hour_unit_sc: 'fonts/point.png',
        hour_unit_tc: 'fonts/point.png',
        minute_follow: 1, // Whether to follow.
        minute_array: FONT_WHITE,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
    }
  },
  digital_date: {
    value: 18,
    url: () => {
      hmApp.startApp({
        appid: 33904,
        url: 'page/MainScreen'
      });
    },
    render: (y) => {
      // MM-DD
      hmUI.createWidget(hmUI.widget.IMG_DATE, {
        month_startX: 56,
        month_startY: y + 26,
        month_zero: 1,
        month_en_array: FONT_WHITE,
        month_sc_array: FONT_WHITE,
        month_tc_array: FONT_WHITE,
        month_align: hmUI.align.CENTER_H,
        month_unit_en: 'fonts/fu.png',
        month_unit_sc: 'fonts/fu.png',
        month_unit_tc: 'fonts/fu.png',
        day_follow: 1, // Whether to follow.
        day_en_array: FONT_WHITE,
        day_sc_array: FONT_WHITE,
        day_tc_array: FONT_WHITE,
        day_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
    }
  },
  digital_datetime: {
    value: 19,
    url: () => {
      hmApp.startApp({
        appid: 33904,
        url: 'page/MainScreen'
      });
    },
    render: (y) => {
      // MM-DD
      hmUI.createWidget(hmUI.widget.IMG_DATE, {
        month_startX: 56,
        month_startY: y + 8,
        month_zero: 1,
        month_en_array: FONT_WHITE,
        month_sc_array: FONT_WHITE,
        month_tc_array: FONT_WHITE,
        month_align: hmUI.align.CENTER_H,
        month_unit_en: 'fonts/fu.png',
        month_unit_sc: 'fonts/fu.png',
        month_unit_tc: 'fonts/fu.png',
        day_follow: 1, // Whether to follow.
        day_en_array: FONT_WHITE,
        day_sc_array: FONT_WHITE,
        day_tc_array: FONT_WHITE,
        day_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      // separater line
      // center: (x, y) = (96, y + 39.5)
      hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 68,
        y: y + 39,
        w: 56,
        h: 1,
        color: 0xbdc3c7
      });
      // hh:mm
      hmUI.createWidget(hmUI.widget.IMG_TIME, {
        hour_startX: 56,
        hour_startY: y + 42,
        hour_zero: 1,
        hour_array: FONT_WHITE,
        hour_unit_en: 'fonts/point.png',
        hour_unit_sc: 'fonts/point.png',
        hour_unit_tc: 'fonts/point.png',
        minute_follow: 1, // Whether to follow.
        minute_array: FONT_WHITE,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
    }
  },
  void: {
    value: 99
  }
};
