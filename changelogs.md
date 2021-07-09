Chat++ Change Logs
## 5.10.0
- Update new mechanism to display Chat++'s emoticons, by modifying Node text. Thanks to **Bui The Hanh** for the idea

## 5.9.5
- Chatwork updated again, which made some feature break. This release fixed these errors.
- Fix mention feature
- Fix quick tag feature (`[info]`, `[title]`, `[code]` ...)

## 5.9.4
- Fix legacy's styles

## 5.9.3
- Chatwork updated again, which made Chat++ break. This small path brings some Chat++'s features back. However the emoticon feature does not work, and it will be fixed in another update later, when we manage to find how to handle Chatwork's changes.

## 5.9.2
- Chatwork updated their UI again, which made Chat++'s custom buttons in Chat Send Tool disapprear. The new version bring them back

## 5.9.1

- Fix bug duplicate Quote message

## 5.9.0

- Chatwork updated again, which applied an extremely confusing logic which then made the quote feature broken. We added our own quote message feature to fix this.

## 5.8.3

- Fix bug with duplicate messages in Reply Message Panel
- Vertically align text in the same line with Chat++ emoticons

## 5.8.2

- Fix bug missing message content when rendering Chat++ emoticons

## 5.8.1

- Update new Mechanism to bring the Emoticons feature back again. However, the new Mechanism does not have as good performance as the old one (which does not work anymore), so you you should consider turning the Emoticon Feature off if you find that it makes your Chatwork become too slow.
- **Known Problem:** Chat++'s emoticons in the current room are not displayed when Chatwork is first loaded. We will try to fix this problem in the next release.

## 5.8.0

- Temporarily disable emoticon feature due to Chatwork's code changed

## 5.7.1

- Chatwork updated their codes again, which made some features of Chat++ broken (including emoticons feature). This patch fixed the problem.

## 5.7.0

- Add new feature to add all Members mentioned in Chat area into the current Room. To use this feature, firstly mention all members in the Chat input area, then click Chatpp's `+` button in the Chat text toolbar.

## 5.6.3

- Bring old Emoticons mechanism back
- Bring shortcut feature for some buttons (Edit, Link, Task, Quote) back

## 5.6.2

- Little change to make DOM replaced mechanism more stable

## 5.6.1

- Chatwork updated again!!!, which conflicts with current Chat++'s mechanism to display Emoticons, and causes errors when editting message. Therefore, we temporarily switch to DOM replaced mechanism, which is much less efficient, but at least, it works (^^;). We will try to find other way to bring the old mechanism back.

## 5.6.0

- Update new mechanism to bring the Emoticons feature back, by disabling rendering by AST. This method intervenes quite deeply into the way Chatwork's frontend works, and it probably will not be valid anymore in the future. However, we will try to fix again when it is broken.

## 5.5.1

- Temporarily disable new emoticons mechanism due to a critical bug with editting message. The feature will be turned on again when we can find the way to fix the problem.

## 5.5.0

- Update Chat++ Emoticons mechanism. Instead of pushing emoticons to Chatwork's default emoticons list (which do not work anymore), Chat++ directly update text from DOM
- TO DO List:
  - Update Emoticons in reply popup
  - Update Emoticons in search popup
  - Update Emoticons in room description

## 5.4.10

- Fix Legacy Style

## 5.4.9

- Remove reply button description ("Replied to", "Đã trả lời cho", "返信元" ...)

## 5.4.8

- Remove unnecessary extension's permission

## 5.4.7

- On 03, March, Chatwork suddenly changed their design, which looks terrible. This patch brings some legacy styles back! Hope that Chatwork can realize their mistake and have an action soon.

## 5.4.6

- Temporarily fix bug can not load Chat++ due to the change in Frontend Codes of Chatwork

## 5.4.5

- Fix `TO ALL >>>` does not highlight messsage

## 5.4.4

- Fix display wrong icon in emotion tab and remove unnecessary action in emotion when change room

## 5.4.3

- Bring the Emoticon List button back

## 5.4.2

- Fix bug can not edit message (write new or delete old) without inserting `Enter`

## 5.4.1

- Fix bug can not use Mention feature when Emoticon feature is disabled
- Remove Thumbnail and Highlight feature because of not being used much, and bad performance

## 5.4.0

- Chatwork updated their codes, with many big changes to the Frontend. Therefore, many features of Chat++ broke. This big update fix the problem with Emoticon feature, and add a temporarily solution for the Mention feature
- There may be some minor feature which are not working. There will be some other paths for them later

## 5.3.1

- Fix bug that can not add new Emoticon link

## 5.3.0

- As from Chrome 73, [Chrome removed the ability to make cross-origin requests in content scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches). Chat Plus Plus had to make changes to fetch emoticons data.
- Chat Plus Plus now only supports Emoticon Links from Dropbox. All other links will not be accepted.

