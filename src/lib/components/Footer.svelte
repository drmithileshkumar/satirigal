<script lang="ts">
    //@ts-nocheck
    let lightTheme = true;
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/${lightTheme ? 'light' : 'dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href="/dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}
</script>
<style>
    nav {
        height: 2.5em;
        /* background: radial-gradient(circle at left, transparent 0, rgba(0, 0, 255, 0.1), rgba(255, 0, 0, 0.1), rgba(255, 255, 0, 0.1), rgba(0, 128, 0, 0.1) 100%); */
        backdrop-filter: blur(5px);
        display: flex;
        /* align-items: center;
        justify-content: space-between; */
        padding: 0.5em;
        max-width: 1200px;
        margin: auto;
        border-top: 2px solid white;
        padding-top: 0.5em;
        margin-top: 2em;
    }
    /* .branding {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .logo {
        width: 20px;
        height: 20px;
    }
    .label {
        font-size: 0.3em;
        color: white;
    } */
    .copyright {
        font-size: 0.8em;
        padding: 0.5em 0;
        color: white;
    }
    .contactrights {
        display: flex;
        flex-direction: column;
        padding: 1em 0;
        color:white;
    }
    .about {
        padding: 1em 0;
    }
</style>
<nav>
    <div class="contactrights">
        <a href="/about" class="about">About us</a>
        <span class="contact">Email at <strong>up2math.com@gmail.com</strong> </span>
        <span class="copyright">All rights reserved. &#169; up2math.com</span>
    </div>
    
    <!-- <a class="branding" href="https://webdut.com/web">
        <img class="logo" src="webdutIcon.png" alt='' />
        <span class="label">webdut.com</span>
    </a> -->
</nav>