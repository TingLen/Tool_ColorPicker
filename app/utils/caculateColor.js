export const changeRgb = (hsv) => {
    let R,G,B,_h,_i,_1,_2,_3,_g,_r,_b
    if(hsv.S === 0){
        R = hsv.V *255
        G = hsv.V *255
        B = hsv.V *255
    }
    else {
        _h = hsv.H * 6
        if(_h === 6) _h = 0
        _i = Math.floor(_h)
        _1 = hsv.V * (1 - hsv.S)
        _2 = hsv.V * (1 - hsv.S * (_h -_i))
        _3 = hsv.V * (1 - hsv.S * (1 - (_h -_i)))

        if( _i === 0) {
            _r = hsv.V
            _g = _3
            _b = _1
        }
        else if(_i === 1){
            _r = _2
            _g = hsv.V
            _b = _1
        }
        else if(_i === 2){
            _r = _1
            _g = hsv.V
            _b = _3
        }
        else if(_i === 3){
            _r = _1
            _g = _2
            _b = hsv.V
        }
        else if(_i === 4){
            _r = _3
            _g = _1
            _b = hsv.V
        }
        else{
            _r = hsv.V
            _g = _1
            _b = _2
        }
        R = Math.round(_r * 255)
        G = Math.round(_g * 255)
        B = Math.round(_b * 255)

    }
    return [R,G,B]
}

export const changeHsl = (rgb) => {
    let r = rgb[0]
    let g = rgb[1]
    let b = rgb[2]
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min){ 
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Math.floor(h * 100) /100, Math.floor(s * 100) /100, Math.floor(l * 100) /100];
}

export const changeHex = (rgb) => {
    let _rgb = `RGB(${rgb[0]},${rgb[1]},${rgb[2]})`
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是rgb颜色表示
    if (/^(rgb|RGB)/.test(_rgb)) {
        var aColor = _rgb.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i=0; i<aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex.length < 2) {
                hex = '0' + hex;    
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = _rgb;    
        }
        return strHex;
    } else if (reg.test(_rgb)) {
        var aNum = _rgb.replace(/#/,"").split("");
        if (aNum.length === 6) {
            return _rgb;    
        } else if(aNum.length === 3) {
            var numHex = "#";
            for (var i=0; i<aNum.length; i+=1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    }
    return _rgb;
}