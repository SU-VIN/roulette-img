var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RouletteStyle } from "./styled";
import { useState, useEffect, useRef } from "react";
var Roulette = function (_a) {
    var _b = _a.imgUrl, imgUrl = _b === void 0 ? "/assets/bg_circle-" : _b, _c = _a.arrowImgUrl, arrowImgUrl = _c === void 0 ? "/assets/arrow.png" : _c, _d = _a.chunkRange, chunkRange = _d === void 0 ? { start: 2, end: 6 } : _d, _e = _a.chunk, chunk = _e === void 0 ? chunkRange.start : _e, _f = _a.arrowPosition, arrowPosition = _f === void 0 ? "up" : _f, winNumber = _a.winNumber, drivingType = _a.drivingType, _g = _a.buttonText, buttonText = _g === void 0 ? "start" : _g, _h = _a.buttonShape, buttonShape = _h === void 0 ? "round" : _h, buttonStyle = _a.buttonStyle, onWin = _a.onWin;
    var _j = useState(""), rouletteImg = _j[0], setRouletteImg = _j[1];
    var _k = useState(0), arrowRotate = _k[0], setArrowRotate = _k[1];
    var _l = useState(false), isDeactive = _l[0], setIsDeactive = _l[1];
    var rouletteRef = useRef(null);
    useEffect(function () {
        console.log(winNumber);
        createImgUrl();
        setArrowPosition();
    }, []);
    //룰렛 이미지 세팅
    var createImgUrl = function () {
        setRouletteImg("".concat(imgUrl).concat(chunk, ".png"));
    };
    //룰렛 핀 위치 세팅
    var setArrowPosition = function () {
        var arrowPositionMap = {
            up: 0,
            down: 180,
            left: 270,
            right: 90,
        };
        var rotate = arrowPositionMap[arrowPosition];
        setArrowRotate(rotate);
    };
    //api로 결과를 받아 시작할때
    useEffect(function () {
        console.log(winNumber);
        if (winNumber && drivingType === "async") {
            setWinNumber();
            setStopRoulettePosition();
        }
    }, [winNumber]);
    //버튼으로 시작할때
    var startonClickHandler = function () {
        if (drivingType === undefined) {
            setWinNumber();
            setStopRoulettePosition();
        }
    };
    //당첨번호 선택
    var setWinNumber = function () {
        if (winNumber === undefined) {
            winNumber = Math.floor(Math.random() * (chunk - 1 + 1)) + 1;
        }
        onWin === null || onWin === void 0 ? void 0 : onWin(winNumber);
    };
    //룰렛 정지 위치 지정
    var setStopRoulettePosition = function () {
        var min = (360 / chunk) * (winNumber - 1) - 360 / chunk / 2;
        var max = (360 / chunk) * (winNumber - 1) + 360 / chunk / 2;
        var deg = Math.floor(Math.random() * (max - min + 1)) + min + 3240;
        spinRoulette(deg);
    };
    var spinRoulette = function (deg) {
        setIsDeactive(true);
        var onAnimationEnd = function () {
            if (rouletteRef.current) {
                alert("\uCD95\uD558\uD569\uB2C8\uB2E4! ".concat(winNumber, "\uBC88 \uCE78\uC5D0 \uB2F9\uCCA8\uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
                rouletteRef.current.style.transition = "";
                rouletteRef.current.style.transform = "";
                setIsDeactive(false);
            }
            console.log(winNumber);
        };
        if (rouletteRef.current) {
            rouletteRef.current.addEventListener("transitionend", onAnimationEnd, {
                once: true,
            });
            rouletteRef.current.style.transition = "transform 4s ease-in-out";
            rouletteRef.current.style.transform = "rotate(".concat(-deg, "deg)");
        }
    };
    return (_jsxs("div", __assign({ className: RouletteStyle(buttonShape, arrowRotate) }, { children: [_jsxs("div", __assign({ className: "roulette-wrapper" }, { children: [_jsx("img", { ref: rouletteRef, className: "roulette", src: rouletteImg }), _jsx("img", { className: "arrow", src: arrowImgUrl })] })), buttonStyle ? (_jsx("div", { children: buttonStyle })) : (_jsx("button", __assign({ className: "start-button", onClick: startonClickHandler, disabled: isDeactive }, { children: buttonText })))] })));
};
export default Roulette;
