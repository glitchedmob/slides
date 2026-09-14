# Demo steps

Presenter only. All demos happen at the title-only **Demo** slide, after the explanations and USB overview. The audience does not need this checklist on screen. Return to **Questions** when finished, then invite people to try the demo computers with volunteers.

Slide: Demo

Have Ubuntu, Kubuntu, Linux Mint Cinnamon, and Windows 11 VMs ready on the presenter's Linux computer. Use sample files and demo accounts. Download the ISO, an AppImage, and any other installers before the talk.

## 1. Familiar tasks in Linux Mint

1. Start in Windows 11. Briefly show the Start menu, File Explorer, and Microsoft Store.
2. Switch to Mint. Open its menu, file manager, and Firefox. Explain that these VMs let several operating systems run inside windows on one computer.
3. Download a sample file and find it in Downloads.
4. Edit a short document in LibreOffice Writer. Save a copy and export a PDF, then open it.
5. Open Software Manager and install an app. Show the system-package and Flatpak options if both are available.
6. Run a previously downloaded AppImage. Show Properties, the permission to run it as a program, and double-clicking it. Explain that this is a bundled app file rather than a click-through installer. Use one already tested in this VM.
7. Open Update Manager without starting an update. No terminal needed for these everyday tasks.

## 2. Desktop choice and customization

1. In Ubuntu, open the overview, search for Files, and open the same sample document.
2. In Kubuntu, open Dolphin from the application menu and find the same document. Compare the menu and panel with Ubuntu's overview.
3. Open Settings. Change text size, wallpaper, or a panel setting. Keep this short and visual.
4. Explain that these are desktop choices, not different levels of Linux expertise. Ask which one looks most familiar.

## 3. Optional compatibility examples

Skip these if time is short. Keep them in the demo block rather than interrupting the earlier slides.

1. Pick a familiar game and show its Steam Deck rating and ProtonDB page. Explain the difference between a game running and its multiplayer anti-cheat working. VM frame rates do not represent Linux gaming performance.
2. Show Netflix's browser requirements and its Linux resolution entry. No personal login or playback needed. DRM restrictions come from service policies and supported playback technology, not a lack of processing power.

## 4. Create a Linux USB and show the live desktop

1. In the Windows 11 VM, open Mint's download page. Show where the ISO and verification instructions are. Use an ISO downloaded and verified before the presentation.
2. Open Etcher and select the ISO. Explain that writing the image makes a bootable USB; simply copying the ISO file is different.
3. Attach only the dedicated demo USB to the Windows guest. Confirm its name and capacity. Never pass the host's internal disk through to the guest.
4. Explain that writing erases the selected USB. If passthrough fails, use a drive prepared earlier rather than troubleshoot on stage.
5. Show the one-time boot menu on a spare physical demo computer if available. Select the prepared USB and start the live desktop. Mention that the key is often F12 or Esc; BIOS or UEFI settings can also change boot order.
6. If using a VM instead, boot it from the ISO and say that it shows the same live desktop, not the physical USB boot process or the computer's real hardware support.
7. Open the browser, files, and settings. On physical hardware, briefly show Wi-Fi, sound, or the webcam.
8. Point out the installer without starting an installation. Explain that backups matter before changing an existing installation and that a live session can still access internal drives.
9. Show Mint's installation guide. Return to Questions, then hand over to the volunteers and demo computers.

## Background for audience questions

These links are for the presenter, not audience slides.

- Microsoft contributes Linux drivers and cloud support upstream: https://learn.microsoft.com/en-us/azure/virtual-machines/linux/create-upload-generic
- Google's kernel work includes security and automated bug-finding: https://security.googleblog.com/2021/08/linux-kernel-security-done-right.html
- Framework Laptop 13 Pro has an Ubuntu-preinstalled option: https://frame.work/laptop13pro
- Selected ThinkPads have Linux preload configurations: https://support.lenovo.com/us/en/solutions/pd031426-linux-for-personal-systems
- Ubuntu's home-desktop antivirus guidance: https://help.ubuntu.com/stable/ubuntu-help/net-antivirus.html.en
- ClamAV is a file scanner, not a drop-in equivalent to all of Defender's protection: https://docs.clamav.net/
- Mint says it does not collect user data: https://linuxmint.com/
- Windows required and optional diagnostics: https://support.microsoft.com/en-us/windows/diagnostics-feedback-and-privacy-in-windows-28808a2b-a31b-dd73-dcd3-4559a5199319
- NVIDIA's documented display limitations are more specific than saying all NVIDIA cards work badly: https://download.nvidia.com/XFree86/Linux-x86_64/580.126.09/README/wayland-issues.html
- Widevine is Google's DRM technology, used across many services. Widevine itself is royalty-free; Linux streaming limits are not simply unpaid codec license fees: https://developers.google.com/widevine/drm/overview
- Netflix currently lists up to 1080p for supported Linux browsers: https://help.netflix.com/en/node/30081
- Ubuntu's standard LTS security coverage is five years for the Main repository, not every third-party app: https://ubuntu.com/security
- Mint 22.3 is supported through 2029: https://www.linuxmint.com/rel_zena.php
