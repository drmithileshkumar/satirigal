<style>
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        box-shadow: 0 0 3px gray;
    }
    .ring {
        border: 1px solid rgba(0, 175, 255, 1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ring1 {
        width: 100px;
        height: 100px;
        animation: blink 1s ease-in-out infinite alternate;
        animation-delay: 1s;
    }
    .ring2 {
        width: 90px;
        height: 90px;
        animation: blink 1s ease-in-out infinite alternate;
        animation-delay: 0.5s;
    }
    .ring3 {
        width: 80px;
        height: 80px;
        animation: blink 1s ease-in-out infinite alternate;
        animation-delay: 0s;
    }
    @keyframes blink {
        0% {
            border-color: rgba(0, 175, 255, 0);
        }
        /* 50% {
            border-color: rgba(0, 175, 255, 1);
        } */
        100% {
            border-color: rgba(0, 175, 255, 1);
        }
    }
</style>
<div class="ring ring1 noMenu">
    <div class="ring ring2 noMenu">
        <div class="ring ring3 noMenu">
            <img class="noMenu" src="/favicon.png" alt="">
        </div>
    </div>
</div>


