var data = ["hello1", "hello2", "hello3", "hello4", "hello5"]

var numberOfMainFlexes = parseInt(data.length / 3)
if (data.length % 3 !== 0) mainFlexes += 1;

for (let i = 1; i <= numberOfMainFlexes; i++) {
    let id = "flxServiceLineC" + i;

    let flxServiceLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": id,
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxServiceLine.setDefaultUnit(kony.flex.DP);
    for (let j = 1; j <= data.length; j++) {
        if (j > 3) break;
        var flxServiceLineCF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "31dp",
            "id": "flxServiceLine" + "C" + i + "F" + j,
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4.5%",
            "isModalContainer": false,
            "skin": "sknFlxBorder6cbecc2pxRounded",
            "top": "5dp",
            "width": "30.50%",
            "zIndex": 1
        }, {}, {});
        flxServiceLineCF.setDefaultUnit(kony.flex.DP);
        var lblServiceLineCF = new kony.ui.Label({
            "centerY": "50%",
            "height": "75%",
            "id": "lblServiceLine" + "C" + i + "F" + j,
            "isVisible": true,
            "left": "5%",
            "maxNumberOfLines": 1,
            "skin": "sknLbl00000085",
            "text": "Antala Hou...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnServiceLineCF = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "defBtnFocus",
            "height": "10dp",
            "id": "btnServiceLine" + "C" + i + "F" + j,
            "isVisible": true,
            "right": "6%",
            "skin": "CopydefBtnNormal0c7e899df31844c",
            "width": "9dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});

        flxServiceLineCF.add(lblServiceLineCF, btnServiceLineCF);
        flxServiceLine.add(flxServiceLineCF);
    }
}