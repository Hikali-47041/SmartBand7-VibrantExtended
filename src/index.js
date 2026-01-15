let __$$app$$__ = __$$hmAppManager$$__.currentApp;
let __$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.WatchFace({
  onInit() {
    const currentScreen = hmSetting.getScreenType();
    switch(currentScreen) {

      case hmSetting.screen_type.AOD:
        renderClockWidget(true);
        return;

      default:
        renderBars();
        renderWidgets();
        renderStatus();
        renderClockWidget(false);
    }
  }
});
