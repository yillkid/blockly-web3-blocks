Blockly.JavaScript['linenotify_set'] = function(block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_linenotify_token = Blockly.JavaScript.valueToCode(block, 'linenotify_token', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name_+" = {token:" + value_linenotify_token + "};\n";
  return code;
};

Blockly.JavaScript['linenotify_sendmsg'] = function(block) {
  
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_notify_sendmsg = Blockly.JavaScript.valueToCode(block, 'notify_sendmsg', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "line_notify($.extend({},"+variable_name_+",{message:"+value_notify_sendmsg+"}));\n";
  console.log("hello " + code);

  return code;
};
