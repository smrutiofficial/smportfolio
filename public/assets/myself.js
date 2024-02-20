import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);



const Myself = () => {
    let name_l = useRef(null);
    let circle_l = useRef(null);

    const fill_color ="#373559"
    const stroke_color =""



    useEffect(() => {
        gsap.fromTo(
            name_l,
            {
                x: 280,
                duration: 3
            },
            {
                x: 1,
                duration: 3
            }
        )
        gsap.fromTo(
            circle_l,
            {
                x: -280,
                duration: 3
            },
            {
                x: 1,
                duration: 3
            }
        )

    }, []);
    return (
        <svg
            className='mj'
            version="1.1"
            id="svg1"
            width="2488"
            height="1384"
            viewBox="0 0 2488 1384"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs
                id="defs1">
                <filter
                    colorInterpolationFilters="sRGB"
                    id="filter1"
                    x="-0.16221491"
                    y="-0.16336688"
                    width="1.3244298"
                    height="1.3267338">
                    <feGaussianBlur
                        stdDeviation="55.6223 56.0173"
                        result="blur"
                        id="feGaussianBlur1" />
                </filter>
            </defs>
            <g
                id="g9"
                display="inline">
                <circle

                    fill="#7471B9"
                    strokeWidth="3"
                    filter="url(#filter1)"
                    id="path1"
                    cx="1244"
                    cy="862.75842"
                    r="411.47116"
                    transform="matrix(1.1639228,0,0,1.1710012,-217.91993,-234.88449)" />
                <ellipse
                    ref={(el) => { circle_l = el; }}
                    fill="#7471B9"
                    strokeWidth="3.50237"
                    id="circle1"
                    cx="1230"
                    cy="775.40668"
                    rx="478.92068"
                    ry="481.83322"
                />
                <text
                    ref={(el) => { name_l = el; }}
                    fontSize="304.566px"
                    line-height="0"
                    fontFamily="Impact"
                    // -inkscape-font-specification:Impact;
                    letterSpacing="50px"
                    fill={fill_color}
                    // opacity="1"
                    stroke={stroke_color}
                    strokeWidth="4.63647"
                    strokeDasharray="none"
                    strokeOpacity="1"
                    x="597"
                    y="952"
                    id="text1"
                    transform="scale(1.0475971,0.95456545)">
                    <tspan
                        id="tspan1"
                        x="220"
                        y="952"
                        fontStyle="normal"
                        fontVariant="normal"
                        fontStretch="normal"
                        lineheight="0"
                        letterSpacing="50px"
                        stroke={stroke_color}
                        strokeWidth="4.63647"
                        strokeDasharray="none"
                        strokeOpacity="1"
                    >SMRUTI</tspan>
                </text>
                <text
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    fontStretch="normal"
                    fontSize="53.3333px"
                    line-height="0"
                    fontFamily="Impact"
                    // -inkscape-font-specification:Impact;
                    letterSpacing="50px"
                    fill="#f9f9f9"
                    stroke="#6d68fa"
                    strokeWidth="5.566"
                    strokeDasharray="none"
                    strokeOpacity="1"
                    x="1799.6368"
                    y="599.59131"
                    id="text2">
                    <tspan
                        id="tspan2"
                        x="1799.6368"
                        y="599.59131" />
                </text>
 
            </g>
        </svg>
    )
}

export default Myself;