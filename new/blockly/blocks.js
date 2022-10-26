Blockly.Blocks['write_to_testnet'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("寫入測試鏈");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};