function Tabs(elementId) {
  const state = {
    last: 0
  }
  const tabs = document.querySelectorAll(`${elementId} .EmpyTabs-flexContainer .EmpyTab`)
  const Panels = document.querySelectorAll(`${elementId} .EmpyPanels-flexContainer .EmpyPanel`)

  tabs.forEach((item, index) => {
    item.addEventListener('click', () => {
      Panels[state.last].style.display = 'none'
      Panels[index].style.display = 'block'
      state.last = index
      if (item.classList.contains('active')) {
        return
      }
      tabs.forEach(item => {
        item.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}