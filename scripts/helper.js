const notifier = require('node-notifier');

const { version, author, description = '' } = require('../package.json');

// 油猴前置注释
exports.userScriptComment = `// ==UserScript==
// @name         easy-seed PT一键转种
// @namespace    https://github.com/techmovie/easy-seed
// @version      ${version}
// @description  ${description}
// @author       ${author}
// @require      https://cdn.bootcss.com/jquery/1.7.1/jquery.min.js
// @match        https://passthepopcorn.me/torrents.php?id=*
// @match        http://*/details.php?id=*
// @match        https://*/details.php?id=*
// @match        https://totheglory.im/t/*
// @match        https://beyond-hd.me/torrents/*
// @match        https://lemonhd.org/upload_*
// @match        https://lemonhd.org/details*
// @match        https://blutopia.xyz/torrents/*
// @match        https://blutopia.xyz/torrents?*
// @match        https://blutopia.xyz/upload/*
// @match        https://pt.hdpost.top/torrents?*
// @match        https://pt.hdpost.top/torrents/*
// @match        https://asiancinema.me/torrents/*
// @match        https://asiancinema.me/torrents?*
// @match        https://*/upload*
// @match        http://*/upload*
// @match        http://www.hd.ai/Torrents.upload
// @match        http://www.hd.ai/Torrents.index?*
// @match        https://broadcity.in/browse.php?imdb=*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// ==/UserScript==`;

exports.notify = (title, message) => {
  notifier.notify(
    {
      title,
      message,
      sound: true,
      wait: false,
    },
  );
};
