Blockly.Blocks['addCustomBlocks'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("自訂積木 設定");
  this.appendValueInput("url")
      .setCheck("String"); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["",""],
        ["add","add"], 
        ["remove","remove"],
        ["addAll","addAll"], 
        ["removeAll","removeAll"]
      ]), "func");
  this.setTooltip('');
  this.setColour(20);
  },
  onchange: function (event) {
    if (event.element=="field") {
      if (this.id==event.blockId) {
	  
          if (event.name=='func') {
            var url = this.getInputTargetBlock("url").getFieldValue("TEXT");
            if (this.getFieldValue('func')=='add') {
                  Code.customTab.$__add__(url);
                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
            else if (this.getFieldValue('func')=='remove') {
                  Code.customTab.$__remove__(url);
                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
            else if (this.getFieldValue('func')=='addAll') {
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_addCustomBlocks/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/teachablemachine_20200729/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Blazeface_20200627/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Facemesh_20200626/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Tracking_20200625/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Tracking_20190917/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/tesseract.js_20200615/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/handpose_20200614/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/faceapi_20200402/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_customvision-tfjs_20200128/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/deeplab_20200125/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/bodypix2_20200125/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/bodypix1_20200125/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/faceapi_20200124/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/SpeechRecognition_20191225/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_speak_setting/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/EDU_bit_MatrixLed_20190827/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ESP32-CAM_20191201/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_ClassifyImage_20190901/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceDetection_20190901/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceToFaceVerify_20191118/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Azure_FaceFindSimilar_20191117/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/posenet_20190822/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/mobilenet_20190821/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/coco-ssd_20190821/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/knn-classifier_20190608/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/GameElements_20190131/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/iframe_20180802/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/teachable_machine_boilerplate_20180818/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Instruction_20181213/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ShowCode_20181216/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/ESP8266_20190128/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/WebBit_20190225/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/Telegram_20200809/blockly.json');
                  Code.customTab.$__add__('https://fustyles.github.io/webduino/LineBot_20181027/blockly.json');

                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
            else if (this.getFieldValue('func')=='removeAll') {
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/EDU_addCustomBlocks/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachablemachine_20200729/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Blazeface_20200627/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Facemesh_20200626/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tracking_20200625/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Tracking_20190917/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/tesseract.js_20200615/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/handpose_20200614/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_20200402/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_customvision-tfjs_20200128/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/deeplab_20200125/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/bodypix2_20200125/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/bodypix1_20200125/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/faceapi_20200124/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/SpeechRecognition_20191225/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/EDU_speak_setting/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/EDU_bit_MatrixLed_20190827/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/ESP32-CAM_20191201/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_ClassifyImage_20190901/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_FaceDetection_20190901/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_FaceToFaceVerify_20191118/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Azure_FaceFindSimilar_20191117/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/posenet_20190822/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/mobilenet_20190821/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/coco-ssd_20190821/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/knn-classifier_20190608/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/GameElements_20190131/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/iframe_20180802/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/teachable_machine_boilerplate_20180818/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Instruction_20181213/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/ShowCode_20181216/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/ESP8266_20190128/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/WebBit_20190225/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/Telegram_20200809/blockly.json');
                  Code.customTab.$__remove__('https://fustyles.github.io/webduino/LineBot_20181027/blockly.json');

                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
            this.getField('func').setValue("");
          }
      }
    }
  }
};    

Blockly.Blocks['basic_irrecv_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBBIT_IRRECV_WHEN)
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown('pwm')), "pin_")
      .appendField(Blockly.Msg.WEBBIT_IRRECV_ON);
    this.appendStatementInput("on_")
      .appendField(Blockly.Msg.WEBBIT_IRRECV_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.WEBBIT_BASIC_IR_HELPURL);
  }
};

Blockly.Blocks['basic_irrecv_ac_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBBIT_IRRECV_AC_WHEN)
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown('pwm')), "pin_")
      .appendField(Blockly.Msg.WEBBIT_IRRECV_ON);
    this.appendStatementInput("on_")
      .appendField(Blockly.Msg.WEBBIT_IRRECV_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.WEBBIT_BASIC_IR_HELPURL);
  }
};

Blockly.Blocks['basic_irrecv_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBBIT_IRRECV_CODE);
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.WEBBIT_BASIC_IR_HELPURL);
  }
};

Blockly.Blocks['basic_irled_launch'] = {
  init: function () {
    /**
     * 相容原本只有固定腳位 2，之後才新增可選腳位功能
     */
    let pin_dropdown = new Blockly.FieldDropdown(Code.getPinDropdown('pwm'));
    pin_dropdown.setValue("2");

    this.appendValueInput("code_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBBIT_IRLED_LAUNCH)
      .appendField(pin_dropdown, "pin_")
      .appendField(Blockly.Msg.WEBBIT_IRLED_LAUNCHCODE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.WEBBIT_BASIC_IR_HELPURL);
  }
};



Blockly.Blocks['basic_ultrasonic_distance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_NEW_TRIG)
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown('digital')), "trig_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_NEW_ECHO)
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown('digital')), "echo_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_DISTANCE);
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(60);
    this.setHelpUrl(Blockly.Msg.WEBBIT_BASIC_ULTRASONIC_HELPURL);
  }
};



Blockly.Blocks['basic_servo_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SERVO)
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown('pwm')), "pin_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_ANGLE)
      .appendField(new Blockly.FieldAngle("90"), "angle_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(60);
    this.setHelpUrl(Blockly.Msg.WEBBIT_BASIC_SERVO_HELPURL);
  }
};

Blockly.Blocks['basic_servo_angle_custom'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SERVO)
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown('pwm')), "pin_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_ANGLE);
    this.appendValueInput("angle_");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(60);
    this.setHelpUrl(Blockly.Msg.WEBBIT_BASIC_SERVO_HELPURL);
  }
};




Blockly.Blocks['basic_sound_status'] = {
  pinDropdown: () => {
    /*
      Remove pin 0, 1, 2 as they will conflict with LED matrix
    */
    return Code.getPinDropdown('digital').filter(pin => parseInt(pin[0]) > 2);
  },
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SOUND)
      .appendField(new Blockly.FieldDropdown(this.pinDropdown()), "pin_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SOUND_STATUS_DETECTED, "detected"],
        [Blockly.Msg.WEBDUINO_SOUND_STATUS_ENDED, "ended"]
      ]), "status_")
      .appendField(Blockly.Msg.WEBDUINO_SOUND_DETECTED);
    this.appendStatementInput("callback_")
      .appendField(Blockly.Msg.WEBDUINO_SOUND_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(60);
    this.setHelpUrl('');
  }
};



Blockly.Blocks['basic_photocell_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_PIN)
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown('analog')), "pin_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_VAL);
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
