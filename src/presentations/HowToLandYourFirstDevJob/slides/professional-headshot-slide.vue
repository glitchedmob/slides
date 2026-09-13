<template>
    <section>
        <h3>Professional Headshot 📸</h3>
        <ul>
            <li class="fragment">No group photos or crops from group photos</li>
            <li class="fragment">Shoulders up</li>
            <li class="fragment">Business casual</li>
            <li class="fragment">Plain, non-distracting background</li>
        </ul>
    </section>
    <section>
        <h3>Examples</h3>
        <div class="row">
            <div class="column">
                <img src="../assets/images/headshot-01.jpg" alt="Headshot example 1" />
            </div>
            <div class="column">
                <img src="../assets/images/headshot-02.jpg" alt="Headshot example 2" />
            </div>
            <div class="column">
                <img src="../assets/images/headshot-03.jpg" alt="Headshot example 3" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.row {
    display: flex;
}

.column {
    width: calc(100% / 3);
}
</style>
