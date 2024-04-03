<script setup lang="ts">
import SlideTypeOne from '@/components/SlideTypeOne.vue';
</script>

<template>
    <SlideTypeOne>
        <h2>WireGuard</h2>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Server Setup</h3>
        <pre><code data-trim data-noescape data-line-numbers="1|3-5|7-9|11">
sudo apt install wireguard

# If you have a firewall (which you should)
sudo ufw allow 51820/udp
sudo ufw enable

sudo su
cd /etc/wireguard
wg genkey | tee privatekey | wg pubkey > publickey

vim ./wg0.conf
        </code></pre>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Server Setup Part 2</h3>
        <pre><code data-trim data-noescape data-line-numbers="|2|6|7">
[Interface]
Address = 10.0.0.x/24
SaveConfig = true
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o enp1s0 -j MASQUERADE; iptables -A FORWARD -o %i -j ACCEPT
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o enp1s0 -j MASQUERADE; iptables -D FORWARD -o %i -j ACCEPT
ListenPort = 51820
PrivateKey = &lt;generated private key&gt;
        </code></pre>
        <pre class="fragment"><code data-trim data-noescape data-line-numbers="">
exit # exit super user session
sudo systemctl enable wg-quick@wg0
sudo systemctl start wg-quick@wg0
        </code></pre>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Client Setup</h3>
        <pre><code data-trim data-noescape data-line-numbers="1|3-5|7">
sudo apt install wireguard

sudo su
cd /etc/wireguard
wg genkey | tee privatekey | wg pubkey > publickey

vim ./wg0.conf
        </code></pre>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Client Setup Part 2</h3>
        <pre><code data-trim data-noescape data-line-numbers="|2|3|4|7|9">
[Interface]
PrivateKey = &lt;generated client private key&gt;
Address = 10.0.0.x/24
DNS = 1.1.1.1

[Peer]
PublicKey = &lt;server public key&gt;
AllowedIPs = 0.0.0.0/0
Endpoint = &lt;server ip&gt;:51820
PersistentKeepalive = 10
        </code></pre>
        <pre class="fragment"><code data-trim data-noescape data-line-numbers>
exit # exit super user session
sudo systemctl enable wg-quick@wg0
sudo systemctl start wg-quick@wg0
        </code></pre>
    </SlideTypeOne>
    <SlideTypeOne>
        <h3>Register Client with Server</h3>
        <pre><code data-trim data-noescape data-line-numbers="">
sudo systemctl stop wg-quick@wg0
sudo vim /etc/wireguard/wg0.conf
        </code></pre>
        <pre class="fragment"><code data-trim data-noescape data-line-numbers="|2|3">
[Peer]
PublicKey = &lt;client public key&gt;
AllowedIPs = 10.0.0.x/32
        </code></pre>
        <pre class="fragment"><code data-trim data-noescape data-line-numbers>
sudo systemctl start wg-quick@wg0
        </code></pre>
    </SlideTypeOne>
</template>
