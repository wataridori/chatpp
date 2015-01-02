/*
 ChatWork http://www.chatwork.com/
 Copyright (c) 2014 ChatWork,Inc.

 -- Using Libraries. thanks a lot! --

 Modernizr 2.6.2 (Custom Build) | MIT & BSD
 Build: http://modernizr.com/download/#-svg-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load

 --

 jQuery.ScrollTo
 Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 Dual licensed under MIT and GPL.
 Date: 12/14/2012

 --

 jQuery JSONP Core Plugin 2.4.0 (2012-08-21)

 https://github.com/jaubourg/jquery-jsonp

 Copyright (c) 2012 Julian Aubourg

 This document is licensed as free software under the terms of the
 MIT License: http://www.opensource.org/licenses/mit-license.php

 --

 jQuery JSON Plugin
 version: 2.3 (2011-09-17)

 This document is licensed as free software under the terms of the
 MIT License: http://www.opensource.org/licenses/mit-license.php

 Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 website's http://www.json.org/json2.js, which proclaims:
 "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 I uphold.

 It is also influenced heavily by MochiKit's serializeJSON, which is
 copyrighted 2005 by Bob Ippolito.

 --

 jQuery Cookie Plugin v1.3.1
 https://github.com/carhartl/jquery-cookie

 Copyright 2013 Klaus Hartl
 Released under the MIT license

 --

 zeroclipboard
 The Zero Clipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie, and a JavaScript interface.
 Copyright 2012 Jon Rohan, James M. Greene, .
 Released under the MIT license
 http://jonrohan.github.com/ZeroClipboard/
 v1.1.7

 --



 JavaScript MD5 1.0.1
 https://github.com/blueimp/JavaScript-MD5

 Copyright 2011, Sebastian Tschan
 https://blueimp.net

 Licensed under the MIT license:
 http://www.opensource.org/licenses/MIT

 Based on
 A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 Digest Algorithm, as defined in RFC 1321.
 Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 Distributed under the BSD License
 See http://pajhome.org.uk/crypt/md5 for more info.
*/
var L = {
    _chatwork_file_upload_eset_link: "\u63a8\u5968\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30bd\u30d5\u30c8",
    emoticon_smile: "\u7b11\u9854",
    emoticon_sad: "\u60b2\u3057\u3044",
    emoticon_more_smile: "\u3082\u3063\u3068\u30b9\u30de\u30a4\u30eb",
    emoticon_lucky: "\u3084\u3063\u305f\u306d",
    emoticon_surprise: "\u3073\u3063\u304f\u308a",
    emoticon_wink: "\u30a6\u30a3\u30f3\u30af",
    emoticon_tears: "\u30a6\u30a7\uff5e\u3093",
    emoticon_sweat: "\u6c57",
    emoticon_mumu: "\u3080\u3080",
    emoticon_kiss: "\u30c1\u30e5\uff01",
    emoticon_tongueout: "\u3079\u30fc",
    emoticon_blush: "\u6065\u305a\u304b\u3057\u3044",
    emoticon_wonder: "\u4f55\u306a\u306b",
    emoticon_snooze: "\u7720\u3044",
    emoticon_love: "\u604b\u3057\u3066\u307e\u3059",
    emoticon_grin: "\u30cb\u30e4\u30c3",
    emoticon_talk: "\u8a71\u3059",
    emoticon_yawn: "\u3042\u304f\u3073",
    emoticon_puke: "\u30b2\u30fc\u30c3",
    emoticon_ikemen: "\u30a4\u30b1\u30e1\u30f3",
    emoticon_otaku: "\u30aa\u30bf\u30af",
    emoticon_ninmari: "\u30cb\u30f3\u30de\u30ea",
    emoticon_nod: "\u3046\u3093\u3046\u3093",
    emoticon_shake: "\u3044\u3084\u3044\u3084",
    emoticon_wry_smile: "\u82e6\u7b11\u3044",
    emoticon_whew: "\u3084\u308c\u3084\u308c",
    emoticon_clap: "\u62cd\u624b",
    emoticon_bow: "\u304a\u3058\u304e",
    emoticon_roger: "\u4e86\u89e3\uff01",
    emoticon_muscle: "\u7b4b\u8089\u30e2\u30ea\u30e2\u30ea",
    emoticon_dance: "\u30c0\u30f3\u30b9",
    emoticon_komanechi: "\u30b3\u30de\u30cd\u30c1",
    emoticon_devil: "\u60aa\u9b54",
    emoticon_star: "\u661f",
    emoticon_heart: "\u30cf\u30fc\u30c8",
    emoticon_flower: "\u82b1",
    emoticon_cracker: "\u30af\u30e9\u30c3\u30ab\u30fc",
    emoticon_cake: "\u30b1\u30fc\u30ad",
    emoticon_coffee: "\u30b3\u30fc\u30d2\u30fc",
    emoticon_beer: "\u30d3\u30fc\u30eb",
    emoticon_handshake: "\u63e1\u624b",
    emoticon_yes: "\u306f\u3044",
    emoticon_ec14: "EC14",
    raise_error: "\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f",
    deleted_user: "\u89e3\u7d04\u6e08\u30e6\u30fc\u30b6\u30fc",
    nickname_prefix: "",
    nickname_suffix: "\u3055\u3093",
    dateformat: "Y\u5e74m\u6708d\u65e5",
    chatroom_error_no_member: "\u81ea\u5206\u304c\u30e1\u30f3\u30d0\u30fc\u306b\u5165\u3063\u3066\u3044\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u306e\u305f\u3081\u3001\u8868\u793a\u3067\u304d\u307e\u305b\u3093",
    chat_category_allchat: "\u3059\u3079\u3066\u306e\u30c1\u30e3\u30c3\u30c8",
    directchat: "\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8",
    groupchat: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8",
    chat_category_mytaskchat: "\u30de\u30a4\u30bf\u30b9\u30af\u304c\u3042\u308b\u30c1\u30e3\u30c3\u30c8",
    notifier_newmessage: "\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5c4a\u304d\u307e\u3057\u305f",
    mychat: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8",
    chatsend_quote: "\u5f15\u7528",
    chatsend_reply: "\u8fd4\u4fe1",
    chatroom_not_only_internal: "\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u30c1\u30e3\u30c3\u30c8",
    pin_hint: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u30d4\u30f3\u7559\u3081\u3057\u3066\u30c1\u30e3\u30c3\u30c8\u4e00\u89a7\u306e\u4e0a\u306b\u56fa\u5b9a\u3067\u304d\u307e\u3059",
    menu_feedback: "\u3054\u610f\u898b\u30fb\u3054\u8981\u671b",
    button_send: "\u9001\u4fe1",
    button_cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
    sending: "\u9001\u4fe1\u4e2d...",
    live_call_direct: "%%name%%\u3055\u3093\u304b\u3089ChatWork Live\u306b\u62db\u5f85\u3055\u308c\u3066\u3044\u307e\u3059",
    live_call_chat: "%%chat_name%%\u306eChatWork Live\u306b\u62db\u5f85\u3055\u308c\u3066\u3044\u307e\u3059",
    button_ok: "OK",
    button_delete_long: "\u524a\u9664\u3059\u308b",
    newbrowser_title: "\u6700\u65b0\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044",
    button_close: "\u9589\u3058\u308b",
    contact_cwid_error_myself: "\u81ea\u5206\u81ea\u8eab\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093",
    contact_cwid_error_already: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID:%%chatwork_id%% \u306f\u3059\u3067\u306b\u30b3\u30f3\u30bf\u30af\u30c8\u8ffd\u52a0\u6e08\u307f\u3067\u3059",
    contact_cwid_error_noexist: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID:%%chatwork_id%% \u306f\u5b58\u5728\u3057\u307e\u305b\u3093",
    chatwork_update: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u307e\u3057\u305f\u3002\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u53cd\u6620\u3055\u305b\u308b\u306b\u306f\u30d6\u30e9\u30a6\u30b6\u3092\u518d\u8aad\u307f\u8fbc\u307f(\u66f4\u65b0)\u3057\u3066\u304f\u3060\u3055\u3044",
    chatwork_do_update: "\u6700\u65b0\u7248\u3078\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",
    connection_error_logout: "\u73fe\u5728\u30ed\u30b0\u30a2\u30a6\u30c8\u3055\u308c\u3066\u3044\u307e\u3059",
    error_cant_login_ip: "\u3053\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af(IP\u30a2\u30c9\u30ec\u30b9)\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u306f\u3001\u7ba1\u7406\u8005\u8a2d\u5b9a\u306b\u3088\u308a\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u8a31\u53ef\u3055\u308c\u3066\u3044\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u63a5\u7d9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    connection_error_invalid_user: "\u73fe\u5728\u5225\u306e\u30e6\u30fc\u30b6\u30fc\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u3059",
    connection_error_offline: "\u73fe\u5728\u30aa\u30d5\u30e9\u30a4\u30f3\u306b\u306a\u3063\u3066\u3044\u307e\u3059",
    live_join: "ChatWork Live\u3092\u958b\u59cb",
    message_open_message: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    message_link: "\u30e1\u30c3\u30bb\u30fc\u30b8\u30ea\u30f3\u30af",
    message_open_chat: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3078\u79fb\u52d5",
    message_open_mindmanager: "MindManager\u3067\u958b\u304f",
    preview: "\u30d7\u30ec\u30d3\u30e5\u30fc",
    contact_error_cantadd: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    contact_error_planlimit: "%%plan_name%%\u3067\u306f%%limit_num%%\u4eba\u307e\u3067\u3057\u304b\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002<br>\u65b0\u3057\u304f\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3054\u691c\u8a0e\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_send_object: "\u9001\u4fe1\u3057\u3088\u3046\u3068\u3057\u305f%%object%%\u306f\u3001\u73fe\u5728\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u308b%%object%%\u30b5\u30a4\u30ba\u306e\u305f\u3081\u3001\u9001\u4fe1\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f\u3002<br /><br />\u3053\u306e%%object%%\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001",
    storage_cancel_send_cancel: "%%object%%\u304c\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    tutorial_addbutton: "\u3053\u3053\u304b\u3089\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u305f\u308a\u3001\u77e5\u308a\u5408\u3044\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    tutorial_globalsearch: "\u3053\u3053\u304b\u3089\u30c1\u30e3\u30c3\u30c8\u540d\u306e\u691c\u7d22\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u306e\u691c\u7d22\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    tutorial_send_message: "\u3053\u3053\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    tutorial_add_task: "\u3053\u3053\u304b\u3089\u65b0\u3057\u3044\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    button_complete: "\u5b8c\u4e86",
    storage_cancel_send_object_suffix_upgrade: "\u73fe\u5728\u306e\u5229\u7528\u30d7\u30e9\u30f3\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_upgrade_label: "\u5229\u7528\u30d7\u30e9\u30f3\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",
    storage_cancel_send_object_suffix_tell_admin: "\u3054\u5229\u7528\u30d7\u30e9\u30f3\u306e\u7ba1\u7406\u8005\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_send_object_suffix_add_storage: "\u8ffd\u52a0\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_add_storage_label: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8ffd\u52a0",
    open_website: "\u30b5\u30a4\u30c8\u3092\u958b\u304f",
    preview_needlogin: "(\u8868\u793a\u3059\u308b\u306b\u306fGoogle\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)",
    loading: "\u8aad\u307f\u8fbc\u307f\u4e2d...",
    pager_prev: "\u524d\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5",
    pager_next: "\u6b21\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5",
    contact_request_message_default: "\u30b3\u30f3\u30bf\u30af\u30c8\u627f\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059",
    contact_invite_message_default: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u62db\u5f85\u3057\u307e\u3057\u305f\u3002\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u7121\u6599\u3067\u5229\u7528\u3067\u304d\u308b\u30af\u30e9\u30a6\u30c9\u578b\u30d3\u30b8\u30cd\u30b9\u30c1\u30e3\u30c3\u30c8\u30c4\u30fc\u30eb\u3067\u3059\u3002\u65b0\u898f\u767b\u9332\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002",
    contact_confirm_reject_request: "\u672c\u5f53\u306b\u300c%%name%%\u300d\u304b\u3089\u306e\u627f\u8a8d\u4f9d\u983c\u3092\u62d2\u5426\u3057\u307e\u3059\u304b\uff1f",
    contact_confirm_delete: "\u672c\u5f53\u306b\u300c%%name%%\u300d\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u304b\uff1f\n\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u3082\u540c\u6642\u306b\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u203b\u5143\u306b\u623b\u305b\u307e\u305b\u3093\uff01",
    profile_image_limit: "(\u6700\u5927 700KB\u307e\u3067\u3002JPEG,GIF,PNG\u304c\u4f7f\u3048\u307e\u3059)",
    username: "\u30e6\u30fc\u30b6\u30fc\u30cd\u30fc\u30e0",
    mailaddress: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
    saving: "\u4fdd\u5b58\u4e2d...",
    profile_setting_privacy_public: "\u516c\u958b",
    profile_setting_privacy_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u307f",
    error_maxlength: "%%length%%\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
    error_invalidchar: "\u534a\u89d2\u306e\u82f1\u6570\u5b57\u3068 - _ \u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059",
    error_already_used: "\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059",
    available: "\u4f7f\u7528\u3067\u304d\u307e\u3059",
    facebook_apprequests_message: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u62db\u5f85\u304c\u5c4a\u304d\u307e\u3057\u305f\u3002\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u30c1\u30e3\u30c3\u30c8\u30fb\u30bf\u30b9\u30af\u7ba1\u7406\u30fb\u30d5\u30a1\u30a4\u30eb\u5171\u6709\u304c\u3067\u304d\u308b\u3001\u7121\u6599\u306e\u30af\u30e9\u30a6\u30c9\u578b\u30d3\u30b8\u30cd\u30b9\u30c1\u30e3\u30c3\u30c8\u30c4\u30fc\u30eb\u3067\u3059",
    contact_search_from_facebook_complete: "Facebook\u3078\u62db\u5f85\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f",
    contact_myrequest: "\u30b3\u30f3\u30bf\u30af\u30c8\u627f\u8a8d\u4f9d\u983c",
    contact_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u306e\u9001\u4fe1",
    word_separator: "\u30fb",
    contact_is_completed: "\u3092\u3057\u307e\u3057\u305f",
    button_save_long: "\u4fdd\u5b58\u3059\u308b",
    profile_error_no_displayname: "\u8868\u793a\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
    profile_error_invalid_cwid: "\u4f7f\u7528\u3067\u304d\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059",
    menu_contact_admin: "\u30b3\u30f3\u30bf\u30af\u30c8\u7ba1\u7406",
    contact_search_from_twitter: "Twitter\u304b\u3089\u77e5\u308a\u5408\u3044\u3092\u63a2\u3059",
    contact_search_from_linkedin: "LinkedIn\u304b\u3089\u77e5\u308a\u5408\u3044\u3092\u63a2\u3059",
    contact_doing_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059...",
    contact_done_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f",
    canceling: "\u30ad\u30e3\u30f3\u30bb\u30eb\u4e2d...",
    contact_multi_delete_confirm: "%%num%%\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u3002\n\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664\u3059\u308b\u3068\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u3082\u540c\u6642\u306b\u524a\u9664\u3055\u308c\u3001\u5143\u306b\u623b\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\n\u672c\u5f53\u306b\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    deleting: "\u524a\u9664\u4e2d...",
    accepting: "\u627f\u8a8d\u4e2d...",
    contact_multi_adding: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059...",
    contact_multi_add_confirm: "%%num%%\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u672c\u5f53\u306b\u8ffd\u52a0\u3057\u307e\u3059\u304b\uff1f",
    find_friends_from_third_party_service_reconnect_error: "%%provider%%\u304b\u3089\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u30d6\u30e9\u30a6\u30b6\u3092\u5b8c\u5168\u306b\u9589\u3058\u3066\u304b\u3089\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044",
    contact_rest_number: "...\u4ed6%%rest_number%%\u4ef6",
    contact_error_is_not_mailaddress: "\u306f\n\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093",
    contact_error_is_over_contactnum: "\u306f\n\u5229\u7528\u3057\u3066\u3044\u308b\u30d7\u30e9\u30f3\u306e\u30b3\u30f3\u30bf\u30af\u30c8\u6570\u5236\u9650\u3092\u8d8a\u3048\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",
    contact_error_is_disable_external: "\u306f\n\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u3068\u308a\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093",
    contact_search_introduction: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u305f\u3044\u30e6\u30fc\u30b6\u30fc\u3092\u691c\u7d22\u3057\u307e\u3057\u3087\u3046",
    contact_search_placeholder: "\u540d\u524d\u3001\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b",
    contact_search_not_found: "\u73fe\u5728\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u306a\u3063\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306f\u3044\u307e\u305b\u3093",
    contact_search: "\u30b3\u30f3\u30bf\u30af\u30c8\u540d\u3092\u691c\u7d22",
    contact_add_all_hint: "\u81ea\u5206\u3068\u540c\u3058\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306b\u3044\u308b\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u3066\u3044\u306a\u3044\u30e1\u30f3\u30d0\u30fc\u3067\u3059",
    contact_error_search_user_not_found: "\u8a72\u5f53\u30e6\u30fc\u30b6\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
    contact_mail_not_found: "\u6307\u5b9a\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002<br />\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u767b\u9332\u3092\u6848\u5185\u3059\u308b\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u3053\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u4fe1\u3057\u307e\u3059\u304b\uff1f",
    contact_do_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1",
    contact_invite_by_facebook: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u306a\u3044\u4eba\u3092\u62db\u5f85\u3059\u308b",
    profile_chatworkidtip: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\uff1a",
    profile_edit: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u7de8\u96c6",
    menu_profile_setting: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb",
    button_delete: "\u524a\u9664",
    contact_delete: "\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664",
    contact_request_cancel: "\u627f\u8a8d\u4f9d\u983c\u3092\u30ad\u30e3\u30f3\u30bb\u30eb",
    button_accept: "\u627f\u8a8d",
    button_reject: "\u62d2\u5426",
    button_accept_long: "\u627f\u8a8d\u3059\u308b",
    button_reject_long: "\u62d2\u5426\u3059\u308b",
    button_add: "\u8ffd\u52a0",
    contactpanel_add_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0",
    fbconnect_enable: "\u53cb\u9054\u8ffd\u52a0\u8a2d\u5b9a\u3092\u6709\u52b9\u306b\u3059\u308b",
    fbconnect_set_later: "\u3042\u3068\u3067\u8a2d\u5b9a\u3059\u308b",
    menu_personal_setting: "\u52d5\u4f5c\u8a2d\u5b9a",
    sound_no_support: "\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u901a\u77e5\u97f3\u306e\u518d\u751f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n(Google Chrome,Firefox,Safari,Opera\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059)",
    fbconnect_application_name: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\uff08ChatWork\uff09",
    chatwork_site_path: "http://www.chatwork.com/ja/",
    fbconnect_about_chatwork: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u30d3\u30b8\u30cd\u30b9\u5411\u3051\u306e\u30c1\u30e3\u30c3\u30c8\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u30bf\u30b9\u30af\u7ba1\u7406\u3084\u30d5\u30a1\u30a4\u30eb\u5171\u6709\u3082\u3067\u304d\u307e\u3059\u3002Facebook\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u7c21\u5358\u306b\u7121\u6599\u3067\u306f\u3058\u3081\u3089\u308c\u307e\u3059\u3002",
    _chatwork_apitoken_invalid_password: "\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",
    _chatwork_apitoken_empty_password: "\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    _chatwork_apitoken_confirm_regenerate: "API\u30c8\u30fc\u30af\u30f3\u3092\u518d\u767a\u884c\u3059\u308b\u3068\u73fe\u5728\u767a\u884c\u3055\u308c\u3066\u3044\u308bAPI\u30c8\u30fc\u30af\u30f3\u306f\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002\u672c\u5f53\u306b\u518d\u767a\u884c\u3057\u307e\u3059\u304b\uff1f",
    welcome_title: "%%service_name%%\u3078\u3088\u3046\u3053\u305d",
    fbconnect_setting_enabled: "Facebook\u306e\u53cb\u9054\u8ffd\u52a0\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002",
    announce_button_close: "\u3053\u306e\u544a\u77e5\u3092\u975e\u8868\u793a\u306b\u3059\u308b",
    desktopalert_no_support: "\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u901a\u77e5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n(Google Chrome\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059)",
    menu_desktopalert: "\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u901a\u77e5",
    menu_current: "\u73fe\u5728\uff1a",
    turn_off_popup_blocker: "\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u30d6\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u3066\u304f\u3060\u3055\u3044",
    file_edit_title: "\u30d5\u30a1\u30a4\u30eb\u540d\u306e\u7de8\u96c6",
    file_error_empty: "\u30d5\u30a1\u30a4\u30eb\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    error_upload_executable: "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u306b\u3088\u308a\u3001\u5b9f\u884c\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093",
    error_illegal_filename: '\u30d5\u30a1\u30a4\u30eb\u540d\u306b\u306f\u6b21\u306e\u6587\u5b57\u306f\u4f7f\u3048\u307e\u305b\u3093\n \\ / : * ? " < > |',
    file_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u300c%%file_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    file_preview_image_hint: "\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30d7\u30ec\u30d3\u30e5\u30fc\u8868\u793a\u3059\u308b",
    file_search: "\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u691c\u7d22",
    file_preview_image_cant_read: "\u30d7\u30ec\u30d3\u30e5\u30fc\u3092\u8aad\u307f\u8fbc\u307f\u307e\u305b\u3093\u3067\u3057\u305f",
    file_loading: "\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",
    file_not_found: "\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",
    file_preview_download: "\u753b\u50cf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
    file_preview_open_newwindow: "\u753b\u50cf\u3092\u65b0\u3057\u3044\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u8868\u793a",
    file_search_not_found: "\u8a72\u5f53\u30d5\u30a1\u30a4\u30eb\u306f\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
    file_nothing: "\u73fe\u5728\u30d5\u30a1\u30a4\u30eb\u306f\u3042\u308a\u307e\u305b\u3093",
    menu_file: "\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406",
    file_delete_hint: "\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b",
    file_multi_confirm_delete: "%%num%%\u500b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u672c\u5f53\u306b\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    file_download_hint: "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",
    jump_to_addpoint: "\u8ffd\u52a0\u6642\u70b9\u3078\u79fb\u52d5",
    file_rename_hint: "\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u7de8\u96c6\u3059\u308b",
    storage_limit_warning_message: "[\u91cd\u8981]\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f",
    storage_limit_warning_title: "\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f",
    storage_limit_warning_body: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u5236\u9650\u306e\u4e0a\u9650\u306b\u9054\u3057\u3066\u304b\u30891\u9031\u9593\u304c\u7d4c\u904e\u3057\u305f\u305f\u3081\u3001<br />\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f\u3002<br /><br />\u3054\u5229\u7528\u3092\u7d99\u7d9a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001<br />",
    storage_limit_notice_footer: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u5236\u9650\u306b\u9054\u3057\u305f\u307e\u307e1\u9031\u9593(%%date%%)\u304c\u7d4c\u904e\u3059\u308b\u3068\u3001<br />\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9001\u4fe1\u304c\u884c\u3048\u306a\u304f\u306a\u308a\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002",
    storage_limit_notice_message: "[\u6ce8\u610f]\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u306e\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f",
    storage_limit_notice_title: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f",
    storage_limit_notice_body: "\u73fe\u5728\u306e\u3054\u5229\u7528\u30d7\u30e9\u30f3\u3067\u306f\u3053\u308c\u4ee5\u4e0a\u30d5\u30a1\u30a4\u30eb\u9001\u4fe1\u3092\u884c\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002<br /><br />\u3054\u5229\u7528\u3092\u7d99\u7d9a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001<br />",
    task_edit_hint: "\u30bf\u30b9\u30af\u3092\u7de8\u96c6\u3059\u308b",
    task_not_found: "\u30bf\u30b9\u30af\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",
    chatroom_search_member: "\u30e1\u30f3\u30d0\u30fc\u540d\u3092\u691c\u7d22",
    task_edit_title: "\u30bf\u30b9\u30af\u306e\u7de8\u96c6",
    task_error_empty: "\u30bf\u30b9\u30af\u5185\u5bb9\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    task_delete_hint: "\u30bf\u30b9\u30af\u3092\u524a\u9664\u3059\u308b",
    task_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30bf\u30b9\u30af\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    error_no_login_action: "\u6b63\u5e38\u306b\u30ed\u30b0\u30a4\u30f3\u3055\u308c\u3066\u3044\u306a\u3044\u70ba\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093",
    menu_mytask: "\u30bf\u30b9\u30af\u7ba1\u7406",
    task_loading: "\u30bf\u30b9\u30af\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",
    chatroom_error_not_found: "\u305d\u306e\u30c1\u30e3\u30c3\u30c8\u306f\u5b58\u5728\u3057\u307e\u305b\u3093",
    chat_loading: "\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",
    jump_to_addpoint_not_found: "\u8ffd\u52a0\u6642\u70b9\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u3042\u308a\u307e\u305b\u3093",
    task_deleted: "\u3053\u306e\u30bf\u30b9\u30af\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f",
    chatroom_member_rest_number: "...\u4ed6%%rest_number%%\u4eba",
    task_limittip: "\u671f\u9650\uff1a",
    button_incomplete: "\u672a\u5b8c\u4e86",
    chatroom_create_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u65b0\u898f\u4f5c\u6210",
    contact_add: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0",
    menu_mychat_hint: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u3092\u8868\u793a",
    chat_category_select: "\u30ab\u30c6\u30b4\u30ea\u3092\u9078\u629e",
    chat_search: "\u30c1\u30e3\u30c3\u30c8\u540d\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u3092\u691c\u7d22",
    chat_category_edit: "\u30ab\u30c6\u30b4\u30ea\u306e\u7de8\u96c6",
    chat_category_create: "\u30ab\u30c6\u30b4\u30ea\u3092\u65b0\u898f\u4f5c\u6210",
    button_create_long: "\u4f5c\u6210\u3059\u308b",
    chat_category_error_no_name: "\u30ab\u30c6\u30b4\u30ea\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    chat_category_error_no_chats: "\u30c1\u30e3\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    multiselect_label: "\u500b\u9078\u629e\u4e2d",
    chat_category_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30ab\u30c6\u30b4\u30ea\u300c%%category_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chat_rest_roomtip: "\u6b8b\u308a\u306e\u30c1\u30e3\u30c3\u30c8\u6570:",
    chat_show_more: "\u3055\u3089\u306b\u8868\u793a",
    chatroom_member_requests_notice: "\u53c2\u52a0\u672a\u627f\u8a8d\u306e\u30e1\u30f3\u30d0\u30fc\u304c\u3044\u307e\u3059 (%%request_num%%\u4ef6)",
    button_edit: "\u7de8\u96c6",
    joinpublicchat_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u306e\u53c2\u52a0",
    joinpublicchat_join: "\u3053\u306e\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u53c2\u52a0\u3059\u308b",
    joinpublicchat_request_sent: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u7ba1\u7406\u8005\u3078\u53c2\u52a0\u4f9d\u983c\u3092\u9001\u308a\u307e\u3057\u305f\u3002\u7ba1\u7406\u8005\u304c\u627f\u8a8d\u3059\u308b\u3068\u3001\u305d\u306e\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u53c2\u52a0\u3067\u304d\u307e\u3059\u3002",
    chatroom_desc_none: "\u6982\u8981\u306f\u3042\u308a\u307e\u305b\u3093",
    room_request_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u306e\u53c2\u52a0\u30ea\u30af\u30a8\u30b9\u30c8\u4e00\u89a7",
    role: "\u6a29\u9650",
    admin: "\u7ba1\u7406\u8005",
    member: "\u30e1\u30f3\u30d0\u30fc",
    readonly: "\u95b2\u89a7\u306e\u307f",
    read_more: "\u7d9a\u304d\u3092\u898b\u308b\u2026",
    chat_edited_log: "\u30e1\u30c3\u30bb\u30fc\u30b8\u306f%%date%%\u306b\u7de8\u96c6\u3055\u308c\u307e\u3057\u305f",
    chat_deleted: "\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f",
    chat_editing_label_on_message: "\u30e1\u30c3\u30bb\u30fc\u30b8\u7de8\u96c6\u4e2d",
    chatroom_tasklist_mytaskonly: "\u81ea\u5206\u306e\u30bf\u30b9\u30af\u306e\u307f\u8868\u793a",
    list_overflow: "\u6b8b\u308a%%num%%\u4ef6",
    task_nothing: "\u73fe\u5728\u30bf\u30b9\u30af\u306f\u3042\u308a\u307e\u305b\u3093",
    error_upload_filesize: "\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3059\u304e\u308b\u305f\u3081\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    error_upload_filetype: "\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5f62\u5f0f\u306e\u305f\u3081\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    chatroom_error_cant_add: "\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    chatroom_error_planlimit: "%%plan_name%%\u3067\u306f%%limit_num%%\u500b\u307e\u3067\u3057\u304b\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002<br>\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3054\u691c\u8a0e\u304f\u3060\u3055\u3044\u3002",
    adminsetting_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u516c\u958b\u30fb\u6a29\u9650\u8a2d\u5b9a",
    adminsetting_error_invalid_link_name: "\u4f7f\u7528\u3067\u304d\u306a\u3044\u30ea\u30f3\u30af\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059",
    guest: "\u30b2\u30b9\u30c8",
    chatroom_show_limit_member_num: "(\u6700\u5927%%num%%\u4eba\u8868\u793a)",
    chatroom_error_noself: "\u81ea\u5206\u304c\u5165\u3063\u3066\u3044\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093",
    adding: "\u8ffd\u52a0\u4e2d...",
    chatroom_edit_desc_title: "\u6982\u8981\u306e\u7de8\u96c6",
    chatroom_info_edit: "\u30c1\u30e3\u30c3\u30c8\u60c5\u5831\u306e\u7de8\u96c6",
    chatroom_edit_member: "\u30e1\u30f3\u30d0\u30fc\u3092\u7de8\u96c6",
    chatroom_error_no_name: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    chatroom_error_noadmin: "1\u4eba\u4ee5\u4e0a\u306e\u7ba1\u7406\u8005\u304c\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",
    chatroom_edit_adminsetting: "\u30c1\u30e3\u30c3\u30c8\u306e\u516c\u958b\u30fb\u6a29\u9650\u8a2d\u5b9a",
    chatroom_createchat_same_members: "\u540c\u3058\u30e1\u30f3\u30d0\u30fc\u3067\u30c1\u30e3\u30c3\u30c8\u3092\u65b0\u898f\u4f5c\u6210",
    chatroom_leave: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u304b\u3089\u9000\u5e2d\u3059\u308b",
    chatroom_delete: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u524a\u9664\u3059\u308b",
    error_no_select: "\u30c1\u30e3\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
    chatroom_createchat_same_members_confirm: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u306f\u30b3\u30f3\u30bf\u30af\u30c8\u3067\u306f\u306a\u3044\u30e1\u30f3\u30d0\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\n\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u306a\u3063\u3066\u3044\u308b\u30e1\u30f3\u30d0\u30fc\u306e\u307f\u3067\u30c1\u30e3\u30c3\u30c8\u3092\u65b0\u898f\u4f5c\u6210\u3057\u307e\u3059\u304b\uff1f",
    chatroom_confirm_leave: "\u672c\u5f53\u306b\u300c%%room_name%%\u300d\u304b\u3089\u9000\u5e2d\u3057\u307e\u3059\u304b\uff1f\n\u9000\u5e2d\u3059\u308b\u3068\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u5185\u5bb9\u3092\u95b2\u89a7\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002\n\u518d\u5ea6\u53c2\u52a0\u3057\u305f\u3044\u5834\u5408\u306f\u53c2\u52a0\u30e1\u30f3\u30d0\u30fc\u306b\u62db\u5f85\u3057\u3066\u3082\u3089\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n(\u203b\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306b\u3042\u308b\u81ea\u5206\u304c\u62c5\u5f53\u8005\u306e\u30bf\u30b9\u30af\u3001\u304a\u3088\u3073\u9001\u4fe1\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306f\u524a\u9664\u3055\u308c\u307e\u3059)",
    _chatroom_confirm_delete_alert: "\u672c\u5f53\u306b\u300c%%room_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    _chatroom_confirm_delete_content: "\u524a\u9664\u3059\u308b\u524d\u306b\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3001\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044\u3002",
    _chatroom_confirm_delete_note_1: "\u81ea\u5206\u3060\u3051\u3067\u306f\u306a\u304f\u3001\u30e1\u30f3\u30d0\u30fc\u5168\u54e1\u306e\u30c1\u30e3\u30c3\u30c8\u4e00\u89a7\u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002",
    _chatroom_confirm_delete_note_2: "\u3059\u3079\u3066\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3001\u30bf\u30b9\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u30c7\u30fc\u30bf\u304c\u524a\u9664\u3055\u308c\u307e\u3059\u3002",
    _chatroom_confirm_delete_note_3: "\u524a\u9664\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u4e8c\u5ea6\u3068\u5143\u306b\u623b\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
    _button_delete_with_agreement: "\u7406\u89e3\u3057\u305f\u4e0a\u3067\u524a\u9664\u3059\u308b",
    chatsend_error_no_incharge: "\u62c5\u5f53\u8005\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044",
    chatsend_error_send_task: "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u4e0d\u5b89\u5b9a\u3067\u30bf\u30b9\u30af\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u518d\u5ea6\u9001\u4fe1\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    live_member_not_found: "ChatWork Live\u53ef\u80fd\u306a\u30e1\u30f3\u30d0\u30fc\u306f\u3044\u307e\u305b\u3093",
    live_video: "\u30d3\u30c7\u30aa\u901a\u8a71",
    live_voice: "\u97f3\u58f0\u901a\u8a71",
    chatroom_member_detail: "\u30e1\u30f3\u30d0\u30fc\u8a73\u7d30",
    chatroom_member_nocontact: "\u30b3\u30f3\u30bf\u30af\u30c8\u672a\u8ffd\u52a0",
    chatroom_member_add_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u4e00\u62ec\u8ffd\u52a0",
    contact_menu_myrequest: "\u627f\u8a8d\u4f9d\u983c\u4e2d",
    chatsend_error_no_exist_for_edit: "\u7de8\u96c6\u3057\u3088\u3046\u3068\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",
    chatsend_delete_filetip: "\u524a\u9664\u5bfe\u8c61\u306e\u30d5\u30a1\u30a4\u30eb\uff1a",
    chatsend_confirm_delete_with_file: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u4e00\u7dd2\u306b\u30d5\u30a1\u30a4\u30eb\u3082\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chatsend_button_delete_with_file: "\u30d5\u30a1\u30a4\u30eb\u3082\u4e00\u7dd2\u306b\u524a\u9664",
    chatsend_button_delete_message_only: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u307f\u524a\u9664",
    chatsend_delete_tasktip: "\u524a\u9664\u5bfe\u8c61\u306e\u30bf\u30b9\u30af\uff1a",
    chatsend_confirm_delete_with_task: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u4e00\u7dd2\u306b\u30bf\u30b9\u30af\u3082\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chatsend_button_delete_with_task: "\u30bf\u30b9\u30af\u3082\u4e00\u7dd2\u306b\u524a\u9664",
    chatsend_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chat_action_copy_title: "\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9",
    text_copied: "\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",
    chat_post_label: "\u6295\u7a3f",
    chat_edit_label: "\u7de8\u96c6",
    chat_delete_label: "\u524a\u9664",
    jump_to_message: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    chat_error_not_found: "\u305d\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u5b58\u5728\u3057\u307e\u305b\u3093",
    chatsend_enter_action_explain: "Enter\u30ad\u30fc\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1",
    on: "\u30aa\u30f3",
    off: "\u30aa\u30d5",
    chatsend_chat_explain: "\u3053\u3053\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u3092\u5165\u529b",
    chatsend_enter_action_explain_enter: "\n(Shift + Enter\u30ad\u30fc\u3067\u6539\u884c)",
    chatsend_enter_action_explain_enter_send: "\n(Shift + Enter\u30ad\u30fc\u3067\u9001\u4fe1)",
    chatsend_shift_and_command_hint: "Shift\u3067\u9023\u7d9a\u9078\u629e\u3001\u2318\u3067\u3059\u3050\u9001\u4fe1",
    chatsend_shift_and_ctrl_hint: "Shift\u3067\u9023\u7d9a\u9078\u629e\u3001Ctrl\u3067\u3059\u3050\u9001\u4fe1",
    selectall_full: "\u3059\u3079\u3066\u9078\u629e",
    upload_cancel_send_message: "\u4e00\u6642\u7684\u306b\u30d5\u30a1\u30a4\u30eb\u9001\u4fe1\u304c\u884c\u3048\u306a\u3044\u72b6\u614b \u3082\u3057\u304f\u306f\u3001\u9001\u4fe1\u3057\u3088\u3046\u3068\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u304c\u73fe\u5728\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u3066\u3044\u308b\u305f\u3081\u3001\u9001\u4fe1\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f\u3002<br /><br />\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\uff1a%%size%%<br /><br />\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a<br />\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001",
    file: "\u30d5\u30a1\u30a4\u30eb",
    error_upload_over_max_filesize: "\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c %%max_size%%\u3088\u308a\u5927\u304d\u3044\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3002\n\uff08\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3088\u3046\u3068\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\uff1a%%size%%\uff09",
    error_upload: "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    _chatwork_path_help_file_upload_error: '\n\nMac OS\u306e\u5834\u5408\u306f\u30d8\u30eb\u30d7\u30da\u30fc\u30b8\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\n<a href="http://link.chat-work.com/h_file_upload_ja" target="_blank">http://link.chat-work.com/h_file_upload_ja</a>',
    chatsend_error_send: "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u4e0d\u5b89\u5b9a\u3067\u30c1\u30e3\u30c3\u30c8\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u518d\u5ea6\u9001\u4fe1\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    chatsend_not_allow_send_messages: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3067\u306f\u6a29\u9650\u304c\u306a\u3044\u305f\u3081\u767a\u8a00\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
    button_save: "\u4fdd\u5b58",
    nickname_title: "\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u306e\u8a2d\u5b9a",
    search_title: "\u30e1\u30c3\u30bb\u30fc\u30b8\u691c\u7d22",
    search_error_exceed_trial_num: "\u30e1\u30c3\u30bb\u30fc\u30b8\u691c\u7d22\u306e\u8a66\u7528\u56de\u6570\u3092\u30aa\u30fc\u30d0\u30fc\u3057\u3066\u3044\u307e\u3059",
    search_result_unit: "\u4ef6",
    search_result_not_found: "%%keyword%% \u306b\u4e00\u81f4\u3059\u308b\u691c\u7d22\u7d50\u679c\u306f\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
    search_suggest: '"%%keyword%%"\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u691c\u7d22',
    search_trial_button: "\u304a\u8a66\u3057\u5229\u7528\u3057\u3066\u307f\u308b(%%rest_num%%\u56de)",
    search_upgrade_title: "\u30e1\u30c3\u30bb\u30fc\u30b8\u691c\u7d22\u6a5f\u80fd\u306f\u30d5\u30ea\u30fc\u30d7\u30e9\u30f3\u3067\u306f\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u305b\u3093\u3002",
    error_upload_image: "\u753b\u50cf\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044 (JPEG,GIF,PNG\u304c\u4f7f\u3048\u307e\u3059)",
    button_search: "\u691c\u7d22",
    checkall: "\u3059\u3079\u3066",
    uncheckall: "\u306f\u305a\u3059",
    userguide_title: "%%service_name%%\u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
    fbconnect_title: "\u53cb\u9054\u8ffd\u52a0\u8a2d\u5b9a\u3092\u3057\u307e\u3057\u3087\u3046\uff01",
    live_start: "ChatWork Live\u3092\u958b\u59cb\u3057\u307e\u3057\u305f",
    file_uploaded: "\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3057\u305f\u3002",
    task_edited: "\u30bf\u30b9\u30af\u3092\u7de8\u96c6\u3057\u307e\u3057\u305f\u3002",
    chatroom_adminsetting_edited: "\u30c1\u30e3\u30c3\u30c8\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_contact_added: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
    chatroom_chatname_is: "\u30c1\u30e3\u30c3\u30c8\u540d\u3092\u300c",
    chatroom_set: "\u300d\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u3002",
    chatroom_description_is: "\u6982\u8981\u3092\u300c",
    chatroom_over_groupchatnum: "\u306f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u5236\u9650\u6570\u3092\u8d8a\u3048\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
    chatroom_disable_external: "\u306f\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u3068\u308a\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
    chatroom_member_is: "\u30e1\u30f3\u30d0\u30fc\u300c",
    chatroom_added: "\u300d\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
    chatroom_mychat_created: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002",
    chatroom_groupchat_created: "\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002",
    chatroom_changed: "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_priv_changed: "\u300d\u306e\u6a29\u9650\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_deleted: "\u300d\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002",
    chatroom_icon_updated: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_chat_edited: "\u30c1\u30e3\u30c3\u30c8\u60c5\u5831\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_resigned_priv_change: "\u300d\u304c\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u89e3\u7d04\u3057\u305f\u305f\u3081\u3001\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u304b\u3089\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u3068\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_leaved: "\u300d\u304c\u9000\u5e2d\u3057\u307e\u3057\u305f\u3002",
    chatroom_resigned_priv_change_all: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u7ba1\u7406\u8005\u304c\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001\u30e1\u30f3\u30d0\u30fc\u5168\u54e1\u306e\u6a29\u9650\u3092\u7ba1\u7406\u8005\u3078\u3068\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_contact_added_by_facebook: "Facebook\u306e\u53cb\u9054\u8ffd\u52a0\u8a2d\u5b9a\u306b\u3088\u308a\u30b3\u30f3\u30bf\u30af\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f\u3002",
    task_added: "\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",
    task_done: "\u30bf\u30b9\u30af\u3092\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002",
    task_reverted: "\u30bf\u30b9\u30af\u3092\u672a\u5b8c\u4e86\u306b\u623b\u3057\u307e\u3057\u305f\u3002",
    file_edited: "\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u7de8\u96c6\u3057\u307e\u3057\u305f\u3002",
    file_deleted: "\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f",
    chatroom_chat_joined: "\u30c1\u30e3\u30c3\u30c8\u306b\u53c2\u52a0\u3057\u307e\u3057\u305f\u3002",
    mychat_default_desc: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u306f\u81ea\u5206\u5c02\u7528\u306e\u30c1\u30e3\u30c3\u30c8\u3067\u3059\u3002\u81ea\u5206\u7528\u306e\u30e1\u30e2\u3084\u30bf\u30b9\u30af\u7ba1\u7406\u3001\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u30fc\u3068\u3057\u3066\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",
    third_party_service_setting_error_connected_another_account: "\u3059\u3067\u306b\u4ed6\u306e\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u9023\u643a\u6e08\u307f\u3067\u3059",
    fbconnect_fbconnect_failure: "\u73fe\u5728\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308bFacebook\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u3001\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u9023\u643a\u3067\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3068\u7570\u306a\u308b\u305f\u3081\u3001\u53cb\u9054\u8ffd\u52a0\u8a2d\u5b9a\u3092\u6709\u52b9\u306b\u3067\u304d\u307e\u305b\u3093\u3002\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u9023\u643a\u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    third_party_service_setting_error_already_connected: "\u3059\u3067\u306b\u9023\u643a\u6e08\u307f\u3067\u3059",
    find_friends_from_third_party_service_error_different_user: "\u73fe\u5728\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b%%provider%%\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u3001\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u9023\u643a\u3067\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3068\u7570\u306a\u308b\u305f\u3081\u3001\u77e5\u308a\u5408\u3044\u691c\u7d22\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002\n\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u9023\u643a\u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    lang_ja_button_ok: "OK",
    lang_en_button_ok: "OK",
    "lang_zh-cn_button_ok": "OK",
    "lang_zh-tw_button_ok": "OK",
    lang_vi_button_ok: "OK",
    lang_ja_button_cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
    lang_en_button_cancel: "Cancel",
    "lang_zh-cn_button_cancel": "\u53d6\u6d88",
    "lang_zh-tw_button_cancel": "\u53d6\u6d88",
    lang_vi_button_cancel: "H\u1ee7y",
    lang_ja_change_confirm: "\u8a00\u8a9e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\u30d6\u30e9\u30a6\u30b6\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3059\u308b\u3068\u53cd\u6620\u3055\u308c\u307e\u3059\u3002\n\u3044\u307e\u3059\u3050\u518d\u8aad\u307f\u8fbc\u307f\u3057\u307e\u3059\u304b\uff1f",
    lang_en_change_confirm: "Your language has been changed but your browser needs to be refreshed for the change to be reflected.\nWould you like to refresh now?",
    "lang_zh-cn_change_confirm": "\u8bed\u8a00\u8bbe\u5b9a\u8fdb\u884c\u4e86\u53d8\u66f4\u3002\u5bf9\u6d4f\u89c8\u5668\u8fdb\u884c\u5237\u65b0\u540e\u5c06\u5f97\u5230\u663e\u793a\u3002\n\u73b0\u5728\u9a6c\u4e0a\u5237\u65b0\u5417\uff1f",
    "lang_zh-tw_change_confirm": "\u8a9e\u8a00\u8a2d\u5b9a\u8b8a\u66f4\u5b8c\u6210\u4e86\u3002\u700f\u89bd\u5668\u91cd\u65b0\u6574\u7406\u6703\u986f\u793a\u7d50\u679c\u3002\n\u73fe\u5728\u7acb\u523b\u91cd\u65b0\u6574\u7406\u55ce?",
    lang_vi_change_confirm: "\u0110\u00e3 thay \u0111\u1ed5i c\u00e0i \u0111\u1eb7t ng\u00f4n ng\u1eef. B\u1ea1n ph\u1ea3i t\u1ea3i l\u1ea1i trang web \u0111\u1ec3 k\u00edch ho\u1ea1t nh\u1eefng thay \u0111\u1ed5i n\u00e0y. Ph\u1ea7n c\u00e0i \u0111\u1eb7t s\u1ebd \u0111\u01b0\u1ee3c k\u00edch ho\u1ea1t sau khi l\u00e0m m\u1edbi trang web.\n B\u1ea1n c\u00f3 mu\u1ed1n t\u1ea3i l\u1ea1i trang web ngay b\u00e2y gi\u1edd l\u00e0m m\u1edbi l\u1ea1i trang ch\u1ee7 kh\u00f4ng?",
    chat_action_reply: "\u8fd4\u4fe1",
    chat_action_reply_long: "\u8fd4\u4fe1\u3059\u308b",
    chat_action_reply_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u8fd4\u4fe1\u3059\u308b",
    chat_action_quote: "\u5f15\u7528",
    chat_action_quote_long: "\u5f15\u7528\u3059\u308b",
    chat_action_quote_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5f15\u7528\u3059\u308b",
    chat_action_edit: "\u7de8\u96c6",
    chat_action_edit_long: "\u7de8\u96c6\u3059\u308b",
    chat_action_edit_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7de8\u96c6\u3059\u308b",
    chat_action_task: "\u30bf\u30b9\u30af",
    chat_action_task_long: "\u30bf\u30b9\u30af\u5316\u3059\u308b",
    chat_action_task_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30bf\u30b9\u30af\u5316\u3059\u308b",
    chat_action_more: "",
    chat_action_unread: "\u672a\u8aad",
    chat_action_unread_long: "\u672a\u8aad\u306b\u3059\u308b",
    chat_action_unread_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u307e\u3067\u3092\u672a\u8aad\u306b\u3059\u308b",
    chat_action_link: "\u30ea\u30f3\u30af",
    chat_action_link_long: "\u30ea\u30f3\u30af\u3092\u633f\u5165\u3059\u308b",
    chat_action_link_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u306e\u30ea\u30f3\u30af\u3092\u633f\u5165\u3059\u308b",
    chat_action_move: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    chat_action_move_long: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    chat_action_move_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    chat_action_copy: "\u30b3\u30d4\u30fc",
    chat_action_copy_long: "\u30c6\u30ad\u30b9\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b",
    chat_action_copy_desc: "\u30c6\u30ad\u30b9\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b",
    chat_action_delete: "\u524a\u9664",
    chat_action_delete_long: "\u524a\u9664\u3059\u308b",
    chat_action_delete_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u524a\u9664\u3059\u308b",
    chat_action_mail: "\u30e1\u30fc\u30eb",
    chat_action_mail_long: "\u30e1\u30fc\u30eb\u3059\u308b",
    chat_action_mail_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30e1\u30fc\u30eb\u3059\u308b",
    chat_action_title: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5bfe\u3059\u308b\u64cd\u4f5c"
};
(function(b) {
    b.cwUI = b.cwUI || {};
    b.cwUI.L = {
        checkall: "\u3059\u3079\u3066",
        uncheckall: "\u306f\u305a\u3059",
        button_delete: "\u524a\u9664",
        button_search: "\u691c\u7d22",
        button_close: "\u9589\u3058\u308b",
        pager_prev: "\u524d\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5",
        pager_next: "\u6b21\u306e\u30da\u30fc\u30b8\u3078\u79fb\u52d5",
        error_upload_over_max_filesize: "\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c %%max_size%%\u3088\u308a\u5927\u304d\u3044\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3002\n\uff08\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3088\u3046\u3068\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\uff1a%%size%%\uff09",
        error_upload_image: "\u753b\u50cf\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044 (JPEG,GIF,PNG\u304c\u4f7f\u3048\u307e\u3059)",
        cwui_listip_list_overflow: "\u6b8b\u308a%%num%%\u4ef6",
        cwui_listip_list_overflow_max: "(\u6700\u5927%%num%%\u4ef6\u8868\u793a)"
    }
})(jQuery);
(function(b) {
    b.cwUI.L.cwDatePicker = {
        closeText: "\u9589\u3058\u308b",
        prevText: "&#x3c;\u524d",
        nextText: "\u6b21&#x3e;",
        currentText: "\u4eca\u65e5",
        monthNames: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        monthNamesShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        dayNames: ["\u65e5\u66dc\u65e5", "\u6708\u66dc\u65e5", "\u706b\u66dc\u65e5", "\u6c34\u66dc\u65e5",
            "\u6728\u66dc\u65e5", "\u91d1\u66dc\u65e5", "\u571f\u66dc\u65e5"
        ],
        dayNamesShort: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
        dayNamesMin: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
        weekHeader: "\u9031",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearMonthSeparator: "",
        yearSuffix: "\u5e74"
    }
})(jQuery);

function escape_html(b) {
    if (!b || !b.replace) return b;
    b = b.replace(/&/g, "&amp;");
    b = b.replace(/"/g, "&quot;");
    b = b.replace(/'/g, "&#039;");
    b = b.replace(/</g, "&lt;");
    return b = b.replace(/>/g, "&gt;")
}

function unescape_html(b) {
    if (!b || !b.replace) return b;
    b = b.replace(/&quot;/g, '"');
    b = b.replace(/&#039;/g, "'");
    b = b.replace(/&lt;/g, "<");
    b = b.replace(/&gt;/g, ">");
    return b = b.replace(/&amp;/g, "&")
}

function sort_for_string(b, a) {
    for (var b = b.toLowerCase(), a = a.toLowerCase(), d = 0, e = 0, f; e == 0;) {
        e = b.charCodeAt(d);
        f = a.charCodeAt(d);
        if (isNaN(e))
            if (isNaN(f)) return 0;
            else {
                e = -1;
                continue
            } else if (isNaN(f)) {
            e = 1;
            continue
        }
        e = b.charCodeAt(d) - a.charCodeAt(d);
        d++
    }
    return e
}

function bytename(b, a, d, e) {
    a == void 0 && (a = "B");
    unim = ["", "K", "M", "G", "T", "P"];
    d == void 0 && (d = 2);
    var f;
    if (e != void 0)
        for (var g in unim) unim[g] == e && (f = g);
    for (c = 0; b >= 1024;) c++, b /= 1024;
    if (f) {
        e = c - f;
        if (e > 0)
            for (; e > 0;) e--, b *= 1024;
        else if (e < 0)
            for (; e < 0;) e++, b /= 1024;
        c = f
    }
    return number_format(b, c ? d : 0, ".", ",") + " " + unim[c] + a
}

function trim_width(b, a, d, e) {
    a && (b = b.substr(a));
    b.length > d && (b = b.substr(0, d), e == void 0 && (e = "..."), b += e);
    return b
}

function get_memory_usage() {
    var b = 0,
        a;
    for (a in window) typeof a == "object" && a.getMemoryUsage && (b += a.getMemoryUsage());
    return b
}

function strtotime_format(b, a) {
    var d = a.match(/(Y|m|d)/g),
        e = RegExp(b.replace(/[0-9]+/g, "([0-9]+)"), "g").exec(b),
        f = {};
    f[d[0]] = parseInt(e[1], 10);
    f[d[1]] = parseInt(e[2], 10);
    f[d[2]] = parseInt(e[3], 10);
    return Math.floor((new Date(f.Y, f.m - 1, f.d)).getTime() / 1E3)
}

function is_empty_object(b) {
    for (var a in b) return !1;
    return !0
}

function get_time() {
    return time()
}

function encode_url() {
    return urlencode()
}

function trim(b, a) {
    var d, e = 0,
        f = 0;
    b += "";
    a ? (a += "", d = a.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1")) : d = " \n\r\t\u000c\u000b\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
    e = b.length;
    for (f = 0; f < e; f++)
        if (d.indexOf(b.charAt(f)) === -1) {
            b = b.substring(f);
            break
        }
    e = b.length;
    for (f = e - 1; f >= 0; f--)
        if (d.indexOf(b.charAt(f)) === -1) {
            b = b.substring(0, f + 1);
            break
        }
    return d.indexOf(b.charAt(0)) === -1 ? b : ""
}

function rtrim(b, a) {
    a = !a ? " \\s\u00a0" : (a + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "\\$1");
    return (b + "").replace(RegExp("[" + a + "]+$", "g"), "")
}

function count(b, a) {
    var d, e = 0;
    if (b === null || typeof b === "undefined") return 0;
    else if (b.constructor !== Array && b.constructor !== Object) return 1;
    a === "COUNT_RECURSIVE" && (a = 1);
    a != 1 && (a = 0);
    for (d in b)
        if (b.hasOwnProperty(d) && (e++, a == 1 && b[d] && (b[d].constructor === Array || b[d].constructor === Object))) e += this.count(b[d], 1);
    return e
}

function array_unique(b) {
    var a = "",
        d = {},
        e = "",
        f = function(a, b) {
            var f = "";
            for (f in b)
                if (b.hasOwnProperty(f) && b[f] + "" === a + "") return f;
            return !1
        };
    for (a in b) b.hasOwnProperty(a) && (e = b[a], !1 === f(e, d) && (d[a] = e));
    return d
}

function in_array(b, a, d) {
    var e = "";
    if (d)
        for (e in a) {
            if (a[e] === b) return !0
        } else
            for (e in a)
                if (a[e] == b) return !0;
    return !1
}

function array_search(b, a, d) {
    var e = !!d,
        f = "";
    if (a && typeof a === "object" && a.change_key_case) return a.search(b, d);
    if (typeof b === "object" && b.exec) {
        e || (b = RegExp(b.source, "i" + (b.global ? "g" : "") + (b.multiline ? "m" : "") + (b.sticky ? "y" : "")));
        for (f in a)
            if (b.test(a[f])) return f;
        return !1
    }
    for (f in a)
        if (e && a[f] === b || !e && a[f] == b) return f;
    return !1
}

function urlencode(b) {
    b = (b + "").toString();
    return encodeURIComponent(b).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
}

function urldecode(b) {
    return decodeURIComponent((b + "").replace(/\+/g, "%20"))
}

function number_format(b, a, d, e) {
    var b = !isFinite(+b) ? 0 : +b,
        a = !isFinite(+a) ? 0 : Math.abs(a),
        e = typeof e === "undefined" ? "," : e,
        d = typeof d === "undefined" ? "." : d,
        f = "",
        f = (a ? function(a, b) {
            var f = Math.pow(10, b);
            return "" + Math.round(a * f) / f
        }(b, a) : "" + Math.round(b)).split(".");
    f[0].length > 3 && (f[0] = f[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, e));
    if ((f[1] || "").length < a) f[1] = f[1] || "", f[1] += Array(a - f[1].length + 1).join("0");
    return f.join(d)
}

function round(b, a, d) {
    var e, f, g;
    a |= 0;
    a = Math.pow(10, a);
    b *= a;
    g = b > 0 | -(b < 0);
    f = b % 1 === 0.5 * g;
    e = Math.floor(b);
    if (f) switch (d) {
        case "PHP_ROUND_HALF_DOWN":
            b = e + (g < 0);
            break;
        case "PHP_ROUND_HALF_EVEN":
            b = e + e % 2 * g;
            break;
        case "PHP_ROUND_HALF_ODD":
            b = e + !(e % 2);
            break;
        default:
            b = e + (g > 0)
    }
    return (f ? b : Math.round(b)) / a
}

function time() {
    return Math.floor((new Date).getTime() / 1E3)
}

function microtime(b) {
    var a = (new Date).getTime() / 1E3,
        d = parseInt(a, 10);
    return b ? a : Math.round((a - d) * 1E3) / 1E3 + " " + d
}

function utf8_encode(b) {
    if (b === null || typeof b === "undefined") return "";
    b += "";
    var a = "",
        d, e, f = 0;
    d = e = 0;
    for (var f = b.length, g = 0; g < f; g++) {
        var l = b.charCodeAt(g),
            k = null;
        l < 128 ? e++ : k = l > 127 && l < 2048 ? String.fromCharCode(l >> 6 | 192) + String.fromCharCode(l & 63 | 128) : String.fromCharCode(l >> 12 | 224) + String.fromCharCode(l >> 6 & 63 | 128) + String.fromCharCode(l & 63 | 128);
        k !== null && (e > d && (a += b.slice(d, e)), a += k, d = e = g + 1)
    }
    e > d && (a += b.slice(d, f));
    return a
}

function strtotime(b, a) {
    var d, e, f;
    f = "";
    b = b.replace(/\s{2,}|^\s|\s$/g, " ");
    b = b.replace(/[\t\r\n]/g, "");
    if (b === "now") return a === null || isNaN(a) ? (new Date).getTime() / 1E3 | 0 : a | 0;
    else if (isNaN(f = Date.parse(b))) a = a ? new Date(a * 1E3) : new Date;
    else return f / 1E3 | 0;
    var b = b.toLowerCase(),
        g = {
            day: {
                sun: 0,
                mon: 1,
                tue: 2,
                wed: 3,
                thu: 4,
                fri: 5,
                sat: 6
            },
            mon: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        },
        l = function(b) {
            var f = b[2] && b[2] === "ago",
                d = (d = b[0] === "last" ? -1 : 1) * (f ? -1 : 1);
            switch (b[0]) {
                case "last":
                case "next":
                    switch (b[1].substring(0,
                        3)) {
                        case "yea":
                            a.setFullYear(a.getFullYear() + d);
                            break;
                        case "mon":
                            a.setMonth(a.getMonth() + d);
                            break;
                        case "wee":
                            a.setDate(a.getDate() + d * 7);
                            break;
                        case "day":
                            a.setDate(a.getDate() + d);
                            break;
                        case "hou":
                            a.setHours(a.getHours() + d);
                            break;
                        case "min":
                            a.setMinutes(a.getMinutes() + d);
                            break;
                        case "sec":
                            a.setSeconds(a.getSeconds() + d);
                            break;
                        default:
                            f = g.day[b[1].substring(0, 3)], typeof f !== "undefined" && (f -= a.getDay(), f === 0 ? f = 7 * d : f > 0 ? b[0] === "last" && (f -= 7) : b[0] === "next" && (f += 7), a.setDate(a.getDate() + f))
                    }
                    break;
                default:
                    if (/\d+/.test(b[0])) switch (d *=
                        parseInt(b[0], 10), b[1].substring(0, 3)) {
                        case "yea":
                            a.setFullYear(a.getFullYear() + d);
                            break;
                        case "mon":
                            a.setMonth(a.getMonth() + d);
                            break;
                        case "wee":
                            a.setDate(a.getDate() + d * 7);
                            break;
                        case "day":
                            a.setDate(a.getDate() + d);
                            break;
                        case "hou":
                            a.setHours(a.getHours() + d);
                            break;
                        case "min":
                            a.setMinutes(a.getMinutes() + d);
                            break;
                        case "sec":
                            a.setSeconds(a.getSeconds() + d)
                    } else return !1
            }
            return !0
        };
    f = b.match(/^(\d{2,4}-\d{1,2}-\d{1,2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
    if (f !== null) return f[2] ? f[3] || (f[2] += ":00") :
        f[2] = "00:00:00", d = f[1].split(/-/g), d[1] = g.mon[d[1] - 1] || d[1], d[0] = +d[0], d[0] = d[0] >= 0 && d[0] <= 69 ? "20" + (d[0] < 10 ? "0" + d[0] : d[0] + "") : d[0] >= 70 && d[0] <= 99 ? "19" + d[0] : d[0] + "", parseInt(this.strtotime(d[2] + " " + d[1] + " " + d[0] + " " + f[2]) + (f[4] ? f[4] / 1E3 : ""), 10);
    f = b.match(RegExp("([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?",
        "gi"));
    if (f === null) return !1;
    d = 0;
    for (e = f.length; d < e; d++)
        if (!l(f[d].split(" "))) return !1;
    return a.getTime() / 1E3 | 0
}

function ucfirst(b) {
        b += "";
        return b.charAt(0).toUpperCase() + b.substr(1)
    }
    (function(b) {
        function a(a, b) {
            var f = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (f >> 16) << 16 | f & 65535
        }

        function d(b, f, d, e, g, j) {
            b = a(a(f, b), a(e, j));
            return a(b << g | b >>> 32 - g, d)
        }

        function e(a, b, f, e, g, j, h) {
            return d(b & f | ~b & e, a, b, g, j, h)
        }

        function f(a, b, f, e, g, j, h) {
            return d(b & e | f & ~e, a, b, g, j, h)
        }

        function g(a, b, f, e, g, j, h) {
            return d(f ^ (b | ~e), a, b, g, j, h)
        }

        function l(b, j) {
            b[j >> 5] |= 128 << j % 32;
            b[(j + 64 >>> 9 << 4) + 14] = j;
            var h, o, m, l, k, p = 1732584193,
                i = -271733879,
                q = -1732584194,
                r = 271733878;
            for (h = 0; h < b.length; h += 16) o = p, m = i, l = q, k = r, p = e(p,
                    i, q, r, b[h], 7, -680876936), r = e(r, p, i, q, b[h + 1], 12, -389564586), q = e(q, r, p, i, b[h + 2], 17, 606105819), i = e(i, q, r, p, b[h + 3], 22, -1044525330), p = e(p, i, q, r, b[h + 4], 7, -176418897), r = e(r, p, i, q, b[h + 5], 12, 1200080426), q = e(q, r, p, i, b[h + 6], 17, -1473231341), i = e(i, q, r, p, b[h + 7], 22, -45705983), p = e(p, i, q, r, b[h + 8], 7, 1770035416), r = e(r, p, i, q, b[h + 9], 12, -1958414417), q = e(q, r, p, i, b[h + 10], 17, -42063), i = e(i, q, r, p, b[h + 11], 22, -1990404162), p = e(p, i, q, r, b[h + 12], 7, 1804603682), r = e(r, p, i, q, b[h + 13], 12, -40341101), q = e(q, r, p, i, b[h + 14], 17, -1502002290),
                i = e(i, q, r, p, b[h + 15], 22, 1236535329), p = f(p, i, q, r, b[h + 1], 5, -165796510), r = f(r, p, i, q, b[h + 6], 9, -1069501632), q = f(q, r, p, i, b[h + 11], 14, 643717713), i = f(i, q, r, p, b[h], 20, -373897302), p = f(p, i, q, r, b[h + 5], 5, -701558691), r = f(r, p, i, q, b[h + 10], 9, 38016083), q = f(q, r, p, i, b[h + 15], 14, -660478335), i = f(i, q, r, p, b[h + 4], 20, -405537848), p = f(p, i, q, r, b[h + 9], 5, 568446438), r = f(r, p, i, q, b[h + 14], 9, -1019803690), q = f(q, r, p, i, b[h + 3], 14, -187363961), i = f(i, q, r, p, b[h + 8], 20, 1163531501), p = f(p, i, q, r, b[h + 13], 5, -1444681467), r = f(r, p, i, q, b[h + 2], 9, -51403784),
                q = f(q, r, p, i, b[h + 7], 14, 1735328473), i = f(i, q, r, p, b[h + 12], 20, -1926607734), p = d(i ^ q ^ r, p, i, b[h + 5], 4, -378558), r = d(p ^ i ^ q, r, p, b[h + 8], 11, -2022574463), q = d(r ^ p ^ i, q, r, b[h + 11], 16, 1839030562), i = d(q ^ r ^ p, i, q, b[h + 14], 23, -35309556), p = d(i ^ q ^ r, p, i, b[h + 1], 4, -1530992060), r = d(p ^ i ^ q, r, p, b[h + 4], 11, 1272893353), q = d(r ^ p ^ i, q, r, b[h + 7], 16, -155497632), i = d(q ^ r ^ p, i, q, b[h + 10], 23, -1094730640), p = d(i ^ q ^ r, p, i, b[h + 13], 4, 681279174), r = d(p ^ i ^ q, r, p, b[h], 11, -358537222), q = d(r ^ p ^ i, q, r, b[h + 3], 16, -722521979), i = d(q ^ r ^ p, i, q, b[h + 6], 23, 76029189), p = d(i ^
                    q ^ r, p, i, b[h + 9], 4, -640364487), r = d(p ^ i ^ q, r, p, b[h + 12], 11, -421815835), q = d(r ^ p ^ i, q, r, b[h + 15], 16, 530742520), i = d(q ^ r ^ p, i, q, b[h + 2], 23, -995338651), p = g(p, i, q, r, b[h], 6, -198630844), r = g(r, p, i, q, b[h + 7], 10, 1126891415), q = g(q, r, p, i, b[h + 14], 15, -1416354905), i = g(i, q, r, p, b[h + 5], 21, -57434055), p = g(p, i, q, r, b[h + 12], 6, 1700485571), r = g(r, p, i, q, b[h + 3], 10, -1894986606), q = g(q, r, p, i, b[h + 10], 15, -1051523), i = g(i, q, r, p, b[h + 1], 21, -2054922799), p = g(p, i, q, r, b[h + 8], 6, 1873313359), r = g(r, p, i, q, b[h + 15], 10, -30611744), q = g(q, r, p, i, b[h + 6], 15, -1560198380),
                i = g(i, q, r, p, b[h + 13], 21, 1309151649), p = g(p, i, q, r, b[h + 4], 6, -145523070), r = g(r, p, i, q, b[h + 11], 10, -1120210379), q = g(q, r, p, i, b[h + 2], 15, 718787259), i = g(i, q, r, p, b[h + 9], 21, -343485551), p = a(p, o), i = a(i, m), q = a(q, l), r = a(r, k);
            return [p, i, q, r]
        }

        function k(a) {
            var b, f = "";
            for (b = 0; b < a.length * 32; b += 8) f += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
            return f
        }

        function i(a) {
            var b, f = [];
            f[(a.length >> 2) - 1] = void 0;
            for (b = 0; b < f.length; b += 1) f[b] = 0;
            for (b = 0; b < a.length * 8; b += 8) f[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
            return f
        }

        function h(a) {
            return k(l(i(a),
                a.length * 8))
        }

        function j(a) {
            var b = "",
                f, d;
            for (d = 0; d < a.length; d += 1) f = a.charCodeAt(d), b += "0123456789abcdef".charAt(f >>> 4 & 15) + "0123456789abcdef".charAt(f & 15);
            return b
        }

        function o(a, b) {
            var f = unescape(encodeURIComponent(a)),
                d = unescape(encodeURIComponent(b)),
                e = i(f),
                g = [],
                j = [];
            g[15] = j[15] = void 0;
            e.length > 16 && (e = l(e, f.length * 8));
            for (f = 0; f < 16; f += 1) g[f] = e[f] ^ 909522486, j[f] = e[f] ^ 1549556828;
            d = l(g.concat(i(d)), 512 + d.length * 8);
            return k(l(j.concat(d), 640))
        }

        function m(a, b, f) {
            if (!b) {
                if (!f) return j(h(unescape(encodeURIComponent(a))));
                return h(unescape(encodeURIComponent(a)))
            }
            if (!f) return j(o(b, a));
            return o(b, a)
        }
        typeof define === "function" && define.amd ? define(function() {
            return m
        }) : b.md5 = m
    })(this);

function prepare_replace_code(b) {
    b.reg_cmp.push({
        key: /&/g,
        rep: "~~~CW-ESCAPE-START~~~&amp;~~~CW-ESCAPE-END~~~"
    });
    b.reg_cmp.push({
        key: /'/g,
        rep: "~~~CW-ESCAPE-START~~~&#039;~~~CW-ESCAPE-END~~~"
    });
    b.reg_cmp.push({
        key: /"/g,
        rep: " ~~~CW-NOURL-ESCAPE-START~~~&quot;~~~CW-NOURL-ESCAPE-END~~~ "
    });
    b.reg_cmp.push({
        key: /</g,
        rep: " ~~~CW-NOURL-ESCAPE-START~~~&lt;~~~CW-NOURL-ESCAPE-END~~~ "
    });
    b.reg_cmp.push({
        key: />/g,
        rep: " ~~~CW-NOURL-ESCAPE-START~~~&gt;~~~CW-NOURL-ESCAPE-END~~~ "
    });
    PLATFORM == "mobile-iphone" || PLATFORM ==
        "mobile-android" ? (b.reg_cmp.push({
            key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+|tel:?\d+)/gi,
            rep: '<a href="$1" title="$1" target="_blank" ><link_title>$1</link_title></a>',
            reptxt: "$1"
        }), b.reg_cmp.push({
            key: /\[qt\]/g,
            rep: '<div class="dev_quote chatQuote">',
            reptxt: '"'
        }), b.reg_cmp.push({
            key: /\[\/qt\]/g,
            rep: "</div>",
            reptxt: '"'
        }), b.reg_cmp.push({
            key: /\[qtmeta aid=(\d+) time=(\d+)\]/g,
            rep: '<div class="dev_qmeta">[picon:$1]<time>[date:$2]</time></div>',
            reptxt: ""
        }), b.reg_cmp.push({
            key: /\[qtmeta aid=(\d+)\]/g,
            rep: '<div class="dev_qmeta">[piconname:$1]</div>',
            reptxt: ""
        })) : (b.reg_cmp.push({
                key: /\[qt\]/g,
                rep: '<div class="dev_quote chatQuote"><div class="quoteLeftArea"><span class="icoFontMessegeQuote"></span></div>',
                reptxt: '"'
            }), b.reg_cmp.push({
                key: /\[\/qt\]\n?/g,
                rep: "</div></div>",
                reptxt: ""
            }), b.reg_cmp.push({
                key: /\[qtmeta aid=(\d+) time=(\d+)\]/g,
                rep: '<div class="title">[piconname:$1]<time>[date:$2]</time></div><div class="quoteText">',
                reptxt: ""
            }),
            b.reg_cmp.push({
                key: /\[qtmeta aid=(\d+)\]/g,
                rep: '<div class="title">[piconname:$1]</div><div class="quoteText">',
                reptxt: ""
            }));
    b.reg_cmp.push({
        key: /\[info\]/g,
        rep: '<div class="chatInfo">',
        reptxt: "["
    });
    b.reg_cmp.push({
        key: /\[\/info\]/g,
        rep: "</div>",
        reptxt: "]"
    });
    b.reg_cmp.push({
        key: /\[title\]/g,
        rep: '<div class="title"><span class="icoFontInfo marginRight"></span>',
        reptxt: ""
    });
    b.reg_cmp.push({
        key: /\[\/title\]/g,
        rep: "</div>",
        reptxt: ":"
    });
    b.reg_cmp.push({
        key: /\[\/task\]/g,
        rep: "</div></div>",
        reptxt: "]"
    });
    b.reg_cmp.push({
        key: /\[task:\d+\]/g,
        rep: "",
        reptxt: ""
    });
    b.reg_cmp.push({
        key: /\[To:(\d+)\]/g,
        rep: '<span class="chatTimeLineTo">TO</span>[picon:$1]',
        reptxt: "[To]"
    });
    b.reg_cmp.push({
        key: /\[rp aid=(\d+) to=([\d]+)-([\d]+)\]/g,
        rep: '<div class="chatTimeLineReply _replyMessage" data-rid="$2" data-mid="$3"><span class="icoFontActionReply icoSizeSmall"></span><span>RE</span></div>[picon:$1]',
        reptxt: "[RE]"
    });
    b.security_dat.disable_download_file ? (b.reg_cmp.push({
            key: /\[download:(\d+)\]/g,
            rep: "<div>",
            reptxt: ""
        }),
        b.reg_cmp.push({
            key: /\[\/download\]/g,
            rep: "</div>",
            reptxt: ""
        }), b.reg_cmp.push({
            key: /\[preview id=(\d+) ht=(\d+)\]/g,
            rep: "",
            reptxt: ""
        })) : PLATFORM == "mobile-iphone" || PLATFORM == "mobile-android" || PLATFORM == "mobile-web" ? (b.reg_cmp.push({
        key: /\[download:(\d+)\]/g,
        rep: '<div class="cw_file_download"><a href="' + SERVER_PATH + '/gateway.php?cmd=download_file&bin=1&preview=1&file_id=$1" target="_blank">',
        reptxt: ""
    }), b.reg_cmp.push({
        key: /\[\/download\]/g,
        rep: "</a></div>",
        reptxt: ""
    }), b.reg_cmp.push({
        key: /\[preview id=(\d+) ht=(\d+)\]/g,
        rep: '<div><a href="' + SERVER_PATH + '/gateway.php?cmd=download_file&bin=1&preview=1&file_id=$1" target="_blank"><img class="cw_file_preview_img" style="height:$2px" src="' + SERVER_PATH + '/gateway.php?cmd=preview_file&bin=1&file_id=$1"/></a></div>',
        reptxt: ""
    })) : (b.reg_cmp.push({
        key: /\[download:(\d+)\]/g,
        rep: '<div><a href="gateway.php?cmd=download_file&bin=1&file_id=$1" target="_downloadFrame">',
        reptxt: ""
    }), b.reg_cmp.push({
        key: /\[preview id=(\d+) ht=(\d+)\]/g,
        rep: '<div><img class="_filePreview imagePreview" data-file-id="$1" style="height:$2px" src="gateway.php?cmd=preview_file&bin=1&file_id=$1"/></div>',
        reptxt: ""
    }));
    b.reg_cmp.push({
        key: /\[piconname:(\d+)\]/g,
        rep: "[picon:$1] [pname:$1]",
        reptxt: "[pname:$1]"
    });
    b.reg_cmp.push({
        key: /\[hr\]/g,
        rep: '<hr size="1"/>',
        reptxt: " --- "
    });
    for (var a = [], d = 0; d < b.emoticon.length; d++) a.push({
        key: b.emoticon[d].key,
        regex: b.emoticon[d].regex,
        src: b.emoticon[d].src,
        title: b.emoticon[d].title
    });
    for (d = 0; d < b.secret_emoticon.length; d++) a.push({
        key: b.secret_emoticon[d].key,
        regex: b.secret_emoticon[d].regex,
        src: b.secret_emoticon[d].src,
        title: b.secret_emoticon[d].title
    });
    var e = function(a) {
        var b = {
                "&#58;": /:/g,
                "&#40;": /\(/g,
                "&#41;": /\)/g,
                "&#91;": /\[/g,
                "&#93;": /\]/g,
                "&#45;": /-/g,
                "&#124;": /\|/g,
                "&#42;": /\*/g,
                "&#94;": /\^/g
            },
            f;
        for (f in b) a = a.replace(b[f], f);
        return a
    };
    a.sort(function(a, b) {
        return b.key.length - a.key.length
    });
    for (var d = 0, f = a.length; d < f; d++) {
        var g = e(a[d].key);
        b.reg_cmp.push({
            key: a[d].regex,
            rep: '<img src="./image/emoticon/' + a[d].src + '" title="' + a[d].title + " " + g + '" alt="' + g + '" class="ui_emoticon"/>',
            reptxt: a[d].key
        })
    }
    PLATFORM == "web" ? (b.reg_cmp.push({
        key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+)/gi,
        rep: '<a href="$1" title="$1" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',
        reptxt: "$1"
    }), a = "", b.displayEsetLink() && (a = '<div class="esetLink"><a href="http://www.eset-smart-security.jp/go/101304/e42/" target="_blank">' + L._chatwork_file_upload_eset_link + "</a></div>"), b.reg_cmp.push({
        key: /\[\/download\]/g,
        rep: "</a></div>" + a,
        reptxt: ""
    })) : PLATFORM == "mobile-web" && (b.reg_cmp.push({
        key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+|tel:\d+)/gi,
        rep: '<a href="$1" title="$1" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',
        reptxt: "$1"
    }), b.reg_cmp.push({
        key: /(tel(\d+))/gi,
        rep: '<a href="tel:$2" title="tel:$2" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',
        reptxt: "$1"
    }));
    b.reg_cmp.push({
        key: /(?: ~~~CW-NOURL-ESCAPE-START~~~|~~~CW-NOURL-ESCAPE-END~~~ )/g,
        rep: ""
    });
    b.reg_cmp.push({
        key: /~~~CW-ESCAPE-(?:START|END)~~~/g,
        rep: ""
    })
}

function ChatWork(b) {
    var a = this,
        d = !0,
        e = !0;
    a.version = b;
    a.api_version = 4;
    a.announce_id = void 0;
    a.is_first_load = !0;
    a.init_loaded = !1;
    a.stop_watching = !1;
    a.watching = !1;
    a.watch_timer = null;
    a.watch_lasttime = 0;
    a.online_status_timer = null;
    a.delay = 1E3;
    a.last_id = 0;
    a.enable_popup = !1;
    a.last_timeline_buildkey = "";
    a.last_tasklist_buildkey = "";
    a.last_filelist_buildkey = "";
    a.ajax_lasttime = 0;
    a.ajax_cmd_count = {};
    a.error_count = 0;
    a.reg_cmp = [];
    a.plan = "";
    a.is_business = !1;
    a.is_admin = !1;
    a.is_admin_user = !1;
    a.is_security = !1;
    a.is_enterprise = !1;
    a.available_biwa = !1;
    a.switch_biwa = !1;
    a.first_biwa = !1;
    a.security_dat = {};
    var f = {};
    a.emoticon = [];
    a.secret_emoticon = [];
    a.prepare = function() {
        a.emoticon = [{
            title: L.emoticon_smile,
            key: ":)",
            regex: /:\)/g,
            src: "emo_smile.gif"
        }, {
            title: L.emoticon_sad,
            key: ":(",
            regex: /:\(/g,
            src: "emo_sad.gif"
        }, {
            title: L.emoticon_more_smile,
            key: ":D",
            regex: /:D/g,
            src: "emo_more_smile.gif"
        }, {
            title: L.emoticon_lucky,
            key: "8-)",
            regex: /8-\)/g,
            src: "emo_lucky.gif"
        }, {
            title: L.emoticon_surprise,
            key: ":o",
            regex: /:o/g,
            src: "emo_surprise.gif"
        }, {
            title: L.emoticon_wink,
            key: ";)",
            regex: /;\)/g,
            src: "emo_wink.gif"
        }, {
            title: L.emoticon_tears,
            key: ";(",
            regex: /;\(/g,
            src: "emo_tears.gif"
        }, {
            title: L.emoticon_sweat,
            key: "(sweat)",
            regex: /\(sweat\)/g,
            src: "emo_sweat.gif"
        }, {
            title: L.emoticon_mumu,
            key: ":|",
            regex: /:\|/g,
            src: "emo_mumu.gif"
        }, {
            title: L.emoticon_kiss,
            key: ":*",
            regex: /:\*/g,
            src: "emo_kiss.gif"
        }, {
            title: L.emoticon_tongueout,
            key: ":p",
            regex: /:p/g,
            src: "emo_tongueout.gif"
        }, {
            title: L.emoticon_blush,
            key: "(blush)",
            regex: /\(blush\)/g,
            src: "emo_blush.gif"
        }, {
            title: L.emoticon_wonder,
            key: ":^)",
            regex: /:\^\)/g,
            src: "emo_wonder.gif"
        }, {
            title: L.emoticon_snooze,
            key: "|-)",
            regex: /\|-\)/g,
            src: "emo_snooze.gif"
        }, {
            title: L.emoticon_love,
            key: "(inlove)",
            regex: /\(inlove\)/g,
            src: "emo_love.gif"
        }, {
            title: L.emoticon_grin,
            key: "]:)",
            regex: /\]:\)/g,
            src: "emo_grin.gif"
        }, {
            title: L.emoticon_talk,
            key: "(talk)",
            regex: /\(talk\)/g,
            src: "emo_talk.gif"
        }, {
            title: L.emoticon_yawn,
            key: "(yawn)",
            regex: /\(yawn\)/g,
            src: "emo_yawn.gif"
        }, {
            title: L.emoticon_puke,
            key: "(puke)",
            regex: /\(puke\)/g,
            src: "emo_puke.gif"
        }, {
            title: L.emoticon_ikemen,
            key: "(emo)",
            regex: /\(emo\)/g,
            src: "emo_ikemen.gif"
        }, {
            title: L.emoticon_otaku,
            key: "8-|",
            regex: /8\-\|/g,
            src: "emo_otaku.gif"
        }, {
            title: L.emoticon_ninmari,
            key: ":#)",
            regex: /:#\)/g,
            src: "emo_ninmari.gif"
        }, {
            title: L.emoticon_nod,
            key: "(nod)",
            regex: /\(nod\)/g,
            src: "emo_nod.gif"
        }, {
            title: L.emoticon_shake,
            key: "(shake)",
            regex: /\(shake\)/g,
            src: "emo_shake.gif"
        }, {
            title: L.emoticon_wry_smile,
            key: "(^^;)",
            regex: /\(\^\^\;\)/g,
            src: "emo_wry_smile.gif"
        }, {
            title: L.emoticon_whew,
            key: "(whew)",
            regex: /\(whew\)/g,
            src: "emo_whew.gif"
        }, {
            title: L.emoticon_clap,
            key: "(clap)",
            regex: /\(clap\)/g,
            src: "emo_clap.gif"
        }, {
            title: L.emoticon_bow,
            key: "(bow)",
            regex: /\(bow\)/g,
            src: "emo_bow.gif"
        }, {
            title: L.emoticon_roger,
            key: "(roger)",
            regex: /\(roger\)/g,
            src: "emo_roger.gif"
        }, {
            title: L.emoticon_muscle,
            key: "(flex)",
            regex: /\(flex\)/g,
            src: "emo_muscle.gif"
        }, {
            title: L.emoticon_dance,
            key: "(dance)",
            regex: /\(dance\)/g,
            src: "emo_dance.gif"
        }, {
            title: L.emoticon_komanechi,
            key: "(:/)",
            regex: /\(:\/\)/g,
            src: "emo_komanechi.gif"
        }, {
            title: L.emoticon_devil,
            key: "(devil)",
            regex: /\(devil\)/g,
            src: "emo_devil.gif"
        }, {
            title: L.emoticon_star,
            key: "(*)",
            regex: /\(\*\)/g,
            src: "emo_star.gif"
        }, {
            title: L.emoticon_heart,
            key: "(h)",
            regex: /\(h\)/g,
            src: "emo_heart.gif"
        }, {
            title: L.emoticon_flower,
            key: "(F)",
            regex: /\(F\)/g,
            src: "emo_flower.gif"
        }, {
            title: L.emoticon_cracker,
            key: "(cracker)",
            regex: /\(cracker\)/g,
            src: "emo_cracker.gif"
        }, {
            title: L.emoticon_cake,
            key: "(^)",
            regex: /\(\^\)/g,
            src: "emo_cake.gif"
        }, {
            title: L.emoticon_coffee,
            key: "(coffee)",
            regex: /\(coffee\)/g,
            src: "emo_coffee.gif"
        }, {
            title: L.emoticon_beer,
            key: "(beer)",
            regex: /\(beer\)/g,
            src: "emo_beer.gif"
        }, {
            title: L.emoticon_handshake,
            key: "(handshake)",
            regex: /\(handshake\)/g,
            src: "emo_handshake.gif"
        }, {
            title: L.emoticon_yes,
            key: "(y)",
            regex: /\(y\)/g,
            src: "emo_yes.gif"
        }];
        a.secret_emoticon = [{
            title: L.emoticon_ec14,
            key: "(ec14)",
            regex: /\(ec14\)/g,
            src: "emo_ceo.gif"
        }];
        a.view = new ChatWorkView(a);
        a.request = new Request;
        a.storage = new Storage;
        a.localStorage = new LocalStorage;
        a.view.prepare()
    };
    var g = !1;
    a.prepareRegExp = function() {
        prepare_replace_code(a);
        g = !0
    };
    a.getLiveUrl = function(a,
        b, f) {
        a = "./live.php?rid=" + a + "&aid=";
        a += b.join(",");
        switch (f) {
            case "voice":
                a += "&type=voice";
                break;
            default:
                a += "&type=video"
        }
        return a
    };
    a.getLiveUrlById = function(a, b) {
        var f = "./live/" + a;
        switch (b) {
            case "voice":
                f += "?type=voice";
                break;
            default:
                f += "?type=video"
        }
        return f
    };
    a.alert = function(a, b) {
        typeof a == "object" && (a = a.length > 0 ? a.join("\n") : L.raise_error);
        if (!a) a = L.raise_error;
        CW.view.alert(a, b)
    };
    a.confirm = function(a, b, f) {
        CW.view.confirm(a, b, f)
    };
    a.showProgress = function(a) {
        CW.view.showProgress(a)
    };
    a.hideProgress =
        function() {
            CW.view.hideProgress()
        };
    var l = {};
    a.read = function(b, f) {
        var d;
        b == void 0 && (b = 4E3);
        if (a.isLogin() && (d = f == void 0 ? RM : RL.rooms[f]) && d.read_lock != !0) {
            a.cancelRead(d.id);
            var e = d.getUnreadNum();
            if (e > 0) {
                var g = RL.rooms[d.id],
                    j = g.getViewStat();
                g.reading = !0;
                l[d.id] = setTimeout(function() {
                    RM && RM.id == g.id ? j = RM.getViewStat() : e = g.getUnreadNum();
                    e > j.noview_num && CW.get("gateway.php", {
                        cmd: "read",
                        room_id: g.id,
                        mid: g.mid,
                        last_chat_id: j.last_read_id
                    }, function(a) {
                        if (a.read_num) {
                            var b = g.getUnreadNum();
                            g.read_num =
                                a.read_num;
                            var f = g.getUnreadNum(),
                                d = g.getMentionNum();
                            g.mention_num = a.mention_num;
                            a = g.getMentionNum();
                            b > 0 && f == 0 ? RL.unread_room_sum-- : b == 0 && f > 0 && RL.unread_room_sum++;
                            d > 0 && a == 0 ? RL.mention_room_sum-- : d == 0 && a > 0 && RL.mention_room_sum++;
                            RL.view.updateUnreadNum(g.id);
                            RL.view.updateSumNumbers();
                            RM.id == g.id && g.timeline.read(e)
                        }
                        g.reading = !1
                    }, function(a, b) {
                        if (b && b.error && b.error == "no_member") {
                            var f = g.id;
                            CW.post("gateway.php", {
                                cmd: "is_room_member",
                                rid: f
                            }, function(a) {
                                a.is_room_member == !1 && (RL.deleteRoom(f), RL.build())
                            })
                        }
                        g.reading = !1
                    });
                    RM && RM.getUnreadNum() > 0 && CW.read()
                }, b)
            }
        }
    };
    a.cancelRead = function(a) {
        l[a] && clearTimeout(l[a])
    };
    a.sendFeedback = function(a) {
        a = $.extend({
            message: "",
            version: 1,
            success: null,
            error: null
        }, a);
        CW.post("gateway.php", {
            cmd: "send_feedback",
            version: a.version,
            message: a.message
        }, function() {
            typeof a.success == "function" && a.success()
        }, function() {
            typeof a.error == "function" && a.error()
        })
    };
    a.popup = function(b, f, d, e) {
        return a.view.popup(b, f, d, e)
    };
    a.playSound = function(b, f) {
        return a.view.playSound(b, f)
    };
    a.stopSound = function(b) {
        return a.view.stopSound(b)
    };
    var k = !0,
        i = !1;
    a.watch = function(b) {
        if (!a.watching) {
            a.watching = !0;
            a.watch_timer && clearTimeout(a.watch_timer);
            a.watch_timer = setTimeout(function() {
                a.watch(!0)
            }, 3E5);
            if (a.last_id == 0) {
                if (!RL) return;
                k && (k = !1, a.view.firstWatch());
                CW.get("gateway.php", {
                    cmd: "init_load",
                    rid: RL.lazy_select,
                    type: RL.load_type,
                    "new": 1
                }, function(a) {
                    CW.setInitData(a)
                })
            } else CW.get("gateway.php", {
                cmd: "get_update",
                account_id: AC.myid,
                last_id: a.last_id,
                ver: a.version,
                "new": 1
            }, function(f) {
                if (a.last_id != f.last_id) {
                    a.last_id = f.last_id;
                    var d =
                        f.update_info,
                        e = {},
                        g;
                    for (g in d) {
                        var j = d[g];
                        switch (g) {
                            case "room":
                                for (var h in j) {
                                    if (j[h].rd && (RL.deleteRoom(h), !j[h].a)) continue;
                                    j[h].lt != void 0 && RL.setLastUpdateTime(h, j[h].lt);
                                    j[h].i && RL.setInfoUpdate(h);
                                    j[h].p && RL.setPersonalUpdate(h);
                                    j[h].d && RL.setDescUpdate(h);
                                    j[h].m && RL.setMemberUpdate(h);
                                    j[h].t && RL.setTaskUpdate(h);
                                    if (j[h].cd)
                                        for (var o in j[h].cd)
                                            if (RL.rooms[h].timeline && (RL.rooms[h].timeline.deleteChat(o), RL.setUpdate(!0)), RM && h == RM.id) e.RM = !0;
                                    if (j[h].ce)
                                        for (o in j[h].ce)
                                            if (!j[h].cd || !j[h].cd[o])
                                                if (RL.rooms[h].timeline &&
                                                    (RL.rooms[h].timeline.refreshChat(o), RL.setUpdate(!0)), RM && h == RM.id) e.RM = !0;
                                    if (j[h].fe)
                                        for (var m in j[h].fe)(!j[h].fd || !j[h].fd[m]) && FL.refreshFile(m);
                                    if (j[h].fd)
                                        for (m in j[h].fd)
                                            if (FL.deleteFileStat(m), RM && h == RM.id) e.RM = !0;
                                    if (j[h].tc)
                                        for (var l in j[h].tc)(!j[h].td || !j[h].td[l]) && TK.checkTask(l, j[h].tc[l], !0);
                                    if (j[h].te)
                                        for (l in j[h].te)(!j[h].td || !j[h].td[l]) && TK.refreshTask(l);
                                    if (j[h].td)
                                        for (l in j[h].td) TK.deleteTaskStat(l);
                                    if (j[h].s != void 0) RL.rooms[h].sticky = j[h].s, RL.setUpdate(!0);
                                    j[h].lvc !=
                                        void 0 && CW.openLiveNotification(j[h].lvc, h);
                                    j[h].lvr != void 0 && CW.closeLiveNotification(j[h].lvr, h)
                                }
                                break;
                            case "account":
                                if (j.a) {
                                    var n = [],
                                        k;
                                    for (k in j.a) n.push(parseInt(k, 10));
                                    AC.refreshAccount(n, !0)
                                }
                                j.s && ST.getSetting();
                                if (j.r)
                                    for (h in n = j.r, AC.account_dat[n] && AC.refreshContactList(), RL.rooms) RL.rooms[h].member_dat[n] && RL.setMemberUpdate(h);
                                j.n && ST.getAnnounce();
                                j.ss && ST.refreshSocialConnectStatus();
                                break;
                            case "contact":
                                j.l && AC.refreshContactList();
                                if (j.m) {
                                    n = [];
                                    for (k in j.m) n.push(parseInt(k, 10));
                                    AC.refreshMentionInfo(n)
                                }
                                j.a && j.a.length > 0 && AC.client_addContact(j.a);
                                j.d && j.d.length > 0 && AC.client_deleteContact(j.d);
                                break;
                            case "category":
                                j.l && RL.refreshCategory()
                        }
                    }
                    e.RM && RM.build();
                    RL.hasUpdate() && RL.build();
                    a.watch_lasttime = microtime(!0);
                    b && a.comet()
                }
                if (a.announce_id != f.announce_id) a.announce_id = f.announce_id, ST.getAnnounce();
                f.update != void 0 && (i || (d = f.update.replace("a", ""), f.update.indexOf("a") == -1 && a.view.alertUpdated(d), a.view.showUpdated(d)), i = !0)
            });
            a.watching = !1
        }
    };
    a.comet = function() {
        a.request.comet()
    };
    a.postLoad = function() {
        a.view.postLoad()
    };
    a.isOnline = function() {
        return d
    };
    a.isLogin = function() {
        return e
    };
    a.setOnline = function() {
        e = d = !0;
        a.view.setOnline()
    };
    a.setConnectionError = function(b) {
        d = b == "NO LOGIN" ? !0 : b == "INVALID USER" ? !0 : b == "INVALID TOKEN" ? !0 : b == "NO TOKEN" ? !0 : b == "IP ERROR" ? !0 : !1;
        e = !1;
        a.view.setConnectionError(b)
    };
    a.initRoomLoad = function() {
        a.view.initRoomLoad()
    };
    a.initComplete = function() {
        a.view.initComplete()
    };
    a.post = function(b, f, d, e) {
        return a.ajax({
            type: "POST",
            dataType: "json",
            async: !0,
            url: b,
            data: f,
            success: d,
            error: e
        })
    };
    a.postSync = function(b, f, d, e) {
        return a.ajax({
            type: "POST",
            dataType: "json",
            async: !1,
            url: b,
            data: f,
            success: d,
            error: e
        })
    };
    a.get = function(b, f, d, e) {
        return a.ajax({
            type: "GET",
            dataType: "json",
            async: !0,
            url: b,
            data: f,
            success: d,
            error: e
        })
    };
    a.getSync = function(b, f, d, e) {
        return a.ajax({
            type: "GET",
            dataType: "json",
            async: !1,
            url: b,
            data: f,
            success: d,
            error: e
        })
    };
    a.ajax = function(b) {
        CW.isOnline() || CW.checkOnline(function() {}, 1);
        if (AC) {
            var d = "";
            b.data.cmd && (b.url += "?cmd=" + b.data.cmd, d = b.data.cmd.toString(),
                delete b.data.cmd);
            d && f[d] ? (b.dataType = "jsonp", b.url = ACCOUNT_SERVER_PATH + "/" + b.url) : b.url = SERVER_PATH + "/" + b.url;
            b.url += "&myid=" + AC.myid + "&_v=" + a.version + "&_av=" + a.api_version + "&_t=" + ACCESS_TOKEN + "&ln=" + LANGUAGE;
            b.timeout = 3E5;
            if (CW.isLogin()) {
                if (typeof b.error != "function") b.error = function(b) {
                    a.ajax_lasttime = microtime(!0);
                    typeof b == "object" && (b = b.length != void 0 ? b.join("\n") : "");
                    if (b) switch (b) {
                        case "NO LOGIN":
                        case "INVALID USER":
                        case "NO TOKEN":
                        case "INVALID TOKEN":
                        case "BAD LOGIN INFO":
                        case "UUID ERROR":
                        case "IP ERROR":
                        case "LOCK":
                        case "OFFLINE":
                        case "TIMEOUT":
                            break;
                        default:
                            CW.alert(b)
                    }
                    CW.checkOnline()
                };
                else {
                    var e = b.error;
                    b.error = function(b, f) {
                        a.ajax_lasttime = microtime(!0);
                        e(b, f);
                        CW.checkOnline()
                    }
                }
                if (typeof b.success != "function") b.success = function() {
                    a.ajax_lasttime = microtime(!0)
                };
                else {
                    var g = b.success;
                    b.success = function(f) {
                        if (f && f.status.success == !0) a.ajax_lasttime = microtime(!0), g(f.result);
                        else {
                            var d = "";
                            if (f && (d = f.status.message, d == "NO LOGIN" || d == "INVALID USER" || d == "NO TOKEN" || d == "INVALID TOKEN" || d == "IP ERROR")) CW.setConnectionError(d), CW.checkOnline();
                            b.error(d,
                                f.result)
                        }
                    }
                }
                return a.request.ajax(b)
            } else typeof b.error == "function" && b.error()
        }
    };
    var h = !1,
        j = null,
        o = 1E4;
    a.checkOnline = function(b, f) {
        typeof b != "function" && (b = function() {});
        f && (j && (clearTimeout(j), j = null), h = !1);
        if (h === !1) {
            h = !0;
            var d = function() {
                    h = !1;
                    CW.setOnline();
                    b()
                },
                e = function(f) {
                    f == void 0 && (f = o);
                    o *= o < 10 ? 3 : 1.2;
                    j || (j = setTimeout(function() {
                        h = !1;
                        j = null;
                        a.checkOnline(b)
                    }, f))
                };
            setTimeout(function() {
                a.request.checkOnline(function() {
                    d();
                    o = 1E4
                }, function(a) {
                    CW.setConnectionError(a);
                    a == "NO LOGIN" || a == "INVALID USER" ||
                        a == "NO TOKEN" || a == "INVALID TOKEN" || a == "BAD LOGIN INFO" || a == "UUID ERROR" || a == "IP ERROR" || a == "LOCK" ? CW.view.showLoginDialog(d, e, a) : a == "OFFLINE" ? CW.view.showOfflineDialog(d, e) : a == "TIMEOUT" ? CW.view.showTimeoutDialog(d, e) : e()
                })
            }, 1E3)
        }
    };
    a.renderMessage = function(b, f) {
        if (!b || b.length == void 0) return "";
        f == void 0 && (f = {});
        g || a.prepareRegExp();
        return a.view.renderMessage(b, f)
    };
    var m = new Date;
    a.getDate = function(a, b) {
        m.setTime(a * 1E3);
        var f = m.getFullYear(),
            d = m.getMonth() + 1,
            e = m.getDate(),
            g = m.getHours(),
            j = m.getMinutes(),
            h = m.getSeconds();
        g < 10 && (g = "0" + g);
        j < 10 && (j = "0" + j);
        h < 10 && (h = "0" + h);
        b == void 0 && (b = ST.data.dateformat + " H:i");
        return b.replace("Y", f).replace("m", d).replace("d", e).replace("H", g).replace("i", j).replace("s", h)
    };
    var n = {
        hovertip: !0,
        clicktip: !0,
        small: !1,
        ui: !1,
        src: !1
    };
    a.getAvatarPanel = function(b, f) {
        if (b) {
            if (f == void 0) f = n;
            else
                for (var d in n) f[d] == void 0 && (f[d] = n[d]);
            return a.view.getAvatarPanel(b, f)
        }
    };
    a.getCoverPanel = function(b, f) {
        var d = {
            src: !1,
            extraclass: !1
        };
        if (b) {
            if (f == void 0) f = d;
            else
                for (var e in d) f[e] ==
                    void 0 && (f[e] = d[e]);
            return a.view.getCoverPanel(b, f)
        }
    };
    a.getName = function(b) {
        return a.view.getName(b)
    };
    a.getOrgName = function(b) {
        return a.view.getOrgName(b)
    };
    a.getDepartment = function(b) {
        return a.view.getDepartment(b)
    };
    a.getOrgTitle = function(b) {
        return a.view.getOrgTitle(b)
    };
    a.getFullName = function(b) {
        return a.view.getFullName(b)
    };
    a.getChatWorkId = function(b) {
        return a.view.getChatWorkId(b)
    };
    a.getChatWorkIdLink = function(b) {
        return a.view.getChatWorkIdLink(b)
    };
    a.getSkypeLink = function(b, f) {
        return a.view.getSkypeLink(b,
            f)
    };
    a.getTwitterLink = function(b, f) {
        return a.view.getTwitterLink(b, f)
    };
    a.getFacebookLink = function(b, f) {
        return a.view.getFacebookLink(b, f)
    };
    a.getEmailLink = function(b) {
        return a.view.getEmailLink(b)
    };
    a.getOrgTellLink = function(b) {
        return a.view.getOrgTellLink(b)
    };
    a.getExtensionTelLink = function(b) {
        return a.view.getExtensionTelLink(b)
    };
    a.getMobileTelLink = function(b) {
        return a.view.getMobileTelLink(b)
    };
    a.isEmail = function(a) {
        if (a.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/)) return !0;
        return !1
    };
    a.isTelNumber =
        function(a) {
            if (a.match(/^[0-9]+[0-9-]+[0-9]+$/)) return !0;
            return !1
        };
    a.getRoomName = function(b) {
        if (b && (b = RL.rooms[b])) return b.type == "contact" ? a.getName(b.getAccountId()) : escape_html(b.getName())
    };
    var t = {
        chatlink: !0,
        webservice: !0,
        request_contact: !0
    };
    a.getContactPanel = function(b, f) {
        if (b) {
            if (f == void 0) f = t;
            else
                for (var d in t) f[d] == void 0 && (f[d] = t[d]);
            return a.view.getContactPanel(b, f)
        }
    };
    a.registerAvatar = function(b) {
        a.view.registerAvatar(b)
    };
    var u = {
        type: "timeline"
    };
    a.getFilePanel = function(b, f) {
        if (f == void 0) f =
            u;
        else
            for (var d in u) f[d] == void 0 && (f[d] = u[d]);
        return a.view.getFilePanel(FL.file_id2file_dat[b] == void 0 ? !1 : FL.file_id2file_dat[b], f)
    };
    var s = {
        type: "timeline"
    };
    a.getTaskPanel = function(b, f) {
        if (!b) return !1;
        if (f == void 0) f = s;
        else
            for (var d in s) f[d] == void 0 && (f[d] = s[d]);
        return a.view.getTaskPanel(TK.task_id2task_dat[b] == void 0 ? !1 : TK.task_id2task_dat[b], f)
    };
    a.openLiveNotification = function(b, f) {
        a.view.openLiveNotification(b, f)
    };
    a.closeLiveNotification = function(b, f) {
        a.view.closeLiveNotification(b, f)
    };
    a.buildLayout =
        function() {
            a.view.buildLayout()
        };
    a.resizeLayout = function() {
        a.view.resizeLayout()
    };
    a.getMemoryUsage = function() {
        return 0
    };
    a.showStorageLimitDialog = function(b) {
        a.view.showStorageLimitDialog(b)
    };
    a.setLimitDialog = function(b, f) {
        a.view.setLimitDialog(b, f)
    };
    a.setInitData = function(b) {
        a.last_id = b.last_id;
        a.announce_id = b.announce_id;
        a.plan = b.plan;
        a.is_admin = b.is_admin;
        a.is_admin_user = b.is_admin_user;
        a.is_business = b.is_business;
        a.is_security = b.is_security;
        a.contact_limit_num = b.contact_limit_num;
        a.group_limit_num =
            b.group_limit_num;
        a.is_enterprise = b.is_enterprise;
        a.available_biwa = b.available_biwa;
        a.switch_biwa = b.switch_biwa;
        a.first_biwa = b.first_biwa;
        a.closed_old_ui = b.closed_old_ui;
        if (a.is_security) a.security_dat = b.security_dat;
        ST.updateUserActionState(b.user_action_state_data);
        ST.updateSetting(b.setting_data);
        AC.updateContactList(b.contact_dat, b.mention_dat, b.myrequest_dat, b.request_dat);
        RL.updateCategory(b.cat_dat);
        RL.updateRoomData(b.room_dat);
        b.announce_dat && ST.updateAnnounce(b.announce_dat);
        CW.postLoad();
        FL.updateStorageInfo(b.storage, b.storage_limit, b.storage_limit_time, b.is_storage_limit);
        if (!a.init_loaded) {
            for (var b = RL.getSortedRoomList(), f = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                RL.rooms[e].getUnreadNum() > 0 && (f++, RL.setInfoUpdate(e));
                if (f > 100) break
            }
            RL.build()
        }
        a.init_loaded = !0;
        a.comet()
    };
    a.isMatchedWithKeyList = function(a, b) {
        for (var f = b.toLowerCase(), d = a.length; d--;)
            if (f.indexOf(a[d]) == -1) return !1;
        return !0
    };
    a.splitWithSpace = function(a) {
        return a.split(/[ \u3000]+/)
    };
    a.displayEsetLink = function() {
        return LANGUAGE ===
            "ja" && !CW.is_business
    };
    a.checkNotificationPermission = function() {
        ST.getSetting(function() {
            if (NotificationAPI) {
                var a = ST.data.desktop_alert,
                    b = NotificationAPI.checkPermission();
                a === 1 && b === 1 && NotificationAPI.requestPermission(function(a) {
                    if (a === 0) CW.enable_popup = !0
                })
            }
        })
    }
}

function Account(b) {
    var a = this;
    a.myid = parseInt(b, 10);
    a.account_dat = {};
    a.unknown_flag = {};
    a.contact_list = [];
    a.contact_flag = {};
    a.myrequest_dat = {};
    a.request_dat = {};
    a.facebook_app_id = "";
    a.prepare = function() {
        a.facebook_app_id = is_local_env ? "194987520565581" : "270897682951829";
        a.view = new AccountView(a);
        a.view.prepare()
    };
    a.setName = function(b, d) {
        a.setParam(b, "nm", d)
    };
    a.setOrgName = function(b, d) {
        a.setParam(b, "onm", d)
    };
    a.setDepartment = function(b, d) {
        a.setParam(b, "dp", d)
    };
    a.setTitle = function(b, d) {
        a.setParam(b, "tt",
            d)
    };
    a.setChatWorkId = function(b, d) {
        a.setParam(b, "cwid", d)
    };
    a.setGroupId = function(b, d) {
        a.setParam(b, "gid", d)
    };
    a.setAvatarId = function(b, d) {
        a.setParam(b, "av", d)
    };
    a.setCoverId = function(b, d) {
        a.setParam(b, "cv", d)
    };
    a.setRoomId = function(b, d) {
        a.setParam(b, "rid", parseInt(d, 10))
    };
    a.setNickName = function(b, d) {
        a.setParam(b, "nn", d)
    };
    a.setMentionNum = function(b, d) {
        a.setParam(b, "mn", d)
    };
    a.setSkype = function(b, d) {
        a.setParam(b, "sp", d)
    };
    a.setTwitter = function(b, d) {
        a.setParam(b, "tw", d)
    };
    a.setFacebook = function(b, d) {
        a.setParam(b,
            "fb", d)
    };
    a.setUrl = function(b, d) {
        a.setParam(b, "url", d)
    };
    a.setAddress = function(b, d) {
        a.setParam(b, "ad", d)
    };
    a.setIntroduction = function(b, d) {
        a.setParam(b, "intro", d)
    };
    a.setEmail = function(b, d) {
        a.setParam(b, "mail", d)
    };
    a.setOrgTel = function(b, d) {
        a.setParam(b, "otel", d)
    };
    a.setExtensionTel = function(b, d) {
        a.setParam(b, "etel", d)
    };
    a.setMobileTel = function(b, d) {
        a.setParam(b, "mtel", d)
    };
    a.setUndisclosed = function(b, d) {
        a.setParam(b, "ud", d)
    };
    a.setParam = function(b, d, e) {
        b = parseInt(b, 10);
        a.account_dat[b] == void 0 && (a.account_dat[b] = {});
        a.account_dat[b][d] = e
    };
    a.getName = function(b) {
        var d = a.getParam(b, "nm", !1);
        if (d === !1) a.unknown_flag[b] = !0, d = "Loading... ";
        else if (d == "") return L.deleted_user;
        return d
    };
    a.getOrgName = function(b) {
        return a.getParam(b, "onm", "")
    };
    a.getDepartment = function(b) {
        return a.getParam(b, "dp", "")
    };
    a.getTitle = function(b) {
        return a.getParam(b, "tt", "")
    };
    a.getFullName = function(b) {
        var d = a.getOrgName(b);
        d && (d += " ");
        return d + a.getName(b)
    };
    a.getOrgTitle = function(b) {
        var d = a.getOrgName(b);
        d && (d += " ");
        return d + a.getDepartment(b)
    };
    a.getChatWorkId = function(b) {
        return a.getParam(b, "cwid", "")
    };
    a.getGroupId = function(b) {
        return a.getParam(b, "gid", 0)
    };
    a.getNickName = function(b, d) {
        if (d) return a.getParam(b, "nn", "");
        else {
            var e = a.getParam(b, "nn", "");
            if (e === "") return L.nickname_prefix + AC.getName(b) + L.nickname_suffix;
            return e
        }
    };
    a.getDefaultNickName = function(a) {
        return L.nickname_prefix + AC.getName(a) + L.nickname_suffix
    };
    a.getMentionNum = function(b) {
        return a.getParam(b, "mn", 0)
    };
    var d = ["blue", "green", "orange", "red", "violet", "yellow"];
    a.getAvatarId =
        function(b) {
            var e = a.getParam(b, "av", "0/.");
            e == "0/." && (e = a.isDeleted(b) ? "ico_avatar_notfound.png" : "ico_default_" + d[b % d.length] + ".png");
            return e
        };
    a.getCoverId = function(b) {
        var d = ["block_pattern", "check_blue", "flower_blue", "flower_pink", "leaf", "light", "mizutama", "party", "retro", "square", "zebra"],
            e = a.getParam(b, "cv", "0/.");
        e == "0/." && (e = a.isDeleted(b) ? "not_found.jpg" : d[b % d.length] + ".jpg");
        return e
    };
    a.getSkype = function(b) {
        return a.getParam(b, "sp", "")
    };
    a.getTwitter = function(b) {
        return a.getParam(b, "tw", "")
    };
    a.getFacebook = function(b) {
        return a.getParam(b, "fb", "")
    };
    a.getUrl = function(b) {
        return a.getParam(b, "url", "")
    };
    a.getAddress = function(b) {
        return a.getParam(b, "ad", "")
    };
    a.getIntroduction = function(b) {
        return a.getParam(b, "intro", "")
    };
    a.getEmail = function(b) {
        return a.getParam(b, "mail", "")
    };
    a.getOrgTel = function(b) {
        return a.getParam(b, "otel", "")
    };
    a.getExtensionTel = function(b) {
        return a.getParam(b, "etel", "")
    };
    a.getMobileTel = function(b) {
        return a.getParam(b, "mtel", "")
    };
    a.getOrgNamePriv = function(b) {
        return a.getParam(b,
            "onm_priv", "")
    };
    a.getDepartmentPriv = function(b) {
        return a.getParam(b, "dp_priv", "")
    };
    a.getTitlePriv = function(b) {
        return a.getParam(b, "tt_priv", "")
    };
    a.getAvatarPriv = function(b) {
        return a.getParam(b, "av_priv", "")
    };
    a.getCoverPriv = function(b) {
        return a.getParam(b, "cv_priv", "")
    };
    a.getSkypePriv = function(b) {
        return a.getParam(b, "sp_priv", "")
    };
    a.getTwitterPriv = function(b) {
        return a.getParam(b, "tw_priv", "")
    };
    a.getFacebookPriv = function(b) {
        return a.getParam(b, "fb_priv", "")
    };
    a.getUrlPriv = function(b) {
        return a.getParam(b,
            "url_priv", "")
    };
    a.getAddressPriv = function(b) {
        return a.getParam(b, "ad_priv", "")
    };
    a.getIntroductionPriv = function(b) {
        return a.getParam(b, "intro_priv", "")
    };
    a.getEmailPriv = function(b) {
        return a.getParam(b, "mail_priv", "")
    };
    a.getOrgTelPriv = function(b) {
        return a.getParam(b, "otel_priv", "")
    };
    a.getExtensionTelPriv = function(b) {
        return a.getParam(b, "etel_priv", "")
    };
    a.getMobileTelPriv = function(b) {
        return a.getParam(b, "mtel_priv", "")
    };
    a.isUndisclosed = function(b) {
        return a.getParam(b, "ud", 0)
    };
    a.getParam = function(b, d,
        e) {
        if (b == void 0) return !1;
        b = parseInt(b, 10);
        return a.account_dat[b] != void 0 && a.account_dat[b][d] != void 0 ? a.account_dat[b][d] : e
    };
    a.getSortedMemberList = function() {
        var b = [],
            d;
        for (d in a.account_dat) d != 0 && d != AC.myid && !AC.isDeleted(d) && b.push(d);
        b.sort(function(b, f) {
            return a.isContact(b) ? a.isContact(f) ? AC.getMentionNum(f) - AC.getMentionNum(b) : -1 : a.isContact(f) ? 1 : AC.getMentionNum(f) - AC.getMentionNum(b)
        });
        return b
    };
    a.isContact = function(b) {
        b = parseInt(b, 10);
        if (a.contact_flag[b]) return !0;
        return !1
    };
    a.client_addContact =
        function(b) {
            for (var d, e = [], k = 0; k < b.length; k++) d = parseInt(b[k], 10), e.push(d), a.account_dat[d] = void 0, a.isContact(d) || (a.contact_list.push(d), a.contact_flag[d] = !0, a.myrequest_dat != void 0 && a.myrequest_dat[d] != void 0 && delete a.myrequest_dat[d], a.request_dat != void 0 && a.request_dat[d] != void 0 && delete a.request_dat[d]);
            e.length > 0 && a.refreshAccount(e, !0, function() {
                a.buildMyContact()
            })
        };
    a.client_deleteContact = function(b) {
        for (var d, e = [], k = 0; k < b.length; k++)
            if (d = parseInt(b[k], 10), a.isContact(d)) {
                for (var i = 0; i <
                    a.contact_list.length; i++)
                    if (a.contact_list[i] == d) {
                        a.contact_list.splice(i, 1);
                        break
                    }
                delete a.contact_flag[d];
                a.account_dat[d] = void 0;
                e.push(d)
            }
        e.length > 0 && a.refreshAccount(e, !1, function() {
            a.buildMyContact()
        })
    };
    a.isDeleted = function(b) {
        if (a.getParam(b, "nm", !1) == "") return !0;
        return !1
    };
    a.getRoomId = function(b) {
        b = parseInt(b, 10);
        return a.account_dat[b] != void 0 && a.account_dat[b].rid != void 0 ? a.account_dat[b].rid : 0
    };
    a.hasUnknown = function() {
        for (var b in a.unknown_flag)
            if (a.isUnknown(b)) return !0;
            else delete a.unknown_flag[b];
        return !1
    };
    a.isUnknown = function(b) {
        if (a.account_dat[b] == void 0 || a.account_dat[b].nm == void 0) return !0;
        return !1
    };
    var e = {};
    a.getUnknown = function(b) {
        var d = [],
            l;
        for (l in a.unknown_flag) a.isUnknown(l) ? e[l] == void 0 && (d.push(parseInt(l, 10)), e[l] = !0) : delete a.unknown_flag[l];
        d.length > 0 ? a.refreshAccount(d, !1, b) : typeof b == "function" && b()
    };
    a.refreshAccount = function(b, d, e) {
        b.length > 0 && CW.post("gateway.php", {
            cmd: "get_account_info",
            aid: b,
            get_private_data: d ? 1 : 0
        }, function(d) {
            for (var g in d.account_dat) a.setAccountDat(g,
                d.account_dat[g]);
            a.unknown_flag = {};
            typeof e == "function" && e(d.account_dat);
            a.view.updateAvatar(b);
            a.view.updateCover(b);
            a.view.updateName(b);
            CW.is_business ? a.refreshInternal() : RL.build()
        })
    };
    a.refreshAccountDetailData = function(b, d, e) {
        CW.post("gateway.php", {
            cmd: "get_detail_account_info",
            aid: b,
            get_priv_setting: d
        }, function(d) {
            d.account_dat && a.setAccountDat(b, d.account_dat, !0);
            typeof e == "function" && e()
        })
    };
    (function() {
        var b = {},
            d = {
                nm: a.setName,
                name: a.setName,
                onm: a.setOrgName,
                orgname: a.setOrgName,
                dp: a.setDepartment,
                tt: a.setTitle,
                av: a.setAvatarId,
                avid: a.setAvatarId,
                cv: a.setCoverId,
                gid: a.setGroupId,
                rid: a.setRoomId,
                tw: a.setTwitter,
                fb: a.setFacebook,
                sp: a.setSkype,
                cwid: a.setChatWorkId,
                ad: a.setAddress,
                url: a.setUrl,
                intro: a.setIntroduction,
                mail: a.setEmail,
                otel: a.setOrgTel,
                etel: a.setExtensionTel,
                mtel: a.setMobileTel,
                ud: a.setUndisclosed
            };
        a.setAccountDat = function(e, k, i) {
            var h = "",
                j;
            for (j in d) k[j] != void 0 && (d[j](e, k[j]), h = j + "_priv", k[h] != void 0 && a.setParam(e, h, k[h]));
            b[e] = i ? !0 : !1
        };
        a.hasDetailData = function(a) {
            if (b[a]) return !0;
            return !1
        }
    })();
    a.refreshMentionInfo = function(b) {
        CW.get("gateway.php", {
            cmd: "get_mention_info",
            a: b
        }, function(b) {
            for (var d in b.mention_dat) a.setNickName(d, b.mention_dat[d].nn), a.setMentionNum(d, b.mention_dat[d].mn);
            for (var f in RL.rooms)
                if (b = RL.rooms[f], b.sorted_member_list != null) b.sorted_member_list = null
        })
    };
    a.refreshContactList = function() {
        CW.get("gateway.php", {
            cmd: "get_contact_list"
        }, function(b) {
            a.updateContactList(b.contact_dat, b.mention_dat, b.myrequest_dat, b.request_dat)
        })
    };
    a.updateContactList = function(b,
        d, e, k) {
        for (var i = {}, h = {}, j = [], o = 0; o < a.contact_list.length; o++) i[a.contact_list[o]] = !0, h[a.contact_list[o]] = !0;
        a.contact_list = [];
        a.contact_flag = {};
        a.setName(0, "ChatWork");
        for (var m in a.account_dat) a.setRoomId(m, 0);
        for (m in b) m = parseInt(m, 10), a.contact_flag[m] = !0, CW.registerAvatar(m), a.contact_list.push(m), a.setAccountDat(m, b[m]), delete i[m], h[m] || j.push(m);
        j && (a.view.updateAvatar(j), a.view.updateName(j));
        for (m in d) a.setNickName(m, d[m].nn), a.setMentionNum(m, d[m].mn);
        for (m in e) a.setAccountDat(m, e[m]);
        a.myrequest_dat = e;
        d = [];
        for (m in k) a.setAccountDat(m, k[m]), CW.init_loaded && !a.request_dat[m] && d.push(m);
        d && (a.view.updateAvatar(d), a.view.updateName(d));
        if (CW.init_loaded) {
            d = [];
            for (m in a.request_dat) !k[m] && !b[m] && (a.account_dat[m] = void 0, d.push(m));
            for (m in i) a.account_dat[m] = void 0, d.push(m);
            d.length > 0 && a.refreshAccount(d)
        }
        a.request_dat = k;
        a.refreshInternal();
        a.buildMyStatus();
        a.buildMyContact()
    };
    a.showChatWorkIdRequestDialog = function(b) {
        a.view.showChatWorkIdRequestDialog(b)
    };
    a.refreshInternal = function() {
        if (CW.is_business) {
            var a = !1,
                b;
            for (b in RL.rooms) a = !0, RL.rooms[b].is_internal = -1;
            a && RL.build()
        }
    };
    a.buildMyStatus = function() {
        a.view.buildMyStatus()
    };
    a.buildMyContact = function() {
        a.view.buildMyContact()
    };
    a.searchSocialContactList = function(b) {
        typeof a.view.searchSocialContactList == "function" && a.view.searchSocialContactList(b)
    };
    a.saveInviteInfo = function(a, b) {
        CW.post("gateway.php", {
            cmd: "save_invite_info",
            type: a,
            invite_data: b
        })
    };
    a.isMatchedWithKeyList = function(b, d) {
        var e = a.getSearchKeys(d).join(" ");
        return CW.isMatchedWithKeyList(b,
            e)
    };
    a.getContactNum = function() {
        return this.contact_list.length - 1
    };
    a.getSearchKeys = function(a) {
        return [AC.getName(a), AC.getNickName(a, !0), AC.getOrgName(a), AC.getDepartment(a), AC.getChatWorkId(a)]
    }
}

function Setting() {
    var b = this;
    b.data = {};
    b.notification_data = {};
    b.loaded = !1;
    b.announce_dat = {};
    b.user_action_state_data = {};
    b.sound_default = "mallet";
    b.dateformat2short = {
        "Y\u5e74m\u6708d\u65e5": "m\u6708d\u65e5",
        "m/d/Y": "m/d",
        "d/m/Y": "d/m",
        "Y/m/d": "m/d",
        "m-d-Y": "m-d",
        "d-m-Y": "d-m",
        "Y-m-d": "m-d",
        "m.d.Y": "m.d",
        "d.m.Y": "d.m",
        "Y.m.d": "m.d",
        "m/d-Y": "m/d"
    };
    b.prepare = function() {
        b.view = new SettingView(b);
        b.view.prepare()
    };
    b.isLoaded = function() {
        return b.loaded
    };
    b.getSetting = function(a) {
        CW.get("gateway.php", {
                cmd: "get_setting"
            },
            function(d) {
                d.setting_data && b.updateSetting(d.setting_data, a)
            })
    };
    b.getUserActionState = function(a) {
        CW.get("gateway.php", {
            cmd: "get_user_action_state"
        }, function(d) {
            d.user_action_state_data && b.updateUserActionState(d.user_action_state_data, a)
        })
    };
    b.updateSetting = function(a, d) {
        var e = {},
            f;
        for (f in a) b.data[f] != a[f] && (e[f] = b.data[f] == void 0 ? 1 : 2), b.data[f] = a[f];
        if (b.data.enter_action == void 0) b.data.enter_action = "br";
        b.data.desktop_alert = b.data.desktop_alert == void 0 ? 0 : parseInt(b.data.desktop_alert, 10);
        b.data.notifier_message =
            b.data.notifier_message == void 0 ? 1 : parseInt(b.data.notifier_message, 10);
        b.data.popup_sound = b.data.popup_sound == void 0 ? 1 : parseInt(b.data.popup_sound, 10);
        if (b.data.sound_type == void 0) b.data.sound_type = b.sound_default;
        if (b.data.sound_volume == void 0) b.data.sound_volume = 0.5;
        b.data.startup_help = b.data.startup_help == void 0 ? 1 : parseInt(b.data.startup_help, 10);
        b.data.notifier_duration = b.data.notifier_duration == void 0 ? 10 : parseInt(b.data.notifier_duration, 10);
        b.data.notifier_onlyto = b.data.notifier_onlyto == void 0 ?
            0 : parseInt(b.data.notifier_onlyto, 10);
        b.data.allow_search = b.data.allow_search == void 0 ? 1 : parseInt(b.data.allow_search, 10);
        b.data.notify_term = b.data.notify_term == void 0 ? 1 : parseInt(b.data.notify_term, 10);
        b.data.faviconstat = b.data.faviconstat == void 0 ? 0 : parseInt(b.data.faviconstat, 10);
        b.data.show_delmessage = b.data.show_delmessage == void 0 ? 0 : parseInt(b.data.show_delmessage, 10);
        b.data.show_external = b.data.show_external == void 0 ? 1 : parseInt(b.data.show_external, 10);
        b.data.private_nickname = b.data.private_nickname ==
            void 0 ? 1 : parseInt(b.data.private_nickname, 10);
        b.data.shorten_url = b.data.shorten_url == void 0 ? 1 : parseInt(b.data.shorten_url, 10);
        b.data.show_stepguide = b.data.show_stepguide == void 0 ? 1 : parseInt(b.data.show_stepguide, 10);
        b.data.welcome = b.data.welcome == void 0 ? 0 : parseInt(b.data.welcome, 10);
        b.data.announce == void 0 ? b.data.announce = 0 : b.data.desktop_alert = parseInt(b.data.desktop_alert, 10);
        if (b.data.dateformat == void 0) b.data.dateformat = L.dateformat;
        b.data.dateformat_short = b.dateformat2short[b.data.dateformat];
        b.loaded = !0;
        e.announce == 2 && b.getAnnounce();
        if (CW.init_loaded) {
            if ((e.show_delmessage != void 0 || e.shorten_url != void 0) && RM) CW.last_timeline_buildkey = "", RM.build();
            if (e.faviconstat != void 0 && ST.data.faviconstat) {
                f = 0;
                if (RM && RM.id) f = RM.id;
                RL.view.updateTitle(f)
            }
            e.show_external != void 0 && RL.build()
        }
        ST.view.updateSetting();
        typeof d == "function" && d()
    };
    b.is_set_action_state = !1;
    b.updateUserActionState = function(a) {
        for (var d in a) b.user_action_state_data[d] = a[d];
        b.is_set_action_state = !0
    };
    b.sendChatSetting = function(a,
        b) {
        typeof b != "function" && (b = function() {});
        CW.post("gateway.php", {
            cmd: "send_chat_setting",
            data: a
        }, b)
    };
    b.getAnnounce = function() {
        CW.get("gateway.php", {
            cmd: "get_announce",
            announce: ST.data.announce
        }, function(a) {
            a.announce_dat && b.updateAnnounce(a.announce_dat)
        })
    };
    b.closeAnnounce = function() {
        if (b.announce_dat.id != void 0) b.sendChatSetting({
            announce: b.announce_dat.id
        }), b.announce_dat = {}, b.view.updateAnnounce()
    };
    b.updateAnnounce = function(a) {
        b.announce_dat = a;
        b.view.updateAnnounce()
    };
    b.refreshSocialConnectStatus =
        function(a) {
            CW.post("gateway.php", {
                cmd: "get_social_info"
            }, function(d) {
                d.social_info != void 0 && (b.view.refreshSocialConnectStatus(d.social_info), b.getSetting());
                typeof a == "function" && a()
            })
        };
    b.loadNotificationSetting = function() {
        CW.get("gateway.php", {
            cmd: "set_notification_data",
            account_id: myid,
            notification_id: NOTIFICATION_ID,
            device_type: DEVICE_TYPE,
            model: Ti.Platform.model,
            target_token: DEVICE_TOKEN,
            is_first_load: !0
        }, function(a) {
            if (a.notification_id != void 0) NOTIFICATION_ID = a.notification_id, Ti.App.Properties.setString("notification_id",
                NOTIFICATION_ID);
            if (a.notification_dat != void 0) {
                b.notification_data = a.notification_dat;
                if (Ti.App.Properties.hasProperty("last_notification_status") && (a = Ti.App.Properties.getString("last_notification_status"), Ti.App.Properties.setString("last_notification_status", null), a == "open")) b.notification_data.notification_status = "open", CW.post("gateway.php", {
                    cmd: "set_notification_data",
                    account_id: myid,
                    notification_id: NOTIFICATION_ID,
                    device_type: DEVICE_TYPE,
                    status: "open"
                });
                b.view.setNotificationSetting()
            }
        })
    };
    b.openSocialConnectWindow = function(a, d) {
        typeof b.view.openSocialConnectWindow == "function" && b.view.openSocialConnectWindow(a, d)
    };
    b.disconnectSocialAccount = function(a, d) {
        CW.post("gateway.php", {
            cmd: "disconnect_social_service",
            social_service: a
        }, function() {
            b.refreshSocialConnectStatus(function() {
                typeof d == "function" && d()
            })
        })
    };
    b.offFbConncetSetting = function(a) {
        CW.post("gateway.php", {
            cmd: "off_fbconnect_setting"
        }, function() {
            b.refreshSocialConnectStatus(function() {
                typeof a == "function" && a()
            })
        })
    };
    b.isConnectedFacebook =
        function() {
            return this.data.fbconnect === "1"
        }
}

function File() {
    var b = this;
    b.file_id2file_dat = {};
    b.unknown_flag = {};
    b.storage = {
        used: 0,
        limit: 0,
        available: 0
    };
    b.myfile_load_flag = {
        loading: !1,
        loaded: !1
    };
    b.prepare = function() {
        b.view = new FileView(b);
        b.view.prepare()
    };
    b.registerFile = function(a) {
        b.file_id2file_dat[a] == void 0 && (b.unknown_flag[a] = !0)
    };
    b.hasUnknown = function() {
        for (var a in b.unknown_flag) b.file_id2file_dat[a] != void 0 && delete b.unknown_flag[a];
        for (a in b.unknown_flag)
            if (b.file_id2file_dat[a] == void 0) return !0;
        return !1
    };
    b.getUnknown = function(a) {
        var d = [],
            e;
        for (e in b.unknown_flag) b.file_id2file_dat[e] == void 0 ? d.push(e) : delete b.unknown_flag[e];
        d.length && CW.postSync("gateway.php", {
            cmd: "get_file",
            file_id: d
        }, function(d) {
            for (var e in d.file_dat) b.file_id2file_dat[e] = d.file_dat[e], delete b.unknown_flag[e];
            typeof a == "function" && a(d.file_dat)
        })
    };
    b.setFile = function(a) {
        b.file_id2file_dat[a.id] = a
    };
    b.deleteFile = function(a, d, e) {
        var f;
        f = a instanceof Array ? a : [a];
        CW.get("gateway.php", {
            cmd: "delete_file",
            f: f
        }, function(a) {
            a.storage != void 0 && a.storage_limit != void 0 &&
                b.updateStorageInfo(a.storage, a.storage_limit, a.storage_limit_time, a.is_storage_limit);
            for (var e = 0, k = f.length; e < k; e++) b.deleteFileStat(f[e]);
            typeof d == "function" && d(a)
        }, function(a) {
            typeof e == "function" && e(a)
        })
    };
    b.deleteFileStat = function(a) {
        if (b.hasFile(a) && b.file_id2file_dat[a].st != "deleted") b.file_id2file_dat[a].st = "deleted", delete b.file_id2file_dat[a].fn, b.buildByFileId(a, !0)
    };
    b.hasFile = function(a) {
        return b.file_id2file_dat[a] != void 0 ? !0 : !1
    };
    b.sortFileList = function(a) {
        a.sort(function(a, e) {
            return b.file_id2file_dat[e].id -
                b.file_id2file_dat[a].id
        })
    };
    b.getMyFileList = function() {
        var a = [],
            b;
        for (b in FL.file_id2file_dat) FL.file_id2file_dat[b].aid == AC.myid && a.push(b);
        return a
    };
    b.editFile = function(a, b, e, f) {
        CW.get("gateway.php", {
            cmd: "edit_file",
            file_id: a,
            filename: b
        }, function(a) {
            typeof e == "function" && e(a);
            CW.watch()
        }, function(a) {
            typeof f == "function" ? f(a) : CW.alert(a)
        })
    };
    b.refreshFile = function(a) {
        b.hasFile(a) && CW.get("gateway.php", {
            cmd: "get_file",
            file_id: [a]
        }, function(d) {
            for (var e in d.file_dat) {
                var f = !1,
                    g;
                for (g in d.file_dat[e]) b.file_id2file_dat[e][g] !=
                    d.file_dat[e][g] && (b.file_id2file_dat[e][g] = d.file_dat[e][g], f = !0);
                f && b.buildByFileId(a)
            }
        })
    };
    b.loadAllMyFile = function() {
        if (!b.myfile_load_flag.loading) {
            b.myfile_load_flag.loading = !0;
            var a = b.getMyFileList(),
                a = a.length > 1E3 ? "" : a.join(",");
            CW.post("gateway.php", {
                cmd: "load_my_file",
                fid: a
            }, function(a) {
                if (a.file_dat) {
                    for (var e in a.file_dat) b.setFile(a.file_dat[e]);
                    b.myfile_load_flag.loading = !1;
                    b.myfile_load_flag.loaded = time();
                    b.buildAllMyFile()
                }
            })
        }
    };
    b.buildByFileId = function(a) {
        b.view.buildByFileId(a)
    };
    b.buildAllMyFile = function() {
        b.view.buildAllMyFile()
    };
    b.getFileListRows = function(a) {
        return b.view.getFileListRows(a)
    };
    b.updateStorageInfo = function(a, d, e, f) {
        b.view.updateStorageInfo(a, d, e, f);
        b.storage.used = a.total;
        b.storage.limit = d;
        b.storage.available = b.storage.limit - b.storage.used
    };
    b.isExecutableExtension = function(a) {
        var b = ["ade", "adp", "bat", "chm", "cmd", "com", "cpl", "exe", "hta", "ins", "isp", "jse", "lib", "mde", "msc", "msp", "mst", "pif", "scr", "sct", "shb", "sys", "vb", "vbe", "vbs", "vxd", "wsc", "wsf", "wsh"];
        if ((a =
                a.match(/\.([^\.]+)$/)) && in_array(a[1].toLowerCase(), b)) return !0;
        return !1
    };
    b.containIllegalChar = function(a) {
        if (a.match(/[\\\/:\*\?"<>\|]/)) return !0;
        return !1
    }
}

function Task() {
    var b = this;
    b.task_id2task_dat = {};
    b.mytask_load_flag = {
        loading: {
            openmy: !1,
            openassign: !1,
            donemy: !1,
            doneassign: !1
        },
        loaded: {
            openmy: 0,
            openassign: 0,
            donemy: 0,
            doneassign: 0
        }
    };
    b.prepare = function() {
        b.view = new TaskView(b);
        b.view.prepare()
    };
    b.checkTask = function(a, d, e) {
        if (b.hasTask(a)) {
            var f = parseInt(d, 10) > 0 ? "done" : "open";
            if (b.task_id2task_dat[a].st != f) b.task_id2task_dat[a].st = f, b.buildByTaskId(a, !0), e || (b.task_id2task_dat[a].aid == AC.myid || b.task_id2task_dat[a].bid == AC.myid) && CW.get("gateway.php", {
                cmd: "check_task",
                task_id: a,
                to: d
            })
        }
    };
    b.setTask = function(a) {
        a.id = parseInt(a.id, 10);
        a.aid = parseInt(a.aid, 10);
        a.bid = parseInt(a.bid, 10);
        a.rid = parseInt(a.rid, 10);
        a.cid = parseInt(a.cid, 10);
        b.task_id2task_dat[a.id] = a
    };
    b.hasTask = function(a) {
        return b.task_id2task_dat[a] != void 0 ? !0 : !1
    };
    b.deleteTask = function(a, d, e) {
        CW.get("gateway.php", {
            cmd: "delete_task",
            task_id: a
        }, function(f) {
            f.storage != void 0 && f.storage_limit != void 0 && b.updateStorageInfo(f.storage, f.storage_limit, f.storage_limit_time, f.is_storage_limit);
            b.deleteTaskStat(a);
            typeof d == "function" && d(f)
        }, function(a) {
            typeof e == "function" && e(a)
        })
    };
    b.deleteTaskStat = function(a) {
        if (b.hasTask(a) && b.task_id2task_dat[a].st != "deleted") b.task_id2task_dat[a].st = "deleted", delete b.task_id2task_dat[a].tn, b.buildByTaskId(a)
    };
    b.refreshTask = function(a) {
        b.hasTask(a) && CW.get("gateway.php", {
            cmd: "get_task",
            tid_list: [a]
        }, function(d) {
            for (var e in d.task_dat) {
                var f = !1,
                    g;
                for (g in d.task_dat[e]) b.task_id2task_dat[e][g] != d.task_dat[e][g] && (b.task_id2task_dat[e][g] = d.task_dat[e][g], f = !0);
                f && b.buildByTaskId(a)
            }
        })
    };
    b.buildByTaskId = function(a, d) {
        b.view.buildByTaskId(a, d)
    };
    b.getMyTaskList = function(a, b) {
        b == void 0 && (b = "my");
        var e = [],
            f;
        for (f in TK.task_id2task_dat)(b == "my" ? TK.task_id2task_dat[f].aid : TK.task_id2task_dat[f].bid) == AC.myid && TK.task_id2task_dat[f].st == a && e.push(f);
        return e
    };
    b.sortTaskList = function(a) {
        a.sort(function(a, e) {
            var f = 0,
                g = 0;
            b.task_id2task_dat[a].lt && (f = parseInt(b.task_id2task_dat[a].lt, 10));
            b.task_id2task_dat[e].lt && (g = parseInt(b.task_id2task_dat[e].lt, 10));
            if (f > 0 && g == 0) return -1;
            else if (g > 0 &&
                f == 0) return 1;
            if (f < g) return -1;
            else if (f > g) return 1;
            else {
                if (b.task_id2task_dat[a].aid == AC.myid && b.task_id2task_dat[e].aid != AC.myid) return -1;
                else if (b.task_id2task_dat[a].aid != AC.myid && b.task_id2task_dat[e].aid == AC.myid) return 1;
                return b.task_id2task_dat[a].id - b.task_id2task_dat[e].id
            }
        })
    };
    b.buildAllMyTask = function(a, d) {
        b.view.buildAllMyTask(a, d)
    };
    b.getTaskListRows = function(a, d) {
        return b.view.getTaskListRows(a, d)
    }
}

function RoomList() {
    var b = this;
    b.rooms = {};
    b.lazy_select = 0;
    b.lazy_select_chat = 0;
    b.has_update = !0;
    b.rebuild_room = !1;
    b.update_flag = {};
    b.last_update_time_dat = {};
    b.category_dat = {};
    b.load_type = "";
    b.focused_room_id = 0;
    b.filter_word = "";
    b.filter_readonly = !1;
    b.filter_toonly = !1;
    b.filter_taskonly = !1;
    b.filter_internalonly = !1;
    b.filter_remain_flag = {};
    b.filter_category = "";
    b.category_defaults = {
        all: !0,
        contact: !0,
        group: !0,
        mytask: !0
    };
    b.role_map = {
        "1": "admin",
        "2": "member",
        "3": "readonly"
    };
    b.room_type_map = {
        "1": "group",
        "2": "contact",
        "3": "my"
    };
    b.preset_typemap = {
        "1": "group",
        "2": "check",
        "3": "document",
        "4": "meeting",
        "5": "event",
        "6": "project",
        "7": "business",
        "8": "study",
        "9": "security",
        "10": "star",
        "11": "idea",
        "12": "heart",
        "13": "magcup",
        "14": "beer",
        "15": "music",
        "16": "sports",
        "17": "travel"
    };
    b.preset_type = {};
    for (var a in b.preset_typemap) b.preset_type[b.preset_typemap[a]] = !0;
    b.filtered_room_list = [];
    b.unread_total = 0;
    b.mytask_total = 0;
    b.unread_room_sum = 0;
    b.mention_room_sum = 0;
    b.mytask_room_sum = 0;
    var d = {},
        e = !1;
    b.prepare = function() {
        b.view = new RoomListView(b);
        b.view.prepare()
    };
    b.getDefaultRoom = function() {
        var a = 0;
        if (b.lazy_select && b.rooms[b.lazy_select]) a = b.lazy_select;
        a || (a = AC.getRoomId(AC.myid));
        return b.rooms[a]
    };
    b.getSortedRoomList = function(a) {
        var d = [],
            e = [],
            k;
        for (k in b.rooms) b.rooms[k].sticky ? e.push(k) : d.push(k);
        switch (a) {
            case "name":
                d = b.sortByName(d);
                e = b.sortByName(e);
                break;
            default:
                d = b.sortByLastUpdateTime(d), e = b.sortByLastUpdateTime(e)
        }
        a = 0;
        for (k = d.length; a < k; a++) e.push(d[a]);
        return e
    };
    b.sortByName = function(a) {
        a.sort(function(a, d) {
            return sort_for_string(b.rooms[a].getName(),
                b.rooms[d].getName())
        });
        return a
    };
    b.sortByLastUpdateTime = function(a) {
        a.sort(function(a, d) {
            var f = b.last_update_time_dat[d] - b.last_update_time_dat[a];
            return f > 0 ? 1 : f == 0 ? a - d : -1
        });
        return a
    };
    b.getSortedCategoryList = function() {
        var a = [],
            d;
        for (d in b.category_dat) a.push(d);
        a.sort(function(a, d) {
            return sort_for_string(b.category_dat[a].name, b.category_dat[d].name)
        });
        return a
    };
    b.setLastUpdateTime = function(a, d) {
        if (b.last_update_time_dat[a] == void 0 || b.last_update_time_dat[a] < d) b.last_update_time_dat[a] = parseInt(d,
            10)
    };
    b.setInfoUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].info = !0
    };
    b.setPersonalUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].personal = !0
    };
    b.setTaskUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].task = !0
    };
    b.setMemberUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].member = !0
    };
    b.setDescUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].desc = !0
    };
    b.deleteRoom = function(a) {
        b.has_update = !0;
        RM && RM.id == a && (RM = null);
        if (b.rooms[a] != void 0) {
            b.rooms[a].free();
            delete b.rooms[a];
            var d, e, k;
            for (k in b.category_dat) {
                e = b.category_dat[k].list;
                for (var i = 0, h = e.length; i < h; i++)
                    if (d = e[i], d == a) {
                        e.splice(i, 1);
                        break
                    }
            }
        }
        RL.view.deleteRoom(a)
    };
    b.setUpdate = function(a) {
        b.has_update = a
    };
    b.hasUpdate = function() {
        return b.has_update
    };
    b.prepareUpdate = function(a) {
        b.rooms[a] == void 0 && (b.rooms[a] = new Room(a));
        b.has_update = !0;
        b.update_flag[a] == void 0 && (b.update_flag[a] = {})
    };
    b.prepareRM = function() {
        if (!RM && (RM = RL.getDefaultRoom())) RM.rswitch = !0, b.rebuild_room = !0
    };
    b.selectRoom = function(a, d, e) {
        e === void 0 &&
            (e = {});
        var k = $.extend({
            jumpTo: 0,
            jumpToCallback: function() {},
            smoothScroll: !1,
            messageHashUpdate: !0,
            highlight: !1
        }, e);
        if (RL && a)
            if (RL.rooms[a]) {
                b.view.selectRoom(a);
                RL.rooms[a].rswitch = !0;
                (d = parseInt(d, 10)) || (d = void 0);
                if (d) k.jumpTo = d, k.jump_to_chat_id = d, k.highlight = e.highlight !== void 0 ? e.highlight : !0;
                RL.rooms[a].build(k);
                b.focusRoom(a);
                (b.filter_readonly || b.filter_toonly || b.filter_taskonly || b.filter_internalonly) && setTimeout(function() {
                    RL.build()
                })
            } else CW.alert(L.chatroom_error_no_member)
    };
    b.selectCategory =
        function(a) {
            switch (a) {
                case "all":
                case "contact":
                case "group":
                case "mytask":
                    break;
                default:
                    if (b.category_dat[a] == void 0) return
            }
            b.filter_category = a;
            b.filter_remain_flag = {};
            b.view.selectCategory(a)
        };
    b.getCategoryName = function(a) {
        switch (a) {
            case "all":
                return L.chat_category_allchat;
            case "contact":
                return L.directchat;
            case "group":
                return L.groupchat;
            case "mytask":
                return L.chat_category_mytaskchat;
            default:
                return b.category_dat[a].name
        }
    };
    b.setReadOnly = function(a) {
        b.filter_readonly = a;
        b.filter_remain_flag = {};
        b.view.setReadOnly()
    };
    b.setToOnly = function(a) {
        b.filter_toonly = a;
        b.filter_remain_flag = {};
        b.view.setToOnly()
    };
    b.setTaskOnly = function(a) {
        b.filter_taskonly = a;
        b.filter_remain_flag = {};
        b.view.setTaskOnly()
    };
    b.setInternalOnly = function(a) {
        b.filter_internalonly = a;
        b.filter_remain_flag = {};
        b.view.setInternalOnly()
    };
    b.stickRoom = function(a, d, e) {
        b.rooms[a].sticky = d;
        b.build();
        CW.post("gateway.php", {
            cmd: "stick_room",
            room_id: a,
            stick: d
        }, function() {
            typeof e == "function" && e()
        })
    };
    b.load = function() {
        var a = [],
            d = [],
            e = [],
            k = [],
            i = {},
            h = !1,
            j;
        for (j in b.update_flag) RL.rooms[j] && (h = !0, b.update_flag[j].info != void 0 && a.push(j), b.update_flag[j].personal != void 0 && d.push(j), b.update_flag[j].member != void 0 && e.push(j), b.update_flag[j].task != void 0 && (RL.rooms[j].tasklist ? (i[j] = RL.rooms[j].tasklist.getTaskList(), i[j].length == 0 && (i[j] = 1)) : i[j] = 1), b.update_flag[j].desc != void 0 && k.push(j));
        if (RM && b.update_flag[RM.id] != void 0)
            for (var o in b.update_flag[RM.id])
                if (o != "personal") {
                    b.rebuild_room = !0;
                    break
                }
        b.has_update = !1;
        b.update_flag = {};
        if (h) {
            h = {};
            if (a.length) {
                o = 0;
                for (var m = a.length; o < m; o++) {
                    j = a[o];
                    h[j] = {};
                    if (b.rooms[j]) {
                        var n = b.rooms[j];
                        h[j].c = n.chat_num;
                        h[j].u = n.getUnreadNum();
                        h[j].l = n.timeline ? b.rooms[j].timeline.getLastChatId() : 0;
                        if (n.filelist) {
                            var t = n.filelist.getFileList();
                            h[j].f = t.length;
                            h[j].lf = n.filelist.getLastFileId()
                        }
                    } else h[j].c = 0, h[j].u = 0, h[j].l = 0;
                    h[j].t = b.last_update_time_dat[j] ? b.last_update_time_dat[j] : 0
                }
            }
            CW.post("gateway.php", {
                cmd: "get_room_info",
                i: h,
                p: d,
                m: e,
                d: k,
                t: i,
                rid: RL.lazy_select,
                type: b.load_type
            }, function(a) {
                b.updateRoomData(a.room_dat)
            })
        } else b.has_update = !1, b.build()
    };
    b.updateRoomData = function(a) {
        var g = !1,
            l = !1,
            k = {},
            i;
        for (i in a) {
            rval = a[i];
            RL.rooms[i] == void 0 && (RL.rooms[i] = new Room(i));
            var h = RL.rooms[i],
                j = h.getUnreadNum();
            h.mid = rval.mid;
            if (rval.c != void 0) h.chat_num = parseInt(rval.c, 10), h.name = "", h.allow_see_member = 1, h.allow_upload_file = 1, h.allow_add_task = 1, h.allow_send_message = 1, h.join_need_accept = 1, h["public"] = 0, h.link_name = "", h.header = "", h.icon = b.preset_typemap[1], h.icon_preset = !0;
            if (rval.f != void 0) h.file_num = parseInt(rval.f, 10);
            if (rval.t != void 0) h.task_num =
                parseInt(rval.t, 10);
            rval.n != void 0 && h.setName(rval.n);
            if (rval.mid) h.read_num = 0, h.mytask_num = 0, h.mention_num = 0, h.sticky = 0;
            if (rval.r != void 0) h.read_num = parseInt(rval.r, 10);
            if (rval.mt != void 0) h.mytask_num = parseInt(rval.mt, 10);
            if (rval.mn != void 0) h.mention_num = parseInt(rval.mn, 10);
            if (rval.s != void 0) h.sticky = parseInt(rval.s, 10);
            if (rval.aml != void 0) h.allow_see_member = parseInt(rval.aml, 10);
            if (rval.af != void 0) h.allow_upload_file = parseInt(rval.af, 10);
            if (rval.at != void 0) h.allow_add_task = parseInt(rval.at, 10);
            if (rval.am != void 0) h.allow_send_message = parseInt(rval.am, 10);
            if (rval.ja != void 0) h.join_need_accept = parseInt(rval.ja, 10);
            rval.p != void 0 && (h["public"] = parseInt(rval.p, 10));
            if (rval.ic != void 0) b.preset_typemap[rval.ic] ? (h.icon = b.preset_typemap[rval.ic], h.icon_preset = !0) : (h.icon = rval.ic, h.icon_preset = !1);
            if (rval.hr != void 0) h.header = rval.hr;
            if (rval.pd != void 0) h.public_description = rval.pd;
            if (rval.ln != void 0) h.link_name = rval.ln;
            if (rval.d != void 0) h.description = rval.d;
            if (rval.m != void 0) {
                for (var o in rval.m) rval.m[o] =
                    b.role_map[rval.m[o]], k[o] = !0;
                h.setMember(rval.m)
            }
            if (rval.mr != void 0)
                for (var m in h.member_request = rval.mr, h.member_request) {
                    var n = h.member_request[m];
                    AC.isUnknown(n.id) && AC.setAccountDat(n.id, n)
                }
            if (rval.tp != void 0) h.type = b.room_type_map[rval.tp];
            rval.lt != void 0 && RL.setLastUpdateTime(i, rval.lt);
            !j && j < h.getUnreadNum() && (l = !0);
            if (rval.task_dat) {
                if (!h.tasklist) h.tasklist = new TaskList(h);
                var j = [],
                    t;
                for (t in rval.task_dat) TK.setTask(rval.task_dat[t]), j.push(t);
                if (j.length > 0) TK.buildByTaskId(j), h.tasklist.loaded = !0
            }
            if (rval.file_list) {
                if (!h.filelist) h.filelist = new FileList(h);
                m = 0;
                for (j = rval.file_list.length; m < j; m++) h.filelist.insertFile(rval.file_list[m]);
                FL.myfile_load_flag.loaded && FL.buildAllMyFile()
            }
            if (rval.chat_list && rval.chat_list.length > 0) {
                if (!h.timeline) h.timeline = new TimeLine(h);
                if (CW.enable_popup && !CW.is_first_load) {
                    m = 0;
                    for (j = rval.chat_list; m < j; m++) k[rval.chat_list[m].aid] = !0
                }
                var u = "";
                m = 0;
                for (j = rval.chat_list.length; m < j; m++)
                    if (g = !0, h.timeline.addChat(rval.chat_list[m]), CW.enable_popup && !CW.is_first_load &&
                        (n = rval.chat_list[m], d[n.id] == void 0)) {
                        d[n.id] = !0;
                        var s = ST.data.notifier_message == "1" ? CW.renderMessage(n.msg, {
                                text: !0
                            }) : L.notifier_newmessage,
                            u = s.length > 0 && AC.myid != n.aid ? {
                                id: n.id,
                                aid: n.aid,
                                room_id: h.id,
                                msg: s
                            } : ""
                    }
            }
            b.updateMasterData(i, rval)
        }
        a = function() {
            u && (!ST.data.notifier_onlyto || b.rooms[u.room_id].timeline.chat_id2chat_dat[u.id].mn) && CW.popup(CW.getAvatarPanel(u.aid, {
                src: !0
            }), RL.rooms[u.room_id].getName(), AC.getName(u.aid) + ":" + u.msg, u.room_id);
            !wfocus && g && !e && !CW.is_first_load && ST.data.popup_sound ==
                1 && audioObjSupport && (e = !0, ST.view.isMultiSound(ST.data.sound_type) ? l ? CW.playSound(ST.data.sound_type) : CW.playSound(ST.data.sound_type + "2") : CW.playSound(ST.data.sound_type), setTimeout(function() {
                    e = !1
                }, 1E3));
            if (CW.is_first_load) CW.is_first_load = !1;
            b.build()
        };
        for (o in k) AC.getName(o);
        AC.hasUnknown() ? AC.getUnknown(a) : a();
        b.view.updateRoomData()
    };
    b.build = function() {
        if (b.has_update) return b.load();
        else {
            var a = b.getSortedRoomList();
            b.filtered_room_list = [];
            var d = null,
                e = !1,
                k = {};
            if (b.filter_category && !b.category_defaults[b.filter_category])
                for (var e = !0, d = 0, i = b.category_dat[b.filter_category].list.length; d < i; d++) k[b.category_dat[b.filter_category].list[d]] = !0;
            b.unread_room_sum = 0;
            b.mention_room_sum = 0;
            b.mytask_room_sum = 0;
            b.unread_total = 0;
            b.mytask_total = 0;
            i = [];
            b.filter_word && (i = CW.splitWithSpace(b.filter_word));
            for (var h = 0; h < a.length; h++)
                if (a[h] != void 0) {
                    var d = b.rooms[a[h]],
                        j = d.getUnreadNum(),
                        o = 0;
                    j > 0 && (b.unread_total += j, b.unread_room_sum++, o = d.getMentionNum(), o > 0 && b.mention_room_sum++);
                    d.mytask_num > 0 && (b.mytask_total += d.mytask_num, b.mytask_room_sum++);
                    if (i.length > 0) {
                        j = d.getName();
                        if (!j) continue;
                        if (d.type == "contact") {
                            if (!AC.isMatchedWithKeyList(i, d.getAccountId())) continue
                        } else if (!CW.isMatchedWithKeyList(i, j)) continue
                    } else if (!RM || !(d.id == RM.id && b.filter_remain_flag[d.id] != void 0)) {
                        if (e) {
                            if (k[d.id] != !0) continue
                        } else {
                            if (b.filter_category == "contact" && d.type != "contact") continue;
                            if (b.filter_category == "group" && d.type != "group") continue;
                            if (b.filter_category == "mytask" && d.mytask_num == 0) continue
                        }
                        if (b.filter_readonly && j == 0) continue;
                        if (b.filter_toonly && o ==
                            0) continue;
                        if (b.filter_taskonly && d.mytask_num == 0) continue;
                        if (b.filter_internalonly && !d.isInternal()) continue
                    }
                    b.filter_remain_flag[d.id] = !0;
                    b.filtered_room_list.push(a[h])
                }
            b.view.build(b.filtered_room_list);
            b.view.updateSumNumbers();
            if (b.lazy_select)
                if (b.rooms[b.lazy_select] != void 0) b.selectRoom(b.lazy_select, b.lazy_select_chat), b.lazy_select = 0, b.lazy_select_chat = 0;
                else {
                    if (RM) b.lazy_select = 0, b.lazy_select_chat = 0, CW.alert(L.chatroom_error_no_member, function() {
                        b.selectRoom(RM.id)
                    })
                } else b.rebuild_room &&
                RM && RM.build();
            b.rebuild_room = !1
        }
    };
    b.refreshCategory = function() {
        CW.get("gateway.php", {
            cmd: "get_category"
        }, function(a) {
            b.updateCategory(a.cat_dat)
        })
    };
    b.updateCategory = function(a) {
        b.category_dat = {};
        for (var d in a) b.category_dat[d] = a[d];
        RL.buildCategory()
    };
    b.buildCategory = function() {
        b.filter_category && !b.category_defaults[b.filter_category] && b.category_dat[b.filter_category] == void 0 && b.selectCategory("all");
        b.view.buildCategory()
    };
    b.getFocusedRoomId = function() {
        return b.focused_room_id
    };
    b.focusRoom = function(a) {
        b.focused_room_id =
            a;
        b.view.focusRoom(a)
    };
    b.clearFocusRoom = function() {
        b.focused_room_id = 0;
        b.view.clearFocusRoom()
    };
    b.showJoinPublicChatDialog = function(a) {
        b.rooms[a] != void 0 ? b.selectRoom(a) : CW.get("gateway.php", {
            cmd: "get_room_public_info",
            rid: a
        }, function(d) {
            if (d.error) {
                switch (d.error) {
                    case "joined":
                        b.selectRoom(a)
                }
                d.message && CW.alert(d.message)
            }
            if (d.room_dat != void 0) d = d.room_dat, d.id = a, b.view.showJoinPublicChatDialog(d)
        })
    };
    b.updateMasterData = function(a, d) {
        b.view.updateMasterData(a, d)
    };
    b.getGroupChatNum = function() {
        var a =
            0,
            b = this.rooms,
            d;
        for (d in b) b[d].type === "group" && a++;
        return a
    };
    b.getStickyRoomNum = function() {
        var a = 0,
            b = this.rooms,
            d;
        for (d in b) b[d].sticky && a++;
        return a
    }
}

function RoomDialog() {
    var b = this;
    b.prepare = function() {
        b.view = new RoomDialogView(b);
        b.view.prepare()
    };
    b.buildMember = function() {
        b.view.buildMember()
    }
}

function Room(b) {
        this.view = new RoomView(this);
        this.id = b;
        this.mid = 0;
        this.tasklist = this.filelist = this.timeline = null;
        this.mytask_num = this.task_num = this.file_num = this.chat_num = this.mention_num = this.read_num = 0;
        this.description = !1;
        this.member_dat = {};
        this.member_request = [];
        this.sorted_member_list = null;
        this.is_internal = -1;
        this.icon = "";
        this.icon_preset = !1;
        this.header = "";
        this.join_need_accept = this.allow_send_message = this.allow_add_task = this.allow_upload_file = this.allow_see_member = 0;
        this["public"] = 0;
        this.type =
            this.link_name = this.public_description = "";
        this.sending_id = 0;
        this.read_lock = this.rswitch = this.reading = this.sticky = !1;
        this._name = "";
        this.buildtime = this._account_id = 0
    }
    (function() {
        Room.prototype = {
            getUnreadNum: function() {
                var b = parseInt(this.chat_num - this.read_num, 10);
                b < 0 && (b = 0);
                return b
            },
            getMentionNum: function() {
                return this.mention_num
            },
            getViewStat: function() {
                return this.view.getViewStat()
            },
            isInternal: function() {
                this.is_internal == -1 && this.checkInternal();
                return this.is_internal == 1 ? !0 : !1
            },
            refreshTaskNum: function() {
                if (this.tasklist) {
                    for (var b = this.tasklist.getTaskList("open"), a = 0, d = 0, e = b.length; d < e; d++) TK.task_id2task_dat[b[d]].aid == AC.myid && a++;
                    this.task_num = b.length;
                    this.mytask_num = a
                }
            },
            getName: function(b) {
                var a = this.getAccountId();
                return a > 0 ? a == AC.myid ? L.mychat : b != void 0 && b.nameonly ? AC.getName(a) : AC.getFullName(a) : this._name
            },
            getSortedMemberList: function() {
                if (this.sorted_member_list) return this.sorted_member_list;
                var b = [],
                    a;
                for (a in this.member_dat) b.push(a);
                this.sortMember(b);
                return this.sorted_member_list = b
            },
            sortMember: function(b) {
                b.sort(function(a, b) {
                    if (a == AC.myid) return -1;
                    if (b == AC.myid) return 1;
                    return AC.getMentionNum(b) - AC.getMentionNum(a)
                })
            },
            setName: function(b) {
                this._name =
                    b
            },
            setMember: function(b) {
                this.member_dat = b;
                this.sorted_member_list = null;
                this.checkInternal();
                this._account_id = 0
            },
            checkInternal: function() {
                if (CW.is_business) {
                    this.is_internal = 1;
                    var b = AC.getGroupId(AC.myid),
                        a;
                    for (a in this.member_dat)
                        if (AC.getGroupId(a) != b) {
                            this.is_internal = 0;
                            break
                        }
                }
            },
            refreshMember: function() {
                var b = this,
                    a = b.id;
                CW.post("gateway.php", {
                    cmd: "get_room_info",
                    m: [a]
                }, function(d) {
                    if (d.room_dat[a].member_dat != void 0) b.member_dat = d.room_dat[a].member_dat, b.sorted_member_list = null, b.buildMemberList()
                })
            },
            getIcon: function(b, a) {
                a == void 0 && (a = "small");
                return this.view.getIcon(b, a)
            },
            getAccountId: function() {
                if (this._account_id != 0) return this._account_id;
                if (this.type == "my") return AC.myid;
                else if (this.type == "contact")
                    for (var b in this.member_dat)
                        if (AC.myid != b) return b;
                return 0
            },
            getJoinLink: function() {
                return this["public"] ? CHATWORK_MYPAGE_PATH + "/g/" + (this.link_name != "" ? this.link_name : this.id) : !1
            },
            addSendingChat: function(b) {
                this.sending_id++;
                this.timeline.sending_chat_list.push({
                    sid: this.sending_id,
                    aid: AC.myid,
                    mn: !1,
                    msg: b,
                    tm: time(),
                    utm: 0,
                    sent: !1
                });
                this.view.addSendingChat(this.sending_id);
                return this.sending_id
            },
            deleteSendingChat: function(b) {
                for (var a = !0, d = 0, e = this.timeline.sending_chat_list.length; d < e; d++) {
                    var f = this.timeline.sending_chat_list[d];
                    if (f.sid <= b && f.sent == !1) f.sent = !0;
                    f.sent || (a = !1)
                }
                if (a) this.timeline.sending_chat_list = []
            },
            load: function(b, a) {
                $.isNumeric(b) && (b = {
                    jumpTo: b
                });
                var d = $.extend({
                    jumpTo: 0,
                    autoBuild: !0
                }, b);
                this.prepareBuild();
                var e = {
                    cmd: "load_chat",
                    room_id: this.id,
                    last_chat_id: this.timeline.getLastChatId(),
                    first_chat_id: this.timeline.getFirstChatId(),
                    jump_to_chat_id: d.jumpTo,
                    unread_num: this.getUnreadNum()
                };
                if (RL.load_type == "mobile") e.limit_num = 20;
                if (!this.filelist.loaded) this.file_num == 0 ? this.filelist.loaded = !0 : e.file = 1;
                if (!this.tasklist.loaded) this.task_num == 0 ? this.tasklist.loaded = !0 : e.task = 1;
                if (this.description === !1) e.desc = 1;
                var f = this;
                CW.get("gateway.php", e, function(b) {
                    var e, k;
                    if (b.task_dat)
                        for (e in b.task_dat) TK.setTask(b.task_dat[e]);
                    if (b.file_list) {
                        e = 0;
                        for (k = b.file_list.length; e < k; e++) f.filelist.insertFile(b.file_list[e])
                    }
                    if (d.jumpTo) {
                        e =
                            0;
                        for (k = b.chat_list.length; e < k; e++) f.timeline.insertChat(b.chat_list[e])
                    } else {
                        e = 0;
                        for (k = b.chat_list.length; e < k; e++) f.timeline.addChat(b.chat_list[e])
                    }
                    if (b.description != void 0) f.description = b.description;
                    if (b.public_description != void 0) f.public_description = b.public_description;
                    if (RM && RM.id == f.id && (f.rswitch = !0, d.autoBuild)) d.autoBuild = !1, f.build(d);
                    typeof a == "function" && a()
                })
            },
            prepareBuild: function() {
                if (!this.timeline) this.timeline = new TimeLine(this);
                if (!this.filelist) this.filelist = new FileList(this);
                if (!this.tasklist) this.tasklist = new TaskList(this)
            },
            build: function(b) {
                CW.cancelRead(this.id);
                b = $.extend({
                    jumpTo: 0,
                    jumpToCallback: function() {},
                    smoothScroll: !1,
                    highlight: !1
                }, b);
                if (b.read_lock) b.readLock = b.read_lock;
                if (b.jump_to_chat_id) b.jumpTo = b.jump_to_chat_id;
                this.id == 0 ? this.view.buildHome() : (this.prepareBuild(), this.read_lock = b.readLock ? !0 : !1, this.id && (b.jumpTo && this.chat_num > this.timeline.chat_list.length && !this.timeline.chat_id2chat_dat[b.jumpTo] ? this.load(b) : this.buildtime == 0 && this.load(b), this.view.build(b)))
            },
            buildMemberList: function() {
                this.view.buildMemberList()
            },
            free: function() {
                for (var b in this) b != "id" && b != "del" && (this[b] && typeof this[b] == "object" && typeof this[b].free == "function" && this[b].free(), delete this[b])
            }
        }
    })();

function TimeLine(b) {
    this.view = new TimeLineView(this);
    this.room = b;
    this.chat_list = [];
    this.chat_id2chat_dat = {};
    this.sending_chat_list = [];
    this._loading = this.has_new_message = this.has_old = !1
}
TimeLine.prototype = {
    getLastChatId: function() {
        if (!this.chat_list.length) return 0;
        return this.chat_list[this.chat_list.length - 1].id
    },
    getFirstChatId: function() {
        if (!this.chat_list.length) return 0;
        return this.chat_list[0].id
    },
    addChat: function(b) {
        if (this.chat_id2chat_dat[b.id] == void 0) this.chat_list.push(b), this.chat_id2chat_dat[b.id] = b, this.has_new_message = !0, this.setMention(b.id)
    },
    insertChat: function(b) {
        this.chat_id2chat_dat[b.id] == void 0 && (this.chat_list.unshift(b), this.chat_id2chat_dat[b.id] = b, this.setMention(b.id))
    },
    deleteChat: function(b) {
        if (this.chat_id2chat_dat[b] != void 0) this.chat_id2chat_dat[b].msg = "[deleted]", this.chat_id2chat_dat[b].mn = !1, this.chat_id2chat_dat[b].utm = time()
    },
    refreshChat: function(b) {
        var a = this;
        this.chat_id2chat_dat[b] != void 0 && CW.get("gateway.php", {
            cmd: "get_chat",
            chat_id: b,
            rid: this.room.id
        }, function(d) {
            for (var e in d.chat_dat) a.chat_id2chat_dat[b][e] = d.chat_dat[e];
            a.setMention(b);
            RM && RM.id == a.room.id && a.build()
        })
    },
    setMention: function(b) {
        b = this.chat_id2chat_dat[b];
        if (b != void 0) b.mn = b.msg.indexOf("[To:" +
            AC.myid + "]") != -1 || b.msg.indexOf("[rp aid=" + AC.myid + " to=") != -1 ? !0 : !1
    },
    read: function(b) {
        this.view.read(b)
    },
    build: function(b, a, d, e) {
        this.room.id && (b == void 0 || !$.isPlainObject(b) ? this.view.build(b, a, d, e) : (b = $.extend({
            smoothScroll: !1,
            scrollTo: null,
            everScroll: !1,
            highlight: !1,
            sendingId: null,
            jumpToCallback: function() {}
        }, b), CW.view.is_biwa ? this.view.build(b) : this.view.build(b.smoothScroll, b.scrollTo, b.highlight, b.sendingId)))
    },
    loadOld: function(b) {
        var a = this;
        if (a._loading) return !1;
        var d = a.getFirstChatId();
        if (d == 0) return !1;
        typeof b != "function" && (b = function() {});
        a._loading = !0;
        CW.get("gateway.php", {
            cmd: "load_old_chat",
            room_id: a.room.id,
            first_chat_id: d
        }, function(e) {
            for (var f = {}, g = 0, l = e.chat_list.length; g < l; g++) a.insertChat(e.chat_list[g]), f[e.chat_list[g].aid] = !0;
            for (var k in f) AC.getName(k);
            e = function() {
                b();
                RM && RM.id == a.room.id && a.build({
                    smoothScroll: !1,
                    scrollTo: d
                });
                a._loading = !1
            };
            AC.hasUnknown() ? AC.getUnknown(e) : e()
        })
    },
    free: function() {}
};

function FileList(b) {
    this.view = new FileListView(this);
    this.loaded = !1;
    this.room = b
}
FileList.prototype = {
    getLastFileId: function() {
        var b = this.getFileList();
        if (b.length) {
            for (var a = 0, d = 0; d < b.length; d++) a < b[d] && (a = b[d]);
            return a
        } else return 0
    },
    getFileList: function() {
        var b = [],
            a;
        for (a in FL.file_id2file_dat) FL.file_id2file_dat[a].rid == this.room.id && b.push(a);
        return b
    },
    insertFile: function(b) {
        FL.file_id2file_dat[b.id] == void 0 && (FL.file_id2file_dat[b.id] = b)
    },
    build: function() {
        this.view.build()
    },
    free: function() {
        for (var b in FL.file_id2file_dat) FL.file_id2file_dat[b].rid == this.room.id && delete FL.file_id2file_dat[b]
    }
};

function TaskList(b) {
    this.view = new TaskListView(this);
    this.alltask_status = "open";
    this.loaded = !1;
    this.room = b
}
TaskList.prototype = {
    getTaskList: function(b) {
        b == void 0 && (b = "open");
        var a = [],
            d;
        for (d in TK.task_id2task_dat) TK.task_id2task_dat[d].rid == this.room.id && TK.task_id2task_dat[d].st == b && a.push(d);
        return a
    },
    build: function() {
        this.view.build()
    },
    free: function() {
        for (var b in TK.task_id2task_dat) TK.task_id2task_dat[b].rid == this.room.id && delete TK.task_id2task_dat[b]
    }
};

function ChatSend() {
    var b = this;
    b.prepare = function() {
        b.view = new ChatSendView(b);
        b.view.prepare()
    };
    b.initChatText = function() {
        b.view.initChatText()
    };
    b.setChatEdit = function(a, d) {
        b.view.setChatEdit(a, d)
    };
    b.setChatEditColor = function(a) {
        b.view.setChatEditColor(a)
    };
    b.clearChatEdit = function(a) {
        b.view.clearChatEdit(a)
    };
    b.prepareUploadForm = function(a) {
        b.view.prepareUploadForm(a)
    };
    b.sendMessage = function(a, b, e, f, g) {
        var l, k;
        e == void 0 && (e = {});
        l = e.read == void 0 || e.read ? 1 : 0;
        k = e.edit_id ? e.edit_id : 0;
        var i = RL.rooms[a];
        i.timeline.getLastChatId();
        CW.post("gateway.php", {
            cmd: "send_chat",
            text: b,
            room_id: a,
            last_chat_id: i.timeline.getLastChatId(),
            read: l,
            edit_id: k
        }, function(b) {
            if (b.chat_list)
                for (var d = 0, e = b.chat_list.length; d < e; d++) i.timeline.addChat(b.chat_list[d]), RL.rooms[a].read_num++, RL.rooms[a].chat_num++;
            b.storage != void 0 && b.storage_limit != void 0 && FL.updateStorageInfo(b.storage, b.storage_limit, b.storage_limit_time, b.is_storage_limit);
            k && CW.watch();
            typeof f == "function" && f(b)
        }, function(a, b) {
            b && b.is_storage_limit ? CW.showStorageLimitDialog("message") :
                typeof g == "function" && g(a, b)
        })
    };
    b.sendChat = function(a, d, e, f, g, l) {
        return b.sendMessage(a, d, f, g, l)
    };
    b.deleteChat = function(a, b, e) {
        CW.get("gateway.php", {
            cmd: "delete_chat",
            chat_id: a
        }, function(a) {
            typeof b == "function" && b(a);
            CW.watch()
        }, function(a) {
            typeof e == "function" ? e(a) : CW.alert(a)
        })
    };
    b.sendTask = function(a, b, e, f, g, l) {
        e ? e.toString().match(/^[0-9]+$/) || (e = strtotime_format(e, ST.data.dateformat)) : e = 0;
        CW.post("gateway.php", {
                cmd: "add_task",
                task: b,
                task_limit: e,
                assign: f,
                room_id: a
            }, function(a) {
                g(a);
                CW.watch()
            },
            function(a) {
                l(a)
            })
    };
    b.editTask = function(a, b, e, f, g, l) {
        f ? f.match(/^[0-9]+$/) || (f = strtotime_format(f, ST.data.dateformat)) : f = 0;
        CW.post("gateway.php", {
            cmd: "edit_task",
            aid: b,
            task_id: a,
            task: e,
            task_limit: f
        }, function(a) {
            typeof g == "function" && g(a);
            CW.watch()
        }, function(a) {
            typeof l == "function" && l(a)
        })
    };
    b.convertToSend = function(a) {
        a = a.replace(RegExp("\\[" + L.chatsend_quote + " aid=", "g"), "[qt][qtmeta aid=");
        a = a.replace(RegExp("\\[/" + L.chatsend_quote + "\\]", "g"), "[/qt]");
        return a = a.replace(RegExp("\\[" + L.chatsend_reply +
            " aid=", "g"), "[rp aid=")
    };
    b.convertToEdit = function(a) {
        var a = a.replace(/\[qt\]\[qtmeta aid=/g, "[" + L.chatsend_quote + " aid="),
            a = a.replace(/\[\/qt\]/g, "[/" + L.chatsend_quote + "]"),
            a = a.replace(/\[rp aid=/g, "[" + L.chatsend_reply + " aid="),
            b = a.match(/\[dtext:[^\]]+\]/g);
        if (b)
            for (var e = 0; e < b.length; e++) {
                var f = b[e].match(/\[dtext:([^\]]+)\]/)[1];
                L[f] && (a = a.replace("[dtext:" + f + "]", L[f]))
            }
        return a
    };
    b.setChatDraft = function(a, b, e) {
        a = this.getDraftMessageKey(a);
        CW.localStorage.setItem(a, JSON.stringify({
            edit_id: e,
            text: b
        }))
    };
    b.setTaskDraft = function(a, b, e, f) {
        a = this.getDraftTaskKey(a);
        CW.localStorage.setItem(a, JSON.stringify({
            task_name: b,
            assign_list: e,
            limit_date: f
        }))
    };
    b.getChatDraft = function(a) {
        var b = this.getDraftMessageKey(a),
            b = CW.localStorage.getItem(b);
        if (!b) return {
            edit_id: 0,
            text: ""
        };
        this.deleteChatDraft(a);
        return JSON.parse(b)
    };
    b.getTaskDraft = function(a) {
        var b = this.getDraftTaskKey(a),
            b = CW.localStorage.getItem(b);
        if (!b) return {
            task_name: "",
            task_mode: "",
            assign_list: [],
            limit_date: ""
        };
        this.deleteTaskDraft(a);
        return JSON.parse(b)
    };
    b.deleteChatDraft = function(a) {
        a = this.getDraftMessageKey(a);
        CW.localStorage.removeItem(a)
    };
    b.deleteTaskDraft = function(a) {
        a = this.getDraftTaskKey(a);
        CW.localStorage.removeItem(a)
    };
    b.getDraftMessageKey = function(a) {
        return "draft_message_" + AC.myid + "_" + a
    };
    b.getDraftTaskKey = function(a) {
        return "draft_task_" + AC.myid + "_" + a
    };
    b.getTaskAssignList = function() {
        return b.view.getTaskAssignList()
    };
    b.setTaskAssign = function(a) {
        b.view.setTaskAssign(a)
    };
    b.clearTaskAssign = function() {
        b.view.clearTaskAssign()
    }
}

function Search() {
    var b = this;
    b.trial_search_limit_num = 10;
    b.xhr = null;
    b.prepare = function() {
        b.view = new SearchView(b);
        b.view.prepare()
    };
    b.search = function(a, d, e) {
        b.xhr = CW.get("r/gateway.php", {
            cmd: "search_message",
            opt: a
        }, function(a) {
            d(a.msg_dat, a.trial_search_num)
        }, e)
    };
    b.cancelSearch = function() {
        if (b.xhr && b.xhr.abort) b.xhr.abort(), b.xhr = null
    }
}

function LocalStorage() {
        this.isEnabledCache = null
    }
    (function() {
        LocalStorage.prototype = {
            isEnabled: function() {
                if (this.isEnabledCache !== null) return this.isEnabledCache;
                try {
                    var b = !!window.localStorage;
                    return this.isEnabledCache = b
                } catch (a) {
                    return this.isEnabledCache = !1
                }
            },
            setItem: function(b, a) {
                this.isEnabled() && window.localStorage.setItem(b, a)
            },
            getItem: function(b) {
                if (this.isEnabled()) return window.localStorage.getItem(b)
            },
            removeItem: function(b) {
                this.isEnabled() && window.localStorage.removeItem(b)
            }
        }
    })();

function RoomSub() {
    var b = this;
    b.show_promotion = !1;
    b.init_promotion_status = !0;
    if (SERVICE_PLAN === "free" && !(time() - REG_TIME <= 2592E3)) b.show_promotion = !0;
    b.prepare = function() {
        b.view = new RoomSubView(b);
        b.view.prepare();
        b.view.hidePromotion();
        b.show_promotion && b.view.initializePromotion()
    };
    b.addTask = function(a, b, e, f, g, l) {
        e ? e.toString().match(/^[0-9]+$/) || (e = strtotime_format(e, ST.data.dateformat)) : e = 0;
        CW.post("gateway.php", {
                cmd: "add_task",
                task: b,
                task_limit: e,
                assign: f,
                room_id: a
            }, function(a) {
                g(a);
                CW.watch()
            },
            function(a) {
                l(a)
            })
    };
    b.buildMember = function() {
        b.view.buildMember()
    };
    b.resetPromotionStatus = function() {
        b.init_promotion_status = !0
    };
    b.showPromotion = function() {
        if (b.show_promotion && b.init_promotion_status && b.view.promotion_initialized) b.init_promotion_status = !1, b.view.showPromotion(), b.view.refreshPromotion()
    };
    b.hidePromotion = function() {
        if (b.show_promotion) b.init_promotion_status = !1, b.view.hidePromotion()
    }
}

function ChatWorkView(b) {
    var a = this;
    a.model = b;
    a.resize_delay_timer = null;
    a.is_biwa = !0;
    a.key = {};
    a.keyfunc = {};
    var d = "",
        e = !1,
        f = !1,
        g = null,
        l = null,
        k = null,
        i = null,
        h = null;
    a.prepare = function() {
        a.prepareHiddenIframe();
        $C("#_wrapper").on("mouseenter", "._showDescription", function() {
            if (!$.cwMessageTip.isInit(this)) {
                var a = $(this),
                    b = {
                        message: function() {
                            if (a.hasClass("_showDescription")) return a.attr("aria-label");
                            return ""
                        }
                    },
                    d = a.attr("data-delay");
                b.delay = d != void 0 ? parseInt(d, 10) : TM.messagetip_delay;
                a.cwMessageTip(b).open()
            }
        }).on("mouseenter",
            "._externalMark",
            function() {
                $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                    message: L.chatroom_not_only_internal,
                    offsetLeft: TM.extermal_marktip_offset_left
                }).open()
            }).on("mouseenter", "._pin", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: L.pin_hint,
                delayQuickMode: !1,
                delay: TM.messagetip_delay
            }).open()
        }).on("click", "._joinLive", function() {
            j || a.prepareLive();
            j.open($(this))
        }).on("click", "._profileTipCheckLabel", function() {
            $(this).closest("._contactPanel").find("._cwCB").click()
        });
        $C("body").on("click", "._previewLink", function() {
            var b = $(this);
            a.openPreviewLinkDialog(b.attr("data-type"), urldecode(b.attr("data-url")), b.attr("data-user-id"), b.attr("data-content-id"));
            return !1
        }).on("keypress", "form input[type=text]", function(a) {
            if (a.keyCode == 13) return !1
        });
        $("#_openInfomation").click(function() {
            a.openInformationPanel()
        });
        $C("#_notificationAnnounceLink").click(function() {
            a.openAnnounceDialog(this.id, ST.announce_dat.body)
        });
        $("#_feedback").click(function() {
            $("#_feedbackDialog").cwDialog({
                title: L.menu_feedback,
                width: "auto",
                height: "auto",
                autoOpen: !0,
                buttonLabels: [L.button_send, L.button_cancel],
                buttonCancel: 1,
                buttonSubmit: 0,
                buttonClick: function(b) {
                    switch (b) {
                        case 0:
                            var d = $("#_feedbackMessage");
                            if (b = d.val()) CW.showProgress(L.sending), this.close(), CW.sendFeedback({
                                message: b,
                                version: 2,
                                success: function() {
                                    CW.hideProgress();
                                    d.val("");
                                    a.openFeedbackCompleteDialog()
                                },
                                error: function() {
                                    CW.hideProgress();
                                    CW.alert(L.raise_error)
                                }
                            })
                    }
                }
            });
            $.cwFloatBox.close($C("#_informationBox"))
        });
        $("#_userGuideLink").click(function() {
            a.openUserGuideDialog();
            $.cwFloatBox.close($C("#_informationBox"))
        });
        if (canPlayOgg || canPlayMp3) a.embedAudio("BG_call"), $("#_audio_BG_call").on("ended", function() {
            this.play()
        });
        d = document.location.hash;
        $C("body").on("offline", function() {
            CW.setConnectionError()
        }).on("change", "._cwValidateFileImage", function() {
            var a = $.cwValidate.File.hasError(this, {
                maxsize: 716800,
                onlyimage: !0
            });
            a && (a = a.join("\n"), CW.alert(a))
        });
        $(window).on("beforeunload", function() {
            f = !0;
            setTimeout(function() {
                f = !1
            }, 3E3)
        }).on("resize", function() {
            if (a.resize_delay_timer ===
                null) a.resize_delay_timer = setTimeout(a.model.resizeLayout, 300)
        });
        var b = !0,
            e = null;
        $C("document").on("focus", "input,textarea", function() {
            b = !1;
            e = $(this)
        }).on("blur", "input,textarea", function() {
            b = !0;
            e = null
        }).keydown(function(d) {
            a.key.ctrl = typeof d.modifiers == "undefined" ? d.ctrlKey : d.modifiers & Event.CONTROL_MASK;
            a.key.shift = typeof d.modifiers == "undefined" ? d.shiftKey : d.modifiers & Event.SHIFT_MASK;
            a.key.alt = typeof d.modifiers == "undefined" ? d.altKey : d.modifiers & Event.ALT_MASK;
            a.key.command = typeof d.modifiers ==
                "undefined" ? d.metaKey : d.modifiers & Event.META_MASK;
            b ? e && e.offset().top != 0 && (b = !1) : e && e.offset().top == 0 && (b = !0);
            if (b && !$.cwDialog.isShown() && !$.cwFloatWindow.isShown()) {
                var f = a.getKeyCombinationMap(d.keyCode, a.key.ctrl, a.key.shift, a.key.alt, a.key.command);
                if (a.keyfunc[f] != void 0) return $C("#_wrapper").click(), a.keyfunc[f](), !1
            }
            if (d.keyCode == 27) return !1
        }).keyup(function(b) {
            a.key.ctrl = typeof b.modifiers == "undefined" ? b.ctrlKey : b.modifiers & Event.CONTROL_MASK;
            a.key.shift = typeof b.modifiers == "undefined" ?
                b.shiftKey : b.modifiers & Event.SHIFT_MASK;
            a.key.alt = typeof b.modifiers == "undefined" ? b.altKey : b.modifiers & Event.ALT_MASK;
            a.key.command = typeof b.modifiers == "undefined" ? b.metaKey : b.modifiers & Event.META_MASK
        });
        $("#_openServiceAdmin").click(function() {
            a.showServiceAdmin()
        });
        $("#_openServiceAdminUpgrade").click(function() {
            a.showServiceAdmin("upgrade")
        });
        $("#_storageLimitLink").click(function() {
            k.close();
            a.model.plan == "free" ? a.showServiceAdmin("upgrade") : a.showOptionPlanPrice()
        });
        a.onEndInitLoad(function() {
            a.resizeLayout();
            $("#_loader").fadeOut("slow");
            $("#_wrapper").css({
                visibility: "visible"
            });
            for (var b = ["ui_roomfilter", "ui_fold_roomlist", "ui_fold_roomsub", "ui_chatlist_width", "ui_subcontent_width", "ui_category"], d = 0, e = b.length; d < e; d++) {
                var f = b[d],
                    j = $.cookie(f);
                j !== void 0 && $.cookie(f, j, {
                    expires: 3650
                })
            }
        })
    };
    var j = null;
    a.prepareLive = function() {
        j = $("#_joinLiveTip").cwToolTip({
            open: function(a) {
                this.data.live_id = a.attr("data-live-id");
                this.data.account_id = a.attr("data-aid")
            }
        });
        var a = function(a) {
            if (j.data.live_id) var b = CW.getLiveUrlById(j.data.live_id,
                a);
            else j.data.account_id && (b = CW.getLiveUrl(AC.getRoomId(j.data.account_id), [AC.myid, j.data.account_id], a));
            window.open(b, "cwlive", "menubar=0,toolbar=0,titlebar=0,status=0,scrollbars=0,resizable=1");
            j.close()
        };
        j.$el.on("click", "._joinLiveByVideo", function() {
            a("video")
        }).on("click", "._joinLiveByVoice", function() {
            a("voice")
        })
    };
    a.prepareHiddenIframe = function() {
        for (var b = [{
                id: "_roomInfoFrame",
                name: "form_update_room"
            }, {
                id: "_updateRoomAdminsettingIframe",
                name: "form_update_room_adminsetting"
            }, {
                id: "_formSetting",
                name: "form_setting"
            }, {
                id: "_fileFrame",
                name: "form_upload"
            }, {
                id: "_profileAvatarFrame",
                name: "_profileAvatarFrame"
            }, {
                id: "_profileCoverFrame",
                name: "_profileCoverFrame"
            }, {
                id: "_downloadFrame",
                name: "_downloadFrame"
            }], d = "", e = 0, f = b.length; e < f; e++) {
            var j = b[e];
            d += '<iframe id="' + j.id + '" name="' + j.name + '" src="" style="display: none"></iframe>'
        }
        setTimeout(function() {
            $("#_hiddenIframe").html(d);
            for (var a = 0, b = m.length; a < b; a++) m[a]();
            m = [];
            o = !0
        }, 3E3);
        $("#_liveNotificationClose").click(a.closeLiveNotification);
        $C("#_liveNotificationLiveButton").click(function() {
            CW.stopSound("BG_call")
        })
    };
    a.openLiveNotification = function(a, b) {
        var d = RL.rooms[b],
            e = d.getAccountId(),
            f = "",
            f = e ? L.live_call_direct.replace(/%%name%%/, AC.getName(e)) : L.live_call_chat.replace(/%%name%%/, AC.getName(e)).replace(/%%chat_name%%/, d.getName());
        $C("#_liveNotificationMessage").text(f);
        $C("#_liveNotification").slideDown();
        $C("#_liveNotificationLiveButton").attr("data-live-id", a);
        CW.playSound("BG_call")
    };
    a.closeLiveNotification = function() {
        $C("#_liveNotification").slideUp();
        CW.stopSound("BG_call")
    };
    var o = !1,
        m = [];
    a.onIframeReady =
        function(a) {
            o ? a() : m.push(a)
        };
    var n = 0;
    a.alert = function(a, b, d) {
        var e = "_alertDialogBody" + n,
            f = $('<div id="_alertDialog' + n + '" class="dialog dialogPadding"><pre id="' + e + '" class="alertDialogBody"></pre></div>');
        $C("body").append(f);
        d ? a = mlength($("#" + e).html(a).text()) : ($("#" + e).text(a), a = mlength(a));
        f.cwDialog({
            width: a > 50 ? 500 : 400,
            minHeight: 100,
            height: "auto",
            autoOpen: !0,
            buttonLabels: [L.button_ok],
            buttonSubmit: 0,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        typeof b == "function" && b(), this.close()
                }
            },
            close: function() {
                f.remove()
            }
        });
        n++
    };
    a.confirm = function(a, b, d, e) {
        var f = "_confirmDialogBody" + n,
            j = $('<div id="_confirmDialog' + n + '" class="dialog dialogPadding"><pre id="' + f + '" class="confirmDialogBody"></pre></div>');
        $C("body").append(j);
        e ? a = mlength($("#" + f).html(a).text()) : ($("#" + f).text(a), a = mlength(a));
        j.cwDialog({
            width: a > 50 ? 500 : 400,
            minHeight: 100,
            height: "auto",
            autoOpen: !0,
            buttonLabels: [L.button_cancel, L.button_ok],
            buttonSubmit: 1,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        typeof d == "function" && d();
                        this.close();
                        break;
                    case 1:
                        b(), this.close()
                }
            },
            close: function() {
                j.remove()
            }
        });
        n++
    };
    a.confirmDelete = function(a, b, d, e, f) {
        var j = "_confirmDialogBody" + n,
            h = $('<div id="_confirmDialog' + n + '" class="dialog dialogPadding"><pre id="' + j + '" class="confirmDialogBody"></pre></div>');
        $C("body").append(h);
        j = $("#" + j);
        e ? a = mlength(j.html(a).text()) : (j.text(a), a = mlength(a));
        if (!f) f = L.button_delete_long;
        h.cwDialog({
            width: a > 50 ? 500 : 300,
            minHeight: 100,
            height: "auto",
            autoOpen: !0,
            buttonLabels: [L.button_cancel, f],
            buttonDelete: 1,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        typeof d ==
                            "function" && d();
                        this.close();
                        break;
                    case 1:
                        this.isAgreed() && (b(), this.close())
                }
            },
            close: function() {
                h.remove()
            }
        });
        n++
    };
    var t = null;
    a.showProgress = function(a) {
        $("#_progressDialogBody").html('<div style="padding:10px" class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + a + "</div>");
        t = $("#_progressDialog").cwDialog({
            autoOpen: !0,
            closeOnEscape: !1
        })
    };
    a.hideProgress = function() {
        t && (t.close(), t = null)
    };
    a.registerKeyboardShortcut = function(b, d, e, f, j, h) {
        a.keyfunc[a.getKeyCombinationMap(b,
            d, e, f, j)] = h;
        return a
    };
    a.getKeyCombinationMap = function(a, b, d, e, f) {
        var j = "";
        j += b ? "1" : "0";
        j += d ? "1" : "0";
        j += e ? "1" : "0";
        j += f ? "1" : "0";
        j += a;
        return j
    };
    var u = [],
        s = !1;
    a.onPostLoad = function(a) {
        s ? a() : u.push(a)
    };
    a.postLoad = function() {
        CW.security_dat.disable_external == 1 && ($("#_addContactType").remove(), $("#_offFbConnectSetting").remove(), $("#_openOnFbConncetSetting").remove());
        a.model.security_dat.disable_send_file == 1 && $("#_file").remove();
        a.model.security_dat.disable_download_file == 1 && ($("#_chatFileAll").remove(),
            $("#_openFileWindow").remove());
        CW.security_dat.disable_social_profile == 1 && $("#_profileSnsListEdit").hide();
        if (_is_oldmsie) $("#_newbrowserDialog").cwDialog({
            width: 600,
            title: L.newbrowser_title,
            autoOpen: !0,
            buttonLabels: [L.button_close],
            buttonCancel: 0
        });
        else if (d.indexOf("contact_myrequest") != -1) AC.view.openContactWindow(), $("#_contactWindowTabMyRequest").click();
        else if (d.indexOf("contact_request") != -1) AC.view.openContactWindow(), $("#_contactWindowTabRequest").click();
        else if (d.indexOf("join=") != -1) {
            var b =
                d.match(/join=([0-9]+)/);
            b && RL.showJoinPublicChatDialog(b[1])
        } else if (d.indexOf("tutorial=") != -1) CW.view.startTutorial();
        else if (d.indexOf("contact=") != -1) {
            if (b = d.match(/contact=([^&\?]+)/)) {
                var e = b[1],
                    b = !1;
                if (e == AC.getChatWorkId(AC.myid)) CW.alert(L.contact_cwid_error_myself), b = !0;
                else
                    for (var f in AC.contact_list)
                        if (e == AC.getChatWorkId(AC.contact_list[f])) {
                            CW.alert(L.contact_cwid_error_already.replace(/%%chatwork_id%%/, e));
                            b = !0;
                            break
                        }
                b || CW.get("gateway.php", {
                        cmd: "get_account_info_by_cwid",
                        cwid: e
                    },
                    function(a) {
                        a.account_dat ? (AC.setAccountDat(a.account_dat.aid, a.account_dat), AC.showChatWorkIdRequestDialog(a.account_dat)) : CW.alert(L.contact_cwid_error_noexist.replace(/%%chatwork_id%%/, e))
                    },
                    function(a) {
                        CW.alert(a)
                    })
            }
        } else d.indexOf("contact") != -1 ? AC.view.openContactWindow() : d.indexOf("mytask") != -1 ? AC.view.openTaskWindow() : d.indexOf("chat_setting") != -1 ? ST.view.openSettingDialog() : d.indexOf("profile_setting") != -1 ? AC.view.openProfileWindow(AC.myid) : d.indexOf("service_admin") != -1 ? a.showServiceAdmin() :
            d.indexOf("information") != -1 && a.openInformationPanel();
        f = 0;
        for (b = u.length; f < b; f++) u[f]();
        $(window).scrollTop(0);
        s = !0
    };
    (function() {
        var b = null,
            d = null,
            e = window.navigator.userAgent.toLowerCase().indexOf("chrome") != -1;
        a.popup = function(a, f, j, h) {
            if (!wfocus && NotificationAPI && NotificationAPI.checkPermission() == 0) b && (typeof b.cancel == "function" ? b.cancel() : typeof b.close == "function" && b.close()), e && (j = " " + j), b = NotificationAPI.createNotification(a, f, j), b.room_id = h, b.onclick = function() {
                window.focus();
                RL.selectRoom(this.room_id);
                this.cancel()
            }, b.show(), a = parseInt(ST.data.notifier_duration, 10) * 1E3, a > 0 && (d && (clearTimeout(d), d = null), d = setTimeout(function() {
                b && (typeof b.cancel == "function" ? b.cancel() : typeof b.close == "function" && b.close())
            }, a))
        }
    })();
    a.embedAudio = function(a) {
        var b;
        canPlayOgg ? b = a + ".ogg" : canPlayMp3 && (b = a + ".mp3");
        $C("#_audioList").append('<audio id="_audio_' + a + '"><source src="./sound/' + b + '"/></audio>')
    };
    a.playSound = function(b, d) {
        var e = "_audio_" + b,
            f = $("#" + e);
        f.length || (a.embedAudio(b), f = $("#" + e));
        if (d == void 0) d = ST.data.sound_volume;
        e = f[0];
        e.volume = d;
        e.load();
        e.play()
    };
    a.stopSound = function(a) {
        document.getElementById("_audio_" + a).pause()
    };
    var v = "";
    a.changeFavicon = function(a) {
        v != a && (v = a, $("#_favicon").remove(), $("head").append($('<link rel="shortcut icon" id="_favicon" href="' + a + '?1"  type="image/vnd.microsoft.icon" />')))
    };
    a.alertUpdated = function() {
        CW.alert(L.chatwork_update)
    };
    a.showUpdated = function() {
        $("#cw_version_update").html('<a href="./">' + L.chatwork_do_update + "</a>").show()
    };
    a.setOnline = function() {
        $("#_statusAlert").fadeOut()
    };
    a.setConnectionError = function(b) {
        b == "NO LOGIN" || b == "NO TOKEN" || b == "IP ERROR" ? (f || ($("#_statusAlertMessage").html('<a href="./">' + L.connection_error_logout + "</a>"), $("#_statusAlert").fadeIn()), b == "IP ERROR" && (e || a.model.alert(L.error_cant_login_ip), e = !0)) : b == "INVALID USER" ? f || ($("#_statusAlertMessage").html('<a href="./">' + L.connection_error_invalid_user + "</a>"), $("#_statusAlert").fadeIn()) : b == "INVALID TOKEN" ? !f && RM !== null && (a.setDrafts(), location.reload()) : f || ($("#_statusAlertMessage").html('<a href="./">' +
            L.connection_error_offline + "</a>"), $("#_statusAlert").fadeIn())
    };
    a.firstWatch = function() {
        if (document.location.hash) {
            var a = document.location.hash.match(/#!rid(\d+)(?:-(\d+))?/);
            if (a) {
                var b = parseInt(a[1], 10),
                    d = 0;
                a[2] && (d = parseInt(a[2], 10));
                RL.lazy_select = b;
                RL.lazy_select_chat = d
            }
        }
    };
    a.renderMessage = function(b, d) {
        var e = $.extend({
            text: !1,
            trimLink: ST.data.shorten_url
        }, d);
        time();
        for (var f in a.model.reg_cmp) b = e.text && a.model.reg_cmp[f].reptxt != void 0 ? b.replace(a.model.reg_cmp[f].key, a.model.reg_cmp[f].reptxt) :
            b.replace(a.model.reg_cmp[f].key, a.model.reg_cmp[f].rep);
        var j = b.match(/\[pname:\d+\]/g);
        if (j)
            for (f = 0; f < j.length; f++) var h = j[f].match(/\[pname:(\d+)\]/),
                h = h[1],
                o = e.text ? AC.getName(h) : CW.getName(h),
                b = b.replace("[pname:" + h + "]", o);
        if (j = b.match(/\[dtext:[^\]]+\]/g))
            for (f = 0; f < j.length; f++) h = j[f].match(/\[dtext:([^\]]+)\]/), h = h[1], L[h] != void 0 && (b = b.replace("[dtext:" + h + "]", L[h]));
        if (j = b.match(/\[picon:\d+\]/g))
            for (f = 0; f < j.length; f++) h = j[f].match(/\[picon:(\d+)\]/), h = h[1], b = b.replace("[picon:" + h + "]", CW.getAvatarPanel(h, {
                size: "tiny"
            }));
        if (j = b.match(/\[date:\d+\]/g))
            for (f = 0; f < j.length; f++) h = j[f].match(/\[date:(\d+)\]/), h = h[1], b = b.replace("[date:" + h + "]", a.model.getDate(h));
        if (j = b.match(/\[task aid=[0-9,]+ st=[^\s]+ lt=-?[0-9]*\]/g))
            for (f = 0; f < j.length; f++) h = j[f].match(/\[task aid=([0-9,]+) st=([^\s]+) lt=(-?[0-9]*)\]/), e.text ? b = b.replace(h[0], "[") : (o = {
                aid: h[1],
                st: h[2],
                lt: parseInt(h[3], 10)
            }, o = TK.view.getTaskPanel(o, {
                type: "timeline",
                mid: e.mid
            }), b = b.replace(h[0], o));
        if (j = b.match(/\[live id=[^\ ]+ rid=\d+]/g))
            for (f = 0; f <
                j.length; f++)
                if (h = j[f].match(/\[live id=([^\ ]+) rid=(\d+)\]/), e.text) b = b.replace(h[0], "[ChatWork Live]");
                else {
                    var o = "",
                        m = h[1],
                        g = h[2];
                    o += RL.rooms[g] ? '<div class="_joinLive button btnSuccess" data-live-id="' + m + '"><span class="icoFontVideoChat"></span><span>' + L.live_join + "</span></div>" : '<div class="button btnDisable"><span class="icoFontVideoChat"></span><span>' + L.live_join + "</span></div>";
                    b = b.replace(h[0], o)
                }
        if (j = b.match(/<link_title>https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'\(\)a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+<\/link_title>/g))
            for (f =
                0; f < j.length; f++) {
                var h = j[f].match(/(<link_title>(https?:\/\/([^\/]+)[-_.!~*\'\(\)a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+)<\/link_title>)/),
                    o = h[1],
                    m = h[2],
                    n = h[3],
                    g = "";
                m.match(/\.([^\.]+)$/);
                h = 70;
                if (m.indexOf("www.chatwork.com") != -1 || m.indexOf("kcw.kddi.ne.jp") != -1) {
                    var i = m.match(/(#!rid(\d+)\-?(\d+)?)$/),
                        n = "chatwork.com";
                    i && (m = i[1], g = i[2], g = (i = i[3]) ? '</a> <a class="_messageLink timelineLinkAppend" data-rid="' + g + '" data-mid="' + i + '">' + L.message_link + "</a>" : '</a> <a class="_roomLink timelineLinkAppend" data-rid="' +
                        g + '">' + L.message_open_chat + "</a>")
                }
                if ((n == "secure.mindjet.com" || n == "www.mindjet.com") && m.indexOf("openlink") != -1) h = 40, g = '</a><a class="timelineLinkAppend" href="mj-link:' + m + '">' + L.message_open_mindmanager + "</a>";
                if ((n == "vision.mindjet.com" || n == "connect.mindjet.com") && m.indexOf("/link") != -1) h = 40, g = '</a><a class="timelineLinkAppend" href="mj-connect:' + m + '">' + L.message_open_mindmanager + "</a>";
                n.indexOf(".sharepoint.com") != -1 && (n = "sharepoint.com");
                if (_has_sandbox) {
                    var r = i = "",
                        k = "";
                    switch (n) {
                        case "teachme.jp":
                            if (n =
                                m.match(/^https?:\/\/teachme\.jp\/contents\/([0-9]+)/)) i = "teachme", k = n[1];
                            break;
                        case "speakerdeck.com":
                            if (n = m.match(/^https?:\/\/speakerdeck\.com\/([^\/]+)\/([^\/]+)$/)) i = "speakerdeck", r = n[1], k = n[2];
                            break;
                        case "www.slideshare.net":
                            if (n = m.match(/^https?:\/\/www\.slideshare\.net\/([^\/]+)\/([^\/]+)$/)) i = "slideshare", r = n[1], k = n[2];
                            break;
                        case "prezi.com":
                            if (n = m.match(/^https?:\/\/prezi\.com\/([^\/]+)\//)) i = "prezi", k = n[1];
                            break;
                        case "www.youtube.com":
                            if (n = m.match(/^https?:\/\/www\.youtube\.com\/watch\?v=([^\/&]+)/)) i =
                                "youtube", k = n[1];
                            break;
                        case "youtu.be":
                            if (n = m.match(/^https?:\/\/youtu\.be\/([^\/&]+)/)) i = "youtube", k = n[1];
                            break;
                        case "vimeo.com":
                            if (n = m.match(/^https?:\/\/vimeo\.com\/(?:channels\/staffpicks\/)?([^\/]+)/)) i = "vimeo", k = n[1];
                            break;
                        case "slides.com":
                            if (n = m.match(/^https?:\/\/slides\.com\/([^\/]+\/[^\/]+)$/)) i = "slid.es", k = n[1];
                            break;
                        case "slid.es":
                            if (n = m.match(/^https?:\/\/slid\.es\/([^\/]+\/[^\/]+)$/)) i = "slid.es", k = n[1];
                            break;
                        case "corabbit.com":
                            if (n = m.match(/^https:\/\/corabbit\.com\/#\/file\/([^\/]+)$/)) i =
                                "corabbit", k = n[1];
                            break;
                        case "docs.google.com":
                            if (n = m.match(/^https:\/\/docs.google\.com/)) i = "googledocs", k = "-";
                            break;
                        case "cacoo.com":
                            if (n = m.match(/^https:\/\/cacoo\.com\/diagrams\/([^\/]+)(?:\/edit)?$/)) i = "cacoo", k = n[1];
                            break;
                        case "sharepoint.com":
                            if (n = m.match(/^https:\/\/([\w\-\.\/]+?)\?.*(sourcedoc=[\{\}\w\-]+?|guestaccesstoken=[\%\w]+&(?:amp;?)docid=\w+)(?:&|$)/)) i = "sharepoint", k = n[1] + "?" + n[2]
                    }
                    i && (g = '</a> <a class="_previewLink timelineLinkAppend" data-url="' + urlencode(m) + '" data-type="' + i + '" data-user-id="' +
                        r + '" data-content-id="' + k + '">' + L.preview + "</a>")
                }
                e.trimLink && (m = trim_width(m, 0, h));
                b = b.replace(o, m + g)
            }
        e = document.createElement("span");
        e.innerHTML = b;
        return b = e.innerHTML
    };
    a.registerAvatar = function() {};
    var x = {
        huge: "avatarHuge",
        large: "avatarLarge",
        medium: "avatarMedium",
        small: "avatarSmall",
        tiny: "avatarTiny"
    };
    a.getAvatarClass = function(a) {
        return x[a]
    };
    a.getAvatarPanel = function(b, d) {
        var e = S3_PATH + "/avatar/" + AC.getAvatarId(b),
            f = "";
        if (d.src) return e;
        d.hovertip && (f += " _avatarHoverTip");
        d.clicktip && (f += " _avatarClickTip avatarClickTip");
        d.size && (f += " " + a.getAvatarClass(d.size));
        return '<img class="' + f + " _avatar _avatarAid" + b + '" data-aid="' + b + '" src="' + e + '">'
    };
    a.getCoverPanel = function(a, b) {
        var d = S3_PATH + "/cover/" + AC.getCoverId(a),
            e = "";
        if (b.src) return d;
        b.extraclass && (e += " " + b.extraclass);
        return '<img class="' + e + " _coverAid" + a + '" data-aid="' + a + '" src="' + d + '">'
    };
    a.getName = function(a) {
        return '<span class="_nameAid' + a + '">' + escape_html(AC.getName(a)) + "</span>"
    };
    a.getOrgName = function(a) {
        return '<span class="cw_onm' + a + '">' + escape_html(AC.getOrgName(a)) +
            "</span>"
    };
    a.getDepartment = function(a) {
        return '<span class="cw_dept' + a + '">' + escape_html(AC.getDepartment(a)) + "</span>"
    };
    a.getOrgTitle = function(b) {
        return a.getOrgName(b) + " " + a.getDepartment(b)
    };
    a.getFullName = function(a) {
        return '<span class="cw_fnm' + a + '">' + escape_html(AC.getFullName(a)) + "</span>"
    };
    a.getChatWorkId = function(a) {
        if (AC.getChatWorkId(a)) return '<span class="cw_cwid' + a + '">' + escape_html(AC.getChatWorkId(a)) + "</span>";
        return ""
    };
    a.getChatWorkIdLink = function(b) {
        var d = AC.getChatWorkId(b);
        if (d) return '<a href="' +
            CHATWORK_MYPAGE_PATH + "/" + d + '" target="_blank">' + a.getChatWorkId(b) + "</a>";
        return ""
    };
    a.getSkypeLink = function() {};
    a.getTwitterLink = function() {};
    a.getFacebookLink = function() {};
    a.getContactPanel = function(a, b) {
        $.log("notice: CW.getContactPanel is deprecated! use AC.view.getContactPanel");
        return AC.view.getContactPanel(AC.account_dat[a], b)
    };
    a.getFilePanel = function(a, b) {
        return FL.view.getFilePanel(a, b)
    };
    a.getTaskPanel = function(a, b) {
        return TK.view.getTaskPanel(a, b)
    };
    a.showLimitErrorDialog = function(a, b) {
        h ||
            (h = $("#_limitErrorDialog").cwDialog({
                width: 550,
                open: function(a) {
                    $C("#_upgradeMessage").html(a)
                }
            }));
        h.setOption({
            title: a
        }).open(b)
    };
    a.showContactLimitErrorDialog = function() {
        var b = L.contact_error_cantadd,
            d = L.contact_error_planlimit,
            d = d.replace(/%%plan_name%%/, PLAN_NAME).replace(/%%limit_num%%/, CW.contact_limit_num);
        return a.showLimitErrorDialog(b, d)
    };
    a.showServiceAdmin = function(a) {
        a == "upgrade" ? window.open(ACCOUNT_SERVER_PATH + "/price.php") : window.open(ACCOUNT_SERVER_PATH + "/service_admin.php")
    };
    a.showOptionPlanPrice =
        function() {
            window.open(ACCOUNT_SERVER_PATH + "/subpackages/option/price.php")
        };
    a.showUserAdmin = function() {
        window.open(ACCOUNT_SERVER_PATH + "/user_list.php")
    };
    a.prepareStorageLimitDialog = function() {
        k = $("#_storageLimitDialog").cwDialog({
            width: 550,
            buttonLabels: [L.button_close],
            buttonCancel: 0,
            open: function(b) {
                b = $.extend({
                    send_type: null,
                    body: L.storage_cancel_send_object,
                    title: null
                }, b);
                a.setLimitDialog(b.body, b.send_type);
                if (!b.title) b.title = L.storage_cancel_send_cancel.replace(/%%object%%/, L[b.send_type]);
                this.setOption({
                    title: b.title
                })
            }
        })
    };
    a.showStorageLimitDialog = function(b) {
        k || a.prepareStorageLimitDialog();
        $C("#_storageLimitFooter").hide();
        k.open({
            send_type: b
        })
    };
    a.showStorageCautionDialog = function(b) {
        b = $.extend({
            title: null,
            body: null,
            footer: null
        }, b);
        k || a.prepareStorageLimitDialog();
        var d = $C("#_storageLimitFooter");
        b.footer ? d.html(b.footer).show() : d.hide();
        k.open({
            body: b.body,
            title: b.title
        })
    };
    a.showLoginDialog = function(a, b) {
        b()
    };
    a.showOfflineDialog = function(a, b) {
        b(2E3)
    };
    a.showTimeoutDialog = function(a,
        b) {
        b()
    };
    var y = !1,
        p = [];
    a.onEndInitLoad = function(a) {
        y ? a() : p.push(a)
    };
    a.endInitLoad = function() {
        y = !0;
        for (var a = 0, b = p.length; a < b; a++) p[a]();
        p = []
    };
    a.buildLayout = function() {
        a.model.is_first_load && ($("#_sideDashboardArea").show(), $("#_chatSendToolbar").show());
        a.resizeLayout()
    };
    var w = $("#_globalHeader").outerHeight(!0),
        q = parseInt($("#_content").css("margin-top"), 10),
        r = $C("#_mainContent").outerHeight(!0) - $C("#_mainContent").innerHeight(),
        z = $C("#_sideContent").outerHeight(!0) - $C("#_sideContent").innerHeight(),
        E = $("#_sideContentTitle").outerHeight(!0),
        H = parseInt($("#_subContentArea").css("padding-top"), 10),
        B = $("#_chatFilterMenu").outerHeight(!0),
        R = $("#_chatRoomDescriptionNav").outerHeight(!0),
        aa = $C("#_chatText").innerWidth() - $C("#_chatText").width(),
        P = $(window);
    a.resizeLayout = function() {
        if (!y) return !1;
        a.resizeRoomList();
        var b = P.innerHeight();
        $C("#_wrapper").css("height", b);
        var d = $C("#_wrapper").innerWidth();
        d < 540 ? ($C("#_search").removeClass("inputLong"), $C("#_adminNavi").hide(), $C("#_myStatusButton").addClass("headerNameShort"),
            $C("#_myStatusName").hide(), $C("#_logo").hide(), $C("#_headerSearch").addClass("headerSearchShort")) : (d < 730 ? ($C("#_search").removeClass("inputLong"), $C("#_adminNavi").hide(), $C("#_myStatusButton").addClass("headerNameShort"), $C("#_myStatusName").hide()) : d < 850 ? ($C("#_search").removeClass("inputLong"), $C("#_adminNavi").show(), $C("#_myStatusButton").addClass("headerNameShort"), $C("#_myStatusName").hide()) : (d < 1E3 ? $C("#_search").removeClass("inputLong") : $C("#_search").addClass("inputLong"), $C("#_adminNavi").show(),
            $C("#_myStatusButton").removeClass("headerNameShort"), $C("#_myStatusName").show()), $C("#_logo").show(), $C("#_headerSearch").removeClass("headerSearchShort"));
        $C("#_searchResult").css("left", $C("#_search").offset().left);
        d = b - w - q - r;
        $C("#_mainContent").height(d);
        $.cwFloatWindow.resize();
        b = b - w - q - z;
        $C("#_sideContent").height(b);
        b = b - E - B;
        $C("#_roomListArea").height(b);
        d -= E;
        $C("#_subContent").css({
            height: d,
            top: E
        });
        RS.view && (d = d - R - H, $C("#_subContentArea").height(d), RS.view.resizeRoomInfo(d));
        CS.view && ($C("#_chatText").width($C("#_chatTextArea").width() -
            aa - 18), CS.view.resizeChatArea(!0));
        a.adjustInformationPanelPosition();
        a.resize_delay_timer = null
    };
    a.startTutorial = function() {
        var a = {
                "#_content": "",
                "#_globalHeader": "",
                "#_subContent": "",
                "#_mainContent": "",
                "#_chatContent": "",
                "#_addButton": "",
                "#_headerSearch": "",
                "#_subRoomTaskAddArea": "",
                "#_chatSendToolbar": "",
                "#_chatSendArea": ""
            },
            b;
        for (b in a) {
            var d = $C(b);
            a[b] = d.css("z-index");
            d.css("z-index", "auto")
        }
        var e = $("#_tutorialStep").cwToolTip({
                useFloatBox: !1
            }),
            f = $("#_tutorialMessage"),
            j = $("#_tutorialNextButton");
        j.cwButton({
            type: "primary",
            click: function() {
                h.shift()()
            }
        });
        var h = [],
            m = $("#_addButton"),
            o = $("#_headerSearch"),
            n = $("#_subRoomTaskAddArea"),
            g = $("#_chatSendToolbar"),
            i = $("#_chatTextArea");
        h.push(function() {
            m.css("z-index", TM.expose_zindex);
            f.text(L.tutorial_addbutton);
            e.isOpen() || e.open(m)
        });
        h.push(function() {
            m.css("z-index", "auto");
            o.css("z-index", TM.expose_zindex);
            f.text(L.tutorial_globalsearch);
            e.move(o)
        });
        h.push(function() {
            CS.view.expandChatArea(!0);
            o.css("z-index", "auto");
            g.css("z-index", TM.expose_zindex);
            i.css("z-index", TM.expose_zindex);
            f.text(L.tutorial_send_message);
            e.move(g)
        });
        h.push(function() {
            g.css("z-index", "auto");
            i.css("z-index", "auto");
            n.css("z-index", TM.expose_zindex);
            f.text(L.tutorial_add_task);
            j.cwButton().setOption({
                type: "success",
                text: L.button_complete
            });
            e.move(n)
        });
        h.push(function() {
            e.close();
            n.css("z-index", "auto");
            for (var b in a) $C(b).css("z-index", a[b]);
            $("#_expose").fadeOut("slow")
        });
        $("#_expose").fadeIn("slow", function() {
            h.shift()()
        })
    };
    a.showFirstPage = function() {};
    a.closeFirstPage =
        function() {};
    a.resizeRoomList = function() {};
    a.resizeSubInfo = function() {};
    a.setLimitDialog = function(b, d) {
        var e = "";
        a.model.plan == "free" ? (b += L.storage_cancel_send_object_suffix_upgrade, e = L.storage_cancel_upgrade_label) : a.model.is_business && !a.model.is_admin ? (b += L.storage_cancel_send_object_suffix_tell_admin, $("#_storageLimitButton").hide()) : (b += L.storage_cancel_send_object_suffix_add_storage, e = L.storage_cancel_add_storage_label);
        d != void 0 && L[d] != void 0 && (b = b.replace(/%%object%%/g, L[d]));
        $("#_storageLimitBody").html(b);
        $("#_storageLimitLink").text(e)
    };
    var F = null;
    a.openPreviewLinkDialog = function(b, d, e, f) {
        F || a.preparePreviewLinkDialog();
        F.open(b, d, e, f)
    };
    var G = null;
    a.preparePreviewLinkDialog = function() {
        var a = $("#_previewLinkContent");
        F = $("#_previewLinkDialog").cwDialog({
            buttonLabels: [L.open_website, L.button_close],
            buttonCancel: 1,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        window.open(this.data.url)
                }
            },
            open: function(b, d, e, f) {
                var j = {},
                    h = "",
                    m = TM.dialog_header_height + TM.dialog_footer_height,
                    o = !0,
                    n = !1,
                    g = !1,
                    i = "auto",
                    r = function(a,
                        b, d, e) {
                        typeof a == "function" && (a = a());
                        var f = "";
                        o && (f = 'sandbox="allow-scripts allow-same-origin allow-popups allow-forms"');
                        return "<iframe " + f + ' src="' + a + '" width="' + b + '" height="' + d + '" style="margin:auto" frameborder="0" scrolling="' + e + '" seamless webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                    };
                this.data.url = d;
                a.empty();
                G !== null && (G.abort(), G = null);
                switch (b) {
                    case "teachme":
                        n = !0;
                        h = "//teachme.jp/contents/" + f + "/embed?mb=0";
                        j.title = "Teachme";
                        break;
                    case "speakerdeck":
                        g = n = !0;
                        j.title =
                            "Speaker Deck";
                        G = $.ajax({
                            type: "GET",
                            url: "./api_proxy.php?type=speakerdeck&url=" + urlencode(d),
                            success: function(a) {
                                $("#_previewLinkContent").html(r(a, k, l))
                            },
                            error: function() {
                                $("#_previewLinkContent").html(L.raise_error)
                            }
                        });
                        break;
                    case "slideshare":
                        g = n = !0;
                        h = "//www.slideshare.net/slideshow/embed_code/%%slideshow_id%%";
                        j.title = "slideshare";
                        G = $.jsonp({
                            url: "//www.slideshare.net/api/oembed/2?url=" + urlencode("http://www.slideshare.net/" + e + "/" + f) + "&format=jsonp",
                            data: {
                                maxwidth: k,
                                maxheight: l,
                                format: "json"
                            },
                            callbackParameter: "callback",
                            success: function(a) {
                                $("#_previewLinkContent").html(r(h.replace("%%slideshow_id%%", a.slideshow_id), k, l))
                            },
                            error: function() {
                                $("#_previewLinkContent").html(L.raise_error)
                            }
                        });
                        break;
                    case "prezi":
                        n = !0;
                        o = !1;
                        h = "//prezi.com/embed/" + f + "/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;features=undefined&amp;disabled_features=undefined";
                        j.title = "Prezi";
                        break;
                    case "youtube":
                        n = !0;
                        o = !1;
                        h = "//www.youtube.com/embed/" + f + "";
                        j.title = "YouTube";
                        break;
                    case "vimeo":
                        n = !0;
                        o = !1;
                        h = "//player.vimeo.com/video/" +
                            f + "";
                        j.title = "vimeo";
                        break;
                    case "slid.es":
                        n = !0;
                        h = "//slid.es/" + f + "/embed";
                        j.title = "slid.es";
                        break;
                    case "corabbit":
                        h = "//corabbit.com/embed/" + f;
                        j.title = "Corabbit";
                        break;
                    case "googledocs":
                        o = !1;
                        h = d;
                        j.title = "Google Drive " + L.preview_needlogin;
                        break;
                    case "cacoo":
                        h = function() {
                            return "//cacoo.com/diagrams/" + f + "/view?w=" + (k - 2) + "&h=" + (l - 30)
                        };
                        i = "no";
                        j.title = "Cacoo";
                        break;
                    case "sharepoint":
                        h = "https://" + f + "&action=interactivepreview&wdSmallView=1";
                        j.title = "Office 365";
                        break;
                    default:
                        return !1
                }
                var e = $C(window),
                    d = e.width(),
                    e = e.height(),
                    k, l;
                if (n) {
                    this.$el.removeClass("previewFullDialog");
                    m += TM.preview_dialog_height_padding;
                    k = 1120;
                    for (l = 840; k > 160 && (d < k + 40 || e < l + m + 40);) k -= 160, l -= 120;
                    j.width = k + TM.preview_dialog_width_padding
                } else this.$el.addClass("previewFullDialog"), k = d - 40, l = e - m - 40, j.width = k;
                j.height = l + m;
                b && f && (g ? $("#_previewLinkContent").html('<div style="margin:auto"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + L.loading + "</div>") : $("#_previewLinkContent").html(r(h, k, l, i)));
                this.setOption(j)
            },
            close: function() {
                a.empty()
            }
        });
        $("#_previewLinkReload").click(function() {
            var a = F.data.previewlink_link;
            a && F.open(a)
        })
    };
    (function() {
        var b = {};
        a.addInformation = function(b) {
            b = b || {};
            return a.saveInformation(!1, b)
        };
        a.saveInformation = function(a, d) {
            d = $.extend(!0, {
                linktext: null,
                subject: null,
                body: null,
                buttonLabels: null,
                buttonClick: null,
                linkClick: null
            }, d);
            if (!a) {
                var e = 0;
                $.each(b, function(a) {
                    a > e && (e = parseInt(a, 10))
                });
                a = e + 1
            }
            b[a] = {
                linktext: d.linktext,
                subject: d.subject,
                body: d.body,
                buttonLabels: d.buttonLabels,
                buttonClick: d.buttonClick,
                linkClick: d.linkClick
            };
            var f = $C("#_openInfomation");
            f.hasClass("notification") || f.addClass("notification");
            return a
        };
        a.deleteInformation = function(d, e) {
            delete b[d];
            a.renderInformation();
            typeof e !== "function" && (e = function() {});
            $.isEmptyObject(b) ? $C("#_notificationArea").fadeOut(function() {
                $C("#_openInfomation").removeClass("notification");
                e()
            }) : e()
        };
        a.renderInformation = function() {
            var d = $C("#_notificationArea");
            if ($.isEmptyObject(b)) d.hide();
            else {
                var e = $C("#_notificationItemList");
                e.quickEmpty();
                $.each(b, function(b, d) {
                    var f =
                        '<li class="linkStatus" data-id="' + b + '">' + escape_html(d.linktext) + "</li>",
                        f = $(f);
                    e.append(f);
                    var j = {
                            subject: d.subject,
                            body: d.body,
                            buttonLabels: d.buttonLabels,
                            buttonClick: d.buttonClick
                        },
                        h = d.linkClick || function() {
                            a.openAnnounceDialog(j)
                        };
                    f.click(function() {
                        h(j)
                    })
                });
                d.isVisible() || a.showAnnounce()
            }
        }
    })();
    a.openInformationPanel = function() {
        $C("#_openInfomation").addClass("helpMenuSelected");
        var b = $C("#_informationBox");
        a.adjustInformationPanelPosition(!0);
        a.renderInformation();
        b.slideDown("fast", function() {
            $.cwFloatBox.open(b,
                function() {
                    b.slideUp("fast", function() {
                        $C("#_openInfomation").removeClass("helpMenuSelected")
                    })
                })
        })
    };
    a.adjustInformationPanelPosition = function(a) {
        var b = $C("#_informationBox");
        if (a || b.isVisible()) {
            var a = $C("#_openInfomation"),
                d = a.outerWidth(),
                e = b.outerWidth(),
                f = $(window).width(),
                a = a.offset().left + d / 2 + e / 2 > f ? f - e : a.offset().left + d / 2 - e / 2;
            b.css("left", a)
        }
    };
    a.prepareUserGuideDialog = function() {
        g = $("#_userguideDialog").cwDialog({
            title: L.userguide_title.replace("%%service_name%%", SERVICE_NAME),
            width: 820,
            height: "full",
            autoOpen: !1,
            modal: !0,
            open: function() {
                b()
            }
        });
        var a = g.$el.find("._navlist"),
            b = function(d) {
                var e = 0;
                a.each(function() {
                    if ($(this).hasClass("_select")) return !1;
                    e++
                });
                var f = e;
                if (d) return f += d, f > a.length - 1 && (f = 0), a.eq(f).click(), !1;
                var d = [],
                    j = [];
                f > 0 && (d.push(L.pager_prev), j.push(function() {
                    b(-1)
                }));
                f < a.length - 1 ? (d.push(L.pager_next), j.push(function() {
                    b(1)
                })) : f == a.length - 1 && (d.push(L.button_close), j.push(function() {
                    g.close()
                }));
                g.setOption({
                    buttonLabels: d,
                    buttonClick: function(a) {
                        (0, j[a])()
                    }
                })
            };
        a.click(function() {
            var d =
                $(this),
                e = $C("#_userguideBody"),
                f = a.index(this),
                f = e.find("._content" + f);
            a.removeClass("_select");
            d.addClass("_select");
            a.removeClass("userguideOrderListSelected");
            d.addClass("userguideOrderListSelected");
            e.find("._howTo").hide();
            f.fadeIn();
            f.find("._contentBody").scrollTop(0);
            b()
        })
    };
    a.openUserGuideDialog = function() {
        g || a.prepareUserGuideDialog();
        g.open()
    };
    a.openAnnounceDialog = function(a) {
        a = $.extend(!0, {
            subject: null,
            body: null,
            buttonLabels: null,
            buttonClick: null
        }, a);
        l || (l = $("#_announceDialog").cwDialog({
            width: 600,
            height: "auto"
        }));
        var b = [L.button_close];
        a.buttonLabels && $.isArray(a.buttonLabels) && (b = $.merge(a.buttonLabels, b));
        l.setOption({
            title: a.subject,
            buttonLabels: b,
            buttonCancel: b.length - 1,
            buttonClick: function() {
                typeof a.buttonClick === "function" && a.buttonClick.apply(this, arguments)
            }
        });
        $C("#_announceBody").html(a.body);
        l.open();
        $.cwFloatBox.close($C("#_informationBox"))
    };
    a.openFeedbackCompleteDialog = function() {
        i || (i = $("#_feedbackCompleteDialog").cwDialog({
            width: 500,
            buttonLabels: [L.button_close],
            buttonCancel: 0
        }));
        i.open()
    };
    a.showAnnounce = function() {
        $C("#_notificationArea").fadeIn(function() {
            $C("#_openInfomation").addClass("notification")
        })
    };
    a.hideAnnounce = function() {
        $C("#_notificationArea").fadeOut(function() {
            $C("#_openInfomation").removeClass("notification")
        })
    };
    a.setDrafts = function() {
        var a = $("#_chatText").val();
        a && CS.setChatDraft(RM.id, a, CS.chatedit_id);
        if (a = $C("#_taskNameInput").val()) {
            var b = RS.view.getTaskAssignList(),
                d = $C("#_limitButton").cwDatePicker().getVal();
            CS.setTaskDraft(RM.id, a, b, d)
        }
    }
}

function AccountView(b) {
    var a = this,
        d = {
            contact: 80,
            myrequest: 80,
            request: 80,
            norequest: 80
        },
        e;
    for (e in d);
    var f = 0;
    a.model = b;
    a.tab_type = "addcontact";
    a.contact_dialog_shown = !1;
    a.checked_email_dat = {};
    a.noexist_email_dat = {};
    a.prepare = function() {
        function b(a) {
            return a.data("_requestContact_doubleClick")
        }

        function d(a) {
            a.data("_requestContact_doubleClick", setTimeout(function() {
                a.removeData("_requestContact_doubleClick")
            }, 3E3))
        }
        CW.view.registerKeyboardShortcut(67, !1, !1, !1, !1, function() {
            a.openContactWindow()
        });
        $("#_openContactWindow").click(function() {
            a.openContactWindow();
            CW.track.send("open_contacts_panel")
        });
        var e = $("#_nameTip").cwToolTip({
            theme: "black",
            noAnimation: !0
        });
        $C("#_wrapper").on("mouseover", "._avatarHoverTip", function() {
            var a = $(this);
            $C("#_nameTipContent").text(AC.getName(a.attr("data-aid")));
            e.open(a)
        }).on("mouseout", "._avatarHoverTip", function() {
            e.close()
        }).on("click", "._avatarClickTip", function() {
            var b = $(this),
                d = b.attr("data-aid");
            a.openProfileTip(d, b)
        }).on("click", "._speakerName", function() {
            $(this).closest("._message").find("._speaker ._avatarClickTip").click();
            return !1
        }).on("click", "._skypeCall", function() {
            var a = $(this).attr("data-skype-id");
            document.location.href = "skype:" + a + "?call"
        }).on("click", "._openProfile", function() {
            var b = $(this).attr("data-aid");
            b && a.openProfileWindow(b)
        }).on("click", "._profileEdit", function() {
            a.openProfileEditWindow()
        }).on("click", "._requestContact", function() {
            var e = $(this);
            if (!b(e)) {
                d(e);
                var f = [e.attr("data-aid")];
                a.requestContact(f, e.cwButton())
            }
        }).on("click", "._cancelMyRequest", function() {
            var a = $(this);
            if (!b(a)) {
                d(a);
                var e = a.closest("._contactPanel").attr("data-aid"),
                    f = a.cwButton();
                f.disable();
                CW.post("gateway.php", {
                    cmd: "cancel_contact_request",
                    aid: e
                }, function() {
                    CW.watch()
                }, function(a) {
                    CW.alert(a);
                    f.enable()
                })
            }
        }).on("click", "._acceptContactRequest", function() {
            var a = $(this);
            if (!b(a)) {
                d(a);
                var e = a.attr("data-aid"),
                    f = a.cwButton();
                f.disable();
                CW.post("gateway.php", {
                    cmd: "accept_contact_request",
                    a: [e]
                }, function(a) {
                    if (a.error != void 0) {
                        var b = L.contact_error_cantadd,
                            d = L.contact_error_planlimit,
                            d = d.replace(/%%plan_name%%/, a.error.plan_name),
                            d = d.replace(/%%limit_num%%/,
                                a.error.limit_num);
                        CW.view.showLimitErrorDialog(b, d);
                        f.enable()
                    } else CW.watch()
                }, function(a) {
                    CW.alert(a);
                    f.enable()
                })
            }
        }).on("click", "._rejectContactRequest", function() {
            var a = $(this);
            if (!b(a)) {
                d(a);
                var e = a.attr("data-aid"),
                    f = a.cwButton();
                f.disable();
                CW.confirm(L.contact_confirm_reject_request.replace(/%%name%%/, AC.getName(e)), function() {
                    CW.post("gateway.php", {
                        cmd: "reject_contact_request",
                        aid: e
                    }, function() {
                        CW.watch()
                    }, function(a) {
                        CW.alert(a);
                        f.enable()
                    })
                }, function() {
                    f.enable()
                })
            }
        }).on("click", "._deleteContact",
            function() {
                var a = $(this);
                if (!b(a)) {
                    d(a);
                    var e = a.closest("._contactPanel").attr("data-aid"),
                        f = a.cwButton();
                    f.disable();
                    CW.view.confirmDelete(L.contact_confirm_delete.replace(/%%name%%/, AC.getName(e)), function() {
                        CW.post("gateway.php", {
                            cmd: "delete_contact",
                            aid: e
                        }, function() {
                            CW.watch()
                        }, function(a) {
                            CW.alert(a);
                            f.enable()
                        })
                    }, function() {
                        f.enable()
                    })
                }
            }).on("click", "#_addNoContactMember", function() {
            if (!b($(this))) {
                d($(this));
                var e = $(this).cwButton(),
                    f = e.$el.attr("data-rid");
                if (f = RL.rooms[f]) {
                    var j = [],
                        h;
                    for (h in f.member_dat) AC.isContact(h) ||
                        j.push(h);
                    j.length > 0 && a.requestContact(j, e)
                }
            }
        });
        $("#_myProfile").click(function() {
            a.openProfileWindow(AC.myid)
        });
        $(".cw_user_add_desc").click(function() {
            CW.view.showUserAdmin()
        });
        window.fbAsyncInit = function() {
            FB.init({
                appId: a.model.facebook_app_id
            })
        };
        (function() {
            var a = document.createElement("script");
            a.src = document.location.protocol + "//connect.facebook.net/en_US/all.js";
            a.async = !0;
            document.getElementById("fb-root").appendChild(a)
        })()
    };
    var g = !1;
    a.prepareEditProfile = function() {
        if (!g) {
            g = !0;
            var b = $("#_profileAvatarUpload").cwToolTip();
            $("#_profileAvatarUploadType").cwSelectBox({
                parentFloatBox: b.$el,
                update: function(a) {
                    switch (a) {
                        case "upload":
                            $("#_profileAvatarUploadInput").html('<input type="file" name="__cwform_avatar_upload_file" class="_cwValidateFileImage" /><div>' + L.profile_image_limit + "</div>");
                            break;
                        case "twitter":
                            $("#_profileAvatarUploadInput").html('<input type="text" name="__cwform_avatar_twitter" placeholder="twitter ID"/>');
                            break;
                        case "facebook":
                            $("#_profileAvatarUploadInput").html('<input type="text" name="__cwform_avatar_facebook" placeholder="' +
                                L.username + '"/>');
                            break;
                        case "gravatar":
                            $("#_profileAvatarUploadInput").html('<input type="text" name="__cwform_avatar_gravatar" placeholder="' + L.mailaddress + '"/>');
                            break;
                        default:
                            $C("#_profileAvatarUploadInput").quickEmpty()
                    }
                }
            });
            $("#_profileEditAvatarControl").click(function() {
                b.open($(this))
            });
            $("#_profileAvatarSubmit").click(function() {
                $("#_profileAvatarForm").submit()
            });
            $("#_profileAvatarCancel").click(function() {
                b.close()
            });
            $("#_profileAvatarForm").submit(function() {
                $("#_profileAvatarPrivacyHidden").val($("#_profilePrivacyAvatar").attr("data-value"));
                b.close();
                CW.showProgress(L.saving)
            });
            CW.view.onIframeReady(function() {
                $("#_profileAvatarFrame").load(function() {
                    CW.hideProgress();
                    var a = unescape_html($(this).contents().find("body").html());
                    a.length > 0 && (a = a.match(/\{.+\}/)[0], $.parseJSON(a).status.success ? CW.watch() : CW.alert(L.raise_error))
                })
            });
            var d = $("#_profileCoverUpload").cwToolTip();
            $("#_profileEditCoverControl").click(function() {
                d.open($(this))
            });
            $("#_profileCoverSubmit").click(function() {
                $("#_profileCoverForm").submit()
            });
            $("#_profileCoverCancel").click(function() {
                d.close()
            });
            $("#_profileCoverForm").submit(function() {
                $("#_profileCoverPrivacyHidden").val($("#_profilePrivacyCover").attr("data-value"));
                d.close();
                CW.showProgress(L.saving)
            });
            CW.view.onIframeReady(function() {
                $("#_profileCoverFrame").load(function() {
                    CW.hideProgress();
                    var a = unescape_html($(this).contents().find("body").html());
                    a.length > 0 && (a = a.match(/\{.+\}/)[0], $.parseJSON(a).status.success ? CW.watch() : CW.alert(L.raise_error))
                })
            });
            var e = [{
                value: "public",
                label: '<span class="icoFontPublic"></span> ' + L.profile_setting_privacy_public
            }, {
                value: "contact",
                label: '<span class="icoFontContact"></span> ' + L.profile_setting_privacy_contact
            }];
            $("#_profileEditContent").on("click", "._profilePrivacyBox", function() {
                var b = $(this).attr("data-key");
                $.cwDropDown.isInit(this) || $(this).cwDropDown({
                    offsetLeft: 2,
                    useHtmlLabel: !0,
                    list: e,
                    select: function(d) {
                        a.setPrivacySettingIcon(b, d);
                        this.close()
                    }
                }).open()
            });
            $("#_profileAvatarUpload").on("click", "._profilePrivacyBox", function() {
                var d = $(this).attr("data-key");
                $.cwDropDown.isInit(this) || $(this).cwDropDown({
                    parentFloatBox: b.$el,
                    useHtmlLabel: !0,
                    offsetLeft: 2,
                    list: e,
                    select: function(b) {
                        a.setPrivacySettingIcon(d, b);
                        this.close()
                    }
                }).open()
            });
            $("#_profileCoverUpload").on("click", "._profilePrivacyBox", function() {
                var b = $(this).attr("data-key");
                $.cwDropDown.isInit(this) || $(this).cwDropDown({
                    parentFloatBox: d.$el,
                    offsetLeft: 2,
                    useHtmlLabel: !0,
                    list: e,
                    select: function(d) {
                        a.setPrivacySettingIcon(b, d);
                        this.close()
                    }
                }).open()
            });
            CW.is_business && $("#_profileInputOrgName").click(function() {
                $("#_profileSelectOrgnameTypeIndividual").click()
            });
            $("#_profileInputChatWorkId").keyup(function() {
                a.checkCWID($(this).val())
            }).blur(function() {
                a.checkCWID($(this).val())
            })
        }
    };
    var l = "",
        k = null;
    a.checkCWID = function(b) {
        var d = trim(b);
        if (d != l) l = d, k && (clearTimeout(k), k = null), AC.getChatWorkId(AC.myid) == d ? ($("#_profileCWIDLoading").hide(), $("#_profileCWIDStatus").text(""), a.is_valid_cwid = !0) : d ? d.length > 50 ? ($("#_profileCWIDLoading").hide(), $("#_profileCWIDStatus").text(L.error_maxlength.replace("%%length%%", 50)).css("color", "red"), a.is_valid_cwid = !1) : d.match(/^[-_a-zA-Z0-9]+$/) ? ($("#_profileCWIDLoading").show(), $("#_profileCWIDStatus").text(""), k = setTimeout(function() {
            $("#_profileCWIDLoading").show();
            CW.get("gateway.php", {
                cmd: "check_chatwork_id",
                cwid: d
            }, function(b) {
                $("#_profileCWIDLoading").hide();
                b.used ? ($("#_profileCWIDStatus").text(L.error_already_used).css("color", "red"), a.is_valid_cwid = !1) : ($("#_profileCWIDStatus").text(L.available).css("color", "green"), a.is_valid_cwid = !0)
            })
        }, 1E3)) : ($("#_profileCWIDLoading").hide(), $("#_profileCWIDStatus").text(L.error_invalidchar).css("color", "red"), a.is_valid_cwid = !1) : ($("#_profileCWIDLoading").hide(), $("#_profileCWIDStatus").text(""))
    };
    a.deleteContact =
        function(a) {
            CW.view.confirmDelete(L.contact_confirm_delete.replace(/%%name%%/, AC.getName(a)), function() {
                CW.post("gateway.php", {
                    cmd: "delete_contact",
                    aid: a
                }, function() {
                    CW.watch()
                })
            })
        };
    a.openFacebookInviteWindow = function() {
        FB.ui({
            method: "apprequests",
            message: L.facebook_apprequests_message,
            filters: ["app_non_users"],
            display: "popup"
        }, function(b) {
            a.model.saveInviteInfo("facebook", b.request);
            CW.alert(L.contact_search_from_facebook_complete)
        })
    };
    a.updateAvatar = function(a) {
        for (var b in a) $("._avatarAid" + a[b]).each(function() {
            this.src =
                CW.getAvatarPanel(a[b], {
                    src: !0
                })
        })
    };
    a.updateCover = function(a) {
        for (var b in a) $("._coverAid" + a[b]).each(function() {
            this.src = CW.getCoverPanel(a[b], {
                src: !0
            })
        })
    };
    a.updateName = function(a) {
        for (var b in a) $("._nameAid" + a[b]).each(function() {
            $(this).text(AC.getName(a[b]))
        }), $(".cw_onm" + a[b]).each(function() {
            $(this).text(AC.getOrgName(a[b]))
        }), $(".cw_cwid" + a[b]).each(function() {
            $(this).text(AC.getChatWorkId(a[b]))
        })
    };
    a.showAddContactMessage = function(a) {
        var b = [],
            d;
        for (d in a) switch (a[d]) {
            case "request_contact":
                b.push(L.contact_myrequest);
                break;
            case "invite_contact":
                b.push(L.contact_invite)
        }
        b && CW.alert(b.join(L.word_separator) + L.contact_is_completed)
    };
    a.showChatWorkIdRequestDialog = function(b) {
        a.openProfileWindow(b.aid)
    };
    a.getNoRequestDat = function(b) {
        var d = {},
            e = {};
        RL.rooms[b] ? e[b] = RL.rooms[b] : e = RL.rooms;
        for (var f in e) {
            var b = RL.rooms[f],
                j;
            for (j in b.member_dat) a.model.myid != j && !a.model.isContact(j) && !a.model.myrequest_dat[j] && (d[j] = a.model.account_dat[j])
        }
        return d
    };
    a.buildMyStatus = function() {
        var b = CW.getAvatarPanel(a.model.myid, {
            size: "small",
            hovertip: !1,
            clicktip: !1
        });
        $("#_myStatusIcon").html(b);
        $("#_myStatusName").html(CW.getName(a.model.myid) + '<span class="openAction icoFontTriangleDown"></span>');
        CW.view.endInitLoad()
    };
    a.buildMyContact = function() {
        a.buildContactWindow()
    };
    a.searchSocialContactList = function(b) {
        a.searchContact("social", b)
    };
    a.resetSocialContactErrorCount = function() {
        f = 0
    };
    var i = null;
    a.openProfileTip = function(b, d) {
        i || (i = $("#_profileTip").cwToolTip({
            open: function() {
                this.$el.html(a.getContactPanel(this.data.account_id))
            }
        }), i.$el.on("click",
            "._moveButton",
            function() {
                i.close()
            }));
        i.data.account_id = b;
        i.open(d)
    };
    var h = null;
    a.openProfileWindow = function(b) {
        h === null && (h = $("#_profileContent").cwDialog({
            width: 815,
            open: function(b) {
                a.assignDetailInfo(this.$el, b);
                this.setOption({
                    title: AC.getName(b)
                })
            },
            openCallback: function() {
                this.$el.scrollTop(0)
            }
        }), h.$el.on("click", "._moveButton", function() {
            h.close()
        }));
        h.open(b)
    };
    a.closeProfileWindow = function() {
        h.close()
    };
    a.openProfileEditWindow = function() {
        a.prepareEditProfile();
        var b = AC.myid;
        $("#_profileEditContent").cwDialog({
            title: AC.getName(b),
            width: 815,
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                switch (b) {
                    case 0:
                        var b = [],
                            d = trim($("#_profileInputName").val());
                        $("#_profileInputName").val(d);
                        d || b.push(L.profile_error_no_displayname);
                        d = trim($("#_profileInputChatWorkId").val());
                        $("#_profileInputChatWorkId").val(d);
                        d && (a.is_valid_cwid || b.push(L.profile_error_invalid_cwid));
                        if (b.length) CW.alert(b.join("\n"));
                        else {
                            var e = {
                                cmd: "send_profile_setting"
                            };
                            $("#_profileEditContent").find("[data-name]").each(function() {
                                var a =
                                    $(this),
                                    b = a.attr("data-value");
                                b == void 0 && (b = a.val());
                                $.cwCheckBox.isInit(this) ? (a = a.cwCheckBox(), a.isChecked() && (e[a.$el.attr("data-name")] = a.getVal())) : a.attr("type") == "radio" ? a[0].checked && (e[a.attr("data-name")] = b) : e[a.attr("data-name")] = b
                            });
                            if (e.allow_search == void 0) e.allow_search = "0";
                            CW.post("gateway.php", e, function(b) {
                                var d = {
                                        name: "nm",
                                        orgname: "onm",
                                        department: "dp",
                                        title: "tt",
                                        cwid: "cwid",
                                        skype: "sp",
                                        twitter: "tw",
                                        facebook: "fb",
                                        address: "ad",
                                        email: "mail",
                                        introduction: "intro",
                                        tel_extension: "etel",
                                        tel_mobile: "mtel",
                                        tel_organization: "otel",
                                        url: "url"
                                    },
                                    e = {},
                                    f = "",
                                    j;
                                for (j in d) b[j] && (e[d[j]] = b[j]), f = j + "_priv", b[f] && (e[d[j] + "_priv"] = b[f]);
                                AC.setAccountDat(AC.myid, e);
                                a.assignDetailInfo(h.$el, AC.myid);
                                h.setOption({
                                    title: AC.getName(AC.myid)
                                });
                                b.allow_search != void 0 && (ST.data.allow_search = parseInt(b.allow_search, 10));
                                CW.watch()
                            }, function() {
                                CW.alert(L.raise_error)
                            });
                            this.close()
                        }
                }
            },
            open: function() {
                a.closeProfileWindow();
                CW.is_business ? (CW.is_admin && $("#_profileCommonOrgNameLink").show(), $("#_profileEditOrgNameLoading").show(),
                        CW.post("gateway.php", {
                            cmd: "get_common_organizatin_info"
                        }, function(a) {
                            $("#_profileEditOrgNameLoading").hide();
                            a.onm !== "" ? ($("#_profileEditOrgName ._profileSelectOrgNameType").show(), $("#_profileSelectOrgnameTypeCommonLabel").text(a.onm)) : $("#_profileEditOrgName ._profileSelectOrgNameType").hide();
                            a.use_common ? ($("#_profileSelectOrgnameTypeCommon").prop("checked", !0), $("#_profileInputOrgName").val("")) : ($("#_profileSelectOrgnameTypeIndividual").prop("checked", !0), $("#_profileInputOrgName").val(AC.getOrgName(b)))
                        })) :
                    $("#_profileInputOrgName").val(AC.getOrgName(b));
                $("#_profileEditAvatar").html(CW.getAvatarPanel(b, {
                    size: "huge",
                    clicktip: !1,
                    hovertip: !1
                }));
                $("#_profileEditCover").html(CW.getCoverPanel(b));
                $("#_profileAvatarImage").html(CW.getAvatarPanel(b, {
                    size: "large",
                    clicktip: !1,
                    hovertip: !1
                }));
                $("#_profileCoverImage").html(CW.getCoverPanel(b));
                $("#_profileInputName").val(AC.getName(b));
                ST.data.allow_search == "1" ? $("#_profileAllowSearch").cwCheckBox().check() : $("#_profileAllowSearch").cwCheckBox().unCheck();
                $("#_profileInputChatWorkId").val(AC.getChatWorkId(b));
                $("#_profileInputIntroduction").val(AC.getIntroduction(b));
                $("#_profileInputFacebook").val(AC.getFacebook(b));
                $("#_profileInputTwitter").val(AC.getTwitter(b));
                $("#_profileInputSkype").val(AC.getSkype(b));
                $("#_profileInputDepartment").val(AC.getDepartment(b));
                $("#_profileInputTitle").val(AC.getTitle(b));
                $("#_profileInputAddress").val(AC.getAddress(b));
                $("#_profileInputUrl").val(AC.getUrl(b));
                $("#_profileInputEmail").val(AC.getEmail(b));
                $("#_profileInputOrgTel").val(AC.getOrgTel(b));
                $("#_profileInputExtensionTel").val(AC.getExtensionTel(b));
                $("#_profileInputtMobileTel").val(AC.getMobileTel(b));
                a.setPrivacySettingIcon("Avatar", AC.getAvatarPriv(AC.myid));
                a.setPrivacySettingIcon("Cover", AC.getCoverPriv(AC.myid));
                a.setPrivacySettingIcon("OrgName", AC.getOrgNamePriv(AC.myid));
                a.setPrivacySettingIcon("Department", AC.getDepartmentPriv(AC.myid));
                a.setPrivacySettingIcon("Title", AC.getTitlePriv(AC.myid));
                a.setPrivacySettingIcon("Url", AC.getUrlPriv(AC.myid));
                a.setPrivacySettingIcon("Address", AC.getAddressPriv(AC.myid));
                a.setPrivacySettingIcon("Introduction",
                    AC.getIntroductionPriv(AC.myid));
                a.setPrivacySettingIcon("Skype", AC.getSkypePriv(AC.myid));
                a.setPrivacySettingIcon("Twitter", AC.getTwitterPriv(AC.myid));
                a.setPrivacySettingIcon("Facebook", AC.getFacebookPriv(AC.myid));
                a.setPrivacySettingIcon("Email", AC.getEmailPriv(AC.myid));
                a.setPrivacySettingIcon("OrgTel", AC.getOrgTelPriv(AC.myid));
                a.setPrivacySettingIcon("ExtensionTel", AC.getExtensionTelPriv(AC.myid));
                a.setPrivacySettingIcon("MobileTel", AC.getMobileTelPriv(AC.myid));
                var d = $("#_profileEditContent").find("._profilePhotoEditBar");
                d.hide();
                setTimeout(function() {
                    d.fadeIn()
                });
                a.checkCWID(AC.getChatWorkId(b))
            },
            close: function() {
                a.openProfileWindow(AC.myid)
            }
        }).open()
    };
    a.setPrivacySettingIcon = function(a, b) {
        b && $("#_profilePrivacy" + a).removeClass().addClass("icoFont" + ucfirst(b)).attr("data-value", b);
        return this
    };
    var j = null,
        o = null,
        m = 0,
        n = 0,
        t = TM.contactwindow_pager_view_num,
        u = null,
        s = {};
    a.prepareContactWindow = function() {
        $("#_contactWindowTabMyContact");
        j = $("#_contactWindow").cwFloatWindow({
            title: L.menu_contact_admin,
            open: function() {
                a.selectDefaultTabInContactWindow()
            }
        });
        $("#_contactWindowTab").on("click", "li", function() {
            if (this.id === "_contactWindowTabContact" && a.reachedContactLimit()) return CW.view.showContactLimitErrorDialog(), !1;
            $C("#_contactWindowTab li").removeClass("floatTabSelect");
            $C("#_contactWindowSearch").focus();
            a.tab_type = $(this).addClass("floatTabSelect").attr("data-type");
            a.clearSearchContact();
            b.setVal("");
            $C("#_contactWindowBox").scrollTop(0)
        });
        var b = $("#_contactWindowSearch").cwSearchBox({
            update: function() {
                a.tab_type == "addcontact" ? a.searchContact("word",
                    this.getVal()) : a.buildContactWindow()
            }
        });
        $("#_addContactByFacebook").click(function() {
            a.searchContactBySocial("facebook")
        });
        var d = $("#_addContactBySocialMore");
        d.length > 0 && d.cwDropDown({
            offsetLeft: 2,
            list: [{
                label: L.contact_search_from_twitter,
                value: "twitter"
            }, {
                label: L.contact_search_from_linkedin,
                value: "linkedin"
            }],
            select: function(b) {
                a.searchContactBySocial(b);
                this.close()
            }
        });
        var e = $("#_addContactByMailTip").cwToolTip({});
        $("#_addContactByMail").click(function() {
            e.open($(this))
        });
        $("#_addContactByMailCheckButton").cwButton({
            click: function() {
                if ($("#_addContactByMailAddress").val()) {
                    var b =
                        trim($C("#_addContactByMailAddress").val());
                    b && a.searchContact("mail", b)
                }
            }
        });
        var f = $("#_contactWindowCheckActionArea").find("._button").cwButton();
        $C("#_contactWindowList").on("click", "._contactList", function() {
            $C("#_contactWindowList").find("._contactList").removeClass("adminDetailSelected");
            var b = $(this);
            b.addClass("adminDetailSelected");
            a.buildContactDetail(b.attr("data-aid"))
        }).on("cwCheckBox_update", function(a, b, d) {
            b ? s[d] = b : s[d] && delete s[d];
            a = $C("#_contactWindowList").find("._contactList").length;
            (b = count(s)) ? (b == a ? o.check() : o.partialCheck(), f.enable()) : (o.unCheck(), f.disable())
        }).on("click", "._inviteByFacebook", function() {
            a.openFacebookInviteWindow()
        }).on("click", "._inviteContact", function() {
            var b = p.inviteMailList;
            b.length > 0 && (CW.showProgress(L.contact_doing_invite), CW.post("gateway.php", {
                cmd: "invite_contact",
                e: b,
                nm: AC.getName(AC.myid),
                av: CW.getAvatarPanel(AC.myid, {
                    src: !0
                })
            }, function() {
                CW.hideProgress();
                CW.alert(L.contact_done_invite);
                a.clearSearchContact();
                a.buildContactWindow()
            }, function(a) {
                CW.hideProgress();
                CW.alert(a)
            }))
        });
        o = $C("#_contactWindowCheckAll").cwCheckBox();
        contact_window_allcheck_button = $("#_contactWindowCheckAllButton").cwButton({
            click: function() {
                o.toggle()
            },
            disable: function() {
                o.disable()
            },
            enable: function() {
                o.enable()
            }
        });
        $C("#_contactWindowCheckAll").cwCheckBox({
            update: function(a, b, d) {
                d || (this.isChecked() ? $C("#_contactWindowList").find("._cwCBUnchecked").each(function() {
                    $(this).cwCheckBox().check()
                }) : $C("#_contactWindowList").find("._cwCBChecked").each(function() {
                    $(this).cwCheckBox().unCheck()
                }))
            }
        });
        $("#_contactDetailClose").click(function() {
            $C("#_contactWindowList").find("._contactList").removeClass("adminDetailSelected");
            $C("#_contactDetailArea").attr("data-aid", "").hide();
            $C("#_contactDetailBlankArea").show()
        });
        $("#_contactWindowCancel").cwButton({
            click: function() {
                var a = [],
                    b;
                for (b in s) a.push(b);
                a.length > 0 && (CW.showProgress(L.canceling), CW.post("gateway.php", {
                    cmd: "cancel_contact_request",
                    a: a
                }, function() {
                    CW.hideProgress()
                }, function(a) {
                    CW.hideProgress();
                    CW.alert(a)
                }))
            }
        });
        $("#_contactWindowDelete").cwButton({
            click: function() {
                var a = [],
                    b;
                for (b in s) a.push(b);
                CW.view.confirmDelete(L.contact_multi_delete_confirm.replace(/%%num%%/, a.length), function() {
                    a.length > 0 && (CW.showProgress(L.deleting), CW.post("gateway.php", {
                        cmd: "delete_contact",
                        a: a
                    }, function() {
                        CW.hideProgress();
                        CW.watch()
                    }, function(a) {
                        CW.hideProgress();
                        CW.alert(a)
                    }))
                })
            }
        });
        $("#_contactWindowAccept").cwButton({
            click: function() {
                var a = [],
                    b;
                for (b in s) a.push(b);
                a.length > 0 && (CW.showProgress(L.accepting), CW.post("gateway.php", {
                    cmd: "accept_contact_request",
                    a: a
                }, function(a) {
                    if (a.error !=
                        void 0) {
                        var b = L.contact_error_cantadd,
                            d = L.contact_error_planlimit,
                            d = d.replace(/%%plan_name%%/, a.error.plan_name),
                            d = d.replace(/%%limit_num%%/, a.error.limit_num);
                        CW.view.showLimitErrorDialog(b, d)
                    }
                    CW.hideProgress()
                }, function(a) {
                    CW.hideProgress();
                    CW.alert(a)
                }))
            }
        });
        $("#_contactWindowAdd").cwButton({
            click: function() {
                var b = [],
                    d;
                for (d in s) b.push(d);
                b.length > 0 && a.requestContact(b, this)
            }
        });
        var h = ["first", "prev", "next", "last"];
        u = $("#_contactWindowPager").cwButtonBar({
            update: function(b) {
                switch (h[b]) {
                    case "first":
                        n =
                            0;
                        break;
                    case "prev":
                        n--;
                        n < 0 && (n = 0);
                        break;
                    case "next":
                        n++;
                        n >= m && (n = m - 1);
                        break;
                    case "last":
                        n = m - 1
                }
                a.buildContactWindow({
                    resetPager: !1
                });
                $C("#_contactWindowBox").scrollTop(0)
            }
        })
    };
    a.requestContact = function(b, d) {
        d || (d = {
            enable: function() {},
            disable: function() {}
        });
        var e = function() {
            d.disable();
            b.length > 1 && CW.showProgress(L.contact_multi_adding);
            CW.post("gateway.php", {
                cmd: "request_contact",
                a: b
            }, function(b) {
                if (b.error != void 0) {
                    var e = L.contact_error_cantadd,
                        f = L.contact_error_planlimit,
                        f = f.replace(/%%plan_name%%/,
                            b.error.plan_name),
                        f = f.replace(/%%limit_num%%/, b.error.limit_num);
                    CW.view.showLimitErrorDialog(e, f);
                    d.enable()
                } else {
                    for (e = 0; e < b.requested_list.length; e++) {
                        var j = b.requested_list[e];
                        a.model.myrequest_dat[j] = {
                            nm: AC.getName(j),
                            mg: f
                        }
                    }
                    CW.watch()
                }
                CW.hideProgress()
            }, function(a) {
                CW.alert(a);
                d.enable();
                CW.hideProgress()
            })
        };
        b.length > 1 ? CW.view.confirm(L.contact_multi_add_confirm.replace(/%%num%%/, b.length), e) : b.length == 1 && e();
        CW.track.send("request_contact")
    };
    a.social_connected = {};
    a.searchContactBySocial = function(b) {
        a.social_connected[b] ?
            a.model.searchSocialContactList(b) : ST.openSocialConnectWindow(b, "social_contact")
    };
    a.openContactWindow = function() {
        j || a.prepareContactWindow();
        j.open();
        a.buildContactWindow();
        $C("#_contactWindowSearch").focus()
    };
    var v = null,
        x = null,
        y = {
            isSearched: !1,
            isLoading: !1,
            lastType: "",
            lastQuery: "",
            accountIdList: [],
            inviteMailList: []
        },
        p = $.extend({}, y);
    a.getSearchStat = function() {
        return searchResult
    };
    a.searchContact = function(b, d) {
        if (!(p.lastType == b && p.lastQuery == d)) {
            a.clearSearchContact();
            p.isLoading = !0;
            p.lastType =
                b;
            p.lastQuery = d;
            p.accountIdList = [];
            p.inviteMailList = [];
            switch (b) {
                case "social":
                    (function() {
                        v = CW.post("gateway.php", {
                            cmd: "get_social_contact_list",
                            provider: d
                        }, function(b) {
                            if (b.error != void 0) {
                                var d = L.contact_error_cantadd,
                                    e = L.contact_error_planlimit,
                                    e = e.replace(/%%plan_name%%/, b.error.plan_name),
                                    e = e.replace(/%%limit_num%%/, b.error.limit_num);
                                CW.view.showLimitErrorDialog(d, e)
                            } else
                                for (d in b.account_dat) AC.myid != d && p.accountIdList.push(d), AC.isUnknown(d) && AC.setAccountDat(d, b.account_dat[d]);
                            p.isSearched = !0;
                            p.isLoading = !1;
                            a.buildContactWindow()
                        }, function(b) {
                            b != void 0 && b.length > 0 && $.inArray("no_connected", b) !== -1 ? (f++, f < 3 ? ST.openSocialConnectWindow(d, "social_contact") : (CW.alert(L.find_friends_from_third_party_service_reconnect_error.replace(/%%provider%%/, d)), a.resetSocialContactErrorCount())) : CW.alert(b);
                            p.isSearched = !0;
                            p.isLoading = !1;
                            a.buildContactWindow()
                        })
                    })();
                    break;
                case "word":
                    d ? x = setTimeout(function() {
                        x = null;
                        v = CW.post("r/gateway.php", {
                            cmd: "search_contact",
                            q: d
                        }, function(b) {
                            if (b.error != void 0) {
                                var d =
                                    L.contact_error_cantadd,
                                    e = L.contact_error_planlimit,
                                    e = e.replace(/%%plan_name%%/, b.error.plan_name),
                                    e = e.replace(/%%limit_num%%/, b.error.limit_num);
                                CW.view.showLimitErrorDialog(d, e)
                            } else {
                                for (d in b.account_dat) AC.myid != d && p.accountIdList.push(d), AC.isUnknown(d) && AC.setAccountDat(d, b.account_dat[d]);
                                if (b.error_dat && b.error_dat.noexist) {
                                    b = b.error_dat.noexist;
                                    d = 0;
                                    for (e = b.length; d < e; d++) p.inviteMailList.push(b[d])
                                }
                            }
                            p.isSearched = !0;
                            p.isLoading = !1;
                            a.buildContactWindow()
                        })
                    }, 1E3) : (p.isSearched = !1, p.isLoading = !1, a.buildContactWindow());
                    break;
                case "mail":
                    var e = d.split("\n");
                    v = CW.post("gateway.php", {
                        cmd: "check_address",
                        a: e
                    }, function(b) {
                        if (b.error != void 0) {
                            var d = L.contact_error_cantadd,
                                e = L.contact_error_planlimit,
                                e = e.replace(/%%plan_name%%/, b.error.plan_name),
                                e = e.replace(/%%limit_num%%/, b.error.limit_num);
                            CW.view.showLimitErrorDialog(d, e)
                        } else {
                            for (e in b.address_dat) {
                                var f = b.address_dat[e].aid;
                                p.accountIdList.push(f);
                                AC.isUnknown(f) && AC.setAccountDat(f, b.address_dat[e])
                            }
                            e = [];
                            if (b.error_dat != void 0) {
                                f = "";
                                for (d in b.error_dat) {
                                    var j = b.error_dat[d].length;
                                    if (d == "noexist")
                                        for (var h = 0; h < j; h++) p.inviteMailList.push(b.error_dat[d][h]);
                                    else {
                                        e = e.concat(b.error_dat[d]);
                                        f && (f += "\n\n");
                                        var m = 0;
                                        if (j > 3) var o = 3,
                                            m = j - 3;
                                        else o = j;
                                        j = "";
                                        for (h = 0; h < o; h++) j && (j += ","), j += b.error_dat[d][h];
                                        f += j;
                                        m > 0 && (f += L.contact_rest_number.replace(/%%rest_number%%/, m));
                                        d == "invalid" ? f += L.contact_error_is_not_mailaddress : d == "limited" ? f += L.contact_error_is_over_contactnum : d == "external" && (f += L.contact_error_is_disable_external)
                                    }
                                }
                                f && CW.alert(f)
                            }
                            p.isSearched = !0;
                            p.isLoading = !1;
                            a.buildContactWindow()
                        }
                    })
            }
            a.buildContactWindow()
        }
    };
    a.clearSearchContact = function() {
        v && (v.abort(), v = null);
        x && clearTimeout(x);
        o.unCheck(!0);
        s = {};
        p = $.extend({}, y)
    };
    a.selectDefaultTabInContactWindow = function() {
        var b = "_contactWindowTabContact";
        a.reachedContactLimit() && (b = "_contactWindowTabMyContact");
        $C("#" + b).click()
    };
    a.buildContactWindow = function(b) {
        $.extend({
            resetPager: !0
        }, b).resetPager && (n = 0);
        var d = count(a.model.request_dat);
        d > 0 ? $("#_myAllContactNum").text(d).show() : $("#_myAllContactNum").hide();
        if (j && j.isOpen()) {
            s = {};
            var e = a.getNoRequestDat(),
                f = p.accountIdList,
                h = p.inviteMailList,
                b = "",
                g = [],
                i = "",
                k = function(b, d) {
                    if (b == a.model.myid) return !1;
                    if (d.length > 0 && !a.model.isMatchedWithKeyList(d, b)) return !1;
                    return !0
                };
            contact_window_allcheck_button.disable();
            $C("#_contactWindowNavigation ._contactWindowNavigationItem").hide();
            switch (a.tab_type) {
                case "addcontact":
                    i = L.contact_search_introduction;
                    $C("#_addContactType").show();
                    $C("#_contactWindowAdd").show().cwButton().disable();
                    $C("#_contactWindowSearch").attr("placeholder",
                        L.contact_search_placeholder);
                    for (var g = [], l = 0, k = f.length; l < k; l++) {
                        var w = f[l];
                        !AC.isContact(w) && !AC.request_dat[w] && !AC.myrequest_dat[w] && g.push(w)
                    }
                    f = g;
                    break;
                case "contact":
                    i = L.contact_search_not_found;
                    $C("#_contactWindowSearch").attr("placeholder", L.contact_search);
                    f = $C("#_contactWindowSearch").val().toLowerCase();
                    p.isSearched = !1;
                    if (f) g = CW.splitWithSpace(f), p.isSearched = !0;
                    for (var f = [], l = 0, v = a.model.contact_list.length; l < v; l++) w = a.model.contact_list[l], k(w, g) && f.push(w);
                    $C("#_contactWindowDelete").show().cwButton().disable();
                    break;
                case "myrequest":
                    $C("#_contactWindowSearch").attr("placeholder", L.contact_search);
                    f = $C("#_contactWindowSearch").val().toLowerCase();
                    p.isSearched = !1;
                    if (f) g = CW.splitWithSpace(f), p.isSearched = !0;
                    f = [];
                    for (w in a.model.myrequest_dat) k(w, g) && f.push(w);
                    $C("#_contactWindowCancel").show().cwButton().disable();
                    break;
                case "request":
                    $C("#_contactWindowSearch").attr("placeholder", L.contact_search);
                    f = $C("#_contactWindowSearch").val().toLowerCase();
                    p.isSearched = !1;
                    if (f) g = CW.splitWithSpace(f), p.isSearched = !0;
                    f = [];
                    for (w in a.model.request_dat) k(w, g) && f.push(w);
                    $C("#_contactWindowAccept").show().cwButton().disable();
                    break;
                case "norequest":
                    $C("#_contactWindowSearch").attr("placeholder", L.contact_search);
                    f = $C("#_contactWindowSearch").val().toLowerCase();
                    p.isSearched = !1;
                    if (f) g = CW.splitWithSpace(f), p.isSearched = !0;
                    f = [];
                    e = a.getNoRequestDat();
                    for (w in e) k(w, g) && f.push(w);
                    b += '<div class="contactAddAllHint">' + L.contact_add_all_hint + "</div>";
                    $C("#_contactWindowAdd").show().cwButton().disable()
            }
            p.isLoading ? b +=
                '<div class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + L.loading + "</div>" : f.length == 0 && h.length == 0 && (b += p.isSearched ? '<div class="emptyAdminContent"><img src="./imagenew/common/empty/img_contact_empty.png" alt="" /><p>' + L.contact_error_search_user_not_found + "</p></div>" : '<div class="emptyAdminContent"><img src="./imagenew/common/empty/img_contact_empty.png" alt="" /><p>' + i + "</p></div>");
            f.sort(function(b, d) {
                return sort_for_string(a.model.getName(b), a.model.getName(d))
            });
            a.model.contact_list.length > 1 ? $C("#_contactWindowListNum").text("(" + number_format(a.model.contact_list.length - 1) + ")") : $C("#_contactWindowListNum").text("");
            w = count(a.model.myrequest_dat);
            if (w > 0) $C("#_contactWindowTabMyRequest").show(), $C("#_contactWindowMyRequestNum").text("(" + number_format(w) + ")");
            else if ($C("#_contactWindowTabMyRequest").hide(), a.tab_type == "myrequest") {
                a.selectDefaultTabInContactWindow();
                return
            }
            if (d > 0) $C("#_contactWindowTabRequest").show(), $C("#_contactWindowRequestNum").html('<span class="contactRequestNum">' +
                number_format(d) + "</span>").show();
            else if ($C("#_contactWindowTabRequest").hide(), a.tab_type == "request") {
                a.selectDefaultTabInContactWindow();
                return
            }
            w = count(e);
            if (w > 0) $C("#_contactWindowTabNoRequest").show(), $C("#_contactWindowNoRequestNum").text("(" + number_format(w) + ")");
            else if ($C("#_contactWindowTabNoRequest").hide(), a.tab_type == "norequest") {
                a.selectDefaultTabInContactWindow();
                return
            }
            w = h.length;
            if (w > 0) {
                b += '<li class="inviteMailNotFound subContentShadow"><p class="alert alertWarning">' + L.contact_mail_not_found +
                    "</p><ul>";
                for (l = 0; l < w; l++) b += "<li>" + escape_html(h[l]) + "</li>";
                b += '</ul><div class="btnInviteContentArea"><div class="_inviteContact button btnPrimary">' + L.contact_do_invite + "</div></div></li>"
            }
            h = [];
            l = f.length;
            m = parseInt(l / t, 10);
            l % t !== 0 && m++;
            if (l >= t) {
                d = n * t;
                w = d + t;
                w > l && (w = l);
                for (l = d; l < w; l++) h.push(f[l])
            } else h = f;
            d = h.length;
            d > 0 && contact_window_allcheck_button.enable();
            e = $C("#_contactDetailArea").attr("data-contact-id");
            i = !1;
            d && (all_contact_is_checked = !0);
            g = {
                profileLink: !1,
                shortButton: !1,
                footerButton: !0,
                showCover: !1,
                showMoveChat: !0,
                showLive: !0,
                showDeleteContact: !1,
                showCheckBox: !0,
                isChecked: !1
            };
            for (l = 0; l < d; l++) w = h[l], b += '<li class="_contactList subContentShadow" data-aid="' + w + '">' + a.getContactPanel(w, g) + "</li>", e == w && (i = !0);
            i || $C("#_contactDetailClose").click();
            o.unCheck(!0);
            !p.isLoading && p.lastType == "social" && p.lastQuery == "facebook" && (b += '<div class="addContactSocialFbArea"><div class="_inviteByFacebook button btnLarge btnPrimary">' + L.contact_invite_by_facebook + "</div></div>");
            $C("#_contactWindowList").html(b);
            f.length ? $C("#_contactWindowPagerIndex").text((n + 1).toString() + " / " + m) : $C("#_contactWindowPagerIndex").text("");
            u.enableButtonAll();
            n == 0 && u.disableButton(0).disableButton(1);
            m - n <= 1 && u.disableButton(2).disableButton(3)
        }
    };
    a.buildContactDetail = function(b) {
        AC.account_dat[b] && ($C("#_contactDetailBlankArea").hide(), $C("#_contactDetailArea").show(), a.assignDetailInfo($C("#_contactDetailArea"), b))
    };
    var w = 0;
    a.assignDetailInfo = function(b, d) {
        if (w) return !1;
        if (!AC.hasDetailData(d)) {
            b.hide();
            var e = !1;
            d == AC.myid &&
                (e = !0);
            w = d;
            AC.refreshAccountDetailData(d, e, function() {
                w = 0;
                a.assignDetailInfo(b, d)
            });
            return !1
        }
        b.find("._profileName").html(CW.getName(d));
        b.find("._profileAvatar").html(CW.getAvatarPanel(d, {
            size: "huge",
            clicktip: !1,
            hovertip: !1
        }));
        b.find("._profileCover").html(CW.getCoverPanel(d));
        b.find("._profileContactDetailCover").html(CW.getCoverPanel(d));
        b.find("._profileOrgName").html(CW.getOrgName(d));
        (e = CW.getChatWorkIdLink(d)) ? b.find("._profileChatWorkIdLink").html(L.profile_chatworkidtip + e).show(): b.find("._profileChatWorkIdLink").hide();
        (e = AC.getIntroduction(d)) ? b.find("._profileNameDescription").html("<pre>" + CW.renderMessage(e) + "</pre>").show(): b.find("._profileNameDescription").hide();
        b.find("._profileDepartment").text(AC.getDepartment(d));
        b.find("._profileTitle").text(AC.getTitle(d));
        b.find("._profileAddress").text(AC.getAddress(d));
        e = AC.getUrl(d);
        e.match(/^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/) ? (e = escape_html(e), b.find("._profileUrl").html('<a href="' + e + '" target="_blank">' + e + "</a>")) : b.find("._profileUrl").text(e);
        e = AC.getEmail(d);
        e.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/) ? (e = escape_html(e), b.find("._profileEmail").html('<a href="mailto:' + e + '">' + e + "</a>")) : b.find("._profileEmail").text(e);
        b.find("._profileOrgTel").text(AC.getOrgTel(d));
        b.find("._profileExtensionTel").text(AC.getExtensionTel(d));
        b.find("._profileMobileTel").text(AC.getMobileTel(d));
        var e = "",
            f = escape_html(AC.getFacebook(d)),
            j = escape_html(AC.getTwitter(d)),
            h = AC.getSkype(d),
            m = escape_html(h);
        f && (e = '<li><span class="icoFontFacebook"></span><span class="icoTextHide">facebook</span><a href="https://www.facebook.com/' +
            f + '" target="_blank">' + f + "</a></li>");
        j && (e += '<li><span class="icoFontTwitter"></span><span class="icoTextHide">twitter</span><a href="http://twitter.com/' + j + '" target="_blank">' + j + "</a></li>");
        h && (e += '<li><span class="icoFontSkype"></span><span class="icoTextHide">skype</span><a href="skype:' + m + '?call">' + m + "</a></li>");
        b.find("._profileSNS").html(e);
        e = a.getContactButton(d, {
            shortButton: !1,
            showMoveChat: !0,
            showLive: !0,
            showDeleteContact: !1
        });
        d == AC.myid && (e = '<div class="_profileEdit button">' + L.profile_edit +
            "</div>" + e);
        b.find("._profileButton").html(e);
        b.show()
    };
    a.getContactPanel = function(b, d) {
        var e = $.extend({
                profileLink: !0,
                showButton: !0,
                footerButton: !0,
                showCover: !0,
                showLive: !0,
                showCheckBox: !1,
                isChecked: !1
            }, d),
            f = "",
            j = CW.getChatWorkIdLink(b);
        j && (f = '<dd id="profileTipChatWorkId">' + L.profile_chatworkidtip + "<span>" + j + "</span></dd>");
        j = "";
        AC.getRoomId(b) && e.showLive && b != AC.myid && (j = '<div class="btnGroup"><div class="_joinLive button" data-aid="' + b + '"><span class="icoFontVideoChat icoSizeLarge"></span><span class="icoTextHide">' +
            L.live_join + "</span></div></div>");
        if (e.showButton) {
            e.showLive = !1;
            var h = a.getContactButton(b, e)
        } else h = "";
        if (e.profileLink && !AC.isUndisclosed(b)) {
            h += '<div class="_profileTipButton _openProfile _moveButton button" data-aid="' + b + '">' + L.menu_profile_setting + "</div>";
            var m = '<span class="_profileTipButton _openProfile profileTipName anchorText" data-aid="' + b + '">' + CW.getName(b) + "</span>"
        } else m = e.showCheckBox ? '<span class="_profileTipCheckLabel">' + CW.getName(b) + "</span>" : CW.getName(b);
        var o = "";
        e.showCover &&
            (o = CW.getCoverPanel(b));
        var g = "",
            n = "";
        e.showButton && h && (e.footerButton ? n = '<div class="tooltipFooter"><div class="btnGroup"><div class="_profileTipButton">' + h + "</div></div></div>" : g = '<div class="btnGroup">' + h + "</div>");
        h = "";
        e.showCheckBox && (h = $.cwCheckBox.create(e.isChecked, "", b, {
            "class": "_contactPanelCheck"
        }));
        return '<div class="_contactPanel" data-aid="' + b + '"><div class="profileImgToolTip">' + o + '<div class="profileTooltipAvater">' + CW.getAvatarPanel(b, {
                hovertip: !1,
                clicktip: !1,
                size: "large"
            }) + '</div></div><div class="speakerProfileTooltipContent clearfix">' +
            h + "<dl><dt>" + m + '</dt><dd id="_profileTipOrgName">' + CW.getOrgName(b) + "</dd>" + f + j + g + "</dl></div>" + n
    };
    a.getContactButton = function(a, b) {
        var d = $.extend({
                shortButton: !1,
                showMoveChat: !0,
                showLive: !0,
                showDeleteContact: !1
            }, b),
            e = "",
            f = AC.getRoomId(a);
        f ? (d.showLive && a != AC.myid && (e += '<div class="_joinLive button" data-aid="' + a + '"><span class="icoFontVideoChat"></span><span class="icoTextHide">' + L.live_join + "</span></div>"), d.showMoveChat && (e += '<div class="_roomLink _moveButton button" data-rid="' + f + '">' + (a == AC.myid ?
                L.mychat : L.directchat) + "</div>"), a != AC.myid && d.showDeleteContact && (e += d.shortButton ? '<div class="_deleteContact _actionButton button"><span class="icoFontActionDelete"></span><span class="icoTextHide">' + L.button_delete + "</span></div>" : '<div class="_deleteContact _actionButton button">' + L.contact_delete + "</div>")) : AC.myrequest_dat[a] ? e = d.shortButton ? '<div class="_cancelMyRequest _actionButton button">' + L.button_cancel + "</div>" : '<div class="_cancelMyRequest _actionButton button">' + L.contact_request_cancel +
            "</div>" : AC.request_dat[a] ? e = d.shortButton ? '<div class="_acceptContactRequest _actionButton button btnPrimary" data-aid="' + a + '">' + L.button_accept + '</div><div class="_rejectContactRequest _actionButton button" data-aid="' + a + '">' + L.button_reject + "</div>" : '<div class="_acceptContactRequest _actionButton button btnPrimary" data-aid="' + a + '">' + L.button_accept_long + '</div><div class="_rejectContactRequest _actionButton button" data-aid="' + a + '">' + L.button_reject_long + "</div>" : !AC.isDeleted(a) && !AC.isUndisclosed(a) &&
            (e = d.shortButton ? '<div class="_requestContact _actionButton button btnPrimary" data-aid="' + a + '">' + L.button_add + "</div>" : '<div class="_requestContact _actionButton button btnPrimary" data-aid="' + a + '">' + L.contactpanel_add_contact + "</div>");
        return e
    };
    a.reachedContactLimit = function() {
        var b = CW.contact_limit_num;
        return b && a.model.contact_list.length - 1 >= b
    }
}

function SettingView(b) {
    var a = this;
    a.is_valid_cwid = !1;
    a.model = b;
    a.total_progress_per = 0;
    a.stepguide_progress = {};
    a.debug_view_profile_aid = 0;
    a.view_profile_aid = 0;
    b.sound_default = "Kalimba";
    a.supported_dateformat = {
        "default": ["m/d/Y", "d/m/Y", "Y/m/d", "m-d-Y", "d-m-Y", "Y-m-d", "m.d.Y", "d.m.Y", "Y.m.d", "m/d-Y"],
        ja: ["Y\u5e74m\u6708d\u65e5"],
        "zh-cn": ["Y\u5e74m\u6708d\u65e5"]
    };
    a.checkbox_dat = {
        _popupSound: "popup_sound",
        _notifierShow: "desktop_alert",
        _notifierMessage: "notifier_message",
        _notifierOnlyto: "notifier_onlyto",
        _faviconstat: "faviconstat",
        _showDelmessage: "show_delmessage",
        _showExternal: "show_external",
        _privateNickname: "private_nickname",
        _shortenUrl: "shorten_url"
    };
    a.selectbox_dat = {
        _notifierDuration: "notifier_duration",
        _soundVolume: "sound_volume",
        _soundType: "sound_type",
        _notifyTerm: "notify_term",
        _langType: null,
        _langDateformat: null
    };
    var d = [{
            name: "mallet",
            data: {
                is_multi: !0
            }
        }, {
            name: "ashvoice",
            data: {
                is_multi: !1
            }
        }, {
            name: "agogo",
            data: {
                is_multi: !0
            }
        }, {
            name: "chime",
            data: {
                is_multi: !0
            }
        }, {
            name: "cowbell",
            data: {
                is_multi: !0
            }
        }, {
            name: "cuica",
            data: {
                is_multi: !0
            }
        }, {
            name: "drip",
            data: {
                is_multi: !0
            }
        }, {
            name: "kiai",
            data: {
                is_multi: !0
            }
        }, {
            name: "marimba",
            data: {
                is_multi: !0
            }
        }, {
            name: "percussimba",
            data: {
                is_multi: !0
            }
        }, {
            name: "steampipe",
            data: {
                is_multi: !0
            }
        }, {
            name: "whistle",
            data: {
                is_multi: !0
            }
        }, {
            name: "8-bit",
            data: {
                is_multi: !0
            }
        }, {
            name: "Ac_Guitar02",
            data: {
                is_multi: !1
            }
        }, {
            name: "Brass",
            data: {
                is_multi: !1
            }
        }, {
            name: "Crisis01",
            data: {
                is_multi: !1
            }
        }, {
            name: "Crisis02",
            data: {
                is_multi: !1
            }
        }, {
            name: "Cymbal",
            data: {
                is_multi: !1
            }
        }, {
            name: "Dora",
            data: {
                is_multi: !1
            }
        }, {
            name: "Sitar",
            data: {
                is_multi: !1
            }
        }, {
            name: "Tambourine",
            data: {
                is_multi: !1
            }
        }, {
            name: "Conga_c",
            data: {
                is_multi: !1
            }
        }, {
            name: "EP_c",
            data: {
                is_multi: !1
            }
        }, {
            name: "EP_d",
            data: {
                is_multi: !1
            }
        }, {
            name: "Piano_c",
            data: {
                is_multi: !1
            }
        }, {
            name: "Piano_d",
            data: {
                is_multi: !1
            }
        }, {
            name: "Piano_e",
            data: {
                is_multi: !1
            }
        }, {
            name: "Kalimba_c",
            data: {
                is_multi: !1
            }
        }, {
            name: "Kalimba_d",
            data: {
                is_multi: !1
            }
        }, {
            name: "Ac_Guitar",
            data: {
                is_multi: !0
            }
        }, {
            name: "Conga02",
            data: {
                is_multi: !0
            }
        }, {
            name: "Conga",
            data: {
                is_multi: !0
            }
        }, {
            name: "Crap",
            data: {
                is_multi: !0
            }
        }, {
            name: "EP02",
            data: {
                is_multi: !0
            }
        }, {
            name: "EP",
            data: {
                is_multi: !0
            }
        }, {
            name: "GuitarCutting",
            data: {
                is_multi: !0
            }
        }, {
            name: "Kalimba",
            data: {
                is_multi: !0
            }
        }, {
            name: "Piano",
            data: {
                is_multi: !0
            }
        }, {
            name: "Shooting",
            data: {
                is_multi: !0
            }
        }, {
            name: "Snare",
            data: {
                is_multi: !0
            }
        }, {
            name: "SynthBell02",
            data: {
                is_multi: !0
            }
        }, {
            name: "SynthBell03",
            data: {
                is_multi: !0
            }
        }, {
            name: "SynthBell",
            data: {
                is_multi: !0
            }
        }],
        e, f, g, l, k;
    a.isMultiSound = function(a) {
        var b, e = d.length,
            f = !1;
        for (b = 0; b < e; b++) {
            var j = d[b];
            if (j.name === a) {
                f = j.data.is_multi;
                break
            }
        }
        return f
    };
    a.openFbconnectDialog = function() {
        f ||
            (f = $("#_fbconnectDialog").cwDialog({
                title: L.fbconnect_title,
                width: 600,
                height: "auto",
                autoOpen: !1,
                buttonLabels: [L.fbconnect_enable, L.fbconnect_set_later],
                buttonSubmit: 0,
                buttonCancel: 1,
                buttonClick: function(b) {
                    switch (b) {
                        case 0:
                            a.openSocialConnectWindow("facebook", "fbconnect")
                    }
                }
            }));
        f.open()
    };
    a.prepareSetting = function() {
        var b = $("#_chatSetting"),
            d = b.find(".floatHeaderTab").find("li");
        NotificationAPI ? (window.navigator.userAgent.toLowerCase().indexOf("chrome") === -1 && $("#_notifierDurationBox").hide(), $("#_notifierNotSupported").hide(),
            $("#_notifierSupported").show()) : ($("#_notifierNotSupported").show(), $("#_notifierSupported").hide());
        var f = function() {
            var b = $("#_langType").cwSelectBox().getVal(),
                d = $("#_langDateformat").cwSelectBox().getVal(),
                f = {
                    cmd: "send_setting"
                },
                j = {};
            CW.showProgress(L.saving);
            var h = a.checkbox_dat,
                m;
            for (m in h) {
                var o = h[m],
                    g = $("#" + m).cwCheckBox();
                j[o] = g.isChecked() ? "1" : "0"
            }
            h = a.selectbox_dat;
            for (m in h) o = h[m], g = $("#" + m), j[o] = g.cwSelectBox().getVal();
            typeof j.notify_term !== "undefined" && (j.ai_notify_term = j.notify_term);
            if (b != LANGUAGE || ST.data.dateformat != d) m = {}, m.lang = b, m.dateformat = d, f.language = m;
            f.data = j;
            CW.post("gateway.php", f, function(a) {
                a.setting_data && ST.updateSetting(a.setting_data);
                if (a.lang) {
                    var b = L.button_ok,
                        d = L.button_cancel;
                    L.button_ok = L["lang_" + a.lang + "_button_ok"];
                    L.button_cancel = L["lang_" + a.lang + "_button_cancel"];
                    CW.confirm(L["lang_" + a.lang + "_change_confirm"], function() {
                        document.location.href = "./"
                    });
                    L.button_ok = b;
                    L.button_cancel = d
                }
                CW.hideProgress();
                e.close();
                CW.watch()
            })
        };
        e = b.cwDialog({
            width: 700,
            height: 560,
            title: L.menu_personal_setting,
            open: function() {
                d.eq(0).click();
                a.is_valid_cwid = !0;
                var b = a.checkbox_dat,
                    f;
                for (f in b) {
                    var j = b[f],
                        h = $("#" + f);
                    a.model.data[j] == 1 ? h.cwCheckBox().check() : h.cwCheckBox().unCheck()
                }
                b = a.selectbox_dat;
                for (f in b) j = b[f], h = $("#" + f).cwSelectBox({
                    parentFloatBox: e
                }), j !== null && typeof a.model.data[j] !== "undefined" && (j = a.model.data[j], h.findItemByValue(j) && h.select(j));
                $("#_langType").cwSelectBox().select(LANGUAGE);
                $("#_langDateformat").cwSelectBox().select(ST.data.dateformat);
                $("#_soundVolume").cwSelectBox().select(ST.data.sound_volume);
                CW.is_business || (f = $("#_showExternal"), f.parent().find("label").css("color", "#888"), f.cwCheckBox().disable(), f = $("#_privateNickname"), f.parent().find("label").css("color", "#888"), f.cwCheckBox().disable())
            },
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(a) {
                a === 0 && f()
            }
        });
        var j = e.$el.find("._cwSettingContents");
        d.click(function() {
            k && k.isActive() && k.close();
            var a = d.index(this),
                a = j.eq(a);
            d.removeClass("floatTabSelect");
            $(this).addClass("floatTabSelect");
            j.hide();
            a.show()
        });
        $("#_langType").cwSelectBox().setOption({
            update: function() {
                $("#_settingLanguage");
                var b = $("#_langDateformat");
                b.prop("name");
                var d;
                d = $("#_langType").cwSelectBox().getVal();
                var e = a.supported_dateformat,
                    e = (e[d] || []).concat(e["default"]),
                    f = [];
                d = 0;
                for (var j = e.length; d < j; d++) f.push({
                    label: CW.getDate((new Date((new Date).getFullYear(), 11, 31)).getTime() / 1E3, e[d]),
                    value: e[d]
                });
                b.cwSelectBox().setList(f).select(f[0].value)
            }
        })
    };
    a.openSettingDialog = function() {
        e || a.prepareSetting();
        e.open()
    };
    a.prepare = function() {
        $("#_setting").click(function() {
            a.openSettingDialog()
        });
        a.model.refreshSocialConnectStatus();
        $("._connectSocialAccount").click(function() {
            var b = this.id.substr(14).toLowerCase();
            a.model.openSocialConnectWindow(b)
        });
        $("._disconnectSocialAccount").click(function() {
            var b = this.id.substr(17).toLowerCase(),
                d = $('<img src="./imagenew/all/common/loader/img_loader_gray.gif" alt="Loading" />');
            $(this).before(d).hide();
            setTimeout(function() {
                a.model.disconnectSocialAccount(b,
                    function() {
                        d.remove()
                    })
            }, 10)
        });
        $("#_openOnFbConncetSetting").click(function() {
            a.openFbconnectDialog()
        });
        $("#_offFbConnectSetting").click(function() {
            var b = $(this),
                d = $('<img src="./imagenew/all/common/loader/img_loader_gray.gif" alt="Loading" />');
            b.before(d).hide();
            setTimeout(function() {
                a.model.offFbConncetSetting(function() {
                    d.remove()
                })
            }, 10)
        });
        $("#_soundPlay").click(function() {
            audioObjSupport ? CW.playSound($("#_soundType").cwSelectBox().getVal(), $("#_soundVolume").cwSelectBox().getVal()) : CW.alert(L.sound_no_support);
            return !1
        });
        var b = $("#_notifierShow").cwCheckBox();
        b.$el.click(function(d) {
            d.preventDefault();
            a.requestNotificationPermission(function(a) {
                a && b.toggle()
            });
            return !1
        });
        b.$el.next("label").click(function(a) {
            a.preventDefault();
            b.$el.click();
            return !1
        });
        var d = $("#_myStatusBox"),
            e = $("#_myStatusButton");
        e.hover(function() {
            e.hasClass("myStatusButtonSelected") || (e.addClass("myStatusButtonHover"), e.find(".icoSystem").addClass("icoFontTriangleDown"))
        }, function() {
            e.removeClass("myStatusButtonHover");
            e.find(".icoSystem").removeClass("icoFontTriangleDown")
        });
        CW.view.onEndInitLoad(function() {
            CW.plan == "free" ? $("#_upgradePlan").show().click(function() {
                CW.view.showServiceAdmin("upgrade")
            }) : $("#_upgradePlan").hide();
            CW.is_admin ? $("#_openAdminMenu").show() : ($("#_openAdminMenu").hide(), CW.is_admin_user && $C("#_userAdminMenu").show())
        });
        e.click(function() {
            if (!d.isVisible()) {
                e.addClass("myStatusButtonSelected");
                e.removeClass("myStatusButtonHover");
                var a = e.offset().left + e.outerWidth(),
                    b = e.outerWidth();
                if (b < TM.mymenu_min_width) b = TM.mymenu_min_width;
                d.width(b);
                b =
                    d.outerWidth();
                d.css("left", a - b - 10 + "px");
                d.slideDown("fast", function() {
                    $.cwFloatBox.open(d, function() {
                        d.slideUp("fast", function() {
                            e.removeClass("myStatusButtonSelected")
                        })
                    })
                })
            }
        }).mousedown(function() {
            return !1
        });
        d.on("click", "li", function() {
            $.cwFloatBox.close(d)
        });
        $("#_openFbShareWindow").click(function() {
            var a = L.fbconnect_application_name,
                b = CHATWORK_HOME + "/fb_share_result.php",
                d = L.chatwork_site_path,
                e = L.fbconnect_about_chatwork,
                f = "https://www.facebook.com/dialog/feed?app_id=" + AC.facebook_app_id;
            f +=
                "&display=popup";
            f += "&picture=" + encodeURIComponent(CHATWORK_HOME + "/image/dialog/img_facebook.png");
            f += "&name=" + encodeURIComponent(a);
            f += "&link=" + encodeURIComponent(d);
            f += "&description=" + encodeURIComponent(e);
            f += "&redirect_uri=" + encodeURIComponent(b);
            window.open(f, "fw", "width=600, height=400")
        });
        (function() {
            var a = $("#_inputApiTokenPass"),
                b = $("#_inputApiToken"),
                d = $("#_settingApi"),
                e = $("#_settingApiAfter"),
                f = $("#_regenerateTokenBtn"),
                j, h = $("#_copyTokenBtn"),
                m = {
                    getApiToken: function(a) {
                        CW.post("gateway.php", {
                            cmd: "get_api_token",
                            password: a.password,
                            regenerate: a.regenerate ? 1 : 0
                        }, function(a) {
                            a.api_token && m.displayTokenPanel(a.api_token)
                        }, function(a) {
                            if (a && a[0]) return CW.alert(a[0]);
                            return CW.alert(L._chatwork_apitoken_invalid_password)
                        })
                    },
                    displayPasswordPanel: function() {
                        m.clear();
                        e.hide();
                        d.show()
                    },
                    displayTokenPanel: function(a) {
                        m.clear();
                        b.val(a);
                        h.attr("data-clipboard-text", a);
                        d.hide();
                        e.show()
                    },
                    clear: function() {
                        a.val("");
                        b.val("")
                    }
                };
            k = {
                init: function() {
                    d.find("._displayApiToken").click(function() {
                        j = a.val();
                        j.length === 0 ? CW.alert(L._chatwork_apitoken_empty_password) : m.getApiToken({
                            password: j
                        })
                    });
                    f.click(function() {
                        CW.confirm(L._chatwork_apitoken_confirm_regenerate, function() {
                            m.getApiToken({
                                password: j,
                                regenerate: !0
                            })
                        })
                    });
                    var b = new ZeroClipboard(h[0], {
                        moviePath: "./javascript/ZeroClipboard.swf"
                    });
                    b.on("mouseover", function() {
                        h.addClass("buttonHover")
                    });
                    b.on("mouseout", function() {
                        h.removeClass("buttonHover")
                    });
                    b.on("mousedown", function() {
                        h.addClass("buttonActive")
                    });
                    b.on("mouseup", function() {
                        h.removeClass("buttonActive")
                    })
                },
                isActive: function() {
                    return d.is(":visible") || e.is(":visible")
                },
                close: function() {
                    m.displayPasswordPanel()
                }
            }
        })();
        k.init()
    };
    var i = !1,
        h = !0,
        j = function() {
            if (g) return !1;
            if (!i && !a.model.data.userguide_welcome) i = !0, setTimeout(function() {
                a.openWelcomeDialog()
            }, 500);
            else if (CW.switch_biwa) CW.switch_biwa = !1, CW.view.startTutorial()
        };
    a.openWelcomeDialog = function() {
        g || (g = $("#_userguideWelcomeDialog").cwDialog({
            title: L.welcome_title.replace("%%service_name%%", SERVICE_NAME),
            width: 820,
            close: function() {
                CW.view.startTutorial();
                CW.post("gateway.php", {
                    cmd: "send_chat_setting",
                    data: {
                        userguide_welcome: "1"
                    }
                })
            }
        }), $("#_userguideWelcomeOpen").click(function() {
            g.close()
        }));
        g.open()
    };
    a.refreshSoundStatus = function() {};
    a.prepareDoneFBSettingDialog = function() {
        l = $("#_doneFbconnectSettingDialog").cwDialog({
            title: L.fbconnect_setting_enabled,
            width: 600,
            buttonLabels: [L.button_close],
            buttonCancel: 0,
            open: function() {
                $("#_doneFbconnectSetting").show();
                $("#_fbShareArea").show();
                $("#_fbShareThanks").hide()
            },
            close: function() {
                f.close()
            }
        })
    };
    a.showDoneFBSettingDialog =
        function(b) {
            $("#_fbconnectFooterPaid").hide();
            $("#_fbconnectFooterClose").hide();
            CW.is_enterprise == !0 ? CW.alert(L.fbconnect_setting_enabled) : (l || a.prepareDoneFBSettingDialog(), l.open(b))
        };
    a.showFbShareThanksDialog = function() {
        l || a.prepareDoneFBSettingDialog();
        l.isOpen() && l.open();
        $("#_doneFbconnectSetting").hide();
        $("#_fbShareThanks").fadeIn("slow")
    };
    a.updateSetting = function() {
        a.refreshNotificationStatus();
        $.cwDatePicker.setDefaultOption({
            dateFormat: ST.data.dateformat
        });
        h && ($("._datePicker").cwDatePicker(),
            RS.view.prepareTask());
        h = !1;
        ST.data.enter_action == "send" ? $C("#_sendEnterAction").cwCheckBox().check() : $C("#_sendEnterAction").cwCheckBox().unCheck();
        if (canPlayOgg || canPlayMp3) {
            var b = a.model.data.sound_type;
            $("#_audio_" + b).length || CW.view.embedAudio(b)
        }
        j()
    };
    var o;
    a.updateAnnounce = function() {
        $C("#_notificationArea");
        $C("#_notificationItemList");
        $C("#_notificationAnnounceLink");
        if (a.model.announce_dat.id) {
            var b = time(),
                d = a.model.announce_dat,
                e = parseInt(d.from, 10),
                d = parseInt(d.to, 10);
            if (e < b && b < d) {
                d = ST.announce_dat;
                o = CW.view.saveInformation(o, {
                    linktext: d.linktext,
                    subject: d.subject,
                    body: d.body,
                    buttonLabels: [L.announce_button_close],
                    buttonClick: function(b) {
                        if (b === 0) {
                            var d = this;
                            a.deleteAnnounce(o, function() {
                                a.model.closeAnnounce();
                                d.close()
                            })
                        }
                    }
                });
                CW.view.renderInformation();
                return
            }
        }
        o && a.deleteAnnounce(o)
    };
    a.deleteAnnounce = function(a, b) {
        a && (CW.view.deleteInformation(a, b), o = void 0)
    };
    a.toggleNotification = function(b) {
        NotificationAPI ? NotificationAPI.checkPermission() == 0 ? (ST.data.desktop_alert = a.model.data.desktop_alert ==
            "0" ? "1" : "0", a.refreshNotificationStatus(!0)) : (b.preventDefault(), NotificationAPI.requestPermission(function(b) {
            ST.data.desktop_alert = b == 0 ? "1" : "0";
            a.refreshNotificationStatus(!0)
        })) : CW.alert(L.desktopalert_no_support)
    };
    a.requestNotificationPermission = function(a) {
        NotificationAPI ? NotificationAPI.requestPermission(function() {
            NotificationAPI.checkPermission() == 0 ? a(!0) : a(!1)
        }) : CW.alert(L.desktopalert_no_support)
    };
    a.refreshNotificationStatus = function(b) {
        var d = !1;
        b && CW.post("gateway.php", {
            cmd: "send_chat_setting",
            data: {
                desktop_alert: a.model.data.desktop_alert
            }
        });
        a.model.data.desktop_alert == "1" && NotificationAPI && NotificationAPI.checkPermission() == 0 && (d = !0);
        d ? ($("#cw_notification_icon").removeClass("ui_sp_icon_footer_notification_off").addClass("ui_sp_icon_footer_notification_on").css("visibility", "visible"), $("#cw_notification").prop("title", L.menu_desktopalert + "(" + L.menu_current + "ON)"), CW.enable_popup = !0) : ($("#cw_notification_icon").removeClass("ui_sp_icon_footer_notification_on").addClass("ui_sp_icon_footer_notification_off").css("visibility",
            "visible"), $("#cw_notification").prop("title", L.menu_desktopalert + "(" + L.menu_current + "OFF)"), CW.enable_popup = !1)
    };
    a.toggleSound = function() {
        audioObjSupport ? ST.data.popup_sound = a.model.data.popup_sound == "0" ? "1" : "0" : CW.alert(L.sound_no_support)
    };
    a.refreshSocialConnectStatus = function(b) {
        $("._onSocialService").show();
        $("._offSocialService").hide();
        for (var d = 0; d < b.length; d++) {
            var e = b[d].provider.toLowerCase(),
                f = ucfirst(e);
            $("#_socialConnect" + f).hide();
            $("#_socialDisconnect" + f).show();
            $("#_socialConnected" +
                f).show();
            e == "facebook" && b[d].fbconnect == !0 && ($("#_openOnFbConncetSetting").hide(), $("#_offFbConnectSetting").show());
            var j = $("#_socialConnected" + f + " ._socialDisplayName");
            j.text("(" + b[d].display_name + ")");
            j.attr("title", b[d].display_name);
            f = $("#_socialConnected" + f + " ._socialDisplayOver");
            a.adjustDisplayNameWidth(j, f);
            e != "google" && (AC.view.social_connected[e] = !0)
        }
    };
    a.adjustDisplayNameWidth = function(a, b) {
        a.width("auto");
        a.width() > 123 ? (b.text("...)").show(), a.width(123 - b.width())) : b.hide()
    };
    a.openSocialConnectWindow =
        function(a, b) {
            var a = ucfirst(a),
                d = "";
            b && (d = "&type=" + b);
            (wobj = window.open(ACCOUNT_SERVER_PATH + "/connect_social.php?provider=" + a + d, "sc", "width=600, height=400")) || CW.alert(L.turn_off_popup_blocker)
        }
}

function FileView(b) {
    var a = this;
    a.model = b;
    var d;
    a.prepare = function() {
        $("#_openFileWindow").click(function() {
            a.openFileWindow();
            CW.track.send("open_files_panel")
        });
        $("#_fileWindow,#_chatFileListTip").on("click", "._downloadFile", function() {
            var a = $(this).attr("data-file-id");
            (a = FL.file_id2file_dat[a]) && $("#_downloadFrame").attr("src", SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&file_id=" + a.id);
            return !1
        }).on("click", "._editFile", function() {
            var b = $(this).attr("data-file-id"),
                d = FL.file_id2file_dat[b];
            if (d) {
                var e = $("#_editFileFile");
                e.val(d.fn);
                $("#_editFileDialog").cwDialog({
                    width: 480,
                    height: 150,
                    title: L.file_edit_title,
                    buttonLabels: [L.button_save_long, L.button_cancel],
                    buttonSubmit: 0,
                    buttonCancel: 1,
                    buttonClick: function(d) {
                        switch (d) {
                            case 0:
                                var d = [],
                                    f = e.val();
                                f || d.push(L.file_error_empty);
                                a.model.isExecutableExtension(f) && d.push(L.error_upload_executable);
                                a.model.containIllegalChar(f) && d.push(L.error_illegal_filename);
                                if (d.length) {
                                    CW.alert(d.join("\n"));
                                    break
                                }
                                a.model.editFile(b, f);
                                this.close()
                        }
                    },
                    close: function() {
                        e.val("")
                    }
                }).open()
            }
        }).on("click", "._moveFile", function() {
            var a = $(this).attr("data-file-id");
            (a = FL.file_id2file_dat[a]) && RL.selectRoom(a.rid, a.cid)
        }).on("click", "._deleteFile", function() {
            var b = $(this).attr("data-file-id"),
                d = FL.file_id2file_dat[b];
            d && CW.view.confirmDelete(L.file_confirm_delete.replace(/%%file_name%%/, d.fn), function() {
                a.model.deleteFile(b);
                v = {}
            })
        });
        $("#_subContentFileOpenAll").click(function() {
            $C("#_subRoomFileList").find("li._fileList").each(function() {
                var a = $(this);
                a.hasClass("_fileOpen") || a.click()
            })
        });
        $("#_subContentFileCloseAll").click(function() {
            $C("#_subRoomFileList").find("li._fileOpen").click()
        });
        $C("#_wrapper").on("click", "._filePreview", function() {
            var b = $(this).attr("data-file-id");
            a.openPreviewDialog(b)
        }).on("mouseenter", "._filePreview", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: L.file_preview_image_hint,
                delay: 0
            }).open()
        })
    };
    var e = null;
    a.prepareFileList = function() {
        e = $("#_chatFileListTip").cwListTip({
            direction: "bottom",
            showPosition: "right",
            noTriangle: !0,
            search: !0,
            placeHolder: L.file_search,
            useHtmlLabel: !0,
            multiSelect: !1,
            selectable: !1,
            fixHeight: !1,
            maxListHeight: 400,
            open: function(a, b) {
                this.data.room = RL.rooms[b]
            },
            close: function() {
                b.close()
            },
            list: function() {
                var a = this.data.room;
                if (!a) return [];
                var b = [],
                    a = a.filelist.getFileList(),
                    d = a.length;
                if (d > 0) {
                    FL.sortFileList(a);
                    for (var e = 0; e < d; e++) {
                        var f = a[e],
                            j = FL.file_id2file_dat[f];
                        j != void 0 && j.st != "deleted" && b.push({
                            keys: [j.fn],
                            value: f,
                            label: FL.view.getFilePanel(j, {
                                type: "filelist"
                            })
                        })
                    }
                }
                return b
            },
            select: function(a) {
                this.ul.find("li.adminDetailSelected").removeClass("adminDetailSelected");
                this.findItemByValue(a).addClass("adminDetailSelected");
                b.open(this.findItemByValue(a), a)
            }
        });
        e.ul.on("mouseenter", "li", function() {
            var a = $(this),
                d = e.getValueByItem(a);
            $.cwMessageTip.isInit(this) || a.cwMessageTip({
                message: function(a) {
                    a = e.getValueByItem(a);
                    return FL.file_id2file_dat[a].fn
                },
                delayQuickMode: !1,
                delay: 1E3
            }).open();
            e.ul.find("li.adminDetailSelected").removeClass("adminDetailSelected");
            a.addClass("adminDetailSelected");
            b.open(e.findItemByValue(d), d)
        }).on("click", "li", function() {
            $.cwFloatBox.skip(b.$el)
        });
        var b = $("#_chatFileDetailTip").cwToolTip({
            parentFloatBox: $("#_chatFileListTip"),
            direction: "left",
            showPosition: "top",
            open: function(b, d) {
                var e = FL.file_id2file_dat[d];
                e && a.assignDetailInfo($C("#_chatFileDetailTip"), e)
            }
        });
        $("#_fileDetailDownload").click(function() {
            var a = $C("#_chatFileDetailTip").attr("data-file-id");
            (a = FL.file_id2file_dat[a]) && $("#_downloadFrame").attr("src", SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&file_id=" +
                a.id)
        });
        $("#_fileDetailMove").click(function() {
            var a = $C("#_chatFileDetailTip").attr("data-file-id");
            (a = FL.file_id2file_dat[a]) && RL.selectRoom(a.rid, a.cid)
        })
    };
    a.buildFileDetail = function(b) {
        if (b = FL.file_id2file_dat[b]) $C("#_fileDetailBlankArea").hide(), $C("#_fileDetailArea").show(), a.assignDetailInfo($C("#_fileDetailArea"), b)
    };
    var f = null,
        g = {};
    a.assignDetailInfo = function(b, d) {
        var e = SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&file_id=" + d.id,
            j = get_file_extension(d.fn);
        FL.view.isImage(j) ? (e += "&preview=1",
            b.find("._fileDetailPreview").html('<a href="' + e + '" target="_blank"><img src="' + e + '"/></a>')) : FL.view.isText(j) ? (f && f.abort(), g[d.id] ? (b.find("._fileDetailPreview").html('<div class="_codePreview codePreview">' + g[d.id].data + "</div>").scrollTop(0), a.startPreviewCacheTimer(d.id)) : (f = $.ajax({
            type: "GET",
            url: e + "&preview=1",
            success: function(e) {
                g[d.id] = {
                    data: escape_html(e)
                };
                a.startPreviewCacheTimer(d.id);
                b.find("._fileDetailPreview").html('<div class="_codePreview codePreview">' + g[d.id].data + "</div>").scrollTop(0);
                f = null
            },
            error: function() {
                b.find("._fileDetailPreview").html(L.file_preview_image_cant_read)
            }
        }), b.find("._fileDetailPreview").html('<div class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + L.file_loading + "</div>"))) : b.find("._fileDetailPreview").html(a.getFileTypeIcon(j));
        b.scrollTop(0);
        b.attr("data-file-id", d.id);
        b.find("._fileDetailName").text(d.fn).attr("data-file-id", d.id);
        b.find("._fileDetailSize").text(bytename(d.fz));
        b.find("._fileDetailUploadBy").html(CW.getAvatarPanel(d.aid, {
            size: "tiny"
        }) + " " + CW.getName(d.aid));
        b.find("._fileDetailUploadDate").html(CW.getDate(d.tm));
        b.find("._fileDetailChat").html(RL.rooms[d.rid].getIcon("html", "tiny") + CW.getRoomName(d.rid)).attr({
            "data-rid": d.rid,
            "data-mid": d.cid
        })
    };
    var l = {};
    a.startPreviewCacheTimer = function(a) {
        l[a] && clearTimeout(l[a]);
        l[a] = setTimeout(function() {
            g[a] && delete g[a];
            delete l[a]
        }, 3E5)
    };
    var k = null,
        i = null;
    a.prepareFileType = function() {
        k = {};
        i = {};
        var a = {
                spreadsheet: {
                    key: 1,
                    list: ["xls", "xlsx", "ods", "xlsm", "numbers", "xlsb", "xlt",
                        "et", "xltx", "gsheet"
                    ]
                },
                document: {
                    key: 2,
                    list: ["doc", "docx", "rtf", "pages", "xdw", "odt", "jtd", "epub", "tex", "dot", "dotx", "dotm", "docm", "gdoc", "one", "pub", "lhd", "jlb", "asta", "xps", "ps", "indd"]
                },
                presentation: {
                    key: 3,
                    list: ["pptx", "ppt", "key", "odp", "pptm", "ppsx", "potx", "pps", "pot", "gslides", "skitch"]
                },
                image: {
                    key: 4,
                    list: ["jpg", "png", "gif", "jpeg", "bmp", "tif", "eps", "ico", "tiff", "xcf", "cdr", "svg", "sai", "tga", "wmf", "emf", "dib", "pic", "snagproj", "cur", "xib"]
                },
                ai: {
                    key: 5,
                    list: ["ai"]
                },
                psd: {
                    key: 6,
                    list: ["psd", "abr"]
                },
                flash: {
                    key: 7,
                    list: ["swf", "fla", "flv", "fxp"]
                },
                pdf: {
                    key: 8,
                    list: ["pdf"]
                },
                movie: {
                    key: 9,
                    list: ["mp4", "wmv", "mov", "avi", "m4v", "3gp", "mts", "fbr", "mpg", "camrec", "ogg", "wlmp", "camproj", "m4p", "vob", "f4v"]
                },
                text: {
                    key: 10,
                    list: ["txt", "log", "strings", "text", "md", "license"]
                },
                audio: {
                    key: 11,
                    list: ["mp3", "wav", "m4a", "wma", "mid", "aiff", "m4r"]
                },
                font: {
                    key: 12,
                    list: ["ttf", "otf", "ttc"]
                },
                web: {
                    key: 13,
                    list: ["html", "css", "htm", "mht", "url", "webarchive", "torrent", "xhtml", "shtml", "less", "scss", "styl", "stylus"]
                },
                markup: {
                    key: 14,
                    list: ["xml",
                        "xsl", "wsdl", "kml", "kmz", "opml", "mxml"
                    ]
                },
                script: {
                    key: 15,
                    list: ["js", "m", "h", "json", "hsp", "rb", "sh", "c", "dll", "h", "cpp", "bat", "py", "cs", "cgi", "crx", "pl", "uws", "atn", "as", "jsx", "erb", "class", "scala", "jsee", "inc", "pm", "asp", "vb", "vbs", "module", "obj", "patch", "lua", "xcodeproj", "vcproj"]
                },
                php: {
                    key: 16,
                    list: ["php", "ctp", "twig", "phtml"]
                },
                java: {
                    key: 17,
                    list: ["java", "jar", "jsp", "war"]
                },
                csv: {
                    key: 18,
                    list: ["csv"]
                },
                data: {
                    key: 19,
                    list: ["dat", "sdf", "tsv", "mdb", "fp7", "db", "accdb", "mwb", "tbl", "sqlite", "sql", "idm", "bak",
                        "tab", "dump", "db9", "data", "dic", "cap", "backup", "fwa", "fwb", "kb4", "kb5", "kb6", "kb7", "kb11", "kb12", "enex"
                    ]
                },
                mindmap: {
                    key: 20,
                    list: ["mmap", "xmind", "mm", "xmmap", "mindnode", "mind"]
                },
                android: {
                    key: 21,
                    list: ["apk"]
                },
                iosapp: {
                    key: 22,
                    list: ["ipa"]
                },
                mail: {
                    key: 23,
                    list: ["eml", "msg", "vcf"]
                },
                setting: {
                    key: 24,
                    list: ["mobileprovision", "ini", "htaccess", "conf", "yml", "yaml", "reg", "properties", "plist", "config", "cfg", "cnf", "inf", "mobileconfig", "manifest", "emacs", "ste"]
                },
                security: {
                    key: 25,
                    list: ["pem", "p12", "ppk", "cer", "csr", "crt",
                        "certsigningrequest"
                    ]
                },
                "package": {
                    key: 26,
                    list: ["dmg", "air", "msi", "unitypackage", "mxp", "xpi", "iso", "pkg"]
                },
                drawing: {
                    key: 27,
                    list: ["vsd", "vdx", "jww", "dxf", "dwg", "atc", "vwx", "mpp", "dwt", "stl", "jwc"]
                },
                archive: {
                    key: 28,
                    list: ["zip", "lzh", "rar", "gz", "7z", "tgz", "tar", "cab", "sit", "egg", "alzip"]
                }
            },
            b;
        for (b in a) {
            var d = a[b],
                e = d.key,
                d = d.list;
            i[e] = b;
            for (var f = d.length; f--;) k[d[f]] = e
        }
    };
    a.openFileList = function(b) {
        e || a.prepareFileList();
        e.open($C("#_chatFileAll"), b)
    };
    var h = null;
    a.openPreviewDialog = function(b) {
        if (!a.model.file_id2file_dat[b]) return CW.alert(L.file_not_found), !1;
        h || (h = $("#_filePreviewDialog").cwDialog({
            autoOpen: !1,
            width: 700,
            height: 500,
            modal: !0,
            buttonLabels: [L.file_preview_download, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        $("#_downloadFrame").attr("src", "gateway.php?cmd=download_file&bin=1&file_id=" + this.data.file_id)
                }
            },
            open: function(a) {
                var b = SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&preview=1&file_id=" + a;
                this.data.file_id = a;
                this.$el.html('<div class="filePreviewDialogArea"><div id="_filePreviewLoading" class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' +
                    L.file_loading + '</div><div class="filePreviewImage"><img id="_filePreviewImage" style="visibility:hidden" src="' + b + '"/><div class="filePreviewBlank"><span class="icoFontLinkBlank"></span><span class="icoTextHide">' + L.file_preview_open_newwindow + "<span></div></div></div>");
                var d = $("#_filePreviewImage");
                d.load(function() {
                    $("#_filePreviewLoading").hide();
                    var a = d.width(),
                        e = d.height(),
                        f = a,
                        j = !1;
                    a > 600 && (e *= 600 / f, f = 600, j = !0);
                    e > 300 && (f *= 300 / e, e = 300, j = !0);
                    a = {
                        visibility: "visible"
                    };
                    if (j) a.width = round(f), a.height =
                        round(e);
                    d.css(a);
                    d.click(function() {
                        window.open(b)
                    });
                    d.nextAll(".filePreviewBlank").click(function() {
                        window.open(b)
                    })
                })
            }
        }));
        h.setOption({
            title: a.model.file_id2file_dat[b].fn
        });
        h.open(b)
    };
    a.buildByFileId = function(b) {
        file_id_list = typeof b != "object" ? [b] : b;
        var d = b = !1,
            f;
        for (f in file_id_list) {
            var j = FL.file_id2file_dat[file_id_list[f]];
            RM && RM.id == j.rid && (b = !0);
            j.aid == AC.myid && (d = !0)
        }
        b && RM.filelist.build();
        d && (a.buildFileWindow(), e && e.isOpen() && e.build())
    };
    a.buildFileWindow = function(b) {
        if (j && j.isOpen()) {
            $.extend({
                    resetPager: !0
                },
                b).resetPager && (t = 0);
            if (!a.model.myfile_load_flag.loaded) return $("#_fileWindowList").html('<li class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" alt="Loading" />' + L.file_loading + "</li>"), FL.loadAllMyFile(), !1;
            m.disable();
            var b = a.model.getMyFileList(),
                d = [];
            if (o)
                for (var e = o.toLowerCase(), f = 0, h = b.length; f < h; f++) {
                    var g = b[f],
                        i = FL.file_id2file_dat[g];
                    i.fn && i.fn.toLowerCase().indexOf(e) != -1 && d.push(g)
                } else d = b;
            FL.sortFileList(d);
            b = [];
            i = d.length;
            n = parseInt(i / u, 10);
            i % u !==
                0 && n++;
            if (i >= u) {
                e = t * u;
                f = e + u;
                f > i && (f = i);
                for (i = e; i < f; i++) b.push(d[i])
            } else b = d;
            b.length > 0 && m.enable();
            d = $C("#_fileWindowCheckAll").cwCheckBox();
            f = $C("#_fileWindowDeleteButton").cwButton();
            (i = count(v)) ? (i == b.length ? d.check() : d.partialCheck(), f.enable()) : (d.unCheck(), f.disable());
            h = $C("#_fileDetailArea").attr("data-file-id");
            d = !1;
            g = "";
            f = 0;
            for (e = b.length; f < e; f++) i = FL.file_id2file_dat[b[f]], h == i.id && (d = !0), g += a.getFilePanel(i, {
                type: "filewindow"
            });
            g || (b = "", b = o ? L.file_search_not_found : L.file_nothing, g = '<li class="emptyAdminContent"><img src="./imagenew/common/empty/img_file_empty.png" alt="" /><p>' +
                b + "</p></li>");
            $C("#_fileWindowList").html(g);
            d || $C("#_fileDetailClose").click();
            e == 0 ? ($C("#_emptyFileContent").show(), $C("#_fileWindowPagerIndex").text("")) : ($C("#_emptyFileContent").hide(), $C("#_fileWindowPagerIndex").text((t + 1).toString() + " / " + n));
            s.enableButtonAll();
            t == 0 && s.disableButton(0).disableButton(1);
            n - t <= 1 && s.disableButton(2).disableButton(3);
            a.buildStorageInfo()
        }
    };
    a.isImage = function(a) {
        if (a == "gif" || a == "jpg" || a == "jpeg" || a == "png") return !0;
        return !1
    };
    a.isText = function(a) {
        switch (a) {
            case "txt":
            case "css":
            case "html":
            case "htm":
            case "shtml":
            case "asp":
            case "bashrc":
            case "c":
            case "cgi":
            case "cpp":
            case "dif":
            case "h":
            case "java":
            case "js":
            case "less":
            case "scss":
            case "styl":
            case "stylus":
            case "jsee":
            case "json":
            case "jsp":
            case "m":
            case "manifest":
            case "mobileprovision":
            case "plist":
            case "mxml":
            case "php":
            case "pl":
            case "pm":
            case "py":
            case "rb":
            case "tpl":
            case "vbs":
            case "csv":
            case "slk":
            case "sql":
            case "tsv":
            case "def":
            case "inf":
            case "ini":
            case "reg":
            case "log":
                return !0
        }
        return !1
    };
    var j = null,
        o = "",
        m = null,
        n = 0,
        t = 0,
        u = TM.taskwindow_pager_view_num,
        s = null,
        v = {};
    a.prepareFileWindow = function() {
        j = $("#_fileWindow").cwFloatWindow({
            title: L.menu_file
        });
        $("#_fileWindowSearch").cwSearchBox({
            update: function() {
                o = this.getVal();
                v = {};
                a.buildFileWindow()
            }
        });
        var b = $C("#_fileWindowDeleteButton");
        b.cwMessageTip({
            message: L.file_delete_hint,
            delay: TM.messagetip_delay
        });
        var d = b.cwButton({
            click: function() {
                var b = [],
                    d;
                for (d in v) b.push(d);
                CW.view.confirmDelete(L.file_multi_confirm_delete.replace(/%%num%%/,
                    b.length), function() {
                    CW.showProgress(L.deleting);
                    FL.deleteFile(b, function() {
                        CW.hideProgress();
                        a.buildFileWindow()
                    }, function() {
                        CW.hideProgress();
                        CW.alert(error_message);
                        a.buildFileWindow()
                    });
                    v = {}
                })
            },
            disable: function() {
                this.$el.cwMessageTip().disable()
            },
            enable: function() {
                this.$el.cwMessageTip().enable()
            }
        });
        $("#_fileWindowList").on("click", "li", function() {
            $C("#_fileWindowList").find("li").removeClass("adminDetailSelected");
            var b = $(this);
            b.addClass("adminDetailSelected");
            b = b.attr("data-file-id");
            a.buildFileDetail(b)
        }).on("mouseenter",
            "._fileList",
            function() {
                $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                    message: function(a) {
                        a = a.attr("data-file-id");
                        return FL.file_id2file_dat[a].fn
                    },
                    delayQuickMode: !1,
                    delay: 1E3
                }).open()
            }).on("cwCheckBox_update", function(a, b, e) {
            b ? v[e] = b : v[e] && delete v[e];
            a = $C("#_fileWindowCheckAll").cwCheckBox();
            b = $C("#_fileWindowList").find("._fileList").length;
            (e = count(v)) ? (e == b ? a.check() : a.partialCheck(), d.enable()) : (a.unCheck(), d.disable())
        });
        $("#_fileDetailClose").click(function() {
            $C("#_fileWindowList").find("._fileList").removeClass("taskDetailSelected");
            $C("#_fileDetailArea").attr("data-file-id", "").hide();
            $C("#_fileDetailBlankArea").show()
        });
        $C("#_fileDetailTitle").click(function() {
            var a = $C("#_fileDetailArea").attr("data-file-id"),
                a = $C("#_fileWindowList").find("li._fileList[data-file-id=" + a + "]");
            $C("#_fileWindowBox").scrollTo(a, 600)
        });
        m = $("#_fileWindowCheckAllButton").cwButton({
            click: function() {
                $C("#_fileWindowCheckAll").cwCheckBox().toggle()
            },
            disable: function() {
                $C("#_fileWindowCheckAll").cwCheckBox().disable()
            },
            enable: function() {
                $C("#_fileWindowCheckAll").cwCheckBox().enable()
            }
        });
        $C("#_fileWindowCheckAll").cwCheckBox({
            update: function(a, b, d) {
                d || (this.isChecked() ? $C("#_fileWindowList").find("._cwCBUnchecked").each(function() {
                    $(this).cwCheckBox().check()
                }) : $C("#_fileWindowList").find("._cwCBChecked").each(function() {
                    $(this).cwCheckBox().unCheck()
                }))
            }
        });
        var e = ["first", "prev", "next", "last"];
        s = $("#_fileWindowPager").cwButtonBar({
            update: function(b) {
                switch (e[b]) {
                    case "first":
                        t = 0;
                        break;
                    case "prev":
                        t--;
                        t < 0 && (t = 0);
                        break;
                    case "next":
                        t++;
                        t >= n && (t = n - 1);
                        break;
                    case "last":
                        t = n - 1
                }
                v = {};
                a.buildFileWindow({
                    resetPager: !1
                });
                $C("#_fileWindowBox").scrollTop(0)
            }
        });
        $("#_storageAddButton").click(function() {
            j.close();
            CW.view.showOptionPlanPrice();
            return !1
        })
    };
    a.openFileWindow = function() {
        j || a.prepareFileWindow();
        j.open();
        a.buildFileWindow()
    };
    a.getFilePanel = function(b, d) {
        html = "";
        if (b === !1) html = '<div class="_delete">' + L.file_not_found + "</div>";
        else if (b.st != "deleted") {
            var e = get_file_extension(b.fn);
            if (d.type == "filewindow") {
                var f = !1;
                v[b.id] && (f = !0);
                html = '<li class="_fileList" data-file-id="' + b.id + '">' + $.cwCheckBox.create(f, "",
                        b.id) + a.getFileTypeIcon(e) + '<p class="fileAllListName">' + escape_html(b.fn) + '</p><p class="fileAllListSize">' + bytename(b.fz) + '</p><div class="fileAllListButtonArea btnGroup"><div class="_downloadFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_download_hint + '"><span class="icoFontActionDownload "></span></div><div class="_moveFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.jump_to_addpoint + '"><span class="icoFontActionMove "></span></div><div class="_editFile _showDescription button" data-file-id="' +
                    b.id + '" aria-label="' + L.file_rename_hint + '"><span class="icoFontActionEdit"></span></div><div class="_deleteFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_delete_hint + '"><span class="icoFontActionDelete"></span></div></div></li>'
            } else d.type == "filelist" && (e = get_file_extension(b.fn), f = b.aid == AC.myid ? '<div class="_editFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_rename_hint + '"><span class="icoFontActionEdit"></span></div><div class="_deleteFile _showDescription button" data-file-id="' +
                b.id + '" aria-label="' + L.file_delete_hint + '"><span class="icoFontActionDelete"></span></div>' : "", html = '<div class="fileContent">' + a.getFileTypeIcon(e) + '<p class="_fileName fileName">' + escape_html(b.fn) + '</p><div class="fileBtnArea btnGroup"><div class="_downloadFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.file_download_hint + '"><span class="icoFontActionDownload"></span></div><div class="_moveFile _showDescription button" data-file-id="' + b.id + '" aria-label="' + L.jump_to_addpoint +
                '"><span class="icoFontActionMove "></span></div>' + f + "</div></div>")
        }
        return html
    };
    a.getFileTypeIcon = function(b) {
        k == null && a.prepareFileType();
        return '<div class="fileIconArea ' + (k[b] != void 0 ? "ico35" + ucfirst(i[k[b]]) : "ico35UnknownFile") + '"></div>'
    };
    a.enableFileArea = function() {
        $C("#_file").show();
        $("#_chatFileAll").show()
    };
    a.disableFileArea = function() {
        $C("#_file").hide()
    };
    var x = {},
        y;
    a.last_storage = x;
    a.updateStorageInfo = function(b, e, f, h) {
        var g = Math.floor(b.total / e * 100);
        if (g >= 100) {
            if (h != void 0) var o = {
                linktext: L.storage_limit_warning_message,
                subject: L.storage_limit_warning_title,
                body: L.storage_limit_warning_body,
                linkClick: function(a) {
                    CW.view.showStorageCautionDialog({
                        title: a.subject,
                        body: a.body
                    })
                }
            };
            else var m = L.storage_limit_notice_footer,
                m = m.replace(/%%date%%/, CW.getDate(f, ST.data.dateformat)),
                o = {
                    linktext: L.storage_limit_notice_message,
                    subject: L.storage_limit_notice_title,
                    body: L.storage_limit_notice_body,
                    linkClick: function(a) {
                        CW.view.showStorageCautionDialog({
                            title: a.subject,
                            body: a.body,
                            footer: '<span class="textDanger">' + m + "</span>"
                        })
                    }
                };
            y = CW.view.saveInformation(y, o)
        } else g < 100 && d && (CW.view.deleteInformation(d), d = void 0);
        g >= 90 ? ($C("#_myFileNotice").show(), $C("#_storageTotalUsageRatioText").addClass("noticeStorage")) : ($C("#_myFileNotice").hide(), $C("#_storageTotalUsageRatioText").removeClass("noticeStorage"));
        if (e != void 0) x.storage = b, x.storage_limit = e, x.limit_time = f, x.is_limit = h, j && j.isOpen() && a.buildStorageInfo()
    };
    a.buildStorageInfo = function() {
        var a = x.storage,
            b = x.storage_limit,
            d = bytename(b, "B", 1),
            e = "";
        unim = ["", "K", "M", "G", "T", "P"];
        for (var f in unim) d.indexOf(unim[f]) != -1 && (e = unim[f]);
        $("#_storageTotalCapacity").text(d);
        d = "";
        a.total != void 0 && (d = bytename(a.total, "B", 2, e));
        $("#_storageTotalUsage").text(d);
        e = d = 0;
        f = "";
        a.file != void 0 && (e = Math.round(a.file / b * 100), d += e, f = bytename(a.file));
        $("#_storageUsageFileSize").text(f);
        f = 0;
        var j = "";
        a.chat != void 0 && (f = Math.round(a.chat / b * 100), d += f, j = bytename(a.chat));
        $("#_storageUsageMessageSize").text(j);
        var j = 0,
            h = "";
        a.other != void 0 && (j = Math.round(a.other / b * 100), d += j, h = bytename(a.other));
        $("#_storageUsageOtherSize").text(h);
        d > 100 && (f = Math.round(f / d * 100), e = Math.round(e / d * 100), j = Math.round(j / d * 100), d = f + e + j);
        h = parseInt(a.file, 10) + parseInt(a.chat, 10) + parseInt(a.other, 10);
        h = Math.floor(h / parseInt(b, 10) * 100);
        if (h >= 100 && d != 100 && h > d) switch (d = [f, e, j], ["chat", "file", "other"][d.indexOf(Math.max.apply(null, d))]) {
            case "chat":
                f++;
                break;
            case "file":
                e++;
                break;
            case "other":
                j++
        }
        $("#_storageUsageMessage").css("width", f + "%");
        $("#_storageUsageFile").css("width", e + "%");
        $("#_storageUsageOther").css("width", j + "%");
        e = "";
        a.total != void 0 && b != void 0 &&
            (e = Math.floor(a.total / b * 100));
        $("#_storageTotalUsageRatio").text(e);
        CW.is_business && !CW.is_admin && $C("#_storageAddButton").hide();
        CW.is_business && CW.is_admin && $("#_storageUserAdminLink").show()
    };
    a.buildAllMyFile = function() {
        a.buildFileWindow()
    }
}

function TaskView(b) {
    var a = this;
    a.model = b;
    a.alltask_status = "open";
    a.alltask_type = "my";
    a.alltask_filter = "all";
    a.prepare = function() {
        $("#_openTaskWindow").click(function() {
            a.openTaskWindow();
            CW.track.send("open_tasks_panel")
        });
        var b = null,
            d = null;
        $C("#_wrapper").on("mouseenter", "._moveTask", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: L.jump_to_addpoint,
                delay: TM.messagetip_delay
            }).open()
        }).on("click", "._moveTask", function() {
            var b = $(this).closest("._taskList").attr("data-task-id"),
                b = a.model.task_id2task_dat[b];
            RL.selectRoom(b.rid, b.cid)
        }).on("mouseenter", "._editTask", function() {
            $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                message: L.task_edit_hint,
                delay: TM.messagetip_delay
            }).open()
        }).on("click", "._editTask", function() {
            var e = $(this).closest("._taskList").attr("data-task-id");
            $("#_taskEditIncharge");
            var f = $("#_taskEditContent"),
                h = $("#_taskEditLimit").cwDatePicker(),
                g = a.model.task_id2task_dat[e];
            if (g == void 0) return CW.alert(L.task_not_found), !1;
            b == null && (h.setOption({
                    dateLabel: $("#_taskEditLimitLabel")
                }),
                b = $C("#_taskEditList").cwListTip({
                    search: !0,
                    placeHolder: L.chatroom_search_member,
                    useHtmlLabel: !0,
                    multiSelect: !1,
                    select: function() {
                        this.close()
                    },
                    update: function() {
                        var a = this.getVal(),
                            a = '<div class="assignContent assignMember"><span class="_taskAssignMemberLabel assignContentText assignContentTextEdit" data-aid="' + a + '">' + CW.getName(a) + "</span></div>";
                        $C("#_taskEditIncharge").html(a)
                    }
                }), $C("#_taskEditIncharge").on("click", "._taskAssignMemberLabel", function() {
                    b.open($(this))
                }), d = $("#_taskEditDialog").cwDialog({
                    title: L.task_edit_title,
                    width: 480,
                    height: "auto",
                    buttonLabels: [L.button_save_long, L.button_cancel],
                    buttonSubmit: 0,
                    buttonCancel: 1,
                    buttonClick: function(a) {
                        switch (a) {
                            case 0:
                                var d = [];
                                (a = f.val()) || d.push(L.task_error_empty);
                                if (d.length) {
                                    CW.alert(d.join("\n"));
                                    break
                                }
                                d = h.getVal();
                                CS.editTask(this.data.task_id, b.getVal(), a, d);
                                this.close()
                        }
                    },
                    open: function(a) {
                        this.data.task_id = a
                    }
                }));
            b.setOption({
                list: RS.view.getTaskMemberList(g.rid)
            }).select(g.aid);
            f.val(g.tn);
            g.lt && h.setVal(CW.getDate(g.lt, ST.data.dateformat));
            d.open(e)
        }).on("mouseenter",
            "._deleteTask",
            function() {
                $.cwMessageTip.isInit(this) || $(this).cwMessageTip({
                    message: L.task_delete_hint,
                    delay: TM.messagetip_delay
                }).open()
            }).on("click", "._deleteTask", function() {
            var b = $(this).closest("._taskList").attr("data-task-id");
            CW.view.confirmDelete(L.task_confirm_delete, function() {
                a.model.deleteTask(b)
            })
        }).on("click", "._taskCheck", function() {
            if (!CW.isLogin()) return CW.alert(L.error_no_login_action), !1;
            var b = $(this),
                d = b.attr("data-task-status");
            a.submitTask(b.closest("._taskList"), d);
            return !1
        })
    };
    a.submitTask = function(b, d) {
        var e = b.attr("data-task-id"),
            f;
        switch (d) {
            case "open":
                f = 0;
                break;
            case "done":
                f = 1;
                break;
            default:
                return
        }
        b[0].tagName == "TR" ? (b.children().fadeOut(500), setTimeout(function() {
            a.model.checkTask(e, f)
        }, 500)) : b.removeClass("subContentShadow").fadeOut(500, function() {
            a.model.checkTask(e, f)
        })
    };
    var d = null,
        e = 0,
        f = 0,
        g = TM.taskwindow_pager_view_num,
        l = null;
    a.prepareTaskWindow = function() {
        $("#_taskWindowTabOpen").click(function() {
            if (a.alltask_status != "open") $("#_taskWindowTabDone").removeClass("floatTabSelect"),
                $(this).addClass("floatTabSelect"), a.alltask_status = "open", a.buildTaskWindow()
        });
        $("#_taskWindowTabDone").click(function() {
            if (a.alltask_status != "done") $("#_taskWindowTabOpen").removeClass("floatTabSelect"), $(this).addClass("floatTabSelect"), a.alltask_status = "done", a.buildTaskWindow()
        });
        $C("#_taskWindowList").on("click", "._taskList", function() {
            $C("#_taskWindowList").find("._taskList").removeClass("adminDetailSelected");
            var b = $(this);
            b.addClass("adminDetailSelected");
            a.buildTaskDetail(b.attr("data-task-id"))
        });
        $("#_taskDetailClose").click(function() {
            $C("#_taskWindowList").find("._taskList").removeClass("adminDetailSelected");
            $C("#_taskDetailArea").attr("data-task-id", "").hide();
            $C("#_taskDetailBlankArea").show()
        });
        var b = ["my", "assign"];
        $("#_taskWindowViewType").cwTabbedBar({
            descriptionDelay: 0,
            update: function(d) {
                a.alltask_type = b[d];
                a.buildTaskWindow()
            }
        });
        d = $("#_taskWindow").cwFloatWindow({
            title: L.menu_mytask
        });
        $C("#_taskDetailTitle").click(function() {
            var a = $C("#_taskDetailArea").attr("data-task-id"),
                a = $C("#_taskWindowList").find("li._taskList[data-task-id=" +
                    a + "]");
            $C("#_taskWindowBox").scrollTo(a, 600)
        });
        var h = ["all", "limitover", "today", "inweek", "nolimit"];
        $("#_taskWindowFilter").cwTabbedBar({
            update: function(b) {
                a.alltask_filter = h[b];
                f = e = 0;
                a.buildTaskWindow()
            }
        });
        var g = ["first", "prev", "next", "last"];
        l = $("#_taskWindowPager").cwButtonBar({
            update: function(b) {
                switch (g[b]) {
                    case "first":
                        f = 0;
                        break;
                    case "prev":
                        f--;
                        f < 0 && (f = 0);
                        break;
                    case "next":
                        f++;
                        f >= e && (f = e - 1);
                        break;
                    case "last":
                        f = e - 1
                }
                a.buildTaskWindow({
                    resetPager: !1
                });
                $C("#_taskWindowBox").scrollTop(0)
            }
        })
    };
    a.openTaskWindow =
        function() {
            d || a.prepareTaskWindow();
            d.open();
            a.buildTaskWindow()
        };
    a.enableTaskArea = function() {
        $C("#_subRoomTaskAddArea").show()
    };
    a.disableTaskArea = function() {
        $C("#_subRoomTaskAddArea").hide()
    };
    a.buildByTaskId = function(b, d) {
        task_id_list = typeof b != "object" ? [b] : b;
        d == void 0 && (d = !1);
        var e = !1,
            f = !1,
            h = {},
            g;
        for (g in task_id_list) {
            var i = TK.task_id2task_dat[task_id_list[g]];
            h[i.rid] = !0;
            RM && RM.id == i.rid && (e = !0);
            if (i.aid == AC.myid || i.bid == AC.myid) f = !0
        }
        if (d) {
            for (var k in h) RL.rooms[k].refreshTaskNum();
            RL.build()
        }
        e &&
            RM.tasklist.build();
        f && a.buildTaskWindow()
    };
    a.buildTaskWindow = function(b) {
        if (d && d.isOpen()) {
            $.extend({
                resetPager: !0
            }, b).resetPager && (f = 0);
            var b = a.alltask_status,
                h = a.alltask_type,
                m = b + h;
            $C("#_emptyTaskContent").hide();
            if (!a.model.mytask_load_flag.loaded[m]) return $C("#_taskWindowList").html('<li class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" />' + L.task_loading + "</li>"), a.model.mytask_load_flag.loading[m] || (a.model.mytask_load_flag.loading[m] = !0, CW.get("gateway.php", {
                cmd: "load_my_task",
                type: h,
                status: b
            }, function(b) {
                if (b.task_dat) {
                    for (var d in b.task_dat) a.model.setTask(b.task_dat[d]);
                    a.model.mytask_load_flag.loading[m] = !1;
                    a.model.mytask_load_flag.loaded[m] = time();
                    a.buildTaskWindow()
                }
            })), !1;
            var i = a.model.getMyTaskList(b, h);
            if (b == "open") {
                $C("#_taskWindowFilter").show();
                for (var k = [], u = time(), s = strtotime(CW.getDate(u, "Y-m-d 00:00:00")), v = s + 86400, x = s + 604800, y = i.length, p = 0, w = 0, q = 0, r = 0, b = y; b--;) {
                    var z = i[b],
                        h = TK.task_id2task_dat[i[b]];
                    h.lt != 0 && h.lt <= u && (p++, a.alltask_filter ==
                        "limitover" && k.push(z));
                    s < h.lt && v > h.lt && (w++, a.alltask_filter == "today" && k.push(z));
                    s < h.lt && x > h.lt && (q++, a.alltask_filter == "inweek" && k.push(z));
                    h.lt == 0 && (r++, a.alltask_filter == "nolimit" && k.push(z));
                    a.alltask_filter == "all" && k.push(z)
                }
                RL.mytask_total > 0 ? $C("#_taskWindowNumAll").text(y).show() : $C("#_taskWindowNumAll").hide();
                p > 0 ? $C("#_taskWindowNumLimitOver").text(p).show() : $C("#_taskWindowNumLimitOver").hide();
                w > 0 ? $C("#_taskWindowNumLimitToday").text(w).show() : $C("#_taskWindowNumLimitToday").hide();
                q >
                    0 ? $C("#_taskWindowNumLimitWeek").text(q).show() : $C("#_taskWindowNumLimitWeek").hide();
                r > 0 ? $C("#_taskWindowNumLimitNone").text(r).show() : $C("#_taskWindowNumLimitNone").hide()
            } else $C("#_taskWindowFilter").hide(), k = i;
            TK.sortTaskList(k);
            i = [];
            h = k.length;
            e = parseInt(h / g, 10);
            h % g !== 0 && e++;
            if (h >= g) {
                u = f * g;
                b = u + g;
                b > h && (b = h);
                for (h = u; h < b; h++) i.push(k[h])
            } else i = k;
            k = $C("#_taskDetailArea").attr("data-task-id");
            u = !1;
            s = "";
            v = i.length;
            for (b = 0; b < v; b++) h = TK.task_id2task_dat[i[b]], (x = RL.rooms[h.rid]) || (x = {
                getIcon: function() {
                    return ""
                },
                getName: function() {
                    return L.chatroom_error_not_found
                }
            }), k == h.id && (u = !0), s += a.getTaskPanel(h, {
                type: "taskwindow"
            });
            $C("#_taskWindowList").html(s);
            u || $C("#_taskDetailClose").click();
            v == 0 && $C("#_emptyTaskContent").show();
            v ? $C("#_taskWindowPagerIndex").text((f + 1).toString() + " / " + e) : $C("#_taskWindowPagerIndex").text("");
            l.enableButtonAll();
            f == 0 && l.disableButton(0).disableButton(1);
            e - f <= 1 && l.disableButton(2).disableButton(3);
            d.resize()
        }
    };
    a.buildTaskDetail = function(b, d) {
        var e = a.model.task_id2task_dat[b];
        if (e.st == a.alltask_status) {
            switch (a.alltask_type) {
                case "my":
                    if (e.aid != AC.myid) return;
                    break;
                case "assign":
                    if (e.bid != AC.myid) return
            }
            var f = $C("#_taskWindowList").find('[data-task-id="' + b + '"]').find("._taskNameContent").text();
            $C("#_taskDetailTitle").text(f);
            $C("#_taskDetailLimit").html(a.getTaskLimit(e, {
                withLabel: !1
            }));
            $C("#_taskDetailAssign").html(a.getTaskAssign(e, {
                withName: !0
            }));
            $C("#_taskDetailAssignBy").html(a.getTaskAssignBy(e, {
                withName: !0
            }));
            $C("#_taskDetailChatName").html(a.getTaskChatName(e, {
                withIcon: !0
            }));
            $C("#_taskDetailBlankArea").hide();
            var f = e.rid,
                e = e.cid,
                h = !1,
                g = "";
            if (RL.rooms[f]) {
                var i = RL.rooms[f],
                    k = !1,
                    l = !1;
                if (!d)
                    if (i.timeline)
                        if (i.timeline.chat_id2chat_dat[e]) {
                            for (var y = 0, f = i.timeline.chat_list.length; y < f; y++) {
                                var p = i.timeline.chat_list[y];
                                if (p.id == e) break
                            }
                            30 > y && i.timeline.has_old && (l = k = !0)
                        } else k = !0;
                else k = !0;
                if (k) d ? g = "<div>" + L.jump_to_addpoint_not_found + "</div>" : (g = '<div class="timeLineLoading"><img src="./imagenew/all/common/loader/img_loader_white.gif" />' + L.chat_loading +
                    "</div>", l ? i.timeline.loadOld(function() {
                        a.buildTaskDetail(b, !0)
                    }) : i.load({
                        jumpTo: e
                    }, function() {
                        i.timeline.loadOld(function() {
                            a.buildTaskDetail(b, !0)
                        })
                    }));
                else {
                    y = k = 0;
                    for (f = i.timeline.chat_list.length; y < f; y++)
                        if (p = i.timeline.chat_list[y], p.id == e) {
                            k = y;
                            break
                        }
                    if (k) {
                        y = 0;
                        k > 30 && (y = k - 30);
                        h = k + 30;
                        for (g = []; y <= h && y < f; y++) g.push(i.timeline.chat_list[y]);
                        g = i.timeline.view.getTimeLine(g, {
                            idPrefix: "taskWindow",
                            selectId: e
                        });
                        h = !0
                    }
                }
            } else g = "<div>" + L.jump_to_addpoint_not_found + "</div>";
            i.timeline.view.renderTimeLine($C("#_taskDetailTimeLine"),
                g);
            $C("#_taskDetailArea").attr("data-task-id", b).show();
            h && (e = $("#taskWindow_messageId" + e), e.length > 0 && $C("#_taskDetailTimeLine").scrollTo(e, 0))
        }
    };
    a.getTaskListRows = function() {};
    a.getTaskPanel = function(b, d) {
        var e = "";
        if (b.st != "deleted") {
            var f = "_task",
                h = "";
            a.isMyTask(b) && (f += " taskMine");
            b.st == "done" && (f += " taskComplete");
            if (d.type == "tasklist") {
                h = '<div class="_moveTask button"><span class="icoFontActionMove"></span><span class="icoTextHide">' + L.jump_to_addpoint + "</span></div>";
                if (b.aid == AC.myid || b.bid ==
                    AC.myid) h += '<div class="_editTask button"><span class="icoFontActionEdit"></span><span class="icoTextHide">' + L.task_edit_hint + '</span></div><div class="_deleteTask button"><span class="icoFontActionDelete"></span><span class="icoTextHide">' + L.task_delete_hint + "</span></div>";
                e = '<li class="_taskList subContentSection subContentShadow ' + f + '" data-task-id="' + b.id + '" data-type="list"><div id="_taskContent" class="subContentAreaInner"><div class="clearfix"><div class="completeCheckboxArea">' + a.getTaskButton(b) +
                    "</div>" + a.getTaskName(b) + '</div><div class="taskMetaArea">' + a.getTaskAssign(b) + a.getTaskLimit(b) + '</div></div><div class="btnGroup">' + h + "</div></li>"
            } else if (d.type == "preview") e = '<div class="deleteTask ' + f + '">' + a.getTaskName(b) + '<div class="deleteTaskMeta">' + a.getTaskAssign(b) + a.getTaskLimit(b) + "</div></div>";
            else if (d.type == "taskwindow") {
                h = '<div class="_moveTask button"><span class="icoFontActionMove"></span><span class="icoTextHide">' + L.jump_to_addpoint + "</span></div>";
                if (b.aid == AC.myid || b.bid ==
                    AC.myid) h += '<div class="_editTask button"><span class="icoFontActionEdit"></span><span class="icoTextHide">' + L.task_edit_hint + '</span></div><div class="_deleteTask button"><span class="icoFontActionDelete"></span><span class="icoTextHide">' + L.task_delete_hint + "</span></div>";
                e = '<li class="_taskList subContentSection subContentShadow" data-task-id="' + b.id + '"><div class="subContentAreaInner"><div class="clearfix"><div class="completeCheckboxArea">' + a.getTaskButton(b) + "</div>" + a.getTaskName(b) + '</div><div class="taskMetaArea">' +
                    a.getTaskAssign(b) + a.getTaskLimit(b) + '</div></div><div class="btnGroup">' + h + "</div></li>"
            } else d.type == "timeline" && (b.lt && (h = "<span>" + a.getTaskLimit(b, {
                icon: !0
            }) + "</span>"), e = "", b.st == "done" && !RM.timeline.view.task_showmore_flag[d.mid] && (f += " _taskCompleteHide", e += " _taskBody taskBodyHide"), e = '<div class="chatInfoTaskArea ' + f + '"><div class="chatInfoTaskMetaArea ' + f + '"><div>' + a.getTaskAssign(b) + h + '</div></div><div class="chatInfoTaskContentArea' + e + '">')
        } else e = '<div class="_delete chatInfoTaskArea">' +
            L.task_deleted + "</div>";
        return e
    };
    a.isMyTask = function(a) {
        if (a.aid.indexOf && a.aid.indexOf(",") != -1)
            for (var b in a.aid = a.aid.split(","), a.aid) {
                if (a.aid[b] == AC.myid) return !0
            } else if (a.aid == AC.myid) return !0;
        return !1
    };
    a.getTaskName = function(a) {
        return '<pre class="_taskName taskName"><div class="_taskNameContent">' + CW.renderMessage(a.tn) + "</div></pre>"
    };
    var k = {
        withIcon: !1
    };
    a.getTaskChatName = function(a, b) {
        b == void 0 && (b = k);
        var d = "";
        b.withIcon && (d = RL.rooms[a.rid].getIcon());
        return d + CW.getRoomName(a.rid)
    };
    var i = {
            withName: !1
        },
        h = TM.timeline_assign_member_show_max;
    a.getTaskAssign = function(a, b) {
        b == void 0 && (b = i);
        var d = "",
            e = [];
        if ($.isArray(a.aid)) {
            RM.sortMember(a.aid);
            for (var f = 0, g = a.aid.length; f < g; f++) {
                var k = a.aid[f];
                f < h ? d += CW.getAvatarPanel(k, {
                    size: "tiny"
                }) : e.push(k)
            }
        } else d += CW.getAvatarPanel(a.aid, {
            size: "tiny"
        });
        b.withName && (d += CW.getName(a.aid));
        e.length > 0 && (d += '<a class="_showMoreMemberTask showMoreMember" data-aid-list="' + a.aid.join(",") + '">' + L.chatroom_member_rest_number.replace(/%%rest_number%%/,
            e.length) + "</a>");
        return d
    };
    a.getTaskAssignBy = function(a, b) {
        b == void 0 && (b = i);
        var d = "";
        if (typeof a.bid == "object")
            for (var e in a.bid) d += CW.getAvatarPanel(a.bid[e], {
                size: "tiny"
            });
        else d += CW.getAvatarPanel(a.bid, {
            size: "tiny",
            clicktip: !1,
            hovertip: !1
        });
        b.withName && (d += CW.getName(a.bid));
        return d
    };
    a.getTaskLimit = function(a, b) {
        var d = time(),
            e = !1,
            f = "",
            h = "",
            b = $.extend(!0, {
                withLabel: !0
            }, b),
            f = '<div class="taskDateLimit">';
        if (a.lt && (b.withLabel && (f += L.task_limittip), h = CW.getDate(a.lt, ST.data.dateformat), a.st ==
                "open" && (a.lt <= d || h == CW.getDate(d, ST.data.dateformat)))) e = !0;
        return e ? f + '<time class="limitedOver">' + h + "</time></div>" : f + "<time>" + h + "</time></div>"
    };
    a.getTaskButton = function(a) {
        if (a.aid == AC.myid || a.bid == AC.myid) return a.st == "done" ? '<div class="_taskCheck button" data-task-id="' + a.id + '" data-task-status="open"><span class="_checkTaskLabel completeText">' + L.button_incomplete + "</span></div>" : '<div class="_taskCheck button btnPrimary" data-task-id="' + a.id + '" data-task-status="done"><span class="_checkTaskLabel completeText">' +
            L.button_complete + "</span></div>";
        return ""
    }
}

function RoomListView(b) {
    var a = this;
    a.model = b;
    a.last_sumnum_key = "";
    a.is_folded = !1;
    a.room_show_limit = 80;
    var d = null,
        e = null,
        f = null;
    a.prepare = function() {
        var b = $.cookie("ui_chatlist_width");
        b !== void 0 && a.resizeWidth(b);
        var g = 0;
        $.cwResize.setHandle($("#_subContentHandle"), {
            type: "col",
            start: function() {
                g = $C("#_sideContent").width()
            },
            move: function(b) {
                a.resizeWidth(g + b)
            }
        });
        $C("#_roomTitle").on("click", "._roomTitleText", function() {
            a.scrollToRoom(RM.id, 600)
        });
        $C("#_wrapper").on("click", "._pin", function() {
            var b =
                this.className.match(/_pinRid([0-9]+)/);
            if (!b) return !1;
            var b = b[1],
                d = $(this);
            d.hasClass("ico19PinOff") ? (d.removeClass("ico19PinOff"), d.addClass("ico19PinOn"), stick_on = 1) : (d.addClass("ico19PinOff"), d.removeClass("ico19PinOn"), stick_on = 0);
            a.model.rooms[b].sticky = stick_on;
            CW.post("gateway.php", {
                cmd: "stick_room",
                room_id: b,
                stick: stick_on
            }, function() {
                typeof end_callback == "function" && end_callback()
            });
            a.model.build();
            RM.build();
            return !1
        }).on("mouseover", "._pin", function() {
            var a = $(this);
            a.hasClass("ico19PinOn") ||
                a.addClass("ico19PinHover")
        }).on("mouseout", "._pin", function() {
            $(this).removeClass("ico19PinHover")
        });
        $("#_addButton").cwDropDown({
            showPosition: "left",
            list: [{
                value: "addchat",
                label: L.chatroom_create_title
            }, {
                value: "addcontact",
                label: L.contact_add
            }],
            select: function(a) {
                switch (a) {
                    case "addchat":
                        RD.view.openAddRoomDialog();
                        break;
                    case "addcontact":
                        AC.view.reachedContactLimit() ? CW.view.showContactLimitErrorDialog() : (AC.view.tab_type = "addcontact", AC.view.openContactWindow())
                }
            }
        });
        $("#_sideContentTitleText").click(function() {
            RL.selectCategory("all");
            h.deselectAll();
            RL.build()
        });
        $("#_sideChatMoveMyChat").click(function() {
            RL.selectRoom(AC.getRoomId(AC.myid))
        }).cwMessageTip({
            message: L.menu_mychat_hint,
            delay: TM.messagetip_delay
        });
        var h = $("#_chatFilterList").cwTabbedBar({
            toggleMode: !0,
            update: function(a, b) {
                if (b) switch (a) {
                    case 0:
                        $.cookie("ui_roomfilter", "0", {
                            expires: 3650
                        });
                        RL.setReadOnly(!0);
                        RL.setToOnly(!1);
                        RL.setTaskOnly(!1);
                        CW.track.send("chatfilter_unread");
                        break;
                    case 1:
                        $.cookie("ui_roomfilter", "1", {
                            expires: 3650
                        });
                        RL.setReadOnly(!1);
                        RL.setToOnly(!0);
                        RL.setTaskOnly(!1);
                        CW.track.send("chatfilter_to");
                        break;
                    case 2:
                        $.cookie("ui_roomfilter", "2", {
                            expires: 3650
                        }), RL.setReadOnly(!1), RL.setToOnly(!1), RL.setTaskOnly(!0), $C("#_chatTabTask").click(), CW.track.send("chatfilter_task")
                } else $.removeCookie("ui_roomfilter"), RL.setReadOnly(!1), RL.setToOnly(!1), RL.setTaskOnly(!1);
                RL.build()
            }
        });
        h.$el.show();
        d = $("#_chatUnreadStatus");
        e = $("#_chatToUnreadStatus");
        f = $("#_chatTaskStatus");
        $C("#_wrapper").on("click", "._roomLink", function() {
            var a = $(this),
                b = 0,
                d = 0;
            if (this.tagName.toLowerCase() ==
                "a") {
                var e = a.prop("href").match(/#(?:!|%21)rid(\d+)(?:-(\d+))?$/);
                e && (b = e[1], e[2] && (d = e[2]))
            }
            b || ((e = a.attr("data-rid")) && (b = e), (a = a.attr("data-mid")) && (d = a));
            RL.selectRoom(b, d)
        });
        $C("#_roomListItems").on("mouseover", "._room", function() {
            $(this).children(".chatListUnread").addClass("chatListUnreadHover")
        }).on("mouseout", "._room", function() {
            $(this).children(".chatListUnread").removeClass("chatListUnreadHover")
        }).on("click", "#_roomMore", function() {
            a.room_show_limit += 80;
            a.model.build()
        });
        a.prepareCategory();
        $.cookie("ui_fold_roomlist") === "1" && a.toggleFold();
        $.cookie("ui_roomfilter") != void 0 && h.select($.cookie("ui_roomfilter"));
        CW.view.onPostLoad(function() {
            $.cookie("ui_category") != void 0 && a.model.selectCategory($.cookie("ui_category"))
        });
        (function() {
            var b = function() {
                    var a = parseInt(RL.getFocusedRoomId(), 10);
                    a && $.inArray(a.toString(), RL.filtered_room_list) == -1 && (a = 0);
                    return a
                },
                d = function(b) {
                    b == 0 ? a.model.focusRoom(a.model.filtered_room_list[0]) : (b = $.inArray(b.toString(), a.model.filtered_room_list), b > 0 ?
                        a.model.focusRoom(a.model.filtered_room_list[b - 1]) : a.model.focusRoom(a.model.filtered_room_list[0]))
                },
                e = function(b) {
                    if (b == 0) a.model.focusRoom(a.model.filtered_room_list[0]);
                    else {
                        var d = a.model.filtered_room_list.length,
                            b = $.inArray(b.toString(), a.model.filtered_room_list);
                        b + 1 == d ? a.model.focusRoom(a.model.filtered_room_list[b]) : a.model.focusRoom(a.model.filtered_room_list[b + 1])
                    }
                };
            CW.view.registerKeyboardShortcut(75, !1, !1, !1, !1, function() {
                d(b())
            }).registerKeyboardShortcut(38, !1, !1, !1, !1, function() {
                d(b())
            }).registerKeyboardShortcut(40, !1, !1, !1, !1, function() {
                e(b())
            }).registerKeyboardShortcut(74, !1, !1, !1, !1, function() {
                e(b())
            }).registerKeyboardShortcut(79, !1, !1, !1, !1, function() {
                a.model.selectRoom(b())
            }).registerKeyboardShortcut(13, !1, !1, !1, !1, function() {
                a.model.selectRoom(b())
            })
        })();
        $("#_roomRequestArea").click(function() {
            RM.view.showRequestDialog()
        })
    };
    a.prepareCategory = function() {
        var b = [],
            d = {},
            e = [],
            f = $("#_newcatRoomlist"),
            g = $("#_chatCategoryList").cwToolTip({
                fixHeight: !0
            });
        $("#_chatCategory").click(function() {
            g.open($(this))
        }).cwMessageTip({
            message: L.chat_category_select,
            delay: TM.messagetip_delay
        });
        $("#_chatCategoryList").on("click", "li._chatCategoryItem", function() {
            var b = $(this).attr("data-cat-id");
            a.model.selectCategory(b);
            g.close();
            CW.track.send("select_category")
        }).on("mouseover", ".chatCategoryList li", function() {
            $(this).find("._categoryAction").show()
        }).on("mouseout", ".chatCategoryList li", function() {
            $(this).find("._categoryAction").hide()
        });
        $("#_categoryDisplayCancel").click(function() {
            a.model.selectCategory("all")
        });
        var m = $("#_newcatRoomfilter").cwSearchBox({
                placeholder: L.chat_search,
                update: function() {
                    var a = RL.getSortedRoomList("name"),
                        g = 0,
                        o = "";
                    b = this.getVal().toLowerCase();
                    e = [];
                    for (var m = 0, l = a.length; m < l; m++) {
                        var n = RL.rooms[a[m]],
                            t = n.getName();
                        if (!(b && t.toLowerCase().indexOf(b) === -1)) {
                            e.push(n.id);
                            if (e.length >= 200) break;
                            t = $.cwCheckBox.create(!!d[n.id], "", n.id, {
                                id: "_newcatCheck" + n.id,
                                "class": "_newcatCheck"
                            });
                            o += '<tr class="_newcatRoom _cwSelectableRow"><td class="check">' + t + '</td><td class="_newcatRoom_name"><span class="ui_room_icon">' + n.getIcon() + "</span></td><td>" + CW.getRoomName(n.id) +
                                "</td></tr>"
                        }
                    }
                    o[g++] = "";
                    f.html(o)
                }
            }),
            l = $("#_chatCategoryAddContent").cwDialog({
                width: 650,
                open: function(b) {
                    if (this.data.cat_id = b) {
                        for (var e = a.model.category_dat[b], b = e.name, e = e.list, f = 0, h = e.length; f < h; f++) d[e[f]] = !0;
                        this.setOption({
                            title: L.chat_category_edit + ": " + escape_html(b),
                            buttonLabels: [L.button_save_long, L.button_cancel]
                        })
                    } else this.setOption({
                        title: L.chat_category_create,
                        buttonLabels: [L.button_create_long, L.button_cancel]
                    });
                    $("#_categoryName").val("");
                    $("#_newcatSelectNum").empty();
                    m.setVal("")
                },
                close: function() {
                    b = [];
                    d = {};
                    e = []
                },
                buttonLabels: [L.button_create_long, L.button_cancel],
                buttonSubmit: 0,
                buttonCancel: 1,
                buttonClick: function(b) {
                    if (b === 0) {
                        var b = [],
                            e = $("#_categoryName").val();
                        e || b.push(L.chat_category_error_no_name);
                        var f = [],
                            h;
                        for (h in d) d[h] && f.push(h);
                        f.length || b.push(L.chat_category_error_no_chats);
                        if (b.length) CW.alert(b.join("\n"));
                        else {
                            h = {
                                name: e,
                                r: f
                            };
                            this.data.cat_id ? (h.cmd = "edit_category", h.cat_id = this.data.cat_id) : h.cmd = "add_category";
                            var j = this;
                            CW.postSync("gateway.php", h, function(b) {
                                for (var d in b.cat_dat) a.model.category_dat[d] =
                                    b.cat_dat[d];
                                a.model.buildCategory();
                                a.model.selectCategory(d);
                                j.close()
                            })
                        }
                    }
                }
            });
        $("#_chatCategoryAdd").click(function() {
            l.open();
            g.close()
        });
        var t = function(a, b) {
            var e;
            e = $.isArray(a) ? a : [a];
            for (var f = 0, h = e.length; f < h; f++) {
                var j = e[f],
                    g = $("#_newcatCheck" + j);
                g.length && (g = g.cwCheckBox(), b ? g.check() : g.unCheck());
                d[j] = !!b
            }
            e = 0;
            for (f in d) d[f] && e++;
            e ? $("#_newcatSelectNum").html(e + L.multiselect_label) : $("#_newcatSelectNum").empty()
        };
        $("#_newcatRoomlist").on("cwCheckBox_update", function(a, b, d) {
            t(d, b);
            return !1
        });
        $("#_newcatCheckAll").cwCheckBox({
            update: function() {
                t(e, this.isChecked())
            }
        });
        $("#_chatCategoryList").on("click", "._categoryEdit", function() {
            var b = $(this).closest("li._chatCategoryItem").attr("data-cat-id"),
                d = a.model.category_dat[b].name;
            l.open(b);
            $("#_categoryName").val(d);
            t(a.model.category_dat[b].list, !0)
        }).on("click", "._categoryDelete", function() {
            var b = $(this).parents("li._chatCategoryItem"),
                d = b.data("cat-id"),
                b = b.find("._categoryName").text();
            CW.view.confirmDelete(L.chat_category_confirm_delete.replace(/%%category_name%%/,
                b), function() {
                CW.postSync("gateway.php", {
                    cmd: "delete_category",
                    cat_id: d
                }, function() {
                    a.model.category_dat[d] != void 0 && delete a.model.category_dat[d];
                    a.model.buildCategory()
                })
            })
        })
    };
    a.isFolded = function() {
        return a.is_folded
    };
    var g = !1;
    a.toggleFold = function() {
        if (!g) {
            var b = $("#_mainContent"),
                d = b.css("left"),
                e = $("#_mainContentExpandLeft");
            b.addClass("foldAnimLeft");
            g = !0;
            if (d == "0px") {
                a.is_folded = !1;
                b.css("left", $("#_sideContent").outerWidth() + "px");
                var f = e.find(".icoFontTriangleRight").addClass("rotate180");
                setTimeout(function() {
                    $.removeCookie("ui_fold_roomlist");
                    f.removeClass("rotate180 icoFontTriangleRight").addClass("icoFontTriangleLeft");
                    e.addClass("_showDescription");
                    b.removeClass("foldAnimLeft");
                    CW.view.resizeLayout()
                }, 300)
            } else a.is_folded = !0, b.css("left", "0px"), f = e.find(".icoFontTriangleLeft").addClass("rotate180"), setTimeout(function() {
                $.cookie("ui_fold_roomlist", "1", {
                    expires: 3650
                });
                f.removeClass("rotate180 icoFontTriangleLeft").addClass("icoFontTriangleRight");
                e.removeClass("_showDescription");
                b.removeClass("foldAnimLeft");
                CW.view.resizeLayout()
            }, 300);
            setTimeout(function() {
                g = !1
            }, 200)
        }
    };
    a.resizeWidth = function(b) {
        if (b < TM.chatlist_min_width) b = TM.chatlist_min_width;
        if (b > TM.chatlist_max_width) b = TM.chatlist_max_width;
        var d = $C("#_sideContent").width();
        if ($C("#_timeLine").width() < TM.timeline_min_width && d < b) return !1;
        $C("#_mainContent").css("left", b + "px");
        $C("#_sideContent").width(b);
        $.cookie("ui_chatlist_width", b, {
            expires: 3650
        });
        CW.view.resizeLayout();
        return a
    };
    a.deleteRoom = function() {
        RM || CS.initChatText()
    };
    a.scrollToRoom = function(a, b) {
        var d = $C("#_roomListArea"),
            e = d.find("[data-rid=" + a + "]");
        if (e.length > 0) {
            var f = parseInt(d.offset().top, 10),
                g = f + d.height(),
                l = parseInt(e.offset().top, 10),
                t = l + e.height();
            (l < f || t > g) && d.scrollTo(e, b)
        }
    };
    a.focusRoom = function(b) {
        a.clearFocusRoom();
        RM.id != b && ($C("#_roomListItems").find("[data-rid=" + b + "]").addClass("menuListTitleFocus"), a.scrollToRoom(b, 100))
    };
    a.clearFocusRoom = function() {
        $C("#_roomListItems").find(".menuListTitleFocus").removeClass("menuListTitleFocus")
    };
    a.selectRoom =
        function(b) {
            CW.view.closeFirstPage();
            $.cwFloatWindow.close();
            if (!(RM && RM.id == b)) {
                var d = $C("#_roomListItems");
                d.find("._roomSelected").removeClass("_roomSelected menuListTitleSelected");
                d.find("[data-rid=" + b + "]").addClass("_roomSelected menuListTitleSelected");
                $C("#_subContentArea").scrollTop(0);
                a.scrollToRoom(b, 600);
                a.updateTitle(b);
                RS.resetPromotionStatus()
            }
        };
    a.selectCategory = function() {
        a.model.build();
        var b = $("#_categoryDisplay");
        if (a.model.filter_category != "all") {
            var d = $C("#_chatCategoryList").find("[data-cat-id=" +
                a.model.filter_category + "]").find("span._categoryName").text();
            $("#_categoryDisplayTitle").text(d);
            b.isVisible() || ($.cookie("ui_category", a.model.filter_category, {
                expires: 3650
            }), b.show())
        } else b.isVisible() && ($.removeCookie("ui_category"), b.hide())
    };
    a.setReadOnly = function() {};
    a.setToOnly = function() {};
    a.setTaskOnly = function() {};
    a.build = function(b) {
        a.model.prepareRM();
        var d = "",
            e = b.length,
            f = e;
        if (e) {
            $C("#_chatListEmptyArea").hide();
            if (e > a.room_show_limit) f = a.room_show_limit;
            for (var g = 0; g < f; g++) b[g] !=
                void 0 && (d += a.getRoomItemPanel(b[g]));
            e > f && (d += '<div class="roomLimitOver"><div>' + L.chat_rest_roomtip + (e - a.room_show_limit) + '</div><div id="_roomMore" class="button">' + L.chat_show_more + "</div></div>");
            $C("#_roomListItems").html(d);
            b = RL.getFocusedRoomId();
            b > 0 && a.model.focusRoom(b)
        } else $C("#_roomListItems").quickEmpty(), $C("#_chatListEmptyArea ._chatListEmpty").hide(), a.model.filter_readonly ? $C("#_chatListUnreadEmpty").show() : a.model.filter_toonly ? $C("#_chatListToEmpty").show() : a.model.filter_taskonly &&
            $C("#_chatListTaskEmpty").show(), $C("#_chatListEmptyArea").show()
    };
    var l = {
        showOrg: !1,
        showPin: !0,
        showSelected: !0,
        showRequest: !0,
        noTrim: !1
    };
    a.getRoomItemPanel = function(b, d) {
        var e = a.model.rooms[b],
            f;
        if (d == void 0) f = l;
        else {
            f = {};
            for (var g in l) f[g] = l[g];
            for (g in d) f[g] = d[g]
        }
        var m = e.getUnreadNum(),
            n = 0;
        m > 0 && (n = e.getMentionNum());
        g = "_room";
        var t = "",
            u = "",
            s = "";
        f.showSelected && RM && RM.id == b && (g += " _roomSelected menuListTitleSelected");
        m > 0 && (g += " roomUnread", t = '<li role="listitem" class="_unreadBadge unread"><span class="icoFontActionUnread"></span>' +
            m + "</li>", n && (u = '<li class="_mentionLabel _unreadBadge mention"><span class="icoFontSideTo"></span>' + n + "</li>", g += " roomMentionUnread"));
        e.mytask_num > 0 && (s = '<li><span class="icoFontActionTask"></span>' + e.mytask_num + "</li>");
        m = "";
        f.showPin && (m = e.sticky ? '<div class="chatListPin"><span class="_pin _pinRid' + e.id + ' ico19PinOn"></span></div>' : '<div class="chatListPin chatListPinOff"><span class="_pin _pinRid' + e.id + ' ico19PinOff"></span></div>');
        n = "";
        f.showRequest && e["public"] && e.member_request.length > 0 &&
            (n = '<div class="alert alertWarning alertSmall"><span class="icoFontInfo marginRight"></span>' + L.chatroom_member_requests_notice.replace(/%%request_num%%/, e.member_request.length) + "</div>");
        var v = "";
        if (f.showOrg && e.type == "contact") {
            var x = e.getAccountId();
            (x = CW.getOrgTitle(x)) && (v = '<p class="chatListOrgName">' + x + "</p>")
        }
        var y = x = "";
        t || u || s ? (f.noTrim || (x = " autotrim"), y = '<ul class="incomplete">' + t + u + s + "</ul>") : f.noTrim || (x = " chatListTitleNoLabel");
        f = "";
        CW.is_business && ST.data.show_external && (e.isInternal() ||
            (f = '<div class="_externalMark roomOthers ico19Others"></div>'));
        return '<li role="listitem" aria-label="' + escape_html(e.getName()) + '" class="_roomLink ' + g + '" data-rid="' + e.id + '"><div class="roomIcon">' + e.getIcon("html", "medium") + '</div><div class="chatListMeta"><p class="chatListTitleArea' + x + '">' + CW.getRoomName(e.id) + "</p>" + v + y + "</div>" + f + m + n + "</li>"
    };
    a.updateRoomData = function() {};
    a.updateTitle = function(b) {
        if (MOBILE == "") {
            var d = "";
            if (a.model.unread_room_sum > 0) d = a.model.unread_room_sum, a.model.mention_room_sum >
                0 && (d += "(" + a.model.mention_room_sum + ")"), d = "[" + d + "]";
            d += SERVICE_NAME;
            b && (d += " - " + RL.rooms[b].getName());
            document.title = d;
            ST.data.faviconstat ? (b = "", b = a.model.unread_room_sum == 0 ? "./image/favicon/favicon00.ico" : a.model.unread_room_sum < 10 ? "./image/favicon/favicon0" + a.model.unread_room_sum.toString() + ".ico" : "./image/favicon/favicon09+.ico", CW.view.changeFavicon(b)) : CW.view.changeFavicon("./image/favicon/favicon00.ico")
        }
    };
    a.updateSumNumbers = function() {
        var b = a.model.mytask_total + ":" + a.model.unread_room_sum +
            ":" + a.model.mention_room_sum + ":" + a.model.mytask_room_sum;
        if (a.last_sumnum_key != b) a.last_sumnum_key = b, a.model.mytask_total > 0 ? $C("#_myAllTaskNum").text(a.model.mytask_total).show() : $C("#_myAllTaskNum").hide(), a.model.unread_room_sum > 0 ? (b = a.model.unread_room_sum, b > 1E3 && (b = "999+"), d.html(b).show(), a.model.mention_room_sum > 0 ? (b = a.model.mention_room_sum, b > 1E3 && (b = "999+"), e.text(b).show()) : e.fadeOut()) : (d.fadeOut(), e.fadeOut()), a.model.mytask_room_sum > 0 ? f.text(a.model.mytask_room_sum).show() : f.fadeOut(),
            RM && a.updateTitle(RM.id)
    };
    a.buildCategory = function() {
        var b = "",
            d = a.model.getSortedCategoryList(),
            e;
        for (e in d) {
            var f = d[e];
            b += (f == a.model.filter_category ? '<li class="_chatCategoryItem listSelected" data-cat-id="' + f + '">' : '<li class="_chatCategoryItem" data-cat-id="' + f + '">') + '<span class="_categoryName categoryName autotrim">' + escape_html(a.model.category_dat[f].name) + '</span><div class="_categoryAction chatCategoryAction linkIconStatus"><span class="icoFontActionEdit _categoryEdit"></span><span class="icoTextHide">' +
                L.button_edit + '</span><span class="icoFontActionDelete _categoryDelete"></span><span class="icoTextHide">' + L.button_delete + "</span></li>"
        }
        $("#_chatCagegoryUserList").html(b)
    };
    a.updateUnreadNum = function(b) {
        a.buildRoomItem(b)
    };
    a.buildRoomItem = function(b) {
        $C("#_roomListItems").find("[data-rid=" + b + "]").replaceWith(a.getRoomItemPanel(b))
    };
    a.showJoinPublicChatDialog = function(a) {
        var b = escape_html(a.public_description).replace(/(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}\[\]]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}\[\]]+)/gi,
            '<a href="$1" target="_blank">$1</a>');
        $("#_joinpublicchatDescription").html(b);
        var d = function() {
            $("#_joinpublicchatDialog").cwDialog({
                title: L.joinpublicchat_title,
                width: 655,
                height: "auto",
                autoOpen: !0,
                hide: "fade",
                buttonLabels: [L.joinpublicchat_join, L.button_cancel],
                buttonSubmit: 0,
                buttonCancel: 1,
                buttonClick: function(b) {
                    b === 0 && CW.post("gateway.php", {
                        cmd: "join_public_room",
                        rid: a.id
                    }, function(b) {
                        if (b.error) {
                            switch (b.error) {
                                case "joined":
                                    RL.selectRoom(a.id);
                                    return;
                                case "limited":
                                    CW.view.showLimitErrorDialog(b.title,
                                        b.message);
                                    return
                            }
                            b.message != void 0 && CW.alert(b.message)
                        } else b.do_request != void 0 ? CW.alert(L.joinpublicchat_request_sent) : RL.lazy_select = a.id
                    });
                    this.close()
                },
                open: function() {
                    $("#_joinpublicchatIcon").html('<img class="ui_avatar ui_chatworkid_avatar avatar" src="' + a.icon + '" />');
                    $("#_joinpublicchatName").text(a.name);
                    a.join_need_accept == "1" ? $("#_joinpublicchatNeedAccept").show() : $("#_joinpublicchatNeedAccept").hide()
                }
            })
        };
        a.header ? ($("#_joinpublicchatHeader").html('<img id="_joinpublicchatHeaderImage" src="' +
            S3_PATH + "/header/" + a.header + '" />'), $("#_joinpublicchatHeaderImage").bind("load", function() {
            d()
        })) : d()
    };
    a.updateMasterData = function() {}
}

function RoomView(b) {
        this.model = b;
        this.dialog_resized = this.disabled_send = !1
    }
    (function() {
        var b = 0,
            a;
        RoomView.prototype = {
            getIcon: function(a, b) {
                var f = this.model.getAccountId();
                a == void 0 && (a = "html");
                var g = this.model.icon_preset ? S3_PATH + "/icon/ico_" + this.model.icon + ".png" : S3_PATH + "/icon/" + this.model.icon;
                switch (a) {
                    case "html":
                        return f > 0 ? CW.getAvatarPanel(f, {
                            clicktip: !1,
                            hovertip: !1,
                            size: b
                        }) : '<img class="avatarGroup ' + CW.view.getAvatarClass(b) + '" src="' + g + '"/>';
                    case "src":
                        return f > 0 ? CW.getAvatarPanel(f, {
                            src: !0
                        }) : g
                }
            },
            getViewStat: function() {
                var a = {},
                    b = $C("#_chatSendArea").position().top;
                a.last_read_id = 0;
                a.noview_num = 0;
                for (var f = this.model.timeline.chat_list.length - 1; f >= 0; f--) {
                    var g = $("#_messageId" + this.model.timeline.chat_list[f].id);
                    if (g.length > 0 && b > g.position().top) {
                        a.last_read_id = this.model.timeline.chat_list[f].id;
                        break
                    }
                    a.noview_num++
                }
                return a
            },
            addSendingChat: function(a) {
                this.model.timeline.build({
                    smoothScroll: !0,
                    sendingId: a
                });
                return this
            },
            build: function(a) {
                var e = !1,
                    a = $.extend({
                        messageHashUpdate: !0,
                        readLock: !1
                    }, a),
                    f = this.model;
                if (!RM || !b) RM = f, b = RM.id, CS.initChatText(), this.bindBeforeUnload();
                RM.id != f.id && (CW.read(0), RM.reading && $C("#_roomListItems").find("[data-rid=" + RM.id + "]").find("._unreadBadge").css("opacity", "0.5"), e = $C("#_chatText").val(), e == "" ? CS.deleteChatDraft(RM.id) : (CS.setChatDraft(RM.id, e, CS.chatedit_id), CS.view.setChatText("")), CS.clearChatEdit(), (e = $C("#_taskNameInput").val()) ? CS.setTaskDraft(RM.id, e, RS.view.getTaskAssignList(), $C("#_limitButton").cwDatePicker().getVal()) : CS.deleteTaskDraft(RM.id), RM = f, CS.initChatText(), $C("#_subRoomDescriptionWrapper").scrollTop(0), e = !0);
                var g = "!rid" + RM.id;
                a.messageHashUpdate && a.jumpTo && (g += "-" + a.jumpTo);
                $(window).unbind("hashchange", $.hashchangeHandler);
                document.location.hash = g;
                setTimeout(function() {
                    $(window).bind("hashchange", $.hashchangeHandler)
                });
                var g = "",
                    g = RL.rooms[RM.id].sticky ? '<span class="_pin _pinRid' + RM.id + ' ico19PinOn"></span>' : '<span class="_pin _pinRid' + RM.id + ' ico19PinOff"></span>',
                    l = CW.getRoomName(f.id);
                $C("#_roomTitle").html('<span class="_roomTitleText autotrim">' + l + "</span>" + g);
                $C("#_subRoomName").html(l);
                $C("#_subRoomIcon").prop("src",
                    this.model.getIcon("src"));
                this.model.type === "group" ? $C("#_subRoomIcon").addClass("avatarGroup") : $C("#_subRoomIcon").removeClass("avatarGroup");
                f.description == "" ? f.buildtime == 0 ? $C("#_subRoomDescription").html('<div class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_gray.gif" alt="Loading" />' + L.loading + "</div>") : $C("#_subRoomDescription").html('<span class="emptyContent">' + L.chatroom_desc_none + "</span>") : $C("#_subRoomDescription").html("<pre>" + CW.renderMessage(f.description) +
                    "</pre>");
                RS.view.resizeRoomInfo();
                f.member_dat[AC.myid] ? this.buildMemberList() : this.model.refreshMember();
                g = null;
                if (a.jumpTo) g = a.jumpTo;
                else if (a.scrollTo) g = a.scrollTo;
                !g && e && (e = f.getUnreadNum(), g = f.timeline.chat_list[f.timeline.chat_list.length - e], g = e && g ? g.id : "End");
                this.disabled_send || (this.restoreChatDrat(CS.getChatDraft(RM.id)), this.restoreTaskDraft(CS.getTaskDraft(RM.id)));
                a.scrollTo = g;
                f.timeline.build(a);
                f.rswitch = !1;
                CW.is_business && ST.data.show_external && (f.isInternal() ? ($C("#_chatTextArea").removeClass("chatSendTextareaOther").data("external", !1), $C("#_externalInfo").hide()) : ($C("#_chatTextArea").addClass("chatSendTextareaOther").data("external", !0), $C("#_externalInfo").show()));
                CS.view.resizeChatArea(!0);
                f.filelist.build();
                f.tasklist.build();
                a.readLock === !1 && wfocus && f.getUnreadNum() > 0 && CW.read();
                f.buildtime = microtime(!0)
            },
            buildHome: function() {},
            buildMemberList: function() {
                $C("#_subRoomDescriptionArea").show();
                $C("#_roomRequestArea").hide();
                $C("#_subEditRoomInfo").hide();
                $C("#_subRoomProfileLinkArea").hide();
                $C("#_subRoomJoinLinkArea").hide();
                $C("#_subEditMember").hide();
                $C("#_groupCall").hide();
                $C("#_directCall").hide();
                $C("#_showOnlyAdmin").hide();
                $C("#_subRoomMemberArea").hide();
                $C("#_chatNavMember").hide();
                $C("#_chatSendTabTask").hide();
                $C("#_file").hide();
                RS.view.hideSetting();
                switch (this.model.type) {
                    case "group":
                        RS.view.showSetting();
                        $C("#_chatNavMember").show();
                        this.model.allow_see_member || $C("#_showOnlyAdmin").show();
                        switch (this.model.member_dat[AC.myid]) {
                            case "admin":
                                CS.view.enableChatArea();
                                TK.view.enableTaskArea();
                                FL.view.enableFileArea();
                                this.disabled_send = !1;
                                $C("#_subEditRoomInfo").show();
                                $C("#_subRoomMemberArea").show();
                                $C("#_subEditMember").show();
                                $C("#_groupCall").show();
                                if (this.model["public"]) {
                                    var a = this.model.member_request.length;
                                    a > 0 && $C("#_roomRequestArea").html('<span class="icoFontInfo marginRight"></span>' + L.chatroom_member_requests_notice.replace("%%request_num%%", a)).show()
                                }
                                break;
                            case "member":
                                this.model.allow_see_member && ($C("#_subRoomMemberArea").show(), $C("#_groupCall").show());
                                this.model.allow_send_message ? (CS.view.enableChatArea(),
                                    this.disabled_send = !1, this.model.allow_upload_file ? FL.view.enableFileArea() : FL.view.disableFileArea(), this.model.allow_add_task ? TK.view.enableTaskArea() : TK.view.disableTaskArea()) : (CS.view.disableChatArea(), this.disabled_send = !0);
                                break;
                            case "readonly":
                                this.model.allow_see_member && ($C("#_subRoomMemberArea").show(), $C("#_groupCall").show()), TK.view.disableTaskArea(), CS.view.disableChatArea(), FL.view.disableFileArea(), this.disabled_send = !0
                        }
                        if (a = this.model.getJoinLink()) $C("#_subRoomJoinLink").attr("href",
                            a), $C("#_subRoomJoinLinkArea").show();
                        break;
                    case "contact":
                        RS.view.showSetting();
                        $C("#_subEditRoomInfo").show();
                        $C("#_subRoomProfileLinkArea").show();
                        CS.view.enableChatArea();
                        TK.view.enableTaskArea();
                        FL.view.enableFileArea();
                        this.disabled_send = !1;
                        var a = 0,
                            b;
                        for (b in this.model.member_dat) AC.myid != b && (a = b);
                        a && $C("#_subRoomProfileLink").attr("data-aid", a);
                        $C("#_directCall").show().attr("data-aid", a);
                        break;
                    case "my":
                        $C("#_subEditRoomInfo").show(), CS.view.enableChatArea(), TK.view.enableTaskArea(), FL.view.enableFileArea(),
                            this.disabled_send = !1
                }
                RS.view.buildMember(this.model.id)
            },
            prepareRequestDialog: function() {
                var b = $("#_roomRequestList");
                a = $("#_roomRequestDialog").cwDialog({
                    title: L.room_request_title,
                    width: 600,
                    buttonLabels: [L.button_cancel],
                    buttonCancel: 0,
                    open: function(a) {
                        var e = "";
                        b.empty();
                        this.data.room_id = a;
                        a = RL.rooms[a].member_request;
                        if (a.length > 0) {
                            for (var l = 0, k = a.length; l < k; l++) {
                                var i = a[l],
                                    h = CW.getAvatarPanel(i.aid, {
                                        hovertip: !1,
                                        clicktip: !1,
                                        size: "medium"
                                    }),
                                    j = escape_html(i.nm);
                                e += '<tr class="_roomRequestRow"><td>' +
                                    h + ' </td><td class="name"><span class="autotrim">' + j + '</span></td><td><div class="_roomRequestAccept button btnPrimary">' + L.button_accept_long + "</div> ( " + L.role + ":" + $.cwSelectBox.create([{
                                        value: "admin",
                                        label: L.admin
                                    }, {
                                        value: "member",
                                        label: L.member
                                    }, {
                                        value: "readonly",
                                        label: L.readonly
                                    }], "", "member", {
                                        "class": "_roomRoleSelect"
                                    }) + ' )</td><td><div class="_roomRequestReject button buttonGray">' + L.button_reject_long + '</div></td><td style="display:none;"><input type="hidden" value="' + i.aid + '" class="_roomRequestAid" /></td></tr>'
                            }
                            b.html(e)
                        }
                    },
                    postOpen: function() {
                        if (!this.dialog_resized) {
                            this.dialog_resized = !0;
                            var e = b.find("._roomRequestRow:last .selectboxContent"),
                                g = e.height();
                            g += parseInt(e.css("padding-top"), 10);
                            g += parseInt(e.css("padding-bottom"), 10);
                            g += parseInt(e.css("border-top-width"), 10);
                            g += parseInt(e.css("border-bottom-width"), 10);
                            var l = a.getMaxHeight(),
                                e = b.parents("#_roomRequestDialog"),
                                k = e.parent(".dialogContent"),
                                i = k.height();
                            i += parseInt(k.css("border-top-width"), 10);
                            i += parseInt(k.css("border-bottom-width"), 10);
                            l -= i;
                            l > g && (l =
                                g);
                            var h = e.children(".roomRequest"),
                                j = h.height(),
                                j = parseInt(h.css("max-height"), 10) - j;
                            l > j && (l = j);
                            console.log(l);
                            k.height(i + l);
                            i = parseInt(k.css("margin-top"), 10);
                            k.css("margin-top", i - l / 2 + "px");
                            e.height(e.height() + l);
                            h.height(h.height() + l);
                            h.children("._overflow").css("padding-bottom", g + "px")
                        }
                    }
                });
                var e = function(e, g) {
                    var l = b.find("tr").eq(e),
                        k = l.find("._roomRoleSelect");
                    l.find("button").button("disable");
                    k.prop("disabled", !0);
                    var i = l.find("._roomRequestAid").val(),
                        h = k.cwSelectBox().getVal(),
                        i = {
                            rid: a.data.room_id,
                            aid: i,
                            role: h
                        };
                    i.cmd = g ? "accept_join_room" : "reject_join_room";
                    CW.post("gateway.php", i, function(e) {
                        e.error ? (e.message != void 0 && CW.alert(e.message), l.find("button").button("enable"), k.prop("disabled", !1)) : (l.fadeOut(function() {
                            b.find("tr:visible").length || a.close()
                        }), CW.watch())
                    })
                };
                b.on("click", "._roomRequestAccept", function() {
                    var a = b.find("._roomRequestAccept").index(this);
                    e(a, !0)
                }).on("click", "._roomRequestReject", function() {
                    var a = b.find("._roomRequestReject").index(this);
                    e(a, !1)
                })
            },
            showRequestDialog: function() {
                a ||
                    this.prepareRequestDialog();
                a.open(this.model.id)
            },
            bindBeforeUnload: function() {
                $(window).bind("beforeunload", function() {
                    CW.view.setDrafts()
                })
            },
            restoreChatDrat: function(a) {
                a.text && (CS.view.setChatText(a.text), a.edit_id && CS.setChatEdit(a.edit_id, self.model))
            },
            restoreTaskDraft: function(a) {
                a.task_name && RS.view.setTask(a.task_name, a.assign_list, a.limit_date)
            }
        }
    })();

function TimeLineView(b) {
        this.model = b;
        this.task_showmore_flag = {};
        this.start_index = 0;
        this.has_new = !1
    }
    (function() {
        var b = 0,
            a = 0,
            d = 0;
        TimeLineView.prototype = {
            read: function(a) {
                var b = this.model.room.getUnreadNum();
                if (b == 0) $C("#_timeLine").find("._unreadMark").fadeOut("slow", function() {
                    $(this).remove()
                });
                else
                    for (var d = this.model.chat_list.length - 1 - b, l = d; l > d - (a - b); l--) this.model.chat_list[l] != void 0 && $("#_messageId" + this.model.chat_list[l].id + " ._unreadMark").fadeOut("slow", function() {
                        $(this).remove()
                    })
            },
            build: function(d) {
                var f = $C("#_timeLine"),
                    g = $.extend({
                        smoothScroll: !1,
                        scrollTo: null,
                        everScroll: !1,
                        highlight: !1,
                        jumpToCallback: function() {},
                        sendingId: null
                    }, d),
                    d = g.scrollTo,
                    l = $("#_messageIdEnd"),
                    k = 0;
                if (l.length > 0) k = l.offset().top;
                var l = "",
                    i = 0;
                i++;
                this.model.chat_list.length < this.model.room.chat_num ? (i++, l += '<div class="timeLineLoading"><img src="./imagenew/all/common/loader/img_loader_white.gif" />' + L.chat_loading + "</div>", this.model.has_old = this.model.room.buildtime ? !0 : !1) : this.model.has_old = !1;
                var i = this.model,
                    h = [],
                    j = null,
                    o = 0,
                    m = i.chat_list.length;
                if (a != i.room.id) this.start_index = 0;
                if (d && d != "End")
                    for (var n =
                            0; n < m; n++)
                        if (o = i.chat_list[n], d == o.id) {
                            j = n;
                            this.start_index = j - 100;
                            break
                        }
                if (a == i.room.id)
                    if (g.everScroll) {
                        var t = $C("#_timeLine").offset().top;
                        if (!j)
                            for (n = 0; n < m; n++) {
                                var o = i.chat_list[n],
                                    u = $("#_messageId" + o.id);
                                if (u.length > 0 && t < u.offset().top) {
                                    if (!i.has_new_message && !d) {
                                        if (!i.has_old && n == 0) return !1;
                                        d = o.id
                                    }
                                    j = n;
                                    break
                                }
                            }
                        o = j - 100
                    } else o = this.start_index;
                else o = j !== null ? j - 100 : m - 200;
                o < 0 && (o = 0);
                j = 0;
                for (n = o; n < m; n++)
                    if (i.chat_list[n] && (h.push(i.chat_list[n]), j++), j >= 200) break;
                this.start_index = o;
                h.length > 100 &&
                    h[h.length - 1].id != i.chat_list[m - 1].id ? (d == "End" && (d = !1), this.has_new = !0) : this.has_new = !1;
                m = i.sending_chat_list;
                if (m.length)
                    for (n = 0; n < m.length; n++)(o = m[n]) && h.push(o);
                l += this.getTimeLine(h, {
                    unreadFrom: this.model.chat_list.length - this.model.room.getUnreadNum(),
                    readLock: i.room.read_lock,
                    editId: CS.chatedit_id,
                    selectId: b
                });
                l += '<div id="_messageIdEnd" class="actionBarSpacer"></div>';
                var s = 0;
                g.smoothScroll && (s = g.sendingId ? 70 : 200);
                h = !1;
                n = l;
                if (CW.last_timeline_buildkey != n) {
                    this.renderTimeLine(f, l);
                    if (a != i.room.id) a =
                        i.room.id, b = 0;
                    i.has_new_message = !1;
                    g.sendingId && $C("#_timeLine").find("._sendingMessage img:last").hide().fadeIn(3E3);
                    CW.last_timeline_buildkey = n;
                    d || k < $C("#_chatSendArea").offset().top + 50 && (d = "End");
                    if ((this.model.room.rswitch || d) && d) {
                        var v = this,
                            x = $("#_messageId" + d);
                        x.length && (g.highlight && (b = d), h = !0, function() {
                            var a = !1,
                                b = function() {
                                    a = !0
                                },
                                d = $C("#_timeLine");
                            d.one("scroll", b).scrollTo(x, s, function() {
                                g.highlight && v.highlight(x);
                                g.jumpToCallback()
                            });
                            setTimeout(function() {
                                    a || (d.unbind("scroll", b), d.trigger("scroll"))
                                },
                                0)
                        }())
                    }
                    AC.hasUnknown() && AC.getUnknown(function(a) {
                        for (var b in a) $("._nameAid" + b).text(a[b].name)
                    })
                } else d && (v = this, x = $("#_messageId" + d), x.length && (h = !0, $C("#_timeLine").scrollTo(x, s, function() {
                    g.highlight && v.highlight(x);
                    g.jumpToCallback()
                })));
                i.has_old && !h && setTimeout(function() {
                    $C("#_timeLine").trigger("scroll")
                }, 100)
            },
            getTimeLine: function(a, f) {
                for (var g = $.extend({
                        unreadFrom: !1,
                        readLock: !1,
                        editId: !1,
                        selectId: !1,
                        idPrefix: ""
                    }, f), l = "", k = "", i = 0, h = a.length; i < h; i++) {
                    var j = {
                            idPrefix: g.idPrefix
                        },
                        o = a[i];
                    if (ST.data.show_delmessage == 0 && o.msg == "[deleted]") l += '<div id="_messageId' + o.id + '"></div>';
                    else {
                        var m = CW.getDate(o.tm, ST.data.dateformat);
                        if (k != m) k = m, d = 0, j.topView = !0, l += '<div class="dateHead"><div class="dateContent"><span class="icoFontClock"></span><span class="dateText">' + m + "</span></div></div>";
                        d == o.aid ? j.showSender = !1 : d = o.aid;
                        if (g.unreadFrom !== !1 && i >= g.unreadFrom) j.showUnreadMark = !0;
                        if (g.readLock) j.readLock = !0;
                        if (g.editId && g.editId == o.id) j.editView = !0;
                        if (!g.selectId) g.selectId = b;
                        if (g.selectId &&
                            g.selectId == o.id) j.selectView = !0;
                        l += this.getMessagePanel(o, j)
                    }
                }
                return l
            },
            renderTimeLine: function(a, b) {
                a.html(b).find("._taskCompleteHide").each(function() {
                    var a = $(this);
                    a.find("._taskBody").height() >= 38 && a.append('<p class="_showMore showMore showMoreComplete">' + L.read_more + "</p>")
                })
            },
            getMessagePanel: function(a, b) {
                var d = this.model,
                    l = $.extend({
                        showSender: !0,
                        topView: !1,
                        showUnreadMark: !1,
                        readLock: !1,
                        editView: !1,
                        selectView: !1,
                        idPrefix: ""
                    }, b),
                    k = "",
                    i = "",
                    h = "",
                    j = "_message chatTimeLineMessage chatTimeLineMessageAnim clearfix",
                    o = "";
                l.showSender && (k = '<div class="_speaker avatarSpeaker">' + CW.getAvatarPanel(a.aid, {
                    size: "medium"
                }) + "</div>", i = CW.getName(a.aid), h = '<p class="chatNameOrgname">' + CW.getOrgName(a.aid) + "</p>", l.topView || (j += " chatTimeLineBorder"));
                var m = "";
                l.showUnreadMark && (m = a.sid ? '<span class="_sendingMessage"><img src="./imagenew/all/common/loader/img_loader_white.gif" ald="Loading"/></span>' : l.readLock ? '<span class="_unreadMark unreadTimeLine unreadTimeLineLock"></span>' : '<span class="_unreadMark unreadTimeLine"></span>');
                var n = "",
                    t = L.chat_edited_log;
                a.aid == AC.myid && (j += " chatTimeLineMessageMine");
                var u = 0;
                a.msg == "[deleted]" ? (u = 1, n = '<div class="_delete messegeDelete">' + L.chat_deleted + "</div>") : a.msg == "[deleted_by_admin]" ? (u = 1, n = '<div class="_delete messegeDelete">' + L.chat_deleted_by_admin + "</div>") : n = CW.renderMessage(a.msg, {
                    mid: a.id
                });
                u && (o += ' data-deleted="1"');
                var s = l.showSender ? CW.getDate(a.tm, ST.data.dateformat_short + " H:i") : CW.getDate(a.tm, "H:i");
                a.utm > 0 && (s += ' <span class="icoFontActionEdit icoSizeSmall"></span>');
                a.mn && (j += " chatTimeLineMessageMention");
                t = "";
                l.editView && (j += " chatTimeLineMessageEdit", t = '<div class="chatTimeLineMessageEditText">' + L.chat_editing_label_on_message + '<span class="_editCancel closeAction icoFontCancel massageEditCancel"></span></div>');
                var v = "";
                l.selectView && (j += " _messageSelected chatTimeLineMessageMove", v = '<span class="icoFontMessegeMoveArrow icoSizeLarge"></span><span class="icoTextHide">\u79fb\u52d5\u3057\u305f\u30c1\u30e3\u30c3\u30c8</span>');
                d = a.rid ? a.rid : d.room.id;
                u = ' data-deleted="' +
                    u + '" data-tm="' + a.tm + '"';
                a.utm && (u += ' data-utm="' + a.utm + '"');
                return '<div id="' + l.idPrefix + "_messageId" + a.id + '" data-rid="' + d + '" data-mid="' + a.id + '" class="' + j + '"' + o + '><div class="_chatTimeLineMessageBox chatTimeLineMessageInner">' + k + '<div class="chatTimeLineMessageArea clearfix"><div class="chatTimeLineItemHeader autotrim"><p class="_speakerName chatName">' + i + "</p>" + h + "</div><pre>" + n + '</pre></div><div class="_timeStamp timeStamp"' + u + ">" + m + s + "</div>" + t + '</div><div class="_moveArrow chatTimeLineMoveArrow selected">' +
                    v + "</div></div>"
            },
            highlight: function(a) {
                this.clearHighlightAll();
                a.addClass("chatTimeLineMessageMove _messageSelected").find("._moveArrow").html('<span class="icoFontMessegeMoveArrow icoSizeLarge"></span><span class="icoTextHide">\u79fb\u52d5\u3057\u305f\u30c1\u30e3\u30c3\u30c8</span>');
                return this
            },
            clearHighlight: function(a) {
                a.removeClass("chatTimeLineMessageMove _messageSelected").find("._moveArrow").quickEmpty();
                return this
            },
            clearHighlightAll: function() {
                $C("#_timeLine").find("._messageSelected").removeClass("chatTimeLineMessageMove _messageSelected").find("._moveArrow").quickEmpty();
                return this
            }
        }
    })();

function FileListView(b) {
    this.model = b
}
FileListView.prototype = {
    build: function() {
        this.model.room.file_num ? $C("#_chatFileAll").cwButton().enable() : $C("#_chatFileAll").cwButton().disable()
    }
};

function TaskListView(b) {
        this.model = b;
        this.task_num = 0;
        this.view_limit = 200
    }
    (function() {
        var b = null;
        TaskListView.prototype = {
            build: function() {
                if (this.model.room.id != RM.id) return !1;
                b === null && (b = $("#_subRoomMyTaskListShow").show().cwCheckBox({
                    label: L.chatroom_tasklist_mytaskonly,
                    update: function() {
                        RM && RM.tasklist.build()
                    }
                }));
                var a = b.isChecked(),
                    d = "",
                    e, f = this.model.getTaskList("open"),
                    g = f.length;
                this.task_num = 0;
                if (g > 0) {
                    TK.sortTaskList(f);
                    e = !1;
                    for (var l = 0; l < g; l++) {
                        var k = TK.task_id2task_dat[f[l]];
                        if (!a || k.aid == AC.myid) this.task_num++, this.task_num <= this.view_limit ? d += TK.view.getTaskPanel(k, {
                            type: "tasklist"
                        }) : e = !0
                    }
                    e && (d += '<div class="taskOverFlow">' + L.list_overflow.replace("%%num%%", number_format(this.task_num - this.view_limit)) + "</div>");
                    e = d
                }
                d == "" && !RS.show_promotion && (d = '<div class="emptyAdminContent"><img src="./imagenew/common/empty/img_task_empty.png"><p>' + L.task_nothing + "</p></div>", e = "empty");
                if (e != CW.last_tasklist_buildkey) CW.last_tasklist_buildkey = e, $C("#_subRoomTaskList").html(d);
                this.task_num > 0 ? ($C("#_roomTaskNum").show().text(" (" + number_format(this.task_num) + ")"), $C("#_roomTaskAll").show(),
                    RS.hidePromotion()) : ($C("#_roomTaskNum").hide(), $C("#_roomTaskAll").hide(), RS.showPromotion())
            }
        }
    })();

function RoomDialogView(b) {
    var a = this;
    a.model = b;
    a.filter_word_member = "";
    a.filter_word_contact = "";
    a.checked_flag = {};
    a.contact_flag = {};
    a.member_flag = {};
    a.is_valid_link_name = !0;
    a.is_folded = !1;
    a.room_dat = null;
    var d, e;
    a.openAdminsettingDialog = function(b) {
        d || a.prepareAdminSetting();
        d.open(b)
    };
    a.prepare = function() {
        a.prepareMember();
        CW.view.onIframeReady(function() {
            $("#_updateRoomAdminsettingIframe").bind("load", function() {
                CW.hideProgress();
                var a = unescape_html($(this).contents().find("body").html());
                if (a.length >
                    0) {
                    var a = a.match(/\{.+\}/)[0],
                        a = $.parseJSON(a),
                        b = a.result;
                    a.status.success ? b.header_error != void 0 ? CW.alert(L["error_upload_" + b.header_error]) : CW.watch() : CW.alert(L.raise_error)
                }
            })
        });
        $("#_roomInfoHeaderDelete").click(function() {
            $(this).prop("checked") ? $("#_roomInfoHeader").prop("disabled", !0) : $("#_roomInfoHeader").prop("disabled", !1)
        });
        var b = "",
            d = null,
            e = function() {
                var e = $(this).val();
                if (e != b) b = e, d && (clearTimeout(d), d = null), AC.getChatWorkId(AC.myid) == e ? ($("#_linkNameLoading").hide(), $("#_linkNameUsed").text(""),
                    a.is_valid_link_name = !0) : e ? e.length > 50 ? ($("#_linkNameLoading").hide(), $("#_linkNameUsed").text(L.error_maxlength.replace("%%length%%", 50)).css("color", "red"), a.is_valid_link_name = !1) : e.match(/^[-_a-zA-Z0-9]+$/) ? ($("#_linkNameLoading").show(), $("#_linkNameUsed").text(""), d = setTimeout(function() {
                    $("#_linkNameLoading").show();
                    CW.get("gateway.php", {
                        cmd: "check_chat_link_name",
                        link_name: e,
                        rid: RM.id
                    }, function(b) {
                        $("#_linkNameLoading").hide();
                        b.used ? ($("#_linkNameUsed").text(L.error_already_used).css("color",
                            "red"), a.is_valid_link_name = !1) : ($("#_linkNameUsed").text(L.available).css("color", "green"), a.is_valid_link_name = !0)
                    })
                }, 1E3)) : ($("#_linkNameLoading").hide(), $("#_linkNameUsed").text(L.error_invalidchar).css("color", "red"), a.is_valid_link_name = !1) : ($("#_linkNameLoading").hide(), $("#_linkNameUsed").text(""))
            };
        $("#_linkNameInput").keyup(e).blur(e)
    };
    a.prepareMember = function() {
        $("#_roomInfoMemberBox").on("cwSelectBox_update", "._cwSL", function() {
            var b = $(this),
                d = b.attr("data-aid"),
                b = b.cwSelectBox();
            a.member_flag[d] =
                b.getVal()
        });
        $("#_subEditMember").click(function() {
            a.editRoomMember(RM.id)
        });
        $("#_roomInfoSelectAllContact").cwCheckBox({
            update: function() {
                this.isChecked() ? $("#_roomInfoContact").find("._cwCBUnchecked").each(function() {
                    $(this).cwCheckBox().check()
                }) : $("#_roomInfoContact").find("._cwCBChecked").each(function() {
                    $(this).cwCheckBox().unCheck()
                })
            }
        })
    };
    var f = !1;
    a.prepareRoomInfo = function() {
        f || (f = !0, CW.view.onIframeReady(function() {
            $("#_roomInfoFrame").bind("load", function() {
                CW.hideProgress();
                var a = unescape_html($(this).contents().find("body").html());
                if (a.length > 0) {
                    var a = a.match(/\{.+\}/)[0],
                        b = $.parseJSON(a),
                        a = b.result;
                    if (b.status.success) {
                        a.message != void 0 && CW.alert(a.message);
                        if (a.add == void 0) {
                            b = RL.rooms[a.id];
                            a.name != void 0 && b.setName(a.name);
                            if (a.description != void 0) b.description = a.description;
                            if (a.member_dat != void 0) b.member_dat = a.member_dat;
                            b.build()
                        } else if (a.error != void 0) {
                            var b = L.chatroom_error_cant_add,
                                d = L.chatroom_error_planlimit,
                                d = d.replace(/%%plan_name%%/, a.error.plan_name),
                                d = d.replace(/%%limit_num%%/, a.error.limit_num);
                            CW.view.showLimitErrorDialog(b,
                                d)
                        } else RL.lazy_select = a.room_id;
                        CW.watch()
                    } else b.status.message ? CW.alert(b.status.message) : CW.alert(L.raise_error)
                }
            })
        }), $C("#_roomInfoMemberFilter").cwSearchBox({
            update: function() {
                var b = this.getVal();
                a.filter_word_member = b.length > 0 ? b.toLowerCase() : "";
                a.buildMember(["member"])
            }
        }), $C("#_roomInfoContactFilter").cwSearchBox({
            update: function() {
                var b = this.getVal();
                a.filter_word_contact = b.length > 0 ? b.toLowerCase() : "";
                a.buildMember(["contact"])
            }
        }), $C("#_roomInfoMemberAdd").cwButton({
            click: function() {
                var b = [],
                    d = $("#_roomInfoSelectRole input:checked").val();
                $("#_roomInfoContact").find("._cwCBChecked").each(function() {
                    a.checked_flag[$(this).cwCheckBox().getVal()] = !0
                });
                for (var e in a.checked_flag) b.push(e);
                a.addMember(b, d);
                $C("#_roomInfoMemberFilter").val("").blur().focus();
                $("#_roomInfoSelectAllContact").cwCheckBox().unCheck();
                return !1
            }
        }), $("#_roomInfoMemberBox").on("click", "._memberDelete", function() {
            var b = $(this).attr("data-aid");
            a.deleteMember(b)
        }))
    };
    a.prepareAdminSetting = function() {
        d = $("#_roomAdminsettingDialog").cwDialog({
            title: L.adminsetting_title,
            width: 750,
            autoOpen: !1,
            resizable: !1,
            modal: !0,
            hide: "fade",
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                var d = this.data.room_id;
                b === 0 && (b = [], a.is_valid_link_name || b.push(L.adminsetting_error_invalid_link_name), b.length ? CW.alert(b.join("\n")) : ($("#_linkNameInput").isVisible() || $("#_linkNameInput").val(""), $("#_roomAdminsettingId").val(d), $("#_roomAdminsettingForm").submit(), CW.showProgress(L.saving), this.close()))
            },
            open: function(b) {
                this.data.room_id =
                    b;
                var d = {
                        _allowSeeMember: "allow_see_member",
                        _allowUploadFile: "allow_upload_file",
                        _allowAddTask: "allow_add_task",
                        _allowSendMessage: "allow_send_message",
                        _public: "public",
                        _joinNeedAccept: "join_need_accept"
                    },
                    b = RL.rooms[b];
                a.is_valid_link_name = !0;
                for (var e in d) b[d[e]] ? $("#" + e).cwCheckBox().check() : $("#" + e).cwCheckBox().unCheck();
                $("#_linkNameLoading").hide();
                $("#_linkNameUsed").text("");
                $("#_linkNameInput").hide();
                $("#_linkName").show();
                $("#_linkNameEdit").text(L.button_edit);
                b.link_name ? $("#_linkName").text(b.link_name) :
                    $("#_linkName").text(b.id);
                $("#_publicDescription").val(b.public_description);
                $("#_roomAdminsettingHeaderDelete").cwCheckBox().unCheck();
                $("#_roomAdminsettingHeader").prop("disabled", !1);
                b.header ? ($("#_roomAdminsettingHeaderCurrent").html('<img src="' + S3_PATH + "/header/" + b.header + '" width="30" height="30" style="border:1px solid #999"/>'), $("#_roomAdminsettingHeaderDeleteBox").show()) : ($("#_roomAdminsettingHeaderCurrent").empty(), $("#_roomAdminsettingHeaderDeleteBox").hide());
                $("#_roomAdminsettingHeader").val("")
            }
        });
        $("#_public").click(function() {
            $(this).trigger("update")
        }).on("update", function() {
            document.getElementById("_public").checked ? $("#_roomInfoPublicDetailBox").removeClass("controlGroupDisable").find("input,textarea").prop("disabled", "") : $("#_roomInfoPublicDetailBox").addClass("controlGroupDisable").find("input,textarea").prop("disabled", "disabled")
        });
        $("#_linkNameEdit").click(function() {
            $("#_linkName").css("display") != "none" ? ($("#_linkNameInput").val($("#_linkName").text()).show(), $("#_linkName").hide(),
                $("#_linkNameEdit").text(L.button_cancel)) : ($("#_linkName").show(), $("#_linkNameInput").hide(), $("#_linkNameEdit").text(L.button_edit));
            $("#_linkNameLoading").hide();
            $("#_linkNameUsed").text("")
        })
    };
    var g = null;
    a.addMember = function(b, d) {
        d || (d = "member");
        for (var e = 0, f = b.length; f--;) e = b[f], a.member_flag[e] = d, delete a.contact_flag[e];
        a.checked_flag = {};
        g || (g = setTimeout(function() {
            a.buildMember();
            g = null
        }, 100))
    };
    a.deleteMember = function(b) {
        $("#_memberRowAid" + b).remove();
        a.contact_flag[b] = !0;
        delete a.checked_flag[b];
        delete a.member_flag[b];
        g || (g = setTimeout(function() {
            a.buildMember();
            g = null
        }, 100))
    };
    a.buildMember = function(b) {
        var b = b || ["member", "contact"],
            d = 0,
            e = 0,
            f = {
                member: a.member_flag,
                contact: a.contact_flag
            },
            h = [],
            g = [];
        a.filter_word_member && (h = CW.splitWithSpace(a.filter_word_member));
        a.filter_word_contact && (g = CW.splitWithSpace(a.filter_word_contact));
        for (var i = 0; i < b.length; i++) {
            var l = b[i],
                k = [],
                y;
            for (y in f[l]) k.push(y);
            Room.prototype.sortMember(k);
            var p = $("#_roomInfo" + ucfirst(l));
            p.quickEmpty();
            var w = "",
                q = k.length;
            200 < q && $("#_roomInfoShowLimitNum" + ucfirst(l)).text(L.chatroom_show_limit_member_num.replace("%%num%%", 200));
            for (var r = 0; r < q; r++) {
                var z = k[r];
                if (l == "member") {
                    if (!(h.length > 0) || AC.isMatchedWithKeyList(h, z)) {
                        d++;
                        if (d > 200) break;
                        w += '<tr id="_memberRowAid' + z + '" class="selectableRow"><td>' + CW.getAvatarPanel(z, {
                            size: "small",
                            hovertip: !1,
                            clicktip: !1
                        }) + '</td><td><p class="roomInfoContactListName autotrim">' + CW.getName(z) + '</p><p class="roomInfoContactListOrgName autotrim">' + CW.getOrgTitle(z) + "</p></td><td>";
                        w += $.cwSelectBox.create([{
                            label: L.admin,
                            value: "admin"
                        }, {
                            label: L.member,
                            value: "member"
                        }, {
                            label: L.readonly,
                            value: "readonly"
                        }], "", a.member_flag[z], {
                            "class": "_roomInfoRole",
                            "data-aid": z
                        });
                        w += '</td><td class="_memberDelete" data-aid="' + z + '"><span class="icoFontCancel verticalMiddle"></span><span class="icoTextHide">' + L.button_delete + "</span></td></tr>"
                    }
                } else if (!(g.length > 0) || AC.isMatchedWithKeyList(g, z)) {
                    e++;
                    if (e > 200) break;
                    var E = !1;
                    a.checked_flag[z] != void 0 && (E = !0);
                    w += '<tr class="_cwTextUnselectable _cwSelectableRow selectableRow"><td>' +
                        $.cwCheckBox.create(E, !1, z) + "</td><td>" + CW.getAvatarPanel(z, {
                            size: "small",
                            hovertip: !1,
                            clicktip: !1
                        }) + '</td><td><p class="roomInfoContactListName autotrim">' + CW.getName(z) + '</p><p class="roomInfoContactListOrgName autotrim">' + CW.getOrgTitle(z) + "</p></td></tr>"
                }
            }
            $(p).html(w)
        }
        a.embedMemberHidden()
    };
    a.embedMemberHidden = function() {
        var b = "",
            d;
        for (d in a.member_flag) b += '<input type="hidden" name="__cwform_role[' + d + ']" value="' + a.member_flag[d] + '" />';
        $("#_roomInfoMemberHidden").html(b)
    };
    a.buildChatInfo = function() {
        $("#_roomInfoEditRoomId").val(a.room_dat.id);
        $("#_roomInfoName").val(a.room_dat.name);
        $("#_roomInfoIcon").val("");
        $("#_roomInfoIconSelectedValue").val("");
        a.room_dat.icon_preset ? ($("#_roomInfoIconTypePreset").click(), $("#_roomInfoIconPreset").find("[data-pt=" + a.room_dat.icon + "]").click()) : ($("#_roomInfoIconTypeGroup").click(), $("#_roomInfoIconTypeUpload").click(), $("#_roomInfoIconSelected").prop("src", RL.rooms[a.room_dat.id].getIcon("src")));
        $("#_roomInfoIconSelected").show();
        $("#_roomInfoIconFileUpload").hide();
        $("#_roomInfoDescription").show().val(CS.convertToEdit(a.room_dat.description)).blur();
        $("#_roomInfoHeader").val("")
    };
    a.prepareRoomDat = function(b) {
        a.prepareRoomInfo();
        a.checked_flag = {};
        a.contact_flag = {};
        a.member_flag = {};
        a.room_dat = {
            id: 0,
            icon: "group",
            icon_preset: !0,
            description: "",
            member_dat: {},
            "public": 0,
            link_name: "",
            join_need_accept: 0,
            public_description: "",
            header: "",
            allow_see_member: 1,
            allow_upload_file: 1,
            allow_add_task: 1,
            allow_send_message: 1
        };
        if (b) {
            b = RL.rooms[b];
            if (!b) return !1;
            for (var d in a.room_dat) a.room_dat[d] = b[d];
            a.room_dat.name = b.getName()
        } else a.room_dat.member_dat[AC.myid] =
            "admin";
        d = a.room_dat.member_dat;
        for (var e in d) a.member_flag[e] = d[e];
        for (var f in AC.contact_list) e = AC.contact_list[f], a.member_flag[e] == void 0 && (a.contact_flag[e] = !0)
    };
    a.prepareRoomIconTooltip = function() {
        e || (e = $("#_roomIconSelector").cwToolTip({
            direction: "bottom"
        }), $("#_roomIconSelectorBtn").click(function() {
            e.open($(this))
        }), e.$el.on("click", "._iconType", function() {
            switch ($(this).val()) {
                case "preset":
                    $("#_roomInfoIconDefault").show();
                    $("#_roomInfoIconUpload").hide();
                    break;
                case "upload":
                    $("#_roomInfoIconUpload").show(),
                        $("#_roomInfoIconDefault").hide()
            }
        }), $("#_roomInfoIconPreset").on("click", "li", function() {
            $("#_roomInfoIconSelected").show();
            $("#_roomInfoIconFileUpload").hide();
            $("#_roomInfoIconPreset").find("li.roomInfoIconActive").removeClass("roomInfoIconActive");
            var a = $(this),
                b = a.find("img");
            a.addClass("roomInfoIconActive");
            $("#_roomInfoIconSelected").prop("src", b.prop("src"));
            $("#_roomInfoIconSelectedValue").val(b.attr("data-pt"));
            e.close()
        }), $("#_roomInfoIcon").on("change", function() {
            e.close();
            $("#_roomInfoIconSelected").hide();
            $("#_roomInfoIconFileUpload").show();
            var a = this.value;
            $("#_roomInfoIconFileUpload").find("p").text(a.split("\\").pop())
        }))
    };
    var l = null;
    a.openAddRoomDialog = function() {
        l || (a.prepareRoomIconTooltip(), l = $("#_addRoom").cwDialog({
            parentFloatBox: e.$el,
            title: L.chatroom_create_title,
            width: 800,
            buttonLabels: [L.button_create_long, L.button_cancel],
            open: function() {
                a.buildChatInfo();
                a.buildMember();
                $("#_roomInfoRoleMember").click();
                $("#_addRoomChatInfoArea").append($("#_roomInfoChatInfoBox").show());
                $("#_addRoomMemberArea").append($("#_roomInfoMemberBox").show());
                $("#_roomInfoMemberBoxLabel").show()
            },
            postOpen: function() {
                $("#_addRoom").scrollTop(0);
                $("#_roomInfoName").focus()
            },
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                switch (b) {
                    case 0:
                        b = $("#_roomInfoName").val();
                        if (!b) {
                            for (var d in a.member_flag)
                                if (b && (b += ","), b += AC.getName(d), b.length > 100) {
                                    b += "...";
                                    break
                                }
                            $("#_roomInfoName").val(b)
                        }
                        d = {};
                        d.member_dat = a.member_flag;
                        error = a.validateRoomInfo(d);
                        a.member_flag[AC.myid] || error.push(L.chatroom_error_noself);
                        if (error.length) return CW.alert(error.join("\n")), !1;
                        a.embedMemberHidden();
                        $("#_roomInfoForm").submit();
                        CW.showProgress(L.adding);
                        l.close();
                        CW.track.send("create_groupchat")
                }
            }
        }));
        a.prepareRoomDat();
        if (CW.group_limit_num) {
            var b = 0,
                d;
            for (d in RL.rooms) RL.rooms[d].type === "group" && b++;
            if (b >= CW.group_limit_num) {
                b = L.chatroom_error_cant_add;
                d = L.chatroom_error_planlimit;
                d = d.replace(/%%plan_name%%/, PLAN_NAME);
                d = d.replace(/%%limit_num%%/, CW.group_limit_num);
                CW.view.showLimitErrorDialog(b, d);
                return
            }
        }
        l.open()
    };
    var k = null;
    a.editRoomDescription = function(b) {
        a.prepareRoomDat(b);
        k || (k = $("#_roomDescEditDialog").cwDialog({
            title: L.chatroom_edit_desc_title,
            width: 500,
            height: "auto",
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                var d = this;
                switch (b) {
                    case 0:
                        var e = {};
                        e.desc = $("#_roomDescEditContent").val();
                        b = a.validateRoomInfo(e);
                        if (b.length > 0) return CW.alert(b.join("\n")), !1;
                        else CW.post("gateway.php", {
                                cmd: "update_room",
                                room_id: d.data.room_id,
                                description: e.desc
                            }, function() {
                                RL.rooms[d.data.room_id].description = e.desc;
                                CW.watch()
                            }),
                            d.close()
                }
            },
            open: function(a) {
                this.data.room_id = a;
                $("#_roomDescEditContent").val(CS.convertToEdit(RL.rooms[this.data.room_id].description)).focus()
            },
            postOpen: function() {
                $("#_roomDescEditContent").focus()
            }
        }));
        k.open(b)
    };
    var i = null;
    a.editRoomInfo = function(b) {
        i || (a.prepareRoomIconTooltip(), i = $("#_roomInfoEditDialog").cwDialog({
            parentFloatBox: e.$el,
            title: L.chatroom_info_edit,
            width: 620,
            height: "auto",
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                switch (b) {
                    case 0:
                        if (b = {}, b.name = trim($("#_roomInfoName").val()), b.desc = $("#_roomInfoDescription").val(), $("#_roomInfoIconTypePreset")[0].checked ? (b.icon_type = "preset", b.preset = $("#_roomInfoIconSelectedValue").val()) : (b.icon_type = "upload", b.icon = $("#_roomInfoIcon").val()), b = a.validateRoomInfo(b), b.length > 0) return CW.alert(b.join("\n")), !1;
                        else $("#_roomInfoIcon").val() && CW.showProgress(L.saving), $("#_roomInfoEditForm").submit(), this.close()
                }
            },
            open: function(b) {
                this.data.room_id = b;
                a.prepareRoomDat(this.data.room_id);
                a.buildChatInfo();
                $("#_roomInfoEditContent").append($("#_roomInfoChatInfoBox").show())
            },
            postOpen: function() {
                $("#_roomInfoName").focus()
            }
        }));
        i.open(b)
    };
    var h = null;
    a.editRoomMember = function(b) {
        h || (h = $("#_roomMemberEditDialog").cwDialog({
            title: L.chatroom_edit_member,
            width: "auto",
            height: "auto",
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(b) {
                switch (b) {
                    case 0:
                        if (b = {}, b.member_dat = a.member_flag, b = a.validateRoomInfo(b), b.length > 0) return CW.alert(b.join("\n")), !1;
                        else {
                            var d =
                                this.data.room_id;
                            CW.post("gateway.php", {
                                cmd: "update_room",
                                room_id: d,
                                role: a.member_flag
                            }, function(b) {
                                b.message ? CW.alert(b.message) : (RL.rooms[d].member_dat = a.member_flag, CW.watch())
                            });
                            this.close()
                        }
                }
            },
            open: function(b) {
                this.data.room_id = b;
                $("#_roomInfoRoleMember").click();
                $("#_roomInfoSelectAllContact").cwCheckBox().unCheck();
                $("#_roomInfoMemberBoxLabel").hide();
                $("#_roomMemberEditDialog").append($("#_roomInfoMemberBox").show());
                $("#_roomInfoContactList").scrollTop(0);
                a.prepareRoomDat(b);
                a.buildMember()
            }
        }));
        h.open(b)
    };
    a.editRoomAdminSetting = function(b) {
        a.prepareRoomDat(b);
        a.is_valid_link_name = !0;
        var b = {
                allow_see_member: "#_allowSeeMember",
                allow_upload_file: "#_allowUploadFile",
                allow_send_message: "#_alllowSendMessage",
                allow_add_task: "#_allowAddTask",
                "public": "#_public",
                join_need_accept: "#_joinNeedAccept"
            },
            d;
        for (d in b) a.room_dat[d] ? $(b[d]).prop("checked", !0) : $(b[d]).prop("checked", !1);
        $("#_public").trigger("update");
        $("#_linkNameLoading").hide();
        $("#_linkNameUsed").text("");
        $("#_linkNameInput").hide();
        $("#_linkName").show();
        $("#_linkNameEdit").text(L.button_edit);
        $("#_linkName").removeClass("linkNameAuto");
        a.room_dat.link_name ? $("#_linkName").text(a.room_dat.link_name) : $("#_linkName").text(a.room_dat.id);
        $("#_roomInfoPublicDescription").val(a.room_dat.public_description);
        $("#_roomInfoHeaderDelete").prop("checked", !1);
        $("#_roomInfoHeader").prop("disabled", !1);
        a.room_dat.header ? ($("#_roomInfoHeaderCurrent").html('<img src="' + S3_PATH + "/header/" + a.room_dat.header + '" width="30" height="30" style="border:1px solid #999"/>'),
            $("#_roomInfoHeaderDeleteBox").show()) : ($("#_roomInfoHeaderCurrent").quickEmpty(), $("#_roomInfoHeaderDeleteBox").hide())
    };
    a.validateRoomInfo = function(b) {
        var d = [];
        b.name != void 0 && b.name == "" && d.push(L.chatroom_error_no_name);
        if (b.member_dat != void 0) {
            var b = !1,
                e;
            for (e in a.member_flag)
                if (a.member_flag[e] == "admin") {
                    b = !0;
                    break
                }
            b || d.push(L.chatroom_error_noadmin)
        }
        return d
    }
}

function RoomSubView(b) {
    var a = this;
    a.model = b;
    a.promotion_initialized = !1;
    a.prepare = function() {
        var b = $.cookie("ui_subcontent_width");
        b !== void 0 && a.resizeWidth(b);
        var d = 0;
        $.cwResize.setHandle($("#_subContentAreaHandle"), {
            type: "col",
            start: function() {
                d = $C("#_subContent").width()
            },
            move: function(b) {
                a.resizeWidth(d - b)
            }
        });
        var e = null;
        $C("#_subRoomDescriptionWrapper").on("mouseenter", function() {
            if ($(this).data("is_overflow") && $C("#_subContentArea").height() < $C("#_subContentAreaContent").height()) {
                if (e === null) {
                    $C("#_subContentArea").css({
                        overflow: "hidden",
                        width: "100%",
                        "padding-right": 0
                    });
                    var a = $("#_subRoomInfoTitle").width();
                    $C("#_subContentArea").css({
                        overflow: "auto"
                    });
                    e = a - $("#_subRoomInfoTitle").width()
                }
                $C("#_subContentArea").css({
                    overflow: "hidden",
                    width: ($C("#_subContentArea").width() - e).toString() + "px",
                    "padding-right": e + "px"
                })
            }
        }).on("mouseleave", function() {
            $(this).data("is_overflow") && $C("#_subContentArea").css({
                overflow: "auto",
                width: "100%",
                "padding-right": 0
            })
        });
        $("#_closeChatInfo").click(function() {
            var a = $("#_subRoomChatInfo");
            a.isVisible() ? a.stop().slideUp() :
                a.stop().slideDown()
        });
        $("#_groupCall").click(function() {
            a.openGroupCall(RM.id)
        });
        $C("#_chatFileAll").cwButton({
            size: "large",
            click: function() {
                FL.view.openFileList(RM.id)
            }
        });
        a.prepareNavigation();
        a.prepareMember();
        $("#_subEditRoomInfo").click(function() {
            RM.type == "group" ? RD.view.editRoomInfo(RM.id) : RD.view.editRoomDescription(RM.id)
        });
        var f = ["admin_setting", "same_member_addchat", "hr", "leave_room", "delete_contact", "delete_room"];
        $C("#_chatRoomSetting").cwButton({
            size: "large"
        }).$el.cwDropDown({
            list: function() {
                for (var a = [], b = {}, d = 0, e = f.length; d < e; d++) {
                    var h = f[d];
                    b[h] = !1
                }
                switch (RM.type) {
                    case "group":
                        b.leave_room = !0;
                        break;
                    case "contact":
                        b.delete_contact = !0
                }
                if (RM.type !== "contact") switch (RM.member_dat[AC.myid]) {
                    case "admin":
                        b.admin_setting = !0, b.same_member_addchat = !0, b.hr = !0, b.delete_room = !0
                }
                d = 0;
                for (e = f.length; d < e; d++)
                    if (h = f[d], b[h]) switch (h) {
                        case "admin_setting":
                            a.push({
                                value: "admin_setting",
                                label: L.chatroom_edit_adminsetting
                            });
                            break;
                        case "same_member_addchat":
                            a.push({
                                value: "same_member_addchat",
                                label: L.chatroom_createchat_same_members
                            });
                            break;
                        case "hr":
                            a.push("hr");
                            break;
                        case "leave_room":
                            a.push({
                                value: "leave_room",
                                label: L.chatroom_leave
                            });
                            break;
                        case "delete_contact":
                            a.push({
                                value: "delete_contact",
                                label: L.contact_delete
                            });
                            break;
                        case "delete_room":
                            a.push({
                                value: "delete_room",
                                label: L.chatroom_delete
                            })
                    }
                    return a
            },
            select: function(a) {
                if (!RM || !RM.id) CW.alert(L.error_no_select);
                else {
                    var b = RM.id;
                    switch (a) {
                        case "admin_setting":
                            RD.view.openAdminsettingDialog(b);
                            CW.track.send("open_public_chat_setting");
                            break;
                        case "same_member_addchat":
                            for (var d =
                                    function(a, b) {
                                        RD.view.openAddRoomDialog();
                                        for (var d = 0; d < b.length; d++) RD.view.addMember(a[b[d]], b[d])
                                    }, a = RM.getSortedMemberList(), e = {}, f = !1, h = "", g = [], j = 0; j < a.length; j++) h = RM.member_dat[a[j]], AC.myid != a[j] && (AC.isContact(a[j]) ? (typeof e[h] == "undefined" && (e[h] = [], g.push(h)), e[h].push(a[j])) : f = !0);
                            f ? CW.confirm(L.chatroom_createchat_same_members_confirm, function() {
                                setTimeout(function() {
                                    d(e, g)
                                })
                            }) : d(e, g);
                            break;
                        case "delete_contact":
                            a = RM.getAccountId();
                            AC.view.deleteContact(a);
                            break;
                        case "leave_room":
                            CW.confirm(L.chatroom_confirm_leave.replace(/%%room_name%%/,
                                RM.getName()), function() {
                                CW.post("gateway.php", {
                                    cmd: "leave_room",
                                    room_id: b
                                }, function() {
                                    CW.watch()
                                })
                            });
                            break;
                        case "delete_room":
                            a = "", a += L._chatroom_confirm_delete_alert.replace(/%%room_name%%/, escape_html(RM.getName())) + "\n\n", a += L._chatroom_confirm_delete_content + "\n\n", a += "<ul>", a += '<li class="_cwSelectableRow"><label><input type="checkbox" class="_cwDGAgreeCheckbox" /> ' + L._chatroom_confirm_delete_note_1 + "</label></li>", a += '<li class="_cwSelectableRow"><label><input type="checkbox" class="_cwDGAgreeCheckbox" /> ' +
                                L._chatroom_confirm_delete_note_2 + "</label></li>", a += '<li class="_cwSelectableRow"><label><input type="checkbox" class="_cwDGAgreeCheckbox" /> ' + L._chatroom_confirm_delete_note_3 + "</label></li>", a += "</ul>", CW.view.confirmDelete(a, function() {
                                    CW.post("gateway.php", {
                                        cmd: "delete_room",
                                        room_id: b
                                    }, function() {
                                        CW.watch()
                                    })
                                }, null, !0, L._button_delete_with_agreement)
                    }
                }
            }
        });
        SERVICE_PLAN !== "free" && $.cookie("ui_fold_roomsub") === "1" && a.toggleFold();
        CW.view.registerKeyboardShortcut(71, !1, !1, !1, !1, function() {
            RD.view.openAddRoomDialog()
        }).registerKeyboardShortcut(84, !1, !1, !1, !1, function() {
            $C("#_taskNameInput").focus()
        })
    };
    a.hidePromotion = function() {
        $(".promotionArea").css({
            height: "0",
            display: "none"
        })
    };
    a.showPromotion = function() {
        $(".promotionArea").css({
            height: "",
            display: ""
        })
    };
    a.initializePromotion = function() {
        var b = $(".promotionArea .promotionContent div[id]").attr("id");
        b && googletag.cmd.push(function() {
            a.promotion_initialized = !0;
            a.showPromotion();
            googletag.display(b)
        })
    };
    a.refreshPromotion = function() {
        googletag.cmd.push(function() {
            googletag.pubads().refresh()
        })
    };
    var d = "",
        e = null,
        f = null;
    a.prepareTask = function() {
        f = $C("#_taskNameInput").focus(function() {
            a.expandTaskArea(!0);
            a.openFold();
            $(".promotionArea").animate({
                height: 0
            }, function() {
                $(this).css("display", "none")
            })
        }).cwElasticTextArea({
            maxHeight: function() {
                var a = $C("#_taskCancelButton");
                return $C("body").height() - a.offset().top - a.height()
            },
            minHeight: function() {
                var a = this.option.maxHeight();
                if (a >= TM.taskinput_init_height) return TM.taskinput_init_height;
                else if (a > TM.taskinput_min_height) return a;
                return TM.taskinput_min_height
            }
        });
        var b = null;
        e = $("#_taskAssignList").cwListTip({
            search: !0,
            multiSelect: !0,
            placeHolder: L.chatroom_search_member,
            useHtmlLabel: !0,
            list: function() {
                return a.getTaskMemberList(this.data.room_id)
            },
            open: function(a, b) {
                this.data.room_id = b
            },
            update: function() {
                b === null && (b = setTimeout(function() {
                    for (var a = e.getVal(), d = "", g = a.length, j = 0; j < g; j++) {
                        var i = a[j];
                        d += '<div class="assignContent assignMember"><span class="_taskAssignMemberLabel assignContentText" data-aid="' + i + '">' + CW.getName(i) + '</span><span class="_taskAssignCancel assignContentCancel" data-aid="' +
                            i + '"><span class="icoFontCancel"></span><span class="icoTextHide">' + L.button_delete + "</span></span></div>"
                    }
                    d ? ($C("#_assignBox").html(d), $C("#_inchargeEmpty").hide()) : ($C("#_assignBox").quickEmpty(), $C("#_inchargeEmpty").show());
                    f.resize();
                    b = null
                }, 100))
            }
        });
        $C("#_assignButton").click(function() {
            e.open($(this), RM.id)
        });
        $("#_assignBox").on("click", "._taskAssignCancel", function() {
            var a = $(this).attr("data-aid");
            e.select(a)
        }).on("mouseover", "._taskAssignMemberLabel", function() {
            var a = $(this),
                b = a.attr("data-aid");
            $.cwMessageTip.isInit(a[0]) || a.cwMessageTip({
                message: function() {
                    return AC.getName(b)
                },
                delay: TM.messagetip_delay
            }).open()
        }).on("click", "._taskAssignMemberLabel", function() {
            $C("#_assignButton").click();
            return !1
        });
        $C("#_inchargeEmpty").click(function() {
            $C("#_assignButton").click()
        });
        var g = $("#_taskAssignQuickList").cwToolTip({
            offsetTop: 7,
            open: function() {
                for (var a = RM.getSortedMemberList(), b = a.length, d = "", e = 0; e < b; e++)
                    if (d += CW.getAvatarPanel(a[e], {
                            size: "small",
                            clicktip: !1
                        }), e > 7) {
                        d += '<span class="_taskAssignMore taskAssignMore icoFontActionMore"></span>';
                        break
                    }
                $C("#_assignQuickBox").html(d)
            },
            close: function() {}
        });
        g.$el.on("click", "._avatar", function() {
            var a = $(this).attr("data-aid");
            e.select(a)
        }).on("click", "._taskAssignMore", function() {
            g.close();
            $C("#_assignButton").click()
        });
        $("#_taskQuickWrapper").on("mouseenter", function() {
            !g.isOpen() && !e.isOpen() && g.open($C("#_taskAssignAddArea"))
        });
        $("#_taskLimitAddArea").on("mouseenter", function() {
            g.isOpen() && g.close()
        });
        $("#_chatContent,#_subRoomMemberArea,#_assignButton").on("mouseenter", function() {
            g.close()
        });
        $C("#_limitButton").cwDatePicker({
            dateLabel: $("#_limit"),
            update: function() {
                this.getVal() ? $C("#_limitEmpty").hide() : $C("#_limitEmpty").show()
            }
        });
        $C("#_limitEmpty").click(function() {
            $C("#_limitButton").click()
        });
        $("#_taskAddButton").click(function() {
            if (RM.id) {
                if (!RM.view.disabled_send) {
                    var b = rtrim(f.getVal());
                    if (b.length != 0) {
                        room_id = RM.id;
                        var e = $C("#_limitButton").cwDatePicker(),
                            h = e.getVal(),
                            g = a.getTaskAssignList();
                        g.length ? (task_data = b + "|" + g.join(",") + "|" + h, d != task_data && (d = task_data, f.setVal(""),
                            a.clearTaskAssign(), e.setVal(""), b = CS.convertToSend(b), a.model.addTask(room_id, b, h, g, function() {
                                a.initTaskArea();
                                latest_chat = d = ""
                            }, function(j) {
                                j ? CW.alert(j) : CW.alert(L.chatsend_error_send_task);
                                latest_chat = d = "";
                                RL.selectRoom(room_id);
                                f.setVal(b);
                                a.setTaskAssign(g);
                                e.setVal(h)
                            }), CW.track.send("add_task"))) : CW.alert(L.chatsend_error_no_incharge)
                    }
                }
            } else CW.alert(L.error_no_select)
        }).keydown(function(a) {
            a.keyCode != 9 && a.keyCode == 13 && $(this).click()
        });
        $("#_taskCancelButton").click(function() {
            a.initTaskArea()
        }).keydown(function(a) {
            a.keyCode !=
                9 && a.keyCode == 13 && $(this).click()
        })
    };
    a.initTaskArea = function() {
        $C("#_taskNameInput").cwElasticTextArea().setVal("").clearFocused();
        $C("#_taskAddArea").addClass("taskContentAreaClose");
        $C("#_taskAddMeta").hide();
        $C("#_limitButton").cwDatePicker().today();
        RM && count(RM.member_dat) == 1 && RM.member_dat[AC.myid] != void 0 ? RS.view.setTaskAssign([AC.myid]) : RS.view.clearTaskAssign();
        return this
    };
    a.prepareNavigation = function() {
        $("#_chatTabRoomInfo").click(function() {
            $("#_chatRoomDescriptionNav").find("li").removeClass("descriptionNavSelected");
            $("#_chatTabRoomInfo").addClass("descriptionNavSelected");
            $("#_subRoomInfoTabContent").show();
            $("#_subRoomTaskTabContent").hide()
        });
        $("#_chatTabTask").click(function() {
            $("#_chatRoomDescriptionNav").find("li").removeClass("descriptionNavSelected");
            $("#_chatTabTask").addClass("descriptionNavSelected");
            $("#_subRoomInfoTabContent").hide();
            $("#_subRoomTaskTabContent").show()
        });
        return this
    };
    a.prepareMember = function() {
        $C("#_subRoomMemberArea").on("click", "#_openMemberDetail", function() {
            a.openMemberDetailDialog(RM.id)
        });
        var b = "",
            d = $("#_showMoreMemberTip").cwListTip({
                search: !0,
                useHtmlLabel: !0,
                placeHolder: L.chatroom_search_member,
                multiSelect: !1,
                selectable: !1,
                list: function() {
                    if (!RM) return [];
                    var a = [],
                        d;
                    for (d in RM.member_dat) b == "nocontact" ? AC.isContact(d) || a.push(d) : RM.member_dat[d] == b && a.push(d);
                    RM.sortMember(a);
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) {
                        var g = a[f];
                        if (g != AC.myid) {
                            var j = AC.getName(g);
                            d.push({
                                keys: AC.getSearchKeys(g),
                                value: g,
                                label: CW.getAvatarPanel(g, {
                                        clicktip: !1,
                                        size: "small"
                                    }) + '<p class="autotrim">' + escape_html(j) +
                                    "</p>"
                            })
                        }
                    }
                    return d
                },
                select: function(a) {
                    AC.view.openProfileWindow(a);
                    this.close()
                }
            });
        $("#_memberDetailDialog").on("click", "._showMoreMember", function() {
            var a = $(this);
            b = a.attr("data-role");
            d.open(a)
        })
    };
    a.isFolded = function() {
        return a.is_folded
    };
    a.openFold = function() {
        a.isFolded() && a.toggleFold()
    };
    var g = !1;
    a.toggleFold = function() {
        if (!g) {
            var b = $("#_chatContent"),
                d = b.css("right"),
                e = $("#_mainContentExpandRight");
            b.addClass("foldAnimRight");
            g = !0;
            if (d == "0px") {
                a.is_folded = !1;
                b.css("right", $("#_subContent").outerWidth() +
                    "px");
                var f = e.find(".icoFontTriangleLeft").addClass("rotate180");
                setTimeout(function() {
                    $.removeCookie("ui_fold_roomsub");
                    f.removeClass("rotate180 icoFontTriangleLeft").addClass("icoFontTriangleRight");
                    e.addClass("_showDescription");
                    b.removeClass("foldAnimRight");
                    CW.view.resizeLayout()
                }, 300)
            } else a.is_folded = !0, b.css("right", "0px"), f = e.find(".icoFontTriangleRight").addClass("rotate180"), setTimeout(function() {
                $.cookie("ui_fold_roomsub", "1", {
                    expires: 3650
                });
                f.removeClass("rotate180 icoFontTriangleRight").addClass("icoFontTriangleLeft");
                e.removeClass("_showDescription");
                b.removeClass("foldAnimRight");
                CW.view.resizeLayout()
            }, 300);
            setTimeout(function() {
                g = !1
            }, 200)
        }
    };
    a.resizeWidth = function(b) {
        if (b < TM.subcontent_min_width) b = TM.subcontent_min_width;
        var d = $C("#_subContent").width();
        if ($C("#_timeLine").width() < TM.timeline_min_width && d < b) return !1;
        $C("#_chatContent").css("right", b + "px");
        $C("#_subContent").width(b);
        $C("#_subContentArea").width(b);
        $.cookie("ui_subcontent_width", b, {
            expires: 3650
        });
        CW.view.resizeLayout();
        return a
    };
    var l = null;
    a.prepareGroupCall =
        function() {
            l = $("#_groupCallDialog").cwDialog({
                title: "ChatWork Live",
                width: "auto",
                height: "auto",
                open: function(a) {
                    this.data.room_id = a;
                    this.data.select_flag = {};
                    $C("#_videoChatContactFilter").cwSearchBox().setVal("");
                    var b = [],
                        a = RL.rooms[a],
                        d;
                    for (d in a.member_dat) d != AC.myid && b.push(d);
                    if (b.length > 0) {
                        a.sortMember(b);
                        $C("#_groupCallMember").quickEmpty();
                        for (var a = "", e = 0; e < b.length; e++) d = b[e], a += '<div class="_groupCallMember _cwSelectableRow groupCallMember" data-aid="' + d + '"><div class="groupCallAvatar">' +
                            $.cwCheckBox.create(!1, "", d, {
                                "data-theme": "green"
                            }) + CW.getAvatarPanel(d, {
                                size: "medium",
                                clicktip: !1
                            }) + "</div><p>" + CW.getName(d) + "</p></div>";
                        $C("#_groupCallMember").html(a)
                    } else $C("#_groupCallMember").html('<div class="groupcallNoMembers">' + L.live_member_not_found + "</div>")
                },
                postOpen: function() {
                    $C("#_videoChatContactFilter").focus()
                },
                buttonLabels: [L.live_video, L.live_voice, L.button_cancel],
                buttonSubmit: 0,
                buttonCancel: 2,
                buttonClick: function(a) {
                    switch (a) {
                        case 0:
                        case 1:
                            var b = [AC.myid],
                                d;
                            for (d in this.data.select_flag) b.push(d);
                            var e = "";
                            d = "";
                            a == 0 ? (e = "video", d = "start_live_video") : (e = "voice", d = "start_live_voice");
                            a = CW.getLiveUrl(this.data.room_id, b, e);
                            window.open(a, "cwlive", "menubar=0,toolbar=0,titlebar=0,status=0,scrollbars=0,resizable=1");
                            this.close();
                            CW.track.send(d)
                    }
                }
            });
            $("#_groupCallCheckAll").click(function() {
                $C("#_groupCallMember").find("._cwCBUnchecked").each(function() {
                    var a = $(this);
                    a.isVisible() && a.cwCheckBox().check()
                })
            });
            $("#_groupCallUnCheckAll").click(function() {
                $C("#_groupCallMember").find("._cwCBChecked").each(function() {
                    var a =
                        $(this);
                    a.isVisible() && a.cwCheckBox().unCheck()
                })
            });
            $C("#_groupCallMember").on("cwCheckBox_update", function(a, b, d) {
                b ? l.data.select_flag[d] = b : l.data.select_flag[d] && delete l.data.select_flag[d]
            });
            $("#_videoChatContactFilter").cwSearchBox({
                update: function() {
                    var a = l.data.select_flag,
                        b = [],
                        d = RL.rooms[l.data.room_id],
                        e = this.getVal(),
                        f = "",
                        g;
                    for (g in d.member_dat)
                        if (g != AC.myid) {
                            var i = AC.account_dat[g].nm.toLowerCase();
                            e && i.indexOf(e.toLowerCase()) === -1 || b.push(g)
                        }
                    $C("#_groupCallMember").quickEmpty();
                    if (b.length ===
                        0) f = '<div class="groupcallNoMembers">' + L.live_member_not_found + "</div>";
                    else {
                        d.sortMember(b);
                        for (d = 0; d < b.length; d++) g = b[d], f += '<div class="_groupCallMember _cwSelectableRow groupCallMember" data-aid="' + g + '"><div class="groupCallAvatar">' + $.cwCheckBox.create(!!a[g], "", g, {
                            "data-theme": "green"
                        }) + CW.getAvatarPanel(g, {
                            size: "medium",
                            clicktip: !1
                        }) + "</div><p>" + CW.getName(g) + "</p></div>"
                    }
                    $C("#_groupCallMember").html(f)
                }
            })
        };
    a.openGroupCall = function(b) {
        if (!RL.rooms[b]) return !1;
        l || a.prepareGroupCall();
        l.open(b)
    };
    a.openMemberDetailDialog = function(b) {
        $("#_memberDetailDialog").cwDialog({
            title: L.chatroom_member_detail,
            width: 600,
            autoOpen: !0,
            buttonLabels: [L.chatroom_edit_member, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(a) {
                switch (a) {
                    case 0:
                        RD.view.editRoomMember(b), this.close()
                }
            },
            open: function() {
                a.buildMember(b);
                $("#_memberDetailContent").html(k)
            }
        })
    };
    var k = "";
    a.buildMember = function(a) {
        var b = RL.rooms[a];
        if (!b) return this;
        for (var d = b.getSortedMemberList(), e = d.length, f = TM.member_preview_show_max,
                g = "", i = TM.member_detail_show_max, l = {
                    admin: "",
                    member: "",
                    readonly: "",
                    nocontact: "",
                    requested: ""
                }, v = {
                    admin: 0,
                    member: 0,
                    readonly: 0,
                    nocontact: 0,
                    requested: 0
                }, x = b.type, y = 0; y < e; y++) {
            var p = d[y],
                w = b.member_dat[p];
            v[w] < i && (l[w] += CW.getAvatarPanel(p, {
                size: "small"
            }));
            y < f && (g += '<li class="chatRoomMemberListItem" role="listitem" aria-label="' + AC.getName(p) + '">' + CW.getAvatarPanel(p) + "</li>");
            v[w] ++;
            x == "group" && !AC.isContact(p) && (AC.myrequest_dat[p] ? (v.requested < i && (l.requested += CW.getAvatarPanel(p, {
                    size: "small"
                })),
                v.requested++) : (v.nocontact < i && (l.nocontact += CW.getAvatarPanel(p, {
                size: "small"
            })), v.nocontact++))
        }
        e > f ? $("#_openMemberDetail").find(".chatRoomInfoBtnLabel").show().text(function() {
            var a = e - f,
                b = Math.min(a, 99);
            return b === a ? "+" + b : b + "+"
        }).end().find(".chatRoomInfoBtnIcon").hide().end() : $("#_openMemberDetail").find(".chatRoomInfoBtnLabel").hide().end().find(".chatRoomInfoBtnIcon").show().end();
        a = [{
            key: "admin",
            label: L.admin
        }, {
            key: "member",
            label: L.member
        }, {
            key: "readonly",
            label: L.readonly
        }, {
            key: "nocontact",
            label: L.chatroom_member_nocontact,
            boxClass: "noContact",
            after: '<div class="addAllContactBtnArea"><div id="_addNoContactMember" data-rid="' + a + '" class="button">' + L.chatroom_member_add_contact + "</div></div>"
        }, {
            key: "requested",
            label: L.contact_menu_myrequest,
            boxClass: "noContact"
        }];
        b = "";
        d = 0;
        for (y = a.length; d < y; d++)
            if (p = a[d], w = p.key, l[w]) {
                var q = "subContentMemberGroup";
                p.boxClass != void 0 && (q += " " + p.boxClass);
                b += '<div class="' + q + '">';
                p.label && (b += '<div class="subContentGroupInner"><div class="memberListLabel">' +
                    p.label + "\uff1a</div><div>" + l[w]);
                v[w] > i && (b += '<a class="_showMoreMember showMoreMember" data-role="' + w + '">' + L.chatroom_member_rest_number.replace(/%%rest_number%%/, number_format(v[w] - i)) + "</a>");
                p.label && (b += "</div></div>");
                p.after && (b += p.after);
                b += "</div>"
            }
        x === "contact" ? ($C("#_subRoomMemberNum").hide(), $C("#_subRoomMemberList").hide(), k = "") : ($C("#_subRoomMemberNum").show().text(" (" + number_format(e) + ")"), $C("#_subRoomMemberList").html(g).show(), k = b);
        return this
    };
    a.setTask = function(b, d, e, g, i) {
        b ?
            (a.expandTaskArea(!1), g ? f.setVal(f.getVal() + b) : f.setVal(b)) : f.setVal(b);
        i && f.focus();
        d && d.length > 0 && a.setTaskAssign(d);
        e && $C("#_limitButton").cwDatePicker().setVal(e);
        return this
    };
    a.expandTaskArea = function(a) {
        $C("#_taskAddArea").hasClass("taskContentAreaClose") && ($C("#_taskAddArea").removeClass("taskContentAreaClose"), a ? $C("#_taskAddMeta").slideDown("fast") : $C("#_taskAddMeta").show());
        return this
    };
    a.getTaskAssignList = function() {
        return e.getVal()
    };
    a.setTaskAssign = function(a) {
        e.setVal(a);
        return this
    };
    a.clearTaskAssign = function() {
        e.clear();
        return this
    };
    a.getTaskMemberList = function(a) {
        for (var a = RL.rooms[a].getSortedMemberList(), b = a.length, d = [], e = 0; e < b; e++) {
            var f = a[e],
                g = AC.getName(f);
            d.push({
                keys: AC.getSearchKeys(f),
                value: f,
                label: CW.getAvatarPanel(f, {
                    clicktip: !1,
                    size: "small"
                }) + '<p class="autotrim">' + escape_html(g) + "</p>"
            })
        }
        return d
    };
    a.showSetting = function() {
        $C("#_chatRoomSetting").show()
    };
    a.hideSetting = function() {
        $C("#_chatRoomSetting").hide()
    };
    var i = 0;
    a.resizeRoomInfo = function(a) {
        a && (i = a);
        var a =
            $C("#_subRoomDescription").outerHeight(),
            b = $C("#_subRoomInfoTitle").outerHeight(),
            b = i - TM.tasklist_min_height - b;
        if (a < b) $C("#_subRoomDescriptionWrapper").removeClass("subRoomDescriptionOverflow").css({
            height: ""
        }).data("is_overflow", !1);
        else {
            a = b;
            b = Math.max(TM.description_max_height, b);
            a > b && (a = b);
            if (a < TM.description_min_height) a = TM.description_min_height;
            $C("#_subRoomDescriptionWrapper").addClass("subRoomDescriptionOverflow").css({
                height: a
            }).data("is_overflow", !0)
        }
    }
}

function ChatSendView(b) {
    var a = this;
    a.model = b;
    var d = 0,
        e = $C("#_chatText"),
        f = $("#_fileSendStatusArea"),
        g = $("#_fileStatus"),
        l = $("#_chatSendArea"),
        k = $("#_chatTextArea"),
        i, h, j, o, m;
    a.prepare = function() {
        a.prepareSendArea();
        a.prepareTo();
        a.prepareEmoticonImage();
        a.prepareSendFile();
        $("#_emoticon").click(function() {
            t || a.prepareEmoticon();
            t.open($(this))
        });
        $("#_mainContentExpandLeft").click(function() {
            RL.view.toggleFold()
        });
        SERVICE_PLAN === "free" ? ($("#_mainContentExpandRight").hide(), $(".chatSendAreaContent").css("margin-right",
            "4px")) : $("#_mainContentExpandRight").click(function() {
            RS.view.toggleFold()
        });
        CW.view.registerKeyboardShortcut(37, !0, !1, !1, !1, function() {
            RL.view.toggleFold()
        }).registerKeyboardShortcut(37, !1, !1, !1, !0, function() {
            RL.view.toggleFold()
        }).registerKeyboardShortcut(39, !0, !1, !1, !1, function() {
            RS.view.toggleFold()
        }).registerKeyboardShortcut(39, !1, !1, !1, !0, function() {
            RS.view.toggleFold()
        }).registerKeyboardShortcut(77, !1, !1, !1, !1, function() {
            e.focus()
        });
        $C("#_editCancel").click(function() {
            a.clearChatEdit();
            a.setChatText("");
            e.blur()
        });
        a.prepareTimeLine()
    };
    var n = null;
    a.prepareTimeLine = function() {
        var b = $("#_timeLine,#_messageSearchResult,#_taskDetailTimeLine,#_replyMessageTip"),
            d = $C("#_timeLine"),
            f = $("#_messageSearchResult"),
            h = {
                reply: function(b) {
                    var d = RM.timeline.chat_id2chat_dat[b];
                    if (d) {
                        e.focus();
                        var f = ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(d.aid) : AC.getNickName(d.aid);
                        a.setChatText("[" + L.chatsend_reply + " aid=" + d.aid + " to=" + RM.id + "-" + b + "] " + f + "\n", !0)
                    }
                },
                edit: function(b) {
                    if (!RM.timeline.chat_id2chat_dat[b]) return CW.alert(L.chatsend_error_no_exist_for_edit), !1;
                    a.setChatEdit(b, RM);
                    b = e[0];
                    if (b.createTextRange) {
                        var d = b.createTextRange();
                        d.move("character", b.value.length);
                        d.select()
                    } else b.setSelectionRange && b.setSelectionRange(b.value.length, b.value.length)
                },
                task: function(a) {
                    var b = RM.timeline.chat_id2chat_dat[a];
                    b == void 0 && (b = SC.view.msg_dat[a]);
                    if (b) return b.rid != void 0 && RL.selectRoom(b.rid), RS.view.setTask("[" + L.chatsend_quote + " aid=" + b.aid + " time=" + b.tm + "]" + b.msg + "[/" + L.chatsend_quote + "]\n", null, null, !0, !0), $C("#_subContentArea").scrollTo($C("#_taskAddArea")), !1
                },
                unread: function(a) {
                    var b = RM;
                    CW.get("gateway.php", {
                        cmd: "read",
                        room_id: b.id,
                        last_chat_id: a,
                        unread: 1
                    }, function(a) {
                        if (b.id == RM.id) b.read_num = a.read_num, b.build({
                            readLock: !0
                        })
                    })
                },
                link: function(b) {
                    var d = this.findItemById(b).attr("data-rid");
                    RM.id != d && RL.selectRoom(d);
                    e.focus();
                    a.setChatText(CHATWORK_HOME + "/#!rid" + d + "-" + b, !0)
                },
                "delete": function(b) {
                    var d = 0,
                        e = !1;
                    if (match = RM.timeline.chat_id2chat_dat[b].msg.match(/^\[info\][\s\S]+\[download:([0-9]+)\][^\[]+\[\/download\]\[\/info\]$/)) {
                        if (d = match[1], !FL.file_id2file_dat[d] ||
                            FL.file_id2file_dat[d].st != "open") d = 0
                    } else(match = RM.timeline.chat_id2chat_dat[b].msg.match(/^\[info\].+\[task aid=[0-9,]+ st=open lt=[0-9]+\][\s\S]+\[\/task\]\[\/info\]$/)) && (e = !0);
                    if (d) {
                        var f = FL.file_id2file_dat[d];
                        $("#_plainDialogBody").html('<div class="deleteContent"><p class="deleteLabel">' + L.chatsend_delete_filetip + '</p><span class="deleteMeta">' + escape_html(f.fn) + "</span></div>");
                        $("#_plainDialog").cwDialog({
                            title: L.chatsend_confirm_delete_with_file,
                            width: 500,
                            height: "auto",
                            buttonLabels: [L.button_cancel,
                                L.chatsend_button_delete_with_file, L.chatsend_button_delete_message_only
                            ],
                            buttonDelete: [1, 2],
                            buttonCancel: 0,
                            buttonClick: function(e) {
                                switch (e) {
                                    case 1:
                                        FL.deleteFile(d);
                                        a.model.deleteChat(b);
                                        this.close();
                                        break;
                                    case 2:
                                        a.model.deleteChat(b), this.close()
                                }
                            }
                        }).open()
                    } else if (e) {
                        var h = [];
                        for (f in TK.task_id2task_dat) e = TK.task_id2task_dat[f], e.st != "deleted" && e.cid && e.cid == b && h.push(f);
                        var g = h.length;
                        if (g > 0) {
                            for (var j = "", i = 0; i < g; i++) f = h[i], e = TK.task_id2task_dat[f], j += TK.view.getTaskPanel(e, {
                                type: "preview"
                            });
                            $("#_plainDialogBody").html('<div class="deleteContent"><p class="deleteLabel">' + L.chatsend_delete_tasktip + '</p><pre><div class="deleteMeta">' + j + "</div></pre></div>");
                            f = $("#_plainDialog");
                            f.cwDialog({
                                title: L.chatsend_confirm_delete_with_task,
                                width: 500,
                                buttonLabels: [L.button_cancel, L.chatsend_button_delete_with_task, L.chatsend_button_delete_message_only],
                                buttonDelete: [1, 2],
                                buttonCancel: 0,
                                buttonClick: function(d) {
                                    switch (d) {
                                        case 1:
                                            TK.deleteTask(h);
                                            a.model.deleteChat(b);
                                            this.close();
                                            break;
                                        case 2:
                                            a.model.deleteChat(b),
                                                this.close()
                                    }
                                }
                            }).open();
                            f.scrollTop(0)
                        } else CW.view.confirmDelete(L.chatsend_confirm_delete, function() {
                            a.model.deleteChat(b)
                        })
                    } else CW.view.confirmDelete(L.chatsend_confirm_delete, function() {
                        a.model.deleteChat(b)
                    })
                },
                copy: function(a) {
                    var b = RM.timeline.chat_id2chat_dat[a];
                    b && $("#_textCopyDialog").cwDialog({
                        width: "auto",
                        height: 280,
                        title: L.chat_action_copy_title,
                        autoOpen: !0,
                        modal: !0,
                        open: function() {
                            var a = $("#_textCopyDialogText");
                            a.val(b.msg);
                            if ($.cwUI.hasFlash) {
                                $("#_copyMessage").quickEmpty();
                                $("#_textCopyButton").show();
                                var d = $("#_copyToClipBoard");
                                d.attr("data-clipboard-text", b.msg);
                                var e = new ZeroClipboard(d[0], {
                                    moviePath: "./javascript/ZeroClipboard.swf"
                                });
                                e.on("complete", function() {
                                    $("#_copyMessage").text(L.text_copied)
                                });
                                e.on("mouseover", function() {
                                    d.addClass("buttonHover")
                                });
                                e.on("mouseout", function() {
                                    d.removeClass("buttonHover")
                                });
                                e.on("mousedown", function() {
                                    d.addClass("buttonActive")
                                });
                                e.on("mouseup", function() {
                                    d.removeClass("buttonActive")
                                })
                            }
                            setTimeout(function() {
                                a[0].select()
                            })
                        }
                    })
                },
                move: function(a) {
                    var b =
                        this.findItemById(a).attr("data-rid");
                    b && a && RL.selectRoom(b, a)
                },
                quote: function(b) {
                    var d = RM.timeline.chat_id2chat_dat[b];
                    d == void 0 && (d = SC.view.msg_dat[b]);
                    d && (d.rid != void 0 && RL.selectRoom(d.rid), e.focus(), a.setChatText("[" + L.chatsend_quote + " aid=" + d.aid + " time=" + d.tm + "]" + d.msg + "[/" + L.chatsend_quote + "]\n", !0))
                }
            };
        n = d.cwActionBar({
            itemSelector: "._message",
            hoverSelector: "._chatTimeLineMessageBox",
            hoverClass: "chatTimeLineMessageHover",
            checkIgnoreItem: function(a) {
                if (a.attr("data-deleted") === "1") return !0
            },
            idKey: "data-mid",
            descriptionDelay: TM.messagetip_delay,
            open: function(b) {
                b = RM.timeline.chat_id2chat_dat[b];
                !b || b.id == a.model.chatedit_id ? (b = [], more_type_list = []) : b.aid != AC.myid ? (b = ["reply", "quote", "task", "link"], more_type_list = ["copy", "unread"]) : (b = ["quote", "task", "edit", "link"], more_type_list = ["copy", "unread", "delete"]);
                this.setActionList(b);
                this.setMoreActionList(more_type_list)
            }
        });
        for (var g = ["reply", "quote", "task", "edit", "link", "copy", "unread", "delete"], j = 0, i = g.length; j < i; j++) {
            var k = g[j],
                m = ucfirst(k);
            n.addAction(k, {
                label: L["chat_action_" + k],
                description: L["chat_action_" + k + "_desc"],
                iconClass: "icoFontAction" + m,
                click: function(a) {
                    return function() {
                        h[a].apply(this, arguments);
                        CW.track.send("timeline_actionbar_" + a)
                    }
                }(k)
            })
        }
        for (var o = f.cwActionBar({
                itemSelector: "._message",
                hoverSelector: "._chatTimeLineMessageBox",
                hoverClass: "chatTimeLineMessageHover",
                idKey: "data-mid",
                actionList: ["move", "quote", "task", "link"],
                descriptionDelay: TM.messagetip_delay
            }), g = ["quote", "task", "move", "link"], j = 0, i = g.length; j < i; j++)(function() {
            var a =
                g[j],
                b = ucfirst(a);
            o.addAction(a, {
                label: L["chat_action_" + a],
                description: L["chat_action_" + a + "_desc"],
                iconClass: "icoFontAction" + b,
                click: function() {
                    h[a].apply(this, arguments);
                    SC.view.closeMessageSearchWindow()
                }
            })
        })();
        var p = null;
        b.on("mouseover", "._timeStamp", function() {
            var a = $(this),
                b = a.attr("data-tm"),
                d = a.attr("data-utm"),
                e = a.attr("data-deleted");
            $.cwMessageTip.isInit(a[0]) || a.cwMessageTip({
                useHtml: !0,
                message: function() {
                    var a = L.chat_post_label + ": " + CW.getDate(b);
                    if (d) {
                        var f = L.chat_edit_label;
                        if (e ===
                            "1") f = L.chat_delete_label;
                        a += "<br />" + f + ": " + CW.getDate(d)
                    }
                    return a
                }
            }).open()
        }).on("click", "._showMore", function() {
            var a = $(this).closest("._task"),
                b = a.closest("._message"),
                d = b.attr("data-mid"),
                b = b.attr("data-rid");
            a.find("._taskBody").removeClass("taskBodyHide");
            a.find("._showMore").hide();
            RL.rooms[b].timeline.view.task_showmore_flag[d] = !0
        }).on("click", "._replyMessage", function() {
            var a = $(this);
            if (a.closest("#_replyMessageTip").length !== 0) {
                var b = s.tipFrom,
                    d = b.attr("data-rid"),
                    e = b.attr("data-mid");
                RL.selectRoom(d, e, {
                    highlight: !1,
                    smoothScroll: !0,
                    messageHashUpdate: !1,
                    jumpToCallback: function() {
                        $("#_messageId" + e).find("._replyMessage[data-mid=" + a.attr("data-mid") + "]").click()
                    }
                });
                s.close();
                return !1
            }
            s.open(a)
        }).on("mouseup", "._message", function(b) {
            var d = $(this),
                e = trim(a.getTextSelection());
            if (e && (d = parseInt(d.attr("data-mid"), 10), d = RM.timeline.chat_id2chat_dat[d], d != void 0)) {
                w = "[" + L.chatsend_quote + " aid=" + d.aid + " time=" + d.tm + "]" + e + "[/" + L.chatsend_quote + "]\n";
                var f = $C("#_quoteTip").cwToolTip();
                f.isOpen() ?
                    ($.cwFloatBox.skip(), setTimeout(function() {
                        trim(a.getTextSelection()) || f.close()
                    })) : f.open({
                        x: b.clientX,
                        y: b.clientY - 7
                    })
            }
        }).on("click", "._moveArrow", function() {
            var a = $(this).closest("._message"),
                b = a.attr("data-rid");
            RL.rooms[b].timeline.view.clearHighlight(a)
        }).on("mouseup", "._speakerName", function() {
            $(this).closest("._message").find("._speaker ._avatarClickTip").triggerHandler("click");
            return !1
        }).on("click", "._showMoreMemberTask", function() {
            p || (p = $("#_showMoreAssignMemberTip").cwListTip({
                search: !0,
                useHtmlLabel: !0,
                multiSelect: !1,
                selectable: !1,
                list: function() {
                    for (var a = this.data.link.attr("data-aid-list").split(","), b = [], d = a.length, e = 0; e < d; e++) {
                        var f = a[e],
                            h = AC.getName(f);
                        b.push({
                            keys: AC.getSearchKeys(f),
                            value: f,
                            label: CW.getAvatarPanel(f, {
                                clicktip: !1,
                                size: "small"
                            }) + '<p class="autotrim">' + escape_html(h) + "</p>"
                        })
                    }
                    return b
                },
                select: function(a) {
                    AC.view.openProfileWindow(a);
                    this.close()
                }
            }));
            var a = $(this);
            p.data.link = a;
            p.open(a)
        });
        $C("#_wrapper").on("click", "._messageLink", function() {
            var a = $(this);
            s.open(a)
        });
        d.scroll(function() {
            RM.timeline && (d.scrollTop() < 10 && (RM.timeline.has_old ? RM.timeline.loadOld() : RM.timeline.build({
                everScroll: !0
            })), RM.timeline.view.has_new && $("#_messageIdEnd").offset().top < l.offset().top + 50 && RM.timeline.build({
                everScroll: !0
            }))
        }).on("click", "._editCancel", function() {
            $C("#_editCancel").click()
        }).on("mouseup", "._avatarHoverTip", function() {
            return !1
        }).on("mouseup", "._messageActionNav", function() {
            return !1
        });
        var t = 0,
            u = 0,
            q = function(a, b) {
                u = t = 0;
                var d = a.attr("data-mid"),
                    e = a.attr("data-rid"),
                    f = null;
                if (e = RL.rooms[e]) e.prepareBuild(), f = e.timeline.chat_id2chat_dat[d];
                $C("#_replyMessageButtonArea").hide();
                f ? (t = e.id, u = f.id, d = e.timeline.view.getMessagePanel(f, {
                    idPrefix: "replyTip"
                }), $C("#_replyMessageTipContent").html(d), d = '<div class="tooltipFooter"><div class="_replyMoveButton _roomLink button" data-rid="' + t + '" data-mid="' + u + '">' + L.jump_to_message + "</div></div>", $C("#_replyMessageButtonArea").html(d).show()) : e ? b ? $C("#_replyMessageTipContent").html(L.chat_error_not_found) : (e.load({
                    jumpTo: d,
                    autoBuild: !1
                }, function() {
                    q(a, !0);
                    s.move(a)
                }), $C("#_replyMessageTipContent").html('<div class="contentLoading"><img src="./imagenew/all/common/loader/img_loader_white.gif" />' + L.chat_loading + "</div>")) : $C("#_replyMessageTipContent").html(L.chat_error_not_found)
            },
            s = $("#_replyMessageTip").cwToolTip({
                width: 400,
                open: function(a) {
                    q(a)
                },
                postOpen: function() {
                    $C("#_replyMessageTipContent").scrollTop(0)
                },
                close: function() {
                    u = t = 0
                }
            });
        s.$el.on("click", "._messageLink", function() {
            s.close();
            var a = $(this),
                b = s.tipFrom,
                d = b.attr("data-rid"),
                e = b.attr("data-mid");
            RL.selectRoom(d, e, {
                highlight: !1,
                smoothScroll: !0,
                messageHashUpdate: !1,
                jumpToCallback: function() {
                    $("#_messageId" + e).find("._messageLink[data-mid=" + a.attr("data-mid") + "]").click()
                }
            })
        }).on("click", "._replyMoveButton", function() {
            s.close()
        });
        var w = "";
        $("#_quotePartlyToMessage").click(function() {
            $C("#_quoteTip").cwToolTip().close();
            a.setChatText(w, !0);
            e.focus()
        });
        $("#_quotePartlyToTask").click(function() {
            $C("#_quoteTip").cwToolTip().close();
            RS.view.setTask(w, null,
                null, !0, !0)
        })
    };
    a.prepareSendArea = function() {
        $("#_sendEnterAction").cwCheckBox({
            update: function() {
                var a = !1;
                if (this.isChecked()) {
                    if (ST.data.enter_action == "br") a = !0, ST.data.enter_action = "send"
                } else if (ST.data.enter_action == "send") a = !0, ST.data.enter_action = "br";
                a && (ST.data.enter_action == "send" ? this.check() : this.unCheck(), e.triggerHandler("explain_update"), CW.post("gateway.php", {
                    cmd: "send_chat_setting",
                    data: {
                        enter_action: ST.data.enter_action
                    }
                }))
            }
        });
        $("#_sendEnterActionArea").click(function() {
            $("#_sendEnterAction").cwCheckBox().toggle();
            $(this).cwMessageTip().refresh();
            return !1
        }).cwMessageTip({
            closeOnClick: !1,
            message: function() {
                var a = L.chatsend_enter_action_explain + ": ";
                a += $("#_sendEnterAction").cwCheckBox().isChecked() ? L.on : L.off;
                return a
            }
        });
        e.val("");
        a.model.chatedit_id = 0;
        $C("#_sendButton").click(function() {
            a.sendMessage()
        }).keydown(function(b) {
            if (b.keyCode != 9) return b.keyCode == 13 && a.sendMessage(), !1
        });
        e.change(function() {
            a.resizeChatArea()
        }).keydown(function(b) {
            a.chatTextKeyDown(b);
            a.resizeChatArea()
        }).keyup(function(b) {
            _is_msie &&
                get_caret_position_ie(this);
            a.chatTextKeyUp(b);
            a.resizeChatArea()
        }).focus(function() {
            a.expandChatArea(!0)
        }).blur(function() {
            a.expandChatArea(!1)
        }).bind("explain_update", function() {
            if (RM && RM.view.disabled_send) e.attr("placeholder", "");
            else {
                var a = L.chatsend_chat_explain;
                a += ST.data.enter_action == "send" ? L.chatsend_enter_action_explain_enter : L.chatsend_enter_action_explain_enter_send;
                e.attr("placeholder", a)
            }
        }).on("paste", function() {
            setTimeout(function() {
                e.change()
            })
        }).blur();
        _is_msie && e.click(function() {
            get_caret_position_ie(this)
        })
    };
    a.getTextSelection = function() {
        function a(b) {
            return $(b).contents().map(function() {
                if (this.nodeType === 3) return this.nodeValue;
                if (this.nodeType === 1 && this.nodeName.toLocaleLowerCase() === "img") return this.getAttribute("alt");
                return a(this)
            }).get()
        }
        try {
            var b = window.getSelection().getRangeAt(0).toString(),
                d = window.getSelection().getRangeAt(0).cloneContents(),
                b = a(d).join("")
        } catch (e) {
            b = ""
        }
        return b
    };
    a.getSendType = function() {
        return "chat"
    };
    a.prepareEmoticonImage = function() {
        for (var a = "", b = 0; b < CW.emoticon.length; b++) {
            var d =
                CW.emoticon[b];
            a += '<li><img src="image/emoticon/' + d.src + '" title="' + d.title + '" alt="' + d.key + '"/></li>'
        }
        $("#_emoticonGallery").html(a)
    };
    var t = null;
    a.prepareEmoticon = function() {
        var b = "",
            b = _is_mac ? L.chatsend_shift_and_command_hint : L.chatsend_shift_and_ctrl_hint;
        t = $("#_emoticonList").cwToolTip({
            open: function() {
                $C("#_emoticonDescription").text(b)
            }
        });
        $C("#_emoticonList").on("mouseenter", "li", function() {
            var a = $(this).find("img");
            $C("#_emoticonDescription").text(a.attr("title") + " " + a.attr("alt"))
        }).on("mouseleave",
            "li",
            function() {
                $C("#_emoticonDescription").text(b)
            }).on("click", "li", function() {
            CW.view.key.ctrl || CW.view.key.command ? (t.close(), a.sendMessage($(this).find("img").prop("alt"), !0)) : (e.focus(), a.setChatText($(this).find("img").prop("alt"), !0), CW.view.key.shift || t.close())
        })
    };
    a.prepareTo = function() {
        var b = $("#_toList").cwListTip({
            fixHeight: !0,
            search: !0,
            multiSelect: !1,
            selectOptionArea: '<span id="_toListSelectAll" class="linkStatus">' + L.selectall_full + "</span>",
            useHtmlLabel: !0,
            selectable: !1,
            placeHolder: L.chatroom_search_member,
            list: function() {
                if (!RM) return [];
                var a = RM.getSortedMemberList(),
                    b = [],
                    d = a.length;
                this.data.aid2name = {};
                for (var e = 0; e < d; e++) {
                    var f = a[e];
                    if (f != AC.myid) {
                        var h = CW.is_business && ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(f) : AC.getNickName(f);
                        this.data.aid2name[f] = h;
                        b.push({
                            keys: AC.getSearchKeys(f),
                            value: f,
                            label: CW.getAvatarPanel(f, {
                                clicktip: !1,
                                size: "small"
                            }) + '<p class="autotrim">' + escape_html(h) + "</p>"
                        })
                    }
                }
                return b
            },
            select: function(b) {
                a.setChatText("[To:" + b + "] " + this.data.aid2name[b] +
                    "\n", !0);
                CW.view.key.shift || CW.view.key.ctrl ? this.searchbox.$el.focus() : (this.close(), e.focus())
            }
        });
        $("#_to").click(function() {
            b.open($(this))
        });
        $("#_toListSelectAll").click(function() {
            for (var d = b.getList(), f = "", h = 0, g = d.length; h < g; h++) {
                var j = d[h].value;
                f += "[To:" + j + "] " + b.data.aid2name[j] + "\n"
            }
            a.setChatText(f, !0);
            b.close();
            e.focus()
        });
        b.ul.on("mouseenter", "li", function() {
            $C("#_nickNameSetting").hide();
            $C("#_toListHint").show()
        }).on("mouseleave", "li", function() {
            $C("#_nickNameSetting").show();
            $C("#_toListHint").hide()
        });
        $("#_nickNameSetting").click(function() {
            a.openSettingNickname(RM.id);
            $("#_toList").cwListTip().close()
        })
    };
    a.prepareSendFile = function() {
        var b = !1;
        if (_has_fileapi) {
            $("#_file").click(function() {
                $C("#_fileUploadTip").show();
                $C("#_fileInput").click()
            });
            var e = !1,
                f = !0,
                h = null,
                j = $("#_fileDrop").cwToolTip({
                    open: function() {
                        f = !1;
                        $C("#_dragZone").show();
                        $C("#_dropZone").css("background-color", "#fff")
                    },
                    close: function() {
                        $C("#_dragZone").hide();
                        f = !0
                    }
                });
            $(document.body).on("dragstart", function() {
                e = !0
            }).on("dragover",
                function(a) {
                    a.stopPropagation();
                    a.preventDefault();
                    a.originalEvent.dataTransfer.dropEffect = "none"
                }).on("dragenter", function() {
                if (e) return !1;
                if (!$C("#_file").isVisible()) return !1;
                h || (h = setTimeout(function() {
                    f && j.open($("#_file"));
                    h = null
                }));
                return !1
            }).on("dragend", function() {
                e = !1
            });
            $C("#_dragZone").on("dragleave", function() {
                if (e) return !1;
                h || (body_enter = enter_count = 0, j.close());
                return !1
            }).on("drop", function(a) {
                a.stopPropagation();
                a.preventDefault();
                return !1
            });
            $C("#_dropZone").on("dragover", function() {
                if (e) return !1;
                $C("#_dropZone").css("background-color", "#E9F4F5");
                return !1
            }).on("dragleave", function() {
                if (e) return !1;
                $C("#_dropZone").css("background-color", "#fff");
                return !1
            }).on("dragover", function(a) {
                a.stopPropagation();
                a.preventDefault();
                a.originalEvent.dataTransfer.dropEffect = "copy"
            }).on("drop", function(b) {
                b.stopPropagation();
                b.preventDefault();
                if (e) return alert("dragging!"), !1;
                a.sendFiles(RM.id, b.originalEvent.dataTransfer.files);
                setTimeout(function() {
                    body_enter = enter_count = 0;
                    j.close();
                    f = !0
                });
                return !1
            })
        } else {
            var i =
                $("#_fileUploadTip").cwToolTip();
            $C("#_file").click(function() {
                i.open($(this))
            });
            CW.view.onIframeReady(function() {
                $("#_fileFrame").on("load", function() {
                    try {
                        var a = unescape_html($(this).contents().find("body").html());
                        if (a.length > 0) {
                            var a = a.match(/\{.+\}/)[0],
                                e = $.parseJSON(a);
                            e.result.is_storage_limit != void 0 ? CW.showStorageLimitDialog("file") : !e.status.success && e.status.message ? CW.alert(e.status.message) : e.status.success == !0 && (FL.updateStorageInfo(e.result.storage, e.result.storage_limit, e.result.limit_time,
                                e.result.is_limit), CW.watch())
                        } else throw "error";
                    } catch (f) {
                        if (b)
                            if (d++, d > 1) a = L.upload_cancel_send_message.replace(/%%size%%/g, bytename(FL.storage.available)), e = "", CW.plan == "free" ? (a += L.storage_cancel_send_object_suffix_upgrade, e = L.storage_cancel_upgrade_label) : CW.is_business && !CW.is_admin ? (a += L.storage_cancel_send_object_suffix_tell_admin, $("#cw_upload_error_button").hide()) : (a += L.storage_cancel_send_object_suffix_add_storage, e = L.storage_cancel_add_storage_label), $("#cw_upload_error_body").html(a),
                                $("#cw_upload_error_link").val(e), $("#cw_upload_error_dialog").dialog("open");
                            else {
                                setTimeout(function() {
                                    $C("#_fileInput").trigger("change")
                                }, 1E3);
                                return
                            }
                    }
                    b && $(this).prop("src", "");
                    l()
                })
            })
        }
        $C("#_fileInput").change(function() {
            var d = [];
            if (_has_fileapi) d = this.files;
            else {
                if (b) return;
                d = [{
                    name: this.value.replace(/\\/g, "/").replace(/.*\//, ""),
                    size: 0
                }]
            }
            _has_fileapi || i.close();
            b = !0;
            a.sendFiles(RM.id, d)
        });
        var l = function() {
            _has_fileapi || (g.stop().fadeOut(function() {
                $C("#_file").stop().fadeIn()
            }), $C("#_fileHiddenForm")[0].reset());
            file_send_rid = d = 0;
            b = !1
        };
        $("#cw_upload_error_dialog").dialog({
            width: 600,
            height: "auto",
            title: L.storage_cancel_send_cancel.replace(/%%object%%/, L.file),
            autoOpen: !1,
            modal: !0,
            hide: "fade",
            resizable: !1,
            buttons: [DIALOG_CLOSE_BUTTON]
        });
        $("#cw_upload_error_link").click(function() {
            $("#cw_upload_error_dialog").dialog("close");
            CW.plan == "free" ? CW.view.showServiceAdmin("upgrade") : CW.view.showOptionPlanPrice()
        })
    };
    a.testShowSendFiles = function(a, b, d) {
        var a = {
                name: a,
                size: b
            },
            e = $('<li><p class="fileSendStatusMeta autotrim">' +
                escape_html(a.name) + " (" + bytename(a.size) + ')</p><div class="fileSendStatusBarArea"><div class="_fileSendStatusBarProgress fileSendStatusBar fileSendStatusBarProgress"></div></div><p class="_fileSendProgress fileSendProgress">0%</p><span class="_fileSendCancel icoFontCancel icFileSendCancel"></span><span class="icoTextHide">' + L.button_cancel + "</span></li>");
        f.append(e).show();
        e.find("._fileSendProgress").text(d + "%");
        e.find("._fileSendStatusBarProgress").css("width", d + "%");
        CS.view.resizeChatArea(!0);
        e.find("._fileSendCancel").click(function() {
            e.fadeOut("fast", function() {
                e.remove();
                CS.view.resizeChatArea(!0)
            })
        })
    };
    a.sendFiles = function(a, b) {
        for (var d = ["ade", "adp", "bat", "chm", "cmd", "com", "cpl", "exe", "hta", "ins", "isp", "jse", "lib", "mde", "msc", "msp", "mst", "pif", "scr", "sct", "shb", "sys", "vb", "vbe", "vbs", "vxd", "wsc", "wsf", "wsh"], e = 0; e < b.length; e++) {
            var h = b[e],
                j = "",
                i = h.name.match(/\.([^\.]+)$/);
            i && (j = i[1].toLowerCase());
            if (h.size >= 5368709120) {
                CW.alert(L.error_upload_over_max_filesize.replace(/%%max_size%%/g,
                    bytename(5368709120)).replace(/%%size%%/g, bytename(h.size)));
                reset_send_file();
                return
            } else if (in_array(j, d)) {
                CW.alert(L.error_upload_executable);
                reset_send_file();
                return
            }
        }
        d = [];
        for (e = 0; e < b.length; e++) h = b[e], d.push({
            key: e,
            name: h.name,
            size: h.size
        });
        CW.post("gateway.php", {
                cmd: "get_s3_post_object",
                room_id: a,
                list: d,
                noredirect: _has_fileapi,
                region: "tokyo"
            }, function(a) {
                for (var d = 0, e = a.upload_info.length; d < e; d++) {
                    var h = a.upload_info[d];
                    if (_has_fileapi) {
                        var j = new FormData;
                        j.append("key", h.uri);
                        j.append("AWSAccessKeyId",
                            h.accesskey);
                        j.append("acl", h.acl);
                        j.append("policy", h.policy);
                        j.append("signature", h.signature);
                        j.append("Content-Type", "application/octet-stream");
                        j.append("Content-Disposition", h.disposition);
                        j.append("x-amz-server-side-encryption", "AES256");
                        h.auth_token && j.append("x-amz-security-token", h.auth_token);
                        j.append("file", b[h.key]);
                        (function(a, b) {
                            var d = !1,
                                e = $.ajax({
                                    url: S3_PATH,
                                    type: "POST",
                                    data: j,
                                    processData: !1,
                                    contentType: !1,
                                    xhr: function() {
                                        var a = new window.XMLHttpRequest;
                                        a.upload.addEventListener("progress",
                                            function(a) {
                                                a.lengthComputable && (a = parseInt(a.loaded / a.total * 100, 10), h.find("._fileSendProgress").text(a + "%"), h.find("._fileSendStatusBarProgress").css("width", a + "%"))
                                            });
                                        return a
                                    },
                                    success: function() {
                                        h.find("._fileSendProgress").text("100%");
                                        h.find("._fileSendStatusBarProgress").css("width", "100%");
                                        CW.get(b.redirect, {}, function() {
                                            h.fadeOut("fast", function() {
                                                h.remove();
                                                CS.view.resizeChatArea(!0)
                                            })
                                        }, function() {
                                            CW.view.alert(L.error_upload + L._chatwork_path_help_file_upload_error, "", !0);
                                            h.remove();
                                            CS.view.resizeChatArea(!0)
                                        })
                                    },
                                    error: function() {
                                        d || CW.view.alert(L.error_upload + L._chatwork_path_help_file_upload_error, "", !0);
                                        h.remove();
                                        CS.view.resizeChatArea(!0)
                                    }
                                }),
                                h = $('<li><p class="fileSendStatusMeta autotrim">' + escape_html(a.name) + " (" + bytename(a.size) + ')</p><div class="fileSendStatusBarArea"><div class="_fileSendStatusBarProgress fileSendStatusBar fileSendStatusBarProgress"></div></div><p class="_fileSendProgress fileSendProgress">0%</p><span class="_fileSendCancel icoFontCancel icFileSendCancel"></span><span class="icoTextHide">' +
                                    L.button_cancel + "</span></li>");
                            f.append(h).show();
                            g.fadeIn();
                            h.slideDown("fast", function() {
                                CS.view.resizeChatArea(!0)
                            });
                            h.find("._fileSendCancel").click(function() {
                                d = !0;
                                e.abort()
                            })
                        })(b[h.key], h)
                    } else {
                        $C("#_file").stop().fadeOut(function() {
                            g.stop().fadeIn()
                        });
                        var i = '<input type="hidden" name="key" value="' + h.uri + '"/><input type="hidden" name="AWSAccessKeyId" value="' + h.accesskey + '"/><input type="hidden" name="acl" value="' + h.acl + '"/><input type="hidden" name="success_action_redirect" value="' + h.redirect +
                            '"/><input type="hidden" name="policy" value="' + h.policy + '"/><input type="hidden" name="signature" value="' + h.signature + '"/><input type="hidden" name="Content-Type" value="application/octet-stream"/><input type="hidden" name="Content-Disposition" value="' + escape_html(h.disposition) + '"/><input type="hidden" name="x-amz-server-side-encryption" value="AES256"/>';
                        h.auth_token && (i += '<input type="hidden" name="x-amz-security-token" value="' + h.auth_token + '"/>');
                        $("#_fileHiddenValue").html(i);
                        $("#_fileHiddenForm").submit()
                    }
                }
            },
            function(a) {
                in_array("is_storage_limit", a) ? CW.showStorageLimitDialog("file") : $.isArray(a) ? CW.alert(L.error_upload + " " + a.join("\n")) : CW.alert(L.error_upload)
            })
    };
    a.initChatText = function() {
        e.val("");
        a.expandChatArea(!1);
        CS.clearChatEdit();
        e.blur();
        RS.view.initTaskArea()
    };
    a.sendMessage = function(b, d) {
        if (RM.id) {
            if (!RM.view.disabled_send && (b == void 0 && (b = e.val()), b = rtrim(b), b.length != 0)) {
                room_id = RM.id;
                e.focus();
                if (!d) {
                    var f = a.model.chatedit_id;
                    a.clearChatEdit(f);
                    a.setChatText("");
                    CS.deleteChatDraft(RM.id)
                }
                var b =
                    CS.convertToSend(b),
                    h = RM,
                    g = 0;
                f || (g = h.addSendingChat(b));
                a.model.sendMessage(room_id, b, {
                    read: 1,
                    edit_id: f
                }, function() {
                    g && h.deleteSendingChat(g);
                    h.id == RM.id && !f && h.build()
                }, function(d) {
                    g && h.deleteSendingChat(g);
                    d ? CW.alert(d) : CW.alert(L.chatsend_error_send);
                    RL.selectRoom(h.id);
                    a.setChatText(b)
                })
            }
        } else CW.alert(L.error_no_select)
    };
    a.chatTextKeyDown = function(b) {
        i = typeof b.modifiers == "undefined" ? b.ctrlKey : b.modifiers & Event.CONTROL_MASK;
        h = typeof b.modifiers == "undefined" ? b.shiftKey : b.modifiers & Event.SHIFT_MASK;
        j = typeof b.modifiers == "undefined" ? b.altKey : b.modifiers & Event.ALT_MASK;
        o = typeof b.modifiers == "undefined" ? b.metaKey : b.modifiers & Event.META_MASK;
        press_key = b.keyCode;
        if (press_key == 38) {
            var d = RM.timeline.getLastChatId();
            e.val() == "" && RM.timeline.chat_id2chat_dat[d].aid == AC.myid && a.setChatEdit(d, RM)
        } else press_key == 27 && a.clearChatEdit();
        if (ST.data.enter_action == "send") {
            if (press_key == 13)
                if (!h && !i && !j && !o) return b.preventDefault(), !1;
                else if (o) return a.chatTextKeyUp({
                keyCode: 13
            }), b.preventDefault(), !1
        } else if (press_key ==
            13 && (i || h || j || o)) return o && a.chatTextKeyUp({
            keyCode: 13
        }), b.preventDefault(), !1;
        RM && a.raiseRoomToTop(RM.id)
    };
    a.chatTextKeyUp = function(b) {
        up_key = b.keyCode;
        if (up_key == 13 && press_key == 13)
            if (ST.data.enter_action == "send") !h && !i && !j && !o ? a.sendMessage() : (i || j || o) && e.insertAtCaretForMessage("\n");
            else if (i || h || j || o) return a.sendMessage(), !1;
        e.val() == "" && CS.clearChatEdit();
        press_key == 27 && up_key == 27 && e.blur()
    };
    var u = 0;
    a.expandChatArea = function(b) {
        RM && RM.id != u && (u = !RM.view.disabled_send && b ? RM.id : 0, a.resizeChatArea(!0))
    };
    var s = TM.timeline_min_height,
        v = TM.chattext_min_content_height,
        x = TM.chatSendArea_expandto_height_default,
        y = TM.chatSendArea_initial_height;
    $("#_chatSendToolbar").outerHeight();
    var b = e.height(),
        p = k.innerHeight() - b,
        w = $("#_roomTitle").outerHeight(!0);
    l.outerHeight(!0);
    l.height();
    e.innerWidth();
    e.width();
    var q = 0;
    a.resizeChatArea = function(a) {
        f.isVisible() && f.find("li").length == 0 && (f.hide(), g.fadeOut(), $C("#_fileInput").val(""));
        var b = l.height(),
            d = e.height(),
            h = k.scrollTop();
        e.height(0);
        var j = e[0].scrollHeight;
        j < v && (j = v);
        if (!a && q == j) e.height(d), h != 0 && k.scrollTop(h);
        else {
            var i = f.outerHeight(),
                m = $C("#_chatSendToolbar").outerHeight(),
                n = j + p + m + i,
                o = 0,
                o = u ? x + i : y + i;
            n < o && (n = o);
            o = $C("#_mainContent").height();
            o - n < s ? k.css({
                height: o - s - p - m - i,
                "overflow-y": "scroll"
            }) : k.css({
                height: "",
                "overflow-y": "hidden"
            });
            a || b != n ? (e.height(n - m - i - p), a = l.outerHeight(), a = o - w - a, b = $C("#_timeLine"), d = b.height(), i = b.scrollTop(), b.height(a), b.scrollTop(i + (d - a))) : e.height(d);
            q < j ? k.scrollTop(h + 30) : k.scrollTop(h);
            q = j
        }
    };
    a.disableChatArea = function() {
        $C("#_chatSendTool").hide();
        $C("#_sendEnterActionArea").hide();
        $C("#_editCancel").click();
        $C("#_sendButton").cwButton().disable();
        e.attr("placeholder", L.chatsend_not_allow_send_messages)
    };
    a.enableChatArea = function() {
        $C("#_chatSendTool").show();
        $C("#_sendEnterActionArea").show();
        $C("#_sendButton").cwButton().enable();
        e.trigger("explain_update")
    };
    a.setChatText = function(b, d) {
        a.expandChatArea(!0);
        RM && d && a.raiseRoomToTop(RM.id);
        b = CS.convertToEdit(b);
        d ? e.insertAtCaretForMessage(b) : e.val(b);
        a.resizeChatArea(!0);
        e.scrollTop(1E8);
        if (d) {
            l.height(l.height());
            var f = e.css("height");
            e.css("height", parseInt(f, 10) + 1);
            setTimeout(function() {
                e.css("height", f);
                l.css("height", "")
            }, 500)
        }
    };
    a.setChatEdit = function(b, d) {
        if (a.model.chatedit_id != b) {
            a.model.chatedit_id = b;
            a.setChatEditColor(b);
            if (!d) return !1;
            if (d.timeline.chat_id2chat_dat[b]) {
                var f = (CS.getChatDraft(d.id) || {}).text;
                a.setChatText(f || d.timeline.chat_id2chat_dat[b].msg)
            }
            e.focus()
        }
        RM.timeline.build()
    };
    a.setChatEditColor = function() {
        $C("#_editInfo").show();
        $C("#_externalInfo").hide();
        $C("#_sendButton").cwButton({
            text: L.button_save
        });
        k.addClass("chatSendTextareaEdit")
    };
    a.clearChatEdit = function(b) {
        if (a.model.chatedit_id) $C("#_editInfo").hide(), a.setChatText(""), k.data("external") === !0 && $C("#_externalInfo").show(), k.removeClass("chatSendTextareaEdit"), $C("#_sendButton").cwButton({
            text: L.button_send
        }), a.model.chatedit_id = 0, b || RM.timeline.build()
    };
    a.raiseRoomToTop = function(a) {
        e.val() == "" && (RL.setLastUpdateTime(a, time()), RL.build(), $C("#_roomListArea").scrollTop(0))
    };
    a.prepareSettingNickname = function() {
        m = $("#_nicknameDialog").cwDialog({
            title: L.nickname_title,
            width: 520,
            autoOpen: !1,
            hide: "fade",
            buttonLabels: [L.button_save_long, L.button_cancel],
            buttonSubmit: 0,
            buttonCancel: 1,
            buttonClick: function(a) {
                if (a === 0) {
                    var b = !1,
                        d = {};
                    $("#_nicknameList").find("input").each(function() {
                        var a = $(this).val(),
                            e = this.id.substr(9);
                        AC.getNickName(e, !0) != a && (d[e] = a, b = !0)
                    });
                    b && CW.post("gateway.php", {
                        cmd: "send_nickname",
                        n: d
                    }, function(a) {
                        for (var b in a.nickname_dat) AC.setNickName(b, a.nickname_dat[b])
                    });
                    this.close()
                }
            },
            open: function(a) {
                var b = "",
                    d = 0,
                    e = [],
                    d = RL.rooms[a].member_dat,
                    f;
                for (f in d) f !=
                    AC.myid && e.push(f);
                e.sort(function(a, b) {
                    if (a == AC.myid) return -1;
                    if (b == AC.myid) return 1;
                    return AC.getMentionNum(b) - AC.getMentionNum(a)
                });
                d = 0;
                for (a = e.length; d < a; d++) f = e[d], b += "<tr><td>" + CW.getAvatarPanel(f, {
                    size: "medium",
                    clicktip: !1,
                    hovertip: !1
                }) + '</td><td class="name"><span class="autotrim">' + CW.getName(f) + '</span></td><td class="nickname"><input type="text" id="_nickname' + f + '" value="' + escape_html(AC.getNickName(f, !0)) + '"/></td></tr>';
                $("#_nicknameList").html(b).scrollTop(0)
            }
        })
    };
    a.openSettingNickname =
        function(b) {
            m || a.prepareSettingNickname();
            m.open(b)
        }
}

function SearchView(b) {
        var a = this;
        a.model = b;
        a.msg_dat = [];
        a.ms_result_timeline_list = [];
        a.ms_result_byroom_dat = {};
        a.ms_result_byroom_idx_list = [];
        a.ms_result_byuser_dat = {};
        a.ms_result_byuser_idx_list = [];
        a.ms_result_type = "timeline";
        a.ms_result_timeline_order = "new";
        a.ms_result_not_found = !1;
        a.trial = !1;
        a.trial_search_num = TRIAL_SEARCH_NUM;
        a.search_type = "chat";
        var d = null;
        a.prepare = function() {
            a.prepareGlobalSearch();
            SERVICE_PLAN === "free" ? $("#_messageSearch").click(function() {
                a.openTrialDescription($C("#_search").val())
            }) : $("#_messageSearch").click(function() {
                a.openMessageSearchWindow();
                a.executeSearchMessage($C("#_search").val());
                l || $C("#_messageSearchQuery").focus().caretPos("last")
            })
        };
        var e = 0;
        a.prepareGlobalSearch = function() {
            CW.view.registerKeyboardShortcut(70, !1, !1, !1, !1, function() {
                $C("#_search").focus()
            });
            var b = $("#_searchResult"),
                d = !1,
                f = $("#_search").cwSearchBox({
                    update: function() {
                        l()
                    }
                });
            $C("#_search").keydown(function(a) {
                var b = !0;
                switch (a.keyCode) {
                    case 13:
                        b = !1;
                        e > 0 ? (a = $C("#_searchResultChatList").find("._room"), $(a[e - 1]).click()) : $C("#_messageSearch").click();
                        break;
                    case 38:
                        a =
                            $C("#_searchResultChatList").find("._room");
                        if (a.length == 0) e = 0;
                        else if (a.removeClass("searchResultChatListFocus"), e--, e < 0 && (e = 0), e > 0) {
                            a = $(a[e - 1]);
                            a.addClass("searchResultChatListFocus");
                            var d = $("#_searchResultChatList").offset().top;
                            a.offset().top < d && $C("#_searchResultChatList").scrollTo(a)
                        }
                        break;
                    case 40:
                        a = $C("#_searchResultChatList").find("._room");
                        d = a.length;
                        d == 0 ? e = 0 : (a.removeClass("searchResultChatListFocus"), e++, d < e && (e = d), a = $(a[e - 1]), a.addClass("searchResultChatListFocus"), d = $("#_messageSearch").offset().top,
                            a.offset().top + a.height() > d && $C("#_searchResultChatList").scrollTo(a));
                        break;
                    case 27:
                        e = 0, b = !1
                }
                b ? l() : ($(this).blur(), $.cwFloatBox.close())
            }).click(function() {
                $.cwFloatBox.skip(b)
            }).focus(function() {
                l()
            }).blur(function() {
                e = 0
            }).keyup(function(a) {
                a.keyCode === 13 && l(!0)
            });
            var g = "",
                l = function(l) {
                    var k = f.getVal();
                    k.length > 0 || l ? (g != k && a.buildResult(k), g = k, d || ($C("#_searchResultChatList").find("._room").removeClass("searchResultChatListFocus"), $.cwFloatBox.close(), $.cwFloatBox.open(b, function() {
                            d = !1;
                            e = 0
                        }),
                        d = !0, $C("#_searchResultChatList").scrollTop(0))) : $.cwFloatBox.close()
                };
            $C("#_searchResultChatList").on("click", "li._room", function() {
                $.cwFloatBox.close()
            })
        };
        var f = null,
            g = null,
            l = !1,
            k = null;
        a.prepareMessageSearch = function() {
            k = $("#_messageSearchContent").cwFloatWindow({
                title: L.search_title,
                open: function() {
                    $C("#_messageSearchExceptWord").val("");
                    b.clear();
                    $C("#_messageSearchTerm").cwSelectBox().select("all");
                    $C("#_messageSearchDateFrom").val("");
                    $C("#_messageSearchDateTo").val("");
                    $C("#_messageSearchOptionArea").hide();
                    $C("#_messageSearchOption ._iconRotate").removeClass("rotate180")
                }
            });
            $("#_messageSearchOption").click(function() {
                var a = $C("#_messageSearchOptionArea");
                a.isVisible() ? (a.slideUp("fast", function() {
                    k.resize()
                }), $C("#_messageSearchOption ._iconRotate").removeClass("rotate180")) : (a.slideDown("fast", function() {
                    k.resize()
                }), $C("#_messageSearchOption ._iconRotate").addClass("rotate180"))
            });
            var b = $("#_speakerTip").cwListTip({
                search: !0,
                multiSelect: !0,
                useHtmlLabel: !0,
                placeHolder: L.chatroom_search_member,
                list: function() {
                    var a = [],
                        b = AC.getSortedMemberList();
                    b.unshift(AC.myid);
                    for (var d = b.length, e = 0; e < d; e++) {
                        var f = b[e],
                            h = AC.getName(f);
                        a.push({
                            keys: AC.getSearchKeys(f),
                            value: f,
                            label: CW.getAvatarPanel(f, {
                                clicktip: !1,
                                size: "small"
                            }) + '<p class="autotrim">' + escape_html(h) + "</p>"
                        })
                    }
                    return a
                },
                update: function() {
                    for (var a = this.getVal(), b = "", d = a.length, e = 0; e < d; e++) {
                        var f = a[e];
                        b += '<span class="assignContent assignMember"><span class="_taskAssignMemberLabel assignContentText" data-aid="' + f + '">' + CW.getName(f) + '</span><span class="_taskAssignCancel assignContentCancel" data-aid="' +
                            f + '"><span class="icoFontCancel"></span><span class="icoTextHide">' + L.button_delete + "</span></span></span>"
                    }
                    $("#_messageSearchSpeakerBox").html(b)
                }
            });
            $("#_messageSearchSpeaker").click(function() {
                b.open($(this))
            });
            $("#_messageSearchSpeakerBox").on("click", "._taskAssignCancel", function() {
                var a = $(this).attr("data-aid");
                b.select(a)
            }).on("mouseover", "._taskAssignMemberLabel", function() {
                var a = $(this),
                    b = a.attr("data-aid");
                $.cwMessageTip.isInit(a[0]) || a.cwMessageTip({
                    message: function() {
                        return AC.getName(b)
                    }
                }).open()
            }).on("click",
                "._taskAssignMemberLabel",
                function() {
                    $("#_messageSearchSpeaker").click();
                    return !1
                });
            var d = 0;
            $("#_messageSearchQuery").keydown(function(a) {
                d = a.keyCode
            }).keyup(function(a) {
                d == a.keyCode && a.keyCode == 13 && ($C("#_messageSearchSend").click(), $.cwFloatBox.close())
            });
            $C("#_messageSearchSend").click(function() {
                if (SERVICE_PLAN === "free" && a.getTrialRemainCnt() === 0) return k.close(), a.openTrialDescription(L.search_error_exceed_trial_num), !1;
                var d = $C("#_messageSearchQuery").cwSearchBox().getVal();
                SC.cancelSearch();
                $C("#_messageSearchLoading").hide();
                $C("#_messageSearchResult").empty();
                var e = {};
                e.q = d;
                if ($("#_messageSearchOptionArea").isVisible())
                    if (e.exq = $C("#_messageSearchExceptWord").val(), e.aid = b.getVal(), e.term = $("#_messageSearchTerm").cwSelectBox().getVal(), e.term == "specify") {
                        var d = $C("#_messageSearchDateFrom").val(),
                            f = $C("#_messageSearchDateTo").val();
                        if (d != "") e.term_from = strtotime_format(d, ST.data.dateformat);
                        if (f != "") e.term_to = strtotime_format(f, ST.data.dateformat)
                    } else if (e.term != "all") d = strtotime_format(CW.getDate(time(),
                    "Y-m-d"), "Y-m-d"), e.term_from = d - parseInt(e.term, 10) * 86400, e.term_to = d;
                $C("#_messageSearchResultHead").hide();
                $C("#_messageSearchLoading").show();
                SC.search(e, function(b, d) {
                    a.msg_dat = b;
                    a.ms_result_timeline_list = [];
                    a.ms_result_byroom_dat = {};
                    a.ms_result_byroom_idx_list = [];
                    a.ms_result_byuser_dat = {};
                    a.ms_result_byuser_idx_list = [];
                    for (var e in a.msg_dat) a.ms_result_timeline_list.push(parseInt(a.msg_dat[e].id, 10));
                    a.ms_result_timeline_list.sort(function(a, b) {
                        return b - a
                    });
                    e = 0;
                    for (var f = a.ms_result_timeline_list.length; e <
                        f; e++) {
                        var h = a.msg_dat[a.ms_result_timeline_list[e]];
                        a.ms_result_byroom_dat[h.rid] == void 0 && (a.ms_result_byroom_idx_list.push(h.rid), a.ms_result_byroom_dat[h.rid] = []);
                        a.ms_result_byroom_dat[h.rid].push(h.id);
                        a.ms_result_byuser_dat[h.aid] == void 0 && (a.ms_result_byuser_idx_list.push(h.aid), a.ms_result_byuser_dat[h.aid] = []);
                        a.ms_result_byuser_dat[h.aid].push(h.id)
                    }
                    a.ms_result_not_found = a.ms_result_timeline_list.length == 0 ? !0 : !1;
                    $C("#_messageSearchLoading").hide();
                    if (d) a.trial_search_num = d;
                    a.buildMSResult()
                })
            });
            $C("#_messageSearchTerm").cwSelectBox({
                update: function() {
                    this.getVal() == "specify" ? $C("#_messageSearchTerm_specify").show() : $C("#_messageSearchTerm_specify").hide()
                }
            });
            $C("#_messageSearchDateFrom").val("");
            $C("#_messageSearchDateTo").val("");
            $C("#_messageSearchResult").on("click", "._messageSearchChatGroup", function() {
                var a = $(this),
                    b = a.attr("data-gid"),
                    b = $("#_searchResultGroupId" + b),
                    d = a.find("._messageSearchArrow");
                b.isVisible() ? (b.slideUp("normal"), a.removeClass("_messageSearchOpen"), d.removeClass("rotate180")) :
                    (b.slideDown("normal"), a.addClass("_messageSearchOpen"), d.addClass("rotate180"))
            });
            g = $("#_messageSearchExpand").cwButtonBar({
                update: function(a) {
                    switch (a) {
                        case 0:
                            $C("#_messageSearchResult").find("._messageSearchChatGroup").each(function() {
                                var a = $(this);
                                a.hasClass("_messageSearchOpen") || a.click()
                            });
                            break;
                        case 1:
                            $C("#_messageSearchResult").find("._messageSearchChatGroup").each(function() {
                                var a = $(this);
                                a.hasClass("_messageSearchOpen") && a.click()
                            })
                    }
                }
            });
            f = $("#_messageSearchGrouping").cwTabbedBar({
                update: function(b) {
                    switch (b) {
                        case 0:
                            a.ms_result_type =
                                "timeline";
                            break;
                        case 1:
                            a.ms_result_type = "byroom";
                            break;
                        case 2:
                            a.ms_result_type = "byuser"
                    }
                    a.buildMSResult()
                }
            })
        };
        a.openMessageSearchWindow = function() {
            k || a.prepareMessageSearch();
            k.open()
        };
        a.closeMessageSearchWindow = function() {
            k.isOpen() && k.close()
        };
        a.buildSpeaker = function() {};
        a.buildMSResult = function() {
            if (k.isOpen()) {
                var b = $C("#_messageSearchQuery").cwSearchBox().getVal();
                $C("#_messageSearchOverflow").hide();
                if (a.ms_result_timeline_list.length > 0) {
                    var d = "",
                        e = 0,
                        l = 0,
                        m = [];
                    f.enableButtonAll();
                    switch (a.ms_result_type) {
                        case "byroom":
                            g.enableButtonAll();
                            for (var n = 0, e = a.ms_result_byroom_idx_list.length; n < e; n++)
                                for (var t = a.ms_result_byroom_idx_list[n], u = 0, s = a.ms_result_byroom_dat[t].length; u < s; u++) m.push(a.ms_result_byroom_dat[t][u]);
                            break;
                        case "byuser":
                            g.enableButtonAll();
                            n = 0;
                            for (e = a.ms_result_byuser_idx_list.length; n < e; n++) {
                                t = a.ms_result_byuser_idx_list[n];
                                u = 0;
                                for (s = a.ms_result_byuser_dat[t].length; u < s; u++) m.push(a.ms_result_byuser_dat[t][u])
                            }
                            break;
                        default:
                            g.disableButtonAll(), m = a.ms_result_timeline_list
                    }
                    e = m.length;
                    u = {
                        idPrefix: "_search"
                    };
                    for (n = 0; n <
                        e; n++) {
                        s = a.msg_dat[m[n]];
                        switch (a.ms_result_type) {
                            case "byroom":
                                if (l != s.rid) l = s.rid, n > 0 && (d += "</div>"), d += '<div class="searchResultTitle _messageSearchChatGroup" data-gid="' + s.rid + '">' + RL.rooms[s.rid].getIcon() + " " + escape_html(RL.rooms[s.rid].getName()) + " <span>(" + number_format(a.ms_result_byroom_dat[s.rid].length) + L.search_result_unit + ')</span><span class="_messageSearchArrow transitionAll03sLinear icoFontTriangleDown"></span></div><div id="_searchResultGroupId' + s.rid + '" style="display:none">';
                                break;
                            case "byuser":
                                if (l != s.aid) l = s.aid, n > 0 && (d += "</div>"), d += '<div class="searchResultTitle _messageSearchChatGroup" data-gid="' + s.aid + '">' + CW.getAvatarPanel(s.aid, {
                                    clicktip: !1,
                                    hovertip: !1,
                                    size: "small"
                                }) + " " + CW.getName(s.aid) + " <span>(" + number_format(a.ms_result_byuser_dat[s.aid].length) + L.search_result_unit + ')</span><span class="_messageSearchArrow transitionAll03sLinear icoFontTriangleDown"></span></div><div id="_searchResultGroupId' + s.aid + '" style="display:none">'
                        }
                        u.topView = n === 0 ? !0 : !1;
                        d += TimeLineView.prototype.getMessagePanel(s,
                            u)
                    }
                    switch (a.ms_result_type) {
                        case "byroom":
                            e > 0 && (d += "</div>");
                            break;
                        case "byuser":
                            e > 0 && (d += "</div>")
                    }
                    $C("#_messageSearchResultHead").show();
                    $C("#_messageSearchResultNum").text(number_format(m.length));
                    m.length == SEARCH_MAX_RESULTS && $C("#_messageSearchOverflow").show();
                    $C("#_messageSearchResult").html(d);
                    b = b.replace(/\u3000|,|\u3001|\u30fb/g, " ").split(" ");
                    for (n in b) d = b[n], d.charAt(0) == "+" && (d = d.substr(1)), d = trim(d), d.length > 0 && $("#_messageSearchResult pre").markText(d, "searchEm")
                } else f.disableButtonAll(),
                    g.disableButtonAll(), $C("#_messageSearchResultNum").text("0"), a.ms_result_not_found ? ($C("#_messageSearchResultHead").show(), $C("#_messageSearchResult").html('<div class="searchNotFound alert alertWarning">' + L.search_result_not_found.replace("%%keyword%%", escape_html(b)) + "</div>")) : ($C("#_messageSearchResultHead").show(), $C("#_messageSearchResult").quickEmpty());
                k.resize()
            }
        };
        a.room_show_limit = 50;
        a.buildResult = function(b) {
            if (b == void 0 || b == "") $C("#_searchResultChatList").quickEmpty(), $C("#_messageSearchHint").text(""),
                $C("#_messageSearchIcon").hide();
            else {
                $C("#_messageSearchHint").text(L.search_suggest.replace(/%%keyword%%/, b));
                $C("#_messageSearchIcon").show();
                var d = RL.getSortedRoomList(),
                    e = "",
                    f = null,
                    g = d.length;
                if (g) {
                    for (var l = [], l = CW.splitWithSpace(b.toLowerCase()), k = 0, u = 0; u < g; u++)
                        if (d[u] != void 0) {
                            var s = d[u],
                                f = RL.rooms[s];
                            if (!(a.search_type == "contact" && f.type != "contact")) {
                                if (f.type == "contact") {
                                    if (!AC.isMatchedWithKeyList(l, f.getAccountId())) continue
                                } else if (!CW.isMatchedWithKeyList(l, f.getName())) continue;
                                e +=
                                    RL.view.getRoomItemPanel(s, {
                                        showOrg: !0,
                                        showPin: !1,
                                        showSelected: !1,
                                        showRequest: !1,
                                        noTrim: !0
                                    });
                                k++;
                                if (k >= a.room_show_limit) break
                            }
                        }
                    $C("#_searchResultChatList").html(e).find("p").markText(b, "searchEm")
                } else $C("#_searchResultChatList").quickEmpty()
            }
        };
        a.getTrialRemainCnt = function() {
            return a.model.trial_search_limit_num - a.trial_search_num
        };
        a.prepareTrialDescription = function() {
            d = $("#_searchDescriptionFree").cwDialog({
                width: 600,
                title: "\u30e1\u30c3\u30bb\u30fc\u30b8\u691c\u7d22",
                open: function(b) {
                    var d = a.getTrialRemainCnt();
                    $C("#_searchTrial").html(L.search_trial_button.replace("%%rest_num%%", d));
                    d <= 0 && $C("#_searchTrial").hide();
                    this.data.search_word = $C("#_search").val();
                    b = b || L.search_upgrade_title;
                    $C("#_searchUpgradeTitle").html(b)
                }
            });
            $("#_searchTrial").click(function() {
                var b = d.data.search_word;
                a.trial = !0;
                d.close();
                a.openMessageSearchWindow();
                a.executeSearchMessage(b)
            });
            $("#_serviceAdminDialogOpen").click(function() {
                d.close();
                CW.view.showServiceAdmin("upgrade")
            })
        };
        a.openTrialDescription = function(b) {
            d || a.prepareTrialDescription();
            d.open(b)
        };
        a.executeSearchMessage = function(a) {
            $C("#_messageSearchQuery").cwSearchBox().setVal(a);
            $C("#_messageSearchSend").click()
        }
    }
    (function(b) {
        function a(a) {
            return typeof a == "object" ? a : {
                top: a,
                left: a
            }
        }
        var d = b.scrollTo = function(a, d, g) {
            b(window).scrollTo(a, d, g)
        };
        d.defaults = {
            axis: "xy",
            duration: parseFloat(b.fn.jquery) >= 1.3 ? 0 : 1,
            limit: !0
        };
        d.window = function() {
            return b(window)._scrollable()
        };
        b.fn._scrollable = function() {
            return this.map(function() {
                if (this.nodeName && b.inArray(this.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) == -1) return this;
                var a = (this.contentWindow || this).document || this.ownerDocument || this;
                return /webkit/i.test(navigator.userAgent) ||
                    a.compatMode == "BackCompat" ? a.body : a.documentElement
            })
        };
        b.fn.scrollTo = function(e, f, g) {
            typeof f == "object" && (g = f, f = 0);
            typeof g == "function" && (g = {
                onAfter: g
            });
            e == "max" && (e = 9E9);
            g = b.extend({}, d.defaults, g);
            f = f || g.duration;
            g.queue = g.queue && g.axis.length > 1;
            g.queue && (f /= 2);
            g.offset = a(g.offset);
            g.over = a(g.over);
            return this._scrollable().each(function() {
                function l(a) {
                    i.animate(o, f, g.easing, a && function() {
                        a.call(this, e, g)
                    })
                }
                if (e != null) {
                    var k = this,
                        i = b(k),
                        h = e,
                        j, o = {},
                        m = i.is("html,body");
                    switch (typeof h) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
                                h =
                                    a(h);
                                break
                            }
                            h = b(h, this);
                            if (!h.length) return;
                        case "object":
                            if (h.is || h.style) j = (h = b(h)).offset()
                    }
                    b.each(g.axis.split(""), function(a, b) {
                        var e = b == "x" ? "Left" : "Top",
                            f = e.toLowerCase(),
                            v = "scroll" + e,
                            x = k[v],
                            y = d.max(k, b);
                        j ? (o[v] = j[f] + (m ? 0 : x - i.offset()[f]), g.margin && (o[v] -= parseInt(h.css("margin" + e), 10) || 0, o[v] -= parseInt(h.css("border" + e + "Width"), 10) || 0), o[v] += g.offset[f] || 0, g.over[f] && (o[v] += h[b == "x" ? "width" : "height"]() * g.over[f])) : (e = h[f], o[v] = e.slice && e.slice(-1) == "%" ? parseFloat(e) / 100 * y : e);
                        g.limit && /^\d+$/.test(o[v]) &&
                            (o[v] = o[v] <= 0 ? 0 : Math.min(o[v], y));
                        !a && g.queue && (x != o[v] && l(g.onAfterFirst), delete o[v])
                    });
                    l(g.onAfter)
                }
            }).end()
        };
        d.max = function(a, d) {
            var g = d == "x" ? "Width" : "Height",
                l = "scroll" + g;
            if (!b(a).is("html,body")) return a[l] - b(a)[g.toLowerCase()]();
            var g = "client" + g,
                k = a.ownerDocument.documentElement,
                i = a.ownerDocument.body;
            return Math.max(k[l], i[l]) - Math.min(k[g], i[g])
        }
    })(jQuery);
(function(b) {
    typeof define === "function" && define.amd ? define(["jquery"], b) : b(jQuery)
})(function(b) {
    function a(a) {
        return a
    }

    function d(a) {
        return decodeURIComponent(a.replace(f, " "))
    }

    function e(a) {
        a.indexOf('"') === 0 && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return g.json ? JSON.parse(a) : a
        } catch (b) {}
    }
    var f = /\+/g,
        g = b.cookie = function(f, k, i) {
            if (k !== void 0) {
                i = b.extend({}, g.defaults, i);
                if (typeof i.expires === "number") {
                    var h = i.expires,
                        j = i.expires = new Date;
                    j.setDate(j.getDate() + h)
                }
                k = g.json ?
                    JSON.stringify(k) : String(k);
                return document.cookie = [g.raw ? f : encodeURIComponent(f), "=", g.raw ? k : encodeURIComponent(k), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var k = g.raw ? a : d, i = document.cookie.split("; "), h = f ? void 0 : {}, j = 0, o = i.length; j < o; j++) {
                var m = i[j].split("="),
                    n = k(m.shift()),
                    m = k(m.join("="));
                if (f && f === n) {
                    h = e(m);
                    break
                }
                f || (h[n] = e(m))
            }
            return h
        };
    g.defaults = {};
    b.removeCookie = function(a, d) {
        if (b.cookie(a) !==
            void 0) return b.cookie(a, "", b.extend({}, d, {
            expires: -1
        })), !0;
        return !1
    }
});
(function(b) {
    var a = /["\\\x00-\x1f\x7f-\x9f]/g,
        d = {
            "\u0008": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\u000c": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
    b.toJSON = typeof JSON === "object" && JSON.stringify ? JSON.stringify : function(a) {
        if (a === null) return "null";
        var d = typeof a;
        if (d !== "undefined") {
            if (d === "number" || d === "boolean") return "" + a;
            if (d === "string") return b.quoteString(a);
            if (d === "object") {
                if (typeof a.toJSON === "function") return b.toJSON(a.toJSON());
                if (a.constructor === Date) {
                    var g = a.getUTCMonth() + 1,
                        l = a.getUTCDate(),
                        k = a.getUTCFullYear(),
                        d = a.getUTCHours(),
                        i = a.getUTCMinutes(),
                        h = a.getUTCSeconds(),
                        a = a.getUTCMilliseconds();
                    g < 10 && (g = "0" + g);
                    l < 10 && (l = "0" + l);
                    d < 10 && (d = "0" + d);
                    i < 10 && (i = "0" + i);
                    h < 10 && (h = "0" + h);
                    a < 100 && (a = "0" + a);
                    a < 10 && (a = "0" + a);
                    return '"' + k + "-" + g + "-" + l + "T" + d + ":" + i + ":" + h + "." + a + 'Z"'
                }
                if (a.constructor === Array) {
                    g = [];
                    for (l = 0; l < a.length; l++) g.push(b.toJSON(a[l]) || "null");
                    return "[" + g.join(",") + "]"
                }
                l = [];
                for (k in a) {
                    d = typeof k;
                    if (d === "number") g = '"' + k + '"';
                    else if (d === "string") g = b.quoteString(k);
                    else continue;
                    d = typeof a[k];
                    d === "function" || d ===
                        "undefined" || (d = b.toJSON(a[k]), l.push(g + ":" + d))
                }
                return "{" + l.join(",") + "}"
            }
        }
    };
    b.evalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function(a) {
        return eval("(" + a + ")")
    };
    b.secureEvalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function(a) {
        if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return eval("(" + a + ")");
        else throw new SyntaxError("Error parsing JSON, source is not valid.");
    };
    b.quoteString = function(b) {
        if (b.match(a)) return '"' + b.replace(a, function(a) {
            var b = d[a];
            if (typeof b === "string") return b;
            b = a.charCodeAt();
            return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
        }) + '"';
        return '"' + b + '"'
    }
})(jQuery);
(function(b) {
    function a() {}

    function d(a) {
        E = [a]
    }

    function e(a, b, d) {
        return a && a.apply(b.context || b, d)
    }

    function f(f) {
        function P(a) {
            O++ || (Q(), M && (r[D] = {
                s: [a]
            }), U && (a = U.apply(f, [a])), e(G, f, [a, x, f]), e(W, f, [f, x]))
        }

        function F(a) {
            O++ || (Q(), M && a != y && (r[D] = a), e(S, f, [f, a]), e(W, f, [f, a]))
        }
        var f = b.extend({}, H, f),
            G = f.success,
            S = f.error,
            W = f.complete,
            U = f.dataFilter,
            K = f.callbackParameter,
            V = f.callback,
            Z = f.cache,
            M = f.pageCache,
            X = f.charset,
            D = f.url,
            I = f.data,
            Y = f.timeout,
            N, O = 0,
            Q = a,
            A, J, T;
        w && w(function(a) {
            a.done(G).fail(S);
            G =
                a.resolve;
            S = a.reject
        }).promise(f);
        f.abort = function() {
            !O++ && Q()
        };
        if (e(f.beforeSend, f, [f]) === !1 || O) return f;
        D = D || k;
        I = I ? typeof I == "string" ? I : b.param(I, f.traditional) : k;
        D += I ? (/\?/.test(D) ? "&" : "?") + I : k;
        K && (D += (/\?/.test(D) ? "&" : "?") + encodeURIComponent(K) + "=?");
        !Z && !M && (D += (/\?/.test(D) ? "&" : "?") + "_" + (new Date).getTime() + "=");
        D = D.replace(/=\?(&|$)/, "=" + V + "$1");
        if (M && (N = r[D])) N.s ? P(N.s[0]) : F(N);
        else {
            p[V] = d;
            A = b(v)[0];
            A.id = j + z++;
            X && (A[l] = X);
            B && B.version() < 11.6 ? (J = b(v)[0]).text = "document.getElementById('" + A.id +
                "')." + m + "()" : A[g] = g;
            if (R) A.htmlFor = A.id, A.event = o;
            A[n] = A[m] = A[t] = function(a) {
                if (!A[u] || !/i/.test(A[u])) {
                    try {
                        A[o] && A[o]()
                    } catch (b) {}
                    a = E;
                    E = 0;
                    a ? P(a[0]) : F(i)
                }
            };
            A.src = D;
            Q = function() {
                T && clearTimeout(T);
                A[t] = A[n] = A[m] = null;
                q[s](A);
                J && q[s](J)
            };
            q[h](A, K = q.firstChild);
            J && q[h](J, K);
            T = Y > 0 && setTimeout(function() {
                F(y)
            }, Y)
        }
        return f
    }
    var g = "async",
        l = "charset",
        k = "",
        i = "error",
        h = "insertBefore",
        j = "_jqjsp",
        o = "onclick",
        m = "on" + i,
        n = "onload",
        t = "onreadystatechange",
        u = "readyState",
        s = "removeChild",
        v = "<script>",
        x = "success",
        y =
        "timeout",
        p = window,
        w = b.Deferred,
        q = b("head")[0] || document.documentElement,
        r = {},
        z = 0,
        E, H = {
            callback: j,
            url: location.href
        },
        B = p.opera,
        R = !!b("<div>").html("<\!--[if IE]><i><![endif]--\>").find("i").length;
    f.setup = function(a) {
        b.extend(H, a)
    };
    b.jsonp = f
})(jQuery);
(function(b) {
    var a = function(b, e, f, g) {
        b = b.toLowerCase();
        f = f || document.body;
        g = g || {};
        if (typeof g.skipClassName == "string" || g.skipClassName instanceof String) g.skipClassName = [g.skipClassName];
        if (g.skipClassName instanceof Array) g.skipClassName = RegExp("\\b(" + g.skipClassName.join("|") + ")\\b");
        g.tag = g.tag || "span";
        for (f = f.firstChild; f; f = f.nextSibling)
            if (f.nodeType == 1)(!g.skipClassName || !g.skipClassName.test(f.className)) && a(b, e, f, g);
            else if (f.nodeType == 3)
            for (;;) {
                var l = f.nodeValue.toLowerCase().indexOf(b);
                if (l == -1) break;
                var k = f,
                    i = g.tag,
                    h = l;
                l += b.length;
                var j = document.createTextNode(k.nodeValue.substring(0, h));
                k.parentNode.insertBefore(j, k);
                i = document.createElement(i);
                i.appendChild(document.createTextNode(k.nodeValue.substring(h, l)));
                k.parentNode.insertBefore(i, k);
                k.nodeValue = k.nodeValue.substring(l);
                i.className = e
            }
    };
    b.fn.markText = function(b, e, f) {
        return this.each(function() {
            a(b, e, this, f)
        })
    }
})(jQuery);
window.Modernizr = function(b, a, d) {
    function e(a, b) {
        for (var e in a) {
            var f = a[e];
            if (!~("" + f).indexOf("-") && i[f] !== d) return b == "pfx" ? f : !0
        }
        return !1
    }

    function f(a, b, f) {
        var g = a.charAt(0).toUpperCase() + a.slice(1),
            i = (a + " " + h.join(g + " ") + g).split(" ");
        if (typeof b === "string" || typeof b === "undefined") return e(i, b);
        else {
            i = (a + " " + j.join(g + " ") + g).split(" ");
            a: {
                var a = i,
                    l;
                for (l in a)
                    if (g = b[a[l]], g !== d) {
                        if (f === !1) {
                            b = a[l];
                            break a
                        }
                        if (typeof g === "function") {
                            b = g.bind(f || b);
                            break a
                        }
                        b = g;
                        break a
                    }
                b = !1
            }
            return b
        }
    }
    var g = {},
        l = a.documentElement,
        k = a.createElement("modernizr"),
        i = k.style,
        b = " -webkit- -moz- -o- -ms- ".split(" "),
        h = "Webkit Moz O ms".split(" "),
        j = "webkit moz o ms".split(" "),
        o = {
            svg: "http://www.w3.org/2000/svg"
        },
        k = {},
        m = [],
        n = m.slice,
        t, u = function() {
            var b = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function(e, f) {
                var f = f || a.createElement(b[e] || "div"),
                    e = "on" + e,
                    h = e in f;
                h || (f.setAttribute || (f = a.createElement("div")), f.setAttribute && f.removeAttribute && (f.setAttribute(e, ""), h = typeof f[e] ===
                    "function", typeof f[e] === "undefined" || (f[e] = d), f.removeAttribute(e)));
                return h
            }
        }(),
        s = {}.hasOwnProperty,
        v;
    v = typeof s !== "undefined" && typeof s.call !== "undefined" ? function(a, b) {
        return s.call(a, b)
    } : function(a, b) {
        return b in a && typeof a.constructor.prototype[b] === "undefined"
    };
    if (!Function.prototype.bind) Function.prototype.bind = function(a) {
        var b = this;
        if (typeof b != "function") throw new TypeError;
        var d = n.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var f = function() {};
                    f.prototype = b.prototype;
                    var f = new f,
                        h = b.apply(f, d.concat(n.call(arguments)));
                    if (Object(h) === h) return h;
                    return f
                } else return b.apply(a, d.concat(n.call(arguments)))
            };
        return e
    };
    k.svg = function() {
        return !!a.createElementNS && !!a.createElementNS(o.svg, "svg").createSVGRect
    };
    for (var x in k) v(k, x) && (t = x.toLowerCase(), g[t] = k[x](), m.push((g[t] ? "" : "no-") + t));
    g.addTest = function(a, b) {
        if (typeof a == "object")
            for (var e in a) v(a, e) && g.addTest(e, a[e]);
        else {
            a = a.toLowerCase();
            if (g[a] !== d) return g;
            b = typeof b == "function" ? b() : b;
            typeof !0 !== "undefined" && (l.className +=
                " " + (b ? "" : "no-") + a);
            g[a] = b
        }
        return g
    };
    i.cssText = "";
    k = null;
    g._version = "2.6.2";
    g._prefixes = b;
    g._domPrefixes = j;
    g._cssomPrefixes = h;
    g.hasEvent = u;
    g.testProp = function(a) {
        return e([a])
    };
    g.testAllProps = f;
    g.testStyles = function(b, d, e, f) {
        var h, g, j = a.createElement("div"),
            i = a.body,
            k = i || a.createElement("body");
        if (parseInt(e, 10))
            for (; e--;) h = a.createElement("div"), h.id = f ? f[e] : "modernizr" + (e + 1), j.appendChild(h);
        e = ['&#173;<style id="smodernizr">', b, "</style>"].join("");
        j.id = "modernizr";
        (i ? j : k).innerHTML += e;
        k.appendChild(j);
        if (!i) k.style.background = "", k.style.overflow = "hidden", g = l.style.overflow, l.style.overflow = "hidden", l.appendChild(k);
        b = d(j, b);
        i ? j.parentNode.removeChild(j) : (k.parentNode.removeChild(k), l.style.overflow = g);
        return !!b
    };
    g.prefixed = function(a, b, d) {
        return b ? f(a, b, d) : f(a, "pfx")
    };
    l.className = l.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + m.join(" "));
    return g
}(this, this.document);
(function(b, a, d) {
    function e(a) {
        return "[object Function]" == t.call(a)
    }

    function f(a) {
        return "string" == typeof a
    }

    function g() {}

    function l(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function k() {
        var a = u.shift();
        s = 1;
        a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), k()) : s = 0
    }

    function i(b, d, e, f, h, g, j) {
        function i(a) {
            if (!p && l(o.readyState) && (q.r = p = 1, !s && k(), o.onload = o.onreadystatechange = null, a))
                for (var e in "img" != b && m(function() {
                        y.removeChild(o)
                    }, 50), z[d]) z[d].hasOwnProperty(e) &&
                    z[d][e].onload()
        }
        var j = j || B.errorTimeout,
            o = a.createElement(b),
            p = 0,
            t = 0,
            q = {
                t: e,
                s: d,
                e: h,
                a: g,
                x: j
            };
        1 === z[d] && (t = 1, z[d] = []);
        "object" == b ? o.data = d : (o.src = d, o.type = b);
        o.width = o.height = "0";
        o.onerror = o.onload = o.onreadystatechange = function() {
            i.call(this, t)
        };
        u.splice(f, 0, q);
        "img" != b && (t || 2 === z[d] ? (y.insertBefore(o, x ? null : n), m(i, j)) : z[d].push(o))
    }

    function h(a, b, d, e, h) {
        return s = 0, b = b || "j", f(a) ? i("c" == b ? w : p, a, b, this.i++, d, e, h) : (u.splice(this.i++, 0, a), 1 == u.length && k()), this
    }

    function j() {
        var a = B;
        return a.loader = {
            load: h,
            i: 0
        }, a
    }
    var o = a.documentElement,
        m = b.setTimeout,
        n = a.getElementsByTagName("script")[0],
        t = {}.toString,
        u = [],
        s = 0,
        v = "MozAppearance" in o.style,
        x = v && !!a.createRange().compareNode,
        y = x ? o : n.parentNode,
        o = b.opera && "[object Opera]" == t.call(b.opera),
        o = !!a.attachEvent && !o,
        p = v ? "object" : o ? "script" : "img",
        w = o ? "script" : p,
        q = Array.isArray || function(a) {
            return "[object Array]" == t.call(a)
        },
        r = [],
        z = {},
        E = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        },
        H, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"),
                d = r.length,
                e =
                a.pop(),
                f = a.length,
                e = {
                    url: e,
                    origUrl: e,
                    prefixes: a
                },
                h, g, j;
            for (g = 0; g < f; g++) j = a[g].split("="), (h = E[j.shift()]) && (e = h(e, j));
            for (g = 0; g < d; g++) e = r[g](e);
            return e
        }

        function h(a, f, g, i, l) {
            var k = b(a),
                m = k.autoCallback;
            k.url.split(".").pop().split("?").shift();
            k.bypass || (f && (f = e(f) ? f : f[a] || f[i] || f[a.split("/").pop().split("?")[0]]), k.instead ? k.instead(a, f, g, i, l) : (z[k.url] ? k.noexec = !0 : z[k.url] = 1, g.load(k.url, k.forceCSS || !k.forceJS && "css" == k.url.split(".").pop().split("?").shift() ? "c" : d, k.noexec, k.attrs, k.timeout), (e(f) || e(m)) && g.load(function() {
                j();
                f && f(k.origUrl, l, i);
                m && m(k.origUrl, l, i);
                z[k.url] = 2
            })))
        }

        function i(a, b) {
            function d(a, g) {
                if (a)
                    if (f(a)) g || (k = function() {
                        var a = [].slice.call(arguments);
                        m.apply(this, a);
                        n()
                    }), h(a, k, b, 0, j);
                    else {
                        if (Object(a) === a)
                            for (p in o = function() {
                                    var b = 0,
                                        d;
                                    for (d in a) a.hasOwnProperty(d) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(p) && (!g && !--o && (e(k) ? k = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a);
                                n()
                            } : k[p] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this,
                                        b);
                                    n()
                                }
                            }(m[p])), h(a[p], k, b, p, j))
                    } else !g && n()
            }
            var j = !!a.test,
                l = a.load || a.both,
                k = a.callback || g,
                m = k,
                n = a.complete || g,
                o, p;
            d(j ? a.yep : a.nope, !!l);
            l && d(l)
        }
        var l, k, m = this.yepnope.loader;
        if (f(a)) h(a, 0, m, 0);
        else if (q(a))
            for (l = 0; l < a.length; l++) k = a[l], f(k) ? h(k, 0, m, 0) : q(k) ? B(k) : Object(k) === k && i(k, m);
        else Object(a) === a && i(a, m)
    };
    B.addPrefix = function(a, b) {
        E[a] = b
    };
    B.addFilter = function(a) {
        r.push(a)
    };
    B.errorTimeout = 1E4;
    null == a.readyState && a.addEventListener && (a.readyState = "loading", a.addEventListener("DOMContentLoaded",
        H = function() {
            a.removeEventListener("DOMContentLoaded", H, 0);
            a.readyState = "complete"
        }, 0));
    b.yepnope = j();
    b.yepnope.executeStack = k;
    b.yepnope.injectJs = function(b, d, e, f, h, j) {
        var i = a.createElement("script"),
            o, p, f = f || B.errorTimeout;
        i.src = b;
        for (p in e) i.setAttribute(p, e[p]);
        d = j ? k : d || g;
        i.onreadystatechange = i.onload = function() {
            !o && l(i.readyState) && (o = 1, d(), i.onload = i.onreadystatechange = null)
        };
        m(function() {
            o || (o = 1, d(1))
        }, f);
        h ? i.onload() : n.parentNode.insertBefore(i, n)
    };
    b.yepnope.injectCss = function(b, d, e, f, h, j) {
        var f =
            a.createElement("link"),
            i, d = j ? k : d || g;
        f.href = b;
        f.rel = "stylesheet";
        f.type = "text/css";
        for (i in e) f.setAttribute(i, e[i]);
        h || (n.parentNode.insertBefore(f, n), m(d, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
(function() {
    var b = function(a, b) {
            var d = a.style[b];
            a.currentStyle ? d = a.currentStyle[b] : window.getComputedStyle && (d = document.defaultView.getComputedStyle(a, null).getPropertyValue(b));
            if (d == "auto" && b == "cursor")
                for (var e = ["a"], f = 0; f < e.length; f++)
                    if (a.tagName.toLowerCase() == e[f]) return "pointer";
            return d
        },
        a = function(a) {
            if (i.prototype._singleton) {
                if (!a) a = window.event;
                var b;
                if (this !== window) b = this;
                else if (a.target) b = a.target;
                else if (a.srcElement) b = a.srcElement;
                i.prototype._singleton.setCurrent(b)
            }
        },
        d = function(a,
            b) {
            if (a.addClass) return a.addClass(b), a;
            if (b && typeof b === "string") {
                var d = (b || "").split(/\s+/);
                if (a.nodeType === 1)
                    if (a.className) {
                        for (var e = " " + a.className + " ", f = a.className, h = 0, g = d.length; h < g; h++) e.indexOf(" " + d[h] + " ") < 0 && (f += " " + d[h]);
                        a.className = f.replace(/^\s+|\s+$/g, "")
                    } else a.className = b
            }
            return a
        },
        e = function(a, b) {
            if (a.removeClass) return a.removeClass(b), a;
            if (b && typeof b === "string" || b === void 0) {
                var d = (b || "").split(/\s+/);
                if (a.nodeType === 1 && a.className)
                    if (b) {
                        for (var e = (" " + a.className + " ").replace(/[\n\t]/g,
                                " "), f = 0, h = d.length; f < h; f++) e = e.replace(" " + d[f] + " ", " ");
                        a.className = e.replace(/^\s+|\s+$/g, "")
                    } else a.className = ""
            }
            return a
        },
        f = function(a) {
            return i.prototype._singleton.options.useNoCache ? (a.indexOf("?") >= 0 ? "&nocache=" : "?nocache=") + (new Date).getTime() : ""
        },
        g = function(a) {
            var b = [];
            a.trustedDomains && (typeof a.trustedDomains === "string" ? b.push("trustedDomain=" + a.trustedDomains) : b.push("trustedDomain=" + a.trustedDomains.join(",")));
            return b.join("&")
        },
        l = function(a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var d =
                    0, e = b.length; d < e; d++)
                if (b[d] === a) return d;
            return -1
        },
        k = function(a) {
            if (typeof a === "string") throw new TypeError("ZeroClipboard doesn't accept query strings.");
            if (!a.length) return [a];
            return a
        },
        i = function(a, b) {
            a && (i.prototype._singleton || this).glue(a);
            if (i.prototype._singleton) return i.prototype._singleton;
            i.prototype._singleton = this;
            this.options = {};
            for (var d in o) this.options[d] = o[d];
            for (var e in b) this.options[e] = b[e];
            this.handlers = {};
            if (i.detectFlashSupport()) {
                d = i.prototype._singleton;
                e = document.getElementById("global-zeroclipboard-html-bridge");
                if (!e) {
                    var h = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + d.options.moviePath + f(d.options.moviePath) + '"/>         <param name="allowScriptAccess" value="' + d.options.allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' +
                        g(d.options) + '"/>         <embed src="' + d.options.moviePath + f(d.options.moviePath) + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + g(d.options) +
                        '"           scale="exactfit">         </embed>       </object>';
                    e = document.createElement("div");
                    e.id = "global-zeroclipboard-html-bridge";
                    e.setAttribute("class", "global-zeroclipboard-container");
                    e.setAttribute("data-clipboard-ready", !1);
                    e.style.position = "absolute";
                    e.style.left = "-9999px";
                    e.style.top = "-9999px";
                    e.style.width = "15px";
                    e.style.height = "15px";
                    e.style.zIndex = "9999";
                    e.innerHTML = h;
                    document.body.appendChild(e)
                }
                d.htmlBridge = e;
                d.flashBridge = document["global-zeroclipboard-flash-bridge"] || e.children[0].lastElementChild
            }
        },
        h, j = [];
    i.prototype.setCurrent = function(a) {
        h = a;
        this.reposition();
        a.getAttribute("title") && this.setTitle(a.getAttribute("title"));
        this.setHandCursor(b(a, "cursor") == "pointer")
    };
    i.prototype.setText = function(a) {
        if (a && a !== "") this.options.text = a, this.ready() && this.flashBridge.setText(a)
    };
    i.prototype.setTitle = function(a) {
        a && a !== "" && this.htmlBridge.setAttribute("title", a)
    };
    i.prototype.setSize = function(a, b) {
        this.ready() && this.flashBridge.setSize(a, b)
    };
    i.prototype.setHandCursor = function(a) {
        this.ready() && this.flashBridge.setHandCursor(a)
    };
    i.version = "1.1.7";
    var o = {
        moviePath: "ZeroClipboard.swf",
        trustedDomains: null,
        text: null,
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        allowScriptAccess: "sameDomain",
        useNoCache: !0
    };
    i.setDefaults = function(a) {
        for (var b in a) o[b] = a[b]
    };
    i.destroy = function() {
        i.prototype._singleton.unglue(j);
        var a = i.prototype._singleton.htmlBridge;
        a.parentNode.removeChild(a);
        delete i.prototype._singleton
    };
    i.detectFlashSupport = function() {
        var a = !1;
        try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash") &&
                (a = !0)
        } catch (b) {
            navigator.mimeTypes["application/x-shockwave-flash"] && (a = !0)
        }
        return a
    };
    i.prototype.resetBridge = function() {
        this.htmlBridge.style.left = "-9999px";
        this.htmlBridge.style.top = "-9999px";
        this.htmlBridge.removeAttribute("title");
        this.htmlBridge.removeAttribute("data-clipboard-text");
        e(h, this.options.activeClass);
        h = null;
        this.options.text = null
    };
    i.prototype.ready = function() {
        var a = this.htmlBridge.getAttribute("data-clipboard-ready");
        return a === "true" || a === !0
    };
    i.prototype.reposition = function() {
        if (!h) return !1;
        var a = h,
            d = {
                left: 0,
                top: 0,
                width: a.width || a.offsetWidth || 0,
                height: a.height || a.offsetHeight || 0,
                zIndex: 9999
            },
            e = b(a, "zIndex");
        if (e && e != "auto") d.zIndex = parseInt(e, 10);
        for (; a;) {
            var e = parseInt(b(a, "borderLeftWidth"), 10),
                f = parseInt(b(a, "borderTopWidth"), 10);
            d.left += isNaN(a.offsetLeft) ? 0 : a.offsetLeft;
            d.left += isNaN(e) ? 0 : e;
            d.top += isNaN(a.offsetTop) ? 0 : a.offsetTop;
            d.top += isNaN(f) ? 0 : f;
            a = a.offsetParent
        }
        this.htmlBridge.style.top = d.top + "px";
        this.htmlBridge.style.left = d.left + "px";
        this.htmlBridge.style.width = d.width +
            "px";
        this.htmlBridge.style.height = d.height + "px";
        this.htmlBridge.style.zIndex = d.zIndex + 1;
        this.setSize(d.width, d.height)
    };
    i.dispatch = function(a, b) {
        i.prototype._singleton.receiveEvent(a, b)
    };
    i.prototype.on = function(a, b) {
        for (var d = a.toString().split(/\s/g), e = 0; e < d.length; e++) a = d[e].toLowerCase().replace(/^on/, ""), this.handlers[a] || (this.handlers[a] = b);
        this.handlers.noflash && !i.detectFlashSupport() && this.receiveEvent("onNoFlash", null)
    };
    i.prototype.addEventListener = i.prototype.on;
    i.prototype.off = function(a,
        b) {
        for (var d = a.toString().split(/\s/g), e = 0; e < d.length; e++) {
            var a = d[e].toLowerCase().replace(/^on/, ""),
                f;
            for (f in this.handlers) f === a && this.handlers[f] === b && delete this.handlers[f]
        }
    };
    i.prototype.removeEventListener = i.prototype.off;
    i.prototype.receiveEvent = function(a, b) {
        var a = a.toString().toLowerCase().replace(/^on/, ""),
            f = h;
        switch (a) {
            case "load":
                if (b && parseFloat(b.flashVersion.replace(",", ".").replace(/[^0-9\.]/gi, "")) < 10) {
                    this.receiveEvent("onWrongFlash", {
                        flashVersion: b.flashVersion
                    });
                    return
                }
                this.htmlBridge.setAttribute("data-clipboard-ready", !0);
                break;
            case "mouseover":
                d(f, this.options.hoverClass);
                break;
            case "mouseout":
                e(f, this.options.hoverClass);
                this.resetBridge();
                break;
            case "mousedown":
                d(f, this.options.activeClass);
                break;
            case "mouseup":
                e(f, this.options.activeClass);
                break;
            case "datarequested":
                var g = f.getAttribute("data-clipboard-target");
                (g = (g = !g ? null : document.getElementById(g)) ? g.value || g.textContent || g.innerText : f.getAttribute("data-clipboard-text")) && this.setText(g);
                break;
            case "complete":
                this.options.text = null
        }
        this.handlers[a] && (g =
            this.handlers[a], typeof g == "function" ? g.call(f, this, b) : typeof g == "string" && window[g].call(f, this, b))
    };
    i.prototype.glue = function(b) {
        for (var b = k(b), d = 0; d < b.length; d++)
            if (l(b[d], j) == -1) {
                j.push(b[d]);
                var e = b[d],
                    f = a;
                e.addEventListener ? e.addEventListener("mouseover", f, !1) : e.attachEvent && e.attachEvent("onmouseover", f)
            }
    };
    i.prototype.unglue = function(b) {
        for (var b = k(b), d = 0; d < b.length; d++) {
            var e = b[d],
                f = a;
            e.removeEventListener ? e.removeEventListener("mouseover", f, !1) : e.detachEvent && e.detachEvent("onmouseover",
                f);
            e = l(b[d], j);
            e != -1 && j.splice(e, 1)
        }
    };
    typeof module !== "undefined" ? module.exports = i : typeof define === "function" && define.amd ? define(function() {
        return i
    }) : window.ZeroClipboard = i
})();
var C;
(function(b) {
    var a = 0;
    b(function() {
        b.cwUI.loading = '<img src="' + b.cwUI.imagePath + '/ajax-loader.gif" alt="Loading" />';
        b(document).on("click.ChatWorkUI", "._cwSelectableRow", function() {
            b(this).find("._cwCB").cwCheckBox().toggle();
            return !1
        })
    });
    var d = {},
        e = {},
        f = 0,
        g = {};
    b.cwUI = b.cwUI || {};
    b.cwUI.floatZIndex = 1E3;
    b.cwUI.imagePath = "./image";
    b.cwUI.loading = "";
    b.cwUI.hasFlash = !1;
    b.cwUI.escapeHTML = function(a) {
        if (!a || !a.replace) return a;
        a = a.replace(/&/g, "&amp;");
        a = a.replace(/"/g, "&quot;");
        a = a.replace(/'/g, "&#039;");
        a = a.replace(/</g, "&lt;");
        return a = a.replace(/>/g, "&gt;")
    };
    b.cwUI.formatNumber = function(a) {
        a = a.toString().split(".");
        a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return a.join(".")
    };
    b.cwUI.ucFirst = function(a) {
        a += "";
        return a.charAt(0).toUpperCase() + a.substr(1)
    };
    b.cwUI.setZIndex = function(a) {
        var b = a.data("cwui-float_id");
        b == void 0 && (b = f++, a.data("cwui-float_id", [b]));
        var d = this.floatZIndex,
            e;
        for (e in g) {
            var i = parseInt(g[e].css("z-index"), 10);
            d < i && (d = i)
        }
        d++;
        a.css("z-index", d);
        g[b] = a;
        return this
    };
    b.cwUI.unsetZIndex =
        function(a) {
            a = a.data("cwui-float_id");
            if (a != void 0) return delete g[a], this
        };
    b.cwUI.getUpperLayerObjects = function(a) {
        var a = parseInt(a.css("z-index"), 10),
            b = [],
            d;
        for (d in g) parseInt(g[d].css("z-index"), 10) > a && b.push(g[d]);
        return b
    };
    b.cwUI.addWidget = function(f, g, l, m) {
        b[f] = new i(f, g);
        if (m != void 0)
            for (var n in m) b[f][n] = m[n];
        d[f] = function() {
            this.widget_name = f
        };
        d[f].prototype = new k;
        for (n in l) d[f].prototype[n] = l[n];
        e[f] = function(a) {
            this.widget_name = f;
            this.widget_list = a
        };
        for (n in d[f].prototype)(function() {
            var a =
                n;
            e[f].prototype[a] = function() {
                for (var b = 0, d = this.widget_list.length; b < d; b++) {
                    var e = this.widget_list[b];
                    e[a].apply(e, arguments)
                }
                return this
            }
        })();
        var t = "cwui-" + f;
        b.fn[f] = function(g) {
            var j = this.length;
            if (j != 0 && !b.cwUI.isWidget(this[0])) {
                var i = null,
                    l = [];
                this.each(function() {
                    var e = b(this),
                        j = e[0];
                    i = b.data(j, t);
                    if (!i) {
                        if (b[f]._create) {
                            var k = b[f]._create(e);
                            k && (e = k, j = k[0])
                        }
                        i = new d[f];
                        i.widget_id = a++;
                        i._setUp(e);
                        g = b.extend({}, b[f].getDefaultOption(), g);
                        i._init && i._init(g);
                        b.data(j, t, i)
                    }
                    i.setOption(g);
                    l.push(i)
                });
                return j == 1 ? i : new e[f](l)
            }
        }
    };
    b.cwUI.isWidget = function(a) {
        if (a instanceof k) return !0;
        return !1
    };
    if (navigator.mimeTypes["application/x-shockwave-flash"] != void 0) b.cwUI.hasFlash = !0;
    else try {
        new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b.cwUI.hasFlash = !0
    } catch (l) {}
    var k = function() {};
    k.prototype = {
        $el: null,
        el: null,
        data: {},
        _setUp: function(a) {
            this.$el = a;
            this.el = a[9];
            this.is_open = this.open ? !1 : !0;
            this.init_option = !0;
            this.option = {};
            return this
        },
        isOpen: function() {
            return this.is_open
        },
        destroy: function() {
            b.data(this.$el[0],
                "cwui-" + this.widget_name, "")
        },
        setOption: function(a) {
            if (a == void 0) return this;
            for (var b in a) this.option[b] = a[b];
            this._setOption && this._setOption(a);
            this.init_option = !1;
            return this
        }
    };
    var i = function(a, b) {
        this.widget_name = a;
        this.default_option = b
    };
    i.prototype = {
        getWidget: function(a) {
            return b.data(a, "cwui-" + this.widget_name)
        },
        isInit: function(a) {
            return b.data(a, "cwui-" + this.widget_name) ? !0 : !1
        },
        getDefaultOption: function() {
            return this.default_option
        },
        setDefaultOption: function(a) {
            for (var b in a) this.default_option[b] =
                a[b];
            return this
        }
    };
    b.fn.extend({
        quickEmpty: function() {
            this.each(function() {
                for (var a = this.childNodes.length; a--;) this.removeChild(this.lastChild)
            });
            return this
        },
        getAttrs: function() {
            for (var a = this[0].attributes, b = {}, d = 0, e = a.length; d < e; d++) {
                var f = a.item(d);
                if (f.specified) b[f.name] = f.value
            }
            return b
        },
        isVisible: function() {
            return b.expr.filters.visible(this[0])
        },
        caretPos: function(a) {
            var b = this.get(0);
            if (a == null) {
                a = 0;
                if (document.selection) {
                    b.focus();
                    var d = document.selection.createRange();
                    d.moveStart("character", -b.value.length);
                    a = d.text.length
                } else if (b.selectionStart || b.selectionStart == "0") a = b.selectionStart;
                return a
            }
            a == "first" && (a = 0);
            if (a == "last") a = this.val().length;
            b.setSelectionRange ? (b.focus(), b.setSelectionRange(a, a)) : b.createTextRange && (d = b.createTextRange(), d.collapse(!0), d.moveEnd("character", a), d.moveStart("character", a), d.select());
            return this
        }
    })
})(jQuery);
(function(b) {
    var a = [],
        d = [],
        e = !1;
    b(function() {
        setTimeout(function() {
            b.cwFloatBox.setBodyEvent()
        })
    });
    b.cwFloatBox = {
        open: function(d, e, l) {
            var k = b.extend({
                noAnimation: !1
            }, l);
            b.data(d[0], "cwFloatBox") || (d.on("click.cwFloatBox", function() {
                b.cwFloatBox.skip(b(this));
                k.skip && b.cwFloatBox.skip(k.skip)
            }), b.data(d[0], "cwFloatBox", !0));
            a.push({
                obj: d,
                zindex: d.css("z-index"),
                callback: e,
                noanim: k.noAnimation
            });
            d.stop(!0, !0).show().css({
                opacity: 1
            });
            b.cwUI.setZIndex(d);
            return this
        },
        close: function(d, e) {
            var l = a.length,
                k = null,
                i = [],
                h = [];
            if (l > 0) {
                if (d) {
                    var j;
                    if (d instanceof jQuery) j = [d];
                    else if (b.isArray(d)) j = d;
                    else return;
                    for (l -= 1; l >= 0; l--) {
                        for (var o = !1, m = 0, n = j.length; m < n; m++)
                            if (j[m][0] == a[l].obj[0]) {
                                o = !0;
                                break
                            }
                        e ? o ? h.push(a[l]) : i.push(a[l]) : o ? i.push(a[l]) : h.push(a[l])
                    }
                } else i = a;
                l = 0;
                for (j = i.length; l < j; l++) k = i[l], typeof k.callback == "function" && k.callback(), k.noanim ? (k.obj.hide(), k.obj.css("z-index", k.zindex)) : k.obj.fadeOut("fast", function() {
                    k.obj.css("z-index", k.zindex)
                }), b.cwUI.unsetZIndex(k.obj), k.floatbox && k.floatbox.remove();
                a = h
            }
            var t = this;
            setTimeout(function() {
                t.clearSkip()
            });
            return this
        },
        closeUpperLayer: function(b) {
            for (var b = parseInt(b.css("z-index"), 10), d = [], e = 0, k = a.length; e < k; e++) {
                var i = a[e].obj;
                b < parseInt(i.css("z-index"), 10) && d.push(i)
            }
            d.length > 0 && this.close(d);
            return this
        },
        skip: function() {
            var a = arguments.length;
            if (a)
                for (var b = 0; b < a; b++) d.push(arguments[b]);
            else e = !0;
            return this
        },
        clearSkip: function() {
            e = !1;
            d = [];
            return this
        },
        setBodyEvent: function() {
            b(document.body).off("keydown.cwFloatBox").on("keydown.cwFloatBox",
                function(a) {
                    a.keyCode == 27 && b.cwFloatBox.close()
                }).off("click.cwFloatBox").on("click.cwFloatBox", function() {
                e ? setTimeout(function() {
                    b.cwFloatBox.clearSkip()
                }) : d.length > 0 ? b.cwFloatBox.close(d, !0) : b.cwFloatBox.close()
            });
            return this
        }
    }
})(jQuery, jQuery.cwUI.L);
(function(b) {
    var a = !1,
        d = null,
        e = 0,
        f = 0;
    b(function() {
        b(document.body).on("mousemove.cwResize", function(b) {
            a && d.move(b.clientX - e, b.clientY - f)
        }).on("mouseup.cwResize", function() {
            a && (b("#_cwRZBack").remove(), a = !1, b(document.body).removeClass("cwResizeHandleCol cwResizeHandleRow cwResizeHandle"), d.end())
        })
    });
    b.cwResize = {
        setHandle: function(g, l) {
            var k = b.extend({
                    type: "",
                    start: function() {},
                    end: function() {},
                    move: function() {}
                }, l),
                i = "";
            switch (k.type) {
                case "col":
                    i = "cwResizeHandleCol";
                    break;
                case "row":
                    i = "cwResizeHandleRow";
                    break;
                default:
                    i = "cwResizeHandle"
            }
            g.addClass(i).on("mousedown.cwResize", function(h) {
                a = !0;
                var g = b(document.body);
                g.append('<div id="_cwRZBack" class="stopActionOverlay"></div>');
                switch (k.type) {
                    case "col":
                        g.addClass("cwResizeHandleCol");
                        break;
                    case "row":
                        g.addClass("cwResizeHandleRow");
                        break;
                    default:
                        g.addClass("cwResizeHandle")
                }
                e = h.clientX;
                f = h.clientY;
                d = k;
                d.start();
                return !1
            });
            return this
        }
    }
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    b.cwValidate = {
        File: {
            hasError: function(d, e) {
                var f = 0,
                    g = "",
                    l = "";
                d.files ? (f = d.files[0], g = f.name, f = f.size) : g = d.value.replace(/\\/g, "/").replace(/.*\//, "");
                (g = g.match(/\.([^\.]+)$/)) && (l = g[1].toLowerCase());
                g = [];
                e.maxsize && f >= e.maxsize && g.push(a.error_upload_over_max_filesize.replace(/%%max_size%%/g, bytename(e.maxsize)).replace(/%%size%%/g, bytename(f)));
                e.onlyimage && (in_array(l, ["jpg", "png", "gif", "jpeg"]) || g.push(a.error_upload_image));
                return g.length ? (b(d).val(""), g) : !1
            }
        }
    }
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwActionBar", {
        itemSelector: "",
        hoverSelector: "",
        hoverClass: "",
        idKey: "",
        checkIgnoreItem: null,
        stopBubbling: !1,
        actionList: [],
        moreActionList: [],
        descriptionDelay: 500
    }, {
        _init: function() {
            var a = this;
            this.latest_showed_jqObj = {};
            this.action_item = {};
            this.is_suspend = this.is_hold = this.is_more_prepared = !1;
            this.$el.on("click.cwActionBar", "._cwABAction", function() {
                var d = b(this),
                    e = d.attr("data-cwui-ab-type"),
                    f = d.attr("data-cwui-ab-id"),
                    e = a.action_item[e];
                typeof e.click == "function" && e.click.apply(a, [f, d]);
                if (a.option.stopBubbling) return !1
            }).on("mouseenter.cwActionBarDescription", "._cwABAction", function() {
                var d = b(this),
                    e = d.attr("data-cwui-ab-type");
                d.attr("data-cwui-ab-id");
                d = a.action_item[e];
                d.description && (b.cwMessageTip.isInit(this) || b(this).cwMessageTip({
                    message: d.description,
                    delay: a.option.descriptionDelay
                }).open())
            })
        },
        _setOption: function(a) {
            var d = this;
            if (a.itemSelector != void 0) this.$el.off("mouseenter.cwActionBar").on("mouseenter.cwActionBar", a.itemSelector, function() {
                var a = b(this),
                    f = !1;
                typeof d.option.checkIgnoreItem === "function" && (f = d.option.checkIgnoreItem(a));
                f || d.open(b(this))
            }).off("mouseleave.cwActionBar").on("mouseleave.cwActionBar", a.itemSelector, function() {
                d.close()
            })
        },
        _prepareMore: function() {
            if (!this.is_more_prepared) {
                var a = this,
                    d = this.$el,
                    e = b('<div style="display:none"><ul class="_cwABMoreListBox"></ul></div>');
                b(document.body).append(e);
                e.on("click.cwActionBar", "._cwABAction", function() {
                    var d = b(this),
                        e = d.attr("data-cwui-ab-type"),
                        g = d.attr("data-cwui-ab-id"),
                        e = a.action_item[e];
                    typeof e.click == "function" && e.click.apply(a, [g, d]);
                    f.close();
                    if (a.option.stopBubbling) return !1
                }).on("mouseenter.cwActionBar", "._cwABAction", function() {
                    var d = b(this),
                        e = d.attr("data-cwui-ab-type");
                    d.attr("data-cwui-ab-id");
                    d = a.action_item[e];
                    d.description && (b.cwMessageTip.isInit(this) || b(this).cwMessageTip({
                        message: d.description,
                        delay: a.option.descriptionDelay
                    }).open())
                });
                var f = null,
                    g = null;
                d.on("click.cwActionBar", "._cwABMoreTip", function() {
                    g = b(this);
                    f || (f = e.cwToolTip({
                        open: function() {
                            a.is_hold = !0;
                            for (var b = g.attr("data-cwui-ab-id"), d = "", f = 0, h = a.option.moreActionList.length; f < h; f++) {
                                var j = a.option.moreActionList[f],
                                    o = a.action_item[j];
                                d += '<li class="_cwABAction chatActionMore" data-cwui-ab-id="' + b + '" data-cwui-ab-type="' + j + '"><span class="' + o.iconClass + '"></span><span class="chatActiontext">' + o.label + "</li>"
                            }
                            e.find("._cwABMoreListBox").html(d)
                        },
                        close: function() {
                            a.is_hold = !1
                        }
                    }));
                    f.open(b(this))
                });
                this.is_more_prepared = !0
            }
        },
        open: function(a) {
            if (this.is_suspend) return this;
            this.is_open = !0;
            a[0] !=
                void 0 && typeof this.option.open == "function" && this.option.open.apply(this, [a.attr(this.option.idKey)]);
            if (this.latest_showed_jqObj[0] != void 0 && this.latest_showed_jqObj[0] != a[0]) {
                var d = this.latest_showed_jqObj.find("._cwABShowArea");
                d.length > 0 && (d.hide(), b.cwMessageTip.close(), this.option.hoverClass && (d = this.option.hoverSelector ? this.latest_showed_jqObj.find(this.option.hoverSelector) : this.latest_showed_jqObj, d.removeClass(this.option.hoverClass)));
                this.latest_showed_jqObj = {}
            }
            if (a[0] != void 0 && this.latest_showed_jqObj[0] !=
                a[0]) {
                var e = this.option.actionList.length,
                    f = this.option.moreActionList.length,
                    d = a.find("._cwABShowArea");
                if (d.length == 0)
                    if (e || f) d = b('<div class="_cwABShowArea actionArea"></div>'), a.append(d);
                    else return !1;
                if (!b.data(d[0], "_cwABNavInit")) {
                    for (var e = '<ul role="toolbar" class="_messageActionNav cwTextUnselectable actionNav">', f = this.option.idKey ? a.attr(this.option.idKey) : "", g = 0, l = this.option.actionList.length; g < l; g++) {
                        var k = this.option.actionList[g],
                            i = this.action_item[k];
                        i != void 0 && (e += '<li role="button" class="_cwABAction linkStatus" data-cwui-ab-id="' +
                            f + '" data-cwui-ab-type="' + k + '"><span class="' + i.iconClass + '""></span><span class="_showAreaText showAreatext">' + i.label + "</span></li>")
                    }
                    this.option.moreActionList.length > 0 && (this._prepareMore(), e += '<li role="button" class="_cwABMoreTip linkStatus" data-cwui-ab-id="' + f + '"><span class="icoFontActionMore"></span><span class="_showAreaText showAreatext"></span></li>');
                    e += "</ul>";
                    d.html(e);
                    b.data(d[0], "_cwABNavInit", !0)
                }
                d.show();
                this.option.hoverClass && (d = this.option.hoverSelector ? a.find(this.option.hoverSelector) :
                    a, d.addClass(this.option.hoverClass));
                this.latest_showed_jqObj = a
            }
            return this
        },
        close: function() {
            this.is_open = !1;
            typeof this.option.close == "function" && this.option.close.apply(this);
            this.is_hold || this.open({});
            return this
        },
        hold: function(a) {
            this.is_hold = a;
            return this
        },
        addAction: function(a, b) {
            this.action_item[a] = b;
            return this
        },
        setActionList: function(a) {
            this.option.actionList = a;
            return this
        },
        setMoreActionList: function(a) {
            this.option.moreActionList = a;
            return this
        },
        findItemById: function(a) {
            return this.$el.find("[" +
                this.option.idKey + "=" + a + "]")
        },
        suspend: function() {
            this.close();
            this.is_suspend = !0;
            return this
        },
        resume: function() {
            this.is_suspend = !1;
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b(function() {
        b(document.body).on("click.cwButton", "._cwBN", function() {
            var a = b(this).cwButton();
            a.option.toggleMode ? a.toggle() : a.select()
        }).on("keydown.cwButton", "._cwBN", function(a) {
            a.keyCode == 32 && b(this).click()
        })
    });
    b.cwUI.addWidget("cwButton", {
        descriptionDelay: 500,
        toggleMode: !1
    }, {
        _init: function() {
            var a = this.$el;
            this.is_selected = !1;
            a.addClass("_cwBN button").attr({
                role: "button"
            });
            this.is_primary = a.hasClass("btnPrimary");
            this.is_success = a.hasClass("btnSuccess");
            this.is_warning = a.hasClass("btnWarning");
            this.is_danger = a.hasClass("btnDanger");
            a.hasClass("btnDisable") && this.disable()
        },
        _setOption: function(a) {
            a.description != void 0 && (b.cwMessageTip.isInit(this.$el[0]) || this.$el.cwMessageTip({
                delay: this.option.descriptionDelay,
                message: a.description
            }));
            if (a.type != void 0) switch (a.type) {
                case "primary":
                    this.$el.addClass("btnPrimary").removeClass("btnSuccess btnWarning btnDanger");
                    this.is_primary = !0;
                    break;
                case "success":
                    this.$el.addClass("btnSuccess").removeClass("btnPrimary btnWarning btnDanger");
                    this.is_success = !0;
                    break;
                case "warning":
                    this.$el.addClass("btnWarning").removeClass("btnSuccess btnPrimary btnDanger");
                    this.is_warning = !0;
                    break;
                case "danger":
                    this.$el.addClass("btnDanger").removeClass("btnSuccess btnWarning btnPrimary"), this.is_danger = !0
            }
            a.text != void 0 && this.$el.text(a.text);
            if (a.size != void 0) switch (a.size) {
                case "large":
                    this.$el.addClass("btnLarge")
            }
        },
        select: function() {
            if (this.is_disabled) return this;
            this.option.click && this.option.click.apply(this);
            if (!this.is_selected) {
                var a;
                this.option.update &&
                    (a = this.option.update.apply(this, [!0]));
                if (a !== !1 && this.option.toggleMode) this.$el.addClass("_cwBNSelected selected").attr("aria-pressed", "true"), this.is_selected = !0
            }
            return this
        },
        deSelect: function() {
            if (this.is_disabled) return this;
            if (this.is_selected) {
                var a;
                this.option.update && (a = this.option.update.apply(this, [idx, !1]));
                if (a !== !1) this.$el.removeClass("_cwBNSelected selected").attr("aria-pressed", "false"), this.is_selected = !1
            }
            return this
        },
        toggle: function() {
            this.isSelect() ? this.deSelect() : this.select();
            return this
        },
        isSelect: function() {
            return this.is_selected
        },
        disable: function() {
            this.$el.addClass("btnDisable").attr("aria-disabled", "true");
            this.is_primary && this.$el.removeClass("btnPrimary");
            this.is_success && this.$el.removeClass("btnSuccess");
            this.is_warning && this.$el.removeClass("btnWarning");
            this.is_danger && this.$el.removeClass("btnDanger");
            this.is_disabled = !0;
            this.option.disable && this.option.disable.apply(this);
            return this
        },
        enable: function() {
            this.$el.removeClass("btnDisable").attr("aria-disabled",
                "false");
            this.is_primary && this.$el.addClass("btnPrimary");
            this.is_success && this.$el.addClass("btnSuccess");
            this.is_warning && this.$el.addClass("btnWarning");
            this.is_danger && this.$el.addClass("btnDanger");
            this.is_disabled = !1;
            this.option.enable && this.option.enable.apply(this);
            return this
        }
    }, {
        create: function(a, b, e) {
            e == void 0 && (e = {});
            var f = "<div",
                g = "btn";
            b && (g += " btn" + ucfirst(b));
            for (var l in e) switch (l) {
                case "class":
                    g += " " + e[l];
                    break;
                default:
                    f += " " + l + '="' + e[l] + '"'
            }
            f += ' role="button" class="' + g + '">' + a +
                "</div>";
            return f
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwButtonBar", {
        descriptionDelay: 500,
        toggleMode: !1
    }, {
        _init: function(a) {
            var d = this,
                e = this.$el;
            this.selected_dat = {};
            this.disabled_dat = {};
            e.addClass("_cwBB").attr("role", "menu");
            e.on("click.cwButtonBar", "._cwBBButton", function() {
                d.option.toggleMode ? d.toggle(b(this).attr("data-cwui-bb-idx")) : d.select(b(this).attr("data-cwui-bb-idx"))
            }).on("keydown.cwButtonBar", "._cwBBButton", function(a) {
                a.keyCode == 32 && b(this).click()
            });
            this.length = 0;
            var f = b.data(e[0], "_cwBBSelectDat"),
                g;
            for (g in f) this.selected_dat[g] = !1, this.length++;
            b.data(e[0], "_cwBBSelectDat", null);
            a.descriptionList = b.data(e[0], "_cwBBDescriptionList");
            b.data(e[0], "_cwBBDescriptionList", null);
            for (g in f) f[g] && this.select(g), this.disabled_dat[g] = !1
        },
        _setOption: function(a) {
            var d = this;
            a.descriptionList != void 0 && this.$el.find("._cwBBButton").each(function() {
                var a = b(this),
                    f = a.attr("data-cwui-bb-idx");
                d.option.descriptionList[f] && !b.cwMessageTip.isInit(this) && (a.attr("aria-label", d.option.descriptionList[f]), a.cwMessageTip({
                    delay: d.option.descriptionDelay,
                    message: d.option.descriptionList[f]
                }))
            })
        },
        select: function(a) {
            a = parseInt(a, 10);
            if (!this.selected_dat[a] && !this.disabled_dat[a]) {
                var b;
                this.option.update && (b = this.option.update.apply(this, [a, !0]));
                b !== !1 && this.option.toggleMode && (this.findButtonByIndex(a).addClass("_cwBBSelected selected").attr("aria-checked", "true"), this.selected_dat[a] = !0)
            }
            return this
        },
        deSelect: function(a) {
            a = parseInt(a, 10);
            if (this.selected_dat[a] && !this.disabled_dat[a]) {
                var b;
                this.option.update && (b = this.option.update.apply(this, [a, !1]));
                b !== !1 && (this.findButtonByIndex(a).removeClass("_cwBBSelected selected").attr("aria-checked", "false"), this.selected_dat[a] = !1)
            }
            return this
        },
        toggle: function(a) {
            this.isSelect(a) ? this.deSelect(a) : this.select(a);
            return this
        },
        selectAll: function() {
            for (var a in this.selected_dat) this.select(a);
            return this
        },
        deSelectAll: function() {
            for (var a in this.selected_dat) this.deSelect(a);
            return this
        },
        isSelect: function(a) {
            return this.selected_dat[a]
        },
        getSelectedIndex: function() {
            var a = [],
                b;
            for (b in this.selected_dat) this.selected_dat[b] &&
                a.push(this.selected_dat[b]);
            return a
        },
        findButtonByIndex: function(a) {
            return this.$el.find("._cwBBButton[data-cwui-bb-idx=" + a + "]")
        },
        hideButton: function(a) {
            this.findButtonByIndex(a).hide();
            return this
        },
        showButton: function(a) {
            this.findButtonByIndex(a).show();
            return this
        },
        hideButtonAll: function() {
            this.$el.find("._cwBBButton").hide();
            return this
        },
        showButtonAll: function() {
            this.$el.find("._cwBBButton").show();
            return this
        },
        disableButton: function(a) {
            this.findButtonByIndex(a).addClass("btnDisable").attr("aria-disabled",
                "true");
            this.disabled_dat[a] = !0;
            return this
        },
        enableButton: function(a) {
            this.findButtonByIndex(a).removeClass("btnDisable").attr("aria-disabled", "false");
            this.disabled_dat[a] = !1;
            return this
        },
        disableButtonAll: function() {
            this.$el.find("._cwBBButton").addClass("btnDisable").attr("aria-disabled", "true");
            for (var a in this.selected_dat) this.disabled_dat[a] = !0;
            return this
        },
        enableButtonAll: function() {
            this.$el.find("._cwBBButton").removeClass("btnDisable").attr("aria-disabled", "false");
            for (var a in this.selected_dat) this.disabled_dat[a] = !1;
            return this
        }
    }, {
        _create: function(a) {
            var d = a[0],
                e = {};
            if (a.hasClass("_cwBB")) return !1;
            else if (d.tagName.toLowerCase() == "ul") {
                var f = [],
                    g = [],
                    l = 0;
                a.find("li").each(function() {
                    var a = b(this);
                    f.push(a.html());
                    e[l] = a.hasClass("._cwBBSelected") ? !0 : !1;
                    g.push(a.attr("aria-label"));
                    l++
                });
                d = a.getAttrs();
                d = b(b.cwButtonBar.create(f, d));
                a.before(d);
                a.remove();
                b.data(d[0], "_cwBBSelectDat", e);
                b.data(d[0], "_cwBBDescriptionList", g);
                return d
            }
        },
        create: function(a, b) {
            b == void 0 && (b = {});
            var e = "<ul",
                f = "cwTextUnselectable btnNavList",
                g;
            for (g in b) switch (g) {
                case "class":
                    f += " " + b[g];
                    break;
                default:
                    e += " " + g + '="' + b[g] + '"'
            }
            e += ' class="' + f + '">';
            f = a.length;
            for (g = 0; g < f; g++) e += '<li role="menuitemradio" class="_cwBBButton button" data-cwui-bb-idx="' + g + '">' + a[g] + "</li>";
            e += "</ul>";
            return e
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b(function() {
        b(document.body).on("click.cwCheckBox", "._cwCB", function() {
            b(this).cwCheckBox().toggle();
            return !1
        }).on("keydown.cwCheckBox", "._cwCB", function(a) {
            a.keyCode == 32 && b(this).click()
        }).on("click.cwCheckBox", "._cwCBLabel", function() {
            b("#" + b(this).prop("for")).cwCheckBox().toggle();
            return !1
        })
    });
    b.cwUI.addWidget("cwCheckBox", {
        theme: ""
    }, {
        _init: function(a) {
            this.labelObj = null;
            var b = this.$el.attr("data-label");
            if (b) a.label = b, this.$el.attr("data-label", "");
            if (b = this.$el.attr("data-theme")) a.theme =
                b
        },
        _setOption: function(a) {
            if (a.label) {
                var d = b.cwUI.escapeHTML(a.label);
                if (this.labelObj === null) {
                    if (a = this.$el.prop("id")) this.labelObj = b('<label class="_cwCBLabel cwTextUnselectable linkStatus" for="' + a + '">' + d + "</label>"), this.$el.after(this.labelObj)
                } else this.labelObj.text(a.label);
                this.$el.attr("aria-label", d)
            }
        },
        check: function(a) {
            if (!a && this.is_disabled) return this;
            var a = this.$el,
                d = a.find("input");
            a.hasClass("_cwCBChecked") || (a.addClass("_cwCBChecked " + b.cwCheckBox._getClass("active", this.option.theme)).removeClass("_cwCBUnchecked _cwCBPartialChecked " +
                b.cwCheckBox._getClass("mixed", this.option.theme) + " " + b.cwCheckBox._getClass("", this.option.theme)).attr("aria-checked", "true"), d && d.attr({
                name: d.attr("data-cwui-cb-name")
            }), a = [!0, this.getVal(), !1], this.$el.trigger("cwCheckBox_update", a), typeof this.option.update == "function" && this.option.update.apply(this, a));
            return this
        },
        partialCheck: function(a) {
            if (!a && this.is_disabled) return this;
            var a = this.$el,
                d = a.find("input");
            a.hasClass("_cwCBPartialChecked") || (a.addClass("_cwCBPartialChecked " + b.cwCheckBox._getClass("mixed",
                this.option.theme)), a.removeClass("_cwCBChecked _cwCBUnchecked " + b.cwCheckBox._getClass("active", this.option.theme) + " " + b.cwCheckBox._getClass("", this.option.theme)).attr("aria-checked", "mixed"), d && d.removeAttr("name"), a = [!1, this.getVal(), !0], this.$el.trigger("cwCheckBox_update", a), typeof this.option.update == "function" && this.option.update.apply(this, a));
            return this
        },
        unCheck: function(a) {
            if (!a && this.is_disabled) return this;
            var a = this.$el,
                d = a.find("input");
            a.hasClass("_cwCBUnchecked") || (a.addClass("_cwCBUnchecked " +
                b.cwCheckBox._getClass("", this.option.theme)), a.removeClass("_cwCBChecked _cwCBPartialChecked " + b.cwCheckBox._getClass("active", this.option.theme) + " " + b.cwCheckBox._getClass("mixed", this.option.theme)).attr("aria-checked", "false"), d && d.removeAttr("name"), a = [!1, this.getVal(), !1], this.$el.trigger("cwCheckBox_update", a), typeof this.option.update == "function" && this.option.update.apply(this, a));
            return this
        },
        toggle: function() {
            if (this.is_disabled) return this;
            this.$el.hasClass("_cwCBChecked") ? this.unCheck() :
                this.check();
            return this
        },
        isChecked: function() {
            return this.$el.hasClass("_cwCBChecked")
        },
        getVal: function() {
            return this.$el.find("input").val()
        },
        isDisabled: function() {
            return this.is_disabled
        },
        disable: function() {
            this.is_disabled = !0;
            this.option.disable && this.option.disable.apply(this);
            return this
        },
        enable: function() {
            this.is_disabled = !1;
            this.option.enable && this.option.enable.apply(this);
            return this
        }
    }, {
        _create: function(a) {
            var d = a[0];
            if (d.type == "checkbox") {
                var e = a.getAttrs(),
                    d = b(b.cwCheckBox.create(d.checked,
                        d.name, d.value, e));
                a.before(d);
                a.remove();
                return d
            } else return a.hasClass("_cwCB") ? a : !1
        },
        create: function(a, d, e, f) {
            a == void 0 && (a = !1);
            d || (d = "");
            e == void 0 && (e = "on");
            f == void 0 && (f = {});
            var g = "";
            f["data-theme"] != void 0 && (g = f["data-theme"]);
            var l = '<span role="checkbox"',
                k = "_cwCB";
            a ? (k += " _cwCBChecked " + b.cwCheckBox._getClass("active", g), l += ' aria-checked="true"') : (k += " _cwCBUnchecked " + b.cwCheckBox._getClass("", g), l += ' aria-checked="false"');
            for (var i in f) switch (i) {
                case "class":
                    k += " " + f[i];
                    break;
                default:
                    l +=
                        " " + i + '="' + f[i] + '"'
            }
            f = '<input type="hidden"';
            d && (f += ' data-cwui-cb-name="' + d + '"', a && (f += ' name="' + d + '"'));
            e && (f += ' value="' + b.cwUI.escapeHTML(e) + '"');
            f += " />";
            return l + ' class="' + k + '">' + f + "</span>"
        },
        _getClass: function(a, d) {
            var e = "";
            a && (e = b.cwUI.ucFirst(a));
            var f = "";
            d && (f = b.cwUI.ucFirst(d));
            return "ico15Checkbox" + e + f
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    var d = a.cwDatePicker,
        e = {
            "m/d/Y": {
                compact: "m/d",
                regex: /([0-9]+)\/([0-9]+)\/([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 1,
                    d: 2
                },
                regexcompact: /([0-9]+)\/([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "d/m/Y": {
                compact: "d/m",
                regex: /([0-9]+)\/([0-9]+)\/([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 2,
                    d: 1
                },
                regexcompact: /([0-9]+)\/([0-9]+)/,
                regexcompactHint: {
                    m: 2,
                    d: 1
                }
            },
            "Y/m/d": {
                compact: "m/d",
                regex: /([0-9]+)\/([0-9]+)\/([0-9]+)/,
                regexHint: {
                    Y: 1,
                    m: 2,
                    d: 3
                },
                regexcompact: /([0-9]+)\/([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "m-d-Y": {
                compact: "m-d",
                regex: /([0-9]+)-([0-9]+)-([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 1,
                    d: 2
                },
                regexcompact: /([0-9]+)-([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "d-m-Y": {
                compact: "d-m",
                regex: /([0-9]+)-([0-9]+)-([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 2,
                    d: 1
                },
                regexcompact: /([0-9]+)-([0-9]+)/,
                regexcompactHint: {
                    m: 2,
                    d: 1
                }
            },
            "Y-m-d": {
                compact: "m-d",
                regex: /([0-9]+)-([0-9]+)-([0-9]+)/,
                regexHint: {
                    Y: 1,
                    m: 2,
                    d: 3
                },
                regexcompact: /([0-9]+)-([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "m.d.Y": {
                compact: "m.d",
                regex: /([0-9]+)\.([0-9]+)\.([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 1,
                    d: 2
                },
                regexcompact: /([0-9]+)\.([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "d.m.Y": {
                compact: "d.m",
                regex: /([0-9]+)\.([0-9]+)\.([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 2,
                    d: 1
                },
                regexcompact: /([0-9]+)\.([0-9]+)/,
                regexcompactHint: {
                    m: 2,
                    d: 1
                }
            },
            "Y.m.d": {
                compact: "m.d",
                regex: /([0-9]+)\.([0-9]+)\.([0-9]+)/,
                regexHint: {
                    Y: 1,
                    m: 2,
                    d: 3
                },
                regexcompact: /([0-9]+)\.([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "m/d-Y": {
                compact: "m/d",
                regex: /([0-9]+)\/([0-9]+)\-([0-9]+)/,
                regexHint: {
                    Y: 3,
                    m: 1,
                    d: 2
                },
                regexcompact: /([0-9]+)\-([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            },
            "Y\u5e74m\u6708d\u65e5": {
                compact: "m\u6708d\u65e5",
                regex: /([0-9]+)\u5e74([0-9]+)\u6708([0-9]+)\u65e5/,
                regexHint: {
                    Y: 1,
                    m: 2,
                    d: 3
                },
                regexcompact: /([0-9]+)\/([0-9]+)/,
                regexcompactHint: {
                    m: 1,
                    d: 2
                }
            }
        },
        f = null,
        g = null;
    b(function() {
        g = b('<div id="_datePicker" class="datePicker" style="display:none"><div class="tooltipHeader datePickerHeaderControl linkIconStatus"><span id="_datePickerPrev" role="button" aria-label="' + a.pager_prev + '" class="icoFontTriangleLeft"></span><span class="_datePickerYM"></span><span id="_datePickerNext" role="button" aria-label="' + a.pager_next + '" class="icoFontTriangleRight"></span></div><table><thead><tr><th>' +
            d.dayNamesMin[0] + "</th><th>" + d.dayNamesMin[1] + "</th><th>" + d.dayNamesMin[2] + "</th><th>" + d.dayNamesMin[3] + "</th><th>" + d.dayNamesMin[4] + "</th><th>" + d.dayNamesMin[5] + "</th><th>" + d.dayNamesMin[6] + '</th></tr></thead><tbody class="_datePickerDay" style="padding:5px;text-align:right"></tbody></table><div class="tooltipFooter btnGroup"><div id="_datePickerToday" role="button" class="button btnPrimary">' + d.currentText + '</div> <div id="_datePickerClose" role="button" class="button">' + a.button_close + "</div></div>");
        b(document.body).append(g);
        g.on("click.cwDatePicker", "td", function() {
            var a = b(this).attr("data-cwui-dp-date").match(/([0-9]+)-([0-9]+)-([0-9]+)/);
            f.select(a[1], a[2], a[3])
        });
        b("#_datePickerClose").on("click.cwDatePicker", function() {
            f.close()
        });
        b("#_datePickerToday").on("click.cwDatePicker", function() {
            f.today()
        });
        b("#_datePickerNext").on("click.cwDatePicker", function() {
            f.nextMonth()
        });
        b("#_datePickerPrev").on("click.cwDatePicker", function() {
            f.prevMonth()
        })
    });
    b.cwUI.addWidget("cwDatePicker", {
        dateLabel: null,
        dateFormat: "Y/m/d",
        compactLabel: !0
    }, {
        _init: function() {
            var a = this;
            this.tooltip = g.cwToolTip();
            this.$el.on("click.cwDatePicker", function() {
                a.open()
            });
            this._syncDate()
        },
        _syncDate: function() {
            var a = new Date;
            this.now_year = a.getFullYear();
            this.now_month = a.getMonth() + 1;
            this.now_day = a.getDate()
        },
        _setOption: function(a) {
            var d = this;
            a.open != void 0 && this.tooltip.setOption({
                open: function() {
                    typeof d.option.open == "function" && d.option.open.apply(d)
                }
            });
            a.close != void 0 && this.tooltip.setOption({
                close: function() {
                    typeof d.option.close ==
                        "function" && d.option.close.apply(d)
                }
            });
            if (a.dateFormat != void 0) {
                var f = e[a.dateFormat];
                if (f) this.dateFormatInfo = f
            }
            if (a.dateLabel != void 0) a.dateLabel.on("click.cwDatePicker", "._cwDPCancel", function() {
                d.setVal("");
                return !1
            }).on("click.cwDatePicker", "._cwDPDateLabel", function() {
                d.open(b(this))
            })
        },
        open: function(a) {
            this.loadValue();
            f = this;
            if (a == void 0) a = this.$el;
            this._build(this.year, this.month, this.day);
            this.tooltip.open(a);
            return this
        },
        close: function() {
            this.tooltip.close();
            return this
        },
        isOpen: function() {
            return this.tooltip.isOpen()
        },
        getVal: function() {
            if (this.option.dateLabel) {
                var a = this.option.dateLabel.attr("data-value");
                if (!a) return "";
                return a
            } else return this.$el.val()
        },
        setVal: function(d) {
            this.option.dateLabel ? d == "" ? (this.option.dateLabel.quickEmpty(), this.option.dateLabel.attr("data-value", "")) : (this.option.dateLabel.attr("data-value", d), this.loadValue(), this.option.dateLabel.html('<div class="_cwDPDateLabel assignContent assignLimit"><span class="assignContentText">' + (this.option.compactLabel && this.year == this.now_year ? b.cwUI.escapeHTML(this.dateFormatInfo.compact.replace("m",
                this.month).replace("d", this.day)) : b.cwUI.escapeHTML(d)) + '</span><span class="_cwDPCancel assignContentCancel"><span class="icoFontCancel"></span><span class="icoTextHide">' + a.button_delete + "</span></span></div>")) : this.$el.val(d);
            typeof this.option.update == "function" && this.option.update.apply(this);
            return this
        },
        select: function(a, b, d) {
            this.setVal(this.option.dateFormat.replace("Y", a).replace("m", b).replace("d", d));
            this.close();
            return this
        },
        today: function() {
            this._syncDate();
            this.select(this.now_year,
                this.now_month, this.now_day);
            return this
        },
        loadValue: function() {
            var a = this.getVal();
            this.val_day = this.val_month = this.val_year = 0;
            if (a.length > 0 && (a = a.match(this.dateFormatInfo.regex))) this.val_year = parseInt(a[this.dateFormatInfo.regexHint.Y], 10), this.val_month = parseInt(a[this.dateFormatInfo.regexHint.m], 10), this.val_day = parseInt(a[this.dateFormatInfo.regexHint.d], 10), this.year = this.val_year, this.month = this.val_month, this.day = this.val_day;
            if (!this.val_year) this.year = this.now_year, this.month = this.now_month;
            return this
        },
        nextMonth: function() {
            this.month++;
            this._build();
            return this
        },
        prevMonth: function() {
            this.month--;
            this._build();
            return this
        },
        _build: function() {
            var a = new Date(this.year, this.month - 1, 1);
            this.year = a.getFullYear();
            this.month = a.getMonth() + 1;
            var a = this.year,
                b = this.month,
                e = new Date(a, b, 0),
                f = (new Date(a, b - 1, 1)).getDay();
            e.getDay();
            var e = e.getDate(),
                j = a,
                o = b,
                m = 1,
                n = "",
                t = !1;
            this._syncDate();
            for (var u = 1; u <= 6; u++) {
                n += "<tr>";
                for (var s = 0; s < 7; s++) {
                    u == 1 ? s < f ? (m = new Date(a, b - 1, s - f + 1), j = m.getFullYear(), o = m.getMonth() +
                        1, m = m.getDate()) : s == f ? (j = a, o = b, m = 1, t = !0) : m++ : m >= e ? (t = !1, o = new Date(a, b, 1), j = o.getFullYear(), o = o.getMonth() + 1, m = 1) : m++;
                    var v = "";
                    t ? j == this.now_year && o == this.now_month && m == this.now_day && (v = "datePickerToday") : v = "datePickerOtherMonth";
                    j == this.val_year && o == this.val_month && m == this.val_day && (v.length > 0 && (v += " "), v += "datePickerSelected");
                    n += '<td data-cwui-dp-date="' + j + "-" + o + "-" + m + '" class="' + v + '">' + m + "</td>"
                }
                n += "</tr>"
            }
            YMLabel = d.showMonthAfterYear ? a + d.yearSuffix + d.yearMonthSeparator + d.monthNames[b - 1] : d.monthNames[b -
                1] + d.yearMonthSeparator + a + d.yearSuffix;
            g.find("._datePickerYM").text(YMLabel);
            g.find("._datePickerDay").html(n);
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    var d = [],
        e = b(document.body);
    b(function() {
        e.on("keydown.cwDialog", function(a) {
            a.keyCode == 27 && d.length > 0 && (a = d[d.length - 1], a.option.closeOnEscape && a.close())
        })
    });
    b.cwUI.addWidget("cwDialog", {
        title: "",
        width: 300,
        height: "auto",
        windowMargin: 7,
        autoOpen: !1,
        closeOnEscape: !0
    }, {
        agree_checkboxes: [],
        checked_agree_checkboxes_count: 0,
        _init: function() {
            var d = this;
            this.wrapper = this.$el.wrap('<div class="_cwDGBase dialogBase" style="display:none"><div class="_cwDGWrapper dialogContent"></div></div>').parent();
            this.backbox = this.wrapper.parent();
            this.wrapper.prepend('<h1 class="contentHl dialogContentH1 autotrim"></h1><div class="_cwDGTitleButton windowButton linkIconStatus"><span role="button" aria-label="' + a.button_close + '" class="_cwDGButton icoFontCancel icoSizeLarge"></span></div><div style="display:none" class="_cwDGFooter dialogContentFooter"></div>');
            this.title = this.wrapper.find("h1");
            this.footer = this.wrapper.find("._cwDGFooter");
            this.$el.addClass("_cwDG").attr("role", "dialog").show();
            this.content =
                this.$el.find("._cwDGContent").addClass("dialogContentArea");
            this.agree_checkboxes = this.wrapper.find("._cwDGAgreeCheckbox");
            this.agree_checkboxes.size() > 0 && (this.agree_checkboxes.each(function() {
                b(this).prop("checked") && (d.checked_agree_checkboxes_count += 1)
            }), this.agree_checkboxes.cwCheckBox({
                update: function() {
                    this.isChecked() ? d.checked_agree_checkboxes_count += 1 : d.checked_agree_checkboxes_count -= 1;
                    d._changeButtonStatus()
                }
            }));
            this.wrapper.on("click.cwDialog", "._cwDGButton", function() {
                var a = b(this).attr("data-idx"),
                    a = a == void 0 ? null : parseInt(a, 10);
                d.buttonClick(a);
                return !1
            })
        },
        _setOption: function(a) {
            if (a.title != void 0)
                if (a.title) {
                    this.wrapper.find("._cwDGTitleButton").show();
                    var d = b.cwUI.escapeHTML(a.title);
                    this.title.html(d).show();
                    this.$el.attr("aria-label", d)
                } else this.wrapper.find("._cwDGTitleButton").hide(), this.title.quickEmpty().hide(), this.$el.attr("aria-label", "");
            if (this.option.buttonLabels != void 0 && (a.buttonLabels != void 0 || a.buttonSubmit != void 0 || a.buttonDelete != void 0 || a.buttonCancel != void 0)) {
                for (var d =
                        "", e = ["buttonSubmit", "buttonDelete", "buttonCancel"], k = {}, i = e.length; i--;) {
                    var h = e[i],
                        j = this.option[h];
                    if (j != void 0)
                        if (typeof j == "object" && j.length)
                            for (var o = j.length; o--;) k[j[o]] = h;
                        else k[j] = h
                }
                e = this.option.buttonLabels.length;
                for (i = 0; i < e; i++) {
                    h = "buttonGray";
                    j = "";
                    switch (k[i]) {
                        case "buttonSubmit":
                            h = "btnPrimary";
                            break;
                        case "buttonDelete":
                            h = "btnDanger";
                            break;
                        case "buttonCancel":
                            j += " _cwDGButtonCancel"
                    }
                    o = b.cwUI.escapeHTML(this.option.buttonLabels[i]);
                    d += '<div role="button" aria-label="' + o + '" class="_cwDGButton' +
                        j + " button " + h + '" data-idx="' + i + '">' + o + "</div>"
                }
                d ? this.wrapper.find("._cwDGFooter").html(d).show() : this.wrapper.find("._cwDGFooter").quickEmpty().hide()
            }
            this._changeButtonStatus();
            a.autoOpen != void 0 && a.autoOpen && this.open()
        },
        open: function() {
            var a = this;
            this.is_open = !0;
            var e = this.$el;
            typeof a.option.open == "function" && a.option.open.apply(a, arguments);
            d.push(this);
            b.cwUI.setZIndex(this.backbox);
            this.backbox.fadeIn("fast");
            var l = arguments;
            this.backbox.fadeIn("fast", function() {
                a.option.openCallback && a.option.openCallback.apply(a,
                    l)
            });
            if (this.option.width == "auto") {
                e.css("display", "inline-block");
                var k = this.wrapper.outerWidth() - this.wrapper.width(),
                    k = e.outerWidth() + k;
                e.css("display", "block");
                this.wrapper.width(k)
            } else this.wrapper.width(this.option.width);
            k = this.wrapper.width();
            this.option.maxWidth && this.option.maxWidth < k && this.wrapper.width(this.option.maxWidth);
            this.option.minWidth && this.option.minWidth > k && this.wrapper.width(this.option.minWidth);
            switch (this.option.height) {
                case "auto":
                case "full":
                    var i = 0;
                    this.option.title &&
                        (i = this.title.outerHeight());
                    var h = 0;
                    this.option.buttonLabels && (h = this.footer.outerHeight());
                    k = a.getMaxHeight();
                    i = this.option.height == "auto" ? e.innerHeight() + i + h : k;
                    h = 0;
                    i > k && (e = this.option.contentScrollSelector ? e.find(this.option.contentScrollSelector) : e, e.height(e.height() - (i - k)), e.css({
                        overflow: "auto"
                    }), i = k);
                    this.wrapper.height(i);
                    break;
                default:
                    this.wrapper.height(this.option.height)
            }
            e = this.wrapper.height();
            this.option.maxHeight && this.option.maxHeight < e && this.wrapper.height(this.option.maxHeight);
            this.option.minHeight && this.option.minHeight > e && this.wrapper.height(this.option.minHeight);
            e = this.backbox.height();
            i = this.wrapper.outerHeight();
            this.wrapper.css("margin-top", parseInt(e / 2 - i / 2, 10) + "px");
            typeof a.option.postOpen == "function" && a.option.postOpen.apply(a, arguments);
            return this
        },
        close: function() {
            if (this.is_open) return this.is_open = !1, typeof this.option.close == "function" && this.option.close.apply(this, arguments), b.cwFloatBox.closeUpperLayer(this.backbox), b.cwUI.unsetZIndex(this.backbox), this.backbox.fadeOut("fast",
                function() {}), d.pop(), b("#_cwDGBase").fadeOut("fast"), this
        },
        buttonClick: function(a) {
            if (a === null) this.close();
            else {
                var b = this.wrapper.find("[data-idx=" + a + "]");
                b.length > 0 && (typeof this.option.buttonClick == "function" && this.option.buttonClick.apply(this, [a]), b.hasClass("_cwDGButtonCancel") && this.close())
            }
            return this
        },
        isAgreed: function() {
            var a = this.agree_checkboxes.size();
            if (a === 0) return !0;
            if (a === this.checked_agree_checkboxes_count) return !0;
            return !1
        },
        _changeButtonStatus: function() {
            var a = this.wrapper.find("._cwDGButton").not(".buttonGray");
            this.isAgreed() ? a.removeClass("btnDisable") : a.addClass("btnDisable")
        },
        getMaxHeight: function() {
            return b(window).height() - this.option.windowMargin * 2
        }
    }, {
        isShown: function() {
            if (d.length > 0) return !0;
            return !1
        },
        close: function() {
            if (d.length > 0)
                for (var a = dialog_stask.length; a--;) d[a].close()
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwDropDown", {
        showPosition: "right",
        useHtmlLabel: !1,
        list: []
    }, {
        _init: function() {
            var a = this;
            a.tip_body = b('<div style="display:none"></div>');
            a.tip_body.on("click.cwDropDown", "li._cwDDList", function() {
                a.select(b(this).attr("data-cwui-dd-value"))
            });
            b(document.body).append(a.tip_body);
            this.tooltip = a.tip_body.cwToolTip({
                direction: "bottom",
                noTriangle: !0
            });
            this.$el.on("click.cwDropDown", function() {
                a.open(a.$el)
            });
            this.latest_list = ""
        },
        _setOption: function(a) {
            var b = this;
            a.open !=
                void 0 && this.tooltip.setOption({
                    open: function() {
                        typeof b.option.open == "function" && b.option.open.apply(b, arguments)
                    }
                });
            a.close != void 0 && this.tooltip.setOption({
                close: function() {
                    typeof b.option.close == "function" && b.option.close.apply(b, arguments)
                }
            });
            var e = ["offsetTop", "offsetLeft", "showPosition", "theme", "useFloatBox", "parentFloatBox"],
                f = !1,
                g = {},
                l;
            for (l in e) {
                var k = e[l];
                a[k] != void 0 && (f = !0, g[k] = a[k])
            }
            f && this.tooltip.setOption(g)
        },
        open: function() {
            var a = this._getList(),
                d = '<ul role="menu" class="_cwDDListBody cwNoWrap ddListBody">';
            if (b.isArray(a))
                for (var e = 0, f = a.length; e < f; e++)
                    if (a[e] == "hr") d += '</ul><div class="line"></div><ul role="menu" class="_cwDDListBody ddListBody cwNoWrap">';
                    else {
                        var g = this.option.useHtmlLabel ? a[e].label : b.cwUI.escapeHTML(a[e].label);
                        d += '<li role="menuitem" class="_cwDDList" data-cwui-dd-value="' + b.cwUI.escapeHTML(a[e].value) + '">' + g + "</li>"
                    }
            d += "</ul>";
            if (this.latest_list != d) this.tip_body.html(d), this.latest_list = d;
            this.tooltip.open(this.$el);
            return this
        },
        close: function() {
            this.tooltip.close();
            return this
        },
        isOpen: function() {
            return this.tooltip.isOpen()
        },
        select: function(a) {
            typeof this.option.select == "function" && this.option.select.apply(this, [a]);
            this.tooltip.close();
            return this
        },
        _getList: function() {
            return typeof this.option.list == "function" ? this.option.list() : this.option.list
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwElasticTextArea", {
        minHeight: 50,
        maxHeight: !1,
        lineHeight: "auto"
    }, {
        _init: function() {
            var a = this,
                b = this.$el;
            a.is_focused = !1;
            b.on("keydown.cwElasticTextArea", function() {
                a.resize();
                typeof a.option.update == "function" && a.option.update.apply(a)
            }).on("keyup.cwElasticTextArea", function() {
                a.resize();
                typeof a.option.update == "function" && a.option.update.apply(a)
            }).on("focus.cwElasticTextArea", function() {
                a.is_focused = !0;
                a.resize()
            })
        },
        _setOption: function(a) {
            var b = this.$el;
            if (a.lineHeight !==
                void 0 && a.lineHeight === "auto") this.line_height_auto = parseFloat(b.css("line-height"))
        },
        getVal: function() {
            return this.$el.val()
        },
        setVal: function(a) {
            this.$el.val(a);
            this.resize();
            return this
        },
        focus: function() {
            this.$el.focus().caretPos("last");
            return this
        },
        clearFocused: function() {
            this.is_focused = !1;
            this.resize();
            return this
        },
        resize: function() {
            var a = this.$el;
            if (a.val() === "" && !this.is_focused) a.css({
                "overflow-y": "hidden",
                height: ""
            });
            else {
                a.height();
                var b = a.scrollTop();
                a.height(0);
                var e;
                e = this.option.lineHeight ===
                    "auto" ? this.line_height_auto : parseInt(this.option.lineHeight, 10);
                e = a[0].scrollHeight + e;
                var f;
                f = typeof this.option.minHeight === "function" ? this.option.minHeight.apply(this) : this.option.minHeight;
                e < f && (e = f);
                var g = !1;
                if (this.option.maxHeight) {
                    var l;
                    l = typeof this.option.maxHeight === "function" ? this.option.maxHeight.apply(this) : this.option.maxHeight;
                    f > l && (l = f);
                    e > l && (e = l, g = !0)
                }
                a.height(e);
                g ? a.css("overflow-y", "auto").scrollTop(b) : a.css("overflow-y", "hidden");
                return this
            }
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    var d = {};
    b(function() {
        b(document.body).on("click.cwFloatWindow", "._cwFWButton", function() {
            var a = b(this),
                d = a.closest("._cwFWInner")[0],
                d = b.cwFloatWindow.getWidget(d),
                a = parseInt(a.attr("data-cwui-fw-idx"), 10);
            d.buttonClick(a)
        }).on("keydown.cwFloatWindow", function(a) {
            a.keyCode == 27 && b.cwFloatWindow.close()
        })
    });
    b.cwUI.addWidget("cwFloatWindow", {
        title: "",
        wrapperSelector: "body",
        width: 780,
        allowOverlay: !1,
        noAnimation: !1
    }, {
        _init: function() {
            var b = this.$el;
            b.wrap('<div class="floatWindow"></div>');
            b.attr("role", "dialog");
            this.finner = b.addClass("_cwFWInner floatWindowInner");
            this.fwindow = b.parent().hide();
            this.fcontent = b.find("._cwFWContent").addClass("floatWindowContent");
            this.finner.prepend('<h1 class="contentHl floatContentH1"></h1><div class="windowButton linkIconStatus"><span class="_cwFWButton icoFontCancel icoSizeLarge" data-cwui-fw-idx="-1"></span><span class="icoTextHide">' + a.button_close + "</span></div>");
            this.finner.append('<div style="display:none" class="_cwFWButtonFooter floatWindowFooter"></div>');
            d[this.widget_id] = this
        },
        _setOption: function(a) {
            if (a.title != void 0) {
                var d = b.cwUI.escapeHTML(a.title);
                this.finner.find("h1").html('<span class="autotrim">' + d + "</span>");
                this.$el.attr("aria-label", d)
            }
            a.htmlTitle != void 0 && this.$el.attr("aria-label", this.finner.find("h1").html('<span class="autotrim">' + a.htmlTitle + "</span>").text());
            if (this.option.buttonLabels != void 0 && (a.buttonLabels != void 0 || a.buttonSubmit != void 0 || a.buttonCancel)) {
                for (var a = "", d = this.option.buttonLabels.length, g = 0; g < d; g++) {
                    var l = "buttonGray",
                        k = "";
                    this.option.buttonSubmit != void 0 && this.option.buttonSubmit == g ? l = "btnPrimary" : this.option.buttonCancel != void 0 && this.option.buttonCancel == g && (k += " _cwFWButtonCancel");
                    var i = b.cwUI.escapeHTML(this.option.buttonLabels[g]);
                    a += '<div role="button" aria-label="' + i + '" class="_cwFWButton' + k + " button " + l + '" data-cwui-fw-idx="' + g + '">' + i + "</div>"
                }
                a ? this.finner.find("._cwFWButtonFooter").html(a).show() : this.finner.find("._cwFWButtonFooter").quickEmpty().hide()
            }
        },
        open: function() {
            var a = this,
                f = this.$el,
                g = this.option;
            typeof a.option.open == "function" && a.option.open.apply(a, arguments);
            if (this.is_open) f.scrollTop(0);
            else {
                var l = [];
                if (!g.allowOverlay)
                    for (var k in d) d[k].isOpen() && l.push(k);
                g = function() {
                    for (var b = l.length; b--;) d[l[b]].close();
                    a.resize();
                    a.fcontent.scrollTop(0)
                };
                a.resize();
                f.show();
                this.option.noAnimation ? (a.fwindow.show(), g()) : a.fwindow.fadeIn("fast", g);
                b.cwUI.setZIndex(a.fwindow)
            }
            this.is_open = !0;
            typeof a.option.postOpen == "function" && a.option.postOpen.apply(a, arguments);
            return this
        },
        close: function() {
            var a =
                this,
                d = function() {
                    typeof a.option.close == "function" && a.option.close.apply(a, arguments)
                };
            b.cwFloatBox.closeUpperLayer(a.fwindow);
            b.cwUI.unsetZIndex(a.fwindow);
            this.option.noAnimation ? (a.fwindow.hide(), d()) : a.fwindow.fadeOut("fast", d);
            this.is_open = !1;
            return this
        },
        buttonClick: function(a) {
            if (a == -1) this.close(), typeof this.option.cancel == "function" && this.option.cancel.apply(this);
            else {
                var b = this.finner.find("[data-cwui-fw-idx=" + a + "]");
                b.length > 0 && (typeof this.option.buttonClick == "function" && this.option.buttonClick.apply(this, [a]), b.hasClass("_cwFWButtonCancel") && (this.close(), typeof this.option.cancel == "function" && this.option.cancel.apply(this)))
            }
            return this
        },
        resize: function() {
            var a = this.$el,
                d = b(window).innerWidth(),
                d = parseInt((d - this.option.width) / 2, 10);
            a.css({
                left: d,
                right: d
            });
            b(this.option.wrapperSelector);
            a = b(this.option.wrapperSelector).height();
            this.fcontent.height(a);
            var d = this.finner.find("h1").outerHeight(),
                g = this.finner.find("._cwFWHeader").length > 0 ? this.finner.find("._cwFWHeader").outerHeight() : 0,
                l = this.finner.find("._cwFWFooter"),
                l = l.length > 0 && l.isVisible() ? l.outerHeight() : 0,
                k = this.finner.find("._cwFWButtonFooter"),
                i = k.isVisible() ? k.outerHeight() : 0,
                k = this.fcontent,
                h = k.innerHeight() - k.height(),
                a = a - d - g - l - i - h;
            k.height(a);
            typeof this.option.resize == "function" && this.option.resize.apply(this, [a]);
            return this
        }
    }, {
        isShown: function() {
            for (var a in d)
                if (d[a].isOpen()) return !0;
            return !1
        },
        resize: function() {
            for (var a in d) {
                var b = d[a];
                b.isOpen() && b.resize()
            }
            return this
        },
        close: function() {
            for (var a in d) {
                var b = d[a];
                b.isOpen() && b.close()
            }
            return this
        }
    })
})(jQuery,
    jQuery.cwUI.L);
(function(b, a) {
    b.cwUI.addWidget("cwListTip", {
        search: !0,
        useHtmlLabel: !1,
        multiSelect: !1,
        selectable: !0,
        fixHeight: !0,
        maxListHeight: 160,
        limit: 200
    }, {
        ul: null,
        tooltip: null,
        searchbox: null,
        search_focus_idx: 0,
        _init: function() {
            var a = this,
                e = this.$el;
            e.prepend('<div class="_cwLTSearchArea toolTipSearchArea"><div class="_cwLTSearchBoxArea"></div><div class="_cwLTCheckHandle tooltipCheckHandle" style="display:none"></div><div class="_cwLTSelectOptionArea tooltipCheckHandle" style="display:none"></div></div><ul class="_cwLTList cwTextUnselectable toolTipSelectList tooltipList toolTipListHeight"></ul>');
            this.ul =
                e.find("ul._cwLTList");
            this.ul.attr("role", "list");
            e.addClass("toolTipListWidth");
            this.ul.on("click.cwListTip", "li", function() {
                var e = b(this);
                a.select(e.attr("data-cwui-lt-value"), e)
            });
            this.tooltip = e.cwToolTip({
                open: function() {
                    typeof a.option.open == "function" && a.option.open.apply(a, arguments);
                    a.searchbox && a.searchbox.setVal("");
                    a.build()
                }
            });
            this.searchbox = null;
            this.select_list = [];
            this.select_dat = {}
        },
        _setOption: function(d) {
            var e = this,
                f = this.$el;
            d.maxListHeight && this.ul.css("max-height", d.maxListHeight);
            d.fixHeight != void 0 && (d.fixHeight ? this.ul.css("height", d.maxListHeight) : this.ul.css("height", !1));
            d.close != void 0 && this.tooltip.setOption({
                close: function() {
                    typeof e.option.close == "function" && e.option.close.apply(e, arguments)
                }
            });
            if (d.search != void 0)
                if (d.search) {
                    e.search_focus_idx = 0;
                    var g = {
                        update: function() {
                            e.search_focus_idx = 0;
                            e.build()
                        }
                    };
                    g.placeHolder = d.placeHolder ? d.placeHolder : a.button_search;
                    this.searchbox = f.find("._cwLTSearchBoxArea").html('<input class="inputMedium" type="text" />').find("input").cwSearchBox(g);
                    var l = function() {
                            var a = e.ul.find("li");
                            if (a.length == 0) e.search_focus_idx = 0;
                            else {
                                a.removeClass("toolTipListHover");
                                e.search_focus_idx--;
                                if (e.search_focus_idx < 0) e.search_focus_idx = 0;
                                if (e.search_focus_idx > 0) {
                                    a = b(a[e.search_focus_idx - 1]);
                                    a.addClass("toolTipListHover");
                                    var d = e.ul.offset().top;
                                    a.offset().top < d && e.ul.scrollTo(a)
                                }
                            }
                        },
                        k = function() {
                            var a = e.ul.find("li");
                            if (a.length == 0) e.search_focus_idx = 0;
                            else {
                                a.removeClass("toolTipListHover");
                                e.search_focus_idx++;
                                if (a.length < e.search_focus_idx) e.search_focus_idx =
                                    a.length;
                                a = b(a[e.search_focus_idx - 1]);
                                a.addClass("toolTipListHover");
                                var d = e.ul.offset().top + e.ul.height();
                                a.offset().top + a.height() > d && e.ul.scrollTo(a)
                            }
                        };
                    this.searchbox.$el.keydown(function(a) {
                        switch (a.keyCode) {
                            case 13:
                                if (e.search_focus_idx > 0) {
                                    var d = e.ul.find("li");
                                    setTimeout(function() {
                                        b(d[e.search_focus_idx - 1]).click()
                                    }, 200)
                                }
                                break;
                            case 38:
                                l();
                                break;
                            case 40:
                                k()
                        }
                    })
                } else this.searchbox && this.searchbox.quickEmpty();
            else d.placeHolder != void 0 && this.searchbox && this.searchbox.setOption({
                placeHolder: d.placeHolder
            });
            if (d.multiSelect != void 0) {
                var g = f.find("._cwLTCheckHandle"),
                    i = this.ul;
                d.multiSelect ? (i.addClass("toolTipSelectList"), g.html('<span class="_cwLTCheckAll linkStatus">' + a.checkall + '</span> / <span class="_cwLTUnCheckAll linkStatus">' + a.uncheckall + "</span>"), g.find("._cwLTCheckAll").on("click.cwListTip", function() {
                        i.find("li").each(function() {
                            var a = b(this);
                            a.hasClass("listSelected") || a.click()
                        })
                    }), g.find("._cwLTUnCheckAll").on("click.cwListTip", function() {
                        i.find("li.listSelected").click()
                    }), g.show()) :
                    (g.quickEmpty(), g.hide())
            }
            if (d.selectOptionArea != void 0) f = f.find("._cwLTSelectOptionArea"), i = this.ul, d.selectOptionArea ? (f.html(d.selectOptionArea), f.show()) : (f.quickEmpty(), f.hide());
            d.selectable != void 0 && (d.selectable ? this.ul.addClass("toolTipSelectList") : this.ul.removeClass("toolTipSelectList"));
            var f = ["offsetTop", "offsetLeft", "showPosition", "direction", "noAnimation", "noTriangle", "useFloatBox", "parentFloatBox", "theme"],
                h;
            for (h in f)
                if (g = f[h], d[g] != void 0) {
                    var j = {};
                    j[g] = d[g];
                    this.tooltip.setOption(j)
                }
        },
        open: function() {
            this.tooltip.open.apply(this.tooltip, arguments);
            this.ul.scrollTop(0);
            this.searchbox && this.searchbox.$el.focus();
            return this
        },
        move: function() {
            this.tooltip.move(this.$el);
            return this
        },
        close: function() {
            if (this.searchbox) this.searchbox.$el.blur(), this.search_focus_idx = 0;
            this.tooltip.close.apply(this.tooltip, arguments);
            return this
        },
        isOpen: function() {
            return this.tooltip.isOpen()
        },
        getVal: function() {
            for (var a = [], b = this.select_list.length, f = 0; f < b; f++) a.push(this.select_list[f]);
            return this.option.multiSelect ?
                a : a[0]
        },
        setVal: function(a) {
            this.clear();
            for (var b = a.length, f = 0; f < b; f++) this.select(a[f]);
            return this
        },
        select: function(a, b) {
            !this.option.multiSelect && this.option.selectable && (this.clear(), b = null);
            this.option.selectable && (b || (b = this.findItemByValue(a)), this.select_dat[a] ? (b.length > 0 && b.removeClass("listSelected"), this.select_list.splice(array_search(a, this.select_list), 1), delete this.select_dat[a]) : (b.length > 0 && b.addClass("listSelected"), this.select_list.push(a), this.select_dat[a] = !0), typeof this.option.update ==
                "function" && this.option.update.apply(this));
            typeof this.option.select == "function" && this.option.select.apply(this, [a]);
            return this
        },
        clear: function() {
            this.select_list = [];
            this.select_dat = {};
            typeof this.option.update == "function" && this.option.update.apply(this);
            this.build();
            return this
        },
        getList: function() {
            var a = typeof this.option.list == "function" ? this.option.list.apply(this) : this.option.list,
                b = [],
                f = [];
            this.searchbox && (f = this.searchbox.getVal().toLowerCase().replace(/^\s+|\s+$/g, "").split(/\s+/));
            for (var g =
                    a.length, l = 0; l < g; l++) {
                var k = "",
                    i = a[l],
                    k = i.keys != void 0 ? i.keys.join(" ") : i.label,
                    k = k.toLowerCase();
                (function() {
                    for (var a = 0; a < f.length; a++)
                        if (k.indexOf(f[a]) === -1) return;
                    b.push(i)
                })()
            }
            return b
        },
        findItemByValue: function(a) {
            return this.ul.find("li[data-cwui-lt-value=" + a + "]")
        },
        getValueByItem: function(a) {
            if (a instanceof jQuery) return a.attr("data-cwui-lt-value")
        },
        build: function() {
            if (this.option.list == void 0 || !this.isOpen()) return !1;
            var d = "",
                e = this.getList();
            if (b.isArray(e)) {
                for (var f = 0, g = e.length, l = 0; l <
                    g; l++) {
                    var k = e[l];
                    f++;
                    if (!(f > this.option.limit)) {
                        var i = b.cwUI.escapeHTML(k.value),
                            h = this.option.useHtmlLabel ? k.label : b.cwUI.escapeHTML(k.label);
                        d += this.option.selectable ? this.select_dat[k.value] != void 0 ? '<li class="_cwSelectableRow listSelected" role="listitem" data-cwui-lt-idx="' + l + '" data-cwui-lt-value="' + i + '">' + b.cwCheckBox.create(!0, "", l, {
                            "data-theme": "green"
                        }) + h + "</li>" : '<li class="_cwSelectableRow" role="listitem" data-cwui-lt-idx="' + l + '" data-cwui-lt-value="' + i + '">' + b.cwCheckBox.create(!1,
                            "", l, {
                                "data-theme": "green"
                            }) + h + "</li>" : '<li role="listitem" data-cwui-lt-idx="' + l + '" data-cwui-lt-value="' + i + '">' + h + "</li>"
                    }
                }
                f > this.option.limit && (d += '<div style="text-align:center;font-size:12px;color:#666">' + a.cwui_listip_list_overflow.replace(/%%num%%/, b.cwUI.formatNumber(f - this.option.limit)) + " " + a.cwui_listip_list_overflow_max.replace(/%%num%%/, b.cwUI.formatNumber(this.option.limit)) + "</div>");
                this.ul.html(d);
                return this
            }
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    var a = null,
        d = b('<div style="display:none"><p class="_cwMTMessage cwNoWrap"></p></div>');
    b(function() {
        b(document.body).append(d)
    });
    var e = "",
        f = null,
        g = !1,
        l = null,
        k = !1,
        i = null;
    b.cwUI.addWidget("cwMessageTip", {
        theme: "black",
        delay: 0,
        useHtml: !1,
        delayQuickMode: !0,
        closeOnClick: !0
    }, {
        _init: function() {
            var a = this,
                b = this.$el;
            this.is_disabled = !1;
            this.tooltip = d.cwToolTip({
                noAnimation: !0
            });
            b.on("mouseenter.cwMessageTip", function() {
                a.open()
            });
            b.on("mouseleave.cwMessageTip", function() {
                a.close()
            })
        },
        _setOption: function(a) {
            var b =
                this,
                d = this.$el;
            a.open != void 0 && this.tooltip.setOption({
                open: function() {
                    typeof b.option.open == "function" && b.option.open.apply(b)
                }
            });
            a.close != void 0 && this.tooltip.setOption({
                close: function() {
                    typeof b.option.close == "function" && b.option.close.apply(b)
                }
            });
            if (a.closeOnClick != void 0)
                if (a.closeOnClick) d.on("click.cwMessageTip", function() {
                    b.close()
                });
                else d.off("click.cwMessageTip");
            var d = ["offsetTop", "offsetLeft", "showPosition", "direction", "noTriangle", "theme"],
                e;
            for (e in d) {
                var f = d[e];
                if (a[f] != void 0) {
                    var g = {};
                    g[f] = a[f];
                    this.tooltip.setOption(g)
                }
            }
        },
        open: function() {
            var b = this;
            if (b.is_disabled) return b;
            a = b;
            g = !0;
            l = b;
            f && (clearTimeout(f), f = null);
            var d = b.option.delayQuickMode && k ? 0 : l.option.delay,
                o = function() {
                    g ? (b.refresh(l.$el), e && (l.tooltip.open(l.$el), k = !0)) : (b.tooltip.close(), l._closeTip());
                    f = null
                };
            d ? f = setTimeout(o, d) : o();
            i && (clearTimeout(i), i = null);
            return b
        },
        close: function() {
            if (this.is_disabled) return this;
            a = null;
            g = !1;
            l = this;
            this._closeTip();
            return this
        },
        isOpen: function() {
            return this.tooltip.isOpen()
        },
        refresh: function(a) {
            a = this.getMessage(a);
            e != a && (this.option.useHtml ? d.find("._cwMTMessage").html(a) : d.find("._cwMTMessage").text(a), e = a);
            return this
        },
        _closeTip: function() {
            i && clearTimeout(i);
            this.tooltip.close();
            i = setTimeout(function() {
                k = !1
            }, 300);
            return this
        },
        getMessage: function(a) {
            return typeof this.option.message != "function" ? this.option.message : this.option.message.apply(this, [a])
        },
        disable: function() {
            this.is_disabled = !0;
            return this
        },
        enable: function() {
            this.is_disabled = !1;
            return this
        }
    }, {
        isShown: function() {
            return a !=
                null
        },
        close: function() {
            a && a.close();
            return this
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.fn.cwPlaceHolder = function() {
        b.browser.msie && (b("input[placeholder]").each(function() {
            var a = b(this);
            a.addClass("_placeHolder");
            a.blur()
        }), b(document).on("foucs.cwPlaceHolder", "._placeHolder", function() {
            var a = b(this);
            a.hasClass("_placeHolderBlank") && (a.val(""), a.removeClass("_placeHolderBlank"))
        }).on("blur.cwPlaceHolder", "_placeHolder", function() {
            var a = b(this);
            a.val() == "" && (a.val(a.prop("placeholder")), a.addClass("_placeHolderBlank"))
        }))
    }
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwScrollTable", {}, {
        _init: function() {
            var a = this.$el;
            this.id = a[0].id;
            a.addClass("basicTableHeader");
            this.header_row = a.find("thead th");
            this.column_num = this.header_row.length;
            this.column_padding = [];
            this.column_width = [];
            for (var d = this.id + "_cwST_body", e = '<div style="overflow-y:auto"><table id="' + d + '" class="basicTable"><thead><tr class="basicTableHiddenRow">', f = 0; f < this.column_num; f++) {
                e += "<th></th>";
                var g = b(this.header_row[f]);
                this.column_padding[f] = g.outerWidth() - g.width()
            }
            e +=
                "</tr></thead><tbody></tbody></table>";
            this.body_box = b(e);
            a.after(this.body_box);
            this.body_table = b("#" + d);
            this.body_table.find("tbody").replaceWith(a.find("tbody"));
            this.body_table_head = this.body_table.find("thead th");
            this.body_table_body = this.body_table.find("tbody")
        },
        _setOption: function() {},
        addRow: function(a, d) {
            d == void 0 && (d = {});
            var e = b("<tr></tr>");
            d.tr != void 0 && e.attr(d.tr);
            for (var f = 0; f < this.column_num; f++) {
                var g = b('<td><div class="autotrim" style="width:' + this.column_width[f] + 'px;">' + a[f] +
                    "</div></td>");
                d.td != void 0 && d.td[f] != void 0 && g.attr(d.td[f]);
                e.append(g)
            }
            this.body_table_body.append(e);
            return this
        },
        addMergedRow: function(a, d) {
            d == void 0 && (d = {});
            var e = b("<tr></tr>"),
                f = b('<td colspan="' + this.column_num + '">' + a + "</td>");
            d.tr != void 0 && e.attr(d.tr);
            d.td != void 0 && f.attr(d.td);
            e.append(f);
            this.body_table_body.append(e);
            return this
        },
        empty: function() {
            this.body_table_body.quickEmpty();
            return this
        },
        resize: function(a) {
            typeof this.option.preResize == "function" && this.option.preResize.apply(this);
            var d = this.$el.width(),
                e = this.option.columnWidth,
                f, g, l, k = 0,
                i = [];
            for (l = 0; l < this.column_num; l++) {
                var h = e[l];
                h != "auto" ? (k += h, l != this.column_num - 1 && (f = b(this.body_table_head[l]), g = this.column_padding[l], this.column_width[l] = h - g, f.width(this.column_width[l]))) : i.push(l)
            }
            e = i.length;
            if (e > 0) {
                d = parseInt((d - k) / e, 10);
                for (l = 0; l < e; l++) f = b(this.body_table_head[i[l]]), g = this.column_padding[l], this.column_width[l] = d - g, f.width(this.column_width[l])
            }
            for (l = 0; l < this.column_num - 1; l++) b(this.header_row[l]).width(b(this.body_table_head[l]).width());
            this.body_box.height(a - this.$el.height());
            typeof this.option.postResize == "function" && this.option.postResize.apply(this);
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b, a) {
    var d = {
        placeHolder: a.button_search
    };
    b(function() {
        var a = null;
        b(document.body).on("keydown.cwSearchBox", "._cwSB", function(b) {
            a = b.keyCode
        }).on("keyup.cwSearchBox", "._cwSB", function(d) {
            var g = b(this);
            g.val().length > 0 ? g.parent().find("._cwSBCancel").show() : g.parent().find("._cwSBCancel").hide();
            g = g.cwSearchBox();
            switch (d.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                case 16:
                case 17:
                case 18:
                    break;
                case 13:
                    if (a == 13) break;
                default:
                    typeof g.option.update == "function" && g.option.update.apply(g)
            }
        }).on("click.cwSearchBox",
            "._cwSBCancel",
            function() {
                var a = b(this);
                a.hide();
                a = a.parent().find("._cwSB");
                a.val("").blur();
                a = a.cwSearchBox();
                typeof a.option.clear == "function" && a.option.clear.apply(a);
                typeof a.option.update == "function" && a.option.update.apply(a)
            })
    });
    b.cwUI.addWidget("cwSearchBox", d, {
        _init: function(a) {
            var d = this.$el;
            this.is_disabled = !1;
            d.addClass("_cwSB searchBox").attr("role", "search");
            var g = d.attr("placeholder");
            if (g) a.placeHolder = g;
            d.wrap('<div class="search"></div>').on("focus.cwSearchBox", function() {
                b(this).parent().addClass("focus")
            }).on("blur.cwSearchBox",
                function() {
                    b(this).parent().removeClass("focus")
                });
            d.parent().prepend('<span class="icoFontSearch icSearch"></span><span class="_cwSBCancel icoFontCancel icSearchCancel icoSizeLarge" style="display:none"></span>')
        },
        _setOption: function(a) {
            var b = this.$el;
            a.placeHolder && b.attr("placeholder", a.placeHolder)
        },
        getVal: function() {
            return this.$el.val()
        },
        setVal: function(a) {
            this.$el.val(a).keyup();
            return this
        },
        disable: function() {
            this.is_disabled = !0;
            this.$el.prop("disabled", !0);
            this.option.disable && this.option.disable.apply(this);
            return this
        },
        enable: function() {
            this.is_disabled = !1;
            this.$el.prop("disabled", !1);
            this.option.enable && this.option.enable.apply(this);
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b(function() {
        b(document.body).on("click.cwSelectBox", "._cwSLBox", function() {
            var a = b(this).closest("._cwSL").cwSelectBox();
            b.cwFloatBox.skip(a.ul);
            a.toggle()
        })
    });
    b.cwUI.addWidget("cwSelectBox", {
        width: "auto",
        height: "auto",
        parentFloatBox: null
    }, {
        _init: function() {
            var a = this,
                d = this.$el;
            this.input = d.find("input._cwSLInput");
            this.ul = d.find("ul._cwSLList");
            this.box = d.find("._cwSLBox");
            this.ul.on("click.cwSelectBox", "li", function() {
                var d = b(this),
                    f = d.attr("data-cwui-sb-value");
                a.select(f, {
                    item: d
                })
            })
        },
        _setOption: function(a) {
            var b = this.$el;
            a.width != void 0 && (a.width == "auto" ? b.css({
                width: !1
            }) : this.box.width(a.width));
            a.maxWidth != void 0 && (a.maxWidth ? this.box.css("max-width", a.maxWidth).addClass("autotrim") : this.box.css("max-width", "").removeClass("autotrim"))
        },
        open: function() {
            var a = this;
            if (!this.is_open) {
                this.is_open = !0;
                this.ul.find("li.selectboxSelected").removeClass("selectboxSelected");
                var d = this.findSelectedItem();
                d.addClass("selectboxSelected");
                b.cwFloatBox.open(this.ul, function() {
                    a.close()
                }, {
                    noAnimation: !0,
                    skip: a.option.parentFloatBox
                });
                this.ul.scrollTop(this.ul.scrollTop() + d.position().top);
                this.ul_width = this.ul.width();
                d = this.box.innerWidth();
                this.ul_width < d && this.ul.width(d)
            }
            return this
        },
        close: function() {
            if (!this.is_open) return this;
            this.is_open = !1;
            b.cwFloatBox.close(this.ul);
            return this
        },
        toggle: function() {
            this.isOpen() ? this.close() : this.open();
            return this
        },
        select: function(a, b) {
            var b = b || {},
                e = !1,
                f = b.item;
            f == void 0 && (f = this.findItemByValue(a));
            f || (f = this.ul.find("li:first"));
            b.silent &&
                (e = !0);
            this.$el.find("._cwSLSelectedLabel").html(f.html());
            this.input.val(a);
            e || (this.$el.trigger("cwSelectBox_update", [a]), typeof this.option.update == "function" && this.option.update.apply(this, [a]));
            this.close();
            return this
        },
        selectByIndex: function(a, d) {
            var e = this.findItemByIndex(a);
            this.select(e.attr("data-cwui-sb-value"), b.extend({
                item: e
            }, d))
        },
        findSelectedItem: function() {
            return this.findItemByValue(this.getVal())
        },
        findItemByIndex: function(a) {
            var d = this.ul.find("li");
            return d[a] ? b(d[a]) : null
        },
        findItemByValue: function(a) {
            var d =
                null;
            this.ul.find("li").each(function() {
                var e = b(this);
                if (e.attr("data-cwui-sb-value") == a) return d = e, !1
            });
            return d
        },
        getVal: function() {
            return this.input.val()
        },
        setList: function(a, d) {
            if (!b.isArray(a)) return this;
            this.ul.html(b.cwSelectBox.createOptionList(a, d));
            typeof d === "undefined" && this.selectByIndex(0, {
                silent: !0
            });
            this._init();
            return this
        },
        appendList: function(a) {
            if (!b.isArray(a)) return this;
            var d = [];
            this.$el.find("li").each(function() {
                var a = b(this),
                    f = a.prop("data-cwui-sb-value"),
                    a = a.text();
                d.push({
                    label: a,
                    value: f
                })
            });
            this.setList(d.concat(a));
            return this
        }
    }, {
        _create: function(a) {
            var d = a[0];
            if (d.type == "select-one") {
                var e = [];
                a.find("option").each(function() {
                    var a = b(this);
                    e.push({
                        value: a.val(),
                        label: a.text()
                    })
                });
                var f = a.getAttrs(),
                    d = b(b.cwSelectBox.create(e, d.name, a.val(), f));
                a.before(d);
                a.remove();
                return d
            } else return a.hasClass("_cwSL") ? a : !1
        },
        create: function(a, d, e, f) {
            d || (d = "");
            f == void 0 && (f = {});
            e == void 0 && (e = "");
            var g = "<div",
                l = "_cwSL selectbox cwTextUnselectable",
                k;
            for (k in f) switch (k) {
                case "class":
                    l +=
                        " " + f[k];
                    break;
                default:
                    g += " " + k + '="' + f[k] + '"'
            }
            f = '<ul role="list" class="_cwSLList selectboxContent cwNoWrap cwTextUnselectable" style="display:none">' + this.createOptionList(a) + "</ul>";
            k = "";
            for (var i = 0; i < a.length; i++) {
                var h = a[i];
                if (h.value == e) {
                    k = h.label;
                    break
                }
            }
            a = '<div class="_cwSLBox selectboxDefault"><span class="_cwSLSelectedLabel cwNoWrap">' + b.cwUI.escapeHTML(k) + '</span><span class="icoFontTriangleDown"></span></div>';
            k = '<input class="_cwSLInput" type="hidden"';
            d && (k += ' name="' + d + '"');
            k += ' value="' +
                b.cwUI.escapeHTML(e) + '"/>';
            return g + ' class="' + l + '">' + a + f + k + "</div>"
        },
        createOptionList: function(a, d) {
            for (var e = "", f = 0; f < a.length; f++) {
                var g = a[f];
                if (g.value == d) selected_label = g.label;
                e += '<li role="listitem" data-cwui-sb-value="' + b.cwUI.escapeHTML(g.value) + '">' + b.cwUI.escapeHTML(g.label) + "</li>"
            }
            return e
        }
    })
})(jQuery, jQuery.cwUI.L);
(function(b) {
    b.cwUI.addWidget("cwTabbedBar", {
        toggleMode: !1,
        descriptionDelay: 500
    }, {
        _init: function() {
            this.selected_idx = null
        },
        _setOption: function(a) {
            if (this.init_option) {
                this.bbar = this.$el.cwButtonBar({
                    toggleMode: !0,
                    descriptionList: a.descriptiopnList,
                    descriptionDelay: a.descriptionDelay,
                    update: function(a, f) {
                        if (b.selected_idx == a) {
                            if (!f)
                                if (b.option.toggleMode) b.selected_idx = null, b.option.update && b.option.update.apply(b, [a, !1]);
                                else return !1
                        } else if (f) {
                            var g = b.selected_idx;
                            b.selected_idx = a;
                            this.deSelect(g);
                            b.option.update && b.option.update.apply(b, [a, !0])
                        }
                    }
                });
                this.$el = this.bbar.$el;
                var b = this;
                setTimeout(function() {
                    a.selected ? b.select(a.selected) : a.toggleMode || b.select(0)
                })
            }
        },
        select: function(a) {
            a = parseInt(a, 10);
            this.selected_idx != a && this.bbar.select(a);
            return this
        },
        deselectAll: function() {
            this.bbar.deSelectAll();
            return this
        },
        getSelectedIndex: function() {
            return this.selected_idx
        },
        disableButton: function(a) {
            this.bbar.disableButton(a);
            return this
        },
        enableButton: function(a) {
            this.bbar.enableButton(a);
            return this
        },
        disableButtonAll: function() {
            this.bbar.disableButtonAll();
            return this
        },
        enableButtonAll: function() {
            this.bbar.enableButtonAll();
            return this
        }
    }, {})
})(jQuery, jQuery.cwUI.L);
(function(b) {
    var a = {};
    b.cwUI.addWidget("cwToolTip", {
        offsetLeft: 0,
        offsetTop: 0,
        windowMargin: 7,
        triangleMargin: 10,
        useFloatBox: !0,
        showPosition: "center",
        direction: "vertical",
        theme: "white",
        noAnimation: !1,
        noTriangle: !1,
        parentFloatBox: null
    }, {
        _init: function() {
            this.$el.attr("role", "tooltip");
            this.triangle = "";
            this.tipFrom = null
        },
        _setOption: function(a) {
            var e = this.$el;
            a.theme != void 0 && (this.init_option || e.removeClass("toolTipWhite toolTipBlack"), a = b.cwUI.ucFirst(a.theme.toLowerCase()), e.addClass("toolTip toolTip" +
                a + " mainContetTooltip"))
        },
        open: function(d) {
            if (d && !b.cwUI.isWidget(d[0])) {
                var e = this,
                    f = e.$el;
                if (e.is_open) {
                    if (d[0] == e.tipFrom[0]) {
                        e.close();
                        return
                    }
                    typeof e.option.open == "function" && e.option.open.apply(e, arguments)
                } else e.is_open = !0, typeof e.option.open == "function" && e.option.open.apply(e, arguments), e.option.useFloatBox ? b.cwFloatBox.open(f, function() {
                    e.close()
                }, {
                    noAnimation: e.option.noAnimation,
                    skip: e.option.parentFloatBox
                }) : (b.cwUI.setZIndex(f), f.show()), a[e.widget_id] = e;
                e.option.useFloatBox && (b.cwFloatBox.skip(f),
                    setTimeout(function() {
                        b.cwFloatBox.clearSkip()
                    }));
                e.move(d);
                typeof e.option.postOpen == "function" && e.option.postOpen.apply(e, arguments);
                return e
            }
        },
        move: function(a) {
            var e = this.$el,
                f = this.option.offsetTop ? this.option.offsetTop : 0,
                g = this.option.offsetLeft ? this.option.offsetLeft : 0;
            if (a instanceof jQuery) {
                if (!a.isVisible()) {
                    this.close();
                    return
                }
            } else a = {
                x: parseInt(a.x, 10),
                y: parseInt(a.y, 10),
                offset: function() {
                    return {
                        top: a.y,
                        left: a.x
                    }
                },
                outerHeight: function() {
                    return 1
                },
                outerWidth: function() {
                    return 1
                }
            };
            this.tipFrom =
                a;
            var l = b(document.body),
                k = l.width(),
                i = l.height(),
                h = a.offset(),
                l = e.outerWidth(),
                j = e.outerHeight(),
                o = parseInt(j / 2, 10),
                m = "",
                m = this.option.direction == "vertical" ? h.top - j < 0 ? "bottom" : "top" : this.option.direction == "horizontal" ? h.left > parseInt(k / 2, 10) ? "left" : "right" : this.option.direction,
                n = b.cwUI.ucFirst(this.option.theme.toLowerCase());
            switch (m) {
                case "top":
                    n = "toolTipTriangle" + n + "Bottom";
                    break;
                case "bottom":
                    n = "toolTipTriangle" + n + "Top";
                    break;
                case "left":
                    n = "toolTipTriangle" + n + "Right";
                    break;
                case "right":
                    n = "toolTipTriangle" +
                        n + "Left";
                    break;
                default:
                    return !1
            }
            e.find("._cwTTTriangle").remove();
            if (!this.option.noTriangle) e.prepend('<div class="_cwTTTriangle toolTipTriangle ' + n + '"></div>'), this.triangle = m;
            if (this.option.noTriangle) var n = null,
                t = 0,
                u = 0;
            else n = e.find("._cwTTTriangle"), t = n.outerHeight(), u = n.outerWidth();
            var s = a.outerWidth(),
                v = parseInt(s / 2, 10),
                x = a.outerHeight(),
                y = parseInt(x / 2, 10);
            switch (m) {
                case "top":
                    var p = h.top - j - t + f;
                    break;
                case "bottom":
                    p = h.top + x + t + f;
                    break;
                case "left":
                    var w = h.left - l - u + g;
                    break;
                case "right":
                    w = h.left +
                        s + u + g
            }
            switch (m) {
                case "top":
                case "bottom":
                    switch (this.option.showPosition) {
                        case "left":
                            w = this.option.noTriangle ? h.left + g : h.left - parseInt(l / 2, 10) + g;
                            break;
                        case "right":
                            w = this.option.noTriangle ? h.left - l + s + g : h.left - parseInt(l / 2, 10) + s + g;
                            break;
                        default:
                            w = h.left - parseInt(l / 2, 10) + v + g
                    }
                    break;
                case "left":
                case "right":
                    switch (this.option.showPosition) {
                        case "top":
                            p = h.top + f;
                            break;
                        case "bottom":
                            p = h.top + x - j + f;
                            break;
                        default:
                            p = h.top + y - o + f
                    }
            }
            w + l > k && (w = k - this.option.windowMargin - l);
            if (w < this.option.windowMargin) w = this.option.windowMargin;
            p + j > i && (p = i - this.option.windowMargin - j);
            if (p < this.option.windowMargin) p = this.option.windowMargin;
            if (n) switch (k = parseInt(t / 2, 10), i = parseInt(u / 2, 10), m) {
                case "top":
                case "bottom":
                    switch (this.option.showPosition) {
                        case "left":
                            f = h.left - w - i + g;
                            if (f < this.option.triangleMargin) f = this.option.triangleMargin;
                            break;
                        case "right":
                            f = h.left - w + s - i + g;
                            g = l - u - this.option.triangleMargin;
                            f > g && (tip_p_left = g);
                            break;
                        default:
                            f = h.left - w + v - i + g
                    }
                    n.css("left", f);
                    break;
                case "left":
                case "right":
                    switch (this.option.showPosition) {
                        case "top":
                            f =
                                h.top - p + this.option.triangleMargin + f;
                            break;
                        case "bottom":
                            f = h.top - p + j - t - this.option.triangleMargin + f;
                            break;
                        default:
                            f = h.top - p + o - k + f
                    }
                    n.css("top", f)
            }
            e.css({
                top: p,
                left: w
            });
            return this
        },
        close: function() {
            if (!this.is_open) return this;
            this.is_open = !1;
            typeof this.option.close == "function" && this.option.close.apply(this, arguments);
            this.option.useFloatBox ? b.cwFloatBox.close(this.$el) : (b.cwUI.unsetZIndex(this.$el), this.option.noAnimation ? this.$el.hide() : this.$el.fadeOut("fast"));
            delete a[this.widget_id];
            return this
        }
    }, {
        close: function() {
            for (var b in a) a[b].close();
            return this
        }
    })
})(jQuery, jQuery.cwUI.L);
var _is_oldmsie = typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
    _is_msie = document.uniqueID,
    _is_mac = navigator.appVersion.indexOf("Mac") != -1,
    _has_fileapi = window.FormData ? !0 : !1,
    _has_sandbox = "sandbox" in document.createElement("iframe"),
    NotificationAPI = null,
    _is_modern_ie = !!(_is_msie && typeof(history || {}).pushState === "function");
window.webkitNotifications ? NotificationAPI = {
    createNotification: function(b, a, d) {
        return webkitNotifications.createNotification(b, a, d)
    },
    checkPermission: function() {
        return webkitNotifications.checkPermission()
    },
    requestPermission: function(b) {
        webkitNotifications.requestPermission(function() {
            b(NotificationAPI.checkPermission())
        })
    }
} : window.Notification && (NotificationAPI = {
    createNotification: function(b, a, d) {
        var e = new Notification(a, {
            icon: b,
            body: d
        });
        e.show = function() {};
        e.cancel = function() {
            e.close()
        };
        return e
    },
    checkPermission: function() {
        switch (Notification.permission) {
            case "granted":
                return 0;
            case "default":
                return 1;
            case "denied":
                return 2
        }
    },
    requestPermission: function(b) {
        Notification.requestPermission(function() {
            b(NotificationAPI.checkPermission())
        })
    }
});
$.fn.extend({
    insertAtCaret: function(b) {
        var a = this.get(0),
            d = a.value,
            e = a.selectionStart,
            f = e + b.length + 0;
        a.value = d.substr(0, e) + b + d.substr(e);
        a.setSelectionRange(f, f)
    },
    input: function(b) {
        this.click().focus().val(b);
        return this
    }
});
var get_caret_position_ie = function() {};
_is_msie && !_is_modern_ie ? function() {
    var b = 0;
    $.fn.extend({
        insertAtCaretForMessage: function(a) {
            var d = this.get(0);
            d.focus();
            var e = d.value,
                f = b,
                g = f + a.length,
                l = e.substr(0, f);
            d.value = l + a + e.substr(f);
            b += a.length;
            a = (a = l.match(/\n/g)) ? a.length : 0;
            d = d.createTextRange();
            d.collapse(!0);
            d.moveEnd("character", g - a);
            d.moveStart("character", g - a);
            d.select()
        }
    });
    get_caret_position_ie = function(a) {
        var d = a.ownerDocument;
        if (a.tagName.toLowerCase() == "textarea") {
            var d = d.selection.createRange(),
                e = d.duplicate();
            e.moveToElementText(a);
            e.setEndPoint("StartToEnd", d);
            e.setEndPoint("StartToStart", d);
            b = a.value.length - e.text.length
        } else a = d.selection.createRange(), d = a.duplicate(), result.start = 0 - d.moveStart("character", -1E5), result.end = result.start + a.text.length, result.caret = result.end, b = result.caret
    }
}() : $.fn.insertAtCaretForMessage = $.fn.insertAtCaret;

function mlength(b) {
    for (var a = 0, d = 0; d < b.length; d++) b.charCodeAt(d) > 255 && a++, a++;
    return a
}

function get_file_extension(b) {
    var b = b.split("."),
        a = "";
    b.length > 1 && (a = b[b.length - 1].toLowerCase());
    return a
}
var $C = null;
(function() {
    var b = {},
        a = {};
    $C = function(d) {
        b[d] == void 0 && (a[d] == void 0 ? b[d] = $(d) : (b[d] = a[d](), delete a[d]));
        return b[d]
    };
    $C.register = function(b, e) {
        a[b] = e;
        return this
    }
})();
var THEME = {
    blue: {
        chatlist_min_width: 190,
        chatlist_max_width: 300,
        timeline_min_width: 350,
        subcontent_min_width: 300,
        actionbar_height: 22,
        textarea_line_height: 22,
        chatSendArea_initial_height: 100,
        chatSendArea_expandto_height_default: 160,
        chattext_min_content_height: 50,
        timeline_min_height: 300,
        timeline_assign_member_show_max: 5,
        taskinput_init_height: 100,
        taskinput_min_height: 50,
        tasklist_min_height: 390,
        description_max_height: 300,
        description_min_height: 50,
        mymenu_min_width: 140,
        member_preview_show_max: 5,
        member_detail_show_max: 34,
        dialog_header_height: 40,
        dialog_footer_height: 40,
        preview_dialog_height_padding: 20,
        preview_dialog_width_padding: 20,
        taskwindow_pager_view_num: 50,
        filewindow_pager_view_num: 50,
        contactwindow_pager_view_num: 50,
        extermal_marktip_offset_left: 3,
        expose_zindex: 500,
        messagetip_delay: 500
    }
};

function Analytics() {
    var b = this,
        a = !1,
        d = [],
        e = GA_PROFILE_ID,
        f = null,
        g = {
            plan: "dimension1",
            device: "dimension2",
            lang: "dimension3",
            fbconnect: "dimension4",
            gnum: "dimension5",
            cnum: "dimension6",
            useday: "dimension7",
            usestorage: "dimension8",
            tnum: "dimension9",
            pnum: "dimension10",
            dhash: "dimension11"
        };
    b.start = function(g) {
        if (!a) {
            a = !0;
            f = g;
            (function(a, b, d, e, f, g, k) {
                a.GoogleAnalyticsObject = f;
                a[f] = a[f] || function() {
                    (a[f].q = a[f].q || []).push(arguments)
                };
                a[f].l = 1 * new Date;
                g = b.createElement(d);
                k = b.getElementsByTagName(d)[0];
                g.async = 1;
                g.src = e;
                k.parentNode.insertBefore(g, k)
            })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
            ga("create", e, "auto");
            ga("require", "displayfeatures");
            b.trackPageView();
            for (var g = 0, k = d.length; g < k; g++) d[g]();
            d = [];
            return b
        }
    };
    b.trackPageView = function() {
        if (!a) return d.push(function() {
            b.trackPageView()
        }), !1;
        for (var e in g) g.hasOwnProperty(e) && typeof f[e] !== "undefined" && ga("set", g[e], f[e]);
        ga("send", "pageview", {
            title: ""
        })
    };
    b.trackEvent = function(e, f, g, h) {
        if (!a) return d.push(function() {
            b.trackEvent(e,
                f, g, h)
        }), !1;
        ga("send", "event", {
            eventCategory: e,
            eventAction: f,
            eventLabel: g,
            eventValue: h,
            title: ""
        });
        return b
    }
}

function Request() {
    var b = this;
    b.use_local_comet = !1;
    b.ajax = function(a) {
        if (a.type == "POST") a.data = {
            pdata: $.toJSON(a.data)
        };
        return $.ajax(a)
    };
    b.checkOnline = function(a, b) {
        typeof a != "function" && (a = function() {});
        typeof b != "function" && (b = function() {});
        $.ajax({
            type: "GET",
            dataType: "json",
            async: !0,
            url: SERVER_PATH + "/gateway.php?cmd=check_online&myid=" + AC.myid + "&_v=" + CW.version + "&_av=" + CW.api_version + "&_t=" + ACCESS_TOKEN + "&ln=" + LANGUAGE,
            success: function(d) {
                if (d && d.status.success == !0) a();
                else {
                    var e = "";
                    if (d && d.status) e =
                        d.status.message;
                    b(e)
                }
            },
            error: function() {
                b("TIMEOUT")
            }
        })
    };
    var a = typeof sessionStorage === "undefined" ? new Storage : sessionStorage,
        d = 3E3,
        e = 7;
    b.comet = function(f) {
        if (b.use_local_comet) CW.get("gateway.php", {
            cmd: "local_comet",
            last_id: CW.last_id,
            "new": 1
        }, function(a) {
            d = 1E3;
            a.updated && CW.watch();
            b.comet()
        }, function() {
            d *= 1.2;
            setTimeout(function() {
                b.comet()
            }, d)
        });
        else {
            for (; $("#wcs-iframe").length;) $("#wcs-iframe").remove();
            if (f) l(f);
            else {
                var f = AC.myid,
                    g = a.getItem("session.account_id");
                g ? f != g && (i(), a.setItem("session.account_id",
                    f)) : (a.getItem("session.account_id") && i(), a.setItem("session.account_id", f));
                (f = a.getItem("channel_token_key")) ? l(f): CW.post("gateway.php", {
                    cmd: "get_comet_token_key"
                }, function(b) {
                    d = 3E3;
                    e = 7;
                    l(b.token_key, !0);
                    a.setItem("channel_token_key", b.token_key)
                }, function() {
                    if (e < 0) return !1;
                    setTimeout(function() {
                        b.comet()
                    }, d);
                    d *= 2;
                    e--
                })
            }
        }
    };
    var f = 3E3,
        g = 7,
        l = function(d, e) {
            var i = a.getItem("channel_token");
            i ? k(i) : $.jsonp({
                url: COMET_SERVER_PATH + "/token?callback=?",
                data: {
                    myid: AC.myid,
                    key: d
                },
                success: function(b) {
                    b.status &&
                        b.status.success && (a.setItem("channel_token", b.result.token), k(b.result.token), f = 3E3, g = 7, e != !0 && CW.post("gateway.php", {
                            cmd: "update_comet_token_key",
                            token_key: d
                        }))
                },
                error: function() {
                    if (g < 0) return !1;
                    setTimeout(function() {
                        b.comet(d, e)
                    }, f);
                    f *= 2;
                    g--
                }
            })
        },
        k = function(a) {
            a = (new goog.appengine.Channel(a)).open();
            a.onmessage = function(a) {
                switch (a.data) {
                    case "watch":
                        CW.watch();
                        break;
                    case "reconnect":
                        i(), b.comet()
                }
            };
            a.onerror = function() {
                i();
                b.comet()
            }
        },
        i = function() {
            a.removeItem("channel_token");
            a.removeItem("channel_token_key")
        }
}

function Storage() {
    var b = this;
    b.values = {};
    b.setItem = function(a, d) {
        b.values[a] = d;
        return this
    };
    b.getItem = function(a) {
        return b.values[a]
    };
    b.removeItem = function(a) {
        b.values[a] != void 0 && delete b.values[a];
        return this
    }
}
var PLATFORM = "web",
    CW = new ChatWork(client_ver),
    AC = new Account(myid),
    FL = new File,
    TK = new Task,
    RL = new RoomList,
    RD = new RoomDialog,
    RS = new RoomSub,
    ST = new Setting,
    CS = new ChatSend,
    SC = new Search,
    AL = new Analytics,
    RM = null,
    TM = THEME.blue,
    gears = window.google && google.gears,
    wfocus = !0,
    tlscroll = !1,
    press_key = 0,
    up_key = 0,
    scroll_cancel = null,
    is_local_env = !1,
    outerLayout, menuLayout, middleLayout, subLayout, innerLayout, audioObjSupport, basicAudioSupport, canPlayOgg, canPlayMp3;
try {
    var audio = new Audio("");
    audioObjSupport = !!audio.canPlayType;
    basicAudioSupport = !(audioObjSupport || !audio.play)
} catch (e$$67) {
    basicAudioSupport = audioObjSupport = !1
}
audioObjSupport && (canPlayOgg = "no" != audio.canPlayType("audio/ogg") && "" != audio.canPlayType("audio/ogg"), canPlayMp3 = "no" != audio.canPlayType("audio/mpeg") && "" != audio.canPlayType("audio/mpeg"));
$.fn.dialog = function() {
    return this
};
$.fn.tabs = function() {
    return this
};
$.fn.button = function() {
    return this
};
$.fn.draggable = function() {
    return this
};
$.fn.resizable = function() {
    return this
};
$.fn.effect = function() {
    return this
};
$.hashchangeHandler = function() {
    var b = location.hash.match(/#!rid(\d+)$/);
    b && RL.selectRoom(b.pop())
};
var DIALOG_CANCEL_BUTTON = null,
    DIALOG_CLOSE_BUTTON = null;
$(function() {
    $C.register("document", function() {
        return $(document)
    }).register("body", function() {
        return $(document.body)
    }).register("#cw_send_area .cw_buttons", function() {
        return $C("#cw_send_area").find(".cw_buttons")
    }).register("#cw_room_setting_box .admin", function() {
        return $C("#cw_room_setting_box").find(".admin")
    }).register("#cw_room_setting_box .group", function() {
        return $C("#cw_room_setting_box").find(".group")
    }).register("#cw_room_setting_box .contact", function() {
        return $C("#cw_room_setting_box").find(".contact")
    }).register("#cw_room_setting_box .my",
        function() {
            return $C("#cw_room_setting_box").find(".my")
        }).register("#cw_room_setting_box li", function() {
        return $C("#cw_room_setting_box").find("li")
    });
    $.cwFloatWindow.setDefaultOption({
        wrapperSelector: "#_mainContent"
    });
    $.cwActionBar.setDefaultOption({
        descriptionDelay: TM.messagetip_delay
    });
    $.cwButton.setDefaultOption({
        descriptionDelay: TM.messagetip_delay
    });
    $.cwButtonBar.setDefaultOption({
        descriptionDelay: TM.messagetip_delay
    });
    var b = function() {
        $(this).dialog("close")
    };
    DIALOG_CANCEL_BUTTON = {
        text: L.button_cancel,
        click: b
    };
    DIALOG_CLOSE_BUTTON = {
        text: L.button_close,
        click: b
    };
    CW.prepare();
    CW.track = new CW.Track;
    CW.view.onPostLoad(CW.track.register);
    CW.view.onPostLoad(function() {
        var a = {
            plan: CW.plan || "",
            device: PLATFORM,
            lang: LANGUAGE,
            fbconnect: ST.isConnectedFacebook() ? 1 : 0,
            gnum: RL.getGroupChatNum(),
            cnum: AC.getContactNum(),
            useday: Math.floor((new Date - new Date(REG_TIME * 1E3)) / 864E5),
            pnum: RL.getStickyRoomNum(),
            dhash: DHASH
        };
        AL.start(a);
        setInterval(function() {
            AL.trackEvent("session", "update", "", 0)
        }, 3E5)
    });
    AC.prepare();
    FL.prepare();
    TK.prepare();
    RL.prepare();
    RD.prepare();
    RS.prepare();
    ST.prepare();
    CS.prepare();
    SC.prepare();
    CW.buildLayout();
    if (is_local_env) CW.request.use_local_comet = !0;
    CW.watch();
    $.ajaxSetup({
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        cache: !1
    });
    $C("document").bind("ajaxSend", function(a, b) {
        $(window).bind("beforeunload", function() {
            b.abort()
        })
    });
    window.onerror = function(a) {
        a.toString().indexOf("Internal error") != -1 && (alert("\u5185\u90e8\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002ChatWork\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u307e\u3059"),
            document.location.reload())
    };
    var b = function() {
            wfocus = !0;
            CW.read();
            CW.watch()
        },
        a = function() {
            wfocus = !1;
            CW.cancelRead()
        };
    _is_msie ? ($C("document").bind("focusin", b), $C("document").bind("focusout", a), $C("#cw_send_file_mask").css("opacity", 1)) : (window.addEventListener("focus", b, !1), window.addEventListener("blur", a, !1));
    $("label").mousedown(function() {
        return !1
    });
    $("._searchBox").cwSearchBox();
    $("._checkBox").cwCheckBox();
    $("._button").cwButton();
    b = ["./image/sp_icon.png"];
    if (b.length > 0)
        for (var a = new Image,
                d = 0; d < b.length; d++) a.src = b[d];
    CW.checkNotificationPermission();
    $(window).bind("hashchange", $.hashchangeHandler)
});
CW = CW || {};
CW.Track = function() {
    function b() {}
    if (typeof slash7 === "undefined") return b.prototype.register = function() {}, b.prototype.send = function() {}, b;
    b.prototype.register = function(b) {
        var b = b || {},
            e;
        if (!(e = b.account_id)) e = typeof AC === "undefined" ? 0 : AC.myid;
        var b = a(b),
            f = window.navigator;
        b.user_agent = f.userAgent;
        b.platform = f.platform;
        slash7.identify(md5(e));
        slash7.register(b)
    };
    b.prototype.send = function(b, e) {
        slash7.track(b, a(e))
    };
    var a = function(a) {
        a = a || {};
        return {
            plan: a.plan || CW.plan || "",
            fb_connect: a.fb_connect || typeof ST ===
                "undefined" ? 0 : ST.isConnectedFacebook() ? 1 : 0,
            group_chat_num: a.group_chat_num || typeof RL === "undefined" ? 0 : RL.getGroupChatNum(),
            contact_num: a.contact_num || typeof AC === "undefined" ? 0 : AC.getContactNum()
        }
    };
    return b
}();
