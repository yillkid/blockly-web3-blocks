Blockly.Arduino['write_to_testnet'] = function(block) {
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'console.log("hello");\n';
  
  return code;
};