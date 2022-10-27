Blockly.JavaScript['write_to_testnet'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("hello");\n';
  
  return code;
};
