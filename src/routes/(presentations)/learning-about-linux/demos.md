# Demo steps

Run Ubuntu, Kubuntu, Linux Mint Cinnamon, and Windows 11 in VMs on the presenter's Linux computer. Use sample files and demo accounts.

## 1. Ubuntu and Kubuntu

Slide: Ubuntu and Kubuntu demo

1. Explain that a VM runs a separate operating system inside a window.
2. In Ubuntu, open the overview, search for Files, and open a sample document.
3. Switch between Files and the browser, then open Settings.
4. In Kubuntu, open Dolphin from the application menu and find the same document.
5. Switch windows and open System Settings. Compare the menu and panel with Ubuntu's overview.
6. Ask which desktop people recognize. Stick to the same tasks in each.

## 2. Software and files

Slides: Installing apps through Linux Mint demo

1. Show Microsoft Store and a downloaded installer in Windows 11.
2. In Mint, find an app in Software Manager. Show the publisher and package source. If both a system package and Flatpak are available, show those options.
3. Return to the slides about application alternatives, then switch back to Mint.
4. Open Firefox and download a sample file. Find it in Downloads.
5. Edit a short document in LibreOffice Writer. Save a copy and export a PDF.
6. Find and open the PDF. Compare this with Windows File Explorer.
7. Open Update Manager without starting an update. Make text larger in Settings.
8. Show how to open those applications again. No terminal needed.

## 3. Game compatibility

Slide: Will my games work?

1. Pick a game and open its Steam compatibility information.
2. Open its ProtonDB page. Check recent reports, game versions, and hardware.
3. Check whether multiplayer or anti-cheat works.
4. Don't use VM frame rates to judge Linux gaming performance.

## 4. Netflix

Slide: Netflix on Linux

1. Open Netflix's browser requirements and expand the Linux section.
2. Show the maximum resolution and Linux support warning.
3. Explain that other services set their own limits. Having Widevine doesn't guarantee every resolution or feature.
4. No personal login or video playback needed.

## 5. USB creation and booting

Slides: Linux USB demo through Before installing

1. In the Windows 11 VM, open Mint's download page. Show the editions and verification instructions. Use an ISO downloaded and verified before the presentation.
2. Open Etcher and select the ISO. Explain that copying an ISO file onto a USB doesn't make it bootable this way. Etcher writes the image to the drive.
3. Attach only the dedicated demo USB to the Windows guest. Check its name and capacity in Etcher. Never pass the host's internal disk through to the guest for this demo.
4. Explain that writing erases the selected drive. Proceed only if you're sure it's the demo USB. If USB passthrough fails, stop at target selection and use a USB you prepared earlier.
5. Boot a demo VM from the same ISO to show the live desktop. Explain that this demonstrates the software, not USB booting or driver support on a physical computer.
6. Describe the one-time boot menu and its model-specific key. BIOS or UEFI settings can change boot order, but a permanent change is usually unnecessary.
7. Open the browser, file manager, and settings. Explain how to test Wi-Fi, sound, webcams, and printing in a live session on actual hardware.
8. Point out the installer without opening it. A live session can still access internal drives. Remind people to back up files and save recovery keys before making changes.
9. Show where to find Mint's installation guide. Return to the slides.
