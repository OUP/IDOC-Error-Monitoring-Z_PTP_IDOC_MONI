sap.ui.define([], function () {
  "use strict";
  return {
    onInit: function () {
      try {
        const oSmartTable = this.getView().byId(
          this.getView().getId() + "--listReport"
        );
        oSmartTable.setUseExportToExcel(true);
      } catch (error) {
        // un caught exception
      }
    },
  };
});
