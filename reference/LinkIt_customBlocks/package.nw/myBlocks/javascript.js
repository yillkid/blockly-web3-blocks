Blockly.Arduino['digitalwrite'] = function(block) {
  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');

  var code = 'digitalWrite('+value_pin+', '+dropdown_mode+');\n';
  return code;
};

Blockly.Arduino['digitalread'] = function(block) {
  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'digitalRead('+value_pin+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};