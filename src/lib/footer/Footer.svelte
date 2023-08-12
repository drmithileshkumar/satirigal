<script>
    import Contact from "./Contact.svelte";
    import Copyright from "./Copyright.svelte";
    import Install from "./Install.svelte";
    import Social from "./Social.svelte";
    // import a from '$lib/ui/a.svelte';
</script>

<footer>
    <!-- <Install /> -->
    <Social />
    <Contact />
    <nav>
        <ul>
            <li><a href="/about">About Us</a></li>
            <!-- <li>
                <a href="/subscription">Pricing</a>
            </li> -->
            <li>
                <a href="/legal/privacy"
                    >Privacy Policy</a
                >
            </li>
            <li>
                <a href="/legal/refund"
                    >Refund Policy</a
                >
            </li>
            <li>
                <a href="/legal/terms"
                    >Terms and Conditions</a
                >
            </li>
            <li>
                <a
                    href="/shipping"
                    >Shipping</a
                >
            </li>
        </ul>
    </nav>
    <Copyright />
</footer>

<style>
    footer {
        /* border-top: 2px solid rgb(0, 100, 150); */
        padding-top: 1em;
        /* padding: 1em; */
        /* background: radial-gradient(rgb(35 100 120), black); */
        font-family: roboto;
        padding-bottom: 4em;
    }
    nav {
        display: flex;
        gap: 0.5em;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 1em;
    }
    a {
        font-size: 0.8em;
    }
</style>
