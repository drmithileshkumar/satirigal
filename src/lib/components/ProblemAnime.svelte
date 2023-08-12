<script>
    import { fly, draw, fade } from "svelte/transition";
    import { backIn } from "svelte/easing";
    import { typewriter, rotate3Din, zoom } from "$lib/utils/animations";
    import { onMount } from "svelte";
    let hasMounted = false;
    // -------------------------------------------------------------------------------
    let page1 = false,
        page2,
        page3,
        page3_1,
        page3_2,
        page3_3,
        page4,
        page5,
        page5_1,
        page6,
        page7,
        page8,
        page9 = true,
        page9_1,
        page9_2,
        page9_3,
        page9_4;
    onMount(() => {
        hasMounted = true;
    })
</script>
{#if hasMounted}
<svg
    width="100%"
    height="100%"
    viewBox="0 0 100 50"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="padding:0;"
>
    <defs>
        <linearGradient id="linGrad" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" style="stop-color:rgb(2,176,245);stop-opacity:1" />
            <stop offset="33%" style="stop-color:rgb(240, 0, 255);stop-opacity:1" />
            <stop offset="67%" style="stop-color:rgb(207,166,35);stop-opacity:1" />
            <stop
                offset="100%"
                style="stop-color:rgb(241,7,7);stop-opacity:1"
            />
        </linearGradient>
    </defs>

    <text x="5" y="5" fill="black" class="text">Mathematics from Class 1 to 12 and all competitions</text>
    <!--        PAGE 1       -->
    {#if page1}
        <g 
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            on:introend={() => page1 = false}
            on:outroend={() => page2 = true}
        >
            <text
                x="38"
                y="20.7"
                fill="url(#linGrad)"
                class="text"
            >
                mathril.com
            </text>
        </g>
    {/if}
    <!--        PAGE 2       -->
    {#if page2}
        <g 
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            on:introend={() => page2 = false}
            on:outroend={() => page3 = true}
        >
            <text
                x="45"
                y="20.7"
                fill="url(#linGrad)"
                class="text"
                text-anchor="middle"
                >A GYM for mathematics</text
            >
        </g>
    {/if}
    <!--        PAGE 3       -->
    {#if page3}
        <g 
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            on:introend={() => page3 = false}
            on:outroend={() => page4 = true}
        >
            <text
                x="45"
                y="20.7"
                fill="url(#linGrad)"
                class="text"
                text-anchor="middle"
                >Select your Class</text
            >
            <text
                x="45"
                y="25.7"
                fill="url(#linGrad)"
                class="text"
                font-size="100px"
                text-anchor="middle"
                >Choose a chapter</text
            >
        </g>
    {/if}
    

    <!--        PAGE 4       -->
    {#if page4}
        <g 
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            on:introend={() => page4 = false}
            on:outroend={() => page5 = true}
        >
            <text
                x="44"
                y="20.7"
                fill="url(#linGrad)"
                class="text"
                text-anchor="middle"
                >Solve problems</text
            >
        </g>
    {/if}

    <!--        PAGE 5       -->

    {#if page5}
        <line
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            x1="27"
            y1="12"
            x2="60"
            y2="12"
            class="line"
        />
        <line
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            x1="27"
            y1="15"
            x2="60"
            y2="15"
            class="line"
        />
        <line
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            x1="27"
            y1="18"
            x2="50"
            y2="18"
            class="line"
        />

        <circle
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            cx="31"
            cy="25"
            r="1.4px"
            fill="none"
            stroke-width="0.2px"
            stroke="rgba(0, 175, 255, 1)"
        />
        <line
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            x1="34"
            y1="25"
            x2="43"
            y2="25"
            class="line"
        />

        <circle
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            cx="48"
            cy="25"
            r="1.4px"
            fill="none"
            stroke-width="0.2px"
            stroke="rgba(0, 175, 255, 1)"
        />
        <line
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            x1="51"
            y1="25"
            x2="60"
            y2="25"
            class="line"
        />

        <circle
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            cx="31"
            cy="30"
            r="1.4px"
            fill="none"
            stroke-width="0.2px"
            stroke="rgba(0, 175, 255, 1)"
        />
        <line
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            x1="34"
            y1="30"
            x2="43"
            y2="30"
            class="line"
        />

        <circle
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            cx="48"
            cy="30"
            r="1.4px"
            fill="none"
            stroke-width="0.2px"
            stroke="rgba(0, 175, 255, 1)"
        />
        <line
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            x1="51"
            y1="30"
            x2="60"
            y2="30"
            class="line"
        />

        <rect
            in:draw
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            x="47"
            y="33.2"
            rx=".5px"
            ry=".5px"
            width="14"
            height="5"
            fill="none"
            stroke-width="0.2px"
            stroke="rgba(0, 175, 255, 1)"
        />
        <g 
            in:fade
            out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            on:introend={() => (page5_1 = true)}>
            <text
                x="49"
                y="36.7"
                fill="rgb(0, 175, 255)"
                font-size="3px">Submit</text
            >
        </g>
        

        {#if page5_1}
            <circle
                in:draw={{ delay: 700 }}
                out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
                cx="31"
                cy="25"
                r="2.0px"
                fill="none"
                stroke="green"
                stroke-width="0.5px"
            />
            <circle
                in:zoom={{ delay: 600, r: 1.5 }}
                out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
                cx="31"
                cy="25"
                r="1.5px"
                class="greencircle"
            />

            <circle
                in:zoom={{ delay: 800, r: 1.5 }}
                out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
                cx="48"
                cy="25"
                r="1.5px"
                class="redcircle"
            />

            <circle
                in:zoom={{ delay: 800, r: 1.5 }}
                out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
                cx="31"
                cy="30"
                r="1.5px"
                class="redcircle"
            />

            <circle
                in:zoom={{ delay: 800, r: 1.5 }}
                out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
                cx="48"
                cy="30"
                r="1.5px"
                class="redcircle"
            />

            <rect
                in:fade={{ delay: 800 }}
                out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
                on:introend={() => (page5 = false)}
                on:outroend={() => (page6 = true)}
                x="47"
                y="33.2"
                rx=".5px"
                ry=".5px"
                width="14"
                height="5"
                fill="green"
            />
            <g
                in:fade
                out:fly={{ delay: 400, duration: 2000, x: 100, easing: backIn }}
            >
                <text
                
                    x="49"
                    y="36.7"
                    fill="white"
                    font-size="3px">Submit</text
                >
            </g>
            
        {/if}
    {/if}

    <!--        PAGE 6       -->
    {#if page6}
        <g 
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            on:introend={() => page6 = false}
            on:outroend={() => page7 = true}
        >
            <text
                x="44"
                y="20.7"
                fill="url(#linGrad)"
                class="text"
                text-anchor="middle"
                >analyze</text
            >
        </g>
    {/if}

    <!--        PAGE 7       -->
    {#if page7}
        <g 
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
        >
            <text
                x="45"
                y="8.5"
                fill="url(#linGrad)"
                class="text">algebra</text
            >
            <text
                x="23"
                y="42.5"
                fill="url(#linGrad)"
                class="text">geometry</text
            >
            <text
                x="70"
                y="42.5"
                text-anchor="middle"
                fill="url(#linGrad)"
                class="text">calculus</text
            >
        </g>
        <line
            in:draw
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            x1="50"
            y1="30"
            x2="50"
            y2="10"
            stroke="rgba(0, 175, 255, 1)"
            stroke-width="0.1px"
        />
        <line
            in:draw
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            x1="50"
            y1="30"
            x2="30"
            y2="40"
            stroke="rgba(0, 175, 255, 1)"
            stroke-width="0.1px"
        />
        <line
            in:draw
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            x1="50"
            y1="30"
            x2="70"
            y2="40"
            stroke="rgba(0, 175, 255, 1)"
            stroke-width="0.1px"
        />

        <line
            in:draw={{ delay: 400 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            x1="50"
            y1="30"
            x2="50"
            y2="15"
            stroke="rgb(0, 143, 253)"
            stroke-width="0.3px"
        />
        <line
            in:draw={{ delay: 400 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            x1="50"
            y1="30"
            x2="36"
            y2="37"
            stroke="rgb(143, 0, 253)"
            stroke-width="0.3px"
        />
        <line
            in:draw={{ delay: 400 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            x1="50"
            y1="30"
            x2="60"
            y2="35"
            stroke="tomato"
            stroke-width="0.3px"
        />
        <path
            in:draw={{ delay: 800 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            on:introend={() => (page7 = false)}
            on:outroend={() => (page8 = true)}
            d="M 50,15 L 36,37 L 60,35 Z"
            stroke="gray"
            stroke-width="0.35px"
            fill="none"
        />
    {/if}

    <!--        PAGE 8       -->
    {#if page8}
        <g 
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            on:introend={() => page8 = false}
            on:outroend={() => page9 = true}
        >
            <text
                x="45"
                y="20.7"
                fill="url(#linGrad)"
                class="text"
                >get help</text
            >
        </g>
    {/if}

    <!--        PAGE 9       -->
    {#if page9}
        <g 
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
        >
            <text
                x="33"
                y="15"
                fill="url(#linGrad)"
                class="text"
                text-anchor="middle"
                >Experts at Mathril</text
            >
        </g>
        <!-- <text x="10" y="25" fill="rgba(0, 175, 255, 1)" class="text"
            in:rotate3Din={ { x:35, y:0}} out:fly={{duration: 2000, x:100, easing: backIn}}
        >WhatsApp</text> -->
        <g
            id="surface202262918"
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
            on:introend={() => (page9_1 = true)}
        >
            <g style="transform:  translate(27px, 30px) scale(0.1)">
                <rect  
                            id='Rect-VectorialApp28R64-2'
                            x='0'
                            y='0'
                            width='50'
                            height='50'
                            rx='5'
                            ry='5'
                            fill='rgba(255, 0, 0, 1)'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='0'
                            stroke-dasharray='none'
                            opacity='1'
                            filter='none'
                            mask='none'
                            transform='matrix(1 0 0 1 -71.5 -85.5)'
                        />
                        
                        <text  
                            id='Text-VectorialApp28R64-3'
                            x='0'
                            y='0'
                            font-size='15px'
                            font-weight='600'
                            fill='rgba(255, 255, 255, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(1 0 0 1 -59.0859375 -67)'
                        >You
                            </text>
                        <rect  
                            id='Rect-VectorialApp28R64-4'
                            x='0'
                            y='0'
                            width='40'
                            height='20'
                            rx='3'
                            ry='3'
                            fill='rgba(255, 255, 255, 1)'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='0'
                            stroke-dasharray='none'
                            opacity='1'
                            filter='none'
                            mask='none'
                            transform='matrix(1 0 0 1 -66.5 -61.5)'
                        />
                        
                        <text  
                            id='Text-VectorialApp28R64-5'
                            x='0'
                            y='0'
                            font-size='15px'
                            font-weight='600'
                            fill='rgba(255, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(1 0 0 1 -63.375 -46.5)'
                        >Tube
                            </text>
            </g>
        </g>

        <!-- <text x="10" y="30" fill="rgba(0, 175, 255, 1)" class="text"
            in:rotate3Din={ { x:35, y:0}} out:fly={{duration: 2000, x:100, easing: backIn}}
            on:introend={() => page9_1 = true}
        >email</text> -->
        <g
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
        >
            <g style="transform:  translate(20px, 27px) scale(0.1)">
                <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                />
                <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                />
                <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                />
                <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                /><path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                />
            </g>
        </g>

        <g
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
        >
            <g style="transform:  translate(20px, 33px) scale(0.1)">
                <linearGradient
                    id="_osn9zIN2f6RhTsY8WhY4a"
                    x1="10.341"
                    x2="40.798"
                    y1="8.312"
                    y2="38.769"
                    gradientUnits="userSpaceOnUse"
                    ><stop offset="0" stop-color="#2aa4f4" /><stop
                        offset="1"
                        stop-color="#007ad9"
                    /></linearGradient
                ><path
                    fill="url(#_osn9zIN2f6RhTsY8WhY4a)"
                    d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                />
            </g>
        </g>

        <!-- <g
            in:rotate3Din={{ x: 35, y: 0 }}
            out:fly={{ duration: 2000, x: 100, easing: backIn }}
        >
            <g style="transform:  translate(20px, 38px) scale(0.1)">
                <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                    ><stop offset="0" stop-color="#2aa4f4" /><stop
                        offset="1"
                        stop-color="#007ad9"
                    /></linearGradient
                ><path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                /><path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                />
            </g>
        </g> -->

        {#if page9_1}
            <text
                x="26"
                y="25"
                fill="url(#linGrad)"
                class="text"
                in:typewriter={{ delay: 400 }}
                out:fly={{ duration: 2000, x: 100, easing: backIn }}
                on:introend={() => (page9_2 = true)}>@mathril</text
            >
            <!-- <line x1="46" y1="46" x2="63" y2="46" stroke-width="0.3px" stroke="url(#linGrad)"/> -->
        {/if}
        {#if page9_2}
            <text
                x="26"
                y="30.5"
                fill="url(#linGrad)"
                class="text"
                in:typewriter={{ speed: 1.5 }}
                out:fly={{ duration: 2000, x: 100, easing: backIn }}
                on:introend={() => (page9_3 = true)}
                >help@mathril.com</text
            >
        {/if}
        {#if page9_3}
            <text
                x="26"
                y="36"
                fill="url(#linGrad)"
                class="text"
                in:typewriter
                out:fly={{ duration: 2000, x: 100, easing: backIn }}
                on:introend={() => (page9 = false)}
                on:outroend={() => (page1 = true)}>@mathrilcom</text
            >
        {/if}
        <!-- {#if page9_4}
            <text
                x="26"
                y="41.5"
                fill="url(#linGrad)"
                class="text"
                in:typewriter
                out:fly={{ duration: 2000, x: 100, easing: backIn }}
                on:introend={() => (page9 = false)}
                on:outroend={() => (page1 = true)}>@mathrilcom</text
            >
        {/if} -->
    {/if}
    <!-- <g class="appear delay8" style="transform: translate(-10px, -20px)">
        
    </g> -->
</svg>
{/if}
<style>
    .text {
        font: bold 3.5px sans-serif;
    }

    .line {
        stroke-width: 0.5px;
        stroke: rgba(0, 175, 255, 1);
        /* stroke-linecap: round; */
    }
    .redcircle {
        fill: red;
    }
    .greencircle {
        fill: green;
    }
</style>
