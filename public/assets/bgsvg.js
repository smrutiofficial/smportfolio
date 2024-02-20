import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Bgsvg = () => {

    let path2 = useRef(null);
    let path3 = useRef(null);
    let path4 = useRef(null);
    let path5 = useRef(null);
    let path6 = useRef(null);
    let path7 = useRef(null);
    let path8 = useRef(null);
    let path9 = useRef(null);
    let path10 = useRef(null);
    let path11 = useRef(null);
    let path12 = useRef(null);

    const primary="#7471B9";
    const r_opacity="0.5";

    useEffect(() => {
        gsap.fromTo(
            path2,
            { x: -50 },
            { x: 2000, duration: 10,repeat:-1,yoyo:true}
        )
        gsap.fromTo(
            path3,
            { x: 1000 },
            { x: -1000, duration: 10,repeat:-1,yoyo:true}
        )


        gsap.fromTo(
            path4,
            { x: -50 },
            { x: 2000, duration: 7,repeat:-1,yoyo:true}
        )
        gsap.fromTo(
            path5,
            { x: -50 },
            { x: 2000, duration: 8,repeat:-1,yoyo:true}
        )

        gsap.fromTo(
            path6,
            { x: -1000 },
            { x: 2000, duration: 20,repeat:-1,yoyo:true}
        )
        gsap.fromTo(
            path7,
            { x: 1000 },
            { x: -1000, duration: 11,repeat:-1,yoyo:true}
        )

        gsap.fromTo(
            path8,
            { x: +1000 },
            { x: -1000, duration: 10,repeat:-1,yoyo:true}
        )
        gsap.fromTo(
            path9,
            { x: +1000 },
            { x: -1000, duration: 7,repeat:-1,yoyo:true}
        )

        gsap.fromTo(
            path10,
            { x: -50 },
            { x: 1000, duration: 8,repeat:-1,yoyo:true}
        )

    }, []);



    return (
        <svg
            className='bgrock'
            version="1.1"
            id="svg1"
            width="1905.1497"
            height="1068.1647"
            viewBox="0 0 1905.1497 1068.1647"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs
                id="defs1">
                <rect
                    x="846.41888"
                    y="870.03345"
                    width="175.95248"
                    height="68.316025"
                    id="rect1" />
            </defs>

            {/* ===========================================================================================
            =========================================================================================
            ========================================================================================= */}
            <g
                id="TEXTBG"
                display="inline"
                opacity="0.2"
                mix-blend-mode="normal"
                transform="translate(-15.828921,-14.075554)">
                <path
                    id="text1"

                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="53.3333px"
                    fontFamily="Impact"
                    // -inkscape-font-specification:Impact"
                    white-space="pre"
                    shape-inside="url(#rect1)"
                    opacity="1"
                    fill="#6e68fafe"
                    fillOpacity="1"
                    stroke="none"
                    strokeWidth="3"
                    d="m 848.60539,881.26283 v 28.06916 h 10.96354 V 888.4763 c 1.19792,0 2.01405,0.1302 2.44807,0.39062 0.43403,0.24306 0.71169,0.63367 0.83322,1.17186 0.12152,0.53819 0.18231,1.76219 0.18231,3.67191 v 15.6213 h 10.96354 v -13.19942 c 0,-3.99305 -0.12157,-6.66674 -0.36463,-8.0209 -0.24305,-1.37153 -0.85074,-2.61277 -1.82296,-3.72388 -0.97222,-1.11111 -2.39583,-1.90979 -4.27083,-2.3959 -1.85763,-0.48611 -5.43391,-0.72906 -10.72904,-0.72906 z"
                    transform="matrix(9.5451316,0,0,9.5451316,-7487.4427,-7597.4533)" />
                <text
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="616.445px"
                    fontFamily="Impact"
                    // -inkscape-font-specification:Impact"
                    opacity="1"
                    fill="#fbe4c6"
                    fillOpacity="1"
                    stroke="none"
                    strokeWidth="34.6754"
                    x="841.90912"
                    y="1095.7882"
                    id="text2"

                    transform="scale(1.0517919,0.95075842)">

                    <tspan
                        id="tspan1"
                        className='tw-text'
                        x="841.90912"
                        y="1095.7882"
                        fill="#6e68fafe"
                        fillOpacity="1"
                        strokeWidth="34.6754"
                    >E</tspan>
                </text>
                <text
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="280.292px"
                    fontFamily="Impact"
                    // -inkscape-font-specification:Impact"
                    opacity="1"
                    fill="#fbe4c6"
                    fillOpacity="1"
                    stroke="none"
                    strokeWidth="15.7659"
                    x="136.77422"
                    y="235.65404"
                    id="text3">

                    <tspan
                        id="tspan2"
                        className='tw-text'
                        x="136.77422"
                        y="235.65404"
                        fill="#6e68fafe"
                        fillOpacity="1"
                        strokeWidth="15.7659"
                    >V</tspan>
                </text>
                <text
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="142.823px"
                    fontFamily="Impact"
                    // -inkscape-font-specification:Impact"
                    opacity="1"
                    fill="#febebe"
                    fillOpacity="1"
                    stroke="none"
                    strokeWidth="8.0338"
                    x="-1602.2704"
                    y="241.49312"
                    id="text4"
                    transform="scale(-1.0447706,0.95714792)">
                    <tspan
                        id="tspan3"
                        className='tw-text'
                        x="-1602.2704"
                        y="241.49312"
                        fill="#6e68fafe"
                        fillOpacity="1"
                        strokeWidth="8.0338">E</tspan>
                </text>
                <text
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="251.602px"
                    fontFamily="Impact"
                    // -inkscape-font-specification:Impact"
                    opacity="1"
                    fill="#7067fa"
                    fillOpacity="0.212865"
                    stroke="none"
                    strokeWidth="14.1526"
                    x="579.8775"
                    y="417.66623"
                    id="text5">
                    <tspan
                        id="tspan4"
                        className='tw-text'
                        x="579.8775"
                        y="417.66623"
                        fill="#6e68fafe"
                        fillOpacity="1"
                        strokeWidth="14.1526"
                    >L</tspan>
                </text>
                <path
                    id="text6"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="1196.9px"
                    fontFamily="Impact"
                    // -inkscape-font-specification:Impact;
                    opacity="1"
                    mix-blend-mode="normal"
                    fill="#6e68fafe"
                    fillOpacity="1"
                    stroke="none"
                    strokeWidth="67.3254"
                    d="m 1897.7988,908.76367 c -20.3108,-0.003 -42.3492,0.16523 -66.1133,0.50391 l -161.8671,2.30664 c -97.3937,1.38803 -165.5369,4.69765 -204.4278,9.92773 -38.8907,5.23014 -74.7202,20.35004 -107.4844,45.36524 -32.7639,25.01507 -57.0375,57.89951 -72.8222,98.64841 -1.87,4.6652 -3.5779,9.4293 -5.2051,14.2422 h 641.0996 V 908.98047 c -7.8476,-0.0602 -14.7351,-0.21562 -23.1797,-0.2168 z" />
                <text
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="180.255px"
                    // fontFamily="Impact"
                    // -inkscape-font-specification:Impact"
                    opacity="1"
                    fill="#6e68fafe"
                    fillOpacity="1"
                    stroke="none"
                    strokeWidth="10.1394"
                    x="665.90424"
                    y="-1638.8674"
                    id="text7"
                    transform="rotate(90.125495)">
                    <tspan
                        id="tspan6"
                        className='tw-text'
                        x="665.90424"
                        y="-1638.8674"
                        fill="#6e68fafe"
                        fillOpacity="1"
                        strokeWidth="10.1394"
                    >P</tspan>
                </text>
                <text
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="211.513px"
                    fontFamily="Impact;"
                    // -inkscape-font-specification:Impact
                    opacity="1"
                    fill="#6e68fafe"
                    fillOpacity="1"
                    stroke="none"
                    strokeWidth="11.8976"
                    x="-939.27759"
                    y="189.26527"
                    id="text8"
                    transform="rotate(-89.616484)">
                    <tspan
                        id="tspan7"
                        className='tw-text'
                        x="-939.27759"
                        y="189.26527"
                        fill="#6e68fafe"
                        fillOpacity="1"
                        strokeWidth="11.8976"
                    >R</tspan>
                </text>
            </g>
            {/* ====================================================================================
            =====================================================================================
            ===================================================================================== */}
            <g
                id="OBJ"
                opacity={r_opacity}>
                <path
                    id="rect2"
                    ref={(el) => { path2 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="1.08484"
                    d="m 19.300673,88.773881 -4.675167,8.158675 v 0.362769 h 46.011662 v 10.977625 h 41.796412 l 11.9755,-19.499069 z m 99.787187,0 -5.45806,8.886279 h 17.90588 l 4.97541,-8.52196 V 88.773881 Z M 20.646844,98.80376 19.14461,104.35278 h 36.936763 l 1.53479,-5.54902 z"
                    transform="matrix(2.6270802,0,0,1.8878935,1456.6498,607.57657)" />
                <path
                    ref={(el) => { path3 = el; }}
                    id="path3"
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="2.41597"
                    d="m 689.3542,95.1722 -12.282,15.40271 v 0.68487 h 120.8763 v 20.72459 H 907.751 L 939.2116,95.1722 Z m 262.149,0 -14.3388,16.77635 h 47.0402 L 997.2754,95.86 v -0.6878 z m -258.6125,18.93535 -3.9465,10.47596 h 97.0359 l 4.032,-10.47596 z" /><path

                    id="path4"
                    ref={(el) => { path4 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="1.50903"
                    d="m 319.0658,260.47822 -7.67138,9.62058 v 0.42777 h 75.49975 v 12.94466 h 68.58302 l 19.65039,-22.99301 z m 163.73915,0 -8.95606,10.47857 h 29.38146 l 8.16407,-10.04896 v -0.42961 z m -161.53024,11.82709 -2.465,6.54331 h 60.60895 l 2.51841,-6.54331 z" /><path

                    id="path5"
                    ref={(el) => { path5 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="1.50903"
                    d="m 959.0658,500.47822 -7.67138,9.62058 v 0.42777 h 75.49978 v 12.94466 h 68.583 l 19.6504,-22.99301 z m 163.7391,0 -8.956,10.47857 h 29.3814 l 8.1641,-10.04896 v -0.42961 z m -161.53019,11.82709 -2.465,6.54331 h 60.60899 l 2.5184,-6.54331 z" /><path

                    id="path6"
                    ref={(el) => { path6 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="0.905418"
                    d="m 275.99725,820.47822 -4.60283,5.77235 v 0.25666 h 45.29987 v 7.7668 h 41.14981 l 11.79024,-13.79581 z m 98.24347,0 -5.3736,6.28714 h 17.62884 l 4.89846,-6.02937 v -0.25777 z m -96.91813,7.09625 -1.479,3.92599 h 36.3654 l 1.51104,-3.92599 z" /><path

                    id="path7"
                    ref={(el) => { path7 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="0.905418"
                    d="m 1675.9972,280.47822 -4.6028,5.77235 v 0.25666 h 45.2999 v 7.7668 h 41.1498 l 11.7902,-13.79581 z m 98.2435,0 -5.3736,6.28714 h 17.6289 l 4.8984,-6.02937 v -0.25777 z m -96.9181,7.09625 -1.479,3.92599 h 36.3654 l 1.511,-3.92599 z" /><path

                    id="path8"
                    ref={(el) => { path8 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="0.452709"
                    d="m 713.6958,680.47822 -2.3014,2.88617 v 0.12833 h 22.64995 v 3.88341 h 20.5749 l 5.8951,-6.89791 z m 49.12175,0 -2.6868,3.14357 h 8.81445 l 2.4492,-3.01468 v -0.12889 z m -48.45905,3.54812 -0.7395,1.963 h 18.1827 l 0.7555,-1.963 z" /><path

                    id="path9"
                    ref={(el) => { path9 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="0.452709"
                    d="m 473.6958,920.47822 -2.3014,2.88617 v 0.12833 h 22.64995 v 3.88341 h 20.5749 l 5.8951,-6.89791 z m 49.12175,0 -2.6868,3.14357 h 8.81445 l 2.4492,-3.01468 v -0.12889 z m -48.45905,3.54812 -0.7395,1.963 h 18.1827 l 0.7555,-1.963 z" /><path

                    id="path10"
                    ref={(el) => { path10 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="2.41597"
                    d="m -0.79296875,1035.1719 v 16.0879 H 97.949219 v 16.1953 H 211.62305 l 27.58789,-32.2832 z m 252.29687875,0 -14.33985,16.7773 h 47.04102 l 13.07031,-16.0898 v -0.6875 z m -252.29687875,18.9355 v 10.4766 H 85.980469 l 4.03125,-10.4766 z" /><path

                    id="path11"
                    ref={(el) => { path11 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="0.905418"
                    d="m 1775.9972,0.47822 -4.6028,5.77235 v 0.25666 h 45.2999 v 7.7668 h 41.1498 l 11.7902,-13.79581 z m 98.2435,0 -5.3736,6.28714 h 17.6289 l 4.8984,-6.02937 V 0.47822 Z m -96.9181,7.09625 -1.479,3.92599 h 36.3654 l 1.511,-3.92599 z" /><path

                    id="path12"
                    ref={(el) => { path12 = el; }}
                    opacity="1"
                    fill={primary}
                    fillOpacity="1"
                    strokeWidth="1.50903"
                    d="M -0.79296875,0.47851562 V 23.470703 H 15.476562 L 35.126953,0.47851562 Z m 43.59765675,0 -8.955079,10.47851538 h 29.38086 L 71.394531,0.90820312 v -0.4296875 z"

                />
            </g>
        </svg>
    )
}

export default Bgsvg;