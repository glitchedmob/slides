<script setup lang="ts">
import SlideTypeTwo from '@/components/SlideTypeTwo.vue';
</script>

<template>
    <SlideTypeTwo>
        <h2>Backups</h2>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Backblaze</h3>
        <div class="fragment">
            <p>Provides very cheap S3 compatible storage. Excellent for storing backups</p>
            <img
                style="max-height: 30vh"
                src="@/assets/images/backblaze-pricing.png"
                alt="Screenshot of Backblaze pricing page"
            />
        </div>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Restic</h3>
        <p class="fragment">A tool for creating and uploading backups to a remote location. It supports:</p>
        <ul class="fragment">
            <li>Incremental backups with data deduplication</li>
            <li>Restore to any snapshot</li>
            <li>Encrypting your backups at rest</li>
            <li>Several backends to upload backups to</li>
        </ul>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Restic Part 2</h3>
        <div class="fragment">
            <p>Supports a variety of remote locations</p>
            <ul>
                <li>SFTP</li>
                <li>REST Server</li>
                <li>
                    AWS S3
                    <ul>
                        <li>And S3 compatible vendors (like Backblaze)</li>
                    </ul>
                </li>
                <li>Azure Blob Storage</li>
                <li>Google Cloud Storage</li>
                <li>Many others using rclone</li>
            </ul>
        </div>
    </SlideTypeTwo>
    <SlideTypeTwo>
        <h3>Restic Usage</h3>
        <pre class="bash"><code data-trim data-noescape data-line-numbers="1|3-5|7|9|11">
sudo apt install restic

export RESTIC_PASSWORD='your_password_here'
export AWS_ACCESS_KEY_ID=''
export AWS_SECRET_ACCESS_KEY=''

restic -r s3:&lt;backblaze url&gt; init

restic -r s3:&lt;backblaze url&gt; backup ./&lt;some folder&gt;

restic -r s3:&lt;backblaze url&gt; restore latest --target ./
        </code></pre>
    </SlideTypeTwo>
</template>
