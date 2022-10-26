Blockly.JavaScript['addCustomBlocks'] = function (block) {
  var code = '';
  return code; 
};

Blockly.JavaScript['basic_irled_launch'] = function (block) {
  var value_code_ = Blockly.JavaScript.valueToCode(block, 'code_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code;
  code = 'IrLed.init(board,' + dropdown_pin_ + ').send(' + value_code_ + ');\n';
  return code;
};

Blockly.JavaScript['basic_irrecv_value'] = function (block) {
  var code = '(value || \'\')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['basic_irrecv_on'] = function (block) {
  var statements_on_ = Blockly.JavaScript.statementToCode(block, 'on_');
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'IrRecv.init(board, ' + dropdown_pin_ + ').receive(async value => {\n' +
    statements_on_ +
    '}, () => {});\n';
  return code;
};

Blockly.JavaScript['basic_irrecv_ac_on'] = function (block) {
  var statements_on_ = Blockly.JavaScript.statementToCode(block, 'on_');
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'IrRecv.init(board, ' + dropdown_pin_ + ').receiveAC(async value => {\n' +
    statements_on_ +
    '}, () => {});\n';
  return code;
};


Blockly.JavaScript['basic_ultrasonic_distance'] = function (block) {
  var dropdown_trig_ = block.getFieldValue('trig_');
  var dropdown_echo_ = block.getFieldValue('echo_');
  var code = `((await Ultrasonic.init(board, ${dropdown_trig_}, ${dropdown_echo_})).distance || 0)`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};




Blockly.JavaScript['basic_servo_angle'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var angle_angle_ = block.getFieldValue('angle_');
  if (angle_angle_ <= 5) {
    angle_angle_ = 5;
  }
  if (angle_angle_ > 270) {
    angle_angle_ = 5;
  }
  if (angle_angle_ >= 175 && angle_angle_ <= 270) {
    angle_angle_ = 175;
  }
  var code = 'Servo.init(board, ' + dropdown_pin_ + ').angle = ' + angle_angle_ + ';\n';
  return code;
};

Blockly.JavaScript['basic_servo_angle_custom'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var angle_angle_ = Blockly.JavaScript.valueToCode(block, 'angle_', Blockly.JavaScript.ORDER_ATOMIC);
  if (angle_angle_ <= 5) {
    angle_angle_ = 5;
  }
  if (angle_angle_ > 270) {
    angle_angle_ = 5;
  }
  if (angle_angle_ >= 175 && angle_angle_ <= 270) {
    angle_angle_ = 175;
  }
  var code = 'Servo.init(board, ' + dropdown_pin_ + ').angle = ' + angle_angle_ + ';\n';
  return code;
};



Blockly.JavaScript['basic_sound_status'] = function (block) {
  var pin = block.getFieldValue('pin_');
  var status = block.getFieldValue('status_');
  var statement = Blockly.JavaScript.statementToCode(block, 'callback_');
  var code;
  if (status == 'detected') {
    code = 'Sound.init(board, ' + pin + ').on(\'' + status + '\', async function () {\n' +
      '  ' + statement + '\n' +
      '});\n';
  } else {
    code = 'Sound.init(board, ' + pin + ').on(\'' + status + '\', async function () {\n' +
      '  setTimeout(async function () {\n' +
      '  ' + statement + '\n' +
      '  }, 300);\n' +
      '});\n';
  }
  return code;
};



Blockly.JavaScript['basic_photocell_val'] = function (block) {
  var pin = block.getFieldValue('pin_');
  var code = '((Photocell.init(board, ' + pin + ')).value || 0)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
