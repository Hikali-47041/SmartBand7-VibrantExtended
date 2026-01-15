function renderClockWidget(isAOD) {
  renderDate();
  const fontTime = isAOD ? mkImgArray('digital/clock/aod'): mkImgArray('digital/clock/normal');
  hmUI.createWidget(hmUI.widget.IMG_TIME, {
    hour_startX: 26,
    hour_startY: 125,
    hour_zero: 1,
    hour_array: fontTime,
    minute_startX: 26,
    minute_startY: 230,
    minute_zero: 1,
    minute_array: fontTime
  });
}

function renderDate() {
  const fontDate = mkImgArray("digital/date");
  hmUI.createWidget(hmUI.widget.IMG_DATE, {
    month_startX: 30,
    month_startY: 336,
    month_en_array: fontDate,
    month_sc_array: fontDate,
    month_tc_array: fontDate,
    month_unit_en: 'digital/date/10.png',
    month_unit_sc: 'digital/date/10.png',
    month_unit_tc: 'digital/date/10.png',
    month_zero: 1,
    day_follow: 1,
    day_en_array: fontDate,
    day_sc_array: fontDate,
    day_tc_array: fontDate,
    day_zero: 1
  });

  const fontWeekday = mkImgArray('weekday/en-US', 7);
  hmUI.createWidget(hmUI.widget.IMG_WEEK, {
    x: 104,
    y: 336,
    week_en: fontWeekday, 
    week_sc: fontWeekday, 
    week_tc: fontWeekday 
  });
}
