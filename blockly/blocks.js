// ---------------------------
Blockly.Blocks['linenotify_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINENotify_Set)
        .appendField(new Blockly.FieldVariable("linenotify"), "name_");
    this.appendValueInput("linenotify_token")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINENotify_Token);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-notify.html");
  }
};

Blockly.Blocks['linenotify_sendmsg'] = {
  init: function() {
    this.appendValueInput("notify_sendmsg")
        .setCheck("String")
        .appendField(Blockly.Msg.LINENotify_Set)
        .appendField(new Blockly.FieldVariable("linenotify"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendmsg);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-notify.html");
  }
};
