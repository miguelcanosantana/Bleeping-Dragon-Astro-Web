---
layout: "../../../layouts/game.astro"
title: Don't Step There
client: Self
publishDate: 2020-03-02 00:00:00
img: /assets/DontStepThere/CoverTrial2.png
extraLogo: /assets/DontStepThere/TransparentThumbnail.png
description: |
  Get ready to experience the ultimate skating and racing challenge!
platforms:
  - roblox
robloxLink: "https://www.roblox.com/games/10835124016/Fixed-Dont-Step-There#!/about"
---

## 🎮 Game Description
Get ready to experience the ultimate skating and racing challenge! The Spleef game mode took some vitamins! ✨ 

🏆Don't fall from the platforms, be the last player standing! <br>
☠️Don't touch the barriers, use them to your advantage for beating other players! <br>
👌DO have fun :) The game is in Alpha State, feel free to make any suggestions or reporting bugs 🐛 <br>

🐲More game info and Changelog: https://devforum.roblox.com/t/dont-step-there/


## 🛠️ Tools
For making this online video game, multiple tools have been used:

- **Roblox Studio:** The game engine, closely tied to the Roblox Platform.
- **Luau:** A variant of Lua forked by Roblox with some custom additions.
- **Blender:** The tool used for creating, animating, rigging and texturing models.
- **Inkscape:** For designing some game graphics and the main game logotype.


## ⚙️ Under the hood
**Don't Step There** is an online experience, which means there must be an intermediary for handling player connections and data.

Here is a diagram showing the game architecture:

<img src="/assets/DontStepThere/Architecture.png" alt="A diagram showing the server-client architecture of the game." width=100% height=100%>

The architecture is based on a client-server one, using some tools to communicate between them...

Procedures can be qualified in 2 types depending where they are replicating:

- **Bindable:** For communications only inside the server or inside the client. For example: A server function calls another one located in the server too.
- **Remote:** For communicating between client and server, can be one way or another. For example: A player wants to color a part of the server pink, so they send an event to the server indicating so.

<br>

Procedures can be qualified in 2 other types depending on their response:

- **Functions:** 2 ways communication. Example: The client wants to get an item from the database, and the database returns the result in the same client function.

- **Events:** 1 way communication. Example: The server needs to send a private message to just 1 client, so it sends it, and won't need an answer from the client.

<br>

So, looking the diagram above, the purple would be functions and the yellow remotes.
(Note that the red lines indicate that the server is listening continuously for all it's clients).


## 😊 Thanks for reading
Hope you like this app and if you find it useful, feel free to share it with your friends :)
