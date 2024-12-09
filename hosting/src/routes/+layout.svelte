<script>
    import "../app.css";
    import colors from "tailwindcss/colors";

    import { auth, firestore } from "$lib/firebase";

    import { FirebaseApp, SignedIn } from "sveltefire";
    let { children } = $props();
    let s = "dsad";
    let primaryColors = [
        "red",
        "blue",
        "green",
        "yellow",
        "indigo",
        "purple",
        "pink",
    ];
    let secondaryColors = [
        "gray",
        "red",
        "blue",
        "green",
        "yellow",
        "indigo",
        "purple",
        "pink",
    ];
    let accentColors = [
        "gray",
        "red",
        "blue",
        "green",
        "yellow",
        "indigo",
        "purple",
        "pink",
    ];

    let primaryColor =
        primaryColors[Math.floor(Math.random() * primaryColors.length)]["500"];
    let secondaryColor =
        secondaryColors[Math.floor(Math.random() * secondaryColors.length)]["500"];
    let accentColor =
        accentColors[Math.floor(Math.random() * accentColors.length)]["500"];
    // Fetch the current user's ID from Firebase Authentication.
</script>

<nav>
    <a href="/">home</a>
    <a href="/about">about</a>
</nav>
<FirebaseApp
    --primaryColor={primaryColor}
    --secondaryColor={secondaryColor}
    --accentColor={accentColor}
    {auth}
    {firestore}
>
    <div class=""></div>
    {@render children()}
</FirebaseApp>
