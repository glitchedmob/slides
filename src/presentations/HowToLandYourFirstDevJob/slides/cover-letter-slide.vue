<script setup lang="ts">
import tripMateExample from '../assets/documents/cover-letter-trip-mate-fredrick-lawler.pdf?url';
import canonicalExample from '../assets/documents/cover-letter-canonical-fredrick-lawler.pdf?url';
</script>

<template>
    <section>
        <h3>Cover Letter 📃</h3>
        <ul>
            <li class="fragment">
                Gives you a chance to
                <ul>
                    <li class="fragment">Tell a bit about yourself</li>
                    <li class="fragment">Show your excitement for the opportunity</li>
                </ul>
            </li>
            <li class="fragment">Customize it for each job application</li>
            <li class="fragment">Keep it to a single page</li>
        </ul>
        <br /><br />
        <p class="fragment">
            <a :href="tripMateExample" target="_blank" rel="noopener">Example 1</a>
            <span> - </span>
            <a :href="canonicalExample" target="_blank" rel="noopener">Example 2</a>
        </p>
    </section>
</template>
