# easy-upload

[English Version](README-en.md)


[安装地址1](https://greasyfork.org/zh-CN/scripts/423199)

[安装地址2](https://openuserjs.org/scripts/birdplane/EasyUpload_PT%E4%B8%80%E9%94%AE%E8%BD%AC%E7%A7%8D)

[加入Telegram群组](https://t.me/easyupload)

## 关于

支持国内外主流PT站的转载种子脚本，尽可能减少不必要的重复工作，让发种更易上手。
## 功能
* 支持国内外不同架构的站点互转，自动填写简介、视频参数等信息
* 支持转载站点的自定义配置
* 支持批量转种，一键批量转发到选中的站点
* 一些站点规则要求截图必须为缩略图，增加了原图转缩略图功能
* 外站向内站转载时，需要补充豆瓣简介，增加了根据IMDB获取豆瓣简介的功能
* 可以通过站点的yaml统一配置来进行上传页的内容填写，新增支持站点更容易。如果需要自行添加目前项目还不支持的站点，可以参考[站点配置规则](https://github.com/techmovie/easy-upload/wiki/%E5%A6%82%E4%BD%95%E5%A2%9E%E5%8A%A0%E7%9B%AE%E5%89%8D%E8%BF%98%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE)
* 支持对当前资源的快速检索，检索站点可配置

## 设置
* 点击「齿轮」图标打开设置面板
* 转种站点启用: 定义需要在页面显示的转种站点列表，隐藏无帐号及不需要的站点，默认显示全部。
* 批量转种启用: 点击页面的「一键群转」按钮将同时打开选中的站点转发。
* 站点搜索启用: 定义需要在页面显示的快速搜索列表。
  
## 注意事项
* 目前对音乐、MV、动漫的种子转载不支持(分类可能不会自动填写)
* 柠檬的上传页只支持电影、剧集、纪录片和MV类别的转载
* 内站的简介中会有一些跟视频截图无关的图片，虽然做了一些过滤，转载到外站后这些无关的图片可能仍会保留下来，需要手动删除。
* 大部分外站需要完整的MediaInfo，而部分内站的官组都没提供，转载到外站时，需要手动获取MediaInfo
* 由于TTG的图片加载策略，需要等页面完全加载完整后再点击转载到其他站，否则种子信息会获取不完整。
* 由于部分内站上传页的分类填写过于混乱，会有部分种子分类填写不上的问题，欢迎提Issue
## 后续计划
  参考[项目规划](https://github.com/techmovie/easy-upload/projects)

  很多站点由于没有账号或者发布权限，欢迎大佬帮忙测试以及提PR

## 支持站点

|  站点名   | Source(支持转发到其他站点) | Target(支持其他站点转发到本站) |
| :-------: | :------------------------: | :----------------------------: |
|   1PTBA   |             ✅              |               ✅                |
|   52pt    |             ✅              |               ✅                |
|    ACM    |             ✅              |               ✅                |
|  Aither   |             ✅              |               ✅                |
|    bB     |             ❌              |               ✅                |
| BTSCHOOL  |             ✅              |               ✅                |
|  BeiTai   |             ✅              |               ❌                |
| BeyondHD  |             ✅              |               ✅                |
| Blutopia  |             ✅              |               ✅                |
|  CHDBits  |             ✅              |               ✅                |
|  DiscFan  |             ✅              |               ✅                |
|  HD4FANS  |             ✅              |               ✅                |
|   HDAI    |             ✅              |               ✅                |
|  HDArea   |             ✅              |               ✅                |
|  HDAtmos  |             ❌              |               ✅                |
|  HDBits   |             ✅              |               ✅                |
|  HDChina  |             ✅              |               ✅                |
|  HDDolby  |             ✅              |               ✅                |
|  HDHome   |             ✅              |               ✅                |
|  HDPOST   |             ✅              |               ✅                |
|  HDRoute  |             ❌              |               ✅                |
|   HDSky   |             ✅              |               ✅                |
|    HDT    |             ✅              |               ✅                |
|    HDU    |             ✅              |               ✅                |
|    iTS    |             ❌              |               ✅                |
| KEEPFRDS  |             ✅              |               ❌                |
|    KG     |             ✅              |               ❌                |
|  LemonHD  |             ✅              |               ✅                |
|   MTeam   |             ✅              |               ✅                |
|   NYPT    |             ✅              |               ✅                |
|  OurBits  |             ✅              |               ✅                |
|  PTHome   |             ✅              |               ✅                |
|    PTP    |             ✅              |               ✅                |
|  PTSBAO   |             ✅              |               ✅                |
|   PTer    |             ✅              |               ✅                |
|    SSD    |             ✅              |               ✅                |
| SoulVoice |             ✅              |               ✅                |
|   TCCF    |             ✅              |               ✅                |
|   TJUPT   |             ✅              |               ✅                |
|    TLF    |             ✅              |               ✅                |
|    TTG    |             ✅              |               ✅                |
|  UHDBits  |             ✅              |               ✅                |


## 捐赠

如果本项目对你有帮助，不妨通过微信或者支付宝进行小额捐赠，以支持该项目的持续维护和发展。

微信:

<img alt="wechat.png" src="https://ptpimg.me/6zq3va.jpg" width="200">

支付宝:

<img alt="alipay.png" src="https://ptpimg.me/3dw5k6.jpg" width="200">

## 致谢

### 协作者
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/18325797?v=3" width="75px;"/><br /><sub>Yongjie</sub>](https://github.com/btguys)<br />[💻](https://github.com/techmovie/easy-upload/commits?author=btguys) | [<img src="https://avatars.githubusercontent.com/u/69023953?v=3" width="75px;"/><br /><sub>Purfview</sub>](https://github.com/Purfview)<br />[💻](https://github.com/techmovie/easy-upload/commits?author=Purfview) | [<img src="https://avatars.githubusercontent.com/u/22229456?v=3" width="75px;"/><br /><sub>arvin</sub>](https://github.com/ma3252788)<br />[💻](https://github.com/techmovie/easy-upload/commits?author=ma3252788) | [<img src="https://avatars.githubusercontent.com/u/11496663?v=3" width="75px;"/><br /><sub>luoye</sub>](https://github.com/luoye-fe)<br />[💻](https://github.com/techmovie/easy-upload/commits?author=luoye-fe) |
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
### 捐赠者

|  姓名   | 金额 |    时间    |
| :-------: | :------------------------: | :----------------------------: |
|   韩老王   |                           |               2021/05/13               |

