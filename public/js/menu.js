const menuData = {
  data: "[\n" +
    "{\"RN\":\"1\",\"MenuId\":\"1\",\"MenuName\":\"\u54c1\u724c\u4ee3\u7406\",\"MenuChild\":\"0\",\"isChild\":\"1\",\"isAll\":null,\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null,\n" +
    "\t\"Child\":\n" +
    "\t[\n" +
    "\t\t{\"RN\":\"6\",\"MenuId\":\"6\",\"MenuName\":\"SUUNTO\",\"MenuChild\":\"1\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null,\n" +
    "\t\t\t\"Child\":\n" +
    "\t\t\t[\n" +
    "\t\t\t\t{\"RN\":\"9\",\"MenuId\":\"9\",\"MenuName\":\"\u7522\u54c1\u4ecb\u7d39\",\"MenuChild\":\"6\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t{\"RN\":\"25\",\"MenuId\":\"25\",\"MenuName\":\"\u6236\u5916\u63a2\u7d22\u8207\u5192\u96aa\",\"MenuChild\":\"9\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"32\",\"MenuId\":\"32\",\"MenuName\":\"\u767b\u5c71\",\"MenuChild\":\"25\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"33\",\"MenuId\":\"33\",\"MenuName\":\"\u6500\u5ca9\",\"MenuChild\":\"25\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"34\",\"MenuId\":\"34\",\"MenuName\":\"\u5065\u884c\",\"MenuChild\":\"25\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"2\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"35\",\"MenuId\":\"35\",\"MenuName\":\"\u5f92\u6b65\u767b\u5c71\u8d8a\u91ce\",\"MenuChild\":\"25\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"3\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t\t\t]\n" +
    "\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t{\"RN\":\"26\",\"MenuId\":\"26\",\"MenuName\":\"\u904b\u52d5\u4f11\u9592\u8207\u5065\u8d70\",\"MenuChild\":\"9\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"36\",\"MenuId\":\"36\",\"MenuName\":\"\u81ea\u7531\u6f5b\u6c34\",\"MenuChild\":\"26\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"37\",\"MenuId\":\"37\",\"MenuName\":\"\u6c34\u80ba\u6f5b\u6c34\",\"MenuChild\":\"26\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"38\",\"MenuId\":\"38\",\"MenuName\":\"\u7acb\u5f0f\u6f3f\u677f\",\"MenuChild\":\"26\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"2\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t\t\t]\n" +
    "\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t{\"RN\":\"27\",\"MenuId\":\"27\",\"MenuName\":\"\u904b\u52d5\u935b\u934a\u8207\u8a13\u7df4\",\"MenuChild\":\"9\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"2\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"39\",\"MenuId\":\"39\",\"MenuName\":\"\u6240\u6709\u904b\u52d5\",\"MenuChild\":\"27\",\"isChild\":\"0\",\"isAll\":\"1\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t\t\t]\n" +
    "\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t{\"RN\":\"28\",\"MenuId\":\"28\",\"MenuName\":\"\u9ad4\u9069\u80fd\u8207\u5065\u8eab\",\"MenuChild\":\"9\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"3\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"40\",\"MenuId\":\"40\",\"MenuName\":\"\u6240\u6709\u904b\u52d5\",\"MenuChild\":\"28\",\"isChild\":\"0\",\"isAll\":\"1\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t\t\t]\n" +
    "\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t{\"RN\":\"29\",\"MenuId\":\"29\",\"MenuName\":\"\u90fd\u6703\u751f\u6d3b\u8207\u5065\u5eb7\",\"MenuChild\":\"9\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"4\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"41\",\"MenuId\":\"41\",\"MenuName\":\"\u6240\u6709\u904b\u52d5\",\"MenuChild\":\"29\",\"isChild\":\"0\",\"isAll\":\"1\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t\t\t]\n" +
    "\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t{\"RN\":\"30\",\"MenuId\":\"30\",\"MenuName\":\"\u6240\u6709\u904b\u52d5\",\"MenuChild\":\"9\",\"isChild\":\"0\",\"isAll\":\"1\",\"MenuLink\":null,\"MenuEq\":\"5\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t{\"RN\":\"31\",\"MenuId\":\"31\",\"MenuName\":\"\u914d\u4ef6\",\"MenuChild\":\"9\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"6\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t]\n" +
    "\t\t\t\t},\n" +
    "\t\t\t\t{\"RN\":\"10\",\"MenuId\":\"10\",\"MenuName\":\"\u54c1\u724c\u6545\u4e8b\",\"MenuChild\":\"6\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/suunto.empy.test\",\"MenuEq\":\"1\",\"MenuDel\":null},\n" +
    "\t\t\t\t{\"RN\":\"21\",\"MenuId\":\"21\",\"MenuName\":\"\u4f7f\u7528\u5c0f\u6280\u5de7\",\"MenuChild\":\"6\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/suunto.empy.test\\/skill\\/\",\"MenuEq\":\"2\",\"MenuDel\":null},\n" +
    "\t\t\t\t{\"RN\":\"22\",\"MenuId\":\"22\",\"MenuName\":\"\u540d\u4eba\u699c\",\"MenuChild\":\"6\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/suunto.empy.test\\/celebrity\\/\",\"MenuEq\":\"3\",\"MenuDel\":null},\n" +
    "\t\t\t\t{\"RN\":\"23\",\"MenuId\":\"23\",\"MenuName\":\"\u5192\u96aa\u6545\u4e8b\",\"MenuChild\":\"6\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/suunto.empy.test\\/adventurestory\\/\",\"MenuEq\":\"4\",\"MenuDel\":null},\n" +
    "\t\t\t\t{\"RN\":\"24\",\"MenuId\":\"24\",\"MenuName\":\"\u904b\u52d5\u77e5\u8b58\",\"MenuChild\":\"6\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/suunto.empy.test\\/sportknowledge\\/\",\"MenuEq\":\"5\",\"MenuDel\":null}\n" +
    "\t\t\t]\n" +
    "\t\t},\n" +
    "\t\t{\"RN\":\"7\",\"MenuId\":\"7\",\"MenuName\":\"Mio\",\"MenuChild\":\"1\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null,\n" +
    "\t\t\t\"Child\":\n" +
    "\t\t\t[\n" +
    "\t\t\t\t{\"RN\":\"11\",\"MenuId\":\"11\",\"MenuName\":\"\u7522\u54c1\u4ecb\u7d39\",\"MenuChild\":\"7\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t{\"RN\":\"42\",\"MenuId\":\"42\",\"MenuName\":\"\u6c7d\u8eca\u884c\u8eca\u7d00\u9304\u5668\",\"MenuChild\":\"11\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"45\",\"MenuId\":\"45\",\"MenuName\":\"\u5168\u7cfb\u5217\",\"MenuChild\":\"42\",\"isChild\":\"0\",\"isAll\":\"1\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t\t\t]\n" +
    "\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t{\"RN\":\"43\",\"MenuId\":\"43\",\"MenuName\":\"\u6a5f\u8eca\u884c\u8eca\u7d00\u9304\u5668\",\"MenuChild\":\"11\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"46\",\"MenuId\":\"46\",\"MenuName\":\"\u5168\u7cfb\u5217\",\"MenuChild\":\"43\",\"isChild\":\"0\",\"isAll\":\"1\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t\t\t{\"RN\":\"47\",\"MenuId\":\"47\",\"MenuName\":\"\u505c\u7522\u7d00\u9304\u5668\",\"MenuChild\":\"43\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t\t\t]\n" +
    "\t\t\t\t\t\t},\n" +
    "\t\t\t\t\t\t{\"RN\":\"44\",\"MenuId\":\"44\",\"MenuName\":\"\u914d\u4ef6\",\"MenuChild\":\"11\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"2\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t]\n" +
    "\t\t\t\t},\n" +
    "\t\t\t\t{\"RN\":\"12\",\"MenuId\":\"12\",\"MenuName\":\"\u54c1\u724c\u6545\u4e8b\",\"MenuChild\":\"7\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/mio.empy.test\",\"MenuEq\":\"1\",\"MenuDel\":null}\n" +
    "\t\t\t]\n" +
    "\t\t},\n" +
    "\t\t{\"RN\":\"8\",\"MenuId\":\"8\",\"MenuName\":\"ORO\",\"MenuChild\":\"1\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"2\",\"MenuDel\":null,\n" +
    "\t\t\t\"Child\":\n" +
    "\t\t\t[\n" +
    "\t\t\t\t{\"RN\":\"13\",\"MenuId\":\"13\",\"MenuName\":\"\u7522\u54c1\u4ecb\u7d39\",\"MenuChild\":\"8\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null,\n" +
    "\t\t\t\t\t\"Child\":\n" +
    "\t\t\t\t\t[\n" +
    "\t\t\t\t\t\t{\"RN\":\"15\",\"MenuId\":\"15\",\"MenuName\":\"LED \u4e3b\u6a5f\u578b\",\"MenuChild\":\"13\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t{\"RN\":\"16\",\"MenuId\":\"16\",\"MenuName\":\"\u5f8c\u7167\u93e1\u578b\",\"MenuChild\":\"13\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t{\"RN\":\"17\",\"MenuId\":\"17\",\"MenuName\":\"\u5f71\u97f3\u578b\",\"MenuChild\":\"13\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"2\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t{\"RN\":\"18\",\"MenuId\":\"18\",\"MenuName\":\"HUD \u62ac\u982d\u986f\u793a\u578b\",\"MenuChild\":\"13\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"3\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t{\"RN\":\"19\",\"MenuId\":\"19\",\"MenuName\":\"\u76f2\u585e\u578b\",\"MenuChild\":\"13\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"4\",\"MenuDel\":null},\n" +
    "\t\t\t\t\t\t{\"RN\":\"20\",\"MenuId\":\"20\",\"MenuName\":\"\u8eca\u5ee0\u5c08\u7528\u578b\",\"MenuChild\":\"13\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"5\",\"MenuDel\":null}\n" +
    "\t\t\t\t\t]\n" +
    "\t\t\t\t},\n" +
    "\t\t\t\t{\"RN\":\"14\",\"MenuId\":\"14\",\"MenuName\":\"\u54c1\u724c\u6545\u4e8b\",\"MenuChild\":\"8\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/oro.empy.test\",\"MenuEq\":\"1\",\"MenuDel\":null}\n" +
    "\t\t\t]\n" +
    "\t\t}\n" +
    "\t]\n" +
    "},\n" +
    "{\"RN\":\"2\",\"MenuId\":\"2\",\"MenuName\":\"\u652f\u63f4\u670d\u52d9\",\"MenuChild\":\"0\",\"isChild\":\"1\",\"isAll\":null,\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null,\n" +
    "\t\"Child\":\n" +
    "\t[\n" +
    "\t\t{\"RN\":\"48\",\"MenuId\":\"48\",\"MenuName\":\"\u6703\u54e1\u4e2d\u5fc3\",\"MenuChild\":\"2\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/www.empy.test\\/member\\/\",\"MenuEq\":\"0\",\"MenuDel\":null},\n" +
    "\t\t{\"RN\":\"49\",\"MenuId\":\"49\",\"MenuName\":\"\u7522\u54c1\u8a3b\u518a\",\"MenuChild\":\"2\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/www.empy.test\\/member\\/?act=ProductReg\",\"MenuEq\":\"1\",\"MenuDel\":null},\n" +
    "\t\t{\"RN\":\"50\",\"MenuId\":\"50\",\"MenuName\":\"\u5e38\u898b\u554f\u984c\",\"MenuChild\":\"2\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/www.empy.test\\/qa\\/\",\"MenuEq\":\"2\",\"MenuDel\":null},\n" +
    "\t\t{\"RN\":\"51\",\"MenuId\":\"51\",\"MenuName\":\"\u7522\u54c1\u652f\u63f4\",\"MenuChild\":\"2\",\"isChild\":\"1\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"3\",\"MenuDel\":null,\n" +
    "\t\t\t\"Child\":\n" +
    "\t\t\t[\n" +
    "\t\t\t\t{\"RN\":\"53\",\"MenuId\":\"53\",\"MenuName\":\"SUUNTO\",\"MenuChild\":\"51\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"0\",\"MenuDel\":null},\n" +
    "\t\t\t\t{\"RN\":\"54\",\"MenuId\":\"54\",\"MenuName\":\"Mio\",\"MenuChild\":\"51\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"1\",\"MenuDel\":null},\n" +
    "\t\t\t\t{\"RN\":\"55\",\"MenuId\":\"55\",\"MenuName\":\"ORO\",\"MenuChild\":\"51\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":null,\"MenuEq\":\"2\",\"MenuDel\":null}\n" +
    "\t\t\t]\n" +
    "\t\t},\n" +
    "\t\t{\"RN\":\"52\",\"MenuId\":\"52\",\"MenuName\":\"\u7dad\u4fee\u7533\u8acb\",\"MenuChild\":\"2\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/www.empy.test\\/repair\\/\",\"MenuEq\":\"4\",\"MenuDel\":null}\n" +
    "\t]\n" +
    "},\n" +
    "{\"RN\":\"3\",\"MenuId\":\"3\",\"MenuName\":\"\u4f55\u8655\u8cfc\u8cb7\",\"MenuChild\":\"0\",\"isChild\":\"1\",\"isAll\":null,\"MenuLink\":null,\"MenuEq\":\"2\",\"MenuDel\":null,\n" +
    "\t\"Child\":\n" +
    "\t[\n" +
    "\t\t{\"RN\":\"56\",\"MenuId\":\"56\",\"MenuName\":\"5hM1 \u8cfc\u7269\u4e2d\u5fc3\",\"MenuChild\":\"3\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/www.5hm1.com.tw\\/\",\"MenuEq\":\"0\",\"MenuDel\":null},\n" +
    "\t\t{\"RN\":\"57\",\"MenuId\":\"57\",\"MenuName\":\"\u4e00\u822c\u901a\u8def\",\"MenuChild\":\"3\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/www.empy.test\\/querydealer\\/\",\"MenuEq\":\"1\",\"MenuDel\":null},\n" +
    "\t\t{\"RN\":\"58\",\"MenuId\":\"58\",\"MenuName\":\"\u7db2\u969b\u901a\u8def\",\"MenuChild\":\"3\",\"isChild\":\"0\",\"isAll\":\"0\",\"MenuLink\":\"https:\\/\\/www.empy.test\\/echannel\\/\",\"MenuEq\":\"2\",\"MenuDel\":null}\n" +
    "\t]\n" +
    "},\n" +
    "{\"RN\":\"4\",\"MenuId\":\"4\",\"MenuName\":\"\u611b\u514b\u8cfd\u4e8b\",\"MenuChild\":\"0\",\"isChild\":\"0\",\"isAll\":null,\"MenuLink\":\"https:\\/\\/exercise.empyrean.tw\\/Exercise_User\\/\",\"MenuEq\":\"3\",\"MenuDel\":null},\n" +
    "{\"RN\":\"5\",\"MenuId\":\"5\",\"MenuName\":\"5hM1\u8cfc\u7269\u4e2d\u5fc3\",\"MenuChild\":\"0\",\"isChild\":\"0\",\"isAll\":null,\"MenuLink\":\"https:\\/\\/www.5hm1.com.tw\",\"MenuEq\":\"4\",\"MenuDel\":null}\n" +
    "]"
}
const menuList = JSON.parse(menuData.data)
console.log(menuList);
// const menuContainer = document.createElement("ul")
// menuContainer.classList.add('nav-menu')
const menuContainer = document.querySelector('.nav-menu')

function renderLi(data) {
  for(let i=0;i<data.length;i++){
    const li = document.createElement('li')
    const alink = document.createElement('a')
    alink.className='menuToggle lv1Menu'
    alink.textContent = data[i].MenuName
    li.appendChild(alink)
    if(data[i].isChild==='1'){
      li.appendChild(renderChildMenuLevel1(data[i].Child))
    }
    menuContainer.appendChild(li)
  }

  function renderChildMenuLevel1(arr) {
    const menuPanel = document.createElement('div')
    menuPanel.classList.add(`nav-menu-1`)
    for (let i=0;i<arr.length;i++){
      const aLink = document.createElement('a')
      aLink.className='dropdown-item'
      const div = document.createElement('div')
      div.textContent=arr[i].MenuName
      const span = document.createElement('span')
      span.className='iconfont icon_angle-right-light'
      aLink.appendChild(div)
      if(arr[i].isChild==='1'){
        aLink.classList.add('itemLevel1')
        aLink.appendChild(span)
        menuPanel.appendChild(aLink)
        menuPanel.appendChild(renderChildMenuLevel2(arr[i].Child))
      }else {
        menuPanel.appendChild(aLink)
      }

    }
    return menuPanel
  }

  function renderChildMenuLevel2(arr) {
    const menuPanel = document.createElement('div')
    menuPanel.classList.add(`nav-menu-2`)
    for (let i=0;i<arr.length;i++){
      const aLink = document.createElement('a')
      aLink.className='dropdown-item'
      const div = document.createElement('div')
      div.textContent=arr[i].MenuName
      const span = document.createElement('span')
      span.className='iconfont icon_angle-right-light'
      aLink.appendChild(div)
      if(arr[i].isChild==='1'){
        aLink.classList.add('itemLevel2')
        aLink.appendChild(span)
        menuPanel.appendChild(aLink)
        menuPanel.appendChild(renderChildMenuLevel3(arr[i].Child))
      }else {
        menuPanel.appendChild(aLink)
      }
    }
    return menuPanel
  }

  function renderChildMenuLevel3(arr) {
    const menuPanel = document.createElement('div')
    menuPanel.classList.add(`nav-menu-3`)
    for (let i=0;i<arr.length;i++){
      const aLink = document.createElement('a')
      aLink.className='dropdown-item'
      const div = document.createElement('div')
      div.textContent=arr[i].MenuName
      const span = document.createElement('span')
      span.className='iconfont icon_angle-right-light'
      aLink.appendChild(div)
      if(arr[i].isChild==='1'){
        aLink.classList.add('itemLevel3')
        aLink.appendChild(span)
        menuPanel.appendChild(aLink)
        menuPanel.appendChild(renderChildMenuLevel4(arr[i].Child))
      }else {
        menuPanel.appendChild(aLink)
      }
    }
    return menuPanel
  }

  function renderChildMenuLevel4(arr) {
    const menuPanel = document.createElement('div')
    menuPanel.classList.add(`nav-menu-4`)
    for (let i=0;i<arr.length;i++){
      const aLink = document.createElement('a')
      aLink.className='dropdown-item'
      const div = document.createElement('div')
      div.textContent=arr[i].MenuName
      const span = document.createElement('span')
      span.className='iconfont icon_angle-right-light'
      aLink.appendChild(div)
      if(arr[i].isChild==='1'){
        aLink.appendChild(span)
      }
      menuPanel.appendChild(aLink)
    }
    return menuPanel
  }

  function navStart() {
    const menuWidth = 200
// click event
    $('.menuToggle').on('click mouseenter', function (e) {
      e.preventDefault();
      e.stopPropagation();
      // console.log($(this));
      $(this).addClass('activated').next().show().addClass('activated');
    });
    $('.itemLevel1').on('click mouseenter', function (e) {
      e.preventDefault();
      e.stopPropagation();
      // console.log($(this));
      $(this).addClass('activated').next().show().addClass('activated').css({left:menuWidth});
    });
    $('.itemLevel2').on('click mouseenter', function (e) {
      e.preventDefault();
      e.stopPropagation();
      // console.log($(this));
      $(this).addClass('activated').next().show().addClass('activated').css({left:menuWidth});
    });
    $('.itemLevel3').on('click mouseenter', function (e) {
      e.preventDefault();
      e.stopPropagation();
      // console.log($(this));
      $(this).addClass('activated').next().show().addClass('activated').css({left:menuWidth});
    });

// leave event
    $('.menuToggle').on('mouseleave', function (e) {
      const thisObi = $(this), theObj = $(e.relatedTarget);
      if (!($(theObj).hasClass('activated') || $(theObj).hasClass('nav-menu-1') || $(theObj).parent().hasClass('nav-menu-1'))) {
        $(thisObi).removeClass('activated').next().hide().removeClass('activated');
      }
    });

    $('.itemLevel1').on('mouseleave', function (e) {
      const thisObi = $(this), theObj = $(e.relatedTarget);
      if (!($(theObj).hasClass('activated') || $(theObj).hasClass('nav-menu-2') || $(theObj).parent().hasClass('nav-menu-2'))) {
        $(thisObi).removeClass('activated').next().hide().removeClass('activated');
      }
    });
    $('.itemLevel2').on('mouseleave', function (e) {
      const thisObi = $(this), theObj = $(e.relatedTarget);
      if (!($(theObj).hasClass('activated') || $(theObj).hasClass('nav-menu-3') || $(theObj).parent().hasClass('nav-menu-3'))) {
        $(thisObi).removeClass('activated').next().hide().removeClass('activated');
      }
    });
    $('.itemLevel3').on('mouseleave', function (e) {
      const thisObi = $(this), theObj = $(e.relatedTarget);
      if (!($(theObj).hasClass('activated') || $(theObj).hasClass('nav-menu-4') || $(theObj).parent().hasClass('nav-menu-4'))) {
        $(thisObi).removeClass('activated').next().hide().removeClass('activated');
      }
    });

// nav-menu-level leave event
    $('.nav-menu-1').on('mouseleave', function (e) {
      const thisObi = $(this), theObj = $(e.relatedTarget);
      // console.log(theObj);
      if (!$(theObj).hasClass('activated')) {
        $(thisObi).removeClass('activated').hide().prev().removeClass('activated');
      }
    });
    $('.nav-menu-2').on('mouseleave', function (e) {
      const thisObi = $(this), theObj = $(e.relatedTarget);

      if (!$(theObj).hasClass('activated')) {
        $(thisObi).removeClass('activated').hide().prev().removeClass('activated');
      }
    });
    $('.nav-menu-3').on('mouseleave', function (e) {
      const thisObi = $(this), theObj = $(e.relatedTarget);

      if (!$(theObj).hasClass('activated')) {
        $(thisObi).removeClass('activated').hide().prev().removeClass('activated');
      }
    });
    $('.nav-menu-4').on('mouseleave', function (e) {
      const thisObi = $(this), theObj = $(e.relatedTarget);

      if (!$(theObj).hasClass('activated')) {
        $(thisObi).removeClass('activated').hide().prev().removeClass('activated');
      }
    });

  }

  navStart()
}

renderLi(menuList)

