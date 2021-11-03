document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-work__tab').forEach(function(tabContent) {
        tabContent.classList.remove('is-active-tab')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active-tab')
    })
  })
})
