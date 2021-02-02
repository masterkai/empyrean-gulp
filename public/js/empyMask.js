// Create Empy-mask & Empy-modal
const mask = document.createElement('div')
mask.className = "Empy-mask"
const modal = document.createElement('div')
modal.className = "Empy-modal"
mask.appendChild(modal)


function SubScribeModal() {
  const subscribeBody = `
        <div class="Empy-modal-body">
            <div class="subscriber">
                <label for="exampleFormControlInput1" class="form-label">您的電子郵件信箱</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                    請留下正確郵件地址，謝謝!!
                </div>
            </div>
            <div style="padding: 24px 0 0">
                <button class="btn btn-empy-link cancelSubscribe">取消</button>
                <button class="btn btn-empy-link subscribeButton">訂閱</button>
            </div>
        </div>
`
  const subscribeBtn = document.getElementById('subscribe')?document.getElementById('subscribe'):null
  subscribeBtn&&subscribeBtn.addEventListener('click', () => {
    modal.textContent = ''
    modal.className = "Empy-modal Empy-modal--news-subscribe"
    modal.insertAdjacentHTML('afterbegin', subscribeBody)
    document.body.insertAdjacentElement('beforebegin', mask)
    const cancelBtn = document.querySelector('.cancelSubscribe')
    const subscribeBtn = document.querySelector('.subscribeButton')
    cancelBtn.addEventListener('click', () => {
      mask.classList.remove('show')
    })
    subscribeBtn.addEventListener('click', () => {
      mask.classList.remove('show')
    })
    mask.classList.add('show')
  })
}

function SocialModal() {
  const cardTitle = 'Test Title'
  const cardDesc = 'Dramatically monetize collaborative benefits with resource maximizing initiatives. Completely deliver standardized human capital for backward-compatible e-markets. Interactively repurpose high.'
  const socialShareBody = `
  <div class="Empy-modal-header">
      <div class="title">分享</div>
      <span class="iconfont icon_times-light"></span>
  </div>
  <div class="Empy-modal-body">
      <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
              <div class="col-md-4">
                  <div class="newsImage"
                       style="background-image: url(build/images/news/BlackFriday__500x330.png)">
                  </div>
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${cardTitle}</h5>
                      <p class="card-desc">${cardDesc}</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="socialIconContainer">
          <div class="socialLink">
              <span class="iconfont icon_facebook-brands"></span>
              <div class="socialLinkName">Facebook</div>
          </div>
          <div class="socialLink">
              <span class="iconfont icon_twitter-brands"></span>
              <div class="socialLinkName">twitter</div>
          </div>
          <div class="socialLink">
              <span class="iconfont icon_line-messenger"></span>
              <div class="socialLinkName">LINE</div>
          </div>
      </div>
  </div>
`
  const socialBtn = document.querySelector('#socialBtn')?document.querySelector('#socialBtn'):null
  socialBtn&&socialBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.className = 'Empy-modal Empy-modal--news-share'
    modal.textContent = ''
    modal.insertAdjacentHTML('afterbegin', socialShareBody)

    document.body.insertAdjacentElement('beforebegin', mask)
    const closeBtn = document.querySelector('.Empy-modal-header .icon_times-light')
    closeBtn.addEventListener('click', () => {
      mask.classList.remove('show')
    })

    mask.classList.add('show')

  })
}
