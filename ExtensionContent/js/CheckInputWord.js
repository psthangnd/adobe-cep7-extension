//CheckInputWord.js

function CheckInputWord() {
    return submitEventFunc();
}

function submitEventFunc() {
            var f = document.forms[0];
            var txtboxValue = '';
            var prevStr, nextstr, tmpstr;
            var indx1,vlength;
            var hyphenMac = String.fromCharCode(8722);
            var hyphenW = '－';
            var ChouOn = 'ー';
            var NumListW = '１２３４５６７８９０／＊－＋';
            var NumList = '1234567890/*-+';
            var KanaList = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゐゆゑよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉゃゅょっゎアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤヰユヱヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォャュョッヮヴｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟｧｨｩｪｫｬｭｮｯｳﾞ';
            for (var i = 0; i < f.elements.length; i++) {
                if ((f.elements[i].type == 'text') || (f.elements[i].type == 'hidden') || (f.elements[i].type == 'textarea') || (f.elements[i].type == 'password')) {
                    txtboxValue = f.elements[i].value;
                    vlength = txtboxValue.length;
                    if (vlength > 0)
                    {
                        do {
                            indx1 = txtboxValue.indexOf(hyphenMac);
                            if (indx1 == -1) {
                                break;
                            }
                            if (indx1 == 0) {
                                txtboxValue = hyphenW + txtboxValue.substr(1);
                                continue;
                            }
                            if (indx1 < vlength-1) {
                                nextstr = txtboxValue.substr(indx1 + 1, 1);
                                if (NumListW.indexOf(nextstr) > -1) {
                                    txtboxValue = txtboxValue.substring(0, indx1) + hyphenW + txtboxValue.substr(indx1 + 1);
                                    continue;
                                }
                                if (NumList.indexOf(nextstr) > -1) {
                                    txtboxValue = txtboxValue.substring(0, indx1) + '-' + txtboxValue.substr(indx1 + 1);
                                    continue;
                                }
                            }

                            prevStr = txtboxValue.substr(indx1 - 1, 1);
                            if (KanaList.indexOf(prevStr) > -1) {
                                txtboxValue = txtboxValue.substring(0, indx1) + ChouOn + txtboxValue.substr(indx1 + 1);
                            }
                            else { 
                                txtboxValue = txtboxValue.substring(0, indx1) + hyphenW + txtboxValue.substr(indx1 + 1);
                            }

                        } while (true)
                        f.elements[i].value = txtboxValue;
                    }
                }
            }
        }


        function addEventForm_submit() {
            var f = document.forms[0];
            if (f.addEventListener) {
                f.addEventListener("submit", submitEventFunc, false);//IE11/chrome/FF36
            } else if (document.forms[0].attachEvent) {
                f.attachEvent("submit", submitEventFunc);//IE
            } else {
                f.submit = submitEventFunc;
            }
        }

    addEventForm_submit();
