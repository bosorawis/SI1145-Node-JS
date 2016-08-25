
(function() {
    /******COMMANDS**************/
    var SI1145_PARAM_QUERY            = 0x80;
    var SI1145_PARAM_SET              = 0xA0;
    var SI1145_NOP                    = 0x0;
    var SI1145_RESET                  = 0x01;
    var SI1145_BUSADDR                = 0x02;
    var SI1145_PS_FORCE               = 0x05;
    var SI1145_ALS_FORCE              = 0x06;
    var SI1145_PSALS_FORCE            = 0x07;
    var SI1145_PS_PAUSE               = 0x09;
    var SI1145_ALS_PAUSE              = 0x0A;
    var SI1145_PSALS_PAUSE            = 0xB;
    var SI1145_PS_AUTO                = 0x0D;
    var SI1145_ALS_AUTO               = 0x0E;
    var SI1145_PSALS_AUTO             = 0x0F;
    var SI1145_GET_CAL                = 0x12;
    /*********Parameters*************/
    var SI1145_PARAM_I2CADDR           = 0x00;
    var SI1145_PARAM_CHLIST            = 0x01;
    var SI1145_PARAM_CHLIST_ENUV       = 0x80;
    var SI1145_PARAM_CHLIST_ENAUX      = 0x40;
    var SI1145_PARAM_CHLIST_ENALSIR    = 0x20;
    var SI1145_PARAM_CHLIST_ENALSVIS   = 0x10;
    var SI1145_PARAM_CHLIST_ENPS1      = 0x01;
    var SI1145_PARAM_CHLIST_ENPS2      = 0x02;
    var SI1145_PARAM_CHLIST_ENPS3      = 0x04;
    var SI1145_PARAM_PSLED12SEL         = 0x02;
    var SI1145_PARAM_PSLED12SEL_PS2NONE = 0x00;
    var SI1145_PARAM_PSLED12SEL_PS2LED1 = 0x10;
    var SI1145_PARAM_PSLED12SEL_PS2LED2 = 0x20;
    var SI1145_PARAM_PSLED12SEL_PS2LED3 = 0x40;
    var SI1145_PARAM_PSLED12SEL_PS1NONE = 0x00;
    var SI1145_PARAM_PSLED12SEL_PS1LED1 = 0x01;
    var SI1145_PARAM_PSLED12SEL_PS1LED2 = 0x02;
    var SI1145_PARAM_PSLED12SEL_PS1LED3 = 0x04;
    var SI1145_PARAM_PSLED3SEL              = 0x03;
    var SI1145_PARAM_PSENCODE               = 0x05;
    var SI1145_PARAM_ALSENCODE              = 0x06;
    var SI1145_PARAM_PS1ADCMUX              = 0x07;
    var SI1145_PARAM_PS2ADCMUX              = 0x08;
    var SI1145_PARAM_PS3ADCMUX              = 0x09;
    var SI1145_PARAM_PSADCOUNTER            = 0x0A;
    var SI1145_PARAM_PSADCGAIN              = 0x0B;
    var SI1145_PARAM_PSADCMISC              = 0x0C;
    var SI1145_PARAM_PSADCMISC_RANGE        = 0x20;
    var SI1145_PARAM_PSADCMISC_PSMODE       = 0x04;
    var SI1145_PARAM_ALSIRADCMUX            = 0x0E;
    var SI1145_PARAM_AUXADCMUX              = 0x0F;
    var SI1145_PARAM_ALSVISADCOUNTER        = 0x10;
    var SI1145_PARAM_ALSVISADCGAIN          = 0x11;
    var SI1145_PARAM_ALSVISADCMISC          = 0x12;
    var SI1145_PARAM_ALSVISADCMISC_VISRANGE = 0x20;
    var SI1145_PARAM_ALSIRADCOUNTER         = 0x1D;
    var SI1145_PARAM_ALSIRADCGAIN           = 0x1E;
    var SI1145_PARAM_ALSIRADCMISC           = 0x1F;
    var SI1145_PARAM_ALSIRADCMISC_RANGE     = 0x20;
    var SI1145_PARAM_ADCCOUNTER_511CLK      = 0x70;
    var SI1145_PARAM_ADCMUX_SMALLIR         = 0x00;
    var SI1145_PARAM_ADCMUX_LARGEIR         = 0x03;
    /*********REGISTERS**************/  
    var SI1145_REG_PARTID           = 0x00;
    var SI1145_REG_REVID            = 0x01;
    var SI1145_REG_SEQID            = 0x02;
    var SI1145_REG_INTCFG           = 0x03;
    var SI1145_REG_INTCFG_INTOE     = 0x01;
    var SI1145_REG_INTCFG_INTMODE   = 0x02;
    var SI1145_REG_IRQEN                = 0x04;
    var SI1145_REG_IRQEN_ALSEVERYSAMPLE = 0x01;
    var SI1145_REG_IRQEN_PS1EVERYSAMPLE = 0x04;
    var SI1145_REG_IRQEN_PS2EVERYSAMPLE = 0x08;
    var SI1145_REG_IRQEN_PS3EVERYSAMPLE = 0x10;
    var SI1145_REG_IRQMODE1         = 0x05;
    var SI1145_REG_IRQMODE2         = 0x06;
    var SI1145_REG_HWKEY            = 0x07;
    var SI1145_REG_MEASRATE0        = 0x08;
    var SI1145_REG_MEASRATE1        = 0x09;
    var SI1145_REG_PSRATE           = 0x0A;
    var SI1145_REG_PSLED21          = 0x0F;
    var SI1145_REG_PSLED3           = 0x10;
    var SI1145_REG_UCOEFF0          = 0x13;
    var SI1145_REG_UCOEFF1          = 0x14;
    var SI1145_REG_UCOEFF2          = 0x15;
    var SI1145_REG_UCOEFF3          = 0x16;
    var SI1145_REG_PARAMWR          = 0x17;
    var SI1145_REG_COMMAND          = 0x18;
    var SI1145_REG_RESPONSE         = 0x20;
    var SI1145_REG_IRQSTAT          = 0x21;
    var SI1145_REG_IRQSTAT_ALS      = 0x01;
    var SI1145_REG_ALSVISDATA0      = 0x22;
    var SI1145_REG_ALSVISDATA1      = 0x23;
    var SI1145_REG_ALSIRDATA0       = 0x24;
    var SI1145_REG_ALSIRDATA1       = 0x25;
    var SI1145_REG_PS1DATA0         = 0x26;
    var SI1145_REG_PS1DATA1         = 0x27;
    var SI1145_REG_PS2DATA0         = 0x28;
    var SI1145_REG_PS2DATA1         = 0x29;
    var SI1145_REG_PS3DATA0         = 0x2A;
    var SI1145_REG_PS3DATA1         = 0x2B;
    var SI1145_REG_UVINDEX0         = 0x2C;
    var SI1145_REG_UVINDEX1         = 0x2D;
    var SI1145_REG_PARAMRD          = 0x2E;
    var SI1145_REG_CHIPSTAT         = 0x30;
    var SI1145_ADDR                 = 0x60;

    Adafruit_SI1145 = (function(){
        Adafruit_SI1145.prototype.address = 0x60;
        Adafruit_SI1145.prototype.device  = '/dev/i2c-1';
        Adafruit_SI1145.prototype.log.err = true;

        function Adafruit_SI1145(address, device, log_err){
            this.address = address;
            this.device = device;
            this.log_err = log_err;
            this.wire = new Wire(this.address,{
                device: this.device
            });
        }
       
        Adafruit_SI1145.prototype._readParam = function(param, callback){
            this.wire.writeBytes(SI1145_REG_COMMAND, param | SI1145_PARAM_QUERY);
            return this.wire.readBytes(SI1145_REG_PARAMRD, 1, callback);
        }

        Adafruit_SI1145.prototype._sendParam = function(param, value, callback){
            this.wire.writeBytes(SI1145_REG_PARAMWR, value);
            this.wire.writeBytes(SI1145_REG_COMMAND, param | SI1145_PARAM_SET);
            return this.wire.readBytes(SI1145_REG_PARAMRD, 1, callback);
        }


        Adafruit_SI1145.prototype._read = function(cmd, length, callback){
            return this.wire.readBytes(cmd, length, callback); 
        }

        Adafruit_SI1145.prototype._send = function(cmd, values){
            return this.wire.writeBytes(cmd, values); 
        }


        return Adafruit_SI1145;
    })();
    module.exports = Adafruit_SI1145;
}).call(this);
