import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


const Bg_m_svg = () => {

    let path2 = useRef(null);
    let path10 = useRef(null);
    let path11 = useRef(null);
    let path12 = useRef(null);
    let path13 = useRef(null);
    let path14 = useRef(null);
    let path15 = useRef(null);
    let path16 = useRef(null);
    let path17 = useRef(null);
    let path18 = useRef(null);
    let path19 = useRef(null);
    let path20 = useRef(null);
    let path21 = useRef(null);

    useEffect(() => {

        gsap.fromTo(path2, { x: 1000 }, { x: -500, repeat: -1, yoyo: true, duration: 15,delay:0 })
        gsap.fromTo(path10, { x: -1000 }, { x: 500, repeat: -1, yoyo: true, duration: 10 ,delay:1.2})

        gsap.fromTo(path11, { x: 1000 }, { x: -500, repeat: -1, yoyo: true, duration: 10 ,delay:1.4})
        gsap.fromTo(path12, { x: -1000 }, { x: 500, repeat: -1, yoyo: true, duration: 15,delay:1.6 })

        gsap.fromTo(path13, { x: -1000 }, { x: 500, repeat: -1, yoyo: true, duration: 15,delay:0 })
        gsap.fromTo(path14, { x: 1000 }, { x: -500, repeat: -1, yoyo: true, duration: 10,delay:0.5 })

        gsap.fromTo(path15, { x: 1000 }, { x: -500, repeat: -1, yoyo: true, duration: 15 ,delay:0.2})
        gsap.fromTo(path16, { x: -1000 }, { x: 500, repeat: -1, yoyo: true, duration: 15,delay:0.4 })

        gsap.fromTo(path17, { x: -1000 }, { x: 500, repeat: -1, yoyo: true, duration: 10,delay:1.2 })
        gsap.fromTo(path18, { x: -1000 }, { x: 500, repeat: -1, yoyo: true, duration: 15,delay:0 })

        gsap.fromTo(path19, { x: 1000 }, { x: -500, repeat: -1, yoyo: true, duration: 10,delay:1.4 })
        gsap.fromTo(path20, { x: 1000 }, { x: -500, repeat: -1, yoyo: true, duration: 10,delay:1.6 })

        gsap.fromTo(path21, { x: -1000 }, { x: -1000, repeat: -1, yoyo: true, duration: 15,delay:1 })


    }, []);

    return (
        <svg
            className='bg-mobile'
            version="1.1"
            id="svg1"
            width="381"
            height="815"
            viewBox="0 0 381 815"
            xmlns="http="//www.w3.org/2000/svg"
        >
            <defs
                id="defs1" />
            {/* -------------------------------------------------- */}
            {/* ----------Text group-------------------------- */}
            {/* ------------------------------------------------ */}
            <g
                id="TEXT">
                <path
                    id="text7"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="99.3813px"
                    line-height="0"
                    // fontFamily="Impact"
                    // -inkscape-font-specification="Impact"
                    letterSpacing="29.5536px"
                    fill="#6d68fa"
                    fillOpacity="0.211594"
                    stroke="none"
                    strokeWidth="10.3717"
                    d="m 262.92375,56.386986 6.6e-4,-62.7753638 28.67213,-0.8510661 c 0.0845,0.6103038 0.16394,1.1294744 0.24936,1.7558655 l 2.81431,19.9937934 2.7829,-21.923201 28.51738,-0.8464725 -0.002,64.6468535 -17.85653,4.8e-4 3.5e-4,-53.0403741 -7.13453,53.0395571 -12.66531,1.31e-4 -7.52162,-51.8263319 0.001,51.8255899 z"
                    transform="matrix(0.03054436,0.97106424,1.0290291,-0.02444443,0,0)"

                />
                <path
                    id="text6"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="214.024px"
                    line-height="0"
                    fontFamily="Impact"
                    //    -inkscape-font-specification="Impact"
                    letterSpacing="63.6455px"
                    fill="#6d68fa"
                    fillOpacity="0.211594"
                    stroke="none"
                    strokeWidth="22.3361"
                    d="m 300.26338,613.24846 v 169.19031 h 38.45671 V 670.82841 l 16.19763,111.61036 h 9.54015 V 662.76261 l -1.90991,-13.5651 c -1.88107,-13.7945 -3.65842,-25.77734 -5.33048,-35.94905 z"
                    transform="scale(1.0420604,0.95963729)"

                />
                <path
                    id="text8"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="200.13px"
                    line-height="0"
                    fontFamily="Impact"
                    //    -inkscape-font-specification="Impact"
                    letterSpacing="59.5136px"
                    fill="#6d68fa"
                    fillOpacity="0.211594"
                    stroke="none"
                    strokeWidth="14.9411"
                    d="m 26.382815,527.77344 c -6.99053,0 -12.955352,1.14236 -17.8953272,3.42593 -3.5416381,1.60376 -6.3761965,3.66999 -8.52850342,6.184 v 42.97086 c 0.84301761,1.18363 1.74909232,2.23369 2.72593552,3.13392 2.3767802,2.19037 7.2238971,5.70907 14.5406521,10.55584 7.316754,4.80017 11.906653,8.22585 13.770795,10.2764 1.817538,2.05056 2.727332,6.40789 2.727332,13.0722 0,3.02923 -0.489781,5.31255 -1.468456,6.85046 -0.932071,1.53792 -2.376763,2.30678 -4.334112,2.30678 -1.957348,0 -3.332272,-0.60607 -4.124532,-1.81775 -0.745656,-1.2117 -1.119156,-3.93829 -1.119156,-8.17921 v -13.7708 H -0.04101562 v 30.88928 c 2.01073792,2.92443 4.95649272,5.44991 8.87780382,7.55885 5.5924238,2.98263 12.3261058,4.47383 20.2021028,4.47383 7.176944,0 13.468754,-1.28189 18.874763,-3.84509 5.40601,-2.6098 9.040998,-5.82477 10.90514,-9.64626 1.910745,-3.82149 2.867053,-9.76445 2.867053,-17.82686 0,-11.09164 -1.701911,-19.13048 -5.103969,-24.11706 -3.402058,-4.98658 -11.650202,-11.37141 -24.745795,-19.1542 -4.567146,-2.70301 -7.340249,-5.00959 -8.318923,-6.92033 -1.025278,-1.91075 -1.538317,-4.75362 -1.538317,-8.52851 0,-2.93602 0.443269,-5.12632 1.328736,-6.57103 0.932072,-1.4447 2.283738,-2.16705 4.054673,-2.16705 1.631123,0 2.795342,0.5363 3.494395,1.60818 0.699053,1.07188 1.049297,3.56451 1.049297,7.4792 v 8.38879 h 27.33201 v -4.47383 c 0,-8.99448 -0.885142,-15.35606 -2.656076,-19.08434 -1.724331,-3.7749 -5.28955,-6.89684 -10.69556,-9.36683 -5.359406,-2.46999 -11.860524,-3.70537 -19.503503,-3.70537 z" 

                    />
                    <text
                        fontStyle="normal"
                        fontVariant="normal"
                        fontWeight="normal"
                        fontStretch="normal"
                        fontSize="124.009px"
                        line-height="0"
                        // fontFamily="Impact"
                        //    -inkscape-font-specification="Impact"
                        letterSpacing="36.8772px"
                        fill="#6d68fa"
                        fillOpacity="0.211594"
                        stroke="none"
                        strokeWidth="12.9419"
                        x="221.53506"
                        y="193.56187"
                        id="text9"
                        transform="scale(1.1541748,0.86641989)">
                    <tspan
                        id="tspan9"
                        className='m_text_font'
                        x="221.53506"
                        y="193.56187"
                        fill="#6d68fa" fillOpacity="0.211594" strokeWidth="12.9419">U</tspan>
                </text>

                <text
                    fontStyle="normal" fontVariant="normal" fontWeight="normal" fontStretch="normal" fontSize="53.3333px" line-height="0" fontFamily="Impact"
                    letterSpacing="15.86px"
                    className='m_text_font'
                    fill="#6d68fa"
                    fillOpacity="0.211594"
                    stroke="none"
                    strokeWidth="5.566"
                    x="287.76132"
                    y="290.37186"
                    id="text10">
                    <tspan
                        id="tspan10"
                        className='m_text_font'
                        x="287.76132"
                        y="290.37186">T</tspan>
                </text>
            </g>

            {/* -------------------------------------------------- */}
            {/* ----------obj group-------------------------- */}
            {/* ------------------------------------------------ */}

            <g
                id="OBJ"
                transform="translate(3.2282358)"
                opacity="0.6">
                <path
                    id="rect2"
                    ref={(el) => { path2 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.58689652,0,0,0.58689652,282.81763,307.00661)"

                />
                <path
                    id="path10"
                    ref={(el) => { path10 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.58689652,0,0,0.58689652,282.81763,307.00661)"

                />
                <path
                    id="path11"
                    ref={(el) => { path11 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.58689652,0,0,0.58689652,2.81763,487.00661)"

                />
                <path
                    id="path12"
                    ref={(el) => { path12 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.58689652,0,0,0.58689652,2.81763,167.00661)"

                />
                <path
                    id="path13"
                    ref={(el) => { path13 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.36294675,0,0,0.36294675,46.093009,326.8875)"

                />
                <path
                    id="path14"
                    ref={(el) => { path14 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.36294675,0,0,0.36294675,306.09301,426.8875)"

                />
                <path
                    id="path15"
                    ref={(el) => { path15 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.36294675,0,0,0.36294675,186.09301,146.8875)"

                />
                <path
                    id="path16"
                    ref={(el) => { path16 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.16887895,0,0,0.16887895,148.93135,264.11565)"

                />
                <path
                    id="path17"
                    ref={(el) => { path17 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.16887895,0,0,0.16887895,248.93135,104.11565)"

                />
                <path
                    id="path18"
                    ref={(el) => { path18 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.16887895,0,0,0.16887895,288.93135,304.11565)"

                />
                <path
                    id="path19"
                    ref={(el) => { path19 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.16887895,0,0,0.16887895,288.93135,544.11565)"

                />
                <path
                    id="path20"
                    ref={(el) => { path20 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.16887895,0,0,0.16887895,328.93135,684.11565)"

                />
                <path
                    id="path21"
                    ref={(el) => { path21 = el; }}
                    opacity="1" fill="#6d68fa" fillOpacity="1" stroke="#eef0fe" strokeWidth="1.08484" strokeOpacity="1"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(0.34206067,0,0,0.34206067,66.39848,68.741636)"

                />
            </g>
        </svg >
    )
}

export default Bg_m_svg;