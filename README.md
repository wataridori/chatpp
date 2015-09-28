![chatpp](./src/icon32.png) Chat++ 4.2.0
=================

Chat++ for Firefox
--------------
* On a [blog published recently](https://blog.mozilla.org/addons/2015/08/21/the-future-of-developing-firefox-add-ons/), Firefox announced that they will make a new extension API,
called **WebExtensions**, which will be largely compatible with the model used by Chrome. <br>
Therefore, **Chat++ for Firefox** was born. It is based on the official version for Chrome.
* Firefox WebExtensions is only available from Firefox 42 (the current release version is Firefox 41).<br>
However, the WebExtensions API implemented in Firefox 42 were poor and buggy, 
so current **Chat++ for Firefox** version only works with [Firefox Nightly](https://nightly.mozilla.org/) (version 44).<br>
See more about Firefox release schedule [here](https://wiki.mozilla.org/RapidRelease/Calendar).
* All the features in Chrome should work in Firefox as well, except for the syncing features. <br>
It means that your custom data will not be synced,
and if you use **Chat++ for Firefox** in two different computers, you must do config by your self.
* Although Firefox WebExtension is something awesome, there are still a lot of Chrome API currently not supported.<br>
Furthermore, the supported API are sometimes not working as expected (Do not act like the way they behave in Chrome (sad)).<br>
Consequently, many codes have been rewritten for the extension to work in Firefox, but the extension is still unstable and may have many bugs.<br>
Please notify me if you have any troubles.
* **Chat++ for Firefox** is still in **BETA**. I will try to improve the Stability, Reliability and User Experience in the future, when I have time :).<br>
May be **Chat++ for Firefox** will be released in [AMO](https://addons.mozilla.org) when it works well with the stable version of Firefox.
* If you want a stable version, or do not want to use Firefox Nightly, just stick with **[Chrome](../../)**

How to Install
--------------
* Download the **Nightly Version** at [https://nightly.mozilla.org/](https://nightly.mozilla.org/)
* Type `about:config` into the URL bar in Firefox
* In the Search box type `xpinstall.signatures.required`
* Double-click the preference, or right-click and selected `Toggle`, to set it to `false`.
* Download the [chatpp.xpi file](./build/chatpp.xpi).
* Type `Ctr + O` or `Cmd + O`, and select the `chatpp.xpi` file.

Main Features
--------------
View feature list (in English and Vietnamese) [here](./features.md)

Change Logs
--------------
View all change logs [here](./changelogs.md)

Contribution
--------------
View contribution guidelines [here](./CONTRIBUTING.md)

External Links
--------------

* [Homepage](http://chatpp.thangtd.com)

