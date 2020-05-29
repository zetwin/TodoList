export default {
  state: {
    showMobileNavbar: false,
    showMobileSidebar: false,
  },
  mutations: {
    toggleDisplayMobileNavbar(state) {
      state.showMobileNavbar = !state.showMobileNavbar;
      state.showMobileSidebar = false;
    },
    showMobileSidebar(state) {
      state.showMobileSidebar = true;
      state.showMobileNavbar = false;
    },
    hideMobileNavbar(state) {
      state.showMobileNavbar = false;
    },
    hideMobileSidebar(state) {
      state.showMobileSidebar = false;
    },
  },
  getters: {
    displayNavbar(state) {
      return state.showMobileNavbar;
    },
    displaySidebar(state) {
      return state.showMobileSidebar;
    },
  },
};