## 5.2.1

- Fix bug can not select emoticon when using Vietnamese Unikey
- Fix bug can not select emoticon at new line

## 5.2.0

- Remove `E` (Emoticon), `S` (Shortcut), `M` (Mention) buttons in chatbox toolbar
- Add `[info]`, `[title]` and `[code]` buttons in chatbox toolbar
- Fix bug with mouse hover when mention suggestion displayed
- Separate emoticons in to tabs in the Emoticon List popup
- Add emoticons popup suggestion with `::` keyword

## 5.1.22

- Fix bug: can not load some external libraries
- Fix a problem with CSS style

## 5.1.21

- Rearrange emoticons list into tabs base on Emoticon Data set.

## 5.1.20

- Move to message with [toall] by using shortcut.

## 5.1.19

- Mix-gulp Laravel mix

## 5.1.18

- Fix the problem with using innerHTML

## 5.1.17

- Fix problem with "Remove user from same rooms" feature

## 5.1.16

- Fix thumbnails aren't displayed issue. Check [PR#63](https://github.com/wataridori/chatpp/pull/63)

## 5.1.15

- Fix bug with Chat++ Emoticon size (due to Chatwork's codes changed)

## 5.1.14

- Fix bug can not delete a user from a room (due to Chatwork's codes changed)

## 5.1.13

- Fix several bugs with Room Info button, Emoticon list button, Mention Suggestion popup style (due to Chatwork's codes changed)

## 5.1.12

- Fix bug with popup notification
- Add external css to fix the problem when displaying url with big emoticons

## 5.1.11

- Fix bug with sending message by Enter key

## 5.1.10

- Add external css to fix the problem when displaying user avatar with big emoticons

## 5.1.9

- Fix bug when turning off Emoticon feature

## 5.1.8

- Add CC feature by using `@_cc_`. See [PR#60](../../pull/60)
- Fix problem with some special emoticons

## 5.1.7

- Add support for both Chatwork's old and new Javascript code

## 5.1.6

- Fix the problem with Emoticon feature

## 5.1.5

- Temporarily disable Emoticon feature due to the changes in ChatWork's Javascript Codes

## 5.1.4

- Remove **TO ALL** button due to the change of ChatWork
  (which makes **TO ALL** button does not work anymore)

## 5.1.3

- Improve **TO ALL** feature mechanism

## 5.1.2

- Improve **TO ALL** feature mechanism

## 5.1.1

- Fix bugs with **TO ALL** feature
- Improve the feature for removing user from same rooms

## 5.1.0

- Add **TO ALL** feature
- Add button to search for the same rooms with other users on their profile popup
  (which is appeared when clicks on users avatar)
- Add feature to quickly remove a user from all the rooms that you are an Administrator
- Change the mechanism for scrolling to bottom by using shortcut (`s`)

## 5.0.8

- Fix bugs with scroll to mentioned messages by using shortcut (`j` and `k`)
- Change the mechanism for scrolling to bottom by using shortcut (`s`)

## 5.0.7

- Add function for searching the same rooms by person

## 5.0.6

- Fix bug do not display new line with code tag

## 5.0.5

- Wrap long text inside code tag by default, when Code Highlight Feature is turned on.

## 5.0.4

- Rearrange third party libraries structure according to requirement from Firefox.

## 5.0.3

- Add notice about the **Thumbnail** and **Code Highlight** features.

## 5.0.2

- Fix bug with group remove button in Group page

## 5.0.1

- Fix bug with some special emoticons

## 5.0.0

- Chat++ is rewritten in [ECMAScript 6](http://www.ecma-international.org/publications/standards/Ecma-262.htm),
  transformed by [babel](https://babeljs.io/), built by [gulp](http://gulpjs.com/).
  Refer the [Contribution Guidelines](./CONTRIBUTING.md) file for more information.
- Emoticon Data File Structure changed. The `regex` field is not necessary anymore. (However, you can add it if you want)

```
// Before
"emoticons": [
    {"key": "(rofl2)", "regex": "\\(rofl2\\))", "src": "https://i.imgur.com/UD2NE5U.gif"},
]

// From 5.0.0
"emoticons": [
    {"key": "(rofl2)", "src": "https://i.imgur.com/UD2NE5U.gif"},
]
```

- New mention methods. Use `@admin` to mention all room's admins,
  use `@random` to randomly mention a member inside the room.
- No longer show error messages when there are some emoticon data that can not be loaded.
  Display a `ERRORS` text next to the Emoticon text instead.
- Immediately turn on or off emoticons when toggle the `E` button in the Chat toolbar.
- Add popup to show all external emoticons
- Bug Fixes

## 4.3.2

- Fix bug with "new" text in Chat++ icon

## 4.3.1

- Fix bug with sending message by Shift + Enter

## 4.3.0

- Disabled Desktop Notification Feature (base on registered rooms)
- Quick Title Tag, Quick Info Tag

````
    ```
    ``` => tag [code][/code] (default)

    ``i
    ``` => tag [info][/info]

    ``t
    ``` => tag [title][/title]
````

- Change emoticon alt attribute value (From only emoticon text to emoticon text plus emoticon data name)
  From now, you can check the emoticon data that an emoticon belongs to by hovering the mouse over the emoticon
- Display a notification text (**new**) inside the Chat++ icon when Chat++ is updated

## 4.2.0

- Display detailed error when can not load or parse Emoticons data in both Emoticons page and Chatwork
- Rewrite Emoticons data loading flow. Now if there are errors with Emoticons data files, only that data will be disabled. Chat++'s features, including emoticon, will still work
  (In previous versions, failing in loading or parsing Emoticons data file will cause Chat++ become unable to work)
- Display confirmation alert when clicking at "Reset" button in Emoticons page
- Display countdown message before Chat++ is loaded
- Bug fix

## 4.1.0

- Code Highlight: Support more languages
- Support specifying the language of the code
- Code block will be applied word wrap by default. Support "nowrap" option
  Example

```
ruby
#ruby code, long text is wrapped by default
puts "This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text"
```

```
ruby nowrap
#ruby code, do not wrap long text
puts "This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text. This is a super long text"
```

- Use dark theme for code highlight
- Thumbnail feature is OFF by default. Please turn it on if you want to use it.
- Thumbnail size (height) is rescaled from 150px to 125px
- Display gyazo's https image thumbnail
- Show thumbnail in Task view, as well as in Chat room description
- Now, many Chat++ features such as external emoticons, code highlight, thumbnail display ... will be automatically applied after loading Chatwork
  (In previous versions, you must switch room to make everything become effective)

## 4.0.0 - Big Update

- View list issues at [Version Four Milestone](../../milestones/Version%20Four)
- Highlight Code
- Display image thumbnail. Support direct image link, gyazo link, Facebook image link ...
- Many new Shortcuts that help users to quickly switch Chat room.
  - Go to the first Room in the list
  - Go to the first nonstick Room in the list
  - Go to the Room below in the list
  - Go to the Room above in the list
  - Go to the first Room that has new unread Message(s)
  - Go to the first Room that has new unread Mention Message(s)
- New setting page
- New change logs page
- New feature list page
- Update Emoticons page. It is now easier to arrange data priority
- Bug Fixes.

## 3.0.2

- Fix bug with room title

## 3.0.1

- Add Vietnamese Emoticon Data

## 3.0.0 - Big Update

- View list issues at [Happy Birthday Release Milestone](../../milestones/Happy%20Birthday%20Release)
- Room Shortcut Feature Added.
- Mention Jump Feature Added.
- Drop OFFENSIVE mode.
- Allow users to reply their own message.
- Add room info button.
- Several Bug Fixes.

## 2.0.0 - Big Update

- View list issues at [Happy Lunar New Year Release Milestone](../../milestones/Happy%20Lunar%20New%20Year%20Release)
- Mention syntax changed. (use `_` for omitting username, use `.` for picon)
- Mention users that are in friend list, but not present in Chat box (using `@#`)
- Register Groups name and members. Mention Group.
- Shortcut Feature Added.
- Several Bug Fixes.

## 1.0.3

- Add Skype data to official list
- Fix bug with mention popup

## 1.0.2

- Add official emoticons data list in option page
- Temporarily remove change log

## 1.0.1

- Mention user with Nickname.
- Fix bug: Can not initialize Default Emoticons Data at the first load.
- Fix bug: Two emoticons data have the same priority.

## 1.0.0

- Change version for release purpose.
- View list issues at [Happy New Year Release Milestone](../../milestones/Happy%20New%20Year%20Release)

## 0.1.3

- Fix bug with arrows inputted
- Apply multiple emoticons data

## 0.1.2

- Fix bug with `version_type` in Manifest

## 0.1.0

- Add secret emoticons

## 0.0.9

- Add `@_all` and `@__all` feature
- Add `@_me` and `@__me` feature

## 0.0.8

- Add `@me` feature
- Add `@all` feature
- Add show picon only when type `@__`
- Add show TO and picon only when type `@_`
- Move popup to left when is hidden

## 0.0.7

- Press ESC don't hide the pop up
- Send message when choose press Enter to send setting

## 0.0.6

- Now It is possible to change Mention Status from popup page. The status is sync via google account like Emoticon Status.

## 0.0.5

- Reverse emoticons change logs order in option page.
- Add button to turn ON/OFF Mention Feature.
