(function () {
  document.querySelectorAll('soundcloud-player[track-id]').forEach((playerEl) => {
    const trackId = playerEl.getAttribute('track-id')
    const themeColor = getComputedStyle(playerEl).getPropertyValue('--theme-brand')
    const soundCloudEmbed = `
      <iframe width="100%" height="300" scrolling="no" frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=${encodeURIComponent(themeColor)}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    `
    playerEl.innerHTML = soundCloudEmbed
  })
})()
