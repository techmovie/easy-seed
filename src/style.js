export default GM_addStyle(`
td.title-td{
  min-width: 80px;
  vertical-align: middle !important;
}
td.title-td h4{
  text-align: right;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.ptp-seed-title {
  display: flex;
  align-items: center;
}
.ptp-seed-title h4{
  margin: 0 !important;
  margin-right: 10px !important;
  display: flex;
  align-items: center;
}
.seed-dom button{
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 6px 16px;
  font-size: 13px;
  border-radius: 4px;
  margin:0;
  margin-right: 5px;
}
.seed-dom button:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff
}
.seed-dom button.is-disabled, .seed-dom button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.site-list,.search-list{
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.ptp-search-list{
  display: flex;
  align-items: center;
  padding-top:10px;
  justify-content: center;
}
.ptp-search-list h4{
  margin: 0;
  min-width: 60px;
  margin-right: 15px;
}
.seed-dom li,.search-list li {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 5px;
  line-height: 24px;
  font-weight: 600;
}
.seed-dom li:last-child span{
  display: none;
}
.search-list li:last-child span{
  display: none;
}
.seed-dom li a{
  font-weight: 600;
}
.easy-seed-function-list{
  display: flex;
  justify-content: space-around; 
  padding: 6px 20px;
}
.easy-seed-function-list button{
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin:0;
  margin-right: 5px;
}
.function-list-item{
  display: flex;
  align-items: center;
  justify-content: space-between; 
}
.function-list-item input{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 34px;
    line-height: 40px;
    outline: none;
    width: 200px;
    padding: 0 12px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.function-list-item input::placeholder {
  color: #c0c4cc
}
.function-list-item input:hover {
  border-color: #c0c4cc
}
.function-list-item input:focus {
    outline: none;
    border-color: #409eff
}
.hdb-tr{
  display: flex;
}
.hdb-tr td:last-child{
  flex: 1;
}
.hdb-tr td:first-child>h4{
  width:100px;
}
.function-list-item h4{
  margin: 0;
  padding: 0;
  margin-right: 10px;
  font-weight: 600;
  font-size: 14px;
}
.upload-section,.douban-section,.douban-book-section{
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-section .upload-status,.douban-section .douban-status,.douban-book-section .douban-book-status{
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
}
.upload-section #nsfw{
  margin-left: 0;
  position: static;
}
.upload-section label{
  padding-left: 0;
}
#kdescr img{
  max-width: 100%;
}
.easy-seed-setting-btn{
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: 3px;
}
.easy-seed-setting-btn svg{
  height: 20px;
  width: 20px;
  animation: 3s linear rotate infinite;
}
@keyframes rotate {
  from {transform: rotate(0deg)}
  to   {transform: rotate(360deg) }
}
.easy-seed-setting-panel{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0,0,0,0.5);
  color: #000;
}
#batch-seed-btn{
  padding: 1px 3px;
  font-size: 12px;
  border-radius: 20px;
  border-style: outset;
  border-width: 2px 2px;
}
.easy-seed-setting-panel *{
  padding: 0;
  margin: 0;
}
.easy-seed-setting-panel input[type="text"]{
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 34px;
  line-height: 40px;
  outline: none;
  width: 200px;
  padding: 0 12px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.easy-seed-setting-panel input[type="text"]::placeholder {
  color: #c0c4cc
}
.easy-seed-setting-panel input[type="text"]:hover {
  border-color: #c0c4cc
}
.easy-seed-setting-panel input[type="text"]:focus {
    outline: none;
    border-color: #409eff
}
.easy-seed-setting-panel h3,.easy-seed-setting-panel h1{ 
  color: #000;
  margin-bottom: 15px;
}
.easy-seed-setting-panel .panel-content-wrap{
  margin-top: 200px;
  max-width: 800px;
  box-sizing: border-box;
  margin: 50px auto;
  border-radius: 8px;
  background: #fff;
  position: relative;
  text-align:center;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  padding: 20px 10px 10px 20px;
}
.easy-seed-setting-panel .panel-content{
  height: 500px;
  overflow-y: auto;
}
.easy-seed-setting-panel .panel-content ul{
  list-style: none;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 10px;
}
.easy-seed-setting-panel .panel-content li{
  width: 90px;
  text-align: left;
  margin-bottom: 10px;
}
.easy-seed-setting-panel .panel-content label{
  cursor: pointer;
  color: #000 !important;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.easy-seed-setting-panel .panel-content label input{
  margin: 0;
  margin-right: 3px;
  padding:0;
}
.transfer-img-closed label {
  justify-content: center;
}
.easy-seed-setting-panel .site-enable-setting{
  padding-top: 5px;
  margin-bottom: 8px;
}
.easy-seed-setting-panel button{
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin:0;
  margin-right: 5px;
  margin-bottom: 10px;
}
.easy-seed-setting-panel button:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff
}
.easy-seed-setting-panel .confirm-btns {
  padding-top: 15px;
}
.easy-seed-setting-panel .img-upload-setting label{
  justify-content: center;
}
.easy-seed-setting-panel .img-upload-setting label input{
  margin-left: 8px;
  margin-right: 8px;
}
.easy-seed-setting-panel .img-upload-setting label a{
  color: #000;
  font-weight: 500;
}
.easy-seed-setting-panel .img-upload-setting label a:hover{
  color: #f7d584;
}
#save-setting-btn{
  background-color: #007bff;
  border-color: #007bff;
  color:#fff;
}
#save-setting-btn:hover{
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff
}
.ptp-api-key-btn{
  text-align: center;
}
`);
